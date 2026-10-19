/* JAKINA · ariketak (#ariketa, #problema + #ebazpena), de los capítulos con datos
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
const ARIKETAK = {
 "00aa_02logika#1": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a32",
  "atalaIzena": "1.-5. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>1. ariketa.</strong> Izan bedi <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Hemen <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> ez da formula bakar baten izena, formula guztietarako baliagarria den eskema baizik."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>1. ariketaren dedukzioa.</strong> Lerroen ordena:"
   },
   {
    "mota": "testua",
    "html": "<code>?</code> markek Mosterinen eraikuntza-helburuak adierazten dituzte: 1. lerroko orokorra, eta 2. lerroko baldintza. 3. lerroko hipotesia 4. lerroan errepikatzeak betetzen du tokiko helburua."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/53aef43a6db9d618.svg",
    "zabalera": 332
   },
   {
    "mota": "testua",
    "html": "4. lerroarekin 2. helburua ixten da; baldintzazko frogaren ondoren, <math display=\"inline\"><mi>x</mi></math> ez dago kanpoko premisetan libre, eta 1. lerroa orokortuz ixten da."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>α</mi></mrow></math> — elementu arbitrario baten instantziari dagokion azpihelburua.",
     "<strong>3.</strong> <math display=\"inline\"><mi>α</mi></math> — 2. lerroko baldintzaren aurrekaria, hipotesi gisa.",
     "<strong>4.</strong> <math display=\"inline\"><mi>α</mi></math> — R, 3."
    ]
   },
   {
    "mota": "testua",
    "html": "4. lerroak 2. lerroko baldintzazko helburua ixten du; <math display=\"inline\"><mi>x</mi></math> arbitrarioa denez, emaitza orokortu eta 1. lerroa ixten da. Ez da premisarik erabili."
   }
  ]
 },
 "00aa_02logika#2": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a32",
  "atalaIzena": "1.-5. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>2. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>2. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "1. eta 4. lerroak <code>?</code> helburuak dira. 5.-6. lerroetako azpifroga kontraesanezkoa da; amaitzean <math display=\"inline\"><mi>x</mi></math> arbitrarioaren emaitza orokortzen da."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/9b27b5fdd49dd0e3.svg",
    "zabalera": 415
   },
   {
    "mota": "testua",
    "html": "5. eta 6. lerroen kontraesanak 4. helburua ixten du; orokortzeak 1.a."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 2.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua, <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzat.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — 4. lerroko kontraesanezko hipotesia.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 3 eta 5."
    ]
   },
   {
    "mota": "testua",
    "html": "5. eta 6. lerroek 4. helburua ixten dute; gero <math display=\"inline\"><mi>x</mi></math>-rekiko orokortzeak 1. lerroa ematen du."
   }
  ]
 },
 "00aa_02logika#3": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a32",
  "atalaIzena": "1.-5. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>3. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>3. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<code>u</code> aldagai kritiko berria da 3. lerroko EP aplikazioan: ez dago ondorioan eta ez dago azpifrogatik kanpo erabilitako formula ireki batean libre."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/b245ad21b991479f.svg",
    "zabalera": 324
   },
   {
    "mota": "testua",
    "html": "2.-7. lerroen esparrua ixtean 1. lerroko baldintza lortzen da; <code>u</code> ez da ondoriora esportatzen."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 2; <math display=\"inline\"><mi>u</mi></math> aldagai kritiko berria da.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 5 eta 3.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 6."
    ]
   },
   {
    "mota": "testua",
    "html": "7. lerroak 1. lerroko baldintzazko helburua ixten du."
   }
  ]
 },
 "00aa_02logika#4": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a32",
  "atalaIzena": "1.-5. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>4. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>4. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "1., 4. eta 7. lerroetako <code>?</code> ikurrak helburuak dira. 2. lerroak kanpoko kontraesanezko esparrua irekitzen du; 5.-6. eta 8.-9. lerroek bi orokortzeen kasu arbitrarioak erakusten dituzte."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/ae27098e9a7395f2.svg",
    "zabalera": 436
   },
   {
    "mota": "testua",
    "html": "5.-6. lerroek 4. helburua eta 8.-9. lerroek 7.a ixten dituzte. 7. eta 11. lerroen kontraesanak 2. hipotesia baztertzen du eta 1. helburua ixten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 10."
    ]
   },
   {
    "mota": "testua",
    "html": "5.-6. lerroek 4. orokortzea ixten dute; 8.-9. lerroek 7. orokortzea. 7. eta 11. lerroen kontraesanarekin 2. hipotesia baztertzen da, eta 1. helburua geratzen da."
   }
  ]
 },
 "00aa_02logika#5": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a32",
  "atalaIzena": "1.-5. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>5. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>5. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<code>z</code> 7. lerroko EPren aldagai kritiko berria da. 8. lerroko <code>?</code> helburua baldintzazkoa da; jatorrizko dedukzioak 9. lerroko errepikapenarekin ixten du."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/f72b2bf2a804183d.svg",
    "zabalera": 434
   },
   {
    "mota": "testua",
    "html": "10. lerroak 2. hipotesiaren aurkakoa ematen du; <code>z</code> ez da azken formula existentzialetik kanpo agertzen."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 4.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 6; <math display=\"inline\"><mi>z</mi></math> aldagai kritikoa da.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 7.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 8."
    ]
   },
   {
    "mota": "testua",
    "html": "9. lerroak 8. baldintza ixten du. 10. lerroak 2. hipotesiaren aurkakoa ematen du eta hasierako helburua ixten du."
   }
  ]
 },
 "00aa_02logika#6": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a33",
  "atalaIzena": "6.-10. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>6. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>6. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "1., 2. eta 5. lerroak Mosterinen <code>?</code> helburuak dira. <code>u</code> 8. lerroko EPren aldagai kritiko berria da eta 5. helburua itxi ondoren ez da erabiltzen."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/f252f47d32d1630f.svg",
    "zabalera": 623
   },
   {
    "mota": "testua",
    "html": "9.-10. lerroek 5. helburua ixten dute; 3. eta 13. lerroek 2.a, eta azken orokortzeak 1.a. Esparru-itxierak <code>u</code> lekukoa kanpoan erabiltzea eragozten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ED, 4 eta 5.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 11.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 12 eta 3."
    ]
   },
   {
    "mota": "testua",
    "html": "9. eta 10. lerroek 5. helburua ixten dute; 3. eta 13. lerroek 2.a; azken orokortzeak 1. lerroa ematen du."
   }
  ]
 },
 "00aa_02logika#7": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a33",
  "atalaIzena": "6.-10. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>7. ariketa.</strong> Honako formulak emanda,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>7. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<code>x_0</code> 3. lerroko EPren aldagai kritiko berria da. <code>w</code> 5. lerroko existentziala sartzeko aukeratutako terminoa da; 14.-19. lerroetan <math display=\"inline\"><mi>y</mi></math> arbitrarioa da. <code>?</code> markak 1., 5., 14. eta 15. lerroetako helburuak dira."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/99ad7c9305f53db7.svg",
    "zabalera": 657
   },
   {
    "mota": "testua",
    "html": "19. lerroak 15. baldintza eta 14. orokortzea ixten ditu. 13. lerroaren eta 14. helburu itxiaren kontraesanak 5. baldintza ixten du; 20. lerroak 1.a."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 2; <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> kritikoa.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 4 eta 7.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IC, 6 eta 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 9.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 11.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 eta 10.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — <math display=\"inline\"><mi>y</mi></math> arbitrarioarentzako helburua.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 16.",
     "<strong>18.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
     "<strong>19.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 18 eta 17.",
     "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5."
    ]
   },
   {
    "mota": "testua",
    "html": "19. lerroak 15. baldintza eta gero 14. orokortzea ixten ditu. 13. eta 14. lerroen kontraesanak 5. baldintza ixten du; 20. lerroak hasierako helburua betetzen du."
   }
  ]
 },
 "00aa_02logika#8": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a33",
  "atalaIzena": "6.-10. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>8. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>8. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "1. eta 2. lerroak <code>?</code> helburu orokorra eta baldintzazkoa dira. <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioak dira; <code>w</code> 8. lerroko EPren aldagai kritiko berria da."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/9eaabddb00f67690.svg",
    "zabalera": 476
   },
   {
    "mota": "testua",
    "html": "22. lerroak 2. baldintza ixten du. <code>w</code> ez da ondorioan agertzen; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioen orokortzeak 1. helburua ematen du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>w</mi></math> kritikoa.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 eta 9.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 10.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 eta 11.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 eta 5.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 15.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
     "<strong>18.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 17 eta 16.",
     "<strong>19.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 eta 18.",
     "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 19.",
     "<strong>21.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
     "<strong>22.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 21 eta 20."
    ]
   },
   {
    "mota": "testua",
    "html": "22. lerroak 2. baldintza ixten du; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioak direnez, 1. lerroa orokortzen da."
   }
  ]
 },
 "00aa_02logika#9": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a33",
  "atalaIzena": "6.-10. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>9. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "00aa_02logika#10": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a33",
  "atalaIzena": "6.-10. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>10. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "00aa_02logika#11": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a34",
  "atalaIzena": "11.-15. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>11. ariketa.</strong> Frogatu teorema logikoa dela"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>11. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "Idatz dezagun <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <code>?</code> helburuak 1., 2., 4., 5., 14., 16., 18., 20. eta 21. lerroetan daude. <code>u</code> eta <code>w</code> 22.-23. lerroetako EP aplikazioen aldagai kritiko berri eta desberdinak dira."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/62fc4ffcda7e611a.svg",
    "zabalera": 516
   },
   {
    "mota": "testua",
    "html": "13. lerroak 5., 4. eta 2. helburuak ixten ditu. 26. lerroak 21. eta 20. orokortzeak, 18. eta 16. baldintzak eta 14. noranzkoa ixten ditu; IBk bi noranzkoak 27. lerroan elkartzen ditu. <code>u,w</code> ez dira ondorioan esportatzen. Jar dezagun <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Jatorrizko 27 urratsak:"
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> — lehen noranzkoaren helburua.",
     "<strong>3.</strong> <math display=\"inline\"><mi>A</mi></math> — baldintzazko hipotesia.",
     "<strong>4.</strong> <math display=\"inline\"><mi>B</mi></math> — helburua.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioentzako helburua.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 7.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 3 eta 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 10.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 eta 11.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow></math> — bigarren noranzkoaren helburua.",
     "<strong>15.</strong> <math display=\"inline\"><mi>B</mi></math> — baldintzazko hipotesia.",
     "<strong>16.</strong> <math display=\"inline\"><mi>A</mi></math> — helburua.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>18.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>19.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>21.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
     "<strong>22.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 17; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
     "<strong>23.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 19; <math display=\"inline\"><mi>w</mi></math> kritikoa eta <math display=\"inline\"><mi>u</mi></math>-tik desberdina.",
     "<strong>24.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 22 eta 23.",
     "<strong>25.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 15.",
     "<strong>26.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 25 eta 24.",
     "<strong>27.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — IB, 2 eta 14."
    ]
   },
   {
    "mota": "testua",
    "html": "13. lerroak 5. baldintza eta 4. orokortzea ixten ditu; horrela 2. noranzkoa lortzen da. 26. lerrotik 21. eta 20. orokortzeak, 18. eta 16. baldintzak eta azkenik 14. noranzkoa ixten dira. IBk bi noranzkoak 27. lerroan elkartzen ditu."
   }
  ]
 },
 "00aa_02logika#12": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a34",
  "atalaIzena": "11.-15. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>12. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>12. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "1. lerroa <code>?</code> helburua da. 2. lerroak haren kontraesanezko esparrua irekitzen du; premisak jatorrizko 5., 7. eta 9. lerroetan sartzen dira."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/46cbc99e8377bf3a.svg",
    "zabalera": 547
   },
   {
    "mota": "testua",
    "html": "11. eta 12. lerroen kontraesanak 2. hipotesia baztertzen du eta 1. helburua ixten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 2.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 6 eta 7.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 9.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 10.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 eta 4."
    ]
   },
   {
    "mota": "testua",
    "html": "11. eta 12. lerroen kontraesanak hasierako helburua ixten du."
   }
  ]
 },
 "00aa_02logika#13": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a34",
  "atalaIzena": "11.-15. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>13. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>13. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 13. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "Jatorrizko 1. eta 4. lerroetako <code>?</code> ikurrak helburua eta azpihelburua dira, ez premisa berriak. Diagraman bi lerroak <code>helburua (?)</code> gisa ageri dira eta 4.-11. lerroen barrutia barra bertikalaz mantentzen da."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/51fe508927c33492.svg",
    "zabalera": 419
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>x</mi></math> arbitrarioa da 6.-16. lerroetan; 11. lerroak 4. azpihelburua ixten du, eta 16. lerroaren orokortzeak 1. helburua ematen du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 7.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EI, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 7.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 9 eta 10.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 4.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MT, 3 eta 12.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NP, 13.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 15."
    ]
   },
   {
    "mota": "testua",
    "html": "11. lerroak 4. orokortzea ixten du. 13.-16. urratsek <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzat <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen dute, eta azken orokortzeak 1. helburua ixten du."
   }
  ]
 },
 "00aa_02logika#14": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a34",
  "atalaIzena": "11.-15. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>14. ariketa.</strong> Extensionalitatearen premisatik,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "frogatu"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>14. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 14. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "Jatorrizko <code>?</code> markak 1., 2., 6., 7., 14. eta 18. lerroetan mantendu dira <code>helburua (?)</code> etiketarekin. 3., 15. eta 19. lerroak dira baldintzazko hipotesiak; <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi></mrow></math> arbitrarioen barrutiak azpifrogen habiaratzeak erakusten ditu."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/b7606e5f994e747f.svg",
    "zabalera": 641
   },
   {
    "mota": "testua",
    "html": "17. eta 21. lerroek bi baldintzazko adarrak ixten dituzte; IBk 22. lerroa, <math display=\"inline\"><mi>x</mi></math>-ren orokortzeak 6.a eta extensionalitateak 25. lerroa ematen ditu."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — helburua.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 4.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 5.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 8.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — EB, 8.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 9.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — EB, 9.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — helburua.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — baldintzazko hipotesia.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 10 eta 15.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — MP, 13 eta 16.",
     "<strong>18.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — helburua.",
     "<strong>19.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — baldintzazko hipotesia.",
     "<strong>20.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 12 eta 19.",
     "<strong>21.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — MP, 11 eta 20.",
     "<strong>22.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — IB, 14 eta 18.",
     "<strong>23.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>24.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 23.",
     "<strong>25.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 24 eta 6."
    ]
   },
   {
    "mota": "testua",
    "html": "17. eta 21. lerroek bi noranzkoak ixten dituzte; 22. lerroak 7. helburua eta gero 6. orokortzea ematen ditu. 25. lerroak 2. baldintza ixten du, eta <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi></mrow></math> arbitrarioen orokortzeak 1. lerroa."
   }
  ]
 },
 "00aa_02logika#15": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a34",
  "atalaIzena": "11.-15. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>15. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "00aa_02logika#16": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a35",
  "atalaIzena": "16.-20. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>16. ariketa.</strong> Frogatu teorema logikoa dela"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>16. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 16. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "1., 3. eta 7. lerroetako <code>?</code> ikurrak helburuak dira. 2. lerroa baldintzazko hipotesia da; 4. eta 8. lerroek bi kontraesanezko azpifroga independente irekitzen dituzte."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/4fca5411ddd823d0.svg",
    "zabalera": 523
   },
   {
    "mota": "testua",
    "html": "5.-6. eta 9.-10. lerroetako kontraesanek hurrenez hurren 3. eta 7. azpihelburuak ixten dituzte; 14. lerroak 2. hipotesiaren barrutia ixten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — azpihelburua.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 4.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — kontraesanezko hipotesia.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 7.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 11.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — SI, 3.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 eta 13."
    ]
   },
   {
    "mota": "testua",
    "html": "5. eta 6. lerroek 3. helburua ixten dute; 9. eta 10. lerroek 7.a. Berdintasunaren simetria eta ordezkapen-eskema erabilita, 14. lerroak hasierako baldintza ixten du."
   }
  ]
 },
 "00aa_02logika#17": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a35",
  "atalaIzena": "16.-20. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>17. ariketa.</strong> Frogatu teorema logikoa dela <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>17. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 17. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "1., 2. eta 7. lerroetako <code>?</code> markak helburuak dira; 3. eta 8. lerroak bi noranzkoetako baldintzazko hipotesiak dira. 9. lerroko EPn <math display=\"inline\"><mi>u</mi></math> aldagai kritiko berria da eta 8. lerroko existentzialaren barrutian bakarrik erabiltzen da."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/5cda2ddc74a7c6e7.svg",
    "zabalera": 358
   },
   {
    "mota": "testua",
    "html": "6. eta 14. lerroek bi noranzkoetako barrutiak ixten dituzte; 15. lerroko IBk bi emaitzak lotzen ditu."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — lehen noranzkoaren helburua.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi></mrow></math> — I.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 eta 3.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — bigarren noranzkoaren helburua.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 8; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 9.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi></mrow></math> — EC, 9.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 10.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 eta 11.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IB, 2 eta 7."
    ]
   },
   {
    "mota": "testua",
    "html": "6. eta 14. lerroek bi baldintzak ixten dituzte; IBk 15. lerroko bikondizionala ematen du."
   }
  ]
 },
 "00aa_02logika#18": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a35",
  "atalaIzena": "16.-20. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>18. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>18. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 18. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "1. lerroko <code>?</code> helburua kontraesanez frogatzen da: 2. lerroan haren ezeztapen bikoitza irekitzen da. 11. lerroko EPn <math display=\"inline\"><mi>u</mi></math> kritikoa berria da eta ez da existentzialaren kanpoan orokortzen."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/d84dd69f5dacde28.svg",
    "zabalera": 479
   },
   {
    "mota": "testua",
    "html": "7. eta 17. lerroek aurkako formulak ematen dituzte; kontraesanak 2. hipotesia baztertu eta 1. helburua ixten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — kontraesanezko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EB, 4.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi></mrow></math> — I.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 5 eta 6.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 8 eta 2.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 9.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 10; <math display=\"inline\"><mi>u</mi></math> kritikoa.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 11.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 13.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 eta 15.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 16."
    ]
   },
   {
    "mota": "testua",
    "html": "7. eta 17. lerroak elkarren ezeztapenak dira; beraz 2. hipotesia baztertu eta 1. helburua ixten da."
   }
  ]
 },
 "00aa_02logika#19": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a35",
  "atalaIzena": "16.-20. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>19. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>19. ariketaren dedukzioa.</strong>"
   },
   {
    "mota": "testua",
    "html": "<span>Frederic egitura - 19. ariketa</span>"
   },
   {
    "mota": "testua",
    "html": "1., 7. eta 12. lerroetako <code>?</code> markek helburu habiaratuak adierazten dituzte. 2. eta 13. lerroak dira baldintzazko hipotesiak; <math display=\"inline\"><mi>x</mi></math> arbitrarioa da 8.-17. lerroen barrutian, eta 15. lerroko <math display=\"inline\"><mi>v</mi></math> existentzialki sartzeko lekuko librea da."
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/097f38dc63d48297.svg",
    "zabalera": 624
   },
   {
    "mota": "testua",
    "html": "17. lerroak 12. baldintza ixten du; <math display=\"inline\"><mi>x</mi></math>-ren orokortzeak 7. lerroa ematen du, eta 18. lerroak 2. hipotesiaren barrutia ixten du."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<strong>1.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — helburua.",
     "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — baldintzazko hipotesia.",
     "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
     "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
     "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
     "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 5.",
     "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — azpihelburua.",
     "<strong>8.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
     "<strong>9.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 8.",
     "<strong>10.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
     "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 10.",
     "<strong>12.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako helburua.",
     "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — baldintzazko hipotesia.",
     "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 eta 13.",
     "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
     "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 15.",
     "<strong>17.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 11 eta 16.",
     "<strong>18.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 6 eta 7."
    ]
   },
   {
    "mota": "testua",
    "html": "17. lerroak 12. baldintza ixten du eta <math display=\"inline\"><mi>x</mi></math>-rekiko orokortzeak 7. lerroa ematen du. 18. lerroak hasierako baldintza ixten du."
   }
  ]
 },
 "00aa_02logika#20": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a35",
  "atalaIzena": "16.-20. ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>20. ariketa.</strong> <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, frogatu <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Testuinguru aljebraikoan, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ek ezkerreko biderkadurarekiko eskuin-ezeztapena adierazten du; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-k elementu baten existentzia eta alderantzizkoen antzeko baldintza bat biltzen ditu; <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k eskuineko elementu neutro bakarra dagoela formalizatzen du."
   },
   {
    "mota": "testua",
    "html": "<strong>Muga (L04/L05):</strong> 20.aren enuntziatua 72. orrialde inprimatuan amaitzen da; dedukzioa 73.ean hasten da eta L05i dagokio. Ez da hemen bikoizten."
   }
  ],
  "ebazpena": null
 },
 "00aa_02logika#21": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
   },
   {
    "mota": "testua",
    "html": "Ariketak argumentu honen akatsa formalizatzen du: &quot;Problema hau ebazteko gai den oro matematikaria da; Antoniok ezin du problema ebatzi; beraz, Antonio ez da matematikaria&quot;. Aurrekari bat ez betetzeak ez du ondorioaren ezeztapena ematen."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>S</mi></math> hutsa denez, <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldintza egiazkoa da unibertsoko objektu bakarrarentzat, eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Halaber, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; beraz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>. Baina <math display=\"inline\"><mrow><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; hau da, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Interpretazio bakar horrek bi premisak eta ondorioaren porrota batera erakusten ditu."
   }
  ]
 },
 "00aa_02logika#22": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
   },
   {
    "mota": "testua",
    "html": "Irakurketa arruntean: &quot;justu guztiek begirunea mereziko balute, Coriolanok bere patua mereziko luke; magnanimoek eta haiek bakarrik merezi dute begirunea; magnanimo oro justua da; beraz, Coriolanok bere patua merezi du&quot;."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Aukeratu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> faltsua da, <math display=\"inline\"><mn>0</mn></math> <math display=\"inline\"><mi>I</mi></math>-n baitago baina ez <math display=\"inline\"><mi>R</mi></math>-n; horregatik <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> baldintza osoa egiazkoa da. <math display=\"inline\"><mi>R</mi></math> eta <math display=\"inline\"><mi>M</mi></math> biak hutsak direnez, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoa da; <math display=\"inline\"><mi>M</mi></math> hutsa denez, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ere bai. Aldiz, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta, ondorioz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Beraz, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> ez da lehen hiruren ondorioa."
   }
  ]
 },
 "00aa_02logika#23": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Frogatu:"
   },
   {
    "mota": "zerrenda",
    "ordenatua": true,
    "elementuak": [
     "<math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-rekiko;",
     "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-rekiko."
    ]
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ez da beste biekiko independentea: iturriko 8. dedukzio-ariketan <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> frogatu zen."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren independentzia.</strong> Hartu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><mi>R</mi></math>-katearik eta bi objekturen ondorengo komunik ez dagoenez, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> hutsean egiazkoak dira. Baina <math display=\"inline\"><mn>0</mn></math>-k ez du <math display=\"inline\"><mi>R</mi></math>-ondorengorik; hortaz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo>⊨</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-ren independentzia.</strong> Hartu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Objektu bakoitzak <math display=\"inline\"><mn>0</mn></math> ondorengoa du; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoa da. Erlazioak ez du bi urratseko kate batek eskatzen duen gezi berririk falta, eta <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> ere egiazkoa da. Hala ere, <math display=\"inline\"><mn>0</mn></math> eta <math display=\"inline\"><mn>1</mn></math> objektuek <math display=\"inline\"><mn>0</mn></math> ondorengo komuna dute, baina <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; horregatik <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
   }
  ]
 },
 "00aa_02logika#24": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>6</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>7</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>8</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> biak independenteak direla <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>,</mo><msub><mi>α</mi><mn>5</mn></msub><mo>,</mo><msub><mi>α</mi><mn>6</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Bi independentziak interpretazio berarekin ikus daitezke. Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mi>ω</mi></mrow></math>, zenbaki naturalen multzoa, eta ezarri:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mn>0</mn></math> ez da ondorengo funtzioaren balioa eta funtzioa injektiboa da; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> egiazkoak dira. <math display=\"inline\"><mi>P</mi></math> hutsa denez, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren aurrekaria faltsua da eta <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> ere hutsean betetzen da. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> pareak <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> asetzen du. Ez dago <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> parerik; hortaz, <math display=\"inline\"><msub><mi>α</mi><mn>6</mn></msub></math>-ren aurrekari guztiak faltsuak dira. Beraz, lehen sei formulak egiazkoak dira."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> faltsua da: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> hartuta ez dago <math display=\"inline\"><mi>y</mi></math>-rik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duenik. <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> ere faltsua da: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> hartuta ez da <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere ez. Interpretazio berak bi ondorioen independentzia frogatzen du."
   }
  ]
 },
 "00aa_02logika#25": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Frogatu <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> independentea dela <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
   },
   {
    "mota": "testua",
    "html": "Formulek Anselmoren argumentu ontologikoaren bertsio bat kodetzen dute: <math display=\"inline\"><mi>d</mi></math> pentsa daitekeen handiena da; <math display=\"inline\"><mi>d</mi></math> pentsa daiteke; zerbait pentsa daiteke eta existitzen da; existitzen den objektu pentsagarri oro existitzen ez den edozein objektu pentsagarri baino handiagoa da; ondorio gisa, <math display=\"inline\"><mi>d</mi></math> existitzen dela aldarrikatzen da."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, deskribapen inpropioen balioa <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zein <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> hartuta, bada <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> non <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; hortaz, ez dago <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen duen objekturik. Deskribapena inpropioa da, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denotatzen du, eta hori <math display=\"inline\"><mi>d</mi></math>-ren balioa denez, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> egiazkoa da. <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere egiazkoa da. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k <math display=\"inline\"><mn>1</mn></math> lekukoa du. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-n existitzen den objektu pentsagarria <math display=\"inline\"><mn>1</mn></math> da, eta existitzen ez den objektu pentsagarria <math display=\"inline\"><mn>0</mn></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k baldintza betetzen du. Baina <math display=\"inline\"><mi>d</mi></math>-k <math display=\"inline\"><mn>0</mn></math> denotatzen du eta <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; beraz, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Kontraereduak erakusten du argumentua baliogabea dela, existentzia predikatu gisa tratatuta ere. Horrek ez du esan nahi premisetatik ezer ateratzen ez denik: iturriko 34. dedukzio-ariketak beste ondorio baldintzatu bat ematen du. Han ere ikusten da &quot;pentsa daitekeen handiena&quot; esapidea interpretazio honetan deskribapen inpropioa dela."
   }
  ]
 },
 "00aa_02logika#26": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez baliokidetasun-erlazioaren hiru axioma hauek:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> independentea dela."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Formula bakoitzarentzat beste biak gordetzen dituen kontraeredu bana behar dugu."
   },
   {
    "mota": "testua",
    "html": "<strong>Erreflexibotasuna kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Erlazioa simetrikoa eta iragankorra da hutsean, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> independentea da."
   },
   {
    "mota": "testua",
    "html": "<strong>Simetria kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Erlazioa erreflexiboa eta iragankorra da, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egia eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gezurra; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea da."
   },
   {
    "mota": "testua",
    "html": "<strong>Iragankortasuna kenduz.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Erlazioa erreflexiboa eta simetrikoa da. Hala ere, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoak dira, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua; ondorioz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> independentea da. Hiru interpretazioek <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko axioma bakoitza gainerakoetatik ezin dela ondorioztatu frogatzen dute."
   }
  ]
 },
 "00aa_02logika#27": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> independentea dela."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Erlazioa antisimetikoa eta totala da: objektu desberdinen pare bakoitzean norabideetako bat agertzen da, eta ez dira bi norabideak batera agertzen. Baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoak dira, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez; beraz, ez da iragankorra."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Erlazio unibertsala iragankorra eta totala da, baina <math display=\"inline\"><mrow><mn>0</mn><mo>≠</mo><mn>1</mn></mrow></math> izan arren bi norabideak betetzen ditu; hortaz, ez da antisimetikoa."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Erlazioa iragankorra eta antisimetikoa da hutsean, baina <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua da; beraz, ez da totala."
   }
  ]
 },
 "00aa_02logika#28": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>P</mi></math> &quot;puntua&quot;, <math display=\"inline\"><mi>R</mi></math> &quot;zuzena&quot; eta <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> &quot;<math display=\"inline\"><mi>x</mi></math> puntua <math display=\"inline\"><mi>z</mi></math> zuzenean dago&quot; gisa irakurrita, izan bitez:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>y</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bada, frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> independentea dela. Formulek Hilberten geometria euklidearraren lehen lotura-axiomak adierazten dituzte: bi puntu desberdinek zuzen bat dute; zuzen hori bakarra da; zuzen bakoitzak bi puntu desberdin ditu; eta badira zuzen berean ez dauden hiru puntu."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Ez dago zuzenik; beraz, bakartasun-axioma eta zuzen bakoitzeko bi puntuen axioma hutsean betetzen dira. Hiru puntuak desberdinak eta ez-kolinealak dira, baina edozein bi puntu lotuko dituen zuzenik ez dago; <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, eta"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Puntu-pare bakoitzak gutxienez zuzen bat du, zuzen bakoitzak gutxienez bi puntu ditu, eta ez dago hiru puntuak batera dituen zuzenik. Baina <math display=\"inline\"><mn>1</mn></math> eta <math display=\"inline\"><mn>2</mn></math> puntuak <math display=\"inline\"><mn>5</mn></math> zein <math display=\"inline\"><mn>6</mn></math> zuzenetan daude; beraz, lotura-zuzena ez da bakarra eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> faltsua da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Unibertso, puntu eta zuzen multzo berak hartu, baina:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Puntu-pare bakoitzak zuzen bakarra du: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> bikoteak <math display=\"inline\"><mn>4</mn></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> bikoteak <math display=\"inline\"><mn>5</mn></math>; <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math> bikoteak <math display=\"inline\"><mn>3</mn></math>. Hiru puntuak ez daude zuzen berean. Hala ere, <math display=\"inline\"><mn>6</mn></math> zuzenak ez du punturik; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> faltsua da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. Ez dago bi puntu desberdinik edo zuzenik, eta lehen hiru axiomak hutsean egiazkoak dira. Baina ezin dira hiru puntu desberdin aukeratu; hortaz, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> faltsua da."
   }
  ]
 },
 "00aa_02logika#29": {
  "mota": "ariketa",
  "kapitulua": "00aa_02logika",
  "atala": "a46",
  "atalaIzena": "III.6. Independentzia frogatzeko ariketak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Frogatu <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> independentea dela."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>-en kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>r</mi></math>-tik beste <math display=\"inline\"><mi>S</mi></math> objekturako <math display=\"inline\"><mi>A</mi></math> erlazioa dago, <math display=\"inline\"><mi>p</mi></math>-k <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> den <math display=\"inline\"><mn>1</mn></math> objektuarekin erlazioa du, eta <math display=\"inline\"><mi>A</mi></math> asimetrikoa da. Hala ere, <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> biak betetzen dituen objektu bakarra <math display=\"inline\"><mn>1</mn></math> da, ez <math display=\"inline\"><mi>r</mi></math>-k denotatzen duen <math display=\"inline\"><mn>0</mn></math>; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> faltsua da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><mi>G</mi></math> objektu bakarra <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mi>r</mi></mrow></math> da; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn></mrow></math>-ek harekin <math display=\"inline\"><mi>A</mi></math> erlazioa du; eta erlazioa asimetrikoa da. Baina <math display=\"inline\"><mn>1</mn></math> <math display=\"inline\"><mi>S</mi></math> da eta <math display=\"inline\"><mrow><mn>1</mn><mo>≠</mo><mi>r</mi></mrow></math>, nahiz eta <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua izan. Horregatik <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independentea da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> egiazkoa da, eta <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> hutsean egiazkoa da, ez baitago <math display=\"inline\"><mi>r</mi></math>-tik desberdina den <math display=\"inline\"><mi>S</mi></math> objekturik. <math display=\"inline\"><mi>A</mi></math> hutsa asimetrikoa da. Baina ez dago <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duen lekukorik; beraz, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> faltsua da."
   },
   {
    "mota": "testua",
    "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>-ren kontraeredua.</strong> Har dezagun <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Lehen formula egiazkoa da; bigarrena hutsean betetzen da; eta hirugarrenak <math display=\"inline\"><mn>0</mn></math> lekukoa du. Aldiz, <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egiazkoa izanik, <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faltsua da; hortaz, <math display=\"inline\"><mi>A</mi></math> ez da asimetrikoa eta <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> faltsua da."
   }
  ]
 },
 "01ma_01espazioak#1": {
  "mota": "ariketa",
  "kapitulua": "01ma_01espazioak",
  "atala": "a8",
  "atalaIzena": "Eulerren formula eta De Moivre",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi <math display=\"inline\"><mrow><msup><mi>z</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> eta kokatu hiru erroak plano konplexuan. Ondoren, azaldu zergatik dauden <math display=\"inline\"><mrow><mn>120</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko angeluz bereizita."
   }
  ],
  "ebazpena": null
 },
 "01ma_01espazioak#2": {
  "mota": "ariketa",
  "kapitulua": "01ma_01espazioak",
  "atala": "a8",
  "atalaIzena": "Eulerren formula eta De Moivre",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Idatzi <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup></math> eta <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>θ</mi></mrow></msup></math> erabiliz. Emaitza hori erabiliko da gero Fourier-en serieetan eta uhin harmonikoetan."
   }
  ],
  "ebazpena": null
 },
 "01ma_01espazioak#3": {
  "mota": "ariketa",
  "kapitulua": "01ma_01espazioak",
  "atala": "a19",
  "atalaIzena": "Ariketa (azterketa): sistema sortzailea, oinarria eta koordenatuak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <strong>a)</strong> Frogatu <math display=\"inline\"><mi>T</mi></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <strong>sistema sortzailea</strong> dela. <strong>b)</strong> Atera <math display=\"inline\"><mrow><mi>S</mi><mo>⊂</mo><mi>T</mi></mrow></math> bat <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <strong>oinarri</strong> izan dadin. <strong>c)</strong> Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektoreen koordenatuak <math display=\"inline\"><mi>S</mi></math>-rekiko."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>a) Sistema sortzailea.</strong> <math display=\"inline\"><mi>T</mi></math>-ko bektoreak <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></math> matrize baten errenkadak dira; <math display=\"inline\"><mrow><mn>1</mn><mo>≤</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> errango </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≤</mo><mn>3</mn></mrow></math>, eta errangoa <math display=\"inline\"><mn>3</mn></math> bada, <math display=\"inline\"><mi>T</mi></math> sistema sortzailea da. Lehen hiru bektoreen <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minorea, lehen errenkadatik garatuz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Beraz errangoa <math display=\"inline\"><mn>3</mn></math> da eta <strong><math display=\"inline\"><mi>T</mi></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren sistema sortzailea da</strong>. (2. metodoa: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n koefizienteak askatuz; denak existitzen badira, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math> sortzen dute.)"
   },
   {
    "mota": "testua",
    "html": "<strong>b) Oinarria.</strong> <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; haren determinantea <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> denez (a atalekoa), <math display=\"inline\"><mi>S</mi></math> <strong><math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarria da</strong>."
   },
   {
    "mota": "testua",
    "html": "<strong>c) Koordenatuak.</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (2.)<math display=\"inline\"><mi>−</mi></math>(1.): <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>. (3.): <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>δ</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math>. (1.): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>. Egiaztapena: <math display=\"inline\"><mrow><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓."
   },
   {
    "mota": "kutxa",
    "kolorea": "laranja",
    "titulua": null,
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>−</mo><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> (2.)<math display=\"inline\"><mi>−</mi></math>(1.): <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>. (3.): <math display=\"inline\"><mrow><mi>−</mi><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>. (1.): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>."
   },
   {
    "mota": "kutxa",
    "kolorea": "laranja",
    "titulua": null,
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "(koherentea: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mi>S</mi></math>-ren hirugarren bektorea da)."
   }
  ]
 },
 "01ma_01espazioak#4": {
  "mota": "problema",
  "kapitulua": "01ma_01espazioak",
  "atala": "a25",
  "atalaIzena": "(13) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (<math display=\"inline\"><mi>n</mi></math> bakoitia denean)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mi>V</mi></math> dimentsio finituko espazio bektoriala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> <strong>bakoitia</strong>, eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> aplikazio lineala. Frogatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_01espazioak#5": {
  "mota": "problema",
  "kapitulua": "01ma_01espazioak",
  "atala": "a26",
  "atalaIzena": "(14) <math display=\"inline\"><mi>f</mi></math> ongi definitua <math display=\"inline\"><mi>W</mi></math> azpiespazioan",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>,</mo><mi>−</mi><mn>3</mn><mi>z</mi><mo>−</mo><mi>t</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (i) Frogatu <math display=\"inline\"><mi>f</mi></math> ongi definitua dagoela."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sortzaileak linealki independenteak dira, lehen bi koordenatuen determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> baita: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> ongi definitua dago <math display=\"inline\"><mi>W</mi></math>-tik <math display=\"inline\"><mi>W</mi></math>-ra irudikatzen badu (irudi bakarra elementu bakoitzeko). Sortzaileen irudiak: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>6</mn><mi>u</mi><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math> biak <math display=\"inline\"><mi>W</mi></math>-koak. Beraz <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> ongi definitua dago."
   }
  ]
 },
 "01ma_02matrizeak#1": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a2",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>10</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "Bi ekuazio hauek bi &quot;datu&quot; desberdin direla esan dezakegu? Ez al da egia bigarrenak lehenengoaren gauza bera esaten duela?"
       }
      ]
     }
    ]
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "Adierazi grafikoan eta ikusi zuzen bera direla.",
     "Asmatu bi ezezaguneko bi ekuazioko beste sistema bat, bigarrena funtsean lehenengoaren berdina izateko baldintzarekin. Adierazi grafiko batean."
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#2": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a2",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "Hirugarren ekuazioa lehenengo biak atalez atal kenduta lortu dugu (3.a <math display=\"inline\"><mo>=</mo></math> 1.a <math display=\"inline\"><mi>−</mi></math> 2.a). Beraz, hirugarrenak ez du gauza berririk esaten: beste bietatik atera daiteke."
       }
      ]
     }
    ]
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "Adierazi grafikoan eta ikusi lehenengo bi zuzenek puntu bat zehazten dutela (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>); ikusi hirugarren zuzena ere puntu horretatik igarotzen dela.",
     "Eman beste ekuazio bat, hori ere lehenengo bien &quot;ondorioa&quot; izan dadila (adibidez, <math display=\"inline\"><mrow><mn>2</mn><mo>⋅</mo></mrow></math> 1.a <math display=\"inline\"><mrow><mi>+</mi><mn>3</mn><mo>⋅</mo></mrow></math> 2.a); adierazi eta ikusi <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> puntutik igarotzen dela."
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#3": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a2",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>7</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "Kasu honetan bigarren ekuazioak esaten duena lehenengoak esaten duenaren kontra doa."
       }
      ]
     }
    ]
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "Adierazi eta ikusi bi zuzenak paraleloak direla; hau da, soluzio berdinik ez dutela.",
     "Aldatu 1. ariketan asmatu duzun sistemako bigarren ekuazioaren gai askea: orain ekuazio biek kontrakoa esango dute eta zuzen paraleloak agertuko zaizkizu."
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#4": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a2",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "Hemen 3. ekuazioko lehen atala beste bien ataletatik lortu dugu (1.a <math display=\"inline\"><mi>−</mi></math> 2.a <math display=\"inline\"><mo>=</mo></math> 3.a), baina gai askeak ez du arau hori jarraitzen."
       }
      ]
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Beraz, hirugarren ekuazioak esaten duena beste bien aurka dago: ezin da soluziorik egon, datuek elkarren kontra egiten dutelako."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "Adierazi hiru zuzenak eta ikusi hirugarrena ez dela igarotzen beste biek elkar ebakitzen duten puntutik.",
     "Aldatu 2. ariketako zuzenaren gai askea: aldaketaren ondoren ez da beste biek elkar ebakitzen duten puntutik igaroko."
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#5": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a5",
  "atalaIzena": "Soluziodun eta soluzio gabeko ekuazio sistemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi eta interpretatu modu geometrikoan honako ekuazio sistema hauek:"
   },
   {
    "mota": "sarea",
    "zutabeak": "repeat(1, minmax(0,1fr))",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>1.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>2.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>3.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>4.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>5.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>7</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>6.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>7.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<strong>8.</strong>"
       },
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#6": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a5",
  "atalaIzena": "Soluziodun eta soluzio gabeko ekuazio sistemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Ebatzi <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow></math> sistema. <em>(b)</em> Gehitu bateragarria izango den hirugarren ekuazio bat. <em>(c)</em> Gehitu bateraezina izango den hirugarren ekuazio bat. <em>(d)</em> Interpretatu modu geometrikoan kasu bakoitzean egin duzuna."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#7": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a7",
  "atalaIzena": "Gauss-en metodoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hau Gauss-en metodoa erabiliz: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo>=</mo><mn>11</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#8": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a7",
  "atalaIzena": "Gauss-en metodoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hau Gauss-en metodoa erabiliz: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo>=</mo><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>10</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>11</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#9": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a7",
  "atalaIzena": "Gauss-en metodoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hau Gauss-en metodoa erabiliz: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>15</mn><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>8</mn><mi>y</mi><mo>−</mo><mn>21</mn><mi>z</mi><mo>=</mo><mn>11</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#10": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a8",
  "atalaIzena": "Ekuazio sistemen eztabaida",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eztabaidatu eta ebatzi, ahal denean, goiko sistema."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#11": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bilatu sistema hauen soluzioa, baldin badago, eta interpretatu grafikoan:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>8</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#12": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hauek; adierazi aldez aurretik mailakatuta dauden:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>11</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>69</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>9</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>t</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<strong>c)</strong>"
     },
     {
      "mota": "testua",
      "html": "Igaro <math display=\"inline\"><mi>y</mi></math> bigarren atalera."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#13": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bihurtu sistema mailakatu eta ebatzi:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>17</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>6</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>16</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>6</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#14": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Arrazoitu sistema hauek soluziorik ote duten eta interpretatu grafikoan:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>6</mn><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>4</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#15": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi Gauss-en metodoa erabiliz eta interpretatu grafikoan:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#16": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sailkatu sistema hauek bateragarri eta bateraezin diren arabera:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#17": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu eta ebatzi Gauss-en metodoa erabiliz:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>+</mo><mn>6</mn><mi>z</mi><mo>=</mo><mn>29</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>7</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "e",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>−</mo><mn>14</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>+</mo><mn>6</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "f",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "g",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>7</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "h",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>13</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "i",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "j",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>+</mo><mi>w</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>w</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "k",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>−</mo><mi>w</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mi>w</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "l",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>w</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>z</mi><mo>−</mo><mi>w</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>w</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#18": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eztabaidatu ekuazio sistema hauek:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>k</mi><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>a</mi><mi>y</mi><mo>+</mo><mn>4</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "c",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>3</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "d",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "e",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "f",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>a</mi><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "g",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mi>m</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "h",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#19": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi linealak ez diren sistema hauek:"
   },
   {
    "mota": "sistemak",
    "elementuak": [
     {
      "et": "a",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>16</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
       }
      ]
     },
     {
      "et": "b",
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>6</mn><mo>+</mo><mn>2</mn><msqrt><mn>5</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>6</mn><mo>−</mo><mn>2</mn><msqrt><mn>5</mn></msqrt></mtd></mtr></mtable></mrow></math>"
       }
      ]
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<strong>a)</strong>"
     },
     {
      "mota": "testua",
      "html": "Garatu eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>-ren ordez jarri <math display=\"inline\"><mn>5</mn></math>."
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<strong>b)</strong>"
     },
     {
      "mota": "testua",
      "html": "Garatu eta kendu 2. ekuazioari 1.a."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#20": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu hiru zifrako zenbaki bat, euren arteko batura <math display=\"inline\"><mn>9</mn></math> dela, emandako zenbakiari zifren ordena alderantziz jartzean lortzen dena kentzen badiogu diferentzia <math display=\"inline\"><mn>198</mn></math> dela, eta hamarrekoan dagoen zifra beste bien batez besteko aritmetikoa dela jakinda."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mi>x</mi></math> unitateen zifra bada, <math display=\"inline\"><mi>y</mi></math> hamarrekoena eta <math display=\"inline\"><mi>z</mi></math> ehunekoena, zenbakia <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>10</mn><mi>y</mi><mo>+</mo><mn>100</mn><mi>z</mi></mrow></math> izango da."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#21": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bi lagunek erabaki dute bakoitzak 2 000 000 PTA inbertitzea. Lehenengoak <math display=\"inline\"><mi>A</mi></math> kantitate bat jarri du %4ko interesean, <math display=\"inline\"><mi>B</mi></math> kantitatea %5ean eta gainerakoa %6an. Besteak <math display=\"inline\"><mi>A</mi></math> kantitate bera %5ean jarri du, <math display=\"inline\"><mi>B</mi></math> %6an eta gainerakoa %4an. Zehaztu <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math> kantitateak, lehenengoak lortu dituen interesak 105 000 PTA direla eta bigarrenak lortu dituenak 95 000 PTA jakinda."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#22": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Denda batek bideojoko baten 600 ale saldu ditu, guztira 638 400 PTAtan. Jatorrizkoak 1 200 PTA balio zuen, baina akatsen bat zuten kopiak ere saldu dituzte, eta horiek %30 eta %40 merkeago saldu dituzte. Saldu dituzten akastun kopiak jatorrizkoen erdiak izan direla jakinda, kalkulatu zenbat kopia saldu diren %30 merkeago."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#23": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Astelehenetik ostiralera langile batek 1 200 PTA kobratzen ditu lanordu bakoitzeko eta 2 000 PTA ordu &quot;extra&quot; bakoitzeko. Asteburuan 2 500 PTA kobratzen ditu orduko. Aste honetan 30 lanordu eta 10 ordu &quot;extra&quot; egin ditu."
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Asteburuan 4 ordu lan egiten baditu, zein izango da bere batez besteko soldata orduko aste honetan?"
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Zenbat ordu egin beharko ditu asteburuan orduko batez beste 1 650 PTAko soldata lortzeko?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#24": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru lagunek erabaki dute hiru jokaldi egingo dituztela dadotan. Batek galtzen duenean, beste biei eman beharko die une horretan duten diru kantitatea. Bakoitzak jokaldi bana galdu zuen eta azkenean bakoitzak 24 PTA zituen. Zenbat diru zeukan jokalari bakoitzak jokoaren hasieran?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#25": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aita baten adina, semeen adinen baturaren bikoitza da. Orain urte batzuk (semeek gaur egun dituzten adinen arteko diferentzia adierazten duena), aitaren adina orduan semeek zuten adinen baturaren hirukoitza zen. Gaur egungo semeen adinen baturaren beste hainbeste urte igarotzen direnean, hiruren artean 150 urte izango dituzte. Zenbat urte zuen aitak semeak jaio zirenean?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#26": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Tresna elektrikoak egiten dituen gizon batek produkzio finkoa du: 42 unitate. Lantegiak hiru dendari saltzen die produkzio osoa. Baina, aste batean, lehenengo dendak bigarrenak eta hirugarrenak batera eskatzen zuten beste tresna eskatu zituen; bigarrenak, lehenengoak eskatutako erdiaren eta hirugarrenak eskatutako herenaren arteko batura baino %20 gehiago eskatu zuen. Zenbat eskatu zuen denda bakoitzak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#27": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sei lagun izozki-dendara doaz. Izozki handi bat, edari bat eta lau freskagarri eskatu, eta 3 400 PTA ordaindu dute. Hurrengo egunean lau izozki handi eta bi izozki-edari eskatu, eta 4 400 PTA ordaindu dute. Aurkitu izozkien eta izozki-edariaren prezioak freskagarri baten prezioaren funtzioan, baita freskagarriak 500 PTA balio duelarik ere."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#28": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "60 litro ardo zuri eta 20 litro ardo beltz nahasten badira, 10 graduko ardoa lortzen da (ehuneko 10 alkohol). Baina 20 litro ardo zuri eta 60 litro ardo beltz nahasten badira, 11 graduko ardoa lortzen da. Zenbat gradu izango ditu 40 litro ardo zuri eta 40 litro ardo beltz nahastean lortuko dugun ardoak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#29": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Andoni, David eta Xabierren altueren arteko diferentzia hiru bider hazten bada, Andoni eta Xabier altuera berekoak izango lirateke. Hiruren altueren batura 515 cm da. Daviden altuera zortzi aldiz eta Andonirena bederatzi aldiz berdinak dira. Zenbat neurtzen du bakoitzak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#30": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kooperatiba farmazeutiko batek hiru formatutan banatzen ditu produktuak: A, B, C. Euren pisu eta prezioak hauek dira:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "taula",
      "goiburua": [
       "<strong>FORMATUA</strong>",
       "<strong>PISUA (g)</strong>",
       "<strong>PREZIOA (PTA)</strong>"
      ],
      "lerroak": [
       [
        "A"
       ],
       [
        "250"
       ],
       [
        "100"
       ],
       [
        "B"
       ],
       [
        "500"
       ],
       [
        "180"
       ],
       [
        "C"
       ],
       [
        "1 000"
       ],
       [
        "330"
       ]
      ]
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Farmazia bati 5 kaxako lotea bidali diote, 2,5 kg pisatzen du eta 890 PTA balio du. Mota bakoitzeko zenbat ontzi erosi ditu farmaziak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#31": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ikastetxe batean neska eta mutil kopuruen arteko lotura <math display=\"inline\"><mrow><mn>8</mn><mi>/</mi><mn>7</mn></mrow></math> zen ikasturte hasieran. Ikasturtean zehar 40 neskak eta mutilen %4k ikasteari utzi zioten, eta, beraz, lotura <math display=\"inline\"><mrow><mn>15</mn><mi>/</mi><mn>14</mn></mrow></math> bihurtu zen ikasturte amaieran. Sexu bakoitzeko zenbat ikaslek burutu zuten ikasturtea?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#32": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru lagun —<math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math>— 8 600 PTAko oparia egin nahian ari dira. Diru kantitate bera ez dutenez, honela ordainduko dute: <math display=\"inline\"><mi>A</mi></math>-k, <math display=\"inline\"><mi>B</mi></math>-k eta <math display=\"inline\"><mi>C</mi></math>-k batera baino hiru bider gehiago ordainduko du; <math display=\"inline\"><mi>C</mi></math>-k 3 PTA ordainduko ditu <math display=\"inline\"><mi>B</mi></math>-ren 2 PTAko. Zenbat ordainduko du bakoitzak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#33": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math>-ren zein baliorekin izango da bateragarria sistema hau? Zehaztua izango da?    <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>b</mi></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#34": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "2 ezezaguneko 2 ekuazio lineal dituen sistema bateragarri zehazgabe bat badaukagu, sistema bateraezin bat lor dezakegu hirugarren ekuazio bat gehituta?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#35": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Eratu soluziotzat <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn></mrow></math> izango dituen bi ekuazioko sistema bat. Aurkitu soluzio guztiak."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Eratu gai aske guztiak zero izango dituen eta soluziotzat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango duen hiru ezezaguneko hiru ekuazioko sistema bat. Ebatzi."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#36": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "2 ezezaguneko 2 ekuazio dituen sistema bateraezin bati hirugarren ekuazio bat gehitzen badiogu, bateragarri zehazgabea izatea lor dezakegu? Eta zehaztua? Justifikatu erantzunak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#37": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Beheko sistema hau sistema bateragarri zehazgabe bihurtu dezakegu zeinu bat aldatzen badugu?    <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#38": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Badago <math display=\"inline\"><mi>k</mi></math>-ren baliorik sistema honek infinitu soluzio izan ditzan?"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>k</mi><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#39": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>a</mi></math>-ren zein baliorekin izango da bateraezina sistema hau? Infinitu soluzio izan ditzake?    <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>a</mi><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#40": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Honako sistema hau sistema bateraezin bihurtu dezakegu hirugarren ekuazioa bakarrik aldatuta? Arrazoitu erantzuna eta eman adibide bat."
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#41": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Esan honako baieztapen hauek egia ala gezurra diren, eta jarri adibidea edo adibide kontrakoa kasu bakoitzean:"
   },
   {
    "mota": "zerrenda",
    "ordenatua": true,
    "etiketak": [
     "I)",
     "II)",
     "III)"
    ],
    "elementuak": [
     "Sistema bateragarri zehazgabe batean ekuazio bat kendu eta sistema baliokide bat lor daiteke.",
     "Sistema bateragarri zehazgabe batek bi ekuazio berdin ditu beti.",
     "Sistema bateraezin batetik bateragarria den sistema atera dezakegu ekuazioak kenduta."
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#42": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Honako sistema hau daukagu:    <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Gehitu ekuazio bat bateraezin bihurtu dadin, eta interpretatu modu geometrikoan egoera hori."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Sistema bateragarri zehazgabe bihurtuko duen ekuazioren bat gehitu diezaiokegu?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#43": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a10",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru ezezagun dituen bi ekuazioko sistema bat bateragarri zehaztua izan daiteke? Eman erantzuna argituko duten adibideak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#44": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a12",
  "atalaIzena": "Gaian sartzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru laguni —<math display=\"inline\"><mi>M</mi></math>, <math display=\"inline\"><mi>N</mi></math>, <math display=\"inline\"><mi>P</mi></math>— honako hau eskatzen diegu: «Zuetako bat gauza izango litzateke futbol-partidu bat arbitratzeko? Esan zein.» Erantzunak hauek dira:"
   },
   {
    "mota": "sarea",
    "zutabeak": "minmax(0,1fr) auto minmax(0,0.6fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "<math display=\"inline\"><mi>M</mi></math>-k uste du bera eta <math display=\"inline\"><mi>P</mi></math> direla gauza. <br><math display=\"inline\"><mi>N</mi></math>-k uste du <math display=\"inline\"><mi>M</mi></math> bakarrik dela gauza. <br><math display=\"inline\"><mi>P</mi></math>-k uste du bera bakarrik, <math display=\"inline\"><mi>P</mi></math>, dela gauza."
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "irudia",
        "oina": null,
        "src": "media/irudiak/75428982f1b8707f.svg",
        "zabalera": 135
       }
      ]
     },
     {
      "blokeak": []
     }
    ]
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "Egin gogoeta erantzunen eta euren eskuinaldean agertzen den zeroz eta batekoz eratutako zenbakizko kaxaren arteko loturari buruz."
    ]
   },
   {
    "mota": "testua",
    "html": "Zenbakizko beste kaxa hau antzerki-talde bateko zazpi ikaslek (<math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math>, <math display=\"inline\"><mi>C</mi></math>, <math display=\"inline\"><mi>D</mi></math>, <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>F</mi></math> eta <math display=\"inline\"><mi>G</mi></math>) honako galderari emandako erantzunen laburpena da: «Zuetako zein izango zinateke gauza asteko ikasketa-ostera bat diseinatu, antolatu eta zuzentzeko?»"
   },
   {
    "mota": "irudia",
    "oina": null,
    "src": "media/irudiak/1975d8ad59734b41.svg",
    "zabalera": 242
   },
   {
    "mota": "testua",
    "html": "Erantzunak kontuan izanda, erantzun:"
   },
   {
    "mota": "zerrenda",
    "ordenatua": true,
    "etiketak": [
     "a)",
     "b)",
     "c)"
    ],
    "elementuak": [
     "Zein uste duzu dela ameslari samarra?",
     "Bi taldekide gainerakoengandik nahiko baztertuta daude. Zeintzuk?",
     "Ostera antolatzeko euretako bat aukeratu behar bazenu, zein aukeratuko zenuke?"
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#45": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a12",
  "atalaIzena": "Gaian sartzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> herri batean hiru nazioarteko aireportu daude —<math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>A</mi><mn>3</mn></msub></math>— eta <math display=\"inline\"><mi>B</mi></math> herrian lau —<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>B</mi><mn>3</mn></msub></math>, <math display=\"inline\"><msub><mi>B</mi><mn>4</mn></msub></math>—. Pertsona batek <math display=\"inline\"><mi>A</mi></math>-tik <math display=\"inline\"><mi>B</mi></math>-ra joan nahi du astelehenean, eta hegaldi hauek ditu (eskuinean, taula gisa ere adieraz daitezke):"
   },
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "irudia",
        "oina": null,
        "src": "media/irudiak/0234e34bcea25470.svg",
        "zabalera": 156
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "taula",
        "goiburua": [
         "",
         "<strong><math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math></strong>",
         "<strong><math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math></strong>",
         "<strong><math display=\"inline\"><msub><mi>B</mi><mn>3</mn></msub></math></strong>",
         "<strong><math display=\"inline\"><msub><mi>B</mi><mn>4</mn></msub></math></strong>"
        ],
        "lerroak": [
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math></strong>",
          "1",
          "0",
          "2",
          "0"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math></strong>",
          "0",
          "1",
          "1",
          "1"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>3</mn></msub></math></strong>",
          "0",
          "0",
          "0",
          "1"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Gezien bidez adierazita dituzu hemen <math display=\"inline\"><mi>B</mi></math> herritik <math display=\"inline\"><mi>C</mi></math>-ra dauden astearteko hegaldi guztiak. Adierazi taula batean, aurreko adibidean bezala:"
   },
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "irudia",
        "oina": null,
        "src": "media/irudiak/2f9e7b26c4d2c397.svg",
        "zabalera": 156
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "taula",
        "goiburua": [
         "",
         "<strong><math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math></strong>",
         "<strong><math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math></strong>"
        ],
        "lerroak": [
         [
          "<strong><math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math></strong>",
          "3",
          "2"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math></strong>",
          "1",
          "0"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>B</mi><mn>3</mn></msub></math></strong>",
          "1",
          "0"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>B</mi><mn>4</mn></msub></math></strong>",
          "0",
          "2"
         ]
        ]
       }
      ]
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Pertsona batek astelehenean <math display=\"inline\"><mi>A</mi></math>-tik irten, gaua <math display=\"inline\"><mi>B</mi></math>-n egin eta asteartean <math display=\"inline\"><mi>C</mi></math>-ra iritsi nahi du. Zenbat konbinazio ditu aukeran irteera- eta iriste-puntu bakoitzeko? Taula hau osatu behar da:"
   },
   {
    "mota": "sarea",
    "zutabeak": "auto minmax(0,1fr)",
    "zelulak": [
     {
      "blokeak": [
       {
        "mota": "taula",
        "goiburua": [
         "",
         "<strong><math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math></strong>",
         "<strong><math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math></strong>"
        ],
        "lerroak": [
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math></strong>",
          "5",
          "2"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math></strong>",
          "2",
          "2"
         ],
         [
          "<strong><math display=\"inline\"><msub><mi>A</mi><mn>3</mn></msub></math></strong>",
          "0",
          "2"
         ]
        ]
       }
      ]
     },
     {
      "blokeak": [
       {
        "mota": "testua",
        "html": "Esaterako, <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>-etik <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math>-era joateko:"
       },
       {
        "mota": "zerrenda",
        "ordenatua": false,
        "elementuak": [
         "<math display=\"inline\"><msub><mi>B</mi><mn>1</mn></msub></math>-etik igaroz gero: <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>3</mn></mrow></math> aukera.",
         "<math display=\"inline\"><msub><mi>B</mi><mn>2</mn></msub></math>-tik igaroz gero: ezinezkoa.",
         "<math display=\"inline\"><msub><mi>B</mi><mn>3</mn></msub></math>-tik igaroz gero: <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>1</mn><mo>=</mo><mn>2</mn></mrow></math> aukera.",
         "<math display=\"inline\"><msub><mi>B</mi><mn>4</mn></msub></math>-tik igaroz gero: ezinezkoa."
        ]
       },
       {
        "mota": "testua",
        "html": "Guztira, 5 modu ditu <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>-etik <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math>-era joateko. <em>Jarraitu zeuk.</em>"
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#46": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Eragiketak matrizeekin",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Badago <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> egiaztatzen duen <math display=\"inline\"><mi>n</mi></math>-ren baliorik?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#47": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrizeen biderketa",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak izanik, kalkulatu: <em>(a)</em>  <math display=\"inline\"><mrow><mi>B</mi><mo>⋅</mo><mi>C</mi></mrow></math>;"
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>B</mi></mrow></math>; <em>(c)</em>  <math display=\"inline\"><mrow><mi>B</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo>⋅</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#48": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Alderantzizko matrizea",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen alderantzizkoa. <em>(b)</em> Frogatu <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak ez duela alderantzizkorik."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#49": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "<math display=\"inline\"><mi>n</mi></math>-garren berretzailea",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, kalkulatu <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#50": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Ekuazioak matrizeekin",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu honako hau egiaztatzen duten <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math>  matrizeak:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<img class=\"formula\" src=\"media/formulak/3b86eaef03a74258.svg\" alt=\"A + B = mat(3,2,1; 3,1,3) #h(2em) 2A - 2B = mat(-6,0,2; 2,2,2)\" style=\"width:21.634em;height:1.232em\" loading=\"lazy\">"
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#51": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Ekuazio matriziala",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu hau betetzen duten <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>z</mi></math>:   <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#52": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrize baten heina",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen heina aztertu <math display=\"inline\"><mi>a</mi></math>-ren balioen arabera. Badago <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">hein</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen duen <math display=\"inline\"><mi>a</mi></math>-ren baliorik?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#53": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrize trukagarriak",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, aurkitu <math display=\"inline\"><mi>A</mi></math>-rekin trukagarriak diren <math display=\"inline\"><mi>B</mi></math> matrize guztiak; hau da, <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mi>B</mi><mo>⋅</mo><mi>A</mi></mrow></math> betetzen dutenak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#54": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Enuntziatuen interpretazio matriziala",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ondoko taulak <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mi>R</mi></math>, <img class=\"formula\" src=\"media/formulak/de8290eba98e2a21.svg\" alt=\"S\" style=\"width:0.990em;height:1.001em\" loading=\"lazy\"> produktu bakoitzak pisu-unitateko duen <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math> bitaminen kantitatea adierazten du."
   },
   {
    "mota": "taula",
    "goiburua": [
     "",
     "<strong>A</strong>",
     "<strong>B</strong>",
     "<strong>C</strong>"
    ],
    "lerroak": [
     [
      "<strong>P</strong>",
      "1",
      "2",
      "0"
     ],
     [
      "<strong>Q</strong>",
      "1",
      "0",
      "2"
     ],
     [
      "<strong>R</strong>",
      "2",
      "1",
      "0"
     ],
     [
      "<strong>S</strong>",
      "1",
      "1",
      "1"
     ]
    ]
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Produktu guztiak bilduko dituen eta <math display=\"inline\"><mi>A</mi></math> bitaminaren 20 unitate, <math display=\"inline\"><mi>B</mi></math>-ren 25 eta <math display=\"inline\"><mi>C</mi></math>-ren 6 izango dituen dieta egin nahi dugu. Egin daiteke? Zenbat modutan?  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>Q</mi></math> produktuaren kantitatea 2 unitate bada, zein izango dira beste produktuen kantitateak?    <em>(c)</em> Lortu beste produktuen kantitateak dietan sartzen den <math display=\"inline\"><mi>Q</mi></math> kantitatearen arabera. Zein balioren artean egon behar du <math display=\"inline\"><mi>Q</mi></math>-ren kantitateak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#55": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Alderantzizko matrizea",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Matrize bat <strong>alderantzizgarria</strong> dela esaten da alderantzizko matrizea duenean. Frogatu <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> alderantzizgarriak badira, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> betetzen dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#56": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrize nulua",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea (<math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mi>−</mi><mi>I</mi></mrow></math>), <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mo>+</mo><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> dela jakinda."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#57": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrizeen biderkadura",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, aurki dezakegu <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> beteko duen <math display=\"inline\"><mi>B</mi></math> matrizea? Eta <math display=\"inline\"><mrow><mi>C</mi><mo>⋅</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> beteko duen <math display=\"inline\"><mi>C</mi></math> matrizea? Justifikatu erantzunak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#58": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a22",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Matrize simetrikoa",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zein baldintza bete behar du <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> dimentsioko <math display=\"inline\"><mi>A</mi></math> matrizeak <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math> egiaztatzeko?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#59": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak izanda, kalkulatu:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>A</mi><mo>+</mo><mn>3</mn><mi>B</mi></mrow></math>;    <em>(b)</em>  <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow></math>;    <em>(c)</em>  <math display=\"inline\"><mrow><mi>B</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<em>(d)</em>  <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>A</mi><mo>−</mo><mi>B</mi><mo>⋅</mo><mi>B</mi></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#60": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egin biderketa hau:    <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#61": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Berdinak dira <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak?"
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Eragiketa hauetatik zein egin daitezke aurreko bi matrizeekin:   (I)  <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow></math>;    (II)  <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow></math>;    (III)  <math display=\"inline\"><mrow><mi>B</mi><mo>⋅</mo><mi>A</mi></mrow></math>? Egin eragiketak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#62": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak izanda, egiaztatu:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><mo>+</mo><msup><mi>B</mi><mi>t</mi></msup></mrow></math>;    <em>(b)</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>A</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mn>3</mn><msup><mi>A</mi><mi>t</mi></msup></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#63": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>A</mi><mo>−</mo><mi>A</mi><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dela, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#64": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mn>3</mn><mi>A</mi><msup><mi>A</mi><mi>t</mi></msup><mo>−</mo><mn>2</mn><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#65": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak izanda, egiaztatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>B</mi><mi>t</mi></msup><mo>⋅</mo><msup><mi>A</mi><mi>t</mi></msup></mrow></math> dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#66": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu kasu bakoitzean berdintasuna egiaztatzen duen <math display=\"inline\"><mi>B</mi></math>  matrizea:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>3</mn><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#67": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>4</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen alderantzizkoa dela. Zein da <math display=\"inline\"><mi>B</mi></math> matrizearen alderantzizkoa?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#68": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mi>A</mi></math>-ren alderantzizko matrizea <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>  dela:   <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,    <math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#69": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zein da unitate-matrizearen alderantzizko matrizea?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#70": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeen alderantzizkoak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#71": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurreko ariketako <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> matrizeekin eta <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> alderantzizkoekin, egiaztatu:    <em>(a)</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≠</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>+</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>⋅</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#72": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu matrize hauen heina:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#73": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu matrize hauen heina:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>29</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#74": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mn>2</mn><mi>X</mi><mo>+</mo><mi>Y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>−</mo><mi>Y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> sistema egiaztatuko duten <math display=\"inline\"><mi>X</mi></math> eta <math display=\"inline\"><mi>Y</mi></math> matrizeak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#75": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mi>X</mi></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>−</mo><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow></math> bete dadin. Kontuan izan:"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#76": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zehaztu <math display=\"inline\"><mi>m</mi></math>-ren balioak <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak <math display=\"inline\"><mrow><msup><mi>X</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>X</mi><mo>+</mo><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> egiaztatzeko."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#77": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi:    <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#78": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, kalkulatu <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>,</mo><msup><mi>A</mi><mn>3</mn></msup><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>A</mi><mn>128</mn></msup></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#79": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>A</mi><mo>−</mo><mi>I</mi></mrow></math> dela, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mi>I</mi></math> 3 ordenako unitate-matrizea badira. Erabili berdintasun hori <math display=\"inline\"><msup><mi>A</mi><mn>4</mn></msup></math> kalkulatzeko."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#80": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zehaztu zein diren <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math> egiaztatzeko."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#81": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>7</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>7</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#82": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, aurkitu <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> beteko duen <math display=\"inline\"><mi>B</mi></math> matrizea."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#83": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, egiaztatu <math display=\"inline\"><msup><mi>A</mi><mn>3</mn></msup></math> matrizea nulua dela. Egiaztatu <math display=\"inline\"><mrow><mi>I</mi><mo>+</mo><mi>A</mi><mo>+</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> matrizea <math display=\"inline\"><mrow><mi>I</mi><mo>−</mo><mi>A</mi></mrow></math> matrizearen alderantzizkoa dela."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Egin <math display=\"inline\"><mrow><mi>I</mi><mo>+</mo><mi>A</mi><mo>+</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> bider <math display=\"inline\"><mrow><mi>I</mi><mo>−</mo><mi>A</mi></mrow></math>."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#84": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, egiaztatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> dela eta adierazi <math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> matrizea <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>I</mi></math>-ren konbinazio lineal moduan."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#85": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrizearen heina <math display=\"inline\"><mi>k</mi></math>-ren balioen arabera."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#86": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mi>A</mi></math>-ren alderantzizkoa <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>  dela:   <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,    <math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>2</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>6</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math> egiaztatzen duen <math display=\"inline\"><mi>X</mi></math> matrizea, <math display=\"inline\"><mi>A</mi></math> aurreko matrizea eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanda."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#87": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen alderantzizkoa."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#88": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu ondorengo matrizeen heina <math display=\"inline\"><mi>k</mi></math> parametroaren balioen arabera:"
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
          "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#89": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Industri gizon batek egiten dituen bonbillak bi motakoak dira: gardenak (<math display=\"inline\"><mi>G</mi></math>) eta opakoak (<math display=\"inline\"><mi>O</mi></math>). Mota bakoitzean lau modelo egiten dira —<math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math>—, eta asteroko produkzioa taula honek ematen du:"
   },
   {
    "mota": "taula",
    "goiburua": [
     "",
     "<strong><math display=\"inline\"><mi>G</mi></math></strong>",
     "<strong><math display=\"inline\"><mi>O</mi></math></strong>"
    ],
    "lerroak": [
     [
      "<strong><math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math></strong>",
      "300",
      "200"
     ],
     [
      "<strong><math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math></strong>",
      "400",
      "250"
     ],
     [
      "<strong><math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math></strong>",
      "250",
      "180"
     ],
     [
      "<strong><math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math></strong>",
      "500",
      "300"
     ]
    ]
   },
   {
    "mota": "testua",
    "html": "Akastun bonbillen ehunekoa %2 da <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math> modeloan, %5 <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>-n, %8 <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>-n eta %10 <math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math>-n. Kalkulatu produzitzen diren bonbilla garden eta opakoen, onen eta akastunen kopurua adierazten duen matrizea."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Erabili <math display=\"inline\"><mi>D</mi></math>  (akastunak) eta <math display=\"inline\"><mi>B</mi></math>  (onak)  probabilitate-matrizea:"
     }
    ]
   },
   {
    "mota": "taula",
    "goiburua": [
     "",
     "<strong><math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math></strong>",
     "<strong><math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math></strong>",
     "<strong><math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math></strong>",
     "<strong><math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math></strong>"
    ],
    "lerroak": [
     [
      "<strong><math display=\"inline\"><mi>D</mi></math></strong>",
      "0,02",
      "0,05",
      "0,08",
      "0,1"
     ],
     [
      "<strong><math display=\"inline\"><mi>B</mi></math></strong>",
      "0,98",
      "0,95",
      "0,92",
      "0,9"
     ]
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#90": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Altzarigileek besaulkiak, kulunkaulkiak eta aulki arruntak egiten dituzte, bakoitza hiru modelotan: M (merkea), N (normala) eta G (garestia). Hilean: besaulkietan 20 M, 15 N eta 10 G; kulunkaulkietan 12 M, 8 N eta 5 G; aulkietan 18 M, 20 N eta 12 G. Adierazi informazio hori matrize batean eta kalkulatu urtebeteko produkzioa."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#91": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eraikin batean hiru etxe mota daude: L3, L4 eta L5. L3 etxeek 4 leiho txiki eta 3 handi dituzte; L4 etxeek 5 txiki eta 4 handi; L5 etxeek 6 txiki eta 5 handi. Leiho txiki bakoitzak 2 kristal eta 4 banda ditu, eta handiek 4 kristal eta 6 banda. <em>(a)</em> Idatzi etxe bakoitzeko leiho kopurua eta tamaina deskribatzen duen matrize bat, eta leiho mota bakoitzaren kristal- eta banda-kopurua adierazten duen beste bat. <em>(b)</em> Kalkulatu etxe mota bakoitzaren kristal- eta banda-kopurua adierazten duen matrizea."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#92": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Enpresa batek hiru motako tresnak egiten ditu: R, S eta T. Kostu- eta salmenta-prezioak (unitateko) eta urtean saldutako unitate kopurua taula honetan daude:"
   },
   {
    "mota": "taula",
    "goiburua": [
     "",
     "<strong>Kostu-prezioa <br>(PTA)</strong>",
     "<strong>Salmenta-prezioa <br>(PTA)</strong>",
     "<strong>Urtean saldut. <br>unitateak</strong>"
    ],
    "lerroak": [
     [
      "<strong>R</strong>",
      "600",
      "1 800",
      "2 240"
     ],
     [
      "<strong>S</strong>",
      "920",
      "2 800",
      "1 625"
     ],
     [
      "<strong>T</strong>",
      "1 430",
      "4 000",
      "842"
     ]
    ]
   },
   {
    "mota": "testua",
    "html": "Badakigu <math display=\"inline\"><mi>C</mi></math> eta <math display=\"inline\"><mi>I</mi></math>  (kostu- eta diru-sarrera matrizeak) diagonalak direla eta <math display=\"inline\"><mi>V</mi></math> (salmenta-matrizea) lerro-matrize bat dela. <em>(a)</em> Zehaztu <math display=\"inline\"><mi>C</mi></math>, <math display=\"inline\"><mi>I</mi></math> eta <math display=\"inline\"><mi>V</mi></math> matrizeak."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Horietatik abiatuz, lortu urteko diru-sarreren matrizea (<math display=\"inline\"><mi>A</mi></math>), urteko gastuen matrizea (<math display=\"inline\"><mi>G</mi></math>) eta urteko irabazien matrizea (<math display=\"inline\"><mi>B</mi></math>)."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#93": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Beheko taulan A, B eta C hiru telebista-kateek astebeterako izan dezaketen audientzia agertzen da (milaka pertsonatan):"
   },
   {
    "mota": "taula",
    "goiburua": [
     "",
     "<strong>A</strong>",
     "<strong>B</strong>",
     "<strong>C</strong>"
    ],
    "lerroak": [
     [
      "<strong>Goizean</strong>",
      "40",
      "60",
      "150"
     ],
     [
      "<strong>Arratsaldean</strong>",
      "60",
      "50",
      "20"
     ],
     [
      "<strong>Gauean</strong>",
      "150",
      "90",
      "70"
     ]
    ]
   },
   {
    "mota": "testua",
    "html": "Baina programazioaren ondorioz, A katea %10 jaitsi da, B %5 jaitsi eta C %20 igo, ordu guztietan. <em>(a)</em> Lortu kate bakoitzaren audientzia erreala adierazten duen matrizea."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Ikusle bakoitzeko irabazia goizean 500 PTA, arratsaldean 700 PTA eta gauean 1 000 PTA bada, kalkulatu hiru kateen irabaziak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#94": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Justifikatu zergatik ez den egia berdintasun hau: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>B</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> edozein bi matrize izanda."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#95": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math>  <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>2</mn></mrow></math> dimentsioko matrizea da. <em>(a)</em> Badago <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow></math> lerro bakarreko matrizea eratuko duen <math display=\"inline\"><mi>B</mi></math> matrizerik? <em>(b)</em> Eta <math display=\"inline\"><mrow><mi>B</mi><mo>⋅</mo><mi>A</mi></mrow></math>? Jarri kasu bakoitzaren adibide bat, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela kontuan izanda."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#96": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> tamaina bereko bi matrize karratu dira. <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> simetrikoak badira, <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi></mrow></math> ere simetrikoa izango da? Erantzuna baiezkoa bada, justifikatu; ezezkoa bada, eman adibide bat."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#97": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> matrizeak <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>A</mi><mo>−</mo><mi>I</mi></mrow></math> betetzen baditu, frogatu <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mi>I</mi></mrow></math> dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#98": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math>  <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> matrizea da eta heina 2 du. Alda daiteke bere heina, lerro bat edo zutabe bat gehitzen badiogu?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#99": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Heina 3 duen <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> matrizea dugu. <em>(a)</em> Zelan aldatuko da heina zutabe bat kentzean? <em>(b)</em> Lerro bat eta zutabe bat kentzean, esan dezakegu sortzen den matrizearen heina 2 dela?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#100": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, aztertu <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mi>B</mi></mrow></math> beteko duen <math display=\"inline\"><mi>x</mi></math>-en baliorik dagoen."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#101": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mn>2</mn></math> ordenako <math display=\"inline\"><mi>A</mi></math> matrize karratu baten <strong>aztarna</strong> honela definitzen dugu: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">azt</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub></mrow></math>. Frogatu <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math>  <math display=\"inline\"><mn>2</mn></math> ordenako matrize karratuak badira, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">azt</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> azt</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#102": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math>  <math display=\"inline\"><mn>3</mn></math> ordenako matrize karratua da eta <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> betetzen du <math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math> denean (matrize diagonala da). Frogatu bi matrize diagonalen biderkadura ere diagonala dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#103": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> ordena bereko bi matrize karratu dira. <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo>⋅</mo><mi>C</mi></mrow></math> berdintasunetik, orokorrean, ezin da <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> ondorioztatu. <em>(a)</em> Frogatu hori <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo>⋅</mo><mi>C</mi></mrow></math> betetzen duten <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math> bi matrize desberdin aurkituz, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanda."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Zein baldintza bete behar du <math display=\"inline\"><mi>A</mi></math>-k <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mi>A</mi><mo>⋅</mo><mi>C</mi></mrow></math>-tik <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> ateratzeko?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#104": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizea izanda, frogatu <math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>+</mo><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> dela eta erabili berdintasun hori <math display=\"inline\"><msup><mi>A</mi><mn>10</mn></msup></math> lortzeko."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Egin <math display=\"inline\"><mrow><msup><mi>A</mi><mn>10</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>⋅</mo><mi>A</mi></mrow></math> eta kontuan izan <math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mi>−</mi><mi>I</mi></mrow></math> dela."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#105": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen heina <math display=\"inline\"><mi>a</mi></math>-ren balioen arabera."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#106": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mn>2</mn></math> ordenako matrize karratu bat, <math display=\"inline\"><mi>I</mi></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>I</mi></mrow></math>-ren desberdina, bere alderantzizko irauliarekin bat datorrena."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Matrizeak <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>I</mi></mrow></math> bete behar du."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#107": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Matrize karratu bat <strong>ortogonala</strong> da bere alderantzizkoa eta iraulia bat datozenean. Kalkulatu <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>, honako <math display=\"inline\"><mi>A</mi></math> matrizea ortogonala izan dadin:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Egin <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>I</mi></mrow></math>."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#108": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a23",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Matrize bat <strong>antisimetrikoa</strong> da bere iraulia eta aurkakoa berdinak direnean (<math display=\"inline\"><mrow><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>−</mi><mi>A</mi></mrow></math>). Lortu <math display=\"inline\"><mn>2</mn></math> ordenako matrize antisimetriko baten forma orokorra."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#109": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a26",
  "atalaIzena": "Gauss-Jordan; heina eskalonamenduz",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup></math>-n, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></mrow></math> emanik, jakinik <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math> eta <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math>-tik gutxienez bat <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mrow></math>-ren konbinazio lineala dela, aurkitu koefizienteak eta matrizearen heina."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#110": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#111": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>β</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>γ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#112": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#113": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#114": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#115": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#116": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a30",
  "atalaIzena": "Matrizeak: 0018 irudiaren eskuineko erdia",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#117": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a35",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Gaia landu ahala ikusiko dugun moduan, <math display=\"inline\"><mn>2</mn></math> ordenako matrize baten <strong>determinantea</strong>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, gurutzean biderkatuz eta emaitzak kenduz lortzen den zenbakia da: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrizearen determinantea <math display=\"inline\"><mrow><mi>a</mi><mo>⋅</mo><mi>d</mi><mo>−</mo><mi>b</mi><mo>⋅</mo><mi>c</mi></mrow></math> da. Adibidez:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>7</mn><mo>⋅</mo><mn>11</mn><mo>−</mo><mn>4</mn><mo>⋅</mo><mn>6</mn><mo>=</mo><mn>77</mn><mo>−</mo><mn>24</mn><mo>=</mo><mn>53</mn></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Zergatik esaten zaio horrela? Zer <em>determinatzen</em> du? Ikusiko dugu."
   },
   {
    "mota": "testua",
    "html": "Ebatzi ekuazio sistema hauek eta kalkulatu koefizienteen matrizearen determinantea:"
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
          "html": "a)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>29</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>10</mn><mi>x</mi><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>16</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>17</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>19</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>9</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>6</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>11</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "e)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>18</mn><mi>x</mi><mo>+</mo><mn>24</mn><mi>y</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>15</mn><mi>x</mi><mo>+</mo><mn>20</mn><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "f)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>11</mn><mi>y</mi><mo>=</mo><mn>128</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>8</mn><mi>x</mi><mo>−</mo><mn>7</mn><mi>y</mi><mo>=</mo><mn>46</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#118": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a35",
  "atalaIzena": "Gaian trebatzeko, pentsatu eta ebatzi",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bi ezezaguneko ekuazio sistema baten soluzio orokorra lortuko dugu. Ekuazioak <math display=\"inline\"><msub><mi>a</mi><mn>22</mn></msub></math>-z eta <math display=\"inline\"><msub><mi>a</mi><mn>12</mn></msub></math>-z biderkatu eta kendu ondoren, <math display=\"inline\"><mi>y</mi></math> ezabatzen da:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<img class=\"formula\" src=\"media/formulak/57887ee095595be3.svg\" alt=\"cases((1) space a_11 x + a_12 y = c_1, (2) space a_21 x + a_22 y = c_2) #h(0.6em) =&gt; #h(0.6em) (a_11 a_22 - a_21 a_12) x = c_1 a_22 - c_2 a_12\" style=\"width:28.272em;height:1.241em\" loading=\"lazy\">"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Hortik <math display=\"inline\"><mi>x</mi></math> bakanduz (eta modu berean <math display=\"inline\"><mi>y</mi></math>):"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msub><mi>c</mi><mn>1</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>a</mi><mn>12</mn></msub></mrow><mrow><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>21</mn></msub><msub><mi>a</mi><mn>12</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mn>11</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo>−</mo><msub><mi>a</mi><mn>21</mn></msub><msub><mi>c</mi><mn>1</mn></msub></mrow><mrow><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>21</mn></msub><msub><mi>a</mi><mn>12</mn></msub></mrow></mfrac></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Hiru zenbaki agertzen dira —izendatzaile komuna eta bi zenbakitzaileak—, eta hiru horiek matrize hauen determinanteak dira (egiaztatu):"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>c</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mi>y</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>c</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>c</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> sistemaren koefiziente-matrizea da; beste biak <math display=\"inline\"><mi>A</mi></math>-n ezezagunaren koefizienteen ordez gai askeak jarriz lortu ditugu. Beraz, soluzioa honela adieraz daiteke:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Ebatzi ekuazio sistema hauek arau hori erabiliz (egiaztatu soluzioak):"
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
          "html": "a)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>73</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>33</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>7</mn><mi>x</mi><mo>−</mo><mn>11</mn><mi>y</mi><mo>=</mo><mn>13</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)     <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>6</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>5</mn><mi>x</mi><mo>+</mo><mn>9</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>60</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#119": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "9) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#120": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "10) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#121": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "11) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#122": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "12) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>β</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>β</mi><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#123": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "13) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Hortaz, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#124": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "14) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>t</mi><mn>4</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math> Errotazio-matrize baten determinantea da (Weierstrass-en ordezkapena), beti <math display=\"inline\"><mn>1</mn></math>."
   }
  ]
 },
 "01ma_02matrizeak#125": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "15) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#126": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "16) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>2</mn><mi>t</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><msup><mi>t</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ]
 },
 "01ma_02matrizeak#127": {
  "mota": "ariketa",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a40",
  "atalaIzena": "Determinante trigonometrikoak (Proskuriakov, jarraipena)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "17) Kalkulatu determinantea:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>a</mi></msub><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>b</mi></msub><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>≠</mo><mn>1</mn></mrow></math> baldintzetan, <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>a</mi></msub><mi>b</mi><mo>⋅</mo><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>b</mi></msub><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> da. Beraz, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>a</mi></msub><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>b</mi></msub><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>a</mi></msub><mi>b</mi><mo>⋅</mo><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mi>b</mi></msub><mi>a</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
   }
  ]
 },
 "01ma_02matrizeak#128": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Determinanteen propietateak",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>r</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>7</mn></mrow></math> bada, kalkulatu, garapenik egin gabe:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>r</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mo>+</mo><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mo>+</mo><mn>2</mn><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>q</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>r</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi><mo>−</mo><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>r</mi><mo>−</mo><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#129": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Determinante baten balioa",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> anulatzen duten <math display=\"inline\"><mi>a</mi></math>-ren balioak."
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Kalkulatu bere balioa (hirugarren zutabetik)  <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> denean."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#130": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Determinante baten kalkulua",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#131": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Berdintasun bat egiaztatu",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#132": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Cramer-en erregela",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hauek Cramer-ez:    <em>(a)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>12</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>6</mn></mtd></mtr></mtable></mrow></math>;"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>4</mn><mi>z</mi><mo>=</mo><mn>7</mn></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#133": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Parametro baten araberako heina",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen heina <math display=\"inline\"><mi>a</mi></math>-ren balioen arabera."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#134": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Aztertu eta ebatzi",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu eta ebatzi:    <em>(a)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>5</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>8</mn></mtd></mtr></mtable></mrow></math>;"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>3</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>6</mn><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#135": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Eztabaida eta ebazpena",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu <math display=\"inline\"><mi>k</mi></math>-ren arabera eta ebatzi ahal duzunean:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>k</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>3</mn></mtd></mtr></mtable></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>y</mi><mo>−</mo><mn>4</mn><mi>z</mi><mo>=</mo><mi>k</mi></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#136": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Sistema baten eztabaida (Rouché-ren teorema)",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Eztabaidatu sistema hau eta ebatzi bateragarria denean: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>m</mi><mi>z</mi><mo>=</mo><mi>m</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>.  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Zein izango da soluzioa <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math> bada?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#137": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Sistema baten eztabaida",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eztabaidatu sistema hau eta ebatzi ahal duzunean: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#138": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Problema enuntziatuan",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu ea posible den tetraedro baten aurpegi bakoitzean zenbaki desberdin bat idaztea eta erpin batean bat egiten duten aurpegietako zenbakien batura konstante izatea."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#139": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Alderantzizko matrizea",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizearen alderantzizkoa."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#140": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Sistema baten modu matriziala",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Adierazi <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math> sistema modu matrizialean eta ebatzi alderantzizko matrizea erabiliz."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#141": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a55",
  "atalaIzena": "Ebatzitako ariketak eta problemak",
  "izena": "Ekuazio matriziala",
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> ekuazioa, bertan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#142": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>7</mn></mrow></math> dela jakinda, justifikatu berdintasun hauek, kasu bakoitzean erabili dituzun propietateak aipatuz:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mo>−</mo><mi>d</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>7</mn></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>42</mn></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(c)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(d)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mn>2</mn><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mo>−</mo><mn>2</mn><mi>d</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>14</mn></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#143": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Baldin <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>5</mn></mrow></math>, zein da determinante hauetako bakoitzaren balioa?"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(c)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>n</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mi>q</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>p</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(d)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>q</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>n</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(e)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi><mi>/</mi><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>p</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>q</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#144": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru puntuen ordez, jarri berdintasun horiek egiaztatuko dituzten zenbakiak:"
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
          "html": "a)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#145": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi ekuazio hauek:"
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
          "html": "a)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>12</mn></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#146": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu determinante hauen balioa:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#147": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu determinante hauetako bakoitza anulatuko duen <math display=\"inline\"><mi>a</mi></math>-ren balioa:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#148": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu determinante hauen balioa:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#149": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Idatzi matrizeen bidez sistema hauek:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#150": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Idatzi sistema hauek ohiko moduan:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#151": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi sistema hauek Cramer-en erregela erabiliz:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>8</mn><mi>x</mi><mo>+</mo><mn>14</mn><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>11</mn></mtd></mtr></mtable></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#152": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi Cramer-en erregela erabiliz:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>3</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#153": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu sistema hauen bateragarritasuna:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>4</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>5</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>5</mn></mtd></mtr></mtable></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#154": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu matrize hauen alderantzizkoa:   <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,    <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#155": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu, garatu barik, honako hau:  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>25</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>40</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mn>5</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mo>+</mo><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<em>(a)</em>"
     },
     {
      "mota": "testua",
      "html": "Bi lerro proportzional daude. <em>(b)</em> Batu 3. eta 2. lerroak."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#156": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Frogatu <em>(a)</em> determinantea <math display=\"inline\"><mn>3</mn></math>-en multiploa dela eta <em>(b)</em>  <math display=\"inline\"><mn>5</mn></math>-en multiploa:"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Batu 1. eta 2. zutabeak 3.enari."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#157": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>a</mi></math>-ren zein baliorekin anulatzen da determinante hau?"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#158": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu matrize hauen heina euretan agertzen den parametroaren balioaren arabera:   <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,    <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#159": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi ekuazio homogeneo hauek:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>12</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>9</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>8</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>4</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#160": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Esan zein izan behar duen <math display=\"inline\"><mi>a</mi></math>-ren balioak sistema hau bateragarria izateko:"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>a</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#161": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Adierazi matrizeen bidez eta ebatzi alderantzizko matrizea erabiliz:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>6</mn><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#162": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aztertu eta ebatzi sistema hauek:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>7</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#163": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eztabaidatu sistema hauek <math display=\"inline\"><mi>m</mi></math> parametroaren balioen arabera:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>y</mi><mo>+</mo><mi>m</mi><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>m</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>m</mi><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>m</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>m</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>4</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "d)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>m</mi><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#164": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Eztabaidatu sistema homogeneo hauek <math display=\"inline\"><mi>a</mi></math> parametroaren funtziopean:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>a</mi><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>a</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>a</mi><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#165": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  izanda:    <em>(a)</em> kalkulatu <math display=\"inline\"><mi>x</mi></math>-en zein baliorekin duen alderantzizkoa <math display=\"inline\"><mi>A</mi></math>-k;    <em>(b)</em> kalkulatu, posible bada, <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> kasuan."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#166": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Matrize hauek izanda, aurkitu <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>+</mo><mi>C</mi><mi>X</mi><mo>=</mo><mi>D</mi></mrow></math> egiaztatuko duen <math display=\"inline\"><mi>X</mi></math>  matrizea:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>17</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#167": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurkitu <math display=\"inline\"><mi>X</mi></math>, <math display=\"inline\"><mrow><mn>3</mn><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math> betetzeko, zera jakinik:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "eta"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#168": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> ekuazioa, honakoa jakinda:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Biderkatu <math display=\"inline\"><mi>C</mi></math> ezkerretik <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-ekin eta <math display=\"inline\"><msup><mi>B</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-ekin eskuinetik."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#169": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanda, aurkitu <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> beteko duen <math display=\"inline\"><mi>X</mi></math> matrize bat."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Biderkatu birritan <math display=\"inline\"><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-ekin, batean ezkerretik eta bestean eskuinetik."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#170": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Esan ekuazio hauek soluzioa duten eta, baldin badute, aurkitu:"
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
          "html": "a)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#171": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi honako ekuazio hau:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#172": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ebatzi <math display=\"inline\"><mrow><mi>X</mi><mi>A</mi><mo>−</mo><mi>B</mi><mo>=</mo><mi>C</mi></mrow></math> ekuazioa, hau jakinda:"
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
          "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#173": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Badago sistema honek infinitu soluzio izateko <math display=\"inline\"><mi>a</mi></math>-ren baliorik?"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>a</mi><mi>y</mi><mo>−</mo><mn>5</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#174": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu, determinantea garatu barik, hau:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Kendu lehenengo lerroa bigarrenari eta hirugarrenari."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#175": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>+</mo><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn><mo>+</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#176": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Lortu <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> eta <math display=\"inline\"><mi>c</mi></math>-ren funtziopean honakoaren balioa:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>c</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Kendu hirugarren zutabea beste biei."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#177": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>5</mn></mrow></math> dela jakinda, aurkitu determinante hauen balioa:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mo>+</mo><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mo>+</mo><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi><mo>+</mo><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><mo>+</mo><mn>2</mn><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#178": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mi>a</mi></math>-ren zein baliorekin den <math display=\"inline\"><mi>A</mi></math>-ren heina 3 baino txikiagoa:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">hein</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> izan daiteke <math display=\"inline\"><mi>a</mi></math>-ren balioren batekin?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#179": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zein da <math display=\"inline\"><mi>n</mi></math> ordenako unitate matrizearen determinantearen balioa? Eta <math display=\"inline\"><mi>n</mi></math> ordenako matrize triangeluar batena? Justifikatu erantzunak."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#180": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu 3 ordenako matrize baten determinantea eta bere irauliarena berdinak direla."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#181": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> ordena bereko matrize karratuak badira, orduan:"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#182": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> ordena bereko bi matrize karratu badira, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo>⋅</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo>⋅</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> egiaztatzen da? Eman erantzuna justifikatuko duen adibide bat."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#183": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bi biderkadura horietatik, zein ezin daiteke izan 4 ordenako determinante baten garapenekoa?  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>12</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>23</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>31</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>42</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>;  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>14</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>41</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>23</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>32</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#184": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Ekuazio eta ezezagun kopuru bera dituten sisteman, koefizientedun matrizearen determinantea 0 da.  "
   },
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "Bateragarria izan daiteke?  "
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Soluzio bakarra izan dezake?  "
   },
   {
    "mota": "testua",
    "html": "<em>(c)</em>"
   },
   {
    "mota": "testua",
    "html": "Cramer-en erregela erabil daiteke?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#185": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Lau ekuazio eta hiru ezezagun dituen sistema homogeneoaren koefizientedun matrizearen heina 3 da. Zer esan dezakezu bere soluzioari buruz?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#186": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Zein baldintza bete behar du matrize karratu batek alderantzizkoa izateko?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#187": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> elkarren alderantzizkoak dira. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>4</mn></mrow></math> bada, zein izango da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#188": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Hiru ekuazio eta hiru ezezagun dituen sistema baten koefizientedun matrizearen heina 1 da. Zein hein izan dezake, gehienez jota, zabaldutako matrizeak?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#189": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Badago ondoko matrizeak alderantzizkorik izango ez duen <math display=\"inline\"><mi>a</mi></math>-ren baliorik:"
   },
   {
    "mota": "testua",
    "html": " "
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#190": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Idatzi honako hau betetzen duten <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo>∈</mo><msub><mi mathvariant=\"script\">ℳ</mi><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></msub></mrow></math>  matrizeak:"
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
          "html": "a)  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#191": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Beheko matrizearen heina 1 izan daiteke?"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>+</mo><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#192": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<em>(a)</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>a</mi></math>-ren zein baliorekin da sistema hau bateragarri determinatua?"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "<em>(b)</em>"
   },
   {
    "mota": "testua",
    "html": "Bateragarri indeterminatua izan daiteke?"
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#193": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu determinante honen balioa emaitza faktorizatuta emanez:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math>"
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#194": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Egiaztatu:"
   },
   {
    "mota": "zentratua",
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>c</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
     }
    ]
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Determinante horri <em>Vandermonde</em> esaten zaio. Egin <math display=\"inline\"><mrow><msub><mi>c</mi><mn>2</mn></msub><mo>−</mo><msub><mi>c</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>−</mo><msub><mi>c</mi><mn>1</mn></msub></mrow></math>. Atera <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> biderkagaia 2. zutabetik eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> 3.enetik."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#195": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Determinatu zeintzuk diren elementuak zenbaki osoak, determinantea <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta alderantzizkoa irauliaren berdina duten 2 ordenako matrize karratuak."
   },
   {
    "mota": "oharra",
    "titulua": "Iradokizuna",
    "blokeak": [
     {
      "mota": "testua",
      "html": "Egin <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>I</mi></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>. 4 soluzio daude."
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_02matrizeak#196": {
  "mota": "problema",
  "kapitulua": "01ma_02matrizeak",
  "atala": "a56",
  "atalaIzena": "Proposatutako ariketak eta problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Determinatu <math display=\"inline\"><mi>m</mi></math>-ren zein baliorekin diren bateraezinak sistema hauek:"
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
          "html": "a)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>m</mi><mi>z</mi><mo>=</mo><mi>m</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>−</mi><mn>1</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "b)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>m</mi><mi>z</mi><mo>=</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mi>m</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       },
       {
        "blokeak": [
         {
          "mota": "testua",
          "html": "c)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>m</mi><mo>−</mo><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></mrow></math>"
         }
        ]
       }
      ]
     }
    ]
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#1": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  aplikaziorako: egiaztatu lineala dela, idatzi bere matrizea oinarri kanonikoetan, eta kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> eta heina. Egiaztatu dimentsioen teorema."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#2": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio eta bektore propioak, eta egiaztatu batura aztarnarekin eta biderkadura determinantearekin."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#3": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Diagonalizatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: aurkitu <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>D</mi></math>, eta egiaztatu esplizituki <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math> dela."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#4": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Aurreko ariketako matrizearekin, kalkulatu <math display=\"inline\"><msup><mi>A</mi><mn>10</mn></msup></math> diagonalizazioaren bidez."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#5": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio propioak eta propioespazioak, eta diagonalizatu <math display=\"inline\"><mi>Q</mi></math>  <strong>ortogonal</strong> baten bidez (normalizatu bektore propioak). Zergatik zeneukan ziurtatuta hori posible zela, kalkulurik egin gabe?"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#6": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Erakutsi <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ez dela diagonalizagarria, aniztasun aljebraikoa eta geometrikoa konparatuz."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#7": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>P</mi></math> proiekzio bat bada (<math display=\"inline\"><mrow><msup><mi>P</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi></mrow></math>), erakutsi bere balio propio bakarrak <math display=\"inline\"><mn>0</mn></math> eta <math display=\"inline\"><mn>1</mn></math> izan daitezkeela. Interpretatu geometrikoki."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#8": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Bi osziladore akoplatuen sisteman, ordezkatu erdiko malgukia <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math> malguki batez (kanpokoak <math display=\"inline\"><mi>k</mi></math> mantenduta). Idatzi higidura-ekuazioen matrizea, kalkulatu bi modu normalak eta haien maiztasunak, eta azaldu zergatik aldatu den bat eta bestea ez."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#9": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a7",
  "atalaIzena": "Problemak",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> simetrikoa eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> bektore propioak balio propio berarekin badira, erakutsi haien edozein konbinazio lineal (ez-nulua) ere bektore propioa dela. Zer esan nahi du horrek <math display=\"inline\"><msub><mi>E</mi><mi>λ</mi></msub></math>-ri buruz?"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#10": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a13",
  "atalaIzena": "Ariketa (azterketa): aplikazio lineal baten matrize kanonikoa eta alderantzizkoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Aurkitu <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <strong>bi oinarri</strong> non <math display=\"inline\"><mi>f</mi></math>-ren matrizea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋅</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> formakoa den. Kalkulatu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <strong>aurreirudiak</strong>."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>1) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>.</strong> <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (irudien sortzaileak). Determinantea, lehen zutabetik garatuz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>16</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Beraz <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>3</mn><mo>=</mo><mi>r</mi></mrow></math>; <math display=\"inline\"><mi>f</mi></math> <strong>bijektiboa</strong> da eta matrize objektiboa <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math> da."
   },
   {
    "mota": "testua",
    "html": "<strong>2) Aurreirudiak — 1. modua (zehatza).</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>6</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> 1.etik <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>. 2.an ordezkatuz: <math display=\"inline\"><mrow><mn>8</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>8</mn><mi>y</mi></mrow></math>. 3.an: <math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>3</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Beraz <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (egiaztapena: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓)."
   },
   {
    "mota": "testua",
    "html": "<strong>3) Aurreirudiak — 2. modua (orokorra).</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> askatuz: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>a</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>8</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>b</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mi>c</mi><mo>+</mo><mn>3</mn><mi>a</mi><mo>⇒</mo><mi>z</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mi>z</mi></math> ordezkatuz: <math display=\"inline\"><mrow><mn>8</mn><mi>y</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mi>b</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>⇒</mo><mn>16</mn><mi>y</mi><mo>=</mo><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>16</mn></mfrac></mrow></math>; eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>7</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>8</mn></mfrac></mrow></math>. Alderantzizkoa:"
   },
   {
    "mota": "kutxa",
    "kolorea": "laranja",
    "titulua": null,
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>7</mn><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>8</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>−</mo><mi>c</mi></mrow><mn>16</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>a</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Aplikatuz: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mi>A</mi></math>-ren zutabeen aurreirudiak oinarri kanonikoa dira)."
   }
  ]
 },
 "01ma_03diagonalizazioa#11": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a17",
  "atalaIzena": "Azpiespazio osagarriak eta aldaezinak; diagonalizazioaren hasiera",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ko endomorfismoa). <strong>a)</strong> Frogatu <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> <strong>osagarriak</strong> direla. <strong>b)</strong> Egiaztatu <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mi>i</mi></msub></mrow></math>. <strong>c)</strong> Aurkitu <math display=\"inline\"><mi>f</mi></math> diagonalizatzen duen oinarri bat."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<strong>a) Osagarriak.</strong> <math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mi>z</mi></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Hiru sortzaileen determinantea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>3</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz oinarria da: <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>+</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, eta dimentsioz (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>3</mn></mrow></math>) <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>∩</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>; hots <strong><math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math></strong> (osagarriak)."
   },
   {
    "mota": "testua",
    "html": "<strong>b) Aldaezintasuna.</strong> <math display=\"inline\"><mi>f</mi></math>-ren irudiak: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math> <strong>aldaezina</strong>, balio propioa <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>). Eta <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math> aldaezina, balio propioa <math display=\"inline\"><mn>2</mn></math>)."
   },
   {
    "mota": "testua",
    "html": "<strong>c) Diagonalizazioa (hasiera).</strong> <math display=\"inline\"><mi>f</mi></math>-ren matrizea oinarri kanonikoan (zutabeak <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>): <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>β</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Matrize honen (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math>) balio propioak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (bikoitza) eta <math display=\"inline\"><mn>2</mn></math> dira, b)-n agertutakoekin bat; oinarri diagonalizatzailea bektore propioena da (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>-en bi + <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>-ren bat)."
   }
  ]
 },
 "01ma_03diagonalizazioa#12": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a46",
  "atalaIzena": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>: <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#13": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a51",
  "atalaIzena": "Nukleoa eta irudia; ongi definitutako aplikazioa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mi>V</mi></math> dimentsio finituko espazio bektoriala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> <strong>bakoitia</strong>, eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> aplikazio lineala. Frogatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#14": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a51",
  "atalaIzena": "Nukleoa eta irudia; ongi definitutako aplikazioa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>,</mo><mi>−</mi><mn>3</mn><mi>z</mi><mo>−</mo><mi>t</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (i) Frogatu <math display=\"inline\"><mi>f</mi></math> ongi definitua dagoela."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sortzaileak linealki independenteak dira, lehen bi koordenatuen determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> baita: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>f</mi></math> ongi definitua dago <math display=\"inline\"><mi>W</mi></math>-tik <math display=\"inline\"><mi>W</mi></math>-ra irudikatzen badu (irudi bakarra elementu bakoitzeko). Sortzaileen irudiak: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>6</mn><mi>u</mi><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math> biak <math display=\"inline\"><mi>W</mi></math>-koak. Beraz <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> ongi definitua dago."
   }
  ]
 },
 "01ma_03diagonalizazioa#15": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a54",
  "atalaIzena": "Matrize baliokideak; automorfismoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bedi <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> aplikazio lineala, honela definitua: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (i) Kalkulatu <math display=\"inline\"><mi>f</mi></math>-ren matrize elkartua <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarri kanonikoarekiko. (ii) Injektibotasuna/gainkotasuna zuzenean frogatu gabe, ondorioztatu <math display=\"inline\"><mi>f</mi></math> automorfismoa den ala ez."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektoreek <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarri bat osatzen badute, orduan haien irudiek zutabe gisa emandako matrizearen determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> izatea nahikoa da <math display=\"inline\"><mi>f</mi></math> bijektiboa (automorfismoa) dela ondorioztatzeko, injektibotasuna eta gainkotasuna bereiz frogatu gabe. Matrize elkartuaren garapen osoa hurrengo orrialdean."
   }
  ]
 },
 "01ma_03diagonalizazioa#16": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a57",
  "atalaIzena": "Azpiespazioak <math display=\"inline\"><mi>U</mi></math> eta <math display=\"inline\"><mi>W</mi></math>: dimentsioa eta oinarria",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Izan bitez <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko azpiespazioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> (i) Kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>. (ii) Kalkulatu <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>."
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#17": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a58",
  "atalaIzena": "Matrizeen biderketa (795–798)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#18": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a58",
  "atalaIzena": "Matrizeen biderketa (795–798)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>33</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>126</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#19": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a58",
  "atalaIzena": "Matrizeen biderketa (795–798)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>107</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>68</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>101</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>140</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>46</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>120</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#20": {
  "mota": "problema",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a58",
  "atalaIzena": "Matrizeen biderketa (795–798)",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>22</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
   }
  ],
  "ebazpena": null
 },
 "01ma_03diagonalizazioa#21": {
  "mota": "ariketa",
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a71",
  "atalaIzena": "<math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math> Jordanen formaren bidez; matrize elkartua eta forma kanonikoa",
  "izena": null,
  "izar": 0,
  "blokeak": [
   {
    "mota": "testua",
    "html": "Kalkulatu <math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math>, <math display=\"inline\"><mi>f</mi></math>-ren matrize elkartu bat emanda, oinarri kanonikoa erabili gabe. Adierazi zein oinarri erabili duzun."
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "Jordanen matrizea (emandako oinarrian <math display=\"inline\"><mi>B</mi></math>): <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Berreturak zuzenean: <math display=\"block\"><mrow><msup><mi>J</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>3</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>4</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>108</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>81</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> blokearen goi-diagonalak <strong>patroia</strong> du: <math display=\"block\"><mrow><mn>1</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>27</mn><mo>,</mo><mn>108</mn><mo>=</mo><mn>1</mn><mo>⋅</mo><msup><mn>3</mn><mn>0</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>⋅</mo><msup><mn>3</mn><mn>1</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>⋅</mo><msup><mn>3</mn><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>⋅</mo><msup><mn>3</mn><mn>3</mn></msup><mo>=</mo><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Beraz orokorrean eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2011</mn></mrow></math>-rako:"
   },
   {
    "mota": "kutxa",
    "kolorea": "laranja",
    "titulua": null,
    "blokeak": [
     {
      "mota": "testua",
      "html": "<math display=\"block\"><mrow><msup><mi>J</mi><mi>n</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>J</mi><mn>2011</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2011</mn><mo>⋅</mo><msup><mn>3</mn><mn>2010</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mn>2011</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
     }
    ]
   },
   {
    "mota": "testua",
    "html": "Eta <math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math>-ren matrizea oinarri kanonikoan <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2011</mn></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>J</mi><mn>2011</mn></msup><mi>P</mi></mrow></math> da (<math display=\"inline\"><mi>P</mi></math> = <math display=\"inline\"><mi>B</mi></math>-ren pasabidea) — Jordanen formaren <strong>baliagarritasun praktikoa</strong>: <math display=\"inline\"><mi>A</mi></math> bere buruaz <math display=\"inline\"><mn>2011</mn></math> aldiz biderkatzea saihesten da."
   }
  ]
 }
};
