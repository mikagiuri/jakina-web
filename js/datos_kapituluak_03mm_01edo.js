/* JAKINA · kapitulua «B6.1 - EDO: oinarriak eta lehen ordena (1.-2. gaiak)» (03mm_01edo), desde edicion2/kapituluak/03mm_01edo/03mm_01edo.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_01edo"] = {
 "gakoa": "03mm_01edo",
 "titulua": "JAKINA - B6 - Metodo matematikoak - 1/9",
 "azala": "B6.1 - EDO: oinarriak eta lehen ordena (1.-2. gaiak)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/03mm_01edo/03mm_01edo.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Metodo matematikoak",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Fisikarako azken tresna-kutxa, ate-joka dagoen fisikaren neurrira: ekuazio diferentzialak (Newtonen bigarren legea, osziladorea, RLC zirkuitua eta uhin-ekuazioa denak forma bera dute) eta probabilitatea (neurketen tratamendurako eta IV. aroko fisika estatistikorako ezinbestekoa)."
    }
   ],
   "edukia": [
    "Ekuazio diferentzial arruntak: lehen ordena, linealak, sistemak",
    "Laplace-ren transformatua eta serie bidezko soluzioak",
    "Egonkortasuna eta Sturm–Liouville",
    "Probabilitatea eta estatistika"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M20",
   "izenburua": "Ekuazio diferentzial arruntak",
   "maila": "TRESNAK"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Ekuazio diferentzial bat sailkatu eta bere ordena identifikatu.",
    "Lehen ordenako ekuazioak ebatzi: banangarriak, linealak, zehatzak.",
    "Koefiziente konstanteko ekuazio linealak ebatzi.",
    "Sistema linealak eta Laplace-ren transformatua erabili."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M14 — Integralak; M11 — Diagonalizazioa"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "edf_eus",
   "xehetasuna": "1.–4. kapituluak",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ekuazio diferentzialen oinarrizko kontzeptuak",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ekuazio diferentzialen ikastaroa</strong><br>A1.5 maila: sarrerakoa, zorrotza eta eskuragarria"
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Ideia orokorra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ekuazio diferentziala</strong> ekuazio bat da, non funtzio ezezagun bat agertzen baita bere deribatu batekin edo gehiagorekin batera."
    },
    {
     "mota": "testua",
     "html": "Ekuazio aljebraiko batean, normalean zenbaki bat bilatzen dugu. Ekuazio diferentzial batean, funtzio bat bilatzen dugu."
    },
    {
     "mota": "testua",
     "html": "Adibidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ez da <math display=\"inline\"><mi>y</mi></math>-ren balio zehatz bati buruzko galdera; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio bat bilatzen du, haren deribatuak eta haren balioak erlazio hori bete dezaten."
    },
    {
     "mota": "testua",
     "html": "Beste adibide bat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bere bigarren deribatua jatorrizko funtzioaren aurkakoa duten funtzioak bilatzen ditu."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "2. Zergatik dira garrantzitsuak?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio diferentzialak magnitude bat aldatzen denean eta aldaketa hori deskribatu nahi dugunean agertzen dira."
    },
    {
     "mota": "testua",
     "html": "Ohiko adibideak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "populazio baten hazkundea;",
      "gorputz baten hoztea;",
      "objektu baten erorketa;",
      "malguki baten higidura;",
      "beroaren hedapena;",
      "epidemia baten bilakaera;",
      "zirkuitu elektrikoak;",
      "eredu ekonomikoak."
     ]
    },
    {
     "mota": "testua",
     "html": "Ideia nagusia honela laburbil daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldaketa-legea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ekuazio diferentziala </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> funtzio soluzioa </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adibidez, populazio bat bere tamainarekiko proportzionala den abiaduran hazten bada, honelako ekuazio bat idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> populazioa da, <math display=\"inline\"><mi>t</mi></math> denbora da eta <math display=\"inline\"><mi>k</mi></math> proportzionaltasun-konstantea."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "3. Funtzio ezezaguna eta aldagai independentea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Honelako ekuazio batean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "aldagai independentea <math display=\"inline\"><mi>x</mi></math> da."
    },
    {
     "mota": "testua",
     "html": "Funtzio ezezaguna <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></math> deribatuak adierazten du nola aldatzen den <math display=\"inline\"><mi>y</mi></math>  <math display=\"inline\"><mi>x</mi></math> aldatzen denean."
    },
    {
     "mota": "testua",
     "html": "Honela ere idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi notazioek gauza bera esan nahi dute aldagai independentea argi dagoenean."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "4. Ekuazio diferentzial baten soluzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Soluzioa</strong> funtzio bat da: ekuazioan ordezkatzean, berdintza egiazko bihurtzen du."
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzio bat hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina hauek ere soluzioak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horregatik ekuazio diferentzial askok <strong>soluzio-familia</strong> bat dute."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "5. Soluzio orokorra eta soluzio partikularra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Soluzio orokorrak</strong> konstante arbitrarioak ditu."
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera badakigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "orduan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>5</mn><mo>=</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <strong>soluzio partikularra</strong> hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "6. Hasierako balioaren problema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Hasierako balioaren problemak</strong> bi osagai elkartzen ditu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "ekuazio diferentzial bat;",
      "hasierako baldintza bat."
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioak funtzioa nola aldatzen den esaten du."
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzak soluzio-familiaren barruan soluzio zehatz bat finkatzen du."
    },
    {
     "mota": "testua",
     "html": "Kasu honetan, soluzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik igarotzen den funtzio esponentzial bat izango da."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "7. Ekuazio diferentzial baten ordena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial baten <strong>ordena</strong> agertzen den deribatu altuenaren ordena da."
    },
    {
     "mota": "testua",
     "html": "Adibideak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lehen ordenakoa da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bigarren ordenakoa da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>−</mo><mn>2</mn><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hirugarren ordenakoa da."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "8. EDO eta EDP",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ekuazio diferentzial arruntak</strong> edo <strong>EDO</strong> aldagai independente bakarrarekiko deribatuak ditu."
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Deribatu partzialetako ekuazioak</strong> edo <strong>EDP</strong> hainbat aldagai independenteekiko deribatu partzialak ditu."
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen funtzio ezezaguna <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> aldagaiak posizio bat adieraz dezake, eta <math display=\"inline\"><mi>t</mi></math> aldagaiak denbora."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "9. Linealtasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial bat <strong>lineala</strong> da funtzio ezezaguna eta haren deribatuak lehen mailan bakarrik agertzen badira eta elkarrekin biderkatuta ez badaude."
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako forma tipikoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adibide linealak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adibide ez-linealak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehenengoan <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> agertzen da."
    },
    {
     "mota": "testua",
     "html": "Bigarrenean <math display=\"inline\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> biderkadura agertzen da."
    },
    {
     "mota": "testua",
     "html": "Hirugarrenean <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> agertzen da, ezezagunaren funtzio ez-lineal bat."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Homogeneoa eta ez-homogeneoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio linealetan, ekuazio bat <strong>homogeneoa</strong> da gai independentea zero denean."
    },
    {
     "mota": "testua",
     "html": "Adibide homogeneoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adibide ez-homogeneoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aldea garrantzitsua da, ebazpen-teknikak aldatu egiten direlako."
    },
    {
     "mota": "testua",
     "html": "Ekuazio ez-homogeneo batean bi zati egon ohi dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio orokorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio homogeneoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio partikularra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ideia hori argi agertuko da bigarren ordenako gaietan."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "11. Gradua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Gradua</strong> ordena handieneko deribatuaren potentzia da, baldin eta ekuazioa deribatuekiko polinomikoa bada."
    },
    {
     "mota": "testua",
     "html": "Adibidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordena: 2."
    },
    {
     "mota": "testua",
     "html": "Gradua: 3."
    },
    {
     "mota": "testua",
     "html": "Baina honetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "gradua ez dago modu elementalean definituta, deribatua funtzio trigonometriko baten barruan agertzen delako."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "12. Interpretazio geometrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen ordenako ekuazio diferentzial bat, adibidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "geometrikoki interpreta daiteke."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntu bakoitzean, ekuazioak soluzio-kurbak izan behar duen malda adierazten du."
    },
    {
     "mota": "testua",
     "html": "Adibidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "esan nahi du malda <math display=\"inline\"><mi>x</mi></math>-ren menpe bakarrik dagoela."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> denean, malda <math display=\"inline\"><mn>0</mn></math> da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> denean, malda <math display=\"inline\"><mn>1</mn></math> da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> denean, malda <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Soluzioa puntu bakoitzean adierazitako maldari jarraitzen dion kurba bat da."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "13. Adibide ebatziak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. adibidea"
    },
    {
     "mota": "testua",
     "html": "Sailkatu ekuazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioa:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "EDO bat da, aldagai independente bakarra agertzen delako.",
      "Lehen ordenakoa da, deribatu altuena <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> delako.",
      "Lineala da, <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> lehen mailan agertzen direlako.",
      "Homogeneoa da, gai independentea zero delako."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. adibidea"
    },
    {
     "mota": "testua",
     "html": "Sailkatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioa:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "EDO bat da.",
      "Bigarren ordenakoa da.",
      "Lineala da.",
      "Ez-homogeneoa da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> agertzen delako."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. adibidea"
    },
    {
     "mota": "testua",
     "html": "Sailkatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioa:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "EDO bat da.",
      "Lehen ordenakoa da.",
      "Ez da lineala, <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> agertzen delako.",
      "Homogeneoa/ez-homogeneoa bereizketa, ohiko zentzu linealean, ez da zuzenean aplikatzen."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "4. adibidea"
    },
    {
     "mota": "testua",
     "html": "Egiaztatu ea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "honako ekuazioaren soluzioa den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, bai, soluzioa da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "5. adibidea"
    },
    {
     "mota": "testua",
     "html": "Egiaztatu ea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "honako ekuazioaren soluzioa den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioarekin bat dator."
    },
    {
     "mota": "testua",
     "html": "Hortaz, bai, soluzioa da."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "14. Ohiko akatsak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. akatsa: soluzioa zenbaki batekin nahastea"
    },
    {
     "mota": "testua",
     "html": "Oinarrizko aljebran, ebazteak zenbaki bat aurkitzea esan ohi du."
    },
    {
     "mota": "testua",
     "html": "Adibidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mn>7</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "soluzio hau du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferentzialetan, ebazteak funtzio bat aurkitzea esan nahi du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. akatsa: konstantea ahaztea"
    },
    {
     "mota": "testua",
     "html": "Honetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ez da nahikoa hau idaztea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorra hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. akatsa: linealtasuna gaizki sailkatzea"
    },
    {
     "mota": "testua",
     "html": "Ekuazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lineala da."
    },
    {
     "mota": "testua",
     "html": "Nahiz eta <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> agertu, <math display=\"inline\"><mi>x</mi></math> aldagaia ez da funtzio ezezaguna. Ezezaguna <math display=\"inline\"><mi>y</mi></math> da."
    },
    {
     "mota": "testua",
     "html": "Aldiz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ez da lineala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "4. akatsa: ordena eta gradua nahastea"
    },
    {
     "mota": "testua",
     "html": "Honetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ordena 2 da, <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> agertzen delako."
    },
    {
     "mota": "testua",
     "html": "Gradua 2 da, <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> karratura jasota dagoelako."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "15. Ariketak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. maila — Beroketa"
    },
    {
     "mota": "testua",
     "html": "1. Adierazi ekuazio bakoitzaren ordena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2. Esan EDO ala EDP diren:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "3. Egiaztatu ea <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> honako ekuazioaren soluzioa den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "4. Egiaztatu ea <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> honako ekuazioaren soluzioa den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. maila — Sendotzea"
    },
    {
     "mota": "testua",
     "html": "5. Sailkatu oso-osorik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "6. Sailkatu oso-osorik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>9</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "7. Sailkatu oso-osorik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "8. Zehaztu ekuazioa lineala ala ez-lineala den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "9. Zehaztu ekuazioa lineala ala ez-lineala den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "10. Aurkitu honen soluzio orokorra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "3. maila — Erronka"
    },
    {
     "mota": "testua",
     "html": "11. Aurkitu honen soluzio-familia bat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "12. Aurkitu baldintza hau betetzen duen soluzio partikularra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "13. Egiaztatu ea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "honako ekuazioaren soluzioa den:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "14. Sailkatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "15. Azaldu zure hitzekin ekuazio aljebraiko baten eta ekuazio diferentzial baten arteko aldea."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "16. Pistak eta soluzioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioak 1. ordena du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> ekuazioak 2. ordena du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> ekuazioak 3. ordena du."
    },
    {
     "mota": "testua",
     "html": "2."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> EDO bat da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> EDP bat da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> EDO bat da."
    },
    {
     "mota": "testua",
     "html": "3."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> bada, orduan <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math> denez, bai, soluzioa da."
    },
    {
     "mota": "testua",
     "html": "4."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> bada, orduan <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Bai, soluzioa da."
    },
    {
     "mota": "testua",
     "html": "5."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, lehen ordenakoa, lineala, ez-homogeneoa."
    },
    {
     "mota": "testua",
     "html": "6."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>9</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, bigarren ordenakoa, lineala, homogeneoa."
    },
    {
     "mota": "testua",
     "html": "7."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, lehen ordenakoa, ez-lineala."
    },
    {
     "mota": "testua",
     "html": "8."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lineala."
    },
    {
     "mota": "testua",
     "html": "9."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ez-lineala, <math display=\"inline\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> biderkadura agertzen delako."
    },
    {
     "mota": "testua",
     "html": "10."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "11."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "12."
    },
    {
     "mota": "testua",
     "html": "Hau denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>4</mn><mo>=</mo><msup><mn>0</mn><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "13."
    },
    {
     "mota": "testua",
     "html": "Hau bada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "orduan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bai, soluzioa da."
    },
    {
     "mota": "testua",
     "html": "14."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordena: 2."
    },
    {
     "mota": "testua",
     "html": "Gradua: 2."
    },
    {
     "mota": "testua",
     "html": "Ez-lineala da, ordena handieneko deribatua karratura jasota agertzen delako."
    },
    {
     "mota": "testua",
     "html": "15."
    },
    {
     "mota": "testua",
     "html": "Ekuazio aljebraiko batek zenbakiak bilatzen ditu."
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial batek funtzioak bilatzen ditu eta funtzio horiek beren aldaketekin erlazionatzen ditu."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "17. Laburpen-fitxa",
   "blokeak": [
    {
     "mota": "taula",
     "goiburua": [
      "<strong>Kontzeptua</strong>",
      "<strong>Ideia nagusia</strong>"
     ],
     "lerroak": [
      [
       "Ekuazio diferentziala"
      ],
      [
       "Funtzio ezezagun bat eta haren deribatuak dituen ekuazioa"
      ],
      [
       "EDO"
      ],
      [
       "Aldagai bakarrarekiko deribatuak"
      ],
      [
       "EDP"
      ],
      [
       "Hainbat aldagairekiko deribatu partzialak"
      ],
      [
       "Ordena"
      ],
      [
       "Agertzen den deribatu altuena"
      ],
      [
       "Soluzio orokorra"
      ],
      [
       "Konstanteak dituen soluzio-familia"
      ],
      [
       "Soluzio partikularra"
      ],
      [
       "Hasierako edo mugaldeko baldintzak betetzen dituen soluzioa"
      ],
      [
       "Lineala"
      ],
      [
       "Ezezaguna eta haren deribatuak lehen mailan agertzen dira eta ez daude biderkatuta"
      ],
      [
       "Ez-lineala"
      ],
      [
       "Ezezagunaren potentziak, biderkadurak edo funtzioak agertzen dira"
      ],
      [
       "Homogeneoa"
      ],
      [
       "Ekuazio lineal batean, gai independentea zero da"
      ],
      [
       "Ez-homogeneoa"
      ],
      [
       "Ekuazio lineal batean, kanpoko gai ez-nulu bat agertzen da"
      ]
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "18. Erabakiak hartzeko mini-gida",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial bat sailkatzeko, galdetu ordena honetan:"
    },
    {
     "mota": "testua",
     "html": "1. Ezezaguna funtzio bat al da? 2. Deribatuak agertzen al dira? 3. Aldagai independente bakarra dago ala hainbat? 4. Zein da ordena handieneko deribatua? 5. Ekuazioa lineala al da? 6. Lineala bada: homogeneoa ala ez-homogeneoa da? 7. Soluzio orokorra eskatzen da ala soluzio partikularra?"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "19. Gaiaren itxiera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen gai honek oraindik ez du ekuazio diferentzial asko ebazten irakasten, baina beharrezko hiztegia ezartzen du."
    },
    {
     "mota": "testua",
     "html": "Hurrengo gaitik aurrera lehen ebazpen-metodo handiarekin hasiko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, <strong>ekuazio banangarriak</strong>."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Oinarrizko kontzeptuak",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "Lehen kapitulu honetan ekuazio diferentzialei buruzko zenbait orokortasun aztertzen dira, hurrengo kapituluetan xehetasun handiagoz aztertuko direnak. Ekuazio diferentzialaren kontzeptua eta zein motatakoa izan daitekeen lehen sailkapena aurkeztuz hasiko gara. Ondoren, haien soluzioak agertzen diren era desberdinak aztertuko ditugu eta soluzioaren existentziari eta bakartasunari buruzko lehen oharrak egingo ditugu fisikan agertzen diren bi problema-familia nagusietan. Kapitulua ekuazio diferentzialak ebazteko metodoak sailkatuz amaituko dugu."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Ekuazio diferentzialak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio arrunt batean —diferentzialei kontrajarriz testu honetan <strong>finitu</strong> deituko duguna— hala nola <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> ez dira ezezagunaren deribatuak agertzen. Deribatu horietako bat agertzen denean, <strong>ekuazio diferentzial</strong> batez ari garela esango dugu. Adibide sinple bat <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> da, non, hemendik aurrera ohitura zabaldu bati jarraituz egingo dugun bezala, prima bat erabili dugun <math display=\"inline\"><mi>x</mi></math>-rekiko deribatua adierazteko: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>≡</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mi>x</mi></math>-rekiko deribatuak hartzen ditugunez, <math display=\"inline\"><mi>x</mi></math>  <strong>aldagai askea</strong> dela esaten dugu, eta ezezagunak (<math display=\"inline\"><mi>y</mi></math> kasu honetan)  <strong>aldagai mendekoa</strong> izena hartzen du. (1.2) ekuazioan aldagai aske bakarra dagoenez eta deribatua arrunta denez, <strong>ekuazio diferentzial arrunta</strong> dela esaten da, eta hala da pendulu matematikoaren ekuazioa ere: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken adierazpen honetan mekanikaren ohiturari jarraitu diogu: puntu bakoitzak <math display=\"inline\"><mi>t</mi></math>-rekiko deribatu bat adierazten du, <math display=\"inline\"><mi>t</mi></math> izanik (1.4) ekuazioaren aldagai askea: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> Une honetatik aurrera (1.3) eta (1.5) laburdurak bereizgabe erabiliko ditugu, deribaturako notazio osoaren noizbehinkako erabilerarekin txandakatuz. Fisikatik hartutako adibideak ere ugariak izango dira, eta horrek ez gintuzke harritu behar, testu hau zein irakurlerentzat den kontuan hartzeaz gain, ekuazio diferentzialen historia eta aplikazioak fisikari banaezinki lotuta daudela kontuan hartzen badugu: aski da Newton 1642ko Eguberri egunean jaio zen (1643ko urtarrilaren 4an egutegi gregoriarrean) Woolsthorpen (Ingalaterra) eta 1727ko martxoaren 31n hil zen Londresen. Bere obra nagusia, _Philosophiae Naturalis Principia Mathematica_  (1687), eztabaidarik gabe garai guztietako liburu zientifiko garrantzitsuen eta eragin handienekotzat jotzen da. Bertan mekanikaren eta grabitazio unibertsalaren teoriaren oinarriak ezarri zituen. Leibnizekin batera, kalkulu diferentzialaren sortzailea izan zen, berak *fluxio* deitu zuena. Optikari egindako ekarpena ere apartekoa da eta teleskopio islatzailea eta bere _Opticks_  (1704) eragin handikoa biltzen ditu. Bere izena beste hainbat testuingurutan agertzen da, koadratura numerikoa, binomioaren berreduren garapena eta Barrow-en erregela barne, zeini Cambridgen _Lucasian Professor_ gisa ondorenduko baitzion.  beraren ekarpenak gogoratzea, edo ekuazio diferentzialek fisikariaren tresna matematikoen artean jokatzen duten zeregin nagusia."
    },
    {
     "mota": "testua",
     "html": "Arrunta da, halaber, bi gorputzeko sistema batean mugimendu erlatiboa deskribatzen duen Newtonen ekuazioa, baldin eta elkarrekiko elkarrekintza indar-eremu newtondar batek ematen badu: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Azken kasu honetan bektore bakoitzak hiru osagai dituenez, egiazki <strong>ekuazio diferentzialen sistema</strong> baten aurrean gaude: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>z</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> non aldagai mendekoak hiru baitira: <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>z</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Ekuazioak deribatu partzialak baditu, <strong>ekuazio diferentzial partzial</strong> deitzen zaio. Adibidez, Schrödingerren ekuazioan (1887-08-12, Viena; 1961-01-04, Alpbach, Austria). 1926an bere uhin-mekanikak, Heisenbergek 1925ean proposatu zuen matrize-mekanikarekin batera, mekanika kuantikoaren sorrera ekarri zuen, nahiz eta inoiz ez zuen onartu Born-ek eta Kopenhageko eskolak defendatzen zuten uhin-funtzioaren interpretazio probabilistikoa. Erradioaktibitatean, kristal-sareen dinamikan, fisika atomikoan eta erlatibitate orokorrean ere lan egin zuen. Diracekin partekatu zuen 1933ko Fisikako Nobel saria.  <math display=\"block\"><mrow><mi>i</mi><mi>ℏ</mi><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi>ψ</mi><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi></mrow></math> uhin-funtzioa <math display=\"inline\"><mi>ψ</mi></math> menpe dagoen aldagai askeak denbora <math display=\"inline\"><mi>t</mi></math> eta hiru espazio-koordenatuak dira, zeinak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> bektorean nahiz <math display=\"inline\"><msup><mi>∇</mi><mn>2</mn></msup></math> operadore laplacearreko deribazio-aldagai gisa agertzen baitira."
    },
    {
     "mota": "testua",
     "html": "Ekuazio baten <strong>ordena</strong> bertan agertzen den deribazio-ordenarik altuena dela esaten denez, aipatu berri ditugun penduluaren, Newtonen eta Schrödingerren ekuazioak bigarren ordenakoak dira, fisikako oinarrizko ekuazio gehienak bezala, (1.2) lehen ordenakoa den bitartean. Era berean, hutsean Maxwellen (1831-06-13, Edinburgo, Eskozia; 1879-11-05, Cambridge, Ingalaterra). Bere lehen ekarpen garrantzitsua Saturnoren eraztunak partikula ugariz osatuta egon behar zutela aurresatea izan zen, egonkorrak izateko. Boltzmannekin batera gasen teoria zinetikoaren sortzailea da, eta bere ekarpen hilezkorra, bere izena daramaten elektromagnetismoaren legeak, _A Treatise on Electricity and Magnetism_ liburuan agertu zen 1873an. Argia fenomeno uhin-elektromagnetikoa dela zioen bere proposamena esperimentalki baieztatu zuen Hertzek.  ekuazioek lehen ordenako ekuazio diferentzial partzialen sistema bat osatzen dute, bi aldagai mendeko bektorialekin (edo sei eskalarrekin): <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>ρ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mn>4</mn><mi>π</mi><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math> Schrödingerren eta Maxwellen ekuazioek gainezarpenaren printzipioa betetzen dute (soluzioen batura soluzioa da), zeina matematikoki haien izaera <strong>lineal</strong>ean islatzen baita: ezezagunak koefiziente konstanteekiko edo aldagai askeen menpe soilik dauden koefizienteekiko konbinazio linealen forman bakarrik agertzen dira. Funtzio ez-lineal bat, sinua, pendulu matematikoaren ekuazioan agertzeak hura ez-lineal bihurtzen du, oszilazio txikien hurbilketan izan ezik, non oszilatzaile harmonikora laburtzen baita: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ez da lineala (1.6) ekuazioa ere, ezta Einsteinen (1879-03-14, Ulm, Alemania; 1955-04-18, Princeton, AEB). Bere 1905eko ekarpenetako edozeinek ---efektu fotoelektrikoa azaltzeko argi-kuantuaren hipotesia (1921eko Nobel saria eman ziona), mugimendu browniarrari buruzko bi lanak, erlatibitate berezia ezarri zuen lana eta masa eta energiaren arteko baliokidetasuna finkatu zuena--- berez emango ziokeen ohorezko lekua fisikaren historian. 1906an egoera solidoaren teoria kuantikoko lehen lana idatzi zuen bero espezifikoak aztertzean. 1907an baliokidetasunaren printzipioa formulatzen du, 1916an gailenduko zen eta erlatibitate orokorraren teoria ezarriko zuen lan-sail bati hasiera emanez.  hutseko ekuazioak ere, zeinak, <math display=\"block\"><mrow><msub><mi>R</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> gisa idazten badira ere, itxura xume engainagarri horren azpian sistema oso ez-lineal bat ezkutatzen baitute."
    },
    {
     "mota": "testua",
     "html": "Ez da pentsatu behar ekuazio diferentzialek —finituekin batera— fisikan agertzen diren ekuazio mota guztiak agortzen dituztenik. Adibidez, 5. kapituluko 5.12 eta 5.16 problemetan ekuazio integro-diferentzialen kasu oso sinple bat ikusiko dugu, non ezezagunak edo haien deribatuak integralaren ikurraren azpian agertzen baitira, eta 5.31 probleman ekuazio diferentzial funtzionalen kasurik sinpleena agertzen da: atzerapenezko ekuazio diferentzialak, non ezezaguna eta haren deribatuak aldagai askearen balio desberdinetarako agertzen baitira."
    },
    {
     "mota": "testua",
     "html": "Une honetatik aurrera ekuazio diferentzial arruntak soilik hartuko ditugu kontuan eta deribatu partzialetako ekuazioak beste testu batzuetarako utziko ditugu."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Soluzio motak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hemen aztertuko ditugun kontzeptuak ekuazio-sistemetara berehala orokor daitezkeen arren, notazioa errazteko atal honetan <math display=\"inline\"><mi>n</mi></math> ordena arbitrarioko ekuazio diferentzial arrunt bakar bat aztertzera mugatuko gara, beti idatz daitekeena <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>″</mo></msup><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> gisa, <math display=\"inline\"><mi>F</mi></math> funtzio egoki baten bidez."
    },
    {
     "mota": "testua",
     "html": "(1.15) ekuazioaren <strong>soluzio esplizitu</strong> deitzen zaio aldagai askearen edozein funtziori, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> zeinak, ekuazio diferentzialean ordezkatuta, hura identitate bihurtzen baitu <math display=\"inline\"><mi>I</mi></math> tarte jakin batean, soluzioaren <strong>definizio-tartea</strong>  dena: <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>  (1.2) ekuazioaren soluzio esplizitua dela. Zein da bere definizio-tartea?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial baten soluzioa ez da beti aldagai mendekoa askaturik adierazten. Izan ere, askotan errazagoa da <strong>soluzio inplizitu</strong> bat aurkitzea, hau da, ekuazio finitu bat, <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non bere soluzio bakoitza <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (<math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi></mrow></math> delarik) ekuazio diferentzialaren soluzio esplizitua baita. Soluzio inplizituaren kontzeptua erabilgarria da, oro har, ez baita beharrezkoa (1.18)ren soluzio esplizituak aurkitzea, ekuazio diferentzialaren soluzioak diren ala ez ikus baitaiteke <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>g</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>g</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> identikoki betetzen dela egiaztatuz (1.18)ren ondorioz. Praktikan, askotan errazagoa da ekuazio diferentziala identitate bihurtzen dela egiaztatzea, bertan ekuazio finitua eta hura <math display=\"inline\"><mi>x</mi></math>-rekiko deribatuz lortzen direnak zuhurki ordezkatzen badira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>  ((1.18) forman idatz daitekeena, 1 beste gaira pasatuz besterik gabe)  (1.2)ren soluzio inplizitua dela. Ez askatu <math display=\"inline\"><mi>y</mi></math> egiaztapen hau egiteko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hala ere, kalkulatu behar ez bada ere, ziurtatu behar da (1.18) ekuazioaren soluzio esplizituren bat existitzen dela, bestela <strong>soluzio formal</strong> bat izango baikenuke."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>  (1.2)ren soluzio formala dela, gutxienez soluzio konplexurik onartzen ez badugu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio finituen soluzio parametrikoak ematea dagozkien soluzio esplizituak aurkitzea baino errazagoa denez askotan, ez litzateke harrigarria izan behar ekuazio diferentzialen <strong>soluzio parametrikoak</strong> ere erabilgarriak izatea, parametro baten bi funtziotan datzanak, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, zeinek ekuazio diferentziala identitate bihurtzen baitute, <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> parametroaren tarte jakin batean zehar."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>  (1.2)ren soluzio parametrikoa dela."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Soluzioen existentzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio diferentzial orok soluziorik ez duen arren (adibidez, agerikoa da bai <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> ekuazio finituak bai <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> diferentzialak soluzio errealik ez dutela), praktikan aurkitzen diren ekuazio diferentzialek soluzio asko dituzte, oro har. Izan ere, ohikoak dira <strong>soluzioen familia parametrikoak</strong>, hau da, aldagai askearekiko deribazioan konstanteak diren parametro batzuen menpe dauden soluzioak (esplizituak, inplizituak edo parametrikoak)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurrengo adierazpenek (1.2) ekuazioaren soluzioen familia uniparametrikoak definitzen dituztela: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math> Zein motatakoa da familia bakoitza?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>n</mi></math> ordenako ekuazio baten <strong>soluzio orokor</strong> deitzen zaio, hain zuzen ere, <math display=\"inline\"><mi>n</mi></math> parametro independenteren menpe dagoen edozein soluzio-familiari. Adibidez, aurreko ariketako soluzio guztiak soluzio orokorrak dira, parametro baten menpe baitaude eta ekuazioa lehen ordenakoa baita. Ariketa berak frogatzen du soluzio orokorra ez dela nahitaez bakarra. Argi dago, beraz, soluzio orokorra ez dela ekuazioaren soluzio guztien multzoaren sinonimoa, ekuazio linealetan izan ezik, ikusiko dugun bezala."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>2</mn><mi>C</mi></mrow></math> hurrengo ekuazioaren soluzio orokor inplizitua dela: <math display=\"block\"><mrow><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aurki dezakezu dagokion soluzio orokor esplizitua?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio-familia bateko (orokorra izan ala ez) parametroen balioen aukeraketa bakoitzeko <strong>soluzio partikular</strong> bat lortzen da. Hala, 1.5 ariketako (1.21), (1.23) eta (1.24) soluzio orokorretan <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>1</mn></mrow></math> hartuz, lehenago zenbait ariketatan aztertu ziren soluzio partikularrak lortzen dira. Ekuazio diferentzial baten soluzio bat, soluzio orokor jakin baten soluzio partikularra ez dena, hau da, soluzio orokorrean parametroen balioak egoki aukeratuz lor ezin daitekeena<span class=\"j-oin\">[ Oro har, parametroek <math display=\"inline\"><mrow><mi>±</mi><mi>∞</mi></mrow></math>-ra jotzen dutenean limiteak hartzea ere onartzen da, prozesu hau <math display=\"inline\"><mi>C</mi></math> parametro arbitrarioa beste <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>C</mi></mrow></math> parametro arbitrario batez ordezkatzearen eta <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> hartzearen baliokidea baita. ]</span> aztergai den orokorrarekiko <strong>soluzio singular</strong> bat dela esaten da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> honen soluzio orokorra dela: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Sailkatu partikular edo singular gisa ekuazio beraren hurrengo soluzioak: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Soluzioaren bakartasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko atalak agerian utzi du ekuazio diferentzialek normalean soluzio kopuru infinitua dutela. Ondorioz, aztertu nahi dugun problema fisiko zehatzari dagokiona identifikatzeko problema sortzen da. Bestela esanda, problema ez dago erabat planteatuta ekuazio diferentziala ezagutzen denean: beste datu batzuk beharrezkoak dira. Erraza da susmatzea, oro har, soluzio orokorrean agertzen diren parametroak adina datu (baldintza) gehigarri beharko direla."
    },
    {
     "mota": "testua",
     "html": "Datu gehigarri horiek emateko ohiko era bat aldagai mendekoaren balioak, <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta haren <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> lehen deribatuenak, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mi>…</mi></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, aldagai askearen balio jakin baterako, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, ematean datza. Orduan <strong>hasierako baldintzen problema</strong> edo <strong>Cauchyren problema</strong> planteatu dela esaten da. Adibidez, berehalakoa da egiaztatzea hasierako balioen problemak <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> onartzen dituela soluziotzat, soluzio orokorrean <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> aukeratuz lortzen direnak. Kontuan izan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> puntuari «hasierako» deitzen bazaio ere, ezerk ez duela eragozten ekuazioa atzerantz integratzea, hau da, <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> balioetarako."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> problemak ere bi soluzio onartzen dituela, eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> aukeratzen badugu, berriz, bat ere ez dagoela (erreala)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi adibide hauek zalantzarik gabe erakusten dute hasierako baldintzek ez dutela beti soluzioen existentzia eta bakartasuna bermatzen. Susma dezakegunez —zuzen— problemaren zati bat behintzat aurretik aztertutako ekuazio diferentzialean ordenarik altueneko deribatua karratura jasota egotetik datorrenez, har dezagun <strong>forma normalean</strong> idatzitako ekuazio bat, hau da, ordenarik altueneko deribatua askaturik duena. Honako motako hasierako baldintzen problema baten <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> soluzioaren existentzia eta bakartasuna sinesgarri egiteko, saia gaitezen soluzioa Taylor-en serie gisa eraikitzen hasierako baldintza eman den <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> puntuaren inguruan: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><mi>⋯</mi></mrow></math> Seriearen lehen koefizientea zuzenean ematen digu hasierako baldintzak, <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math>, zeinak, ekuazio diferentzialarekin eta haren deribatuekin batera, beste koefizienteak kalkulatzeko ere balio baitu: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jakina, eraikuntza-prozedura honek existentzia eta bakartasuna berma ditzan, garapenaren existentzia eta konbergentzia ziurtatzen duten baldintza matematikoak gehitu behar dira."
    },
    {
     "mota": "testua",
     "html": "Cauchyren beraren lanei jarraituz, Peanok (1858-08-27, Cuneo, Piemonte; 1932-04-20, Turin, Italia). Soluzioen existentziaren teoremaz gain, zenbaki naturalak multzoen bidez definitzen dituzten Peanoren axiomak eta karratu baten barnealdea erabat betetzen duten kurbak gogoratzen dira. Fregerekin batera logika matematikoaren sortzailea da eta zorroztasun matematikoari ematen zion garrantziagatik nabarmendu zen.  frogatu zuen <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren jarraitutasuna nahikoa dela soluzioen existentzia bermatzeko, baina hurrengo ariketak frogatzen du baldintza hori ez dela nahikoa bakartasuna ziurtatzeko, eta horrek existentziaren eta bakartasunaren teorema zehatzak testuinguru desberdinetan enuntziatzera behartuko gaitu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≤</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math> hasierako baldintzen problemaren bi soluzio desberdin direla: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Zein izan daiteke bakartasun-ezaren jatorria?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baldintza gehigarriak ez dira beti puntu bakar batean ematen. Aldagai askearen balio desberdinetarako ematen direnean, <strong>kontur-baldintzen problema</strong> planteatu dela esaten da. Aurrera dezakegu problema hau, oro har, hasierako baldintzena baino askoz zailagoa dela. (Adibidez, energiaren balio gehienetarako soluziorik eza da magnitude hori sistema kuantiko askotan kuantizatuta agertzearen arrazoia). Muga gaitezen hemen adibide ilustratibo oso sinple bat aztertzera."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu dimentsio bakarreko oszilatzaile harmoniko klasikoa aldagai adimentsional egokietan: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Egiaztatu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> soluzio orokorra dela eta onar dezagun, 3. kapituluan frogatu arte, soluzio posible guztiak biltzen dituela. Frogatu kontur-baldintzen problemen <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> soluzio kopurua, hurrenez hurren, bat, zero eta infinitua dela."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Ebazpen-metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Testu honen edukiaren zati garrantzitsu bat ekuazio diferentzialen soluzioak aurkitzeko aukera ematen duten metodoak deskribatzeari eskainita dago. Oro har, nahiago genuke <strong>metodo zehatz</strong> bat izatea, hau da, soluziorako adierazpen analitiko itxi bat ematen duen bat. Izan ere, testu honetan deskribatutako metodo gehienak mota horretakoak dira. Baina jada aurrera dezakegu, ekuazio finituekin edo integralekin gertatzen den bezala, ekuazio mota gutxi batzuk (oso bereziki linealak) bakarrik direla metodo zehatzen bidez ebazgarriak. Ekuazio diferentzialen ikuspegitik, problema amaitutzat jotzen da <strong>koadraturetara laburtu</strong> denean, hau da, soluzioa aldagai askearen menpe soilik dauden funtzioen integralak gehienez ere biltzen dituen forma batean idatzi denean. Hala ere, irakurleari agertzen diren integral guztiak ebazten saiatzeko eskatzen diogu, praktikan askotan gertatzen denaren kontra, ia beti ebazgarriak izango baitira liburu honetan aztertutako adibide eta problemetan."
    },
    {
     "mota": "testua",
     "html": "Kontuan izan behar da, halaber, ekuazio diferentzial baten soluzioa analitikoki adieraztean oso maiz <strong>funtzio bereziak</strong> erabili behar direla, hau da, <strong>funtzio elementalak</strong> ez diren funtzioak (sinu hiperbolikoa, esponentziala edo arku tangentea diren bezala) eta kasu askotan ekuazio diferentzial jakin batzuen soluzio egokiak izatean duten definizio naturala dutenak."
    },
    {
     "mota": "testua",
     "html": "<strong>Kalkulu sinbolikoko</strong> sistemen agerpenak eta garapenak nabarmen arindu du metodo zehatz ezagunenak (eta ezagun gutxiago batzuk, edo eskuz kalkulatzeko praktikoak ez direnak) aplikatzeko zailtasuna."
    },
    {
     "mota": "testua",
     "html": "Metodo zehatzen bidez ebatz daitezkeen ekuazio kopuru murritzak askotan <strong>metodo hurbilduetara</strong> jotzera behartzen du, zeinak, era berean, mota desberdinetan sailka baitaitezke. Haien garrantzi handia gorabehera, ikasgai honen mailak <strong>metodo hurbildu analitikoei</strong> buruz pixka bat baino ez ikustera behartuko gaitu. <strong>Metodo grafikoek</strong> garrantzitsuak izaten jarraitzen dute zenbait ekuazio diferentzialen propietate kualitatiboak aztertzeko, baina ebazpen-metodo hurbildu gisa <strong>metodo numerikoek</strong> ordezkatu dituzte, zeinak, ordenagailuek hartu duten zabalkunde handiarekin, praktikan zientzialari eta teknikariek gehien erabiltzen dituztenak bilakatu baitira."
    },
    {
     "mota": "testua",
     "html": "Orain arte aipatu ditugun <strong>metodo kuantitatiboen</strong> —soluzioa (hurbil bada ere) eraikitzen saiatzen direnak— alternatiba gisa, <strong>metodo kualitatiboak</strong> daude, zeinekin sistemaren informazio deskribatzailea lortu nahi baita. Adibidez, askotan interesgarria da sistemaren portaera <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> limiteren batean ezagutzea —<math display=\"inline\"><mi>t</mi></math> aldagai askea bada—, bereziki portaera asintotikoa sinplea dela eta kalkulatzeko gutxi-asko zaila den iragankor labur baten ondoren azkar lortzen dela jakiten bada. 8. kapitulua metodo kualitatiboei eskainita egongo da."
    },
    {
     "mota": "testua",
     "html": "Ez dugu atal hau amaitu nahi gogoratu gabe fisikari batentzat ekuazio diferentzialak ebazteko metodorik garrantzitsuena eta erabilgarriena bere fisika-ezagutzak erabiltzean datzala. Izan ere, fisikako ikasgaietan ikasitako kontzeptu eta teknika asko —bereziki kontserbazio-legeak eta horiei lotutako simetriak— laguntza handikoak dira fisikaren praktikan agertzen diren ekuazio diferentzialak ebazteko (edo, gutxienez, ebazpenean aurrera egiteko)."
    },
    {
     "mota": "testua",
     "html": "Har dezagun, adibide gisa, pendulu matematikoa <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta saia gaitezen ebazten. Testu-liburuetan kasu honetan problemak ebazteko teknikarik emankorrenetako bat erabiltzen da askotan: hurbilketa bat egiten da, kasu honetan oszilazioak nahikoa txikiak direla suposatzean datzana, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math> izan dadin, eta horrela ekuazioa oszilatzaile harmonikora laburtzen da, ekuazio lineal bat dena, zeinaren soluzio ezaguna 1.3 probleman gogoratzen baita."
    },
    {
     "mota": "testua",
     "html": "Soluzio zehatza aurkitu nahi badugu, dimentsio bakarreko sistema kontserbatibo bat dela aprobetxatuko dugu koadraturetara laburtzeko. Lehenik energia mekanikoaren <strong>kontserbazio-legea</strong> erabiliko dugu <strong>lehen integral</strong> bat lortzeko, 3.4.5 atalean aztertuko dugun kontzeptua."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkatu (1.43) ekuazioaren bi gaiak <math display=\"inline\"><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>-rekin eta integratu emaitza, amplitudearen <math display=\"inline\"><mi>α</mi></math> menpe kontserbatutako energia mekanikoa lortzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Mekanikatik ezaguna zaigu, halaber, 2.5 atalean ikusiko dugun bezala <strong>aldagaien banantze</strong> izena hartzen duen hurrengo teknika."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu 1.11 ariketaren emaitza, pendulua igotzen ari denean, honela berridatz daitekeela: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>θ</mi></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mn>2</mn><msqrt><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></mfrac><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> izanik minimotik igaro den unea: <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken adierazpenaren integrala ezin da funtzio elementalen bidez adierazi: funtzio bereziak behar dira. Izan ere, erraz kalkulatzen da D.8 ataleko integral eliptikoak erabiliz."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ν</mi></mrow></math> integrazio-aldagaiaren aldaketa penduluaren soluzio inplizitua <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arcsin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> dela frogatzeko. Zein da soluzio esplizitua?"
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi fluido batean partikula puntual baten erorketa deskribatzen duen ekuazio diferentziala, marruskadura abiadurarekiko proportzionala denean, eta sailkatu. Zer gertatzen da marruskadura abiaduraren karratuarekiko proportzionala bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> honako ekuazioaren soluzioa den: <math display=\"block\"><mrow><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> Baiezko kasuan, aztertu dagokion definizio-tartea."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilatzaile harmonikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu oszilatzaile harmonikoak, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> hurrengo adierazpen guztiak eta bakoitza onartzen dituela soluzio orokor gisa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Baliokideak al dira beren artean? Gehi al zenezake adierazpenen bat aurreko zerrendari?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein dira (1.2) ekuazioaren (1.21) eta (1.22) soluzioen definizio-tarteak? Soluzioa al da <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> honen soluzio orokor inplizitua al da? <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> ekuazioaren soluzio orokorra dela. Aurkitu zuzenean bi soluzio sinple ikuskapenez eta aztertu soluzio singularrak diren ala ez."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu honako ekuazioaren <em>soluzio guztiek</em> <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> hasierako baldintza betetzen dutela. Zergatik ez da betetzen soluzioaren bakartasuna? Funtzioa <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math> hasierako baldintzen problema honen soluzioa al da?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu hasierako balioen problemak <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><msqrt><mi>y</mi></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> edozein funtzio <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mi>C</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mi>C</mi></mtd></mtr></mtable></mrow></mrow></math> onartzen duela soluziotzat, <math display=\"inline\"><mrow><mi>C</mi><mo>≥</mo><mn>0</mn></mrow></math> delarik."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Edalontzi hutsa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hondoan zulo txiki bat duen edalontzi huts bat erakusten badigute, ezinezkoa da jakitea noiz zegoen urez beteta ertzeraino. Frogatu gertaera hau existentziaren eta bakartasunaren teorema betetzen ez delako ondorioa dela. <em>Oharra:</em> Gogoratu uraren <math display=\"inline\"><mi>h</mi></math> altuera Torricelliren (1608-10-15, Faenza, Romaña; 1647-10-25, Florentzia, Toscana). Galileoren idazkaria izan zen eta hutsune garrantzitsu bat sortu eta mantendu zuen lehena. Barometroaren printzipioa ere aurkitu zuen eta beste ekarpen batzuk egin zituen matematikan, partikularen mekanikan eta hidrodinamikan, bere izena daraman legea barne.  legeak ematen duela: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>h</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>k</mi></math> konstante bat baita."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Penduluaren periodoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili 1.13 ariketa penduluaren periodoa kalkulatzeko. Garatu emaitza laugarren ordenaraino amplitudean <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Kurba-familiak, existentzia-bakartasuna eta ekuazio zehatzaren baldintza",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen ordenako EDA bat kurba-familia baten parametroa ezabatuz nola eraikitzen den, forma inplizitu/normala, existentzia-bakartasunaren teorema, eta zehaztasun-baldintza."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kurba-familietatik EDAra"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>. Malda horizontala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n, bertikala <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n. <strong>Adibidea 14:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> ordezkatuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Orokorrean, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> elkarrekin → EDA (parametroa ezabatuta)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> bada, deribatu osoa: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">inplizitua</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>P</mi><mi>Q</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">normala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Existentzia eta bakartasunaren teorema"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existentzia eta bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> jarraituak badira, orduan <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow></math> problemak <strong>soluzio bakarra</strong> du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 15:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> jarraituak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inguruan ⇒ soluzio bakarra. (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n definitu gabe.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea 16: jatorriko zirkuluak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (jatorritik igaro). <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezabatuz: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mrow><mi>y</mi><mo>−</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zirkulu horiek guztiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen dira, baina forma normala <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> da han; beraz <strong>ez dute bakartasun-teorema kontraesaten</strong> — hipotesiek puntu komun horretan huts egiten dute."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio zehatzak (baldintza)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>zehatza</strong> da baldin <math display=\"inline\"><mrow><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 12 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, malda horizontala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n, bertikala <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n); adibidea 14 (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; karratuak <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow></math>-ren zeinua galtzen du, familia osoa deskribatzen du); <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mo>⇒</mo><msub><mi>U</mi><mi>x</mi></msub><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; existentzia-bakartasunaren teorema (adibidea 15: <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><msub><mi>f</mi><mi>y</mi></msub></math> jarraituak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inguruan ⇒ soluzio bakarra, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n izan ezik); ⭐ adibidea 16 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; zirkulu guztiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik, baina forma normala <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> han — hipotesiak huts, ez du teorema kontraesaten); zehaztasun-baldintza <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub></mrow></math>. Euskarazko/ gaztelaniazko ohar lauso batzuk jasota. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p054.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Koadernotik (CNmetodosx) — oinarrizko kontzeptuak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmetodosx",
     "xehetasuna": "CNmetodosx — METODOS MATEMATICOS errotulua, 1.-47., 50.-53., 60.-61., 66.-69. eta 82. orrialdeak (30 zatiki): EDOen eskuzko iturriaren edizio kritikoa, hitzez hitz, lau geruzatan; 2026-08-04an standalonez egiaztatua",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "iturria",
     "proiektua": "CNmetodosx",
     "xehetasuna": "CNmetodosx — METODO MATEMATIKOAK errotulua, 48.-49., 54.-59., 62.-65., 70.-75., 78.-81. eta 83.-95. orrialdeak (18 zatiki; 88.-89. orrialdeetan errotulua ez da berriro ikusten): EDOen edizio kritiko literala eta egiaztapen matematikoa",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "iturria",
     "proiektua": "IMG_2026_07_30_02_20_28S.jpg",
     "xehetasuna": "CNmetodosx, 76.-77. orrialdeak (zatiki 1): METODO MATEMATIKOAK / METODOS MATEMATICOS errotulu mistoa bere horretan gordea; EDO linealen edizio kritiko literala",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio diferentzialen definizioa: EDO/EDP, ordena eta soluzio-adibideak"
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferentzialaren definizioa, EDO eta EDP bereizketa, ordenaren definizioa, forma esplizitu/inplizitua, eta soluzio-adibideak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Definizioa eta motak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ekuazio diferentziala (ED)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Funtzio bat eta bere deribatuak elkarrekin erlazionatuta agertzen diren ekuazioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi mota:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>EDO</strong> (ekuazio diferentzial arrunta): ekuazioan <strong>aldagai bakarreko</strong> funtzio bat agertzen denean.",
      "<strong>EDP</strong> (ekuazio diferentzial partziala): ekuazioan <strong>aldagai bat baino gehiagoko</strong> funtzio bat agertzen denean."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ekuazio baten ordena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Funtzioa agertzen den <strong>deribaturik altuena</strong>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 1"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Deribaturik altuena <math display=\"inline\"><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> da: <strong>ordena 3</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Forma esplizitua eta inplizitua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> esplizitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo><mi>⋯</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inplizitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo><mi>⋯</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> ED baten <strong>soluzioa</strong> ekuazioa betetzen duen <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio bat da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 2: <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>d</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mo>∫</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>t</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>t</mi><mo>+</mo><mi>k</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><msup><mi>e</mi><mi>k</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 3: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (bai, soluzioa da)</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: EDO/EDP bereizketa (aldagai bat / gehiago), ordena (deribaturik altuena), forma esplizitu/inplizitua, eta soluzioaren definizioa. Adibidea 1: <math display=\"inline\"><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> ordena 3 (eskuinaldean ordena 2 eta 1 soilik) — egilearen «ORDEN 3» zuzena; aldagai bakarreko funtzioarentzat <math display=\"inline\"><mi>d</mi></math> arrunta espero da, baina egileak <math display=\"inline\"><mi>∂</mi></math> ikurrak darabiltza (jasota). Adibidea 2: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>K</mi><msup><mi>e</mi><mi>t</mi></msup></mrow></math> (edozein <math display=\"inline\"><mi>K</mi></math> errealentzat, <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mn>0</mn></mrow></math> barne); egilearen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>t</mi><mo>+</mo><mi>k</mi></mrow></math> pausoak <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> soilik hartzen du eta <math display=\"inline\"><msup><mi>e</mi><mi>k</mi></msup></math>-tik <math display=\"inline\"><mi>k</mi></math>-rako berrizendatzeak adarrak ezkutatzen ditu, baina familia <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mi>k</mi></mrow></math> osoa da <math display=\"inline\"><mi>k</mi></math> konstante arbitrario gisa. Adibidea 3: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> soluzioa da (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; oszilagailu harmoniko oinarrizkoa). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/00_kontzeptu_oinarrizkoak.typ</code>"
      },
      {
       "mota": "testua",
       "html": "-k hiru nozio berak eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> familia baieztatzen ditu. Ikus <code>koadernoa_metodo_n_p001.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluzio inplizitua, EDO lineala, hazkunde esponentziala eta kurba integralak"
    },
    {
     "mota": "testua",
     "html": "Soluzio inplizitu baten egiaztapena, EDO linealaren forma orokorra, bakterioen hazkunde esponentziala, eta lehen ordenako EDOen kurba integralak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 4: soluzio inplizitua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi></mrow></math> soluzioa al da <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rena? Deribatuz: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>y</mi></math>-z biderkatuz eta berrantolatuz: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "EDO lineala (definizioa)"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "EDO lineala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mi>y</mi><mo>=</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 5: hazkunde esponentziala (bakterioak)"
    },
    {
     "mota": "testua",
     "html": "Baliabide mugagabeak; populazioa <math display=\"inline\"><mi>k</mi></math> erritmoan hazten da, <math display=\"inline\"><mi>t</mi></math> uneko populazioarekiko proportzionala: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mi>k</mi><mi>d</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>k</mi><mi>t</mi><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mi>R</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1000</mn></mrow></math>: <math display=\"inline\"><mrow><mn>1000</mn><mo>=</mo><msup><mi>e</mi><mn>0</mn></msup><mi>R</mi><mo>⇒</mo><mi>R</mi><mo>=</mo><mn>1000</mn></mrow></math>. <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow></math>-rekin, bikoiztea: <math display=\"block\"><mrow><mn>2000</mn><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>t</mi></mrow></msup><mn>1000</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>=</mo><mn>2</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>0</mn><mo>,</mo><mn>3466</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 6: kurba integrala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Zatikako integrazioz (<math display=\"inline\"><mrow><mo>∫</mo><mi>u</mi><mi>d</mi><mi>v</mi><mo>=</mo><mi>u</mi><mi>v</mi><mo>−</mo><mo>∫</mo><mi>v</mi><mi>d</mi><mi>u</mi></mrow></math>), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>e</mi><mi>x</mi></msup><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik: <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>. Kurba integrala: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 7: familiaren EDO (<math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>t</mi></math>-rekiko deribatuz: <math display=\"block\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zeinu-zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 4 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> diren tarteetan; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eskatzen du); EDO linealaren forma orokorra (<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≠</mo><mn>0</mn></mrow></math>); adibidea 5 (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>1000</mn></mrow></math>, bikoiztea <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>/</mi><mn>2</mn></mrow></math>; denbora-unitatea zehaztu gabe); adibidea 6 (bi zatikako integrazio ⇒ <math display=\"inline\"><mrow><mn>2</mn><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>). ⚠ <strong>Zuzenketa (mahairatua):</strong> adibidea 7 — jatorrizkoak <code>2y·y&#x27;=2t</code> eta <code>y&#x27;=t/y</code> idazten ditu, zeinurik gabe; <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> deribatzean <math display=\"inline\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> da, beraz <strong><math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>y</mi></mfrac></mrow></math></strong> (<math display=\"inline\"><mrow><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>); hemen zuzendua. (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n zirkunferentziak ukitzaile bertikala du, ez da <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio deribagarri gisa adierazgarria.) «orden n ⇒ n konstante» arau pedagogikoa da (soluzio singularrak salbu). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "-k <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math> familia bera eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> ematen ditu. Ikus <code>koadernoa_metodo_n_p002.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluzio inplizituak, parametrikoak eta baldintzak"
    },
    {
     "mota": "testua",
     "html": "Soluzio inplizitua eta parametrikoa (zirkulua), soluzio orokor/partikular/ singularren bereizketa (Clairaut motakoa), eta muga-baldintzak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio inplizitua eta parametrikoa"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 7:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (inplizitua) → <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (esplizitua). <strong>Adibidea 8:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> kate-erregelaz: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mi>/</mi><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> <strong>Laburbilduz</strong>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioak: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mtd></mtr></mtable></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio orokor, partikular eta singularra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>h</mi></math> ordenako EDA batek <math display=\"inline\"><mi>a</mi></math> parametroko <strong>soluzio orokorra</strong> du; <strong>partikularrak</strong> parametro-balio zehatzekoak; <strong>singularrak</strong> formularenak ez direnak."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 9:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (lehen ordena, ez-lineala). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>a</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> <strong>Partikularrak:</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>). <strong>Singularra:</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> (Ez dago familian <math display=\"inline\"><mi>a</mi></math> konstante baterako.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Hasierako baldintzak (adibidea 9)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><msqrt><mrow><mi>−</mi><mn>1</mn></mrow></msqrt></mrow></math> (ez dago soluzio errealik familian)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Muga-baldintzak: adibidea 11 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> a) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>1</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>2</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> b) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>1</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>−</mi><mi>B</mi><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> EZ DAGO SOLUZIORIK</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> c) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>0</mn><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> A edozein: INFINITU SOLUZIO</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>-ren forma inplizitu/esplizitu/parametrikoak koherenteak (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math>); adibidea 9 (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioa, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>/<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> partikularrak, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math> <strong>singularra</strong> — familian ez); hasierako baldintzak (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>-ek soluzio errealik ez familian ez adar singularrean; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-rako <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> ez ezik <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math> singularrak ere betetzen du, egileak lerro horretan familia- adarra soilik zerrendatzen du); higidura uniformeki azeleratua (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, bi hasierako konstante). ⭐ <strong>Muga-baldintzak (adibidea 11):</strong> soluzio <strong>bakarra</strong> (a), <strong>bat ere ez</strong> (b: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>2</mn></mrow></math>), eta <strong>infinitu</strong> (c: <math display=\"inline\"><mi>A</mi></math> askea) — muga-baldintzen izaera (hasierako balioenak ez bezala). Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> eta"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_orden_superior.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p048.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 1,
   "izenburua": "Lehen ordenako ekuazioak",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "Kapitulu honetan lehen ordenako ekuazio diferentzial arrunten propietate nagusiak aztertzen dira, «a priori» kasurik sinpleena osatzen dutenak, eta horregatik oso erabilgarriak dira hurrengo kapituluetan testuinguru orokorragoetan aztertuko diren kontzeptuak aurkezteko edo finduko. Ebazpen-metodo zehatz ezagunenak ere biltzen dira, zeinen garrantzia honetan baitatza: praktikan, askotan (ekuazio eta sistema linealen salbuespen garrantzitsuarekin) ordena handiagoko ekuazioen edo ekuazio-sistemen ebazpenak azkenean lehen ordenako ekuazio bakar baten ebazpenera jotzen baitu."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Esanahi geometrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen ordenako ekuazio diferentzial arrunten azterketa motibatzeko, haien esanahi geometriko sinpleaz balia gaitezke."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kurben familia uniparametrikoak"
    },
    {
     "mota": "testua",
     "html": "Ondo dakigunez, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> motako ekuazio finitu batek kurba bat definitzen du planoan. Adibidez, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>  (edo <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> adierazpen baliokideak) jatorrian zentratutako zirkunferentzia unitatea deskribatzen du. Kurba bakar baten ordez kurben familia uniparametriko bat hartzen badugu, haren ekuazioa honako motakoa izango da <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>C</mi></math> parametroaren balio bakoitzeko (tarte jakin baten barruan) familiaren kurba bat lortzen baita. Adibidez, jatorrian zentratutako zirkunferentzien familiak honako ekuazio hau du <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mi>C</mi></math> parametroa zirkunferentziaren erradioa izanik (<math display=\"inline\"><mrow><mi>C</mi><mo>≥</mo><mn>0</mn></mrow></math> kasurako)."
    },
    {
     "mota": "testua",
     "html": "Familia baten ekuazioaren eta haren deribatuaren artean <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mi>C</mi></math> parametroa ezabatzen badugu, <strong>familiaren ekuazio diferentziala</strong> lortuko dugu honako forman <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zeinak, deribatuaren esanahi geometrikoa gogoratuz, eremuko puntu bakoitzaren eta hartatik igarotzen diren familiaren kurben malden arteko erlazioa ezartzen baitu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Deribatu (2.2) ekuazioa, jatorrian zentratutako zirkunferentzien familiaren ekuazio diferentziala honako hau dela egiaztatzeko: <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kontuan izan beste kasu askotan, familiaren ekuazio diferentziala aurkitzeko, deribatuaz gain abiapuntuko ekuazio finitua ere erabili beharko dela."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu abzisa-ardatzean zentroa duten erradio unitateko zirkunferentzien familiaren ekuazio diferentziala. Ba al dago soluzio singularrik?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eraikuntzaz (2.1) funtzioek (2.5) ekuazioaren soluzioen familia uniparametriko bat osatzen dutenez eta hau lehen ordenakoa denez, familia ekuazio diferentzialaren soluzio orokor bat da. Jakina, ezerk ez du eragozten, gainera, beste soluzio batzuk egotea, bai singularrak bai orokorrak, deribazio- eta <math display=\"inline\"><mi>C</mi></math> ezabatze-prozesuan sartu direnak. (2.1) ekuazioa duen familiaren kurba bakoitzak <strong>kurba integral</strong> izena hartzen du eta haren ekuazioa ekuazio diferentzialaren soluzio partikular batek ematen du. Aurreko adibideetan, zirkunferentzia bakoitza dagokion ekuazio diferentzialaren kurba integral bat da eta haren ekuazioa soluzio partikular bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kurben kongruentziak"
    },
    {
     "mota": "testua",
     "html": "Oso kasu partikular garrantzitsu bat dago: familiaren kurbak elkar mozten ez badira, hau da, eremu jakin baten barruan planoko puntu bakoitzetik familiaren kurba bat eta bakarra igarotzen bada, familia kurben <strong>kongruentzia</strong> bat dela esaten da. Kasu horretan, puntu bakoitzari hartatik igarotzen den sortaren kurba dagokio eta, beraz, kurba hori identifikatzen duen parametroaren balioa. Ondorioz, posible da —hasiera batean behintzat— (2.1) familiaren ekuazioan parametroa askatzea eta hura honako forman idaztea <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> zeinak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuari dagokion <math display=\"inline\"><mi>C</mi></math> balioa ematen baitigu. Kongruentzia baten adibide bat 2.1 ariketan aztertzen aritu garen zirkunferentzien familia da, zeina, izan ere, (2.2) ekuazioan parametroa askaturik idatzi baitugu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kongruentzia bat al da 2.2 ariketan aztertutako familia?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "2.1 ariketan ikusi dugun bezala, kongruentzia baten kasuan, haren ekuazioaren deribatua kalkulatzean zuzenean lortzen da dagokion ekuazio diferentziala, parametroa desagertu egiten baita: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>-rekin biderkatuz, ekuazio hau <strong>forma simetrikoan</strong> idatz daiteke, <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>P</mi><mo>≡</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>≡</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math>. (2.6) ekuazioaren kasuan forma simetrikoa hau da <math display=\"block\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ikusiko dugu forma simetrikoa erabilgarria dela zenbait kasutan, baina askoz ohikoagoa da <strong>forma normala</strong>, ordenarik altueneko deribatua askatzean lortzen dena <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> (2.6) adibidean forma normala hau da <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Kurben kongruentzia, deribatua eta zuzen ukitzailearen malda.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "Forma normalak interpretazio geometriko zehatz bat ahalbidetzen du, 2.1 irudian zirriborratzen dena. (2.11) ekuazio diferentzialak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan hartatik igarotzen den kurba integralaren ukitzailearen malda <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> ematen du. Puntu bakoitzetik kurba bakar bat igarotzen da, zeinak han norabide bat definitzen duen ukitzaile jakin bat baitu. Beraz, <strong>norabide-eremu</strong> bat dago, (2.11) ekuazio diferentzialak bere definizio-eremuan zehazki deskribatua, puntu bakoitzari dagokion norabidea ematen diguna."
    },
    {
     "mota": "ezezaguna",
     "oina": "Kongruentzia eta norabide-eremua.",
     "izena": "irudia (ez da konpilatu)"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Existentziaren eta bakartasunaren teorema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kongruentzien eta forma normaleko ekuazio diferentzialen arteko erlazioa biunibokoa da, beren definizio-eremuan, <strong>existentziaren eta bakartasunaren teorema</strong> batean zehaztasunez ezartzen diren baldintza matematiko jakin batzuk betetzen badira. A eranskinean teoremaren forma findu bat frogatzen badugu ere, hemen frogapenik gabe aldaera ahulago bat enuntziatzera mugatuko gara, baina praktikan erabilgarriagoa dena, baldintza nahikoak haren ordez erabil daitezkeen murriztaileago batzuk baino errazago egiazta baitaitezke."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existentzia eta bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math> funtzioa eta haren <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> deribatua eremu batean jarraituak badira, hasierako baldintzen problemak <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> soluzio bakar bat du eremuko <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> hasierako baldintza bakoitzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Honek bermatzen du kurba integralen multzoa kongruentzia bat dela, jarraitutasun-baldintza bat betetzen den heinean, edo are gutxiago A eranskinean ikusiko dugun bezala. (Erregulartasun baldintza matematikoen beharra 1.9 ariketan aurreratu zen jada)."
    },
    {
     "mota": "ezezaguna",
     "oina": "Abzisa-ardatzarekiko zirkunferentzia ukitzaileak.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "Adibide gisa har dezagun 2.3 irudian agertzen den abzisa-ardatzarekiko zirkunferentzia ukitzaileen multzoa, zentroa ordenatu-ardatzean dutenak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu familia horren ekuazio diferentziala honako hau dela: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Jatorritik soluzio infinitu igarotzen dira, baina honek ez du existentziaren eta bakartasunaren teorema kontraesaten, han ekuazio diferentzialak singulartasun bat baitu. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi></mrow></math> bi erdikarietan ere badu bat, baina jatorrian izan ezik horrek ez du bakartasuna eragozten —baizik eta han kurba integralen ukitzailea bertikala den gertaera hutsalagoa islatzen du— jarraitutasuna baldintza nahikoa baita, baina ez beharrezkoa."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Ekuazio zehatzak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "2.1 atalean ikusi genuen bezala, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> kurben kongruentzia baten ekuazioa deribatzean forma simetrikoko ekuazio diferentzial bat lortzen da <math display=\"block\"><mrow><mi>d</mi><mi>u</mi><mo>≡</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math> Definizioz, era honetan funtzio baten diferentzial gisa lortutako ekuazio bati, hau da, (2.18)–(2.19) baldintzak betetzen dituenari, <strong>zehatza</strong> deitzen zaio."
    },
    {
     "mota": "testua",
     "html": "Funtzio erregularren deribatu gurutzatuen berdintasuna ziurtatzen digun Schwarzen teoremaren ondorioz<span class=\"j-oin\">[ Fisikan ohi den bezala, <strong>funtzio erregular</strong> deituko diegu, beren deribatuekin batera, «erregular» kalifikatzailea erabiltzen den enuntziatua bermatzeko beharrezko jarraitutasun baldintzak betetzen dituztenei. Ohitura hau, zehatza ez bada ere, emaitza matematikoen enuntziatuak arintzen ditu, inplikatutako funtzioen diferentziagarritasun-klasea adierazi behar izatea saihestuz. Interes praktikoko kasuetan, beharrezko baldintzak betetzen dira normalean, gehienez ere zenbait puntutan (edo leku geometrikotan) izan ezik. Azpimarratu behar da, hala ere, puntu <strong>singular</strong> horiek garrantzi handikoak izaten direla fisikan (haietako batean dago, adibidez, eremu elektrostatikorik sinpleena sortzen duen karga puntuala) eta matematikan (bereziki, funtzio analitikoen teorian). Zenbait puntu singularrek zeregin garrantzitsua jokatuko dute 6. kapituluan. ]</span> se cumple <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> ekuazio diferentzial zehatz baterako. Gainera, emaitza elemental honen alderantzizkoa ere egia da."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma simetrikoko ekuazio diferentzial bat, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, zehatza da baldin eta soilik baldin (2.20) baldintza betetzen bada."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Teoremaren frogapena interesgarria da, eraikitzailea baita eta, beraz, (2.20) betetzen duten ekuazioak ebazteko metodo bat ematen baitu. (2.18) bete dadin, defini dezagun <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mi>P</mi></math>-ren <math display=\"inline\"><mi>x</mi></math>-rekiko integral mugagabe gisa: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>x</mi></math>-ren menpe ez dagoena, oraindik zehazteko baitago. (2.19) bete dadin honako hau bete behar da <math display=\"block\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> zeina, (2.20) hipotesia erabiltzen badugu, honela bihurtzen baita <math display=\"block\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Emaitza sinplifikatuz, <math display=\"inline\"><mi>x</mi></math> desagertu den ekuazio bat dugu, zuzenean <math display=\"inline\"><mi>y</mi></math>-rekiko integratzen dena: <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>y</mi><mn>0</mn></msub><mi>y</mi></msubsup><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>v</mi><mo>+</mo><mi>D</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>D</mi></math> integrazio-konstante arbitrario bat baita. Balio hau (2.21)en ordezkatuz, ekuazio zehatzaren soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> kongruentziaren ekuazioa izango da edo, adierazpen formalago bat nahiago bada, <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msubsup><mo>∫</mo><msub><mi>y</mi><mn>0</mn></msub><mi>y</mi></msubsup><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> konstante arbitrarioaren birdefinizio hutsal baten ondoren."
    },
    {
     "mota": "testua",
     "html": "Azken soluzio hau ez dugu idatzi ekuazio zehatzak ebazteko haren erabilera gomendatzen dugulako (horretarako ez baitago definizioa gogoratzea eta aldagai batekiko integral mugagabea kalkulatzea, bestearekiko deribatzea eta berriz integratzea baino hoberik), baizik eta kalkulu bektorialetik ezagutzen dugun emaitza orokor baten kasu partikular bat delako."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>u</mi></mrow></math> potentzial eskalar bat dela hartzen badugu, kurben kongruentzia (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>C</mi></mrow></math>) lerro ekipotentzialen multzoa da eta kongruentziaren <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazio diferentzialak adierazten du potentziala konstantea dela lerro ekipotentzialetan zehar eta, halaber, dagokion eremu bektoriala <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≡</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>=</mo><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> puntu bakoitzean lerro horiekiko ortogonala dela (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>). Gainera, testuinguru honetan aitortzen dugu (2.20) baldintzak adierazten duela, hain zuzen, eremu bektoriala kontserbatiboa dela: <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math>. Badakigu kasu honetan potentziala integral kurbilineo baten bidez berreskura daitekeela: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Integrazio-bidea arbitrarioa da eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>–<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>–<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> segmentuek osatzen dutena aukeratzen badugu, lerro ekipotentzialen ekuazioa (2.27)  (2.25)ek ematen du."
    },
    {
     "mota": "testua",
     "html": "Adibide gisa har dezagun ekuazioa <math display=\"block\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zeina, berehala egiaztatzen den bezala, zehatza baita. <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>-ren koefizientea <math display=\"inline\"><mi>x</mi></math>-rekiko integratzen badugu <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dugu, eta <math display=\"inline\"><mi>y</mi></math>-rekiko deribatu eta <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math>-ren koefizientearekin berdintzen badugu <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> lortzen da, integratuz <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>D</mi></mrow></math> ematen duena, eta horrela soluzio orokorra, konstante arbitrarioaren birdefinizio baten ondoren, jada genekien bezala, jatorrian zentratutako zirkunferentzien familia da <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, zehatza da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eraiki, <math display=\"inline\"><mi>Q</mi></math>-tik integratuz.</strong>  <math display=\"block\"><mrow><mo>∫</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <strong><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zehaztu, <math display=\"inline\"><mi>P</mi></math>-rekin konparatuta.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; hau <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>-ekin berdinduta: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>K</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondoren ekuazio zehatzen kasu partikularrak diren ekuazio diferentzialen bi familia ikusten ditugu."
    },
    {
     "mota": "azpititulua",
     "testua": "Aldagai mendekorik gabeko ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Ekuazioan aldagai mendekoa falta bada, <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> argi dago ekuazioa zehatza dela, bi deribatu gurutzatuak nuluak baitira. Izan ere, ekuazio hau oso sinplea da eta ia koadraturetara laburtuta dago: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi honako problema hau: <code class=\"formula-ez\">y&#x27; = ln abs(x), wide op(&quot;lim&quot;, limits: #true)_(x arrow.r 0) y(x) = 0.</code> Bakarra al da soluzioa?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Aldagai banatuetako ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Aldagai mendekoa eta askea bi gai desberdinetan banatuta agertzen direnean ere, <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> deribatu gurutzatuak nuluak dira eta, beraz, ekuazioa zehatza da. Izan ere, zuzenean ebazten da koadraturen bidez: <math display=\"block\"><mrow><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>P</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn></mrow></math> hartuz, aurrekoa berreskuratzen da kasu partikular gisa. Mota honetako ekuazio baten adibide bat (2.28) da, lehenago ahalik eta mota orokorreneko zehatz bat balitz bezala ebatzi dena."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>y</mi></msup><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Faktore integratzaileak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ikus dezagun zer gertatzen den (2.28) ekuazioan <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> askatzen badugu, honako hau lortzeko <math display=\"block\"><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Deribatu gurutzatuak berdinak ez diren arren eta, beraz, ekuazioa zehatza ez den arren, badakigu egiazki <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>y</mi></mrow></math>-rekin biderkatu den ekuazio zehatz bat dela. Galdera da prozesu hau oro har itzulgarria den, kasu partikular honetan ekuazio ez-zehatza <math display=\"inline\"><mi>y</mi></math>-rekin biderkatzea nahikoa den bezala abiapuntuko zehatza berreskuratzeko."
    },
    {
     "mota": "testua",
     "html": "Nahitaez zehatza ez den ekuazio bat emanda <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> existitzen bada <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio bat non <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> zehatza izan dadin, <math display=\"inline\"><mi>μ</mi></math>  (2.36) ekuazioaren <strong>faktore integratzaile</strong> edo <strong>biderkatzaile</strong> bat dela esaten da. Ekuazio berria zehatza denez, ebatz daiteke eta haren soluzioak abiapuntuko ekuazioaren soluzio ere izango dira, <em>salbuespen posibleren batekin</em>."
    },
    {
     "mota": "testua",
     "html": "Izan ere, jatorrizko ekuazioa (2.37)  <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin biderkatuz lortzen denez, jatorrizko ekuazioaren soluzioak egon daitezke faktore hau ezeztatzen dutenak (2.37) ekuazio berria ezeztatu gabe; beraz, faktore integratzaile bat erabili denean egiaztatu beharko da <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-ren soluziorik dagoen ekuazio zehatza ebatziz lortutako orokorrean ez daudenak, kasu horretan jatorrizkoaren soluzio singularrak izango baitira. Adibide gisa, har dezagun <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa, zehatza ez dena, baina <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>y</mi></mrow></math> faktore integratzailea onartzen duena, zeinarekin (2.28) ekuazioa berreskuratzen baitugu, baina orduan <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzio singular bat da."
    },
    {
     "mota": "testua",
     "html": "Bestalde, posible da abiapuntuko ekuazioa <math display=\"inline\"><mi>μ</mi></math>-rekin biderkatzean soluzioak gehitu izana, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-renak eta, beraz, (2.37)renak direnak, (2.36) abiapuntuko ekuazioarenak izan gabe; beraz, kasu bakoitzean egiaztatu beharko da ekuazio finitu horren soluzioak benetan (2.36)renak diren."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu ekuazio diferentzialak <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> faktore integratzailea onartzen duela. Kalkulatu soluzio orokorra. Ba al dago soluzio singularrik? Eta ekuazio diferentziala betetzen ez duen <math display=\"inline\"><mi>μ</mi></math>-ren erroren bat?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ez-zehatza dela egiaztatu.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Faktore integratzailea aplikatu.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  biderkatuta: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>Berri-egiaztapena (orain zehatza).</strong>  <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi>P</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi>Q</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Ebatzi.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>P</mi><mo>′</mo></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>-rekin berdinduta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Agerikoa da faktore integratzaile bat konstante batekin biderkatzen badugu faktore integratzaile bat izaten jarraitzen dugula. Are gehiago, problema desberdinetan ikusiko dugu faktore integratzaileak ez direla nahitaez bakarrak askoz zentzu ez-hutsalago batean: posible da bata bestearen multiplo ez diren bi faktore integratzaile izatea. Bakartasunari ezezkoa eman ondoren, beste galdera zailago bat plantea dezakegu: (2.36) ekuazio orok onartzen al du zehatz bihurtzen duen faktore integratzaile bat? Erantzuna baiezkoa da, baina apur bat etsigarria: existentziaren eta bakartasunaren teoremaren ondorio zuzen gisa, lehen ordenako ekuazio orok faktore integratzaileren bat onartzen du, baina ez da ezagutzen hura aurkitzeko metodo orokorrik. Bete behar den baldintza (2.37) ekuazio berria zehatza izatea da: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> zeina manipulazio elemental baten ondoren honela bihurtzen baita <math display=\"block\"><mrow><mi>Q</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>P</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Deribatu partzialetako ekuazio honek soluzioa duen arren, argi egon beharko luke hura ebaztea, oro har, ez dela jatorrizko ekuazioa ebaztea baino errazagoa izango; baina hurrengo ataletan ikusiko dugu, gutxienez kasu jakin batzuetan, mota bereziko faktore integratzaile baten bilaketa saiatzeko gida bat ematen duela."
    },
    {
     "mota": "testua",
     "html": "Aurreko ataleko analogia bektorialaren arabera, esan dezakegu bi dimentsioko eremu bektorial oro, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>, eremu kontserbatibo baten lerro ekipotentzialekiko ortogonala dela, eta hura, beraz, paraleloa (eta horregatik proportzionala) dela puntu bakoitzean abiapuntuko eremuarekiko. Bestela esanda, beti aurki daitezke edozein bi dimentsioko indar-eremuren korronte-lerroekiko ibilbide ortogonalak. Kontuan izan hau ez dela egia hiru dimentsiotan; <strong>eremu integragarriak</strong> soilik, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> betetzen dutenak, dira gradiente baten proportzionalak, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mi>V</mi></mrow></math>, eta gainazal ortogonalak onartzen dituztenak. Bi dimentsiotan soilik da egia eremu bektorial guztiak integragarriak izatea."
    },
    {
     "mota": "testua",
     "html": "Ikus ditzagun faktore integratzaileak sistematikoki eraiki daitezkeen zenbait kasu."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Ekuazio banangarriak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Banangarri</strong> deitzen zaio aldagai askea eta mendekoa <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math>-ren koefizienteetan faktore desberdinetan multzokatuta agertzen diren ekuazio orori: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>S</mi><mi>U</mi></mrow></math> faktore integratzaileak aldagaiak banatzen ditu eta, beraz, mota honetako ekuazio bat koadraturetara laburtzea ahalbidetzen du: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mfrac><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioak, existitzen badira, soluzio singularrak izan daitezke. Adibidez, ekuazioa <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><mi>x</mi><mi>y</mi></mrow></math> faktorearekin biderkatzen badugu, lortzen dugu <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>,</mo></mrow></math> zuzenean integratzen dena <math display=\"inline\"><mrow><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math> emateko —edo, D.3 ataleko Lambert-en funtzioa erabiliz, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>W</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>—. <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>-ren <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioa ez da singularra, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> kasurako orokorrean barneratuta baitago."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beste ataletan ikusiko dugun bezala, mota honetako ekuazioak garrantzitsuak dira, ekuazio familia batzuetan ezagutzen den ebazpen-metodo sistematikoak ekuazioa banangarri bihurtzetik igarotzen baita."
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Faktore integratzaile bereziak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Saia daitekeen zerbait —arrakasta-bermerik gabe, oro har— faktore integratzaileak bete behar duen (2.40) baldintzan egitura funtzional partikularreko <math display=\"inline\"><mi>μ</mi></math> funtzioak probatzea da. Behean kasu batzuetan teoria osoa garatzen dugun arren eta aukera desberdinak saiatzeko adierazpenak ematen ditugun arren, berriz ere gomendatzen dugu funtsezko ideiak erabiltzea, kasu honetan faktore integratzaile bat zer den gogoratzera eta <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> aldagaiak forma jakin batean soilik agertzen diren bat eraiki daitekeen ikustera laburtzen direnak (agian ebatzi beharreko ekuazioa agertzen den problemari buruzko ezagutzak iradokita)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>y</mi></math>-ren menpe ez dauden faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "(2.40)en <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> saiatzen badugu lortzen dugu <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz, ekuazioak mota honetako faktore integratzaile bat onar dezan baldintza beharrezko eta nahikoa adierazpen honen eskuineko gaia <math display=\"inline\"><mi>y</mi></math>-ren menpe ez egotea da, nahiz eta haren osagaiak egon daitezkeen: <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> kasu horretan faktore integratzailea <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> izanik. <math display=\"inline\"><mi>C</mi></math> integrazio-konstantea ez da garrantzitsua, <math display=\"inline\"><mi>μ</mi></math> faktore integratzailea bada <math display=\"inline\"><mrow><mi>C</mi><mi>μ</mi></mrow></math> ere badelako, baina <math display=\"inline\"><mi>C</mi></math> aldatzea ekuazio osoa konstante batekin biderkatzearen baliokidea da, eta horrek ez du ezer berririk gehitzen."
    },
    {
     "mota": "testua",
     "html": "Adibidez, ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorearekin biderkatzen badugu, ekuazio berria zehatza izan dadin deribatu gurutzatuek bete behar dute <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> zeina honela ere idazten baita <math display=\"block\"><mrow><mfrac><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> Ekuazio horren azken gaian <math display=\"inline\"><mi>y</mi></math> agertzen ez denez, hura integra daiteke <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> faktore integratzaile bat dela ikusteko. (Jakina, (2.48) ere zuzenean erabil zitekeen emaitza bera lortzeko). Jatorrizkoa faktore integratzailearekin biderkatzean lortutako ekuazioa, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zehatza da, jakina, eta erraz integratzen da: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mi>x</mi></math>-ren menpe soilik dagoen faktore integratzaile batekin."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ez-zehatza.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probatzeko baldintza.</strong> Euler-en baldintza aplikatuta, biderkatu ondoren <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msup><mi>P</mi><mo>″</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>″</mo></msup><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi>P</mi><mo>″</mo></msup></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi>Q</mi><mo>″</mo></msup></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>: <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>-rekin zehatza bihurtzen da."
      },
      {
       "mota": "testua",
       "html": "<strong>Ebatzi.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>P</mi><mo>″</mo></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></math>  <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>-rekin berdinduta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math> dela ondorioztatzen da."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>x</mi></math>-ren menpe ez dauden faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "(2.40)en <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ordezkatuz lortzen da <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>P</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz, ekuazioak mota honetako faktore integratzaile bat onar dezan baldintza beharrezko eta nahikoa adierazpen honen eskuineko gaia <math display=\"inline\"><mi>x</mi></math>-ren menpe ez egotea da, kasu horretan faktore integratzailea hau izanik <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>1</mn><mi>P</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "2.10 ariketako ekuazioak <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktore integratzaile bat onartzen al du?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> motako faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>-ren menpe <math display=\"inline\"><mi>h</mi></math> tarteko funtzioaren bidez soilik egongo litzatekeen faktore integratzaile bat honela emango litzateke <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mrow><mi>Q</mi><mfrac><mrow><mi>∂</mi><mi>h</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>P</mi><mfrac><mrow><mi>∂</mi><mi>h</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></mfrac><mi>d</mi><mi>h</mi><mo>,</mo></mrow></math> eta existi dadin baldintza integrakizuna <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>-ren menpe <math display=\"inline\"><mi>h</mi></math>-ren bidez soilik egotea da."
    },
    {
     "mota": "testua",
     "html": "Oro har, begi-zorroztasun apur batek edo ebatzi beharreko problema fisikoari buruz dugun ezagutzak soilik gida gaitzakete <math display=\"inline\"><mi>h</mi></math>-ren forma aukeratzean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako faktore integratzaile bat erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deribatu partzialak <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> aldagai bakarraren bidez.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denean <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup></mrow></math>  (biak berdinak dira katearen erregelaz). Euler-en baldintzan ordezkatuta: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>Ebatzi.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>μ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Ekuazio linealak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ezezaguna eta haren deribatua konbinazio linealetan soilik agertzen diren ekuazio bat, deribatua askatuz, honela idatz daiteke <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <strong>ekuazio lineal</strong> izena hartzen du. <math display=\"inline\"><mi>B</mi></math> gai askea nulua denean ekuazioa <strong>homogeneoa</strong> dela esaten da eta bestela <strong>osoa</strong> edo, batzuetan, <strong>inhomogeneoa</strong> deitzen zaio."
    },
    {
     "mota": "testua",
     "html": "Berehalakoa da egiaztatzea <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktore integratzaile baten existentzia bermatzen duen (2.47) baldintza betetzen dela, zeina (2.48)k emango baitu: <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> eta ekuazioa honela bihurtzen duena <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> edo, baliokidetasunez, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> zeinak soluzio orokorra ematen baitu bigarren koadratura baten bidez, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>C</mi><mo>+</mo><mo>∫</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> nahiz eta, berriz ere, ez dugun gomendatzen honelako formula bat ikastea, baizik eta gogoratzea ekuazio linealak beti onartzen duela aldagai askearen menpe soilik dagoen faktore integratzaile bat eta horrek esan nahi duena aplikatzea. Adierazpen honek badu, ordea, 3. kapituluan ikusiko dugun bezala, edozein ordenako ekuazio linealetarako egia den egitura bat agerian uzteko bertutea: <em>osoaren soluzio orokorra homogeneoaren soluzio orokorraren</em>  (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> hartuz lortzen dena)  <em>eta osoaren soluzio partikular baten batura da</em>  ((2.63) adierazpen orokorretik lor daiteke integrazio-konstanteari balio partikular bat emanez, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> adibidez). Soluzio partikularra era infinitutan aukera daiteke, <math display=\"inline\"><mi>C</mi></math> konstantearen balio bakoitzeko bat lortzen baita, baina azken hau arbitrarioa denez, aukera guztiek soluzio orokor berera daramate."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Ekuazioa modu sinpleago batean berridatzita, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>−</mo><mi>y</mi></mrow></math> ordez, faktore integratzaile sinpleena zuzenean saiatuz: <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mi>μ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>μ</mi></mrow></math> eskema orokorretik <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mn>1</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mo>⇒</mo><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (emaitza, tarteko pausoak osorik berretsi gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kontuan izan, <math display=\"inline\"><mi>μ</mi></math>  <math display=\"inline\"><mi>y</mi></math>-ren menpe ez dagoenez, ekuazio linealen kasuan ez dela soluziorik irabazi ez galdu faktore integratzailea erabiltzean, eta beraz (2.47) adierazpenak ekuazio linealaren soluzio guztiak biltzen dituela."
    },
    {
     "mota": "testua",
     "html": "Ohartu behar da lehen ordenako ekuazio lineal homogeneoa banangarria dela eta, beraz, 2.5 ataleko metodoaz ere ebatz daitekeela."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Banatu <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren aldagaiak soluzioa koadratura baten bidez idazteko. Ondorioztatu, <math display=\"inline\"><mi>k</mi></math> konstantea bada, honako hau betetzen dela: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Eraldaketa-metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fisikako ikasgaietatik ondo dakigun bezala, problema asko nabarmen sinpleagoak dira koordenatu egokietan lantzen badira. Gauza bera gertatzen da ekuazio diferentzialekin oro har: askotan aldagai-aldaketa batek, askearena, mendekoarena edo bienak izan daitekeena, ekuazioa ebaztea ahalbidetzen du. Kasu horietan <strong>eraldaketa-metodo</strong> bat erabiltzen dela esaten da. Ondoren mota honetako metodoez ebazten diren familia ezagunenetako batzuk ikusiko ditugu."
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Ekuazio homogeneoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gogora dezagun <strong><math display=\"inline\"><mi>r</mi></math> graduko funtzio homogeneo</strong> deitzen zaiola honako baldintza betetzen duenari <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>a</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazio diferentziala <strong>homogeneoa</strong> dela esaten da <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> gradu bereko funtzio homogeneoak badira: <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>a</mi><mi>.</mi></mrow></math> Kontuan izan hemen homogeneotasuna <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>-rekiko eskatzen dela, eta (2.59) ekuazio lineala homogeneoa dela esaten dela <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> denean, hau da, <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math>-rekiko denean, baina ez <math display=\"inline\"><mi>x</mi></math>-rekiko. Nahasgarria izan arren, nomenklatura hau egile guztiek erabiltzen dutena da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu ekuazio diferentzial bat homogeneoa dela baldin eta soilik baldin honako forman idatz badaiteke: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ariketa honek zuzenean iradokitzen du aldagai-aldaketa <math display=\"block\"><mrow><mi>u</mi><mo>≡</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>,</mo></mrow></math> ezezagun berriak ekuazioak berak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eskala-aldaketaren aurrean duen aldaezintasun bera izan dezan. Izan ere, aipatutako aldaketarekin ekuazio homogeneoa banangarri batean eraldatzen da <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zeina, dakigun bezala, koadraturetara laburtzen baita aldagaiak banatu ondoren."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Berridatzita, <math display=\"inline\"><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>; ekuazioa homogeneoa da (<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math> biak gradu 1eko funtzio homogeneoak baitira). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math> ordezkatuta (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>): <math display=\"block\"><mrow><mi>x</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>u</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math> <strong>Aldagai-bereizketa.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math>, integratuta: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsinh</mi><mo>&#8289;</mo></mrow><mi>u</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio homogeneoen orokortze bat isobarikoak dira, eskala-aldaezintasun orokortu bat aurkezten dutenak eta 2.16 probleman aztertuko direnak."
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aldagai-aldaketa nabaria, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math>  (edo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>), ekuazio hauek banangarri bihurtzen ditu: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> ekuazio diferentziala."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mn>1</mn></mrow></math>. Ordezkatuta: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi></mrow></math> Integratuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> motako ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Mota honetako ekuazioetan bi kasu daude, <math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenak paraleloak diren ala elkar mozten duten arabera."
    },
    {
     "mota": "testua",
     "html": "1. Zuzenak paraleloak badira, <math display=\"block\"><mrow><mfrac><mi>α</mi><mi>a</mi></mfrac><mo>=</mo><mfrac><mi>β</mi><mi>b</mi></mfrac><mo>≡</mo><mi>k</mi><mo>,</mo></mrow></math> honako hau dugu <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta, beraz, ekuazioa egiazki <math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>-ren menpe soilik dago eta aurreko motakoa da, zeina <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> aldaketarekin banangarri batera laburtzen baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi honako ekuazioa: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "2. Zuzenak paraleloak ez badira, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntu batean mozten dute elkar; beraz, <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>≡</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> koordenatu-aldaketak mozketa-puntu hori jatorrira lekualdatzen du eta zuzenen ekuazioak <math display=\"inline\"><mrow><mi>a</mi><mi>u</mi><mo>+</mo><mi>b</mi><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mi>u</mi><mo>+</mo><mi>β</mi><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> bihurtzen ditu eta ekuazioa bera homogeneo batean, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>u</mi><mo>+</mo><mi>b</mi><mi>v</mi></mrow><mrow><mi>α</mi><mi>u</mi><mo>+</mo><mi>β</mi><mi>v</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>u</mi></mrow></math> aldaketarekin banangarri batera laburtzen baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Bi zuzenen ebakidura-puntua.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>=</mo><mn>3</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>1. bidea, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math> aldagai-aldaketa homogeneora.</strong>  <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>s</mi><mo>−</mo><mi>t</mi></mrow><mrow><mi>s</mi><mo>+</mo><mi>t</mi></mrow></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>t</mi><mi>s</mi></mfrac></mrow></math>  ordezkatuta: <math display=\"block\"><mrow><mi>u</mi><mo>+</mo><mi>s</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac></mrow></math> <strong>Aldagai-bereizketa.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mi>s</mi></mfrac></mrow></math>; zenbakitzailea izendatzailearen deribatuaren proportzionala denez (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>rekin): <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi><mo>+</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>C</mi><mi>s</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>t</mi><mi>s</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math> atzera ordezkatuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mrow><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow><mrow><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></mfrac><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>2. bidea, zuzenean ekuazio zehatz gisa.</strong>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, zehatza da. <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>-rekin berdinduta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Bernoulliren ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bernoulliren (1654-12-27, Basilea, Suitza; 1705-08-16, Basilea). Matematikari-familia aparteko bateko kide hau (Johannen anaia eta Danielen osaba zen) «integral» hitza erabili zuen lehena izan zen, katenaria aztertu zuen, isokrona aurkitu zuen, probabilitateen teorian lan egin zuen, kalkulu bariazionala eta koordenatu polarrak asmatu zituen, baita bere izena daramaten zenbakiak eta banaketa ere.  ekuazio deitzen zaio honako egitura duenari: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> kasuetan izan ezik, non egiazki lineal bat baita. Berehalakoa da egiaztatzea <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> aldaketak lineal bihurtzen duela <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bernoulli da, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>y</mi><mfrac><mi>′</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>. Ekuazioa <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>-z zatituta, <math display=\"inline\"><mrow><mi>y</mi><mfrac><mi>′</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>−</mi><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> <strong>Homogeneoa.</strong>  <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (homogeneoa; partikularra amaitu gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Riccatiren ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Riccatiren (1676-05-28, Venezia; 1754-04-15, Treviso, Veneziako Errepublika). Hidraulikan egindako lan praktikoez gain, ekuazio diferentzialen ikertzaile handia izan zen eta hari zor zaizkio ordena-laburtze metodo desberdinak, aldagaien banantzea eta bere izena daraman ekuazioaren azterketa zehatza, zeina, hala ere, Jacob Bernoullik aurretik aztertua baitzuen.  ekuazio deitzen zaio honako egitura duenari: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> kasuetan izan ezik, non egiazki lineal bat eta Bernoulli bat baitira, hurrenez hurren. Ez dago mota honetako ekuazioak ebazteko metodo orokorrik, baina arrazoiren batengatik (ikuskapena, problemaren propietate fisikoak, etab.) ekuazioaren soluzio partikular bat <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezagutzen bada, <math display=\"block\"><mrow><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math> aldagai-aldaketak Bernoulli batera laburtzen du, (2.81) eta (2.82) kenduz lortzen baita <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mn>2</mn><mi>B</mi><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>+</mo><mi>B</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> honen soluzioa dela <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> eta erabili gertaera hau soluzio orokorra aurkitzeko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Egiaztapena.</strong>  <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>p</mi><mo>′</mo></msup></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> ematen du, eta <math display=\"inline\"><mrow><msubsup><mi>y</mi><mi>p</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>: berdinak dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Aldagai-aldaketa, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>.</strong>  <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>; ordezkatuta: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>μ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mi>μ</mi></mrow><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mrow><mn>2</mn><mi>μ</mi></mrow><mi>x</mi></mfrac><mo>=</mo><msup><mi>μ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Bernoulli.</strong>  <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>V</mi></mfrac></mrow></math> hartuta, ekuazio lineala lortzen da: <math display=\"block\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>V</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <strong>Homogeneoa.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mi>B</mi><mo>⇒</mo><mi>V</mi><mo>=</mo><mfrac><mi>B</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>μ</mi></math>-ra eta <math display=\"inline\"><mi>y</mi></math>-ra itzuli.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>3</mn><mi>B</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>μ</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mi>C</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluziorik ezagutzen ez denean, 3.27 problemako aldagai-aldaketa erabil daiteke, zeinak bigarren ordenako lineal homogeneo batean bihurtzen baitu —izan ere, han ikusiko dugun bezala, Riccatiren ekuazioak zentzu zehatz batean bigarren ordenako lineal homogeneoen baliokideak dira— eta 3. eta 6. kapituluetako metodoak saia daitezke. Honek ere huts egiten badu, beste askotan bezala, 7. kapituluko metodo hurbilduetara jo beharko da."
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Inguratzaileak eta soluzio singularrak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Deribatuan ebatzi gabeko ekuazioak aztertu aurretik, digresio geometriko labur bat egingo dugu. Har dezagun 2.4 irudiko kurba-sorta, zeinaren ekuazioa <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baita. Ikus daitekeenez, badago kurba bat, <math display=\"inline\"><mi>E</mi></math>, familiari ez dagokiona (eta, beraz, ez"
    },
    {
     "mota": "ezezaguna",
     "oina": "Kurba-sorta baten inguratzailea eta puntu anizkoitzak.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "duela ekuazio uniparametriko hori betetzen), baina puntu bakoitzean familiaren kurba batekiko ukitzailea dena. Propietate hau duen kurba bati kurba-sortaren <strong>inguratzaile</strong> deitzen zaio. Dakigun bezala, sortaren ekuazioa deribatu eta <math display=\"inline\"><mi>C</mi></math> parametroa ezabatzean familiaren <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazio diferentziala lortzen dugu, zeina, ekuazio finituarekin gertatzen denaren aldean, bai beteko baitu inguratzaileak, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntu bakoitzean haren malda <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> han ukitzaile zaion sortaren kurbaren bera baita. Beraz, soluzio singular bat izango da bai orain arte kontzeptu horri eman zaion zentzuan —soluzio orokorrari ez baitagokio— bai batzuetan erabiltzen den murriztaileagoan, hau da, bere puntu guztietan bakartasun-propietatea hausten duen soluzioa izatea, haietatik ukitzaile bereko soluzio bat baino gehiago igarotzen delako."
    },
    {
     "mota": "testua",
     "html": "Ikusiko dugun bezala, hau da deribatuan ebatzi gabeko ekuazioen soluzio singularrak agertzen diren era tipiko bat, nahiz eta ez bakarra. Hori egiaztatu ahal izateko, ikus dezagun nola kalkula daitekeen inguratzailearen ekuazioa. Irudiko <math display=\"inline\"><mi>P</mi></math> puntua parametroaren <math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><mrow><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi></mrow></math> balioei dagozkien sortaren bi kurbatan dago; beraz, bi kurben ekuazioak betetzen ditu, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, edo bi ekuazio hauen konbinazio lineal independenteak, hala nola <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>C</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo>→</mo><mn>0</mn></mrow></math> limitean bi kurbak nahasten joango dira eta <math display=\"inline\"><mi>P</mi></math> puntua inguratzailera joango da, zeinak, beraz, limite hori hartuz lortzen diren ekuazioak beteko baititu: <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Inguratzailearen ekuazio finitua aurreko bi ekuazioen artean <math display=\"inline\"><mi>C</mi></math> parametroa ezabatuz lortzen da. Inguratzaileak ez du betetzen familiaren ekuazioa <math display=\"inline\"><mi>C</mi></math>-ren balio finkorik baterako, baina —erregulartasunaz gain, <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>C</mi><mn>2</mn></msup><mo>≠</mo><mn>0</mn></mrow></math> dela suposatuz— hasiera batean (2.88) ekuazioa erabil daiteke inguratzaileari <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan ukitzaile zaion familiaren kurbari dagokion <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balioa lortzeko. Konstantearen balio aldakor hori (2.87)n ordezkatuz inguratzailearen ekuazio inplizitua lortzen da. Kontuan izan, hala ere, (2.87)–(2.88) ekuazioek ekuazioak betetzen dituzten beste leku geometriko batzuk izan ditzaketela. Adibidez, <math display=\"inline\"><mi>Q</mi></math> puntuak ekuazio berak beteko ditu limite horretan, baina <strong>puntu anizkoitzen</strong><span class=\"j-oin\">[ Batzuetan puntu <strong>aknodal</strong> ere deitzen zaie.]</span> lerro batera konbergitzen du, hau da, sortaren kurba bakoitzak bere burua mozten duen puntuetara. Baina kontuan izan <math display=\"inline\"><mi>A</mi></math> puntu anizkoitzen lerroa ez dela sortarekiko ukitzailea eta, beraz, ez duela malda bera. Ondorioz, inguratzaileak (2.87)–(2.88) ekuazioak betetzen dituzten beste kurba batzuetatik bereiz daitezke, haiek, gainera, sortaren ekuazio diferentziala betetzen baitute. (Ikus 2.29 problema ere)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> sortaren inguratzaileak. Ba al dago puntu anizkoitzik?"
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Deribatuan ebatzi gabeko ekuazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazio diferentzial bat ebatzi nahi bada, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazio finitutik <math display=\"inline\"><mi>z</mi></math> askatzen saia daiteke eta agertzen diren <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —<math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delarik— ekuazioak ebaztea, aldi berean prozesuan gal edo irabaz daitezkeen soluzio singularrekin kontuz ibiliz."
    },
    {
     "mota": "testua",
     "html": "Adibidez, ekuazioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> deribatuan ebatziz honela idatz daiteke <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta beraz soluzioak faktore bakoitza ezeztatuz lortzen direnak dira: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>C</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Beste adibide bat mekanikako Kepler-en problema ebaztean aurkitzen dugu. <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math> potentzial newtondarraren kasuan, energia mekanikoaren eta momentu angeluarraren kontserbazio-legeak koordenatu polarretan honako hauek dira <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Ekuazio hauetatik <math display=\"inline\"><mi>t</mi></math> ezabatzen bada eta <math display=\"inline\"><mi>r</mi></math> distantzia polarraren ordez <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> erabiltzen bada, orbitaren ekuazioa honela idazten da: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mi>p</mi></mfrac><mi>u</mi><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>ε</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>k</mi></mrow></math> zeinua <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>) gisa aukeratu behar da indar erakargarrien (aldaragarrien) kasuan. <math display=\"inline\"><mrow><mi>p</mi><mo>≡</mo><msup><mi>L</mi><mn>2</mn></msup><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> parametro fokalari <em>semilatus rectum</em> deitzen zaio astronomian eta <math display=\"inline\"><mrow><mi>e</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mi>E</mi><mi>/</mi><msub><mi>E</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> eszentrikotasuna kasu erakargarriko orbita zirkularren <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mn>2</mn><mi>p</mi></mrow></math> energia minimoaren bidez definitzen da."
    },
    {
     "mota": "testua",
     "html": "Ekuazioa <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mi>p</mi></mfrac><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>φ</mi><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>d</mi><mi>u</mi><mi>/</mi><mi>d</mi><mi>φ</mi></mrow></math> deribatua askatu eta aldagaiak banatu ondoren lortzen baita, integrala eginez ebazten da <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi>A</mi><mo>+</mo><mn>2</mn><mi>B</mi><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>B</mi><mo>−</mo><mi>u</mi></mrow><msqrt><mrow><mi>A</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> eta horrela, perizentroaren posizioa ematen digun <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> integrazio-konstantea erabiliz, orbitaren ekuazioa honela idazten da <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mo>+</mo><mi>e</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>p</mi></mfrac><mi>.</mi></mrow></math> (2.92)n aldagaiak banatzean, (2.95) soluzio orokorraren inguratzaileak galdu dira, honela emanak <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mo>±</mo><mi>e</mi></mrow><mi>p</mi></mfrac><mo>,</mo></mrow></math> zeinak (2.92)n <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> eginez ere lortzen baitira. Soluzio singular horien esanahi geometrikoa nabaria da: abside-posizioak ematen dituzte, <math display=\"inline\"><mi>r</mi></math>-ren balio minimo eta maximoei baitagozkie. Leku geometriko horietako lehena <math display=\"inline\"><mrow><mi>p</mi><mi>u</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>e</mi></mrow></math> perizentroei dagokie eta beti existitzen da; baina, <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi>p</mi><mi>u</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mi>e</mi></mrow></math> soluzioa, apozentroak ematen dizkiguna, indarra erakargarria (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>) eta energia negatiboa (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>e</mi><mo>&lt;</mo><mn>1</mn></mrow></math>) denean soilik agertzen da, 2.5 irudiaren kasuan bezala."
    },
    {
     "mota": "ezezaguna",
     "oina": "Orbita eliptikoak, perizentroak eta apozentroak.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> ekuazioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hala ere, kasu askotan deribatua (hau da, <math display=\"inline\"><mi>z</mi></math>) askatzea bera ez da lan erraza eta egin badaiteke ere emaitza korapilatsua izan daiteke. Horregatik, askotan, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazio finituaren soluzio esplizitua bilatu beharrean, hobe da forma parametrikoan ebaztea: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delarik, eta gero <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>z</mi><mi>d</mi><mi>x</mi></mrow></math> gertaera erabiltzea, hau da, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>u</mi></mrow></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mi>d</mi><mi>v</mi><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>u</mi></mrow></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mi>d</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> forma simetrikoko ekuazio bat lortzeko. Ekuazio honen kalkula dezakegun <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzio bakoitzeko, abiapuntuko ekuazioaren soluzio parametriko bat dugu honako forman <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Adibidez, Kepler-en problemaren (2.92) ekuazioan karratuak osatzen baditugu, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>−</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> zailtasunik gabe ikusten da nola lortu soluzio parametrikoak. Adibidez, parametro gisa <math display=\"inline\"><mi>θ</mi></math> angelu berria eta <math display=\"inline\"><mi>φ</mi></math> angelu polarra aukeratuz, soluzio bat hau da <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo>+</mo><mfrac><mi>e</mi><mi>p</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>e</mi><mi>p</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Orain ekuazio hauek <math display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mi>d</mi><mi>φ</mi></mrow></math> kalkulatzeko erabiltzen baditugu, <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi><mo>=</mo><mi>d</mi><mi>φ</mi></mrow></math> lortzen dugu, zeinaren <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> soluzioa (2.105)en ordezkatuz (2.95) orbita itzultzen baitigu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>v</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>v</mi></mrow></math> parametrizazioa <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> ekuazioa ebazteko."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikus ditzagun, ondoren, parametrizazio egokia berehala asmatzen den ekuazio familia batzuk."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> formako ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Aldagai askea zein mendekoa falta badira, soluzioak <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> formakoak dira, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren <math display=\"inline\"><mi>u</mi></math> erro orotarako. Beraz, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math> dugu, hau da, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow></math>, eta horregatik ekuazio diferentzialaren soluzioa forma inplizituan idatz daiteke, <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mi>C</mi></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mi>F</mi></math>-ren erroak aurkitu beharrik gabe. Jakina, halako errorik existitzen ez bada idatzi berri dugun soluzioa formala izango da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>7</mn></msup><mo>−</mo><mn>5</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioa. Formala al da soluzio hori soluzio errealak soilik onartzen baditugu?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hurrengo lau ataletan aztertuko ditugun ekuazioetan, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> egin ondoren, <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math> baldintza ebatzi behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Ezezaguna falta bada eta aldagai askea aska badaiteke, ekuazioaren soluzio parametrikoa berehalakoa da: aski da <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartzea, eta gero <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mrow></math> ebatzi behar da, zeinak aldagaiak banatuta dituen eta abiapuntuko ekuazioaren soluzio parametrikoa zuzenean ematen baitu: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mo>∫</mo><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Aldagai askea falta bada eta ezezaguna aska badaiteke, ekuazioaren soluzio parametrikoa <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math> ebatzi behar da, zeina banangarria baita eta abiapuntuko ekuazioaren soluzio parametrikoa aurkitzea ahalbidetzen baitu: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>u</mi></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mi>C</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>5</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>5</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clairauten ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Clairauten (1713-05-07, Paris; 1765-05-17, Paris). Aztertu zituen problema askoren artean hiru gorputzena nabarmentzen da. Ilargiaren higiduraren azterketan, soluzio singularrak kalkulatzeko metodoak erabili zituen. Halley kometaren itzulera kalkulatu zuen 1759an eta Maupertuisek zuzendutako espedizioan parte hartu zuen Newtonen aurresan teorikoa egiaztatzeko, hau da, Lurra esferoide oblatu bat dela.  <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aurreko kasuak bezala ebatz daiteke <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> parametroarekin, ekuazio parametrikoa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango baita eta bete behar den <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>  baldintza: <math display=\"inline\"><mrow><mi>u</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>. Beraz, hau da soluzioa: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (2.112)n faktoreetako edozein ezezta daitekeenez, bi soluzio izango ditugu."
    },
    {
     "mota": "azpititulua",
     "testua": "Soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "Bigarren faktorea ezeztatzen bada (edo <math display=\"inline\"><mrow><mi>μ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> faktore integratzailea erabiltzen badugu)  <math display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> lortzen dugu eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math>  (2.111)en ordezkatuz soluzio orokorra lortzen dugu <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>x</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> zeina, ikusten dugun bezala, beti zuzen-sorta bat baita."
    },
    {
     "mota": "azpititulua",
     "testua": "Soluzio singularra"
    },
    {
     "mota": "testua",
     "html": "Lehen faktorea ezeztatzen bada, zuzenean forma parametrikoko soluzio bat dugu: <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> hau da, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Soluzio singular hau (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> eginez ere lortzen dena) hain zuzen ere orokorraren inguratzailearen ekuazioa da, (2.115) ekuazioa sortarena baita (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> delarik) eta (2.114) haren parametroarekiko deribatua."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lagrangeren ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Lagrangeren (1736-01-25, Turin, Sardinia-Piemonte; 1813-04-10, Paris). Analisiari, zenbakien teoriari, mekanika zerutiarrari eta mekanika analitikoari buruzko ikerketetan nabarmendu zen, azken honen sortzaile nagusitzat jo daitekeelarik. Newtonez geroztik mekanikari buruz egindako guztia bildu zuen bere maisulanean: _Mécanique analytique_  (1788). Bere higidura-ekuazioengatik, koordenatu orokortuengatik, energia potentzialaren kontzeptuagatik eta bere izena daramaten biderkatzaileengatik gogoratzen da.  ekuazioa hau da <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≢</mo><mi>u</mi></mrow></math> delarik. Berriz ere <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> aldaketa erabiliz <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazio parametrikoa lortzen dugu eta bete behar den <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>  baldintza: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>. Beraz, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Bigarren ekuazioa lineala da <math display=\"inline\"><mi>x</mi></math>-rekiko eta, <math display=\"inline\"><mrow><mi>μ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>-rekin biderkatu ondoren, lortzen dugu <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi></mrow></mfrac><mi>x</mi><mo>+</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Badakigu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzio orokorra lortzen, zeina (2.117)en ordezkatuz Lagrangeren ekuazioaren orokorra ematen baitigu forma parametrikoan <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Soluzio singularren aukera <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> faktorea ezeztatzetik dator. Izan ere, ekuazioak <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzio (konstanteak) baditu (<math display=\"inline\"><mi>u</mi></math>-ren balio bat edo gehiagotarako gerta daitekeena, baina ez <math display=\"inline\"><mi>u</mi></math> ororako, orduan Clairauten ekuazioaren kasuan egongo baikinateke), haietako bakoitzak Lagrangeren ekuazioa betetzen duen <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zuzen bat definitzen du."
    },
    {
     "mota": "testua",
     "html": "Kontuan izan goian deskribatutako prozedura osoa erabili beharrean, aski dela gogoratzea <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> aldaketa egin ondoren abiapuntuko ekuazioaren deribatuak —hau da, (2.118) ekuazioak— <math display=\"inline\"><mi>u</mi></math>-ren menpe soilik dagoen faktore integratzaile bat onartzen duela."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>3</mn></msup></mrow></math>-ren soluzio orokorra. Ba al dago soluzio singularrik?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu (2.118) ekuazioaren faktore integratzaile bat."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deribazio-metodoa"
    },
    {
     "mota": "testua",
     "html": "Zenbait kasutan ekuazio diferentzial bat ebazteko modurik azkarrena lehenik deribatzean datza, ekuazio berria jatorrizkoa baino sinpleagoa izan baitaiteke. Jakina, ekuazio berriak soluzio gehiago izango ditu eta haien artean jatorrizko ekuazioa ere betetzen dutenak aukeratu beharko dira. Adibide gisa Kepler-en problemaren (2.92) ekuazioa berriz ebatziko dugu. Ekuazioa deribatzean lortzen dugu <math display=\"block\"><mrow><mn>2</mn><msup><mi>u</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>−</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Parentesi artekoa ezeztatzeko baldintza Bineten ekuazioa da: <math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mi>.</mi></mrow></math> Kasu honetan kanpo-indar konstante baten menpeko oszilatzaile harmoniko bat deskribatzen duenez, erraz ebazten da eta, hurrengo kapituluan ikusiko dugun bezala, soluzio guztiak soluzio orokorrean barneratuta daude <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo>+</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Hemen bi konstante arbitrario daude, <math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, baina, jatorrizko ekuazioa lehen ordenakoa denez, bakarra gera daiteke. Izan ere, aurkitu berri dugun soluzio-familia (2.92)n ordezkatzen badugu, zuzenean ikusten da <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>e</mi><mi>/</mi><mi>p</mi></mrow></math> aukeratu behar dela; beraz, (2.95) orbitak berreskuratzen dira. (2.123)n ezeztatzen dena <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> bada, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> soluzioa (2.92) ekuazioan ordezkatuz absideak deskribatzen dituzten soluzio singularrak aurkitzen dira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Banangarria.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt></mrow></mfrac><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∓</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt><mo>+</mo><mi>A</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> Bi adarrek soluzio-familia bera ematen dute:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>±</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu honako kurba-familien ekuazio diferentzialak: (a) jatorritik igarotzen diren zuzenak, (b)  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a) Jatorritik igarotzen diren zuzenak, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi></mrow></math>.</strong> Parametro bakarra du (<math display=\"inline\"><mi>m</mi></math>), beraz lehen ordenako EDO bat espero da. <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>m</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>b)  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>⇒</mo><mi>C</mi><mo>=</mo><mi>y</mi><mfrac><mi>′</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math>; jatorrizkoan ordezkatuta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>y</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Aurkitu soluzio orokorra <math display=\"block\"><mrow><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aztertu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasierako baldintzei dagozkien soluzioen definizio-tarteak."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Izendatzailea nulua ez bada, zenbakitzailea ezeztatzea da baldintza: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, banangarria."
      },
      {
       "mota": "testua",
       "html": "<strong>Bereizi eta integratu.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>k</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Tangentearen batuketa-formulaz, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>D</mi><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>D</mi><mi>x</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>≔</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Hasierako baldintzak.</strong>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>  (soluzio elementala, zuzen bat, tarte osoan definitua).",
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>⇒</mo><mi>D</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-n etendura duena; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntutik igarotzen den adarra da definizio-tartea.",
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez dago definituta; zuzenean <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>⇒</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n etendura du."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>"
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
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Paradoxa bat?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har dezagun, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kasurako, ekuazio diferentziala: <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mi>d</mi><mi>y</mi><mo>−</mo><mi>y</mi><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (a) Frogatu deribatu gurutzatuen berdintasuna. <br>(b) Frogatu ekuazioa <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">arctan</mi><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> gisa idatz daitekeela, edo, koordenatu polarretan, <math display=\"inline\"><mrow><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> gisa. <br>(c) Kalkulatu ekuazio diferentzialari lotutako eremuaren integral kurbilineoa jatorrian zentratutako zirkunferentzia batean zehar. <br>(d) Horrela lortutako emaitzak paradoxikoa iruditu beharko litzaizuke. Iruzkin ezazu hori."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu, koordenatu polarretan, beren arkuek jatorritik eusten duten angeluarekiko proportzionalak diren luzerak dituzten kurba guztiak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioak <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako faktore integratzaile bat onar dezan baldintza beharrezko eta nahikoa, zeinaren adierazpena aurkitu behar baita."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup></mrow><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Zenbakitzailea eta izendatzailea 4. graduko polinomio homogeneoak dira: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>  (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>): <math display=\"block\"><mrow><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>4</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>u</mi><mo>+</mo><msup><mi>u</mi><mn>4</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac></mrow></math> <strong>Aldagai-bereizketa.</strong>  <math display=\"block\"><mrow><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac></mrow></math>. Izendatzailea faktorizatuta (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), zatiki partzialetan deskonposatuta (<math display=\"inline\"><mrow><mfrac><mi>A</mi><mi>u</mi></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>C</mi><mi>u</mi><mo>+</mo><mi>D</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>):"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>u</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mn>3</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>"
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
       "html": "Frogatu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa zehatza bada eta konstante bat ez den <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> biderkatzaile bat onartzen badu, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> ekuazioaren soluzio orokor bat dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren soluzioa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>, ez da zehatza."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bilatu.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mi>P</mi></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>y</mi></mfrac></mrow></math>, <math display=\"inline\"><mi>y</mi></math>-ren funtzio hutsa: <math display=\"block\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>y</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> <strong>Ekuazio zehatza.</strong>  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn></mrow></math>-ekin berdinduta <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mo>⇒</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>y</mi></mrow></math>"
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
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Homogeneoa.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>y</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mi>D</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> <strong>Partikularra.</strong>  <math display=\"inline\"><mi>μ</mi></math>-z biderkatuta eta eskuinaldea zatika integratuz: <math display=\"block\"><mrow><mi>y</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mo>∫</mo><msup><mi>x</mi><mn>5</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen badira. <em>Iradokizuna:</em> Erabili 283. orrialdean aurki daitezkeen errore-funtzioaren definizioa eta propietateak."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Faktore integratzailea.</strong>  <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> idatzita, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  eskatuta: <math display=\"block\"><mrow><mfrac><msup><mi>μ</mi><mo>′</mo></msup><mi>μ</mi></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math> <strong>Ekuazio zehatza.</strong>  <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>y</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>y</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mi>y</mi></math>-rekiko integratuta <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>y</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da, eta <math display=\"inline\"><mi>x</mi></math>-rekiko deribatua konparatuta: <math display=\"block\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <strong>Soluzio orokorra.</strong> Berrantolatuta, eta erf funtzioaren definizioa erabilita (<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <strong>Hasierako baldintza.</strong>  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mn>100</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren soluzio orokorra. <em>Iradokizuna:</em> Erabili 286. orrialdeko integral esponentzialaren definizioa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "RL zirkuitua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>R</mi></math> erresistentzia eta <math display=\"inline\"><mi>L</mi></math> autoindukzioa dituen zirkuitu elektriko bat, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial-diferentzia baten menpekoa. Hasierako intentsitatea <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ezagututa, aurkitu <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta aplikatu emaitzak <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> tentsio alterno sinusoidalaren kasuan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ekuazio homogeneoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazio homogeneo bat bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>P</mi><mo>+</mo><mi>y</mi><mi>Q</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> faktore integratzailea onartzen duela, hau finitua bada. Zein izango da faktore integratzailea <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo>+</mo><mi>y</mi><mi>Q</mi><mo>=</mo><mn>0</mn></mrow></math> bada?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ekuazio isobarikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ekuazio homogeneoek eskala-aldaezintasun bat dute <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eraldaketen aurrean. Orokortze bat ekuazio isobarikoek ematen dute, zeinak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><msup><mi>a</mi><mi>λ</mi></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> motako aldaketen aurrean aldaezinak baitira <math display=\"inline\"><mi>λ</mi></math>-ren balioren baterako; hau da, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> motako ekuazioak dira"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "Aztertu mota honetako ekuazioak ebazteko metodoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>6</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></math>, ez da zehatza. Ez <math display=\"inline\"><mi>x</mi></math> ez <math display=\"inline\"><mi>y</mi></math> soilik menpeko faktorerik ez dago zuzenean, baina <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> probatuz (<math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> motako proba zuzena):"
      },
      {
       "mota": "testua",
       "html": "<strong>Egiaztapena.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mo>=</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, zehatza da."
      },
      {
       "mota": "testua",
       "html": "<strong>Ebatzi.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>x</mi></mfrac><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>-ekin berdinduta <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>⇒</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>3</mn><mi>y</mi><mo>−</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ibilbide ortogonalak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> kurben familia uniparametriko bat emanda, ibilbide ortogonal deitzen zaie familiakoak puntu guztietan angelu zuzenean mozten dituzten kurbei. <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> familiaren ekuazio diferentziala bada, zein izango da ibilbide ortogonalen ekuazio diferentziala?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math> parabolen ibilbide ortogonalak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>6</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, koefiziente linealek proportzio bera dute: zuzen paraleloen kasua da. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math> hartuta, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mo>=</mo><mn>3</mn><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>d</mi><mi>y</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>z</mi><mo>−</mo><mn>3</mn><mi>d</mi><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. Ordezkatuta: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>z</mi><mo>−</mo><mn>3</mn><mi>d</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>z</mi><mo>+</mo><mn>6</mn><mo>−</mo><mn>3</mn><mi>z</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi></mrow></math> Integratuta eta <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math> atzera ordezkatuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>k</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa aldakorra",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>M</mi></math> masa estrukturaleko suziri batek <math display=\"inline\"><mi>m</mi></math> hasierako masako erregaia du. Lurraren gainazaletik bertikalki jaurtitzen da eta, <math display=\"inline\"><mi>v</mi></math> abiadurarekin, <math display=\"inline\"><mi>k</mi></math> kilogramo gas segundoko kanporatzen ditu. Pisua izan ezik indar guztiak arbuiatzen badira eta grabitatearen azelerazioa ibilbide osoan zehar konstante mantentzen dela suposatzen bada, zeintzuk izango dira abiadura eta altuera erregaia agortzen denean?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa erlatibista",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erlatibitate berezian <math display=\"inline\"><mi>v</mi></math> abiadurarekin higitzen den partikula baten masa <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> da, <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math> bere geldiuneko masa eta <math display=\"inline\"><mi>c</mi></math> argiaren abiadura hutsean izanik. <br>(a) Partikula geldiunetik abiatzen bada eta espazio hutsean grabitazio-eremu konstante baten eraginpean higitzen bada, zein izango da bere abiadura <math display=\"inline\"><mi>t</mi></math> unean, eta denbora-tarte handi bat igaro denean? <br>(b) Izan bedi <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mo>≡</mo><mi>m</mi><mo>−</mo><msub><mi>m</mi><mn>0</mn></msub></mrow></math> partikularen masaren aldakuntza eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></math> <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> indarrak egindako lana. Egiaztatu zuzenean <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. <br>(c) Egiaztapen gisa, ondorioztatu partikularen masak abiadurarekin duen aldakuntza-legea azken emaitza hau eta indarraren definizioa abiapuntu hartuta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Koefiziente linealak paraleloak dira (<math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> bietan), beraz <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> dagokio. <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mo>′</mo></msup></mrow></math>. Ordezkatuta: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>z</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>z</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mi>z</mi><mo>−</mo><mn>8</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> <strong>Aldagai-bereizketa.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>z</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>d</mi><mi>x</mi></mrow></math>. Ezkerraldeko zatikia <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mi>z</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math> moduan zatituta eta integratuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>z</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>9</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>4</mn><mi>x</mi><mo>+</mo><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>"
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
       "html": "Frogatu ekuazio homogeneo oro banangarria dela koordenatu polarretan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Riccati motakoa da; soluzio partikularra <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>  ordezkatuta: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <strong>Bernoulli.</strong>  <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math>  (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>z</mi><mfrac><mi>′</mi><msup><mi>z</mi><mn>2</mn></msup></mfrac></mrow></math>): <math display=\"block\"><mrow><mi>−</mi><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> <strong>Ekuazio lineala.</strong> Faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>⇒</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>z</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>k</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Atzera ordezkatuta.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>z</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>k</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></mfrac><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
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
       "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren soluzio orokorra."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>1. bidea: Lagrangeren ekuazio gisa.</strong> Ekuazioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> moduan idatzita, Lagrangeren egiturakoa da. <strong>Parametroa.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math> eginda eta <math display=\"inline\"><mi>x</mi></math>-rekiko deribatuta: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mn>2</mn><mi>p</mi><mo>+</mo><mn>2</mn><mi>x</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow></math> hau da <math display=\"inline\"><mrow><mi>p</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtziotzat hartuta ekuazio lineala da; <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math>-z biderkatuta ezkerraldea zehatza da: <math display=\"block\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>p</mi><mi>d</mi><mi>p</mi><mo>−</mo><mn>2</mn><msup><mi>p</mi><mn>2</mn></msup><mi>d</mi><mi>p</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>p</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><msup><mi>p</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>p</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>p</mi><mn>3</mn></msup></mrow><mn>3</mn></mfrac><mo>=</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>p</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><mi>p</mi></mfrac><mo>+</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (soluzio parametrikoa) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2. bidea: ekuazio isobariko gisa.</strong> Bigarren mailako ekuazio hori <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math>-rentzat esplizitatuz: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>±</mo><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>y</mi></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>x</mi><mo>±</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi></mrow></msqrt></mrow></math> Ekuazioa <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>a</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><msup><mi>a</mi><mn>2</mn></msup><mi>y</mi></mrow></math> eskala-aldaketaren aurrean aldaezina da (isobarikoa). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi></mrow></math> ordezkatuta banangarri bihurtzen da <math display=\"inline\"><mi>u</mi></math>-rentzat, eta integratu ondoren emaitza inplizitua lortzen da:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>4</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>D</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> zuzenak <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazio diferentzialaren kurba integralen familia mozten badu, ebakidura-puntuetako ukitzaileak konkurrenteak direla. Frogatu <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> kasuan, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> aldatzean lortutako konkurrentzia-puntuen leku geometrikoa zuzen bat dela."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>  <strong>estrofoide</strong>-sortaren inguratzaileak eta puntu anizkoitzak. Marraztu sorta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Inguratzaileez eta puntu anizkoitzez gain, (2.87)–(2.88) ekuazioek <strong>goiburu</strong>  (kuspide) ere izan ditzakete. Adibide gisa, aurkitu eta marraztu <math display=\"inline\"><mrow><mn>9</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math> ekuazio diferentzialaren soluzio orokorra. Aztertu (2.87)–(2.88)ren soluzioa kasu honetan. Ekuazio diferentzialaren soluzioa al da?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Unibertsoaren «erradioa»",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eredu kosmologiko estandarrean Robertson-Walker unibertsoaren <math display=\"inline\"><mi>R</mi></math> eskala-faktorea Friedmann-en ekuazioaren arabera bilakatzen da:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>. Aztertu ekuazio honen soluzioak eta ikusi zein kasutan dagoen «leherketa handia» eta zeinetan unibertsoa azken kolapso baterantz doan."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math> kasua.</strong>  <math display=\"inline\"><mrow><msup><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><msqrt><mi>R</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>R</mi></msqrt><mi>d</mi><mi>R</mi><mo>=</mo><mi>±</mi><mi>d</mi><mi>t</mi></mrow></math>. Integratuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>R</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><mo>=</mo><mi>±</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Baldintzak infinituan",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Batzuetan, soluzioa zehazteko, hasierako baldintza eman beharrean, infinituan baldintza egoki bat ezartzen da. Adibide gisa, aurkitu ekuazioaren <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean bornatuta mantentzen den soluzio bakarra <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>-ren soluzio guztiak."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Banangarria.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi><mo>+</mo><mi>A</mi></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>±</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta singularrak </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Sinuaren batuketa-formulaz <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> itxuran ere idatz daiteke, baina <strong>parametro bakarra</strong> da benetan askea."
      },
      {
       "mota": "testua",
       "html": "<strong>Deribatuz.</strong>  <math display=\"inline\"><mi>x</mi></math>-rekiko deribatuta: <math display=\"block\"><mrow><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bi adarrak: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>C</mi></mrow></math>  (eta jatorrizkoan sartuta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>, singularrak); edo <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, eta jatorrizkoak lotzen ditu: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>A</mi><mo>′</mo></msup><mo>±</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> singularrak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu koadratura baten bidez honako formako ekuazioen soluzio orokorra ematen duen adierazpen bat <math display=\"block\"><mrow><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu honako formako ekuazioak ebazteko metodoa <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aplikatu metodoa <math display=\"inline\"><mrow><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ebazteko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> kasua (eskatutakoa).</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math> hartuta (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup></mrow></math>), ekuazioa lineala da <math display=\"inline\"><mi>u</mi></math>-rentzat: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> Homogeneoa: <math display=\"inline\"><mrow><msub><mi>u</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>. Konstantearen aldakuntzaz, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> Zatika integratuta (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>): <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msqrt><mfrac><mi>π</mi><mn>2</mn></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi></mrow></math> Beraz:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mroot><mrow><mi>k</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msqrt><mfrac><mi>π</mi><mn>2</mn></mfrac></msqrt><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi></mrow><mn>3</mn></mroot></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Abraham\n    (1875-03-26, Danzig, Alemania ---gaur egun Gdansk deitzen da eta Poloniakoa da---;\n  1922-11-16, Munich). Planck-en ikasle honek elektrodinamikan lan egin zuen bereziki eta\n  bere elektroiaren teoriak ospe handia lortu zuen Lorentzenak ordezkatu zuen arte. Bizitza\n  osoan Einsteinen erlatibitate bereziaren aurka egin zuen, Lorentzen teoriarekin bateragarria\n  zena.\n-Lorentz\n    (1853-07-18, Arnhem, Herbehereak; 1928-02-04, Haarlem, Herbehereak). Maxwellen teoriaren\n  fintzeak eta, elektroiaren existentzia baieztatu aurretik, argia atomoetako karga\n  elektrikoaren oszilazioek sortzen zutela egindako proposamenak bere elektroiaren teoriara\n  eraman zuten, zeinak 1902ko Fisikako Nobel saria emango baitzion. Zenbait alderditan\n  Einsteinen erlatibitate bereziaren teoriaren aitzindari bat da, non bere izena daramaten\n  eraldaketek zeregin nagusia jokatzen baitute.\n-en ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hurbilketa ez-erlatibistan, <math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">→</mo></mover></math> eremu elektriko konstante eta uniforme batean higitzen den <math display=\"inline\"><mi>q</mi></math> kargako partikula puntual batek ekuazioa betetzen du <math display=\"block\"><mrow><mi>m</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>q</mi><mover><mi>E</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>q</mi><mn>2</mn></msup><mover><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> igorritako erradiazioagatik balaztatzea kontuan hartzen denean. Frogatu ekuazio hauek fisikoki onartezinak diren soluzioak dituztela, non azelerazioa mugarik gabe hazten baita. Egiaztatu <math display=\"inline\"><mrow><mi>q</mi><mo>→</mo><mn>0</mn></mrow></math> limitean <math display=\"inline\"><mrow><mi>m</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math> berreskuratzeko baldintza gehigarriak soluzio fisikoak hautatzea ahalbidetzen duela. Zeintzuk dira hauek?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu honako motako ekuazio batek <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezin dituela soluzio oszilakorrak izan. Zergatik ez du <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> ekuazioaren <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioak aurreko baieztapenaren kontradibide bat osatzen? <em>Iradokizuna:</em> Har ezazu kontuan soluzio oszilakor baten grafikoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu ekuazioaren soluzio guztiak <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msqrt><mrow><mi>x</mi><mi>y</mi><mo>+</mo><mn>1</mn></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi></mrow></math>. Ordezkatuta: <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></math>, hau da <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></math>  (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>+</mo><mn>1</mn><mo>≥</mo><mn>0</mn></mrow></math> izan behar da). <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> berreskuratuta, <math display=\"inline\"><mrow><mi>μ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>4</mn></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>4</mn></mrow><mrow><mn>4</mn><mi>x</mi></mrow></mfrac></mrow></math>"
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
       "html": "Ebatzi honako problema eta aztertu soluzioen definizio-tartea: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>t</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Berridatzita, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, ez da zehatza. <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probatzeko, <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>μ</mi></mrow></math>  eskatuz: <math display=\"block\"><mrow><mfrac><mi>μ</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>μ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow></math> Ordezkatu eta sinplifikatuta, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>-rekin: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Bigarrenetik integratuta <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta lehenengoarekin berdinduta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>h</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Beraz <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>k</mi></mrow></math>. Hasierako baldintza (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>t</mi><mn>0</mn></msub></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>e</mi><msub><mi>x</mi><mn>0</mn></msub></msup><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>)  erabilita:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mn>2</mn><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><msup><mi>e</mi><msub><mi>x</mi><mn>0</mn></msub></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi honako ekuazio diferentziala, <math display=\"inline\"><mi>α</mi></math>-ren balio erreal desberdinetarako: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mi>α</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu ondoko ekuazioaren soluzio orokorra: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>+</mo><mn>14</mn><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> moduan, ez da zehatza. Faktore integratzailea <math display=\"inline\"><mi>x</mi></math>-ren mende bilatu: <math display=\"block\"><mrow><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>x</mi><mo>+</mo><mn>14</mn><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>7</mn></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> <math display=\"inline\"><mi>x</mi></math>-ren funtzio hutsa denez, existitzen da <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> Biderkatuta, ekuazio zehatza da. Orain <math display=\"inline\"><mi>F</mi></math>  potentziala: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>7</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>y</mi><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>μ</mi><mi>P</mi></mrow></math> inposatuta, gai komunak sinplifikatu eta: <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>6</mn><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> integralak (<math display=\"inline\"><mrow><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>)  erabilita: <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>6</mn><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>7</mn><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>1. bidea: faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>.</strong>  <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-z biderkatuta <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>: orain <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>M</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Potentziala.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∫</mo><mi>N</mi><mi>d</mi><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako faktore integratzaile bat erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Faktorearen ekuazioa.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eskatuta, zehatz-baldintzatik: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>y</mi><mi>μ</mi><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>x</mi><mi>μ</mi></mrow></math> sinplifikatuta <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>μ</mi></mrow></math>, hau da: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mi>μ</mi></mfrac><mo>=</mo><mi>d</mi><mi>v</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup></mrow></math> <strong>Potentziala.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>M</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; eta <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> konparatuta <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik; Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> jakinik Riccati erakoa dela eta <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>x</mi></mrow></math> soluzio partikularra ezagutzen dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Forma estandarra.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> <strong>Riccati arrow Bernoulli.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math> ordezkatuta <math display=\"inline\"><mi>u</mi></math>-rentzat Bernoulli-ekuazioa geratzen da (<math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math> gaiarekin), eta <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>u</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>1</mn><mi>/</mi><mi>u</mi></mrow></math> eginda lineala: <math display=\"block\"><mrow><mi>−</mi><msup><mi>w</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>w</mi><mo>+</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> <strong>Faktore integratzailea.</strong>  <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> itxurako faktorearekin integratuta: <math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>w</mi></mrow></math>  askatuta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>−</mo><mi>C</mi><mi>x</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>C</mi><mi>x</mi></mrow></mfrac></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik; Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi Riccati-ren ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo></mrow></math> jakinik <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> soluzio partikularra dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Egiaztapena.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>x</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac></mrow></math>; <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-k <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>p</mi><mo>′</mo></msup></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> ematen du, eta ordezkatuta azken bi gaiak ezeztatzen dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Aldaketa.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>  (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>)  ordezkatuta: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <strong>Bernoulli.</strong>  <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>u</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>  (<math display=\"inline\"><mrow><msup><mi>w</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>u</mi><mfrac><mi>′</mi><msup><mi>u</mi><mn>2</mn></msup></mfrac></mrow></math>) hartuta ekuazio lineala: <math display=\"block\"><mrow><msup><mi>w</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>w</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac></mrow></math> Homogeneoa: <math display=\"inline\"><mrow><msub><mi>w</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Konstantearen aldakuntzaz eta zatika integratuta: <math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> <strong>Atzera ordezkatuta.</strong>  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>w</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>  (konstantea <math display=\"inline\"><mrow><mn>2</mn><mi>C</mi></mrow></math>-z berrizendatuta):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>2</mn><mrow><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">tanh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">tanh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erako faktore integratzailea suposatuta."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Faktorearen ekuazioa.</strong>  <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> aldagai bakarraren menpekoa dela suposatuta, <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldintzatik, ekuazioko gai gehienak elkar ezeztatzen dira eta: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ekuazio zehatza.</strong>  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">sinh</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Bi aldiz zatika integratuta: <math display=\"block\"><mrow><mo>∫</mo><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong><math display=\"inline\"><mrow><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zehaztu.</strong>  <math display=\"inline\"><mi>y</mi></math>-rekiko deribatuta eta <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi></mrow></math>-rekin konparatuta: <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>K</mi><mo>=</mo><mi>C</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik; PVI eta PVF",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bereizi ekuazio diferentzialak ebazteko orduan hasierako baldintza batekin (PVI) edo mugalde baldintza batekin (PVF) planteatzea, hiru adibideren bidez: (a)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>; (b)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>; (c)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren soluzio orokorra <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> da."
      },
      {
       "mota": "testua",
       "html": "<strong>a) Hasierako-balioko problema (PVI): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (soluzio bakarra) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>b) Mugalde-balioko problema (PVF): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>B</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>. Kontraesana (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math>  <strong>eta</strong>  <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> aldi berean): baldintza hauekin ez dago soluziorik."
      },
      {
       "mota": "testua",
       "html": "<strong>c) Mugalde-balioko problema (PVF): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math>, edozein <math display=\"inline\"><mi>A</mi></math>-rentzat betetzen da: <math display=\"inline\"><mi>A</mi></math> edozein delarik ere baldintza betetzen denez, infinitu soluzio daude (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>)."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik; Clairaut",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>  (Clairaut motakoa), eta aurkitu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> zirkulu-familiaren ekuazio diferentziala."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Clairauten ekuazioa.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> probatuta (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>A</mi></mrow></math>): jatorrizko ekuazioan ordezkatuta <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>A</mi><mo>+</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> betetzen da edozein <math display=\"inline\"><mi>A</mi></math>-rentzat, hau da, soluzio-familia osoa da."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio berezia (inguratzailea), <math display=\"inline\"><mi>A</mi></math>-rekiko deribatuz.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac></mrow></math> probatuta (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi>x</mi><mn>2</mn></mfrac></mrow></math>): <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>⋅</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (familia), </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (inguratzailea) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Zirkulu-familia, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>.</strong>  Diferentziatuta: <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> Jatorrizko ekuazioan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>  ordezkatuta: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (zirkulu-familiaren ekuazio diferentziala) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu zein puntutan bermatzen den (edo ez) existentzia eta bakartasuna <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> hasierako-balioko problemarentzat."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Arazo-puntuak.</strong>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> zatikiak ez du zentzurik <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> denean, hau da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math> zuzenetan; era berean <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> puntuek ere arreta berezia eskatzen dute. Puntu horietan ezin da bermatu bakartasuna existentzia eta bakartasunaren teoremaren bidez, izendatzailea deuseztatzen delako."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Adibide osagarria: zirkulu-familia orokorra, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math>  (konstantea) izanik, <math display=\"inline\"><mi>μ</mi></math>-ren deribatu totala zero da bide-kurba lokoan: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> hots <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, non <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></math>: hemendik <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> berreskuratzen da (<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>y</mi></mrow></math>), forma simetrikoan <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa ez dela zehatza."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>. <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> faktore integratzailea erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Biderkatuta: <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> Bi zatikiak banaka integratuta: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>3</mn><msup><mi>y</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac></mrow></math> beraz:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazioa <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktore integratzailea erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ez-zehatza dela egiaztatu.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bilatu.</strong> Euler-en baldintza <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako aplikatuta: <math display=\"block\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>4</mn><mfrac><mi>x</mi><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>y</mi></mfrac></mrow></math> Integratuta: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ekuazio zehatza.</strong>  <math display=\"inline\"><mrow><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn></mrow></math>-ekin berdinduta: <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>+</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi hasierako-balioko problema <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Homogeneoa.</strong>  <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>′</mi><msub><mi>y</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>  erabilita: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> <strong>Soluzio partikularra, konstantearen aldakuntzaz.</strong>  <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>; ordezkatuta ekuazio osoan: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>u</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>⋅</mo><mi>u</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio orokorra.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Hasierako baldintza.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mi>B</mi><mo>=</mo><mn>2</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, ezkerraldea bi faktoretan deskonposatuz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Faktorizazioa.</strong>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dela egiaztatzen da (zabalduta: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>  ✓)."
      },
      {
       "mota": "testua",
       "html": "<strong>a)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> adarra.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mi>d</mi><mi>x</mi></mrow></math>, integratuta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>A</mi></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> <strong>b)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> adarra.</strong>  <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>, integratuta: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (bi soluzio-adar independente) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi ekuazio lineala <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math> bi bidetatik: konstantearen aldakuntzaz eta faktore integratzailearen bidez zuzenean."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>1. bidea: homogeneoa + konstantearen aldakuntza.</strong>  Homogeneoa: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mn>3</mn><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac></mrow></math>, integratuta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>B</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Konstantearen aldakuntzaz, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>: ordezkatuta <math display=\"inline\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mfrac><mi>x</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>⇒</mo><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>⇒</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>A</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>A</mi></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>2. bidea: faktore integratzailea, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. Ekuazio osoa <math display=\"inline\"><mi>μ</mi></math>-z biderkatuta, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>y</mi><mi>P</mi></msub><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>:"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktore integratzaile bat bilatuz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probatu, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>.</strong> Kate-erregelaz <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mi>y</mi></mrow></math>. Euler-en baldintza ordezkatuta eta sinplifikatuta: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></mrow></math> <strong>Ebatzi.</strong>  <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mi>μ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mi>s</mi></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ekuazio zehatza, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>-z biderkatuta.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mi>F</mi></math> eraiki, <math display=\"inline\"><mi>P</mi></math>-tik integratuz (<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math>): <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hau <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math>-rekin berdinduta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik; Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>−</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> soluzio partikularra jakinda."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Aldagai-aldaketa, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.</strong>  <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>. Ordezkatuta eta sinplifikatuta: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>μ</mi><mi>x</mi></mfrac><mo>−</mo><mfrac><msup><mi>μ</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktore integratzaile bat erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: ez da zehatza. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> aldagaiaren araberako <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bat probatuta, <math display=\"inline\"><mrow><mi>P</mi><mo>+</mo><mi>Q</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delako, <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>z</mi></mfrac></mrow></math> motako baldintza lortzen da:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (egitura fidagarria; koefizienteak ez erabat berretsiak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Koadernotik (CNmetodosx) — lehen ordenako ekuazioak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ibilbide ortogonalak (koordenatu kartesiar eta polarrak)"
    },
    {
     "mota": "testua",
     "html": "Zirkunferentzia-familia baten EDO ateratzea, ibilbide ortogonalen araua (malda negatibo alderantzizkoa), eta adibideak kartesiar zein polarretan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 8: familiaren EDO (<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Garatuz: <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>c</mi><mi>t</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>. Deribatuz: <math display=\"block\"><mrow><mn>2</mn><mi>t</mi><mo>−</mo><mn>2</mn><mi>c</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mi>t</mi><mo>+</mo><mi>c</mi></mrow><mi>y</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mi>c</mi></math> ezabatzeko, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ordezkatuz: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mi>t</mi><mo>+</mo><mfrac><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi></mrow></mfrac></mrow><mi>y</mi></mfrac><mo>=</mo><mfrac><mfrac><mrow><mi>−</mi><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi></mrow></mfrac><mi>y</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ibilbide ortogonalen araua"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Ibilbide ortogonalak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Familia emanak <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> betetzen badu, ibilbide ortogonalen familiak <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><msup><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen du (malda: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 9: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroko zirkunferentzien ortogonalak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> deribatuz: <math display=\"inline\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math>. Ortogonalek <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mrow></math> betetzen dute: <math display=\"block\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>x</mi><mi>t</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>x</mi><mi>t</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mi>t</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>K</mi><mi>t</mi><mi>.</mi></mrow></math> (Jatorritik igarotzen diren zuzenak.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 10: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math>-ren zuzen ortogonala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n"
    },
    {
     "mota": "testua",
     "html": "Ukitzailearen malda <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>; ortogonalarena <math display=\"inline\"><mrow><msub><mi>m</mi><mi>o</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><msub><mi>m</mi><mi>o</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>0</mn><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>, beraz zuzen ortogonala <strong>bertikala</strong> da: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Koordenatu polarrak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kurba integrala bada, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> normalak betetzen du: <math display=\"block\"><mrow><mfrac><msub><mi>r</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 11: <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren ortogonalak"
    },
    {
     "mota": "testua",
     "html": "Deribatuz: <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>c</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ezabatuz: <math display=\"block\"><mrow><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> Beraz: <math display=\"block\"><mrow><mfrac><msub><mi>r</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><msub><mi>r</mi><mn>2</mn></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mo>−</mo><mo>∫</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>d</mi><mi>θ</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> (Integrazioak hurrengo orrian jarraitzen du.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zeinu-zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 8 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroko zirkunferentziak, jatorrian ebakitzen direnak); adibidea 9 (<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math> ⇒ ortogonalak <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>/</mi><mi>t</mi></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>K</mi><mi>t</mi></mrow></math>); adibidea 10 (ukitzailea horizontala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, normala bertikala); polarretako baldintza; adibidea 11 (<math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup><mi>/</mi><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>). ⚠ <strong>Zuzenketak (mahairatuak):</strong> (1) araua jatorrizkoan <code>F(t,x,1/x)</code> idatzita dago, zeinurik eta primarik gabe; zuzena <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><msup><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (maldaren ordezkapena), hemen zuzendua; (2) 4. orriko <code>-1/m = 1/x&#x27;</code> zeinurik gabe ageri da, baina 9. adibideak <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mfrac><mn>1</mn><mi>x</mi></mfrac><mn>1</mn><mo>′</mo></msubsup></mrow></math> finkatzen du. «pasan por el eje» esaldiak ez du familia osoa zehatz deskribatzen (jatorritik igarotzen diren zuzenak). Barne-egiaztapena: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> (2.18 problema) printzipio orokorra ematen du. Ikus <code>koadernoa_metodo_n_p004.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isoklinak, Picard-en teorema eta aldagai bereizgarriak"
    },
    {
     "mota": "testua",
     "html": "Ekuazio diferentzialaren interpretazio geometrikoa isoklinen bidez, Picard-en existentzia/bakartasun teorema, eta aldagai bereizgarrien ekuazioak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Isoklinak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; isoklina bakoitzean malda konstantea da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math>. Malda konstantea <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi></mrow></math>: <math display=\"block\"><mrow><mi>−</mi><mfrac><mi>t</mi><mi>x</mi></mfrac><mo>=</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>k</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mn>2</mn></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi><mi>.</mi></mrow></math> (EDO integratuz <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>⇒</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math>: kurba integralak zirkunferentziak, isoklinak erradialak.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Picard-en teorema"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Picard (tokiko existentzia eta bakartasuna)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>⊂</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>×</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> jarraitua <math display=\"inline\"><mi>D</mi></math>-n, eta <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> jarraitua <math display=\"inline\"><mi>D</mi></math>-n. Orduan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orotarako, <strong>existitzen da</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>τ</mi></math>-ren ingurune batean definitua eta deribagarria) hau betetzen duena: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ξ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "II. gaia: aldagai bereizgarriak"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 13:</strong> <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mi>−</mi><mi>y</mi><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aldagai bereizgarriak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><msub><mi>M</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 14:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><msup><mi>e</mi><mi>k</mi></msup><mo>=</mo><mfrac><mi>C</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 15:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mn>1</mn></mrow><mi>y</mi></mfrac><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — adibidea 14 zuzendua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: isoklinak (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>k</mi></mrow></math>; kurba integralak <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math> zirkunferentziak); Picard-en teorema (baldintza nahikoa, tokikoa <math display=\"inline\"><mi>τ</mi></math>-ren ingurunean); adibidea 13 (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>=</mo><mi>k</mi></mrow></math>); forma bereizgarria (dibiditzean faktore nuluen soluzioak aparte egiaztatu behar dira); adibidea 15 (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenak dibisioan galduak). ⚠ <strong>Adibidea 14:</strong> jatorrizkoak gorriz <code>y = -Cx</code> idazten du, baina aurreko kalkuluak (<code>-ln x</code> esponentea) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>x</mi></mrow></math> ematen du — eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>C</mi><mi>x</mi></mrow></math>-k ez du EDO betetzen (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> kasu tribiala salbu); <strong>emaitza zuzena <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>x</mi></mrow></math> da</strong> (kopia/ sinplifikazio akatsa jatorrizkoan). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Existentziaren eta bakartasunaren teorema» eta «Ekuazio banangarriak»). Ikus <code>koadernoa_metodo_n_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio homogeneoak eta translazio bidezko murrizketa"
    },
    {
     "mota": "testua",
     "html": "Funtzio homogeneoaren definizioa, gradu-adibideak, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> ordezkapenaren bidezko ebazpena, eta bi forma afinen zatidura duten ekuazioak homogeneo bihurtzea translazioz."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio homogeneoa (definizioa)"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Funtzio homogeneoa (n gradukoa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mi>n</mi></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 16:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mroot><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow><mn>3</mn></mroot></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mroot><mrow><msup><mi>λ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></mroot><mo>=</mo><mi>λ</mi><mroot><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow><mn>3</mn></mroot><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>r</mi><mi>a</mi><mi>d</mi><mi>u</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <strong>Adibidea 17:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>f</mi></mrow></math> (gradua 2). <strong>Adibidea 18:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>0</mn></msup><mi>f</mi><mo>=</mo><mi>f</mi></mrow></math> (gradua 0)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio homogeneoaren ebazpena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> hartuta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Ordezkapena <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> (hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>) → <strong>aldagai bereizgarrietako</strong> ekuazioa."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 19:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (gradu 0koa). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mrow><mi>u</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>u</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>=</mo><mfrac><mi>u</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mi>u</mi><mo>=</mo><mfrac><msup><mi>u</mi><mn>3</mn></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><msup><mi>u</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>u</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> denez: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 20:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi><mo>=</mo><mi>x</mi><mo>⋅</mo><mi>u</mi><mi>x</mi><mo>=</mo><mi>u</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mi>u</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Homogeneora murrizten diren ekuazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>y</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> bada, homogeneoa da. Bestela, aldaketa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>h</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>k</mi></mrow></math>, non: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>a</mi><mi>h</mi><mo>+</mo><mi>b</mi><mi>k</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>a</mi><mn>1</mn></msub><mi>h</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>k</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 21:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>. Sistema <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>. Aldaketa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><mi>d</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">homogeneoa</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — adibidea 20 zuzendua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: gradu-adibideak (16→1, 17→2, 18→0); <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> ordezkapena (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>); adibidea 19 (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioa <math display=\"inline\"><msup><mi>u</mi><mn>3</mn></msup></math>-z dibiditzean galdua; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi></mrow></math> izendatzailea anulatzen dute); adibidea 21 (ebaki-puntua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jatorrira eramanda homogeneoa). ⚠ <strong>Adibidea 20:</strong> jatorrizkoak <math display=\"inline\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> kalkulatzean <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> faktorea galtzen du (<code>x^2 - ln x</code> idazten du); zuzena <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> da, beraz <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>-k ez du <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> betetzen, tribialki salbu); hemen zuzendua. Egilearen zeinu-kokapena (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> gisa normalizatua. Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> («Ekuazio homogeneoak») <math display=\"inline\"><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math> faktorea baieztatzen du. Ikus <code>koadernoa_metodo_n_p008.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Homogeneora murrizketa (zuzen paraleloak) eta lehen ordenako ekuazio lineala"
    },
    {
     "mota": "testua",
     "html": "21. adibidearen amaiera, zuzen paraleloetarako <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> aldaketa, eta lehen ordenako ekuazio lineala konstantearen aldakuntzaz."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "21. adibidearen amaiera"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>u</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math>; ordezkatuz: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow></mfrac><mo>−</mo><mi>u</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><msub><mi>x</mi><mn>1</mn></msub></mrow><msub><mi>x</mi><mn>1</mn></msub></mfrac><mi>.</mi></mrow></math> Deskonposaketa zuzena <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Zuzen paraleloak: <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistemak soluziorik ez badu (zuzenak paraleloak), <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> aldaketa → aldagai bereizgarriak."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 22:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>5</mn></mrow></mfrac></mrow></math>. Sistema bateraezina (<math display=\"inline\"><mrow><mn>7</mn><mo>=</mo><mn>0</mn></mrow></math>); <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn></mrow><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow><mrow><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>2</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>18</mn><mn>25</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mfrac><mn>9</mn><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>9</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Lehen ordenako ekuazio lineala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, bi urratsetan: 1. <strong>Ekuazio homogenea</strong> ebatzi (<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>) → konstante bakarreko soluzioa. 2. Konstantea <math display=\"inline\"><mi>x</mi></math>-ren <strong>funtzio</strong> bihurtu (konstantearen aldakuntza) eta ekuazio osoan ordezkatu."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 23:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>(1) Homogenea:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <strong>(2) Konstantea aldatuz</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>R</mi><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Ekuazio osoan ordezkatuz, <math display=\"inline\"><mi>R</mi></math>-dun gaiak deuseztatzen dira: <math display=\"block\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>R</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — 21. adibidearen zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 22 (zuzen paraleloak, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>; primitiba deribatuz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du); ekuazio linealaren metodoa (homogenea + konstantearen aldakuntza); adibidea 23 (<math display=\"inline\"><mi>R</mi></math>-dun gaiak deuseztatu ⇒ <math display=\"inline\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, sustituzio zuzenez egiaztatua, <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow></math>). ⚠ <strong>21. adibidearen zuzenketa (mahairatua):</strong> <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> integratu behar da; deskonposaketa zuzena <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (ez jatorrizkoaren <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), beraz lehen gaia <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi></mrow></math> da eta soluzioa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>C</mi></mrow></math>; jatorrizkoak <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>→</mo><mn>1</mn><mo>+</mo><mi>u</mi></mrow></math> akatsa du izendatzailean (8. orrian hasitako adibidea honela ixten da). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Ekuazio linealak»). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p010.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio lineala (konstantearen aldakuntza) eta Bernoulliren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako ekuazio lineala konstantearen aldakuntzaz eta egiaztapena, eta Bernoulliren ekuazioaren linealizazioa <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> aldaketaz."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 24: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(1) Homogenea</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <strong>(2) Konstantea aldatuz</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mi>x</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Ekuazio osoan ordezkatuz (<math display=\"inline\"><mrow><mi>x</mi><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> gaiak deuseztatzen dira): <math display=\"block\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>k</mi></mrow></math>. <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <strong>Egiaztapena:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>; ordezkatuz <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math> ✓."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bernoulliren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>): (1) <math display=\"inline\"><msup><mi>y</mi><mi>n</mi></msup></math>-z zatitu; (2) <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> aldaketa → ekuazio lineala."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 25:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>3</mn></msup></mrow></math>. <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>-z zatituz: <math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>y</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>⇒</mo><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>x</mi><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lineala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Homogenea <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>. Konstantea aldatuz <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <strong>Integrala itxita</strong> (egiaztapenez): <math display=\"inline\"><mrow><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mi>C</mi></mrow></math>, beraz: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ere soluzioa da, <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>-z zatitzean galdua.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — integral itxia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 24 (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, egiaztapenak <math display=\"inline\"><mi>x</mi></math> ematen du); Bernoulli-ren eskema (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup><mo>⇒</mo><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mi>z</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Q</mi></mrow></math>); adibidea 25 (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></math>, homogenea <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>). <strong>Egileak azken integrala ebaluatu gabe uzten du</strong>; itxita: <math display=\"inline\"><mrow><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mi>C</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mi>/</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></msqrt></mrow></math> (<math display=\"inline\"><mi>z</mi></math>-ren ekuazioan sustituzioz egiaztatua); <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzio bereizia (<math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>-z zatitzean galdua). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Bernoulliren ekuazioak»). Data <math display=\"inline\"><mfrac><mfrac><mn>31</mn><mn>7</mn></mfrac><mn>2013</mn></mfrac></math> (p.12) eta <math display=\"inline\"><mfrac><mfrac><mn>5</mn><mn>8</mn></mfrac><mn>2013</mn></mfrac></math> (p.13). Ikus <code>koadernoa_metodo_n_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Riccati, ekuazio zehatzak eta faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "Riccatiren ekuazioaren linealizazioa soluzio partikular batetik, ekuazio diferentzial zehatzak, eta faktore integratzaileak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Riccatiren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Ebazteko, soluzio partikular ezagun bat <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> behar da; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>z</mi></mfrac></mrow></math> aldaketaz ekuazio <strong>lineala</strong> lortzen da (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>Q</mi><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>Q</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio diferentzial zehatzak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; baldin <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>, orduan existitzen da <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>M</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>N</mi></mrow></math>; soluzioa <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 26:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>t</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>M</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">zehatza</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> kalkulatzeko (<math display=\"inline\"><mi>t</mi></math>-rekiko integratuz): <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>k</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> Soluzioa: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 27:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> (zehatza): <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>t</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>k</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> Soluzioa: <math display=\"inline\"><mrow><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mi>d</mi><mi>t</mi><mo>+</mo><mi>N</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zehatza ez bada, <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktore integratzaile bat egon daiteke <math display=\"inline\"><mrow><mi>U</mi><mi>M</mi><mi>d</mi><mi>t</mi><mo>+</mo><mi>U</mi><mi>N</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zehatza izateko."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 28:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ansatzez. <math display=\"inline\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>U</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>M</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><msub><mi>N</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mi>t</mi><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> jarrita, gaiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> faktorizatzen dute, beraz: <math display=\"block\"><mrow><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>C</mi><mi>s</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mfrac><mi>C</mi><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: Riccati (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mi>/</mi><mi>z</mi><mo>⇒</mo><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>Q</mi><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>Q</mi></mrow></math> lineala); adibidea 26 (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math>, deribatuek <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>N</mi></mrow></math> berreskuratzen dituzte); adibidea 27 (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>; «<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>» = «<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>C</mi></mrow></math>» konstantea xurgatuz); faktore integratzailearen definizioa (<math display=\"inline\"><mi>U</mi></math>-ren zeroek/singulartasunek soluzioak gehi/gal ditzakete). Adibidea 28: deribatu gurutzatuak zuzenak; <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-rekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mi>/</mi><mi>s</mi></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. ⭐⭐ <strong>Eguneratzea (16. orrian irakurria):</strong> <code>koadernoa_metodo_n_p016.typ</code>-k faktore komuna ezabatu eta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>s</mi></mrow></math> lortzen du, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> baieztatuz. Adibidea 26ko amaierako «<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» argumentu-lapsusa da (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(Riccati, ekuazio zehatzak, faktore integratzaileak). Ikus <code>koadernoa_metodo_n_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Faktore integratzaileak: <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hiru faktore integratzaileren kalkulua: 28. adibidearen amaiera (<math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-ren menpe), 29.a (<math display=\"inline\"><mi>x</mi></math>-ren menpe) eta 30.a (<math display=\"inline\"><mrow><mi>t</mi><mi>x</mi></mrow></math>-ren menpe)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "28. adibidearen amaiera (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Deribatuak berdinduta eta <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></math> jarrita, faktore komuna ezabatuz: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>s</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mi>f</mi></mfrac><mo>=</mo><mo>∫</mo><mi>−</mi><mfrac><mn>1</mn><mi>s</mi></mfrac><mi>d</mi><mi>s</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mfrac><mi>k</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mfrac><mi>k</mi><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Ordezkatuz, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>zehatza</strong> da (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mi>M</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>N</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "29. adibidea (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><msub><mi>∂</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>∂</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math> (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) ezarriz: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>U</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>8</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>8</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn></mrow><mrow><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mi>U</mi></mfrac><mo>=</mo><mo>∫</mo><mi>−</mi><mfrac><mn>4</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mi>−</mi><mn>4</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "30. adibidea (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>t</mi><mn>3</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>4</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mn>8</mn><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Zehaztasun- baldintzatik: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>4</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mn>4</mn><mi>t</mi><msup><mi>x</mi><mn>5</mn></msup><mo>−</mo><mn>8</mn><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Izendatzailea faktorizatuz <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>t</mi><mi>x</mi></mrow></math> jarrita: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mi>f</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mn>1</mn><mrow><mi>−</mi><mi>v</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mi>d</mi><mi>v</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>=</mo><mfrac><mi>K</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — tres faktore egiaztatuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hiru faktoreak birkalkuluz zuzenak: ⭐ (28) <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-rekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>f</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>s</mi><mo>⇒</mo><mi>U</mi><mo>=</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — 14. orriko irakurketa <strong>baieztatzen du</strong> (biderkatuz <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mi>M</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>N</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>); (29) <math display=\"inline\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mi>/</mi><mi>U</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>/</mi><mi>x</mi><mo>⇒</mo><mi>U</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>); (30) <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>f</mi><mo>=</mo><mi>K</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>; faktorearen singularitatea gorde behar da soluzioak interpretatzean). Data <math display=\"inline\"><mfrac><mn>5</mn><mn>8</mn></mfrac></math> eta <math display=\"inline\"><mfrac><mfrac><mn>6</mn><mn>8</mn></mfrac><mn>2013</mn></mfrac></math>. Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> (faktore integratzaileak). Ikus <code>koadernoa_metodo_n_p016.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio zehatzaren potentziala eta ordena-murrizketa"
    },
    {
     "mota": "testua",
     "html": "30. adibideko ekuazio zehatzaren potentziala, eta goi-mailako EDOen ordena jaisteko metodoa (<math display=\"inline\"><mi>x</mi></math> agertzen ez denean)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "30. adibidearen potentziala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktoreaz, koefizienteak sinplifikatuz: <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>t</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mi>t</mi></math>-rekiko integratuz: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>x</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>t</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "3. gaia: ordena bat baino handiagoko EDOak"
    },
    {
     "mota": "testua",
     "html": "<strong>Ordena-murrizketa.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>x</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (ordena 2). <strong>1. kasua: <math display=\"inline\"><mi>x</mi></math> agertzen ez denean</strong>, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>x</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, aldaketa <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math> (beraz <math display=\"inline\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 3.1:</strong> <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math>: <math display=\"block\"><mrow><mi>t</mi><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>p</mi><mi>t</mi></mfrac><mo>=</mo><mn>3</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lineala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Homogenea <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mi>/</mi><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>p</mi><mo>=</mo><mi>K</mi><mi>t</mi></mrow></math>. Konstantea aldatuz <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo>=</mo><mn>3</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo>=</mo><mn>3</mn><mi>t</mi><mo>+</mo><msub><mi>C</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math> denez: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><msub><mi>C</mi><mn>1</mn></msub><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> (2. ordenakoa denez, <strong>bi konstante</strong>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — bi kopia-akats zuzenduak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐ 30. adibidearen potentziala zuzen: <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi></mrow></math> (birkalkuluz). ⚠ <strong>Zuzenketa 1 (mahairatua):</strong> <math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math> kopiatzean jatorrizkoak <math display=\"inline\"><mrow><mn>8</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></math> → <math display=\"inline\"><mrow><mn>8</mn><msup><mi>t</mi><mn>3</mn></msup></mrow></math> aldatzen du, eta hortik zatiketa polinomiko luze bat eta 19. orriko potentzial oker bat sortzen dira, jatorrizko ekuazioari <strong>ez</strong> dagozkionak; kopia-akatsa (faktore integratzailea ondo dago). ⚠ <strong>Zuzenketa 2 (mahairatua):</strong> adibidea 3.1 — <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>-tik <math display=\"inline\"><mi>t</mi></math>-z zatituz <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mi>/</mi><mi>t</mi><mo>=</mo><mn>3</mn><mi>t</mi></mrow></math> da (ez <math display=\"inline\"><mrow><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>); beraz <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math>. Jatorrizkoak eskuinaldea <math display=\"inline\"><mi>t</mi></math>-z zatitu gabe uzten du eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>4</mn></msup><mi>/</mi><mn>8</mn><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math> lortzen du, <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>3</mn></msup></mrow></math> betetzen duena (ez enuntziatuko <math display=\"inline\"><mrow><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>); ordena-murrizketaren prozedura zuzena da. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_orden_superior.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p018.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kurba-familiak, existentzia-bakartasuna eta ekuazio zehatzaren baldintza"
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako EDA bat kurba-familia baten parametroa ezabatuz nola eraikitzen den, forma inplizitu/normala, existentzia-bakartasunaren teorema, eta zehaztasun-baldintza."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Kurba-familietatik EDAra"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>. Malda horizontala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n, bertikala <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n. <strong>Adibidea 14:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> ordezkatuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Orokorrean, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> elkarrekin → EDA (parametroa ezabatuta)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> bada, deribatu osoa: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">inplizitua</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>P</mi><mi>Q</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">normala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Existentzia eta bakartasunaren teorema"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existentzia eta bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> jarraituak badira, orduan <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow></math> problemak <strong>soluzio bakarra</strong> du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 15:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> jarraituak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inguruan ⇒ soluzio bakarra. (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n definitu gabe.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 16: jatorriko zirkuluak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (jatorritik igaro). <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezabatuz: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mrow><mi>y</mi><mo>−</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zirkulu horiek guztiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen dira, baina forma normala <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> da han; beraz <strong>ez dute bakartasun-teorema kontraesaten</strong> — hipotesiek puntu komun horretan huts egiten dute."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio zehatzak (baldintza)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>zehatza</strong> da baldin <math display=\"inline\"><mrow><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 12 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, malda horizontala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n, bertikala <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n); adibidea 14 (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; karratuak <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow></math>-ren zeinua galtzen du, familia osoa deskribatzen du); <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mo>⇒</mo><msub><mi>U</mi><mi>x</mi></msub><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; existentzia-bakartasunaren teorema (adibidea 15: <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><msub><mi>f</mi><mi>y</mi></msub></math> jarraituak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inguruan ⇒ soluzio bakarra, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n izan ezik); ⭐ adibidea 16 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; zirkulu guztiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik, baina forma normala <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> han — hipotesiak huts, ez du teorema kontraesaten); zehaztasun-baldintza <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub></mrow></math>. Euskarazko/ gaztelaniazko ohar lauso batzuk jasota. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p054.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio zehatzak eta aldagai bananduak"
    },
    {
     "mota": "testua",
     "html": "Ekuazio zehatz baten potentziala eraikitzeko prozedura hiru adibidetan lantzen da; gero <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kasua eta aldagai bananduen formula aurkezten dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Potentzialaren metodoa"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "17. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma diferentzialean, <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> direnez, zehatza da. <math display=\"inline\"><mrow><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><mi>P</mi></mrow></math> integratuta, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mi>Q</mi></mrow></math> baldintzak <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> ematen du. Hortaz, <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Egilearen urratsak: (1) <math display=\"inline\"><mi>P</mi></math> <math display=\"inline\"><mi>x</mi></math>-rekiko integratu; (2) emaitza <math display=\"inline\"><mi>y</mi></math>-rekiko deribatu eta <math display=\"inline\"><mi>Q</mi></math>-rekin berdindu; (3) geratzen den funtzioa integratu."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "18. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mn>1</mn></mrow></math>. Potentziala <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math> da, eta soluzioa <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math>. Deribatzeak jatorrizko forma berreskuratzen du: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "19. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; beraz ez da zehatza. <math display=\"inline\"><mi>P</mi></math> integratuz gero, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta alderaketak <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></math> eskatzen du: <math display=\"inline\"><mi>x</mi></math>-en mendekotasunak ezintasuna erakusten du. [CORREGIDO: paperean <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn></mrow></math> ageri da, terminoak zeinu alderantzizkoarekin pasatuta; ondorioa bera da: ez da zehatza.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Zuzenean integragarriak eta bananduak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma diferentzialean <math display=\"inline\"><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da eta zehatza da. Oro har, aldagai bananduen kasuan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "3. ariketa, koadernoan planteatua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>. (b) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Irakurketa zalantzazkoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Urratsen bigarren lerroa eta 19. adibideko bazterreko oharra ez dira osorik irakurtzen. 3(a)-ko bi berretzaile karratuak ikusgai daude. Ez da testu irakurtezinik asmatu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagai bananduak eta faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "Aldagai bananduen hiru adibide, faktore integratzailearen definizioa eta zatitzean gal daitezkeen soluzio bereziak lantzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Aldagai bananduen adibideak"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "20. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Biderkatuz, <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> [CORREGIDO: papereko azken lerroak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mn>0</mn></mrow></math> idazten du; familia osoak konstante arbitrarioa behar du.]"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "21. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> eta, <math display=\"inline\"><mi>y</mi></math>-k zeinu finkoa duen tarte batean, <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> Integratuz, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, hau da, unitate-zirkuluko arkuak. Zatitzean galtzen diren <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> soluzio konstanteak ere gorde behar dira."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "22. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math> denean, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> hartuta funtzioak luzapen jarraitua du jatorrian, baina ez du PVIa klasikoki ebazten, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> ez baitago <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n definituta. [CORREGIDO: paperak <math display=\"inline\"><mrow><mn>0</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ordezkatzen du; biderkadura hori ez dago definituta.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Faktore integratzailea"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Faktore integratzailea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> forma ez-zehatzari <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> biderkatzean forma zehatz bihurtzen duen funtzioa."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "23. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-rako, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math>; emaitza <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi></mrow></math> da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "24. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math> erabilita, <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math>. Baina <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> jatorrizko ekuazioaren soluzio berezia da eta zatitzean galtzen da. Beraz: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "25. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>-rekin, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Bi deribatu gurutzatuak <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> dira; forma zehatza da <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> eskualdeetan."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "23. adibidearen azpiko bi ohar berdeak partzialki irakurtezinak dira. 21. adibideko aldagai-inbertsioaren saiakera ere amaitu gabe dago; ez da osatu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio banangarriak eta galdutako soluzioak"
    },
    {
     "mota": "testua",
     "html": "25. adibidea amaitu, ekuazio banangarrien formula orokorra eman eta bi adibidetan zatitzeak baztertutako <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioa berreskuratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "25. adibidearen amaiera"
    },
    {
     "mota": "testua",
     "html": "Forma zehatza <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da. Potentziala eta familia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortik, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>E</mi><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> berreskuratzen du, <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></math> faktoreak baztertu zuen soluzioa."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio banangarri orokorra"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mo>∫</mo><mfrac><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mfrac><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Formula <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math> den eskualdeetan erabiltzen da. Zatitutako faktoreen erroak jatorrizko ekuazioan aparte egiaztatu behar dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "26. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>−</mo><mi>y</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></math> faktorea erabilita, <math display=\"block\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>y</mi><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> hau da, <math display=\"inline\"><mrow><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>D</mi><mi>x</mi></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> jatorrizkoaren soluzioa da eta <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>-k berreskuratzen du. <math display=\"inline\"><mrow><msup><mi>e</mi><mi>C</mi></msup><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math> paperaren idazkera muga-notazioa da, ez konstante erreal finitua."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "27. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>4</mn></msup></mrow></mfrac></mrow></math>-rekin, <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>4</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Primitiboak <math display=\"inline\"><mfrac><mrow><mn>2</mn><mo>−</mo><mi>x</mi></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> eta <math display=\"inline\"><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>y</mi><mn>3</mn></msup></mfrac></math> dira; beraz <math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ere jatorrizko ekuazioaren soluzioa da; <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac></mrow></math> berridazketan <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>-k adar hori jasotzen du."
    },
    {
     "mota": "oharra",
     "titulua": "Egilearen abisua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aldagaiak banantzea lortzen denean, zatitzean baztertutako hautagaiak jatorrizko ekuazioan ordezkatu behar dira. Azken ohar urdina amaitu gabe dago."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagai bakarreko faktore integratzaileak"
    },
    {
     "mota": "testua",
     "html": "Forma ez-zehatz baterako <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> edo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktore integratzaileak noiz existitzen diren deribatu eta bi adibidetan aplikatzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Baldintza orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>d</mi><mi>x</mi><mo>+</mo><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> formari <math display=\"inline\"><mi>μ</mi></math> biderkatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>−</mo><msub><mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>y</mi></msub><mo>=</mo><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>,</mo></mrow></math> eta eskuinekoa <math display=\"inline\"><mi>x</mi></math>-en funtzio hutsa izan behar da. Orduan <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mo>−</mo><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub></mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>,</mo></mrow></math> eta eskuinekoa <math display=\"inline\"><mi>y</mi></math>-ren funtzio hutsa izan behar da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "28. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math>, eta <math display=\"block\"><mrow><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> Hortaz <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>. Biderkatu ondoren, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta bi deribatu gurutzatuak <math display=\"inline\"><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "29. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako hautagaiak oraindik <math display=\"inline\"><mi>x</mi></math>-en mendekotasuna du eta ez du balio. <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako, berriz, <math display=\"block\"><mrow><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math>. Forma zehatza: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Potentziala <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> da."
    },
    {
     "mota": "oharra",
     "titulua": "Katearen erregela",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>z</mi></mfrac><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math> identitateak ere jasotzen ditu, aurreko deribazioaren laguntza gisa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Faktore integratzaile konposatuak eta ordezkapen lineala"
    },
    {
     "mota": "testua",
     "html": "29. adibidearen potentziala bi integrazio-ordenatan egiaztatzen da; gero <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktorea eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math> ordezkapena lantzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "29. adibidearen egiaztapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> integratuta, bi bideek <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> ematen dute; soluzioa <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako faktorea"
    },
    {
     "mota": "testua",
     "html": "Katearen erregelaz, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>h</mi></mrow></mfrac><msub><mi>h</mi><mi>x</mi></msub></mrow></math> eta berdin <math display=\"inline\"><mi>y</mi></math>-rako. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><msub><mi>h</mi><mi>x</mi></msub><mo>−</mo><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><msub><mi>h</mi><mi>y</mi></msub></mrow></mfrac><mi>d</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: papereko bi bitarteko lerroetan <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorea ez da bereizten; goiko katearen erregela da erabilitako adierazpen zuzena.]"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "30. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kozientea <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>h</mi></mfrac><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Biderkatu ondoren forma zehatza da eta potentziala <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi><msup><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> kasua aparte egiaztatu behar da, zatiketak baztertu duelako."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hartu <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math> (edo konstante gabe <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>); orduan <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math>-ren ekuazio banangarri bat lortzen da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "32. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></math>. Beraz <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mrow></math> tangentearen poloak gurutzatzen ez dituzten tarteetan."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren ohar laburra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Formula orokorraren aurrean eragiketa solte bat ageri da, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, berdintzarik gabe; ez zaio interpretazio gehigarririk eman."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma linealen zatiduretarako ordezkapenak"
    },
    {
     "mota": "testua",
     "html": "Lehen ordenako EDO batean bi forma linealen zatidura agertzen denean, zuzen paraleloen eta ez-paraleloen kasuak bereizten dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Aurreko adibidearen amaiera"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>-n <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> hartuta, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>. Paperak integrala «bilatu» eta «bukatu» dio, baina ez du azken lerroa idazten."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Zuzen paraleloak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta bi forma linealen zati homogeneoak proportzionalak badira, zatidura <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> aldagai bakarraren funtzio bihurtzen da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "34. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi>u</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> eta <math display=\"block\"><mrow><mi>u</mi><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "35. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> hartuta, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>u</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math> eta <math display=\"block\"><mrow><mn>2</mn><mi>u</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> Paperak azken integrala planteatuta uzten du."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Zuzen ez-paraleloak"
    },
    {
     "mota": "testua",
     "html": "Zenbakitzailearen eta izendatzailearen zuzenak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuan ebakitzen badira, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> translazioak ekuazio homogeneoa ematen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "36. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zuzenak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan ebakitzen dira. <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>y</mi><mo>−</mo><mn>2</mn></mrow></math> hartuta, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mi>v</mi></mrow><mrow><mi>u</mi><mo>+</mo><mi>v</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>z</mi><mi>u</mi></mrow></math> ordezkapenak <math display=\"block\"><mrow><mi>u</mi><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>z</mi></mrow></mfrac></mrow></math> ematen du. Integratuz, <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>C</mi><mo>,</mo></mrow></math> eta forma inplizitu baliokidea <math display=\"block\"><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>u</mi><mi>v</mi><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> hau da, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Irakurketa zalantzazkoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebakidura-puntuaren azpiko testua «MOTZ PUNTA» bezala ageri da. Azken logaritmoaren argumentua hutsik utzita eta galdera-markekin dago; bazterreko forma koadratiko ahulak goiko emaitza berresten du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bernoulli-ren eta Riccati-ren ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Bernoulli-ren ekuazioa linealizatzeko aldaketa deribatu, adibide trigonometriko bat ebatzi eta Riccati-ren ekuazioa soluzio partikular baten bidez murrizten da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bernoulli-ren ekuazioa"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Bernoulli-ren ekuazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> hartuta, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> kasua lineala da; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> kasuan <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> geratzen da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "37. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math>-rekin, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>u</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> Faktore integratzailea <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math> da. Integratuz, <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> eta <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Beste bidean, homogeneoaren soluzioa <math display=\"inline\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math> da eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> saiakerak <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ematen du. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ere jatorrizko ekuazioaren soluzioa da, eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math> aldaketak baztertzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Riccati-ren ekuazioa"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Riccati-ren ekuazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>,</mo><mi>C</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio partikular bat <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> ezagututa, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math> aldaketak Bernoulli motako ekuazioa ematen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "38. adibidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>, beraz partikular zuzena da. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> ordezkatuta,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mi>u</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: paperaren formula gorri isolatuak <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> dio; hurrengo lerroan <math display=\"inline\"><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> terminoak ezeztatzen dira eta goiko emaitza da zuzena.]"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren notazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> funtzioak eta saiakerako koefizienteak bereizteko paperak azken horiei marka gehitzen die. Hemen azalpen-testuak funtzio/konstante rola argitzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Riccati-ren murrizketa hiru bidetatik"
    },
    {
     "mota": "testua",
     "html": "38. adibideko Bernoulli ekuazioa <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> aldaketaz linealizatzen da, eta faktore integratzailea, saiakuntza polinomikoa eta potentzial zehatza alderatzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio lineala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mi>u</mi><mi>x</mi></mfrac></mrow></math>-n <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> hartuta, <math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>u</mi><mfrac><mi>′</mi><msup><mi>u</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>,</mo></mrow></math> hau da,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> faktore integratzailearekin, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> eta <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>z</mi><mi>p</mi></msub><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>B</mi><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub></mrow></math> saiakerak <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math> ematen du; partikularra <math display=\"inline\"><mrow><msub><mi>z</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math> da. Ekuazio diferentzial zehatza ere <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>z</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> da, potentzialarekin <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>z</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Atzera eginez, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> partikular ezaguna ematen du eta <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> aldaketatik kanpo geratzen da; aparte gorde behar da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Koadernoaren bigarren garapena"
    },
    {
     "mota": "testua",
     "html": "77. orriak aldaketak berriro egiten ditu eta zuzen heltzen da <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac></mrow></math>-ra. Ondorengo lerroak, ordea, ekuazioa aldatzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: paperean <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac></mrow></math> terminoa <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mfrac><mi>z</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> bihurtzen da arrazoirik gabe; ekuazio zuzena <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> da eta haren soluzioa <math display=\"inline\"><mrow><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "Paperak ekuazio aldatuaren homogeneoa <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow></msup></mrow></math> bidez eta konstantearen aldakuntzaz jarraitzen du, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow></msup><mo>∫</mo><msup><mi>e</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></msup><mi>d</mi><mi>x</mi></mrow></math> lortuz; garapen hori idatzita gorde da, baina ez da Riccati jatorrizkoaren ebazpena."
    },
    {
     "mota": "oharra",
     "titulua": "Irakurketa zalantzazkoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "«RICCATI (GEUNA)» eta «orain konstantea aldatu eta…» ohar laburrak partzialki irakurtezinak dira; ez da haien testua osatu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluzio baliokideak eta bakartasun eza"
    },
    {
     "mota": "testua",
     "html": "Osziladore linealaren adierazpen baliokideak, ekuazio autonomo baten egiaztapena eta erro karratuko hustuketa-ereduaren bakartasun eza azaltzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren formak"
    },
    {
     "mota": "testua",
     "html": "Lau adierazpen baliokide:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (edo <math display=\"inline\"><mrow><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
     ]
    },
    {
     "mota": "testua",
     "html": "Euler-en formulak eta batura-identitateak koefizienteak lotzen dituzte: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>, eta soluzio errealetan <math display=\"inline\"><mrow><msub><mi>D</mi><mn>1</mn></msub><mo>,</mo><msub><mi>D</mi><mn>2</mn></msub></mrow></math> konjugatuak dira. <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi></mrow></math>; <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> izanik."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac></mrow></math> familiak <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>4</mn><mi>C</mi><mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math> betetzen du. <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> ematen du; <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac></mrow></math> berridazketan <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> berreskuratzen du."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Hustuketa eta bakartasun eza"
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ontziaren hustuketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>h</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≥</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt></mrow></math> jarraitua da, baina <math display=\"inline\"><mrow><msub><mi>f</mi><mi>h</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msqrt><mi>h</mi></msqrt></mrow></mfrac></mrow></math> ez dago bornatuta <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> inguruan; Lipschitz baldintzak huts egiten du. <math display=\"inline\"><mrow><mi>h</mi><mo>&gt;</mo><mn>0</mn></mrow></math> adarrean, <math display=\"block\"><mrow><mi>−</mi><mi>k</mi><mi>t</mi><mo>+</mo><mn>2</mn><msqrt><mi>h</mi></msqrt><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, edozein <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>-entzat,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>k</mi><mn>2</mn></msup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>4</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>1</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Funtzioa <math display=\"inline\"><msup><mi>C</mi><mn>1</mn></msup></math> da lotunean, EDOa betetzen du, eta ontzia <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> unean hutsik geratzen dela adierazten du. <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioarekin eta amaiera-denbora desberdinekin batera, PVIaren bakartasun eza erakusten du. Argazkiko lau ontziek ur-maila beherakorra eta beheko hustubidea erakusten dituzte; grafikoak kurba familia <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzera une desberdinetan heltzen marrazten du."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>h</mi></msqrt></mfrac></mrow></math> faktorea ere erabiltzen du eta <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> adarra bereiz aztertzen du. Bazterreko bi ohar labur ez dira osorik irakurtzen."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio inplizituak eta bosgarren ordenako murrizketa"
    },
    {
     "mota": "testua",
     "html": "Deribatuan inplizitua den ekuazioaren parametrizazioa amaitu, zirkuluaren ekuazio diferentziala aztertu eta bosgarren ordenako ekuazioa ordena jaitsiz ebazten da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math> erabilita, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren ekuazioa <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>x</mi><mi>p</mi></mfrac><mo>=</mo><mn>2</mn></mrow></math> da. Faktore integratzailea <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> eta <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mi>p</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math> erlazioan ordezkatuta,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>C</mi><mi>p</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: paperean <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>C</mi><mi>p</mi></mfrac></mrow></math> ageri da; ordezkapen zuzenak <math display=\"inline\"><mfrac><mn>1</mn><mn>3</mn></mfrac></math> ematen du. <math display=\"inline\"><mi>p</mi></math>-z zatitzean galdutako <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math> adarrak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioa ematen du.]"
    },
    {
     "mota": "testua",
     "html": "Azpiko formula ezabatua partzialki baino ez da irakurtzen: ezkerrean <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> eta eskuinean <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mi>y</mi></mrow></math> zatiak bereizten dira; ez da osatu."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adar ez-konstanteetan <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><mi>±</mi><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>, beraz <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Gainera <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> soluzio konstanteak daude."
    },
    {
     "mota": "testua",
     "html": "Deribatuz, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Adar harmonikoan <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> eta jatorrizko ekuazioak <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><msup><mi>C</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> eskatzen du; <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koadernoak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math> aldaketaren deribatuak garatzen ditu. Bosgarren deribatuaren formula zuzena <math display=\"block\"><mrow><msubsup><mi>y</mi><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>D</mi><mn>5</mn></msup><mo>−</mo><mn>10</mn><msup><mi>D</mi><mn>4</mn></msup><mo>+</mo><mn>35</mn><msup><mi>D</mi><mn>3</mn></msup><mo>−</mo><mn>50</mn><msup><mi>D</mi><mn>2</mn></msup><mo>+</mo><mn>24</mn><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math> da, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>. [CORREGIDO: paperean azken koefizientea <math display=\"inline\"><mrow><mi>−</mi><mn>45</mn></mrow></math> da eta ekuazio eraldatua <math display=\"inline\"><mrow><mi>−</mi><mn>39</mn><mi>D</mi></mrow></math>-n amaitzen da; zuzenak <math display=\"inline\"><mrow><mi>+</mi><mn>24</mn><mi>D</mi></mrow></math> eta, kenketa egin ondoren, <math display=\"inline\"><mrow><mi>+</mi><mn>30</mn><mi>D</mi></mrow></math> dira.]"
    },
    {
     "mota": "testua",
     "html": "Murrizketa zuzena laburragoa da: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> hartuta, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mi>.</mi></mrow></math> Lau aldiz integratuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>B</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>D</mi><mi>x</mi><mo>+</mo><mi>E</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: paperaren azken polinomioak <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math> terminoa sartzen du eta <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> kentzen du. <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math>-k ez du EDOa betetzen; <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-k bai.]"
    },
    {
     "mota": "oharra",
     "titulua": "Data eta ordena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkiko data 4/10/2013 da, nahiz eta fisikoki 10-11/10/2013ko orrien ondoren agertu. Data eta «CN METODOS p94» etiketa argazkian bezala gorde dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Koadernotik (CG-01) — lehen ordenako ekuazioak",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 89. unitatea (METMATCG01_0089, IMG_2025_07_12_12_18_44S.jpg; 07_12 argazki-saioaren hasiera): metodoen laburpen-orri MANUSKRITOA — lehen ordenako EDOen ebazpide-zuhaitza (zehatza->banangarria->lineala->homogeneoa->murrizgarria->Bernoulli->Riccati) forma kanonikoekin, adibide-ekuazioa lau forma baliokidetan (y'=-x y-y^2, Bernoulli n=2 / Riccati c=0) eta graduen taula (homogeneotasunerako). SymPy-z egiaztatua (lau formak baliokideak; A'=-1/(2cos^2 x)->A=-tan x/2). Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen ordenako EDOak: sailkapena eta ebazpide-zuhaitza"
    },
    {
     "mota": "testua",
     "html": "Emandako <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> EDO baten aurrean, orri honek <strong>erabaki-zuhaitz</strong> bat proposatzen du: motaz mota probatu, lehena bete arte, eta dagokion ebazpidea aplikatu. Ordena:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Ekuazio zehatza (exaktua).</strong> <math display=\"inline\"><mrow><mi>M</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>N</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> idatzita, zehatza da <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> bada. Orduan ebazpena:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>M</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>∫</mo><mi>M</mi><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zehatza ez bada, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (edo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) <strong>faktore integratzailea</strong> bilatzen da zehatz bihurtzeko."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Banangarria.</strong> Aldagaiak banantzen badira: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Lineala.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup></mrow></math> faktore integratzailez.)"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Homogeneoa.</strong> <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>N</mi></mrow></math> gradu bereko badira, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> aldaketak banangarri bihurtzen du."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Homogeneora murrizgarria.</strong> Gai independenteak dituen kasua, translazio egoki batez homogeneo bihur daitekeena."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Bernoulli.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>p</mi></msup><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldaketak lineal bihurtzen du</mtext></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Riccati.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio partikular bat ezagututa, Bernoulli/lineal bihurtzen da</mtext></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea: EDO bat lau forma baliokidetan"
    },
    {
     "mota": "testua",
     "html": "Orriko adibide-ekuazioa lau eratara idatzita dago; laurak <strong>EDO bera</strong> dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sailkapena: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> denez, <strong>Bernoulli</strong> da (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>); baita <strong>Riccati</strong> ere <math display=\"inline\"><mrow><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-rekin (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Graduen taula (homogeneotasunerako)"
    },
    {
     "mota": "testua",
     "html": "Monomio baten <strong>gradu totala</strong> (homogeneotasun-testerako: gai guztiek gradu bera badute, homogeneoa da):"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>monomioa</strong>",
      "<strong>gradua</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>1</mn></math>",
       "<math display=\"inline\"><mn>0</mn></math>"
      ],
      [
       "<math display=\"inline\"><mi>x</mi></math>",
       "<math display=\"inline\"><mn>1</mn></math>"
      ],
      [
       "<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>",
       "<math display=\"inline\"><mn>2</mn></math>"
      ],
      [
       "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>",
       "<math display=\"inline\"><mn>3</mn></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Erabaki-zuhaitza: zehatza → banangarria → lineala → homogeneoa →\nmurrizgarria → Bernoulli → Riccati. Adibidea (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>) Bernoulli/Riccati da\n(SymPy-z egiaztatua, lau formak baliokideak). Forma kanoniko guztiak estandarrak dira.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0089</code>, <code>IMG_2025_07_12_12_18_44S.jpg</code>; «MÉTODO M.» lotea, 07_12 saioaren hasiera). Metodoen laburpen-orri manuskritoa: lehen ordenako EDOen ebazpide-zuhaitza, adibide-ekuazioa lau formatan eta graduen taula. Goiko ertzean 3.c problemaren amaiera zatikatua zegoen (parametroen aldakuntza, <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>A</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math> egiaztatua); aurreko orritik dator eta ez da berregiten (irakurtezinak deklaratuak). Ikus <code>koadernoa_metmatcg01_p089.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 158. unitatea (METMATCG01_0158, IMG_2025_07_12_12_34_18S.jpg): EDOen metodo-laburpen manuskribatua. y''=y y' ordena-murrizketa p(y)=y' bidez; Riccati, Bernoulli, homogeneora murrizgarria, zehatza, lineala, homogeneoa eta banagarria. Adibideak: 2y dx+2x dy=0, y'+xy=x, 2x^2 dx+xy dy=0 eta y'=xy. Bi errata esplizituki zuzenduak: arctan-integralaren faktorea 1/(k sqrt(2k)) -> sqrt(2/k), eta u'+u=-2/u -> x u'+u=-2/u. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDOen metodo-mapa eta ordena-murrizketa"
    },
    {
     "mota": "testua",
     "html": "Orrialdeak bigarren ordenako ekuazio baten ebazpena eta lehen ordenako EDOen metodo nagusien eskema biltzen ditu. Metodoa ekuazioaren <strong>egiturak</strong> aukeratzen du: aldagai falta, potentzia ez-lineala, forma diferentzial zehatza, linealtasuna, homogeneotasuna edo aldagaien banagarritasuna."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ordena murriztea: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> ez da ekuazioan esplizituki agertzen. <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math> hartuta: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adar ez-konstanteetan: <math display=\"block\"><mrow><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mi>p</mi><mo>→</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mo>→</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> Beraz, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>k</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mrow><mn>2</mn><mi>d</mi><mi>y</mi></mrow><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math> kasuan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>C</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>k</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>y</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "edo, alderantziz, <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mfrac><mi>k</mi><mn>2</mn></mfrac></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Manuskribuko lehen zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orrialdeak <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mi>y</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mfrac></mrow></math> idatzi ondoren <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math> faktorea alderantziz ordezkatzen du eta <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>k</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mrow></mfrac></math> lortzen du. Zuzena <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt><mi>d</mi><mi>z</mi></mrow></math> da; horregatik koefizientea <math display=\"inline\"><msqrt><mfrac><mn>2</mn><mi>k</mi></mfrac></msqrt></math> da. Gainera, <math display=\"inline\"><mi>p</mi></math> ezeztatzeak adar konstanteak ezkutatzen ditu: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math> guztiak jatorrizko EDOaren soluzioak dira."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Lehen ordenako ekuazioak: egituraren araberako mapa"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Riccatiren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Soluzio partikular bat <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math> ezagutuz gero, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mi>p</mi></msub><mo>+</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> ordezkapenak ekuazio lineal batera murrizten du. Manuskribuak «una particular» eta «variación de la constante» oharrak lotzen dizkio metodoari."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Bernoulliren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>p</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow></msup></mrow></math> aldaketak ekuazio lineala ematen du (<math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Homogeneora murrizgarria"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>p</mi><mi>x</mi><mo>+</mo><mi>q</mi><mi>y</mi><mo>+</mo><mi>d</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bi forma linealen ebakidura puntu batera translazio egoki bat eginez, konstanteak ezabatu eta lehen ordenako ekuazio homogeneoa lor daiteke, kasu ez-degeneratuan."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ekuazio zehatza eta faktore integratzailea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zehatza da <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>y</mi></msub><mi>P</mi><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mi>Q</mi></mrow></math> denean. Bestela, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktore integratzaile batek <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zehatz bihur dezake."
    },
    {
     "mota": "testua",
     "html": "Orriko adibidea: <math display=\"block\"><mrow><mn>2</mn><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ekuazio lineala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> ekuazioari dagokion homogeneoa <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup></mrow></math> da. Konstantearen aldakuntzaz, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>C</mi><mo>′</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>x</mi><mo>→</mo><msup><mi>C</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mo>→</mo><mi>C</mi><mo>=</mo><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math> Ondorioz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Lehen ordenako homogeneoa"
    },
    {
     "mota": "testua",
     "html": "Orriko forma diferentziala: <math display=\"block\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mi>y</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>) erabiliz: <math display=\"block\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac><mi>.</mi></mrow></math> Hortik: <math display=\"block\"><mrow><mfrac><mrow><mi>u</mi><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>→</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Manuskribuko bigarren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orrialdeak azken urratsean <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac></mrow></math> idazten du. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>-ren deribatua <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi></mrow></math> denez, <math display=\"inline\"><mi>x</mi></math> faktorea ezin da kendu: zuzena <math display=\"inline\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac></mrow></math> da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Aldagai banagarriak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi><mo>→</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>→</mo><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Egitura bakoitza bere murrizketarekin lotzen da; adibide itxiak SymPy-z egiaztatu dira.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0158 / IMG_2025_07_12_12_34_18S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Bi errata manuskribatu deklaratu dira: arctan-integralaren faktorea eta <math display=\"inline\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math> faktore galdua. SymPy-z egiaztatua; edizio kritikoa:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p158.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  }
 ]
};
