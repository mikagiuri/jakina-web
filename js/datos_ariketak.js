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
 }
};
