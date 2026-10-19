/* Ariketak · Txokoaren ariketak, «Filosofia 1» etiketarekin, ebazpena tolestuta (dsh-2, 19-10-2026)
   39 ariketa: 13 formalizatzea + 12 «araua ala tranpa?» + 10 kuantifikatzaile + 4 esaldi-klasikoen fitxa.
   "esteka" eremuak Logika-txokoaren pestañara eramaten du; ariketakview.js-ek erakusten du.
   SORTZEN DU: tools/_lanak/dsh2/eraiki_logika_txokoa.mjs */
const ARIKETAK_FIL1 = {
 "filosofia1#fz-0": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 1. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Euria ari badu, lurra bustitzen da.</p><p>Hiztegia: <b>p</b> = euria ari du · <b>q</b> = lurra bustitzen da</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → q</code></p><p><strong>Pista:</strong> «p bada, q»: «bada»-ren aurretik doana aurrekaria da.</p>"
   }
  ]
 },
 "filosofia1#fz-1": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 2. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Euria ari du eta ez daramat aterkirik.</p><p>Hiztegia: <b>p</b> = euria ari du · <b>q</b> = aterkia daramat</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p ∧ ¬q</code></p><p><strong>Pista:</strong> Letra esaldi baiezkoa da; «ez» ¬ sinboloaz idazten da.</p>"
   }
  ]
 },
 "filosofia1#fz-2": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 3. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Euria ari badu eta aterkirik ez badaramat, busti egiten naiz.</p><p>Hiztegia: <b>p</b> = euria ari du · <b>q</b> = aterkia daramat · <b>r</b> = busti egiten naiz</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>(p ∧ ¬q) → r</code></p><p><strong>Pista:</strong> Lehenik aurrekari osoa, parentesi artean; gero gezia.</p>"
   }
  ]
 },
 "filosofia1#fz-3": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 4. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Ez dut ikasten, ezta lan egiten ere.</p><p>Hiztegia: <b>p</b> = ikasten dut · <b>q</b> = lan egiten dut</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>¬p ∧ ¬q</code></p><p><strong>Pista:</strong> «Ez… ezta… ere»-k bi gauzak ukatzen ditu aldi berean.</p>"
   }
  ]
 },
 "filosofia1#fz-4": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 5. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Euririk egiten ez badu bakarrik joango naiz txangora.</p><p>Hiztegia: <b>p</b> = txangora joaten naiz · <b>q</b> = euria ari du</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → ¬q</code></p><p><strong>Pista:</strong> Kasu tranpa: «…bada bakarrik» egiturak baldintza beharrezkoa sartzen du, eta hori geziaren atzean doa.</p>"
   }
  ]
 },
 "filosofia1#fz-5": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 6. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Botoa emateko beharrezkoa da adin nagusikoa izatea.</p><p>Hiztegia: <b>p</b> = botoa ematen duzu · <b>q</b> = adin nagusikoa zara</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → q</code></p><p><strong>Pista:</strong> Botoa ematen baduzu, adin nagusikoa zarelako da; baina adin nagusikoa izatea ez da nahikoa botoa emateko.</p>"
   }
  ]
 },
 "filosofia1#fz-6": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 7. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Nahikoa da botoia sakatzea argia piz dadin.</p><p>Hiztegia: <b>p</b> = botoia sakatzen duzu · <b>q</b> = argia pizten da</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → q</code></p><p><strong>Pista:</strong> «Nahikoa da p» esateak p baldintza nahikoa dela adierazten du: geziaren aurretik doa.</p>"
   }
  ]
 },
 "filosofia1#fz-7": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 8. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Irtengo gara, euririk egiten ez badu behintzat.</p><p>Hiztegia: <b>p</b> = irteten gara · <b>q</b> = euria ari du</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>¬q → p</code></p><p><strong>Pista:</strong> Kasu tranpa: «p, q ez bada behintzat» esateak «q ez bada, p» esan nahi du.</p>"
   }
  ]
 },
 "filosofia1#fz-8": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 9. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Deituko dizut baldin eta soilik baldin berandu iristen bazara.</p><p>Hiztegia: <b>p</b> = deitzen dizut · <b>q</b> = berandu iristen zara</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p ↔ q</code></p><p><strong>Pista:</strong> «Baldin eta soilik baldin» egiturak bi baldintzazko lotzen ditu: p → q eta q → p.</p>"
   }
  ]
 },
 "filosofia1#fz-9": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 10. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Edo ikasten duzu edo lan egiten duzu, baina ez biak.</p><p>Hiztegia: <b>p</b> = ikasten duzu · <b>q</b> = lan egiten duzu</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>(p ∨ q) ∧ ¬(p ∧ q)</code></p><p><strong>Pista:</strong> Kasu tranpa: logikako «edo» inklusiboa da; hemen gehitu egin behar da biak ez direla gertatzen.</p>"
   }
  ]
 },
 "filosofia1#fz-10": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 11. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Ez da egia, euria ari badu, partida bertan behera geratzen denik.</p><p>Hiztegia: <b>p</b> = euria ari du · <b>q</b> = partida bertan behera geratzen da</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>¬(p → q)</code></p><p><strong>Pista:</strong> «Ez da egia» egiturak baldintzazko osoa ukatzen du: parentesiaren aurretik doa.</p>"
   }
  ]
 },
 "filosofia1#fz-11": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 12. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Epikuro: «Gu gaudenean, heriotza ez dago; eta heriotza dagoenean, gu jada ez gaude».</p><p>Hiztegia: <b>p</b> = gu gaude · <b>q</b> = heriotza dago</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>(p → ¬q) ∧ (q → ¬p)</code></p><p><strong>Pista:</strong> Bi baldintzazko dira, «eta»-k lotuak. (Menekeori gutuna, 125.)</p>"
   }
  ]
 },
 "filosofia1#fz-12": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "fz",
  "atalaIzena": "Formalizatzea",
  "izena": "Formalizatzea · 13. esaldia",
  "izar": 0,
  "esteka": "formalizar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>Monika, hitzez hitz: «Gauza onak nahi baditu eta baditu, zoriontsu da; baina gauza txarrak nahi baditu, baditu arren, zorigaiztokoa da».</p><p>Hiztegia: <b>p</b> = zoriontsu da · <b>q</b> = gauza onak nahi ditu · <b>r</b> = gauza onak ditu · <b>s</b> = gauza txarrak nahi ditu · <b>t</b> = gauza txarrak ditu</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)</code></p><p><strong>Pista:</strong> «Baina» eta «arren» ∧ gisa idazten dira: «baditu arren»-ek ez du ukatzen dituela, baieztatzen du. Konparatu Monikaren fitxako hiru letrako irakurketarekin (Argudio klasikoak): zer gertatzen da ongia eta gaizkia nahi dituenarekin, dena badu eta zoriontsu bada? Formula batek onartzen du eta besteak ez.</p>"
   }
  ]
 },
 "filosofia1#inf-0": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "1. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Sokrates gizakia bada, hilkorra da. Sokrates gizakia da. Beraz, Sokrates hilkorra da.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Modus ponens:</strong> p → q · p ⊢ q. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-1": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "2. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Sua badago, oxigenoa dago. Ilargian ez dago oxigenorik. Beraz, Ilargian ez dago surik.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Modus tollens:</strong> p → q · ¬q ⊢ ¬p. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-2": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "3. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Gobernu batek herritarren eskubideak urratzen baditu, herriak eskubidea du erresistentzia egiteko. Herriak erresistentzia egiten du. Beraz, gobernuak haien eskubideak urratu ditu.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Atzekaria baieztatzea:</strong> p → q · q ⊢ p. Lurra beste arrazoi batengatik egon daiteke bustita: norbaitek ureztatu du. Baldintza nahikoa ez da posible den bakarra.</p>"
   }
  ]
 },
 "filosofia1#inf-3": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "4. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Edo errudun nagusi-zerbitzaria da edo sukaldaria. Nagusi-zerbitzariak alibia du eta ez da errudun. Beraz, sukaldaria da.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Silogismo disjuntiboa:</strong> p ∨ q · ¬p ⊢ q. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-4": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "5. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Ahalegintzen bazara, hobetu egiten duzu; hobetzen baduzu, gainditu egiten duzu. Beraz, ahalegintzen bazara, gainditu egiten duzu.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Silogismo hipotetikoa:</strong> p → q · q → r ⊢ p → r. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-5": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "6. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Euria ari badu, partida bertan behera geratzen da. Ez du euririk egiten. Beraz, partida ez da bertan behera geratzen.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Aurrekaria ukatzea:</strong> p → q · ¬p ⊢ ¬q. Arauak ez du esaten zer gertatzen den ikasten ez baduzu: agian beste arrazoi batengatik gaindituko duzu.</p>"
   }
  ]
 },
 "filosofia1#inf-6": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "7. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Zalantza egiten badut, pentsatzen dut. Zalantza egiten dut. Beraz, pentsatzen dut.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Modus ponens:</strong> p → q · p ⊢ q. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-7": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "8. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Anak Filosofia edo Historia ikasten du. Filosofia ikasten du. Beraz, ez du Historia ikasten.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Disjuntu bat baieztatzea:</strong> p ∨ q · p ⊢ ¬q. Logikako «edo» inklusiboa da: bi gauzak egin daitezke. Esaldiak biak aldi berean baztertuko balitu bakarrik izango litzateke baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-8": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "9. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Arima materiala balitz, gorputza bezala deskonposatuko litzateke. Arima ez da deskonposatzen. Beraz, arima ez da materiala.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Modus tollens:</strong> p → q · ¬q ⊢ ¬p. Arau baliozkoa.</p>"
   }
  ]
 },
 "filosofia1#inf-9": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "10. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Teoria ona bada, bere iragarpenak betetzen dira. Bere iragarpenak betetzen dira. Beraz, teoria ona da.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Atzekaria baieztatzea:</strong> p → q · q ⊢ p. Lurra beste arrazoi batengatik egon daiteke bustita: norbaitek ureztatu du. Baldintza nahikoa ez da posible den bakarra.</p>"
   }
  ]
 },
 "filosofia1#inf-10": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "11. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Euria ari badu, hodeiak daude. Beraz, hodeiak badaude, euria ari du.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Baldintzazkoa alderantzikatzea:</strong> p → q ⊢ q → p. p nahikoa izateak q-rako ez du esan nahi q nahikoa denik p-rako: katua ere ugaztuna da. «Baldin» eta «soilik baldin» nahastearen akats bera da.</p>"
   }
  ]
 },
 "filosofia1#inf-11": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "inf",
  "atalaIzena": "Araua ala tranpa?",
  "izena": "12. argudioa",
  "izar": 0,
  "esteka": "inferencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Ez da egia akusatua erruduna dela eta bakarrik jardun duela. Beraz, akusatua ez da erruduna.</em></p><p>Araua ala tranpa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Konjuntu bat ukatzea:</strong> ¬(p ∧ q) ⊢ ¬p. Nahikoa da bietako bat ez betetzea: etxean egon daiteke eta ez eskolan. ¬(p ∧ q) formulatik ¬p ∨ ¬q baino ez da ondorioztatzen (De Morgan).</p>"
   }
  ]
 },
 "filosofia1#cq-0": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "1. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Filosofo guztiak jakin-nahiak dira.</em> <span>(F = filosofoa, C = jakin-nahia)</span></p><ol type=\"a\"><li><code>∀x (Fx → Cx)</code></li><li><code>∀x (Fx ∧ Cx)</code></li><li><code>∃x (Fx ∧ Cx)</code></li><li><code>∀x (Cx → Fx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Fx → Cx)</strong> Baiezko unibertsala (A). ∧ ikurrarekin esango luke mundu guztia dela filosofoa eta jakin-nahia; gezia alderantziz jarrita, jakin-nahi oro filosofoa dela.</p>"
   }
  ]
 },
 "filosofia1#cq-1": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "2. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Sofistaren batek kobratu egiten zuen irakasteagatik.</em> <span>(S = sofista, C = irakasteagatik kobratzen zuen)</span></p><ol type=\"a\"><li><code>∃x (Sx → Cx)</code></li><li><code>∃x (Sx ∧ Cx)</code></li><li><code>∀x (Sx → Cx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∃x (Sx ∧ Cx)</strong> Baiezko partikularra (I): badago norbait sofista dena eta kobratzen zuena. Geziarekin nahikoa litzateke sofista ez den zerbait egotea.</p>"
   }
  ]
 },
 "filosofia1#cq-2": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "3. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Ezein jainko ez da hilkorra.</em> <span>(D = jainkoa, M = hilkorra)</span></p><ol type=\"a\"><li><code>¬∀x (Dx → Mx)</code></li><li><code>∀x (¬Dx → Mx)</code></li><li><code>∀x (Dx → ¬Mx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Dx → ¬Mx)</strong> Ezezko unibertsala (E). ¬∃x (Dx ∧ Mx) ere balio du: «ez dago jainko eta hilkor den ezer».</p>"
   }
  ]
 },
 "filosofia1#cq-3": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "4. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Ez ziren greziar guztiak filosofoak.</em> <span>(G = greziarra, F = filosofoa)</span></p><ol type=\"a\"><li><code>∀x (Gx → ¬Fx)</code></li><li><code>¬∀x (Gx → Fx)</code></li><li><code>¬∃x (Gx ∧ Fx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>¬∀x (Gx → Fx)</strong> Kasu tranpa: «ez guztiak» ez da «bat ere ez». ∃x (Gx ∧ ¬Fx) formularen baliokidea da: greziarren bat ez zen filosofoa (O).</p>"
   }
  ]
 },
 "filosofia1#cq-4": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "5. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Hiritarrek bakarrik ematen zuten botoa batzarrean.</em> <span>(V = batzarrean botoa ematen zuen, C = hiritarra)</span></p><ol type=\"a\"><li><code>∀x (Cx → Vx)</code></li><li><code>∀x (Vx → Cx)</code></li><li><code>∃x (Vx ∧ Cx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Vx → Cx)</strong> Kasu tranpa: «C-ak bakarrik» baldintza beharrezkoa geziaren atzean jartzen du: botoa ematen zuen oro hiritarra zen (ez hiritar orok ematen zuen botoa).</p>"
   }
  ]
 },
 "filosofia1#cq-5": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "6. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Bada beste ezerk eragin ez duen zerbait.</em> <span>(C = beste zerbaitek eragina)</span></p><ol type=\"a\"><li><code>¬∃x Cx</code></li><li><code>∀x ¬Cx</code></li><li><code>∃x ¬Cx</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∃x ¬Cx</strong> Badago gutxienez eragin gabeko x bat: Aristotelesen lehen motorraren edo Tomas Akinokoaren lehen kausaren ideia da.</p>"
   }
  ]
 },
 "filosofia1#cq-6": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "7. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Sokrates hilkorra da.</em> <span>(M = hilkorra, s = Sokrates)</span></p><ol type=\"a\"><li><code>∃x Mx</code></li><li><code>Ms</code></li><li><code>∀x Mx</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Ms</strong> Banako zehatz bat letra xehe batez idazten da (konstante bat): ez da kuantifikatzailerik behar.</p>"
   }
  ]
 },
 "filosofia1#cq-7": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "8. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Pentsatzen duen oro existitzen da.</em> <span>(P = pentsatzen du, E = existitzen da)</span></p><ol type=\"a\"><li><code>∀x (Px → Ex)</code></li><li><code>∀x (Ex → Px)</code></li><li><code>∃x (Px ∧ Ex)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Px → Ex)</strong> Baiezko unibertsala (A). «Ni existitzen naiz» ateratzeko, «nik pentsatzen dut» (Pi) premisa eta instantziazio unibertsala ere beharko lirateke, Sokratesekin bezala.</p>"
   }
  ]
 },
 "filosofia1#cq-8": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "9. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Mundu guztiak du ama bat.</em> <span>(M = «y x-ren ama da»)</span></p><ol type=\"a\"><li><code>∃y ∀x Myx</code></li><li><code>∀x ∃y Myx</code></li><li><code>∀x ∀y Myx</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x ∃y Myx</strong> Pertsona bakoitzarentzat badago amaren bat (kasu bakoitzean desberdina izan daiteke). ∃y ∀x Myx formulak esango luke badagoela guztien ama bakar bat: kuantifikatzaileen ordena aldatzea da.</p>"
   }
  ]
 },
 "filosofia1#cq-9": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "cq",
  "atalaIzena": "Zein formula da?",
  "izena": "10. esaldia",
  "izar": 0,
  "esteka": "cuantificadores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p><em>Badago norbait, denek miresten dutena.</em> <span>(A = «x-k y miresten du»)</span></p><ol type=\"a\"><li><code>∀x ∃y Axy</code></li><li><code>∃y ∀x Axy</code></li><li><code>∃x ∃y Axy</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∃y ∀x Axy</strong> Badago y bat, non denek hura miresten duten. ∀x ∃y Axy formulak esango luke bakarrik bakoitzak norbait miresten duela, agian pertsona desberdinak.</p>"
   }
  ]
 },
 "filosofia1#ej-infelices": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ariketak)",
  "izena": "«Zorigaiztoko guztien artean…»",
  "izar": 0,
  "esteka": "ejercicios/infelices",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Zorigaiztoko guztien artean, nahi duten guztia lortzen dutenak ez dira zatirik txarrena eramaten dutenak.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma logikoa:</strong> <code>(p ∧ q) → ¬r</code></p><p>Pertsonez ari gara; beraz, hiru propietate hartzen ditugu: <em>p</em> = «zorigaiztokoa da», <em>q</em> = «nahi duen guztia lortzen du», <em>r</em> = «zatirik txarrena eramaten du». Esaldiak dio: <strong>norbait zorigaiztokoa bada eta nahi duen guztia lortzen badu, orduan ez du zatirik txarrena eramaten</strong>: <em>(p ∧ q) → ¬r</em>. Ezezko unibertsala da (E motakoa): «Dena lortzen duen zorigaiztoko bat ere ez da zatirik txarrena eramaten dutenetakoa». Haren kontrako alderantzizkoak gauza bera dio beste aldetik: zorigaiztoko batek zatirik txarrena eramaten badu, orduan ez du nahi duen guztia lortu: <em>(p ∧ r) → ¬q</em>.</p><p><strong>Proposatu diren irtenbideak:</strong></p><ul><li><strong>Aldez aurretik onartzen duena</strong>: badaudela nahi duten guztia lortzen duten zorigaiztokoak. Ez balego, ez luke zentzurik «zorigaiztoko guztien artean» seinalatzeak. Nahi den guztia lortzea ez da nahikoa zoriontsu izateko.</li><li><strong>Iradokitzen duena, baina esaten ez duena</strong>: zatirik txarrena nahi dutena lortzen ez dutenek eramaten dutela. Iradokizun bat da (ulertzera ematen dena), ez ondorio logiko bat: esaldiak talde bat baino ez du baztertzen, ez du esaten nork eramaten duen zatirik txarrena.</li><li><strong>Esaten ez duena</strong>: dena lortzen dutenak zoriontsuak direnik (alderantziz, zorigaiztokoen artean zenbatzen ditu), ezta gutxi sufritzen dutenik ere: gehien sufritzen dutenak ez direla soilik.</li><li><strong>Lotutako ideiak</strong>: Schopenhauerren ustez (<em>Mundua borondate eta irudikapen gisa</em>, 57. §), bizitza pendulu bat bezala dabil, asebete gabeko desioaren minaren eta betetako desioaren asperduraren artean. Oscar Wildek, <em>Lady Windermereren haizemailea</em> lanean, pertsonaia bati esanarazten dio bi tragedia daudela: desio dena ez lortzea eta lortzea.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-apenas": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ariketak)",
  "izena": "«Ia ez dira gutxiago zorigaiztoko…»",
  "izar": 0,
  "esteka": "ejercicios/apenas",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Nahi duten guztia lortzen dutenak ia ez dira gutxi edo ezer lortzen ez dutenak baino gutxiago zorigaiztoko.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p>Esaldi honek ez du jada sailkatzen (zorigaiztoko izan ala ez), baizik eta <strong>mailak konparatzen</strong> ditu. Dei diezaiegun <em>q</em> nahi duten guztia lortzen dutenei eta <em>s</em> gutxi edo ezer lortzen ez dutenei. Esaldiak bi gauza baieztatzen ditu aldi berean: <em>q</em> <em>s</em> baino gutxiago zorigaiztokoa dela («gutxiago zorigaiztoko») eta aldea txikia dela («ia ez»). Konjuntzio bat da: bi zatietako edozeinek huts egiten badu, esaldia faltsua da. Enuntziatuen logikan, hori guztia letra bakar batean geratzen da, «A B baino gutxiago zorigaiztokoa da» ez baitago bereiz egiazkoak edo faltsuak diren zatietan banatzerik: bi terminoren arteko erlazio bat behar da, <em>M(x, y)</em>, «x y baino gutxiago zorigaiztokoa da», eta hori predikatuen logikari dagokio. Horregatik, hemen ez dute balio ez p, q eta r-rekin egindako egia-taulak ez Eulerren zirkuluek, barruan eta kanpoan nor dagoen soilik esaten baitute: eskala bat behar da.</p><p><strong>Proposatu diren irtenbideak:</strong></p><ul><li><strong>Esaten duena</strong>: dena lortzeak zerbait hobetzen du, baina oso gutxi. Kontuz: «ia ez dira gutxiago» esaldiak <strong>baieztatzen du</strong> gutxiago zorigaiztoko direla. Ez du esaten berdin direnik: «ia ez» ez da «ez».</li><li><strong>Aldez aurretik onartzen duena</strong>: badaudela dena lortzen dutenak eta gutxi edo ezer lortzen ez dutenak; inor ez dagoela bi taldeetan aldi berean; eta bi taldeek zorigaiztoko izateko zerbait dutela, bestela ez bailitzateke «gutxiago zorigaiztoko» izateaz hitz egingo.</li><li><strong>Esaten ez duena</strong>: ezer ez asko lortzen dutenei buruz, baina ez dena. Esaldiak muturrak konparatzen ditu eta erdia kanpoan uzten du. Ezin da ondorioztatu talde hori zorigaiztokotasunean erdibidean dagoenik: hiruretako zoriontsuena edo zorigaiztokoena izan liteke.</li><li><strong>Irakurketaren tranpa</strong>: «dena lortzen dutenak gutxi lortzen dutenak baino gutxiago zorigaiztoko dira» bi eratara irakur daiteke: «lehenengoetako bakoitza, bigarrenetako bakoitza baino gutxiago» edo «oro har, batez beste». Lehen irakurketa kontraadibide bakar batekin ezeztatzen da; bigarrena, ez. Taldeei buruzko esaldi orokorrak bigarren eran ulertu ohi dira.</li><li><strong>Aurreko esaldiarekiko lotura</strong>: dena lortzen dutenak gutxi lortzen dutenak baino gutxiago zorigaiztoko badira, ia ez bada ere, ezin dira haiek izan zatirik txarrena eramaten dutenak, beti baitago norbait okerrago. Lehen irakurketarekin, esaldi berriak aurrekoa <strong>inplikatzen</strong> du. Alderantziz, ez: aurrekoak onartzen zuen dena lortzeak zorigaiztokotasuna asko arintzea, eta honek ukatu egiten du.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-tanto": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ariketak)",
  "izena": "«Dena lortzen dutenak zein ezer lortzen ez dutenak…»",
  "izar": 0,
  "esteka": "ejercicios/tanto",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Dena lortzen dutenak zein ezer lortzen ez dutenak zorigaiztokoak dira.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma logikoa:</strong> <code>(q ∨ s) → p</code></p><p>Bi baiezko unibertsal (A motakoak) dira, elkartuta: «dena lortzen duen oro zorigaiztokoa da» eta «ezer lortzen ez duen oro zorigaiztokoa da». <em>p</em> = «zorigaiztokoa da», <em>q</em> = «nahi duen guztia lortzen du» eta <em>s</em> = «ez du ezer lortzen» hartuta, <em>(q → p) ∧ (s → p)</em> geratzen da, eta hori <em>(q ∨ s) → p</em>-ren baliokidea da: bi muturretako edozeinetan bazaude, zorigaiztokoa zara. Haren kontrako alderantzizkoak gauza bera dio beste aldetik: <em>¬p → (¬q ∧ ¬s)</em>, zorigaiztokoa ez dena zerbait lortu du, baina ez dena.</p><p><strong>Proposatu diren irtenbideak:</strong></p><ul><li><strong>Esaten duena</strong>: bi muturrek zorigaiztokotasunera daramate. Eta, kontrako alderantzizkoaren arabera, zorigaiztoko ez izan daitezkeen bakarrak erdian daudela: erdibidearen goraipamena dirudi, nahiz eta esaldiak ez duen esaten erdikoak zoriontsuak direnik, soilik erditik kanpo inor ez dela zoriontsua.</li><li><strong>Hizkuntzaren tranpa</strong>: gaztelaniazko «no consiguen nada» esaldiak bi hitz ezezko ditu, baina ez dute elkar ezeztatzen logikako <em>¬¬</em>-k bezala. «No… nada» ezeztapen bakarra da: «ez dute ezer lortzen» esan nahi du, ez «zerbait lortzen dute». Euskaraz ere «ez… ezer» ezeztapen bakarra da. Horregatik da <em>s</em> letra bakarra, barruan ezeztapenik gabe.</li><li><strong>Kontzeptuaren tranpa</strong>: ezer desiratzen ez duenak «nahi duen guztia» lortzen du (ez zaio falta nahi duen ezer) eta, aldi berean, ezer ez lortu dezake. Bi taldeetan aldi berean egon litekeen bakarra da, eta esaldiak dio hura ere zorigaiztokoa dela. Estoikoek, epikurearrek edo budistek pentsatzen zutenaren kontrakoa da hori: lasaitasuna desioak murriztuz lortzen dela.</li><li><strong>Aldez aurretik onartzen ez duena</strong>: talde bakoitzean norbait dagoela. Gaur egungo logikan, «q guztiak p dira» egiazkoa da q bakar bat ere ez badago ere (gauza bera ikusten da Silogismoak fitxan, irakurketa tradizionalarekin).</li><li><strong>Aurrekoekiko lotura</strong>: lehen esaldiak onartzen zuen dena lortzen dutenetako batzuk zorigaiztokoak direla; honek dio guztiak direla; beraz, gehiago esaten du. «Ia ez»-ren esaldiak zorigaiztokotasunaren mailak konparatzen zituen; honek bi muturretan zorigaiztokotasuna dagoela baino ez du esaten, neurtu gabe.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-contrafactico": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ariketak)",
  "izena": "«…zoriontsuak izango lirateke, desiratzeari utzi ezin baliote»",
  "izar": 0,
  "esteka": "ejercicios/contrafactico",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Desiratzen duten eta galdu ezin duten zerbait lortzen dutenak zoriontsuak izango lirateke, hura desiratzeari utzi ezin baliote.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma logikoa:</strong> <code>q ∧ r → p</code></p><p>Hiru letra: <em>p</em> = «zoriontsua da», <em>q</em> = «desiratzen duen eta galdu ezin duen zerbait lortzen du» eta <em>r</em> = «ezin dio hura desiratzeari utzi». Tauletako geziarekin irakurrita, esaldia <em>(q ∧ r) → p</em> da: norbaitek lortzen badu eta ezin badio desiratzeari utzi, zoriontsua da. Baina esaldia ez dago indikatiboan («zoriontsuak dira, …bada»), baizik eta <strong>baldintza hipotetikoan</strong> («zoriontsuak izango lirateke, …ezin baliote»): <strong>baldintzazko kontrafaktiko</strong> bat da. Gauzak diren bezalakoak ez balira zer gertatuko litzatekeen esaten du, eta ulertzera ematen du, egiaz, ez direla horrela: desiratzeari utz diezaioketela (<em>¬r</em>) eta, orduan, ez direla zoriontsuak (<em>¬p</em>).</p><p><strong>Proposatu diren irtenbideak:</strong></p><ul><li><strong>Ulertzera ematen duena</strong>: desiratzen duen eta galdu ezin duen zerbait duenak ere utz diezaiokeela hura desiratzeari, eta orduan ez dela zoriontsua. Ez du esaten: aditzaren moduak iradokitzen du.</li><li><strong>Arrakala bat Agustinen argudioan</strong>: haren ustez, zoriontsua da nahi duena duena (<em>Bizitza zoriontsua</em>, II, 10-11), eta horregatik nahikoa da galdu ezin dena izatea. Esaldiak seinalatzen du bi gauza gal daitezkeela: objektua eta desioa. Galdu ezin dena hor dago oraindik, baina hura nahi izateari uzten badiot, jada ez dut «nahi dudana».</li><li><strong>Nola ixten duen aldaerak</strong>: «guztiok <em>nahitaez</em> bilatzen dugun helburua». Galdu ezin dena desiratzeari utzi ezin dioguna ere bada, <em>r</em> beti betetzen da eta kontrafaktikoa soberan dago: esaldiak Agustinek esaten duen gauza bera dio. «Nahitaez» hori da, hain zuzen, esaldi honek falta duen pieza.</li><li><strong>Monikaren aurrean</strong>: hark zioen gauza galkorrek ez dutela asetzen («talibus satiari non poterit», II, 11). Esaldi honek urrunago doa: galdu ezin dena ere ez da nahikoa, desioa itzal badaiteke.</li><li><strong>Schopenhauerren ondoan</strong>: betetako desioa higatu egiten da eta asperdurari ematen dio bide, lehen esaldiko penduluan bezala.</li></ul>"
   }
  ]
 }
};
