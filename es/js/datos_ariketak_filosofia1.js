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
    "html": "<p>Si llueve, el suelo se moja.</p><p>Diccionario: <b>p</b> = llueve · <b>q</b> = el suelo se moja</p>"
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
    "html": "<p>Llueve y no llevo paraguas.</p><p>Diccionario: <b>p</b> = llueve · <b>q</b> = llevo paraguas</p>"
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
    "html": "<p>Si llueve y no llevo paraguas, me mojo.</p><p>Diccionario: <b>p</b> = llueve · <b>q</b> = llevo paraguas · <b>r</b> = me mojo</p>"
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
    "html": "<p><strong>Formula:</strong> <code>¬p ∧ ¬q</code></p><p><strong>Pista:</strong> «Ni… ni…» niega dos cosas a la vez.</p>"
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
    "html": "<p>Solo iré de excursión si no llueve.</p><p>Diccionario: <b>p</b> = voy de excursión · <b>q</b> = llueve</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → ¬q</code></p><p><strong>Pista:</strong> Caso trampa: la estructura «solo si…» introduce una condición necesaria, y esa va detrás de la flecha.</p>"
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
    "html": "<p>Para votar es necesario ser mayor de edad.</p><p>Hiztegia: <b>p</b> = votas · <b>q</b> = eres mayor de edad</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p → q</code></p><p><strong>Pista:</strong> Si votas, es porque eres mayor de edad; pero ser mayor de edad no basta para votar.</p>"
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
    "html": "<p><strong>Formula:</strong> <code>p → q</code></p><p><strong>Pista:</strong> Decir «basta con p» indica que p es una condición suficiente: va delante de la flecha.</p>"
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
    "html": "<p>Saldremos, al menos si no llueve.</p><p>Diccionario: <b>p</b> = salimos · <b>q</b> = llueve</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>¬q → p</code></p><p><strong>Pista:</strong> Caso trampa: decir «p, al menos si no q» significa «si no q, entonces p».</p>"
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
    "html": "<p>Deituko dizut baldin y soilik baldin berandu iristen bazara.</p><p>Hiztegia: <b>p</b> = deitzen dizut · <b>q</b> = berandu iristen zara</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>p ↔ q</code></p><p><strong>Pista:</strong> La estructura «si y solo si» une dos condicionales: p → q y q → p.</p>"
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
    "html": "<p>No es cierto que, si llueve, se suspenda el partido.</p><p>Diccionario: <b>p</b> = llueve · <b>q</b> = el partido se suspende</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>¬(p → q)</code></p><p><strong>Pista:</strong> La estructura «no es cierto que» niega todo el condicional: va delante del paréntesis.</p>"
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
    "html": "<p>Epicuro: «Cuando nosotros estamos, la muerte no está; y cuando la muerte está, nosotros ya no estamos».</p><p>Hiztegia: <b>p</b> = nosotros estamos · <b>q</b> = la muerte está</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>(p → ¬q) ∧ (q → ¬p)</code></p><p><strong>Pista:</strong> Son dos condicionales unidos por «y». (Carta a Meneceo, 125.)</p>"
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
    "html": "<p>Mónica, literalmente: «Si quiere cosas buenas y las tiene, es feliz; pero si quiere cosas malas, aunque las tenga, es desdichada».</p><p>Hiztegia: <b>p</b> = es feliz · <b>q</b> = quiere cosas buenas · <b>r</b> = tiene cosas buenas · <b>s</b> = quiere cosas malas · <b>t</b> = tiene cosas malas</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Formula:</strong> <code>((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)</code></p><p><strong>Pista:</strong> «Pero» y «aunque» se escriben como ∧: «aunque las tenga» no niega que las tenga, lo afirma. Compáralo con la lectura de tres letras de la ficha de Mónica (Argumentos clásicos): ¿qué pasa con quien quiere el bien y el mal, lo tiene todo y es feliz? Una fórmula lo admite y la otra no.</p>"
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
    "html": "<p><em>Si Sócrates es hombre, es mortal. Sócrates es hombre. Por tanto, Sócrates es mortal.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si hay fuego, hay oxígeno. En la Luna no hay oxígeno. Por tanto, en la Luna no hay fuego.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si un gobierno viola los derechos de los ciudadanos, el pueblo tiene derecho a resistir. El pueblo resiste. Por tanto, el gobierno ha violado sus derechos.</em></p><p>¿Regla o trampa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Afirmar el consecuente:</strong> p → q · q ⊢ p. El suelo puede estar mojado por otra razón: alguien lo ha regado. La condición suficiente no es la única posible.</p>"
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
    "html": "<p><em>O bien el culpable es el mayordomo o bien el cocinero. El mayordomo tiene coartada y no es culpable. Por tanto, es el cocinero.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si te esfuerzas, mejoras; si mejoras, apruebas. Por tanto, si te esfuerzas, apruebas.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si llueve, el partido se suspende. No llueve. Por tanto, el partido no se suspende.</em></p><p>¿Regla o trampa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Negar el antecedente:</strong> p → q · ¬p ⊢ ¬q. La regla no dice qué pasa si no estudias: quizá apruebes por otra razón.</p>"
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
    "html": "<p><em>Si dudo, pienso. Dudo. Por tanto, pienso.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Ana estudia Filosofía o Historia. Estudia Filosofía. Por tanto, no estudia Historia.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si el alma fuera material, se descompondría como el cuerpo. El alma no se descompone. Por tanto, el alma no es material.</em></p><p>¿Regla o trampa?</p>"
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
    "html": "<p><em>Si una teoría es buena, sus predicciones se cumplen. Sus predicciones se cumplen. Por tanto, la teoría es buena.</em></p><p>¿Regla o trampa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Afirmar el consecuente:</strong> p → q · q ⊢ p. El suelo puede estar mojado por otra razón: alguien lo ha regado. La condición suficiente no es la única posible.</p>"
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
    "html": "<p><em>Si llueve, hay nubes. Por tanto, si hay nubes, llueve.</em></p><p>¿Regla o trampa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Invertir el condicional:</strong> p → q ⊢ q → p. Que p sea suficiente para q no significa que q lo sea para p: el gato también es mamífero. Es el mismo error que confundir «si» con «solo si».</p>"
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
    "html": "<p><em>No es cierto que el acusado sea culpable y que actuara solo. Por tanto, el acusado no es culpable.</em></p><p>¿Regla o trampa?</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Negar una conjunción:</strong> ¬(p ∧ q) ⊢ ¬p. Basta con que no se cumpla una de las dos: puede estar en casa y no en la escuela. De ¬(p ∧ q) solo se deduce ¬p ∨ ¬q (De Morgan).</p>"
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
    "html": "<p><em>Todos los filósofos son curiosos.</em> <span>(F = filósofo, C = curioso)</span></p><ol type=\"a\"><li><code>∀x (Fx → Cx)</code></li><li><code>∀x (Fx ∧ Cx)</code></li><li><code>∃x (Fx ∧ Cx)</code></li><li><code>∀x (Cx → Fx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Fx → Cx)</strong> Universal afirmativa (A). Con el símbolo ∧ diría que todo el mundo es filósofo y curioso; con la flecha al revés, que todo curioso es filósofo.</p>"
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
    "html": "<p><em>Algún sofista cobraba por enseñar.</em> <span>(S = sofista, C = cobraba por enseñar)</span></p><ol type=\"a\"><li><code>∃x (Sx → Cx)</code></li><li><code>∃x (Sx ∧ Cx)</code></li><li><code>∀x (Sx → Cx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∃x (Sx ∧ Cx)</strong> Particular afirmativa (I): hay alguien que es sofista y cobraba. Con la flecha bastaría con que existiera algo que no es sofista.</p>"
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
    "html": "<p><em>Ningún dios es mortal.</em> <span>(D = dios, M = mortal)</span></p><ol type=\"a\"><li><code>¬∀x (Dx → Mx)</code></li><li><code>∀x (¬Dx → Mx)</code></li><li><code>∀x (Dx → ¬Mx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Dx → ¬Mx)</strong> Universal negativa (E). También vale ¬∃x (Dx ∧ Mx): «no hay nada que sea dios y mortal».</p>"
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
    "html": "<p><strong>¬∀x (Gx → Fx)</strong> Caso trampa: «no todos» no es «ninguno». Es equivalente a ∃x (Gx ∧ ¬Fx): algún griego no era filósofo (O).</p>"
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
    "html": "<p><em>Solo los ciudadanos votaban en la asamblea.</em> <span>(V = votaba en la asamblea, C = ciudadano)</span></p><ol type=\"a\"><li><code>∀x (Cx → Vx)</code></li><li><code>∀x (Vx → Cx)</code></li><li><code>∃x (Vx ∧ Cx)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Vx → Cx)</strong> Caso trampa: «solo los C» pone la condición necesaria detrás de la flecha: todo el que votaba era ciudadano (no todo ciudadano votaba).</p>"
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
    "html": "<p><strong>Ms</strong> Un individuo concreto se escribe con una letra minúscula (una constante): no se necesita cuantificador.</p>"
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
    "html": "<p><em>Todo lo que piensa existe.</em> <span>(P = piensa, E = existe)</span></p><ol type=\"a\"><li><code>∀x (Px → Ex)</code></li><li><code>∀x (Ex → Px)</code></li><li><code>∃x (Px ∧ Ex)</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x (Px → Ex)</strong> Baiezko unibertsala (A). «Ni existitzen naiz» ateratzeko, «nik pentsatzen dut» (Pi) premisa y instantziazio unibertsala ere beharko lirateke, Sokratesekin bezala.</p>"
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
    "html": "<p><em>Todo el mundo tiene una madre.</em> <span>(M = «y es la madre de x»)</span></p><ol type=\"a\"><li><code>∃y ∀x Myx</code></li><li><code>∀x ∃y Myx</code></li><li><code>∀x ∀y Myx</code></li></ol>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>∀x ∃y Myx</strong> Para cada persona hay alguna madre (puede ser distinta en cada caso). La fórmula ∃y ∀x Myx diría que hay una única madre de todos: es cambiar el orden de los cuantificadores.</p>"
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
    "html": "<p><em>Hay alguien a quien todos admiran.</em> <span>(A = «x admira a y»)</span></p><ol type=\"a\"><li><code>∀x ∃y Axy</code></li><li><code>∃y ∀x Axy</code></li><li><code>∃x ∃y Axy</code></li></ol>"
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
  "atalaIzena": "Esaldien azterketa (klaseko ejercicios)",
  "izena": "«Zorigaiztoko guztien artean…»",
  "izar": 0,
  "esteka": "ejercicios/infelices",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Entre todos los desdichados, los que consiguen todo lo que quieren no son los que se llevan la peor parte.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma lógica:</strong> <code>(p ∧ q) → ¬r</code></p><p>Hablamos de personas; por tanto, tomamos tres propiedades: <em>p</em> = «es desdichada», <em>q</em> = «consigue todo lo que quiere», <em>r</em> = «se lleva la peor parte». La frase dice: <strong>si alguien es desdichado y consigue todo lo que quiere, entonces no se lleva la peor parte</strong>: <em>(p ∧ q) → ¬r</em>. Es una universal negativa (de tipo E): «ningún desdichado que lo consigue todo es de los que se llevan la peor parte». Su contrapositivo dice lo mismo por el otro lado: si un desdichado se lleva la peor parte, entonces no consigue todo lo que quiere: <em>(p ∧ r) → ¬q</em>.</p><p><strong>Soluciones propuestas:</strong></p><ul><li><strong>Lo que presupone</strong>: que existen desdichados que consiguen todo lo que quieren. Si no los hubiera, no tendría sentido señalar «entre todos los desdichados». Conseguir todo lo que se quiere no basta para ser feliz.</li><li><strong>Lo que sugiere, pero no dice</strong>: que se llevan la peor parte los que no consiguen lo que quieren. Es una sugerencia (algo que se da a entender), no una consecuencia lógica: la frase solo excluye un grupo, no dice quién se lleva la peor parte.</li><li><strong>Lo que no dice</strong>: que los que lo consiguen todo sean felices (al contrario, los cuenta entre los desdichados), ni que sufran poco: solo que no son los que más sufren.</li><li><strong>Ideas relacionadas</strong>: según Schopenhauer (<em>El mundo como voluntad y representación</em>, § 57), la vida va como un péndulo, entre el dolor del deseo insatisfecho y el hastío del deseo satisfecho. Oscar Wilde, en <em>El abanico de Lady Windermere</em>, hace decir a un personaje que hay dos tragedias: no conseguir lo que se desea y conseguirlo.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-apenas": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ejercicios)",
  "izena": "«Casi no son menos desdichados…»",
  "izar": 0,
  "esteka": "ejercicios/apenas",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Los que consiguen todo lo que quieren casi no son menos desdichados que los que consiguen poco o nada.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p>Esta frase ya no clasifica (ser o no desdichado), sino que <strong>compara grados</strong>. Llamemos <em>q</em> a los que consiguen todo lo que quieren y <em>s</em> a los que consiguen poco o nada. La frase afirma dos cosas a la vez: que <em>q</em> es menos desdichado que <em>s</em> («menos desdichado») y que la diferencia es pequeña («casi no»). Es una conjunción: si falla cualquiera de las dos partes, la frase es falsa. En la lógica de enunciados, todo eso queda en una sola letra, porque «A es menos desdichado que B» no se puede dividir en partes verdaderas o falsas: hace falta una relación entre dos términos, <em>M(x, y)</em>, «x es menos desdichado que y», y eso corresponde a la lógica de predicados. Por eso aquí no valen ni las tablas de verdad hechas con p, q y r ni los círculos de Euler, que solo dicen quién está dentro y quién fuera: hace falta una escala.</p><p><strong>Soluciones propuestas:</strong></p><ul><li><strong>Lo que dice</strong>: conseguirlo todo mejora algo, pero muy poco. Cuidado: la frase «casi no son menos» <strong>afirma</strong> que son menos desdichados. No dice que sean iguales: «casi no» no es «no».</li><li><strong>Lo que presupone</strong>: que existen los que lo consiguen todo y los que consiguen poco o nada; que nadie está en los dos grupos a la vez; y que ambos grupos tienen algo de desdichados, pues de lo contrario no se hablaría de ser «menos desdichado».</li><li><strong>Lo que no dice</strong>: algo sobre los que consiguen mucho, pero no todo. La frase compara los extremos y deja fuera el medio. No se puede deducir que ese grupo esté a mitad de camino en la desdicha: podría ser el más feliz o el más desdichado de los tres.</li><li><strong>La trampa de la lectura</strong>: «los que lo consiguen todo son menos desdichados que los que consiguen poco» se puede leer de dos maneras: «cada uno de los primeros, menos que cada uno de los segundos» o «en general, en promedio». La primera lectura se refuta con un solo contraejemplo; la segunda, no. Las frases generales sobre grupos se suelen entender de la segunda manera.</li><li><strong>Relación con la frase anterior</strong>: si los que lo consiguen todo son menos desdichados que los que consiguen poco, aunque sea casi nada, no pueden ser ellos los que se llevan la peor parte, porque siempre hay alguien peor. Con la primera lectura, la frase nueva <strong>implica</strong> la anterior. Al revés, no: la anterior admitía que conseguirlo todo aliviaba mucho la desdicha, y esta lo niega.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-tanto": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ejercicios)",
  "izena": "«Dena lortzen dutenak zein ezer lortzen ez dutenak…»",
  "izar": 0,
  "esteka": "ejercicios/tanto",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Tanto los que lo consiguen todo como los que no consiguen nada son desdichados.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma lógica:</strong> <code>(q ∨ s) → p</code></p><p>Son dos universales afirmativas (de tipo A), unidas: «todo el que lo consigue todo es desdichado» y «todo el que no consigue nada es desdichado». Tomando <em>p</em> = «es desdichado», <em>q</em> = «consigue todo lo que quiere» y <em>s</em> = «no consigue nada», queda <em>(q → p) ∧ (s → p)</em>, y eso es equivalente a <em>(q ∨ s) → p</em>: si estás en cualquiera de los dos extremos, eres desdichado. Su contrapositivo dice lo mismo por el otro lado: <em>¬p → (¬q ∧ ¬s)</em>, el que no es desdichado ha conseguido algo, pero no todo.</p><p><strong>Soluciones propuestas:</strong></p><ul><li><strong>Lo que dice</strong>: los dos extremos llevan a la desdicha. Y, según el contrapositivo, los únicos que pueden no ser desdichados están en el medio: parece una alabanza del término medio, aunque la frase no dice que los del medio sean felices, solo que fuera del medio nadie es feliz.</li><li><strong>La trampa del lenguaje</strong>: la expresión castellana «no consiguen nada» tiene dos palabras negativas, pero no se anulan entre sí como el <em>¬¬</em> de la lógica. «No… nada» es una sola negación: significa «no consiguen nada», no «consiguen algo». También en euskera «ez… ezer» es una sola negación. Por eso es una sola letra <em>s</em>, sin negación dentro.</li><li><strong>La trampa del concepto</strong>: el que no desea nada consigue «todo lo que quiere» (no le falta nada de lo que desea) y, a la vez, puede no conseguir nada. Es el único que podría estar en los dos grupos a la vez, y la frase dice que también él es desdichado. Eso es lo contrario de lo que pensaban estoicos, epicúreos o budistas: que la calma se logra reduciendo los deseos.</li><li><strong>Lo que no presupone</strong>: que haya alguien en cada grupo. En la lógica actual, «todos los q son p» es verdadera aunque no haya ni un solo q (lo mismo se ve en la ficha Silogismos, con la lectura tradicional).</li><li><strong>Relación con las anteriores</strong>: la primera frase admitía que algunos de los que lo consiguen todo son desdichados; esta dice que todos lo son; por tanto, dice más. La frase del «casi no» comparaba grados de desdicha; esta solo dice que hay desdicha en los dos extremos, sin medirla.</li></ul>"
   }
  ]
 },
 "filosofia1#ej-contrafactico": {
  "mota": "ariketa",
  "kapitulua": "filosofia1",
  "atala": "ej",
  "atalaIzena": "Esaldien azterketa (klaseko ejercicios)",
  "izena": "«…zoriontsuak izango lirateke, desiratzeari utzi ezin baliote»",
  "izar": 0,
  "esteka": "ejercicios/contrafactico",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<p>«Desiratzen duten y galdu ezin duten zerbait lortzen dutenak zoriontsuak izango lirateke, hura desiratzeari utzi ezin baliote.»</p>"
   }
  ],
  "ebazpena": [
   {
    "mota": "testua",
    "html": "<p><strong>Forma lógica:</strong> <code>q ∧ r → p</code></p><p>Tres letras: <em>p</em> = «es feliz», <em>q</em> = «consigue algo que desea y no puede perder» y <em>r</em> = «no puede dejar de desearlo». Leída con la flecha de las tablas, la frase es <em>(q ∧ r) → p</em>: si alguien lo consigue y no puede dejar de desearlo, es feliz. Pero la frase no está en indicativo («son felices, si…»), sino en <strong>condicional hipotético</strong> («serían felices, si… no pudieran»): es un <strong>condicional contrafáctico</strong>. Dice qué pasaría si las cosas no fueran como son, y da a entender que, en realidad, no son así: que puede dejar de desearlo (<em>¬r</em>) y, entonces, que no son felices (<em>¬p</em>).</p><p><strong>Soluciones propuestas:</strong></p><ul><li><strong>Lo que da a entender</strong>: que incluso el que tiene algo que desea y no puede perder puede dejar de desearlo, y entonces no es feliz. No lo dice: lo sugiere el modo verbal.</li><li><strong>Una grieta en el argumento de Agustín</strong>: según él, es feliz el que tiene lo que quiere (<em>La vida feliz</em>, II, 10-11), y por eso basta tener lo que no se puede perder. La frase señala que pueden perderse dos cosas: el objeto y el deseo. Lo que no se puede perder sigue ahí, pero si dejo de desearlo, ya no tengo «lo que quiero».</li><li><strong>Cómo cierra la variante</strong>: «el objetivo que todos <em>necesariamente</em> buscamos». Lo que no se puede perder es también lo que no podemos dejar de desear, <em>r</em> se cumple siempre y el contrafáctico sobra: la frase dice lo mismo que Agustín. Ese «necesariamente» es, precisamente, la pieza que le falta a esta frase.</li><li><strong>Ante Mónica</strong>: ella decía que las cosas perecederas no sacian («talibus satiari non poterit», II, 11). Esta frase va más lejos: ni siquiera lo que no se puede perder basta, si el deseo puede apagarse.</li><li><strong>Junto a Schopenhauer</strong>: el deseo satisfecho se desgasta y da paso al hastío, como en el péndulo de la primera frase.</li></ul>"
   }
  ]
 }
};
