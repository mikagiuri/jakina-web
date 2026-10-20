/* JAKINA · kapitulua «B10.1 - M26 Fisika kuantikoa» (06fm_01kuantika), desde edicion2/kapituluak/06fm_01kuantika/06fm_01kuantika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["06fm_01kuantika"] = {
 "gakoa": "06fm_01kuantika",
 "titulua": "JAKINA - B10.1 - M26 Fisika kuantikoa",
 "azala": "B10.1 - M26 Fisika kuantikoa",
 "azpititulua": "IV. aroa - L2",
 "iturburua": "kapituluak/06fm_01kuantika/06fm_01kuantika.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Fisika modernoa",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Ikastaroaren azken urratsa. Aurreko bloke guztiek hona begiratzen dute: espazio bektorialak (egoerak), balio propioak (behagarriak), Sturm–Liouville (Schrödinger), Hamilton-en formalismoa (bilakaera), termodinamika eta probabilitatea (fisika estatistikoa). Erlatibitate berezia dagoeneko landuta dago bi tokitan (M25en 3. kapitulua eta M23ren 12.a); hemen kokatzen da kontzeptualki."
    }
   ],
   "edukia": [
    "Erlatibitate berezia (ikus M25-3 eta M23-12)",
    "Kuantizazioaren jatorri esperimentala eta Schrödinger-en ekuazioa",
    "Formalismoa: egoerak, behagarriak, balio propioak",
    "Fisika estatistikoaren oinarriak"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M26",
   "izenburua": "Fisika kuantikoa",
   "maila": "L2"
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M11 — Diagonalizazioa; M20 — EDak (Sturm–Liouville); M25 — Hamilton-en formalismoa"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "MASTERFISMOtex.pdf",
   "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; 1.-6. eta 8.-17. atalak (kuantizazioaren jatorri esperimentala + Schrödingerren ekuazioa)",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Fisika modernoa",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Erradiazio termikoa eta Planck-en postulatua</strong>"
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Erradiazio termikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Erradiazio termikoa gorputz batek bere tenperaturaren ondorioz igortzen duena da. Gorputz guztiek igortzen dute erradiazio hau. Tenperatura arruntetan, gorputz gehienak ez dira ikusten igortzen duten argiak, baizik eta islatzen duten argiak. Hala ere, tenperatura oso altuetan, gorputzak berez argitsuak dira."
    },
    {
     "mota": "testua",
     "html": "Egoera kondentsatuan dagoen materiak erradiazio-espektro jarraitua igortzen du; espektroaren xehetasunak ia materialarekiko independenteak dira, baina tenperaturaren mende daude nabarmen. Gorputz-mota bakar batek igortzen ditu ezaugarri unibertsaleko espektro termikoak: <em>gorputz beltzek</em>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ebidentzia esperimentalak"
    },
    {
     "mota": "testua",
     "html": "Gorputz beltz guztiek espektro bereko erradiazio termikoa igortzen dute. Gorputz beltz baten erradiazioaren espektro-banaketa kantitate honen bidez zehazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mi>T</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>erradiantzia espektrala</em> deitzen zaio."
    },
    {
     "mota": "irudia",
     "oina": "Gorputz beltz baten <math display=\"inline\"><msub><mi>R</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> erradiantzia espektrala hiru tenperaturatarako: kurba maiztasun handiagoetara lerratzen da, eta potentzia osoa (kurbaren azpiko azalera) bizkor hazten da <math display=\"inline\"><mi>T</mi></math>-rekin.",
     "src": "media/irudiak/2139d087337a2b86.svg",
     "zabalera": 329
    },
    {
     "mota": "testua",
     "html": "Erradiantzia espektralaren maiztasun guztietako integrala <math display=\"inline\"><mi>T</mi></math> tenperaturako gorputz beltz batek igorritako energia osoa da, denbora-unitateko eta azalera-unitateko. <em>Erradiantzia</em> deitzen zaio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kurba hauen formari buruzko behaketa esperimentalak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Maiztasuna zero denean, potentzia zero da; maiztasuna hazten den heinean, potentzia erradiatua handitu egiten da, maximo batera iritsi arte, eta gero txikitu egiten da; pentsatzekoa da, maiztasun infinituaren limitean, potentzia erradiatua zerora joango dela.",
      "Potentzia erradiatua intentsitate handienarekin gertatzen den maiztasuna (<math display=\"inline\"><mi>T</mi></math> horretarako potentzia maximoa) <em>linealki</em> handitzen da tenperatura handitu ahala."
     ]
    },
    {
     "mota": "testua",
     "html": "Maiztasun maximo horiek tenperaturarekiko proportzionalak dira, eta, era berean, tenperatura jakin baterako energia maximoari zein uhin-luzera dagokion erlaziona dezakegu (<strong>Wien-en legea</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non Wien-en konstantea den"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Potentzia erradiatu osoa, maiztasun guztietan, handitu egiten da tenperatura handitu ahala, baina linealki baino bizkorrago. Hazkunde hori <strong>Stefan-Boltzmann-en legearekin</strong> bat dator:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Stefan-Boltzmann-en konstantea izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>W</mi><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>⋅</mo><msup><mi>K</mi><mn>4</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>4. ariketa.</strong> Eguzkiaren gainazalaren tenperatura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>5700</mn></mrow></math> K da. Stefan-Boltzmann-en legea erabiliz, kalkulatu zein den Eguzkiak urtebetean galtzen duen masaren proportzioa. Datuak: Eguzkiaren erradioa <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>6.96</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m, Eguzkiaren masa <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> Kg."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Urtebeteko segundoak: <math display=\"inline\"><mrow><mn>365</mn><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>í</mi><mi>a</mi><mi>s</mi><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mn>24</mn><mo>⋅</mo><mn>60</mn><mo>⋅</mo><mn>60</mn><mo>=</mo><mn>31536000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></math>. Stefan-Boltzmann-en legearen arabera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5700</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>=</mo><mn>59.85</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mtext mathvariant=\"normal\">  </mtext><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eguzkiaren azalera <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.96</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>6.087</mn><mo>⋅</mo><msup><mn>10</mn><mn>18</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math> da; beraz, potentzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>S</mi><mo>=</mo><mn>3.64</mn><mo>⋅</mo><msup><mn>10</mn><mn>26</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta urtebeteko energia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Energía </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Tiempo </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1.1479</mn><mo>⋅</mo><msup><mn>10</mn><mn>34</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Einstein-en <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> ekuazioarekin galdutako masa lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>1.277211</mn><mo>⋅</mo><msup><mn>10</mn><mn>17</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eguzkiaren masa osoarekiko ehunekoa txikia da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Porcentaje </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>6.386</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Problema osoa urrats bakar batean ebatz daiteke (emaitza doituagoa lortzeko):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Porcentaje </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mi>S</mi><mi>t</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>6.392</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>5. ariketa.</strong> Gorputz beltz jakin baten erradiantzia espektralak, tenperatura jakin batean, 6500 Å-eko uhin-luzeran lortzen du maximoa. Tenperatura aldatzean, erradiantzia osoa bikoiztu egin da. Zein da tenperatura berrian maximoari dagokion uhin-luzera?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Bada tenperatura eta erradiantzia zehatzik kalkulatu behar ez duen bide bat: Wien-en konstantea erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mi>b</mi><msub><mi>T</mi><mn>1</mn></msub></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mi>b</mi><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>⇒</mo><msub><mi>T</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>⇒</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi tenperaturen arteko erlazioa Stefan-Boltzmann-en legearen bidez ondoriozta daiteke, erradiantzien arteko erlazioa datua baita: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>σ</mi><msubsup><mi>T</mi><mn>1</mn><mn>4</mn></msubsup></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mi>σ</mi><msubsup><mi>T</mi><mn>2</mn><mn>4</mn></msubsup></mrow></math>. Lehen ekuazioa bigarrenaz zatituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>⇒</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></msup></mfrac><mo>⋅</mo><mn>6500</mn><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>5465.8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>6. ariketa.</strong> Zein uhin-luzera dagokio gizaki batek erradiatutako energia maximoari? Espektro elektromagnetikoaren zein tartetan dago?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>273</mn><mo>+</mo><mn>36</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>K</mi></mrow></mfrac><mo>=</mo><mn>93786.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Infragorrian dago."
    },
    {
     "mota": "testua",
     "html": "<strong>7. ariketa.</strong> Hurrengo galderei erantzuteko, har ditzagun izarrak gorputz beltztzat, beren gainazalaren tenperaturaren arabera energia erradiatzen dutenak."
    },
    {
     "mota": "testua",
     "html": "(a) Izar baten tenperatura 50000 K da. Uhin-luzeraren zein baliotarako izango da maximoa erradiantzia?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>50000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>5.796</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>579.6</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(b) Izarra 10 argi-urtera dagoela eta harengandik Lurrera iristen den intentsitatea <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>40</mn></mrow></math> mikrowatt/metro karratu dela jakinda, zenbatekoa da izarraren erradioa kilometrotan?"
    },
    {
     "mota": "testua",
     "html": "Lehenik, izarraren erradiazioaren potentzia zein den kalkulatuko dugu, intentsitatearen datua eta izarrak Lurrarekiko duen distantziarena kontuan hartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>I</mi><mo>⋅</mo><mi>S</mi><mo>=</mo><mn>40</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>10</mn><mo>⋅</mo><mn>299792458</mn><mfrac><mi>m</mi><mi>s</mi></mfrac><mo>⋅</mo><mn>31536000</mn><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.499</mn><mo>⋅</mo><msup><mn>10</mn><mn>30</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Izarraren gainazaleko erradiantzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo>⋅</mo><msup><mn>50000</mn><mn>4</mn></msup><mo>=</mo><mn>3.54</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalkulatutako potentzia bera denez, potentziaren eta erradiantziaren arteko erlazioa erabil dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>P</mi><mi>S</mi></mfrac><mo>⇒</mo><mn>4</mn><mi>π</mi><mo>⋅</mo><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>P</mi><mi>R</mi></mfrac><mo>⇒</mo><mi>r</mi><mo>=</mo><msqrt><mfrac><mi>P</mi><mrow><mn>4</mn><mi>π</mi><mi>R</mi></mrow></mfrac></msqrt><mo>=</mo><mn>1.00566</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Km </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c) Izarraren tenperatura handitu egin da, potentzia bikoiztu arte. Zein da erradiantzia maximo berriari dagokion uhin-luzera berria?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mn>7.08</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⇒</mo><mi>T</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7.08</mn><mo>⋅</mo><mfrac><msup><mn>10</mn><mn>11</mn></msup><mn>5.67</mn></mfrac><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></msup><mo>=</mo><mn>59444</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>59444</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>48.75</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>487.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rayleigh-Jeans-en eredua"
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honek izenburua baino ez zuen jatorrizko iturrian (&quot;1.1.3. El modelo de Raleigh-James&quot;), garapenik gabe. Ondoren datorren edukia geure azalpena da, gaiaren tratamendu estandarrean oinarritua, Eisberg &amp; Resnick-en <em>Quantum Physics</em> liburuko 1. kapituluarekin koherentea (erabiltzaileak liburu hori ere badu)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Planck baino lehen, fisika klasikoa <math display=\"inline\"><msub><mi>R</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> bi osagai guztiz klasikotatik abiatuta ondorioztatzen saiatu zen: barrunbe batean bibrazio elektromagnetikoaren zenbat modu sartzen diren zenbatzea, eta modu bakoitzak, oreka termikoan, batez beste mekanika estatistiko klasikoak iragartzen duen energia gordetzen duela suposatzea."
    },
    {
     "mota": "testua",
     "html": "<strong>Moduak zenbatzea.</strong> <math display=\"inline\"><mi>L</mi></math> aldeko barrunbe baten barruan, uhinek geldikorrak izan behar dute paretetan, eta horrek maiztasun posibleak multzo diskretu batera murrizten ditu (mutur finkoak dituen soka baten moduen analogoa, baina espazioaren hiru norabideetan). Modu horietatik zenbat erortzen diren <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean —kalkulu geometriko hutsa, inolako fisika kuantikorik gabea— honela laburbiltzen da: bolumen-unitateko eta maiztasun-tarteko modu kopurua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(argiaren bi polarizazio posibleen 2 faktorea barne dago jadanik)."
    },
    {
     "mota": "testua",
     "html": "<strong>Modu bateko batez besteko energia klasikoa.</strong> Fisika estatistiko klasikoak (ekipartizioaren teorema) modu bakoitzari, osziladore harmonikotzat hartuta, honako batez besteko energia termikoa esleitzen dio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mrow><mtext mathvariant=\"normal\">clasica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maiztasunarekiko independentea da. Hau da, hain zuzen ere, tratamendu kuantikoaren <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≪</mo><mn>1</mn></mrow></math> limitean kalkulatzen den batez besteko energia bera, eta ez da kasualitatea: maiztasun baxuetarako (<math display=\"inline\"><mrow><mi>K</mi><mi>T</mi></mrow></math>-ren aldean energia-kuantu txikiak) Planck-en kuantizazioa fisika klasikotik bereizezina da."
    },
    {
     "mota": "testua",
     "html": "<strong>Rayleigh-Jeans-en legea.</strong> Moduen dentsitatea moduko batez besteko energiaz biderkatuz, energia-dentsitate espektral klasikoa lortzen da, eta hartatik erradiantzia espektrala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">RJ </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><mo>⋅</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msub><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mrow><mtext mathvariant=\"normal\">clasica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Hondamendi ultramorea.</strong> Adierazpen hau mugarik gabe hazten da <math display=\"inline\"><mrow><mi>ν</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean: energia erradiatu osoa, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">RJ </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi></mrow></math>, dibergentea da. Gorputz erreal batek ere ez du energia infiniturik igortzen; beraz, eredu klasikoak era katastrofikoan huts egiten du maiztasun altuen muturrean (ultramorea eta haratago) — hortik izena. Horixe da, hain zuzen, Planck-en postulatuak zuzentzen duen hutsegitea: batez besteko energia klasikoa, <math display=\"inline\"><mrow><mi>K</mi><mi>T</mi></mrow></math>, adierazpen kuantizatuaz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, ordezkatzean, izendatzaileko esponentzialak modu bakoitzaren ekarpena bizkor deuseztarazten baitu <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>≫</mo><mi>K</mi><mi>T</mi></mrow></math> denean, nahiz eta <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>≪</mo><mi>K</mi><mi>T</mi></mrow></math> denean bi adierazpenak bat etorri. Rayleigh-Jeans-en legea, beraz, Planck-en legearen maiztasun baxuko limitea da: ez teoria aurkaria, baizik haren kasu partikular bat, fisika klasikoak ongi iragartzen zuena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planck-en postulatua"
    },
    {
     "mota": "testua",
     "html": "Energia jarraitua ez dela, kuantizatuta dagoela kontsideratzean datza; modu normalak diskretizatzean datzala ere esan genezake. Planck-ek proposatu zuen energia maiztasunaren, konstante baten (denborarekin haren izena eramango zuena) eta zenbaki oso baten menpekoa zela (horra hor kuantizazioa)."
    },
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> Planck-en ereduaren arabera, <math display=\"inline\"><mi>ν</mi></math> maiztasuneko osziladore batek"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℰ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "probabilitatea du honako energia hau izateko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalkulatu <math display=\"inline\"><mi>A</mi></math> faktorearen balioa (normalizazio-konstantea) eta kalkulatu osziladorearen batez besteko energia."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Bi kasuetan, probabilitate guztien batura bat dela kontuan hartuta kalkulatzen da <math display=\"inline\"><mi>A</mi></math>. Energia jarraituaren kasurako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup><mi>d</mi><mi mathvariant=\"script\">ℰ</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℰ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia kuantizaturako, batukari bat erabiltzen dugu integral baten ordez (formulan <math display=\"inline\"><mi>n</mi></math> baitugu):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>A</mi><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berretura-serieak gogora ekarriz, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></mrow></math>; beraz, esponentziala bere berreturarekin aldagai baten n-garren berretura gisa hartzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau normalizazio-konstantearen kalkuluari aplikatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>A</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain batez besteko energia kalkula dezakegu, eta hondamendi ultramorea saihesten den egiaztatu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo>⋅</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mi>h</mi><mi>ν</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(garatuz, serie geometrikoa <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekiko deribatuz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>h</mi><mi>ν</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>h</mi><mi>ν</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Formulak behaketa esperimentalak betetzen dituela egiaztatzeko, serie gisa garatzen dugu: <math display=\"inline\"><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Maiztasuna oso baxua den kasuetarako emaitza ezaguna berreskuratzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>≪</mo><mn>1</mn><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></mfrac><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maiztasuna oso baxua ez den kasuetarako emaitza ZERO da; hartara, hondamendi ultramorea saihesten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>≫</mo><mn>1</mn><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>≈</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>2. ariketa.</strong> Planck-en energia-dentsitatearen adierazpena erabiliz (uhin-luzeraren funtzioan), froga bedi Wien-en legea haren ondorioa dela. Aplika bedi prozedura bera maiztasunaren funtzioan, konstante baten bila."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Erradiantzia espektrala tenperaturaren eta maiztasunaren menpeko funtzioa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ezin dugu maiztasuna zuzenean argiaren abiadura zati uhin-luzeraz ordezkatu: diferentziala hartu behar dugu kontuan. <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mi>c</mi><mi>λ</mi></mfrac></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi>d</mi><mi>ν</mi><mo>=</mo><mi>−</mi><mfrac><mi>c</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>λ</mi></mrow></math>, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mover><mi>R</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mfrac><mi>c</mi><mi>λ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>c</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uhin-luzeraren mendeko funtzioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>h</mi><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Enuntziatuak dentsitatetik abiatuta kalkulatzeko eskatzen du, baina erradiantziaren eta dentsitatearen arteko erlazioa ezagutzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>8</mn><mi>π</mi><mi>h</mi><mfrac><mi>c</mi><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maximoa aurkitzeko, <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>ρ</mi></mrow><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>. Garatuz eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math> aldagai-aldaketa eginez, ekuazio transzendente honetara iristen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mn>5</mn><mo>+</mo><mi>x</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>≈</mo><mn>4.965114231</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "nondik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mn>4.965114231</mn><mo>⋅</mo><mi>K</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2.8991</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, hain zuzen, Wien-en konstantearen balioa. Prozedura berak, maiztasunari aplikatuta eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math> hartuta, hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>≈</mo><mn>2.8</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>2.8</mn><mi>K</mi></mrow><mi>h</mi></mfrac><mo>⋅</mo><mi>T</mi><mo>≈</mo><mn>5.8315</mn><mo>⋅</mo><msup><mn>10</mn><mn>10</mn></msup><mfrac><mrow><mi>H</mi><mi>z</mi></mrow><mi>K</mi></mfrac><mo>⋅</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "2005eko iraila, IEM/Fisika Modernoa, 5. problema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erradiazioaren energia-dentsitaterako Planck-en banaketa era honetan idatz daiteke (<math display=\"inline\"><mi>A</mi></math> konstante positiboa da): <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Azaldu adierazpen honen eta gas ideal monoatomiko baten energia osoa ematen duenaren arteko analogiak eta desberdintasunak: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bereziki, eztabaidatu parentesi arteko terminoen esanahia, eta esan zer egoeratan izango den Planck-en banaketaren bigarren faktorea gasari dagokionaren antzekoa."
      },
      {
       "mota": "testua",
       "html": "b) Frogatu, Planck-en banaketaren maximoaren posizioa maiztasunaren funtzioan <math display=\"inline\"><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> bidez adierazten badugu, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> konstante jakin bat dela (Wien-en legea). Konstantea kalkulatzeko, erabili Eguzkia izar &quot;horia&quot; dela, bere erradiazioan uhin-luzerarik ugariena kolore horri baitagokio. Pentsa bedi uhin-luzera hori 6000 Å dela, eta Eguzkiaren gainazalaren tenperatura gutxi gorabehera 5000 K dela."
      },
      {
       "mota": "testua",
       "html": "c) Astronomo batek ikusten du izar jakin baten erradiaziorik ugariena 3 eV-ko fotoiei dagokiela. Kalkulatu izar horren tenperatura."
      },
      {
       "mota": "testua",
       "html": "d) Estimatu <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>/</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math> proportzioaren magnitude-ordena, hots, aurreko ataleko izarrean <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> egoeretan dauden hidrogeno atomoena. (Hidrogeno-atomoaren ionizazio-energia <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV da.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Bi kasuetan, energia osoa hau da: (&quot;moduen&quot; edo askatasun-graduen kopurua) <math display=\"inline\"><mi>×</mi></math> (moduko batez besteko energia). Gasean, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> da askatasun-graduen kopuru osoa (<math display=\"inline\"><mi>N</mi></math> atomo, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> askatasun-graduko batez besteko energia). Planck-enean, lehen parentesia, <math display=\"inline\"><mrow><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi></mrow></math>, moduen kopuruari dagokio (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barruko uhin baimenduak), norabideak eta polarizazioa kontatuta; bigarrena, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, maiztasun horretako osziladore baten batez besteko energia da: maiztasunaren araberakoa, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> ez bezala. Tenperatura altuetan (<math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><mi>ν</mi><mo>≪</mo><mn>1</mn></mrow></math>) gasarenaren antzekoa izan behar du, eta hala da: <math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mi>ν</mi><mn>3</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hartuta, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>ν</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></msub><mo>=</mo><mn>0</mn></mrow></math> ezarriz: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><msup><mi>ν</mi><mn>2</mn></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>ν</mi><mn>3</mn></msup><mi>β</mi><mi>h</mi><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>−</mo><mfrac><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ekuazio horrek <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte</mtext></mrow></mrow></math> finkatzen du (tenperaturarekiko independentea: Wien-en legea). Zenbakizko balioa, <math display=\"inline\"><mrow><msub><mi>C</mi><mtext mathvariant=\"normal\">Wien</mtext></msub><mo>=</mo><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub></mrow></mfrac></mrow></math> hartuta: <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>510</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5700</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>4.92</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>4.9</mn></mrow></math>: <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>4.9</mn><mrow><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4.9</mn></mfrac><mo>=</mo><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>7100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV. Degenerazioaren eragina arbuiatuz: <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo>×</mo><mn>13.6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1.6</mn><mo>×</mo><mn>13.6</mn><mo>×</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mo>≈</mo><mn>8.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Enuntziatuarekiko desadostasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Enuntziatuak <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>6000</mn></mrow></math> Å eta <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">sol </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>5000</mn></mrow></math> K ematen ditu, baina eskuz idatzitako ebazpen ofizialak <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>5100</mn></mrow></math> Å eta <math display=\"inline\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub><mo>=</mo><mn>5700</mn></mrow></math> K erabiltzen ditu (haiekin <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>4.92</mn></mrow></math> zenbakizko emaitza autokoherentea da). Ebazpenaren balioak bere horretan transkribatzen dira, enuntziatu inprimatuarekin bat egitera behartu gabe. Azterketa osoa (5 problema guztiak, ebazpen ofizialarekin) 7. kapituluko &quot;2005eko iraila&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>3. ariketa.</strong> Planck-en energia-dentsitatearen adierazpena kontuan hartuta, egiaztatu <math display=\"inline\"><mi>T</mi></math> tenperaturan gorputz beltz batek erradiatutako potentzia Stefan-Boltzmann-en legearekin bat datorrela. Laguntza: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>π</mi><mn>4</mn></msup><mn>15</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><mo>⋅</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mn>8</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mo>⋅</mo><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math> aldaketarekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>π</mi><mn>5</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow><mrow><mn>15</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msup><mi>T</mi><mn>4</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Stefan-Boltzmann-en legea bete dadin, konstanteak izan behar du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>π</mi><mn>5</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow><mrow><mn>15</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>5.66</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mfrac><mi>W</mi><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Erronka.</strong> 60 W-eko bonbilla batek 3000 K-eko tenperaturan dagoen gorputz beltz baten erradiantzia bera du. Kalkula bedi bonbillaren harizpiaren azalera efektiboa. Kalkula bedi bonbillaren errendimendu efektiboa: espektro ikusgaiari dagokion erradiantziaren ehunekoa."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Stefan-Boltzmann-en legearen arabera,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo>⋅</mo><msup><mn>3000</mn><mn>4</mn></msup><mo>=</mo><mn>4592700</mn><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta azalera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Superficie </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia</mtext></mrow><mrow><mtext mathvariant=\"normal\">Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>60</mn><mi>W</mi></mrow><mrow><mn>4592700</mn><mi>W</mi><mi>/</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>1.30642106</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><msup><mi>m</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Errendimendurako, erradiantzia espektralaren <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> integrala tarte ikusgaian (4000-7000 Å, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math> zabalera) hurbiltzen dugu, <math display=\"inline\"><mi>R</mi></math>-ren balio adierazgarri bat hartu eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow></math>-z biderkatuz. Balio hori aukeratu baino lehen, tartea kurbaren maximoarekiko kokatuko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>3000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>9.66</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>9660</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maximoa ikusgaitik askoz gorago dago; beraz, tartearen barruan <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hazten ari da. Lehenik erdiko puntua hartuko dugu, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>550</mn></mrow></math> nm, Planck-en formularekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>h</mi><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>5.5</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1.214373294</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Rendimiento </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mtext mathvariant=\"normal\">Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mfrac><mrow><mn>1.214373294</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><mn>4592700</mn></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>7.93</mn><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bizkor hazten denez tartearen barruan, puntu bakarreko hurbilketak balio erreala gutxiesten du. Hurbilketa hobetzen dugu <math display=\"inline\"><mi>R</mi></math> tartearen bi muturretan batez bestekatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>4</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2.268187878</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math> <math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>7</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2.358090838</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>2.268187878</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mo>+</mo><mn>2.358090838</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1.292454813</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Rendimiento </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mn>1.292454813</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><mn>4592700</mn></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>8.44</mn><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "horrek erdiko puntuaren kalkulua <math display=\"inline\"><mrow><mn>0.5</mn><mi>%</mi></mrow></math> inguru zuzentzen du."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 1,
   "izenburua": "Efektu fotoelektrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fenomeno honen bidez metal batek elektroiak igortzen ditu maiztasun jakin bateko argiarekin argitua izatean."
    },
    {
     "mota": "irudia",
     "oina": "Efektu fotoelektrikoa aztertzeko aparatua: argi monokromatikoak <math display=\"inline\"><mi>A</mi></math> plaka jotzen du; askatutako fotoelektroiak <math display=\"inline\"><mi>B</mi></math> kopak jasotzen ditu <math display=\"inline\"><mi>V</mi></math> potentzialak erakartzen baditu, eta korrontea <math display=\"inline\"><mi>G</mi></math>-n neurtzen da.",
     "src": "media/irudiak/a76d0e495d7c4ce0.svg",
     "zabalera": 409
    },
    {
     "mota": "testua",
     "html": "Aparatuan, beirazko estalki batek sistema hutsean dagoen espazio batean ixten du. Argi erasotzailea, monokromatikoa dena, kuartzozko leiho batetik sartzen da, <math display=\"inline\"><mi>A</mi></math> metalezko plaka jotzen du eta elektroiak (fotoelektroiak) askatzen ditu; horiek <math display=\"inline\"><mi>B</mi></math> metalezko kopara erakartzen badira <math display=\"inline\"><mi>V</mi></math> potentzial-diferentzia baten bidez (<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> artean), korronte gisa detektatu ahal izango dira. <math display=\"inline\"><mi>G</mi></math> anperemetroak korronte fotoelektriko hori neurtzeko balio du."
    },
    {
     "mota": "testua",
     "html": "Fotoelektroi baten energia aztertuz <math display=\"inline\"><mi>A</mi></math>-tik <math display=\"inline\"><mi>B</mi></math>-rako ibilbidean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>A</mi></msub><mo>−</mo><mi>E</mi><msub><mi>p</mi><mi>A</mi></msub><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><mi>E</mi><msub><mi>p</mi><mi>B</mi></msub><mo>⇒</mo><msub><mi>T</mi><mi>A</mi></msub><mo>−</mo><mi>e</mi><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><mi>e</mi><msub><mi>V</mi><mi>B</mi></msub><mo>⇒</mo><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>B</mi></msub><mo>−</mo><msub><mi>V</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><msub><mi>T</mi><mi>A</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Elektronvolta</em> (eV) elektroi baten kargak 1 volteko potentzial-diferentzia batez azeleratzen denean hartzen duen energia da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>T</mi><mo>=</mo><mi>e</mi><mo>⋅</mo><mn>1</mn><mi>V</mi><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>T</mi><mo>=</mo><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mn>1</mn><mfrac><mi>J</mi><mi>C</mi></mfrac><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Korronte fotoelektrikoa aplikatutako voltaiaren funtzioan, bi argi-intentsitatetarako (<math display=\"inline\"><mi>b</mi></math> kurbak <math display=\"inline\"><mi>a</mi></math>-ren intentsitate erdia du). <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> gelditze-potentziala berbera da bi kasuetan: ez dago intentsitatearen menpe, maiztasunaren menpe baizik.",
     "src": "media/irudiak/4f1e6d34ec5f9c60.svg",
     "zabalera": 298
    },
    {
     "mota": "testua",
     "html": "Korronte fotoelektrikoaren kurbak, <math display=\"inline\"><mi>V</mi></math>-ren funtzioan, <math display=\"inline\"><mi>V</mi></math> nahikoa handia denerako muga-balio bat lortzen du (<em>saturazio-balioa</em>): <math display=\"inline\"><mi>A</mi></math>-tik igorritako elektroi guztiak <math display=\"inline\"><mi>B</mi></math> kopak biltzen ditu. <math display=\"inline\"><mi>V</mi></math>-ren zeinua alderantzikatzen bada, korrontea ez da berehala zerora erortzen; horrek iradokitzen du elektroiak energia zinetikoarekin igortzen direla: batzuk <math display=\"inline\"><mi>B</mi></math>-ra iritsiko dira eremu elektrikoa haien higiduraren aurka egon arren."
    },
    {
     "mota": "testua",
     "html": "Potentzial-diferentzia hori nahikoa handi egiten bada, <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> balio bat lortuko du, zeinerako korronte fotoelektrikoa zero egiten baita: <em>gelditze-potentziala</em> edo <em>balazta-potentziala</em> da. Potentzial-diferentzia hori, elektroiaren kargaz biderkatuta, elektroi azkarrenen <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> energia zinetikoaren neurria da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esperimentalki, <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> kantitatea argiaren <strong>intentsitatearekiko independentea</strong> dela ateratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoria klasikoak azaltzen ez dituen hiru gertaera"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Uhin-teoriak eskatzen du argi-uhinaren <math display=\"inline\"><mi>E</mi></math> bektore elektriko oszilatzailearen anplitudea handitzea sortaren intentsitatea handitu ahala. Elektroiari aplikatutako indarra <math display=\"inline\"><mrow><mi>e</mi><mi>E</mi></mrow></math> denez, fotoelektroien energia zinetikoak sortaren intentsitatearekin batera handitu beharko luke. Hala ere, <math display=\"inline\"><mrow><msub><mi>T</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></math> argiaren intentsitatearekiko independentea da.",
      "Uhin-teoriaren arabera, efektu fotoelektrikoa argiaren edozein maiztasunetarako gertatu beharko litzateke, baldin eta intentsitatea nahikoa handia bada. Hala ere, gainazal bakoitzerako mozte-maiztasun karakteristiko bat dago: maiztasun txikiagoetarako efektua ez da gertatzen.",
      "Teoria klasikoan argi-energia uniformeki banatuta dago uhin-frontean; argia nahikoa ahula bada, atzerapen-denbora neurgarri bat egon beharko litzateke argia gainazalean eragiten hasten den unetik elektroia kanporatzen den arte. Hala ere, inoiz ez da halako atzerapen neurgarririk neurtu."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> 1 W-eko potentzia duen argi-iturri batetik metro bateko distantziara potasiozko plaka bat jartzen da. Demagun igorritako fotoelektroi batek plakaren eremu zirkular batetik jaso dezakeela bere energia, zeinaren <math display=\"inline\"><mi>r</mi></math> erradioa, adibidez, erradio atomiko bat (1 Å) baita. Potasioaren gainazaletik elektroi bat ateratzeko behar den energia 2.1 eV ingurukoa da. Zenbat denbora beharko du itu horrek energia kantitate hori argi-iturritik xurgatzeko? Demagun argi-energia uniformeki barreiatuta dagoela uhin-frontean."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Iturrian zentroa duen metro bateko erradioko esferaren azalera <math display=\"inline\"><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math> da. Bonbillaren intentsitatea hau izango da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia</mtext></mrow><mrow><mtext mathvariant=\"normal\">Superficie </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>W</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>0.25</mn><mi>π</mi></mfrac><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Iturriak norabide guztietan berdin erradiatzen badu, elektroiak hau xurgatzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>0.25</mn><mi>π</mi></mfrac><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mi>π</mi><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><msup><mi>m</mi><mn>2</mn></msup><mo>=</mo><mn>0.25</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Metalaren erauzketa-energia <math display=\"inline\"><mrow><mn>2.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.364570623</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></math> da, beraz behar den denbora hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>3.364570623</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow><mrow><mn>0.25</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><mi>J</mi><mi>/</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mn>134.58</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> min </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Einsteinen formulazioa"
    },
    {
     "mota": "testua",
     "html": "Argiak energia pakete txikitan garraiatzen du: kuantuak edo fotoiak. Fotoelektroi bakoitzaren energia zinetikoa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Metalari elektroi bat erauzteko behar den gutxieneko energiari atalase-energia, erauzketa-lana, lan-funtzioa edo mozte-funtzioa deitzen zaio. Kasu horretan energia zinetikoa zero da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>⇒</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>: atalase-maiztasuna, metalari elektroiak erauzteko gai den txikiena. <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math>: atalase-uhin-luzera, metalari elektroiak erauzteko gai den handiena."
    },
    {
     "mota": "testua",
     "html": "<strong>A ariketa.</strong> Zinkari elektroiak erauzteko 4.3 eV-eko energia behar bada, zein da zinkean efektu fotoelektrikoa sortzeko erabil daitekeen argiaren uhin-luzera maximoa? Zein izango da zinkak igorritako elektroien energia zinetiko maximoa 100 nm-ko uhin-luzerako argia erabiltzen bada?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mi>m</mi><mi>/</mi><mi>s</mi></mrow><mrow><mn>4.3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>1.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mi>/</mi><mtext mathvariant=\"normal\">eV</mtext></mrow></mfrac><mo>=</mo><mn>2.89</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erabilitako erradiazioaren energia, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>100</mn></mrow></math> nm-rekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>1.9864455</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>12.3984</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, elektroiek honako energia zinetiko hau lortuko lukete:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>12.3984</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>4.3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>8.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "2006ko ekaina, IEM/Fisika Modernoa, 1. problema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "5000 K-ko gainazal-tenperatura duen izar batek 5800 Å-en du bere erradiantzia maximoa. Metal batean efektu fotoelektrikoa sortzeko, 500 K-tan dagoen gorputz beltz baten erradiazioa erabiltzen da."
      },
      {
       "mota": "testua",
       "html": "a) Zehaztu 500 K-eko gorputz beltzaren erradiazioaren maximoari dagokion uhin-luzera."
      },
      {
       "mota": "testua",
       "html": "b) Metalaren lan-funtzioa 0.214 eV-ekoa bada, kalkulatu gorputz beltzak igorritako fotoien uhin-luzera maximoa, metalean fotoelektroiak sortzeko gai direnena."
      },
      {
       "mota": "testua",
       "html": "c) Marraztu eskema batean gorputz beltzaren <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erradiantzia eta itzaleztatu metal horretan efektu fotoelektrikoa sortzeko erabilgarriak diren fotoien espektro-eskualdea."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><msub><mi>T</mi><mo>⋆</mo></msub><mo>=</mo><mn>5000</mn></mrow></math> K, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><mo>=</mo><mn>5800</mn></mrow></math> Å."
      },
      {
       "mota": "testua",
       "html": "a) Wienen legea: <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>T</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>C</mi></mrow></math>, beraz <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.9</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math> Gorputz beltzerako, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>500</mn></mrow></math> K-tan: <math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>T</mi><mo>=</mo><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><msub><mi>T</mi><mo>⋆</mo></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>0.214</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (gutxieneko atalase-maiztasuna), beraz <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi><mi>/</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>W</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>0.214</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>58</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (Aurreko ataleko <math display=\"inline\"><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> balioarekin bat dator.)"
      },
      {
       "mota": "testua",
       "html": "c) Gorputz beltzaren <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eskeman, 500 K-tan, efektu fotoelektrikorako eskualde erabilgarria <math display=\"inline\"><mrow><mi>ν</mi><mo>&gt;</mo><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> da (baliokideki, <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>): <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> denez, eskualde hori kurbaren maiztasun handienen aldea da, maximoaren eskuinaldean geratzen dena."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoa (6 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;2006ko ekaina&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>2. ariketa.</strong> Sodiozko plaka bat argiztatzeko 4000 Å-eko uhin-luzera erabili da, eta kasu horretan gelditze-potentziala 1.85 V-ekoa zen. Gelditze-potentziala 0.82 V-ekoa da 3000 Å-eko uhin-luzera erabiltzen dugunean. Kalkulatu Plancken konstantea, sodioaren erauzketa-lana eta atalase-uhin-luzera."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Uhin-luzera bakoitzari gelditze-potentzial jakin bat dagokio, baina erauzketa-lana ez da aldatzen, material bereko plaka delako."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>e</mi><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>2</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow><mo>⇒</mo><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>h</mi><mi>c</mi><mo>⋅</mo><mfrac><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow><mrow><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>2</mn></msub></mrow><mrow><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erauzketa-lanerako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>⇒</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>3.64</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta atalase-uhin-luzerarako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mn>5439</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Millikanen esperimentua"
    },
    {
     "mota": "testua",
     "html": "Frogatu zuen, efektu fotoelektrikoari buruzko Einsteinen teoria hartuta, <math display=\"inline\"><mi>h</mi></math> konstanterako Planckek gorputz beltzaren erradiazioaren azterketan zehaztutako balio bera lortzen zela, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow></math> adierazpenean energia zinetikoaren eta maiztasunaren arteko erlazio lineala baitago."
    },
    {
     "mota": "irudia",
     "oina": "Millikanen neurketak: gelditze-potentziala maiztasunaren funtzioan (sodioaren kasua). Erlazioa lineala da; maldak Plancken konstantea ematen du, eta ardatzarekiko ebakidurak <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math> atalase-maiztasuna.",
     "src": "media/irudiak/b486223da18b1fdb.svg",
     "zabalera": 257
    },
    {
     "mota": "testua",
     "html": "<strong>3. ariketa.</strong> Aluminiozko plaka bat argiztatzeko 2000 Å-eko uhin-luzera erabili da; aluminioaren erauzketa-lana 4.2 eV-ekoa da. Zein dira elektroi azkarrenen eta motelenen energia zinetikoak? Zein da gelditze-potentziala? Zein da atalase-uhin-luzera? Intentsitatea 2 W/m²-koa bada, zenbat fotoik jotzen du aluminiozko gainazala?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Erauzketa-lana gainazaleko elektroiei dagokie, horiek baitira azkarrenak; elektroia plakaren barrualdean zenbat eta sakonago egon, orduan eta abiadura txikiagoz aterako da, irteteko lan handiagoa egin behar baitu, energia zinetikoa zeroraino jaitsi daitekeelarik. Elektroi azkarrenentzat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>3.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gelditze-potentziala <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow><mi>e</mi></mfrac><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> V</mtext></mrow></mrow></math> da. Atalase-uhin-luzera hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mn>2952</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azalera- eta denbora-unitateko fotoi kopururako, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>W</mi><mo>⋅</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>18</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones por </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>m</mi><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> por segundo </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "2005eko iraila, IEM/Fisika Modernoa, 1. problema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntu) 1 watteko potentzia duen lanpara ultramore bat (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) 10 m-ra dago 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>-ko azalerako zesiozko plaka batetik, argiak plaka perpendikularki jotzen duelarik. Plakara iristen den fotoi bakoitzak elektroi bat erauzten duela suposatuz:"
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu segundoko igorritako elektroi kopurua."
      },
      {
       "mota": "testua",
       "html": "b) Zein da igorritako elektroien energia maximoa, Cs-aren erauzketa-lana 1.9 eV bada?"
      },
      {
       "mota": "testua",
       "html": "c) Nola aldatzen dira aurrez kalkulatutako magnitudeak lanpara 5 metrora hurbilduz gero?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> W <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> J s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>10</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>10</mn></mrow></math> cm<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>."
      },
      {
       "mota": "testua",
       "html": "a) Plakaren gaineko potentzia: <math display=\"block\"><mrow><msub><mi>P</mi><mi>S</mi></msub><mo>=</mo><mi>P</mi><mo>⋅</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Fotoi kopurua segundoko, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> erabiliz: <math display=\"block\"><mrow><msub><mi>N</mi><mi>γ</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>S</mi></msub><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mi>S</mi></msub><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mfrac><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/eV</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones/s</mtext></mrow><mi>.</mi></mrow></math> fotoi bakoitzeko elektroi bat hartuta: <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>γ</mi></msub><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup></mrow></math> elektroi/s."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4.96</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.06</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> potentzia <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math>-rekin aldatzen da. Beraz, <math display=\"inline\"><mi>d</mi></math> erdira txikitzean, <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> 4ko faktore batez handitzen da, eta gauza bera egingo du igorritako elektroi kopuruak. Hala ere, energia zinetiko maximoa ez da aldatuko (<math display=\"inline\"><mi>λ</mi></math>-ren menpe soilik dago, ez intentsitatearen menpe)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoa (5 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;2005eko iraila&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>4. ariketa.</strong> Elektroi bat, efektu fotoelektrikoaren bidez erauzi ondoren, <math display=\"inline\"><mi>B</mi></math> eremu magnetiko uniforme batean higitzen da, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0.188</mn></mrow></math> mm-ko erradioko ibilbide zirkularra deskribatuz <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> T-ko eremuaren pean. Kalkulatu bere abiadura eta energia zinetikoa."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Indar magnetikoa indar zentripetu gisa hartuta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>e</mi><mi>B</mi><mi>v</mi></mrow><mi>m</mi></mfrac><mo>⇒</mo><mi>v</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>B</mi><mi>r</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>T</mi><mo>⋅</mo><mn>0.188</mn><mi>m</mi></mrow><mrow><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac><mo>=</mo><mn>3.3</mn><mo>⋅</mo><msup><mn>10</mn><mn>7</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.98</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Erreprodukzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko iturrian 4. ariketaren datu batzuk (esaterako, hasierako abiadura edo aplikazio zehatza) ez daude testuan idatzita, baina erantzuna bai; hemen dagoen bezala eman da, aldatu gabe."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egiaztapen esperimentala: Plancken konstantearen neurketa"
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honek erabiltzailearen (Mikel Aguirre) laborategi-txosten propioa erreproduzitzen du (jatorriz euskaraz idatzia; gaztelaniazko iturrian euskaratik itzulita zegoen): &quot;Efektu fotoelektrikoa. Planck-en konstantearen zenbatespena&quot;, fisika modernoko irakasgaiaren praktika (UPV/EHU). Ez da hirugarren batzuen liburua — osorik erreproduzitzen da, MASTERFISMOtexeko gainerako materiala bezala."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Praktika honen helburua Plancken konstantea esperimentalki neurtzea da, efektu fotoelektrikoaren teoria garatuari jarraituz. Materiala: PbS-zko fotokatododun zelula fotoelektriko bat, Hg-zko lanpara espektral bat, interferentzia-iragazkien joko bat, neurketa-anplifikadore unibertsal bat eta multimetro bat."
    },
    {
     "mota": "testua",
     "html": "<strong>Testuinguru historikoa.</strong> 1887an H. R. Hertzek aurkitu zuen argi ultramorea jasotzen duten elektrodoek deskarga elektrikoak errazago sortzen dituztela. 1888an Hallwachsek karga horiek negatiboak zirela aurkitu zuen, eta 1899an J. J. Thomsonek elektroiak zirela frogatu zuen. Azkenean, 1902an, Philip Lenardek teoria klasikoak azaldu ezin zuen aurkikuntza harrigarria egin zuen: elektroien energia zinetiko maximoa, <math display=\"inline\"><msub><mi>K</mi><mi mathvariant=\"normal\">max</mi></msub></math>, ez dago argi erasotzailearen intentsitatearen menpe (maiztasunaren menpe baino ez dago, eta menpekotasun hori lineala da). Argiak, uhin gisa, zenbat eta intentsitate handiagoa izan, orduan eta energia handiagoko elektroiak erauzi beharko lituzke, eta, gainera, argiaren intzidentziaren eta elektroien emisioaren artean atzerapen bat iragartzen zuen, inoiz behatu ez zena. Einsteinek 1905ean proposatu zuen azalpen kuantikoa: material baten gainazalak fotoi bat xurgatzen duenean, fotoiaren energiaren zati bat elektroia atomotik erauzteko erabiltzen da, eta gainerakoa elektroiari energia zinetiko gisa transmititzen zaio, <math display=\"inline\"><msub><mi>K</mi><mi mathvariant=\"normal\">max</mi></msub></math>. <math display=\"inline\"><mi>ϕ</mi></math> gainazalaren lan-funtzioa izanik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>ϕ</mi><mo>+</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lan-funtzioa gainazal fotoigorlearen izaeraren araberakoa da, eta elektroiek katodotik irteteko behar duten energia adierazten du. Erradiazio erasotzailearen intentsitatearen arabera, elektroi kopuru jakin bat iristen da anodora; elektroi horiek karga negatibo bat induzitzen dute, elektroi gehiago iristea zailtzen duen potentzial-diferentzia sortuz. Anodora iristen den elektroi kopurua handitzean, potentzial-diferentzia ere handitzen da, muga-balio bateraino: <math display=\"inline\"><mi>V</mi></math> —mozte-potentziala—, zeinetik aurrera ezein elektroik, zenbatnahi energia zinetiko izanda ere, ezin baitu potentzial-diferentzia gainditu. <math display=\"inline\"><mi>e</mi></math> elektroiaren karga bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta ekuazio biak konbinatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mi>ϕ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Prozedura.</strong> Esperimentu honek R. A. Millikanen 1916ko esperimentua errepikatzen du: merkuriozko lanpara espektral baten gainean hainbat iragazki monokromatiko jartzen dira, eta fotokatodo batek eta hartzaile batek iragazitako argia jasotzen dute. Bien arteko potentzial-diferentzia igotzen da mozte-potentziala lortu arte, eta hori iragazki bakoitzerako idazten da. Iragazki bakoitzerako neurtutako uhin-luzera, maiztasuna eta mozte-potentziala taula honetan bildu dira:"
    },
    {
     "mota": "taula",
     "goiburua": [],
     "lerroak": [
      [
       "Uhin-luzera (nm)",
       "Maiztasuna (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math>)",
       "Mozte-potentziala (V)"
      ],
      [
       "578",
       "5.1867",
       "0.65"
      ],
      [
       "546",
       "5.4907",
       "0.75"
      ],
      [
       "436",
       "6.8759",
       "1.29"
      ],
      [
       "405",
       "7.4022",
       "1.5"
      ],
      [
       "366",
       "8.191",
       "1.79"
      ]
     ]
    },
    {
     "mota": "irudia",
     "oina": "Mozte-potentziala <math display=\"inline\"><mi>V</mi></math> iragazki bakoitzaren <math display=\"inline\"><mi>ν</mi></math> maiztasunaren aurrean:\n  5 puntu esperimentalak eta erregresio linealeko zuzena\n  <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi><mo>−</mo><mi>ϕ</mi><mi>/</mi><mi>e</mi></mrow></math>.",
     "src": "media/irudiak/cf201aa40241c6e0.svg",
     "zabalera": 195
    },
    {
     "mota": "testua",
     "html": "Aurreko ekuaziotik, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>h</mi><mi>e</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ν</mi><mo>−</mo><mfrac><mi>ϕ</mi><mi>e</mi></mfrac></mrow></math>: mozte-potentziala eta maiztasuna linealki lotuta daude; beraz, <math display=\"inline\"><mi>V</mi></math> grafikatuz <math display=\"inline\"><mi>ν</mi></math>-ren aurrean eta erregresio linealaren bidez doituz (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math>, non <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>h</mi><mi>e</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mfrac><mi>ϕ</mi><mi>e</mi></mfrac></mrow></math> baitira) <math display=\"inline\"><mfrac><mi>h</mi><mi>e</mi></mfrac></math>-ren balioa lortzen dugu. Erregresiorako hauek behar ditugu: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>6.629</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mn>4.395</mn><mo>⋅</mo><msup><mn>10</mn><mn>29</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>4.5242</mn><mo>⋅</mo><msup><mn>10</mn><mn>29</mn></msup></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1.196</mn><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mn>1.430416</mn><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1.62064</mn></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>8.425</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>7.929</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erregresio linealaren errorearen ohiko formulak erabiliz (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ν</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>V</mi></mrow></math> izanik):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>3.8323</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>1.34455377</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mfrac><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mfrac><mi>σ</mi><msqrt><mrow><mi>n</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mn>3.376</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>b</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mn>0.02270766</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biribilduz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>b</mi><mo>=</mo><mn>0.02</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1.34</mn><mo>±</mo><mn>0.02</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mn>0.03</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>, beraz <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.83</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>. (4.1)-(4.2) ekuazioetatik <math display=\"inline\"><mi>h</mi></math>-ren balioa lortzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mi>a</mi><mo>⋅</mo><mi>e</mi><mo>=</mo><mn>3.83</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup><mo>⋅</mo><mn>1.602176565</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo>=</mo><mn>6.136336</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi kasuetan <math display=\"inline\"><mi>e</mi></math>-ren errorea arbuiagarria da <math display=\"inline\"><mi>a</mi></math>-renaren eta <math display=\"inline\"><mi>b</mi></math>-renaren aldean, beraz ez da kontuan hartzen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>h</mi><mi>h</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>a</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>e</mi><mi>e</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.8065297</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.14</mn><mo>±</mo><mn>0.05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Era berean, lan-funtziorako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>ϕ</mi><mo>=</mo><mi>b</mi><mo>⋅</mo><mi>e</mi><mo>=</mo><mi>−</mi><mn>1.34</mn><mo>⋅</mo><mn>1.602176565</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo>=</mo><mn>2.1469166</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2.15</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eta PbS-aren atalase-maiztasunerako, elektroiak energia zinetikorik irabazi gabe erauzteko gutxienekoa, <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>−</mo><mi>ϕ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>ϕ</mi><mi>h</mi></mfrac><mo>=</mo><mn>3.498695</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.50</mn><mo>±</mo><mn>0.06</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.14</mn><mo>±</mo><mn>0.05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ϕ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2.15</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mtext mathvariant=\"normal\">  </mtext><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.50</mn><mo>±</mo><mn>0.06</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plancken konstanterako lortutako balioa balio teorikoarekin (<math display=\"inline\"><mrow><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>) erkatzen badugu, desbideratzea <math display=\"inline\"><mrow><mn>0.41</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>-ekoa dela ikusten dugu (balio maximoa hartuta): balioak ez dira bateragarriak errorearen marjinaren barruan. Doitzen ez den emaitza hori akats instrumental baten ondorio izan daiteke, edo erregresio lineala eraikitzeko puntu gutxi izatearen ondorio."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 1,
   "izenburua": "Compton-en esperimentua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "X izpiak grafito bidez jaurti eta uhin-luzeraren arabera intentsitatea neurtu zuenean, Compton-ek aurkitu zuen X izpien uhin-luzerarako espero zen intentsitate maximoaz gain beste uhin-luzera baterako maximoak zeudela, X izpia sakabanatu zen angeluarekin erlazionaturik."
    },
    {
     "mota": "testua",
     "html": "Horrek teoria klasikoa kontraesaten zuen, zeren izpiak elektroietan eragiten baitu, haiengan bere maiztasunaren berdina den oszilazio bat eraginez, eta haiek, aldi berean, maiztasun bereko uhin bat erradiatu beharko bailukete."
    },
    {
     "mota": "testua",
     "html": "Comptonek (eta, modu independentean, Debyek) esperimentua interpretatu zuten X izpiak uhin bat izan beharrean elektroiekin talka egiten duten fotoi multzo bat balira bezala; fotoi intzidenteak bere energiaren zati bat elektroiari transferitzen dio, eta sakabanatu egiten da. (Ohar bedi efektu fotoelektrikoaren kasuan elektroiek argiaren energia <em>osoa</em> xurgatzen zutela jotzen zela.)"
    },
    {
     "mota": "irudia",
     "oina": "Compton-en gailu esperimentala: X izpiak karbonozko itu baten gainean erortzen dira; <math display=\"inline\"><mi>θ</mi></math> angeluan sakabanatutako espektroak bi gailur erakusten ditu: jatorrizko uhin-luzerakoa, <math display=\"inline\"><mi>λ</mi></math> (ahulagoa), eta desplazatutakoa, <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow></math> (nagusia).",
     "src": "media/irudiak/a34cc813f32a4397.svg",
     "zabalera": 380
    },
    {
     "mota": "testua",
     "html": "Uhin-luzeraren aldaketaren eta sakabanatze-angeluaren arteko erlazioa ezartzeko, kontuan izan behar dugu fotoiak elektroiarekin talka egitean energia eta momentu lineala kontserbatzen direla:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>E</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><msubsup><mi>E</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>E</mi><mi>e</mi><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>=</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Badakigu partikularen energia <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mi>c</mi><msub><mi>p</mi><mi>γ</mi></msub></mrow></math> dela, eta pausaguneko elektroiaren energia <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Inbariante erlatibista <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mrow></math> erabiliz eta erlazio horiek energiaren kontserbazio-ekuazioan sartuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><msub><mi>p</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>c</mi><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></msqrt><mo>⇒</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>=</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karratura jaso eta sinplifikatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>=</mo><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bestalde, momentuaren kontserbaziotik (elektroiaren hasierako momentua nulua da, X izpien energia askoz handiagoa baita):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>=</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>⇒</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>=</mo><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>−</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karratua hartuz, <math display=\"inline\"><mi>θ</mi></math> izanik <math display=\"inline\"><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></math> eta <math display=\"inline\"><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></math> bektoreen arteko angelua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza hori aurreko ekuazioan sartuz, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> eta <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> gaiak ezabatu egiten dira, eta hau geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mfrac><mn>1</mn><mi>p</mi></mfrac><mi>γ</mi><mo>′</mo></msubsup><mo>−</mo><mfrac><mn>1</mn><msub><mi>p</mi><mi>γ</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Fotoiarentzat <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mi>h</mi><mi>ν</mi></mrow></math> dela kontuan hartuta, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac></mrow></math> dugu; beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mfrac><mi>′</mi><mi>h</mi></mfrac><mo>−</mo><mfrac><mi>λ</mi><mi>h</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>⇒</mo><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Honela ere idazten da: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>C</mi></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Compton-en uhin-luzera</strong> baita."
    },
    {
     "mota": "problema",
     "izena": "2007ko ekaina, IEM/Fisika Modernoa, 1. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compton efektua aztertzeko ekipo esperimental bat diseinatu zen, X izpien hodi batez, karbono lagin batez, kristal analizatzaile batez eta X izpien detektagailu batez osatua."
      },
      {
       "mota": "testua",
       "html": "a) Egin gailu esperimentalaren oinarrizko eskema bat, osagaien konfigurazioa erakutsiz, Compton sakabanatzea <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-an behatzeko moduan."
      },
      {
       "mota": "testua",
       "html": "b) X izpi sorta intzidentea <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å-eko uhin-luzerara monokromatizatzen da, eta analizatzaile gisa kristal bat erabiltzen da, non plano kristalinoei lotutako Bragg-en islapena baliatzen baita, planoen arteko tartea <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3.023</mn></mrow></math> Å izanik. <math display=\"inline\"><mrow><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko Compton sakabanatze-angelurako neurtutako espektroa alboko irudian adierazten da, analizatzaileko Bragg-en islapenaren <math display=\"inline\"><mi>θ</mi></math> angeluaren funtzioan: bi intentsitate-gailur, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-an eta <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-an (bigarrena <math display=\"inline\"><mrow><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> erreferentziarekin ere markatua, kristalean sorta intzidentearen eta islatuaren arteko angeluari baitagokio). Emaitza horretatik abiatuta, kalkulatu Planck-en konstantearen balioa."
      },
      {
       "mota": "testua",
       "html": "c) Adierazi laburki Planck-en konstantea neurtzeko beste hiru metodo esperimental, honen desberdinak direnak."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Gailuak honako hauek ditu: X izpien hodi bat, karbono laginerantz sorta monokromatiko bat igortzen duena; laginean Compton sakabanatzea gertatzen da, sorta sakabanatua sorta intzidentearekiko <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-an ateratzen delarik; sorta sakabanatu hori kristal analizatzailearen gainean erortzen da, zeinak, Bragg-en islapenaren bidez (sortaren eta plano kristalinoen arteko <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">Bragg</mtext></msub></math> angeluarekin), presente dauden uhin-luzera desberdinak angeluka bereizten baititu; horrela, sorta difraktatua azkenean X izpien detektagailura iristen da."
      },
      {
       "mota": "testua",
       "html": "b) Bragg-en legearen arabera (<math display=\"inline\"><mrow><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7106</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7310</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> bat dator, espero zitekeenez, enuntziatuan aipatutako sorta intzidentearen <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å balioarekin.) Compton desplazamendua, beraz, hau da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>≈</mo><mn>0.0203</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Eta Compton-en formularen arabera, <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> izanik: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mspace width=\"0.222em\"></mspace><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Zenbakizko balioekin, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.8367</mn></mrow></math> izanik: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mn>0.0203</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mn>0.8367</mn></mfrac><mo>≈</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mi>h</mi></math> neurtzeko beste metodo batzuk: efektu fotoelektrikoan balaztatze-potentziala <math display=\"inline\"><mi>ν</mi></math> maiztasunaren funtzioan neurtuz; X izpien hodian igorritako gutxieneko uhin-luzera potentzial azeleratzailearen funtzioan neurtuz; Rydberg-en konstantearen neurketatik; gorputz beltz baten erradiazioaren neurketatik, Planck-en funtziora doituz."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoa (5 arazo guztiak, ebazpen ofizialarekin) 7. kapituluko &quot;Junio 2007&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>A ariketa.</strong> Kontsidera ditzagun 0.1 nm-ko uhin-luzerako X izpien sorta bat eta 0.00188 nm-ko uhin-luzerako gamma izpien sorta bat. Elektroi askeek 90 graduko angeluan sakabanatutako erradiazioa aztertzen badugu: (a) Zein da uhin-luzeraren aldaketa kasu bakoitzean? (b) Zein da elektroiari emandako energia zinetikoa kasu bakoitzean? (c) Zein da fotoi intzidenteak galdutako energiaren ehunekoa kasu bakoitzean?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> (a) 90°-rako uhin-luzeraren aldaketa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>90</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza hori ez dago fotoi intzidentearen uhin-luzeraren menpe."
    },
    {
     "mota": "testua",
     "html": "(b) Elektroiaren energia zinetikoa fotoiaren hasierako eta amaierako energien arteko diferentzia da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msup><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>c</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "X izpien kasuan: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>4.7125</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>0.294</mn></mrow></math> KeV. Gamma izpien kasuan: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>5.9572</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>371.8</mn></mrow></math> KeV."
    },
    {
     "mota": "testua",
     "html": "(c) X izpi sorta intzidentearen energia <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>12.4</mn></mrow></math> KeV da; beraz, fotoiak galdutako ehunekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.294</mn><mi>/</mi><mn>12.4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>2.37</mn><mi>%</mi></mrow></math> da. Gamma izpi sorta intzidentearen energia <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>659.5</mn></mrow></math> KeV da; beraz, ehunekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>371.8</mn><mi>/</mi><mn>659.5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>56.376</mn><mi>%</mi></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> Normalean, Compton-en esperimentuan elektroia pausagunean dagoela suposatzen dugu. Hasierako unean elektroia abiadura konstantez fotoiaren aurkako noranzkoan higitzen dela suposatzen badugu, eta talkaren ondoren fotoiaren maiztasuna aldatu ez baina hasierakoaren aurkako noranzkoan higitzen bada, zein da elektroiaren hasierako abiadura?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Fotoiaren maiztasuna berbera bada, elektroiaren energia ere berbera da. Fotoiaren momentu lineala Planck-en konstantearen bidez adieraz daiteke, eta elektroiarena inbariante erlatibistaren bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup><mo>⇒</mo><msub><mi>p</mi><mi>e</mi></msub><mo>=</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>E</mi><mo>=</mo><mi>p</mi><mi>c</mi><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>p</mi><mi>c</mi><mo>⇒</mo><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Momentuaren kontserbazioa osagaika planteatuz (elektroia aurkako noranzkoan higitzen da, <math display=\"inline\"><mi>π</mi></math> angelua):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elektroia aurkako noranzkoan higitzen dela onartzen badugu, angelua <math display=\"inline\"><mi>π</mi></math> da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>c</mi></mfrac><mo>+</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mo>⇒</mo><mn>2</mn><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta hortik, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Elektroiaren energia ezaguturik, abiadura aurkitzeko <math display=\"inline\"><mi>γ</mi></math> faktorea erabiltzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mo>⇒</mo><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> garatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>h</mi><mi>ν</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "2006ko iraila, IEM/Fisika Modernoa, 1. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntu) Azter bedi Compton talka, <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> uhin-luzerako fotoi baten eta <math display=\"inline\"><mi>P</mi></math> moduluko momentuaz higitzen den elektroi aske baten artean, fotoi intzidentearen norabide eta noranzko berean."
      },
      {
       "mota": "testua",
       "html": "a) Ondorioztatu, kasu honetarako, irteerako fotoiaren uhin-luzera sakabanatze-angeluarekin erlazionatzen duen adierazpena. Zer gertatzen da elektroia fotoiaren aurkako noranzkoan higitzen bada?"
      },
      {
       "mota": "testua",
       "html": "b) Zein da elektroiaren momentuak talkaren ondoren har dezakeen balio maximoa? Konparatu pausaguneko elektroiaren kasuarekin. Kalkulatu, kasu horretan, erradiazio intzidentearen uhin-luzera, baldin eta fotoiaren sakabanatze-angelua <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> bada eta atzerakadako elektroiaren momentua <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math> bada."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Metodoa: elektroiaren berezko erreferentzia-sisteman (laborategiarekiko <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin higitzen da), fotoi intzidentearen maiztasuna Doppler efektu erlatibistak aldatzen du: <math display=\"block\"><mrow><msub><mi>ν</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>ν</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>λ</mi><mn>0</mn></msub></mrow></math> (elektroia fotoiaren noranzko berean higitzen delarik). Sistema horretan elektroia geldirik dago; beraz, goian ondorioztatutako Compton-en formula estandarra aplikatzen da: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub></math> ordezkatuz: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (mismo sentido). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Elektroia fotoiaren aurkako noranzkoan higitzen bada, <math display=\"inline\"><mi>β</mi></math> alderantzikatu egiten da: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (sentido opuesto). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Zati honetarako (hasieran pausagunean dagoen elektroiaren kasu estandarrarekin alderatzen da): elektroiaren atzerakadako momentua maximoa da fotoia atzerantz sakabanatzen denean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), eta kasu horretan Compton desplazamendua maximoa da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mi>h</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; momentuaren kontserbazioaz, <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mi>e</mi><mo>,</mo><mtext mathvariant=\"normal\">max</mtext></mrow></msub><mo>=</mo><mi>p</mi><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>/</mi><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>/</mi><msup><mi>λ</mi><mo>′</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriko zenbakizko kalkulua osatu gabe",
     "blokeak": [
      {
       "mota": "testua",
       "html": "b) ataleko azken zenbakizko kalkulua (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, atzerakadako momentua <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> aurkitzea) ezin izan zen fidagarritasunez transkribatu: iturri eskuizkribatuak kalkuluen azken lerroa mozten du. Azterketa osoa (6 arazo guztiak, ebazpen ofizialarekin) 7. kapituluko &quot;Septiembre 2006&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>2. ariketa.</strong> Egiaztatu elektroi aske batek ezin duela fotoi bat xurgatu, energia eta momentu lineala ezin bailirateke aldi berean kontserbatu. Beraz, efektu fotoelektrikoa gerta dadin, ezinbestekoa da elektroia atomo bati edo solido bati loturik egotea. Compton efektuan, ordea, elektroi aske bat izan daiteke: zergatik?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Erreferentzia-sistema orotan fotoi baten momentu lineala <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac></mrow></math> da. Baina xurgapena gertatuko balitz, momentu linealak nulua izan beharko luke: elektroiaren erreferentzia-sisteman momentu lineala nulua da. Kontraesan bat da. Compton efektuaren kasua bestelakoa da, maiztasun berriko fotoi bat baitago tartean; horrela, energia eta momentu lineala kontserbatu egiten dira."
    },
    {
     "mota": "testua",
     "html": "<strong>4. ariketa.</strong> (a) Zer ondorio atera dezakegu erradiazioaren izaerari buruz, Compton-en esperimentua ikusita? Zergatik? (b) Compton-en esperimentua errepikatu nahi dugu baina, elektroiak erabili beharrean, alfa partikulak erabiliko ditugu. Neurketa on bat egiteko, uhin-luzeraren aldaketa erlatiboak ehuneko 1ekoa izan behar du angelua 90 gradukoa denean. Zein izan behar du fotoien uhin-luzerak? Espektroaren zein tartetan dago? (c) [iturrian enuntziaturik gabe]"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> (a) [iturrian garatu gabe]. (b)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi></mrow></mfrac><mo>⇒</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi><mi>λ</mi></mrow></mfrac><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>200</mn><mo>⋅</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>6.68</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>299792458</mn><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gamma izpiak dira: haien uhin-luzera pikometroa baino txikiagoa da."
    },
    {
     "mota": "testua",
     "html": "<strong>Erronka.</strong> Lambda zero uhin-luzerako fotoi bat igortzen dugu, eta hura aurkako noranzkoan itzultzen da (Compton efektua tarteko), xafla baten kontra talka egin eta bertatik abiadura arbuiagarriko fotoelektroi bat kanporatzeko. Kalkula bedi hasierako uhin-luzera. Datua: xaflaren metalaren erauzte-lana <math display=\"inline\"><mrow><mo>=</mo><mn>2.1</mn></mrow></math> eV."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Uhin-luzeraren aldaketa Compton efektuaren ondorio da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dado que </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>180</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bestalde, fotoelektroi bat material batetik abiadura arbuiagarriz askatzen deneko uhin-luzerak <math display=\"inline\"><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mi>λ</mi></mrow></math> betetzen du. Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msub><mi>w</mi><mn>0</mn></msub></mrow><mrow><mi>c</mi><msub><mi>m</mi><mn>0</mn></msub><msub><mi>w</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5.904</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalkulua pauso bakarrean egin beharrean bitan egiten bada, ikusten da Compton efektuaren desbideratzeak ozta-ozta aldatzen duela uhin-luzera. Compton efektua maiztasun ertainetarako da esanguratsua, eta fotoelektrikoa, berriz, baxuetarako: Comptonek X izpiak erabili zituen (eta horregatik lortzen ditu Rayleighek antzeko esperimentu batean lortutakoetatik desberdinak diren emaitzak); efektu fotoelektrikoa, aldiz, espektro ikusgaian da hautemangarria."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fotoiak eta X izpien igorpena"
    },
    {
     "mota": "testua",
     "html": "<em>Bremsstrahlung</em> prozesua alderantzizko efektu fotoelektrikotzat har daiteke: efektu fotoelektrikoan fotoi bat xurgatzen da, eta haren energia eta momentua elektroiarengana eta atzera egiten duen nukleoarengana doaz; bremsstrahlung prozesuan fotoi bat sortzen da, eta haren energia eta momentua elektroi baten eta nukleo baten arteko talkatik datoz. Bremsstrahlung-ean fotoien sorreraz ari gara, ez materiak haiek xurgatzeaz edo sakabanatzeaz."
    },
    {
     "mota": "testua",
     "html": "Hasierako energia zinetikoa <math display=\"inline\"><mi>T</mi></math> duen elektroi bat dezeleratu egiten da nukleo astun batekin talka egitean; galtzen duen energia erradiazio moduan agertzen da, X izpien fotoi baten gisara. Elektroiak Coulomb eremuaren bidez elkarreragiten du nukleo kargatuarekin, eta momentua transferitzen dio nukleoari. Talkaren ondoren elektroiaren energia zinetikoa <math display=\"inline\"><msup><mi>K</mi><mo>′</mo></msup></math> bada, fotoiaren energia hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>K</mi><mo>−</mo><msup><mi>K</mi><mo>′</mo></msup><mo>⇒</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mi>K</mi><mo>−</mo><msup><mi>K</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sorta intzidenteko elektroiek hainbat energia-kopuru gal ditzakete talketan, eta elektroi jakin bat horrelako askoren ondoren bakarrik iritsiko da pausagunera; elektroi askok sortutako X izpiek espektro jarraitua osatzen dute horrela."
    },
    {
     "mota": "irudia",
     "oina": "Bremsstrahlung-en espektro jarraitua, hainbat energiatako elektroiek itu baten gainean talka egitean. Kurba bakoitzak ebaki zorrotza du <math display=\"inline\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n: ezein fotoik ezin du elektroiak baino energia gehiago eraman.",
     "src": "media/irudiak/2d09414cf5d9ec8e.svg",
     "zabalera": 322
    },
    {
     "mota": "testua",
     "html": "Fotoi diskretu asko daude, uhin-luzera minimotik infinitura bitartekoak, banakako talketako energia-galerei dagozkienak. Uhin-luzerarik motzeneko fotoia elektroi batek bere energia zinetiko guztia dezelerazio-prozesu bakarrean galtzen duenean igortzen da; orduan, <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> eginez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>=</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>K</mi></math> eta <math display=\"inline\"><mrow><mi>e</mi><mi>V</mi></mrow></math> berdinak direnez (elektroiak <math display=\"inline\"><mi>V</mi></math> potentzial-diferentzia baten bidez azeleratzean hartzen duen energia):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>⇒</mo><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mfrac><mrow><mn>1.239841875</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> volt </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mi>m</mi></mrow><mi>V</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>3. ariketa.</strong> Zehaztu Planck-en konstantea, <math display=\"inline\"><mi>h</mi></math>, jakinik 40 KeV-eko elektroiek sortutako X izpien uhin-luzera minimoa 0.311 Å dela."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>⇒</mo><mi>h</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>V</mi><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mrow><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mn>4</mn><mo>⋅</mo><msup><mn>10</mn><mn>4</mn></msup><mi>V</mi><mo>⋅</mo><mn>3.11</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mi>m</mi></mrow><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.648</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Pareen sorrera eta deuseztapena",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honek izenburua baino ez zuen jatorrizko iturrian. Azalpena geurea da, ez dago inongo liburutik transkribatua; Eisberg &amp; Resnick-en <em>Quantum Physics</em>, §2-7 ataleko tratamendu estandarrean oinarritzen da, erabiltzaileak liburu hori ere baitauka."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pareen sorrera"
    },
    {
     "mota": "testua",
     "html": "Behar adinako energiako fotoi bat elektroi-positroi pare batean gauza daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>→</mo><msup><mi>e</mi><mo>−</mo></msup><mo>+</mo><msup><mi>e</mi><mo>+</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Compton efektuaren kontrapartida da, energia oso altuko erregimenean: efektu fotoelektrikoa energia baxuetan eta Compton efektua energia ertainetan nagusitzen diren bitartean, pareen sorrera nagusitzen da fotoiaren energiak kalkulatuko dugun atalasea lasai gainditzen duenean."
    },
    {
     "mota": "testua",
     "html": "<strong>Zergatik ezin da fotoia bere kabuz pare batean gauzatu, hutsean?</strong> Demagun ahal duela. Sortu berri den parearen masa-zentroan, parearen guztizko energia eta momentuek, sorreraren unean, fotoi intzidentearenekin bat etorri behar dute. Baina fotoi batek beti darama momentua, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><mi>γ</mi></msub><mi>/</mi><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math>, eta, aldiz, justu atalasean sortutako pare batek (ahalik eta energia txikienarekin, hau da, soberako energia zinetikorik gabe) guztizko momentu nulua du bere masa-zentroan. Momentu ez-nuluko fotoi bat ezin da momentu nuluko sistema bihurtu: energiaren eta momentuaren aldibereko kontserbazioak debekatzen du. Horregatik, pareen sorrera ez da inoiz behatzen espazio hutsean: nukleo atomiko baten hurbiltasuna behar du, zeinak soberako momentua xurgatzen baitu ia energiarik eraman gabe (elektroi-positroi parea baino askoz astunagoa delako: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mi>M</mi></math> handiak energia zinetiko txikia dakar momentu jakin baterako)."
    },
    {
     "mota": "testua",
     "html": "<strong>Atalase-energia.</strong> Nukleoaren erreferentzia-sisteman (pausagunean dagoela hurbiltzen dugu, haren masa handia dela eta), parea sortzeko fotoiaren gutxieneko energia, elektroiari eta positroiari soberako energia zinetikorik utzi gabe, bi pausaguneko masak sortzeko beharrezkoa dena da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1.022</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac></mrow></math> erabiliz, horrek <math display=\"inline\"><mn>0.0121</mn></math> Å-eko atalase-uhin-luzera bati dagokio: gamma izpiak edo X izpi oso gogorrak, Compton efektuko X izpien energia tipikoaren oso gainetik."
    },
    {
     "mota": "testua",
     "html": "<strong>Ariketa.</strong> Zer energia zinetiko total (elektroiaren eta positroiaren artean banatua) du <math display=\"inline\"><mn>3</mn></math> MeV-eko fotoi batek sortutako pare batek, nukleoak energia aipagarririk eramaten ez duela suposatzen badugu?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Fotoiaren energia bi pausaguneko masen eta soberako energia zinetikoaren artean banatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">total </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⇒</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">total </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>1.022</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1.978</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pareen deuseztapena"
    },
    {
     "mota": "testua",
     "html": "Alderantzizko prozesua: elektroia eta positroia, bata bestearen aurrean ia geldirik, deuseztatu egiten dira, eta haien masa oso-osorik erradiazio bihurtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mo>−</mo></msup><mo>+</mo><msup><mi>e</mi><mo>+</mo></msup><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> radiación </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistemak, deuseztatu aurretik, guztizko momentua ia nulua du (bi partikulak ia pausagunean). Momentuaren kontserbazioagatik, <strong>ezin da fotoi bakar bat sortu</strong>: fotoi bakar batek beti darama <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math> momentua, eta horrek momentuaren kontserbazioa urratuko luke, hasierako momentua nulua baita — argumentu bera da, nolabait alderantzikatua, fotoi isolatu batek pare bat sortzea baztertzeko erabili duguna. Prozesurik probableenak <strong>bi</strong> fotoi sortzen ditu, aurkako noranzkoetan igorriak, haien momentuak ezezta daitezen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>p</mi><mn>2</mn></msub><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>⇒</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi fotoiek, beraz, energia bera dute. Energia osoaren kontserbazioak hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>+</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>h</mi><mi>ν</mi><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0.511</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Irakurleak ezagutuko du azken kantitate hau: aurreko atalean definitu genuen Compton-en uhin-luzera <math display=\"inline\"><msub><mi>λ</mi><mi>C</mi></msub></math> da, hain zuzen — ez da kasualitatea: biak <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mi>λ</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></math> konparatzetik sortzen dira.)"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 1,
   "izenburua": "Thomsonen eredu atomikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Thomsonek proposatutako eredua Å bateko erradioko atomo esferiko bat da: bertan karga positiboa era homogeneoan banatuta dago, eta elektroiak, berriz, (banakako partikula gisa) haien kopuruaren araberako posizioetan kokatuta daude. Kontuan hartzen zen karga positiboari elektroiarena baino 2000 aldiz handiagoa den masa zegokiola, eta elektroiek posizio baten inguruan bibra zezaketela jotzen zen. Atomorik sinpleenaren kasuan, hidrogenoarenean, elektroia atomoaren zentroan zegoela jotzen zen."
    },
    {
     "mota": "testua",
     "html": "<strong>A ariketa.</strong> Demagun <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> karga bat karga-dentsitate positiboko (<math display=\"inline\"><mi>ρ</mi></math>) eskualde esferiko baten barruan dagoela (Thomsonen hidrogeno atomo bat). Frogatu haren higidura, energia zinetikoa badu, esferaren zentroaren inguruko oszilazio harmonikoa izan daitekeela."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Demagun elektroia zentrotik <math display=\"inline\"><mi>a</mi></math> distantziara desplazatzen dela (<math display=\"inline\"><mi>a</mi></math> atomoaren erradioa baino txikiagoa izanik). Gaussen legeari esker, indarra Coulomben legea erabiliz kalkula daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>a</mi><mn>3</mn></msup><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>e</mi><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mi>a</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indarra <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math> gisa idatz dezakegu, non <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>ρ</mi></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math> baita. Oszilador harmonikoaren formula eta haren abiadura angeluarra kontuan hartzen baditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ω</mi><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>⇒</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><msqrt><mfrac><mrow><mi>e</mi><mi>ρ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>m</mi></mfrac></msqrt><mo>⇒</mo><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mi>e</mi><mi>ρ</mi></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "1 Å-eko erradioko esfera batentzat:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mfrac><mrow><mn>3</mn><mo>⋅</mo><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></mfrac></mrow><mrow><mn>3</mn><mo>⋅</mo><mn>8.8542</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mfrac><mrow><msup><mi>s</mi><mn>2</mn></msup><msup><mi>C</mi><mn>2</mn></msup></mrow><mrow><msup><mi>m</mi><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac><mo>⋅</mo><mn>9.11</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac></msqrt><mo>=</mo><mn>2.533</mn><mo>⋅</mo><msup><mn>10</mn><mn>15</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>c</mi><mi>ν</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow><mrow><mn>2.533</mn><mo>⋅</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></mfrac><mo>=</mo><mn>1.185</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>1185</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eredu honek arazo larri bat zuen: ezin zuen azaldu zergatik ager zitezkeen beste maiztasun batzuetako erradiazioak, hau izan ezik."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Rutherforden eredu atomikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Rutherfordek esperimentu bat diseinatu zuen, alfa partikulen sorta bat urrezko orri mehe baten kontra zuzentzean sortzen den desbideratzea zenbatekoa zen egiaztatzeko. Kalkuluak Thomsonen eredua kontuan hartuz egin zituen, eta aurreikuspena zen desbideratzea oso txikia izango zela. Hala ere, esperimentua egin zutenean, Geigerrek eta Marsdenek behatutako desbideratzea oso handia izan zen."
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jarraian datorren tratamendu kuantitatiboak erabiltzailearen beraren (Mikel Aguirre) deribazio propio bat erreproduzitzen du, haren fisika modernoko apunteetatik (UPV/EHU) hartua, eta hortik itzuli da euskarara. Ez da hirugarren baten liburua — MASTERFISMOtex-en gainerakoaren askatasun berarekin erreproduzitzen da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rutherforden tratamendu kuantitatiboa"
    },
    {
     "mota": "testua",
     "html": "Kontsidera dezagun alfa partikula bat (<math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mi>e</mi></mrow></math> karga), Coulomben aldarapenaren eraginpean nukleo finko batera (<math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mi>e</mi></mrow></math> karga) hurbiltzen dena, nukleoan zentratutako <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu polarretan deskribatua. Newtonen bigarren legearen osagai erradiala eta tangentziala hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>m</mi><msub><mi>a</mi><mi>φ</mi></msub><mo>=</mo><mn>0</mn><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio tangentzialetik, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>; beraz, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> konstantea da: masa gorabehera, momentu angeluarra da, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>L</mi><mi>m</mi></mfrac></mrow></math>. Nukleotik oso urrun ibilbidea zuzena da, <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiadurarekin eta <math display=\"inline\"><mi>b</mi></math> talka-parametroarekin (zuzen horren eta nukleoaren arteko distantzia); beraz, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub><mo>⇒</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hori ekuazio erradialean ordezkatuz (katearen erregela erabiliz, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>), denbora ezabatzeko, eta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac></mrow></math> aldagai-aldaketa eginez, ekuazio erradiala ekuazio diferentzial lineal bihurtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> con </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>D</mi><mo>=</mo><mfrac><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>D</mi></math> <strong>hurbilketa maximoko distantzia</strong> da: aurrez aurreko talka batean (<math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>) partikula iritsiko litzatekeen distantzia minimoa, non hasierako energia zinetiko guztia aldarapen-energia potentzial bihurtzen baita. Soluzio orokorra <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> da, hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzekin (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math> —hau da, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>—, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mi>b</mi></mfrac></mrow></math> lortzen dira; beraz, ibilbidea (hiperbola-adar bat) hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>b</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean, partikula berriro infinituki urrun dago (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> berriro), <math display=\"inline\"><mrow><mi>φ</mi><mo>≠</mo><mn>0</mn></mrow></math> angelu asintotiko batean, zeinak, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>b</mi><mi>/</mi><mi>D</mi></mrow></math> betetzen baitu."
    },
    {
     "mota": "testua",
     "html": "<strong>Kontuz: <math display=\"inline\"><mi>φ</mi></math> angelu asintotikoa eta <math display=\"inline\"><mi>θ</mi></math> sakabanatze-angelua ez dira gauza bera</strong> (azken hau partikularen sarrera-norabidearen eta irteera-norabidearen arteko angelua da). Honela erlazionatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mo>⇒</mo><mtext mathvariant=\"normal\">  </mtext><mi>b</mi><mo>=</mo><mfrac><mi>D</mi><mn>2</mn></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emandako <math display=\"inline\"><mi>b</mi></math> talka-parametro baterako, desbideratzea beti bera da: <math display=\"inline\"><mrow><mi>b</mi><mo>≫</mo><mi>D</mi></mrow></math> bada, ibilbidea ia zuzena da (desbideratze ia nulua); <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>D</mi></mrow></math> bada, desbideratzea <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ra hurbil daiteke; eta <math display=\"inline\"><mrow><mi>b</mi><mo>≈</mo><mi>D</mi></mrow></math> bada, desbideratzea radian baten ordenakoa da."
    },
    {
     "mota": "testua",
     "html": "<strong>Benetako esperimentua.</strong> Alfa partikulek urrezko xafla bat bonbardatzen dute, zeinaren atomo bakoitzak sakabanatze-zentro independente gisa jokatzen baitu, atomoen arteko distantzia <math display=\"inline\"><mrow><mi>D</mi><mo>≈</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> Å izanik. Esperimentua funtsean ausazkoa denez (ez da kontrolatzen partikula bakoitza zein talka-parametrorekin iristen den atomo bakoitzera), <math display=\"inline\"><mi>b</mi></math> estatistikoki tratatu behar da, ez partikulaz partikula: talka-parametroa <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math> artean duten partikulen frakzioa dagokion eraztunaren azalerarekiko proportzionala da, <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Denbora-unitateko <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mi>d</mi><mi>θ</mi></mrow></math> arteko angeluetarantz sakabanatutako partikula kopurua hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi><mo>=</mo><mi>−</mi><mi>I</mi><mi>ρ</mi><mi>t</mi><mo>⋅</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>I</mi></math> denbora-unitateko alfa partikula erasotzaileen kopurua baita, <math display=\"inline\"><mi>ρ</mi></math> xaflako atomoen azalera-dentsitatea (atomoak azalera-unitateko) eta <math display=\"inline\"><mi>t</mi></math> haren lodiera. <math display=\"inline\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>D</mi><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>θ</mi></mrow></math> ordezkatuz (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac></mrow></math> deribatuz lortuak), Rutherforden sakabanatze-formulara iristen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>t</mi><mi>I</mi><mi>π</mi><msup><mi>D</mi><mn>2</mn></msup></mrow><mn>8</mn></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sakabanatutako partikula kopurua, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>θ</mi></math> sakabanatze-angeluaren funtzioan: oso azkar erortzen da, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren arabera — Rutherforden sakabanatzearen sinadura bereizgarria, Thomsonen ereduarekin bateraezina.",
     "src": "media/irudiak/3e88f48ddd34de4e.svg",
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "Emaitza hau (eta ez Thomsonen eredua, desbideratze askoz leunagoa eta angelu handietan partikularik ez iragartzen duena) da, hain zuzen, Geigerrek eta Marsdenek behatu zutena, <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> baino gehiagora sakabanatutako partikulak barne. Horregatik onartzen da Rutherforden eredu planetarioa: nukleo positibo puntual bat, elektroiak haren inguruan orbitatzen dutela."
    },
    {
     "mota": "problema",
     "izena": "2012ko maiatza, IEM/Fisika Modernoa, 1. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntu)"
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mi>α</mi></math> partikulak zilar atomoen kontra (Ag, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>47</mn></mrow></math>) sakabanatzeko esperimentu baten bidez, nukleoaren erradioa <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m dela estimatu da. <math display=\"inline\"><mi>α</mi></math> partikulen zein energia maximoraino jarraitzen dio haien sakabanatzeak Rutherforden ereduak iragarritako portaerari?"
      },
      {
       "mota": "testua",
       "html": "b) Har bedi Compton sakabanatze-prozesu bat. Kalkulatu fotoi baten energia minimoa, bere energiaren erdia elektroi bati transferi diezaion."
      },
      {
       "mota": "testua",
       "html": "c) X izpien hodi batean, zein izan behar da elektroiak azeleratzeko voltaje txikiena, 1 Å-eko X izpiak ekoizteko?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Rutherforden ereduak oraindik balio duen energia maximoa honako hau da: <math display=\"inline\"><mi>α</mi></math> partikula (karga <math display=\"inline\"><mrow><msup><mi>Z</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn></mrow></math>) nukleoa (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m) ozta-ozta ukitzera iristen dena; hau da, bere energia zinetiko guztia distantzia horretako energia potentzial bihurtzen da: <math display=\"block\"><mrow><mi>K</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>Z</mi><mo>′</mo></msup><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>47</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>2.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>135</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Sakabanatutako fotoiak erasotzailearen energiaren erdia izango du (<math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>E</mi></mrow></math>, beste erdia elektroiari transferitzen baitzaio). <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> denez, orduan <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>. Comptonen erlazioa aplikatuz (aurreko kapituluan ondorioztatua): <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Fotoiaren gutxieneko energia uhin-luzera maximoari dagokio, eta hori, aurreko erlazioaren arabera, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>-n gertatzen da: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>h</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>256</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>e</mi></mrow></mfrac><mo>=</mo><mn>12.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Problema honen beraren b) eta c) atalak, egiaz, Compton efektuari eta X izpien igorpenari dagozkie (aurreko kapitulua); hemen osorik transkribatzen dira, a)-rekin batera, jatorrizko azterketarekiko fideltasunagatik. Azterketa osoa (4 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;2012ko maiatza&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eredu honekin, ordea, problema berri bat sortzen da: nukleoaren inguruko orbita zirkularrean dabiltzan elektroiak etengabe azeleratzen ari dira (norabidez aldatze hutsagatik bada ere), eta elektromagnetismo klasikoaren legeen arabera energia erradiatu beharko lukete etengabe. Hura galtzean, beren orbitaren erradioa geldialdirik gabe txikituko litzateke, eta atomoak segundo-zatiki batean kolapsatuko luke. Atomo planetarioaren ezegonkortasun klasiko hori da, hain zuzen, Bohrek bere postulatuekin konpondu behar zuena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bohren eredu atomikoa"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bohren postulatuak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Atomo batean, elektroia nukleoaren inguruko orbita zirkular batean higitzen da, elektroiaren eta nukleoaren arteko Coulomben erakarpenaren eraginpean, mekanika klasikoaren legeak betez.",
      "Mekanika klasikoaren arabera posible liratekeen orbita infinituen ordez, elektroia soilik higi daiteke <math display=\"inline\"><mi>L</mi></math> momentu angeluar orbitala Plancken konstantea zati <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>-ren multiploa duten orbitetan:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Momentu angeluar orbitala kuantizatzeak energia kuantizatzea dakar, baina kuantizazio hori ez da Planckek proposatutakoaren berdina."
    },
    {
     "mota": "testua",
     "html": "Elektroiak etengabeko azelerazioa duen arren, ez du inolako energia elektromagnetikorik igortzen, eta haren energia konstante mantentzen da. Horrela, Bohrek elektroi azeleratuak etengabe erradiatzen duelako nozio klasikoa baztertzen du; nozio horrek, bestalde, ondorio ezinezko batera zeraman: elektroi orok nukleoaren kontra talka egingo luke. Elektroiak erradiazio elektromagnetikoa igortzen du orbita batetik bestera igarotzen denean. Erradiazio horren maiztasuna elektroiak orbita batean eta bestean duen energia-diferentziaren araberakoa da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi></mrow><mi>h</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (reformulando la teoría de Einstein) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Postulatuak ebidentzia enpirikoarekin kontrastatzea"
    },
    {
     "mota": "testua",
     "html": "Postulatu hauekin, elektroiaren abiadura eta haren ibilbideak deskribatzen duen zirkunferentziaren erradioa kalkulatuko ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "zatituz, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>n</mi><mi>ħ</mi></mrow></mfrac></mrow></math> lortzen da; <math display=\"inline\"><mi>v</mi></math> hori bigarren ekuazioan ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jarraian datorren garapena (orbiten energia, maila-diagrama, korrespondentzia-printzipioa, Franck-Hertz, antzinako teoria kuantikoaren kritika) azalpen propioa da, irakurketa honek informatua: &quot;Física (ESP) - Gratton, Julio - Introducción a la Mecánica Cuántica&quot; (Julio Grattonen katedra-oharrak, Fisika 4, ez erabiltzailearenak; Eisberg-Resnicken irizpide berarekin tratatuak: erreferentzia, ez transkripzioa). Iturri horrek Bohren atomoaren garapen kuantitatibo osoa dakar, jatorrizko iturriak (MASTERFISMOtex) postulatuekin zirriborratu besterik egiten ez zuena."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Orbiten energia.</strong> Badauzkagu <math display=\"inline\"><msub><mi>v</mi><mi>n</mi></msub></math> eta <math display=\"inline\"><msub><mi>r</mi><mi>n</mi></msub></math>; kalkula dezagun orain energia osoa. Energia potentzial elektrikoa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indar zentripetuaren ekuaziotik beretik, <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>−</mi><msub><mi>V</mi><mi>n</mi></msub></mrow></math>; beraz, energia zinetikoa <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac></mrow></math> da, eta energia osoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msub><mi>T</mi><mi>n</mi></msub><mo>+</mo><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac><mo>+</mo><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>r</mi><mi>n</mi></msub></math> ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mn>1</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non, <math display=\"inline\"><mrow><mi>ħ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac></mrow></math> erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mi>−</mi><mn>13.6</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hidrogenoaren oinarrizko egoeraren energia baita (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math>): fisika atomiko osoaren lehen emaitza <strong>kuantitatiboa</strong> esperimentuarekin bat datorrena (hidrogenoaren ionizazio-energia neurtua, hain zuzen ere, 13.6 eV da)."
    },
    {
     "mota": "testua",
     "html": "<strong>Rydbergen formula.</strong> Elektroia <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> orbita batetik energia txikiagoko beste batera (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>f</mi></msub><mo>&lt;</mo><msub><mi>n</mi><mi>i</mi></msub></mrow></math>) igarotzen denean, fotoi bat igortzen du, laugarren postulatuaren arabera, maiztasun honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>,</mo><msub><mi>n</mi><mi>f</mi></msub></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>E</mi><msub><mi>n</mi><mi>i</mi></msub></msub><mo>−</mo><msub><mi>E</mi><msub><mi>n</mi><mi>f</mi></msub></msub></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msup><mi>Z</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>f</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>i</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hauxe da, hain zuzen, espektroskopistek XIX. mendetik ezagutzen zuten Rydberg-Balmerren formula enpirikoa: Rydbergen konstantea, beti bezala <math display=\"inline\"><mrow><msub><mi>R</mi><mi>∞</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>3</mn></msup><mi>c</mi></mrow></mfrac></mrow></math> izanik, orain <strong>teoriatik</strong> iragartzen da, doikuntza enpiriko huts bat izan beharrean — eta neurtutako balioarekin bat dator, milako baten zatiki baten barruan."
    },
    {
     "mota": "irudia",
     "oina": "Hidrogeno atomoaren energia-mailak Bohren arabera, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> (posizio bertikal eskematikoak, ez eskala linealean, maila altuak irakurgarri mantentzeko), eta espektro-serieen jatorria: Lyman (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-erako trantsizioak, ultramorea), Balmer (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-ra, ikusgaia), Paschen (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-ra, infragorria).",
     "src": "media/irudiak/f1bdda75b61513e9.svg",
     "zabalera": 204
    },
    {
     "mota": "problema",
     "izena": "2005eko ekaina, IEM/Fisika Modernoa, 1. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntu) Prozesu nuklear bortitz batean, uranio atomo batek (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></math>) bere elektroi guztiak galtzen ditu. Handik gutxira, U nukleoak elektroi bakar bat harrapatzen du, haren inguruan ia geldirik zegoena."
      },
      {
       "mota": "testua",
       "html": "a) Zein zeinutakoa da nukleo-elektroi sistemaren energia-aldaketa?"
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu prozesuan igorritako edo xurgatutako fotoiaren energia maximoa."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu, fotoiaren energia maximoaren kasurako, elektroiaren &quot;orbitaren&quot; erradioa, eta estimatu haren abiadura (iruzkindu azken kalkulu honen emaitza)."
      },
      {
       "mota": "testua",
       "html": "(H-ren oinarrizko egoeraren energia: <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Nukleo-elektroi sistemaren energia txikitu egiten da, lotu gabeko egoera batetik egoera lotu batera igarotzean."
      },
      {
       "mota": "testua",
       "html": "b) Elektroiak U nukleoak eta elektroiak osatutako atomo hidrogenoidearen oinarrizko egoera egonkorra (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>) betetzera igaroko da. Egoera egonkorren energiak, beti bezala, honela ematen dira: <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>∝</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msup><mi>E</mi><mi>H</mi></msup><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><msup><mi>E</mi><mi>H</mi></msup></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math> egoeraren energia baita (hau da, <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV): <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>92</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>1</mn></mfrac><mo>=</mo><mi>−</mi><mn>115</mn><mspace width=\"0.167em\"></mspace><mn>110</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>−</mi><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math> Igorritako fotoiaren energia, <math display=\"inline\"><mrow><msub><mi>E</mi><mtext mathvariant=\"normal\">inic</mtext></msub><mo>=</mo><mn>0</mn></mrow></math> izanik (elektroia geldirik eta lotu gabe): <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">inic </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) &quot;Orbitaren&quot; erradioa, Bohren teoriaren arabera, alderantziz <math display=\"inline\"><mi>Z</mi></math>-rekiko proportzionala da: <math display=\"block\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>=</mo><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></msub><mfrac><mn>1</mn><mi>Z</mi></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>Z</mi></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0.53</mn></mrow></math> Å Bohren erradioa baita: <math display=\"block\"><mrow><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></msub><mo>=</mo><mn>0.53</mn><mspace width=\"0.167em\"></mspace><mfrac><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>92</mn></mfrac><mo>=</mo><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren hutsunea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Abiaduraren zenbakizko estimazioak eta c) atalaren iruzkinak ebazpen ofizial eskaneatuak esplizituki garatzen ez duen zerbait eskatzen dute (erradioaren kalkuluaren ondoren gelditzen da). Hemen ez da ezer asmatzen: <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>∝</mo><mfrac><mn>1</mn><mi>Z</mi></mfrac></mrow></math> hain txikia izanik, espero daitekeen emaitza <math display=\"inline\"><mrow><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>≈</mo><mi>Z</mi><mi>α</mi><mo>≈</mo><mfrac><mn>92</mn><mn>137</mn></mfrac><mo>≈</mo><mn>0.67</mn></mrow></math> da, <math display=\"inline\"><mi>c</mi></math>-ren zatiki nabarmena — Bohren eredu ez-erlatibista fidagarria izateari uzten dio erregimen horretan, eta hori da, ziur asko, enuntziatuak eskatzen zuen &quot;iruzkina&quot;. Azterketa osoa (7 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;2005eko ekaina&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Korrespondentzia-printzipioa"
    },
    {
     "mota": "testua",
     "html": "Bohren kuantizazio-arauak eraginkorrak dira, baina ez dute azaltzen <strong>zergatik</strong> funtzionatzen duten: modu gutxi asegarrian nahasten dituzte —Bohrek berak aitortu zuenez— lege klasikoak (elektroiak Coulomben arabera orbitatzen du) eta arau kuantiko huts bat (momentu angeluarra kuantizatuta dago). Bohrek printzipio orokor bat proposatu zuen 1923an, arbitrariotasun hori mugatzeko:"
    },
    {
     "mota": "oharra",
     "titulua": "Korrespondentzia-printzipioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Edozein sistema fisikotarako, teoria kuantikoaren iragarpenek bat etorri behar dute iragarpen klasikoekin zenbaki kuantiko handien limitean (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eskakizun zentzuzkoa da: fisika klasikoak ezin hobeto funtzionatzen du sistema makroskopikoak deskribatzeko; beraz, edozein teoria kuantiko zuzenek hartara murriztu behar du, sistema, zentzu egokian, &quot;handi&quot; bihurtzen denean. Honen adibide bat ikusia dugu dagoeneko: Rayleigh-Jeansen legea (klasikoa), hain zuzen ere, Plancken legearen (kuantikoa) maiztasun txikiko —batez besteko fotoi kopuru handiko— limitea da. Korrespondentzia-printzipioa ez da lege berri bat, baliozko edozein teoria kuantikok bete behar duen kontsistentzia-baldintza bat baizik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Franck eta Hertzen esperimentua"
    },
    {
     "mota": "testua",
     "html": "Bohren teoriak iragartzen dituen energia-maila diskretuak testuinguru optikotik kanpo ere agertzen dira. 1914an, James Franckek eta Gustav Hertzek esperimentu bat asmatu zuten energiaren kuantizazio hori berresten duena, inolako argi-espektrorik neurtu beharrik gabe."
    },
    {
     "mota": "irudia",
     "oina": "Franck-Hertz esperimentuaren eskema: katodo bero batek (<math display=\"inline\"><mi>C</mi></math>) igorritako elektroiak <math display=\"inline\"><mi>A</mi></math> saretarantz azeleratzen dira <math display=\"inline\"><mi>V</mi></math> potentzial baten bidez, merkurio-lurruna zeharkatzen dute, eta <math display=\"inline\"><mi>P</mi></math> kolektoreak jasotzen ditu; korrontea <math display=\"inline\"><mi>V</mi></math>-ren funtzioan neurtzen da.",
     "src": "media/irudiak/ec29fc313b24fb77.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "Katodo bero batek (<math display=\"inline\"><mi>C</mi></math>) elektroiak igortzen ditu, sareta-formako anodo baterantz (<math display=\"inline\"><mi>A</mi></math>) azeleratuak, <math display=\"inline\"><mi>V</mi></math> potentzial baten bidez, eta sareta zeharkatzen duten elektroiak plaka kolektore batek (<math display=\"inline\"><mi>P</mi></math>) jasotzen ditu. Gailuak presio txikiko merkurio-lurruna dauka. <math display=\"inline\"><mi>I</mi></math> korrontea —<math display=\"inline\"><mi>P</mi></math>-n jasoa— <math display=\"inline\"><mi>V</mi></math>-ren funtzioan neurtzean, ikusten da <math display=\"inline\"><mi>I</mi></math> handitu egiten dela <math display=\"inline\"><mi>V</mi></math>-rekin —klasikoki espero zitekeen bezala—, baina <strong>bat-batean</strong> erori egiten dela <math display=\"inline\"><mi>V</mi></math> 4.9 volteko multiplo batera iristen den bakoitzean."
    },
    {
     "mota": "testua",
     "html": "Interpretazioa zuzena da: elektroiaren energia zinetikoa 4.9 eV baino txikiagoa bada, merkurio atomoekiko haren talkak elastikoak dira (ezin diete energiarik transferitu, merkurioak ez baitu energia gutxiagorekin irits daitekeen egoera kitzikaturik). Bera baino milaka aldiz astunagoa den atomo batekiko talka elastiko batean, elektroiak bere energiaren zatiki arbuiagarri bat baino ez du galtzen; baina bere energia zinetikoa 4.9 eV-era iristen denean, elektroiak merkurio atomoa bere lehen egoera kitzikatura eraman dezake, energia hori guztia kolpetik galduz talka inelastiko bakar batean —eta orduan energia nahikorik gabe geratzen da <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>P</mi></math> arteko balaztatze-potentzial txikia gainditzeko—; ondorioz, bildutako korrontea erori egiten da. <math display=\"inline\"><mi>V</mi></math> handitzen jarraitzean, prozesua 4.9 V-ko gehikuntza bakoitzeko errepikatzen da (elektroiak orain tartea du atomo bat kitzikatzeko, azeleratzen jarraitzeko eta bigarren atomo bat kitzikatzeko <math display=\"inline\"><mi>A</mi></math>-ra iritsi baino lehen)."
    },
    {
     "mota": "testua",
     "html": "<strong>Berrespen gurutzatua.</strong> Interpretazio hau zuzena bada, kitzikatutako merkurio atomoa deskitzikatu egin behar da 4.9 eV-eko fotoi bat igorriz, hau da, 2536 Å-eko uhin-luzerakoa. Franckek eta Hertzek benetan bilatu zuten espektro-lerro hori... eta <math display=\"inline\"><mi>V</mi></math>-k 4.9 V gainditzen zuenean bakarrik agertu zen, inoiz ez lehenago. Erabat independenteak diren bi metodok (korrontearen erorketak eta espektro-lerroaren agerpenak) energia-diferentzia bera neurtzen dute: energia-maila atomikoak kuantizatuta daudelako berrespen zuzena, espektroskopia optikotik igaro gabe."
    },
    {
     "mota": "problema",
     "izena": "2006ko iraila, IEM/Fisika Modernoa, 2. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(5 puntu) Franck-Hertz motako esperimentu batean, merkurioa hidrogeno atomikoz ordezkatu da; galbanometrora iristen den korrontean maximoak bereizten dira potentzial azeleratzailearen <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV eta <math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV balioetarako, eta igorritako erradiazioa espektroskopikoki aztertzen bada, 3 lerro ikusten dira. Azaldu emaitza hauek."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Hidrogenoaren mailak: <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV; beraz, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3.4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1.51</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>0.85</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> kitzikapenari dagokio."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> kitzikapenari dagokio (posiblea zuzeneko talkan, energia nahikoa izanez gero)."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-tik, atomoa hiru eratan deskitzika daiteke kaskadan: <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mn>12.09</mn></math> eV igortzen du), <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1.89</mn></mrow></math> eV igortzen du) eta, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-ra iritsi ondoren, <math display=\"inline\"><mrow><mn>2</mn><mo>→</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mn>10.2</mn></math> eV igortzen du). Horiek dira, hain zuzen, behatutako 3 espektro-lerroak — jatorrizko merkurio-esperimentuaren kaskada-logika bera, baina hidrogenoaren maila jada ezagunekin, ez merkurioarenak bezala lehen aldiz neurtutakoekin."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoa (6 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;2006ko iraila&quot; atalean dago."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Antzinako teoria kuantikoaren kritika"
    },
    {
     "mota": "testua",
     "html": "Bohren ereduak (eta haren geroko orokortzeak, Wilson-Sommerfelden kuantizazio-arauak, edozein sistema periodikotarako) arrakasta nabarmenak izan zituen: kuantitatiboki iragarri zuen hidrogenoaren espektroa, artean behatu gabeko lerro-serie osoak barne. Baina, arau multzo gisa, akats serio batzuk ditu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Denboran periodikoak</strong> diren sistemei baino ezin zaie aplikatu — sistema fisiko gehienak kanpoan uzten ditu.",
      "Baimendutako energiak eta igorritako erradiazioaren maiztasunak ematen ditu, baina ez du ezer esaten trantsizio batek irauten duen <strong>denboraz</strong>, ezta haren probabilitateaz ere.",
      "Elektroi bakarreko atomoentzat baino ez du ondo funtzionatzen; huts egiten du dagoeneko bigarren elektroia duen atomorik sinpleenarekin, helio atomoarekin.",
      "Eta, batez ere, era arbitrarioan nahasten ditu lege klasikoak (orbita newtondarrak, Coulomben legea) eta baldintza kuantiko huts bat (momentu angeluarraren kuantizazioa), inolako funtsezko justifikaziorik gabe — &quot;zergatik momentu angeluarra, eta ez beste kantitate bat&quot; galdera bera erantzun gabe geratzen da."
     ]
    },
    {
     "mota": "testua",
     "html": "Muga hauek ez dira xehetasun-akatsak, funtsezkoak baizik, eta Heisenberg (1925ean, bere matrize-mekanikarekin) eta Schrödinger (1926an, kapitulu honetako gainerako ataletan garatzen dugun uhin-mekanikarekin) benetako teoria berri bat eraikitzera eraman zituzten, ez Bohren ereduaren beste zuzenketa bat egitera. Bi formulazioak, itxuraz zeharo desberdinak izan arren, matematikoki baliokideak suertatu ziren."
    },
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> Energia-maila batetik bestera igarotzeko, atomoak fotoi bat igorri behar du. Gainera, atomoak energia zinetikoa irabazi behar du, momentu lineala kontserba dadin. Zuzenketa hau kontuan hartzen badugu, fotoiaren maiztasuna txikiagoa da. (a) Lehen hurbilketa batean, <math display=\"inline\"><mi>M</mi></math> atomoaren masa izanik, egiaztatu maiztasuna hau dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>M</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> siendo </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>h</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(b) Hidrogeno atomo batentzat, kalkulatu <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> arteko trantsizioari dagokion maiztasuna, aurreko zuzenketarekin eta hura gabe."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> (a) Atomoaren momentu lineala zero da, baina kontuan hartu behar dugu erradiatuko duen energiak momentu lineala daukala; beraz, atomoak igorritako fotoiaren aurkako noranzkoan momentu bat hartuko duela suposatu behar dugu. Bestalde, energia osoa kontserbatzen denez, aurreko orbitaleko energia orbital berriko energiaren, fotoiaren energiaren eta atomoak hartutako energia zinetikoaren baturaren berdina dela hartzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>−</mo><mi>M</mi><mi>v</mi><mo>⇒</mo><mi>v</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo>⇒</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>n</mi><mi>f</mi></mrow></msub><mo>+</mo><mi>h</mi><mi>ν</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehenengoa bigarrenean ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math>-ren bigarren mailako ekuazio gisa berridatziz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mi>h</mi><mi>ν</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>±</mo><msqrt><mrow><mn>4</mn><msup><mi>M</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msqrt><mrow><msup><mi>M</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erroa Taylorren polinomioaren bidez garatuz, <math display=\"inline\"><msqrt><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></msqrt></math> non <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> baita: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>; beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "nondik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "De Broglieren postulatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Errepasa ditzagun fotoiari aplikatu genizkion formuletako batzuk: fotoiaren energia <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>c</mi><mi>p</mi></mrow></math> da; energiaren kuantizazioarekin, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>h</mi></mrow><mi>λ</mi></mfrac></mrow></math> lortzen da. Hainbat erlazio ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac><mo>⇒</mo><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mi>ħ</mi><mi>k</mi><mi>c</mi><mo>⇒</mo><mi>ω</mi><mo>=</mo><mi>k</mi><mi>c</mi><mo>⇒</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>c</mi><mo>⇒</mo><mi>c</mi><mo>=</mo><mfrac><mi>λ</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De Brogliek 1924an proposatu zuen ez fotoiek bakarrik, partikula guztiek ere izan litzaketela uhin-ezaugarriak; hala, haien uhin-luzera kalkula genezake aurreko formulak erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mi>E</mi><mi>ħ</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>A adibidea.</strong> Zein da 10 m/s-ko abiaduran higitzen den 1 kg-ko beisbol-pilota baten De Broglieren uhin-luzera?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>10</mn><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>35</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>B adibidea.</strong> Zein da 100 eV-eko energia zinetikoa duen elektroi baten De Broglieren uhin-luzera?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mi>K</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><msqrt><mrow><mn>2</mn><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>1.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mi>/</mi><mtext mathvariant=\"normal\">eV</mtext></mrow></msqrt></mfrac><mo>=</mo><mn>1.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>1.2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Masa oso txikiko partikulen kasuan bakarrik neur daiteke uhin-luzera."
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondoko ariketak erabiltzailearen (Mikel Aguirre) deribazio propio bat jasotzen du, De Broglieren uhin-luzeraren zuzenketa erlatibistari buruzkoa. MASTERFISMOtex-eko gainerako guztia bezala, askatasun osoz erreproduzitzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ariketa.</strong> Egiaztatu ezen <math display=\"inline\"><mi>e</mi></math> kargako eta <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math> pausaguneko masako partikula bati, pausagunetik <math display=\"inline\"><mi>V</mi></math> potentzial-diferentzia batez azeleratuari (eta, beraz, abiadura erlatibista duenari), lotutako uhin-luzera hau dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta kalkulatu adierazpen horren limite ez-erlatibista."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Energia erlatibista osoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math> da, eta baita <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mi>V</mi><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math> ere (pausaguneko energia gehi azeleratzean irabazitako energia zinetikoa). Bi adierazpenak berdinduz eta karratura jasoz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>e</mi><mi>V</mi><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> gaiek elkar ezeztatzen dute, eta <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> askatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>e</mi><mi>V</mi><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De Broglieren erlazioan ordezkatuz, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Limite ez-erlatibista.</strong> Fisika klasikoa erabiliz, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>p</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>E</mi><mi>m</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mi>V</mi></mrow></math> energia zinetiko klasikoa izanik); beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">clásica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, hain zuzen ere, emaitza erlatibista bera, zuzenketa-faktorea 1 bihurtzen denean, alegia, <math display=\"inline\"><mrow><mi>e</mi><mi>V</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≪</mo><mn>1</mn></mrow></math> denean: irabazitako energia zinetikoa txikia da partikularen pausaguneko energiaren aldean."
    },
    {
     "mota": "testua",
     "html": "Konpara dezagun zein den partikularen abiaduraren eta hari lotutako uhinaren abiaduraren arteko erlazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> como </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>E</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi><mo>⇒</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>⇒</mo><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hori da <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>k</mi></math> arteko erlazioa. Bestalde, fase-abiadura hau litzateke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac><mo>⇒</mo><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>k</mi></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dado que </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ħ</mi><mi>k</mi><mo>=</mo><mi>p</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><mo>⇒</mo><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msub><mi>v</mi><mi>p</mi></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina emaitza hori ez da fotoiarentzat lortutakoaren berbera; beraz, fase-abiadura ez da partikulari lotutako uhinaren abiadura: abiadura hori <strong>talde-abiadura</strong> da. Frogapena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>k</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub></mrow><mi>m</mi></mfrac><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub><mo>⇒</mo><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gogora dezagun fase-abiadura uhin-fronte bakar baterako erabiltzen dela; partikulari lotutako uhina uhin-batura gisa baino ezin izango da definitu. (Ohar gaitezen fotoiaren kasuan bi abiadurak bat datozela, baina salbuespenezko kasua da, <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>k</mi></math> arteko erlazio linealaren ondorioz.)"
    },
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> Egiaztatu partikula erlatibistaren kasuan partikularen abiadura talde-abiadurarekin bat datorrela."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mrow></msqrt><mo>⇒</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ħ</mi></mfrac><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><mi>k</mi></mrow><mrow><mn>2</mn><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>ħ</mi><mi>k</mi></mrow><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mrow><mi>p</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>E</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "beraz, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondoko bi atalak (Bohr-en kuantizazioaren uhin-interpretazioa, Davisson-Germer esperimentua) azalpen propioak dira, &quot;Física (ESP) - Gratton, Julio - Introducción a la Mecánica Cuántica&quot; irakurrita jantziak (Julio Grattonen katedra-apunteak, Fisika 4 UBA; ez dira erabiltzailearenak: erreferentzia gisa tratatu dira, ez transkripzio gisa), Eisberg-Resnicki dagoeneko aplikatutako aipu-irizpide berarekin."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Bohr-en kuantizazioaren De Broglieren interpretazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bohr-en kuantizazioaren postulatua —momentu angeluar orbitalak <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math> balioak baino ezin ditu hartu— jatorrizko ereduan <strong>ad hoc</strong> erregela gisa agertzen zen, «emaitza zuzena ematen du» beste justifikaziorik gabe. De Broglieren hipotesiak hura a posteriori ondorio natural gisa ulertzea ahalbidetzen du."
    },
    {
     "mota": "testua",
     "html": "Elektroiak bere orbitan <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math> uhin-luzerako uhin bat badarama lotuta, arrazoizkoa da uhin horrek, orbitari bira oso bat eman ondoren, bere buruarekin bat egin dezan eskatzea: zirkunferentziak uhin-luzera kopuru oso bat eduki dezala,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bestela, uhinak modu suntsitzailean interferituko luke bere buruarekin hurrenez hurreneko biretan, eta ezingo luke egoera egonkorrik osatu. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi><mo>=</mo><mi>h</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac><mo>⇒</mo><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, hain zuzen ere, Bohr-en momentu angeluarraren kuantizazioaren postulatua. Agerian geratzen da, gainera, 1913an arbitrarioa zirudien erregela uhin geldikorreko baldintzarik sinpleena dela: orbita baimendua elektroiaren De Broglieren uhina bere buruaren gainean «ixten» den hura da."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Davisson-Germer esperimentua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "De Broglieren hipotesiak —edozein partikulari uhin bat dagokio— esperimentuekin loturarik gabeko espekulazio matematikoa zirudien 1924an. 1927an, Clinton Davissonek eta Lester Germerrek zuzenean egiaztatu zuten, ia ustekabean: elektroien sakabanatzea aztertzen ari ziren nikelezko itu batean, aire-ihes batek lagina oxidatu zuenean, eta tenperatura altuan suberatu behar izan zuten. Suberaketak nikel polikristalinoa kristal handi gutxi batzuk osatuz berrantolatu zuen, eta neurketak errepikatzean ustekabeko zerbait aurkitu zuten."
    },
    {
     "mota": "irudia",
     "oina": "Davisson-Germer esperimentuaren geometria: energia finkoko elektroiak nikelezko monokristal baten gainera erortzen dira; sorta difraktatuaren intentsitatea neurtzen da normalarekiko <math display=\"inline\"><mi>ϕ</mi></math> angeluaren funtzioan.",
     "src": "media/irudiak/d0c7be8eeceba169.svg",
     "zabalera": 355
    },
    {
     "mota": "testua",
     "html": "54 eV-eko elektroiekin, sorta difraktatuaren intentsitateak maximo nabarmen bat zeukan <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>50</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> angeluan —Bragg-en difrakzio baten portaera, hain zuzen, X izpiek kristal batean dutenaren antzekoa, eta ez partikula klasikoen sakabanatzearena. Uhin-luzera maximo horren posiziotik ondorioztatzen da, Bragg-en legea eta nikelaren espaziatze atomikoa erabiliz (aldez aurretik ezaguna, X izpien kristalografiari esker); emaitza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">exp </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>1.65</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De Brogliek 54 eV-eko elektroi batentzat iragarritakoarekin adostasun bikainean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><mo>≈</mo><mn>1.67</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bide erabat independenteetatik lortutako bi balio —bata difrakzio-patroi baten geometriatik abiatuta, bestea hiru urte lehenago inolako froga esperimentalik gabe proposatutako <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math> formulatik— ehuneko batean bat datoz. Egiaztapen erabakigarria: elektroiak, Thomsonez geroztik partikulen eredutzat hartuak, uhinak bezala difraktatzen dira."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Fourier-en serieetan garapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren periodoa <math display=\"inline\"><mi>L</mi></math> da. Periodo baterako, adierazpena hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>48</mn><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mi>L</mi><mn>4</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>L</mi><mn>4</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(a) Kalkulatu funtzioaren Fourier-en garapenaren lehen harmonikoak (nuluak ez direnak, sinuak eta kosinuak kontuan hartuta). (b) Marraztu, funtzioarekin batera, haren 3 harmoniko. (c) Marraztu garapena (hiru harmonikoen batura) modu kualitatiboan. (d) Marraztu funtzioa eta haren garapena programa bat erabiliz."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> (a) Honako honetatik abiatzen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa bikoitia denez, nahikoa da kosinuaren gaiekin."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mrow><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mfrac><mn>48</mn><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mfrac><mi>L</mi><mn>4</mn></mfrac><mrow><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow></msubsup><mn>0</mn><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mfrac><mrow><mn>48</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>16</mn><mfrac><msup><mi>x</mi><mn>3</mn></msup><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>48</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mn>96</mn><msup><mi>L</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen integrala, ateratzen den sinua funtzio bakoitia dela kontuan hartuta eta limiteetan ebaluatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mo>=</mo><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarren integralerako, zatikako integrazioa erabiltzen da bi aldiz jarraian (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>; gero <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>); sinplifikatu ondoren (gai bakoitiek elkar ezeztatzen dute limite simetrikoetan), hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><mn>96</mn><msup><mi>L</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi emaitzak batuz, <math display=\"inline\"><mrow><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gaiek elkar ezeztatzen dute, eta hau geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen harmonikoetarako ebaluatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><msup><mi>π</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>48</mn><msup><mi>π</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>6</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>16</mn><mrow><mn>9</mn><msup><mi>π</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioari dagokion Fourier-en seriea hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren (parabola <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mi>/</mi><mn>4</mn><mo>,</mo><mi>L</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean, zero periodoaren gainerakoan) eta haren lehen 3 harmoniko ez-nuluen baturaren arteko konparazioa, 1.5 periodotan. 3 gairekin bakarrik, hurbilketak dagoeneko forma orokorra jasotzen du; harmoniko gehiago gehituta, xehetasunak finduko lirateke (izkinak, tarte nuluaren lautasuna).",
     "src": "media/irudiak/94acbef359d657f0.svg",
     "zabalera": 330
    },
    {
     "mota": "problema",
     "izena": "2012ko martxoaren 23a, IEM/Fisika Modernoa (Control I), 3. problema",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, dimentsio bakarrean higitzen den partikula aske baten uhin-funtzioa <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math> eskualdean, eta nulua gainerakoan. <math display=\"inline\"><mi>a</mi></math> konstante bat da."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu <math display=\"inline\"><mi>A</mi></math> balioa, funtzioa normalizatuta egon dadin."
      },
      {
       "mota": "testua",
       "html": "b) Balio jakin bat eman al dakioke partikularen uhinari lotutako De Broglieren uhin-luzerari?"
      },
      {
       "mota": "testua",
       "html": "c) Eman <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en adierazpen bat: partikula <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math> artean aurkitzeko probabilitatea, luzera-unitateko. Kalkulatu partikularen batez besteko posizioa eta eman <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>-en estimazio bat."
      },
      {
       "mota": "testua",
       "html": "d) Kalkulatu partikula <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tartean aurkitzeko probabilitatea, non <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> aurrez kalkulatutako batez besteko posizioa baita."
      },
      {
       "mota": "testua",
       "html": "e) Uhin-funtzioa funtzio harmonikoen konbinazio lineal gisa adieraziz, kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> anplitudea, <math display=\"inline\"><mi>k</mi></math> uhin-bektoreko uhin-funtzio harmonikoari lotutakoa. Kalkulatu <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) Kalkulatu <math display=\"inline\"><mi>k</mi></math>-ren batez besteko balioa eta eman <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>-ren estimazio bat."
      },
      {
       "mota": "testua",
       "html": "Laguntza: <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mi>n</mi></msup><mrow><mi>d</mi><msup><mi>k</mi><mi>n</mi></msup></mrow></mfrac><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Normalizazioa: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>4</mn></msup><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo>=</mo><mfrac><mn>16</mn><mn>15</mn></mfrac><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math> beraz, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><mn>15</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Ez: ez da funtzio harmoniko bat (ez du <math display=\"inline\"><mi>k</mi></math> bakar bat lotuta) — De Broglieren uhin-luzera, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math>, momentu finkoko uhin lau huts baterako bakarrik dago ondo definituta. Hemen, edozein pakete lokalizaturekin gertatzen den bezala, balioen <strong>banaketa</strong> batez hitz egin behar da <math display=\"inline\"><mi>k</mi></math>-ren kasuan (e-f atalak), ez balio bakar batez <math display=\"inline\"><mi>λ</mi></math>-ren kasuan."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Batez besteko posizioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> da (funtzioa simetrikoa da puntu horrekiko). Estimazio gisa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>2</mn><mi>a</mi></mrow></math> har daiteke."
      },
      {
       "mota": "testua",
       "html": "d) Tartea oso txikia denez, hurbilketa hau baliozkoa da: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><mi>a</mi></mrow></mfrac><mo>×</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>∼</mo><mn>1.9</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Fourier-en transformatua kalkulatu behar da: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msqrt><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Lehen integrala: <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mi>i</mi><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Bigarrenerako, laguntza erabiliz: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>k</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Kenduz: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>15</mn><mrow><mn>32</mn><mi>π</mi><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bikoitia da <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>-rekiko; beraz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>-ren estimazio gisa, lehen gaia deuseztatzen duen balioaren bikoitza har daiteke (bigarrena deuseztatu ondoren gertatzen da), hots, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math> denekoa. Beraz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Ohar bedi <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>2</mn><mi>a</mi><mo>⋅</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi><mo>=</mo><mn>8</mn><mi>π</mi></mrow></math> dela: unitatearen ordenakoa, faktore numerikoak izan ezik; hori da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>1</mn></mrow></math> ziurgabetasun-erlazioa, Heisenberg-en ziurgabetasunaren printzipioa motibatzen duena (hurrengo kapitulua)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoa (3 problemak, ebazpen ofizialarekin) 7. kapituluko &quot;Control I — 23 de marzo de 2012&quot; atalean dago."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "Schrödinger-en ekuazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin-funtzioa kalkulu-tresna bat da, dagokion partikulari buruzko informazio guztia daukana (ziurgabetasunaren printzipioa kontuan hartuta)."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Ekuazioaren dedukzioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>1. ariketa.</strong> Osziladore harmoniko sinple baten energiarik baxueneko egoeraren uhin-funtzioa —<math display=\"inline\"><mi>m</mi></math> masa bati <math display=\"inline\"><mi>C</mi></math> konstanteko indar berrezarle lineal batek eragiten diola— honela adieraz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>/</mi><mn>2</mn><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>C</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>A</mi></math> konstante errealak edozein balio har dezakeen. Egiaztatu adierazpen hori Schrödinger-en ekuazioaren soluzioa dela, potentzial egoki batekin."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>C</mi><mi>x</mi></mrow></math> denez, potentziala <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></mrow></math> da. Potentziala Schrödinger-en ekuazioan sartuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>C</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berdintasuna egiaztatzeko, deribatuak kalkulatzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi>x</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>+</mo><mfrac><mrow><mi>C</mi><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioan ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>+</mo><mfrac><mrow><mi>C</mi><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>C</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>i</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berdintasuna bete egiten da, eta proposatutako adierazpena Schrödinger-en ekuazioaren soluzioa da, osziladore harmonikoaren potentzialarekin."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Schrödinger-en ekuazioa onartzeko arrazoiak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Atal honek izenburua baino ez zuen jatorrizko iturrian. Azalpena propioa da, ez inolako libururen transkripzioa: gaiaren tratamendu estandarra jarraitzen du —Eisberg &amp; Resnick-ek beren <em>Quantum Physics</em>-eko §5-2an garatzen duten &quot;sinesgarritasun-argudioa&quot;, erabiltzaileak ere baduena—, baina hitz eta egitura propioz idatzita."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Schrödinger-en ekuazioa <strong>ez da deduzitzen</strong> printzipio oinarrizkoagoetatik: postulatu bat da, mekanika klasikoan Newtonen legeak diren bezalaxe. Egin daitekeena <strong>sinesgarritasun-argudio</strong> bat da: partikula askeez dakigunetik abiatuta, horrekin bat datorren ekuaziorik sinpleena eraikitzea, eta gero haren iragarpenak esperimentuarekin bat datozela egiaztatzea."
    },
    {
     "mota": "testua",
     "html": "<strong>Abiapuntua: partikula askea.</strong> De Broglie-k <math display=\"inline\"><mi>E</mi></math> energiako eta <math display=\"inline\"><mi>p</mi></math> momentuko partikula aske bati uhin lau bat esleitzen dio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> con </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>k</mi><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ω</mi><mo>=</mo><mfrac><mi>E</mi><mi>ħ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partikula ez-erlatibista batentzat, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Ekuazio diferentzial bat nahi dugu, <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> hau soluziotzat izango duena eta energia-momentu erlazio hori automatikoki erreproduzituko duena."
    },
    {
     "mota": "testua",
     "html": "<strong>Proba-uhinaren deribatuak.</strong> <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> deribatuz <math display=\"inline\"><mi>x</mi></math>-rekiko eta <math display=\"inline\"><mi>t</mi></math>-rekiko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>i</mi><mi>k</mi><mi mathvariant=\"normal\">Ψ</mi><mo>⇒</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>i</mi><mi>ω</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>−</mi><mi>i</mi><mfrac><mi>E</mi><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazio diferentzial gisa berreraikitzen.</strong> Bigarren deribatu espazialetik <math display=\"inline\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> lortzen dugu, eta denbora-deribatutik, <math display=\"inline\"><mrow><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>. Biak <math display=\"inline\"><mrow><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math> adierazpenean ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, hain zuzen, erabiltzen ari garen Schrödinger-en ekuazio askea (potentzialik gabea). <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial bat gehitzean, energia osoa <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>V</mi></mrow></math> bihurtzen da, eta prozedura berak forma orokorra ematen du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Zergatik den hau &quot;sinesgarria&quot; soilik, eta ez frogapen bat.</strong> Azken pausoa —<math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> deribatzean lortutako adierazpenez ordezkatzea eta <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math>-z biderkatzea— ez dugu frogatu: ordezkapen horrek ez du zertan oro har balio, baina abiapuntuko uhin lauarentzat funtzionatzen du. Schrödinger-en ekuazioa, azken finean, postulatu bat da. Proposatzen da (a) De Broglie-ren erlazioarekin eta energiaren kontserbazioarekin bateragarria delako; (b) lineala delako <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math>-n, eta horrek interferentziarako funtsezkoa den gainezarpenaren printzipioa bermatzen duelako; (c) denboran lehen ordenakoa delako (uhin-ekuazio klasikoa ez bezala, hura bigarren ordenakoa baita), eta hori nahikoa delako sistemaren bilakaera osoa zehazteko <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> une bakar batean ezagututa; eta, batez ere, (d) haren iragarpenak esperimentuarekin bat datozelako: hidrogeno-atomoaren espektroa, tunel-efektua eta osziladore harmonikoaren mailak erreproduzitzen ditu, eta aurreko kapituluetan beste bide batzuetatik (Planck, Bohr) lortutako emaitza guztiak kasu partikular edo limite gisa agertzen dira zuzenean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ziurgabetasunaren printzipioa"
    },
    {
     "mota": "testua",
     "html": "Partikula bat uhin baten bidez deskribatzearen berehalako ondorio bat —eta ez, mekanika klasikoan bezala, posizio eta abiadura erabat definituak dituen puntu baten bidez— hauxe da: posizioa eta momentua ezin dira biak batera doitasun arbitrarioz ezagutu."
    },
    {
     "mota": "testua",
     "html": "Uhin lau puru batek, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, momentu erabat definitua du, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math>, baina espazio osoan zehar hedatzen da: ez dago posizioari buruzko inolako informaziorik (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> konstantea da, probabilitate bera edozein <math display=\"inline\"><mi>x</mi></math>-tan). Partikula <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> zabalerako eskualde batean lokalizatzeko, uhin-zenbaki desberdineko uhin lauak <strong>gainezarri</strong> behar dira, uhin-pakete bat osatuz: uhinen kapituluan aztertu genuen pultsuen fenomeno bera da (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>d</mi><mi>ω</mi><mi>/</mi><mi>d</mi><mi>k</mi></mrow></math>), orain uhin-zenbaki askoren gainezarpenera eramana, biren ordez."
    },
    {
     "mota": "testua",
     "html": "Fourier-en analisiaren emaitza orokor bat da —aurreko kapituluan erabili genuen tresna mota berekoa— <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> tarte batean banatutako uhin-zenbakiez eraikitako uhin-pakete batek ezin duela izan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> zabalera espaziala, gutxi gorabehera, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> baino txikiagoa: zenbat eta estuagoa espazioan, orduan eta zabalagoa izan behar du hura osatzen duen maiztasun-tarteak (eta alderantziz). <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math>-rekin, hau honela itzultzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, <strong>Heisenberg-en ziurgabetasunaren printzipioa</strong>. Ez da gure neurketa-tresnen muga bat, uhin-funtzio batez deskribatutako edozein sistemaren egiturazko propietate bat baizik: zenbat eta lokalizatuago egon partikula bat posizioan, orduan eta gutxiago definituta dago haren momentua, eta alderantziz."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea.</strong> Elektroi bat <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å zabalerako eskualde batean konfinatuta dago (atomo baten ordenakoa). Zein da, gutxienez, haren momentuaren ziurgabetasuna, eta zein energia zinetiko tipiko dakar horrek?"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>ħ</mi><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.055</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi></mrow></mfrac><mo>=</mo><mn>5.3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ziurgabetasun hori elektroiaren momentu tipikoaren magnitude-ordenatzat hartuz, energia zinetikoa da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>∼</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5.3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1.5</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lotura atomikoen energientzako magnitude-ordena zuzena, hain justu: lehen pista bat —hidrogeno-atomoarentzat Schrödinger-en ekuazioa ebatzi aurretik— ziurgabetasunaren printzipioa bera dela atomoek duten tamaina izateko azken arrazoia: elektroi batek ezin du nukleoaren gainera &quot;erori&quot;, erradio atomikoa baino eskualde txikiago batean konfinatzeak energia zinetiko gehiago kostatuko liokeelako, hurbiltzean irabaziko lukeen energia potentziala baino."
    },
    {
     "mota": "problema",
     "izena": "2005eko ekaina, IEM/Fisika Modernoa, 4. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 puntu) Irudian, protoi baten <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioaren modulua karratura ageri da une jakin batean, non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å den. Protoiaren batez besteko abiadura <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> m/s da. Adierazi zein izango den, gutxi gorabehera, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioaren zabalera —<math display=\"inline\"><mi>k</mi></math> uhin-zenbakiaren balioen probabilitate-dentsitatea adierazten duena (<math display=\"inline\"><mrow><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac></mrow></math>)—, eta eztabaidatu <math display=\"inline\"><mi>k</mi></math> ardatzaren zein aldetan egongo den lokalizatuta."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Indeterminazio-printzipioaren arabera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>; beraz, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioa <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>-n zentratuta dago, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math> Zenbakizko balioetan, <math display=\"inline\"><mi>m</mi></math> protoiaren masa izanik (<math display=\"inline\"><mrow><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioa <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>1.6</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> inguruan dago lokalizatuta (<math display=\"inline\"><mi>k</mi></math> ardatzaren alde positiboan), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> zabalerarekin — gorago elektroiarentzat erabili dugun <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> zenbatespen kualitatibo mota bera, orain batez besteko abiadura ez-nulua duen protoi bati aplikatuta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "2006ko iraila, IEM/Fisika Modernoa, 3. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntu) <math display=\"inline\"><mi>m</mi></math> masako partikula bat dimentsio bakarreko eskualde batean konfinatuta dago, <math display=\"inline\"><mi>a</mi></math> zabalerakoan. Ziurgabetasunaren printzipioa erabiliz, lortu partikularen gutxieneko energiaren adierazpen bat. Kalkulatu gutxieneko energia horren balioa <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm direnerako, eta elektroi batentzat <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm-ko eskualde batean."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> hartuta: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Gutxieneko balioa hartuz, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> kg eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><mn>0.1</mn></mrow></math> m direnean: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Elektroi batentzat (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><mn>9.11</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg), <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m izanik: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∼</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Bi emaitzen arteko kontrastea —<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup></math> J objektu makroskopikoarentzat, <math display=\"inline\"><mn>1</mn></math> eV elektroiarentzat— da ziurgabetasunaren printzipioa eguneroko bizitzan inoiz nabaritzen ez den baina eskala atomikoa erabat menderatzen duen azken arrazoia: gainera, bat dator aurreko adibidean metodo berarekin lortutako magnitude-ordenarekin."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoak (2005eko ekaina: 7 arazo; 2006ko iraila: 6 arazo, biak ebazpen ofizialarekin) 7. kapituluan daude, &quot;2005eko ekaina&quot; eta &quot;2006ko iraila&quot; ataletan."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Born-en postulatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin-funtzioaren propietateen eta dagokion partikularen portaeraren arteko lotura probabilitate-dentsitatearen bidez adierazten da: partikula bat une jakin batean <math display=\"inline\"><mi>x</mi></math> ardatzeko puntu batean egoteko probabilitatea. Born-en postulatuaren arabera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Uhin-funtzioaren normalizazio-konstantea eta normalizazioaren ezinbestekotasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin-funtzioa probabilitate-dentsitatearekin erlazionatu ahal izateko, ezinbestekoa da normalizatuta egotea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da, lortutako balioa bat ez bada, funtzioa konstante batez biderkatu beharko dugu, haren balioa bat izan dadin. Oro har: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math> bada, orduan <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>A</mi></msqrt></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Arazoa da normalizatuta dagoen ala ez egiaztatu behar dela, integrala eginez."
    },
    {
     "mota": "testua",
     "html": "<strong>1. adibidea — esponentzial gaussiarra.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>. <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mi>π</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></msqrt></mrow></math>; beraz, normalizatzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>a</mi><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>2. adibidea — uhin laua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. Egiaztatzen dugu ezen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ez da normalizagarria."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Dirac-en delta",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dirac-ek uhin-funtzio oso lokalizatu bat nahi zuen, baina integragarria."
    },
    {
     "mota": "irudia",
     "oina": "Dirac-en delta <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: puntu guztietan nulua den &quot;funtzio&quot; bat, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>-n izan ezik, non infinitua baita; kurbaren azpiko azalera osoa 1 da.",
     "src": "media/irudiak/ded145f0346ea6c4.svg",
     "zabalera": 233
    },
    {
     "mota": "testua",
     "html": "Har dezagun funtzio hau:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>ε</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mi>ε</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzio honen integrala grafikoaren azpiko azaleraren bidez kalkulatzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>⋅</mo><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><msub><mi>f</mi><mrow><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>: <math display=\"inline\"><mi>ε</mi></math> zabalerako eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math> altuerako laukizuzen estu bat, azalera beti 1 duena. <math display=\"inline\"><mi>ε</mi></math> txikitzean, gero eta altuagoa eta estuagoa bihurtzen da, Dirac-en deltarantz joz.",
     "src": "media/irudiak/ddef5b7b4f9f1ea8.svg",
     "zabalera": 210
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>ε</mi></math> txikitzen badugu, azalera bera izango da, baina grafikoa gero eta altuagoa eta estuagoa izango da: <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> limitean, lerro infinitu bat izango da. Dirac-en delta honela defini daiteke"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></munder><msub><mi>f</mi><mi>ε</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> betetzen da. Edozein <math display=\"inline\"><mi>a</mi></math> puntutan aztertzeko, nahikoa da argumentua <math display=\"inline\"><mi>x</mi></math>-tik <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>a</mi></mrow></math>-ra aldatzea. Esan behar da funtzioaren adierazpide hau ez dela posible bakarra."
    },
    {
     "mota": "testua",
     "html": "Dirac-en deltak, integral baten barruan, funtzio bat biderkatzen duenean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>0</mn></msub><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Schrödinger-en ekuazioaren garapen formala, potentziala denborarekiko independentea denean",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Potentziala denboraren mende ez dagoen kasurako, Schrödinger-en ekuazioa aldagaiak banantzeko metodoaz gara dezakegu: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>⇒</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>φ</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mi mathvariant=\"normal\">Ψ</mi><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi></mrow></math>-z zatitzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><mi>i</mi><mi>ħ</mi></mrow><mi>φ</mi></mfrac><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Alde bakoitza aldagai bakar baten mende dago, eta haren deribatua baino ez du; beraz, bi aldeak konstante baten berdinak dira, eta <math display=\"inline\"><mi>E</mi></math> deituko diogu. Ezkerreko aldea garatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mo>⇒</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hamiltondar eragilea sartuz, <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math>, hamiltondarraren autobalioak eta autofuntzioak ezartzen dira horrela: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>E</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Eskuineko aldea garatzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>i</mi><mi>ħ</mi></mrow><mi>φ</mi></mfrac><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>E</mi><mo>⇒</mo><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mi>φ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><mi>E</mi><mi>d</mi><mi>t</mi><mo>⇒</mo><msubsup><mo>∫</mo><msub><mi>φ</mi><mn>0</mn></msub><mi>φ</mi></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mi>φ</mi></mfrac><mo>=</mo><mfrac><mi>E</mi><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>t</mi></msubsup><mi>d</mi><mi>t</mi><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>φ</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mi>t</mi></mrow><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><mo>⇒</mo><mi>φ</mi><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi>i</mi><mi>ħ</mi></mfrac><mi>E</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi emaitzak elkartuz, modu normalak ditugu (egonkor edo iraunkor ere deituak, hamiltondarraren autofuntzioei dagozkienak):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi>i</mi><mi>ħ</mi></mfrac><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eta edozein uhin-funtzio honelako funtzioen konbinazio gisa idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ez denborarekiko independenteak direlako, moduluaren karratua hala delako baizik."
    },
    {
     "mota": "testua",
     "html": "<strong>1. adibidea.</strong> <math display=\"inline\"><mi>m</mi></math> masako partikula batek <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean uhin-funtzio hau du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>α</mi></math> parametroa 0 baino handiagoa den. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> dela baldintza hartuta, kalkulatu zein den partikularen uhin-ekuaziorako hamiltondarraren autofuntzioari dagokion <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren adierazpena. Eman autobalioa ere."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Sor daitekeen zalantza bat da normalizatu beharra dagoen ala ez: probabilitateari buruzko informazioa eskatzen bazaigu, ezinbestekoa da; kasu honetan ez da behar, konstante bat sartzea besterik ez baikenuke egingo. Deribatuak egiten ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioan ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>=</mo><mi>E</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Badakigu <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dela: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac></mrow></math>. Hori aurreko ekuazioan ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>⇒</mo><mi>V</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osziladore harmonikoari dagokion potentziala da, oinarrizko egoeran."
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Potentzial-putzu infinitua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>16.1. adibidea.</strong>"
    },
    {
     "mota": "irudia",
     "oina": "Potentzial-putzu infinitua: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartearen barruan, eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> handik kanpo. Partikula putzuan hertsiki konfinatuta geratzen da.",
     "src": "media/irudiak/65b72d0ac20b9ffa.svg",
     "zabalera": 321
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>∞</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Badakigu potentziala zero den lekuan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>⇒</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac></mrow></math> definituz, orduan <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup></mrow></math> motako soluzio batekin probatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>α</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mo>⇒</mo><mi>α</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>k</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio hau potentziala nulua den tartean baino ez da baliozkoa. Normalean deribatuaren jarraitutasuna hartu behar da kontuan, baina kasu honetan, potentziala infinitua den tarteak ditugunez, hori ez da betetzen, eta funtzioaren jarraitutasuna ziurtatuko dugu. Funtzioaren balioak nulua izan behar du muturretan, potentzial infinituaren eraginez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mrow></math> <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hala ere, bi ekuazioak linealki independenteak balira, lortutako emaitza tribiala litzateke; beraz, bata bestearen konbinazio lineala izatea bilatu behar dugu, eta hori lortzeko sistemaren determinantea zerorekin berdindu dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi></mrow></mfrac></mrow></math> dela eta, <math display=\"inline\"><mrow><mn>2</mn><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>k</mi><mi>a</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math> bete behar da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>k</mi><mn>2</mn></msup></math>-ren definizioa berreskuratzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mo>⇒</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hauek dira energiak har ditzakeen balioak. Konstante bat bestearen mende idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hasierako ekuazioan ordezkatuz, energia <math display=\"inline\"><mi>n</mi></math>-ren mende egoteko murrizketarekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>a</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>i</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa honela ere idatz dezakegu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina ez dakigu funtzio hau normalizatuta dagoen ala ez."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow><mfrac><mi>a</mi><mn>2</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karratua angelu bikoitzaren bidez ordezkatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow><mfrac><mi>a</mi><mn>2</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kosinua integratzean, deuseztatzen den sinu bat lortzen dugu; beraz, integralaren balioa <math display=\"inline\"><mfrac><mi>a</mi><mn>2</mn></mfrac></math> da, eta funtzioa normalizatuta egon dadin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mo>⇒</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo>−</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> para valores impares</mtext></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> para valores pares</mtext></mrow></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorria <math display=\"inline\"><mrow><mi>−</mi><mfrac><mi>x</mi><mn>2</mn></mfrac></mrow></math>-n ere koka dezakegu, eta honela idatzi:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "2006ko ekaina, IEM/Fisika Modernoa, 4. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> uneko uhin-funtzioa, <math display=\"inline\"><mi>a</mi></math> zabalerako potentzial-putzu bateko partikula batena, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> da (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math> konstantea)."
      },
      {
       "mota": "testua",
       "html": "a) Normalizatu funtzioa."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu egoera honen energia neurtzean oinarrizko egoeraren energiaren balioa lortzeko probabilitatea."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>a</mi></math> zabalerako putzu baterako egoera egonkorrak: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mi>a</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Formalki, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> den, eta <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∣</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mi>φ</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> kasurako: <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><mo>⋅</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>a</mi></msubsup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>0</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mi>π</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> lortzeko probabilitatea, energiaren neurketa batean: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.81</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "2007ko ekaina, IEM/Fisika Modernoa, 4. arazoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat potentzial-putzu infinitu batean dago, <math display=\"inline\"><mi>L</mi></math> zabalerakoan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barrutian kokatua. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioa nulua da, barruti honetan izan ezik: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, non konstantea baita. Kalkulatu posizioaren ziurgabetasuna, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> konstantea da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean, eta zero gainerakoan. Normalizazioa: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> Posizioaren batez besteko balioa: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>L</mi><mo>,</mo></mrow></math> espero zitekeen bezala, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartearen erdian. Eta <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>24</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><msup><mi>L</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Ziurgabetasuna: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mrow><mfrac><mn>7</mn><mn>12</mn></mfrac><mo>−</mo><mfrac><mn>9</mn><mn>16</mn></mfrac></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mfrac><mn>1</mn><mn>48</mn></mfrac></msqrt><mo>≈</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa osoak (2006ko ekaina: 6 arazo; 2007ko ekaina: 5 arazo, biak ebazpen ofizialarekin) 7. kapituluan daude, &quot;2006ko ekaina&quot; eta &quot;2007ko ekaina&quot; ataletan. Kapitulu honetako &quot;16.2. ariketa&quot; 2007ko ekaineko 5. arazoaren berdina da funtsean (beste notazio batekin, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>↔</mo><msub><mi>φ</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>↔</mo><msub><mi>E</mi><mi>n</mi></msub></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>16.2. ariketa.</strong> <math display=\"inline\"><mi>m</mi></math> masako partikula kargatu bat <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> artean higitzen da, potentzial-putzu infinitu batean. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean bere egoera hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kalkulatu probabilitate-dentsitatearen denborarekiko bilakaera <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math>-n."
    },
    {
     "mota": "testua",
     "html": "<em>Erantzuna.</em> Funtzioa eraldatzen dugu, hirugarren berretura ezabatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>B</mi></mrow></math> identitate trigonometrikoa erabiliz, <math display=\"inline\"><mrow><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math> hartuta, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac></mrow></math> lortzen dira. Ekuazio berria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sinua funtzio bakoitia denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Autofuntzio normalizatu baten forma orokorra <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oraindik ez dugu funtzioa bere osoan normalizatu. Horretarako, lortutako autofuntzioak erabiliko ditugu (egiaztapen gisa, emandako ekuazioa zuzenean hartuko dugu):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>9</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msubsup><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msubsup><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Autofuntzioak normalizatuta daudenez eta haien biderkaduren integrala deuseztatzen denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>9</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>10</mn><mi>L</mi></mrow><mn>32</mn></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>L</mi></mrow><mn>16</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> no está normalizada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Egiaztapen zuzena:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kuboa garatuz, eta <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi></mrow></math> erabiliz, honakora iristen gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>8</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>7</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>6</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integratzean, kosinu guztiak deuseztatzen dira, eta hau geratzen zaigu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>⋅</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mi>L</mi></mrow><mn>16</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> comprobado </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa normalizatzen dugu, integralaren balioaren erro karratuaz zatituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Haren bilakaera denboraren arabera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> puntuan hartzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Probabilitate-dentsitatea kalkulatzeko, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mover><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>9</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub></mrow><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Analisi estatistikoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Probabilitate-banaketa"
    },
    {
     "mota": "testua",
     "html": "Alde batetik, uhin-interpretazioaren arabera: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Bestetik, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Bi posizioren artean egoteko probabilitatea aztertu nahi badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espero den balioa"
    },
    {
     "mota": "testua",
     "html": "Aldagai jarraitu batentzat, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Maximo bakarra duen grafiko simetriko batentzat, maximo hori espero den balioarekin bat dator; gainerako kasuetan, espero den balioak ez du zertan esanguratsua izan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desbiderapen estandarra"
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko dokumentua esaldi erdian mozten da hemen, formula osatu gabe. Ondoko itxiera azalpen propioa da, eta aurreko atalak (&quot;espero den balioa&quot;) erdizka utzitakoa era estandarrean osatzen du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> espero den balioak probabilitate-dentsitatearen zentroa non dagoen dio, baina ez du ezer esaten zentro horren inguruko barreiaduraz. <strong>Desbiderapen estandarrak</strong>, <math display=\"inline\"><msub><mi>σ</mi><mi>x</mi></msub></math>, horixe bera neurtzen du: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren berezko zabalera <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>-ren inguruan."
    },
    {
     "mota": "testua",
     "html": "Estatistika klasikoan bezala, batezbestekoarekiko desbideratzearen karratuaren espero den balioaren erro karratu gisa definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>σ</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karratua garatuz, eta <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> konstante bat dela erabiliz (ez dago <math display=\"inline\"><mi>x</mi></math> integrazio-aldagaiaren mende):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>σ</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izan ere, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> definizioz. Hau da desbiderapen estandarra kalkulatzeko erarik praktikoena: nahikoa da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> espero diren bi balioak ezagutzea, kenketa karratua integralean berriro sartu beharrik gabe."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>σ</mi><mi>x</mi></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Definizio bera, <math display=\"inline\"><mi>p</mi></math> aldagaiari aplikatuta <math display=\"inline\"><mi>x</mi></math>-ri beharrean (<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik momentuen espazioko probabilitate-dentsitatea, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren Fourier-en transformatutik lortua), <math display=\"inline\"><msub><mi>σ</mi><mi>p</mi></msub></math> ematen du — eta, hain zuzen ere, bi desbiderapen estandar hauen bidez formulatzen da zorrozki lehenago sartu dugun ziurgabetasunaren printzipioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>σ</mi><mi>x</mi></msub><mo>⋅</mo><msub><mi>σ</mi><mi>p</mi></msub><mo>≥</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Aurreko ataleko <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math> desberdintza erlazio hau bera da, hain zuzen, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math> dagozkien desbiderapen estandartzat hartuta.)"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Azterketa ofizialak (UPV/EHU)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "fis mo exam emparejados",
     "xehetasuna": "Introducción a la Estructura de la Materia (IEM) / Fisika Modernoa, ZTF-FCT, UPV/EHU. Azterketa ofizialak beren ebazpen ofizialekin, PDF garbian (ez argazkituta).",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Transkripzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa hauek enuntziatu <strong>eta</strong> ebazpen ofizial osoekin sartzen dira, erabiltzailearen erabaki espresuz (hirugarrenen iturriekin ez bezala, hala nola Gratton edo Eisberg-Resnick, erreferentzia gisa soilik erabiltzen baitira). Ebazpen ofizialak eskuz idatzita daude (eskaneatuta, letra argiz); zehatz-mehatz transkribatzen dira. Galdera batek jatorrizko dokumentuan ebazpenik ez duenean, argi eta garbi adierazten da, asmatu beharrean."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "2005eko ekaina",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntu) Prozesu nuklear bortitz batean, uranio atomo batek (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></math>) bere elektroi guztiak galtzen ditu. Geroxeago, U-aren nukleoak elektroi bakar bat harrapatzen du, bere inguruan ia geldi dagoena."
      },
      {
       "mota": "testua",
       "html": "a) Zein zeinutakoa da nukleo-elektroi sistemaren energia-aldaketa?"
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu prozesuan jaulkitako edo xurgatutako fotoiaren energia maximoa."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu, fotoiaren energia maximoaren kasuan, elektroiaren &quot;orbitaren&quot; erradioa, eta estimatu haren abiadura (iruzkindu azken kalkulu horren emaitza)."
      },
      {
       "mota": "testua",
       "html": "(H-aren oinarrizko egoeraren energia: <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Nukleo-elektroi sistemaren energia txikitu egiten da, lotu gabeko egoera batetik egoera lotu batera igarotzean."
      },
      {
       "mota": "testua",
       "html": "b) Elektroia U-aren nukleoak eta elektroiak osatutako atomo hidrogenoidearen oinarrizko egoera egonkorrera (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>) igaroko da; egoera egonkorren energiak honela ematen dira: <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>∝</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msup><mi>E</mi><mi>H</mi></msup><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><msup><mi>E</mi><mi>H</mi></msup></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math> egoeraren energia baita (hau da, <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV): <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>92</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>1</mn></mfrac><mo>=</mo><mi>−</mi><mn>115</mn><mspace width=\"0.167em\"></mspace><mn>110</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>−</mi><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math> Jaulkitako fotoiaren energia, <math display=\"inline\"><mrow><msub><mi>E</mi><mtext mathvariant=\"normal\">inic</mtext></msub><mo>=</mo><mn>0</mn></mrow></math> izanik (elektroia geldi eta lotu gabe): <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">inic </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) &quot;Orbitaren&quot; erradioa, Bohr-en teoriaren arabera, alderantziz proportzionala da <math display=\"inline\"><mi>Z</mi></math>-rekiko: <math display=\"block\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>=</mo><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></msub><mfrac><mn>1</mn><mi>Z</mi></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>Z</mi></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0.53</mn></mrow></math> Å Bohr-en erradioa baita: <math display=\"block\"><mrow><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></msub><mo>=</mo><mn>0.53</mn><mspace width=\"0.167em\"></mspace><mfrac><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>92</mn></mfrac><mo>=</mo><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren hutsunea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "c) atalak eskatzen dituen abiaduraren zenbakizko estimazioa eta iruzkina ebazpen ofizial eskaneatuak espresuki garatzen ez duen zerbait dira (erradioaren kalkuluaren ondoren gelditzen da). Hemen ez da asmatzen: <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>∝</mo><mfrac><mn>1</mn><mi>Z</mi></mfrac></mrow></math> hain txikia izanik, espero daitekeen emaitza <math display=\"inline\"><mrow><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>≈</mo><mi>Z</mi><mi>α</mi><mo>≈</mo><mfrac><mn>92</mn><mn>137</mn></mfrac><mo>≈</mo><mn>0.67</mn></mrow></math> da, hots, <math display=\"inline\"><mi>c</mi></math>-ren zati nabarmena — Bohr-en eredu ez-erlatibistak fidagarria izateari uzten dio erregimen horretan, eta hori da, ziurrenik, enuntziatuak eskatzen zuen &quot;iruzkina&quot;."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 puntu) Eztabaidatu Boltzmann-en konstantearen balioa zehazteko metodo bat."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 puntu) Marteko ustezko biztanleek lau hatz baino ez dituzte esku bakoitzean, baina fisika kuantikoaren ezagutza onak lortu dituzte. Zein balio numeriko agertzen da, gutxi gorabehera, haien liburuetan egitura finaren konstantearen alderantzizkoarentzat? (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mi>c</mi></mrow></mfrac></mrow></math>)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Ebatzi gabe",
     "blokeak": [
      {
       "mota": "testua",
       "html": "2. eta 3. problemek ez dute ebazpenik jatorrizko dokumentuan (ebazpenen 12 orrialde eskuizkribatuek zuzenean 1., 4., 5., 6. eta 7. problemetara jotzen dute). Ez da ebazpena asmatzen: enuntziatua baino ez da transkribatzen."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 puntu) Irudian protoi baten uhin-funtzioaren <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> moduluaren karratua adierazten da une jakin batean, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å izanik. Protoiaren batez besteko abiadura <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> m/s da. Adierazi zein izango den <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioaren gutxi gorabeherako zabalera — uhin-zenbakiaren <math display=\"inline\"><mi>k</mi></math> (<math display=\"inline\"><mrow><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac></mrow></math>) balio desberdinen probabilitate-dentsitatea adierazten duena —, eta eztabaidatu <math display=\"inline\"><mi>k</mi></math> ardatzaren zein eskualdetan egongo den lokalizatuta."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Indeterminazio-printzipioaren arabera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>; beraz, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioa <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>-n zentratuta dago, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math> Zenbakizko balioekin, <math display=\"inline\"><mi>m</mi></math> protoiaren masa izanik (<math display=\"inline\"><mrow><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Beraz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>1.6</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> inguruan dago lokalizatuta (<math display=\"inline\"><mi>k</mi></math> ardatzaren eskualde positiboan), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> zabalerarekin."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntu) Irudian partikula baten hainbat egoera egonkorren uhin-funtzioak erakusten dira (hiru kurba, kurbadura gero eta handiagoarekin: lehena nodorik gabe, bigarrena bi nodorekin, hirugarrena hainbat nodorekin eta oszilazio azkarragoekin)."
      },
      {
       "mota": "testua",
       "html": "a) Haietako zein da energia altuenekoa, eta zergatik?"
      },
      {
       "mota": "testua",
       "html": "b) Arrazoitu zein den aurkeztutakoen artean energia baxueneko egoera."
      },
      {
       "mota": "testua",
       "html": "c) Marraztu presentzia-probabilitatearen dentsitatea bigarren uhin-funtziorako."
      },
      {
       "mota": "testua",
       "html": "d) Identifikatu erakutsitako uhin-funtzioetako inflexio-puntuak."
      },
      {
       "mota": "testua",
       "html": "e) Ondoriozta al daiteke partikularentzat klasikoki debekatutako eskualderen baten existentzia?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Energia altuena hirugarrenari dagokio, haren bigarren deribatua, <math display=\"inline\"><msup><mi>φ</mi><mo>″</mo></msup></math>, handiagoa baita, eta, denborarekiko independentea den Schrödinger-en ekuazioaren arabera, <math display=\"block\"><mrow><msup><mi>φ</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> horrek <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> diferentziak handiagoak direla adierazten du."
      },
      {
       "mota": "testua",
       "html": "b) Arrazoi beragatik, energia baxuenekoa hiruretatik lehena izan behar da."
      },
      {
       "mota": "testua",
       "html": "c) Bigarren uhin-funtzioaren probabilitate-dentsitatea bi nodo dituen funtzio baten karratua da: bi lobulu, tartean nodo bakoitzean zero banarekin."
      },
      {
       "mota": "testua",
       "html": "d) Inflexio-puntuak <math display=\"inline\"><msup><mi>φ</mi><mo>″</mo></msup></math>-k zeinua aldatzen duen puntuak dira."
      },
      {
       "mota": "testua",
       "html": "e) Klasikoki debekatutako eskualdeak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> negatiboa den egoerari dagozkio, eta haietan kurbadurak zeinua aldatzen du <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren zeinuarekiko. Hiru kasuetan, debekatutako eskualde horiek muturreneko inflexio-puntuen ezkerrean eta eskuinean daude."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntu) Energiaren 1000 neurketa esperimental egin dira <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, <math display=\"inline\"><mi>m</mi></math> masako partikula batena, zeina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> arteko potentzial-kutxa batean konfinatuta baitago. 600 kasutan <math display=\"inline\"><mrow><msub><mi>E</mi><mi>a</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> energia lortu zen, eta 400 kasutan <math display=\"inline\"><mrow><msub><mi>E</mi><mi>b</mi></msub><mo>=</mo><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub></mrow></math> lortu zen."
      },
      {
       "mota": "testua",
       "html": "a) Emaitza hauek unibokoki zehazten al dute partikularen <math display=\"inline\"><mi>ψ</mi></math> uhin-funtzioa?"
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu partikularen posizioaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> batez besteko balioa denboraren funtzioan."
      },
      {
       "mota": "testua",
       "html": "c) Aldatzen al dira denborarekin energiaren neurketei lotutako probabilitateak?"
      },
      {
       "mota": "testua",
       "html": "(Suposatu uhin-funtzioaren balioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n erreala dela.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, eta <math display=\"inline\"><mrow><msub><mi>E</mi><mi>a</mi></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>600</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>400</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math> Honek EZ du <math display=\"inline\"><mi>ψ</mi></math> unibokoki zehazten: koefizienteen moduluak baino ez ditu finkatzen, ez haien fase erlatiboak. Idatziz <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub></mrow></msup><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> fase globala arbitrarioa da; beraz, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> aukera daiteke (horrek <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>/</mi><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erreal eta positibo egiten du). Formarik orokorrena, orduan, <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><mi>ε</mi></mrow></msup><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>ε</mi></math> datu hauek zehaztu gabe uzten duten fase erlatibo bat baita."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mspace width=\"0.222em\"></mspace><mi>x</mi><mspace width=\"0.222em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> hau <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></math> erabiliz deskonposatzen da (<math display=\"inline\"><mi>x</mi></math>-ren batez besteko balioa edozein egoera egonkorretan kutxaren erdian dago, simetriagatik), baita integral gurutzatua erabiliz ere: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mspace width=\"0.222em\"></mspace><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Gaiak batuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><msqrt><mfrac><mn>6</mn><mn>25</mn></mfrac></msqrt><mi>I</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ε</mi><mi>.</mi></mrow></math> Faseen <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></math> denbora-eboluzioa sartuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><msqrt><mfrac><mn>6</mn><mn>25</mn></mfrac></msqrt><mi>I</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>E</mi><mi>a</mi></msub></mrow><mi>ħ</mi></mfrac><mi>.</mi></mrow></math> Hau da, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> BAI aldatzen da denborarekin (kutxaren erdiaren inguruan oszilatzen du)."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><msub><mi>E</mi><mi>a</mi></msub></math> eta <math display=\"inline\"><mrow><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub></mrow></math> neurtzeko probabilitateak EZ dira aldatzen denborarekin, anplitude konplexuen moduluen karratuak baitira, <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math> biderkatzen dituztenenak: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>a</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>2</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntu) Elkarrekintzarik gabeko <math display=\"inline\"><mi>N</mi></math> partikulaz osatutako sistema bat dugu; partikula bakoitzak lau egoera ditu, energia hauekin: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu sistemaren energia totala tenperatura &quot;altuen&quot; eta tenperatura &quot;baxuen&quot; limitean (eta zehaztu limite horien esanahi fisikoa)."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu partikula jakin batek limite horietan <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> eta <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> energiak izateko probabilitatea, eta erlazionatu emaitza aurreko atalekoarekin."
      },
      {
       "mota": "testua",
       "html": "c) (<strong>1 puntu gehigarri</strong>) Zientzialari disidente batek iradokitzen du hiru direla, eta ez bi, energia nulua duten egoerak. Erakutsi auzia erabaki dezakeela bero espezifikoaren neurketak tenperatura altuetan eginez."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Partikula bakar baten partizio-funtzioa, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math> izanik: <math display=\"block\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mi>N</mi></math> partikulako sistemaren energia totala: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi>N</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow><mrow><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo></mrow></math> &quot;altua&quot; limitea</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo></mrow></math> &quot;baxua&quot; limitea</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>∞</mi></mrow></math>): <math display=\"block\"><mrow><mi>U</mi><mo>≈</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mo>,</mo></mrow></math> hau da, <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> K-ra doanean: partikula guztiak <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> oinarrizko egoerara erortzen dira."
      },
      {
       "mota": "testua",
       "html": "b) Energia bakoitzaren probabilitateak hauek dira: <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>2</mn><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math></strong> (<math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>≈</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>→</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>→</mo><mn>0</mn><mi>.</mi></mrow></math> Hau da, <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> K-rako probabilitatea 1 da partikula bere oinarrizko egoeran aurkitzeko — <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>-rekin koherentea."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math></strong> (<math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>→</mo><mn>4</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>→</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>→</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>→</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> Orduan, bistan denez, <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math>-rako: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>P</mi><mn>0</mn></msub><mo>⋅</mo><mn>0</mn><mo>+</mo><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> a) ataleko tenperatura altuko limitearekin koherentea."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Ebatzi gabe",
     "blokeak": [
      {
       "mota": "testua",
       "html": "c) atala (puntu gehigarria: zientzialari disidentea, energia nuluko hiru egoera vs. bi) ez dago ebatzita iturriaren 12 orrialde eskaneatuetan."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "2005eko iraila",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntu) Watt bateko potentzia duen lanpara ultramore bat (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) 10 m-ra dago 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>-ko azalera duen zesiozko plaka batetik, argia plakaren gainean perpendikularki erortzen delarik. Suposatzen da plakara iristen den fotoi bakoitzak elektroi bat erauzten duela:"
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu segundoko jaulkitako elektroi kopurua."
      },
      {
       "mota": "testua",
       "html": "b) Zein da jaulkitako elektroien energia maximoa, Cs-aren erauzte-lana 1.9 eV bada?"
      },
      {
       "mota": "testua",
       "html": "c) Nola aldatzen dira aurrez kalkulatutako magnitudeak, lanpara 5 metrora hurbiltzen bada?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> W <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> J s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>10</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>10</mn></mrow></math> cm<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>."
      },
      {
       "mota": "testua",
       "html": "a) Plakaren gaineko potentzia: <math display=\"block\"><mrow><msub><mi>P</mi><mi>S</mi></msub><mo>=</mo><mi>P</mi><mo>⋅</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Fotoi kopurua segundoko, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> izanik: <math display=\"block\"><mrow><msub><mi>N</mi><mi>γ</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>S</mi></msub><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mi>S</mi></msub><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mfrac><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/eV</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones/s</mtext></mrow><mi>.</mi></mrow></math> fotoi bakoitzeko elektroi batekin: <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>γ</mi></msub><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup></mrow></math> elektroi/s."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4.96</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.06</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> potentzia <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math>-rekin aldatzen da. Beraz, <math display=\"inline\"><mi>d</mi></math> erdira txikitzean, <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> 4 faktore batez handitzen da, eta gauza bera egingo du erauzitako elektroi kopuruak. Hala ere, energia zinetiko maximoa ez da aldatuko (<math display=\"inline\"><mi>λ</mi></math>-ren mende bakarrik dago, ez intentsitatearen mende)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntu)"
      },
      {
       "mota": "testua",
       "html": "a) Suposatuz uhin-bektoreen <math display=\"inline\"><mi>k</mi></math> espazioko funtzioa, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioari dagokiona, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela, frogatu <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ri dagokiona <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>x</mi><mn>0</mn></msub><mi>k</mi></mrow></msup></mrow></math> dela."
      },
      {
       "mota": "testua",
       "html": "b) Protoi baten uhin-funtzioa momentu linealaren espazioan honako hau da: <math display=\"block\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><mn>2</mn><msubsup><mi>p</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>/</mi><msub><mi>p</mi><mn>2</mn></msub></mrow></msup><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> kg m/s, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup></mrow></math> kg m/s eta <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>35</mn></mrow></msup></mrow></math> m/s baitira. Marraztu gutxi gorabehera <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioa, eta estimatu haren zabalera eta haren maximoaren kokapena."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Izan bedi <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Definizioz, <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> aldaketarekin: <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>y</mi><mspace width=\"0.222em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>y</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></mrow></math> izanik, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>10</mn></mrow></math> μm balioekin ( <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math>-tik <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></math> bidez itzulitako balioak): a) atalarekin konparatuz, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> honi dagokionak, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> forma du (<math display=\"inline\"><mi>φ</mi></math> funtzioa <math display=\"inline\"><mrow><mi>−</mi><mi>b</mi></mrow></math> translatatuta), non <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k Fourier-en transformatu gisa <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> funtzioa baitu. Hau gaussiar bat da, <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>-n zentratua; orduan badakigu <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> beste gaussiar bat izan behar dela, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren zabaleraren alderantzizko zabalerarekin. Eskema, beraz: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math>-n zentratua, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math> zabalerarekin, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>-n zentratua, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mi>a</mi></mrow></math> zabalerarekin."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>3950</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntu) Partikula bat <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial batean higitzen da, horma infinitu batekin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n eta <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> altuerako maila batekin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>-n (h.d. <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-rako, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>-rako, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>-rako). <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> maila lotuak dira (<math display=\"inline\"><mrow><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>); <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math> <math display=\"inline\"><mrow><msub><mi>E</mi><mi>D</mi></msub><mo>&gt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> betetzen duen maila bat da."
      },
      {
       "mota": "testua",
       "html": "a) Marraztu gutxi gorabehera <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> energiak dituzten egoera egonkorrei dagozkien uhin-funtzioak."
      },
      {
       "mota": "testua",
       "html": "b) Lortu <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren forma funtzionala <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math> energiako egoera egonkorrerako."
      },
      {
       "mota": "testua",
       "html": "c) Ba al dago <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math> artean baimendutako beste energia-mailarik?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k (<math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> energia, nodorik gabe) eta <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k (<math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> energia, nodo batekin) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> putzuaren barruan oszilatzen dute, eta esponentzialki txikitzen dira <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>-rako (egoera lotuak, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math>-rako: <math display=\"inline\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-rako; <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>&gt;</mo><mi>a</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>E</mi><mi>D</mi></msub></mrow></msqrt><mi>/</mi><mi>ħ</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>D</mi></msub><mo>−</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>/</mi><mi>ħ</mi></mrow></math> baitira. <math display=\"inline\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintzak <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> ematen du, hau da, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mi>B</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> Balioa eta deribatua <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>-n berdinduz (<math display=\"inline\"><mrow><msubsup><mi>ψ</mi><mi>D</mi><mrow><mtext mathvariant=\"normal\">I </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mi>ψ</mi><mi>D</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta haien deribatuak): <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> horrek <math display=\"inline\"><mrow><mi>C</mi><mo>,</mo><mi>D</mi></mrow></math> koefizienteak <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>-rekin erlazionatzen ditu (koefiziente global aske bat geratzen da: egoera ez denez lotua, ez da normalizagarria zentzu hertsian)."
      },
      {
       "mota": "testua",
       "html": "c) Bai: <math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> energietarako egoera egonkorrak ez daude lotuta, eta energia-espektroa jarraitua izango da."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2.5 puntu) Partikula baten uhin-funtzioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math> energia-mailak dituen potentzial harmoniko batean, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> oro har konplexuak izanik."
      },
      {
       "mota": "testua",
       "html": "a) Zein da probabilitatea, energia <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n neurtzean, emaitza <math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math> izateko?"
      },
      {
       "mota": "testua",
       "html": "b) Suposa dezagun orain <math display=\"inline\"><mrow><msub><mi>c</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> dela <math display=\"inline\"><mrow><mi>i</mi><mo>≥</mo><mn>2</mn></mrow></math>-rako. Jakina da energiaren batez besteko balioa <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn><mi>ħ</mi><mi>ω</mi></mrow></math> dela. Zein da partikularen energia neurtzean emaitza <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> izateko probabilitatea?"
      },
      {
       "mota": "testua",
       "html": "c) Aurreko atalean suposatutako hipotesi berberetan, suposa dezagun, gainera, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> erreala eta positiboa dela. Jakina da partikularen posizioaren batez besteko balioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>m</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> dela. Aurkitu <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Erabili egoera egonkor gisa: <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>α</mi><mi>/</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mi>x</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>≡</mo><mi>m</mi><mi>ω</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-ren batez besteko balioa <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> egoeran <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi><mo>&gt;</mo><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math>: neurtutako energia <math display=\"inline\"><mrow><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math>-ren gainetik egoteko probabilitatea <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math> da, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> baita neurtutako energia <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math> izateko probabilitatea."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><msub><mi>c</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> izanik <math display=\"inline\"><mrow><mi>i</mi><mo>≥</mo><mn>2</mn></mrow></math>-rako: <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mi>ħ</mi><mi>ω</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> normalizazioarekin: <math display=\"block\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>,</mo></mrow></math> hau da, hain zuzen, <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> lortzeko probabilitatea."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> erreala izanik, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup></mrow></math> hartuz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>c</mi><mn>0</mn><mo>*</mo></msubsup><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> c.c.</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mfrac><mn>1</mn><mrow><mn>4</mn><mi>α</mi></mrow></mfrac><mo>,</mo></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> gaiak simetriagatik anulatzen dira: edozein egoera egonkorretan <math display=\"inline\"><mi>x</mi></math>-ren batez besteko balioa 0 da); honela lortzen da <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msqrt><mi>α</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>m</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>8</mn><mi>α</mi></mrow></msqrt><mi>.</mi></mrow></math> Askatuz: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><msqrt><mn>8</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>/</mi><msqrt><mn>6</mn></msqrt></mrow></math>, hau da, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><msqrt><mn>6</mn></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; beraz, <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2.5 puntu) Erradiazioaren energia-dentsitaterako Planck-en banaketa forma honetan idatz daiteke (<math display=\"inline\"><mi>A</mi></math> konstante positibo bat da): <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Iruzkindu adierazpen honen eta gas ideal monoatomiko baten energia totala ematen duenaren arteko analogiak eta desberdintasunak: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bereziki, eztabaidatu parentesi arteko gaien esanahia, eta esan zein egoeratan izango den Planck-en banaketaren bigarren faktorea gasari dagokionaren antzekoa."
      },
      {
       "mota": "testua",
       "html": "b) Frogatu, <math display=\"inline\"><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></math>-en bidez Planck-en banaketaren maximoaren posizioa maiztasunaren funtzioan adierazten badugu, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> konstante jakin bat dela (Wien-en legea). Konstantea kalkulatzeko, erabili Eguzkia izar &quot;horia&quot; dela: haren erradiazioko uhin-luzerarik ugariena kolore horri dagokio. Kontsideratu uhin-luzera hori 6000 Å dela, eta Eguzkiaren azaleko tenperatura gutxi gorabehera 5000 K dela."
      },
      {
       "mota": "testua",
       "html": "c) Astronomo batek ikusten du izar jakin baten erradiaziorik ugariena 3 eV-ko fotoiei dagokiela. Kalkulatu izarraren tenperatura."
      },
      {
       "mota": "testua",
       "html": "d) Estimatu <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>/</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math> proportzioaren magnitude-ordena, hots, aurreko ataleko izarrean <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> egoeretan dauden hidrogeno atomoena. (Hidrogeno atomoaren ionizazio-energia <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV da.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Bi kasuetan, energia totala honako hau da: (&quot;modu&quot; edo askatasun-gradu kopurua) <math display=\"inline\"><mi>×</mi></math> (modu bakoitzeko batez besteko energia). Gasean, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> askatasun-graduen kopuru totala da (<math display=\"inline\"><mi>N</mi></math> atomo, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> askatasun-gradu bakoitzeko batez besteko energia). Planck-enean, lehen parentesia, <math display=\"inline\"><mrow><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi></mrow></math>, modu (uhin baimendu) kopuruari dagokio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barruan, norabideak eta polarizazioa kontatuz; bigarrena, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, maiztasun horretako oszilatzaile baten batez besteko energia da: maiztasunaren mende dago, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> ez bezala. Tenperatura altuetan (<math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><mi>ν</mi><mo>≪</mo><mn>1</mn></mrow></math>) gasarenaren antzekoa izan behar du, eta hala da: <math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mi>ν</mi><mn>3</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>ν</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></msub><mo>=</mo><mn>0</mn></mrow></math> ezarriz: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><msup><mi>ν</mi><mn>2</mn></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>ν</mi><mn>3</mn></msup><mi>β</mi><mi>h</mi><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>−</mo><mfrac><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ekuazio horrek <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte</mtext></mrow></mrow></math> finkatzen du (tenperaturarekiko independentea: Wien-en legea). Zenbakizko balioekin, <math display=\"inline\"><mrow><msub><mi>C</mi><mtext mathvariant=\"normal\">Wien</mtext></msub><mo>=</mo><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub></mrow></mfrac></mrow></math> izanik: <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>510</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5700</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>4.92</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>4.9</mn></mrow></math>: <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>4.9</mn><mrow><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4.9</mn></mfrac><mo>=</mo><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>7100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV. Degenerazioaren eragina arbuiatuz: <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo>×</mo><mn>13.6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1.6</mn><mo>×</mo><mn>13.6</mn><mo>×</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mo>≈</mo><mn>8.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Enuntziatuarekiko desadostasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Enuntziatuak <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>6000</mn></mrow></math> Å eta <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">sol </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>5000</mn></mrow></math> K ematen ditu, baina eskuz idatzitako ebazpen ofizialak <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>5100</mn></mrow></math> Å eta <math display=\"inline\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub><mo>=</mo><mn>5700</mn></mrow></math> K erabiltzen ditu (horiekin <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>4.92</mn></mrow></math> zenbakizko emaitza autokoherentea da). Ebazpenaren balioak bere horretan transkribatzen dira, enuntziatu inprimatuarekin bat etortzera behartu gabe."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "2006ko ekaina",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Azaleko tenperatura 5000 K-ekoa duen izar batek bere erradiantziaren maximoa 5800 Å-en du. Metal batean efektu fotoelektrikoa sortzeko, 500 K-eko gorputz beltz baten erradiazioa erabiltzen da."
      },
      {
       "mota": "testua",
       "html": "a) Zehaztu 500 K-eko gorputz beltzaren erradiazioaren maximoari dagokion uhin-luzera."
      },
      {
       "mota": "testua",
       "html": "b) Metalaren erauzte-lana 0.214 eV bada, kalkulatu gorputz beltzak jaulkitako fotoien uhin-luzera maximoa, metalean fotoelektroiak sortzeko gai direnena."
      },
      {
       "mota": "testua",
       "html": "c) Marraztu eskema batean gorputz beltzaren <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erradiantzia, eta itzaleztatu metal horretan efektu fotoelektrikoa sortzeko baliagarriak diren fotoien espektroaren eskualdea."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><msub><mi>T</mi><mo>⋆</mo></msub><mo>=</mo><mn>5000</mn></mrow></math> K, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><mo>=</mo><mn>5800</mn></mrow></math> Å."
      },
      {
       "mota": "testua",
       "html": "a) Wien-en legea: <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>T</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>C</mi></mrow></math>; beraz, <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.9</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>500</mn></mrow></math> K-eko gorputz beltzarentzat: <math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>T</mi><mo>=</mo><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><msub><mi>T</mi><mo>⋆</mo></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>0.214</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (atalase-maiztasun minimoa); beraz, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi><mi>/</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>W</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>0.214</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>58</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (Bat dator a) ataleko <math display=\"inline\"><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math>-ekin.)"
      },
      {
       "mota": "testua",
       "html": "c) Gorputz beltzaren <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eskeman, 500 K-etan, efektu fotoelektrikorako eskualde baliagarria <math display=\"inline\"><mrow><mi>ν</mi><mo>&gt;</mo><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> da (baliokidean, <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>): <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> denez, eskualde hori kurbaren maiztasun altueneko erdia da, maximoaren eskuinean geratzen dena."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Elektroi bat klasikoki deskribatu nahi da (<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>p</mi></math> erabiliz) <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> Å zabalerako kutxa batean. Elektroiak <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> m/s-ko abiadura du, hidrogeno atomoaren Bohr-en lehen orbitakoaren parekoa. <math display=\"inline\"><mi>x</mi></math>-ren neurketaren indeterminazioak (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>) 0.1 Å-en ordenakoa izan beharko luke."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu momentuaren neurketaren indeterminazioa, konparatu <math display=\"inline\"><mi>p</mi></math>-ren balioarekin, eta iruzkindu deskribapen klasiko honen baliozkotasuna."
      },
      {
       "mota": "testua",
       "html": "b) Marraztu eskalako eskema bat, adierazitako <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> duen uhin-pakete batena putzuaren barruan, eta beste eskema bat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioarena, momentuaren probabilitate-banaketa adierazten duena."
      },
      {
       "mota": "testua",
       "html": "c) Eztabaidatu futbol-zelai batean dabilen baloi baten higiduraren deskribapen klasikoaren baliozkotasuna (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>10</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>30</mn></mrow></math> m/s)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datuak: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>0.1</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> m/s, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow></math>. Indeterminazioz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mi>ħ</mi></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mfrac><mi>ħ</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow><mi>p</mi></mfrac><mo>∼</mo><mn>3</mn><mi>.</mi></mrow></math> Indeterminazioa oso handia da (<math display=\"inline\"><mi>p</mi></math>-ren ordenakoa): <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>p</mi></math>-ren balio definitu aldiberekoetan oinarritutako deskribapen bat ez da posible."
      },
      {
       "mota": "testua",
       "html": "b) Uhin-paketeak <math display=\"inline\"><mrow><mi>a</mi><mo>∼</mo><mn>1</mn></mrow></math> Å zabalerako putzua betetzen du; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> funtzioa oso zabala da, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math>-n zentratua, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mn>3</mn><mi>p</mi></mrow></math> zabalerarekin (<math display=\"inline\"><mi>p</mi></math>-ren beraren parekoa)."
      },
      {
       "mota": "testua",
       "html": "c) Baloiarentzat: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>30</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>30</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow></math>. <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mfrac><mi>ħ</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>33</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≪</mo><mi>p</mi><mi>.</mi></mrow></math> Deskribapen klasikoa zuzena da."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu)"
      },
      {
       "mota": "testua",
       "html": "a) Esan <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> uhin-funtzioak (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n) partikula aske bat adieraz dezakeen, ala soilik potentzial harmonikoko partikula baten oinarrizko egoera. Arrazoitu erantzuna."
      },
      {
       "mota": "testua",
       "html": "b) Aurreko kasuetako edozeinetan, eztabaidatu lotutako probabilitate-banaketaren denbora-eboluzioa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Bai, bietako edozein adieraz dezake: edozein funtzio (arrazoizko) uhin-funtzio baliagarria izan daiteke une jakin batean. Sistemak (<math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover></math> hamiltondarrak) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zehazten du (denbora-eboluzioa), baina ez hasierako baldintzak."
      },
      {
       "mota": "testua",
       "html": "b) <strong>Partikula askea bada</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Fourier-en integral gisa adierazi behar da (<math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover></math> edo <math display=\"inline\"><mover><mi>p</mi><mo accent=\"true\">̂</mo></mover></math>-ren autoegoeretan deskonposatuta): <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Hau klasean egin zen <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> uhin-funtziorako, zeina abiadura batez higitzen den uhin-pakete bati baitagokio, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mi>/</mi><mi>m</mi></mrow></math> batez bestekoaz. Kasu honetan <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; orduan paketea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n zentratuta geratzen da, pixkanaka zabalduz (forma gaussiar bera, gero eta zabalagoa eta baxuagoa)."
      },
      {
       "mota": "testua",
       "html": "<strong>Potentzial harmoniko baten oinarrizko egoera bada</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> izanik), soluzioa hau litzateke: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> probabilitate-banaketa konstante mantenduko litzateke denboran."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Partikula baten uhin-funtzioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n, <math display=\"inline\"><mi>a</mi></math> zabalerako potentzial-putzu batean, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> da (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math> konstantea)."
      },
      {
       "mota": "testua",
       "html": "a) Normalizatu funtzioa."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu egoera honen energia neurtzean oinarrizko egoeraren energiaren balioa lortzeko probabilitatea."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>a</mi></math> zabalera duen putzu baterako egoera egonkorrak: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mi>a</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Formalki, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∣</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mi>φ</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-erako: <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><mo>⋅</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>a</mi></msubsup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>0</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mi>π</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> lortzeko probabilitatea, energiaren neurketa batean: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.81</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntu) Oszilatzaile harmoniko kuantiko bat hartuko dugu, dimentsio bakarrekoa, potentzial honek deskribatua: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, partikula uhin-funtzio honek definitzen du: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> autofuntzio normalizatuak baitira, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math> energia-autobalioekin."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu <math display=\"inline\"><mi>A</mi></math> konstantearen balio bat, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> normalizatuta egon dadin."
      },
      {
       "mota": "testua",
       "html": "b) Lortu denboraren mendeko <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioaren adierazpen bat, <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math>-ren funtzioan."
      },
      {
       "mota": "testua",
       "html": "c) Kalkulatu energiaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> itxarondako balioa, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k deskribatutako partikularena. Aldatzen al da balio hori denborarekin?"
      },
      {
       "mota": "testua",
       "html": "d) Energia-neurketa bakar bat egiten bada <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, zein da probabilitatea lortutako balioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-ren berdina izateko?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>φ</mi><mi>n</mi></msub></math>-ak ortonormalak dira; beraz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Ψ</mi><mo>∣</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Ψ</mi><mo>∣</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mi>A</mi><msqrt><mn>2</mn></msqrt><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> izanik: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>2</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>E</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>5</mn><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> Ez da aldatzen denborarekin: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> probabilitateak egonkorrak dira."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Prob</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> izan ere, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><msub><mi>E</mi><mi>n</mi></msub></mrow></math> da edozein <math display=\"inline\"><mi>n</mi></math>-tarako (energia-neurketa baten balio posibleak beti <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math>-etako bat dira)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntu) <math display=\"inline\"><mi>N</mi></math> partikula bereizgarriko sistema batean, partikulek bi energia-maila dituzte: <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu bero espezifikoa (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>T</mi></mrow></math>) tenperaturaren funtzioan."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu bi egoeren okupazio-probabilitateen arrazoia tenperatura altu eta baxuetan."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> izanik: <math display=\"block\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><munder><mo>∑</mo><mi>j</mi></munder><msub><mi>ε</mi><mi>j</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow><mrow><munder><mo>∑</mo><mi>j</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><mi>k</mi><mi>T</mi></mrow></math> bada (tenperatura baxuak): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (partikula guztiak oinarrizko egoeran daude)."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><mi>k</mi><mi>T</mi></mrow></math> bada (tenperatura altuak): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>→</mo><mn>0</mn></mrow></math> (bi egoeretan gutxi gorabehera partikula kopuru bera dago)."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><mi>k</mi><mi>T</mi></mrow></math> denean (<math display=\"inline\"><mi>T</mi></math> baxuak), arrazoi hau <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><mi>k</mi><mi>T</mi></mrow></math> denean (<math display=\"inline\"><mi>T</mi></math> altuak), <math display=\"inline\"><mrow><mo>→</mo><mn>1</mn></mrow></math>. Adibidez, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>1</mn></mrow></math> eV eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1000</mn></mrow></math> K izanik: <math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><mi>k</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>0.025</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>/</mi><mn>300</mn><mrow><mtext mathvariant=\"normal\">K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>0.0833</mn></mfrac><mo>≈</mo><mn>12</mn><mo>≫</mo><mn>1</mn><mo>,</mo></mrow></math> hau da, tenperatura baxuen erregimenean gaude."
      },
      {
       "mota": "testua",
       "html": "a) (jarraipena) <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≪</mo><mn>1</mn></mrow></math> denean (<math display=\"inline\"><mi>T</mi></math> altuak): <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>1</mn></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math> doanean. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≫</mo><mn>1</mn></mrow></math> denean (<math display=\"inline\"><mi>T</mi></math> baxuak): <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren forma hau (Schottky-ren anomalia) energia totala bornatua duten sistemen tipikoa da: hazkunde esponentziala tenperatura baxuetan, kuantizazioaren ondorioz, eta tenperatura altuetan sistemak ezin du energia mugarik gabe xurgatu; horregatik <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> bezala erortzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "2006ko iraila",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntu) Kontsidera dezagun Compton talka bat <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> uhin-luzerako fotoi baten eta <math display=\"inline\"><mi>P</mi></math> moduluko momentuaz higitzen den elektroi aske baten artean, fotoi erasotzailearen norabide eta noranzko berean."
      },
      {
       "mota": "testua",
       "html": "a) Ondorioztatu, kasu honetarako, irteerako fotoiaren uhin-luzera sakabanatze-angeluarekin erlazionatzen duen adierazpena. Zer gertatzen da elektroia fotoiaren aurkako noranzkoan higitzen bada?"
      },
      {
       "mota": "testua",
       "html": "b) Zein da elektroiaren momentuak talkaren ondoren har dezakeen balio maximoa? Konparatu elektroia geldi dagoen kasuarekin. Kalkulatu kasu honetan erradiazio erasotzailearen uhin-luzera, fotoiaren sakabanatze-angelua <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> bada eta atzerakadako elektroiaren momentua <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math> bada."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Metodoa: elektroiaren berezko erreferentzia-sisteman (laborategiarekiko <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin higitzen dena), fotoi erasotzailearen maiztasuna Doppler efektu erlatibistak aldatzen du: <math display=\"block\"><mrow><msub><mi>ν</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>ν</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>λ</mi><mn>0</mn></msub></mrow></math> (elektroia fotoiaren noranzko berean higitzen delarik). Sistema horretan elektroia geldi dago; beraz, Compton-en formula estandarra aplikatzen da: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub></math> ordezkatuz: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (mismo sentido). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Elektroia fotoiaren aurkako noranzkoan higitzen bada, <math display=\"inline\"><mi>β</mi></math> alderantzikatu egiten da: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (sentido opuesto). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Zati honetarako (hasieran geldi dagoen elektroiaren kasu estandarrarekin alderatzen da): elektroiaren atzerakadako momentua maximoa da fotoia atzerantz sakabanatzen denean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>); kasu horretan Compton desplazamendua maximoa da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mi>h</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta momentuaren kontserbazioagatik <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mi>e</mi><mo>,</mo><mtext mathvariant=\"normal\">max</mtext></mrow></msub><mo>=</mo><mi>p</mi><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>/</mi><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>/</mi><msup><mi>λ</mi><mo>′</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Zenbakizko kalkulu osatugabea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "b)-ren azken zenbakizko kalkulua (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, atzerakadako momentua <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> aurkitzea) ezin izan da fidagarritasunez transkribatu: eskuz idatzitako iturriak kalkuluen azken lerroa mozten du."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(5 puntu) Franck-Hertz motako esperimentu batean, merkurioa hidrogeno atomikoaz ordezkatu delarik, maximoak bereizten dira galbanometrotik igarotzen den korrontean potentzial azeleratzailearen <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV eta <math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV balioetarako, eta jaulkitako erradiazioa espektroskopikoki analizatzen bada, 3 lerro espektral ikusten dira. Azaldu emaitza hauek."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Hidrogenoaren mailak: <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV; beraz, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3.4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1.51</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>0.85</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> kitzikapenari dagokio."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> kitzikapenari dagokio (posiblea talka zuzenean, energia nahikoarekin)."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-tik, atomoa hiru eratan desexzita daiteke ur-jauzian: <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mn>12.09</mn></math> eV jaulkitzen du), <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>2</mn></mrow></math> ( <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1.89</mn></mrow></math> eV jaulkitzen du) eta, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-ra iritsi ondoren, <math display=\"inline\"><mrow><mn>2</mn><mo>→</mo><mn>1</mn></mrow></math> ( <math display=\"inline\"><mn>10.2</mn></math> eV jaulkitzen du). Horiek dira, hain zuzen, ikusitako 3 lerro espektralak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntu) <math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mi>a</mi></math> zabalerako dimentsio bakarreko eskualde batean konfinatuta dago. Indeterminazio-printzipioa erabiliz, lortu partikularen energia minimoaren adierazpen bat. Kalkulatu energia minimo horren balioa <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm-rako, eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm-ko eskualde bateko elektroi batentzat."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> izanik: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Balio minimoa hartuz, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> kg eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><mn>0.1</mn></mrow></math> m-rako: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Elektroi batentzat (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><mn>9.11</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg), <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m izanik: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∼</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntu)"
      },
      {
       "mota": "testua",
       "html": "a1) <math display=\"inline\"><mi>m</mi></math> masako partikula bat, <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-rako, jatorrian zentraturiko putzu infinitu baten oinarrizko egoeran dago, putzuaren zabalera <math display=\"inline\"><mi>a</mi></math> izanik (hormak <math display=\"inline\"><mrow><mi>±</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>-n). Bat-batean, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n, putzuak zabalera <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>-ra aldatzen du. Aldaketaren ondoren uhin-funtzioa aurrekoaren berdina da. Irudikatu eskematikoki uhin-funtzioa aldaketaren aurretik eta ondoren. Energia neurtzen bada aldaketa gertatu eta berehala, zein da putzu berriaren oinarrizko egoeraren energiaren balioa aurkitzeko probabilitatea?"
      },
      {
       "mota": "testua",
       "html": "a2) Suposa dezagun <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n putzuaren hormak kentzen direla (partikula askea <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rako), hasierako baldintza berarekin: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = jatorrizko putzuaren oinarrizko egoera. Momentuaren autofuntzioak erabiliz, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "a&#x27;) Garatu <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi></mrow></math> eta aurkitu momentuen probabilitate-banaketa, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b&#x27;) Marraztu banaketa horren eskema, non duen maximoa zehaztuz."
      },
      {
       "mota": "testua",
       "html": "c&#x27;) Idatzi <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren adierazpen integrala, <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rako."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a1)</strong> Jatorrizko putzuaren oinarrizko egoera (<math display=\"inline\"><mi>a</mi></math> zabalera, 0-n zentratua): <math display=\"inline\"><mrow><msub><mi>ψ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>a</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n (bikoitia, nodorik gabe). Aldaketaren ondoren, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mn>0</mn><mo>+</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k forma bera du <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n, eta zero da putzu berriaren gainerakoan (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) — uhin-funtzioak ez du aldatzeko denborarik izan, potentzialak bakarrik."
      },
      {
       "mota": "testua",
       "html": "Putzu berriaren autoegoerak (<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> zabalera): <math display=\"block\"><mrow><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> impar</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> par</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> garatuz, <math display=\"inline\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msub><mi>ψ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> izanik (integrala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-ra murrizten da, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zero delako hortik kanpo). Gainezarpen-integrala <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-erako kalkulatuz (kosinuen biderkadura erabiliz), hau lortzen da: <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>32</mn><mrow><mn>9</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>0.36</mn><mo>,</mo></mrow></math> hau baita putzu berriaren oinarrizko egoeraren energia neurtzeko probabilitatea."
      },
      {
       "mota": "testua",
       "html": "<strong>a2)</strong> <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Kosinua esponentzialetan deskonposatuz eta integrala ebatziz (integrazio-mugak putzura murriztuta), sinu kardinal motako bi gairen batura lortzen da: <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msqrt><mrow><mi>π</mi><mi>ħ</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>+</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>/</mi><mi>a</mi><mo>+</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><mi>ħ</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (término simétrico)</mtext></mrow><mi>.</mi></mrow></math> Gai bakoitzak sinu kardinalaren karratuaren forma du, eta maximoak <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math>-n daude (han izendatzailea anulatzen da, baina limitea finitua da: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>). Eskema <math display=\"inline\"><msup><mtext mathvariant=\"normal\">sinc</mtext><mn>2</mn></msup></math> motako funtzio bat da, bi lobulu nagusi <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math>-n zentratuta dituena, eta bigarren mailako lobuluak alboetan."
      },
      {
       "mota": "testua",
       "html": "<strong>c&#x27;)</strong> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>x</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>p</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntu) <math display=\"inline\"><mi>m</mi></math> masako partikula bat, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial batean, uhin-funtzio honek deskribatutako egoeran aurkitzen da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>m</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>a</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Kalkulatu, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>m</mi></math> eta oinarrizko konstanteen bidez:"
      },
      {
       "mota": "testua",
       "html": "a) Partikularen energia."
      },
      {
       "mota": "testua",
       "html": "b) Potentziala: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Zer potentzial mota da?"
      },
      {
       "mota": "testua",
       "html": "c) Normalizazio-konstantea, <math display=\"inline\"><mi>A</mi></math>."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> balioak."
      },
      {
       "mota": "testua",
       "html": "e) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math> balioak."
      },
      {
       "mota": "testua",
       "html": "f) Aurreko balioetatik abiatuta, egiaztatu indeterminazio-printzipioak ezarritako muga."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>E</mi><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math>-rekin konparatuz: <math display=\"inline\"><mrow><mi>E</mi><mi>/</mi><mi>ħ</mi><mo>=</mo><mi>a</mi></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>a</mi><mi>ħ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>m</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math> izanik: <math display=\"block\"><mrow><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ħ</mi></mfrac><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>φ</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ħ</mi></mfrac><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>m</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Denborarekiko independentea den Schrödinger-en ekuazioan ordezkatuz, <math display=\"inline\"><mrow><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mo>″</mo></msup><mo>+</mo><mi>V</mi><mi>φ</mi><mo>=</mo><mi>E</mi><mi>φ</mi></mrow></math>: <math display=\"block\"><mrow><mi>ħ</mi><mi>a</mi><mi>φ</mi><mo>−</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>φ</mi><mo>+</mo><mi>V</mi><mi>φ</mi><mo>=</mo><mi>a</mi><mi>ħ</mi><mi>φ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-rekin alderatuta: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>4</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. Potentzial harmonikoa da."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>φ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><msqrt><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>a</mi></mrow><mrow><mi>π</mi><mi>ħ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (integrakizuna bakoitia da). Erabiliz <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mi>π</mi></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>α</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>a</mi><mi>/</mi><mi>ħ</mi></mrow></math> izanik: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) <math display=\"inline\"><mrow><mi>p</mi><mo>→</mo><mi>−</mi><mi>i</mi><mi>ħ</mi><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> izanik: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (integrakizuna bakoitia da ordezkapenaren ondoren). <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>-rako, <math display=\"inline\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mo>→</mo><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>∂</mi><mn>2</mn></msup><mi>/</mi><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> eta integral gaussiar bera erabiliz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><mi>m</mi><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>m</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><msqrt><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><msqrt><mrow><mi>ħ</mi><mi>m</mi><mi>a</mi></mrow></msqrt><mo>=</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> hau da, egoera honek indeterminazio-printzipioa <strong>saturatzen</strong> du (indeterminazio minimoko egoera bat da, pakete gaussiar bati dagokion bezala)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Atomo baten energia-mailen arteko banaketa tipikoa 1 eV-en ordenakoa da. Giro-tenperaturan dagoen atomo-gas ideal batentzat, degeneratu gabeko bi energia-mailarekin, 1 eV-ez banandurik, kalkulatu egoera kitzikatuan dauden atomoen kopuruaren eta oinarrizko egoeran dauden atomoen kopuruaren arteko arrazoia. Hidrogeno atomoarentzat, zein tenperaturatan izango genuke atomoen % 10 lehen maila kitzikatuan?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Giro-tenperaturan (<math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>293</mn></mrow></math> K, <math display=\"inline\"><mrow><mi>k</mi><mi>T</mi><mo>≈</mo><mn>0.0253</mn></mrow></math> eV): <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>0.0253</mn></mrow></msup><mo>≈</mo><mn>6.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Hidrogenorako, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV erabiliz, <math display=\"inline\"><mi>T</mi></math> askatzen da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0.1</mn><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> baldintzatik: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>10.2</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1.38</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mi>T</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>≈</mo><mn>70</mn><mspace width=\"0.167em\"></mspace><mn>876</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sinplifikazio-maila",
     "blokeak": [
      {
       "mota": "testua",
       "html": "6b)-ren kalkuluak hidrogenoa bi mailako sistema gisa tratatzen du (degeneraziorik gabe), enuntziatu orokorrean bezala, esplizituki sartu gabe <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math> degenerazio-faktorea, hidrogeno errealaren <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> mailari dagokiona; iturrian agertzen den bezala transkribatzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "2008ko ekaina",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Rutherford-en esperimentuan partikula sorta bat, <math display=\"inline\"><mi>α</mi></math> partikulena, urrezko xafla mehe baten gainean erortzen da."
      },
      {
       "mota": "testua",
       "html": "a) Kalkulatu zatidura hauen artean: <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> lodierako eraztun batean sakabanatutako partikulak <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>-n, eta <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> lodierako eraztun batean sakabanatutako partikulak <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>-n."
      },
      {
       "mota": "testua",
       "html": "b) Azaldu esaldi batean edo bitan zer den sekzio eraginkor diferentziala."
      },
      {
       "mota": "testua",
       "html": "c) Azaldu esaldi batean edo bitan zein den Rutherford-en esperimentuaren emaitzaren ezaugarri garrantzitsua eta zer ondorio atera daitezkeen atomoaren egiturari buruz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mi>θ</mi></math>-n sakabanatutako partikula kopurua proportzionala da <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekiko, eta <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> zabalerako eraztunaren azalera <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math> da. Hemendik, <math display=\"inline\"><mi>θ</mi></math> eta <math display=\"inline\"><msup><mi>θ</mi><mo>′</mo></msup></math> bi angelutan sakabanatutako partikulen arteko erlazioa <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>′</mo></msup><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mn>2.95</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Sekzio eraginkor diferentzialak, <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math>, angelu solidoaren unitateko sakabanatutako partikulen fluxua adierazten du, azalera-unitateko korronte erasotzailearekiko."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mi>α</mi></math> partikulen kopuru handi bat angelu handietara sakabanatzen da. Honek karga positiboaren kontzentrazioa dakar, atomoarena baino askoz bolumen txikiagoan."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntu) Hidrogeno masa bat argiztatzean, zeinak deuterio (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi></mrow></math>) eta tritio (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi></mrow></math>) kantitate bat baitauka, ikusten da, xurgapen-espektroan, H-ari dagozkion marrek bikoizketa jasaten dutela (efektu isotopikoa)."
      },
      {
       "mota": "testua",
       "html": "a) Eztabaidatu bikoizketa horien jatorria eta balioa (kontsideratu, adibidez, Lyman serieko lehen lerroaren bikoizketa, deuterioaren presentziaren ondorioz)."
      },
      {
       "mota": "testua",
       "html": "b) Kalkulatu Lyman serieko lehen lerroaren arteko banaketa, H hidrogenoarena eta bere isotopoarena (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi></mrow></math>)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Masa laburbildua honek ematen du: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>M</mi><mi>p</mi></msub><msub><mi>m</mi><mi>e</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Isotopoentzat, masa laburbildua aldatu egiten da, eta horrekin <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mi>/</mi><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>R</mi><mi>∞</mi></msub></mrow></math> koefizientea aldatzen da, jaulkipeneko <math display=\"inline\"><mi>λ</mi></math> uhin-luzera desberdinak sortuz, zein isotopotatik datorren arabera: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>M</mi><mi>p</mi></msub><mrow><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>M</mi><mi>p</mi></msub></mrow><mrow><mn>2</mn><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>M</mi><mi>p</mi></msub></mrow><mrow><mn>3</mn><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mi>.</mi></mrow></math> Lyman serieko lehen lerrorako: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>′</mo></msup><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><msub><mi>M</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg eta <math display=\"inline\"><mrow><msub><mi>R</mi><mi>∞</mi></msub><mo>=</mo><mn>0.01098</mn></mrow></math> nm<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> balioekin: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.008231</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><msup><mi>λ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.008236</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Uhin-luzeren diferentzia: <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>λ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.04</mn></mrow></math> nm."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntu) Hurrengo grafikoa elektroi bati dagokion hamiltondarraren normalizatu gabeko <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> autoegoera bat da: nulua <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-rako, sinusoidala bi maximorekin eta bi minimorekin (anplitude beherakorra) <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math> Å artean, eta leunki gutxituz <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><mi>x</mi></mrow></msup></math> eran <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>4</mn></mrow></math> Å-rako. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math> Å-ko posizioek hiru gune bereizten dituzte, non elektroiari lotutako energia potentziala konstantea baita bakoitzean. Grafikoaren neurri zuzenak hartuz, kalkulatu autofuntzio honi lotutako <math display=\"inline\"><mi>E</mi></math> energiaren balioa, eta energia potentzialaren <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhin-funtzioaren adierazpen analitikoak."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Uhin-funtzioa potentzial honetan dagoen elektroi bati dagokio: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>E</mi><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> izanik. Potentzial mota honetarako: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mo>;</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><mi>x</mi></mrow></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><msup><mi>I</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mi mathvariant=\"normal\">Ψ</mi><mtext mathvariant=\"normal\">II</mtext><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> muga-baldintzak aplikatuz, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>4</mn></mrow></math> Å izanik, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><msup><mi>k</mi><mo>′</mo></msup><mi>a</mi></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen dira. Azken erlazio horrek zenbakiz lortzea ahalbidetzen du <math display=\"inline\"><mi>E</mi></math>-ren edo <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math>-ren balio posibleak: <math display=\"block\"><mrow><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Grafikoaren neurrietatik abiatuta, I. eskualdean <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>2.1</mn></mrow></math> Å; beraz, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mn>2.1</mn><mo>=</mo><mn>0.95</mn><mi>π</mi></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. Hortik energia estimatzen da: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><mo>≈</mo><mn>2.16</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> Uhin-funtzioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.95</mn><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k ematen du (normalizatu gabe, <math display=\"inline\"><mi>x</mi></math> Å-etan). <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik eta lortutako <math display=\"inline\"><mi>E</mi></math> baliotik, hau kalkulatzen da: <math display=\"block\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>≈</mo><mn>6.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>4000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> Kalkulu hau oso sentikorra da <math display=\"inline\"><mi>λ</mi></math>-rentzat neurtzen den balioarekiko; edonola ere, 2 Å baino handiagoa izan behar du."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se encuentra en un pozo infinito unidimensional de anchura <math display=\"inline\"><mi>a</mi></math> descrito por el potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> en otro caso. Supongamos <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean partikula hemen kokatzen dela <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi><mi>/</mi><mn>4</mn></mrow></math> barrutia eta por deskribatua: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>4</mn><mi>a</mi></mfrac></msqrt><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> en otro caso</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Si se mide la energía, ¿qué valores se observan y con qué Ba al dago ikusten ez den energiaren autobaliorik? inoiz ez?"
      },
      {
       "mota": "testua",
       "html": "b ) Energia alderantzizkoaren espero zen balioaren adierazpena eman <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mi>/</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un autoestado; se expresa como combinación de los autoestados del pozo, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>. Los coeficientes: <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>4</mn></mrow></msubsup><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><msqrt><mfrac><mn>4</mn><mi>a</mi></mfrac></msqrt><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>4</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Las probabilidades de medir cada <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math> son <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>32</mn><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>8</mn><mi>m</mi></mrow></math> (<math display=\"inline\"><mi>m</mi></math> entero), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mrow><mn>8</mn><mi>m</mi></mrow></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: los valores de energía con <math display=\"inline\"><mi>n</mi></math> múltiplo de 8 nunca neurtuko dira."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>∑</mo><mfrac><mn>32</mn><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>16</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>∑</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mfrac><mn>1</mn><msub><mi>E</mi><mi>n</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>64</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>π</mi><mn>4</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.167</mn><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> usando la fórmula dada <math display=\"inline\"><mrow><mn>32</mn><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup><msubsup><mo>∑</mo><mn>1</mn><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>n</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.167</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Considerar un sistema formado por <math display=\"inline\"><mi>N</mi></math> dipolos distinguibles con momento dipolar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Al aplicar un campo eléctrico <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>, la energía electrostática asociada al momento dipolar es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>p</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. En nuestro sistema kontuan hartuko dugu dipoloak zein hurbilketatan diren paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) o anti-paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) al eremu elektrikoa aplikatuta. Unerako espresio bat lortzea dipolar total <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></msubsup><msub><mi>p</mi><mi>i</mi></msub></mrow></math> a partir de la expresión: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>F</mi></math> es la energía libre del sistema."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con solo dos orientaciones, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>, cada una lleva asociado un nivel de energía <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mi>p</mi><mi>E</mi></mrow></math>. La función de ( partizioa ) dipoloaren bidez <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Helmholtzren energia librea: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta ahí: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>=</mo><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Junio 2010",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Un alumno pretende analizar el comportamiento cuántico de un pequeño oscilador, que consiste en un objeto de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math> g de masa que vibra con una amplitud máxima de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></math> cm a la 1.000 Hz-ko maiztasuna."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es aproximadamente el número cuántico del sistema en el Egoera deskribatua?"
      },
      {
       "mota": "testua",
       "html": "b ) Zein da ( energia bere oinarrizko egoerako ) eVan? Konparatu batez besteko energia zinetikoa duen balio hau, molekula batena oxigenoa giro tenperaturan."
      },
      {
       "mota": "testua",
       "html": "c ) Zein litzateke bere zabalera oinarrizko egoeran, deskribatzen bada osziladore klasiko bat bezala?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1000</mn></mrow></math> Hz."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>A</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mn>6.62</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>n</mi><mo>≈</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo>×</mo><msup><mn>10</mn><mn>12</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mn>13</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El estado fundamental corresponde a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>h</mi><mi>ν</mi><mo>=</mo><mn>3.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>O</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≈</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>0.04</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) En un átomo de Bohr ficticio el electrón está sometido a <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>C</mi><mi>/</mi><msup><mi>r</mi><mn>6</mn></msup></mrow></math> potentziala. Erabili honen baldintza orbita biribil baten momentu angeluar baten kuantizazioa, Hasiera batean Bohr-ek proposatua, energia mailak lortzeko correspondientes a los diferentes valores del número cuántico <math display=\"inline\"><mi>n</mi></math>. Expresar los resultados en términos de <math display=\"inline\"><mi>C</mi></math>, <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>ħ</mi></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "son oinarrizko ekuazioak: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>6</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><mi>C</mi></mrow><msup><mi>r</mi><mrow><mn>7</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Combinando ambas: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><msup><mi>r</mi><mrow><mn>6</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Por otra parte, la cuantización de Bohr <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math> da <math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><msqrt><mrow><mn>6</mn><mi>C</mi><mi>m</mi></mrow></msqrt><mrow><mi>n</mi><mi>ħ</mi></mrow></mfrac><mi>.</mi></mrow></math> De ahí: <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>C</mi><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></mfrac><msup><mi>n</mi><mn>3</mn></msup><msup><mi>ħ</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar una función de onda normalizada <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, tal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> eta espero diren balioak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> son constantes. Se define una nueva función de onda: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> es real."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el valor esperado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> para la nueva <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa. Zehaztu emaitza aurreko kopuruak."
      },
      {
       "mota": "testua",
       "html": "b) Calcular el valor esperado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> para la función <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, también en términos de cantidades definidas en el enunciado."
      },
      {
       "mota": "testua",
       "html": "c )- k bi edo hiru lerrotan deskribatuko du honen esanahi fisikoa resultado de aplicar el factor <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a la función <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhinekoa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msubsup><mi mathvariant=\"normal\">Φ</mi><mn>1</mn><mo>*</mo></msubsup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>i</mi><mfrac><msub><mi>p</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∫</mo><msubsup><mi mathvariant=\"normal\">Φ</mi><mn>1</mn><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>x</mi><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>x</mi><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) El significado físico de aplicar el factor <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhinaren funtziora <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math>-n lekualdatzea da honen jatorria función de onda en el espacio de momentos, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Una partícula se encuentra atrapada en el siguiente unidimensional potentziala: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Supongamos que sólo existe un estado ligado (el estado fundamental), que precisamente corresponde a una energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Esquematizar la función de onda del estado fundamental señalando putzuaren mugak."
      },
      {
       "mota": "testua",
       "html": "b )- k erakusten du kasu honetan <math display=\"inline\"><mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></msqrt><mi>a</mi><mi>/</mi><mi>ħ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Nota del enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "añade enuntziatua: arazoaren simetria kontuan hartuta, zehazteko oinarrizko egoeraren uhin-funtzioan koefizienteak, conviene considerar que esta función de onda es simétrica (par), lo hau da, konstanteen kopurua nabarmenki murrizten duena."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función par, máxima en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, oscilante (cosenoidal) dentro del pozo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi></mrow></math> y decayendo exponencialmente Kanpora, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Las ecuaciones de Schrödinger para las dos regiones son <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><msub><mi>V</mi><mn>0</mn></msub><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Solución para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>x</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>−</mi><mi>a</mi></mrow></math>), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>), con <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. Para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi></mrow></math>, ( pare ) simetriaren arabera: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>- ren ingurune- baldintza <math display=\"inline\"><mrow><mi>q</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math> zerrenda."
      },
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo>=</mo><mn>3</mn><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>q</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>- ren ordez: <math display=\"block\"><mrow><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mo>,</mo></mrow></math> de donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>3</mn></msqrt></mrow></math>, es decir <math display=\"inline\"><mrow><mi>q</mi><mi>a</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math> (estado ) funtsezkoa. <math display=\"inline\"><mi>q</mi></math> ordeztea, hau da, <math display=\"block\"><mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></msqrt><mfrac><mi>a</mi><mi>ħ</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>π</mi><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Considerar un sistema formado por un número <math display=\"inline\"><mi>N</mi></math> grande oszilatzaile kuantiko independenteak eta frekuentzia berekoak <math display=\"inline\"><mi>ω</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Supongamos que inicialmente todos los osciladores se encuentran en el estado con número cuántico <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>. Calcular la energía del sistema. Hasierako egoera hau ezin dela bat izan justifikatu Oreka termikoaren egoera."
      },
      {
       "mota": "testua",
       "html": "b) En un instante posterior, el sistema evoluciona completamente bere ingurunetik isolatuta oreka termikora iritsi arte. dicha temperatura de equilibrio en función de <math display=\"inline\"><mi>ω</mi></math> y constantes fundamentales."
      },
      {
       "mota": "testua",
       "html": "Ayuda: progresio geometriko infinitu baten batuketa <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Para un conjunto de <math display=\"inline\"><mi>N</mi></math> osciladores armónicos cuánticos: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>7</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> Tenperatura bakoitzari orekaren konfigurazioa dagokio mikroestutuen kopuru handienari eragiten dion banaketa. uneko banaketa, oszilagailu guztiak maila bakarrean dituela (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>), da lugar a un número mínimo de microestados, por lo que NO oreka egoera bati dagokio."
      },
      {
       "mota": "testua",
       "html": "b) La función de partición de un oscilador: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munderover><mo>∑</mo><mn>0</mn><mo accent=\"false\">∞</mo></munderover><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>∑</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> Batuketa progresio geometrikoa da, gero <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> De ahí la energía: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><mi>ħ</mi><mi>ω</mi><mo>+</mo><mfrac><mrow><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math> nondik lortzen den <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Junio 2011",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Una lámpara de luz ultravioleta (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) de 1 W de potencia está a 10 m de una placa de cesio de 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> de area, argiak plaka perpendikularrean inklinatzeko moduan. se supone que cada fotón que llega a la placa extrae un electrón:"
      },
      {
       "mota": "testua",
       "html": "a) Calcular el número de electrones emitidos por segundo."
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la energía máxima de los electrones emitidos si el Cs-a ateratzeko lana EV-koa da?"
      },
      {
       "mota": "testua",
       "html": "c ) Nola aldatzen dira aurretik kalkulatutako magnitudeak argia bada incide oblicuamente bajo un ángulo de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> respecto a la Plaka normala?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La placa de Cs recibe la fracción proporcional <math display=\"inline\"><mrow><mi>A</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>10</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><mn>100</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la energía de un fotón UV, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mn>7.944</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>5</mn></mrow></math> eV, <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mn>11</mn></msup></mrow></math> fotones/s lortu dute plakaren gainean. Elektroi batekin por fotón, esto da la misma cantidad de electrones/s, es decir, una corriente de <math display=\"inline\"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> A."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mi>W</mi><mo>+</mo><mi>K</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>K</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>W</mi><mo>=</mo><mn>5</mn><mo>−</mo><mn>1.9</mn><mo>=</mo><mn>3.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) Argiak <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> angelu baten azpian erasotzen badu, proiekzioa campo eléctrico es <math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, y como <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mi>E</mi><mn>2</mn></msup></mrow></math>, la Plakak hartzen duen intentsitatea faktorean eragiten da <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mn>30</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>. Por tanto, la corriente de electrones se reduce también en ese factor <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>. La energía cinética máxima de los electrones NO varía (depende solo de <math display=\"inline\"><mi>λ</mi></math>)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) La función de onda unidimensional de una partícula libre uhin lauen gainjartzeak ematen du. onda armónica de número de onda <math display=\"inline\"><mi>k</mi></math> es: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Calcular la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Dibujar la función densidad de probabilidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Hacer una estimación del valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>. ¿Qué significado físico tiene <math display=\"inline\"><mi>a</mi></math> parametroa?"
      },
      {
       "mota": "testua",
       "html": "c) Hacer una estimación del valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>. Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math> y verificar si está de acuerdo Heisenberg-en ziurgabetasun printzipioarekin. resultado."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad de encontrar a la partícula en el <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math> barrutia."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><mrow><mi>a</mi><mo>−</mo><mi>i</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Es una lorentziana centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. La anchura se estima por el <math display=\"inline\"><mi>x</mi></math> balioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>ren altuera ertainean: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> <math display=\"inline\"><mi>a</mi></math> parametroa, beraz, zuzenean luzeraren eskala da uhin-paketearen kokapena."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> (También puede estimarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> a partir del valor de <math display=\"inline\"><mi>k</mi></math> para el que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> decae en el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>e</mi></mrow></math>: <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>, dando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math>.) La aplicación del principio Ziurgabetasunari buruz <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mn>2</mn><mi>ħ</mi></mrow></math> ematen du, hau da, (mayor que) el límite de Heisenberg <math display=\"inline\"><mrow><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mfrac><mn>1</mn><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un volumen <math display=\"inline\"><mi>V</mi></math> de sodio (valencia <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>), cuyos Gidatzeko elektroiak gastzat har daitezke."
      },
      {
       "mota": "testua",
       "html": "a) Describir mediante un esquema la distribución de los electrones energia-mailetan tenperatura baxuan gidatzea. Eskemaren ezaugarri nagusiak laburki azaltzea."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la expresión para la energía de Fermi y calcular su valor sodiorako. Ze tenperaturatarako energia termikoa sartzen da Fermiren energiari dagokio?"
      },
      {
       "mota": "testua",
       "html": "c ) Frogatu <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K elektroien batez besteko energia vale <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Na</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>968</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Na</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>23</mn></mrow></math> u.m.a., <math display=\"inline\"><mn>1</mn></math> u.m.a.<math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, los electrones se distribuyen, de acuerdo con el baztertze-printzipioa, erabilgarri dauden maila guztiak betez baxuena elektroi guztiak agortu arte. Azken maila Fermiren maila da."
      },
      {
       "mota": "testua",
       "html": "b) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, todos los niveles hasta el de Fermi están ocupados. El número total de electrones: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow><mrow><mn>3</mn><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> Dentsitatetik abiatuta, <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math> kalkulatzen du, elektroi batekin tomo bidez gidatzea: <math display=\"block\"><mrow><mfrac><mi>N</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>968</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg/m</mtext></mrow><mn>3</mn></msup></mrow><mrow><mn>23</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow><mi>/</mi><mtext mathvariant=\"normal\">átomo</mtext></mrow></mfrac><mo>=</mo><mn>2.54</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> elec.</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>5.04</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.14</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "c ) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, total energia zinetikoa: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ε</mi><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>∫</mo><mi>ε</mi><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mfrac><mn>2</mn><mn>5</mn></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mi>.</mi></mrow></math> Energia electrón bidez: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>E</mi><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>ϵ</mi><mi>F</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Un sistema contiene <math display=\"inline\"><mi>N</mi></math> partículas distinguibles y cada horietako bat hiru maila posibletan aurki daiteke energéticos: <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mi>ε</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Obtener la expresión de la energía interna del sistema en función tenperaturarena."
      },
      {
       "mota": "testua",
       "html": "b) Representar en una misma gráfica las probabilidades de ocupación maila bakoitzeko tenperaturaren arabera."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La ocupación de cada nivel viene dada por la distribución de Boltzmann. Función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∑</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>ε</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>0</mn><mo>−</mo><mi>ε</mi><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>ε</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La ocupación de cada nivel: <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> A temperatura baja, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>1</mn></mrow></math> (todas las partículas en ) eta <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math> funtsezko egoera. funtzioak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> balioarekin bateratzen dira, tenperatura altuko ( ekipazioarekin batera. entre los tres niveles), con <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en une oro."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Julio 2011",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de fecha",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa honetako PDF goiburuan, jatorrizkoaren erroreak dio: &quot;Examen Junio 2011&quot;; por el resto del documento y por su ubicación azterketen karpetan, deialdiarekin bat dator 2011ko uztaila."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) En el modelo de Bohr para el átomo de hidrógeno se asume elektroiak orbita zirkular bat deskribatzen duela, non erradioa eta Elektroiaren abiadura legeekin bat dator Horrez gain, momentu angeluarraren aldeko apustua egiten da. elektroiaren multiplo oso bat baino ezin da izan konstantearena reducida de Planck, <math display=\"inline\"><mi>ħ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular los valores posibles de la energía del sistema. ¿Cómo espresioa aldatzen du nukleoaren masa finitua kontsideratuz gero?"
      },
      {
       "mota": "testua",
       "html": "b ) PHT argi zuria pasarazten du ( luzera guztien gainjartzea ) uhina hidrogenoa eta deuterioa dituen ontzi baten bidez Deuterioa hidrogeno atomo bat da, nukleoa duena un neutrón además del protón (misma masa que el protón, gutxi gorabehera ). Marraztu xurgatze- diagrama eskematikoki ( gas horretatik ) xurgatze-espektroaren lerroak, jakinez: Hasiera batean atomo guztiak funtsezko egoeran daude."
      },
      {
       "mota": "testua",
       "html": "c ) Kalkulatu fotoien uhin- luzeraren espresioa xurgatuak, <math display=\"inline\"><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup></math> eta <math display=\"inline\"><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math> trantsizioan hidrogenoa eta deuterioa hurrenez hurren."
      },
      {
       "mota": "testua",
       "html": "d) ¿Cuál es la diferencia relativa entre las longitudes de onda emitidas por los dos átomos en la transición <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "eta ) Nola zehaztu hidrógeno/deuterio proportzioa gasa?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) De la ecuación de Newton y el postulado de Bohr: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo>=</mo><mi>n</mi><mi>ħ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> De ahí: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mi>ħ</mi></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mi>n</mi></mrow></mfrac><mi>.</mi></mrow></math> energía- aren ordez: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>e</mi></msub><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>e</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><msup><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Nukleoaren masa infinitua ez dela kontuan hartzeko, se sustituye la masa del electrón por la masa reducida: <math display=\"block\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>→</mo><mi>μ</mi><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msub><mi>m</mi><mi>n</mi></msub></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><msub><mi>m</mi><mi>n</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El espectro de absorción muestra, para cada isótopo, una serie de líneas convergiendo hacia el límite de ionización (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>), Deuterioaren lerroekin pixka bat mugituta del hidrógeno (en la práctica, tan próximas que aparecen superpuestas como dobletes finos)."
      },
      {
       "mota": "testua",
       "html": "c ) <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math> trantsizioan: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow><mrow><mi>μ</mi><msup><mi>e</mi><mn>4</mn></msup></mrow></mfrac><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>H</mi></msub><mo>=</mo><mn>1835</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></math> (-rekin, ) protoiaren masa: <math display=\"block\"><mrow><msub><mi>μ</mi><mi>H</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msub><mi>m</mi><mi>H</mi></msub></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><msub><mi>m</mi><mi>H</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1835</mn><mn>1836</mn></mfrac><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>0.9995</mn><msub><mi>m</mi><mi>e</mi></msub><mo>,</mo></mrow></math> y con <math display=\"inline\"><mrow><msub><mi>m</mi><mi>D</mi></msub><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></math>: <math display=\"block\"><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>1835</mn></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>×</mo><mn>1835</mn></mrow></mfrac><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>0.9997</mn><msub><mi>m</mi><mi>e</mi></msub><mi>.</mi></mrow></math> Xurgazio-lerroak, orduan, honako hauei dagozkie: <math display=\"block\"><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>i</mi></msubsup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow><mrow><msub><mi>μ</mi><mi>i</mi></msub><msup><mi>e</mi><mn>4</mn></msup></mrow></mfrac><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mn>896</mn><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mi>H</mi><mo>,</mo><mi>D</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup><mo>−</mo><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></mrow><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup><mo>+</mo><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>H</mi></msub><mo>−</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>D</mi></msub></mrow><mrow><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>H</mi></msub><mo>+</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>D</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>−</mo><msub><mi>μ</mi><mi>H</mi></msub></mrow><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>+</mo><msub><mi>μ</mi><mi>H</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mi>e</mi></msub><mrow><mn>3</mn><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><mn>4</mn><msub><mi>m</mi><mi>p</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mo>+</mo><mn>4</mn><mo>×</mo><mn>1835</mn></mrow></mfrac><mo>=</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo>,</mo></mrow></math> independiente de <math display=\"inline\"><mi>n</mi></math>."
      },
      {
       "mota": "testua",
       "html": "e ) espektroaren lerroen intentsitate erlatiboa neurtzen correspondientes al hidrógeno y al deuterio: cuanto mayor sea la isodopo baten proportzioa, bere lerroak sendoagoak izango dira."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Aplicando el principio de incertidumbre, demostrar que la energía mínima de una partícula de masa <math display=\"inline\"><mi>m</mi></math> dentro de un pozo de potencial infinito de anchura <math display=\"inline\"><mi>L</mi></math> viene dada por <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∼</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Aplicar el resultado del apartado anterior para demostrar que la Protoi bat barruan gordetzen duen energia potentziala núcleo es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> MeV."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><msub><mi>m</mi><mi>p</mi></msub><mo>=</mo><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>R</mi><mtext mathvariant=\"normal\">núcleo</mtext></msub><mo>=</mo><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La mayor incertidumbre de la posición de la partícula dentro del pozo es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> (con <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>L</mi></mrow></math>), luego <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El valor mínimo del momento es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math>, y de ahí la energía cinética mínima: <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Considerando el núcleo como un pozo infinito de tamaño <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><msub><mi>R</mi><mtext mathvariant=\"normal\">núcleo</mtext></msub></mrow></math> y el protón como una partícula en su interior, del cálculo anterior se obtiene <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≈</mo><mn>0.88</mn></mrow></math> MeV. Considerando la partícula retenida por un potencial <math display=\"inline\"><mi>V</mi></math> tal que la energía de enlace total es <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>V</mi></mrow></math>, se estima que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> MeV aproximadamente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) El <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He líquido es un isótopo del He, con espín <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, y por tanto se comporta como fermiones."
      },
      {
       "mota": "testua",
       "html": "a) Considerando el <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He como un gas perfecto de fermiones cuya densidad es <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0.081</mn></mrow></math> g/cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, calcular su energía de Fermi <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la temperatura <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math> para la que la energía térmica se corresponde con la energía de Fermi (temperatura a la que aparecen los efectos cuánticos)."
      },
      {
       "mota": "testua",
       "html": "Datos: 1 u.m.a. <math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Fermiren energia energia maila altuena da <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> okupatuta. Tenperatura horretan, okupazio zatiaren bider nivel es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasta <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ϵ</mi><mi>F</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mn>3</mn><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mrow><mn>8</mn><mi>π</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mi>V</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>3</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg ( <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> He ) eta <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>81</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>: <math display=\"block\"><mrow><mfrac><mi>N</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>81</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg/m</mtext></mrow><mn>3</mn></msup></mrow><mrow><mn>3</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow><mi>/</mi><mtext mathvariant=\"normal\">átomo</mtext></mrow></mfrac><mo>=</mo><mfrac><mn>81</mn><mn>4.8</mn></mfrac><mo>×</mo><msup><mn>10</mn><mn>27</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> átomos</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>7.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>4.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><msub><mi>ϵ</mi><mi>F</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>F</mi></msub><mo>≈</mo><mn>5.2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Aplicamos un campo magnético, <math display=\"inline\"><mi>B</mi></math>, a un cristal que <math display=\"inline\"><mi>N</mi></math> ditu, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>1</mn></mrow></math> espin- en elkarreragile ez diren atomoak. condiciones, la energía de cada átomo puede ser <math display=\"inline\"><mrow><mi>μ</mi><mi>B</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> o <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Obtener la expresión de la energía interna del sistema en función tenperaturarena."
      },
      {
       "mota": "testua",
       "html": "b) Representar en una misma gráfica las probabilidades de ocupación maila bakoitzeko tenperaturaren arabera."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Se trata de un sistema de átomos en un cristal, es decir, Partikula bereizgarriak. Atomo bakoitzeko maila eskuragarriak son <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>−</mi><mi>μ</mi><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>μ</mi><mi>B</mi></mrow></math>. La ocupación de Boltzmann-en banaketak ematen du maila bakoitza, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>/</mi><mi>Z</mi></mrow></math> con <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. interna energia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∑</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>ε</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi>μ</mi><mi>B</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>B</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>B</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>μ</mi><mi>B</mi></mrow></math>, las ocupaciones son <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> 2011ko Ekainako antzera: tenperatura baxuan <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>1</mn></mrow></math> y los otros dos <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math>; las tres funtzioek tenperatura handiko <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> bateratzen dute."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Junio 2012",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Puntuek adierazten dute ariketa bakoitzaren gehienezko balorazioa. konponbide bakoitzaren planteamenduak azalpen labur bat edo erabilitako formula edo ekuazioen justifikazioa. Emaitzak Azken numerikoek beren unitateak sartu behar dituzte."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "( 20 puntu )FFFFFFrack-Hertzen esperimentua egiten da sartuaz gas monoatomikoa beirazko anpulan; atomo guztiak daude zilindroaren bi muturren artean dago aplica una diferencia de potencial <math display=\"inline\"><mi>V</mi></math> variable para acelerar los elektroi askeak filamentuan. Korrontea ordeztean transportada por los electrones en función de <math display=\"inline\"><mi>V</mi></math>, la curva tiene <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>15.3</mn></mrow></math> V eta <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>18.5</mn></mrow></math> V-rentzat lehen bi minimo."
      },
      {
       "mota": "testua",
       "html": "a) Hacer un esquema del dispositivo experimental."
      },
      {
       "mota": "testua",
       "html": "b) ¿Por qué ocurren los mínimos de intensidad mencionados?"
      },
      {
       "mota": "testua",
       "html": "c ) beirazko hodiaren inguruan beste gailu bat jarri da gasaren atomoek emandako uhin- luzera neurtzen du. Luzera edo uhin-luzera neurtuko dira?"
      },
      {
       "mota": "testua",
       "html": "d) Responder a la pregunta anterior si en el tubo se aplica una <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>12</mn></mrow></math> V potentzial-diferentzia. Eta aplikatutako potentziala bada? <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>17</mn></mrow></math> V?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "b) Los mínimos ocurren cuando el potencial acelerador es tal que la Elektroiek hartzen duten energia zinetikoa, elektroiarekin bat dator gas-atomoen mailen arteko energiaren diferentzia. baldintzak, elektroiek beren energiaren zati bat edo oro ematen diete. ( atomoak, )-ak asaldatuta geratzen direnak, talkan, eta energia galtzen dutenak katodoa lortzeko beharrezko zinetika, beraz, korrontea resumen: minimoak bat datoz a energia transferitzea optimizatzeko potentzialak atomoak talkan."
      },
      {
       "mota": "testua",
       "html": "c ) 15.3 V eta 18.5 V balioak bat datoz energiarekin gas-atomoen lehenengo bi asaldura-egoerak. Bi estatu asaldatuen arteko trantsizioak fotoi bat igortzen du onda luzera: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>18.5</mn><mo>−</mo><mn>15.3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>3.86</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3860</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Uhin-luzera hau ultramoreari dagokio. Beste luzera batzuk uhin posibleak lehenengoaren arteko iragateei dagozkie. maila asaldatua eta funtsezkoa, edo bigarren maila kitzikatuaren artean eta nagusia, <math display=\"inline\"><mn>812.5</mn></math> 001 eta <math display=\"inline\"><mn>672</mn></math> balioekin, hurrenez hurren. Uhin-luzera horietako bat bera ere ez dagokio ikusgaiari."
      },
      {
       "mota": "testua",
       "html": "d ) 12 V-ko azelerazio potentzial baterako ez dago nahikoa Mailarik pizteko energia, beraz, ez da erradiazioa isurtzen. 17 V.arentzat atomoak lehen mailan kitzikatzea baino ez da lortzen, eta Oinarrizko egoerara igarotzeak 81.5 uhin-luzera igortzen du. Lehen emandakoa, ikusgaiari ere ez dagokiona."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sin resolver",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El apartado a) (esquema del dispositivo experimental) no se reproduce: es un dibujo, no un desarrollo transcribible."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la función de onda de una partícula libre en dimentsio bat uhinen konbinazio lineal gisa adieraz daiteke planas. La amplitud asociada a cada onda plana de vector de onda <math display=\"inline\"><mi>k</mi></math> viene dada por una función triangular: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>/</mi><msub><mi>k</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub><mo>&lt;</mo><mi>k</mi><mo>&lt;</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math>rako, eta gainerako (rako nulua <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi></mrow></math> )rekin."
      },
      {
       "mota": "testua",
       "html": ") Kalkulatu <math display=\"inline\"><mi>α</mi></math> balioa funtzioa egon dadin normalizada."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la función de onda de la partícula <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> probabilitate dentsitatea."
      },
      {
       "mota": "testua",
       "html": "c) Representar gráficamente la función de onda (su parte real) y estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> y verificar si se cumple el Heisenberg-en ziurgabetasunaren printzipioa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": ")ri normalización baldintza: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mn>0</mn></msubsup><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>+</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mn>2</mn><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mn>3</mn></mfrac><msup><mi>α</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> de donde <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msqrt><mrow><mn>3</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la transformada de Fourier de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>α</mi></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>k</mi><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función tipo <math display=\"inline\"><msup><mtext mathvariant=\"normal\">sinc</mtext><mn>2</mn></msup></math> centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, con bigarren mailako lobuluak bi aldeetara txikitzen dira. Zabalera honela kalkulatuko da: Lehenengo bi minimoetatik aurrera, hauetan gertatzen direnak <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>π</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>/</mi><msub><mi>k</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) De la gráfica de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (soporte en <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub><mo>,</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>), se estima <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub></mrow></math>, beraz <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><msub><mi>k</mi><mn>0</mn></msub></mfrac><mo>⋅</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>8</mn><mi>π</mi><mo>,</mo></mrow></math> Heisenberg-eko mugaren gainetik argi ageri zen."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "( 25 puntu ) Ontzi bat daukala kontuan hartu, tenperaturan ambiente, un gas de moléculas de <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> formadas por pares de átomos de H (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>H</mi></msub><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> g) separados una distancia <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> cm. Considerar comportamiento de gas ideal, con las molekulak biratzen bi ardatz perpendikularren inguruan, ez ikusia egiten bibrazio-askatasunaren graduak."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es la velocidad de traslación promedio de las moléculas?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la velocidad de rotación promedio de las moléculas H-H lotura-lerroa bikoizten duten ardatzetako baten inguruan?"
      },
      {
       "mota": "testua",
       "html": "Fórmulas útiles: <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mi>A</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>v</mi></mrow></math>; energía del rotor cuántico <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>J</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><msup><mi>ħ</mi><mn>2</mn></msup></mrow></math>, con degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>2</mn><mi>J</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Por equipartición, cada uno de los 3 grados de libertad traslacionales aporta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>k</mi><mi>T</mi></mrow></math>. La energía traslacional promedio de cada molécula (masa <math display=\"inline\"><mrow><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></math>): <math display=\"block\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>k</mi><mi>T</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></mfrac></msqrt><mo>≈</mo><mn>2000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math> Maxwell-Botzmann-en banaketarekin txandaka <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>m</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><msqrt><mi>π</mi></msqrt><mi>α</mi></mrow></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mo>≈</mo><mn>1780</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) A cada grado de libertad rotacional le corresponde una energía <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>k</mi><mi>T</mi></mrow></math> ( bi ardatz, ) bi txandakako askatasun gradu: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>2</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>2.08</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>48</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math> el momento de inercia de la molécula. De ahí: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi><mi>T</mi></mrow><mi>I</mi></mfrac></msqrt><mo>≈</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Tenemos un sistema de <math display=\"inline\"><mi>N</mi></math> dipolos distinguibles de <math display=\"inline\"><mi>p</mi></math> dipolarra. Eremu elektriko konstantea ezartzean uniforme <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>, la energía de un dipolo es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>p</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, demagun gurean sistema los dipolos solo pueden ser paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) o antiparalelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) al campo aplicado — un sistema de bi energia maila. Sistema erabat dipolarra da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></msubsup><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>i</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": ") Kalkulatu, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑷</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, momentu dipolarraren modulu osoa <math display=\"inline\"><msub><mi>N</mi><mo>+</mo></msub></math> eta <math display=\"inline\"><msub><mi>N</mi><mo>−</mo></msub></math> ( dipolo paraleloen kopurua eta antiparalelos al campo, respectivamente)."
      },
      {
       "mota": "testua",
       "html": "b) Si el sistema está en equilibrio termodinámico, ¿cuál es el valor de <math display=\"inline\"><mi>P</mi></math> a temperatura <math display=\"inline\"><mi>T</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "c ) Frogatu <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math>- rekin <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Errata del enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado escribe la fórmula del apartado c) como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math> (derivada respecto a <math display=\"inline\"><mi>T</mi></math> <math display=\"inline\"><mi>T</mi></math> konstantea mantentzen du, eta horrek ez du ) zentzurik. solución oficial deriva respecto a <math display=\"inline\"><mi>E</mi></math>; se transcribe corregido como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": ")-ri neta polarizazioa: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mi>N</mi><mo>+</mo></msub><mi>p</mi><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>N</mi><mo>+</mo></msub><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b ) Energia-maila biren sistema. partición funtzioa: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Poblaciones de cada nivel: <math display=\"inline\"><mrow><msub><mi>N</mi><mo>±</mo></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>±</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>N</mi><mo>+</mo></msub><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mi>p</mi></mrow><mi>Z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mi>p</mi></mrow><mi>Z</mi></mfrac><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) <math display=\"inline\"><mi>Z</mi></math> ordezkatuz <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math>- n eta <math display=\"inline\"><mi>E</mi></math>- ra abiatuta: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><mo>=</mo><mi>−</mi><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>,</mo></mrow></math> coherente con el resultado del apartado b)."
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Mayo 2012",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Puntuek adierazten dute ariketa bakoitzaren gehienezko balorazioa. konponbide bakoitzaren planteamenduak azalpen labur bat edo erabilitako formula edo ekuazioen justifikazioa. Emaitzak Azken numerikoek beren unitateak sartu behar dituzte."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos)"
      },
      {
       "mota": "testua",
       "html": ")- ri <math display=\"inline\"><mi>α</mi></math> partikulak sakabanatzeko esperimentu baten bidez átomos de plata Ag (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>47</mn></mrow></math>) se ha estimado que el radio del núcleo <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m da. Zenbateraino partikularen gehienezko energia <math display=\"inline\"><mi>α</mi></math> su dispersión sigue el comportamiento predicho por el modelo de Rutherford?"
      },
      {
       "mota": "testua",
       "html": "b ) Compton sakabanatze- prozesutzat hartu. Kalkulatu energia fotoi baten minimoa honek bere energiaren erdia transferi dezan elektroia."
      },
      {
       "mota": "testua",
       "html": "c ) X izpien hodi batean, zein izan behar du voltaje txikiena Elektroiak azelerazioa, 1 001-eko X izpiak ekoizteko?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía máxima para la que aún vale el modelo de Rutherford es aquella para la que la partícula <math display=\"inline\"><mi>α</mi></math> (carga <math display=\"inline\"><mrow><msup><mi>Z</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn></mrow></math>) llega justo a rozar el núcleo (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m), es decir, toda su energía zinetika horrek duen energia potentziala bihurtzen da distancia: <math display=\"block\"><mrow><mi>K</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>Z</mi><mo>′</mo></msup><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>47</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>2.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>135</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El fotón dispersado tendrá la mitad de la energía del incidente (<math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>E</mi></mrow></math>, ya que la otra mitad se transfiere al electrón). Como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, orduan <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>. Erlazioa aplikatuz de Compton: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Fotoiaren gutxieneko energia uhin maximoaren luzerari dagokio, que según la relación anterior ocurre en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>h</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>256</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>e</mi></mrow></mfrac><mo>=</mo><mn>12.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la transformada de Fourier de la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> partikula libre batena <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Frogatu hau dela. transformada de Fourier de una función de onda desplazada <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> aurrekoarekin alderatuta, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Supongamos que la transformada de Fourier de la función de onda Protoi batena <math display=\"block\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>10</mn></mrow></math> m. Aurreko atalaren emaitza kontuan hartuta, egin bat representación gráfica aproximada de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> e indicar dónde se encuentra el valor máximo de la función."
      },
      {
       "mota": "testua",
       "html": "c ) Zein da protoiaren batez besteko abiadura?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": ") <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>rekin: <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>y</mi></mrow></msup><mi>d</mi><mi>y</mi><mo>×</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>,</mo></mrow></math> usando el cambio de variable <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Primero se calcula la función de onda para <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> ( <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></math> ) fase faktorerik gabe: <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>A</mi><mn>0</mn></msub><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>a</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> Laukia berretzailean osatzen eta integrala erabiltzen gaussiana dada. Aplicando el resultado del apartado a) con <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></mrow></math> (desplazamiento <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math>): <math display=\"block\"><mrow><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>a</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math> Es una gaussiana centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math>, con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>; maximoa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi><mo>=</mo><mi>−</mi><mn>10</mn></mrow></math>m-en dago."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mi>m</mi></mfrac><mfrac><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi></mrow><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math> deskonposatzen, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> zatia zero da ( bakoitiaren bidez, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math> aldagai aldaketa, gaussiar integrado impar), quedando <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>≈</mo><mn>632</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Explicar las diferencias básicas entre las hipótesis sobre las Maxwell-Botzmann-en estatistikak oinarritzen direla, Bose-Einstein eta Fermi-Dirac."
      },
      {
       "mota": "testua",
       "html": "b) Describir tres tipos concretos de sistemas a los que serían aurreko estatistika bakoitzeko aplikagarriak. sistemak, zein baldintzatan aplikatuko litzateke M-Bren estatistika?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Estadística M-B: partículas distinguibles, densidad de Partikula txikiak. Estatistika B-E: partikula bereizgarriak ( ) bosoiak, dentsitate altu edo tenperatura baxuan aplika daitezke. Estatistika F-D: partículas indistinguibles (fermiones), sujetas al principio de Pauli kenduta."
      },
      {
       "mota": "testua",
       "html": "b) Un gas ideal a presión y temperatura ambiente (M-B); los átomos de <math display=\"inline\"><msup><mrow></mrow><mn>4</mn></msup></math>He, spin 0, a temperatura baja (B-E); los electrones de conducción de un metal (F-D). Para los dos últimos ejemplos, a Tenperatura oso altuek B-E eta F-D-ren estatistikak bateratzen dute M-B."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Tenemos un sistema con <math display=\"inline\"><mi>N</mi></math> partículas distinguibles en el que éstas pueden estar en cuatro estados diferentes de energía: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es el número de partículas en cada estado si el sistema se encuentra en equilibrio termodinámico a temperatura <math display=\"inline\"><mi>T</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es el número de partículas en cada nivel de energía en las Aurreko baldintzak?"
      },
      {
       "mota": "testua",
       "html": "c ) demagun une zehatz batean partikula kopurua en cada nivel de energía es <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Calcular la energía del sistema. El sistema no se oreka termodinamikoan aurkitzen duzu. Zergatik?"
      },
      {
       "mota": "testua",
       "html": "d) En la situación del apartado anterior, se aísla completamente el sistema, beraz, ezin du energia bere ingurunearekin trukatu. Oreka termodinamikoa lortu ondoren, zein da oreka termodinamikoa? Sistemaren tenperatura?"
      },
      {
       "mota": "testua",
       "html": "Fórmula útil: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mi>π</mi><mi>/</mi><mi>α</mi></mrow></msqrt></mrow></math>, <math display=\"inline\"><mi>β</mi></math> cualquier número complejo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Sistema de partículas distinguibles (estadística de M-B), con cuatro estados disponibles, uno de ellos degenerado (<math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>2</mn></mrow></math>, con el mismo valor de energía <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>). Función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Distribución de partículas por <strong>estado</strong>: <math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>2</mn></msub><mo>=</mo><msub><mi>N</mi><mn>3</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>4</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Distribución de partículas por <strong>nivel</strong> de energía: <math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi></mrow><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>4</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) Sistemaren energia, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> unitateetan: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>.</mi></mrow></math> Esta distribución NO se corresponde con la de equilibrio (M-B), a la que corresponde: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>N</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>N</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><msub><mi>ε</mi><mn>2</mn></msub><mo>+</mo><msub><mi>N</mi><mn>4</mn></msub><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi></mrow><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mrow><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> Sistemak partikulen banaketarantz eboluzionatuko du. niveles que maximiza el número de microestados (la distribución de M-B)."
      },
      {
       "mota": "testua",
       "html": "d) Como el sistema está aislado, su energía no varía. Igualando la energía inicial (c) con la energía de equilibrio: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mrow><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Mayo 2014",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Puntuek adierazten dute ariketa bakoitzaren gehienezko balorazioa. konponbide bakoitzaren planteamenduak azalpen labur bat edo erabilitako formula edo ekuazioen justifikazioa. Emaitzak Azken numerikoek beren unitateak sartu behar dituzte."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Un pion neutro, <math display=\"inline\"><msup><mi>π</mi><mn>0</mn></msup></math>, se desintegra, vía interacción electromagnética, en dos fotones, <math display=\"inline\"><mrow><msup><mi>π</mi><mn>0</mn></msup><mo>→</mo><mi>γ</mi><mo>+</mo><mi>γ</mi></mrow></math>, que pioiaren norabidearekiko simetrikoki mugitzen dira. Ezarri bien mugimendu- norabideen arteko angelua fotones si el momento del pion incidente es igual a 220 MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>∼</mo><mn>140</mn></mrow></math> MeV<math display=\"inline\"><mrow><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Unearen eta energiaren kontserbazio-legeak aplikatzen. Fotoiak simetrikoki mugitzen direnez pion helbidea: <math display=\"block\"><mrow><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>p</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre la dirección del pion y cualquiera de los fotones. Para la energía (consideración relativista): <math display=\"block\"><mrow><mn>2</mn><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>π</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><msup><mi>π</mi><mn>0</mn></msup></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mn>220</mn><mn>2</mn></msup><mo>+</mo><msup><mn>140</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>261</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math> De aquí <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mn>131</mn></mrow></math> MeV y <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><mi>γ</mi></msub><mi>/</mi><mi>c</mi><mo>=</mo><mn>131</mn></mrow></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>. Sustituyendo en la primera ecuación: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>p</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.843</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>=</mo><mn>32.6</mn><msup><mi></mi><mo>∘</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Considerar una partícula de masa <math display=\"inline\"><mi>m</mi></math> en un pozo de potencial infinito definido en el rango <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math> y cuya función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> viene dada por: <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Normalizar la función."
      },
      {
       "mota": "testua",
       "html": "b) Calcular <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c ) Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>a</mi><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>i</mi><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) ezin dugu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> ebaluatu hemendik aurrera <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><mi>ħ</mi><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, ya que <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es derivable (tiene un salto discontinuo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>). <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>p</mi><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi></mrow></math> erabili behar dugu. <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></math> ordezkatzen: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>p</mi><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>p</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>p</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>p</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>p</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>ħ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mi>p</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>p</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>ħ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>p</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> izan ere, funtzio integratua bakoitia da."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Una molécula de hidrógeno en estado sólido puede existir bi formastan: ortohidrogenoa, ( spin garbiarekin ) ez nulua, eta hidrogenoa, ( spin espinekin. nulo). La forma orto puede estar en tres estados de spin, todos con la misma energía <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; la forma para solo tiene un estado, de Energia <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mi>N</mi></math> solidoa hidrogenoa, partikula bereizgarritzat hartzen da, nudos de la red cristalina, en equilibrio, con energía <math display=\"inline\"><mi>U</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Qué valores puede tomar la energía total del sistema, <math display=\"inline\"><mi>U</mi></math>? Erantzunak arrazoitzea."
      },
      {
       "mota": "testua",
       "html": "b ) - ek <math display=\"inline\"><mi>U</mi></math> espresioa lortu, tenperaturaren arabera."
      },
      {
       "mota": "testua",
       "html": "c ) Tenperatura maximoa denean, zein banaketa dute Partikulak egoera ortodunetan eta para?"
      },
      {
       "mota": "testua",
       "html": "d ) Sistema oreka termodinamikoan dagoela, izan al daiteke?"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Ahal bada, egoera horren tenperatura lortzea; bestela, zergatik azaldu."
       ]
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": ") Bi energia mailatako partikula bereizgarrien sistema (<math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mi>ε</mi></math>), el segundo con degeneración 3 (los tres estados de spin de la forma orto, todos con la misma energía). Función de partícula baten partizioa: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mn>0</mn></msup><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> La energía del sólido, usando <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>Z</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mn>3</mn><mi>ε</mi></mrow><mrow><mi>Z</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>N</mi><mn>3</mn><mi>ε</mi><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi><mi>ε</mi></mrow><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Los valores extremos de <math display=\"inline\"><mi>U</mi></math>: a <math display=\"inline\"><mi>T</mi></math> alta, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>≈</mo><msup><mi>e</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>U</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn><mi>N</mi><mi>ε</mi><mi>/</mi><mn>4</mn></mrow></math>; a <math display=\"inline\"><mi>T</mi></math> baja, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> es muy grande, luego <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>0</mn></mrow></math>. Entre ambos límites, la energiak edozein balio har dezake tenperaturaren arabera."
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mi>n</mi></math> el número de partículas en el nivel <math display=\"inline\"><mi>ε</mi></math>: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>n</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi><mi>ε</mi></mrow><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mi>n</mi></mfrac><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) <math display=\"inline\"><mi>T</mi></math> altua, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ε</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>0</mn><mo>=</mo><mi>n</mi><mi>ε</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mi>/</mi><mn>4</mn></mrow></math> (estado orto) para la máxima temperatura (máxima Energia ); <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>4</mn></mrow></math>, egoera para."
      },
      {
       "mota": "testua",
       "html": "d ) Orekan posible da: molekula zatikia estado fundamental viene dada por la distribución de Boltzmann: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>0</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math> Adibidez, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> meV, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>10.6</mn></mrow></math> K."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un volumen <math display=\"inline\"><mi>V</mi></math> de magnesio (valencia <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn></mrow></math>), hauen eroapen elektroiak gastzat har daitezke."
      },
      {
       "mota": "testua",
       "html": "a) Describir brevemente cuál es la distribución de los electrones de energia-mailan tenperatura oso baxura gidatzea. Konparatu banaketa hau partikulen sistema batekin distinguibles."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la expresión para la energía de Fermi y calcular su valor magnesiorako. Ze tenperaturatan egon beharko luke gas ideal batek. bere molekulen batez besteko energia bere energiaren berdina izatea Fermi magnesiokoa?"
      },
      {
       "mota": "testua",
       "html": "c ) Frogatu <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K-ri elektroien batez besteko energia dela <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Mg</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1740</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Mg</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>24</mn></mrow></math> u.m.a., 1 u.m.a.<math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": ") <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>ri, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> okupazio-zatikia: todos los niveles están ocupados desde <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> hasta el nivel de Fermi <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>. Tenperatura oso baxuan, elektroi batzuk berehala <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>ren azpitik jauzi egiten dute mailetara berehala encima bidez: mailak betetzen dira <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math> eta beheko mailak deskonektatzen dira. con un sistema de partículas distinguibles (Boltzmann), donde la ocupación decae exponencialmente con la energía desde <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>; Fermiren banaketa Boltzmann-en banaketa gora temperatura."
      },
      {
       "mota": "testua",
       "html": "b) El número de electrones en <math display=\"inline\"><mi>V</mi></math> a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mfrac><mn>2</mn><mn>3</mn></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mi>N</mi><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> Elektroi dentsitatea kalkulatzen <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>N</mi><msub><mi>m</mi><mtext mathvariant=\"normal\">Mg</mtext></msub><mi>/</mi><mi>V</mi></mrow></math> (con 2 electrones de conducción por átomo, dada la valencia <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mi>e</mi></msub><mi>V</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><mfrac><mn>1738</mn><mrow><mn>24</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>8.72</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> elec.</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>7.13</mn></mrow></math> eV. Gas ideal batentzat, molekula bidezko batez besteko energia da <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>; igualando a <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><msub><mi>ϵ</mi><mi>F</mi></msub></mrow><mn>3</mn></mfrac><mo>≈</mo><mn>55</mn><mspace width=\"0.167em\"></mspace><mn>111</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) PHTPT electrones gasaren energia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∫</mo><mi>ε</mi><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>ε</mi><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>N</mi><msub><mi>ϵ</mi><mi>F</mi></msub><mi>.</mi></mrow></math> La energía promedio por electrón: <math display=\"inline\"><mrow><mi>U</mi><mi>/</mi><mi>N</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>ϵ</mi><mi>F</mi></msub></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Control I — 23 de marzo de 2012",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esperimentu bat diseinatu da kargaren balioa neurtzeko <math display=\"inline\"><mi>e</mi></math> elektroia eta Planck <math display=\"inline\"><mi>h</mi></math> konstantea. Metal bat argitzen da cuyo trabajo de extracción es <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup></mrow></math> J utilizando una Uhin- luzera aldakorreko argi- iturburua. Argia erabiltzean ikusgarria ez da ezer gertatzen, baina uhinaren luzera iristen denean <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mn>3800</mn></mrow></math> PORT ( argi ultramorea ) metala hasten da elektroiak galtzea. Uhin-luzeraren balio txikiago baterako, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2780</mn></mrow></math> Å, la corriente eléctrica asociada a la pérdida de electrones en el metal es <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> A. Teniendo en cuenta que la superficie metálica iluminada es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>, que cada fotoi intzidente batek elektroi bat ateratzen du, lanpararen potentzia para cualquier longitud de onda es <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>7</mn></mrow></math> W, y que el metal está colocado a 30 cm de la lámpara, calcular <math display=\"inline\"><mi>e</mi></math> y <math display=\"inline\"><mi>h</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Nota: este es un ejercicio con valores no realistas, por lo que los valores de <math display=\"inline\"><mi>e</mi></math> y <math display=\"inline\"><mi>h</mi></math> a obtener no son los reales. <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m/s."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Un fotón de longitud de onda <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mn>3800</mn></mrow></math> Å tiene la energía electrón bat ateratzeko zuzena: <math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi>W</mi><msub><mi>λ</mi><mn>0</mn></msub></mrow><mi>c</mi></mfrac><mo>=</mo><mn>8.87</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>33</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math> tiempo unitateko metalezko azalerara iristen den energia: <math display=\"block\"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mi>P</mi><mo>×</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>6.19</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W</mtext></mrow><mi>.</mi></mrow></math> La energía de cada fotón es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2780</mn></mrow></math> Å. El número de fotones que llega a la superficie por unidad de tiempo: <math display=\"block\"><mrow><msub><mi>n</mi><mi>f</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>L</mi></msub><mi>E</mi></mfrac><mo>=</mo><mn>9.57</mn><mo>×</mo><msup><mn>10</mn><mn>18</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fot.</mtext></mrow><mi>/</mi><mi>s</mi><mi>.</mi></mrow></math> La carga que pierde la superficie por unidad de tiempo (intensidad) <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mi>e</mi><msub><mi>n</mi><mi>f</mi></msub></mrow></math> da. tanto bidez: <math display=\"block\"><mrow><mi>e</mi><mo>=</mo><mfrac><mi>i</mi><msub><mi>n</mi><mi>f</mi></msub></mfrac><mo>=</mo><mn>4.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> C</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Pendulu kuantikoa. <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg esekita, masa- masarik gabeko hari batez <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow></math> Å, que se comporta como un péndulo bajo la acción de un campo eléctrico <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> V/m uniforme, de manera que oscila como un péndulo simple."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la frecuencia <math display=\"inline\"><mi>ω</mi></math> de oscilación según la mecánica Klasikoa, oszilazio txikiak hurbiltzean."
      },
      {
       "mota": "testua",
       "html": "b) Aplicando las reglas de Wilson-Sommerfeld, demostrar que la ( oszilazioen enongazioa maximo ) penduluaren seglazioa dago kuantizatu eta honela ematen da <math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>ħ</mi><mi>n</mi></mrow><mrow><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) Funtzionalaren oszilazioa eta oinarrizko egoera bere energia."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>θ</mi></math> pendulua banatzeko angelua penduluarekiko posición vertical de equilibrio. En presencia del campo <math display=\"inline\"><mi>E</mi></math>, el electrón está sometido a la fuerza vertical <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>E</mi><mi>e</mi></mrow></math>; su componente tangentziala <math display=\"inline\"><mrow><msub><mi>F</mi><mi>t</mi></msub><mo>=</mo><mi>e</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da, eta ekuazio dinamikoa <math display=\"inline\"><mrow><mi>e</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow></math> da, en la aproximación de pequeñas oscilaciones: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac><mi>θ</mi><mi>.</mi></mrow></math> Esta ecuación admite soluciones <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>E</mi><mi>e</mi></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac></msqrt><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": ")- ri W-S-ren araua péndulo-ren momentu angeluarrerako: <math display=\"block\"><mrow><mo>∮</mo><mi>L</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∮</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∮</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>ω</mi><msub><mi>θ</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>θ</mi><mi>.</mi></mrow></math> Aurreko espresioa manipulatzen lortzen da <math display=\"block\"><mrow><mo>∮</mo><mi>L</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi>π</mi><mo>=</mo><mi>n</mi><mi>h</mi><mo>,</mo></mrow></math> eta hortik <math display=\"block\"><mrow><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ħ</mi><mi>n</mi></mrow><mrow><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La energía del péndulo: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>n</mi><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> Oinarrizko egoerarako, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>1.82</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> rad, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>4.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> eV."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, partikula aske baten uhin funtzioa se mueve en una dimensión es <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la región <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, y nula en el resto. <math display=\"inline\"><mi>a</mi></math> es una constante."
      },
      {
       "mota": "testua",
       "html": ") Kalkulatu <math display=\"inline\"><mi>A</mi></math> balioa, funtzioa normalizatua egon dadin."
      },
      {
       "mota": "testua",
       "html": "b ) Balio jakin bat eman al dakioke Broglie partikularen uhinari lotuta?"
      },
      {
       "mota": "testua",
       "html": "c ) PHT- ren adierazpen bat eman, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aurkitzeko probabilitatea <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math> arteko partikulak, luzera-unitateko. Kalkulatu partikularen batez besteko posizioa eta estimazioa ematea <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad de encontrar la partícula en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es la aurrez kalkulatutako batez besteko posizioa."
      },
      {
       "mota": "testua",
       "html": "e ) uhin-funtzioa aplikatuz uhinaren konbinazio lineal gisa funciones armónicas, calcular la amplitud <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> asociada a la función de onda armónica de vector de onda <math display=\"inline\"><mi>k</mi></math>. Calcular <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f ) Kalkulatu <math display=\"inline\"><mi>k</mi></math> batez besteko balioa eta emandako estimazioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Ayuda: <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mi>n</mi></msup><mrow><mi>d</mi><msup><mi>k</mi><mi>n</mi></msup></mrow></mfrac><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La normalización: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>4</mn></msup><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo>=</mo><mfrac><mn>16</mn><mn>15</mn></mfrac><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math> luego <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><mn>15</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) No: no es una función armónica (no tiene un único <math display=\"inline\"><mi>k</mi></math> asociado)."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La posición media es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (la función es simétrica respecto a ese punto). Como estimación puede tomarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>2</mn><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d ) barrutia oso txikia denez, aproxima dago: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><mi>a</mi></mrow></mfrac><mo>×</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>∼</mo><mn>1.9</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Hay que calcular la transformada de Fourier: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msqrt><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Lehen integral-a: <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mi>i</mi><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Para la segunda, usando la ayuda: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>k</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Restando: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>15</mn><mrow><mn>32</mn><mi>π</mi><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es par respecto a <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>. Como estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> puede tomarse el doble del valor que anula el primer término (ocurre después de anularse el segundo), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math> rako. Beraz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Mayo 2013",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Puntuek adierazten dute ariketa bakoitzaren gehienezko balorazioa. konponbide bakoitzaren planteamenduak azalpen labur bat edo erabilitako formula edo ekuazioen justifikazioa. Emaitzak Azken numerikoek beren unitateak sartu behar dituzte."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "( 20 puntu ) Compton-en esperimentuan fotoiak eragiten dira energía <math display=\"inline\"><mi>E</mi></math> sobre electrones en reposo. ¿Cuál es la energía cinética esperimentu honetan elektroi batek eskura dezakeen maximoa? Expresatu el resultado únicamente en función de <math display=\"inline\"><mi>E</mi></math> y de <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La energía de un fotón viene dada por <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, por lo zenbat eta uhin-luzera handiagoa izan, orduan eta energia txikiagoa izango dela. la fórmula de Compton, la máxima pérdida de energía del fotón (mayor longitud de onda) corresponde al máximo cambio de longitud de onda, hau da, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><msub><mi>ν</mi><mn>2</mn></msub></mfrac><mo>−</mo><mfrac><mi>c</mi><msub><mi>ν</mi><mn>1</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><msub><mi>ν</mi><mn>1</mn></msub></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub></mrow></mfrac><mi>.</mi></mrow></math> La energía cinética máxima del electrón: <math display=\"block\"><mrow><msub><mi>K</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>−</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Considerar una partícula de masa <math display=\"inline\"><mi>m</mi></math> cuya función de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhina <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean bi horien gainjartzea da primeros autoestados de un pozo infinito de anchura <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, con energías <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>ħ</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>ħ</mi><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": ")-ri <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako espresioa eman."
      },
      {
       "mota": "testua",
       "html": "b) Comprobar que el factor de normalización <math display=\"inline\"><msqrt><mrow><mn>1</mn><mi>/</mi><mi>a</mi></mrow></msqrt></math> es válido Edozein unetan <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c ) PHT grafikoki ordezkatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad (dependiente del tiempo) de que la Partikulak putzuaren ezkerraldean daude."
      },
      {
       "mota": "testua",
       "html": "e ) Frogatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> probabilitate-dentsitatea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> denboratik independentea da."
      },
      {
       "mota": "testua",
       "html": "f ) Kalkulatu partikularen energiaren batez besteko balioa. Expresar el resultado en función de <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y constantes fundamentales."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Cada autofunción varía con <math display=\"inline\"><mi>t</mi></math> según <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b ) Edozein unetan <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> es simplemente la suma de los dos términos cuadráticos (dos jorobas separadas, sin término de interferencia)."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mi mathvariant=\"normal\">Ψ</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ψ</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (el segundo faktorea ) baliogabetzen da, gero desaparece interferentzia terminoa: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo>,</mo></mrow></math> independiente de <math display=\"inline\"><mi>t</mi></math>."
      },
      {
       "mota": "testua",
       "html": "f ) Emandako funtzioa lehenengo bien konbinazio lineala da <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> autoestitatuak, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>, honekin <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math> koefizienteak. energíaren batez besteko balioa: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>5</mn><msub><mi>E</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>ħ</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Un sistema tiene dos niveles de energía que se 0.1 eV-tan bereizten dute."
      },
      {
       "mota": "testua",
       "html": "a) Si el sistema está en contacto térmico con un baño a 300 K, Zein da sistema maila honetan aurkitzeko aukera? Energia handiagoa?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Para qué temperatura esta probabilidad es 0.25?"
      },
      {
       "mota": "testua",
       "html": "c ) Bi energia- mailak dituen egoera gerta al daiteke? herrixkak ere badaude?"
      },
      {
       "mota": "testua",
       "html": "d) Calcular la energía interna y el calor específico del sistema."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></math> J-rekin. <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K- rako: <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.0205</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mo>=</mo><mn>1052</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c ) Populazioen berdintasunak ezin du alcanzarse: beharrezkoa litzateke <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>∞</mi></mrow></math> ematen duena."
      },
      {
       "mota": "testua",
       "html": "d ) interna energia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ε</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Hemendik ere kalkula daiteke <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>. específico beroa: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un sistema formado por un conjunto de Hiru dimentsioko osziladore harmonikoak, zeinen energia-mailak Horregatik datoz. <math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></msub><mo>=</mo><mi>ħ</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> son enteros <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": ") Kalkulatu, <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> energia-mailak degenerazioa y <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Si el sistema de osciladores está en contacto térmico con un baño <math display=\"inline\"><mi>T</mi></math> tenperaturan, zein tenperaturatan energia-maila <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> está más poblado que el de <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>? Kalkulatu tenperatura horren zenbakizko balioa oszilagailuentzat frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El nivel <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, con los microestados <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El nivel <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, con los microestados <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>10</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b ) PHTPHT nivel bakoitzeko populazioak: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mi>Z</mi></mfrac><mi>.</mi></mrow></math> La fracción relativa entre ambos niveles: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> implica <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mo>&lt;</mo><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, hau da, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>&gt;</mo><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Balioa ordezten la frecuencia: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>894</mn></mrow></math> K."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Septiembre 2009",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Sin solución en la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honetako gainerako azterketen aldean, ez zen aurkitu azterketa honetarako bateratutako konponbideen dokumentua erabiltzailearen fitxategia. Enuntziatua bakarrik transkribatzen da; ez da Konponbideak asmatzen dituzte."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) En un experimento Compton se adquieren espectros que X erradiazioaren intentsitatea adierazten dute funtzio bezala barreiatuta uhin-luzeratik sakabanatze angelu ezberdinetara. A <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> se observan dos máximos de intensidad que se encuentran a <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0.709</mn></mrow></math> STETE ETA <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0.733</mn></mrow></math> 001. bi maximo horiek irudikatzen dituzte eta zer gertatuko zatekeen espektroa gertatuz gero se hubiese medido con un ángulo de <math display=\"inline\"><mrow><mn>0</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) En el instante inicial la función de onda de una Partikula librea da <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>t</mi></math> edozein garaitan <math display=\"inline\"><msub><mi>p</mi><mi>x</mi></msub></math> mugimendu kopurua neurtzen bada, Zein balore posible eta zeintzuk dira haien aukerak?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considera el siguiente potencial unidimensional: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>6</mn><mi>x</mi></mfrac><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Potentziala grafikoki irudikatzen du eta irudi honen gainean marrazten du kualitatiboki, probabilitate-dentsitateari dagokiona lehen egoera asaldatua."
      },
      {
       "mota": "testua",
       "html": "Considerando que tomamos unidades en las que <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ħ</mi><mo>=</mo><mn>1</mn></mrow></math>, la oinarrizko egoerari dagokion uhin funtzioa da <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>x</mi></mrow></msup><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>β</mi></math> bi konstante diren lekuan. Kalkulatu funtsezko estatuaren energia."
      },
      {
       "mota": "testua",
       "html": "Nota: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>n</mi><mi>!</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) La función de onda de una partícula en el espacio de momentos (<math display=\"inline\"><mi>k</mi></math>, con <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi><mo>&lt;</mo><mi>k</mi><mo>&lt;</mo><mi>∞</mi></mrow></math>), viene dada por: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><msup><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mi>i</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math> parametroak diren tokian."
      },
      {
       "mota": "testua",
       "html": "a) Calcula la función de onda en su representación en el espacio real, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Calcula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) Un sistema pequeño tiene solo dos niveles energéticos. El nivel inferior tiene energía <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y degeneración <math display=\"inline\"><msub><mi>g</mi><mn>1</mn></msub></math>, mientras que el nivel superior tiene energía <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> y degeneración <math display=\"inline\"><msub><mi>g</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "a) Sin realizar ningún cálculo explícito, razona qué valores debe sistemaren batez besteko energia hartu kasu mugatuetan Tenperatura oso altu eta oso baxuak. Irudika ezazu adierazpen grafiko bat Batez besteko energiaren kualitatiboa, <math display=\"inline\"><mi>T</mi></math> tenperaturaren arabera."
      },
      {
       "mota": "testua",
       "html": "b) Utilizando el resultado del apartado anterior, haz una bero espezifikoaren irudikapen kualitatiboa, horren arabera temperatura."
      },
      {
       "mota": "testua",
       "html": "c ) Zer dimentsiotako magnitudea behar bezain handia izan behar du unitatea, esan dezagun muga honetan gaudela Tenperatura handiak?"
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Junio 2007",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota sobre la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honetako azterketa gehienak ez bezala, kapitulu hau documento (nombrado _soluciones_examen_IEM_jun2007.pdf_) es autocontenido: su primera página es el enunciado completo y las 2tik 14ra bitarteko orrialdeak eskuz idatzitako konponbide ofiziala dira, era berean formato que _Control_Bloque_I_2012_ y _Examen_Mayo_2013_."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compton efektua aztertzeko ekipo esperimental bat diseinatu zen X izpien hodi batez, karbono lagin batez, bat kristal analizatzailea eta X izpi-detektagailu bat."
      },
      {
       "mota": "testua",
       "html": "a) Realizar un esquema elemental del dispositivo experimental, osagaia konfigurazioan erakutsi behar da. observar la dispersión Compton a <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) El haz de rayos X incidente se monocromatiza a una longitud de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> STETE uhina, eta analizatzaile gisa kristal bat erabiltzen da. planoei lotutako Braggen islapena erabiltzen duena cristalinos de espaciado <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3.023</mn></mrow></math> Å. El espectro medido para un ángulo de dispersión Compton de <math display=\"inline\"><mrow><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> se representa en la figura adjunta en función del ángulo <math display=\"inline\"><mi>θ</mi></math> de la reflexión de Bragg en el analizador: dos picos de intensidad, a <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (el segundo marcado también con la referencia <math display=\"inline\"><mrow><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, correspondiente al ángulo entre los haces incidente y reflejado en el cristal). A partir de emaitza hori, Planck-en konstantearen balioa kalkulatzea."
      },
      {
       "mota": "testua",
       "html": "c ) Laburki beste hiru metodo esperimental adierazi honen desberdinak Planck-en konstantea neurtzeko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El dispositivo consta de: un tubo de rayos X que emite un haz karbono laginrako monokromatikoa; laginean gertatzen da Compton sakabanatzea, sorta sakabanaturik, <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> del haz incidente; ese haz dispersado incide sobre el cristal analizador, que por reflexión de Bragg (con <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">Bragg</mtext></msub></math> angelua sortaren eta ) kristalinoen artean angeluan presenteko uhin-luzera ezberdinak; horrela egitea difraktatua azkenean X izpien detektagailura iristen da."
      },
      {
       "mota": "testua",
       "html": "b) Por la ley de Bragg (<math display=\"inline\"><mrow><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7106</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7310</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> coincide, como cabía esperar, con la <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å del haz incidente mencionada en el enunciado.) El corrimiento Compton da orduan <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>≈</mo><mn>0.0203</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Y por la fórmula de Compton, con <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mspace width=\"0.222em\"></mspace><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Numéricamente, con <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.8367</mn></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mn>0.0203</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mn>0.8367</mn></mfrac><mo>≈</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Otros métodos para medir <math display=\"inline\"><mi>h</mi></math>: midiendo el potencial de frenado en <math display=\"inline\"><mi>ν</mi></math> frekuentziaren funtzioa efektu fotoelektrikoan; neurtzen Eraginkortasun azeleratzailearen arabera jaulkitako uhinaren gutxienezko luzera X izpien hodian; konstantearen neurritik Rydberg; gorputz beltz eta baten erradiazioaren neurritik Planck-en funtziora doitzea."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gas ideal baten propietate termikoak azaldu daitezke Fisika estatistiko klasikoa erabiliz, erdeinatuz energia translazionalaren mailen kuantizazioa Gasa osatzen duten molekulak."
      },
      {
       "mota": "testua",
       "html": ") gas bat hartzen badugu <math display=\"inline\"><mn>1</mn></math> cm <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> bolumena hartuz, zenbat tenperaturatan zuzendu behar diren Teoria klasikoaren iragarpenak efektu kuantiko horien ondorioz."
      },
      {
       "mota": "testua",
       "html": "b) La llamada condensación de Bose-Einstein se produce en un gas sakonera gutxikoa batez besteko distantziak hauen artekoak direnean magnitudearen ordena berdina uhin luzeraren balio tipikoa baino De Broglie molekularekin lotuta, hurbilketa erabiliz Teknologia klasikoa gasaren propietate termikoetarako eta badakielako densidades típicas utilizadas son del orden de <math display=\"inline\"><msup><mn>10</mn><mn>14</mn></msup></math> átomos<math display=\"inline\"><mrow><mi>/</mi><msup><mtext mathvariant=\"normal\">cm</mtext><mn>3</mn></msup></mrow></math>, estimazionatu kondentsazioa gertatuko den tenperatura Bose-Einstein."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Los niveles de energía en una caja son <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, gero, energia-jauzien eskala honela ematen da: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Kuantizazio fenomenoak kontuan hartu beharko dira. temperaturas por debajo de aquella en que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>≈</mo><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mi>q</mi></msub></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>T</mi><mi>q</mi></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>. Con <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> (luego <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> m) y tomando como masa <math display=\"inline\"><mi>m</mi></math> el orden de magnitud de un átomo o molécula típica (decenas o centenas de la masa del protón, <math display=\"inline\"><mrow><mi>m</mi><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>39</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>38</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mi>q</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><msub><mi>k</mi><mi>B</mi></msub></mfrac><mo>≈</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>38</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow><mrow><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/K</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Si la densidad de átomos en el gas es <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></math>, hay aproximadamente un átomo por volumen elemental <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>ρ</mi></mrow></math>, luego la atomoen arteko distantzia tipikoa hau da: <math display=\"block\"><mrow><mi>d</mi><mo>≈</mo><msup><mi>ρ</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn><mi>/</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math> Bestalde, Fisika estatistiko klasikoa erabiliz, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego el orden de magnitud del momento lineal es <math display=\"inline\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>≈</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mrow></math>, eta De Broglieren uhin-luzera, <math display=\"block\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>=</mo><mfrac><mi>h</mi><msub><mi>p</mi><mi>T</mi></msub></mfrac><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math> La condensación de Bose-Einstein ocurre cuando <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>≈</mo><mi>d</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">B-E </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"0.222em\"></mspace><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><mi>m</mi><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math> kg (mismo orden que en a)): <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">B-E </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo>×</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>40</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>4.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> μK</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos un sistema sencillo con tres niveles de energía <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mrow><mi>+</mi><mi>ε</mi></mrow></math> y degeneraciones <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>. El sistema está en contacto térmico con un reservorio de temperatura <math display=\"inline\"><mi>T</mi></math> y alcanza el equilibrio térmico. Demostrar que el calor específico del sistema es: <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La función de partición de una partícula: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>E</mi><mi>i</mi></msub></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>ε</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>ε</mi></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mi>.</mi></mrow></math> La energía media: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>Z</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>ε</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>ε</mi><mi>.</mi></mrow></math> El calor específico, con <math display=\"inline\"><mrow><mi>∂</mi><mi>β</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Derivando <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>ε</mi><mn>2</mn></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> y usando <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, el numerador se reduce a <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn></mrow></math>, con lo que <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> que es el resultado pedido. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masa partikula potentziala duen putzu batean dago <math display=\"inline\"><mi>L</mi></math> zabalera infinitua, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barrutian kokatua. Funtzioa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> uhina nulua da partikularen barruan izan ezik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> barrutia, non konstantea den. Kalkulatu zure ziurgabetasuna en la posición, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> konstantearekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> eta zero gainerakoetan. normalización: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> El valor medio de la posición: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>L</mi><mo>,</mo></mrow></math> como cabía esperar, en la mitad del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. Y <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>24</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><msup><mi>L</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La incertidumbre: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mrow><mfrac><mn>7</mn><mn>12</mn></mfrac><mo>−</mo><mfrac><mn>9</mn><mn>16</mn></mfrac></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mfrac><mn>1</mn><mn>48</mn></mfrac></msqrt><mo>≈</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula cargada de masa <math display=\"inline\"><mi>m</mi></math> se encuentra localizada entre los <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> puntuak, potentzial infinituko putzu batean konfitatuta anchura <math display=\"inline\"><mi>L</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál sería la longitud de onda máxima de la radiación que egoera asaldatu batetik bestera pasatzean, partikulak botako lituzke?"
      },
      {
       "mota": "testua",
       "html": "b) Ahora supongamos que la partícula se encuentra en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> en el estado dado por la función (sin normalizar) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Dentsitate espresioa zehaztea probabilidad de presencia de la partícula en un instante <math display=\"inline\"><mi>t</mi></math> geroko edozein. Zein da probabilitate dentsitatea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>n presentzia, <math display=\"inline\"><mi>t</mi></math> denboraren arabera?"
      },
      {
       "mota": "testua",
       "html": "c ) B atalean bezala, zein da? incertidumbre de la energía en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>10</mn></mrow></math> s?"
      },
      {
       "mota": "testua",
       "html": "Ayuda: <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mspace width=\"0.222em\"></mspace><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Frekuentzia emitida en una transición <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math> es <math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>n</mi></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>E</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>E</mi><mi>n</mi></msub><mi>.</mi></mrow></math> ( frekuentzia txikiena eta, beraz, ) uhin-luzera handiena gertatzen da para la transición de menor salto relativo, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>×</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mn>3</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mi>c</mi></mrow><mrow><mn>3</mn><mi>h</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Usando la ayuda, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Las funciones seno que aparecen (salvo normalización) son los estados estacionarios del pozo infinito para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Escribiendo <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mi>A</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mi>A</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, la normalización <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> da <math display=\"block\"><mrow><mfrac><mi>L</mi><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>9</mn><mn>16</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>5</mn><mn>16</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mi>L</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mn>1</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Honekin, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msqrt><mrow><mn>1</mn><mi>/</mi><mn>10</mn></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msqrt><mrow><mn>1</mn><mi>/</mi><mn>10</mn></mrow></msqrt></mrow></math> ( moduluan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>9</mn><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>10</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "La evolución temporal: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>3</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo></mrow></math> y la densidad de probabilidad: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>10</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>18</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>12</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>t</mi><mi>ħ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></math>, y evaluando en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math> (donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>10</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>18</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>12</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo>−</mo><mn>1.2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>9</mn><mn>10</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>+</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>9</mn><mn>5</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mi>E</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mi>E</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>9</mn><mn>10</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>81</mn><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">incert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msqrt><mrow><mn>9</mn><mo>−</mo><mfrac><mn>81</mn><mn>25</mn></mfrac></mrow></msqrt><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msqrt><mfrac><mn>144</mn><mn>25</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>12</mn><mn>5</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>.</mi></mrow></math> Esta incertidumbre NO depende del tiempo (es constante, como debe ser: la energía es una constante del movimiento para un estado que no cambia su composición en autoestados)."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Fisika kuantikoa: formalismo modernoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kuantizazioaren jatorri esperimentala (gorputz beltza, efektu fotoelektrikoa, Compton, eredu atomikoak, De Broglie) eta Schrödingerren ekuazioaren garapen formala (Bornen postulatua, normalizazioa, Dirac-en delta, pozo infinitua) badaude gainean. Falta dira oraindik: bra-ket notazioa, operadore hermitiarrak eta behagarriak modu abstraktuan, ziurgabetasun-printzipioa modu formalean, eta pareen sorrera/aniquilazioa (§4, jatorrizko iturrian titulua besterik ez zuen atala)."
      }
     ]
    }
   ]
  }
 ]
};
