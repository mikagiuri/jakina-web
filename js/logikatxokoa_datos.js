/* Logika-txokoa · datuak EUSKARAZ (dsh-2, 19-10-2026)
   Iturburua (solo lectura): lab_iesmdb web/js/logicaview.js + logicamoderna.js + paradojas.js (Filosofia 1. maila).
   Itzulpenak: lab_iesmdb web_i18n/tm/eu.json eta ui/eu.json (esaldi osoa gako); 3 kate eskuz (Bai/Ez).
   SORTZEN DU: tools/_lanak/dsh2/eraiki_logika_txokoa.mjs — ez editatu eskuz.
   Kodea (funtzioak) logikatxokoaview.js-en dago; hau kargatzen da lehenago. */

/* interfaz-testuak */
const LOG_TXT = {
 "tabTablas": "Egia-taulak",
 "tabSilog": "Silogismoak",
 "tabPuertas": "Ate logikoak",
 "formula": "Formula",
 "borrar": "Ezabatu",
 "ejemplos": "Adibideak:",
 "verCircuito": "Ikusi zirkuitu gisa",
 "ayudaFormula": "Idatzi formula bat p, q, r, s, t aldagaiekin eta ¬ ∧ ∨ → ↔ konektiboekin (edo botoiekin).",
 "errVacia": "Idatzi formula bat.",
 "errCar": "Ez dut «{c}» ikurra ulertzen.",
 "errFalta": "Zerbait falta da formularen amaieran.",
 "errParen": "Parentesi bat ixteke dago.",
 "errSobra": "Zerbait soberan dago «{c}» atzetik.",
 "errVars": "Gehienez bost aldagai desberdin.",
 "tautologia": "Tautologia: errenkada guztietan da egiazkoa, aldagaien balioa edozein dela ere.",
 "contradiccion": "Kontraesana: errenkada guztietan da faltsua.",
 "contingencia": "Kontingentzia: errenkada batzuetan egiazkoa da eta beste batzuetan faltsua.",
 "argTitulo": "Baliozkoa al da argudio hau?",
 "premisas": "Premisak (puntu eta komaz bereizita)",
 "conclusion": "Ondorioa",
 "comprobar": "Egiaztatu",
 "premisa": "{n}. premisa",
 "valido": "Baliozkoa: premisak egiazkoak diren errenkada guztietan, ondorioa ere egiazkoa da.",
 "noValido": "Ez da baliozkoa: badago gutxienez errenkada bat premisak egiazkoak eta ondorioa faltsua dituena (gorriz markatua). Kontraadibide bat da.",
 "filasPremisas": "Nabarmendutako errenkadetan premisa guztiak egiazkoak dira.",
 "mp": "Modus ponens",
 "mt": "Modus tollens",
 "ac": "Atzekaria baieztatzea (falazia)",
 "sd": "Silogismo disjuntiboa",
 "sh": "Silogismo hipotetikoa",
 "demorgan": "De Morganen legea",
 "tercero": "Hirugarren baztertua",
 "nocontra": "Kontraesana",
 "terminos": "Terminoak (singularrean)",
 "tS": "Subjektua (S)",
 "tP": "Predikatua (P)",
 "tM": "Erdiko terminoa (M)",
 "defS": "atenastar",
 "defP": "hilkor",
 "defM": "gizaki",
 "pMayor": "Premisa nagusia",
 "pMenor": "Premisa txikia",
 "concl": "Ondorioa",
 "figura": "Irudia",
 "figN": "{n}. irudia",
 "tipoA": "A · baiezko unibertsala",
 "tipoE": "E · ezezko unibertsala",
 "tipoI": "I · baiezko partikularra",
 "tipoO": "O · ezezko partikularra",
 "fA": "{x} guztiak {y} dira",
 "fE": "{x} bat ere ez da {y}",
 "fI": "{x} batzuk {y} dira",
 "fO": "{x} batzuk ez dira {y}",
 "modo": "{m} modua",
 "sinNombre": "Modu honek ez du izen tradizionalik.",
 "silValido": "Baliozkoa. {nombre} modua da.",
 "silValidoSin": "Baliozkoa.",
 "silTrad": "Baliozkoa da soilik «{t}» badirela onartzen badugu (Aristotelesen irakurketa tradizionala). Gaur egungo logikarentzat, bi premisa unibertsaletatik ez dator ondorio partikularrik.",
 "silTradNombre": "Irakurketa tradizionalean {nombre} modua da.",
 "silNoValido": "Ez da baliozkoa.",
 "reglasRotas": "Hausten dituen arauak:",
 "r1": "Erdiko terminoak banatuta egon behar du (bere hedadura osoan hartuta) gutxienez premisa batean.",
 "r2P": "Predikatua banatuta dago ondorioan, baina ez premisa nagusian (ilizitu nagusia).",
 "r2S": "Subjektua banatuta dago ondorioan, baina ez premisa txikian (ilizitu txikia).",
 "r3": "Bi premisa ezezkotatik ez dator ezer.",
 "r4a": "Premisa bat ezezkoa bada, ondorioak ezezkoa izan behar du.",
 "r4b": "Ondorio ezezko batek premisa ezezko bat behar du.",
 "r5": "Bi premisa partikularretatik ez dator ezer.",
 "r6": "Premisa bat partikularra bada, ondorioak partikularra izan behar du.",
 "venn": "Premisen Venn diagrama",
 "vennAyuda": "Grisa: eremu hutsa (ez dago ezer). ✕: gutxienez bat badago. Marra baten gaineko ✕ batek esan nahi du ez dakigula zein aldetan dagoen.",
 "vennConcl": "Premisen diagramak ondorioak dioena jada erakusten badu, silogismoa baliozkoa da.",
 "euler": "Proposizio bakoitzaren Euler diagramak",
 "eulerJunto": "Bi premisak batera (Euler diagrama)",
 "eulerJuntoAyuda": "Premisek posible uzten dituzten eremuak bakarrik marrazten dira: premisa unibertsal batek hutsik dagoela dioena ez da agertzen. Begiratu S eta P zirkuluei: derrigorrez ondorioak dioen bezala geratzen badira, silogismoa baliozkoa da.",
 "termLeyenda": "S = {s} · P = {p} · M = {m}",
 "eulerAyuda": "Zirkuluen kokapenak adierazten du erlazioa: bata bestearen barruan (guztiak), bereizita (bat ere ez), gurutzatuta (batzuk). ✕ ikurrak markatzen du non dakigun gutxienez bat badagoela; gurutzaketetan, gainerakoa hutsik egon daiteke edo ez.",
 "eulerConcl": "Silogismoa egiaztatzeko, elkartu premisen bi diagramak erdiko terminoaren (M) bidez, eta begiratu S eta P zirkuluek, beste aukerarik gabe, ondorioan bezala geratu behar duten.",
 "figAyuda": "Irudia erdiko terminoa non dagoen araberakoa da: 1 · M-P, S-M · 2 · P-M, S-M · 3 · M-P, M-S · 4 · P-M, M-S",
 "puerta": "Atea",
 "entradas": "Sakatu sarrerak aldatzeko (1 = korrontea pasatzen da, 0 = ez da pasatzen).",
 "salida": "Irteera",
 "gNOT": "NOT (ez): sarrera alderantzikatzen du. Ezeztapena da, ¬.",
 "gAND": "AND (eta): bi sarrerak 1 direnean bakarrik ematen du 1. Konjuntzioa da, ∧.",
 "gOR": "OR (edo): gutxienez sarrera bat 1 denean ematen du 1. Disjuntzioa da, ∨.",
 "gNAND": "NAND (ez-eta): AND eta ondoren NOT. NAND ateekin edozein zirkuitu eraiki daiteke.",
 "gNOR": "NOR (ez-edo): OR eta ondoren NOT.",
 "gXOR": "XOR (edo esklusiboa): sarrerak desberdinak direnean ematen du 1. «Bata edo bestea, baina ez biak» da.",
 "gXNOR": "XNOR: sarrerak berdinak direnean ematen du 1. Bibaldintzazkoa da, ↔.",
 "circuito": "Formula zirkuitu gisa",
 "circAyuda": "Sakatu aldagaiak haien balioa aldatzeko. Piztutako kableek 1 bat daramate. p → q baldintzazkoa ¬p ∨ q gisa eraikitzen da, eta bibaldintzazkoa XNOR ate batekin.",
 "lampara": "Lanpara",
 "tablaPuerta": "Atearen taula",
 "introTablas": "Logikak aztertzen du noiz den zuzena arrazoibide bat. Hemen letra bakoitza (p, q, r…) egiazkoa (E) edo faltsua (F) izan daitekeen esaldi bat da, eta konektiboek konbinatzen dituzte: ¬ (ez), ∧ (eta), ∨ (edo), → (…bada, orduan) eta ↔ (baldin eta soilik baldin). Idatzi formula bat eta taulak konbinazio posible guztiak probatuko ditu; beherago egiaztatu dezakezu argudio bat baliozkoa den. Hasteko, sakatu adibideetako bat.",
 "introSilog": "Silogismoa bi premisa eta ondorio bat dituen arrazoibide bat da, hiru termino erlazionatzen dituena: ondorioaren subjektua (S) eta predikatua (P), eta termino ertaina (M), bi premisetan agertzen dena eta haiek lotzen dituena. Esaldi bakoitza lau motatako bat da: A (guztiak…), E (bat ere ez…), I (batzuk…) eta O (batzuk… ez). Aldatu motak eta irudia, edo sakatu adibide bat, eta diagramek erakutsiko dizute ondorioa premisetatik ondorioztatzen den.",
 "introPuertas": "Ordenagailuek egia-taulen logika berarekin kalkulatzen dute, baina 1 (korrontea igarotzen da) eta 0 (ez da igarotzen) erabiliz, E eta F-ren ordez. Ate logiko bakoitza eragiketa bat egiten duen zirkuitu txiki bat da: NOT-ek sarrera ezeztatzen du, AND bi sarrerak piztuta daudenean bakarrik pizten da, OR-rekin nahikoa da bat… Sakatu sarrerak pizteko eta itzaltzeko; beherago, edozein formula zirkuitu bihurtzen da.",
 "introEjerc": "Fitxa bakoitzak esaldi bat aztertzen du beste fitxetako tresnekin: letrak esaldi soilentzat (p, q, r…), konektiboak egia-tauletan bezala, Euler diagrama bat (zirkulu bakoitza pertsona talde bat da; ✕ = norbait dago hor; ? = ez dakigu) eta egia-taula, esaldia zein kasutan izango litzatekeen faltsua esaten duena. Saiatu zu zeu esaldia formalizatzen «Forma logikoa» ireki aurretik.",
 "introClasicos": "Egile klasikoen argudioak, ariketen tresna berekin aztertuta: forma logikoa, Euler diagrama eta egia-taula. Irakurri esaldi bakoitza bere testuinguruan, saiatu esaten zer baldintza jartzen duen (beharrezkoa al da?, nahikoa al da?) eta konparatu gero azterketarekin.",
 "tabParad": "Paradoxak",
 "tabEjerc": "Ariketak",
 "tabClasicos": "Argudio klasikoak",
 "parTodas": "Guztiak",
 "parGrupo": "Erakutsi",
 "parProblema": "Non dago arazoa?",
 "parSalidas": "Proposatu diren irtenbideak",
 "parForma": "Forma logikoa",
 "parEuler": "Esaldia Euler diagrama gisa",
 "parConting": "Kontingentea: errenkada faltsu bat, eremu huts bat",
 "parEscala": "Esaldia eskala batean",
 "parDice": "Zer dioen, zer ematen duen aldez aurretik onartutzat eta zer ez duen esaten",
 "parPensar": "Pentsatzeko:",
 "parTabla": "Ikusi egia-taulan",
 "parIntro": "Paradoxa bat onargarria den zerbaitetik abiatu eta, zuzenak diruditen urratsekin, ondorio onartezin edo kontraesankor batera iristen den arrazoibidea da. Irakurri bakoitza eta pentsatu non huts egiten duen azalpenak ireki aurretik.",
 "tabCuadrado": "Oposizio-karratua",
 "tabConjuntos": "Multzoen legeak",
 "introCuadrado": "Subjektu bera eta predikatu bera dituzten A, E, I eta O lau proposizioak elkarrekin lotuta daude: bat egiazkoa ala faltsua den badakizu, batzuetan besteei buruz ere badakizu zerbait. Aukeratu proposizio bat, esan egiazkoa ala faltsua den, eta begiratu zer ondorioztatzen den besteentzat. Ondoren, aldatu irakurketa: gaur egungo logikaren irakurketarekin, S-ak badaudela ontzat ematen ez duenarekin, ia harreman guztiak galdu egiten dira.",
 "introConjuntos": "Klaseak (edo multzoak) konektiboen antzeko eragiketekin konbinatzen dira: bildura (edo), ebakidura (eta) eta osagarria (ez). Idatzi bi adierazpen, eta Venn diagramek bakoitzaren emaitza den eremua erakutsiko dute kolorez. Bi eremuak bat badatoz, adierazpenak baliokideak dira: lege bat egiaztatu duzu.",
 "cuElige": "Badakigu…",
 "cuEsV": "egiazkoa da",
 "cuEsF": "faltsua da",
 "cuLectura": "Irakurgaia",
 "cuTrad": "Tradizionala: gutxienez S bat badagoela suposatzen dugu",
 "cuActual": "Gaur egungo logika: ez dugu suposatzen S-ak badaudenik",
 "cuTerminos": "Adibidea:",
 "cuEj1": "Kirolariak eta ezkerrak",
 "cuEj1A": "Kirolari guztiak ezkerrak dira.",
 "cuEj1E": "Kirolari bat ere ez da ezkerra.",
 "cuEj1I": "Kirolari batzuk ezkerrak dira.",
 "cuEj1O": "Kirolari batzuk ez dira ezkerrak.",
 "cuEj2": "Ugaztunak eta ornodunak",
 "cuEj2A": "Ugaztun guztiak ornodunak dira.",
 "cuEj2E": "Ugaztun bat ere ez da ornoduna.",
 "cuEj2I": "Ugaztun batzuk ornodunak dira.",
 "cuEj2O": "Ugaztun batzuk ez dira ornodunak.",
 "cuEj3": "Adarbakarrak",
 "cuEj3A": "Adarbakar guztiek adar bat dute.",
 "cuEj3E": "Adarbakar batek ere ez du adarrik.",
 "cuEj3I": "Adarbakar batzuek adar bat dute.",
 "cuEj3O": "Adarbakar batzuek ez dute adarrik.",
 "cuV": "Egiazkoa",
 "cuF": "Faltsua",
 "cuQ": "Ez da jakiten",
 "cuDato": "datua",
 "cuContradictorias": "kontraesankorrak",
 "cuContrarias": "kontrarioak",
 "cuSubcontrarias": "subkontrarioak",
 "cuSubalternas": "subalternoak",
 "cuPerdida": "galdu egiten da",
 "cuNotaTrad": "Irakurketa honekin karratuaren lau harremanak betetzen dira: kontraesankorrak (beti aurkako balioak), kontrarioak (ez biak egiazkoak), subkontrarioak (ez biak faltsuak) eta subalternoak (unibertsala egiazkoa bada, partikularra ere bai).",
 "cuNotaActual": "Irakurketa honekin kontraesankorrak bakarrik geratzen dira. S-rik ez balego, «S guztiak P dira» eta «S bat ere ez da P» egiazkoak izango lirateke aldi berean, eta «S batzuk P dira» faltsua. Aristotelesek beste modu batera saihesten zuen arazoa: haren ustez, baiezkoek S-ak badaudela suposatzen dute, eta ezezkoek ez; eta O zen «ez da egia S guztiak P direnik».",
 "coIzq": "Lehen adierazpena",
 "coDer": "Bigarren adierazpena",
 "coAyuda": "Erabili A, B eta C letrak, ∪ (bildura), ∩ (ebakidura), − (diferentzia), ᶜ letra edo parentesi baten atzean (osagarria) eta parentesiak. + ere balio du ∪-ren ordez, · edo & ∩-ren ordez eta ' ᶜ-ren ordez.",
 "coIguales": "Bi adierazpenek eremu bera ematen dute: baliokideak dira.",
 "coDistintas": "Eremuak ez datoz bat: adierazpenak ez dira baliokideak. Begiratu zein gunetan bereizten diren.",
 "coLeyes": "Probatzeko legeak:",
 "coConm": "Trukakorra",
 "coAsoc": "Elkarkorra",
 "coDM1": "De Morgan (1)",
 "coDM2": "De Morgan (2)",
 "coDist": "Banakorra",
 "coDist2": "Banakorra (2)",
 "coComp": "Osagarria",
 "coDif": "Diferentzia",
 "coTrampa": "Lege ez den bat",
 "coErrCar": "Ez dut «{c}» ikurra ulertzen.",
 "coErrFalta": "Zerbait falta da adierazpenean.",
 "coErrParen": "Parentesi bat ixteke dago.",
 "coErrVacia": "Idatzi adierazpen bat.",
 "coCompara": "Bi emaitzak, bata bestearen ondoan",
 "coRayas": "Alde bakoitza begien aurrean eraikitzen da. Lehen multzoak honelako marrak ditu ⟋, bigarrenak honelakoak ⟍, eta emaitzak kolorea du, bi marra motak gainean dituela: ebakiduran (∩) bi marrak gurutzatzen dira; bilduran (∪) batekin aski da; diferentzian (−) lehenengoa bakarrik; eta osagarria (ᶜ) marrarik gabe geratzen dena da.",
 "coEuBtn": "Euler-en 5 kasuetan egiaztatu",
 "coEuOcultar": "Euler-en kasuak ezkutatu",
 "coEuIntro": "Euler diagrama batek kasu jakin batean dauden eremuak bakarrik marrazten ditu. Bi multzorekin bost kasu posible daude, eta lege batek bostetan bete behar du: marrazki solte batek legea irudikatzen du, baina ez du frogatzen. Venn diagramak, aldiz, eremu guztiak ditu aldi berean.",
 "coEuSep": "Bananduta",
 "coEuCorte": "Ebakitzen dira",
 "coEuAB": "A B-ren barruan",
 "coEuBA": "B A-ren barruan",
 "coEuIg": "A eta B berdinak",
 "coEuSi": "Bat datoz",
 "coEuNo": "Ez datoz bat",
 "coEuTodos": "Bost kasuetan bat datoz: berdintzak edozein bi multzotarako balio du, Venn diagramak erakusten duen bezala.",
 "coEuFalla": "Bost kasuetatik {n}etan ez datoz bat; beraz, ez da lege bat.",
 "coEuTrampa": "Kontuz: «{c}» kasuan bat datoz. Kasu hori bakarrik marraztu zuenak lege bat zela uste izango zuen.",
 "coEuTres": "Euler-ekin egiaztapena bi multzorekin egiten da (A eta B): hirurekin kasu posible gehiegi daude. Hiru multzotarako, frogatzen duena Venn diagrama da.",
 "coDifieren": "Bereizten diren guneak",
 "coUnivVacio": "U = unibertsoa: hizpide dugun guztia. Koloreak emaitza den eremua markatzen du.",
 "guiaTit": "Gida: nola erabili eta zertarako balio duen",
 "guiaTablas": "<h3>Zertarako balio du</h3><p>Arrazoitzen dugunean, esaldiak lotzen ditugu «ez», «eta», «edo» edo «baldin…, orduan» bezalako hitzekin. Egia-taulak balio du, oker egin gabe, esaldi konposatu bat noiz den egiazkoa eta noiz faltsua ikusteko. Eta arrazoibide bat zuzena den egiaztatzeko ere balio du: ea ondorioak egiazkoa <em>izan behar duen</em> premisak egiazkoak diren guztietan.</p><h3>Hasi aurretik: esaldien ordez letrak</h3><p>Esaldi soil bakoitzaren ordez letra bat jartzen da. Adibidez, «euria ari du» = <em>p</em> eta «lurra bustitzen da» = <em>q</em>. Esaldiak lotzen dituzten hitzei konektiboak deitzen zaie:</p><ul><li><strong>¬</strong> «ez»: ¬p = «ez du euririk egiten».</li><li><strong>∧</strong> «eta»: p ∧ q = «euria ari du eta lurra bustitzen da». Bi zatiak egiazkoak direnean baino ez da egiazkoa.</li><li><strong>∨</strong> «edo»: p ∨ q. Bietako bat gutxienez egiazkoa bada, egiazkoa da.</li><li><strong>→</strong> «baldin…, orduan»: p → q = «euria ari badu, lurra bustitzen da». Kasu bakar batean da faltsua: euria ari duenean eta lurra bustitzen ez denean.</li><li><strong>↔</strong> «baldin eta soilik baldin»: egiazkoa da bi zatiek balio bera dutenean (biak E edo biak F).</li></ul><h3>Urratsez urrats</h3><ol><li>Sakatu adibideetako bat edo idatzi zure formula «Formula» laukian. Teklatuan ez dauden ikurrek botoiak dituzte laukiaren azpian.</li><li>Erabili parentesiak taldekatzeko, matematiketan bezala: (p ∨ q) ∧ r ez da p ∨ (q ∧ r) bezala.</li><li>Taula bere kabuz egiten da idatzi ahala. Errenkada bakoitza aukera bat da, letren E eta F konbinazio bat: bi letrarekin 4 errenkada daude; hirurekin, 8.</li><li>Begiratu azken zutabeari eta azpiko mezuari. Formula <strong>tautologia</strong> (beti egiazkoa), <strong>kontraesana</strong> (beti faltsua) edo <strong>kontingentzia</strong> (mundua nolakoa den araberakoa) izan daiteke.</li><li>Beherago, «Baliozkoa al da argudio hau?» atalean, idatzi premisak puntu eta komaz bereizita, gero ondorioa, eta sakatu «Egiaztatu». Premisa guztiak egiazkoak eta ondorioa faltsua dituen errenkadaren bat badago, gorriz agertuko da. <strong>Kontradibide</strong> bat da: argudioa ez da baliozkoa.</li></ol><h3>Hasteko proba bat</h3><p>Argudioaren adibideetan, sakatu «Atzekaria baieztatzea»: «euria ari badu, lurra bustitzen da; lurra bustita dago; beraz, euria ari du». Arrazoizkoa dirudi, baina taulak kontradibidea aurkitzen du: lurra bustita egon daiteke norbaitek ureztatu duelako. Konparatu «Modus ponens»-ekin, hori bai baita baliozkoa.</p><p class=\"lg-nota\">Kontuz: argudio bat baliozkoa izateak ez du esan nahi haren ondorioa egiazkoa denik. Esan nahi du premisak egiazkoak <em>badira</em>, ondorioa ere egiazkoa dela.</p>",
 "guiaSilog": "<h3>Zertarako balio du</h3><p>Eguneroko arrazoibide askok gauza edo pertsona taldeei buruz hitz egiten dute: «guztiak…», «bat ere ez…», «batzuk…». Silogismoa da horiek aztertzeko modurik zaharrena: Aristotelesek asmatu zuen duela 2.300 urte baino gehiago. Tresna honek esaten dizu mota horretako arrazoibide bat zuzena den, eta marrazkiekin erakusten dizu.</p><h3>Piezak</h3><ul><li>Silogismo batek <strong>bi premisa</strong> eta <strong>ondorio</strong> bat ditu.</li><li>Hiru termino daude, hau da, hiru talde. «Gizaki oro hilkorra da; atenastar oro gizakia da; beraz, atenastar oro hilkorra da» adibidean, <em>atenastar</em> ondorioaren subjektua da (S), <em>hilkor</em> ondorioaren predikatua (P) eta <em>gizaki</em> erdiko terminoa (M): beste bien arteko zubia da, eta ondorioan desagertu egiten da.</li><li>Esaldi bakoitza lau motatako bat da: <strong>A</strong> «S oro P da», <strong>E</strong> «S bat ere ez da P», <strong>I</strong> «S batzuk P dira» eta <strong>O</strong> «S batzuk ez dira P». Gogoratzeko trikimailu bat: A eta I <em>affirmo</em> hitzaren bokalak dira («baieztatzen dut», latinez), eta E eta O <em>nego</em> hitzarenak («ukatzen dut»).</li></ul><h3>Urratsez urrats</h3><ol><li>Idatzi hiru terminoak singularrean, edo utzi adibide gisa agertzen direnak.</li><li>Aukeratu zabalgarrietan premisa bakoitzaren eta ondorioaren mota.</li><li>Aukeratu irudia: premisa bakoitzean erdiko terminoa zein lekutan dagoen adierazten du. Argi ez badaukazu, sakatu adibideetako bat eta begiratu nola aldatzen den.</li><li>Irakurri emaitza: «Baliozkoa» edo «Ez da baliozkoa». Baliozkoa ez bada, zein arau hausten duen esaten da.</li><li>Begiratu diagramei. Zirkulu bakoitza talde bat da. Vennenean, grisa = gune hutsa (han ez dago ezer) eta ✕ = han bat gutxienez badago. Eulerrenean, zirkulu bat beste baten barruan egoteak «guztiak» esan nahi du, bereizita egoteak «bat ere ez» eta gurutzatuta egoteak «batzuk». Premisak bakarrik marraztean ondorioak dioena agertzen bada jada, silogismoa baliozkoa da.</li></ol><h3>Hasteko proba bat</h3><p>Idatzi zure terminoak: S = katu, M = ugaztun, P = animalia. Probatu lehenik AAA lehen irudian (Barbara modua): «ugaztun oro animalia da; katu oro ugaztuna da; beraz, katu oro animalia da». Gero aldatu premisa txikia «Batzuk…»-era eta begiratu zer gertatzen zaion ondorioari. Eta erronka bat: bilatu premisa egiazkoak eta ondorio egiazkoa dituen silogismo bat, hala ere baliozkoa ez dena.</p>",
 "guiaPuertas": "<h3>Zertarako balio du</h3><p>Mugikorrek eta ordenagailuek ez dute «pentsatzen»: eragiketa logiko oso errazak egiten dituzte, milioika segundo bakoitzean. Eragiketa horietako bakoitza ate logiko batek egiten du, zirkuitu txiki-txiki batek. Fitxa honek erakusten du egia-taulen logika bera dela ordenagailuak martxan jartzen dituena: E-ren ordez 1 (korrontea igarotzen da) eta F-ren ordez 0 (ez da igarotzen), besterik ez.</p><h3>Urratsez urrats</h3><ol><li>Aukeratu ate bat goiko botoietan (NOT, AND, OR…). Azpian agertzen da zer egiten duen eta egia-tauletako zein konektibori dagokion.</li><li>Sakatu sarrerak 0 eta 1 artean aldatzeko, eta begiratu irteera pizten den. Atearen taulak kasu posible guztiak laburbiltzen ditu.</li><li>«Formula zirkuitu gisa» atalean, idatzi formula bat, egia-tauletan bezala, eta ateen zirkuitu gisa marraztuta agertuko da. Sakatu letrak haien balioa aldatzeko: piztutako kableek 1 bat daramate, eta amaierako lanpara da emaitza.</li><li>«Egia-taulak» fitxatik bazatoz, «Ikusi zirkuitu gisa» botoiak hona ekartzen du erabiltzen ari zinen formula.</li></ol><h3>Hasteko proba bat</h3><p>Pentsa mutur bakoitzean etengailu bat duen korridore bateko argian: edozein sakatuta ere, argia aldatu egiten da. Zein atek egiten du hori? Probatu XOR-ekin. Eta beste bat: etxeko atea irekita <em>eta</em> alarma konektatuta dagoenean jotzen duen alarma. Zein ate da?</p><p class=\"lg-nota\">Bitxikeria: ate mota bakar batekin, NAND, askotan errepikatuta, edozein zirkuitu eraiki daiteke, ordenagailu oso bat barne.</p>",
 "guiaParad": "<h3>Zertarako balio du</h3><p>Paradoxa bat ez da tranpadun asmakizun bat ezta esaldi arraro bat ere: hobeto pentsatzera behartzen duen arazo bat da. Ia denok onartuko genituzkeen gauzetatik abiatzen da eta, urratsez urrats, zerbait absurdora iristen da. Paradoxa batzuk ebatzi egin ziren eta zerbait berria irakatsi ziguten; adibidez, zenbaki infinituren batura batek emaitza finitua eman dezakeela. Beste batzuk gaur egun ere eztabaidatzen dira.</p><h3>Nola erabili fitxak</h3><ol><li>Erabili «Erakutsi» zabalgarria talde bakar bat ikusteko, edo utzi «Guztiak».</li><li>Irakurri izenburua, jatorria (nork planteatu zuen eta noiz) eta laukiko enuntziatua.</li><li>Ezer ireki aurretik, <strong>saiatu zu zeu esaten non dagoen arazoa</strong>: zein urrats iruditzen zaizu zalantzazkoa?, zein premisa ukatuko zenuke?</li><li>Ireki «Non dago arazoa?» eta konparatu pentsatu zenuenarekin. Fitxa batzuetan botoi bat dago paradoxa egia-taulan ikusteko.</li><li>Ireki «Proposatu diren irtenbideak»: filosofo desberdinen erantzunak dira. Ez duzu lehenengoarekin geratu beharrik; batzuetan elkarren kontrakoak dira.</li><li>Amaitu «Pentsatzeko» atalarekin, paradoxa kasu hurbil batera eramaten baitu.</li></ol><h3>Gelan lan egiteko modu bat</h3><p>Binaka: pertsona batek defendatzen du arrazoibidea zuzena dela eta besteak urrats okerra bilatzen du. Gero rolak trukatzen dituzte. Hasteko, ondo daude «Gezurtia», «Akiles eta dortoka» edo «Teseoren ontzia».</p>",
 "guiaEjerc": "<h3>Zertarako balio du</h3><p>Hemen ez dago paradoxarik: esaldi arruntak daude, testu batean irakurtzen ditugunak edo eztabaida batean esaten ditugunak bezalakoak. Horiek aztertzeak balio du zehazki zer baieztatzen duten, zer ematen duten aldez aurretik onartutzat eta, batez ere, zer <em>ez</em> duten esaten ulertzeko, hala dirudien arren. Hori behar da testu bat iruzkintzeko, esaten ez dituen gauzak egotzi gabe.</p><h3>Urratsez urrats</h3><ol><li>Irakurri esaldia lasai. Bilatu forma ematen dioten hitzak: «guztiak», «batzuk», «bat ere ez», «soilik», «baldin…», «eta», «edo», «ez».</li><li>Jarri letrak esaldi soilei (adibidez, <em>p</em> = «zoriontsua da», <em>q</em> = «nahi duena lortzen du») eta idatzi paper batean nola uste duzun lotzen direla.</li><li>Ireki «Forma logikoa» eta konparatu. Euler diagrama bat badago, zirkulu bakoitza pertsona talde bat da: ✕ = ziur han norbait dagoela; ? = esaldiak ez du esaten han inor dagoen.</li><li>Sakatu «Ikusi egia-taulan»: errenkada faltsuak esaldiak debekatzen dituen kasuak dira. Errenkada egiazkoak eta faltsuak badaude, esaldia <strong>kontingentea</strong> da: munduari buruz zerbait esaten du, bestela izan zitekeena.</li><li>Ireki «Zer dioen, zer ematen duen aldez aurretik onartutzat eta zer ez duen esaten», eta amaitu «Pentsatzeko» atalarekin.</li></ol><h3>Kontuz ohiko bi tranparekin</h3><ul><li>«A bada, orduan B» ez da «B bada, orduan A» bezala. «Euria ari badu, busti egiten naiz» esaldiak ez du esaten bustitzen naizen bakoitzean euria ari duenik.</li><li>«A direnak soilik dira B» esaldiak ez du esaten A diren guztiak B direnik. Baldintza beharrezko bat jartzen du (A gabe ez dago B), ez nahikoa den bat (A-rekin ez da nahikoa).</li></ul>",
 "guiaClasicos": "<h3>Zertarako balio du</h3><p>Filosofoek oso esaldi zainduekin argudiatzen dute, eta «soilik» edo «baldin» bezalako hitz batek erabat aldatzen du defendatzen dutena. Hemen lan klasikoetako esaldiak aztertzen dira beste fitxetako tresnekin, jatorrizko testua zehaztasun handiagoz irakurtzeko.</p><h3>Urratsez urrats</h3><ol><li>Irakurri lehenik taldearen sarrera: lanean kokatzen zaitu (nork hitz egiten duen, zein unetan eta zer eztabaidatzen den).</li><li>Irakurri esaldia eta galdetu zeure buruari zer baldintza jartzen duen. <strong>Beharrezkoa</strong> da (hura gabe ez da lortzen bilatzen dena) ala <strong>nahikoa</strong> (harekin aski da)? Edo biak?</li><li>Ireki «Forma logikoa» eta begiratu Euler diagramari eta egia-taulari, «Ariketak» fitxan bezala.</li><li>Konparatu talde bereko fitxak: batzuetan ideia beraren aldaerak dira, eta esaldiko aldaketa txiki batek diagrama aldatzen du.</li><li>Amaitu «Pentsatzeko» atalarekin eta, ahal baduzu, irakurri pasarte osoa «Irakurgaiak» atalean.</li></ol><p class=\"lg-nota\">Oraingoz, Agustin Deunaren <em>Sobre la vida feliz</em> laneko esaldiak daude: nor da zoriontsua, nahi duena duena ala galdu ezin duena nahi duena?</p>"
};

const LOGM_TXT = {
 "tabClasica": "Logika klasikoa",
 "tabModerna": "Logika modernoa",
 "tabFormalizar": "Formalizatu",
 "tabInferencia": "Inferentzia-arauak",
 "introFormalizar": "Formalizatzea esaldi bat sinboloetara itzultzea da: esaldi soil bakoitza letra bat da (p, q, r…), eta haiek lotzen dituzten hitzak («ez», «eta», «edo», «…bada, orduan») konektiboak dira. Idatzi formula teklatuarekin eta sakatu «Egiaztatu»: edozein formula baliokidek balio du, haren egia-taula soluzioarenarekin konparatzen baita.",
 "introInferencia": "Inferentzia-arau bat inoiz huts egiten ez duen arrazoitzeko modu bat da: premisak egiazkoak badira, ondorioa ere egiazkoa da. Forma batzuek haien antz handia dute, baina ez dira baliozkoak: falazia formalak dira. Hemen dituzu biak, bakoitzaren adibide batekin, eta ariketa bat bereizten ikasteko.",
 "guiaTitF": "Nola itzultzen den hitz bakoitza",
 "guiaF": "<ul><li><b>¬</b> (ez): «ez», «ez da egia», «faltsua da».</li><li><b>∧</b> (eta): «eta», «baina», «nahiz eta», «hala ere», «gainera». Logikan denek gauza bera diote: bi gauzak egia direla.</li><li><b>∨</b> (edo): «edo». Logikan inklusiboa da (bata, bestea edo biak); esaldiak biak aldi berean baztertzen baditu («edo… edo…, baina ez biak»), hori gehitu egin behar da.</li><li><b>→</b> (…bada, orduan): «p bada, q», «q, p bada», «p denean, q», «p den bakoitzean, q», «nahikoa da p q-rako» (p baldintza <i>nahikoa</i> da).</li><li><b>Kasu tranpa</b>: «p, q bada bakarrik» eta «p-rako q beharrezkoa da» honela idazten dira: <b>p → q</b>; q baldintza <i>beharrezkoa</i> da, ez nahikoa.</li><li><b>↔</b> (baldin eta soilik baldin): «p baldin eta soilik baldin q», «p, q denean eta soilik orduan».</li><li><b>Beste tranpa batzuk</b>: «ez p ez q» ¬p ∧ ¬q da; «p, q ez bada behintzat» ¬q → p da (edo, gauza bera dena, p ∨ q).</li><li><b>«Beraz» ez da konektiboa</b>: «pentsatzen dut, beraz banaiz» esaldiak ez du baieztatzen «pentsatzen badut, banaiz», baizik eta premisa batetik ondorio bat <i>ateratzen</i> du. Hori argudio bat da: «Inferentzia-arauak» atalean ikasten da.</li></ul>",
 "diccionario": "Hiztegia:",
 "tuFormula": "Zure formula",
 "comprobar": "Egiaztatu",
 "solucion": "Ikusi soluzioa",
 "pista": "Pista",
 "bien": "Zuzena! Zure formula soluzioaren baliokidea da: {s}",
 "mal": "Ez da baliokidea. Adibidez, {fila} denean, zure formulak {a} ematen du eta esaldiak {b} dio.",
 "verdadero": "egiazkoa",
 "falso": "faltsua",
 "vacia": "Idatzi formula bat.",
 "sol": "Soluzioa: {s}",
 "ejercicio": "{n}. esaldia / {m}",
 "validas": "Arau baliozkoak",
 "falacias": "Falazia formalak (ez dira baliozkoak)",
 "forma": "Forma",
 "ejemplo": "Adibidea",
 "porQue": "Zergatik huts egiten duen",
 "verTabla": "Egiaztatu egia-taulan",
 "ejTit": "Araua ala tranpa?",
 "ejAyuda": "Irakurri argudio bakoitza eta aukeratu zer forma duen. Ez dago notarik: garrantzitsuena zergatia ulertzea da.",
 "acierto": "Ondo! {r} da.",
 "fallo": "Ez: {r} da.",
 "formaArg": "Bere forma: {f}",
 "tabCuantificadores": "Kuantifikatzaileak",
 "introCuantificadores": "Egia-taulen logikak ezin du aztertu «Gizaki guztiak hilkorrak dira; Sokrates gizakia da; beraz, Sokrates hilkorra da», ez baitu ikusten esaldi bakoitzaren barruan zer dagoen. Fregek (1879) predikatuak gehitu zituen (Hx = «x gizakia da») eta kuantifikatzaileak: ∀x, «x ororentzat», eta ∃x, «badago gutxienez x bat». Haiekin idazten dira Aristotelesen lau proposizioak eta beste gauza asko.",
 "cqCuatro": "Aristotelesen lau proposizioak",
 "cqProp": "Proposizioa",
 "cqFormula": "Formula",
 "cqLee": "Honela irakurtzen da",
 "cqTrampa": "Kasu tranpa: «S oro P da» ez da ∀x (Sx ∧ Px), horrek esango bailuke dena dela S eta P aldi berean; eta «S batzuk P dira» ez da ∃x (Sx → Px), hori egiazkoa baita S ez den zerbait dagoen bezain laster.",
 "cqNeg": "Kuantifikatzaile bat ukatzea: ¬∀x Px eta ∃x ¬Px baliokideak dira («ez guztiak» = «batzuk ez»), eta ¬∃x Px eta ∀x ¬Px ere bai («bat ere ez» = «guztiak ez»). Horregatik dira kontraesankorrak A eta O, baita E eta I ere.",
 "cqMundo": "Mundu txiki bat",
 "cqMundoAyuda": "Bost banako (a, b, c, d, e). Markatu zein diren S eta zein P, eta begiratu zer proposizio ateratzen diren egiazko.",
 "cqInd": "Banakoa",
 "cqVacio": "Probatu S hutsik uzten: orduan «S oro P da» eta «Ezein S ez da P» egiazkoak dira aldi berean, eta «S batzuk P dira» faltsua. Logika modernoan, proposizio unibertsalak ez du onartzen S-ak badirenik: 4. gaiko existentzia-konpromisoa da.",
 "cqOrdenTit": "Kuantifikatzaileen falazia bat: ordena aldatzea",
 "cqOrden": "«Mundu guztiak du ama bat» ∀x ∃y Myx da: x pertsona bakoitzarentzat badago norbait, y, haren ama dena. «Badago guztien ama bat» ∃y ∀x Myx da: badago y bat, x guztien ama dena. ∀ eta ∃ kuantifikatzaileen ordena aldatzeak esaten dena aldatzen du: lehenengotik ez da bigarrena ondorioztatzen.",
 "cqOrdenMadre": "bere ama",
 "cqOrdenContra": "Kontraadibidea: mundu honetan bakoitzak bere ama du, beraz ∀x ∃y Myx egiazkoa da; baina bat ere ez da hiruren ama, beraz ∃y ∀x Myx faltsua da. Premisa egiazkoa eta ondorio faltsua: inferentzia ez da baliozkoa. (Alderantziz bai balio du: guztien ama bat badago, bakoitzak ama bat du).",
 "cqOrdenFilo": "Filosofian: eztabaidatzen da ea Aristotelesek jauzi hori egiten duen «Nikomakorentzako Etika»ren hasieran (I 2), ekintza orok helburu bat bilatzeak ez baitu esan nahi denek bilatzen duten helburu bakar bat dagoenik. Eta argudio kosmologikoen kritikari batzuek jauzi bera ikusten dute «gauza orok du kausa bat» esatetik «badago guztiaren kausa bat» esatera igarotzean.",
 "cqTesti": "Erakusten du: {x}",
 "cqContra": "Huts egiten du hemen: {x}",
 "cqNadie": "ez dago bat ere",
 "cqSinS": "egiazkoa, ez dagoelako S-rik",
 "cqPresets": "Adibide-munduak:",
 "cqP1": "S guztiak P dira",
 "cqP2": "Ezein S ez da P",
 "cqP3": "Batzuk bai eta beste batzuk ez",
 "cqP4": "Ez dago S-rik",
 "cqEjTit": "Zein formula da?",
 "cqEjAyuda": "Aukeratu esaldiak dioena bera dioen formula. Letra larria predikatua da, eta letra xehea, banako zehatz bat.",
 "cqBien": "Zuzena!",
 "cqMal": "Ez.",
 "cqEjemplo": "Adibide ebatzia: Sokratesen silogismoa",
 "cqEjemploTxt": "Gizaki guztiak hilkorrak dira: ∀x (Hx → Mx). Sokrates gizakia da: Hs. Beraz, Sokrates hilkorra da: Ms. Lehen premisatik Hs → Ms ondorioztatzen da (x ororentzat balio duenak Sokratesentzat ere balio du: «instantziazio unibertsala»), eta Hs → Ms eta Hs premisetatik Ms ondorioztatzen da, modus ponens bidez.",
 "convTit": "Konbertsioa: buelta eman dakioke proposizio bati?",
 "convIntro": "Konbertitzea subjektua eta predikatua trukatzea da. Batzuetan egia gordetzen da eta beste batzuetan ez: ezin denean buelta ematea zilegi ez den konbertsioaren falazia da.",
 "convProp": "Proposizioa",
 "convConv": "Konbertitua",
 "convVale": "Balio du?",
 "convEj": "Adibidea",
 "convSi": "Bai",
 "convNo": "Ez: zilegi ez den konbertsioa",
 "convAcc": "«P batzuk S dira» bakarrik (S-rik badago)",
 "genTit": "Batzuetatik guztietara: orokorpen presatua",
 "gen": "∃x (Sx ∧ Px) formulatik, «S batzuk P dira», ez dator ∀x (Sx → Px), «S oro P da». Logikak kontraadibide batekin erakusten du: «Batzuk bai eta beste batzuk ez» munduan, I egiazkoa da eta A faltsua. Zuhurtziaz orokortzeko zenbat kasu behar diren jada ez da logika deduktiboaren kontua, indukzioarena baizik: kasu kopuru batek ere ez du bermatzen.",
 "genVer": "Mundu txikian ikusi",
 "lpTit": "Logikak zer errefusa dezakeen eta zer ez",
 "lpIntro": "Goiko falazia formalak formaren bidez errefusatzen dira: kontraadibide bat nahikoa da. Beste falazia batzuek ez dute formazko akatsik, baina formalizatzeak haiek ikusten laguntzen du; eta beste batzuk ezin dira logikaz errefusatu, arazoa edukian baitago.",
 "lpAyuda": "Logikak laguntzen du, baina ez da nahikoa",
 "lpNo": "Logikak ez ditu errefusatzen",
 "lpQueVe": "Logikak zer erakusten duen",
 "lpNoIntro": "Haien forma baliozkoa izan daiteke, edo ez da argudio bat ere: akatsa premisak egiazkoak diren ala gaiari dagozkion da. Haiek antzemateko edukiaz galdetu behar da.",
 "lpDuelo": "Landu itzazu Arrazoien dueloan →",
 "tabFalacias": "Falaziak",
 "introFalacias": "Falazia zuzena dirudien baina zuzena ez den arrazoibidea da. Hemen daude bilduta Logikaren txokoko guztiak: lehenik, formalak, kontraadibide batekin errefusatzen direnak; gero, logikak ikusten laguntzen dituenak; eta azkenik, edukiari begiratuta bakarrik aurkitzen direnak.",
 "falSilTit": "Silogismoaren falaziak",
 "falSilIntro": "Aristotelesen arauren bat betetzen ez duen silogismoa ez da baliozkoa. Falazia bakoitzak adibide bat du, Silogismoak fitxan ireki dezakezuna haren Venn diagrama ikusteko.",
 "falR1": "Erdiko termino banatu gabea",
 "falR2P": "Ilizitu nagusia",
 "falR2S": "Ilizitu txikia",
 "falR3": "Bi premisa ezezko",
 "falR4a": "Premisa ezezkoa eta ondorio baiezkoa",
 "falR5": "Bi premisa partikular",
 "falProbar": "Silogismoak fitxan ikusi →",
 "falVer": "Falazia guztiak, «Falaziak» fitxan bilduta →",
 "tabLeyes": "Lege logikoak",
 "introLeyes": "Lege logiko bat beti egiazkoa den formula da, bere letrek edozein balio dutela ere: tautologia bat. Hemen dituzu enuntziatuen logikako 70 lege, familiaka multzokatuta, eta haietan oinarritzen diren 21 dedukzio-arau eratorri. Sakatu «Taula» edozeinetan, zuk zeuk egiaztatzeko.",
 "leyesTit": "Enuntziatuen logikako oinarrizko legeak",
 "leyesNota": "Kortxeteak [ ] parentesiak dira: zer zeren barruan doan ikusten laguntzen dute. ↔ konektibo nagusitzat duten legeek diote bi formula baliokideak direla eta bata bestearen ordez jar daitekeela; → dutenek, berriz, batetik bestera noranzko bakarrean igarotzen uzten dute.",
 "leyTabla": "Taula",
 "derTit": "Dedukzio-arau eratorriak",
 "derNota": "Dedukzio batean, arau bakoitzak marraren gainean dauden formuletatik (premisetatik) azpian dagoenera (ondoriora) igarotzen uzten du. Marra bikoitzak esan nahi du araua bi noranzkoetan baliozkoa dela. Lasterbideak dira: bakoitza oinarrizko arauekin frogatzen da, eta goiko legeren bati dagokio.",
 "derInter": "A eta B baliokideak badira, A duen edozein C formulatan B jar daiteke haren ordez: C<sub>A</sub> A duen formula da, eta C<sub>B</sub>, formula bera B-rekin. Horregatik, ↔ duen edozein lege erabil daiteke formula baten zati bat berridazteko.",
 "leyesIr": "70 lege logikoak eta 21 arau eratorriak, «Lege logikoak» atalean →"
};

/* logika moderna: edukiak */
const LOGM_FZ = [
 {
  "f": "Euria ari badu, lurra bustitzen da.",
  "d": [
   [
    "p",
    "euria ari du"
   ],
   [
    "q",
    "lurra bustitzen da"
   ]
  ],
  "s": "p → q",
  "pista": "«p bada, q»: «bada»-ren aurretik doana aurrekaria da."
 },
 {
  "f": "Euria ari du eta ez daramat aterkirik.",
  "d": [
   [
    "p",
    "euria ari du"
   ],
   [
    "q",
    "aterkia daramat"
   ]
  ],
  "s": "p ∧ ¬q",
  "pista": "Letra esaldi baiezkoa da; «ez» ¬ sinboloaz idazten da."
 },
 {
  "f": "Euria ari badu eta aterkirik ez badaramat, busti egiten naiz.",
  "d": [
   [
    "p",
    "euria ari du"
   ],
   [
    "q",
    "aterkia daramat"
   ],
   [
    "r",
    "busti egiten naiz"
   ]
  ],
  "s": "(p ∧ ¬q) → r",
  "pista": "Lehenik aurrekari osoa, parentesi artean; gero gezia."
 },
 {
  "f": "Ez dut ikasten, ezta lan egiten ere.",
  "d": [
   [
    "p",
    "ikasten dut"
   ],
   [
    "q",
    "lan egiten dut"
   ]
  ],
  "s": "¬p ∧ ¬q",
  "pista": "«Ez… ezta… ere»-k bi gauzak ukatzen ditu aldi berean."
 },
 {
  "f": "Euririk egiten ez badu bakarrik joango naiz txangora.",
  "d": [
   [
    "p",
    "txangora joaten naiz"
   ],
   [
    "q",
    "euria ari du"
   ]
  ],
  "s": "p → ¬q",
  "pista": "Kasu tranpa: «…bada bakarrik» egiturak baldintza beharrezkoa sartzen du, eta hori geziaren atzean doa."
 },
 {
  "f": "Botoa emateko beharrezkoa da adin nagusikoa izatea.",
  "d": [
   [
    "p",
    "botoa ematen duzu"
   ],
   [
    "q",
    "adin nagusikoa zara"
   ]
  ],
  "s": "p → q",
  "pista": "Botoa ematen baduzu, adin nagusikoa zarelako da; baina adin nagusikoa izatea ez da nahikoa botoa emateko."
 },
 {
  "f": "Nahikoa da botoia sakatzea argia piz dadin.",
  "d": [
   [
    "p",
    "botoia sakatzen duzu"
   ],
   [
    "q",
    "argia pizten da"
   ]
  ],
  "s": "p → q",
  "pista": "«Nahikoa da p» esateak p baldintza nahikoa dela adierazten du: geziaren aurretik doa."
 },
 {
  "f": "Irtengo gara, euririk egiten ez badu behintzat.",
  "d": [
   [
    "p",
    "irteten gara"
   ],
   [
    "q",
    "euria ari du"
   ]
  ],
  "s": "¬q → p",
  "pista": "Kasu tranpa: «p, q ez bada behintzat» esateak «q ez bada, p» esan nahi du."
 },
 {
  "f": "Deituko dizut baldin eta soilik baldin berandu iristen bazara.",
  "d": [
   [
    "p",
    "deitzen dizut"
   ],
   [
    "q",
    "berandu iristen zara"
   ]
  ],
  "s": "p ↔ q",
  "pista": "«Baldin eta soilik baldin» egiturak bi baldintzazko lotzen ditu: p → q eta q → p."
 },
 {
  "f": "Edo ikasten duzu edo lan egiten duzu, baina ez biak.",
  "d": [
   [
    "p",
    "ikasten duzu"
   ],
   [
    "q",
    "lan egiten duzu"
   ]
  ],
  "s": "(p ∨ q) ∧ ¬(p ∧ q)",
  "pista": "Kasu tranpa: logikako «edo» inklusiboa da; hemen gehitu egin behar da biak ez direla gertatzen."
 },
 {
  "f": "Ez da egia, euria ari badu, partida bertan behera geratzen denik.",
  "d": [
   [
    "p",
    "euria ari du"
   ],
   [
    "q",
    "partida bertan behera geratzen da"
   ]
  ],
  "s": "¬(p → q)",
  "pista": "«Ez da egia» egiturak baldintzazko osoa ukatzen du: parentesiaren aurretik doa."
 },
 {
  "f": "Epikuro: «Gu gaudenean, heriotza ez dago; eta heriotza dagoenean, gu jada ez gaude».",
  "d": [
   [
    "p",
    "gu gaude"
   ],
   [
    "q",
    "heriotza dago"
   ]
  ],
  "s": "(p → ¬q) ∧ (q → ¬p)",
  "pista": "Bi baldintzazko dira, «eta»-k lotuak. (Menekeori gutuna, 125.)"
 },
 {
  "f": "Monika, hitzez hitz: «Gauza onak nahi baditu eta baditu, zoriontsu da; baina gauza txarrak nahi baditu, baditu arren, zorigaiztokoa da».",
  "d": [
   [
    "p",
    "zoriontsu da"
   ],
   [
    "q",
    "gauza onak nahi ditu"
   ],
   [
    "r",
    "gauza onak ditu"
   ],
   [
    "s",
    "gauza txarrak nahi ditu"
   ],
   [
    "t",
    "gauza txarrak ditu"
   ]
  ],
  "s": "((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)",
  "pista": "«Baina» eta «arren» ∧ gisa idazten dira: «baditu arren»-ek ez du ukatzen dituela, baieztatzen du. Konparatu Monikaren fitxako hiru letrako irakurketarekin (Argudio klasikoak): zer gertatzen da ongia eta gaizkia nahi dituenarekin, dena badu eta zoriontsu bada? Formula batek onartzen du eta besteak ez."
 }
];

const LOGM_REGLAS = [
 {
  "k": "mp",
  "n": "Modus ponens",
  "p": "p → q; p",
  "c": "q",
  "ej": "Euria ari badu, lurra bustitzen da. Euria ari du. Beraz, lurra bustitzen da."
 },
 {
  "k": "mt",
  "n": "Modus tollens",
  "p": "p → q; ¬q",
  "c": "¬p",
  "ej": "Euria ari badu, lurra bustitzen da. Lurra ez dago bustita. Beraz, ez du euririk egiten."
 },
 {
  "k": "sh",
  "n": "Silogismo hipotetikoa",
  "p": "p → q; q → r",
  "c": "p → r",
  "ej": "Ikasten badut, gainditu egiten dut; gainditzen badut, bidaiara noa. Beraz, ikasten badut, bidaiara noa."
 },
 {
  "k": "sd",
  "n": "Silogismo disjuntiboa",
  "p": "p ∨ q; ¬p",
  "c": "q",
  "ej": "Edo etxean dago edo eskolan dago. Ez dago etxean. Beraz, eskolan dago."
 },
 {
  "k": "dc",
  "n": "Dilema eraikitzailea",
  "p": "p → r; q → r; p ∨ q",
  "c": "r",
  "ej": "Trenez joaten bazara, berandu iritsiko zara; autobusez joaten bazara, baita ere. Trenez edo autobusez joango zara. Beraz, berandu iritsiko zara."
 }
];

const LOGM_FALACIAS = [
 {
  "k": "ac",
  "n": "Atzekaria baieztatzea",
  "p": "p → q; q",
  "c": "p",
  "ej": "Euria ari badu, lurra bustitzen da. Lurra bustita dago. Beraz, euria egin du.",
  "por": "Lurra beste arrazoi batengatik egon daiteke bustita: norbaitek ureztatu du. Baldintza nahikoa ez da posible den bakarra."
 },
 {
  "k": "na",
  "n": "Aurrekaria ukatzea",
  "p": "p → q; ¬p",
  "c": "¬q",
  "ej": "Ikasten baduzu, gainditu egiten duzu. Ez duzu ikasi. Beraz, ez duzu gaindituko.",
  "por": "Arauak ez du esaten zer gertatzen den ikasten ez baduzu: agian beste arrazoi batengatik gaindituko duzu."
 },
 {
  "k": "ad",
  "n": "Disjuntu bat baieztatzea",
  "p": "p ∨ q; p",
  "c": "¬q",
  "ej": "Edo zinemara goaz edo afaltzera goaz. Zinemara goaz. Beraz, ez goaz afaltzera.",
  "por": "Logikako «edo» inklusiboa da: bi gauzak egin daitezke. Esaldiak biak aldi berean baztertuko balitu bakarrik izango litzateke baliozkoa."
 },
 {
  "k": "nc",
  "n": "Konjuntu bat ukatzea",
  "p": "¬(p ∧ q)",
  "c": "¬p",
  "ej": "Ez da egia etxean eta eskolan aldi berean dagoela. Beraz, ez dago etxean.",
  "por": "Nahikoa da bietako bat ez betetzea: etxean egon daiteke eta ez eskolan. ¬(p ∧ q) formulatik ¬p ∨ ¬q baino ez da ondorioztatzen (De Morgan)."
 },
 {
  "k": "cc",
  "n": "Baldintzazkoa alderantzikatzea",
  "p": "p → q",
  "c": "q → p",
  "ej": "Txakurra bada, ugaztuna da. Beraz, ugaztuna bada, txakurra da.",
  "por": "p nahikoa izateak q-rako ez du esan nahi q nahikoa denik p-rako: katua ere ugaztuna da. «Baldin» eta «soilik baldin» nahastearen akats bera da."
 }
];

const LOGM_EJ = [
 {
  "t": "Sokrates gizakia bada, hilkorra da. Sokrates gizakia da. Beraz, Sokrates hilkorra da.",
  "r": "mp"
 },
 {
  "t": "Sua badago, oxigenoa dago. Ilargian ez dago oxigenorik. Beraz, Ilargian ez dago surik.",
  "r": "mt"
 },
 {
  "t": "Gobernu batek herritarren eskubideak urratzen baditu, herriak eskubidea du erresistentzia egiteko. Herriak erresistentzia egiten du. Beraz, gobernuak haien eskubideak urratu ditu.",
  "r": "ac"
 },
 {
  "t": "Edo errudun nagusi-zerbitzaria da edo sukaldaria. Nagusi-zerbitzariak alibia du eta ez da errudun. Beraz, sukaldaria da.",
  "r": "sd"
 },
 {
  "t": "Ahalegintzen bazara, hobetu egiten duzu; hobetzen baduzu, gainditu egiten duzu. Beraz, ahalegintzen bazara, gainditu egiten duzu.",
  "r": "sh"
 },
 {
  "t": "Euria ari badu, partida bertan behera geratzen da. Ez du euririk egiten. Beraz, partida ez da bertan behera geratzen.",
  "r": "na"
 },
 {
  "t": "Zalantza egiten badut, pentsatzen dut. Zalantza egiten dut. Beraz, pentsatzen dut.",
  "r": "mp"
 },
 {
  "t": "Anak Filosofia edo Historia ikasten du. Filosofia ikasten du. Beraz, ez du Historia ikasten.",
  "r": "ad"
 },
 {
  "t": "Arima materiala balitz, gorputza bezala deskonposatuko litzateke. Arima ez da deskonposatzen. Beraz, arima ez da materiala.",
  "r": "mt"
 },
 {
  "t": "Teoria ona bada, bere iragarpenak betetzen dira. Bere iragarpenak betetzen dira. Beraz, teoria ona da.",
  "r": "ac"
 },
 {
  "t": "Euria ari badu, hodeiak daude. Beraz, hodeiak badaude, euria ari du.",
  "r": "cc"
 },
 {
  "t": "Ez da egia akusatua erruduna dela eta bakarrik jardun duela. Beraz, akusatua ez da erruduna.",
  "r": "nc"
 }
];

const LOGM_CQ4 = [
 [
  "A",
  "S oro P da",
  "∀x (Sx → Px)",
  "x ororentzat, x S bada, orduan x P da"
 ],
 [
  "E",
  "Ezein S ez da P",
  "∀x (Sx → ¬Px)",
  "x ororentzat, x S bada, orduan x ez da P (edo bestela: ¬∃x (Sx ∧ Px))"
 ],
 [
  "I",
  "S batzuk P dira",
  "∃x (Sx ∧ Px)",
  "badago gutxienez x bat, S eta P dena"
 ],
 [
  "O",
  "S batzuk ez dira P",
  "∃x (Sx ∧ ¬Px)",
  "badago gutxienez x bat, S dena eta P ez dena"
 ]
];

const LOGM_CQ_PRE = {
 "p1": [
  [
   1,
   1
  ],
  [
   1,
   1
  ],
  [
   0,
   1
  ],
  [
   0,
   0
  ],
  [
   1,
   1
  ]
 ],
 "p2": [
  [
   1,
   0
  ],
  [
   1,
   0
  ],
  [
   0,
   1
  ],
  [
   0,
   1
  ],
  [
   0,
   0
  ]
 ],
 "p3": [
  [
   1,
   1
  ],
  [
   1,
   0
  ],
  [
   0,
   1
  ],
  [
   1,
   1
  ],
  [
   0,
   0
  ]
 ],
 "p4": [
  [
   0,
   1
  ],
  [
   0,
   0
  ],
  [
   0,
   1
  ],
  [
   0,
   0
  ],
  [
   0,
   1
  ]
 ]
};

const LOGM_CQ_EJ = [
 {
  "f": "Filosofo guztiak jakin-nahiak dira.",
  "d": "F = filosofoa, C = jakin-nahia",
  "o": [
   "∀x (Fx → Cx)",
   "∀x (Fx ∧ Cx)",
   "∃x (Fx ∧ Cx)",
   "∀x (Cx → Fx)"
  ],
  "r": 0,
  "por": "Baiezko unibertsala (A). ∧ ikurrarekin esango luke mundu guztia dela filosofoa eta jakin-nahia; gezia alderantziz jarrita, jakin-nahi oro filosofoa dela."
 },
 {
  "f": "Sofistaren batek kobratu egiten zuen irakasteagatik.",
  "d": "S = sofista, C = irakasteagatik kobratzen zuen",
  "o": [
   "∃x (Sx → Cx)",
   "∃x (Sx ∧ Cx)",
   "∀x (Sx → Cx)"
  ],
  "r": 1,
  "por": "Baiezko partikularra (I): badago norbait sofista dena eta kobratzen zuena. Geziarekin nahikoa litzateke sofista ez den zerbait egotea."
 },
 {
  "f": "Ezein jainko ez da hilkorra.",
  "d": "D = jainkoa, M = hilkorra",
  "o": [
   "¬∀x (Dx → Mx)",
   "∀x (¬Dx → Mx)",
   "∀x (Dx → ¬Mx)"
  ],
  "r": 2,
  "por": "Ezezko unibertsala (E). ¬∃x (Dx ∧ Mx) ere balio du: «ez dago jainko eta hilkor den ezer»."
 },
 {
  "f": "Ez ziren greziar guztiak filosofoak.",
  "d": "G = greziarra, F = filosofoa",
  "o": [
   "∀x (Gx → ¬Fx)",
   "¬∀x (Gx → Fx)",
   "¬∃x (Gx ∧ Fx)"
  ],
  "r": 1,
  "por": "Kasu tranpa: «ez guztiak» ez da «bat ere ez». ∃x (Gx ∧ ¬Fx) formularen baliokidea da: greziarren bat ez zen filosofoa (O)."
 },
 {
  "f": "Hiritarrek bakarrik ematen zuten botoa batzarrean.",
  "d": "V = batzarrean botoa ematen zuen, C = hiritarra",
  "o": [
   "∀x (Cx → Vx)",
   "∀x (Vx → Cx)",
   "∃x (Vx ∧ Cx)"
  ],
  "r": 1,
  "por": "Kasu tranpa: «C-ak bakarrik» baldintza beharrezkoa geziaren atzean jartzen du: botoa ematen zuen oro hiritarra zen (ez hiritar orok ematen zuen botoa)."
 },
 {
  "f": "Bada beste ezerk eragin ez duen zerbait.",
  "d": "C = beste zerbaitek eragina",
  "o": [
   "¬∃x Cx",
   "∀x ¬Cx",
   "∃x ¬Cx"
  ],
  "r": 2,
  "por": "Badago gutxienez eragin gabeko x bat: Aristotelesen lehen motorraren edo Tomas Akinokoaren lehen kausaren ideia da."
 },
 {
  "f": "Sokrates hilkorra da.",
  "d": "M = hilkorra, s = Sokrates",
  "o": [
   "∃x Mx",
   "Ms",
   "∀x Mx"
  ],
  "r": 1,
  "por": "Banako zehatz bat letra xehe batez idazten da (konstante bat): ez da kuantifikatzailerik behar."
 },
 {
  "f": "Pentsatzen duen oro existitzen da.",
  "d": "P = pentsatzen du, E = existitzen da",
  "o": [
   "∀x (Px → Ex)",
   "∀x (Ex → Px)",
   "∃x (Px ∧ Ex)"
  ],
  "r": 0,
  "por": "Baiezko unibertsala (A). «Ni existitzen naiz» ateratzeko, «nik pentsatzen dut» (Pi) premisa eta instantziazio unibertsala ere beharko lirateke, Sokratesekin bezala."
 },
 {
  "f": "Mundu guztiak du ama bat.",
  "d": "M = «y x-ren ama da»",
  "o": [
   "∃y ∀x Myx",
   "∀x ∃y Myx",
   "∀x ∀y Myx"
  ],
  "r": 1,
  "por": "Pertsona bakoitzarentzat badago amaren bat (kasu bakoitzean desberdina izan daiteke). ∃y ∀x Myx formulak esango luke badagoela guztien ama bakar bat: kuantifikatzaileen ordena aldatzea da."
 },
 {
  "f": "Badago norbait, denek miresten dutena.",
  "d": "A = «x-k y miresten du»",
  "o": [
   "∀x ∃y Axy",
   "∃y ∀x Axy",
   "∃x ∃y Axy"
  ],
  "r": 1,
  "por": "Badago y bat, non denek hura miresten duten. ∀x ∃y Axy formulak esango luke bakarrik bakoitzak norbait miresten duela, agian pertsona desberdinak."
 }
];

const LOGM_CONV = [
 [
  "A",
  "S oro P da",
  "P oro S da",
  "no",
  "Txakur oro ugaztuna da; baina ugaztun oro ez da txakurra."
 ],
 [
  "E",
  "Ezein S ez da P",
  "Ezein P ez da S",
  "si",
  "Ezein arrain ez da ugaztuna; beraz, ezein ugaztun ez da arraina."
 ],
 [
  "I",
  "S batzuk P dira",
  "P batzuk S dira",
  "si",
  "Filosofo batzuk greziarrak dira; beraz, greziar batzuk filosofoak dira."
 ],
 [
  "O",
  "S batzuk ez dira P",
  "P batzuk ez dira S",
  "no",
  "Animalia batzuk ez dira txakurrak; baina ez dator txakur batzuk animaliak ez direnik."
 ]
];

const LOGM_AYUDA = [
 {
  "n": "Ekibokoa",
  "ej": "Gauza baten helmuga bere perfekzioa da. Heriotza bizitzaren helmuga da. Beraz, heriotza bizitzaren perfekzioa da.",
  "ve": "Formalizatzean, «helmuga» «helburua» den aldetik eta «helmuga» «amaiera» den aldetik letra desberdinak hartzen dituzte: laugarren termino bat agertzen da eta silogismoa baliozkoa izateari uzten dio."
 },
 {
  "n": "Printzipio-eskea",
  "ej": "Liburu honek egia dio, liburuak berak hala dioelako.",
  "ve": "Argudioa baliozkoa da (p ⊢ p), baina ondorioa premisan zegoen jada: ez du frogatzen aurretik onartuta ez zegoen ezer."
 },
 {
  "n": "Dilema faltsua",
  "ej": "Edo nirekin zaude edo nire aurka. Ez zaude nirekin. Beraz, nire aurka zaude.",
  "ve": "Forma silogismo disjuntibo bat da, eta baliozkoa da. Huts egiten duena p ∨ q premisa da: aukera gehiago daude."
 },
 {
  "n": "Aldapa irristakorra",
  "ej": "Atsedenaldian mugikorra erabiltzen uzten badugu, klasean erabiliko dute; klasean erabiltzen badute, inork ez du arretarik jarriko; inork arretarik jartzen ez badu, denek huts egingo dute azterketetan.",
  "ve": "p → q, q → r, r → s katea baliozkoa da (silogismo hipotetikoa), baina baldintzazko bakoitza, gehienez ere, probablea da: probabilitatea galduz doa urrats bakoitzean."
 },
 {
  "n": "Entimema",
  "ej": "Garestia da; beraz, ona izango da.",
  "ve": "Baliozkoa izateko premisa bat falta da: «garesti den oro ona da». Formalizatzeak agerian jartzen du, eta orduan faltsua dela ikusten da."
 }
];

const LOGM_NOFORMAL = [
 [
  "Pertsonaren aurkako erasoa (ad hominem)",
  "Hitz egiten duenari erasotzen dio, ez esaten duenari."
 ],
 [
  "Autoritate faltsua",
  "Ondorioa gai horretan aditua ez den norbaitengan oinarritzen du."
 ],
 [
  "Gehiengoari deia (ad populum)",
  "Jende askok sinesteak ez du egiazko bihurtzen."
 ],
 [
  "Errukiari edo beldurrari deia",
  "Emozio bat bilatzen du arrazoi bat eman beharrean."
 ],
 [
  "Lastozko gizona",
  "Besteak esandakoaren bertsio desitxuratu bat errefusatzen du."
 ],
 [
  "Kausa faltsua",
  "Zerbait ondoren gertatzeak ez du frogatzen hark eragiten duenik."
 ]
];

const LOGM_LEYES = [
 [
  "Printzipioak",
  [
   [
    1,
    "p ↔ p",
    "Identitate-printzipioa"
   ],
   [
    2,
    "¬(p ∧ ¬p)",
    "Ez-kontraesanaren printzipioa"
   ],
   [
    3,
    "p ∨ ¬p",
    "Hirugarren baztertuaren printzipioa"
   ],
   [
    4,
    "¬¬p ↔ p",
    "Ezeztapen bikoitzaren printzipioa"
   ],
   [
    5,
    "¬¬¬p ↔ ¬p",
    "Ezeztapen hirukoitzaren printzipioa"
   ]
  ]
 ],
 [
  "Idenpotentzia, trukakortasuna eta elkarkortasuna",
  [
   [
    6,
    "(p ∧ p) ↔ p",
    "Konjuntzioaren idenpotentzia-legea"
   ],
   [
    7,
    "(p ∧ q) ↔ (q ∧ p)",
    "Konjuntzioaren trukatze-legea"
   ],
   [
    8,
    "[(p ∧ q) ∧ r] ↔ [p ∧ (q ∧ r)]",
    "Konjuntzioaren elkarkortasun-legea"
   ],
   [
    9,
    "(p ∨ p) ↔ p",
    "Disjuntzioaren idenpotentzia-legea"
   ],
   [
    10,
    "(p ∨ q) ↔ (q ∨ p)",
    "Disjuntzioaren trukatze-legea"
   ],
   [
    11,
    "[(p ∨ q) ∨ r] ↔ [p ∨ (q ∨ r)]",
    "Disjuntzioaren elkarkortasun-legea"
   ]
  ]
 ],
 [
  "Banatze-legeak",
  [
   [
    12,
    "[p ∧ (q ∨ r)] ↔ [(p ∧ q) ∨ (p ∧ r)]",
    "Konjuntzioaren banatze-legea disjuntzioarekiko"
   ],
   [
    13,
    "[(p ∨ q) ∧ (r ∨ s)] ↔ [(p ∧ r) ∨ (p ∧ s) ∨ (q ∧ r) ∨ (q ∧ s)]",
    "Konjuntzioaren banatze-legea disjuntzioarekiko (forma zabaldua)"
   ],
   [
    14,
    "[p ∨ (q ∧ r)] ↔ [(p ∨ q) ∧ (p ∨ r)]",
    "Disjuntzioaren banatze-legea konjuntzioarekiko"
   ],
   [
    15,
    "[(p ∧ q) ∨ (r ∧ s)] ↔ [(p ∨ r) ∧ (p ∨ s) ∧ (q ∨ r) ∧ (q ∨ s)]",
    "Disjuntzioaren banatze-legea konjuntzioarekiko (forma zabaldua)"
   ]
  ]
 ],
 [
  "Sinplifikazioa eta gehitzea",
  [
   [
    16,
    "[p ∧ (p ∧ q)] ↔ (p ∧ q)",
    "Konjuntzioaren 1. sinplifikazio-legea"
   ],
   [
    17,
    "[p ∧ (p ∨ q)] ↔ p",
    "Konjuntzioaren 2. sinplifikazio-legea"
   ],
   [
    18,
    "[p ∧ (q ∨ ¬q)] ↔ p",
    "Konjuntzioaren 3. sinplifikazio-legea"
   ],
   [
    19,
    "(p ∧ q) → p",
    "Konjuntzioaren 4. sinplifikazio-legea (a fortiori)"
   ],
   [
    20,
    "(p ∧ q) → q",
    "Konjuntzioaren 5. sinplifikazio-legea (a fortiori)"
   ],
   [
    21,
    "[p ∨ (p ∨ q)] ↔ (p ∨ q)",
    "Disjuntzioaren 1. sinplifikazio-legea"
   ],
   [
    22,
    "[p ∨ (p ∧ q)] ↔ p",
    "Disjuntzioaren 2. sinplifikazio-legea"
   ],
   [
    23,
    "[p ∨ (q ∧ ¬q)] ↔ p",
    "Disjuntzioaren 3. sinplifikazio-legea"
   ],
   [
    24,
    "p → (p ∨ q)",
    "Gehitze-legea"
   ],
   [
    25,
    "q → (p ∨ q)",
    "Gehitze-legea"
   ]
  ]
 ],
 [
  "De Morganen legeak",
  [
   [
    26,
    "¬(p ∨ q) ↔ (¬p ∧ ¬q)",
    "De Morganen 1. legea"
   ],
   [
    27,
    "¬(p ∧ q) ↔ (¬p ∨ ¬q)",
    "De Morganen 2. legea"
   ],
   [
    28,
    "(p ∨ q) ↔ ¬(¬p ∧ ¬q)",
    "De Morganen 3. legea"
   ],
   [
    29,
    "(p ∧ q) ↔ ¬(¬p ∨ ¬q)",
    "De Morganen 4. legea"
   ]
  ]
 ],
 [
  "Konektiboen elkar-definizioa",
  [
   [
    30,
    "(p ∧ q) ↔ ¬(p → ¬q)",
    "Elkar-definizioaren legea"
   ],
   [
    31,
    "(p ∨ q) ↔ (¬p → q)",
    "Elkar-definizioaren legea"
   ],
   [
    32,
    "(p → q) ↔ ¬(p ∧ ¬q)",
    "Elkar-definizioaren legea"
   ],
   [
    33,
    "(p → q) ↔ (¬p ∨ q)",
    "Elkar-definizioaren legea"
   ],
   [
    34,
    "(p ↔ q) ↔ [(p → q) ∧ (q → p)]",
    "Elkar-definizioaren legea"
   ]
  ]
 ],
 [
  "Esportazioa, premisen trukaketa eta silogismoa",
  [
   [
    35,
    "[(p ∧ q) → r] ↔ [p → (q → r)]",
    "Esportazio- eta inportazio-legea"
   ],
   [
    36,
    "[p → (q → r)] ↔ [q → (p → r)]",
    "Premisen trukaketaren legea"
   ],
   [
    37,
    "p → [q → (p ∧ q)]",
    "35. eta 1. legeetatik ateratzen da"
   ],
   [
    38,
    "[(p → q) ∧ (q → r)] → (p → r)",
    "Silogismoaren legea"
   ],
   [
    39,
    "(p → q) → [(q → r) → (p → r)]",
    "Silogismoaren legea (38. eta 35. legeetatik)"
   ],
   [
    40,
    "(q → r) → [(p → q) → (p → r)]",
    "Silogismoaren legea (39. eta 36. legeetatik)"
   ],
   [
    41,
    "(p → q) → [(r ∨ p) → (r ∨ q)]",
    "Silogismoaren legea"
   ]
  ]
 ],
 [
  "Modus ponens, modus tollens, silogismo disjuntiboa eta dilemak",
  [
   [
    42,
    "[(p → q) ∧ p] → q",
    "Modus ponendo ponens (1)"
   ],
   [
    43,
    "p → [(p → q) → q]",
    "Modus ponendo ponens (2)"
   ],
   [
    44,
    "[(p → q) ∧ ¬q] → ¬p",
    "Modus tollendo tollens (1)"
   ],
   [
    45,
    "¬q → [(p → q) → ¬p]",
    "Modus tollendo tollens (2)"
   ],
   [
    46,
    "[(p ∨ q) ∧ ¬p] → q",
    "Silogismo disjuntiboa"
   ],
   [
    47,
    "[(p ∨ q) ∧ ¬q] → p",
    "Silogismo disjuntiboa"
   ],
   [
    48,
    "[(p ∨ q) ∧ (p → r) ∧ (q → r)] → r",
    "Dilema eraikitzaile bakunaren legea"
   ],
   [
    49,
    "[(p ∨ q) ∧ (p → r) ∧ (q → s)] → (r ∨ s)",
    "Dilema eraikitzaile konplexuaren legea"
   ],
   [
    50,
    "[(¬p ∨ ¬q) ∧ (r → p) ∧ (r → q)] → ¬r",
    "Dilema suntsitzaile bakunaren legea"
   ],
   [
    51,
    "[(¬p ∨ ¬q) ∧ (r → p) ∧ (s → q)] → (¬r ∨ ¬s)",
    "Dilema suntsitzaile konplexuaren legea"
   ]
  ]
 ],
 [
  "Absurdora eramatea",
  [
   [
    52,
    "(p → ¬p) → ¬p",
    "Absurdora eramatearen 1. legea"
   ],
   [
    53,
    "(¬p → p) → p",
    "Absurdora eramatearen 2. legea (Claviusen legea edo consequentia mirabilis)"
   ],
   [
    54,
    "[(p → q) ∧ (p → ¬q)] → ¬p",
    "Absurdora eramatearen 3. legea"
   ],
   [
    55,
    "[p → (q ∧ ¬q)] → ¬p",
    "Absurdora eramatearen 4. legea"
   ]
  ]
 ],
 [
  "Faltsutik edozer ondorioztatzen da (eta egiazkoa, edozertatik)",
  [
   [
    56,
    "(p ∧ ¬p) → p",
    "Ex falso sequitur quodlibet"
   ],
   [
    57,
    "(p ∧ ¬p) → ¬p",
    "Ex falso sequitur quodlibet"
   ],
   [
    58,
    "(p ∧ ¬p) → q",
    "Ex falso sequitur quodlibet"
   ],
   [
    59,
    "p → (¬p → q)",
    "Ex falso sequitur quodlibet (58. eta 35. legeetatik)"
   ],
   [
    60,
    "¬p → (p → q)",
    "Ex falso sequitur quodlibet"
   ],
   [
    61,
    "[(p → q) ∧ (p ∧ ¬q)] → r",
    "Ex falso sequitur quodlibet"
   ],
   [
    62,
    "p → (q → p)",
    "Verum sequitur ad quodlibet (lege paradoxikoa edo premisa-kargaren legea)"
   ]
  ]
 ],
 [
  "Kontrapositzioa eta inplikazioa",
  [
   [
    63,
    "(p → q) ↔ (¬q → ¬p)",
    "Baldintzazkoaren kontrapositzio-legea"
   ],
   [
    64,
    "(p → q) ↔ [p ↔ (p ∧ q)]",
    "Inplikazioaren legea"
   ],
   [
    65,
    "(p → q) ↔ [q ↔ (p ∨ q)]",
    "Inplikazioaren legea"
   ],
   [
    66,
    "[p → (p → q)] ↔ (p → q)",
    "Inplikazioaren legea"
   ],
   [
    67,
    "(p ∧ q) → (p → q)",
    "Inplikazioaren legea"
   ],
   [
    68,
    "[(p → q) ∧ (p → r)] → [p → (q ∧ r)]",
    "Atzekariaren konjuntzio-legea"
   ],
   [
    69,
    "[(p → q) ∧ (r → s)] → [(p ∨ r) → (q ∨ s)]",
    "Bi muturren disjuntzio-legea"
   ],
   [
    70,
    "[(p → q) ∧ (r → s)] → [(p ∧ r) → (q ∧ s)]",
    "Bi muturren konjuntzio-legea (praeclarum theorema, Leibniz)"
   ]
  ]
 ]
];

const LOGM_DERIVADAS = [
 [
  1,
  "Silogismo hipotetikoa",
  "Sil",
  [
   [
    "p → q; q → r",
    "p → r"
   ]
  ]
 ],
 [
  2,
  "Premisen trukaketa",
  "Mut",
  [
   [
    "p → (q → r)",
    "q → (p → r)"
   ]
  ]
 ],
 [
  3,
  "Identitatea",
  "Id",
  [
   [
    "p",
    "p"
   ]
  ]
 ],
 [
  4,
  "Premisa-karga",
  "Cpr",
  [
   [
    "p",
    "q → p"
   ]
  ]
 ],
 [
  5,
  "Konjuntzioaren banatzea",
  "DC",
  [
   [
    "p ∧ (q ∨ r)",
    "(p ∧ q) ∨ (p ∧ r)",
    1
   ]
  ]
 ],
 [
  6,
  "Disjuntzioaren banatzea",
  "DD",
  [
   [
    "p ∨ (q ∧ r)",
    "(p ∨ q) ∧ (p ∨ r)",
    1
   ]
  ]
 ],
 [
  7,
  "Kontrapositzioa",
  "Cp",
  [
   [
    "p → q",
    "¬q → ¬p",
    1
   ],
   [
    "p → ¬q",
    "q → ¬p",
    1
   ],
   [
    "¬p → q",
    "¬q → p",
    1
   ],
   [
    "¬p → ¬q",
    "q → p",
    1
   ]
  ]
 ],
 [
  8,
  "Modus tollens",
  "MT",
  [
   [
    "p → q; ¬q",
    "¬p"
   ]
  ]
 ],
 [
  9,
  "Ezeztapen bikoitzaren sarrera",
  "IDN",
  [
   [
    "p",
    "¬¬p"
   ]
  ]
 ],
 [
  10,
  "Silogismo disjuntiboa",
  "SD",
  [
   [
    "p ∨ q; ¬q",
    "p"
   ],
   [
    "p ∨ q; ¬p",
    "q"
   ]
  ]
 ],
 [
  11,
  "Dilema eraikitzaile bakuna",
  "Dil 1",
  [
   [
    "p ∨ q; p → r; q → r",
    "r"
   ]
  ]
 ],
 [
  12,
  "Dilema eraikitzaile konplexua",
  "Dil 2",
  [
   [
    "p ∨ q; p → r; q → s",
    "r ∨ s"
   ]
  ]
 ],
 [
  13,
  "Dilema suntsitzaile bakuna",
  "Dil 3",
  [
   [
    "¬p ∨ ¬q; r → p; r → q",
    "¬r"
   ]
  ]
 ],
 [
  14,
  "Dilema suntsitzaile konplexua",
  "Dil 4",
  [
   [
    "¬p ∨ ¬q; r → p; s → q",
    "¬r ∨ ¬s"
   ]
  ]
 ],
 [
  15,
  "Trukatzea edo ordezkatzea",
  "I",
  null
 ],
 [
  16,
  "Baldintzazkoaren definizioa",
  "DI 1",
  [
   [
    "p → q",
    "¬(p ∧ ¬q)"
   ]
  ]
 ],
 [
  17,
  "Baldintzazkoaren definizioa",
  "DI 2",
  [
   [
    "p → q",
    "¬p ∨ q"
   ]
  ]
 ],
 [
  18,
  "Konjuntzioaren definizioa",
  "DfC 1",
  [
   [
    "p ∧ q",
    "¬(p → ¬q)"
   ]
  ]
 ],
 [
  19,
  "Konjuntzioaren definizioa",
  "DfC 2",
  [
   [
    "p ∧ q",
    "¬(¬p ∨ ¬q)"
   ]
  ]
 ],
 [
  20,
  "Disjuntzioaren definizioa",
  "DfD 1",
  [
   [
    "p ∨ q",
    "¬p → q"
   ]
  ]
 ],
 [
  21,
  "Disjuntzioaren definizioa",
  "DfD 2",
  [
   [
    "p ∨ q",
    "¬(¬p ∧ ¬q)"
   ]
  ]
 ]
];

/* silogismoak: Euler-diagramen geometria aurrekalkulatua (tools/logica_euler.js; testurik gabe) */
const LOG_EULER_PRE = {
 "AA-1": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    10,
    0,
    82
   ],
   [
    0,
    0,
    62
   ]
  ],
  "caja": [
   -80,
   -90,
   100,
   90
  ],
  "etq": [
   [
    0,
    -2
   ],
   [
    76,
    -10
   ],
   [
    -52,
    -10
   ]
  ],
  "x": []
 },
 "AA-2": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    40,
    0,
    44
   ],
   [
    20,
    0,
    82
   ]
  ],
  "caja": [
   -70,
   -90,
   110,
   90
  ],
  "etq": [
   [
    18,
    -2
   ],
   [
    62,
    -10
   ],
   [
    18,
    -62
   ]
  ],
  "x": []
 },
 "AA-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    40,
    0,
    82
   ],
   [
    20,
    0,
    44
   ]
  ],
  "caja": [
   -90,
   -90,
   130,
   90
  ],
  "etq": [
   [
    -62,
    -2
   ],
   [
    102,
    -2
   ],
   [
    18,
    2
   ]
  ],
  "x": []
 },
 "AA-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    10,
    0,
    44
   ],
   [
    10,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   90,
   90
  ],
  "etq": [
   [
    -66,
    -10
   ],
   [
    14,
    -2
   ],
   [
    -42,
    -10
   ]
  ],
  "x": []
 },
 "AE-1": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    90,
    0,
    82
   ],
   [
    120,
    0,
    44
   ]
  ],
  "caja": [
   -70,
   -90,
   180,
   90
  ],
  "etq": [
   [
    -28.3,
    1.7
   ],
   [
    71.7,
    -52.5
   ],
   [
    121.7,
    5.8
   ]
  ],
  "x": []
 },
 "AE-2": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    120,
    0,
    44
   ],
   [
    120,
    10,
    62
   ]
  ],
  "caja": [
   -52,
   -60,
   190,
   80
  ],
  "etq": [
   [
    0.4,
    0.5
   ],
   [
    121.4,
    0.5
   ],
   [
    109.3,
    57
   ]
  ],
  "x": []
 },
 "AE-3": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    90,
    0,
    82
   ],
   [
    120,
    0,
    44
   ]
  ],
  "caja": [
   -70,
   -90,
   180,
   90
  ],
  "etq": [
   [
    -28.3,
    1.7
   ],
   [
    71.7,
    -52.5
   ],
   [
    121.7,
    5.8
   ]
  ],
  "x": []
 },
 "AE-4": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    120,
    0,
    44
   ],
   [
    120,
    10,
    62
   ]
  ],
  "caja": [
   -52,
   -60,
   190,
   80
  ],
  "etq": [
   [
    0.4,
    0.5
   ],
   [
    121.4,
    0.5
   ],
   [
    109.3,
    57
   ]
  ],
  "x": []
 },
 "AI-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    80,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    5.8,
    -19.2
   ],
   [
    110,
    14.2
   ]
  ],
  "x": [
   [
    51.1,
    0
   ]
  ]
 },
 "AI-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    80,
    0,
    62
   ],
   [
    70,
    0,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    110,
    14.2
   ],
   [
    5.8,
    -19.2
   ]
  ],
  "x": [
   [
    30.8,
    -37.9
   ]
  ]
 },
 "AI-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    80,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    5.8,
    -19.2
   ],
   [
    110,
    14.2
   ]
  ],
  "x": [
   [
    51.1,
    0
   ]
  ]
 },
 "AI-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    80,
    0,
    62
   ],
   [
    70,
    0,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    110,
    14.2
   ],
   [
    5.8,
    -19.2
   ]
  ],
  "x": [
   [
    30.8,
    -37.9
   ]
  ]
 },
 "AO-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    80,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    18.3
   ],
   [
    10,
    30.8
   ],
   [
    51.7,
    -10.8
   ]
  ],
  "x": [
   [
    -2.5,
    -37.9
   ]
  ]
 },
 "AO-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    80,
    0,
    62
   ],
   [
    70,
    0,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    51.7,
    1.7
   ],
   [
    110,
    14.2
   ],
   [
    5.8,
    -19.2
   ]
  ],
  "x": [
   [
    -31.4,
    0
   ]
  ]
 },
 "AO-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    80,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    5.8,
    -19.2
   ],
   [
    51.7,
    18.3
   ]
  ],
  "x": [
   [
    102.6,
    0
   ]
  ]
 },
 "AO-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    80,
    0,
    62
   ],
   [
    70,
    0,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    -44.2,
    -19.2
   ],
   [
    51.7,
    1.7
   ],
   [
    5.8,
    -19.2
   ]
  ],
  "x": [
   [
    132.9,
    -31.7
   ]
  ]
 },
 "EA-1": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    120,
    0,
    44
   ],
   [
    0,
    10,
    62
   ]
  ],
  "caja": [
   -70,
   -60,
   172,
   80
  ],
  "etq": [
   [
    -1.4,
    0.5
   ],
   [
    119.6,
    0.5
   ],
   [
    10.7,
    57
   ]
  ],
  "x": []
 },
 "EA-2": {
  "c": [
   [
    0,
    0,
    44
   ],
   [
    120,
    0,
    44
   ],
   [
    0,
    10,
    62
   ]
  ],
  "caja": [
   -70,
   -60,
   172,
   80
  ],
  "etq": [
   [
    -1.4,
    0.5
   ],
   [
    119.6,
    0.5
   ],
   [
    10.7,
    57
   ]
  ],
  "x": []
 },
 "EA-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    90,
    0,
    62
   ],
   [
    -30,
    0,
    44
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    18.3,
    -52.5
   ],
   [
    118.3,
    1.7
   ],
   [
    -35.8,
    1.7
   ]
  ],
  "x": []
 },
 "EA-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    90,
    0,
    62
   ],
   [
    -30,
    0,
    44
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    18.3,
    -52.5
   ],
   [
    118.3,
    1.7
   ],
   [
    -35.8,
    1.7
   ]
  ],
  "x": []
 },
 "EE-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    -20,
    150,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   220
  ],
  "etq": [
   [
    30,
    -2
   ],
   [
    110,
    -14
   ],
   [
    -22,
    150
   ]
  ],
  "x": []
 },
 "EE-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    -20,
    150,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   220
  ],
  "etq": [
   [
    30,
    -2
   ],
   [
    110,
    -14
   ],
   [
    -22,
    150
   ]
  ],
  "x": []
 },
 "EE-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    -20,
    150,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   220
  ],
  "etq": [
   [
    30,
    -2
   ],
   [
    110,
    -14
   ],
   [
    -22,
    150
   ]
  ],
  "x": []
 },
 "EE-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    -20,
    150,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   220
  ],
  "etq": [
   [
    30,
    -2
   ],
   [
    110,
    -14
   ],
   [
    -22,
    150
   ]
  ],
  "x": []
 },
 "EI-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    -32,
    38.6
   ]
  ]
 },
 "EI-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    -32,
    38.6
   ]
  ]
 },
 "EI-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    -32,
    38.6
   ]
  ]
 },
 "EI-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    -32,
    38.6
   ]
  ]
 },
 "EO-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -29,
    40
   ],
   [
    49,
    22.7
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    7.8,
    -12
   ]
  ]
 },
 "EO-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -29,
    40
   ],
   [
    49,
    22.7
   ],
   [
    -68,
    87.7
   ]
  ],
  "x": [
   [
    7.8,
    -12
   ]
  ]
 },
 "EO-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -33.3,
    31.3
   ]
  ],
  "x": [
   [
    -65.5,
    77.6
   ]
  ]
 },
 "EO-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    62
   ],
   [
    -50,
    60,
    62
   ]
  ],
  "caja": [
   -120,
   -90,
   140,
   130
  ],
  "etq": [
   [
    -24.7,
    -38
   ],
   [
    44.7,
    1
   ],
   [
    -33.3,
    31.3
   ]
  ],
  "x": [
   [
    -65.5,
    77.6
   ]
  ]
 },
 "IA-1": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    80,
    0,
    82
   ],
   [
    10,
    0,
    82
   ]
  ],
  "caja": [
   -80,
   -90,
   170,
   90
  ],
  "etq": [
   [
    28.3,
    -2.5
   ],
   [
    124.2,
    -19.2
   ],
   [
    74.2,
    -19.2
   ]
  ],
  "x": [
   [
    24.2,
    57.9
   ]
  ]
 },
 "IA-2": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    80,
    0,
    82
   ],
   [
    10,
    0,
    82
   ]
  ],
  "caja": [
   -80,
   -90,
   170,
   90
  ],
  "etq": [
   [
    28.3,
    -2.5
   ],
   [
    124.2,
    -19.2
   ],
   [
    74.2,
    -19.2
   ]
  ],
  "x": [
   [
    24.2,
    57.9
   ]
  ]
 },
 "IA-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    -10,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    64.2,
    -19.2
   ],
   [
    114.2,
    22.5
   ],
   [
    -40,
    14.2
   ]
  ],
  "x": [
   [
    18.9,
    0
   ]
  ]
 },
 "IA-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    -10,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    64.2,
    -19.2
   ],
   [
    114.2,
    22.5
   ],
   [
    -40,
    14.2
   ]
  ],
  "x": [
   [
    18.9,
    0
   ]
  ]
 },
 "IE-1": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    102,
    38.6
   ]
  ]
 },
 "IE-2": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    102,
    38.6
   ]
  ]
 },
 "IE-3": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    102,
    38.6
   ]
  ]
 },
 "IE-4": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    102,
    38.6
   ]
  ]
 },
 "II-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "II-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "II-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "II-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "IO-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -22
   ]
  ]
 },
 "IO-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    46,
    6
   ],
   [
    106,
    -30
   ],
   [
    6,
    26
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    -20,
    -22
   ]
  ]
 },
 "IO-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    14,
    6
   ],
   [
    106,
    -30
   ],
   [
    58,
    -2
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    36,
    78
   ]
  ]
 },
 "IO-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    14,
    6
   ],
   [
    106,
    -30
   ],
   [
    58,
    -2
   ]
  ],
  "x": [
   [
    36,
    74
   ],
   [
    36,
    78
   ]
  ]
 },
 "OA-1": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    80,
    0,
    82
   ],
   [
    10,
    0,
    82
   ]
  ],
  "caja": [
   -80,
   -90,
   170,
   90
  ],
  "etq": [
   [
    28.3,
    1.7
   ],
   [
    124.2,
    -19.2
   ],
   [
    74.2,
    -19.2
   ]
  ],
  "x": [
   [
    -61.2,
    -15
   ]
  ]
 },
 "OA-2": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    80,
    0,
    82
   ],
   [
    10,
    0,
    82
   ]
  ],
  "caja": [
   -80,
   -90,
   170,
   90
  ],
  "etq": [
   [
    28.3,
    1.7
   ],
   [
    103.3,
    51.7
   ],
   [
    74.2,
    -19.2
   ]
  ],
  "x": [
   [
    111.4,
    0
   ]
  ]
 },
 "OA-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    -10,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    64.2,
    -19.2
   ],
   [
    114.2,
    22.5
   ],
   [
    18.3,
    18.3
   ]
  ],
  "x": [
   [
    -32.6,
    0
   ]
  ]
 },
 "OA-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    70,
    0,
    82
   ],
   [
    -10,
    0,
    62
   ]
  ],
  "caja": [
   -90,
   -90,
   160,
   90
  ],
  "etq": [
   [
    64.2,
    -19.2
   ],
   [
    114.2,
    22.5
   ],
   [
    -40,
    14.2
   ]
  ],
  "x": [
   [
    37.1,
    -73.3
   ]
  ]
 },
 "OE-1": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    103.3,
    31.3
   ]
  ],
  "x": [
   [
    135.5,
    77.6
   ]
  ]
 },
 "OE-2": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    21,
    22.7
   ],
   [
    99,
    40
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    62.2,
    -12
   ]
  ]
 },
 "OE-3": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    25.3,
    1
   ],
   [
    94.7,
    -38
   ],
   [
    103.3,
    31.3
   ]
  ],
  "x": [
   [
    135.5,
    77.6
   ]
  ]
 },
 "OE-4": {
  "c": [
   [
    0,
    0,
    62
   ],
   [
    70,
    0,
    82
   ],
   [
    120,
    60,
    62
   ]
  ],
  "caja": [
   -70,
   -90,
   190,
   130
  ],
  "etq": [
   [
    21,
    22.7
   ],
   [
    99,
    40
   ],
   [
    138,
    87.7
   ]
  ],
  "x": [
   [
    62.2,
    -12
   ]
  ]
 },
 "OI-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    42,
    22
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    -50,
    64
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "OI-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    42,
    22
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    36,
    -74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "OI-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    42,
    22
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    -50,
    64
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "OI-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    42,
    22
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    36,
    -74
   ],
   [
    -20,
    -10
   ]
  ]
 },
 "OO-1": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    30,
    34
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    -50,
    64
   ],
   [
    -20,
    -22
   ]
  ]
 },
 "OO-2": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    30,
    34
   ],
   [
    106,
    -30
   ],
   [
    30,
    106
   ]
  ],
  "x": [
   [
    36,
    -74
   ],
   [
    -20,
    -22
   ]
  ]
 },
 "OO-3": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    22,
    6
   ],
   [
    106,
    -30
   ],
   [
    90,
    50
   ]
  ],
  "x": [
   [
    -50,
    64
   ],
   [
    36,
    78
   ]
  ]
 },
 "OO-4": {
  "c": [
   [
    0,
    0,
    82
   ],
   [
    60,
    0,
    82
   ],
   [
    30,
    50,
    82
   ]
  ],
  "caja": [
   -90,
   -90,
   150,
   140
  ],
  "etq": [
   [
    22,
    6
   ],
   [
    106,
    -30
   ],
   [
    -30,
    50
   ]
  ],
  "x": [
   [
    36,
    -74
   ],
   [
    36,
    78
   ]
  ]
 }
};

/* paradoxak / ariketak / klasikoak */
const PARADOJAS_GRUPOS = [
 {
  "id": "autorref",
  "view": "paradojas",
  "titulo": "Beren buruaz hitz egiten duten esaldiak",
  "intro": "Autoerreferentziaren paradoxak: bere buruari aplikatzen zaion esaldi, multzo edo arau bat, aldi berean gauza bat eta haren kontrakoa esatera iristen dena."
 },
 {
  "id": "zenon",
  "view": "paradojas",
  "titulo": "Zenon: mugimendua eta infinitua",
  "intro": "Zenon Eleakoak, Parmenidesen ikasleak, argudioak asmatu zituen erakusteko mugimendua, arretaz pentsatuz gero, ezinezkoa dirudiela."
 },
 {
  "id": "regreso",
  "view": "paradojas",
  "titulo": "Atzerakada eta begiztak",
  "intro": "Azalpen batek beste azalpen bat behar duenean, eta horrek beste bat, eta horrela behin eta berriz, hiru irtenbide besterik ez daude: amaierarik gabe jarraitu (atzerakada infinitua), azaltzen ez den zerbaitetan gelditu (absolutu bat, lehen printzipio bat) edo abiapuntura itzuli (begizta edo zirkulua). Zirkulu batzuk zirkulu biziotsuak dira eta beste batzuk ez; absolutu batzuek azaldu egiten dute eta beste batzuek galdetzeari uzten diote, besterik ez. Marrazki ospetsu batek laburbiltzen du: <em>Marrazten ari diren eskuak</em> (1948), M. C. Escherrena, non esku bakoitzak bestea marrazten duen."
 },
 {
  "id": "vaguedad",
  "view": "paradojas",
  "titulo": "Lausotasuna eta identitatea",
  "intro": "Muga zehatzik gabeko hitzak eta pixkanaka aldatzen diren gauzak: non dago muga?, noiz uzten dio zerbaitek zena izateari?"
 },
 {
  "id": "accion",
  "view": "paradojas",
  "titulo": "Ekintzaren eta politikaren paradoxak",
  "intro": "Ez dira kontraesan logikoak, baizik eta egoerak non bitartekoak helburuaren aurka doala dirudien, edo arrazoia ez den nahikoa erabakitzeko."
 },
 {
  "id": "colectivo",
  "view": "paradojas",
  "titulo": "Bat eta guztiak",
  "intro": "Bakoitzarentzat ona edo egia dena ez da hala izaten guztiek batera egiten dutenean. Baturaren paradoxak dira: urrats bakoitzean ez dago akatsik; akatsa «bat»etik «guztiak»era igarotzean dago."
 },
 {
  "id": "razonar",
  "view": "paradojas",
  "titulo": "Arrazoibidearen tranpak",
  "intro": "Akatsik gabekoak diruditen eta onartu ezin dugun ondoriora daramaten arrazoibideak: urrats okerra aurkitu behar da."
 },
 {
  "id": "ejercicios",
  "view": "ejercicios",
  "titulo": "Esaldien azterketa (klaseko ariketak)",
  "intro": "Ez dira paradoxak: klasean aztertu ditugun esaldiak dira. Lehenik, haien forma logikoa ateratzen da; gero, zer esaten duten, zer ematen duten aldez aurretik onartutzat eta zer ez duten esaten, hala dirudien arren."
 },
 {
  "id": "agustin",
  "view": "clasicos",
  "titulo": "San Agustin: <em>Bizitza zoriontsuaz</em>",
  "intro": "<em>Bizitza zoriontsuaz</em> elkarrizketako esaldiak (2. kap.); bertan, Agustinek, haren ama Monikak eta gazte batzuek, urtebetetze-otordu batean, nor den zoriontsu eztabaidatzen dute. Klaseko esaldien tresna berekin aztertzen dira."
 }
];

const PARADOJAS = [
 {
  "id": "mentiroso",
  "grupo": "autorref",
  "titulo": "Gezurtia",
  "origen": "Eubulides Miletokoa, K.a. IV. mendea.",
  "enunciado": "«Esaldi hau faltsua da.»",
  "problema": "Esaldia egiazkoa bada, egia da dioena: faltsua dela. Faltsua bada, dioena faltsua da; beraz, ez da faltsua: egiazkoa da. Erantzun bakoitzak kontrakora garamatza. <em>p</em> «esaldi hau egiazkoa da» deitzen badiogu, esaldiak <em>p ↔ ¬p</em> baieztatzen du, eta hori kontraesana da: faltsua, <em>p</em>-ren balioa edozein dela ere.",
  "salidas": "<ul><li><strong>Tarski</strong> (1933): hizkuntza batek ezin du bere esaldien egiaz hitz egin. Metahizkuntza bat behar da, «goi-mailako» hizkuntza bat, «esaldi hau egiazkoa da» edo «faltsua da» esateko.</li><li><strong>Kripke</strong> (1975): esaldiak ez du oinarririk, egiazkoa den jakiteko lehenago jakin beharko bailitzateke. Ez da egiazkoa ez faltsua: baliorik gabe geratzen da.</li><li><strong>Dialeteismoa</strong> (Graham Priest): esaldi batzuk egiazkoak eta faltsuak dira aldi berean, eta hori onartzen duen logika bat eraiki behar da, dena erori gabe.</li></ul>",
  "pensar": "Eta «esaldi hau egiazkoa da» esaldia? Ez darama kontraesanera, baina zer egia-balio emango zenioke, eta zergatik?"
 },
 {
  "id": "epimenides",
  "grupo": "autorref",
  "titulo": "Epimenides: «Kretar guztiak gezurtiak dira»",
  "origen": "Epimenides Knososkoa (Kreta), K.a. VI. mendea. Batzuetan ateniarrekin edo beste herri batekin kontatzen da, baina bertsio zaharra kretarrarena da.",
  "enunciado": "Epimenidesek, kretarra izanik, dio: «Kretar guztiek gezurra esaten dute beti».",
  "problema": "Gezurtiaren berdina dirudi: egia bada, Epimenidesek, kretarra baita, gezurra dio hori esatean; beraz, faltsua da. Baina hemen dago tranpa: faltsua bada, ez du zertan egiazkoa izan. Faltsua izateak esan nahi du soilik kretarren <strong>batek</strong> egia esaten duela <strong>noizbait</strong>. Ondorioztatzen den bakarra da esaldia faltsua dela eta Epimenidesek gezurra diola. Ez dago paradoxarik, Epimenides kretar bakarra dela edo Kretan esan den esaldi bakarra hau dela gehitzen ez badugu. Logikan: <em>p</em>-k <em>¬p</em> inplikatzen badu, ondorioztatzen dena <em>¬p</em> da, besterik gabe.",
  "salidas": "<ul><li>Adibide ona da ikusteko «guztiek gezurra diote»-ren ezeztapena ez dela «guztiek egia diote», baizik eta «batek ez du gezurrik esaten» (karratu logikoan, A baten kontraesankorra O bat da).</li><li>Epimenidesen bertsioa Biblian aipatzen da (Titori gutuna 1, 12), inolako kezka logikorik gabe: han kretarren aurkako irain gisa erabiltzen da.</li></ul>",
  "pensar": "Zer gehitu beharko litzaioke istorioari benetako paradoxa izan dadin, gezurtiarena bezala?"
 },
 {
  "id": "barbero",
  "grupo": "autorref",
  "titulo": "Russellen bizargina",
  "origen": "Bertrand Russellek 1918an erabili zuen bere multzoen paradoxa (1901) modu errazean azaltzeko.",
  "enunciado": "Herri batean bizargin bat dago, beren burua bizartzen ez duten gizon guztiak bizartzen dituena, eta haiek bakarrik. Nork bizartzen du bizargina?",
  "problema": "Bizarginak bere burua bizartzen badu, beren burua bizartzen dutenetako bat da, eta horiek ez ditu bizartzen: ez du bere burua bizartzen. Bere burua bizartzen ez badu, beren burua bizartzen ez dutenetako bat da, eta horiek guztiak berak bizartzen ditu: bere burua bizartzen du. <em>p</em> «bizarginak bere burua bizartzen du» bada, arauak <em>p ↔ ¬p</em> dio: beste kontraesan bat.",
  "salidas": "<ul><li>Bizarginaren konponbidea erraza da: <strong>bizargin hori ezin da existitu</strong>. Deskribapena kontraesankorra da, «zirkulu karratu» bat bezala.</li><li>Larria jatorrizko bertsioa da: <strong>beren burua barne hartzen ez duten multzo guztien multzoa</strong>. Bere burua barne hartzen du? Baiezkoan, ez; ezezkoan, bai. Russellek Fregeri idatzi zion 1902an, Fregek matematikak logikan oinarritzeko bere saiakera argitaratzear zegoenean, eta Fregek onartu zuen bere sistema kolokan zegoela.</li><li>Irtenbideak izan ziren Russellen <strong>moten teoria</strong> (multzo bat ezin da bere buruaren kide izan) eta edozein propietaterekin multzoak eratzea debekatzen duten axiomak dituzten multzoen teoriak.</li></ul>",
  "pensar": "Liburutegi bateko katalogo batek beren burua aipatzen ez duten katalogo guztiak biltzen ditu: bere burua aipatu behar al du?"
 },
 {
  "id": "grelling",
  "grupo": "autorref",
  "titulo": "«Heterologiko»-ren paradoxa",
  "origen": "Kurt Grelling eta Leonard Nelson, 1908.",
  "enunciado": "Hitz batzuek beraiek betetzen duten zerbait esaten dute: «hitz» hitz bat da, «polisilabiko»-k silaba asko ditu. <em>Autologiko</em> deitzen diegu. Gainerakoak, «monosilabiko» edo «luzeegia» bezala, <em>heterologikoak</em> dira. «Heterologiko» hitza heterologikoa al da?",
  "problema": "«Heterologiko» heterologikoa bada, dioena betetzen du; beraz, autologikoa da. Autologikoa bada, dioena betetzen du, hau da, heterologikoa izatea. Bizargina da, baina hitzekin: bere buruari aplikatzen zaion propietate bat.",
  "salidas": "<ul><li>Gezurtian bezala, mailak bereiztea proposatzen da: ezin da hitz bat erabili bere maila bereko hitzen propietateez hitz egiteko, kontuz ibili gabe.</li><li>Beste irtenbide bat: «heterologiko» ez dago ondo definituta bere buruarentzat, gezurtiaren esaldiak egia-baliorik ez duen bezala.</li></ul>",
  "pensar": "«Autologiko» hitza autologikoa al da? Erabaki al daiteke?"
 },
 {
  "id": "cocodrilo",
  "grupo": "autorref",
  "titulo": "Krokodiloa",
  "origen": "Greziako logikaren problema klasikoa, estoikoek eta Lukianok jasoa.",
  "enunciado": "Krokodilo batek haur bat lapurtzen du eta amari esaten dio: «Itzuliko dizut, zer egingo dudan asmatzen baduzu». Amak erantzuten du: «Ez didazu itzuliko».",
  "problema": "Krokodiloak haurra gordetzen badu, amak asmatu du, eta orduan itzuli egin behar dio. Itzultzen badio, ama oker zegoen, eta orduan ez lioke itzuli behar. Egiten duena egiten duela, bere promesa hausten du.",
  "salidas": "<ul><li>Krokodiloaren promesa berak egingo duenaren araberakoa da: autoerreferentziaren beste forma bat da, eta ezin da kasu guztietan bete.</li><li>Amak «itzuliko didazu» esan izan balu, krokodiloak kontraesanik gabe aukera zezakeen: itzuli (amak asmatu du) edo gorde (amak huts egin du).</li></ul>",
  "pensar": "Zer erantzun komeni zaio amari, eta zergatik da eman zuena azkarrena?"
 },
 {
  "id": "aquiles",
  "grupo": "zenon",
  "titulo": "Akiles eta dortoka",
  "origen": "Zenon Eleakoa, K.a. V. mendea; Aristotelesek kontatzen digu <em>Fisika</em>n (VI. liburua).",
  "enunciado": "Akilesek, greziarren artean azkarrenak, lasterketa bat egiten du dortoka batekin eta abantaila ematen dio. Dortoka zegoen tokira iristen denean, hura pixka bat aurreratu da. Puntu berri horretara iristen denean, beste pixka bat aurreratu da. Eta horrela beti: Akilesek ez du inoiz harrapatzen.",
  "problema": "Zati bakoitza erreala da eta infinitu zati daude. Badirudi infinitu zati egiteko denbora infinitua behar dela; beraz, Akilesek ez luke inoiz dortoka harrapatuko, eta hori ikusten dugunaren aurkakoa da.",
  "salidas": "<ul><li><strong>Matematikak</strong>: infinitu gaien batura batek emaitza finitua eman dezake. 1 + ½ + ¼ + ⅛ + … = 2. Infinitu zatiak denbora finituan egiten dira, eta kalkula daiteke non harrapatzen duen.</li><li><strong>Aristoteles</strong>: espazioa eta denbora infinituraino zatigarriak dira <em>ahalmenez</em> soilik; Akilesek ez ditu infinitu zati egiten <em>ekintzan</em>.</li><li>Filosofo batzuen ustez, baturak ez du dena konpontzen: galdera bera geratzen da, nola <em>amai</em> daitekeen azken urratsik ez duen urrats-segida bat.</li></ul>",
  "pensar": "Zenonek Parmenides defendatzen zuen: mugimendua itxura da. Zergatik balioko luke mugimenduaren aurkako argudio batek izakia bat eta higiezina dela defendatzeko?"
 },
 {
  "id": "dicotomia",
  "grupo": "zenon",
  "titulo": "Dikotomia",
  "origen": "Zenon Eleakoa, K.a. V. mendea.",
  "enunciado": "Gela zeharkatzeko, lehenik erdira iritsi behar duzu. Baina lehenago, erdiaren erdira. Eta lehenago, erdi horren erdira… Ez dago lehen urratsik; beraz, ezin zara mugitzen hasi ere egin.",
  "problema": "Akiles da alderantziz: amaierara inoiz ez iristea beharrean, ezin da inoiz hasieratik atera, edozein punturen aurretik lehenago iritsi beharreko beste bat baitago.",
  "salidas": "<ul><li>Erantzun matematiko bera: ½ + ¼ + ⅛ + … = 1. Infinitu zati, distantzia finitua, denbora finitua.</li><li>Galdera filosofikoa: espazioa benetan zatigarria al da infinituraino, ala badago gutxieneko distantzia bat? Gaur egungo fisikak oraindik eztabaidatzen du espazioa eta denbora jarraituak diren.</li></ul>",
  "pensar": "Ba al dago alderik «infinitu aldiz zati daiteke» eta «infinitu zatiz egina dago» esaldien artean?"
 },
 {
  "id": "flecha",
  "grupo": "zenon",
  "titulo": "Gezia",
  "origen": "Zenon Eleakoa, K.a. V. mendea; Aristotelesen <em>Fisika</em>n ere bai.",
  "enunciado": "Une bakoitzean, hegan doan gezi batek bere tamaina bereko espazioa betetzen du: une horretan geldi dago. Denbora uneez egina dago. Beraz, gezia beti dago geldi.",
  "problema": "Une batean ere mugitzen ez bada, eta denbora uneen batura besterik ez bada, noiz mugitzen da? Baina ikusten dugu jomugara iristen dela.",
  "salidas": "<ul><li><strong>Aristoteles</strong>: denbora ez dago une zatiezinez osatua, lerro bat puntuz egina ez dagoen bezala. Mugimendua tarteetan gertatzen da, ez uneetan.</li><li><strong>Kalkulu modernoa</strong>: une bateko abiadura limite gisa definitzen da. Geziak une bakoitzean leku bat betetzeak ez dio eragozten une horretan abiadura izatea.</li></ul>",
  "pensar": "Film bat argazki finkoak dira bata bestearen atzetik. Ezer mugitzen al da film batean?"
 },
 {
  "id": "sorites",
  "grupo": "vaguedad",
  "titulo": "Pila (sorites)",
  "origen": "Eubulides Miletokoa, K.a. IV. mendea. «Sorites» grezierazko <em>sōrós</em> hitzetik dator, «pila».",
  "enunciado": "Hare-ale bat ez da pila bat. Zerbait pila bat ez bada, ale bakar bat gehitzeak ez du pila bihurtzen. Beraz, bi ale ez dira pila bat, ezta hiru ere… ezta milioi bat ere.",
  "problema": "Bi premisek egiazkoak dirudite eta arrazoibidea baliozkoa da (modus ponens errepikatua da). Baina ondorioa faltsua da: milioi bat ale pila bat da. Gauza bera gertatzen da «burusoil», «altu», «aberats» edo «heldu» hitzekin.",
  "salidas": "<ul><li><strong>Muga zehatz bat badago, baina ez dugu ezagutzen</strong> (epistemizismoa, Timothy Williamson): ale batek egiten du pila, nahiz eta inork ez jakin zein.</li><li><strong>Egia-mailak</strong> (logika lausoa): «hau pila bat da» egiazkoa izan daiteke 0,4an edo 0,9an. Ale bakoitzak egia pixka bat gehitzen du.</li><li><strong>Muga-kasuak</strong> (superbalioztapena): eremu zalantzagarrian esaldia ez da egiazkoa ez faltsua, nahiz eta egia izaten jarraitzen duen nonbait pila izatera igarotzen dela.</li></ul>",
  "pensar": "Legeak adin nagusitasuna 18 urtetan finkatzen du. Soritesaren konponbidea iruditzen zaizu, ala hura saihesteko modu bat? Zergatik da beharrezkoa?"
 },
 {
  "id": "teseo",
  "grupo": "vaguedad",
  "titulo": "Teseoren ontzia",
  "origen": "Plutarko, <em>Teseoren bizitza</em> (I-II. mendea); Thomas Hobbesek bigarren zatia gehitu zuen XVII. mendean.",
  "enunciado": "Atenastarrek Teseoren ontzia gordetzen zuten eta ohol ustelak berriekin ordezkatzen zituzten, jatorrizkoetatik bat ere geratu ez zen arte. Teseoren ontzia izaten jarraitzen du? Eta norbaitek ohol zaharrak gorde eta berriro muntatuko balitu, bietatik zein litzateke Teseoren ontzia?",
  "problema": "Identitatea materiaren araberakoa bada, ohol zaharrekin berreraikitako ontzia da Teseorena. Jarraitasunaren araberakoa bada (ez zion inoiz nabigatzeari eta zaintzeari utzi), konpondutakoa da. Ezin dira biak izan, bi ontzi baitira.",
  "salidas": "<ul><li>Identitatea <strong>formaren eta funtzioaren</strong> araberakoa da, ez materiaren (Aristotelesengandik hurbileko ideia).</li><li>Identitatea denboran zehar duen <strong>jarraitasunaren</strong> araberakoa da.</li><li>«Bera izatea» neurri batean <strong>hitzarmen</strong> bat da: zertarako galdetzen dugun araberakoa da (museo bat, ontzien erregistro bat, epaiketa bat).</li></ul>",
  "pensar": "Zure gorputzeko zelula ia guztiak urte gutxitan behin berritzen dira. Zerk egiten du zu izaten jarraitzea?"
 },
 {
  "id": "sivispacem",
  "grupo": "accion",
  "titulo": "«Si vis pacem, para bellum»",
  "origen": "«Bakea nahi baduzu, presta ezazu gerra.» Ideia Vegeziorengandik dator, idazle militar erromatarra (IV-V. mendeak): <em>qui desiderat pacem, praeparet bellum</em>. Formula laburra geroagokoa da.",
  "enunciado": "Bakea lortzeko gerrarako prestatu behar da: ondo armatuta dagoena ez dute erasoko.",
  "problema": "Badirudi bitartekoak helburua kontraesaten duela: armatu, ez borrokatzeko. Ez da kontraesan logikoa (bitarteko bat bere helburuaren antz gutxikoa izan daiteke), paradoxa praktikoa baizik. Arazoa da zer gertatzen den <strong>guztiek</strong> maxima betetzen badute: herrialde bat defendatzeko armatzen bada, auzokoak mehatxu gisa ikusten du eta hura ere armatzen da. <strong>Segurtasunaren dilema</strong> da, arma-lasterketara daramana.",
  "salidas": "<ul><li><strong>Disuasioak</strong> funtzionatzen du: Gerra Hotzean bi potentziek arma nuklearrak zituzten eta ez zuten elkarri zuzenean eraso («ziurtatutako elkarrekiko suntsiketa»). Baina bakea beldurraren oreka baten mende zegoen, eta gerratik oso gertu egon ziren uneak izan ziren, Kubako misilen krisia (1962) kasu.</li><li><strong>Kantek</strong>, <em>Betiko bakerantz</em> lanean (1795), eskatzen du armada iraunkorrak denborarekin desagertzea, beti mehatxatzen baitituzte besteak gerrarekin eta armamentuan elkar gainditzera bultzatzen baitituzte. Haren ustez, bakea zuzenbidearekin eta errepublikekin eraikitzen da, ez beldurrarekin.</li><li>Batzuek buelta ematea proposatzen dute: <em>si vis pacem, para pacem</em>: bakea nahi baduzu, presta ezazu bakea.</li></ul>",
  "pensar": "Aplika ezazu Kanten proba: zer gertatuko litzateke herrialde guztiek maxima honen arabera jokatuko balute? Bake gehiago edo gerra gehiago egongo litzateke?"
 },
 {
  "id": "tolerancia",
  "grupo": "accion",
  "titulo": "Tolerantziaren paradoxa",
  "origen": "Karl Popper, <em>Gizarte irekia eta haren etsaiak</em> (1945), 7. kapituluko ohar batean.",
  "enunciado": "Gizarte bat mugarik gabe tolerantea bada, baita tolerantzia suntsitu nahi dutenekin ere, horiek amaiera eman diezaiokete. Mugarik gabeko tolerantziak tolerantziaren desagerpena dakar.",
  "problema": "Tolerantzia babesteko, badirudi batzuekin intolerantea izan behar dela. Baina orduan, nork erabakitzen du norekin, eta ez al da hori intoleranteek egiten dutena?",
  "salidas": "<ul><li>Popperrek ez du esaten iritzi intolerante oro debekatu behar denik. Argudioekin erantzun eta iritzi publikoarekin geldiarazi daitekeen bitartean, zentzuzkoena ez debekatzea da. Intoleranteek eztabaidatzea onartzen ez dutenean eta indarrarekin erantzuten dutenean bakarrik du gizarteak bere burua defendatzeko eskubidea.</li><li>Ikusteko beste modu bat (John Rawls): tolerantzia itun bat bezalakoa da. Hura hausten duenak ezin die besteei eskatu berarekin betetzeko, nahiz eta, erakundeak arriskuan jartzen ez dituen bitartean, toleratu behar den.</li></ul>",
  "pensar": "Non jarriko zenuke muga: ideietan, hitzetan ala egintzetan?"
 },
 {
  "id": "buridan",
  "grupo": "accion",
  "titulo": "Buridanen astoa",
  "origen": "Jean Buridani egozten zaio (XIV. mendea), nahiz eta ez den haren lanetan agertzen. Ideia Aristotelesen <em>Zeruaz</em> lanean dago jada (II. liburua).",
  "enunciado": "Asto bat, bi aldeetatik berdin goseak, belar-pila berdin biren erdi-erdian dago. Ez du arrazoirik bata bestearen aurretik aukeratzeko; beraz, ez da mugitzen eta goseak hiltzen da.",
  "problema": "Zerbait nahiago izateko arrazoi bat dugunean bakarrik jarduten badugu, aukera berdin biren aurrean ezin izango genuke aukeratu. Baina goseak hiltzea bi aukeretako edozein baino okerragoa da.",
  "salidas": "<ul><li><strong>Arrazoirik gabe aukeratzeko askatasuna</strong> izan behar da, zoriz: hain zuzen, Erdi Aroan hori erabili zen borondate askea eztabaidatzeko.</li><li><strong>Spinozak</strong> (<em>Etika</em>, II. zatia) ondorioa onartzen du: oreka perfektu horretan dagoen pertsona bat goseak hilko litzateke. Eta pertsona baino asto gehiago ez ote litzatekeen galdetzen badiote, ez dakiela erantzuten du.</li><li>Bizitza errealean ez dago inoiz bi aukera guztiz berdinik. Eta badaude, txanpon bat botatzea erabaki arrazionala da.</li></ul>",
  "pensar": "Inoiz blokeatuta egon zara ia berdinak ziren bi aukeren aurrean? Nola konpondu zenuen?"
 },
 {
  "id": "hedonismo",
  "grupo": "accion",
  "titulo": "Hedonismoaren paradoxa",
  "origen": "Henry Sidgwick, <em>Etikaren metodoak</em> (1874); John Stuart Millek bere <em>Autobiografia</em>n kontatzen du (1873).",
  "enunciado": "Plazera edo zoriontasuna zuzenean bilatzen duenak ez du aurkitzen. Beste zerbaiti ematen zaionak aurkitzen du.",
  "problema": "Zoriontasuna egiten dugun guztiaren helburua bada (hedonistek eta utilitaristek uste duten bezala), logikoa litzateke zuzenean bilatzea. Baina hori egitea dirudi hura galtzeko modurik onena.",
  "salidas": "<ul><li>Millek, gaztetako depresio baten ondoren, ondorioztatu zuen beren zoriontasuna ez beste zerbaitetan gogoa jarria dutenak bakarrik direla zoriontsuak: besteen zoriontasunean, gizateriaren hobekuntzan, arte batean edo zeregin batean.</li><li>Aristotelesek esango luke zoriontasuna ez dela atzetik ibiltzen den egoera bat, ondo jarduten den bizitza baten emaitza baizik: egiten duguna ondo egitean agertzen da.</li></ul>",
  "pensar": "Gertatu zaizu zerbaitek dibertitzeari uztea, hain zuzen ondo pasatzeko ahalegina egiten hasi zinenean?"
 },
 {
  "id": "examen",
  "grupo": "razonar",
  "titulo": "Ezusteko azterketa",
  "origen": "XX. mendeko 40ko hamarkadan zabaldu zen; D. J. O'Connorrek argitaratu zuen 1948an.",
  "enunciado": "Irakasleak iragartzen du: «Datorren astean ezusteko azterketa bat egongo da: ez duzue jakingo zein egunetan den egun horretako goizera arte». Ikasle batek arrazoitzen du: «Ezin da ostirala izan, ostegun arratsaldean jakingo genukeelako ostiralean dela. Ostirala baztertuta, ezin da osteguna izan ere, arrazoi beragatik… Beraz, ezin da ezusteko azterketarik egon». Asteazkenean azterketa dago, eta inork ez zuen espero.",
  "problema": "Ikaslearen urrats bakoitzak zuzena dirudi, baina ondorioa faltsua da: azterketa ezustekoa izan zen. Non dago hutsa?",
  "salidas": "<ul><li>Ikasleak egiazkotzat ematen du irakaslearen iragarpena (azterketa egongo da) eta, aldi berean, ondorioztatzen du ez dela egongo. Iragarpenean sinesteari uzten badio, ezin du hura erabili egunak baztertzeko, eta edozein egun da berriro ezustekoa.</li><li>Iragarpenak ikasleek jakingo dutenaz hitz egiten du, eta dakitena aldatu egiten da horri buruz arrazoitzean: autoerreferentziaren forma bat da, gezurtia bezala.</li><li>Egun posible bakarrarekin («bihar ezusteko azterketa egongo da») iragarpena kontraesankorra da. Egun batzuekin, jada ez dago argi.</li></ul>",
  "pensar": "Ikaslea «azterketak astelehenean izan behar du» ondoriora iritsi izan balitz, ezustekoa izango zen?"
 },
 {
  "id": "protagoras",
  "grupo": "razonar",
  "titulo": "Protagoras eta Euatlo",
  "origen": "Aulo Gelio, <em>Gau atikoak</em> (II. mendea), Protagoras sofistari buruz kontatzen du.",
  "enunciado": "Protagorasek zuzenbidea irakasten dio Euatlori, eta hark ordainduko dio bere lehen epaiketa irabazten duenean. Euatlok amaitzen du eta ez du inor defendatzen. Protagorasek salatu egiten du. Protagoras: «Irabazten badut, ordainduko didazu epaileak agintzen duelako; galtzen badut, ordainduko didazu zure lehen epaiketa irabaziko duzulako». Euatlo: «Irabazten badut, ez dut ordainduko epaileak agintzen duelako; galtzen badut, ez dut ordainduko oraindik ez dudalako epaiketarik irabazi».",
  "problema": "Bi arrazoibideek forma bera dute eta kontrako ondorioetara daramate. Bakoitzak, komeni zaionaren arabera, aukeratzen du epaiak ala kontratuak balio duen.",
  "salidas": "<ul><li>Trikimailua argudioaren erdian irizpidea aldatzea da. Bakarra finkatzen bada (epaia edo kontratua), dilema desagertu egiten da.</li><li>Legegizon baten irtenbidea: epaileak Euatlori ematen dio arrazoia, oraindik ez baitu epaiketarik irabazi. Baina orduan Euatlok bat irabazi du jada, eta Protagorasek berriro sala dezake… eta irabazi.</li></ul>",
  "pensar": "Sofistek edozein jarrera defendatzen irakasten zuten. Zer zerikusi du kasu honek horrekin?"
 },
 {
  "id": "omnipotencia",
  "grupo": "razonar",
  "titulo": "Altxatu ezin den harria",
  "origen": "Ahalguztiduntasunaren paradoxa, Erdi Aroko filosofian eztabaidatua.",
  "enunciado": "Izaki ahalguztidun batek sor al dezake hain harri astuna, non berak ere ezin baitu altxatu?",
  "problema": "Sor badezake, badago egin ezin duen zerbait: altxatzea. Ezin badu sortu, badago egin ezin duen zerbait: sortzea. Bi kasuetan, ez da ahalguztiduna.",
  "salidas": "<ul><li><strong>Tomas Akinokoa</strong>: ahalguztiduna izatea <em>posible</em> den guztia egin ahal izatea da. Kontraesana dakarrena («dena ahal duenak altxatu ezin duen harria») ez da egin ezin den gauza bat, zentzurik gabeko esaldi bat baizik, «zirkulu karratu» bat bezala.</li><li>Beste batzuen ustez, paradoxak erakusten du inolako mugarik gabeko ahalmenaren ideia ez dela koherentea.</li></ul>",
  "pensar": "Muga bat al da kontraesankorra dena egin ezin izatea?"
 },
 {
  "id": "berry",
  "grupo": "autorref",
  "titulo": "Berryren paradoxa",
  "origen": "Russellek argitaratu zuen 1908an, eta G. G. Berryri egotzi zion, Oxfordeko Unibertsitateko liburuzainari.",
  "enunciado": "Pentsa «hamabost hitz baino gutxiagorekin izendatu ezin den zenbaki arrunt txikiena». Badira horrelako zenbakiak, hamabost hitz baino gutxiagorekin esaldi kopuru mugatu bat baino ezin baita osatu, eta zenbakiak ez dira inoiz amaitzen; eta horien artean bat izango da txikiena. Baina komatxo arteko esaldiak hamar hitz ditu.",
  "problema": "Esaldiak hamar hitzekin izendatzen du zenbaki hori; beraz, zenbakia hamabost hitz baino gutxiagorekin izendatu daiteke: ez da bilatzen genuena. Eta hura ez bada, zein da? Ez du bere buruaz hitz egiten gezurtiak bezala, baina «izendatu» hitza erabiltzen du izenda daitekeen guztiaz hitz egiteko, bera barne.",
  "salidas": "<ul><li>Gezurtiarenean bezala, mailak bereizten dira: «hizkuntza honetan izendagarria» ezin da hizkuntza horren beraren barruan definitu.</li><li>Ideia matematikan erabili zen gero: Gregory Chaitinek erabili zuen frogatzeko badirela zenbakien konplexutasunari buruzko egiak, inolako arau-sistemak froga ezin ditzakeenak.</li></ul>",
  "pensar": "Zergatik ez dago paradoxarik «hamabost»en ordez «bost» jartzen badugu?"
 },
 {
  "id": "agripa",
  "grupo": "regreso",
  "titulo": "Münchhausenen trilema",
  "origen": "Agripa, greziar eszeptikoa (I. mendea), Sexto Enpirikoak jasoa <em>Esbozos pirrónicos</em> lanean (I. liburua). Izena Hans Albertena da (1968), Münchhausen baroiagatik, zeinak kontatzen baitzuen zingira batetik bere burua atera zuela ilean tiraka.",
  "enunciado": "—Nola dakizu hori egia dela? —Arrazoi honengatik. —Eta nola dakizu arrazoi hori egia dela? —Beste honengatik. —Eta hori? … Galdetzen jarraitzen badugu, hiru amaiera besterik ez daude.",
  "problema": "<ul><li><strong>Atzerakada infinitua</strong>: arrazoi bakoitzak beste bat behar du, amaierarik gabe. Ez dugu inoiz ezer justifikatzen amaitzen.</li><li><strong>Etena</strong>: uneren batean esaten dugu «hau ez da justifikatzen, horrela da». Baina orduan gainerako guztia arrazoirik gabe onartu dugun zerbaiten gainean dago.</li><li><strong>Zirkulua</strong>: katea lehen erabilitako arrazoi batera itzultzen da. Baina orduan frogatu nahi genuena bere burua frogatzeko erabiltzen da.</li></ul><p>Hiruretako bat ere ez dirudi benetako justifikazioa.</p>",
  "salidas": "<ul><li><strong>Fundazionalismoa</strong>: badira frogarik behar ez duten egiak, ebidenteak direlako. Descartesentzat, «pentsatzen dut, beraz banaiz»; Aristotelesentzat, lehen printzipioak, kontraesanik ezaren printzipioa kasu.</li><li><strong>Koherentismoa</strong>: sinesmenek ez dute kate bat osatzen, sare bat baizik, eta elkarri eusten diote, arku bateko harriek bezala.</li><li><strong>Falibilismoa</strong> (Popper, Albert): ez dago azken oinarririk. Arrazoiak onartzen ditugu kritikei eusten dieten bitartean, oker egon gaitezkeela jakinda.</li></ul>",
  "pensar": "Behin eta berriz «eta zergatik?» galdetzen duen haur batek edonoren pazientzia agortzen du. Hiru irtenbideetatik zein erabiltzen dute helduek gehienetan hura gelditzeko?"
 },
 {
  "id": "tortugas",
  "grupo": "regreso",
  "titulo": "Dortokak behera arte",
  "origen": "John Lockek, <em>Ensayo sobre el entendimiento humano</em> lanean (1690, II. liburua, 23. kap.), elefantearen eta dortokaren bertsioa kontatzen du. Dortoka infinituena hainbat zientzialariri egozten zaien pasadizo bat da; Stephen Hawkingek <em>Historia del tiempo</em> (1988) hasteko erabiltzen du.",
  "enunciado": "Jakintsu batek azaltzen du Lurra elefante baten gainean dagoela, eta elefantea dortoka baten gainean. —Eta dortoka, zeren gainean dago? —Beste dortoka baten gainean. —Eta hori? —Alferrik da, gazte: dortokak dira behera arte.",
  "problema": "Euskarri bakoitzak beste euskarri bat behar du. «Dortokak behera arte» erantzunak ez dio galderari erantzuten: betiko atzeratzen du. Ezerk ez badio eusten azken dortokari, ez dagoelako, zerk eusten dio multzoari?",
  "salidas": "<ul><li>Lockek <strong>substantzia</strong>ren ideiaz trufatzeko erabiltzen du: esaten dugu gauzen kualitateak «zerbaiten» gainean daudela, baina ez dakigu zer den zerbait hori, jakintsuak bere dortokarekin bezala.</li><li>Fisika modernoak galdera aldatzen du: Lurra ez dago ezeren gainean, «behera» ez baita norabide absolutua; orbitan dago, Eguzkiaren inguruan etengabe erortzen.</li><li>Azaltzen duen atzerakada baten eta azalpena <strong>atzeratu</strong> besterik egiten ez duen baten arteko aldea erakusten du; lehenak <strong>azaldu</strong> egiten du.</li></ul>",
  "pensar": "Gauza bera al da dortoken kate infinitu bat eta arbasoen kate infinitu bat? Zergatik iruditzen zaigu bata absurdoa eta bestea ez hainbeste?"
 },
 {
  "id": "primermotor",
  "grupo": "regreso",
  "titulo": "Lehen kausa: absolutu batean gelditzen den atzerakada",
  "origen": "Aristoteles, <em>Física</em> (VIII. liburua) eta <em>Metafísica</em> (XII. liburua); Tomas Akinokoa, <em>Suma teológica</em> laneko «bost bideak» (I, 2. galdera, 3. artikulua).",
  "enunciado": "Mugitzen den guztia beste batek mugitzen du. Beste hori, aldi berean, beste batek mugitzen du. Baina ezin da horrela jarraitu infinituraino, orduan ez bailitzateke lehen eragilerik izango eta ezer ez litzateke mugituko. Beraz, badago ezerk mugitzen ez duen lehen eragile bat, «eta hori da guztiek Jainkotzat ulertzen dutena».",
  "problema": "Atzerakada eteteko <strong>absolutu</strong> bat jartzen da: gainerakoa azaltzen duen baina azalpenik behar ez duen zerbait. Eragozpena berehalakoa da: dena kausa bat badu, nork eragin zuen lehen kausa? Eta zerbait kausarik gabe egon badaiteke, zergatik ez mundua bera?",
  "salidas": "<ul><li><strong>Tomasek</strong> bi kate bereizten ditu. Aita-semeen serie infinitu bat ez zaio ezinezkoa iruditzen. Ezinezkoa da katebegi bakoitzak <em>orain</em> aurrekoari esker jarduten duen katea, harria mugitzen duen makila mugitzen duen eskua bezala: lehenengoa gabe, ez litzateke bat ere mugituko.</li><li><strong>Spinozak</strong> absolutu horri <em>bere buruaren kausa</em> deitzen dio: bere izaerak existitzea barne hartzen duena.</li><li><strong>Kant</strong> (<em>Crítica de la razón pura</em>, 1781): arrazoiak beti bilatzen du baldintzatuta ez dagoen baldintza bat, eta horregatik iristen da absolutu batera. Baina ezin dugu jakin existitzen den: galdera esperientzia posible ororen mugetatik haratago doa.</li><li><strong>Russellek</strong>, Coplestonekin irratian izandako eztabaida batean (1948), baztertu egiten du: «unibertsoa hor dago, besterik gabe, eta kitto».</li></ul>",
  "pensar": "Atzerakada bat «azalpenik behar ez duen» zerbaitean gelditzea, azaltzea al da ala galdetzeari uztea? Gauza bera egiten al du «hala delako» erantzuten duen haur batek?"
 },
 {
  "id": "carroll",
  "grupo": "regreso",
  "titulo": "Dortokak Akilesi esan ziona",
  "origen": "Lewis Carroll, <em>Alizia herrialde miresgarrian</em> liburuaren egilea eta logika irakaslea, <em>Mind</em> aldizkarian (1895).",
  "enunciado": "Akilesek arrazoibide bat erakusten dio dortokari: «Euria egiten badu, lurra bustitzen da. Euria egiten du. Beraz, lurra bustitzen da». Dortokak bi premisak onartzen ditu, baina ez ondorioa, araua ere idazten den arte: «Egia bada euria egiten badu lurra bustitzen dela, eta egia bada euria egiten duela, orduan lurra bustitzen da». Akilesek gehitu egiten du. Dortokak beste arau bat eskatzen du orduan, esango duena hiru horiekin ondorioa ateratzen dela. Eta horrela beti.",
  "problema": "Ondorio bat ateratzeko arau bakoitza premisa gehiago gisa gehitu behar bada, beste arau bat beharko da premisa hori erabiltzeko, eta beste bat… Ez genuke inoiz ezer ondorioztatuko, ezta modus ponens-arekin ere, arrazoibiderik errazena baita.",
  "salidas": "<ul><li>Inferentzia-arau bat ez da premisa bat gehiago: premisekin <strong>egiten</strong> dena da. Arrazoitzen jakitea egiten jakitea da, ez esaldi bat gehiago idatzita edukitzea.</li><li><em>(p ∧ (p → q)) → q</em> formula tautologia bat da, egiazko taulako errenkada guztietan egiazkoa. Baina egiazkoa izatea ez da nahikoa <em>q</em> ateratzeko: erabili egin behar da.</li><li>Wittgensteinek antzeko zerbaitera itzultzen du: arau bati jarraitzea ezin da beti hura interpretatzen duen beste arau baten mende egon; uneren batean, jardun egiten dugu, besterik gabe.</li></ul>",
  "pensar": "Zer erantzungo zenioke dortokari arauak eskatzeari utz diezaion?"
 },
 {
  "id": "tercerhombre",
  "grupo": "regreso",
  "titulo": "Hirugarren gizona",
  "origen": "Platonek bere buruari planteatzen dio <em>Parménides</em> lanean (132a); izena Aristotelesena da (<em>Metafísica</em>, I. liburua).",
  "enunciado": "Sokrates, Platon eta Fedon gizakiak dira, guztiek Gizakiaren Ideian parte hartzen dutelako. Baina Gizakiaren Ideiak eta gizaki zehatzek zerbaitetan antza dute: guztiak dira «gizaki». Antzekotasun hori azaltzeko beste Ideia bat beharko litzateke haien gainetik: «hirugarren gizaki» bat. Eta hirugarren gizaki horrek aurrekoen antza izango luke, eta laugarren Ideia bat beharko luke…",
  "problema": "Ideiak sartzen dira azaltzeko zergatik duten gauza askok zerbait komunean. Baina Ideiak gauzen antza badu, bera ere gauza horietako bat gehiago bihurtzen da, eta beste Ideia bat behar da. Gauza mota bakoitzeko Ideia bat izan beharrean, infinitu egongo lirateke.",
  "salidas": "<ul><li>Ideia ez da ale bat gehiago, beste gizakien ondoan jarritako gizaki perfektu bat bezala. Ez <em>du</em> gizatasuna, gizatasuna <em>da</em>, eta horregatik ez da gizakiekin maila berean konparatzen.</li><li><strong>Aristotelesek</strong> argudioa Platonen aurka erabiltzen du: formak ez daude bereizita, gauzetan bertan baizik.</li><li>Absolutu batean gelditzen ez den atzerakada da: proposatutako absolutuak (Ideiak) berriz behar du azalpena, azaltzen duen horren plano berean jartzen dugun bezain laster.</li></ul>",
  "pensar": "Zure argazki batek zure antza al du zuk beste pertsona batena duzun modu berean?"
 },
 {
  "id": "custodes",
  "grupo": "regreso",
  "titulo": "Nork zaintzen du zaintzailea?",
  "origen": "Juvenal, <em>Sátiras</em> (VI, 347-348): <em>quis custodiet ipsos custodes?</em> Platonek <em>República</em> lanean planteatzen du jada (III, 403e).",
  "enunciado": "Gehiegikeriak saihesteko zaintzaile bat jartzen dugu. Baina zaintzaileak ere gehiegikeriak egin ditzake; beraz, norbait behar da hura zaintzeko. Eta nork zaintzen du hori?",
  "problema": "Atzerakada politikoa da. Bi modu baino ez dirudi daudela amaitzeko: <strong>absolutu</strong> batean gelditzea, inork zaintzen ez duen azken botere batean, edo <strong>begizta</strong> batean ixtea, non zaintzaileek elkar zaintzen duten.",
  "salidas": "<ul><li><strong>Absolutua</strong>: Hobbesek, <em>Leviatán</em> lanean (1651), berak emandako legeen mende ez dagoen subirano bat jartzen du. Horrela amaitzen da katea, baina subiranoak gehiegikeriak egiten baditu, inork ezin du gelditu.</li><li><strong>Begizta</strong>: Montesquieuk, <em>Del espíritu de las leyes</em> lanean (1748), proposatzen du «botereak boterea geldi dezala». Legegileak, betearazleak eta judizialak elkar kontrolatzen badute, ez da azken zaintzailerik behar. Zirkulua da, baina ez biziotsua: inork ez du bere burua justifikatzen, bakoitzak besteak mugatzen ditu.</li><li>Platonek hezkuntzarekin erantzuten zuen: ondo hezitako zaintzaileak ez du zaintzailerik behar. Barregarria litzateke, dio, zaintzaile batek beste zaintzaile bat behar izatea.</li></ul>",
  "pensar": "Azterketa batean, nork zuzentzen du zuzentzen duena? Zein mekanismok (berrikuspena, erreklamazioa, ikuskapena) osatzen dute begizta, eta zeinek amaitzen dute azken hitz batean?"
 },
 {
  "id": "huevo",
  "grupo": "regreso",
  "titulo": "Zer izan zen lehenago, arrautza ala oiloa?",
  "origen": "Plutarkok eztabaidatzen du galdera <em>Charlas de sobremesa</em> lanean (II. liburua, 3), I-II. mendean.",
  "enunciado": "Oilo oro arrautza batetik ateratzen da, eta oilo-arrautza oro oilo batek erruten du. Beraz, edozein oiloren aurretik arrautza bat egon zen, eta arrautza horren aurretik, oilo bat… Zein izan zen lehena?",
  "problema": "Begizta da: osagai bakoitza bestearen mende dago. Atzera egiten badugu, edo bueltaka ibiliko gara amaierarik gabe (atzerakada), edo bi arauetako bat hautsi beharko dugu: edo arrautza batetik atera ez zen oilo bat egon zen, edo oilo batek erruna ez zuen arrautza bat.",
  "salidas": "<ul><li><strong>Aristotelesek</strong> oiloa erantzuten du: ekintzan dagoena (oiloa) ahalmenean baino ez dagoena (arrautza, oilo bihur daitekeena) baino lehenagokoa da.</li><li><strong>Eboluzioak</strong> begizta hausten du: espezieak pixkanaka aldatzen dira. Uneren batean, ia oiloa zen hegazti batek arrautza bat errun zuen, eta handik atera zena oiloa deitzen dugu dagoeneko. Beraz, arrautza izan zen lehenago, baina guztiz oiloa ez zen zerbaitek errun zuen. Begizta, egiaz, <strong>espiral</strong> bat zen: itzuli bakoitza aurrekoa ez bezalakoa da pixka bat.</li><li>Lausotasun kasu bat ere bada, sorites-a bezala: «oiloa» hitzak ez du muga zehatzik.</li></ul>",
  "pensar": "Bilatu mota honetako beste begizta batzuk: esperientzia eta lana (ez zaituzte kontratatzen esperientziarik gabe, eta ez duzu esperientziarik lanik gabe). Nola hausten dira bizitza errealean?"
 },
 {
  "id": "diccionario",
  "grupo": "regreso",
  "titulo": "Hiztegiaren begizta",
  "origen": "Hizkuntzaren filosofiako arazo klasikoa; erabiltzen du, adibidez, Wittgensteinek <em>Investigaciones filosóficas</em> lanean (1953).",
  "enunciado": "Hiztegi batean «handi» bilatzen duzu, eta honelako zerbait dio: «ohikoa baino tamaina handiagokoa». «Tamaina» bilatzen duzu: «gauza baten magnitudea». «Magnitude» bilatzen duzu: «tamaina edo handitasuna». Hasierara itzuli zara.",
  "problema": "Hitz bakoitza beste hitz batzuekin definitzen da. Hiztegiak hitz kopuru mugatua duenez, lehenago edo geroago definizioek begiztak osatzen dituzte. Orduan, nola iristen da horietako edozein zerbait esan nahi izatera, bakoitzak beste batzuetara bidaltzen badu?",
  "salidas": "<ul><li>Begiztak saihetsezinak dira, baina ez dute hiztegia alferrikako bihurtzen: hitz <strong>batzuk</strong> ezagutzen dituenarentzat baino ez da baliagarria.</li><li>Lehen hitzak ez dira definizioekin ikasten, <strong>seinalatuz</strong> eta erabiliz baizik: «hau gorria da», «hori handia da». Definizio ostentsiboa da, atzerakada hizkuntzatik kanpo eteten duena.</li><li>Wittgensteinek gehitzen du seinalatzeko keinua ere ez dela nahikoa berez: jakin behar da zer seinalatzen den (kolorea?, forma?, kopurua?). Esanahia erabileran dago, bizimodu baten barruan.</li></ul>",
  "pensar": "Nola azalduko zenioke zer den «gorria» koloreak ikusten ez dituen norbaiti? Eta zer den «ondoren»?"
 },
 {
  "id": "yablo",
  "grupo": "regreso",
  "titulo": "Yabloren paradoxa: autoerreferentziarik gabeko gezurtia",
  "origen": "Stephen Yablo, <em>Analysis</em> aldizkarian (1993).",
  "enunciado": "Imajinatu esaldien zerrenda infinitu bat. 1. esaldiak dio: «Nire ondoren datozen esaldi guztiak faltsuak dira». 2. esaldiak gauza bera dio, eta 3.ak, eta horrela amaierarik gabe. Bat ere ez da bere buruaz ari.",
  "problema": "Esaldiren bat egiazkoa balitz, hurrengo guztiak faltsuak lirateke. Baina hurrengoa faltsua bada, haren ondoren datozenetako bat egiazkoa da, eta horrek aurrekoa kontraesaten du. Beraz, guztiak dira faltsuak. Baina 1. esaldiaren ondorengo guztiak faltsuak badira, 1. esaldia egiazkoa da. Kontraesana, eta bere buruaz ari den esaldirik gabe.",
  "salidas": "<ul><li>Bazirudien gezurtia konpontzen zela esaldi batek bere buruaz hitz egitea debekatuz. Yablok erakusten du ez dela nahikoa: <strong>atzerakada infinitu</strong> batek <strong>begizta</strong> batek bezalako paradoxa sortzen du.</li><li>Logikari batzuek (Graham Priest) erantzuten dute autoerreferentzia ezkutatu bat dagoela: zerrenda osoa ulertzeko zerrendari egin behar zaio erreferentzia, eta zerrendak esaldi bakoitza barne hartzen du.</li></ul>",
  "pensar": "Zer dute komunean begizta batek (bere buruaz ari den esaldi batek) eta kate infinitu batek (beti hurrengoez ari diren esaldiek)?"
 },
 {
  "id": "distintos",
  "grupo": "colectivo",
  "titulo": "«Denok desberdinak izan nahi badugu, orduan denok berdinak gara»",
  "origen": "Modei buruz asko errepikatzen den ideia. Georg Simmelek aztertu zuen <em>Filosofía de la moda</em> lanean (1905); Monty Pythonek zinemara eraman zuen <em>La vida de Brian</em> filmean (1979), non jendetza batek koruan erantzuten duen denak direla norbanakoak.",
  "enunciado": "Denok izan nahi dugu besteengandik desberdinak. Baina denok gauza bera nahi badugu, horretan berdinak gara. Eta, izan ere, modatik ihes egiten dutenek denek berdin janzten dute azkenean.",
  "problema": "<ul><li><strong>Hitz-joko bat dago</strong>. «Berdinak» hitzak zentzua aldatzen du premisatik ondoriora. Denok <em>nahi bera</em> izateak (desberdinak izatea) ez du esan nahi <em>ezaugarri berak</em> ditugunik. Anbiguotasunaren falazia da: maila bat (nahi duguna) beste batekin (garena) nahasten da.</li><li><strong>Baina badago zerbait egiazkoa</strong>. Desberdina izatea erlazio bat da: beti zerbait<em>engandik</em> da desberdina. Denok gauza bera hartzen badugu erreferentziatzat (gehiengoak egiten duena) eta aldi berean horretatik urruntzen bagara, norabide berean elkarrekin joaten gara azkenean. Jonathan Touboul matematikariak <strong>hipster efektua</strong> deitu zion (2014): antikonformistek elkarren antza hartzen dute azkenean.</li></ul>",
  "salidas": "<ul><li><strong>Simmel</strong>: modak kontrako bi nahi batzen ditu. Imitatu nahi dugu, talde batekoak izateko, eta bereizi, hartan ez galtzeko. Moda bakoitza bereizteko jaiotzen da eta denek imitatzen dutenean hiltzen da.</li><li><strong>Logikoki ez dago kontraesanik</strong>: posible da denok denengandik desberdinak izatea aldi berean. Ezinezkoa beste gauza bat da: denok batez bestekoaren gainetik egotea, edo denok «gehiengoa baino originalagoak» izatea.</li><li>2019an aldizkari batek hipster efektuari buruzko artikulu bat ilustratu zuen bizardun eta txanodun gizon baten argazkiarekin. Irakurle batek haserre idatzi zuen, haren argazkia baimenik gabe erabili zutelako. Ez zen bera: haren antz handia zuen beste gizon bat zen.</li></ul>",
  "pensar": "Izan al daiteke mundu guztia originala aldi berean? Eta egon al daiteke mundu guztia batez bestekoaren gainetik? Zergatik da desberdina erantzuna?"
 },
 {
  "id": "concierto",
  "grupo": "colectivo",
  "titulo": "Zutik kontzertuan",
  "origen": "Ekonomiako eskuliburuetako adibide klasikoa, <strong>konposizioaren falazia</strong> azaltzeko. Izena Aristotelesengandik dator (<em>Refutaciones sofísticas</em>), nahiz eta hark zertxobait bestela ulertzen zuen.",
  "enunciado": "Kontzertu batean, pertsona bat zutik jartzen bada, hobeto ikusten du. Beraz, publiko osoa zutik jartzen bada, denek hobeto ikusiko dute.",
  "problema": "Premisa egiazkoa da eta ondorioa faltsua: denak altxatzen badira, denek lehen bezala ikusten dute, baina erosotasun gutxiagorekin. Bakoitzarentzat bere aldetik balio duenak ez du zertan denentzat batera balio, bakoitzaren abantaila besteek hori <em>ez</em> egitearen mende baitzegoen.",
  "salidas": "<ul><li><strong>Konposizioaren falaziak</strong> zatietatik osotasunera igarotzen da («pieza bakoitza arina da, beraz makina arina da»). <strong>Zatiketarenak</strong> alderantzizkoa egiten du («taldea onena da, beraz jokalari bakoitza onena da»).</li><li>Zatietatik osotasunera igarotzea ez da beti falazia: adreilu bakoitza gorria bada, horma gorria da. Begiratu behar da ea propietatea besteekiko erlazioaren mende dagoen.</li></ul>",
  "pensar": "Gauza bera gertatzen al da gainerakoek baino nota hobea ateratzeko gehiago ikastearekin, edo ilarara lehenago iristearekin?"
 },
 {
  "id": "ahorro",
  "grupo": "colectivo",
  "titulo": "Aurrezpenaren paradoxa",
  "origen": "John Maynard Keynes, <em>The General Theory of Employment, Interest and Money</em> (1936), Mandeville eta haren <em>The Fable of the Bees</em> (1714) gogora ekartzen dituena.",
  "enunciado": "Aurreztea ona da familia batentzat: irabazten duena baino gutxiago gastatzen badu, dirua izango du behar duenerako. Beraz, krisi batean familia guztiek gehiago aurrezten badute, herrialdea hobeto egongo da.",
  "problema": "Denek aldi berean gutxiago gastatzen badute, dendek eta enpresek gutxiago saltzen dute, langileak kaleratzen dituzte, eta familia horiek gutxiago irabazten dute eta gutxiago aurrez dezakete. Denen aurrezteko ahaleginak aurrezpen gutxiagorekin eta langabezia gehiagorekin amai dezake. Batentzat zuhurra dena kaltegarria da guztientzat.",
  "salidas": "<ul><li>Konposizioaren falaziaren beste kasu bat da: baten gastua beste baten diru-sarrera da, eta hori ez da ikusten familia bakar bati begiratzen bazaio.</li><li>Keynesek ondorioztatzen du krisi batean Estatuak gastatu behar duela familiek ezin dutenean. Beste ekonomialari batzuek eztabaidatzen dute noiz eta zenbat balio duen ideia horrek.</li></ul>",
  "pensar": "Kantek galdetzen du zer gertatuko litzatekeen denek maxima beraren arabera jardungo balute. Proba horrek etikatik kanpo ere balio al du, hemen bezala?"
 },
 {
  "id": "comunes",
  "grupo": "colectivo",
  "titulo": "Komunalen tragedia",
  "origen": "William Forster Lloyd (1833); Garrett Hardinek ospetsu egin zuen <em>Science</em> aldizkarian (1968).",
  "enunciado": "Larre bat herriko artzain guztiena da. Artzain bakoitzari ardi bat gehiago sartzea komeni zaio: onura osoa beretzat da, eta larreari egindako kaltea guztien artean banatzen da. Denek berdin arrazoitzen dutenez, larrea agortu egiten da eta inork ezin du erabili.",
  "problema": "Erabaki bakoitza arrazionala da hartzen duenarentzat, eta emaitza txarra da guztientzat, baita bakoitzarentzat ere. Ez dago akatsik artzain bakoitzaren kalkuluan; arazoa baturan dago.",
  "salidas": "<ul><li><strong>Hardinek</strong> bi irtenbide proposatzen zituen: larrea jabetza pribatu gisa banatzea edo Estatuak kontrolatzea.</li><li><strong>Elinor Ostromek</strong> (Ekonomiako Nobel saria 2009an) mendeak daramatzaten herriak aztertu zituen larreak, basoak edo ureztatzeak agortu gabe partekatzen. Haiek berek jarritako arauekin, elkarren arteko zaintzarekin eta zigor mailakatuekin lortzen dute. Adibidez, Valentziako Uren Auzitegia.</li><li>Klima, arrain-bankuak edo liburutegi bateko isiltasuna ere «komunalak» dira.</li></ul>",
  "pensar": "Zer «komunal» daude zure gelan edo zure institutuan? Zer arauk babesten dituzte?"
 },
 {
  "id": "moore",
  "grupo": "razonar",
  "titulo": "Mooreren paradoxa: «Euria ari du, baina ez dut sinesten»",
  "origen": "G. E. Moorek planteatu zuen XX. mendeko 40ko hamarkadan; Wittgensteinek eman zion izena.",
  "enunciado": "«Euria ari du, baina ez dut sinesten euria ari duenik.»",
  "problema": "Esaldia ez da kontraesana: egia izan daiteke euria egitea eta nik ez sinestea (leihorik gabeko soto batean nago). Beste batek esanda («euria ari du, baina hark ez du sinesten») guztiz normala da. Eta, hala ere, nik esanda absurdoa dirudi. Zergatik, kontraesankorra ez bada?",
  "salidas": "<ul><li>Zerbait <strong>baieztatzean</strong>, sinesten dudala adierazten dut. Beraz, «euria ari du» esatean, inplizituki «euria ari duela uste dut» esaten ari naiz, eta gero ukatu egiten dut. Kontraesana ez dago esaldiak dioenean, esaldiaren eta hura esateko ekintzaren artean baizik.</li><li>Wittgensteinek hemen ikusi zuen «uste dut…» esaldiak ez duela beti nire egoera bat deskribatzen: askotan baieztatzeko modu zuhur bat da.</li></ul>",
  "pensar": "Eta «ez dut uste euria ari duenik, baina agian oker nago» esaldia? Absurdoa al da hori ere?"
 },
 {
  "id": "prefacio",
  "grupo": "razonar",
  "titulo": "Hitzaurrearen paradoxa",
  "origen": "David Makinson, <em>Analysis</em> aldizkarian (1965).",
  "enunciado": "Egile batek arretaz berrikusi du bere liburua, eta idatzi dituen esaldi guztiak sinesten ditu. Baina hitzaurrean jartzen du: «Ziur liburu honetan akatsen bat dagoela, eta barkamena eskatzen dut». Hori ere sinesten du, liburu luze guztiek baitituzte akatsak.",
  "problema": "Sinesten du 1. esaldia egiazkoa dela, 2.a egiazkoa dela… eta azkena egiazkoa dela. Eta aldi berean sinesten du batenbat faltsua dela. Haren sinesmenak, elkarrekin, ezin dira denak egiazkoak izan. Eta, hala ere, badirudi arrazoizkoa dela denak sinestea: arrazoizkoagoa bere liburua perfektua dela pentsatzea baino.",
  "salidas": "<ul><li>Agian bateraezinak diren gauzak sinestea ez da beti irrazionala, sinesmen bakar batean biltzen ez diren bitartean («nire liburu osoa egia da»).</li><li>Beste irtenbide bat: ez dugu esaldi bakoitza % 100ean sinesten, konfiantza-maila batekin baizik. Esaldi bakoitza % 99an probablea bada, mila esaldiko liburu batek ia ziur du faltsuren bat. Horrela ez dago kontraesanik.</li></ul>",
  "pensar": "Uste duzu zure iritzi guztiak egiazkoak direla? Eta uste duzu horietakoren bat faltsua dela? Kontraesana iruditzen zaizu?"
 },
 {
  "id": "infelices",
  "grupo": "ejercicios",
  "titulo": "«Zorigaiztoko guztien artean…»",
  "origen": "Klasean ariketa gisa proposatutako esaldia.",
  "enunciado": "«Zorigaiztoko guztien artean, nahi duten guztia lortzen dutenak ez dira zatirik txarrena eramaten dutenak.»",
  "problema": "Pertsonez ari gara; beraz, hiru propietate hartzen ditugu: <em>p</em> = «zorigaiztokoa da», <em>q</em> = «nahi duen guztia lortzen du», <em>r</em> = «zatirik txarrena eramaten du». Esaldiak dio: <strong>norbait zorigaiztokoa bada eta nahi duen guztia lortzen badu, orduan ez du zatirik txarrena eramaten</strong>: <em>(p ∧ q) → ¬r</em>. Ezezko unibertsala da (E motakoa): «Dena lortzen duen zorigaiztoko bat ere ez da zatirik txarrena eramaten dutenetakoa». Haren kontrako alderantzizkoak gauza bera dio beste aldetik: zorigaiztoko batek zatirik txarrena eramaten badu, orduan ez du nahi duen guztia lortu: <em>(p ∧ r) → ¬q</em>.",
  "salidas": "<ul><li><strong>Aldez aurretik onartzen duena</strong>: badaudela nahi duten guztia lortzen duten zorigaiztokoak. Ez balego, ez luke zentzurik «zorigaiztoko guztien artean» seinalatzeak. Nahi den guztia lortzea ez da nahikoa zoriontsu izateko.</li><li><strong>Iradokitzen duena, baina esaten ez duena</strong>: zatirik txarrena nahi dutena lortzen ez dutenek eramaten dutela. Iradokizun bat da (ulertzera ematen dena), ez ondorio logiko bat: esaldiak talde bat baino ez du baztertzen, ez du esaten nork eramaten duen zatirik txarrena.</li><li><strong>Esaten ez duena</strong>: dena lortzen dutenak zoriontsuak direnik (alderantziz, zorigaiztokoen artean zenbatzen ditu), ezta gutxi sufritzen dutenik ere: gehien sufritzen dutenak ez direla soilik.</li><li><strong>Lotutako ideiak</strong>: Schopenhauerren ustez (<em>Mundua borondate eta irudikapen gisa</em>, 57. §), bizitza pendulu bat bezala dabil, asebete gabeko desioaren minaren eta betetako desioaren asperduraren artean. Oscar Wildek, <em>Lady Windermereren haizemailea</em> lanean, pertsonaia bati esanarazten dio bi tragedia daudela: desio dena ez lortzea eta lortzea.</li></ul>",
  "pensar": "Egin ezazu (p ∧ q) → ¬r-ren egia-taula: zein errenkada bakarrean izango litzateke faltsua esaldia? Deskriba ezazu esaldia faltsu bihurtuko lukeen pertsona.",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 135,
     "cy": 122,
     "r": 105,
     "cls": "lg-e2",
     "etq": "Zorigaiztokoak (p)",
     "ex": 120,
     "ey": 60
    },
    {
     "cx": 98,
     "cy": 142,
     "r": 54,
     "cls": "lg-e4",
     "etq": "Zatirik txarrena (r)",
     "ex": 98,
     "ey": 136
    },
    {
     "cx": 250,
     "cy": 112,
     "r": 70,
     "cls": "lg-e1",
     "etq": "Dena lortzen dute (q)",
     "ex": 268,
     "ey": 20
    }
   ],
   "cruces": [
    [
     210,
     116
    ],
    [
     98,
     166
    ]
   ],
   "dudas": [
    [
     290,
     120
    ]
   ],
   "lectura": "<ul><li>Zirkulu handia <strong>zorigaiztokoak (p)</strong> dira. Esaldiak «zorigaiztoko guztien artean» dio; beraz, <strong>zatirik txarrena (r)</strong> eramaten dutenak barruan marrazten dira: zorigaiztokoen arteko zatirik txarrena da.</li><li><strong>Dena lortzen dutenen (q)</strong> zirkulua zorigaiztokoenarekin gurutzatzen da, eta gurutzeko ✕-ak esaldiak aldez aurretik onartzen duena markatzen du: badaude dena lortzen duten zorigaiztokoak.</li><li><strong>q</strong> eta <strong>r</strong> zirkuluek ez dute elkar ukitzen: ezezko unibertsala da, «dena lortzen duen zorigaiztoko bat ere ez da zatirik txarrena eramaten duena», <em>(p ∧ q) → ¬r</em>.</li><li><strong>r</strong>-ren barruko ✕-a: esaldiak aldez aurretik onartzen du norbaitek zatirik txarrena eramaten duela. <strong>q</strong>-tik kanpo dagoenez, norbait horrek ez du dena lortu: kontrako alderantzizkoa da, <em>(p ∧ r) → ¬q</em>.</li><li><strong>?</strong> ikurrak esaldiak esaten ez duena markatzen du: ea badagoen dena lortzen duenik zorigaiztokoa izan gabe. Eremu hori hutsik egon daiteke edo ez.</li><li>Esaldiak iradokitzen soilik duena, alegia, dena lortzen ez duten guztiek zatirik txarrena eramaten dutela, <strong>ez dago marrazkian</strong>: <strong>p</strong>-ren barruan geratzen da <strong>q</strong>-tik eta <strong>r</strong>-tik kanpoko eremu bat, ez dena lortzen duten ez zatirik txarrena eramaten duten zorigaiztokoena. Eta marrazkiak erakusten du non dagoen bakoitza, ez zergatik: zatirik txarrena nahi dena ez lortzetik <em>datorrela</em> ere ezin da marraztu.</li></ul>",
   "contingencia": "<p><em>(p ∧ q) → ¬r</em>-ren egia-taulak zortzi errenkada ditu eta esaldia bakar batean da faltsua: <strong>kontingentea</strong> da. Diagraman, errenkada bakoitza <strong>eremu</strong> bat da, pertsona mota bat, zirkulu bakoitzaren barruan edo kanpoan dagoen arabera. Zortzi errenkadak zortzi eremu posibleak dira.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(p ∧ q) → ¬r</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Dena lortzen duen eta zatirik txarrena eramaten duen zorigaiztokoa</td><td><strong>Ez dago</strong>: q eta r ez dira ukitzen p-ren barruan. Esaldiak debekatzen duen eremua da.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Dena lortzen duen eta zatirik txarrena eramaten ez duen zorigaiztokoa</td><td>p-ren eta q-ren gurutzea, ✕-arekin: norbait badago.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Dena lortzen ez duen eta zatirik txarrena eramaten duen zorigaiztokoa</td><td>r zirkulua, ✕-arekin: norbait badago.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez dena lortzen duen ez zatirik txarrena eramaten duen zorigaiztokoa</td><td>p-ren gainerakoa.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ez da zorigaiztokoa, dena lortzen du eta zatirik txarrena eramaten du</td><td>Ez dago, baina ez formularengatik: r p-ren barruan marrazten da «zorigaiztoko guztien artean» irakurketagatik.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez da zorigaiztokoa eta dena lortzen du</td><td>q-ren p-tik kanpoko zatia, ?-rekin: ez dakigu inor dagoen.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ez da zorigaiztokoa, ez du dena lortzen eta zatirik txarrena eramaten du</td><td>Ez dago, «zorigaiztoko guztien artean» irakurketa beragatik.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez zorigaiztokoa, ez dena lortzen du, ez zatirik txarrena eramaten du</td><td>Zirkulu guztietatik kanpo.</td></tr></tbody></table></div><ul><li><strong>Errenkada faltsua = falta den eremua.</strong> Esaldiak baieztatzen duena marrazteko, faltsu bihurtuko lukeen konbinazio bakarra kentzen da: q eta r zirkuluak bereizi egiten dira p-ren barruan. Errenkada egiazkoak esaldiak posible uzten dituen eremuak dira.</li><li><strong>Horregatik da kontingentea</strong>: eremu batzuk kentzen ditu eta beste batzuk uzten. <strong>Tautologia</strong> bat errenkada guztietan da egiazkoa; beraz, ez luke eremurik kenduko: edozein marrazkik balioko luke eta ez luke ezer esango munduari buruz (hori dio Wittgensteinek tautologiez <em>Tractatus</em>ean). <strong>Kontraesan</strong> bat errenkada guztietan da faltsua; beraz, denak kenduko lituzke, baita zirkuluetatik kanpokoa ere: ezingo litzateke inor marraztu. Esaldi kontingenteak informazioa ematen du bien artean dagoelako: kasu bat baztertzen du eta besteak irekita uzten ditu.</li><li><strong>Tranpa</strong>: marrazkian hiru eremu falta dira, baina formulak bakarra kentzen du. Beste biak (r p-tik kanpo) «zorigaiztoko guztien artean» irakurketak kentzen ditu, eta hori ez dago <em>(p ∧ q) → ¬r</em>-n. Formulan sartu nahi bagenu, <em>r → p</em> gehitu beharko litzateke.</li><li><strong>Diagramak taulak baino gehiago dio</strong>: taulak esaten du zein konbinazio diren posible, ez zein dauden. ✕-ak (norbait badago eremu horretan) esaldiak aldez aurretik onartzen duena dira, eta hori ezin da enuntziatuen logikan adierazi: «badago … bat» esan behar da, eta hori predikatuen logikari edo silogismoari dagokio.</li></ul>"
  }
 },
 {
  "id": "apenas",
  "grupo": "ejercicios",
  "titulo": "«Ia ez dira gutxiago zorigaiztoko…»",
  "origen": "Klasean ariketa gisa proposatutako esaldia, aurrekoaren jarraian.",
  "enunciado": "«Nahi duten guztia lortzen dutenak ia ez dira gutxi edo ezer lortzen ez dutenak baino gutxiago zorigaiztoko.»",
  "problema": "Esaldi honek ez du jada sailkatzen (zorigaiztoko izan ala ez), baizik eta <strong>mailak konparatzen</strong> ditu. Dei diezaiegun <em>q</em> nahi duten guztia lortzen dutenei eta <em>s</em> gutxi edo ezer lortzen ez dutenei. Esaldiak bi gauza baieztatzen ditu aldi berean: <em>q</em> <em>s</em> baino gutxiago zorigaiztokoa dela («gutxiago zorigaiztoko») eta aldea txikia dela («ia ez»). Konjuntzio bat da: bi zatietako edozeinek huts egiten badu, esaldia faltsua da. Enuntziatuen logikan, hori guztia letra bakar batean geratzen da, «A B baino gutxiago zorigaiztokoa da» ez baitago bereiz egiazkoak edo faltsuak diren zatietan banatzerik: bi terminoren arteko erlazio bat behar da, <em>M(x, y)</em>, «x y baino gutxiago zorigaiztokoa da», eta hori predikatuen logikari dagokio. Horregatik, hemen ez dute balio ez p, q eta r-rekin egindako egia-taulak ez Eulerren zirkuluek, barruan eta kanpoan nor dagoen soilik esaten baitute: eskala bat behar da.",
  "salidas": "<ul><li><strong>Esaten duena</strong>: dena lortzeak zerbait hobetzen du, baina oso gutxi. Kontuz: «ia ez dira gutxiago» esaldiak <strong>baieztatzen du</strong> gutxiago zorigaiztoko direla. Ez du esaten berdin direnik: «ia ez» ez da «ez».</li><li><strong>Aldez aurretik onartzen duena</strong>: badaudela dena lortzen dutenak eta gutxi edo ezer lortzen ez dutenak; inor ez dagoela bi taldeetan aldi berean; eta bi taldeek zorigaiztoko izateko zerbait dutela, bestela ez bailitzateke «gutxiago zorigaiztoko» izateaz hitz egingo.</li><li><strong>Esaten ez duena</strong>: ezer ez asko lortzen dutenei buruz, baina ez dena. Esaldiak muturrak konparatzen ditu eta erdia kanpoan uzten du. Ezin da ondorioztatu talde hori zorigaiztokotasunean erdibidean dagoenik: hiruretako zoriontsuena edo zorigaiztokoena izan liteke.</li><li><strong>Irakurketaren tranpa</strong>: «dena lortzen dutenak gutxi lortzen dutenak baino gutxiago zorigaiztoko dira» bi eratara irakur daiteke: «lehenengoetako bakoitza, bigarrenetako bakoitza baino gutxiago» edo «oro har, batez beste». Lehen irakurketa kontraadibide bakar batekin ezeztatzen da; bigarrena, ez. Taldeei buruzko esaldi orokorrak bigarren eran ulertu ohi dira.</li><li><strong>Aurreko esaldiarekiko lotura</strong>: dena lortzen dutenak gutxi lortzen dutenak baino gutxiago zorigaiztoko badira, ia ez bada ere, ezin dira haiek izan zatirik txarrena eramaten dutenak, beti baitago norbait okerrago. Lehen irakurketarekin, esaldi berriak aurrekoa <strong>inplikatzen</strong> du. Alderantziz, ez: aurrekoak onartzen zuen dena lortzeak zorigaiztokotasuna asko arintzea, eta honek ukatu egiten du.</li></ul>",
  "pensar": "Aldatu «ia ez» «askoz» hitzagatik: esaldiak lehen baino gehiago ala gutxiago esaten du? Eta «ez dira gutxiago zorigaiztoko» esaten baduzu? Hiru bertsioetatik, zein litzateke errazena ezeztatzen?",
  "escala": {
   "vista": "0 0 360 185",
   "eje": [
    15,
    345,
    100
   ],
   "banda": [
    178,
    218
   ],
   "marca": 222,
   "textos": [
    {
     "x": 222,
     "y": 34,
     "align": "middle",
     "t": "Gutxi edo ezer (s)"
    },
    {
     "x": 174,
     "y": 64,
     "align": "end",
     "t": "noraino da «ia ez»?"
    },
    {
     "x": 198,
     "y": 136,
     "align": "middle",
     "t": "q: egiazkoa"
    },
    {
     "x": 92,
     "y": 136,
     "align": "middle",
     "t": "q hemen: faltsua"
    },
    {
     "x": 92,
     "y": 152,
     "align": "middle",
     "t": "(ez da «ia ez»)"
    },
    {
     "x": 290,
     "y": 136,
     "align": "middle",
     "t": "q hemen: faltsua"
    },
    {
     "x": 290,
     "y": 152,
     "align": "middle",
     "t": "(ez dira «gutxiago»)"
    },
    {
     "x": 15,
     "y": 176,
     "align": "start",
     "t": "gutxiago zorigaiztoko"
    },
    {
     "x": 345,
     "y": 176,
     "align": "end",
     "t": "zorigaiztokoago"
    }
   ],
   "lectura": "<ul><li>Lerroa <strong>zorigaiztokotasunaren eskala</strong> da: ezkerrera, gutxiago; eskuinera, gehiago. <strong>s</strong> puntua (gutxi edo ezer lortzen ez dutenak) erreferentzia da.</li><li><strong>Zerrenda berdea</strong> da <strong>q</strong> (dena lortzen dutenak) egon beharko litzatekeen tokia esaldia egiazkoa izan dadin: s-ren ezkerrean («gutxiago zorigaiztoko»), baina oso gertu («ia ez»).</li><li>s-ren eskuinean, esaldia faltsua da, ez bailirateke <em>gutxiago</em> zorigaiztoko izango. Oso ezkerrean ere faltsua da, aldea ez bailitzateke jada <em>ia ez</em> izango.</li><li>Zerrendaren ezkerreko ertza <strong>lerro etena</strong> da: inork ez daki non amaitzen den «ia ez». Soritesaren lausotasuna da: distantzia pixka bat gehiagok ez du ezer aldatzen eta, hala ere, nonbait jada ez da «ia ez».</li></ul>",
   "contTitulo": "Kontingentea: zerrenda estu bat",
   "contingencia": "<p>Lehen esaldia bezala, hau ere <strong>kontingentea</strong> da: egiazkoa edo faltsua izan daiteke mundua nolakoa den arabera. Baina eskalak zerbait gehiago erakusten du: <strong>zenbat arriskatzen duen</strong>.</p><ul><li>Lehen esaldiaren Euler diagraman eremu bat kentzen zen eta gainerako guztiak geratzen ziren. Hemen alderantziz gertatzen da: esaldia zerrenda estu batean bakarrik da egiazkoa, eta eskalaren gainerako guztian faltsua da. Ia posizio posible guztiak baztertzen ditu.</li><li>Esaldi batek zenbat eta gehiago baztertu, orduan eta gehiago esaten du eta errazagoa da ezeztatzea. Tautologia batek ez du ezer baztertzen eta ez du ezer esaten; esaldi honek asko baztertzen du eta asko esaten du. Popperren ideia da: baieztapen batek orduan eta eduki handiagoa du, zenbat eta egoera posible gehiagok faltsu bihurtuko luketen.</li><li>Truke, «ia ez» lausoa da. Muga-kasuetan (argi eta garbi txikia ez eta argi eta garbi handia ez den aldea) ez dago argi esaldia egiazkoa ala faltsua den. Esaldi bat oso arriskatua izan daiteke eta, aldi berean, egiaztatzen zaila.</li><li>Egiaztatzeko, zorigaiztokotasuna neurtu beharko litzateke, eta hori ez da jada logikaren arazo bat. Arazo enpirikoa da (ongizate-inkestak, psikologiako ikerketak) eta kontzeptuala: zer hartzen da zorigaiztokotasuntzat?</li></ul>"
  }
 },
 {
  "id": "tanto",
  "grupo": "ejercicios",
  "titulo": "«Dena lortzen dutenak zein ezer lortzen ez dutenak…»",
  "origen": "Klasean ariketa gisa proposatutako esaldia, aurrekoen jarraian.",
  "enunciado": "«Dena lortzen dutenak zein ezer lortzen ez dutenak zorigaiztokoak dira.»",
  "problema": "Bi baiezko unibertsal (A motakoak) dira, elkartuta: «dena lortzen duen oro zorigaiztokoa da» eta «ezer lortzen ez duen oro zorigaiztokoa da». <em>p</em> = «zorigaiztokoa da», <em>q</em> = «nahi duen guztia lortzen du» eta <em>s</em> = «ez du ezer lortzen» hartuta, <em>(q → p) ∧ (s → p)</em> geratzen da, eta hori <em>(q ∨ s) → p</em>-ren baliokidea da: bi muturretako edozeinetan bazaude, zorigaiztokoa zara. Haren kontrako alderantzizkoak gauza bera dio beste aldetik: <em>¬p → (¬q ∧ ¬s)</em>, zorigaiztokoa ez dena zerbait lortu du, baina ez dena.",
  "salidas": "<ul><li><strong>Esaten duena</strong>: bi muturrek zorigaiztokotasunera daramate. Eta, kontrako alderantzizkoaren arabera, zorigaiztoko ez izan daitezkeen bakarrak erdian daudela: erdibidearen goraipamena dirudi, nahiz eta esaldiak ez duen esaten erdikoak zoriontsuak direnik, soilik erditik kanpo inor ez dela zoriontsua.</li><li><strong>Hizkuntzaren tranpa</strong>: gaztelaniazko «no consiguen nada» esaldiak bi hitz ezezko ditu, baina ez dute elkar ezeztatzen logikako <em>¬¬</em>-k bezala. «No… nada» ezeztapen bakarra da: «ez dute ezer lortzen» esan nahi du, ez «zerbait lortzen dute». Euskaraz ere «ez… ezer» ezeztapen bakarra da. Horregatik da <em>s</em> letra bakarra, barruan ezeztapenik gabe.</li><li><strong>Kontzeptuaren tranpa</strong>: ezer desiratzen ez duenak «nahi duen guztia» lortzen du (ez zaio falta nahi duen ezer) eta, aldi berean, ezer ez lortu dezake. Bi taldeetan aldi berean egon litekeen bakarra da, eta esaldiak dio hura ere zorigaiztokoa dela. Estoikoek, epikurearrek edo budistek pentsatzen zutenaren kontrakoa da hori: lasaitasuna desioak murriztuz lortzen dela.</li><li><strong>Aldez aurretik onartzen ez duena</strong>: talde bakoitzean norbait dagoela. Gaur egungo logikan, «q guztiak p dira» egiazkoa da q bakar bat ere ez badago ere (gauza bera ikusten da Silogismoak fitxan, irakurketa tradizionalarekin).</li><li><strong>Aurrekoekiko lotura</strong>: lehen esaldiak onartzen zuen dena lortzen dutenetako batzuk zorigaiztokoak direla; honek dio guztiak direla; beraz, gehiago esaten du. «Ia ez»-ren esaldiak zorigaiztokotasunaren mailak konparatzen zituen; honek bi muturretan zorigaiztokotasuna dagoela baino ez du esaten, neurtu gabe.</li></ul>",
  "pensar": "Esaldi honen arabera, nor izan liteke zoriontsu? Deskriba ezazu pertsona hori. Eta zer esango lioke Epikurok esaldia defendatzen duenari?",
  "euler": {
   "vista": "0 0 345 240",
   "circulos": [
    {
     "cx": 172,
     "cy": 122,
     "r": 108,
     "cls": "lg-e2",
     "etq": "Zorigaiztokoak (p)",
     "ex": 172,
     "ey": 42
    },
    {
     "cx": 132,
     "cy": 132,
     "r": 50,
     "cls": "lg-e1",
     "etq": "Dena (q)",
     "ex": 120,
     "ey": 132
    },
    {
     "cx": 212,
     "cy": 132,
     "r": 50,
     "cls": "lg-e4",
     "etq": "Ezer ez (s)",
     "ex": 226,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [
    [
     172,
     132
    ]
   ],
   "lectura": "<ul><li>Zirkulu handia <strong>zorigaiztokoak (p)</strong> dira. <strong>Dena (q)</strong> lortzen dutenen zirkulua eta <strong>ezer lortzen ez dutenena (s)</strong> barruan daude: bi baiezko unibertsalak dira, «q oro p da» eta «s oro p da».</li><li>q eta s ia ez dira ukitzen: ezin da dena eta ezer ez aldi berean lortu, kasu batean izan ezik. Gurutzeko <strong>?</strong> ikurra kasu hori da, ezer desiratzen ez duena. Esaldiak ez du esaten horrelako norbait dagoen; badago, zorigaiztokoen artean zenbatzen du.</li><li>Ez dago ✕-rik: esaldiak ez du aldez aurretik onartzen inor dagoenik inongo taldetan. Existituko balitz non egongo litzatekeen bakarrik esaten du.</li><li>Zirkulu handitik kanpo zorigaiztokoak ez direnak geratzen dira, eta han ez dago ez q ez s: kontrako alderantzizkoa da. Norbait zorigaiztokoa ez bada, bi muturretatik kanpo dago.</li></ul>",
   "contTitulo": "Kontingentea: hiru errenkada faltsu, hiru eremu huts",
   "contingencia": "<p><em>(q ∨ s) → p</em>-ren taulak zortzi errenkada ditu eta esaldia <strong>hirutan</strong> da faltsua: zorigaiztokoa ez den eta muturretako batean dagoen norbaitenetan. <strong>Kontingentea</strong> da. Lehen bezala, errenkada bakoitza diagramaren eremu bat da.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>s</th><th>(q ∨ s) → p</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Dena lortzen duen eta ezer lortzen ez duen zorigaiztokoa (ez du ezer desiratzen)</td><td>q-ren eta s-ren gurutzea, ?-rekin: ez dakigu inor dagoen.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Dena lortzen duen zorigaiztokoa</td><td>q zirkulua.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ezer lortzen ez duen zorigaiztokoa</td><td>s zirkulua.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Zerbait lortzen duen zorigaiztokoa, baina ez dena</td><td>p-ren gainerakoa.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Ez da zorigaiztokoa, dena lortzen du eta ez du ezer lortzen: ezer desiratzen ez duen jakintsua</td><td><strong>Ez dago</strong>: q eta s p-ren barruan daude.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Ez da zorigaiztokoa eta dena lortzen du</td><td><strong>Ez dago</strong>: q p-ren barruan dago.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Ez da zorigaiztokoa eta ez du ezer lortzen</td><td><strong>Ez dago</strong>: s p-ren barruan dago.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez da zorigaiztokoa eta zerbait lortzen du, baina ez dena</td><td>Zirkulu guztietatik kanpo.</td></tr></tbody></table></div><ul><li><strong>Hiru errenkada faltsu = falta diren hiru eremu</strong>: q-ren eta s-ren p-tik kanpo geratuko liratekeen zati guztiak. Horregatik marrazten dira barruan.</li><li><strong>Lehen esaldiak baino gehiago esaten du</strong>: hark eremu bakarra debekatzen zuen; honek hiru. Esaldi batek zenbat eta eremu gehiago kendu, orduan eta konpromiso handiagoa hartzen du eta errazagoa da faltsua izatea: nahikoa da dena lortu eta zorigaiztokoa ez den norbait aurkitzea.</li><li>Begiratu desiorik gabeko jakintsuaren errenkadari: esaldiak ezinezkotzat jotzen du. Pertsona hori badagoela uste duenak kontraadibide bat du, eta bat nahikoa da unibertsal bat ezeztatzeko.</li></ul>"
  }
 },
 {
  "id": "monica",
  "grupo": "agustin",
  "titulo": "Monika: «Gauza onak desiratu eta baditu, zoriontsua da»",
  "origen": "Monika, Agustinen ama, <em>Bizitza zoriontsua</em> lanean (II, 10). Agustinek erantzuten dio «filosofiaren gotorlekura bertara» iritsi dela.",
  "enunciado": "«Gauza onak desiratu eta baditu, zoriontsua da; baina gauza txarrak desiratzen baditu, nahiz eta izan, zoritxarrekoa da.»",
  "problema": "Agustinek galdetu berri du ea nahi duena duen oro zoriontsua den, eta hau da Monikaren erantzuna. <em>p</em> = «zoriontsua da», <em>q</em> = «ona desiratzen du» eta <em>r</em> = «desiratzen duena du» izanik (eta «txarra desiratzea» «ona ez desiratzea» bezala sinplifikatuz), <em>((q ∧ r) → p) ∧ ((¬q ∧ r) → ¬p)</em> geratzen da. Bi zatiak <em>r</em>-rekin hasten dira: Monikak desiratzen dutena dagoeneko dutenez bakarrik hitz egiten du, eta haiei buruz dio zoriontsu izatea eta ona desiratzea batera doazela. Hau da: <em>r</em> bada, orduan <em>p ↔ q</em>.",
  "salidas": "<ul><li><strong>Nahikoa, ez beharrezkoa</strong>: Monikak dio «…bada, zoriontsua da»; Agustinek, hurrengo fitxan, «…duenak bakarrik». Kontrako noranzkoetako geziak dira. Monikak zoriontasunera daraman bide bat seinalatzen du; Agustinek, gabe sartzen ez den ate bat. Ez dute elkar kontraesaten.</li><li><strong>Esaten ez duena</strong>: ezer ez desiratzen dutena ez dutenei buruz. Hori lehenago adostu zuten elkarrizketan: nahi duena ez duena ez da zoriontsua.</li><li><strong>Zizeronen oihartzuna</strong>: Agustinek gogorarazten du Zizeronen <em>Hortensius</em> lanak gauza bera dioela: ez da hain zoritxarrekoa nahi dena ez lortzea, komeni ez dena lortu nahi izatea bezainbeste. Ariketako lehen esaldiari erantzun bat da: zatirik txarrena ez du lortzen ez duenak eramaten, gaizki desiratzen duenak baizik.</li><li><strong>Zergatik da «hau da» ondo esana</strong>: baldintzazko bakoitza «edo» batez idatz daiteke (<em>X → Y</em>-a <em>¬X ∨ Y</em>-ren gauza bera da). Horrela, <em>(q ∧ r) → p</em> da <em>¬q ∨ ¬r ∨ p</em>, eta <em>(¬q ∧ r) → ¬p</em> da <em>q ∨ ¬r ∨ ¬p</em>. Bi zatiek <em>¬r</em> dute komunean, eta faktor komuntzat ateratzen da: <em>[(¬q ∨ p) ∧ (q ∨ ¬p)] ∨ ¬r</em>. Kortxetearen barrukoak <em>q → p</em> eta <em>p → q</em> dira, hau da, <em>p ↔ q</em>. Gelditzen da <em>(p ↔ q) ∨ ¬r</em>, eta hura bera da <em>r → (p ↔ q)</em>. Egiazta dezakezu Taulak fitxan: idatzi bi formulak eta berdin aterako dira, bi errenkada berdinetan faltsuak.</li><li><strong>Laburtzean galtzen dena</strong>: «gaizkia nahi izatea» «ongia ez nahi izatea» gisa irakurri dugu, eta ez da gauza bera: biak aldi berean nahi daitezke, edo bat ere ez. Hitzez hitz, esaldiak bost letra ditu: <em>p</em> = «zoriontsu da», <em>q</em> = «gauza onak nahi ditu», <em>r</em> = «gauza onak ditu», <em>s</em> = «gauza txarrak nahi ditu» eta <em>t</em> = «gauza txarrak ditu». Gelditzen da <em>((q ∧ r) → p) ∧ ((s ∧ t) → ¬p)</em>. 32 errenkada ditu, baina lau kasu nahikoa dira, aurrekaria faltsua duen baldintzazkoak ez du ezer exijitzen:<div class=\"tablewrap\"><table class=\"lg-tabla\"><thead><tr><th>Ongia nahi du eta dauka</th><th>Gaizkia nahi du eta dauka</th><th>Esaldiak exijitzen duena</th><th>Errenkadak</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>zoriontsua izatea</td><td>6</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>zorigaiztokoa izatea, «dauka arren»</td><td>6</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>ezer ez: esaldia isilik</td><td>18</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>zoriontsu eta zorigaiztoko izatea aldi berean: ezinezkoa</td><td>2</td></tr></tbody></table></div>Esaldia egiazkoa da 24 errenkadatan eta faltsua 8tan. Azken errenkadaren kasua ez da agertzen hiru letrarekin: ongia <em>eta</em> gaizkia nahi dituena eta dena lortzen duena. Gainera zoriontsu bada, hiru letrako irakurketak ontzat ematen du; bostekoak, ez: esaldiaren bigarren erdiak dio zorigaiztokoa dela. <strong>Formalizatzea ez da itzultzea besterik gabe, zer kontserbatzen eta zer galtzen den erabakitzea baizik.</strong></li><li><strong>Hirugarren irakurketa bat</strong>: «nahi duen guztia badu, zoriontsu da zehazki ongia <em>bakarrik</em> nahi duenean». Bost letra berdinekin, <em>((q → r) ∧ (s → t)) → (p ↔ (q ∧ ¬s))</em>. Zorrotzena da: nahi txar bakar bat aski da zorigaiztokoa izateko, eta dena lortzen duen asegaitzak ez du jada esaldia irtenbiderik gabe uzten, ez baita zoriontsu. Hiru irakurketa, hiru epai pertsona beraz. Praktika dezakezu «Formalizatu» fitxan.</li></ul>",
  "pensar": "Monikak ez du esaten zein gauza diren onak. Lerro batzuk geroago, Agustinek baldintza bat gehitzen du: zein? (Begiratu hurrengo fitxa.) Eta bada norbait, esaldiak ezer koherenterik esan ezin diona: aldi berean gauza onak eta txarrak nahi dituena, eta dena lortzen duena. Zoriontsu izango litzateke Monikaren arabera? Eta Agustinen arabera, zoriontsuaren eta zorigaiztokoaren artean ertainik ez dagoenarentzat (II, 11)?",
  "euler": {
   "vista": "0 0 345 268",
   "circulos": [
    {
     "cx": 172,
     "cy": 144,
     "r": 118,
     "cls": "lg-e2"
    },
    {
     "cx": 172,
     "cy": 144,
     "r": 80,
     "cls": "lg-e3"
    },
    {
     "cx": 172,
     "cy": 16,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Desiratzen dutena dute (r)",
     "ex": 172,
     "ey": 16
    },
    {
     "cx": 172,
     "cy": 122,
     "r": 0,
     "cls": "lg-e2",
     "etq": "Ona desiratzen dute (q)",
     "ex": 172,
     "ey": 140
    },
    {
     "cx": 172,
     "cy": 140,
     "r": 0,
     "cls": "lg-e2",
     "etq": "= zoriontsuak (p)",
     "ex": 172,
     "ey": 158
    },
    {
     "cx": 172,
     "cy": 206,
     "r": 0,
     "cls": "lg-e2",
     "etq": "zorigaiztokoak (¬p)",
     "ex": 172,
     "ey": 240
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Zirkulu handia ez da beste talde bat: <strong>markoa</strong> da. Monikak <strong>desiratzen dutena dutenez (r)</strong> bakarrik hitz egiten du; besteez, esaldiak ez du ezer esaten.</li><li>Markoaren barruan, <strong>ona desiratzen dutenen (q)</strong> zirkulua <strong>zoriontsuena (p)</strong> ere bada: desiratzen dutena dutenen artean, zoriontsu izatea eta ona desiratzea batera doaz.</li><li>Inguruko eraztuna desiratzen dutena duten baina txarra desiratzen dutenak dira: <strong>zorigaiztokoak</strong>, «nahiz eta izan».</li></ul>",
   "contTitulo": "Kontingentea: bi errenkada faltsu",
   "contingencia": "<p>Taulak zortzi errenkada ditu eta Monikaren esaldia <strong>bitan</strong> bakarrik da faltsua: desiratzen duen ona duen eta zoriontsua ez denarena, eta desiratzen duen txarra duen eta zoriontsua denarena. <em>r</em> faltsua den lau errenkadak egiazkoak dira guztiak: esaldiak ez du ezer esaten desiratzen duena ez duenaz, eta esaten ez denak ezin du faltsu bihurtu.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>Monika</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ona desiratu eta duen zoriontsua</td><td>q = p zirkulua.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ona desiratzen duen eta ez duen zoriontsua</td><td>Markotik kanpo: esaldiak ez du ezer esaten.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Txarra desiratu eta duen zoriontsua</td><td><strong>Ez dago</strong>: markoaren barruan, txarra desiratzea zorigaiztokoen eraztunean egotea da.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Txarra desiratzen duen eta ez duen zoriontsua</td><td>Markotik kanpo: esaldiak ez du ezer esaten.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Ona desiratu eta du, eta ez da zoriontsua</td><td><strong>Ez dago</strong>: markoaren barruan, ona desiratzen duena zoriontsua da.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ona desiratzen du, ez du, eta ez da zoriontsua</td><td>Markotik kanpo.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Txarra desiratu eta du, eta ez da zoriontsua</td><td>Zorigaiztokoen eraztuna.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Txarra desiratzen du, ez du, eta ez da zoriontsua</td><td>Markotik kanpo.</td></tr></tbody></table></div>"
  }
 },
 {
  "id": "agustin",
  "grupo": "agustin",
  "titulo": "Agustin: «Galdu ezin duena desiratzen duenak bakarrik…»",
  "origen": "Agustin Hiponakoaren parafrasia, <em>Bizitza zoriontsua</em> (386), II. kapitulua: zoriontsu izan nahi duenak beti irauten duena eta inolako zorik kendu ezin diona bilatu behar du.",
  "enunciado": "«Galdu ezin duena desiratzen duenak bakarrik lor dezake zoriontasuna.»",
  "problema": "Bi letra: <em>p</em> = «zoriontasuna lortzen du» eta <em>q</em> = «galdu ezin duena desiratzen du». «q denak bakarrik, p» esaldiak <strong>baldintza beharrezko</strong> bat jartzen du: q gabe ez dago p. Hau da, <em>p → q</em>: norbaitek zoriontasuna lortzen badu, galdu ezin duena desiratzen duelako da. («Lor dezake» «lortzen du» bezala irakurtzen dugu, ez korapilatzeko.) Haren kontrako alderantzizkoak gauza bera dio: <em>¬q → ¬p</em>, galdu dezakeena desiratzen duenak ez du zoriontasuna lortzen.",
  "salidas": "<ul><li><strong>Tranpa: «bakarrik» ez da «guztiak»</strong>. Esaldiak ez du esaten galdu ezin duena desiratzen duena zoriontsua denik (<em>q → p</em>). Batetik bestera igarotzea atzekaria baieztatzearen falazia da: «Egia-taulak» fitxan proba dezakezu, «Atzekaria baieztatzea» adibidean.</li><li><strong>Agustinen argudioa</strong>: galdu dezakeena maite duena hura galtzeko beldurrez bizi da, eta beldurrarekin ez da zoriontsu izaten. Galdu ezin den gauza bakarra, haren ustez, Jainkoa da.</li><li><strong>Aurrekoekiko lotura</strong>: jada ez du axola zenbat desiratzen den ezta zenbat lortzen den ere, baizik eta <em>zer</em> desiratzen den, eta zehazki galdu daitekeen ala ez. Estoikoen ideiatik hurbil dago: desioa zorte-mende ez dagoen horretan jartzea.</li></ul>",
  "pensar": "Agustinentzat, galdu ezin den gauza bakarra Jainkoa da. Bururatzen zaizu galdu ezin den beste zerbait? Balioko luke esaldirako?",
  "euler": {
   "vista": "0 0 345 215",
   "circulos": [
    {
     "cx": 172,
     "cy": 120,
     "r": 90,
     "cls": "lg-e1",
     "etq": "Galdu ezin dutena desiratzen dute (q)",
     "ex": 172,
     "ey": 20
    },
    {
     "cx": 150,
     "cy": 132,
     "r": 46,
     "cls": "lg-e3",
     "etq": "Zoriontsuak (p)",
     "ex": 150,
     "ey": 132
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li><strong>Zoriontsuen (p)</strong> zirkulua <strong>galdu ezin dutena desiratzen dutenen (q)</strong> zirkuluaren barruan dago: baiezko unibertsal bat da, «zoriontsu orok galdu ezin duena desiratzen du».</li><li>q-ren barruan p-tik kanpo tokia geratzen da: galdu ezin duena desiratu eta zoriontsua ez den norbait egon daiteke. Hutsune hori esaldiaren «bakarrik» da.</li></ul>",
   "contTitulo": "Kontingentea: errenkada faltsu bat, eremu huts bat",
   "contingencia": "<p><em>p → q</em>-ren taulak lau errenkada ditu eta esaldia bakar batean da faltsua: <strong>kontingentea</strong> da. Errenkada hori marrazkian falta den eremua da.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas lg-z2\"><thead><tr><th>p</th><th>q</th><th>p → q</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Galdu ezin duena desiratzen duen zoriontsua</td><td>p, q-ren barruan.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Galdu dezakeena desiratzen duen zoriontsua</td><td><strong>Ez dago</strong>: p q-ren barruan dago.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Galdu ezin duena desiratzen du eta ez da zoriontsua</td><td>q-ren p-tik kanpoko zatia: «bakarrik» ez da «guztiak».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez zoriontsua, ez galdu ezin duena desiratzen du</td><td>Bi zirkuluetatik kanpo.</td></tr></tbody></table></div><p>Hirugarren errenkada tranparena da: egiazkoa da, eta marrazkian q-ren p-tik kanpo geratzen den zatia da. Esaldiak «galdu ezin duena desiratzen duen oro zoriontsua da» esango balu, eremu hori faltako litzateke bigarrenaren ordez.</p>"
  }
 },
 {
  "id": "agustin2",
  "grupo": "agustin",
  "titulo": "Agustin, aldaera: «…guztiok nahitaez bilatzen dugun helburua»",
  "origen": "Aurreko esaldiaren aldaera. Bigarren zatia ere Agustinena da: <em>Bizitza zoriontsua</em> lanean (II) argitzat ematen du guztiok nahi dugula zoriontsu izan.",
  "enunciado": "«Galdu ezin duena desiratu eta lortzen duenak bakarrik lor dezake zoriontasuna, guztiok nahitaez bilatzen dugun helburua baita.»",
  "problema": "Orain <strong>bi baieztapen</strong> daude. Lehena lehengoa da, baldintza bat gehiagorekin: <em>p</em> = «zoriontasuna lortzen du», <em>q</em> = «galdu ezin duena desiratzen du» eta <em>r</em> = «galdu ezin duena lortzen du» izanik, <em>p → (q ∧ r)</em> geratzen da. Jada ez da nahikoa desiratzea: lortu ere egin behar da. Bigarrena erlatibozko perpausak gehitzen du: «zoriontasuna guztiok nahitaez bilatzen dugun helburua da». Gaztelaniaz komen artean doanez, <strong>azalpenezkoa</strong> da: ez du mugatzen zein zoriontasunez ari den, baizik eta zerbait gehiago esaten du hartaz. Komarik gabe («guztiok bilatzen dugun zoriontasuna») zehazgarria litzateke eta ez luke ezer berririk baieztatuko.",
  "salidas": "<ul><li><strong>Biak elkartzetik ondorioztatzen dena</strong>: guztiok bilatzen dugu zoriontasuna, baina galdu ezin duena desiratu <em>eta</em> lortzen duenak bakarrik lortzen du. Lortzen ez duenak, saihestu ezinik, lortu ezin duen zerbait bilatzen du. Lehen baldintza bat zena drama bihurtzen da.</li><li><strong>«Nahitaez» ez da «tautologikoki»</strong>: «guztiok bilatzen dugu zoriontasuna» ez da egiazkoa bere formagatik (taulak ez du errenkada guztietan egiazko egiten), baizik eta, Agustinen arabera, garen bezalakoak garelako. Beharrezkotasun hori giza naturatik dator, ez logikatik, eta hori adierazteko logika modal bat behar da.</li><li><strong>Zoriontsu ez dena zorigaiztokoa al da?</strong> Hizkuntza arruntean, ez nahitaez: «zoriontsu» eta «zorigaiztoko» kontrarioak dira, eta tartean egon daiteke. Agustinek, ordea, ez du erdibiderik uzten: <em>Bizitza zoriontsua</em> lanean (II, 11 eta IV, 28) adostutzat ematen du zoriontsu ez den oro zorigaiztokoa dela, hilda ez dagoen oro bizirik dagoen bezala. Hori onartzen badugu, «ez zoriontsu» (<em>¬p</em>) eta «zorigaiztoko» gauza bera dira, eta esaldia gogortu egiten da: galdu ezin duena desiratu eta lortzen ez duena ez da inoren lurrean geratzen, zorigaiztokoa da. Eta «guztiok bilatzen dugu zoriontasuna» esaldiarekin, inor ezin da kanpoan geratu: edo lortzen da, edo zorigaiztokoa da.</li><li><strong>Betiko tranpa</strong>: «bakarrik» ez da oraindik ere «guztiak». Galdu ezin duena desiratu eta lortzen duenari esaldi honek ez dio zoriontasuna bermatzen.</li><li><strong>Hiru esaldiak, elkarrekin</strong>: Monikatik Agustinera, baldintzak noranzkoa aldatzen du eta gero ixten da.<div class=\"tablewrap\"><table class=\"lg-tabla\"><thead><tr><th>Esaldia</th><th>Forma</th><th>Zein baldintza jartzen duen</th></tr></thead><tbody><tr><td>Monika (II, 10)</td><td>r → (p ↔ q)</td><td>nahikoa, nahi duena duenarentzat bakarrik</td></tr><tr><td>Agustin: «nor… bakarrik»</td><td>p → q</td><td>beharrezkoa</td></tr><tr><td>Agustin osorik (II, 11)</td><td>p ↔ (q ∧ r)</td><td>beharrezkoa eta nahikoa</td></tr></tbody></table></div>Letrek ez dute gauza bera esan nahi hiru fitxatan: begiratu bakoitzaren hiztegia.</li></ul>",
  "pensar": "Ken itzazu komak gaztelaniazko esaldian: «Solo quien desea y consigue aquello que no puede perder puede alcanzar la felicidad que todos buscamos». Zein baieztapen desagertzen da?",
  "euler": {
   "titulo": "Irakurketa literala: «bakarrik» (p → q ∧ r)",
   "vista": "0 0 345 318",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Desiratzen dute (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Lortzen dute (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 120,
     "r": 48,
     "cls": "lg-e3",
     "etq": "Zoriontsuak (p)",
     "ex": 172,
     "ey": 120
    },
    {
     "cx": 172,
     "cy": 245,
     "r": 64,
     "cls": "lg-e4",
     "etq": "Zorigaiztokoak (¬p)",
     "ex": 172,
     "ey": 258
    }
   ],
   "cruces": [],
   "dudas": [
    [
     62,
     110
    ],
    [
     283,
     110
    ]
   ],
   "lectura": "<ul><li><strong>q</strong> galdu ezin dena desiratzen dutenak dira, eta <strong>r</strong>, lortzen dutenak. Gurutzatu egiten dira: lortu gabe desiratu daiteke eta, agian, desiratu gabe lortu.</li><li><strong>Zoriontsuen (p)</strong> zirkulua gurutzearen barruan doa: zoriontsu izateko, aldi berean q-n eta r-n egon behar da.</li><li>«Guztiok bilatzen dugu zoriontasuna» esaldiak ez du zirkulurik behar: mundu guztiaz ariko litzateke; beraz, marrazkiaren marko osoa litzateke. Inor kanpoan uzten ez duen unibertsal batek ez ditu eremuak bereizten.</li><li>Behean, <strong>zorigaiztokoen (¬p)</strong> zirkulua. Ez du zoriontsuena ukitzen, inor ez baita bi gauzak aldi berean. q-rekin eta r-rekin gurutzatzen da, baita haien gurutzearekin ere: galdu ezin dena desiratu eta lortu daiteke eta zoriontsua ez izan («bakarrik» ez da «guztiak»). Eta bietatik kanpora ateratzen da, ez desiratzen ez lortzen duena ez baita zoriontsua.</li><li><strong>?</strong> ikurrek bi zirkuluetako batean ere sartzen ez dena markatzen dute: ez zoriontsu ez zorigaiztoko izango ez liratekeenak (eta gauza bera zirkulu guztietatik kanpo geratzen denarentzat). Agustinek bezala erdibiderik ez badago, han ez dago inor. Badago, hori da haren tokia.</li></ul>",
   "contTitulo": "Kontingentea: hiru errenkada faltsu, hiru eremu huts",
   "contingencia": "<p><em>p → (q ∧ r)</em>-ren taulak zortzi errenkada ditu eta esaldia <strong>hirutan</strong> da faltsua, aurreko bertsioak baino bat gehiago letra berekin idazten badugu: desiratzen duen baina lortzen ez duen zoriontsuarena. Hori gehitzen du «eta lortzen»-ek.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>p → (q ∧ r)</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desiratu eta lortzen duen zoriontsua</td><td>p, q-ren eta r-ren gurutzean.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Desiratzen duen baina lortzen ez duen zoriontsua</td><td><strong>Ez dago</strong>: p r-ren barruan dago.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Desiratu gabe lortzen duen zoriontsua</td><td><strong>Ez dago</strong>: p q-ren barruan dago.</td></tr><tr class=\"lg-contra\"><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td>Ez desiratzen ez lortzen duen zoriontsua</td><td><strong>Ez dago</strong>: p q-ren eta r-ren barruan dago.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desiratu eta lortzen du, eta ez da zoriontsua</td><td>q-ren eta r-ren gurutzea p-tik kanpo: «bakarrik» ez da «guztiak».</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Desiratzen du eta ez du lortzen</td><td>q r-tik kanpo.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Desiratu gabe lortzen du</td><td>r q-tik kanpo.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez du desiratzen ez lortzen</td><td>Zirkuluetatik kanpo.</td></tr></tbody></table></div><p>Bigarren baieztapenak, «guztiok bilatzen dugu zoriontasuna», ez du taula aldatzen: ez du <em>p</em>-z, <em>q</em>-z ez <em>r</em>-z hitz egiten, bilatzeaz baizik, eta errenkada guztietarako balio du berdin.</p>"
  },
  "euler2": {
   "titulo": "Agustin osoa: «Jainkoa duena zoriontsua da» (p ↔ q ∧ r)",
   "vista": "0 0 345 258",
   "circulos": [
    {
     "cx": 130,
     "cy": 125,
     "r": 98,
     "cls": "lg-e1",
     "etq": "Desiratzen dute (q)",
     "ex": 95,
     "ey": 14
    },
    {
     "cx": 215,
     "cy": 125,
     "r": 98,
     "cls": "lg-e2",
     "etq": "Lortzen dute (r)",
     "ex": 250,
     "ey": 14
    },
    {
     "cx": 172,
     "cy": 129,
     "r": 0,
     "cls": "lg-e3",
     "etq": "Zoriontsuak (p)",
     "ex": 172,
     "ey": 129
    },
    {
     "cx": 172,
     "cy": 246,
     "r": 0,
     "cls": "lg-e4",
     "etq": "Zorigaiztokoak (¬p): gainerako guztia",
     "ex": 172,
     "ey": 246
    }
   ],
   "cruces": [],
   "dudas": [],
   "lectura": "<ul><li>Lerro batzuk geroago, <em>Bizitza zoriontsua</em> lanean (II, 11), Agustinek ondorioztatzen du: «Deum igitur qui habet, beatus est», hau da, Jainkoa duena, galdu ezin dena, zoriontsua da. Galdu ezin duena duenak ez du hura galtzeko beldurrik, ezta nahi duenaren faltarik ere: ez du zorigaiztoko izateko arrazoirik. Horrekin baldintza nahikoa ere bada, eta esaldia <em>p ↔ (q ∧ r)</em> bihurtzen da.</li><li>Orain q-ren eta r-ren gurutzea <strong>da</strong> zoriontsuen zirkulua: ez da jada bereiz marraztu behar. Lehen marrazkian kirrinka egiten duen eremua (desiratu, lortu eta zorigaiztokoa da) hutsik geratzen da.</li><li>Erdibiderik ez dagoenez, gainerako guztia (r gabeko q, q gabeko r eta kanpoan geratzen dena) <strong>zorigaiztokoak</strong> dira. Eulerrek ezin ditu zirkulu gisa marraztu: marrazkiaren gainerakoa dira. Bi klasek dena banatzen dutenean eta horietako bat gurutze bat denean, besteak hondoa baino ezin du izan.</li><li><em>p ↔ (q ∧ r)</em>-ren taulak lau errenkada faltsu ditu: irakurketa literalaren hirurak eta desiratu, lortu eta zoriontsua ez denarena. Laugarren errenkada hori hustutzen den eremua da. Esaldi osoak gehiago baztertzen du eta, horregatik, gehiago esaten du.</li></ul>"
  }
 },
 {
  "id": "contrafactico",
  "grupo": "ejercicios",
  "titulo": "«…zoriontsuak izango lirateke, desiratzeari utzi ezin baliote»",
  "origen": "Klasean ariketa gisa proposatutako esaldia, Monikarekin eta Agustinekin elkarrizketan.",
  "enunciado": "«Desiratzen duten eta galdu ezin duten zerbait lortzen dutenak zoriontsuak izango lirateke, hura desiratzeari utzi ezin baliote.»",
  "problema": "Hiru letra: <em>p</em> = «zoriontsua da», <em>q</em> = «desiratzen duen eta galdu ezin duen zerbait lortzen du» eta <em>r</em> = «ezin dio hura desiratzeari utzi». Tauletako geziarekin irakurrita, esaldia <em>(q ∧ r) → p</em> da: norbaitek lortzen badu eta ezin badio desiratzeari utzi, zoriontsua da. Baina esaldia ez dago indikatiboan («zoriontsuak dira, …bada»), baizik eta <strong>baldintza hipotetikoan</strong> («zoriontsuak izango lirateke, …ezin baliote»): <strong>baldintzazko kontrafaktiko</strong> bat da. Gauzak diren bezalakoak ez balira zer gertatuko litzatekeen esaten du, eta ulertzera ematen du, egiaz, ez direla horrela: desiratzeari utz diezaioketela (<em>¬r</em>) eta, orduan, ez direla zoriontsuak (<em>¬p</em>).",
  "salidas": "<ul><li><strong>Ulertzera ematen duena</strong>: desiratzen duen eta galdu ezin duen zerbait duenak ere utz diezaiokeela hura desiratzeari, eta orduan ez dela zoriontsua. Ez du esaten: aditzaren moduak iradokitzen du.</li><li><strong>Arrakala bat Agustinen argudioan</strong>: haren ustez, zoriontsua da nahi duena duena (<em>Bizitza zoriontsua</em>, II, 10-11), eta horregatik nahikoa da galdu ezin dena izatea. Esaldiak seinalatzen du bi gauza gal daitezkeela: objektua eta desioa. Galdu ezin dena hor dago oraindik, baina hura nahi izateari uzten badiot, jada ez dut «nahi dudana».</li><li><strong>Nola ixten duen aldaerak</strong>: «guztiok <em>nahitaez</em> bilatzen dugun helburua». Galdu ezin dena desiratzeari utzi ezin dioguna ere bada, <em>r</em> beti betetzen da eta kontrafaktikoa soberan dago: esaldiak Agustinek esaten duen gauza bera dio. «Nahitaez» hori da, hain zuzen, esaldi honek falta duen pieza.</li><li><strong>Monikaren aurrean</strong>: hark zioen gauza galkorrek ez dutela asetzen («talibus satiari non poterit», II, 11). Esaldi honek urrunago doa: galdu ezin dena ere ez da nahikoa, desioa itzal badaiteke.</li><li><strong>Schopenhauerren ondoan</strong>: betetako desioa higatu egiten da eta asperdurari ematen dio bide, lehen esaldiko penduluan bezala.</li></ul>",
  "pensar": "Utz al dakioke galdu ezin den zerbait desiratzeari? Bilatu adibide bat. Eta utz al dakioke zoriontasuna bera desiratzeari?",
  "euler": {
   "vista": "0 0 345 250",
   "circulos": [
    {
     "cx": 172,
     "cy": 130,
     "r": 110,
     "cls": "lg-e2",
     "etq": "Desiratu eta galdu ezin duten zerbait lortzen dute (q)",
     "ex": 172,
     "ey": 12
    },
    {
     "cx": 150,
     "cy": 135,
     "r": 70,
     "cls": "lg-e3",
     "etq": "Zoriontsuak (p)",
     "ex": 150,
     "ey": 96
    },
    {
     "cx": 150,
     "cy": 150,
     "r": 34,
     "cls": "lg-vacia",
     "etq": "r: hutsik",
     "ex": 150,
     "ey": 155
    }
   ],
   "cruces": [
    [
     250,
     140
    ]
   ],
   "dudas": [],
   "lectura": "<ul><li>Zirkulu handia <strong>markoa</strong> da: esaldiak desiratzen duten eta galdu ezin duten zerbait lortzen dutenez (q) bakarrik hitz egiten du, hau da, Agustinen baldintza dagoeneko betetzen dutenez.</li><li>Barruan, <strong>desiratzeari utzi ezin diotenen (r)</strong> zirkulua <strong>zoriontsuen (p)</strong> zirkuluaren barruan doa: hori dio geziak, <em>(q ∧ r) → p</em>.</li><li>Baina r <strong>grisez</strong> dago: aditzaren moduak ulertzera ematen du hutsik dagoela, edonork utz baitiezaioke zerbait desiratzeari. Eta ✕-ak markatzen du non dagoen benetako jendea esaldiaren arabera: markoan, zoriontsuetatik kanpo.</li><li>Hor dago arazoa: r hutsik badago, berdin du non marrazten dugun. p-ren barruan edo kanpoan, marrazkiak esaldia beteko luke. Aurrekari hutsa duen baldintzazko batek ez du ezer esaten mundu errealaz.</li></ul>",
   "contTitulo": "Kontingentea geziarekin, baina hutsa kontrafaktiko gisa",
   "contingencia": "<p>Tauletako geziarekin, <em>(q ∧ r) → p</em>-k zortzi errenkada ditu eta bakarra da faltsua: <strong>kontingentea</strong> da. Berdez nabarmendutako errenkada da aditzaren moduak errealtzat ematen duena.</p><div class=\"tablewrap\"><table class=\"lg-tabla lg-zonas\"><thead><tr><th>p</th><th>q</th><th>r</th><th>(q ∧ r) → p</th><th>Nor den</th><th>Diagraman</th></tr></thead><tbody><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Zoriontsua, lortzen du eta ezin dio desiratzeari utzi</td><td>r, p-ren barruan.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Zoriontsua, lortzen du eta desiratzeari utz diezaioke</td><td>p r-tik kanpo.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Galdu ezin duen ezer lortzen ez duen eta desiratzeari utzi ezin dion zoriontsua</td><td>Markotik kanpo: esaldiak ez du ezer esaten.</td></tr><tr><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Galdu ezin duen ezer lortzen ez duen eta desiratzeari utz diezaiokeen zoriontsua</td><td>Markotik kanpo.</td></tr><tr class=\"lg-contra\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td>Lortzen du, ezin dio desiratzeari utzi eta ez da zoriontsua</td><td><strong>Ez dago</strong>: r p-ren barruan dago. Errenkada faltsu bakarra da.</td></tr><tr class=\"lg-ok\"><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Lortzen du, desiratzeari utz diezaioke eta ez da zoriontsua</td><td>Markoa p-tik kanpo, ✕-arekin: aditzaren moduak iradokitzen duen kasu erreala.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td class=\"lg-v\">V</td><td>Ez du lortzen, ezin dio desiratzeari utzi eta ez da zoriontsua</td><td>Markotik kanpo.</td></tr><tr><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-f\">F</td><td class=\"lg-v\">V</td><td>Ez du lortzen, desiratzeari utz diezaioke eta ez da zoriontsua</td><td>Markotik kanpo.</td></tr></tbody></table></div><ul><li><strong>Kontrafaktikoaren tranpa.</strong> Kasu errealaren errenkadan, <em>r</em> faltsua da, eta <em>r</em> faltsua denean gezia egiazkoa da <em>p</em>-rekin gertatzen dena gertatzen dela. Horrela, taularekin, «desiratzeari utzi ezin baliote, zoriontsuak izango lirateke» bezain egiazkoa litzateke «desiratzeari utzi ezin baliote, are zorigaiztokoagoak izango lirateke». Taulak ez ditu biak bereizten.</li><li>Horregatik, kontrafaktikoek beste tresna bat behar dute. Ezagunena mundu posibleena da (Robert Stalnaker, David Lewis): esaldia egiazkoa da baldin eta, desiratzeari utzi ezin dioten eta gurearen antzekoena den munduan, zoriontsuak badira. Jada ez da nahikoa egia-balioei begiratzea: gauzak nolakoak izango liratekeen irudikatu behar da.</li></ul>"
  }
 }
];
