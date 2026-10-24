/* JAKINA · kapitulua «B08.2 - Griffiths 9-12 eta M24 Optika» (04em_02erradiazioa), desde edicion2/kapituluak/04em_02erradiazioa/04em_02erradiazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["04em_02erradiazioa"] = {
 "gakoa": "04em_02erradiazioa",
 "titulua": "JAKINA - B08.2 - Griffiths 9-12 eta M24 Optika",
 "azala": "B08.2 - Griffiths 9-12 eta M24 Optika",
 "azpititulua": "III. aroa - L2",
 "iturburua": "kapituluak/04em_02erradiazioa/04em_02erradiazioa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Uhin elektromagnetikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Maxwellen ekuazioek, 7. eta 8. kapituluetan garatu eta bateratuek, soluzio bat dute, ez Coulombek, ez Ampèrek, ez Faradayk banaka aurreikusi ez zutena: beren burua elikatzen duten uhinak, hedatzeko kargarik ez korronterik batere behar ez dutenak — haien artean, argia bera. Kapitulu honek soluzio hori garatzen du, hutseko uhin-ekuaziotik hasi eta materian zeharreko hedapeneraino eta eroaleetako xurgapeneraino."
    },
    {
     "mota": "testua",
     "html": "Bidea bost ataletan antolatzen da. Lehenik, uhinaren beraren kontzeptua zehazten da dimentsio bakarrean —soka tenkatu bat da eredu mekaniko naturala—, eta uhin sinusoidalaren hiztegia finkatzen da. Ondoren, Maxwellen ekuazioetatik hutseko uhin elektromagnetikoak eratortzen dira, beren egitura, energia eta momentuarekin. Hirugarrenik, uhinak materian nola hedatzen diren aztertzen da, bai eta interfazeetako islapena eta transmisioa ere, intzidentzia normalean zein zeiharrean (Fresnel-en ekuazioak). Laugarrenik, eroaleetako xurgapena eta ingurune dielektrikoetako dispertsioa lantzen dira. Azkenik, hodi eroale batean konfinatutako uhinen jokabide berezia: uhin-gidak eta beren moduak."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Uhinak dimentsio batean",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uhin-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Zer da uhin bat? Kontzeptua zehatz-mehatz definitzea zaila da, baina abiapuntu on bat hau da: uhina <strong>ingurune jarraitu batean forma finkoz eta abiadura konstantez hedatzen den perturbazio bat da</strong>. Irudika ezazu soka tenkatu bat astintzen: sortutako gailurra sokan zehar bidaiatzen doa, bere itxura mantenduz, <math display=\"inline\"><mi>v</mi></math> abiaduraz. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean sokaren forma <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, geroagoko <math display=\"inline\"><mi>t</mi></math> unean forma bera aurkituko dugu, baina <math display=\"inline\"><mrow><mi>v</mi><mi>t</mi></mrow></math> distantzia bat eskuinera desplazatuta."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio batek distortsiorik gabe bidaiatzen duen uhin bat deskribatzen du baldin eta <math display=\"inline\"><mi>z</mi></math>-ren eta <math display=\"inline\"><mi>t</mi></math>-ren mende <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math> konbinazioaren bidez bakarrik badago (edo <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi></mrow></math>-ren bidez, aurkako norabiderako). Halako funtzioek uhin-ekuazio klasikoa betetzen dute:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Uhin-ekuazioa (dimentsio batekoa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nondik dator ekuazio hori? Soka tenkatu batean, <math display=\"inline\"><mi>T</mi></math> tentsioaren eta <math display=\"inline\"><mi>μ</mi></math> masa-dentsitate linealaren mendekoa da higidura. <math display=\"inline\"><mi>z</mi></math> eta <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math> arteko soka-zatiaren gaineko zeharkako indar garbia, malda txikietarako, honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>F</mi><mo>≈</mo><mi>T</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta Newton-en bigarren legeak, zatiaren masa <math display=\"inline\"><mrow><mi>μ</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math> izanik, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>F</mi><mo>=</mo><mi>μ</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> ezartzen du. Bien berdinketak zuzenean ematen du uhin-ekuazioa, hedapen-abiadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izanik. Ekuazioaren egitura funtsezkoa da: <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math> ageri denez, aztertzen den soluzio-mota bikoiztu egiten da; <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z gain, <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere soluzioa da (ezkerrera hedatzen den uhina). Are gehiago, uhin-ekuazioa <strong>lineala</strong> denez, soluzio orokorra bien batura da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Linealtasun horrek gainezarmen-printzipioa bermatzen du, eta hori izango da kapitulu osoaren giltzarria: edozein uhin, konplexua bada ere, soluzio sinpleagoen batura gisa eraiki daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uhin sinusoidalak"
    },
    {
     "mota": "testua",
     "html": "Soluziorik garrantzitsuenak uhin sinusoidalak (monokromatikoak)  dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Uhin sinusoidala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non uhin-luzera <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> den, periodoa <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>ω</mi></mrow></math> eta abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hiztegia finkatu behar da. <math display=\"inline\"><mi>A</mi></math> <strong>anplitudea</strong> da (oszilazioaren gehieneko desplazamendua, beti positiboa). Kosinuaren argumentua <strong>fasea</strong> da, eta <math display=\"inline\"><mi>δ</mi></math> <strong>fase-konstantea</strong> (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>δ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math> tartean hartu ohi da); <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mi>k</mi></mrow></math> da faseak zenbat &quot;atzeratzen&quot; duen uhinaren gailur nagusia jatorriarekiko. <math display=\"inline\"><mi>k</mi></math> <strong>uhin-zenbakia</strong> da, uhin-luzerarekin lotua, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>λ</mi></mrow></math>: <math display=\"inline\"><mi>z</mi></math>-k <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> aurreratzean, kosinuak ziklo oso bat egiten du. Puntu finko batean, sokak <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>ω</mi></mrow></math> periodoan egiten du ziklo osoa, eta <strong>maiztasuna</strong> <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>λ</mi></mrow></math> da. <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> <strong>maiztasun angeluarra</strong> da, kalkuluetarako erosoena."
    },
    {
     "mota": "testua",
     "html": "Ezkerrera bidaiatzen duen uhin sinusoidal bat <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> idatziko litzateke: <math display=\"inline\"><mi>k</mi></math>-ren zeinua aldatzeak norabidea aldatzen du, gainerako guztia berdin utzita."
    },
    {
     "mota": "testua",
     "html": "Notazio konplexuak asko errazten du sinusoideekiko lana. Euler-en formulari esker,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "uhin sinusoidala honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> <strong>uhin-funtzio konplexua</strong> den, <math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup></mrow></math> <strong>anplitude konplexuak</strong> fase-konstantea barneratuta. Benetako uhina <math display=\"inline\"><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover></math>-ren zati erreala da. Abantaila argia da: esponentzialak sinuak eta kosinuak baino askoz errazago maneiatzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.1 adibidea — Bi uhin sinusoidalen batura"
    },
    {
     "mota": "testua",
     "html": "Demagun frekuentzia eta uhin-zenbaki bereko bi uhin sinusoidal batu nahi ditugula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sinuekin eta kosinuekin zuzenean eginez gero, trigonometria-identitateen artean galduko ginateke. Notazio konplexuarekin, ordea, ia berehalakoa da: batura zati errealen batura denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub></mrow></math> izanik. Frekuentzia eta uhin-zenbaki bera dutenez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non anplitude konplexuak besterik gabe batzen diren:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hau da, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>3</mn></msub></mrow></msup><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>2</mn></msub></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Batutako uhinak frekuentzia eta uhin-luzera bera gordetzen ditu, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> formakoa, eta anplitudea zein fasea zuzenean lortzen dira zati errealak eta irudikariak berdinduta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><msqrt><mrow><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>A</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Muga-kasuek zentzua dute: fasean daudenean (<math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>2</mn></msub></mrow></math>), <math display=\"inline\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> (interferentzia eraikitzailea); aurkako fasean (<math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi></mrow></math>), <math display=\"inline\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> (interferentzia deuseztatzailea). Notazio konplexuak, beraz, interferentzia-fenomeno osoa bektore-batura soil bihurtzen du."
    },
    {
     "mota": "testua",
     "html": "Nahiz eta uhin sinusoidala forma oso berezia izan, funtsezko egitatea hau da: <strong>edozein</strong> uhin uhin sinusoidalen konbinazio lineal gisa idatz daiteke,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">d</mi><mi>k</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maxwellen ekuazioak linealak direnez, edozein uhin (edozein formatakoa) maiztasun ezberdinetako uhin sinusoidalen gainezarmen gisa eraiki daiteke — Fourier-en teorema, elektrodinamikari aplikatuta."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muga-baldintzak: islapena eta transmisioa soka batean"
    },
    {
     "mota": "testua",
     "html": "Orain arte soka infinitua suposatu dugu. Baina zer gertatzen da uhinak muturrera iristean? Dena dago sokaren lotura-moduaren mende. Demagun <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>-n lehen soka bat (<math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> abiadurakoa) bigarren batekin (<math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>) lotzen dela, tentsio berbera baina masa-dentsitate desberdinekin. Ezkerretik datorren <strong>uhin erasotzaileak</strong> <strong>uhin islatu</strong> bat (1. sokara itzultzen) eta <strong>uhin transmititu</strong> bat (2. sokan aurrera) sortzen ditu. Hirurak frekuentzia berean oszilatzen dute, baina uhin-zenbakiak desberdinak dira (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mi>/</mi><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mi>/</mi><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Loturan bi baldintza bete behar dira: <math display=\"inline\"><mi>f</mi></math> jarraitua izatea (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>-n bat etortzea), eta —korapiloak masarik ez badu— <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>z</mi></mrow></math> ere jarraitua izatea (bestela indar infinitua legoke korapiloan). Bi baldintzak ezarrita, irteerako anplitudeak sarrerakoaren mende geratzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>R</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>T</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bigarren soka arinagoa bada (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>), hiru uhinak fasean daude. Astunagoa bada (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>), uhin islatua <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> desfasatuta dago —&quot;buruz behera&quot; itzultzen da—. Muturrean soka finkatuta badago (bigarren soka infinituki astuna), <math display=\"inline\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>R</mi></msub><mo>=</mo><mi>−</mi><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>T</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: dena islatzen da (uhin islatua alderantzikatuta itzultzen da). Egitura hau ia hitzez hitz errepikatuko da uhin elektromagnetikoen intzidentzia normalean, eta horregatik landu dugu hemen aurrez."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polarizazioa"
    },
    {
     "mota": "testua",
     "html": "Soka bat astintzean sortzen diren uhinak <strong>zeharkakoak</strong> dira: desplazamendua hedapen-norabidearekiko elkarzuta da. (Badira uhin <strong>luzetarrak</strong> ere, hala nola soinua airean, non desplazamendua hedapen-norabidearen norabide berekoa den; uhin elektromagnetikoak, ordea, zeharkakoak dira beti.)"
    },
    {
     "mota": "testua",
     "html": "Hedapen-lerroarekiko elkarzutak diren bi norabide daudenez, zeharkako uhinek <strong>polarizazio-egoera</strong> independente bitan gerta daitezke. Soka bertikalki astin dezakezu (&quot;polarizazio bertikala&quot;),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mi>v</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edo horizontalki (&quot;polarizazio horizontala&quot;),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edo <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> planoko beste edozein norabidetan. <strong>Polarizazio-bektoreak</strong> <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> oszilazio-planoa definitzen du; zeharkakotasunak <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eskatzen du. Polarizazio-angeluaren <math display=\"inline\"><mi>θ</mi></math> bidez, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span>, eta uhin orokorra bi uhinen gainezarmen gisa idatz daiteke, bata horizontalki eta bestea bertikalki polarizatua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Polarizazio lineala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau <strong>polarizazio lineala</strong> (edo &quot;laua&quot;) da: desplazamendua <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> bektore finko baten paraleloa da beti, bi osagaiak <strong>fase berean</strong> daudelako. Baina osagaiak <strong>desfasatuta</strong> egon daitezke. Anplitude bereko bi osagai <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> desfasatuta konbinatzen badira (adibidez <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>y</mi></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), puntu finko batean desplazamenduaren muturrak zirkulu bat marrazten du <math display=\"inline\"><mi>z</mi></math> ardatzaren inguruan: <strong>polarizazio zirkularra</strong>. Biraketa-noranzkoaren arabera, eskuin- edo ezker-zirkularra bereizten da (optikan, hurrenez hurren, erlojuaren noranzkoan edo kontrako noranzkoan begiratuz). Anplitudeak berdinak ez badira, edo desfasea <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> ez bada, muturrak elipse bat marrazten du: <strong>polarizazio eliptikoa</strong>, kasurik orokorrena, zeinaren muga-kasuak dira lineala (desfasea <math display=\"inline\"><mn>0</mn></math> edo <math display=\"inline\"><mi>π</mi></math>) eta zirkularra (anplitude berdinak, desfasea <math display=\"inline\"><mrow><mi>±</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "irudia",
     "oina": "Polarizazio-egoerak, <math display=\"inline\"><mi>z</mi></math> ardatzean behera begiratuta: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eremuaren muturrak zuzena (lineala), zirkulua (zirkularra) edo elipsea (eliptikoa) marrazten du hedapen-norabidearekiko zeharkako planoan.",
     "src": "media/irudiak/f42cc447b6715640.svg",
     "zabalera": 428
    },
    {
     "mota": "testua",
     "html": "Uhin elektromagnetikoetan, hitzarmenez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eremuaren norabidea hartzen da polarizazioa zehazteko."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Uhin elektromagnetikoak hutsean",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "E-ren eta B-ren uhin-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Kargarik eta korronterik gabeko espazio-eskualdeetan, Maxwellen ekuazioek forma hau hartzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-rako eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-rako lehen ordenako ekuazio kopladuak dira. Deskoplatzeko, errotazionala aplikatzen zaie Faraday-ren eta Ampère–Maxwellen legeei."
    },
    {
     "mota": "testua",
     "html": "Faraday-ren legearen errotazionala hartuz eta Ampère–Maxwellen legea ordezkatuz (biak 7. kapitulukoak), Maxwellen ekuazioak deskonplatu egiten dira, eremu bakoitzarentzat uhin-ekuazio bana emanez:"
    },
    {
     "mota": "testua",
     "html": "Izan ere, <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math> identitatea erabiliz, eta <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> dela kontuan izanik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta antzera <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-rako. Horrela lortzen dira uhin-ekuazioak:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Hutseko uhin-ekuazioak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Prezioa ordaindu dugu: orain bigarren ordenako ekuazioak dira, baina bereiziak. Osagai kartesiar bakoitzak hiru dimentsioko uhin-ekuazioa betetzen du, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> formakoa."
    },
    {
     "mota": "testua",
     "html": "Dimentsio bateko uhin-ekuazioarekin alderatuz, hedapen-abiadura identifikatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></msqrt></mfrac><mo>=</mo><mi>c</mi><mo>=</mo><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— argiaren abiadura, zehazki. Maxwellen ekuazioek <math display=\"inline\"><mi>c</mi></math> abiaduraz bidaiatzen duten uhin elektromagnetikoak <strong>iragartzen</strong> dituzte; argia bera halako uhin bat dela identifikatzea XIX. mendeko fisikaren bateratze handienetako bat izan zen."
    },
    {
     "mota": "testua",
     "html": "Ohartarazi behar da <math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>ϵ</mi><mn>0</mn></msub></math> argiarekin zerikusirik ez zuten esperimentuetan (karga elektrikoak, bateriak, hariak) neurtzen direla; hala ere, Maxwellen teoriak <math display=\"inline\"><mi>c</mi></math> kalkulatzen du bi zenbaki horietatik. Funtsezkoa da Maxwellek Ampèreren legeari egindako ekarpena (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>): hori gabe ez legoke uhin-ekuaziorik, eta ez legoke argiaren teoria elektromagnetikorik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uhin lau monokromatikoak"
    },
    {
     "mota": "testua",
     "html": "9.1.2 atalean ikusitako arrazoiengatik, <math display=\"inline\"><mi>ω</mi></math> frekuentzia bakarreko uhin sinusoidaletara mugatzen gara: uhin <strong>monokromatikoak</strong>. Ikusgai-tartean, frekuentzia desberdinak kolore desberdinei dagozkie. Gainera, <math display=\"inline\"><mi>z</mi></math> norabidean bidaiatzen dutela eta <math display=\"inline\"><mi>x</mi></math> nahiz <math display=\"inline\"><mi>y</mi></math>-rekiko mendekotasunik ez dutela suposatzen dugu; horiek dira <strong>uhin lauak</strong>, hedapen-norabidearekiko elkarzuta den plano orotan eremua uniformea baita."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> norabidean bidaiatzen duen uhin lau batek, <math display=\"inline\"><mi>x</mi></math>-ren luzeran linealki polarizatuak, forma hau hartzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Uhin lau monokromatikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Uhin elektromagnetiko lau bat: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> fasean oszilatzen dute, elkarrekiko eta hedapen-norabidearekiko elkarzut, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math> betez.",
     "src": "media/irudiak/5825a22483095667.svg",
     "zabalera": 298
    },
    {
     "mota": "testua",
     "html": "Hiru egitura-egitate, hirurak Maxwellen ekuazioek behartuak, ez suposatuak: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> hedapen-norabidearekiko elkarzutak dira (uhina <strong>zeharkakoa</strong> da), <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> elkarren artean elkarzutak dira, eta zehazki fasean oszilatzen dute, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math> betez."
    },
    {
     "mota": "testua",
     "html": "Egitate horiek <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>-tik datoz zuzenean. Lehenengoak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-ren <math display=\"inline\"><mi>z</mi></math> osagaia deuseztatzen du (zeharkakotasuna); bigarrenak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mn>0</mn></msub></math> anplitudeak lotzen ditu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mfrac><mi>k</mi><mi>ω</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hortik </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>k</mi><mi>ω</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Norabide arbitrarioan bidaiatzen duen uhinerako, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> <strong>hedapen-bektorea</strong> (edo uhin-bektorea) sartzen da, <math display=\"inline\"><mi>k</mi></math> moduluko eta hedapen-norabideko; orduan <math display=\"inline\"><mrow><mi>k</mi><mi>z</mi></mrow></math>-ren ordez <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> ageri da, eta <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> polarizazio-bektorearekin (<math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ondoko taulak espektro elektromagnetikoaren zabalera erakusten du, gamma izpietatik irrati-uhinetaraino:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Espektro elektromagnetikoa (Griffiths-en 9.1 taulan oinarritua, <math display=\"inline\"><mrow><mi>λ</mi><mi>ν</mi><mo>=</mo><mi>c</mi></mrow></math>-rekin lerrokatua). Ikusgai-tartea <math display=\"inline\"><mrow><mn>4.0</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math> m (morea) eta <math display=\"inline\"><mrow><mn>7.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math> m (gorria) artekoa da.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<div class=\"j-taula\"><table><thead><tr><th><strong>Maiztasuna (Hz)</strong></th><th><strong>Mota</strong></th><th><strong>Uhin-luzera (m)</strong></th></tr></thead><tbody><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>20</mn></msup></math></td><td>gamma izpiak</td><td><math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>18</mn></msup></math></td><td>X izpiak</td><td><math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>16</mn></msup></math></td><td>ultramorea</td><td><math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></math></td></tr><tr><td><math display=\"inline\"><mrow><mo>≈</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></math></td><td>ikusgaia</td><td><math display=\"inline\"><mrow><mo>≈</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>14</mn></msup></math></td><td>infragorria</td><td><math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>10</mn></msup></math></td><td>mikrouhina</td><td><math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>8</mn></msup></math></td><td>TB, FM</td><td><math display=\"inline\"><mn>1</mn></math></td></tr><tr><td><math display=\"inline\"><msup><mn>10</mn><mn>6</mn></msup></math></td><td>AM</td><td><math display=\"inline\"><msup><mn>10</mn><mn>2</mn></msup></math></td></tr></tbody></table></div>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.2 adibidea — <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> eremuen norabideak"
    },
    {
     "mota": "testua",
     "html": "Demagun <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eremuak <math display=\"inline\"><mi>x</mi></math> norabidean apuntatzen duela. Orduan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-k <math display=\"inline\"><mi>y</mi></math> norabidean apuntatzen du, <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erlaziotik: <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> delako eta <math display=\"inline\"><mrow><mi>k</mi><mi>/</mi><mi>ω</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>c</mi></mrow></math> delako. Notazio konplexuan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta zati erreala hartuz (fase-konstante orokor batekin, <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup></mrow></math>), benetako eremuak lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitzak hiru egitura-egitateak berresten ditu: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>∥</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (elkarzutak, eta biak <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> hedapen-norabidearekiko zeharkakoak), fase berean oszilatzen, eta <math display=\"inline\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><mi>c</mi></mrow></math> anplitude-erlazioarekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energia eta momentua EM uhinetan"
    },
    {
     "mota": "testua",
     "html": "8. kapituluko Poynting-en bektorea erabiliz, uhin lau monokromatiko baten energia-fluxuak, ziklo batean batez bestekoa eginda, <strong>intentsitatea</strong> ematen du:"
    },
    {
     "mota": "testua",
     "html": "Har dezagun pausoz pauso. Eremu elektromagnetikoetan gordetako energia-dentsitatea <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (8.13 ekuazioa). Uhin lau batean <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi></mrow></math> denez, <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup></mrow></math>, eta ekarpen elektrikoa eta magnetikoa <strong>berdinak</strong> dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Energia-fluxuaren dentsitatea Poynting-en bektoreak ematen du, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta <math display=\"inline\"><mi>z</mi></math> norabidean"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>c</mi><mi>u</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Argiaren kasuan uhin-luzera hain da laburra eta periodoa hain motza, ezen edozein neurketa makroskopikok ziklo asko hartzen baititu; interesatzen zaiguna batez besteko balioa da. <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math>-ren batez bestekoa ziklo osoan <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uhinak garraiatzen duen batez besteko potentzia azalera-unitateko <strong>intentsitatea</strong> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Uhin lau baten intentsitatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu elektromagnetikoek momentua ere badaramate: momentu-dentsitatea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> da, eta batez bestekoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝒈</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Argia xurgatzaile perfektu batera iristean bere momentua uzten dio azalari, eta horrek <strong>erradiazio-presioa</strong> sortzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Islatzaile perfektu batean presioa bikoitza da, momentua xurgatu beharrean noranzkoz aldatzen delako.) Presio hori txikia da eguzki-argiarentzat, baina neurgarria, eta izarren argiak edo laser indartsuek eragindako indarren oinarrian dago."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: eguzki-argiaren intentsitatea"
    },
    {
     "mota": "testua",
     "html": "Eguzki-argia <math display=\"inline\"><mrow><mi>I</mi><mo>≈</mo><mn>1370</mn></mrow></math>  W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> intentsitateaz iristen da Lurraren orbitara (&quot;eguzki-konstantea&quot;). Dagokion eremu elektrikoaren gailurra hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mrow><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo>×</mo><mn>1370</mn></mrow><mrow><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo>×</mo><mn>8.854</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></mrow></mfrac></msqrt><mo>≈</mo><mn>1.0</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> V/m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— zenbaki deigarria: eguzki-argi arruntak, batere nabarmena iruditzen ez zaigunak, 1000 V/m inguruko eremu-gailur bat dakar, laborategiko muntaia askotan aurkitzen diren eremuen parekoa, segundoko <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math> bat aldiz oszilatzen."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Uhin elektromagnetikoak materian",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hedapena ingurune linealetan"
    },
    {
     "mota": "testua",
     "html": "Dielektriko lineal baten (4. kapitulua) edo ingurune magnetiko baten (6. kapitulua) barruan, eratorpen berak uhin-ekuazio bat ematen du, <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math>-ren ordez <math display=\"inline\"><mrow><mi>μ</mi><mi>ϵ</mi></mrow></math>  jarrita:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Abiadura eta inpedantzia materian",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>μ</mi><mi>ϵ</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>c</mi><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><msqrt><mrow><msub><mi>ϵ</mi><mi>r</mi></msub><msub><mi>μ</mi><mi>r</mi></msub></mrow></msqrt></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi>n</mi></math>  <strong>errefrakzio-indizea</strong> den (material ez-magnetiko gehienentzat, <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>r</mi></msub><mo>≈</mo><mn>1</mn></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>n</mi><mo>≈</mo><msqrt><msub><mi>ϵ</mi><mi>r</mi></msub></msqrt></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>r</mi></msub><mo>&gt;</mo><mn>1</mn></mrow></math> ia beti denez, argia mantsoago dabil materian barrena —optikatik ondo ezaguna den egitatea—. Aurreko emaitza guztiak zuzenean egokitzen dira <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mn>0</mn></msub><mo>→</mo><mi>ϵ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>→</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>→</mo><mi>v</mi></mrow></math> ordezkapenekin: energia-dentsitatea <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ϵ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, eta intentsitatea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ϵ</mi><mi>v</mi><msubsup><mi>E</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Islapena eta transmisioa intzidentzia normalean"
    },
    {
     "mota": "testua",
     "html": "Bi ingurune linealen arteko interfaze batean, 7. kapituluko muga-baldintzak intzidentzia normaleko uhin batentzat lotuz, islapen- eta transmisio-koefizienteak lortzen dira, uhin-<strong>inpedantzien</strong> bidez (edo, baliokidean, errefrakzio-indizeen bidez):"
    },
    {
     "mota": "irudia",
     "oina": "Interfaze baten aurka erasotzen duen uhin bat uhin islatu batean (berriro 1. ingurunerantz) eta uhin transmititu batean (2. ingurunerantz) banatzen da, biak muga-baldintzak lotuz finkatuak.",
     "src": "media/irudiak/dbd48423cea2d02f.svg",
     "zabalera": 264
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun nondik datozen. <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> planoa bi ingurune linealen arteko muga bada, eta <math display=\"inline\"><mi>z</mi></math> norabidean <math display=\"inline\"><mi>x</mi></math>-ren luzeran polarizatutako uhin bat ezkerretik badator, muga-baldintzek (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>-n) eremu paraleloen jarraitutasuna eskatzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>+</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>−</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mi>β</mi><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> den. Bi ekuazioak ebatziz gero, irteerako anplitudeak lortzen dira; ingurune ez-magnetikoetan (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>β</mi><mo>≈</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub></mrow></math>, eta emaitzak sokako uhinen berdin-berdinak dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Islapen- eta transmisio-koefizienteak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(ingurune ez-magnetikoentzat, baliokidean, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia-frakzioei dagokienez, <strong>islapen-koefizientea</strong> <math display=\"inline\"><mi>R</mi></math> eta <strong>transmisio-koefizientea</strong> <math display=\"inline\"><mi>T</mi></math> definitzen dira, sarrerako intentsitatearekiko islatutako eta transmititutako intentsitateen zatidura gisa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "energia-kontserbazioak eskatzen duen bezala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: islapena aire–beira interfaze batean"
    },
    {
     "mota": "testua",
     "html": "Argia airetik (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>≈</mo><mn>1.00</mn></mrow></math>) beirara (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>≈</mo><mn>1.50</mn></mrow></math>) igarotzen da intzidentzia normalean. <strong>Anplitudearen</strong> islapen-koefizientea hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.00</mn><mo>−</mo><mn>1.50</mn></mrow><mrow><mn>1.00</mn><mo>+</mo><mn>1.50</mn></mrow></mfrac><mo>=</mo><mi>−</mi><mn>0.20</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Islatutako <strong>intentsitatea</strong>  (potentzia) anplitude-erlazioaren karratuaren arabera eskalatzen denez, islatutako potentzia-frakzioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.20</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0.04</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— %4 inguru: leiho-beira arruntetan ikusten duzun islapen ahul ezaguna, beste %96a zeharka transmititzen dela."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Islapena eta transmisioa intzidentzia zeiharrean"
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean uhina interfazearen aurka buruz buru zetorren (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Kasu orokorragoa <strong>intzidentzia zeiharra</strong> da: uhina <math display=\"inline\"><msub><mi>θ</mi><mi>I</mi></msub></math> angelu arbitrario batez iristen da. Orain hiru uhinek —erasotzaileak, islatuak eta transmitituak— <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> bektore desberdinak dituzte, baina frekuentzia bera. Muga-baldintzek eskatzen dute <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>t</mi></math>-rekiko mendekotasuna esponentzialetan berdina izatea interfaze osoan; hortik hiru lege geometriko ateratzen dira, elektrodinamika zehatzik ia erabili gabe:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Optika geometrikoaren hiru legeak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (islapenaren legea)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Snell-en legea)</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen legeak dio erasotzailearen, islatuaren eta transmitituaren uhin-bektoreek plano bat osatzen dutela (<strong>intzidentzia-planoa</strong>), gainazalaren normala ere barne. Bigarrenak intzidentzia- eta islapen-angeluak berdintzen ditu. Hirugarrena Snell-en legea da, errefrakzioarena."
    },
    {
     "mota": "irudia",
     "oina": "Intzidentzia zeiharra: erasotzailea (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>I</mi></msub></math>), islatua (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>R</mi></msub></math>) eta transmititua (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>T</mi></msub></math>) intzidentzia-planoan daude. <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub></mrow></math>, eta <math display=\"inline\"><msub><mi>θ</mi><mi>T</mi></msub></math> Snell-en legeak ematen du.",
     "src": "media/irudiak/e1d73dba79318342.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Muga-baldintzak anplitudeei aplikatuz (intzidentzia-planoaren paraleloki polarizatutako kasuan), <strong>Fresnel-en ekuazioak</strong> lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fresnel-en ekuazioak (polarizazio paraleloa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> diren."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> intzidentzia-angeluaren mende dago, Snell-en bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mi>T</mi></msub></mrow></msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mi>I</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Intzidentzia normalean (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>, eta aurreko ataleko emaitzak berreskuratzen dira. Intzidentzia laprisatzailean (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>→</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>∞</mi></mrow></math> eta uhina erabat islatzen da (errepide busti batean gauez gidatzean ikusten den distira dirdaitsua). Bien artean, badago <strong>Brewster-en angelua</strong> <math display=\"inline\"><msub><mi>θ</mi><mi>B</mi></msub></math>, non uhin islatua erabat itzaltzen den (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>β</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mi>B</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> denean, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>B</mi></msub><mo>≈</mo><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia-frakzioak, azkenik, honela geratzen dira polarizazio paraleloan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>α</mi><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Intzidentzia-planoarekiko <strong>elkarzut</strong> polarizatutako kasuak beste bi Fresnel-en ekuazio ditu, antzeko eran eratorriak; kasu horretan ez dago Brewster-en angelurik.) Brewster-en angeluan islatutako izpia erabat polarizatuta dago gainazalaren paraleloki; horregatik murrizten dute distira Polaroid betaurrekoek, transmisio-ardatza bertikala izanik."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Xurgapena eta dispertsioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uhin elektromagnetikoak eroaleetan"
    },
    {
     "mota": "testua",
     "html": "Eroale baten barruan (5. kapitulua), Ohm-en legeak (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><msub><mi>σ</mi><mi>c</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>) moteltze-gai bat gehitzen dio uhin-ekuazioari, eta uhin-zenbakia konplexu bihurtzen da:"
    },
    {
     "mota": "testua",
     "html": "Izan ere, Ampère–Maxwellen legean <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>f</mi></msub><mo>=</mo><msub><mi>σ</mi><mi>c</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math> sartuz, eremuen uhin-ekuazioak gai berri bat hartzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>μ</mi><mi>ϵ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>μ</mi><msub><mi>σ</mi><mi>c</mi></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta plano-uhin soluzioek <math display=\"inline\"><mrow><msup><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msup><mo>=</mo><mi>μ</mi><mi>ϵ</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>i</mi><mi>μ</mi><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi></mrow></math> betetzen dute, uhin-zenbakia konplexua izanik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>κ</mi><mo>=</mo><msqrt><mfrac><mrow><mi>μ</mi><mi>ϵ</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>σ</mi><mi>c</mi></msub><mrow><mi>ϵ</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>κ</mi></math> zati irudikariak moteltze esponentziala deskribatzen du, uhinak eroalean barrena sartu ahala: "
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Larruazal-sakonera",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>z</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi>d</mi></math>, <strong>larruazal-sakonera</strong>, uhinaren anplitudea <math display=\"inline\"><mfrac><mn>1</mn><mi>e</mi></mfrac></math> faktore batez jaisten den distantzia den."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Eroale batean sartzen den uhin bat esponentzialki moteltzen da, eremua, funtsean, gainazaletik hurbileko <math display=\"inline\"><mi>d</mi></math> lodierako geruza mehe batera mugatuta (larruazal-sakonera).",
     "src": "media/irudiak/d0e7e772c96cc2ec.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "Zati errealak, <math display=\"inline\"><mi>k</mi></math>-k, uhin-luzera, hedapen-abiadura eta errefrakzio-indizea zehazten ditu ohiko eran. Bestalde, eremu magnetikoa elektrikoaren <strong>atzetik</strong> dator fasez, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>κ</mi><mi>/</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> angelu bat: eroaleetan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> jada ez daude fasean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: kobrearen larruazal-sakonera"
    },
    {
     "mota": "testua",
     "html": "Eroale on batentzat, &quot;erlaxazio-maiztasunaren&quot; oso azpiko maiztasunetan (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϵ</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≫</mo><mn>1</mn></mrow></math>), larruazal-sakonera <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>-ra sinplifikatzen da. Kobrearentzat (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mo>≈</mo><mn>5.96</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></math>  S/m), 60 Hz-etan (etxeko sare-maiztasuna),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mn>2</mn><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mo>×</mo><mn>5.96</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo>×</mo><mn>2</mn><mi>π</mi><mo>×</mo><mn>60</mn></mrow></mfrac></msqrt><mo>≈</mo><mn>8.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mm </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Irrati-maiztasunetan (MHz eremuan), formula berak mikra gutxi batzuetako larruazal-sakonerak ematen ditu — horra zergatik, praktikan, maiztasun handiko korronteak gainazaleko geruza mehe batean bakarrik dabiltzan harietan eta antenetan, eta zergatik RF eroaleak sarritan zilarreztatuak diren, zilar trinkozkoak izan beharrean: kanpoko azalak bakarrik darama korrontea, benetan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Islapena eroale-gainazalean"
    },
    {
     "mota": "testua",
     "html": "Eroale on batetik islatzen den uhina ere landu daiteke, muga-baldintza orokorragoekin (karga eta korronte askeak azalean). Eroale <strong>perfektu</strong> baten kasuan (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mo>→</mo><mi>∞</mi></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>), emaitza sinplea da: <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mi>−</mi><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>=</mo><mn>0</mn></mrow></math>. Uhina erabat islatzen da, <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> desfasatuta. Horregatik dira eroale onak ispilu onak: praktikan, beira baten atzealdean zilar-geruza mehe bat ematen da (zilarraren larruazal-sakonera optika-maiztasunetan <math display=\"inline\"><mn>100</mn></math> Å ingurukoa da, beraz ez da geruza lodirik behar). Beirak berak ez du zerikusirik islapenarekin; euskarri gisa eta zilarra herdoiltzetik babesteko baino ez dago."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Larruazal-sakonera maiztasunarekin uzkurtzea <strong>dispertsio</strong> modu bat da — maiztasun ezberdinak era ezberdinean sartzen dira eroale batean barrena, eta (isolatzaileetan) maiztasun ezberdinak fase-abiadura ezberdinez ere bidaiatzen dute, <math display=\"inline\"><mi>ϵ</mi></math> bera maiztasunaren mendekoa baita maila mikroskopikoan. Horixe da beirazko prisma batek zabaltzen duen ostadarraren jatorria: argi bioletak eta gorriak <math display=\"inline\"><mi>n</mi></math> apur bat ezberdinak ikusten dituzte."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Errefrakzio-indizearen maiztasun-menpekotasuna"
    },
    {
     "mota": "testua",
     "html": "Orain arte <math display=\"inline\"><mi>ϵ</mi></math>, <math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><msub><mi>σ</mi><mi>c</mi></msub></math> konstantetzat hartu ditugu. Egiaz, hirurak maiztasunaren mende daude neurri batean. Permitibitatea benetan konstantea balitz, errefrakzio-indizea ere konstantea izango litzateke; baina optikatik ondo dakigu <math display=\"inline\"><mi>n</mi></math> uhin-luzeraren mende dagoela: prisma batek argi urdina gorria baino gehiago desbideratzen du. Fenomeno horri <strong>dispertsioa</strong> deritzo, eta uhinaren abiadura frekuentziaren mende dagoen ingurune orori <strong>dispertsiboa</strong>."
    },
    {
     "mota": "testua",
     "html": "Dispertsioaren ondorio garrantzitsu bat da uhin-pakete batek (&quot;olatu-multzo&quot;) forma aldatzen duela hedatzean. Osagai sinusoidal bakoitza <strong>fase-abiaduraz</strong> <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> higitzen den bitartean, paketea, oro har, <strong>talde-abiaduraz</strong> mugitzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fase-abiadura eta talde-abiadura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (fase-abiadura)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">d</mi><mi>ω</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><mi>k</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (talde-abiadura)</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin-pakete batek daraman energia, oro har, talde-abiaduraz bidaiatzen da; beraz, ez da harritzeko <math display=\"inline\"><mi>v</mi></math> zenbaitetan <math display=\"inline\"><mi>c</mi></math> baino handiagoa ateratzea, energiak ez baitu abiadura hori jarraitzen."
    },
    {
     "mota": "testua",
     "html": "Dispertsioaren jatorri mikroskopikoa ulertzeko, eredu sinple bat erabiltzen da: dielektriko bateko elektroi bakoitza malguki baten muturrean irudikatzen da, <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">malg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> konstanteko lotura-indarrarekin, gehi abiadurarekiko proportzionala den moteltze-indar bat (<math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>γ</mi><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>). <math display=\"inline\"><mi>ω</mi></math> frekuentziako uhin batek <math display=\"inline\"><mrow><mi>q</mi><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eragile-indar bat aplikatzen dio; Newton-en legeak oszilatzaile harmoniko moteldu eta bultzatu baten ekuazioa ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mfrac><mrow><msup><mi mathvariant=\"normal\">d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>m</mi><mi>γ</mi><mfrac><mrow><mi mathvariant=\"normal\">d</mi><mi>x</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mi>q</mi><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Notazio konplexuan ebazteko errazagoa da. Egoera egonkorrean sistemak eragilearen frekuentzian oszilatzen du, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>q</mi><mi>/</mi><mi>m</mi></mrow><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mi>i</mi><mi>γ</mi><mi>ω</mi></mrow></mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>N</mi></math> molekula badaude bolumen-unitateko, bakoitzak <math display=\"inline\"><msub><mi>f</mi><mi>j</mi></msub></math> elektroi <math display=\"inline\"><msub><mi>ω</mi><mi>j</mi></msub></math> frekuentziakoak eta <math display=\"inline\"><msub><mi>γ</mi><mi>j</mi></msub></math> moteltzekoak, polarizazioa (konplexua) hau da: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msub><mover><mi>χ</mi><mo accent=\"true\">̃</mo></mover><mi>e</mi></msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover></mrow></math>, eta hortik <strong>permitibitate konplexua</strong> eta <strong>konstante dielektriko konplexua</strong> ateratzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Konstante dielektriko konplexua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>ϵ</mi><mo accent=\"true\">̃</mo></mover><mi>r</mi></msub><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><msub><mi>f</mi><mi>j</mi></msub><mrow><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mi>i</mi><msub><mi>γ</mi><mi>j</mi></msub><mi>ω</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin-zenbakia orain konplexua da, <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msqrt><mrow><mover><mi>ϵ</mi><mo accent=\"true\">̃</mo></mover><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt><mi>ω</mi><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi></mrow></math>. Zati irudikariak uhina moteltzen du (<math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>z</mi></mrow></msup></math>), eta intentsitatea <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>∝</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>κ</mi><mi>z</mi></mrow></msup></mrow></math> denez, <strong>xurgapen-koefizientea</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>κ</mi></mrow></math> definitzen da. Gasetarako (non bigarren gaia txikia den), errefrakzio-indizea eta xurgapen-koefizientea hurbil daitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>k</mi></mrow><mi>ω</mi></mfrac><mo>≈</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><mrow><msub><mi>f</mi><mi>j</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>γ</mi><mi>j</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>κ</mi><mo>≈</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><mrow><msub><mi>f</mi><mi>j</mi></msub><msub><mi>γ</mi><mi>j</mi></msub></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>γ</mi><mi>j</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Errefrakzio-indizea (<math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>) eta xurgapen-koefizientea (<math display=\"inline\"><mi>α</mi></math>) erresonantzia baten inguruan. Normalean <math display=\"inline\"><mi>n</mi></math> maiztasunarekin igotzen da, baina erresonantzian behera egiten du bortizki (<strong>dispertsio anomaloa</strong>), xurgapen handienarekin bat eginez.",
     "src": "media/irudiak/16df1087c910bd59.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "Goiko irudian ikusten den bezala, gehienetan <math display=\"inline\"><mi>n</mi></math> pixkanaka igotzen da maiztasunarekin (optikan ohikoa dena), baina erresonantziaren inguru hurbilean bortizki jaisten da: hori da <strong>dispertsio anomaloa</strong>, eta xurgapen handieneko eremuarekin bat egiten du (materiala ia opakua izan daiteke tarte horretan). Erresonantzietatik urrun, moteltzea baztertu daiteke eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><msub><mi>f</mi><mi>j</mi></msub><mrow><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Material gardenetan, hurbilen dauden erresonantziak ultramorean egon ohi dira (<math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>j</mi></msub></mrow></math>); orduan garapenak <strong>Cauchy-ren formula</strong> ematen du, uhin-luzeraren mende:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>B</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>A</mi></math> <strong>errefrakzio-koefizientea</strong> eta <math display=\"inline\"><mi>B</mi></math> <strong>dispertsio-koefizientea</strong> diren. Formula honek ondo deskribatzen du gas eta beira gehienen dispertsioa eremu optikoan, eta <math display=\"inline\"><mi>n</mi></math> frekuentziarekin geldiro igotzen dela azaltzen du, tarteko &quot;anomalia&quot; batzuekin."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Uhin gidatuak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Uhin-gidak"
    },
    {
     "mota": "testua",
     "html": "Hodi eroale huts baten barruan konfinatutako uhin batek — <strong>uhin-gida</strong> batek — espazio irekiko uhin batek ez bezalako jokabidea du, oso. Horma eroaleek <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup><mo>=</mo><mn>0</mn></mrow></math> behartzen dute mugan (5. kapitulua), eta horrek onartutako zeharkako eremu-patroiak <strong>modu</strong> diskretutan kuantizatzen ditu, bakoitza bere hedapen-jokabidearekin. <math display=\"inline\"><mi>a</mi></math> zabalerako eta <math display=\"inline\"><mi>b</mi></math> altuerako gida laukizuzen batentzat, modu nagusia (ebaki-maiztasun txikienekoa, praktikan nagusi)  <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> da — zeharkako elektrikoa, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> nonahi eta uhin-luzera erdi bakarreko aldakuntza zabaleran zehar:"
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun hori nola sortzen den. Hodian barrena hedatzen den uhin monokromatiko batek forma orokor hau du: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, muga-baldintzak <math display=\"inline\"><mrow><msup><mi>E</mi><mo>∥</mo></msup><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>B</mi><mo>⟂</mo></msup><mo>=</mo><mn>0</mn></mrow></math> izanik hormetan. Uhin konfinatuak ez dira, oro har, zeharkakoak: osagai longitudinalak (<math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>) sartu behar dira. Maxwellen ekuazioetatik, zeharkako osagai guztiak (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>,</mo><msub><mi>E</mi><mi>y</mi></msub><mo>,</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><msub><mi>B</mi><mi>y</mi></msub></mrow></math>) <math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>-ren deribatuen bidez adieraz daitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>=</mo><mfrac><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>ω</mi><mfrac><mrow><mi>∂</mi><msub><mi>B</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta antzera </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>E</mi><mi>y</mi></msub><mo>,</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><msub><mi>B</mi><mi>y</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Nahikoa da, beraz, <math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> eta <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math> zehaztea. Horiek ekuazio bereizi bana betetzen dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> berdin </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>B</mi><mi>z</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rako</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> bada, uhinei <math display=\"inline\"><mtext mathvariant=\"normal\">TE</mtext></math> (&quot;zeharkako elektrikoa&quot;) deritze; <math display=\"inline\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mtext mathvariant=\"normal\">TM</mtext></math> (&quot;zeharkako magnetikoa&quot;); biak zero badira, <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math>. Hodi huts batean <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> moduak ezin dira gertatu."
    },
    {
     "mota": "irudia",
     "oina": "Uhin-gida laukizuzen baten <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>  modua: zeharkako eremu elektrikoa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren arabera aldatzen da zabaleran zehar, bi albo-hormetan deuseztuz, muga-baldintzak eskatzen duen bezala.",
     "src": "media/irudiak/bc092aafbe7968cb.svg",
     "zabalera": 300
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mtext mathvariant=\"normal\">TE</mtext></math> moduetarako, <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math> aldagaien banaketaz ebazten da, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Muga-baldintzek <math display=\"inline\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mo>=</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi></mrow></math> behartzen dituzte (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>), eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> modua da. Uhin-zenbakia <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow><mn>2</mn></msubsup></mrow></msqrt></mrow></math> da, non ebaki-maiztasuna <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mi>c</mi><mi>π</mi><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math> den:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "TE moduen ebaki-maiztasuna eta dispertsioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mi>c</mi><mi>π</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ebaki-maiztasun txikiena <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> moduarena da, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>10</mn></msub><mo>=</mo><mi>c</mi><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>. Fase-abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi><mo>=</mo><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math> da, <math display=\"inline\"><mi>c</mi></math> baino handiagoa; talde-abiadura, ordea, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math> da, <math display=\"inline\"><mi>c</mi></math> baino txikiagoa —energiak eramaten duena—."
    },
    {
     "mota": "irudia",
     "oina": "Uhin-gidaren dispertsio-erlazioa: <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> ebaki-maiztasunaren azpitik, <math display=\"inline\"><mi>k</mi></math> irudikari bihurtzen da eta uhina ezin da hedatu (era iraungikorrean moteltzen da, ordez); ebakiaren oso gainetik, kurba argiaren zuzen arruntera hurbiltzen da, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>c</mi><mi>k</mi></mrow></math>.",
     "src": "media/irudiak/841cb810f8cfb10a.svg",
     "zabalera": 257
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> ebaki-maiztasunaren azpitik, <math display=\"inline\"><mi>k</mi></math> uhin-zenbakia irudikari bihurtzen da — modua, besterik gabe, ezin da hedatu, eta hura eragiteko edozein saio esponentzialki moteltzen da distantziarekin, oszilatu beharrean. Horregatik jokatzen du uhin-gida batek goi-pasako iragazki gisa: gidaren ebaki-maiztasun txikienaren azpiko seinaleak erabat blokeatzen dira — benetan bestelako fenomeno bat, eroale galtsu batean ikusten den xurgapen gradualaren aldean (9.4 atala)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transmisio-lerro koaxiala"
    },
    {
     "mota": "testua",
     "html": "Hodi laukizuzen (edo zirkular) huts batek ezin du eutsi ebakirik <strong>batere</strong> gabeko uhin bati — baina kable koaxial batek, kanpoko blindajeaz gainera erditik doan eroale batekin, bai. <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> modu bati eusten dio (zeharkako elektriko <strong>eta</strong> magnetikoa, bi eremuak erabat zeharkakoak, espazio irekiko uhin lau bat bezalaxe), maiztasun <strong>guztietan</strong> hedatzen dena, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>-raino, inolako ebakirik gabe."
    },
    {
     "mota": "testua",
     "html": "Zergatik? Hodi huts batean <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> moduak Laplace-ren ekuazioa eskatzen du zeharkako planoan, muga-baldintza uniformeekin, eta horrek eremu nulua baino ez du onartzen. Baina erdiko eroaleak bigarren muga bat eransten du, potentzial desberdinekoa, eta horrek soluzio ez-tribiala ahalbidetzen du. <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> moduan <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>/</mi><mi>c</mi></mrow></math> da (beraz uhinak <math display=\"inline\"><mi>c</mi></math> abiaduraz doaz, dispertsiorik gabe), eta eremuak lerro-karga eta korronte zuzen infinituenak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>s</mi></mfrac><mover><mi>s</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi>s</mi></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Horra zergatik erabiltzen duten etxeko eta irrati-difusioko kableatze arruntek kable koaxiala, uhin-gida hutsak erabili beharrean, arrazoi praktikoz: uhin-gidak bikainak dira mikrouhin-maiztasunetan (haietan ebaki-maiztasunak eroso baxuak baitira eta galerak txikiak), baina alferrikakoak korronte zuzenean eta maiztasun baxuetan — kable koaxiala gailentzen den eremuan, hain zuzen."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ariketa ebatziak (Griffiths eskuliburutik)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengo ariketak Griffiths-en <strong>Introduction to Electrodynamics</strong> liburuko problemak dira (9. kapitulua, uhin elektromagnetikoak), irakaslearen eskuliburuko soluzioarekin, JAKINArako euskaratuak."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Griffiths 9.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu, deribatu esplizituz, hiru funtzio hauek"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "dimentsio bateko uhin-ekuazioa betetzen dutela,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta erakutsi"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>5</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "ez dutela betetzen."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>  (gaussiarra) eta <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>\n    (sinusoidala), biak <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>-ren funtzio soilak — forma\n  deformatu gabe higitzen dute <math display=\"inline\"><mi>v</mi></math> abiaduraz.",
       "src": "media/irudiak/620f718b4e5228cb.svg",
       "zabalera": 319
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen hiruretarako <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math> definitzen dugu. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>v</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Honek zuzenean frogatzen du <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>-ren edozein funtzio deribagarrik uhin-ekuazioa betetzen duela. <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>f</mi><mn>3</mn></msub></math>-k <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>-ren bidez bakarrik mende dutenez, hirurak soluzioak dira. <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>-en kasuan, esplizituki,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>f</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo>+</mo><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mi>t</mi></math>-rekiko deribatzeak <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi></mrow></math> faktore bat sartzen du lehen deribatuan eta <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math> bigarrenean, beraz <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math> berehala. Mekanismo bera balio du <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> eta <math display=\"inline\"><msub><mi>f</mi><mn>3</mn></msub></math>-rako."
    },
    {
     "mota": "testua",
     "html": "<strong>Huts egiten duten funtzioak.</strong>  <math display=\"inline\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>-rako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo>+</mo><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta adierazpen horiek ez dira berdinak <math display=\"inline\"><mi>z</mi></math> guztietarako; beraz <math display=\"inline\"><msub><mi>f</mi><mn>4</mn></msub></math>-k ez du uhin-ekuazioa betetzen."
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>f</mi><mn>5</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>-rako, deribatu espazial bigarrena <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>−</mi><msup><mi>b</mi><mn>2</mn></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>b</mi><mi>v</mi><mi>t</mi></mrow></math> izanik; denbora- deribatu bigarrena, ordea, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>5</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ez dator bat orokorrean <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>−</mi><msup><mi>b</mi><mn>2</mn></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>-rekin. Adibidez, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> denean, zati espaziala <math display=\"inline\"><mrow><mi>−</mi><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta zati tenporala <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math>-z zatituta <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><msub><mi>f</mi><mn>3</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzioak dira </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo><msub><mi>f</mi><mn>5</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez dira soluzioak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Griffiths 9.9",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> anplitudeko, <math display=\"inline\"><mi>ω</mi></math> maiztasuneko eta zero fase-angeluko uhin lau monokromatiko baten eremu elektriko eta magnetiko errealak, (a) <math display=\"inline\"><mi>x</mi></math> ardatzaren norabide negatiboan hedatzen dena eta <math display=\"inline\"><mi>z</mi></math> norabidean polarizatua, eta (b) jatorritik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> punturako norabidean hedatzen dena, <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math> planoarekiko paraleloki polarizatua. Kasu bakoitzean, marraztu uhina eta eman <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> eta <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>-ren osagai kartesiar esplizituak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin lau monokromatiko baten forma orokorrean, hedapen-norabidea <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></math> bektore unitarioak ematen du, polarizazioa <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>-k (eremu elektrikoaren norabidea), eta biak elkarzutak dira, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Fase-angelua nulua denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(a) <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math> norabidea, <math display=\"inline\"><mi>z</mi></math> polarizazioa.</strong> Hemen <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, beraz <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></math>; polarizazioa <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da, eta <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> betetzen da. Bektore-biderkadura <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da (izan ere <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>). Kosinua bikoitia denez, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(b) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> norabidea, <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math> planoko polarizazioa.</strong> Hedapen-norabidea <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math> da, beraz <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Polarizazioak <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math> planoan egon behar du eta <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></math>-rekiko elkarzuta izan; beraz <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>α</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>β</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> moduan, non <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> izateak <math display=\"inline\"><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> inposatzen duen eta unitarioa izateak <math display=\"inline\"><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><msup><mi>β</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; hortik <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>. Bektore-biderkadura determinatzailez kalkulatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Uhin lau monokromatikoaren egitura: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta\n<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> elkarzutak dira, fasean oszilatzen dute eta hedapen-norabidearekiko\nelkarzutak dira (uhin zeharkakoa).",
     "src": "media/irudiak/5825a22483095667.svg",
     "zabalera": 298
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (uhin lau ororentzat). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.9 (numerazio bera 3. eta 4. argitalpenetan). Emaitza irakaslearen soluzio-eskuliburuko 9.9 problemarekin bat dator."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Griffiths 9.10",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lurrera iristen den eguzki-argiaren intentsitatea <math display=\"inline\"><mn>1300</mn></math> W/m² ingurukoa da. Eguzki-argiak xurgatzaile perfektu bat jotzen badu, zer presio eragiten du? Eta islatzaile perfektu batean? Zer atmosfera-presio frakzio da hori?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin elektromagnetiko batek energia ez ezik momentua ere badarama: momentu-dentsitatea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> da, eta intentsitatea <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Xurgatzaile perfektu batek argiaren momentu guztia hartzen du: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> denboran <math display=\"inline\"><mi>A</mi></math> azalerara iristen den momentua <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>c</mi><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> da. Erradiazio-presioa (azaleko unitateko batez besteko indarra) honela geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mi>A</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbakiekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1300</mn><mrow><mn>3.0</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>=</mo><mn>4.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N/m²</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Islatzaile perfektu batean momentua norabidez aldatzen da (ez da soilik xurgatzen), eta beraz presioa bikoitza da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">isla </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mi>c</mi></mfrac><mo>=</mo><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N/m²</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Atmosfera-presioa <math display=\"inline\"><mrow><mn>1.03</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> N/m² denez, argiaren presioak (islatzailean) atmosfera-presioaren frakzio hau hartzen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow><mrow><mn>1.03</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></mfrac><mo>=</mo><mn>8.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Presioa izugarri txikia da: horregatik erradiazio-presioaren ondorioak soilik testuinguru berezietan dira nabariak (kometen isatsak, izarren barneko oreka, laser bidezko manipulazioa)."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (xurgatzailea)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mi>c</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (islatzailea). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.10 (numerazio bera 3. eta 4. argitalpenetan). Balioak (<math display=\"inline\"><mrow><mn>4.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> N/m², <math display=\"inline\"><mrow><mn>8.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> atmosfera) irakaslearen soluzio-eskuliburuko 9.10 problemarekin bat datoz."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Griffiths 9.11",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Notazio konplexuan, frogatu bi funtzioren biderkaduraren denbora-batez bestekoa kalkulatzeko trikimailua. Baldin"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "frogatu"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>a</mi></msub></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math> anplitude konplexuak diren. Formulak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> eta <math display=\"inline\"><mi>ω</mi></math> berdinak dituzten bi uhinetarako balio du, anplitude eta fase ezberdinekin izan arren."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi></mrow></math> idatziz, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mi>g</mi><mo>=</mo><mi>A</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da. <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> identitatea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub></mrow></math>-rekin erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mi>g</mi><mo>=</mo><mfrac><mrow><mi>A</mi><mi>B</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Periodo baten gaineko batez bestekoak bigarren gaia ezabatzen du, <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math> maiztasunez oszilatzen baitu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>B</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Anplitude konplexuak <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>a</mi></msub></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math> direla, <math display=\"inline\"><mrow><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math> da, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>A</mi><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordezkatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Aplikazioa uhin elektromagnetikoetara.</strong> Eremuen biderkadura koadratikoetarako trikimailu bera erabiltzen da: <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover></math> eta <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover></math> anplitude konplexuak izanik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>⋅</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo>+</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo>⋅</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msub><mi>μ</mi><mn>0</mn></msub></mrow></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>×</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> faktorea bi kosinu-biderkaduraren denbora-batez bestekotik dator; energian, gainera, dentsitatearen berezko <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> faktorea dago, eta horregatik <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math> gelditzen da. Batez bestekoa ez da fase absolutuen mende bakarka, <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub></mrow></math> diferentziaren mende baizik."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Griffiths 9.13",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu islapen- eta transmisio-koefiziente zehatzak, <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> dela suposatu gabe. Egiaztatu <math display=\"inline\"><mrow><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math> betetzen dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi ingurune linealen arteko interfazean (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> planoa, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mi>z</mi></math> norabidean hedatzen den eta <math display=\"inline\"><mi>x</mi></math> norabidean polarizatutako uhin batek intzidentzia normalean jotzen du. Erasotzaile, islatu eta transmititu uhinen batura mugalde-baldintzek lotzen dute: <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi mathvariant=\"bold-italic\">𝑩</mi><mo>∥</mo></msup></mrow></math> jarraituak izan behar dute <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>-n. Hortik anplitude irteera hauek ateratzen dira, anplitude erasotzailearen bidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>R</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>I</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>T</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>I</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Islapen-koefizientea intentsitate islatuaren eta erasotzailearen arteko zatidura da. Intentsitatea <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ε</mi><mi>v</mi><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> denez, eta uhin islatuak erasotzaileak bezalako ingurune bera zeharkatzen duenez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><msub><mi>I</mi><mi>R</mi></msub><msub><mi>I</mi><mi>I</mi></msub></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>R</mi></mrow></msub><msub><mi>E</mi><mrow><mn>0</mn><mi>I</mi></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Transmisio-koefizientean, ordea, bigarren ingurunearen <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></math> agertzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msub><mi>I</mi><mi>T</mi></msub><msub><mi>I</mi><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>ε</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>T</mi></mrow></msub><msub><mi>E</mi><mrow><mn>0</mn><mi>I</mi></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ε</mi><mi>v</mi><mo>=</mo><msqrt><mrow><mi>ε</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> denez, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>=</mo><mi>β</mi></mrow></math></span> da, eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bien batura eginda,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>β</mi><mo>+</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "energiaren kontserbazioak eskatzen duen bezala. Ingurune ez-magnetikoetan (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msub><mi>n</mi><mn>2</mn></msub><mi>/</mi><msub><mi>n</mi><mn>1</mn></msub></mrow></math> da, eta orduan <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. Adibidez, argia airetik (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>) beirara (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mn>1.5</mn></mrow></math>) igarotzean <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.5</mn><mi>/</mi><mn>2.5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0.04</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0.96</mn></mrow></math>: argiaren %96 transmititzen da."
    },
    {
     "mota": "irudia",
     "oina": "Intzidentzia normala bi ingurune\nlinealen interfazean: uhin erasotzailea, islatua eta transmititua.\nAnplitudeen zatidurek <math display=\"inline\"><mi>β</mi></math>-ren mende diraute.",
     "src": "media/irudiak/dbd48423cea2d02f.svg",
     "zabalera": 264
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.13 (3. argitalpena; 4. argitalpenean 9.14 zenbakia du). Soluzioa irakaslearen soluzio-eskuliburuko 9.14 problemarekin bat dator; airetik beirarako <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>0.04</mn></mrow></math> balioa liburuko testuko emaitza da (9.88 ekuazioaren ingurua)."
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Griffiths 9.19",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Erakutsi eroale eskas batean (<math display=\"inline\"><mrow><mi>σ</mi><mo>≪</mo><mi>ω</mi><mi>ε</mi></mrow></math>) larruazal-sakonera <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>ε</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> dela (maiztasunarekiko independentea). Aurkitu ur garbi baten larruazal-sakonera metrotan. (b) Erakutsi eroale on batean (<math display=\"inline\"><mrow><mi>σ</mi><mo>≫</mo><mi>ω</mi><mi>ε</mi></mrow></math>) larruazal-sakonera <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math> dela (<math display=\"inline\"><mi>λ</mi></math> eroaleko uhin-luzera izanik). Aurkitu metal tipiko baten (<math display=\"inline\"><mrow><mi>σ</mi><mo>≈</mo><msup><mn>10</mn><mn>7</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>) larruazal-sakonera nanometrotan, ikusgai-tartean (<math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msup><mn>10</mn><mn>15</mn></msup><mi>/</mi><mi>s</mi></mrow></math>), <math display=\"inline\"><mrow><mi>ε</mi><mo>≈</mo><msub><mi>ε</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>μ</mi><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> hartuta. Zergatik dira metalak opakuak? (c) Erakutsi eroale on batean eremu magnetikoak eremu elektrikoari 45°-ko atzerapena daramala, eta aurkitu haien anplitudeen zatidura."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eroale batean uhin-zenbakia konplexua da, <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi></mrow></math>, eta <math display=\"inline\"><mi>κ</mi></math> zati irudikariak eragiten du moteltzea; larruazal-sakonera <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>κ</mi></mrow></math> da, non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>=</mo><mi>ω</mi><msqrt><mfrac><mrow><mi>ε</mi><mi>μ</mi></mrow><mn>2</mn></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(a) Eroale eskasa.</strong> <math display=\"inline\"><mrow><mi>σ</mi><mo>≪</mo><mi>ω</mi><mi>ε</mi></mrow></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>/</mi><mi>ε</mi><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>≪</mo><mn>1</mn></mrow></math>, eta <math display=\"inline\"><mrow><msqrt><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></msqrt><mo>≈</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math> garapenaz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≈</mo><mi>ω</mi><msqrt><mfrac><mrow><mi>ε</mi><mi>μ</mi></mrow><mn>2</mn></mfrac></msqrt><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo>=</mo><mfrac><mi>σ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>μ</mi><mi>ε</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> beraz </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>σ</mi></mfrac><msqrt><mfrac><mi>ε</mi><mi>μ</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "maiztasunarekiko independentea. Ur garbirako (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>80.1</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msqrt><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8.85</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></mfrac></msqrt><mo>≈</mo><mn>1.19</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hots, ia <math display=\"inline\"><mn>12</mn></math> km: ur garbia ia gardena da uhin elektromagnetikoentzat."
    },
    {
     "mota": "testua",
     "html": "<strong>(b) Eroale ona.</strong> <math display=\"inline\"><mrow><mi>σ</mi><mo>≫</mo><mi>ω</mi><mi>ε</mi></mrow></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>/</mi><mi>ε</mi><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> da nagusi, <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mi>κ</mi><mo>≈</mo><msqrt><mrow><mi>ω</mi><mi>μ</mi><mi>σ</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>κ</mi><mo>≈</mo><mi>λ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Metal tipikorako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≈</mo><msqrt><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mn>15</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>8</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mspace width=\"1.0em\"></mspace><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mo>≈</mo><mn>1.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>13</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremuak ez dira metalean ia batere sartzen; horrek azaltzen du metalen opakotasuna."
    },
    {
     "mota": "testua",
     "html": "<strong>(c) Fase-atzerapena.</strong> Eroale onean <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mi>κ</mi></mrow></math> denez, <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover></math>-ren fasea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>κ</mi><mi>/</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da, hots, 45°-koa: eremu magnetikoak eremu elektrikoari 45°-ko atzerapena darama. Anplitudeen zatidura, berriz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>B</mi><mn>0</mn></msub><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>=</mo><msqrt><mrow><mi>ε</mi><mi>μ</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></msqrt><mo>≈</mo><msqrt><mfrac><mrow><mi>σ</mi><mi>μ</mi></mrow><mi>ω</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Uhinaren moteltzea eroale baten barruan:\nanplitudea <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>z</mi><mi>/</mi><mi>d</mi></mrow></msup></math> eran erortzen da, <math display=\"inline\"><mi>d</mi></math> larruazal-sakonera izanik.",
     "src": "media/irudiak/d0e7e772c96cc2ec.svg",
     "zabalera": 266
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mfrac><mn>2</mn><mi>σ</mi></mfrac><msqrt><mfrac><mi>ε</mi><mi>μ</mi></mfrac></msqrt><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eroale eskasa)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eroale ona). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.19 (3. argitalpena; 4. argitalpenean 9.20 zenbakia du). Balioak (<math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>1.19</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> m urarentzat, <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>13</mn></mrow></math> nm metalarentzat) irakaslearen soluzio-eskuliburuko 9.20 problemarekin bat datoz."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Griffiths 9.22",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Ur sakoneko olatuen fase-abiadura uhin-luzeraren erro karratuarekiko proportzionala da. Erakutsi olatu horien fase-abiadura talde-abiaduraren bikoitza dela."
      },
      {
       "mota": "testua",
       "html": "(b) Mekanika kuantikoan, <math display=\"inline\"><mi>x</mi></math> norabidean bidaiatzen duen <math display=\"inline\"><mi>m</mi></math> masako partikula libre bat honela deskribatzen da:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/ffc68e55a0fee32c.svg\" alt=\"Psi(x,t) = A e^(i(p x - E t)\\/hbar),\" style=\"width:12.035em;height:1.640em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>p</mi></math> momentua eta <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> energia zinetikoa izanik. Kalkulatu talde-abiadura eta konparatu partikularen abiadura klasikoarekin. Ohartu, gainera, fase-abiadura talde-abiaduraren erdia dela."
      },
      {
       "mota": "irudia",
       "oina": "Ur sakoneko olatuen dispertsio-\n  erlazioa, <math display=\"inline\"><mrow><mi>ω</mi><mo>∝</mo><msqrt><mi>k</mi></msqrt></mrow></math>: kurbaren malda tangenteak talde-\n  abiadura ematen du, eta jatorritik puntura zuzenaren maldak\n  fase-abiadura.",
       "src": "media/irudiak/d6db8255de4796c5.svg",
       "zabalera": 245
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Fase-abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> da eta talde-abiadura <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>d</mi><mi>ω</mi><mi>/</mi><mi>d</mi><mi>k</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ur sakoneko olatuak.</strong> Enuntziatuak dio ur sakonean <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mi>λ</mi></msqrt></mrow></math> dela, <math display=\"inline\"><mi>α</mi></math> konstantea izanik. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math>; <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>=</mo><mi>α</mi><mi>k</mi><msqrt><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>k</mi></mfrac></msqrt><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mi>k</mi></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>k</mi></math>-rekiko deribatuz, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msqrt><mi>k</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; fase- abiadura <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mi>/</mi><msqrt><mi>k</mi></msqrt></mrow></math> zenez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo baliokidean </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>g</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Partikula libre kuantikoa.</strong> Emandako uhina <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> forma kanonikoarekin konparatuz, <img class=\"formula\" src=\"media/formulak/c58319e3ab93f318.svg\" alt=\"e^(i(p x-E t)\\/hbar) = e^(i((p\\/hbar)x - (E\\/hbar)t))\" style=\"width:16.180em;height:1.001em\" loading=\"lazy\"> denez, <img class=\"formula\" src=\"media/formulak/6f76365d792eb1a6.svg\" alt=\"k=p\\/hbar\" style=\"width:4.791em;height:1.001em\" loading=\"lazy\"> eta <img class=\"formula\" src=\"media/formulak/baa512d53436ab25.svg\" alt=\"omega=E\\/hbar\" style=\"width:5.220em;height:1.001em\" loading=\"lazy\"> identifikatzen ditugu. <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <img class=\"formula\" src=\"media/formulak/bb026a6c0d5f05cb.svg\" alt=\"p=hbar k\" style=\"width:4.213em;height:1.001em\" loading=\"lazy\"> erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/437d845e61a85e66.svg\" alt=\"omega = frac(1,hbar) frac(p^2,2m) = frac(hbar k^2, 2m).\" style=\"width:10.264em;height:3.397em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Fase-abiadura <img class=\"formula\" src=\"media/formulak/82a3cafc543f03af.svg\" alt=\"v = omega\\/k = hbar k\\/(2m) = p\\/(2m)\" style=\"width:15.957em;height:1.001em\" loading=\"lazy\"> da, eta talde-abiadura <img class=\"formula\" src=\"media/formulak/6b1a2d40f0975306.svg\" alt=\"v_g = dif omega\\/dif k = hbar k\\/m = p\\/m\" style=\"width:14.859em;height:1.001em\" loading=\"lazy\">. Partikula ez-erlatibista baten abiadura klasikoak <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub></mrow></math> betetzen duenez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>v</mi><mi>g</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Emaitza.</strong> Ur sakoneko olatuetarako <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>g</mi></msub></mrow></math>; partikula libre kuantiko ez-erlatibistarako <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>p</mi><mi>/</mi><mi>m</mi><mo>=</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>g</mi></msub><mi>/</mi><mn>2</mn></mrow></math>. Uhin-paketearen desplazamenduari lotutako abiadura fisikoa talde-abiadura da, ez fase-abiadura."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Griffiths 9.28",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kontuan hartu <math display=\"inline\"><mn>2.28</mn></math> cm <math display=\"inline\"><mi>×</mi></math> <math display=\"inline\"><mn>1.01</mn></math> cm dimentsioko uhin-gida laukizuzen bat. Zein TE modu hedatuko dira gida honetan, bultzatze- maiztasuna <math display=\"inline\"><mrow><mn>1.70</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> Hz bada? Modu TE bakarra kitzikatu nahi bazenu, zein maiztasun-tarte erabil zenezake? Zeintzuk dira dagozkien uhin-luzerak espazio librean?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin-gida laukizuzen batean (alde handiena <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2.28</mn></mrow></math> cm, txikiena <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>1.01</mn></mrow></math> cm), <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> moduaren ebaki-maiztasuna hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mfrac><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ebaki-maiztasuna baino maiztasun txikiagoetan uhin-zenbakia irudikaria da eta eremua esponentzialki itzaltzen da; modua ez da hedatzen. Modu baxuenen ebaki-maiztasunak (Hz-tan):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>10</mn></msub><mo>=</mo><mfrac><mi>c</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>=</mo><mn>0.66</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>20</mn></msub><mo>=</mo><mfrac><mi>c</mi><mi>a</mi></mfrac><mo>=</mo><mn>1.32</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>01</mn></msub><mo>=</mo><mfrac><mi>c</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac><mo>=</mo><mn>1.49</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>11</mn></msub><mo>=</mo><mn>1.62</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>30</mn></msub><mo>=</mo><mn>1.97</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>02</mn></msub><mo>=</mo><mn>2.97</mn><mo>×</mo><msup><mn>10</mn><mrow><mn>10</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bultzatze-maiztasuna <math display=\"inline\"><mrow><mn>1.70</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> Hz izanik, ebaki-maiztasuna horren azpitik duten moduak hedatzen dira: <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>, <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>20</mn></msub></math>, <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>01</mn></msub></math> eta <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>11</mn></msub></math> (lau modu). <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>30</mn></msub></math> eta <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>02</mn></msub></math> mozturik geratzen dira."
    },
    {
     "mota": "testua",
     "html": "Modu bakarra (<math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> soilik) izateko, bultzatze-maiztasunak <math display=\"inline\"><msub><mi>ν</mi><mn>10</mn></msub></math> eta hurrengo ebaki-maiztasunaren (<math display=\"inline\"><msub><mi>ν</mi><mn>20</mn></msub></math>) artean egon behar du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0.66</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>ν</mi><mo>&lt;</mo><mn>1.32</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Espazio libreko uhin-luzerak (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>c</mi><mi>/</mi><mi>ν</mi></mrow></math>) tarte horri dagozkio: <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ν</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>a</mi><mo>=</mo><mn>4.56</mn></mrow></math> cm eta <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ν</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>=</mo><mn>2.28</mn></mrow></math> cm, hots,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2.28</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>4.56</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Uhin-gida laukizuzenaren zeharkako sekzioa eta\n<math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> moduaren eremu-patroia, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "media/irudiak/bc092aafbe7968cb.svg",
     "zabalera": 300
    },
    {
     "mota": "irudia",
     "oina": "Uhin-gidaren dispertsio-erlazioa: <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>\nebaki-maiztasunetik behera ez dago hedapenik; goitik, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>k</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math> argiaren zuzenera hurbiltzen da.",
     "src": "media/irudiak/841cb810f8cfb10a.svg",
     "zabalera": 257
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> TE</mtext></mrow><mn>10</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakarra: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>2.28</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>4.56</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.28 (3. argitalpena; 4. argitalpenean 9.29 zenbakia du). Lau moduak (<math display=\"inline\"><mrow><mn>10</mn><mo>,</mo><mn>20</mn><mo>,</mo><mn>01</mn><mo>,</mo><mn>11</mn></mrow></math>) eta modu bakarreko tartea irakaslearen soluzio-eskuliburuko 9.29 problemarekin bat datoz."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ariketa proposatuak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengo ariketak Griffiths-en liburuko 9. kapituluko problemak dira (3. argitalpeneko numerazioa), ebatzi gabe proposatuak. Polarizazioa, dispertsioa eta uhin-gidak lantzen dituzte, kapitulu honetako gaien osagarri. 4. argitalpeneko baliokideak: <math display=\"inline\"><mrow><mn>9.14</mn><mo>→</mo><mn>9.15</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.24</mn><mo>→</mo><mn>9.25</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.29</mn><mo>→</mo><mn>9.30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.30</mn><mo>→</mo><mn>9.31</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.14 (polarizazioa).</strong> Uhin islatua eta transmititua idaztean, isilki onartu da erasotzailearen polarizazio bera dutela (biak <math display=\"inline\"><mi>x</mi></math> norabidean). Frogatu hala izan behar duela. Aholkua: har bitez transmititu eta islatuaren polarizazio-bektoreak <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mi>T</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mi>R</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>R</mi></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>R</mi></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span>, eta froga bedi mugalde-baldintzetatik <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>T</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub><mo>=</mo><mn>0</mn></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.24 (dispertsioa).</strong> Aurkitu dispertsio anomaloaren eskualdearen zabalera, <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> maiztasuneko erresonantzia bakarraren kasuan. Onartu <math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. Erakutsi errefrakzio-indizeak bere balio maximo eta minimoak hartzen dituela xurgapen-koefizientea bere erdi-maximoan dagoen puntuetan."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.29 (uhin-gidak).</strong> Egiaztatu <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> moduko energia talde-abiaduraz bidaiatzen duela. Aholkua: aurkitu denbora-batez besteko Poynting-en bektorea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> eta energia-dentsitatea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; integra itzazu gidaren zeharkako sekzioan, denbora- eta luzera-unitateko energia lortzeko, eta har ezazu haien zatidura."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.30 (uhin-gidak).</strong> Landu TM moduen teoria uhin-gida laukizuzen batentzat. Bereziki, aurkitu eremu elektriko longitudinala, ebaki-maiztasunak, eta uhin- eta talde-abiadurak. Aurkitu TM ebaki-maiztasun txikienaren eta TE ebaki-maiztasun txikienaren arteko zatidura. Kontuz: zein da TM modu txikiena?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Kapitulu honek uhin elektromagnetikoak garatzen ditu — uhin-ekuazioa, hutseko uhin lauak, hedapena materian, islapena/transmisioa eta xurgapena eroaleetan — CeTZ marrazki originalak erabiliz, JAKINArako euskaratua. </em>"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Potentzialak eta eremuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "2. eta 5. kapituluetan <math display=\"inline\"><mi>V</mi></math> potentzial eskalarra eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> bektore-potentziala aurkeztu ziren, problema estatikoetarako lasterbide eroso gisa. Kapitulu honek elektrodinamikaren <strong>funtsezko</strong> aldagai bihurtzen ditu — denboraren mendeko iturrietarako hizkuntza naturala, eta karga azeleratuetatik kanporantz eremuak <math display=\"inline\"><mi>c</mi></math> abiadura finituaz nola hedatzen diren ulertzeko bidea."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Formulazio potentziala",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzial eskalarra eta bektore-potentziala"
    },
    {
     "mota": "testua",
     "html": "Kapitulu honetako galdera hau da: iturriek (<math display=\"inline\"><mi>ρ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math>) nola sortzen dituzten eremuak, hau da, Maxwellen ekuazioen soluzio <strong>orokorra</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>ρ</mi><mi>/</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mtext mathvariant=\"normal\">(ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iv) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> emanda, zeintzuk dira <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? Kasu estatikoan Coulomb-en eta Biot–Savart-en legeek erantzuten dute; hemen lege horien denboraren mendeko orokortzea bilatzen dugu. Komeni da eremuak potentzialen bidez adieraztea."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> beti betetzen denez (5. kapitulua), <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> beti idatz daiteke errotazional gisa; Faraday-ren legean ordezkatuz (7. kapitulua), orduan, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>+</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> errotazionalik gabea dela ikusten da, eta, beraz, potentzial eskalar batetik eratorgarria:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potentzial orokorrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi definizio hauek automatikoki betetzen dituzte iturririk gabeko Maxwellen bi ekuazioak (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> eta Faraday-ren legea); iturridun bietan ordezkatuz (Gauss-en legea eta Ampère–Maxwell), <math display=\"inline\"><mi>V</mi></math>-rentzat eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-rentzat ekuazio-bikote akoplatu bat lortzen da, <math display=\"inline\"><mi>ρ</mi></math>-ren eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math>-ren bidez."
    },
    {
     "mota": "testua",
     "html": "Ordezkapen horiek esplizituki eginez, akoplamendua ageri da. Gauss-en legean <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> sartuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Poisson-en ekuazioa ordezten duena (kasu estatikora laburbiltzen da). Ampère–Maxwellen legean ordezkatuz, eta <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> identitatea erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi ekuazio akoplatu horiek Maxwellen ekuazioen informazio osoa daukate: sei osagai (hiru <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-renak, hiru <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-renak) lau magnitudetara murriztu ditugu — <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren hiru osagaiak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "10.1 adibidea — Potentzialetatik iturriak"
    },
    {
     "mota": "testua",
     "html": "Potentzialen formulazioaren lehen proba gisa, alderantzizko bidea egingo dugu: <strong>potentzialak</strong> emanda, zein <math display=\"inline\"><mi>ρ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> iturri sortzen dituzten aurkitu. Har ditzagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn mathvariant=\"bold\">𝟎</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>k</mi></math> konstantea den eta <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>ϵ</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-ko korronte-plaka <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n pizten da; eremuak ez-nuluak dira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math> eskualdean bakarrik — &quot;berria&quot; <math display=\"inline\"><mi>c</mi></math> abiaduraz hedatzen da bi noranzkoetan.",
     "src": "media/irudiak/76b6d2052cc11249.svg",
     "zabalera": 311
    },
    {
     "mota": "testua",
     "html": "Lehenik eremuak kalkulatuko ditugu. Eremu elektrikoa denbora-deribatutik dator soilik (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> baita):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu magnetikoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren errotazionala da; <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> <math display=\"inline\"><mi>x</mi></math>-ren mende soilik dagoenez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>±</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mi>+</mi></math> zeinua <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rako, <math display=\"inline\"><mi>−</mi></math> zeinua <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>-rako). Biak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math> eskualdean balio dute; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math> bada, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Ikusmenean dauden deribatu guztiak kalkulatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>∓</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>±</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Maxwellen lau ekuazioak betetzen dira <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> hutsean; adibidez, Ampère–Maxwellenak <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> eskatzen du, eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span> egiaztatzen da (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> delako)."
    },
    {
     "mota": "testua",
     "html": "Hala ere, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-k etena du <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n: hor <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mn>0</mn><mo>+</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mn>0</mn><mo>−</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Eten horrek <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math> planoan <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math> azalera-korronte bat dagoela adierazten du; 7. kapituluko mugalde-baldintzak (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">goi </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">behe </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑲</mi><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>) hau ematen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>=</mo><mi>k</mi><mi>t</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> norabidean doan azalera-korronte uniforme bat da, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n pizten dena eta <math display=\"inline\"><mi>t</mi></math>-rekin proportzionalki hazten dena. Berria (korrontea orain badoa) argiaren abiaduran hedatzen da bi noranzkoetan: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math> puntuetara oraindik ez da iritsi, eta han eremuak nuluak dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gauge-transformazioak"
    },
    {
     "mota": "testua",
     "html": "Potentzialak ez dira bakarrak: ordezkapen honek "
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Gauge-transformazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo>→</mo><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>λ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>→</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><mi>∇</mi><mi>λ</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "— <strong>edozein</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio eskalarrentzat — <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> erabat aldatu gabe uzten ditu."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Askatasun hori — <strong>gauge-askatasuna</strong> — ez da eragozpen bat, benetako sinplifikazio-tresna bat baizik: <math display=\"inline\"><mi>λ</mi></math>-ren aukera egoki batek <math display=\"inline\"><mi>V</mi></math>-ren eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren ekuazioak deskonplatu ditzake."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coulomb-en gauge-a eta Lorenz-en gauge-a"
    },
    {
     "mota": "testua",
     "html": "Bi aukera nagusitzen dira praktikan. <strong>Coulomb-en gauge-ak</strong>, <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>V</mi></math>-k Poisson-en ekuazio arrunta <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mi>−</mi><mi>ρ</mi><mi>/</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math> aldiuneko eran betetzea dakar (elektrostatikan bezala) — erosoa, baina kostu batekin: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren ekuazioa <math display=\"inline\"><mi>V</mi></math>-ri akoplatuta geratzen da."
    },
    {
     "mota": "testua",
     "html": "Coulomb-en gauge-aren berezitasun bat: <math display=\"inline\"><mi>V</mi></math> potentziala <strong>oraingo</strong> karga-banaketak berehala zehazten du, urrutiko aldaketak aldiune berean islatuz. Horrek ez du erlatibitatea hausten, <math display=\"inline\"><mi>V</mi></math> bera ez baita magnitude neurgarri bat; neurgarria den <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-k <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren ekarpena ere badu, eta konbinazio horixe da atzeratzen dena, &quot;berria&quot; iristeko behar den denbora igaro arte."
    },
    {
     "mota": "testua",
     "html": "<strong>Lorenz-en gauge-a</strong> naturalagoa da erradiazio-problemetarako:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Lorenz-en gauge-baldintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gauge honetan, <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> erabat deskonplatzen dira, bakoitzak bere uhin-ekuazio inhomogeneoa betez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potentzialak Lorenz-en gauge-an",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— Poisson-en ekuazioaren denboraren mendeko orokortze zehatza, laplacetarraren ordez <strong>uhin-eragilea</strong> jarrita. Limite estatikoak (denbora-deribatuak kenduta) 2. eta 5. kapituluak berreskuratzen ditu, zehatz-mehatz."
    },
    {
     "mota": "testua",
     "html": "Bi uhin-ekuazioek eragile diferentzial bera daukate, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>∂</mi><mn>2</mn></msup><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, <strong>d&#x27;Alembert-en eragilea</strong> deitua — laplacetarraren orokortze lau-dimentsiokoa. Harekin, biak forma trinko eta simetrikoan geratzen dira, eta Lorenz-en gauge-ak <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> oinarri berean tratatzen ditu: elektrodinamika osoa iturri jakinetarako uhin-ekuazio inhomogeneoa ebaztera murrizten da. Hori da hurrengo atalaren egitekoa."
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Banaketa jarraituak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzial atzeratuak"
    },
    {
     "mota": "testua",
     "html": "Lorenz-en gauge-ko uhin-ekuazioen soluzioa formula integral elektrostatiko/magnetostatikoen orokortze zuzena da, funtsezko aldaketa bakar batekin: iturria ez da ebaluatu behar oraingo <math display=\"inline\"><mi>t</mi></math> aldiunean, lehenagoko <strong>denbora atzeratuan</strong> baizik — <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>, argiak iturritik eremu-puntura bidaiatzeko behar duen denbora kenduta."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> denbora atzeratuan iturritik irtendako seinale bat <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math> argi-bidaiaren atzerapenaren ondoren bakarrik iristen da eremu-puntura — beraz, &quot;oraingo&quot; eremua &quot;orduko&quot; iturriaren mende dago.",
     "src": "media/irudiak/c64c13f35d946fd3.svg",
     "zabalera": 291
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potentzial atzeratuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "2. eta 5. kapituluetako formula guztiak berreskuratzen dira limite estatikoan, non <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-k ez baitu axola, ezer ez baita denboran aldatzen."
    },
    {
     "mota": "testua",
     "html": "Formula horiek <strong>arrazoizkoak</strong> dira, baina oraindik ez ditugu frogatu: &quot;berria argiaren abiaduran doa&quot; argudio heuristiko batez lortu ditugu. Frogatzeko, uhin-ekuazio inhomogeneoa eta Lorenz-en baldintza betetzen dituztela erakutsi behar da. Kontuz, ordea: argudio bera <strong>eremuei</strong> zuzenean aplikatzen bazaie, emaitza <strong>okerra</strong> da —"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>—</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eremu atzeratuek gai gehigarriak baitituzte (Jefimenko-ren ekuazioak, beherago)."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>V</mi></math>-ren laplacetarra kalkulatzeko, gakoa hau da: integrakizuna <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>-ren mende dago <strong>bi</strong> lekutan — esplizituki, izendatzailean (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>), eta inplizituki, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math> zenbakitzailean. Beraz gradientea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>+</mo><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren gradientea <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-ren bidez baino ez da agertzen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>ρ</mi><mo>=</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>∇</mi><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>∇</mi><mi mathvariant=\"script\">𝓇</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta hori ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>c</mi></mfrac><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>−</mo><mi>ρ</mi><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dibergentzia hartuz, eta <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>4</mn><mi>π</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> emaitzak erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mover><mi>ρ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>−</mo><mn>4</mn><mi>π</mi><mi>ρ</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da, hain zuzen,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "uhin-ekuazio inhomogeneoa (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math>). Argudio berak <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-rentzat balio du. Gainera, karga-kontserbazioaren jarraitutasun-ekuaziotik abiatuta, potentzial atzeratuek Lorenz-en baldintza ere betetzen dutela egiazta daiteke. Beraz, potentzial atzeratuak Maxwellen ekuazioen benetako soluzioa dira."
    },
    {
     "mota": "testua",
     "html": "Argudio hori berdin-berdin aplikatzen zaie <strong>potentzial aitzinatuei</strong> ere — iturriak <math display=\"inline\"><mrow><msub><mi>t</mi><mi>a</mi></msub><mo>=</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math> denbora <strong>aitzinatuan</strong> ebaluatzen dituztenak —, zeintzuk Maxwellen ekuazioekin guztiz bateragarriak baitira baina <strong>kausalitatea</strong> hausten baitute: efektua kausaren aurretik jarriko lukete. Fisikoki, atzeratuak hautatzen ditugu, eragin elektromagnetikoak denboran aurrera hedatzen direla onartuz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: bat-batean piztutako karga"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>q</mi></math> karga puntual bat jatorrian agertzen da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> aldiunean (idealizazioa — kargarik ez lehenago, <math display=\"inline\"><mi>q</mi></math> konstantea gero) eta bertan geratzen da. <math display=\"inline\"><mi>r</mi></math> distantziara dagoen eremu-puntu batean, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>-n irtendako seinale bat iristeko denbora atzeratuari dagokion aldiunea <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mrow></math> da. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Bat-batean agertutako kargaren eremua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&lt;</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Potentziala — eta eremua — bat-batean pizten da puntu bakoitzean, kargaren agerpenaren &quot;berria&quot;, <math display=\"inline\"><mi>c</mi></math> abiaduraz kanporantz bidaiatzen duena, hara iristen den une zehatzean. Kargari buruzko informaziorik ez da argia baino azkarrago hedatzen; adibide xume honek muga hori erabat esplizitu bihurtzen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "10.2 adibidea — Bat-batean piztutako hari infinitua"
    },
    {
     "mota": "testua",
     "html": "Har dezagun orain iturri jarraitu baten adibide osoa. Hari zuzen infinitu batek honako korrontea darama:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>≤</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> korronte konstantea bat-batean pizten da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n. Aurkitu sortzen diren eremu elektriko eta magnetikoak."
    },
    {
     "mota": "irudia",
     "oina": "Hari infinitua <math display=\"inline\"><mi>z</mi></math> ardatzean; <math display=\"inline\"><mi>P</mi></math> eremu-puntua <math display=\"inline\"><mi>s</mi></math> distantziara dago. <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> denean, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> zatiak baino ez du ekarpenik ematen — kanpotik seinalea ez da oraindik iritsi.",
     "src": "media/irudiak/b5b8b5eac69bfa25.svg",
     "zabalera": 260
    },
    {
     "mota": "testua",
     "html": "Haria elektrikoki neutroa denez, potentzial eskalarra nulua da (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>). Har dezagun haria <math display=\"inline\"><mi>z</mi></math> ardatzean; <math display=\"inline\"><mi>P</mi></math> puntuko potentzial bektorial atzeratua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> bada, &quot;berria&quot; ez da oraindik <math display=\"inline\"><mi>P</mi></math>-ra iritsi eta potentziala nulua da. <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> zatiak baino ez du ekarpenik ematen (kanpoan <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>); beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu elektrikoa denbora-deribatutik dator:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu magnetikoa <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren errotazionaletik (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mi>/</mi><mi>∂</mi><mi>s</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>c</mi><mi>t</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean kasu estatikoa berreskuratzen da: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>→</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mi>π</mi><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, hari infinitu baten eremu magnetiko ezaguna."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jefimenko-ren ekuazioak"
    },
    {
     "mota": "testua",
     "html": "Potentzial atzeratuak zuzenean deribatuz, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> lortzen dira tarteko potentzial-urratsik gabe — Coulomb-en legearen eta Biot-Savart-en legearen denboraren mendeko orokortze osoa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Jefimenko-ren ekuazioak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mfrac><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>ρ</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑱</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> diren, denbora atzeratuan ebaluatuak. Ekuazio bakoitzaren lehen gaia, zehazki, Coulomb-en legea edo Biot-Savart da, <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-n ebaluatuta; gai gehigarriak — iturriaren <strong>aldaketa-abiadura</strong> dakartenak — dira, azken batean, erradiazioa sortzen dutenak (11. kapitulua)."
    },
    {
     "mota": "testua",
     "html": "Ekuazio horiek potentzial atzeratuetatik zuzenean datoz. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> hartuz: <math display=\"inline\"><mrow><mi>∇</mi><mi>V</mi></mrow></math> lehen kalkulatu dugu, eta <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math> berehalakoa da; biak batuz (<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math>), goiko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> lortzen da. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>-ren errotazionalak bi gai ditu, eta <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math> erabiliz, goiko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> ateratzen da. Praktikan, ordea, errazago da potentzial atzeratuak kalkulatu eta gero deribatzea, zuzenean Jefimenko-ren ekuazioetara jo baino; O. Jefimenkok argitaratu zituen lehen aldiz, 1966an."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: limite estatikoa berreskuratzea"
    },
    {
     "mota": "testua",
     "html": "Koherentzia-proba gisa, Jefimenko-ren ekuazioek 2. eta 5. kapituluetako formula estatiko ezagunetara laburbildu behar dute, <math display=\"inline\"><mi>ρ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> denboran konstanteak diren guztietan."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>ρ</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> denboraren mende ez badaude, orduan <math display=\"inline\"><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> dira identikoki — Jefimenko-ren ekuazioetako gai guztiak, bakoitzaren lehena izan ezik, desagertu egiten dira. Geratzen dena hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— Coulomb-en legea (2. kapitulua) eta Biot-Savart-en legea (5. kapitulua), zehazki, <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-ri erreferentziarik batere egin gabe (ezer aldatzen ez denez, seinalea iturritik <strong>noiz</strong> irten zen ez baita garrantzitsua iristen denerako). Horixe da, hain zuzen, kapitulu honen hasieran agindutako eredu orokorra: 2.–6. kapituluetako teoria estatiko osoa hemen garatutako makineriaren <math display=\"inline\"><mrow><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> kasu berezia da."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Karga puntualak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Liénard–Wiechert-en potentzialak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ibilbide jakin batean zehar higitzen den <math display=\"inline\"><mi>q</mi></math> karga puntual bakar batentzat, potentzial atzeratuaren integrala forma itxi batera kolapsatzen da (delta funtzioko iturriari esker):"
    },
    {
     "mota": "irudia",
     "oina": "Karga higidun batentzat, <math display=\"inline\"><mi>P</mi></math>-ko eremua kargaren posizio eta abiadura <strong>atzeratuen</strong> mende dago — ez oraingo posizioaren mende, hura ezin baitu oraindik &quot;jakin&quot; argiaren abiadura errespetatzen duen eremu-puntu batek.",
     "src": "media/irudiak/7c450efe0ae83da4.svg",
     "zabalera": 241
    },
    {
     "mota": "testua",
     "html": "Emaitza hori nondik datorren ikustea merezi du, izendatzaileak itxura arraroa baitu. Naif batek pentsa lezake karga puntual baten potentzial atzeratua <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela besterik gabe, <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> posizio atzeratura arteko distantzia izanik. Baina hori <strong>okerra</strong> da, arrazoi sotil batengatik: nahiz eta <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> integraletik kanpora atera daitekeen puntu-iturri batentzat, geratzen den <math display=\"inline\"><mrow><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math> integrala <strong>ez</strong> da kargaren balioaren berdina. Atzerapenak <math display=\"inline\"><mi>ρ</mi></math> konfigurazioaren zati desberdinetan <strong>denbora desberdinetan</strong> ebaluatzera behartzen gaitu, eta iturria higitzen ari bada, horrek karga osoaren irudi distortsionatu bat ematen du."
    },
    {
     "mota": "testua",
     "html": "Efektua geometriko hutsa da. Zeuregana datorren tren bat den baino luzeagoa dirudi, azken bagoitik jasotzen duzun argia lehenago irten baita lokomotorretik aldi berean jasotzen duzunarekin alderatuta, eta une hartan trena urrunago zegoen. Kalkulu berak erakusten du, iturri-abiadurak ikus-lerroarekiko <math display=\"inline\"><mi>θ</mi></math> angelua egiten duenean, itxurazko bolumena faktore batez handitzen dela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi>q</mi><mrow><mn>1</mn><mo>−</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>c</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> karga-abiadura den denbora atzeratuan. Zuzenketa-faktore horrek ez du karga-tamainaren erreferentziarik, eta, beraz, puntu-karga batentzat ere baliozkoa da. Ondorioz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bektore-potentziala segituan dator: objektu zurrun baten korronte-dentsitatea <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Liénard–Wiechert-en potentzialak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>  <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> denbora atzeratuan ebaluatzen diren."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Izendatzaileko <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> faktorea — <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> soilaren ordez, Coulomb-en formula estatikoan bezala — benetako efektu erlatibista da: iturri higidun batek potentzialari egiten dion ekarpena, denbora atzeratuan zenbateko abiaduraz hurbiltzen edo urruntzen ari den, horren arabera haztatuta dago — analogo estatikorik batere gabeko efektua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "10.3 adibidea — Abiadura konstanteko karga baten potentzialak"
    },
    {
     "mota": "testua",
     "html": "Har dezagun <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> abiadura konstanteaz higitzen den karga bat, jatorritik <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n pasatzen dena, hau da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math>. Aurkitu bere potentzialak."
    },
    {
     "mota": "testua",
     "html": "Denbora atzeratua <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> baldintzatik dator. Karratura jasoz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo>+</mo><msup><mi>v</mi><mn>2</mn></msup><msubsup><mi>t</mi><mi>r</mi><mn>2</mn></msubsup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><msub><mi>t</mi><mi>r</mi></msub><mo>+</mo><msubsup><mi>t</mi><mi>r</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-rako bigarren mailako ekuazioa. Ebatziz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> limiteak <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math> eskatzen du, beraz zeinu negatiboa hautatzen dugu). Handik, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erabiliz, izendatzailea forma itxira laburbiltzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz Liénard–Wiechert-en potentzialak, esplizituki:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erradikala forma trinkoago batean idatz daiteke, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> <strong>oraingo</strong> posiziorako bektorea eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>-ren eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-ren arteko <math display=\"inline\"><mi>θ</mi></math> angelua sartuz: <math display=\"inline\"><mrow><mi>R</mi><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> da, eta orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Karga puntual higidun baten eremuak"
    },
    {
     "mota": "testua",
     "html": "Liénard–Wiechert-en potentzialak deribatuz (kalkulu luzea, baina hutsik mekanikoa), lortzen den <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> egituraz bereizitako bi zatitan banatzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Karga puntual higidun baten eremuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (abiadura-eremua) </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (azelerazio-eremua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Abiadura-eremua <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> bezala jaisten da (Coulomb-en eremu orokortua, abiadura uniformearekin ere presente dagoena); azelerazio-eremua <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala jaisten da, eta kargak azeleratzen duenean <strong>bakarrik</strong> dago presente."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eskema hori esplizitu bihur daiteke. Kalkulua luzea da — Liénard–Wiechert-en potentzialen gradientea eta denbora-deribatua hartu behar dira, non <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> biak <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>-ren mende dauden, eta <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> bera <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math>-ren eta <math display=\"inline\"><mi>t</mi></math>-ren mende —, baina emaitza dotorea da. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≡</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> bektore laguntzailea sartuz, eremu elektrikoa hau da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> kargaren azelerazioa den denbora atzeratuan, eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. Eremu magnetikoa, berriz, beti <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-rekiko eta <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math>-rekiko elkarzuta gertatzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen gaia — <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math> daramana — <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> bezala jaisten da eta ez dago azelerazioaren mende: hori da <strong>abiadura-eremua</strong>, eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> eginez, elektrostatikako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math> Coulomb-en emaitzara laburbiltzen da. Bigarren gaia — <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> daramana — <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala jaisten da eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>-rekiko proportzionala da: <strong>azelerazio-eremua</strong> edo <strong>erradiazio-eremua</strong> da. Eremu horiek eta Lorentz-en indar-legeak, elkarrekin, elektrodinamika klasiko osoa daukate: karga batek beste bati eragiten dion indarra guztiz zehazten dute."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> azelerazio-eremua da, oso-osorik, 11. kapituluaren gaia: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> baino astiroago jaisten denez, distantzia handitan nagusitzen da eta energia infinituraino garraiatzen du — horixe da <strong>erradiazioa</strong>, eta existitzen da baldin eta soilik baldin iturri-kargak azeleratzen badu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "10.4 adibidea — Abiadura uniformeko karga baten eremuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> abiadura <strong>konstanteaz</strong> higitzen den karga batentzat (azeleraziorik ez), abiadura-eremuak bakarrik irauten du, eta Liénard–Wiechert-en potentzialak esplizituki landuz, forma itxi bat lortzen da kargaren <strong>oraingo</strong> posizioaren bidez (ez posizio atzeratuaren bidez — biak bat baitatoz, zentzu egoki batean, hain zuzen ere higidura uniformea delako):"
    },
    {
     "mota": "testua",
     "html": "Formula orokorrean <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> eginez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>c</mi><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math>, non <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> kargaren <strong>oraingo</strong> posiziotik eremu-punturako bektorea den. 10.3 adibidetik, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>R</mi><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math></span> ere badakigu. Guztia elkarrekin jarriz, <math display=\"inline\"><mi>c</mi></math>-ren berreketak bertan behera geratzen dira, eta emaitza <strong>oraingo</strong> posizioaren bidez adierazten da soilik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Abiadura uniformeko karga baten eremua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi>θ</mi></math> angelua <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-ren eta kargaren <strong>oraingo</strong> posiziotik eremu-puntura doan zuzenaren artekoa den."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Formulan agertzen den distantzia, beraz, kargaren <strong>oraingo</strong> posiziora artekoa da, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, ez atzeratura artekoa; &quot;mezua&quot; posizio atzeratutik etorri arren, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>-k oraingo posizioaren norabidea seinalatzen du — kointzidentzia harrigarri batez.)"
    },
    {
     "mota": "testua",
     "html": "Bi erregimen dira argigarriak. <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> denean (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>), hau Coulomb-en eremu isotropo arruntera laburbiltzen da, espero bezalaxe. <math display=\"inline\"><mi>v</mi></math>  <math display=\"inline\"><mi>c</mi></math>-ra hurbiltzen denean, eremua indarrez konprimitzen da <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-rekiko plano elkarzutean (<math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), eta, horrenbestez, ahul geratzen da higidura-norabidean — &quot;krepe&quot; itxurako eremu-patroi bat, 12. kapituluan formalki garatuko den luzera-uzkurdura erlatibistaren aurrerapen zuzena, hutsik klasikoa."
    },
    {
     "mota": "testua",
     "html": "Eremu magnetikoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math> formulatik dator. <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>c</mi></mrow></math> denez eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>-ren paraleloa denez (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-ren lerroak kargaren inguruan biratzen dira, zirkuluetan. Oliver Heaviside-k lortu zituen lehen aldiz, 1888an, abiadura konstanteko karga baten eremu hauek. <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> denean, ohiko hurbilketetara laburbiltzen dira: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (Coulomb) eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (karga puntual baten &quot;Biot–Savart&quot; legea)."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Ariketa ebatziak (Griffiths eskuliburutik)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengo ariketak Griffiths-en <strong>Introduction to Electrodynamics</strong> liburuko problemak dira (10. kapitulua, potentzialak eta eremuak), irakaslearen eskuliburuko soluzioarekin, JAKINArako euskaratuak."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Griffiths 10.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erakutsi <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> potentzialentzako ekuazio diferentzialak forma simetrikoagoan idatz daitezkeela: <math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>▫</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mi>∇</mi><mi>L</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mo>≡</mo><msup><mi>∇</mi><mn>2</mn></msup><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> (d&#x27;Alembert-en eragilea) eta <math display=\"inline\"><mrow><mi>L</mi><mo>≡</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math> diren."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Potentzialen formulazioan, Gauss-en legeak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du. Ezkerraldean <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> gaia batu eta kentzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen parentesia <math display=\"inline\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi></mrow></math> da; bigarrengoa <math display=\"inline\"><mi>L</mi></math>, beraz bigarren gaia <math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ampère–Maxwellen legeak, <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> identitatea erabilita,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du, hots, zuzenean"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mi>∇</mi><mi>L</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi ekuazioek Maxwellen informazio osoa daramate, eta <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> oinarri berean jartzen dituzte: Lorenz-en gaugean (<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>) biak iturridun uhin-ekuazio ez-homogeneo bihurtzen dira."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 210. or., 10.1 ariketa; zenbakia bera da 3. edizioan."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Griffiths 10.2",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "10.1 adibideko konfigurazioari dagokionez, kontuan hartu <math display=\"inline\"><mi>l</mi></math> luzerako, <math display=\"inline\"><mi>w</mi></math> zabalerako eta <math display=\"inline\"><mi>h</mi></math> altuerako kutxa errektangelu bat, <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math> planotik <math display=\"inline\"><mi>d</mi></math> distantziara, hau da, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math> artean."
      },
      {
       "mota": "testua",
       "html": "(a) Aurkitu kutxan dagoen energia <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math> aldiunetan."
      },
      {
       "mota": "testua",
       "html": "(b) Aurkitu Poynting-en bektorea eta zehaztu <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> tartean kutxan sartzen den unitate-denborako energia."
      },
      {
       "mota": "testua",
       "html": "(c) Integratu (b)-ko emaitza <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> artean eta egiaztatu (a)-ko energia-gehikuntzarekin bat datorrela."
      },
      {
       "mota": "irudia",
       "oina": "Korronte-plaka <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n eta <math display=\"inline\"><mi>d</mi></math>\n  distantziara dagoen kutxa; <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math> uhin-frontea eskuinerantz\n  hedatzen da <math display=\"inline\"><mi>c</mi></math> abiaduraz.",
       "src": "media/irudiak/8d866a26743b67dd.svg",
       "zabalera": 213
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> erdiespazioan, perturbazioa iritsi ondoren, 10.1 adibideko eremuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dira. <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math> bada, korronte-plakaren berria ez da oraindik iritsi, eta eremuak nuluak dira. <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math> denez, energia-dentsitatea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Kutxako energia.</strong>  <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math>-n seinalea justu iritsi da azpiko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> aurpegira; kutxan oraindik ez dago eremu-bolumenik, beraz <math display=\"inline\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math>-n seinalea justu iritsi da goiko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math> aurpegira; kutxa osoa eremuz beteta dago,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>l</mi><mi>w</mi><msubsup><mo>∫</mo><mi>d</mi><mrow><mi>d</mi><mo>+</mo><mi>h</mi></mrow></msubsup><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo>−</mo><mi>x</mi></mrow></math> aldagai-aldaketaz <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>h</mi></msubsup><msubsup><mi>u</mi><mi>x</mi><mn>2</mn></msubsup><mi>d</mi><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msup><mi>h</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> erabiliz. Energia-gehikuntza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Poynting-en fluxua.</strong>  <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math> da; <math display=\"inline\"><mi>E</mi></math> <math display=\"inline\"><mrow><mi>−</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>-n eta <math display=\"inline\"><mi>B</mi></math>  <math display=\"inline\"><mrow><mi>+</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>-n direnez, fluxua <math display=\"inline\"><mrow><mi>+</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>-n doa, korronte-planotik urrunduz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> tartean, seinalea jada <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> aurpegia zeharkatu du baina oraindik ez da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math>-tik atera; beraz sarrera garbia azpiko aurpegitik dator bakarrik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">sartu</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>S</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>l</mi><mi>w</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>d</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Egiaztapen integrala.</strong>  <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math>-tik <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math>-ra integratuz, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>d</mi></mrow></math> aldagai-aldaketaz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">sartu </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>h</mi></msubsup><msup><mi>q</mi><mn>2</mn></msup><mi>d</mi><mi>q</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">sartu </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "zehazki kutxan metatutako energia-gehikuntzaren berdina — Poynting-en bektorearen fluxu integratuak eremuaren energia-dentsitatearen gehikuntza berreskuratzen du."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 210.–211. or., 10.2 ariketa; zenbakia bera da 3. edizioan. Espazio erdibituko eremuak 10.1 adibidekoak dira, eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><msub><mi>W</mi><mtext mathvariant=\"normal\">sartu</mtext></msub></mrow></math> Poynting-en fluxutik berreskuratzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Griffiths 10.3",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu eremuak eta karga- eta korronte-banaketak, honako potentzial hauei dagozkienak: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>t</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu elektrikoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> da. <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren denbora-deribatuak baino ez du ekartzen:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu magnetikoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> da. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> erradiala eta <math display=\"inline\"><mi>r</mi></math>-ren mendekoa soilik denez, <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hauek jatorrian pausagune dagoen <math display=\"inline\"><mi>q</mi></math> karga puntual baten eremuak dira, hain zuzen. Iturriak Maxwellen legeetatik datoz: Gauss-ek"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>q</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du, eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> estatikoa (<math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> direnez, Ampère–Maxwellek <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><mi>q</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz potentzial &quot;bitxi&quot; hauek pausaguneko karga puntual baten eremu arruntak sortzen dituzte, nahiz eta <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> ez-ohikoak izan. Gauge-transformazio batek ohiko itxurara eramaten ditu: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>t</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuz (10.5 ariketa), <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><mi>∇</mi><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mi>V</mi><mo>−</mo><mi>∂</mi><mi>λ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> geratzen dira, hots, Coulomb-en ohiko potentzialak."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 211. or., 10.3 ariketa. 4. edizioko 10.3 ariketak 3. edizioko 10.3 eta 10.5 biltzen ditu (&quot;mod&quot;); zenbaki nagusia (10.3) bera da."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Griffiths 10.4",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, non <math display=\"inline\"><msub><mi>A</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi>ω</mi></math> eta <math display=\"inline\"><mi>k</mi></math> konstanteak diren. Aurkitu <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>, eta egiaztatu hutseko Maxwellen ekuazioak betetzen dituztela. Zein baldintza ezarri behar zaie <math display=\"inline\"><mi>ω</mi></math>-ri eta <math display=\"inline\"><mi>k</mi></math>-ri?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Potentzialetatik zuzenean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>k</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hutseko Maxwellen ekuazioekin (<math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn></mrow></math>) alderatzen ditugu. Dibergentziak berehalakoak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Faraday-ren legea betetzen da: <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><msub><mi>A</mi><mn>0</mn></msub><mi>ω</mi><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ampère–Maxwellek, berriz, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><msub><mi>B</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>A</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen ditu; berdinak izateko <math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> bete behar da. <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> denez, dispertsio-erlazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>c</mi><mi>k</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da: potentzial hauek <math display=\"inline\"><mi>c</mi></math> abiaduraz hedatzen den uhin lau bati dagozkio."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 211. or., 10.4 ariketa; zenbakia bera da 3. edizioan."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Griffiths 10.9",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Demagun hari zuzen infinitu batek (<math display=\"inline\"><mi>z</mi></math> ardatza) linealki handitzen den korronte bat daramala, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> baterako (eta <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math>). Aurkitu sortzen dituen eremu elektriko eta magnetikoak <math display=\"inline\"><mi>s</mi></math> distantziara. (b) Egin gauza bera korronte-bafada bat-batekoaren kasurako: <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": "Hari zuzen infinitua <math display=\"inline\"><mi>z</mi></math> ardatzean; <math display=\"inline\"><mi>P</mi></math>\n  behaketa-puntua <math display=\"inline\"><mi>s</mi></math> distantziara; <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>.",
       "src": "media/irudiak/3287d459fb96f745.svg",
       "zabalera": 196
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Potentzial bektorial atzeratua <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi></mrow></math></span> da, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math> izanik. Berria <math display=\"inline\"><mi>c</mi></math> abiaduraz hedatzen da: <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> bada seinalea ez da iritsi eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> bada, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> zatiak baino ez du ekartzen."
    },
    {
     "mota": "testua",
     "html": "<strong>(a) <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>.</strong>  Integrakina bikoitia denez <math display=\"inline\"><mi>z</mi></math>-n,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mi>d</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen integrala <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta bigarrena <math display=\"inline\"><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></math>; muturretan ebaluatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu elektrikorako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>; <math display=\"inline\"><mi>t</mi></math>-rekiko deribatuan azken bi gaiek elkar ezeztatzen dute, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu magnetikorako <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mi>/</mi><mi>∂</mi><mi>s</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>; deribatua eginda,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi><mi>c</mi></mrow></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(b) <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong>  Orain <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi></mrow></math></span>. <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> aldagai-aldaketaz (<math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>d</mi><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>) eta <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mspace width=\"0.167em\"></mspace><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mi>s</mi><mi>∞</mi></msubsup><mfrac><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>d</mi><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mfrac><mn>1</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>c</mi><mi>t</mi><mo>&gt;</mo><mi>s</mi></mrow></math> bada; bestela <math display=\"inline\"><mn>0</mn></math>). Hortik eremuak:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup><mi>t</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi><mi>s</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 214.–215. or. 3. edizioko 10.9 ariketa 4. edizioan 10.11 da (10.2 adibideko haria)."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Griffiths 10.10",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hari-zati bat tolestuta espira bat osatzen du: <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math> erradioko bi erdizirkunferentzia zentrokide, <math display=\"inline\"><mi>x</mi></math> ardatzeko bi zati zuzenez lotuak. Korrontea linealki handitzen da, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>. Kalkulatu potentzial bektorial atzeratua zentroan. Aurkitu eremu elektrikoa zentroan. Azaldu zergatik sortzen duen hari neutro batek eremu elektrikoa, eta zergatik ezin den eremu magnetikoa zehaztu <math display=\"inline\"><mi>A</mi></math>-ren puntu bakarreko kalkulu honetatik."
      },
      {
       "mota": "irudia",
       "oina": "Espira: <math display=\"inline\"><mi>a</mi></math> eta <math display=\"inline\"><mi>b</mi></math> erradioko\n  erdizirkunferentzia zentrokideak, bi zati zuzenez lotuak <math display=\"inline\"><mi>x</mi></math>\n  ardatzean; <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math> korronte handikorra.",
       "src": "media/irudiak/c32f61b44f0e1630.svg",
       "zabalera": 224
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Korronte filamentu baten potentzial bektorial atzeratua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>r</mi></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Espiraren zentroan, <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>t</mi><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarren gaiak <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mo>=</mo><mn>0</mn></mrow></math> integral bektorial itxia darama, espira osoan zehar integratzen delako. Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erdizirkunferentzietan <math display=\"inline\"><mi>r</mi></math> konstantea da: <math display=\"inline\"><mi>a</mi></math> barnekoan eta <math display=\"inline\"><mi>b</mi></math> kanpokoan; haien ekarpenak elkar ezeztatzen dute norabide bektorialean, geometriak adierazten duen bezala. Ekarpen garbia bi zati zuzenetatik dator, biak <math display=\"inline\"><mi>x</mi></math> ardatzarekiko paralelo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mi>r</mi></mfrac><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Erdizirkunferentzien ekarpena hutsala da: bakoitzean <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow></math> bere kordaren berdina da — <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> barnekoan eta <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> kanpokoan —, eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> konstanteez zatituta <math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> ematen dituzte, elkar ezeztatuz. Zati zuzenetan, berriz, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒍</mi><mo>=</mo><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>x</mi></mrow></math> dira.)"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu elektrikoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> da. Haria neutroa da, eta problema honetan potentzial eskalarrak ez du ekarpenik ematen zentroan, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Interpretazioa.</strong> Haria elektrikoki neutroa den arren, korrontea denboran aldatzen da. Korronte aldakor horrek eremu magnetiko aldakorra sortzen du, eta Faraday-ren legez eremu elektriko induzitu bat agertzen da. Horregatik ez da beharrezkoa karga-dentsitate garbirik <math display=\"inline\"><mi>E</mi></math> egoteko."
    },
    {
     "mota": "testua",
     "html": "Ezin dugu <math display=\"inline\"><mi>B</mi></math> zentroan zehaztu <math display=\"inline\"><mi>A</mi></math>-ren puntu-adierazpen honetatik, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> delako, eta horrek zentroaren inguruko espazioan <math display=\"inline\"><mi>A</mi></math> nola aldatzen den jakin behar baitu, ez soilik zentroko balioa."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 215. or. 3. edizioko 10.10 ariketa (Fig. 10.5-eko espira) 4. edizioan 10.12 da. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> puntu bakarrean ezagututa, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> ezin da atera."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Griffiths 10.14",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erakutsi abiadura konstantez higitzen den karga puntual baten potentzial eskalarra — <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mrow></math> — baliokidez idatz daitekeela <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> den kargaren <strong>oraingo</strong> posiziotik eremu-punturako bektorea eta <math display=\"inline\"><mi>θ</mi></math> den <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> arteko angelua. Ondorioztatu abiadura ez-erlatibistetarako (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>) <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mi>/</mi><mi>R</mi></mrow></math> dela."
      },
      {
       "mota": "irudia",
       "oina": "Kargaren posizio atzeratua eta oraingoa;\n  <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> oraingo posiziotik eremu-punturako\n  bektorea da.",
       "src": "media/irudiak/7c450efe0ae83da4.svg",
       "zabalera": 241
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erroketaren azpiko adierazpena garatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biderkadurak eginda,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math> denez, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math>-tik <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ateratzen da; ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>R</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> denez, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math></span>. Hortaz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta erroa hartuta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msqrt><mi>I</mi></msqrt><mo>=</mo><mi>c</mi><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mrow></math></span>. Adierazpenean sartuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> mugan erroa <math display=\"inline\"><mn>1</mn></math>-era doa eta <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mi>/</mi><mi>R</mi></mrow></math> berreskuratzen da: hau da Heaviside-k (1888) lortu zuen higitzen ari den kargaren potentziala."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 216. or. 3. edizioko 10.14 ariketa 4. edizioan 10.16 da."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Griffiths 10.20",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "10.13 problemako konfiguraziorako, aurkitu eremu elektriko eta magnetikoak zentroan. <math display=\"inline\"><mi>B</mi></math>-ren adierazpenetik, atera <math display=\"inline\"><mi>I</mi></math> korronte egonkorra daraman espira zirkular baten zentroko eremu magnetikoa, eta konparatu 5.6 adibidearen emaitzarekin."
      },
      {
       "mota": "testua",
       "html": "10.13-ko konfigurazioa <math display=\"inline\"><mi>q</mi></math> karga bat da, <math display=\"inline\"><mi>a</mi></math> erradioko zirkunferentzian <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrez uniformeki biraka. Behaketa-puntua zirkunferentziaren zentroa da."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><mi>q</mi></math> karga <math display=\"inline\"><mi>a</mi></math> erradioan biraka\n    <math display=\"inline\"><mi>ω</mi></math>-z; <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> karga atzeratutik zentrorantz seinalatzen du.",
       "src": "media/irudiak/40e74787a485b893.svg",
       "zabalera": 150
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> denbora atzeratua izanik, aldiune horretan karga <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> posizioan dago eta bere abiadura <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da. Zentroko eremurako, karga atzeratutik zentrorantz seinalatzen duen unitate-bektorea <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math>. Higidura zirkularra denez, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mtext mathvariant=\"normal\">azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, eta abiadura <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>-rekiko elkarzuta da, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mi>/</mi><mi>c</mi></mrow></math> definitzen dugu."
    },
    {
     "mota": "testua",
     "html": "<strong>Eremu elektrikoa.</strong> Liénard-Wiechert-en forma erabiliz, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi></mrow></math>. Adierazpen orokorrean ordezkatuz, gaiak zati erradial eta tangentzial batean banantzen dira; zentroan"
    },
    {
     "mota": "testua",
     "html": "Zehatzago, Liénard–Wiechert-en eremu orokorra <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mtext mathvariant=\"normal\">azel.</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span> da (Griffiths 10.65), <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>a</mi><mi>c</mi></mrow></math> izanik. <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math> denez, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mtext mathvariant=\"normal\">azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mtext mathvariant=\"normal\">azel.</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><msup><mi>β</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math></span>. Bestalde <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Batuketak, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi>c</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> ordezkatuta, <math display=\"inline\"><mrow><msup><mi>c</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>β</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> ematen du; aurrefaktorea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> da. Hortaz, zentroan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>β</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen gaiak karga atzeratutik zentrorantz seinalatzen du. Bigarren gaia abiadura atzeratu instantaneoaren aurkakoa da. <math display=\"inline\"><mi>E</mi></math>-ren norabide osoak kargarekin batera biratzen du, posizio atzeratuaren mende baitago."
    },
    {
     "mota": "testua",
     "html": "<strong>Eremu magnetikoa.</strong> Karga puntual higikorra baterako, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math> da. Aurreko emaitzari aplikatuz, <math display=\"inline\"><mi>E</mi></math>-ren zati erradialak ez du ekarpenik ematen, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> delako. Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>q</mi><mi>β</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karga positiboa antihorarioki biratzen bada <math display=\"inline\"><mrow><mi>+</mi><mi>z</mi></mrow></math>-tik ikusita, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da eta <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>; beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>q</mi><mi>β</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>q</mi><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eremu hau ez da biratzen: orbitako puntu guztietarako zentroko eremu magnetikoak norabide axial berean seinalatzen du."
    },
    {
     "mota": "testua",
     "html": "<strong>Espira zirkular korronte egonkorrarekin.</strong> Espira jarraitu bat zirkunferentzia berean biraka ari diren karga anitz gisa ikus daiteke. <math display=\"inline\"><mrow><mi>d</mi><mi>q</mi></mrow></math> karga-elementu bakoitzak zentroan <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi><mi>/</mi><mn>4</mn><mi>π</mi><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>q</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> ekartzen du. Espira osoan zehar integratuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mo>∫</mo><mi>d</mi><mi>q</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi><mi>Q</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Korronte egonkorrak <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>Q</mi><mi>/</mi><mi>T</mi><mo>=</mo><mi>Q</mi><mi>ω</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math> betetzen duenez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">espira</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "zehazki 5.6 adibidean aurkitutako <math display=\"inline\"><mi>a</mi></math> erradioko espira zirkular baten zentroko eremua."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, irakaslearen eskuliburua (4. ed.), 220. or. 3. edizioko 10.20 ariketa (10.13 konfigurazioa) 4. edizioan 10.23 da. Zentroko <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-tik <math display=\"inline\"><mi>I</mi></math> korronteko espira zirkularraren emaitza berreskuratzen da (Griffiths 5.6 adibidea; 4. ed. 5.7 eta 5.41 ek.)."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Ariketa proposatuak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengoak Griffiths-en 10. kapituluko ariketak dira (3. edizioko zenbaketa), ebazpenik gabe proposatuak. Liburuko argazkietako enuntziatuen euskarazko egokitzapena."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.6.)</strong> 10.1 adibideko, 10.3 ariketako eta 10.4 ariketako potentzialetatik, zein daude Coulomb-en gaugean (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>)? Zein Lorenz-en gaugean (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>)? (Gauge horiek ez dira elkarren baztertzaileak.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.18.)</strong> <math display=\"inline\"><mi>q</mi></math> karga puntual bat <math display=\"inline\"><mi>x</mi></math> ardatzean higitzera behartuta dago. Erakutsi kargaren <strong>eskuinaldeko</strong> ardatz-puntuetan eremuak <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mn>1</mn><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mo>+</mo><mi>v</mi></mrow><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> direla. Zein dira <strong>ezkerraldeko</strong> eremuak?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.19.)</strong> (a) 10.68 ekuazioa erabiliz, kalkulatu <math display=\"inline\"><mi>λ</mi></math> lerro-karga uniformea daraman hari zuzen infinitu batetik <math display=\"inline\"><mi>d</mi></math> distantziara dagoen eremu elektrikoa, haria bere norabidean <math display=\"inline\"><mi>v</mi></math> abiadura konstantez higitzen denean. (b) 10.69 ekuazioa erabiliz, aurkitu hari beraren eremu magnetikoa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.21.)</strong> <math display=\"inline\"><mi>a</mi></math> erradioko plastikozko eraztun batean karga itsasten da, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> lerro-karga dentsitatea izan dezan. Eraztuna bere ardatzaren inguruan <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrez biratzen da. Aurkitu potentzial eskalar eta bektorial zehatzak eraztunaren zentroan. <em>(Emaitza: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>λ</mi><mn>0</mn></msub><mi>ω</mi><mi>a</mi><mi>/</mi><mn>3</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>.)</em>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Kapitulu honek elektrodinamikaren formulazio potentziala garatzen du — gauge-askatasuna, potentzial atzeratuak, Jefimenko-ren ekuazioak eta karga puntual higidun baten Liénard–Wiechert-en potentzialak — CeTZ marrazki originalak erabiliz, JAKINArako euskaratua. </em>"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 1,
   "izenburua": "Erradiazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "10. kapituluak karga puntual azeleratu baten eremua bi zatitan banatu zuen: abiadura-zatia, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> bezala jaisten dena, eta azelerazio-zatia, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala jaisten dena. Kapitulu hau oso-osorik bigarren zati horri eskainita dago: <strong>erradiazioa</strong>, karga azeleratuek energia nahi bezain distantzia handietara igortzeko mekanismoa, eta argiaren, irrati-uhinen eta iturriarekin kontaktu fisikorik behar ez duen beste edozein transmisio elektromagnetikoren azken jatorria."
    },
    {
     "mota": "testua",
     "html": "Kapitulua bi zatitan banatzen da. Lehenengoan (<strong>dipolo-erradiazioa</strong>) iturri erradiatzaile sinpleenak aztertzen dira — dipolo elektriko eta magnetiko oszilatzaileak —, potentzial atzeratuetatik abiatuta eremuak eta erradiatutako potentzia esplizituki kalkulatuz. Bigarrenean (<strong>karga puntualak</strong>) karga azeleratu bakar baten erradiaziora igarotzen gara: Larmor-en formula orokorra eta, azkenik, erradiazio-erreakzioaren indarra. Dena potentzial atzeratuen eta 10. kapituluko eremuen gainean eraikitzen da; kapitulu honek prozedura sistematiko bat erakusten du, kasu partikular esanguratsuenetan gauzatua."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Zer da erradiazioa?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Erradiazioaren ezaugarria hau da: eremuen energia-fluxua, esfera handi batean integratuta, <strong>ez</strong> dela desagertzen esferaren erradioa hazi ahala — hau da, benetako energiak ihes egiten duela infinituraino, tokian bertan hara eta hona eramana izan beharrean (eremu estatikoek edo ia-estatikoek egiten duten bezala). <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> erradioko esfera batean zeharreko Poynting-en fluxua <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>×</mo><mi>S</mi></mrow></math> bezala eskalatzen denez, horrek eskatzen du <math display=\"inline\"><mi>S</mi></math>  (eta, beraz, <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>B</mi></math>)  <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala jaistea, ez <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> bezala — hain zuzen ere, 10. kapituluan identifikatutako azelerazio-eremua."
    },
    {
     "mota": "testua",
     "html": "Ideia hori zehazteko, imajina dezagun iturria jatorriaren inguruan lokalizatuta dagoela, eta har dezagun haren inguruan <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> erradioko esfera erraldoi bat. Gainazal horretatik ateratzen den potentzia osoa Poynting-en bektorearen fluxua da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∮</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mo>∮</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <strong>erradiatutako</strong> potentzia fluxu horren limitea da, esfera infiniturantz hedatzean:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"script\">𝓇</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esferaren azalera <math display=\"inline\"><mrow><mn>4</mn><mi>π</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> denez, erradiazioa gertatzeko Poynting-en bektoreak ezin du <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> baino azkarrago jaitsi: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>3</mn></msup></mrow></math> bezala jaitsiko balitz, <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala joango litzateke eta <math display=\"inline\"><msub><mi>P</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math> zero izango litzateke. Baina Coulomb-en legeak dio eremu elektro<strong>statikoak</strong> <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> bezala jaisten direla (edo azkarrago, karga osoa zero bada), eta Biot–Savart-en legeak gauza bera dio magneto<strong>statikoentzat</strong>; beraz, <math display=\"inline\"><mrow><mi>S</mi><mo>∼</mo><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>4</mn></msup></mrow></math> da konfigurazio estatikoetan, eta iturri estatikoek <strong>ez dute</strong> erradiatzen. Denboraren mendeko iturrietan, ordea, Jefimenko-ren ekuazioek (<math display=\"inline\"><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover></math> eta <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover></math> dituzten gaiek) <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> bezala jaisten diren ekarpenak dakartzate: gai horiek dira erradiazio elektromagnetikoaren erantzule. Erradiazioaren azterketa, hortaz, honetan datza: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>-ren <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> zatiak hautatzea urruneko distantzietan, haietatik <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math>-ren <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> gaia eraikitzea, esfera handi batean integratzea eta <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea hartzea. Prozedura hori dipolo elektriko eta magnetiko oszilatzaileentzat gauzatuko dugu lehenik, eta gero,  11.2 atalean, karga puntual azeleratu baten kasu zailagorako."
    },
    {
     "mota": "oharra",
     "titulua": "Notazio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honetan <math display=\"inline\"><mi>r</mi></math>-k eremu-puntuaren distantzia erradiala adierazten du, jatorritik neurtuta, eta <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math>-k (Griffiths-en <em>script</em>-r) iturri-elementutik eremu-punturainokoa. Urruneko zonan biak berdintzen dira, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi></mrow></math>; horregatik urruneko eremuen adierazpen laburtuek (eta goiko esfera-integralek) <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> erabil dezakete distantzia erradial gisa."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Dipolo elektrikoaren erradiazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dipolo oszilatzailea"
    },
    {
     "mota": "testua",
     "html": "Sistema erradiatzailerik sinpleena dipolo fisiko bat da (3. kapitulua), momentua denboran oszilatzen zaiona, <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — irrati-antena baten edo molekula-lotura bibratzaile baten eredu klasikoa. Iturri honentzat potentzial atzeratuen integralak ebatzita (10. kapitulua), <strong>urruneko zonan</strong>  (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≫</mo><mi>λ</mi></mrow></math>), erradiazio-eremuak lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Dipolo elektrikoaren erradiazio-eremuak (urruneko zona)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝑬</mi><mi>c</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Dipolo elektriko oszilatzaile baten erradiazio-patroia: intentsitatea maximoa da dipoloaren ardatzarekiko zeharka (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) eta desagertu egiten da ardatzean bertan (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) — erroskila-itxura bereizgarria, <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>.",
     "src": "media/irudiak/10b04d6b8dd3229d.svg",
     "zabalera": 199
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun orain nondik datorren emaitza hori, urratsez urrats. Har ditzagun <math display=\"inline\"><mi>d</mi></math> distantziara dauden bi esfera txiki, fina den hari batez lotuak: goikoan karga <math display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da eta behekoan <math display=\"inline\"><mrow><mi>−</mi><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta hariaren zehar karga hara eta hona bultzatzen dugu <math display=\"inline\"><mi>ω</mi></math> maiztasunarekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrek dipolo elektriko oszilatzaile bat sortzen du, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, non <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>≡</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math> dipolo-momentuaren balio maximoa den. Bi kargen potentzial atzeratua hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>+</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>+</mo></msub></mfrac><mo>−</mo><mfrac><mrow><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>−</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>−</mo></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non, kosinuen legez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>∓</mo><mi>r</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dipolo fisikoa dipolo <strong>perfektu</strong> bihurtzeko, banaketa oso txikia nahi dugu — <strong>1. hurbilketa</strong>: <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>r</mi></mrow></math>. Lehen ordenan <math display=\"inline\"><mi>d</mi></math>-n,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mo>≈</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub></mfrac><mo>≈</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, dipoloaren tamaina uhin-luzera baino askoz txikiagoa dela onartuz (<strong>2. hurbilketa</strong>: <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>), kosinua garatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∓</mo><mfrac><mrow><mi>ω</mi><mi>d</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hori guztia potentzialean sartuta, dipolo oszilatzaile perfektu baten potentzial eskalarra geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Limite estatikoan (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>) bigarren gaiak dipolo geldi baten potentzial ezaguna berreskuratzen du, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Baina orain axola diguna urruneko eremua da, <strong>erradiazio-zona</strong> deiturikoa — <strong>3. hurbilketa</strong>: <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math> (hau da, <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>λ</mi></mrow></math>). Bertan <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> gaia da nagusi:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bitartean, potentzial bektoriala hariko korronteak zehazten du, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>q</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span>, eta lehen ordenan <math display=\"inline\"><mi>d</mi></math>-n:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potentzialetatik eremuak lortzea zuzena da. <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> kalkulatuz eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> gaiak soilik gordez (3. hurbilketa), eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> berdin eginez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hauexek dira goiko kutxako erradiazio-eremuak (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi></mrow></math> urruneko zonan). <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> fasean daude, elkarrekiko perpendikularrak dira eta hedapen-norabidearekiko (<math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></math>) zeharkakoak, anplitudeen arrazoia <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi></mrow></math> da eta anplitudea <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> bezala jaisten da: espazio askeko uhin elektromagnetiko esferikoak dira zehazki, urrun nahikoa laua diren guneetan lau lokalki bezala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erradiatutako potentzia osoa"
    },
    {
     "mota": "testua",
     "html": "Poynting-en fluxua esfera handi batean integratuz, erradiatutako potentzia osoa lortzen da, ziklo batean batez bestekotua: "
    },
    {
     "mota": "testua",
     "html": "Kalkulua eremu erradiatuetatik abiatzen da. Poynting-en bektorea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, eta intentsitatea ziklo oso batean batez bestekotuz (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ohartu dipoloaren <strong>ardatzean</strong> ez dagoela erradiaziorik (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>); intentsitate-profilak erroskila-itxura hartzen du, maximoa plano ekuatorialean (11.1 irudia). Potentzia osoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> esfera batean integratuz lortzen da; <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mn>4</mn><mi>/</mi><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza esferaren erradioaren independentea da, energiaren kontserbazioak eskatzen duen bezala (3. hurbilketarekin <math display=\"inline\"><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></math> limitea aurreikusten ari ginen):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Larmor-en formula dipolo oszilatzaile batentzat",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> mendekotasun indartsua da argi urdina argi gorria baino askoz eraginkorrago sakabanatzen den arrazoia partikula txikietan (Rayleigh-en sakabanaketa, zeruaren urdinaren fisika) — induzitutako dipolo oszilatzaileak potentzia erradiatzen du eragile-maiztasunaren laugarren berreturaren proportzioan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "11.1 adibidea — Zeruaren urdina eta ilunabarraren gorria"
    },
    {
     "mota": "testua",
     "html": "Potentzia-formularen maiztasun-mendekotasun zorrotza (Larmor-en <math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math>) da, hain zuzen, zeruaren urdinaren erantzulea. Eguzki-argia atmosferatik igarotzean, atomoak dipolo txiki gisa oszilatzera bultzatzen ditu. Eguzki-erradiazio erasotzaileak maiztasun-tarte zabala hartzen du (argi zuria), baina atmosferako dipoloek xurgatu eta berrerradiatutako energia askoz handiagoa da maiztasun altuetan, Larmor-en formulako <math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> faktoreagatik: erradiazio berrerradiatua urdinean intentsuagoa da gorrian baino. Zerura begiratzean ikusten dugun argia da hori (eguzkira zuzenean begiratzen ari ez bagara behintzat)."
    },
    {
     "mota": "testua",
     "html": "Gainera, uhin elektromagnetikoak zeharkakoak direnez, dipoloek eguzki-izpiekiko plano ortogonal batean oszilatzen dute. Izpi horiekiko perpendikularra den zeruaren arkuan — urdintasuna nabarmenena den lekuan — behatzailearen ikus-lerroan zehar oszilatzen duten dipoloek ez diote erradiaziorik bidaltzen (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> faktoreagatik, ikus <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>); angelu horretan jasotako argia, hortaz, eguzki-izpiekiko perpendikularki polarizatuta dago. Horrek azaltzen du zergatik den zerua polarizatua <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ra eguzkitik."
    },
    {
     "mota": "testua",
     "html": "Ilunabarraren gorria txanpon beraren beste aldea da: lurraren gainazalarekiko ukitzaile sartzen den eguzki-argiak atmosfera-zati askoz luzeagoa zeharkatu behar du goitik datorrenak baino. Ondorioz, urdinaren zati handi bat sakabanaketaz kendua izan da, eta gelditzen dena gorria da."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>∝</mo><msup><mi>ω</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> urdina </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> handia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> askoz gehiago sakabanatua </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> gorria </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> txikia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baino </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: irrati-antena bat"
    },
    {
     "mota": "testua",
     "html": "Dipolo-antena labur batek, <math display=\"inline\"><mrow><mi>l</mi><mo>≪</mo><mi>λ</mi></mrow></math> luzerakoak, <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> korronte-gailurraz elikatuta <math display=\"inline\"><mi>ω</mi></math> maiztasunean, (<math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover></mrow></math>-tik, integratuta)  <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mi>l</mi><mi>/</mi><mi>ω</mi></mrow></math> dipolo-momentu eraginkorra du gailurrean. Larmor-en formulan ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Antena-luzera finko batentzat, erradiatutako potentzia <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math> bezala hazten da — irrati-ingeniaritzak, transmisio eraginkorraren bila, historikoki maiztasun altuagoetarantz (eta, horrenbestez, antena laburragoetarantz, praktikoagoetarantz) jo izanaren arrazoi nagusietako bat."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Dipolo magnetikoaren erradiazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dipolo magnetiko oszilatzaile batek — korronte oszilatzaileko korronte-espira batek — mekanismo beraren bidez erradiatzen du, formula analogo batekin:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Larmor-en formula dipolo magnetiko oszilatzaile batentzat",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deribazioa dipolo elektrikoarenaren paraleloa da. Har dezagun <math display=\"inline\"><mi>b</mi></math> erradioko hari-espira bat, korronte txandakariaz elikatua, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; horrek dipolo magnetiko oszilatzaile bat modelatzen du, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span>, non <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>≡</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math> den. Espira deskargatuta dagoenez, potentzial eskalarra zero da, eta potentzial bektorial atzeratua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. <math display=\"inline\"><mi>x</mi></math> ardatzaren gaineko puntu batentzat, simetriaz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-k <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></math> norabidean apuntatu behar du; kosinuen legea (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></msqrt></mrow></math></span>) eta espira txikiaren hurbilketak (1. hurbilketa: <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>r</mi></mrow></math>; 2. hurbilketa: <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>) erabilita, integrala eginda,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Limite estatikoan (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>) dipolo magnetiko baten potentzial ezaguna berreskuratzen da, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Erradiazio-zonan (3. hurbilketa: <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>) lehen gaia arbuiagarria da, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemendik eremuak lortzen dira urrun:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu hauek dipolo elektrikoarenen egitura berbera dute, baina orain <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> da <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></math> norabidean eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></math> norabidean (elektrikoan alderantziz). Poynting-en bektorearen batez bestekoa integratuz, intentsitateak erroskila-itxura berbera du, eta potentzia osoa berriro <math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> bezala doa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elektrikoaren eta magnetikoaren arteko alde garrantzitsu bat dago, ordea: neurri konparagarriko konfigurazioentzat, elektrikoki erradiatutako potentzia askoz handiagoa da. Bi Larmor-en formulak alderatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>m</mi><mn>0</mn></msub><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi></mrow></math> (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>π</mi><mi>b</mi></mrow></math> hartuz konparaziorako) ordezkatuz, <math display=\"inline\"><mrow><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><mi>/</mi><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>b</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> geratzen da — <math display=\"inline\"><mrow><mi>ω</mi><mi>b</mi><mi>/</mi><mi>c</mi></mrow></math> oso txikitzat jo genuen kantitatea (2. hurbilketa), eta hemen karratura agertzen da."
    },
    {
     "mota": "testua",
     "html": "Kasu elektrikoarekiko <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> faktore gehigarriak esan nahi du dipolo magnetikoaren erradiazioa, normalean, tamaina bertsuko iturri baten dipolo elektrikoaren erradiazioa baino askoz ahulagoa dela — horregatik nagusitzen da dipolo elektrikoaren erradiazioa antena praktiko gehienetan eta trantsizio atomiko gehienetan, eta dipolo magnetikoaren (eta multipolo altuagoen) erradiazioa fisika atomikoan hautaketa-arauek debekatutako trantsizioetara baztertuta geratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: dipolo elektrikoaren eta magnetikoaren erradiazioak alderatzea"
    },
    {
     "mota": "testua",
     "html": "Ezabapena zehazki ikusteko, aldera ditzagun <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>a</mi></mrow></math> dipolo elektriko oszilatzaile bat eta tamaina bereko (<math display=\"inline\"><mi>a</mi></math>) eta korronte-anplitude bereko (<math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>) korronte-espira oszilatzaile bat, hau da, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>ω</mi></mrow></math> erabiliz (magnitude-ordena, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></math>-tik), <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>∼</mo><mi>q</mi><mi>ω</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math> lortzen da."
    },
    {
     "mota": "testua",
     "html": "Erradiatutako potentzien arteko arrazoia, orduan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>∼</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>ω</mi><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>ω</mi></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uhin-luzera baino askoz txikiagoa den iturri batentzat (<math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>, dipolo-hurbilketa bera baliozkoa den erregimena), <math display=\"inline\"><mrow><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><mo>≪</mo><mn>1</mn></mrow></math>, eta, beraz, <math display=\"inline\"><mrow><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><mi>/</mi><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><mn>1</mn></mrow></math> — dipolo magnetikoaren erradiazioa, garapen multipolarra bera hasieran justifikatu zuen arrazoi txiki beraren <strong>karratuaz</strong> dago ezabatuta."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hau hurrengo ataleko multipolo-hierarkia orokorrean identifikatzen den <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> ezabapen-faktore bera da — hemen zehazki landua, dipolo elektrikoaren eta magnetikoaren erradiazioen kasu partikularrerako, termino orokorretan soilik adierazi beharrean."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Iturri arbitrario baten erradiazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ataletan sistema jakin bi erabili ditugu — dipolo elektriko eta magnetiko oszilatzaileak. Orain prozedura bera iturri arbitrario bati aplikatu nahi diogu: karga eta korronte-banaketa oro, baldintza bakarra izanik jatorriaren inguruko bolumen finitu batean lokalizatuta egotea. Potentzial eskalar atzeratua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, non <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></msqrt></mrow></math> den. Aurreko kasuetan bezala, eremu-puntua iturriaren tamaina baino askoz urrunago dagoela onartuko dugu — <strong>1. hurbilketa</strong>: <math display=\"inline\"><mrow><msup><mi>r</mi><mo>′</mo></msup><mo>≪</mo><mi>r</mi></mrow></math>. Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>≈</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, <math display=\"inline\"><mi>ρ</mi></math> jatorriko denbora atzeratuaren (<math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>≡</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>) inguruan Taylor-en seriean garatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen ordeneko gaiak soilik gordez (2. hurbilketa, oszilatzaile batentzat <math display=\"inline\"><mrow><msup><mi>r</mi><mo>′</mo></msup><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math> dena), potentziala hiru gaitan banatzen da — monopoloa, dipoloa eta dipoloaren denbora-deribatua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>Q</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>r</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen integrala karga osoa da, <math display=\"inline\"><mi>Q</mi></math>, eta karga kontserbatzen denez denboraren independentea da; beste biak dipolo-momentua dira <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> unean. Karga kontserbatzeak, hain zuzen, monopoloak erradia ez dezan bermatzen du. Potentzial bektoriala, berriz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>r</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da (3.7 problemaren arabera, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math>-ren integrala dipolo-momentuaren denbora-deribatua da). Eremuetara pasatzean, erradiazio-zonan (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> gaiak soilik) argumentuko <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> deribatzen duten gaiak baino ez dira geratzen; emaitza hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>−</mi><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi><mi>c</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover></math> <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math> unean ebaluatzen den. <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> ardatza <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren norabidean hartuz, koordenatu polar esferikoetan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Poynting-en bektorea eta potentzia osoa, beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dira. Hau da iturri arbitrario baten erradiazioaren emaitza orokorra, potentzial atzeratuen garapen multipolarra <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> eremuak sortzeko gai den ordenarik baxuenera eramanda — dipolo elektrikoaren gaia, hain zuzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "11.2 adibidea — Dipolo oszilatzailea eta karga puntual bakarra berreskuratzea"
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> Dipolo elektriko oszilatzaile baten kasuan, <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Hori goiko eremu- eta potentzia-formuletan sartuz, 11.1.2 ataleko emaitzak berreskuratzen dira: eremuek <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>r</mi></mrow></math> mendekotasuna dute, patroiak erroskila-itxura, eta potentziak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "ematen du (ziklo-batez bestekoak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> faktorea sartzen du), Larmor-en dipolo-formularekin bat."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> Karga puntual bakar batentzat, dipolo-momentua <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mi mathvariant=\"bold-italic\">𝒅</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒅</mi></math> kargaren posizioa den jatorriarekiko. Beraz <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> kargaren azelerazioa den. Kasu honetan erradiatutako potentzia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da — <strong>Larmor-en formula</strong> ospetsua, hurrengo atalean beste bide batetik ere deribatuko duguna. Ohartu karga puntual batek erradiatutako potentzia bere azelerazioaren <strong>karratuarekiko</strong> proportzionala dela."
    },
    {
     "mota": "testua",
     "html": "Atal honetan egin duguna potentzial atzeratuen garapen multipolar bat da, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> eremuak (erradiazioa) sortzeko gai den ordenarik baxuenera eramana: dipolo elektrikoaren gaia. Dipolo-momentua desagertzen bada (edo haren bigarren denbora-deribatua zero bada), <math display=\"inline\"><msup><mi>r</mi><mo>′</mo></msup></math>-n bigarren ordeneko gaira jo behar da — dipolo magnetikoaren eta kuadrupolo elektrikoaren erradiazioetara —, eta horiek ere desagertzen badira, hurrengoetara."
    },
    {
     "mota": "testua",
     "html": "Dipolo elektrikoaren momentua desagertzen zaion iturri batentzat (edo axola izateko ahulegi oszilatzen zaionarentzat), erradiazioa ez da besterik gabe gelditzen — 3. kapituluko garapen multipolarrean bizirik dirauen <strong>hurrengo</strong> gaiak garraiatzen du, denbora atzeratuan ebaluatuta. Hierarkia orokorra, indar tipikoaren beheranzko ordenan, hau da:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Ondoz ondoko multipolo bakoitzak aurrekoak baino ahulago erradiatzen du, gutxi gorabehera <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> faktore batez, non <math display=\"inline\"><mi>a</mi></math> iturriaren tamaina den — 3. kapituluko serie multipolar estatikoa kontrolatzen zuen garapen-parametro bera.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<div class=\"j-taula\"><table><thead><tr><th><strong>Momentu erradiatzailea</strong></th><th><strong>Potentziaren eskala</strong></th></tr></thead><tbody><tr><td>Dipolo elektrikoa (<math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math>)</td><td><math display=\"inline\"><mrow><msup><mi>ω</mi><mn>4</mn></msup><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math></td></tr><tr><td>Dipolo magnetikoa (<math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math>) / kuadrupolo elektrikoa</td><td><math display=\"inline\"><mrow><msup><mi>ω</mi><mn>6</mn></msup><mo>×</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (tamaina)</mtext></mrow><mn>2</mn></msup></mrow></math>, dipoloarekiko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> faktoreaz ezabatua</td></tr></tbody></table></div>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Horrexegatik ikusten dira, hain zuzen, dipolo elektrikoz debekatutako trantsizio atomikoak (non hautaketa-arau kuantikoek <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> behartzen baitute hasierako eta amaierako egoeren artean) ohiko dipolo-trantsizioak baino hainbeste ahulago, eta hainbeste iraupen luzeagokoak — atomoa dipolo magnetikoaren edo kuadrupolo elektrikoaren erradiazioaren bidez erradiatzera behartuta dago, biak nabarmen ahulagoak, hemen klasikoki deribatutako <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> ezabapen beragatik."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Karga puntualak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Larmor-en formula"
    },
    {
     "mota": "testua",
     "html": "Karga puntual azeleratu bakar batentzat (dipolo oszilatzaile idealizatu batentzat beharrean), erradiatutako potentzia aldiuneko azelerazioaren mende soilik dago:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Larmor-en formula (karga puntuala)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da, seguru asko, erradiazio-teoria klasiko osoko formularik ondoriotsuena: <strong>edozein</strong> karga azeleratuk erradiatzen du, potentzia bere azelerazioaren karratuarekiko proportzionala dela, ibilbidearen xehetasunak edozein direla ere."
    },
    {
     "mota": "testua",
     "html": "Deriba dezagun orain zuzenean, karga puntualaren eremuetatik abiatuta. 10. kapituluan mugimendu arbitrarioan dagoen karga puntual baten eremuak lortu genituen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> den. Lehen gaia (hirukoitza ez dena) <strong>abiadura-eremua</strong> da; bigarrena, azelerazioarekin, <strong>azelerazio-eremua</strong>. Poynting-en bektorea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>E</mi><mn>2</mn></msup><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Energia-fluxu horren guztia ez da, ordea, erradiazioa: zati bat kargak berekin daraman eremu-energia baino ez da. Erradiatutako energia kargatik <strong>askatzen</strong> dena da, infiniturantz hedatzen dena. Partikulak <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> unean erradiatutako potentzia osoa kalkulatzeko, <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> erradioko esfera erraldoi bat marrazten dugu, partikularen posizioan zentratua (<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> unean), tarte egokia itxaroten dugu (<math display=\"inline\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>) eta Poynting-en bektorea gainazalean integratzen dugu. Esferaren azalera <math display=\"inline\"><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></math>-ren proportzionala denez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math>-ren <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> gaiek soilik ematen dute emaitza finitua limitean; horregatik <strong>azelerazio-eremuek</strong> soilik adierazten dute benetako erradiazioa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math> <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math>-rekiko perpendikularra denez, Poynting-en bigarren gaia desagertzen da, eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>E</mi><mtext mathvariant=\"normal\">rad</mtext><mn>2</mn></msubsup><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math> geratzen da. Kargak <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> unean <strong>pausagunean</strong> dagoenean (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>q</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>θ</mi></math> <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math>-ren eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>-ren arteko angelua den. Ez da potentziarik erradiatzen aurreranzko edo atzeranzko norabidean; erroskila bat da, aldiuneko azelerazioaren norabidearen inguruan. Esfera osoan integratuz, Larmor-en formula berreskuratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo>∮</mo><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> suposatuz deribatu badugu ere, formula ondo hurbiltzen da <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> den bitartean. <math display=\"inline\"><mrow><mi>v</mi><mo>≠</mo><mn>0</mn></mrow></math> kasu zehatza zailagoa da; angeluko banaketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, eta angelu guztietan integratuz emaitza <strong>Liénard-en orokortzea</strong> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Liénard-en formula (karga erlatibista)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>≡</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>γ</mi><mn>6</mn></msup></math> faktoreak esan nahi du erradiatutako potentzia izugarri hazten dela partikularen abiadura argiaren abiadurara hurbildu ahala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "11.3 adibidea — v eta a kolinealak: bremsstrahlung"
    },
    {
     "mota": "testua",
     "html": "Demagun <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> aldiune batean <strong>kolinealak</strong> direla (<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> unean) — adibidez, lerro zuzeneko higiduran. Aurki ditzagun erradiazioaren angeluko banaketa eta erradiatutako potentzia osoa."
    },
    {
     "mota": "testua",
     "html": "<strong>Ebazpena.</strong> Kasu honetan <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>, eta beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mi>z</mi></math> ardatza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-ren norabidean hartuz, <math display=\"inline\"><mrow><mi>β</mi><mo>≡</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math> definituz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Abiadura txikietan (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>) erroskila arruntera itzultzen da; abiadura oso handietan (<math display=\"inline\"><mrow><mi>β</mi><mo>≈</mo><mn>1</mn></mrow></math>), erroskila aurrerantz luzatzen eta bultzatzen da <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>5</mn></mrow></msup></math> faktoreagatik, eta erradiazioa gero eta kono estuago batean pilatzen da aurreranzko norabidearen inguruan. Angelu guztietan integratuz (<math display=\"inline\"><mi>φ</mi></math>-ren integrala <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>; <math display=\"inline\"><mi>θ</mi></math>-rena <math display=\"inline\"><mrow><mi>x</mi><mo>≡</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ordezkapenaz), potentzia osoa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da, Liénard-en formularekin bat (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> kasurako). Angeluko banaketa berdina da partikula azeleratzen ala moteltzen ari den: <math display=\"inline\"><msup><mi>a</mi><mn>2</mn></msup></math>-ren mende soilik dago. Elektroi azkar batek metalezko itu bat jotzean bat-batean moteltzen denean, honela igorritako erradiazioari <strong>bremsstrahlung</strong> (&quot;balaztatze-erradiazioa&quot;) deitzen zaio; adibide honek bremsstrahlung-en teoria klasikoa deskribatzen du funtsean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: zergatik diren ezegonkorrak atomo klasikoak"
    },
    {
     "mota": "testua",
     "html": "Hidrogeno-atomo bateko elektroia klasikoki tratatuz — protoiaren inguruan <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≈</mo><mn>5.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> m erradioan, Coulomb-en erakarpenaren pean orbitatzen duen karga puntual gisa —, azelerazio zentripetua <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math> da, non <math display=\"inline\"><mi>v</mi></math> Coulomb-en indarrak indar zentripetua hornitu behar duela eskatuz finkatzen den. Larmor-en formulan ordezkatuz, <math display=\"inline\"><mrow><mi>P</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> W ordenako potentzia erradiatua lortzen da — txiki-txikia, baina ez zero, eta etengabe xurgatzen du elektroiaren energia orbitala."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulu labur batek (energia-galeraren abiadura gero eta txikiagoa den energia orbitalaren aurka integratuta) erakusten du hidrogeno-atomo klasiko batek bere energia orbital guztia erradiatuko lukeela eta nukleorantz kiribilduko litzatekeela <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></math> segundo inguruan. Benetako atomoak mugagabe egonkorrak dira — historikoki, elektrodinamika klasikoak eskala atomikoetan huts egin <strong>behar</strong> duelako frogarik zuzenenetako bat, mekanika kuantikoak soilik ebatzia."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Karga azeleratu baten erradiazioa"
    },
    {
     "mota": "irudia",
     "oina": "Denbora laburrez azeleratzen den karga batek &quot;bihurgune&quot; bat garatzen du bere eremu-lerroetan — benetako erradiazio-pultsu bat — kanporantz <math display=\"inline\"><mi>c</mi></math> abiaduraz hedatzen dena, (abiadurazko) eremu-patroi zaharra berriarekin lotuz.",
     "src": "media/irudiak/6734cd9b33dfbfaa.svg",
     "zabalera": 209
    },
    {
     "mota": "testua",
     "html": "Erradiazioa ikusteko modu bizi eta hutsik geometriko bat: abiadura konstanteaz higitzen den karga baten eremu-lerroek (edozein aldiunetan) bere <strong>oraingo</strong> posiziorantz apuntatzen dute, kanporantz lerro zuzenetan. Kargak denbora laburrez azeleratzen badu, eremu-lerroek ezin dute hori aldiune berean nonahi &quot;jakin&quot; — informazioa <math display=\"inline\"><mi>c</mi></math> abiaduraz hedatzen da —, eta, beraz, bihurgune bat eratzen da azelerazio-gertaerari dagokion erradioan, kanporantz hedatuz. Bihurgune hori, zeharkako eremu-osagai bat eta, beraz, benetako energia-fluxu bat daramana, <strong>da</strong>, hain zuzen ere, erradiazio-pultsua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erradiazio-erreakzioa"
    },
    {
     "mota": "testua",
     "html": "Karga azeleratu batek energia erradiatzen badu, energiaren kontserbazioz, azelerazioari aurka egiten dion erreakzio-indar bat ere sentitu behar du — kargaren beraren eremu erradiatuak bere buruaren gainean atzeraeraginez egindako auto-indar bat. Abraham–Lorentz-en formulak (ez-erlatibista) indar hori estimatzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Abraham-Lorentz-en erradiazio-erreakzioaren indarra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deriba dezagun energiaren kontserbaziotik. Partikula ez-erlatibista batentzat (<math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>), erradiatutako potentzia Larmor-en formulak ematen du, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi></mrow></math>. Energiaren kontserbazioak iradokitzen du hori dela, halaber, partikulak <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math> erreakzio-indarraren pean energia galtzeko abiadura:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio hori, hertsiki, <strong>okerra</strong> da aldiunean (abiadura-eremuek energia trukatzen dute une bakoitzean), baina <strong>batez beste</strong> zuzena da sistema <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> artean bere hasierako egoerara itzultzen bada (adibidez, ziklo oso batzuetan integratuz). Orduan <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover></mrow></math> zatika integra daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><msup><mi>a</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>−</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Muga-gaia desagertzen da (abiadurak eta azelerazioak berdinak dira <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> unetan), eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio hori beteko da, ziurrenik, integrando osoa zero bada, hots, Abraham–Lorentz-en formulak dioen bezala. Formula honek badu ondorio kezkagarri bat: kanpo-indarrik gabeko partikula batentzat, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> Newton-en legeak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> ematen du, zeinaren soluzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>t</mi><mi>/</mi><mi>τ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>≡</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>m</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "den (elektroiaren kasuan <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> s). Azelerazioa berez esponentzialki <strong>handitzen</strong> da denborarekin — ondorio absurdua, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eskatuz saihes daitekeena; baina <strong>soluzio iheskor</strong> horien baztertze sistematikoak ondorio are desatseginagoa dakar: kanpo-indar bat aplikatuz gero, partikula indarra ekintzan jarri <strong>baino lehen</strong> hasten da erantzuten (aurre-azelerazio akausala), <math display=\"inline\"><mi>τ</mi></math> tarte laburrez bada ere."
    },
    {
     "mota": "testua",
     "html": "Formula hau bere patologiengatik da ospetsua (soluzio iheskor ez-fisikoak onartzen ditu, eta haiek saihesteko <strong>etorkizuneko</strong> azelerazioa ezagutu behar da) — seinale bat, oso hedaduraz esanguratsutzat jotzen dena, karga puntual baten auto-indarraren teoria klasiko erabat koherenterik ez dela existitzen, eta tratamendu egoki batek, azken batean, elektrodinamika kuantikoa eskatzen duela."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "11.4 adibidea — Malguki bati lotutako karga baten erradiazio-moteltzea"
    },
    {
     "mota": "testua",
     "html": "Kalkula dezagun <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> maiztasun naturaleko malguki bati lotutako karga baten erradiazio-moteltzea, <math display=\"inline\"><mi>ω</mi></math> maiztasunean eraginda."
    },
    {
     "mota": "testua",
     "html": "<strong>Ebazpena.</strong> Higidura-ekuazioa hau da (mal, erradiazio- eta bultzatzaile-indarrak):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">mal </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>+</mo><mi>m</mi><mi>τ</mi><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><mi>τ</mi><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mi>τ</mi><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover></mrow></math> den. Sistema <math display=\"inline\"><mi>ω</mi></math> maiztasunean oszilatzen ari denez, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta orduan <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Hori sartuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta moteltze-faktorea"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>τ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "da. (9. kapituluan <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">moteltze </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mi>v</mi></mrow></math> idatzi genuenean, moteltzea abiadurarekiko proportzionala zela onartu genuen sinpletasunez; orain badakigu erradiazio-moteltzea, behintzat, <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></math>-rekiko proportzionala dela. Baina ez du axola handirik: oszilazio sinusoidaletan <math display=\"inline\"><mi>v</mi></math>-ren edozein deribatu bikoitik <math display=\"inline\"><mi>v</mi></math>-rekiko proportzionala baita.) <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>m</mi><mi>c</mi></mrow></math> oso txikia denez, moteltze hori ahula da erresonantzia optikoetatik urrun."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erradiazio-erreakzioaren oinarri fisikoa"
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean Abraham–Lorentz-en formula energiaren kontserbaziotik deribatu dugu, baina indar horren <strong>mekanismoa</strong> identifikatu gabe. Mekanismoa auto-indar bat da: kargaren beraren eremuek bere buruaren gainean egiten duten atzeraeragina. Karga puntual baten eremuak partikulan bertan infinitu bihurtzen direnez, indar hori zuzenean kalkulatzea zaila da; horregatik karga <strong>hedatu</strong> bat hartzen dugu (eremua nonahi finitua), eta amaieran tamaina zerorantz eramaten."
    },
    {
     "mota": "testua",
     "html": "Oro har, karga-banaketa baten zati batek (<math display=\"inline\"><mi>A</mi></math>) beste zati baten (<math display=\"inline\"><mi>B</mi></math>) gainean egiten duen indar elektromagnetikoa ez da <math display=\"inline\"><mi>B</mi></math>-k <math display=\"inline\"><mi>A</mi></math>-ren gainean egiten duenaren berdina eta aurkakoa: Newton-en hirugarren legea hausten da banaketaren barruan, eta desoreka guztien batura <strong>kargak bere buruaren gaineko indar garbi</strong> bat da — auto-indarra, erradiazio-erreakzioaren erantzulea. Eredu sinple bat &quot;haltera&quot; bat da: karga osoa <math display=\"inline\"><mi>q</mi></math> bi erdi berdinetan banatua, <math display=\"inline\"><mi>d</mi></math> distantziara. <math display=\"inline\"><mi>x</mi></math> norabidean higituz eta denbora atzeratuan pausagunean egonda, bi erdien arteko elkarrekintza-indarra kalkulatuz eta <math display=\"inline\"><mi>d</mi></math>-ren berreturetan garatuz, tamaina zerorantz doanean gai bakarra bizirik geratzen da (masa-zuzenketaz gain):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mtext mathvariant=\"normal\">rad</mtext><mrow><mtext mathvariant=\"normal\">int </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau Abraham–Lorentz-en formularen erdia da soilik, elkarrekintza-gaia baita (erdi baten indarra bestearen gainean). Erdi bakoitzak bere buruaren gainean egiten duen indarra gehituz gero, emaitza osoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, Abraham–Lorentz-en formula zehazki berreskuratuz. <strong>Ondorioa:</strong> erradiazio-erreakzioa kargak bere buruaren gaineko indarra da — zehazkiago, karga-banaketaren zati desberdinek sortutako eremuek elkarren gainean egiten duten indar garbia. Kalkulu berean agertzen den beste gai bat (<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>-ren proportzionala) partikularen masari gehitzen zaio; masa elektromagnetiko horren dibergentzia <math display=\"inline\"><mrow><mi>d</mi><mo>→</mo><mn>0</mn></mrow></math> limitean fisika klasikoaren arazo ezaguna da, elektrodinamika kuantikoan <strong>masa-birnormalizazio</strong> gisa &quot;ezkutatzen&quot; dena."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Ariketa ebatziak (Griffiths eskuliburutik)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengo ariketak Griffiths-en <strong>Introduction to Electrodynamics</strong> liburuko problemak dira (11. kapitulua, erradiazioa), irakaslearen eskuliburuko soluzioarekin, JAKINArako euskaratuak."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Griffiths 11.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu dipolo elektriko oszilatzaile baten potentzial atzeratuek (11.12 eta 11.17 ekuazioak) Lorenz-en baldintza betetzen dutela. Ez erabili urruneko-zonako hurbilketa: kalkulua ez da erradiazio-zonara murriztu behar."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatziz, <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> norabidean orientatutako dipolo oszilatzaile batentzat,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatu esferikoetan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>θ</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lorenz-en baldintza <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>-ren dibergentzia.</strong>  <math display=\"inline\"><mi>φ</mi></math>-rekiko mendekotasunik gabe, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>∂</mi><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>A</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>∂</mi><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math></span>. <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>r</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mi>/</mi><mi>c</mi></mrow></math> erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>∂</mi><mi>r</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>A</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mi>/</mi><mn>4</mn><mi>π</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math></span> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>∂</mi><mi>θ</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi ekarpenak batuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>V</mi></math>-ren denbora-deribatua.</strong>  <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>ω</mi></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>t</mi></msub><mi>V</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi>c</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mfrac><mi>ω</mi><mi>r</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub></mrow></math>-z biderkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>∂</mi><mi>t</mi></msub><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Emaitza.</strong> Dipolo oszilatzailearen potentzial atzeratu osoek Lorenz-en baldintza betetzen dute; egiaztapenak <math display=\"inline\"><mi>V</mi></math>-ren <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> gaiak biak erabiltzen ditu, beraz ez da urruneko-zonako hurbilketaren mende."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 231. or.: 11.1 problema. Zenbaki bera dute bi edizioek."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Griffiths 11.3",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu dipoloaren bi muturrak lotzen dituen hariaren <strong>erradiazio-erresistentzia</strong>: hots, dipoloak erradiazio moduan galtzen duen batez besteko potentzia bera bero moduan xahutuko lukeen erresistentzia. Frogatu <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>790</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> ohm dela, non <math display=\"inline\"><mi>λ</mi></math> erradiazioaren uhin-luzera den. Irrati arrunt bateko hariekin (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>5</mn></mrow></math> cm), kezkatu behar al zenuke ekarpen erradiatiboaz erresistentzia osoan?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dipoloko korrontea <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (11.15 ekuazioa), beraz denboran batez bestekotutako <math display=\"inline\"><msup><mi>I</mi><mn>2</mn></msup></math> balioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> da. Joule-efektuz <math display=\"inline\"><mi>R</mi></math> erresistentzia batean xahutuko litzatekeen batez besteko potentzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dipoloak benetan erradiatzen duen batez besteko potentzia, berriz, 11.22 ekuazioak ematen du, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math> harturik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi adierazpenak berdinduz, <math display=\"inline\"><mrow><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> sinplifikatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> ordezkatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>d</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mn>3</mn></mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>80</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>≃</mo><mn>790</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Zenbakiak.</strong> Irrati arrunt batean <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>5</mn></mrow></math> cm eta, esaterako, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m harturik, <math display=\"inline\"><mrow><mi>R</mi><mo>≃</mo><mn>790</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> ohm. Balio hori hutsala da hariaren Ohm-erresistentziaren aldean: erradiazio-galera ez da kezkatzeko modukoa antena laburretan."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 231. or.: 11.3 problema (zenbaki bera bi edizioetan). Emaitza zehatza <math display=\"inline\"><mrow><mn>80</mn><msup><mi>π</mi><mn>2</mn></msup><mo>=</mo><mn>789.6</mn></mrow></math> da."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Griffiths 11.4",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dipolo elektriko birakari bat bi dipolo oszilatzaileren gainezarmen gisa uler daiteke, bata <math display=\"inline\"><mi>x</mi></math> ardatzean eta bestea <math display=\"inline\"><mi>y</mi></math> ardatzean, azkena <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> desfasatuta: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Gainezarmenaren printzipioa eta 11.18-11.19 ekuazioak erabiliz, aurkitu dipolo birakariaren eremuak, Poynting bektorea eta erradiazioaren intentsitatea. Marraztu intentsitate-patroia <math display=\"inline\"><mi>θ</mi></math> angeluaren funtzioan, eta kalkulatu erradiatutako potentzia osoa. Zentzuzkoa al da emaitza?"
      },
      {
       "mota": "irudia",
       "oina": "Dipolo elektriko birakaria <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>\n    planoan: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektoreak <math display=\"inline\"><mi>ω</mi></math> maiztasunez biratzen du,\n    <math display=\"inline\"><mrow><mi>+</mi><mi>q</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>q</mi></mrow></math> kargak muturretan.",
       "src": "media/irudiak/f99af94d809eb130.svg",
       "zabalera": 179
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> norabideko dipolo baten eremu erradiatiboa <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>π</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> moduan idatz daiteke (11.18, koordenatu kartesiarretan). Gainezarmenez, <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math> ardatzetako dipoloak batuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mi>x</mi><mi>r</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mi>y</mi><mi>r</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Poynting-en bektorea.</strong>  <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>E</mi><mn>2</mn></msup><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denboran batez bestekotuz (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Patroia.</strong> Intentsitatea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>-ren proportzionala da: maximoa dipoloaren biraketa-ardatzean (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, balioa <math display=\"inline\"><mn>1</mn></math>) eta minimoa biraketa-planoan (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, balioa <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>) — erroskila zapaldu bat, dipolo bakar baten <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>-ren alderantziz."
    },
    {
     "mota": "testua",
     "html": "<strong>Potentzia osoa.</strong> Esfera batean integratuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mn>2</mn><mi>π</mi><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hots"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Zentzuzkoa da?</strong> Dipolo oszilatzaile bakar batek <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erradiatzen du (11.22); hemengo emaitza horren bikoitza da. Potentzia eremuen koadratikoa denez, printzipioz ez litzateke gainezarmenaren mende egon behar; baina bi dipoloak <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> desfasatuta daudenez, denbora-batezbestekoan gurutze-gaia ezeztatu egiten da, eta potentziak batu egiten dira. Horregatik dirudi gainezarmena betetzen duela."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 232-233. or.: 11.4 problema (zenbaki bera bi edizioetan)."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Griffiths 11.6",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu dipolo magnetiko oszilatzailearen erradiazio-erresistentzia (11.3 problema), <math display=\"inline\"><mi>b</mi></math> erradioko espira baterako. Adierazi emaitza <math display=\"inline\"><mi>λ</mi></math> eta <math display=\"inline\"><mi>b</mi></math>-ren bidez, eta aldera ezazu dipolo elektrikoaren erradiazio-erresistentziarekin."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><mi>b</mi></math> erradioko espira, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> korrontea eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dipolo magnetikoa.",
       "src": "media/irudiak/1e5f017db005484d.svg",
       "zabalera": 182
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Espirako korrontea <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> eta Joule-efektuz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup><mi>R</mi></mrow></math>. Dipolo magnetikoak erradiatzen duen batez besteko potentzia 11.40 ekuazioak ematen du, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math> harturik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>π</mi><mn>2</mn></msup><msup><mi>b</mi><mn>4</mn></msup><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi adierazpenak berdinduz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math> ordezkatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>=</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><msup><mi>π</mi><mn>5</mn></msup><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>b</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>≃</mo><mn>3.08</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>b</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Alderaketa.</strong> Dipolo elektrikoaren erradiazio-erresistentzia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>-ren araberakoa da (11.3), magnetikoarena berriz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>-ren araberakoa. <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>λ</mi></mrow></math> denez, laugarren berreturak magnetiko-erresistentzia askoz txikiagoa bihurtzen du. 11.3 problemako neurriekin (<math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>5</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m), <math display=\"inline\"><mrow><mi>R</mi><mo>≃</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></mrow></math> ohm — dipolo elektrikoaren erradiazio-erresistentziaren milioirena."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 234. or.: 11.6 problema (zenbaki bera bi edizioetan)."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Griffiths 11.12",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> korronte batek espira zirkular txiki batetik zehar zirkulatzen du. Eratorri erradiatutako potentziaren formula orokorra, espiraren <math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> momentu dipolar magnetikoaren bidez adierazita."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><mi>b</mi></math> erradioko espira txikia, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>\n  korrontea eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dipolo-momentua; <math display=\"inline\"><mi>P</mi></math> behaketa-puntua\n    <math display=\"inline\"><mi>θ</mi></math> angeluan.",
       "src": "media/irudiak/1e5f017db005484d.svg",
       "zabalera": 182
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Espira neutroa denez, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>. Korronte filamentu baten potentzial bektorial atzeratua <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>r</mi><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup></mrow></math></span> da. Espiraren erradioa <math display=\"inline\"><mi>b</mi></math> bada eta behaketa-puntua urrun badago, garapen angeluarreko zero-ordenako gaia ezeztatzen da <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> delako; beraz <math display=\"inline\"><mi>b</mi></math>-ren lehen ordenako gaiak gorde behar dira. Erradiazio-zonan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta espiraren momentu magnetikoa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> da."
    },
    {
     "mota": "testua",
     "html": "Urruneko-zonako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> hori lehen ordenako garapenetik dator. <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi><mo>≃</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≃</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>I</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math></span> ordezkatuz, eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><msup><mi>φ</mi><mo>′</mo></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msup><mi>φ</mi><mo>′</mo></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msup><mi>φ</mi><mo>′</mo></msup></mrow></math></span> dela erabiliz, lehen ordenako gaiek soilik <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi>φ</mi><mo>′</mo></msup><mi>d</mi><msup><mi>φ</mi><mo>′</mo></msup><mo>=</mo><mi>π</mi></mrow></math> ematen dute (gainerako <math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math></span> integralak nuluak dira); horrela <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>I</mi><mo>′</mo></msup><mi>/</mi><mi>c</mi><mo>+</mo><mi>I</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math></span> lortzen da, eta urruneko zonan <math display=\"inline\"><mrow><mi>I</mi><mi>/</mi><mi>r</mi></mrow></math> gaia (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>-koa) baztertzean goiko adierazpena geratzen da."
    },
    {
     "mota": "testua",
     "html": "<strong>Erradiazio-eremuak.</strong>  <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>; <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> gai erradiatiboak bakarrik gordez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu magnetiko erradiatiboa <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mtext mathvariant=\"normal\">rad</mtext></msub></mrow></math> da; <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">rad</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Poynting-en bektorea.</strong>  <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math> eremu horiek ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>4</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esfera handi batean integratuz, <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>8</mn><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>m</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>m</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Patroi angeluarra <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>-ren proportzionala da: ez dago erradiaziorik dipolo magnetikoaren ardatzean, eta emisioa maximoa da espiraren planoan."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 236. or.: 4. edizioko 11.11 problema (3. edizioan 11.12). T5 hobekuntza: lehen ordenako <math display=\"inline\"><mi>b</mi></math>-garapenaren pausoa gehitu da, eskuliburuko metodoari jarraituz."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Griffiths 11.14",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bohr-en hidrogeno-teorian, oinarrizko egoerako elektroiak <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> m erradioko zirkulua egiten zuen, protoiaren Coulomb-erakarpenak orbitan eutsita. Elektrodinamika klasikoaren arabera, elektroi horrek erradiatu egin behar luke, eta beraz nukleorantz kiribildu. Frogatu <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> dela ibilbidearen zatirik handienean (Larmor-en formula erabili ahal izateko), eta kalkulatu Bohr-en atomoaren bizi-iraupena. (Suposatu bira bakoitza funtsean zirkularra dela.)"
      },
      {
       "mota": "irudia",
       "oina": "Elektroia nukleorantz kiribiltzen,\n    erradiazioz energia galtzen duen heinean.",
       "src": "media/irudiak/5b657a1c6cd04c87.svg",
       "zabalera": 137
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Abiadura.</strong> Orbita zirkularrean Coulomb-indarra zentripetua da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>q</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m hasierako erradioan <math display=\"inline\"><mrow><mi>v</mi><mi>/</mi><mi>c</mi><mo>≃</mo><mn>0.0075</mn><mo>≪</mo><mn>1</mn></mrow></math>; erradioa txikitu ahala <math display=\"inline\"><mi>v</mi></math> handitzen da, baina ibilbidearen ia osoan <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> da, beraz Larmor-en formula erabil daiteke."
    },
    {
     "mota": "testua",
     "html": "<strong>Larmor eta energiaren kontserbazioa.</strong> Azelerazio zentripetua <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>r</mi><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, eta Larmor-ek <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du. Elektroiaren energia osoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>q</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> virialaz). Energia erradiazioz galtzen denez, <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mi>P</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>r</mi></math>-ren araberako gaiak bilduz eta integratuz (<math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>-tik <math display=\"inline\"><mn>0</mn></math>-ra),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>c</mi></mrow><msup><mi>q</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>c</mi></mrow><msup><mi>q</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msubsup><mi>r</mi><mn>0</mn><mrow><mn>3</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbakiak ordezkatuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>≃</mo><mn>1.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>s</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz atomo klasikoak <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></math> segundo-eskala batean kolapsatuko luke — hain zuzen, elektrodinamika klasikoak hidrogeno-atomoaren egonkortasuna ezin duela azaldu erakusten duen emaitza."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 237-238. or.: 11.14 problema (zenbaki bera bi edizioetan)."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Griffiths 11.17",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>q</mi></math> kargako partikula batek <math display=\"inline\"><mi>R</mi></math> erradioko zirkulua egiten du <math display=\"inline\"><mi>v</mi></math> abiadura konstantez. Higidura mantentzeko <math display=\"inline\"><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>R</mi></mrow></math> indar zentripetua eman behar duzu; zer indar <strong>gehigarri</strong> (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub></math>) egin behar duzu erradiazio-erreakzioari aurre egiteko? Zer potentzia (<math display=\"inline\"><msub><mi>P</mi><mi>e</mi></msub></math>) ematen du indar horrek? Aldera ezazu <math display=\"inline\"><msub><mi>P</mi><mi>e</mi></msub></math> erradiatutako potentziarekin (Larmor). (b) Errepikatu <math display=\"inline\"><mi>A</mi></math> anplitudeko eta <math display=\"inline\"><mi>ω</mi></math> maiztasuneko higidura harmoniko sinplerako; azaldu desadostasuna. (c) Aztertu erorketa askeko kasua (azelerazio konstantea <math display=\"inline\"><mi>g</mi></math>): zein da erradiazio-erreakzioko indarra, eta zein erradiatutako potentzia?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(a) Higidura zirkularra.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, beraz <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. Abraham-Lorentz-en indarra <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math></span> da; aurre egiteko"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Larmor-ek <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du, eta <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mrow></math> denez (<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emandako potentzia eta erradiatutakoa berdinak dira une oro."
    },
    {
     "mota": "testua",
     "html": "<strong>(b) Higidura harmoniko sinplea.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>; lehen bezala <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Baina orain <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><msub><mi>P</mi><mi>e</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Une bakoitzean ez datoz bat (<math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math> vs <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math>), baina <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math></span> denez, ziklo oso batean batez besteko berdina dute: emandako energia eta erradiatutakoa berdinak dira. Bitartean, energia inguruko eremuetan gordetzen da aldika."
    },
    {
     "mota": "testua",
     "html": "<strong>(c) Erorketa askea.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>g</mi><mi>t</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (azelerazioa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>g</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> konstantea), beraz <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hala ere, Larmor-ek erradiazioa ematen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>g</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erradiazioa badago, baina erradiazio-erreakzioko indarra nulua da: energia inguruko eremuetatik ateratzen da etengabe. Paradoxa honek soluzio zehatzean ere irauten du (11.31 problema)."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 240. or.: 11.17 problema (zenbaki bera bi edizioetan)."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Griffiths 11.21",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>q</mi></math> kargako partikula bat <math display=\"inline\"><mi>k</mi></math> konstanteko malguki batetik zintzilik dago, sabaitik. Bere oreka-posizioa lurretik <math display=\"inline\"><mi>h</mi></math> altueran dago. <math display=\"inline\"><mi>d</mi></math> distantzia orekapetik desplazatzen da eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n askatzen da."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>λ</mi><mo>≪</mo><mi>h</mi></mrow></math> hipotesipean, kalkulatu lurrera iristen den erradiazio-intentsitatea, kargaren azpiko puntutik <math display=\"inline\"><mi>R</mi></math> distantziara dagoen funtzio gisa; aurkitu non den maximoa; egiaztatu emaitza lur osoan integratuz; eta estimatu anplitudea <math display=\"inline\"><mi>d</mi></math>-tik <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>e</mi></mrow></math>-ra jaisteko behar den denbora."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><mi>h</mi></math> altueran malgukian oszilatzen duen\n    <math display=\"inline\"><mi>q</mi></math> karga, <math display=\"inline\"><mi>R</mi></math> distantziara dagoen lur-puntu batera erradiatzen.",
       "src": "media/irudiak/e256865e84a6c900.svg",
       "zabalera": 243
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Karga bertikalki oszilatzen du <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> maiztasunez; dipolo-momentu elektrikoaren hasierako anplitudea <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>d</mi></mrow></math> da. Dipolo elektriko oszilatzaile batentzat, Poynting bektorearen batez bestekoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da."
    },
    {
     "mota": "testua",
     "html": "<strong>Lurreko intentsitatea.</strong> Lurrak jasotzen duen intentsitatea fluxuaren osagai normala da. Geometrian <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>R</mi><mi>/</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>r</mi></mrow></math> direnez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">lur</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>R</mi><mn>2</mn></msup><mi>h</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Maximizatzeko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> maximizatzea nahikoa da; <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ebatziz, <math display=\"inline\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>5</mn><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, hots"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>h</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Lurrera iristen den potentzia osoa.</strong> Lur-eraztunetan integratuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">lur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">lur</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mn>2</mn><mi>π</mi><mi>R</mi><mi>d</mi><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><mi>h</mi></mrow><mrow><mn>16</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>R</mi><mn>3</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>d</mi><mi>R</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>R</mi><mn>3</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>R</mi><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">lur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>24</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau dipoloak erradiatzen duen batez besteko potentzia osoaren erdia da, <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">osoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; beste erdia goiko hemisferiora igortzen da."
    },
    {
     "mota": "testua",
     "html": "<strong>Moteltze erradiatiboa.</strong> Anplitude instantaneoa <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, oszilatzailearen energia mekanikoa <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> da, eta erradiatutako potentzia osoa <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">osoa</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Energiaren kontserbazioz, <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><msub><mi>P</mi><mtext mathvariant=\"normal\">osoa</mtext></msub></mrow></math>, hots"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mi>κ</mi><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>κ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>k</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>k</mi></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math> erabiliz). Anplitudeak <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> betetzen du, eta <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>e</mi></mrow></math> izateko"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mn>2</mn><mi>κ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>12</mn><mi>π</mi><mi>c</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 244-245. or.: 4. edizioko 11.22 problema (3. edizioan 11.21)."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Griffiths 11.31",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zehaztu partikula higidura hiperbolikoan erradiatzen ari den. Erabili erradiatutako potentziaren formula zehatza <math display=\"inline\"><mi>P</mi></math> kalkulatzeko. Ondoren, zehaztu partikula horrek erradiazio- erreakzioko indarrik jasaten duen, 11.30 problemako formula zehatza erabiliz."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Higidura hiperbolikoaren forma ohikoa hartzen dugu, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Faktore erlatibistak <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></math></span> betetzen du, hots <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt><mi>/</mi><mi>b</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Erradiatutako potentzia.</strong> Higidura zuzenerako <math display=\"inline\"><mi>v</mi></math> eta <math display=\"inline\"><mi>a</mi></math> kolineal direnez, Liénard-en formula zehatza"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bihurtzen da. <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mi>/</mi><msup><mi>b</mi><mn>6</mn></msup><mo>⋅</mo><msup><mi>b</mi><mn>4</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><msup><mi>c</mi><mn>4</mn></msup><mi>/</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></math></span> denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><mi>c</mi></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Potentzia konstantea da: partikula higidura hiperbolikoan benetan erradiatzen ari da."
    },
    {
     "mota": "testua",
     "html": "<strong>Erradiazio-erreakzioa.</strong> Higidura zuzenerako indar zehatzak, 11.30 problemak adierazitako moduan, <math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> konbinazioa darama. <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>t</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>b</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>b</mi><mn>4</mn></msup><msup><mi>c</mi><mn>4</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>t</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Emaitza.</strong> Higidura hiperbolikoak potentzia konstanteko erradiazioa sortzen du, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>c</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, baina partikularen gaineko erradiazio-erreakzio-indarra nulua da. Hau da ariketaren puntu kontzeptuala: erradiazio emititua eta tokiko erreakzio-indarra ez dira nahitaez paralelo agertzen higidura erlatibista guztietan."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths-en soluzio-eskuliburua (4. ed.), 260-261. or.: 4. edizioko 11.34 problema (3. edizioan 11.31). Erabilitako &quot;11.30 problemako formula zehatza&quot; (higidura zuzeneko erreakzio-indarra) 4. edizioko 11.33 da."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Ariketa proposatuak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengoak Griffiths-en 11. kapituluko problemak dira, ebazpenik gabe hemen proposatuak. Zenbakiak 3. edizioari dagozkio."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu dipolo magnetiko oszilatzaile baten eremu elektriko eta magnetikoak, hirugarren hurbilketa (urruneko-zonakoa) erabili <strong>gabe</strong>. Aurkitu Poynting bektorea, eta frogatu erradiazioaren intentsitatea hirugarren hurbilketarekin lortzen den bera dela zehazki. (Griffiths 11.5)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili Prob. 7.60-ko &quot;dualtasun&quot;-transformazioa, dipolo elektriko oszilatzaile baten eremuekin batera (11.18 eta 11.19 ekuazioak), karga magnetiko berdin eta aurkakoz osatutako dipolo magnetiko &quot;gilbertiar&quot; oszilatzaile batek sortuko lituzkeen eremuak zehazteko. Aldera itzazu 11.36 eta 11.37 ekuazioekin, eta iruzkindu emaitza. (Griffiths 11.7)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Suposatuz <math display=\"inline\"><mi>γ</mi></math> moteltze-faktorea erabat erradiazio-moteltzeari zor zaiola (11.84 ekuazioa), frogatu dispertsio optikorako moteltzea &quot;txikia&quot; dela (<math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>), erresonantziak maiztasun optikoen tartean edo inguruan daudela onartuta. (b) 9.24 problemako emaitzak erabiliz, estimatu dispertsio anomaloaren eskualdearen zabalera. (Griffiths 11.18)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Kapitulu honek erradiazioaren teoria garatzen du — dipolo-erradiazioa (elektrikoa eta magnetikoa), karga puntual azeleratuentzako Larmor-en formula eta erradiazio-erreakzioa — CeTZ marrazki originalak erabiliz, JAKINArako euskaratua. </em>"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 1,
   "izenburua": "Elektrodinamika eta erlatibitatea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azken kapitulu honek liburua ixten du, aurreko hamaiketan zehar begien bistan ezkutatuta egon den zerbait harrigarria agerian utziz: Maxwell-en ekuazioak, esperimentu estatikoetatik zatika-zatika garatuak, jadanik erabat bateragarriak dira erlatibitate bereziarekin — areago, magnetismoa bera, azken batean, higitzen ari den erreferentzia-sistema batetik ikusitako elektrostatika besterik ez da. Elektrodinamika erlatibista zen, erlatibitatea aurkitu baino lehen ere."
    },
    {
     "mota": "testua",
     "html": "Har dezagun, hasteko, aurreko kapituluetan landutako fenomeno bat, orain begi erlatibistez. Demagun iman erraldoi baten poloen artean trenbide bat pasatzen dela, eta zama-bagoi batean espira eroale bat muntatzen dugula. Espira eremu magnetikoan barrena higitzen denean, higidura-indar elektroeragile bat sortzen da; fluxu-arauaren arabera (<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℰ</mi><mo>=</mo><mi>−</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>), espirako kargen gaineko indar <strong>magnetikoari</strong> zor zaio hori, kargak trenarekin batera higitzen baitira. Baina trenean doan behatzaileak, espira geldi ikusten duenez, ezin dio indar magnetikorik egotzi: berarentzat imana da higitzen dena, eta aldatzen ari den eremu magnetiko batek eremu elektriko bat induzitzen du, Faradayen legez; indar <strong>elektriko</strong> horrek eragiten du emf-a. Bi behatzaileek emf berbera neurtzen dute — zenbaki bera —, baina prozesuaren <strong>interpretazioa</strong> guztiz desberdina da: batak elektrikoa deitzen dio, besteak magnetikoa. Einsteinek ezin zuen sinetsi kointzidentzia hutsa zenik; aztarna gisa hartu zuen, elektromagnetismoak, mekanikak bezala, erlatibitate-printzipioa betetzen zuelako seinale. Kapitulu honek aztarna hori jarraitzen du, muturreraino."
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Erlatibitatearen teoria berezia",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Einstein-en postulatuak"
    },
    {
     "mota": "testua",
     "html": "Mekanika klasikoak aspalditik betetzen du  <strong>erlatibitate-printzipioa</strong>: lege berberak balio du erreferentzia-sistema inertzial guztietan.  «Inertziala» hitzak sistema geldi bat edo abiadura konstantez higitzen den bat esan nahi du. Imajinatu billar-mahai bat tren-bagoi batean: trena bide zuzen leun batean abiadura konstantez badoa, jokoa geltokian bezalaxe garatuko da, eta ezingo zenuke esan, leihatilak itxita, trena higitzen ari den ala ez. Galileok argi utzi zuen printzipio hori mekanikarako. Galdera da: baliozkoa al da elektrodinamikarako ere?"
    },
    {
     "mota": "testua",
     "html": "Lehen begiratuan ezetz dirudi, karga higikor batek eremu magnetikoa sortzen baitu, eta geldiak ez. XIX. mendeko fisikariek uste zuten uhin elektromagnetikoak  <strong>eter</strong> deritzon euskarri ikusezin batean hedatzen zirela, eta <math display=\"inline\"><mi>c</mi></math> abiadura eterrarekiko neurtu behar zela. Hala bazen, Lurraren higidurak eterrarekiko («eter-haizeak») argiaren abiaduran norabidearen araberako aldaketa txiki bat eragingo zukeen. Michelson eta Morley-ren  esperimentu bikainak, doitasun izugarriko interferometro optiko batez, argiaren abiadura norabide guztietan <strong>berdin-berdina</strong> zela erakutsi zuen: ez dago eter-haizerik, ez dago eterrik."
    },
    {
     "mota": "testua",
     "html": "Michelson-Morley-ren emaitzak bultzatuta, eta elektrodinamikaren barne-aztarnek gidatuta (legeek erantzun zuzena ematen dute sistema «okerrean» aplikatuta ere), Einsteinek bere bi postulatu ospetsuak proposatu zituen: (1) <strong>erlatibitate-printzipioa</strong> — fisikaren legeek forma bera hartzen dute erreferentzia-sistema inertzial guztietan; eta (2) <strong>argiaren abiaduraren unibertsaltasuna</strong> — argiak hutsean duen abiadura bera da behatzaile inertzial guztientzat, iturriaren higidura edozein dela ere."
    },
    {
     "mota": "testua",
     "html": "Erlatibitate berezia bi postulaturen gainean eraikitzen da: fisikaren legeek forma bera hartzen dute erreferentzia-sistema inertzial guztietan, eta argiak hutsean duen abiadura, <math display=\"inline\"><mi>c</mi></math>, bera da erreferentzia-sistema inertzial guztietan, iturriaren higidura edozein dela ere. Bigarren postulatua dramatikoa da, hain zuzen, Maxwell-en ekuazioek (9. kapitulua) abiadura <strong>bakar</strong> bat aurresaten dutelako uhin elektromagnetikoentzat, inolako sistema pribilegiaturi erreferentziarik egin gabe — postulatuak eskatzen duen huraxe bera, eta mekanika klasikoak (galilearrak) azaldu ezin zuen huraxe bera."
    },
    {
     "mota": "testua",
     "html": "Bigarren postulatuaren ondorio zuzena da abiadurak batzeko modua bera aldatu behar dela. Demagun <math display=\"inline\"><mi>A</mi></math> objektu bat <math display=\"inline\"><mi>B</mi></math> sisteman <math display=\"inline\"><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub></math> abiaduraz higitzen dela, eta <math display=\"inline\"><mi>B</mi></math> bera <math display=\"inline\"><mi>C</mi></math> sisteman <math display=\"inline\"><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></math> abiaduraz. Sen onak — eta Galileok — hau esango luke: <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></mrow></math>. Baina <math display=\"inline\"><mi>A</mi></math> argi-izpi bat balitz, bigarren postulatuak <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math> eskatzen du, <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math> izan arren; Galileoren araua, beraz, bateraezina da postulatuarekin. Haren ordez, Einsteinen abiadura-batuketaren legea dator:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Abiadura «arruntetan» (<math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>,</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub><mo>≪</mo><mi>c</mi></mrow></math>) izendatzailea ia <math display=\"inline\"><mn>1</mn></math> da, eta Galileoren formula berreskuratzen da; baina <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math> eginez gero, <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math> ateratzen da automatikoki, edozein <math display=\"inline\"><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></math>-rekin. Erlatibitateak, azken batean, ez du zerikusirik argiarekin berarekin: <math display=\"inline\"><mi>c</mi></math> abiadura funtsezko bat da, eta argia kasualitatez higitzen da abiadura horretan; espazioaren eta denboraren egitura bera deskribatzen du erlatibitateak, gertakari fisiko oro jazotzen den «eszenatokiarena»."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erlatibitatearen geometria"
    },
    {
     "mota": "testua",
     "html": "Hiru ondorio hutsik geometriko datoz postulatuetatik, guztiak doitasun apartaz baieztatuak:"
    },
    {
     "mota": "testua",
     "html": "Hirurak <strong>pentsamendu-esperimentu</strong> soilen bidez ondoriozta daitezke: denbora-dilatazioa, luzera-uzkurdura eta aldiberekotasunaren erlatibotasuna. Har dezagun lehena. Imajinatu argi-erloju bat: bagoi baten sabaian iturri bat eta zoruan ispilu bat, argi-izpi batek gora-behera egiten duelarik, «tik» bakoitza joan-etorri bat izanik."
    },
    {
     "mota": "irudia",
     "oina": "Argi-erloju bat: <math display=\"inline\"><mi>v</mi></math> abiaduraz alboka higitzen den sisteman, argiak bide diagonal luzeagoa egiten du &quot;tik&quot; bakoitzeko, bere pausagune-sisteman baino — denbora-dilatazioaren jatorri geometrikoa.",
     "src": "media/irudiak/fb5feb96bbc71585.svg",
     "zabalera": 153
    },
    {
     "mota": "testua",
     "html": "Trenean doan behatzailearentzat, bagoiaren altuera <math display=\"inline\"><mi>h</mi></math> bada, argiak <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>h</mi><mi>/</mi><mi>c</mi></mrow></math> behar du zorura iristeko (barra batez trenean egindako neurketak adieraziko ditut; formula-kutxan, aldiz, prima batez adierazten dira erlojuaren pausaguneko neurketa berak). Lurretik, ordea, izpi berak bide luzeagoa egiten du, trena bera aurrera higitzen ari baita: goiko irudian ikusten den bezala, distantzia hori <math display=\"inline\"><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></math> da, eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mi>/</mi><mi>c</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>-rako ebatziz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, eta bi neurketak alderatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gertaera <strong>beren</strong> artean igarotako denbora, beraz, desberdina da bi behatzaileentzat: treneko erlojuak neurtutako tartea, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> faktorez laburragoa da. Ondorioa esaldi bakar batean laburbil daiteke: <strong>higitzen ari diren erlojuak mantsoago dabiltza.</strong> Hau ez da erloju-mekanismoen kontua, denboraren izaerari buruzko baieztapen bat baizik, edozein neurgailu zuzeni dagokiona."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Denbora-dilatazioa, luzera-uzkurdura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>=</mo><mi>l</mi><mfrac><mi>′</mi><mi>γ</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non kantitate primadunak erlojua (edo objektua) pausagunean dagoen sisteman neurtzen diren."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Einsteinen aurresan guztien artean, bat ere ez da denbora-dilatazioa bezain ikusgarri baieztatu. Partikula elementalik gehienak ezegonkorrak dira: bizitza-denbora jakin baten ondoren desintegratzen dira. Baina abiadura handian higitzean askoz gehiago irauten dute, haien barne-erlojuak mantso baitabiltza."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.1 adibidea — Muoi baten bizitza-luzatzea"
    },
    {
     "mota": "testua",
     "html": "Muoi bat laborategian barrena higitzen da argiaren abiaduraren hiru bosten (<math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>c</mi></mrow></math>) abiaduraz. Zenbat irauten du? Kasu honetan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "beraz <math display=\"inline\"><mrow><mn>5</mn><mi>/</mi><mn>4</mn></mrow></math> faktorez gehiago irauten du geldi baino. Geldi dagoen muoi baten bizitza <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Efektu hau egiazkoa da eta egunero neurtzen da azeleragailuetan eta izpi kosmikoen muoietan: bestela, goi-atmosferan sortutako muoiak desintegratuko lirateke lur-mailara iritsi baino askoz lehenago, baina denbora-dilatazioari esker heltzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.2 adibidea — Bikien paradoxa"
    },
    {
     "mota": "testua",
     "html": "Bere 21. urtebetetzean, astronauta batek suziri batean alde egiten du <math display=\"inline\"><mrow><mfrac><mn>12</mn><mn>13</mn></mfrac><mi>c</mi></mrow></math> abiaduraz. Bere erlojuan 5 urte igaro ondoren, buelta egin eta abiadura berean itzultzen da etxean geratu den biki-anaiarengana. Zenbat urte ditu bakoitzak berrelkartzean? Bidaiari doan bikiak 10 urte zahartu da (5 joan, 5 etorri); 31. urtebetetzea ospatzera iristen da, beraz. Baina, Lurretik ikusita, erloju higikorra mantso ibili da faktore honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>/</mi><mn>13</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>13</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lurreko erlojuetan igarotako denbora <math display=\"inline\"><mrow><mn>13</mn><mi>/</mi><mn>5</mn><mo>×</mo><mn>10</mn><mo>=</mo><mn>26</mn></mrow></math> urte da; anaiak bere 47. urtebetetzea ospatuko du — 16 urte zaharragoa da orain bere biki-arreba baino! Ez da, ordea, gaztetasun-iturria: arrebak ez du gehiago bizi izan, mantsoago baizik — haren prozesu biologiko guztiak (metabolismoa, pultsua, pentsamendua) denbora-dilatazio berari lotuak egon dira. «Paradoxa» sortzen da istorioa bidaiariaren ikuspegitik kontatu nahi denean; baina bi bikiak <strong>ez dira baliokideak</strong>: bidaiariak azelerazioa jasaten du buelta egitean, anaiak ez, eta beraz bidaiaria ezin da behatzaile geldi izatearekin aldarrikatu."
    },
    {
     "mota": "testua",
     "html": "Hirugarren ondorioa — luzera-uzkurdura — argi-erlojua etzanda jarriz ondoriozta daiteke: bagoi baten muturretako iturri eta ispilu batekin, joan-etorriaren denbora bi sistemetan alderatuz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> lortzen da, non <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> objektuaren pausagune-luzera baita (bere sisteman neurtua) eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> higitzen ikusten den luzera. Alegia: <strong>higitzen diren objektuak laburtu egiten dira</strong>, <math display=\"inline\"><mi>γ</mi></math> faktore beraz, baina soilik higidura-norabidean; norabide perpendikularrak ez dira uzkurtzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.3 adibidea — Ukuiluaren eta eskaileraren paradoxa"
    },
    {
     "mota": "testua",
     "html": "Nekazari batek eskailera bat du, luzeegia bere ukuiluan gordetzeko. Erlatibitatea irakurri ondoren, konponbide bat bururatzen zaio: alabari eskailera lasterka eramateko eskatzen dio; higitzen den eskailera, Lorentz-uzkurtua, ukuiluan sartuko litzateke, eta nekazariak atea itxiko luke atzetik. Alabak, ordea, honakoa ohartarazten dio: <strong>bere</strong> erreferentzia-sisteman ukuilua da uzkurtzen dena, ez eskailera, eta beraz oraindik okerrago egokituko litzateke. Nork du arrazoi? Biek! «Eskailera ukuiluan dago» esatean, zati guztiak barruan daudela esan nahi da <strong>une berean</strong>, baina hori aldiberekotasunaren erlatibotasunaren mende dagoen baldintza bat da. Bi gertaera daude: (a) eskaileraren atzealdea atetik sartzen da, eta (b) eskaileraren aurrealdea ukuiluaren horma urrunera iristen da. Nekazariak dio <math display=\"inline\"><mi>a</mi></math> gertatzen dela <math display=\"inline\"><mi>b</mi></math> baino lehen (badago, beraz, une bat eskailera osoa barruan dagoena); alabak dio <math display=\"inline\"><mi>b</mi></math> gertatzen dela <math display=\"inline\"><mi>a</mi></math> baino lehen (ez dago halako unerik). Ez da kontraesana — ikuspegi-desberdintasuna baizik. Eskailera gelditzen bada, «zurruntasuna» bera galtzen da erlatibitatean, eta emaitza zehatza indeterminatua bihurtzen da: hormak zerbait eman behar du, edo eskailera hautsi."
    },
    {
     "mota": "testua",
     "html": "Aldiberekotasuna ere erlatiboa da: sistema batean aldibereko diren bi gertaera, oro har, <strong>ez</strong> dira aldiberekoak lehenarekiko higitzen den sistema batean — Newtonen mekanikan inolako analogorik ez duen egitatea, eta hiru ondorio geometrikoetan sakonena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lorentz-en transformazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> eta <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> bi sistemetako koordenatuak, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> partekatutako <math display=\"inline\"><mi>x</mi></math> ardatzean zehar <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen dela, honela erlazionatzen dira:"
    },
    {
     "mota": "testua",
     "html": "Nondik datoz? Prozesu fisiko oro <strong>gertaeraz</strong> osatuta dago: gertaera bat leku jakin batean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta une jakin batean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jazotzen den zerbait da. Fisikari klasikoak, jatorriak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-an bat datozela hartuta, Galileoren «hiztegia» idatziko zuen: <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></math>. Azken hirurak higidura-norabidearekiko perpendikularrak diren neurriak dira, edo denbora unibertsal suposatua; laugarrenak, hain zuzen, hor huts egiten du, denbora ez baita berdina behatzaile guztientzat. Eta lehenengoak ere zuzenketa bat behar du, higitzen den makila <math display=\"inline\"><mi>S</mi></math>-tik uzkurtua ikusten baita (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mi>/</mi><mi>γ</mi></mrow></math> delako, non <math display=\"inline\"><mi>d</mi></math> jatorrizko distantzia den). Ordezkatuz, erlatibitatearen hiztegia osatzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Lorentz-en transformazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>v</mi><mfrac><mi>x</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Alderantzizko hiztegia <math display=\"inline\"><mi>v</mi></math>-ren zeinua aldatuz lortzen da, egoeraren simetriak agintzen duen bezala: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Laugarren ekuazioaren <math display=\"inline\"><mrow><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></math> gaia da higitzen diren erlojuen sinkronizazio-eza: koordenatu-jatorritik urrunago dauden erlojuek, gero eta desfase handiagoa erakusten dute."
    },
    {
     "mota": "testua",
     "html": "Hauek Galileoren transformazio ezagunera (<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></math>) laburbiltzen dira <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> limitean — Newtonen intuizio arrunta geometria orokorrago baten abiadura txikiko hurbilketa besterik ez da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.4 adibidea — Aldiberekotasuna, sinkronizazioa eta denbora-dilatazioa"
    },
    {
     "mota": "testua",
     "html": "Demagun <math display=\"inline\"><mi>A</mi></math> gertaera <math display=\"inline\"><mrow><msub><mi>x</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math> puntuan gertatzen dela, eta <math display=\"inline\"><mi>B</mi></math> gertaera <math display=\"inline\"><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>=</mo><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math> puntuan. Aldiberekoak dira <math display=\"inline\"><mi>S</mi></math>-n (biak <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-an). Baina <strong>ez</strong> dira aldiberekoak <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n: Lorentz-en transformazioek <math display=\"inline\"><mrow><msubsup><mi>x</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>t</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>x</mi><mi>B</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>t</mi><mi>B</mi><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>b</mi></mrow></math> ematen dute. <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ko erlojuen arabera, beraz, <math display=\"inline\"><mi>B</mi></math> lehenago gertatu da — aldiberekotasunaren erlatibotasuna, Lorentz-en transformazioetatik zuzenean irtena. Gainera, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ko erloju guztiei begiratuz gero, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></math> irakurtzen dute: jatorriaren ezkerrean daudenak <strong>aurreratuta</strong>, eskuinekoak <strong>atzeratuta</strong> — higitzen diren erlojuen sinkronizazio-eza, berriro ere."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.5 adibidea — Luzera-uzkurdura Lorentz-en transformaziotik"
    },
    {
     "mota": "testua",
     "html": "Demagun makila bat <math display=\"inline\"><mi>v</mi></math> abiaduraz eskuinera higitzen dela; bere pausagune-luzera (<math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n neurtua) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><msubsup><mi>x</mi><mrow><mtext mathvariant=\"normal\">esk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>x</mi><mtext mathvariant=\"normal\">ezk</mtext><mo>′</mo></msubsup></mrow></math> da. <math display=\"inline\"><mi>S</mi></math>-ko behatzaileak bi muturren posizioak <strong>bere denboraren une berean</strong> neurtu behar ditu: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">esk </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">ezk</mtext></msub></mrow></math>. Lorentz-en lehen ekuaziotik, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>, hots"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Luzera-uzkurduraren formula klasikoa da. Hemen <math display=\"inline\"><mi>t</mi></math> finko mantentzen da (neurketa <math display=\"inline\"><mi>S</mi></math>-n egiten baita, bi muturrak aldi berean markatuz); denbora-dilatazioan, aldiz, <math display=\"inline\"><msup><mi>x</mi><mo>′</mo></msup></math> finkatzen zen (erloju higikor <strong>bakar</strong> bati begiratzen baitzitzaion)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.6 adibidea — Abiaduren batuketaren legea"
    },
    {
     "mota": "testua",
     "html": "Lorentz-en transformazioa diferentziatuz, abiaduren batuketa-arau erlatibista lortzen da — Galileoren <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi></mrow></math> inozoaren ordezko zuzena:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Abiaduren batuketa erlatibista",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mo>′</mo></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> objektu baten abiadura den <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sisteman, eta <math display=\"inline\"><mi>u</mi></math> haren abiadura <math display=\"inline\"><mi>S</mi></math>-n (biak ardatz partekatuan zehar)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Galileoren formulak ez bezala, honek ez du inoiz <math display=\"inline\"><mi>c</mi></math> gainditzen duen emaitzarik ematen: <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi></mrow></math> jarrita (argia, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n), <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>+</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>v</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math> lortzen da zehazki, <math display=\"inline\"><mi>v</mi></math> edozein dela ere — abiaduren batuketa-legea bigarren postulatua automatikoki errespetatzeko eraikita dago."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: abiaduren batuketa erlatibista"
    },
    {
     "mota": "testua",
     "html": "Espazio-ontzi bat <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0.8</mn><mi>c</mi></mrow></math> abiaduraz higitzen da Lurrarekiko. Zunda bat jaurtitzen du aurrerantz, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>0.6</mn><mi>c</mi></mrow></math> abiaduraz bere buruarekiko. Zer abiadura neurtzen dio zundari Lurreko behatzaile batek?"
    },
    {
     "mota": "testua",
     "html": "Batuketa inozoak (galilearrak)  <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0.8</mn><mi>c</mi><mo>+</mo><mn>0.6</mn><mi>c</mi><mo>=</mo><mn>1.4</mn><mi>c</mi></mrow></math> emango luke — abisu-seinalea dagoeneko, ezerk ezin baitu <math display=\"inline\"><mi>c</mi></math> gainditu. Formula erlatibistak, aldiz, hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mn>0.6</mn><mi>c</mi><mo>+</mo><mn>0.8</mn><mi>c</mi></mrow><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.4</mn><mi>c</mi></mrow><mn>1.48</mn></mfrac><mo>≈</mo><mn>0.946</mn><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— <math display=\"inline\"><mi>c</mi></math>-tik behera lasai, behar den bezala. Ohartu <math display=\"inline\"><mi>c</mi></math>-ren bi frakzio handi konbinatuta ere (0.6 eta 0.8), emaitza <math display=\"inline\"><mi>c</mi></math>-tik ondo beherakoa dela; <math display=\"inline\"><mi>c</mi></math> bera edozein <math display=\"inline\"><mi>v</mi></math>-rekin konbinatuta soilik iristen da zehazki <math display=\"inline\"><mi>c</mi></math>-ra, argiaren abiadura inbariantea izatearekin bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espazio-denboraren egitura"
    },
    {
     "mota": "testua",
     "html": "Espazioa eta denbora  lau-bektore bakar batean bilduta, <math display=\"inline\"><mrow><msup><mi>x</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, Lorentz-en transformazioak <strong>tarte inbariantea</strong> gordetzen duen aplikazio lineal gisa jarduten du: "
    },
    {
     "mota": "testua",
     "html": "Notazioa trinkotzeko, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mi>c</mi><mi>t</mi></mrow></math> (denbora metrotan neurtua), <math display=\"inline\"><mrow><msup><mi>x</mi><mn>1</mn></msup><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>z</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math> definitzen dira. Orduan Lorentz-en transformazioa aplikazio lineal soil bat da, <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>μ</mi></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow><mn>3</mn></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>ν</mi><mi>μ</mi></msubsup><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mi>ν</mi></msup></mrow></math>, non <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> transformazio-matrizea baita (<math display=\"inline\"><mi>x</mi></math>-n zeharreko bultzadarako, <math display=\"inline\"><mi>γ</mi></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>γ</mi><mi>β</mi></mrow></math> gaiekin). <strong>Lau-bektore</strong> deitzen zaio <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>0</mn></msup><mo>,</mo><msup><mi>x</mi><mn>1</mn></msup><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bezala transformatzen den lau osagaiko edozein multzori. Errotazioetan biraketa-matrize batek 3-bektoreen osagaiak nahasten dituen bezala, hemen Lorentz-en transformazioak lau-bektoreenak nahasten ditu."
    },
    {
     "mota": "testua",
     "html": "Biderkadura eskalarrak, ordea, ezberdintasun bat du: zeroko osagaiak zeinu negatiboa darama, <math display=\"inline\"><mrow><mi>−</mi><msup><mi>a</mi><mn>0</mn></msup><msup><mi>b</mi><mn>0</mn></msup><mo>+</mo><msup><mi>a</mi><mn>1</mn></msup><msup><mi>b</mi><mn>1</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>3</mn></msup><msup><mi>b</mi><mn>3</mn></msup></mrow></math>, eta konbinazio hori <strong>inbariantea</strong> da Lorentz-en transformazioen pean, biderkadura eskalar arrunta errotazioen pean bezalaxe. Bi gertaeraren arteko desplazamendu-lau-bektorearen <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mi>μ</mi></msup></mrow></math> biderkadura eskalarrari <strong>tarte</strong> deritzo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Espazio-denborako tartea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Behatzaile inertzial guztiek <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>-ren balio bera kalkulatzen dute bi gertaeraren artean, nahiz eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>-z eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>-z banaka ados ez egon — espazio-denbora da, eta ez espazioa eta denbora banaka, behatzailearekiko independentea den egitura geometrikoa duen objektua."
    },
    {
     "mota": "testua",
     "html": "Bi gertaeraren araberako, tarteak zeinua alda dezake, eta hiru mota bereizten dira: "
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Tartea <strong>denboraren araberakoa</strong> bada (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>), badago sistema inertzial bat non bi gertaerak leku berean gertatzen diren; hori da gertaera bat batetik bestera <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>d</mi><mi>/</mi><mi>t</mi><mo>&lt;</mo><mi>c</mi></mrow></math> abiaduraz higituz iristen denean lortzen den zeinua.",
      "<strong>Espazioaren araberakoa</strong> bada (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>), badago sistema bat non aldiberekoak diren, baina ezein sistematan ere ez daude leku berean.",
      "<strong>Argiaren araberakoa</strong> bada (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>), argiaren abiaduran doan seinale batek lotzen ditu bi gertaerak."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Argi-konoa. <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko lerroek (argi-izpien ibilbideek) etorkizuna eta iragana bereizten dituzte; kausalki lotutako gertaerak barrualdean daude, denboraren araberako tartez lotuak.",
     "src": "media/irudiak/64ed0a7674a505fc.svg",
     "zabalera": 245
    },
    {
     "mota": "testua",
     "html": "Alde honek ondorio sakon bat du: denboraren araberako tarteak dituzten bi gertaeren <strong>ordena</strong> absolutua da (behatzaile guztiek ados daude zein gertatu den lehenago), eta hori funtsezkoa da  <strong>kausalitaterako</strong> — «<math display=\"inline\"><mi>A</mi></math>-k <math display=\"inline\"><mi>B</mi></math> eragin du» esan ahal izateko. Kausalki lotutako bi gertaerak beti dira denboraren araberakoak. Espazio-denborako diagrametan ( Minkowski-ren diagramak), ohitura ez bezala, <math display=\"inline\"><mi>x</mi></math> bertikalean eta <math display=\"inline\"><mrow><mi>c</mi><mi>t</mi></mrow></math> horizontalean marrazten dira; abiadura maldaren <strong>alderantzizkoa</strong> da, geldi dagoen partikula lerro bertikal bat da, eta argi-izpi bat <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-koa. Partikula baten ibilbidea bere <strong>mundu-lerroa</strong> da, eta ezin du inoiz <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> baino malda txikiagorik izan."
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Mekanika erlatibista",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Denbora propioa eta abiadura propioa"
    },
    {
     "mota": "testua",
     "html": "Zure mundu-lerroan aurrera egin ahala, zure erlojua mantso dabil: hormako erlojuak <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> tarte bat markatzen duen bitartean, zureak <math display=\"inline\"><mrow><mi>d</mi><mi>τ</mi></mrow></math> soilik aurreratzen du: "
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi>τ</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>τ</mi></math> denborari <strong>denbora propioa</strong> deritzo, eta objektuaren pausagune-sisteman neurtutako denbora da (hemen <math display=\"inline\"><mi>u</mi></math> objektuaren abiadura bera da, ez bi sistemen artekoa). Denbora propioaren abantaila handi bat du: <strong>inbariantea</strong> da. Horrek gauza natural bat definitzen uzten du —  <strong>abiadura propioa</strong>, distantzia (lurrean neurtua) denbora propioarekiko zatituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abiadura arruntak, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>, kontrara, guztiz deserosoki transformatzen dira (zenbakitzailea <strong>eta</strong> izendatzailea aldatu behar baitira). Abiadura propioa, ordea, lau-bektore baten zati espaziala da, <math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>d</mi><msup><mi>x</mi><mi>μ</mi></msup><mi>/</mi><mi>d</mi><mi>τ</mi></mrow></math>, zeinaren zeroko osagaia <math display=\"inline\"><mrow><msup><mi>η</mi><mn>0</mn></msup><mo>=</mo><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> baita; horregatik transformatzen da hain garbi. <math display=\"inline\"><msup><mi>η</mi><mi>μ</mi></msup></math>-ri <strong>abiadura propioaren lau-bektorea</strong> edo <strong>lau-abiadura</strong> deritzo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentua eta energia"
    },
    {
     "mota": "testua",
     "html": "Ohiko momentua eta energia ez dira sistemaz sistema banaka kontserbatzen Lorentz-en transformazioarekin bateragarria den moduan; orokortze erlatibista zuzenak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "Mekanika klasikoan momentua masa bider abiadura da. Definizio hori domeinu erlatibistara eramatean, funtsezkoa da <strong>abiadura propioa</strong> erabiltzea, ez arrunta: bestela, momentuaren kontserbazio-legea bateraezina litzateke erlatibitate-printzipioarekin. Beraz <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝜼</mi></mrow></math>, eta hau da momentu erlatibista. Momentua lau-bektore baten zati espaziala da, <math display=\"inline\"><mrow><msup><mi>p</mi><mi>μ</mi></msup><mo>≡</mo><mi>m</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow></math>, zeinaren denbora-osagaia <math display=\"inline\"><mrow><msup><mi>p</mi><mn>0</mn></msup><mo>=</mo><mi>m</mi><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> baita. Osagai hori (1/c faktoreaz gain) energia erlatibista da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Momentu eta energia erlatibistak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> identitateak biak lotzen dituela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Abiadura txikian (<math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>), <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> — Einsteinen pausagune-energia ospetsua gehi Newtonen energia zinetiko arrunta, lehen zuzenketa gisa berreskuratua."
    },
    {
     "mota": "testua",
     "html": "Energia erlatibista ez da zero objektua geldi dagoenean ere; hori da  <strong>pausagune-energia</strong>, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">pausa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Gainerakoa, higidurari egotz dakiokeena,  <strong>energia zinetikoa</strong> da, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">zin </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, zeinak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>8</mn><mi>m</mi><msup><mi>u</mi><mn>4</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mi>…</mi></mrow></math> garapena duen abiadura txikian (lehen gaia formula klasikoa da). <math display=\"inline\"><msup><mi>p</mi><mi>μ</mi></msup></math>-ren biderkadura eskalarra bere buruarekin masa-inbariantea da, eta hortik dator formula-kutxako identitatea, <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup></mrow></math>, oso erabilgarria: <math display=\"inline\"><mi>E</mi></math> kalkulatzen uzten du <math display=\"inline\"><mi>p</mi></math>-tik (edo alderantziz) abiadura jakin gabe. Masarik gabeko partikula batentzat (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>p</mi><mi>c</mi></mrow></math> soilik geratzen da — fotoiaren kasua, hain zuzen."
    },
    {
     "mota": "testua",
     "html": "Notazioa gorabehera, fisika benetakoa esperimentuan datza: sistema itxi batean, energia erlatibista osoa eta momentu osoa <strong>kontserbatu</strong> egiten dira. Kontuz, ordea, bereizketa batekin: magnitude <strong>inbariantea</strong> (balio bera sistema guztietan) eta magnitude <strong>kontserbatua</strong> (balio bera prozesu baten aurretik eta ondoren) ez dira gauza bera. Masa inbariantea da, baina ez kontserbatua; energia kontserbatua da, baina ez inbariantea; karga elektrikoa, ikusiko dugunez, biak da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: masa-energiaren baliokidetasuna"
    },
    {
     "mota": "testua",
     "html": "Erreakzio nuklear batek <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mo>=</mo><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> kg masa (fisiorako magnitude-ordena tipikoa) bihurtzen du oso-osorik energia. Zenbat energia askatzen da?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mspace width=\"0.167em\"></mspace><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>≈</mo><mn>3.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "SI unitateetan txiki-txikia dirudi, baina erreakzio bakar baten eskalan izugarria da: elektronvoltetara pasatuta, <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mn>2.1</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><mn>210</mn></mrow></math> MeV — ohiko errekuntza-erreakzio batean lotura kimiko bakar bat apurtzean askatzen den energia halako hamar milioi inguru. Hamar milioiko faktore-tarte hori, oso-osorik <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>-ko <math display=\"inline\"><msup><mi>c</mi><mn>2</mn></msup></math>-ri egotz dakiokeena, da erreakzio nuklearrek, masa-unitateko, erreakzio kimikoek baino askoz energia gehiago askatzearen funtsezko arrazoia."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zinematika erlatibista"
    },
    {
     "mota": "testua",
     "html": "Kontserbazio-legeak partikula-desintegrazio eta -talketara aplikatuz, emaitza harrigarriak lortzen dira. Talka klasiko batean momentua eta masa beti kontserbatzen dira; erlatibistan, momentua eta energia osoa beti kontserbatzen dira, baina masa eta energia zinetikoa, oro har, ez."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.7 adibidea — Buztin-koskorren talka plastikoa"
    },
    {
     "mota": "testua",
     "html": "Bi buztin-koskor, bakoitza <math display=\"inline\"><mi>m</mi></math> pausagune-masakoa, aurrez aurre talka egiten dute <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>c</mi></mrow></math> abiaduraz, eta itsatsi egiten dira. Zein da <math display=\"inline\"><mi>M</mi></math> koskor konposatuaren masa?"
    },
    {
     "mota": "irudia",
     "oina": "Talka plastikoa: bi koskor itsatsi eta geldi geratzen dira; energia zinetikoa pausagune-energia bihurtzen da, eta masa handitu egiten da.",
     "src": "media/irudiak/e8dd333e4a6a5d94.svg",
     "zabalera": 287
    },
    {
     "mota": "testua",
     "html": "Momentuaren kontserbazioa tribiala da: zero aurretik, zero ondoren. Koskor bakoitzaren energia, talka aurretik, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mrow><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>5</mn><mi>/</mi><mn>4</mn><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> da, eta koskor konposatuarena <math display=\"inline\"><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> (geldi baitago). Energiaren kontserbazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du — hasierako masen batura (<math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>) baino handiagoa! Masa ez da kontserbatu talka honetan: energia zinetikoa pausagune-energia bihurtu da, eta beraz masa hazi egin da. Analisi klasikoan energia zinetikoa energia termiko bihurtu dela esango genuke (koskor konposatua beroago dago); erlatibitateak dio energia mikroskopiko hori objektuaren masan islatzen dela."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.8 adibidea — Pioi baten desintegrazioa"
    },
    {
     "mota": "testua",
     "html": "Pioi bat, geldi, muoi batean eta neutrino batean desintegratzen da. Aurki dezagun irteerako muoiaren energia, bi masen (<math display=\"inline\"><msub><mi>m</mi><mi>π</mi></msub></math>, <math display=\"inline\"><msub><mi>m</mi><mi>μ</mi></msub></math>) funtzioan (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>ν</mi></msub><mo>=</mo><mn>0</mn></mrow></math> hartuta)."
    },
    {
     "mota": "irudia",
     "oina": "Geldi dagoen pioi baten desintegrazioa: muoia eta neutrinoa aurkako norabideetan irteten dira, momentu berdin eta aurkakoekin.",
     "src": "media/irudiak/b456056736b23d94.svg",
     "zabalera": 270
    },
    {
     "mota": "testua",
     "html": "Kasu honetan <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">aur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mtext mathvariant=\"normal\">aur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">ond </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>ν</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mtext mathvariant=\"normal\">ond </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub></mrow></math>. Momentuaren kontserbazioak <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub></mrow></math> eskatzen du. Energiaren kontserbazioak <math display=\"inline\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>ν</mi></msub><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Orain <math display=\"inline\"><mrow><msub><mi>E</mi><mi>ν</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi></mrow></math> (neutrinoa masarik gabekoa da), eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi><mo>=</mo><msqrt><mrow><msubsup><mi>E</mi><mi>μ</mi><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup></mrow></msqrt></mrow></math>; beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msqrt><mrow><msubsup><mi>E</mi><mi>μ</mi><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup></mrow></msqrt><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta hortik"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>m</mi><mi>π</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>π</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.9 adibidea — Compton-en sakabanaketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> energiako fotoi bat geldi dagoen elektroi batean «errebotatzen» da. Aurki dezagun irteerako fotoiaren <math display=\"inline\"><mi>E</mi></math> energia, <math display=\"inline\"><mi>θ</mi></math> sakabanatze-angeluaren funtzioan. "
    },
    {
     "mota": "irudia",
     "oina": "Compton-en sakabanaketa: fotoia <math display=\"inline\"><mi>θ</mi></math> angeluan sakabanatzen da; elektroiak erretrozesua jasotzen du. Energia eta momentua kontserbatuz <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da.",
     "src": "media/irudiak/d79e530962d38c26.svg",
     "zabalera": 272
    },
    {
     "mota": "testua",
     "html": "Momentuaren kontserbazioa norabide «bertikalean»: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>p</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><msub><mi>p</mi><mi>p</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>, hots <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mi>/</mi><msub><mi>p</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span> (<math display=\"inline\"><mrow><msub><mi>p</mi><mi>p</mi></msub><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi></mrow></math> baita fotoiarentzat). «Horizontalean»: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>p</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math></span>; berridatziz, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mi>p</mi><mi>e</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>E</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>E</mi><mn>2</mn></msup></mrow></math></span>. Energiaren kontserbazioak <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>+</mo><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msubsup><mi>p</mi><mi>e</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>; ordezkatuz eta <math display=\"inline\"><mi>E</mi></math>-rako ebatziz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>1</mn><mi>/</mi><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uhin-luzeran adierazita politago geratzen da: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>m</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, non <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>m</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> elektroiaren <strong>Compton uhin-luzera</strong> baita."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dinamika erlatibista"
    },
    {
     "mota": "testua",
     "html": "Newtonen lehen legea erlatibitate-printzipioan bertan dago sartuta; bigarrena, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> forman, baliozkoa da domeinu erlatibistan ere, <strong>momentu erlatibista erabiliz gero</strong>. Lana, beti bezala, indarraren lerro-integrala da, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo>∫</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow></math>, eta lan-energiaren teorema betetzen da erlatibistan: <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">amai </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mtext mathvariant=\"normal\">has</mtext></msub></mrow></math>, hots partikula baten gaineko lan garbia bere energiaren gehikuntzaren berdina da. Newtonen hirugarren legea, ordea, ez da, oro har, orokortzen: bi objektu espazioan bereiziak badira, aldiberekotasunaren erlatibotasunak akzio-erreakzio parea <strong>une desberdinetan</strong> jazotzea dakar, eta hirugarren legea hausten da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.10 adibidea — Higidura indar konstante baten pean"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula bat <math display=\"inline\"><mi>F</mi></math> indar konstante baten pean dago. <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-an jatorritik geldi abiatzen bada, aurki dezagun bere posizioa (<math display=\"inline\"><mi>x</mi></math>) denboraren funtzioan.  <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>F</mi></mrow></math> denez, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>F</mi><mi>t</mi></mrow></math> (konstantea zero da, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math> baita <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-an). Orain <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>u</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>F</mi><mi>t</mi></mrow></math>, eta <math display=\"inline\"><mi>u</mi></math>-rako ebatziz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>t</mi><mi>/</mi><mi>m</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbakitzailea erantzun klasikoa da; izendatzaileak, berriz, <math display=\"inline\"><mi>u</mi></math>-k inoiz <math display=\"inline\"><mi>c</mi></math> gaindi ez dezan bermatzen du: <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mi>c</mi></mrow></math>. Berriz integratuz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>F</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>t</mi><mi>/</mi><mi>m</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parabola klasikoaren (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>/</mi><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math>) ordez, grafikoa <strong>hiperbola</strong> bat da; horregatik esaten zaio indar konstantepeko higidurari «higidura hiperbolikoa». Karga bat eremu elektriko uniforme batean jartzean gertatzen da, adibidez."
    },
    {
     "mota": "irudia",
     "oina": "Higidura hiperbolikoa: parabola klasikoak <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>-ko lerroa (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>c</mi></mrow></math>) gainditzen du; hiperbola erlatibistak asintota gisa hurbiltzen zaio, inoiz gainditu gabe.",
     "src": "media/irudiak/1efe01e687dac529.svg",
     "zabalera": 171
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.11 adibidea — Higidura ziklotronikoa"
    },
    {
     "mota": "testua",
     "html": "Eremu magnetiko uniforme batean karga baten ibilbide tipikoa higidura ziklotronikoa da.  Indar magnetikoak, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Q</mi><mi>u</mi><mi>B</mi></mrow></math>, zentrorantz, higidura zirkularra eusteko behar den azelerazio zentripetua ematen du. Kontuz, ordea: erlatibitatean indar zentripetua <strong>ez</strong> da <math display=\"inline\"><mrow><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>R</mi></mrow></math>, mekanika klasikoan bezala. <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mi>p</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>θ</mi></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mi>u</mi><mi>R</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Higidura ziklotronikoa: indar magnetikoak (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math>) azelerazio zentripetua ematen du. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> paperetik kanpora dago.",
     "src": "media/irudiak/75eedbd66aee1eed.svg",
     "zabalera": 168
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mi>Q</mi><mi>u</mi><mi>B</mi><mo>=</mo><mi>p</mi><mi>u</mi><mi>/</mi><mi>R</mi></mrow></math>, hau da,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mi>Q</mi><mi>B</mi><mi>R</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma honetan ziklotroiaren formula erlatibista ez-erlatibistaren berdin-berdina da; alde bakarra da <math display=\"inline\"><mi>p</mi></math> orain momentu erlatibista dela (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>u</mi></mrow></math>)."
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Magnetismoa fenomeno erlatibista gisa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pentsamendu-esperimentu klasikoa"
    },
    {
     "mota": "testua",
     "html": "Har dezagun hari infinitu bat, laborategi-sisteman elektrikoki neutroa, <math display=\"inline\"><mi>I</mi></math> korrontea daramana: karga positiboen (pausagunean) eta karga negatiboen (<math display=\"inline\"><mi>v</mi></math> abiaduraz jitoan) dentsitate berdinak zehazki gainjartzen dira, karga-dentsitate garbia zero emanez eta, beraz — laborategi-sisteman — hariaz kanpo eremu elektrikorik gabe, 5. kapituluko eremu magnetikoa soilik utziz. Hariaren paraleloan <math display=\"inline\"><mi>v</mi></math> abiaduraz (karga negatiboen jito-abiadura berdinduz) higitzen den <math display=\"inline\"><mi>q</mi></math> proba-karga batek indar magnetiko bat sentitzen du, <math display=\"inline\"><mrow><mi>q</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math>, harirantz (edo haritik urrunduz) tiraka."
    },
    {
     "mota": "irudia",
     "oina": "Pentsamendu-esperimentu klasikoa: hariaren pausagune-sisteman, higitzen den proba-kargak indar <strong>magnetiko</strong> bat sentitzen du; kargaren beraren pausagune-sisteman, jitoan doan karga-dentsitatearen luzera-uzkurdurak karga <strong>elektriko</strong> garbi bat sortzen du harian, eta indar bera hutsik elektrostatiko gisa agertzen da.",
     "src": "media/irudiak/85baa44ef7453f86.svg",
     "zabalera": 296
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun orain egoera bera proba-kargaren beraren pausagune-sistematik. Sistema honetan, hariko karga <strong>positiboak</strong> higitzen ari dira (atzerantz), eta karga <strong>negatiboak</strong> pausagunean daude (edo astiroago higitzen dira) — eta luzera-uzkurdurak (12.1 atala) bi karga-dentsitateei <strong>desberdin</strong> eragiten dienez (abiadura desberdinak baitituzte sistema honetan), haria jada ez da elektrikoki neutroa sistema berrian. Karga-dentsitate lineal garbi bat agertzen da, eta eremu elektrostatiko arrunt bat sortzen du (2. kapitulua) — zeinak, arretaz landuz gero, <strong>zehazki</strong> indar bera egiten baitu orain geldi dagoen proba-kargaren gainean, jatorrizko sisteman indar magnetikoak egiten zuen berbera."
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun kontua zenbakiz, Purcell-en arrazoibideari jarraituz. Har dezagun <math display=\"inline\"><mrow><mi>+</mi><mi>λ</mi></mrow></math> karga-dentsitate lineal bat eskuinera <math display=\"inline\"><mi>v</mi></math> abiaduraz doana, eta gainjarrita <math display=\"inline\"><mrow><mi>−</mi><mi>λ</mi></mrow></math> bat ezkerrera <math display=\"inline\"><mi>v</mi></math> berdinaz; korronte garbia, beraz, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mi>v</mi></mrow></math> da eskuinera. <math display=\"inline\"><mi>s</mi></math> distantziara <math display=\"inline\"><mi>q</mi></math> proba-karga bat, eskuinera <math display=\"inline\"><mrow><mi>u</mi><mo>&lt;</mo><mi>v</mi></mrow></math> abiaduraz. <math display=\"inline\"><mi>S</mi></math> sisteman bi karga-lerroak elkar deuseztatzen dira: ez dago indar elektrikorik <math display=\"inline\"><mi>q</mi></math>-ren gainean. Ikus dezagun <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistematik (<math display=\"inline\"><mi>q</mi></math> geldi dagoena, eskuinera <math display=\"inline\"><mi>u</mi></math> abiaduraz higitzen dena). Abiaduren batuketa-arauaren arabera, lerro positibo eta negatiboen abiadurak orain <math display=\"inline\"><mrow><msub><mi>v</mi><mo>±</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>∓</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><mi>v</mi><mi>u</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira. <math display=\"inline\"><msub><mi>v</mi><mo>−</mo></msub></math> handiagoa denez <math display=\"inline\"><msub><mi>v</mi><mo>+</mo></msub></math> baino, karga negatiboen arteko tarteak uzkurdura handiagoa jasaten du; sistema honetan <strong>hariak karga negatibo garbia</strong> darama. Aljebra apur batekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">tot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>λ</mi><mo>+</mo></msub><mo>+</mo><msub><mi>λ</mi><mo>−</mo></msub><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mo>+</mo></msub><mo>−</mo><msub><mi>γ</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>λ</mi><mi>u</mi><mi>v</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> lerroen berezko (pausaguneko) karga-dentsitatea baita. Karga-dentsitate lineal honek eremu elektriko bat sortzen du, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">tot</mtext></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta beraz indar bat <math display=\"inline\"><mi>q</mi></math>-ren gainean <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>q</mi><mi>E</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina indarrak <math display=\"inline\"><mi>S</mi></math>-ra itzultzeko, indarren transformazio-arauaz baliatu behar dugu (<math display=\"inline\"><mi>q</mi></math> geldi dagoenez <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n, eta <math display=\"inline\"><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover></math> higidurarekiko perpendikularra denez, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mi>q</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi>s</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> erabiliz eta <math display=\"inline\"><mrow><mi>λ</mi><mi>v</mi></mrow></math> korronteaz adieraziz, forma ezagunagoa hartzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>q</mi><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Parentesi arteko gaia hari zuzen luze baten eremu magnetikoa da; indarra, hain zuzen, <math display=\"inline\"><mi>S</mi></math> sisteman Lorentz-en indarraren legeaz lortuko genukeen berbera. Indar «magnetikoa», beraz, indar elektrostatiko baten itxura besterik ez da, higidura erlatiboan dagoen behatzaile batentzat."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hau ez da kasualitatea, ezta analogia bat ere — identitate matematiko zehatza da. Magnetismoa da elektrostatikak higidura erlatiboan dagoen behatzaile batentzat duen itxura. Liburu honetako 2. eta 5. kapituluak, normalean gai bereizi gisa irakatsiak, isilean fenomeno erlatibista bakar bat dira, bi sistema desberdinetan ikusia."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibide ebatzia: zeinen txikia da efektua?"
    },
    {
     "mota": "testua",
     "html": "Merezi du zenbakiz egiaztatzea zeinen txikia behar duen izan luzera-uzkurdurak eragindako karga-desorekak, eguneroko indar magnetiko bat berregiteko. Etxeko kableetako elektroien jito-abiadura tipikoak harrigarriro motelak dira, <math display=\"inline\"><mrow><mi>v</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math>  m/s  (elektroiak berak azkar higitzen dira termikoki, baina haien <strong>jito</strong> garbia — korrontea — arrastaka doa)."
    },
    {
     "mota": "testua",
     "html": "Kasu honi dagokion luzera-uzkurduraren faktorea 1etik honenbestez aldentzen da, gutxi gorabehera: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mo>≈</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>∼</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— karga-desoreka frakzional ia pentsaezinezko txikia: hariaren dagoeneko orekatutako karga-dentsitate positibo eta negatiboen <math display=\"inline\"><msup><mn>10</mn><mn>25</mn></msup></math>-eko zati bat inguru. Baina hari makroskopiko batek karga-kopuru erraldoia daukanez (<math display=\"inline\"><msup><mn>10</mn><mn>23</mn></msup></math> ordenakoa ohiko kobrezko hariaren zentimetroko), desoreka frakzional ñimiño horrek ere sortzen du laborategi-sisteman behatzen diren indar magnetiko guztiz arruntak eragiteko adinako karga-dentsitate lineala."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Horrexegatik aurkitu eta erabili zen magnetismoa praktikan milurtekoetan zehar (imanarriak, iparrorratzak), inork elektrostatikarekiko loturarik susmatu baino askoz lehenago: haren erantzule den zuzenketa erlatibista izugarri txikia da eguneroko jito-abiaduretan, baina materia arruntak duen karga-kopuru eskergak indar sendo eta erraz behagarri bihurtzeraino anplifikatzen du."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nola transformatzen diren eremuak"
    },
    {
     "mota": "testua",
     "html": "Goiko pentsamendu-esperimentuarekin bat, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> nahastu egiten dira <math display=\"inline\"><mi>x</mi></math>-n zeharreko Lorentz-en bultzada baten pean, espazioa eta denbora koordenatu-transformazioaren pean nahasten diren bezalaxe:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Eremuen transformazioa (<math display=\"inline\"><mi>x</mi></math>-n zeharreko bultzada)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>E</mi><mi>x</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>E</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>E</mi><mi>y</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>y</mi></msub><mo>−</mo><mi>v</mi><msub><mi>B</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>E</mi><mi>z</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>z</mi></msub><mo>+</mo><mi>v</mi><msub><mi>B</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>B</mi><mi>x</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>B</mi><mi>y</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>B</mi><mi>y</mi></msub><mo>+</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>B</mi><mi>z</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>B</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nondik datoz arau hauek? Abiapuntua da <strong>karga elektrikoa inbariantea dela</strong>: masaren antzera baina energiaren ez bezala, partikula baten karga zenbaki finko bat da, edozein abiaduratan higitu arren. Har dezagun eremu elektriko ahalik eta soilena — kondentsadore lau baten plaken arteko eremu uniformea, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>σ</mi><mn>0</mn></msub><mi>/</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒚</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>-n pausagunean, <math display=\"inline\"><mrow><mi>±</mi><msub><mi>σ</mi><mn>0</mn></msub></mrow></math> gainazaleko kargekin. <math display=\"inline\"><mi>S</mi></math> sistematik ikusita (eskuinera <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz), plaken karga osoa eta zabalera ez dira aldatzen, baina luzera Lorentz-uzkurtzen da; beraz azalera-unitateko karga <math display=\"inline\"><msub><mi>γ</mi><mn>0</mn></msub></math> faktorez handitzen da, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>σ</mi><mn>0</mn></msub></mrow></math>, eta ondorioz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⟂</mo></msup><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn><mo>⟂</mo></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(hemen <math display=\"inline\"><mo>⟂</mo></math>-k higidura-norabidearekiko <strong>perpendikularra</strong> den osagaia adierazten du). Plaka norabidearen paralelo jarriz, plaken arteko <strong>distantzia</strong> uzkurtzen da, baina eremua ez da distantziaren mende; beraz osagai paraleloa ez da aldatzen, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn><mo>∥</mo></msubsup></mrow></math>. <math display=\"inline\"><mi>S</mi></math>-ko plaka higikorrek gainazaleko korronteak dituzte, eta horiek eremu magnetiko bat sortzen dute; hirugarren sistema batetik prozesu bera aztertuz, osagai guztien transformazio-arauak lortzen dira, formula-kutxan agertzen direnak. Bi kasu berezik merezi dute arreta:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>S</mi></math>-n <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> bada, orduan <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "<math display=\"inline\"><mi>S</mi></math>-n <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> bada, orduan <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.13 adibidea — Karga puntualaren eremu elektrikoa higiduran"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>q</mi></math> karga puntual bat pausagunean dago <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>-ren jatorrian. Zein da karga beraren eremu elektrikoa <math display=\"inline\"><mi>S</mi></math> sisteman, <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>-rekiko eskuinera <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> abiaduraz higitzen dena? <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>-n eremua Coulomb-en eremu erradiala da; transformazio-arauak (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>E</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>E</mi><mrow><mi>z</mi><mn>0</mn></mrow></msub></mrow></math>) eta koordenatuen Lorentz-en transformazioa aplikatuz, emaitza garbi bat lortzen da <math display=\"inline\"><mi>P</mi></math> puntuko <math display=\"inline\"><mi>S</mi></math>-koordenatuen bidez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> kargaren <strong>uneko</strong> posiziotik <math display=\"inline\"><mi>P</mi></math>-rako bektorea baita eta <math display=\"inline\"><mi>θ</mi></math> haren eta higidura-norabidearen arteko angelua. Emaitza bera 10. kapituluan lortu zen potentzial atzeratuen bidez; hemengo eratorpena askoz efizienteagoa da, eta datu harrigarri bat argitzen du: eremuak kargaren <strong>uneko</strong> posiziotik urruntzen dira, ez atzeratutik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "12.14 adibidea — Karga puntualaren eremu magnetikoa higiduran"
    },
    {
     "mota": "testua",
     "html": "Aurki dezagun orain <math display=\"inline\"><mi>v</mi></math> abiadura konstantez higitzen den <math display=\"inline\"><mi>q</mi></math> karga puntualaren eremu <strong>magnetikoa</strong>. Kargaren pausagune-sisteman (<math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>) eremu magnetikoa zero da (nonahi); beraz, eskuinera <math display=\"inline\"><mi>v</mi></math> abiaduraz doan <math display=\"inline\"><mi>S</mi></math> sisteman, goiko kasu berezia aplika daiteke, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Aurreko adibideko eremu elektrikoa erabiliz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math> karga hurbiltzen ikusiz erlojuaren aurkako norantzan doan. Abiadura txikian (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>), formula hau Biot-Savart-en legera laburbiltzen da karga puntual batentzat, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> — hots, Biot-Savart karga higikorraren eremu magnetikoaren abiadura txikiko hurbilketa besterik ez da."
    },
    {
     "mota": "testua",
     "html": "Sistema batean hutsik elektrikoa den eremu batek, oro har, osagai elektriko <strong>eta</strong> magnetikoak ditu beste batean — eremuak ez dira hainbeste objektu fisiko independenteak, eremu erlatibista bakar baten bi aurpegi baizik: eremu elektromagnetikoaren tentsorea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eremu-tentsorea"
    },
    {
     "mota": "testua",
     "html": "Egitura osoa trinko jasotzen du eremuaren sei osagaiez eraikitako 2. ordenako tentsore antisimetriko batek:"
    },
    {
     "mota": "testua",
     "html": "Eremuen transformazio-arauek erakusten dutenez, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> ez dira bi lau-bektoreren zati espazialak bezala transformatzen — beren osagaiak elkarrekin nahasten dira sistemaz aldatzean. Zer motatako objektua da sei osagai dituena eta arau horien arabera transformatzen dena? Erantzuna: bigarren ordenako tentsore <strong>antisimetriko</strong> bat. Lau-bektore bat <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> matrizearen faktore <strong>bakar</strong> batekin transformatzen bada, bi indizeko tentsore bat bi faktorerekin transformatzen da, <math display=\"inline\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>λ</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>σ</mi><mi>ν</mi></msubsup><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mrow><mi>λ</mi><mi>σ</mi></mrow></msup></mrow></math>. Lau dimentsiotan <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>16</mn></mrow></math> osagai ditu, baina antisimetria dela eta (<math display=\"inline\"><mrow><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup></mrow></math>) sei osagai independente soilik geratzen dira; sei horien transformazio-arauek, kalkulatuz gero, eremuen transformazio-arau berberak (formula-kutxakoak) ematen dituzte zehazki. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> tentsore antisimetriko bakar batean txertatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Eremu elektromagnetikoaren tentsorea (eskematikoa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>x</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>y</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>z</mi></msub><mi>c</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>x</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>y</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>z</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bada <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> tentsore antisimetriko batean txertatzeko bigarren modu bat ere, <math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>-n <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>c</mi><mo>→</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>→</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>c</mi></mrow></math> ordezkatuz lortzen den <strong>tentsore dualak</strong> (<math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>) emana; bi tentsoreek eremuen transformazio-arau zuzenak sortzen dituzte. (Zeinu-hitzarmena testuz testu alda daiteke: egile batzuek <math display=\"inline\"><mrow><msup><mi>F</mi><mn>01</mn></msup><mo>≡</mo><msub><mi>E</mi><mi>x</mi></msub></mrow></math> hartzen dute, beste batzuek aurkako zeinuak; hemengoa da erreprodukzio honetakoa.) Eremuen iturriak ere lau-bektore batean biltzen dira: karga-dentsitatea eta korronte-dentsitatea, <math display=\"inline\"><mrow><msup><mi>J</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>ρ</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,  jarraitutasun-ekuazioa <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>J</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn></mrow></math> forma trinkoan idatziz."
    },
    {
     "mota": "testua",
     "html": "Hizkuntza honetan, Maxwell-en lau ekuazioak (2., 5. eta 7. kapituluak) bi tentsore-ekuazio trinkotan biltzen dira, eta Lorentz-en indarraren legea lerro bakarrean geratzen da — liburu honek garatutako guztiaren adierazpenik ekonomikoena, eta erreprodukzioaren berezko amaiera-puntua."
    },
    {
     "mota": "testua",
     "html": "Zehazki, bi tentsore-ekuazio horiek honakoak dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>J</mi><mi>ν</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehenak Gauss-en legea (<math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math>) eta Ampère-Maxwell-en legea (<math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>) biltzen ditu; bigarrenak <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> eta Faraday-ren legea. Eta Lorentz-en indarraren legea lerro bakarrean geratzen da, Minkowski-ren indarraren bidez,  <math display=\"inline\"><mrow><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mi>q</mi><msub><mi>η</mi><mi>ν</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></mrow></math>, zeinaren zati espazialak ohiko indarra berreskuratzen baitu: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honetako eremu-tentsorearen formulazioa nahita da laburra — seinale bat tratamendu kobariante osorantz (lau-potentzialak, Maxwell-en tentsore-ekuazioak <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>J</mi><mi>ν</mi></msup></mrow></math> eta elektrodinamika lagrangearra), hura berez eremu-teoria erlatibistako jarraipen-ikastaro bati baitagokio, erreprodukzio honen irismenetik harago."
      }
     ]
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Ariketa ebatziak (Griffiths eskuliburutik)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Iturria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ondorengo ariketak Griffiths-en <strong>Introduction to Electrodynamics</strong> liburuko 12. kapituluko (Erlatibitatea) problemak dira, irakaslearen eskuliburuko (<code>Instructor&#x27;s Solution Manual</code>, 4. edizioa) soluzioan oinarrituta. Jatorrizko iturria: <code>espazio-ontzia/08_elektromagnetismoa/_cruce_electromagnetismo/</code>. Testua osorik euskaratu da JAKINArako, urrats guztiak gordez."
      }
     ]
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Griffiths 12.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili abiaduren batuketaren erregela galileotarra. Izan bedi <math display=\"inline\"><mi>S</mi></math> sistema inertzial bat."
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistemak <math display=\"inline\"><mi>v</mi></math> abiadura konstanteaz higitzen bada <math display=\"inline\"><mi>S</mi></math>-rekiko, frogatu <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> ere inertziala dela."
      },
      {
       "mota": "testua",
       "html": "(b) Alderantziz, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> inertziala bada, frogatu <math display=\"inline\"><mi>S</mi></math>-rekiko abiadura konstanteaz higitzen dela."
      },
      {
       "mota": "irudia",
       "oina": "Erreferentzia — kontzeptu berbera: sistema\n  inertzial baten definizio operatiboa, partikula askearen abiadura\n  konstantea izatean oinarritua.",
       "src": "media/irudiak/a8197259d94ee249.svg",
       "zabalera": 322
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planteamendua"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mi>u</mi></math> partikula baten abiadura <math display=\"inline\"><mi>S</mi></math>-n neurtua, eta <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> partikula beraren abiadura <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n neurtua. Mekanika galileotarrean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>v</mi></math> baita <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ren abiadura <math display=\"inline\"><mi>S</mi></math>-rekiko."
    },
    {
     "mota": "testua",
     "html": "Sistema inertzialaren definizio operatiboa hau da: partikula aske batek abiadura konstantea du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) atala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math> inertziala denez, partikula askeak <math display=\"inline\"><mi>u</mi></math> abiadura konstantea du <math display=\"inline\"><mi>S</mi></math>-n."
    },
    {
     "mota": "testua",
     "html": "Gainera <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>  <math display=\"inline\"><mi>v</mi></math> abiadura konstanteaz higitzen bada <math display=\"inline\"><mi>S</mi></math>-rekiko, orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi abiadura konstanteren kendura konstantea da. Beraz, partikula askea ere abiadura konstantez higitzen da <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n."
    },
    {
     "mota": "testua",
     "html": "Hortaz, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> inertziala da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) atala"
    },
    {
     "mota": "testua",
     "html": "Orain suposatzen dugu <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> ere inertziala dela. Partikula aske baterako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da <math display=\"inline\"><mi>S</mi></math>-n, eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n."
    },
    {
     "mota": "testua",
     "html": "Erregela galileotarrak ematen du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><msup><mi>u</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>u</mi></math> eta <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> konstante direnez, <math display=\"inline\"><mi>v</mi></math> ere konstantea da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inertziala </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rekiko. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sistema inertzialaren nozioa itxita geratzen da transformazio galileotarren pean: erlatibozko abiadura konstanteaz higitzeak ez du Newtonen lehen legearen baliozkotasuna aldatzen."
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Griffiths 12.7",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Laborategiko esperimentu batean, muoi batek <math display=\"inline\"><mn>800</mn></math> m egiten dituela behatzen da desintegratu aurretik. Ikasle batek muoiaren bizitza begiratzen du (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s) eta ondorioztatzen du haren abiadura hau zela:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Argia baino azkarrago! Aurkitu ikaslearen akatsa eta kalkulatu muoiaren benetako abiadura."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ikaslearen akatsa"
    },
    {
     "mota": "testua",
     "html": "Muoiaren bizitza, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s, bere pausagune-sisteman neurtutako bizitza propioa da. Baina <math display=\"inline\"><mn>800</mn></math> m-ko ibilbidea laborategian neurtzen da, non muoia higitzen ari den: haren barne-erlojua motelago dabil, denbora dilatazioaren ondorioz. Laborategian muoiak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi>τ</mi><mo>=</mo><mfrac><mi>τ</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "irauten du, non <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>1</mn></mrow></math> den. Beraz, abiadura zuzena hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow><mrow><mi>γ</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta ez ikasleak erabilitakoa, zeinak <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn></mrow></math> hartu baitu isilpean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiaduraren ebazpena"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>800</mn></mrow></math> m eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math>. Denbora dilatatua ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>γ</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>τ</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mi>c</mi><mi>τ</mi><mo>=</mo><mi>d</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Karratura igoz eta <math display=\"inline\"><msup><mi>β</mi><mn>2</mn></msup></math> bakanduz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>β</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>β</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mi>d</mi><msqrt><mrow><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zenbakiak sartuz, <math display=\"inline\"><mrow><mi>c</mi><mi>τ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>600</mn></mrow></math> m denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>800</mn><msqrt><mrow><msup><mn>800</mn><mn>2</mn></msup><mo>+</mo><msup><mn>600</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>800</mn><msqrt><mn>1000000</mn></msqrt></mfrac><mo>=</mo><mfrac><mn>800</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mi>c</mi><mo>=</mo><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Muoiaren sisteman ikuspegia osagarria da: han laborategiko <math display=\"inline\"><mn>800</mn></math> m-ko ibilbidea Lorentz-en uzkurduraz <math display=\"inline\"><mrow><mn>800</mn><mi>/</mi><mi>γ</mi></mrow></math> m-ra murrizten da, eta muoiak <math display=\"inline\"><mi>τ</mi></math> propioa baino ez du irauten; <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>800</mn><mi>/</mi><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>τ</mi></mrow></math> eginda emaitza bera lortzen da. Denbora dilatazioa eta luzera-uzkurdura elkarren osagarri dira: horregatik iristen dira goi-atmosferan sortutako muoiak itsas mailaraino, beren bizitza propio laburra gorabehera."
    },
    {
     "mota": "oharra",
     "titulua": "Egiaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, <strong>Introduction to Electrodynamics</strong> (3. ed.), 12.7 problema (denbora dilatazioa; testuko 12.1 adibidean muoi bera <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mi>c</mi></mrow></math>-n darabil). Ebazpena bat dator irakaslearen eskuliburuko (4. ed.) 12.7 soluzioarekin, 263. or.: <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>4</mn><mi>/</mi><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m/s."
      }
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Griffiths 12.11",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>R</mi></math> erradioko disko biratzaile batek <math display=\"inline\"><mi>ω</mi></math> abiadura angeluarrez biratzen du. Periferian abiadura tangentziala <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math> da. Zirkunferentziari Lorentz-en uzkurdura zuzenean aplikatzen bazaio, baina erradioari ez (abiadurarekiko elkarzuta delako), badirudi zirkunferentzia/diametro arrazoia <math display=\"inline\"><mi>π</mi></math>-tik desberdina agertzen dela. Zehaztu zer gertatzen den eta azaldu arazo kontzeptuala."
      },
      {
       "mota": "irudia",
       "oina": "Diskoaren ertzeko elementu bat <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>\n  abiadura tangentzialaz higitzen da; erradioa abiadurarekiko elkarzuta da.",
       "src": "media/irudiak/a8197259d94ee249.svg",
       "zabalera": 322
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kontu inozoa"
    },
    {
     "mota": "testua",
     "html": "Diskoaren ertzean, zirkunferentziako elementu txiki bakoitza tangentzialki higitzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "abiaduraz. Elementu horiei Lorentz-en uzkurdura longitudinala mekanikoki aplikatuz gero,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mfrac><msup><mi>R</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "luzera tangentzial behatua <math display=\"inline\"><mfrac><mn>1</mn><mi>γ</mi></mfrac></math> faktoreaz murriztuko litzateke."
    },
    {
     "mota": "testua",
     "html": "Erradioak, aldiz, ertzeko puntuaren abiadura tangentzialarekiko elkarzuta seinalatzen du. Uzkurdura longitudinalaren erregela sinpleak ez ditu higidurarekiko elkarzuta diren norabideak uzkurtzen. Beraz, kontu azkarrak esango luke"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow><mi>γ</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>D</mi><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>C</mi><mtext mathvariant=\"normal\">inozoa</mtext></msub><msub><mi>D</mi><mtext mathvariant=\"normal\">inozoa</mtext></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mfrac><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>π</mi><mi>γ</mi></mfrac><mo>=</mo><mi>π</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adierazpen honek sortzen du paradoxa: <math display=\"inline\"><mrow><mi>ω</mi><mi>R</mi><mo>≠</mo><mn>0</mn></mrow></math> denean <math display=\"inline\"><mi>π</mi></math> baino txikiagoa den arrazoia emango luke, nahiz eta <math display=\"inline\"><mi>R</mi></math> erradioko zirkulu bati buruz ari garen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zergatik ez den erantzun fisikoa"
    },
    {
     "mota": "testua",
     "html": "Urrats baliogabea ez dago Lorentz-en formula lokalean, baizik eta diskoaren puntu guztiak modu zurrunean diskoari lotutako sistema inertzial bakar batekoak balira bezala erabiltzean."
    },
    {
     "mota": "testua",
     "html": "Ertzeko puntu batek azelerazio zentripetua du. Disko osoa ez da sistema inertziala, eta erlatibitatean gorputz zabaldu batek ezin du globalki zurrun-azeleratuta iraun, tentsioak, deformazioak eta barne-indarrak nola transmititzen diren zehaztu gabe."
    },
    {
     "mota": "testua",
     "html": "Beraz, ez da nahikoa esatea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zirkunferentzia uzkurtua </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erradioa uzkurtu gabe. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esaldi horrek sistema inertzialen erregela lokalak konfigurazio global azeleratu batekin nahasten ditu. Diskoari itsatsitako erregela-sare batek zer geometria fisiko neurtzen duen jakiteko, edo biratzean zer erradio/zirkunferentzia geratzen den jakiteko, diskoaren eredu material bat eman behar da: elastikotasuna, barne-tentsioak, azeleratzeko prozedura eta erabilitako aldiberekotasun-irizpidea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "testua",
     "html": "Kontu formal inozoak hau ematen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mfrac><mi>C</mi><mi>D</mi></mfrac><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>π</mi><mi>γ</mi></mfrac><mo>=</mo><mi>π</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baina hori ez da unibertsalki baliozko iragarpen fisikoa. Ariketaren ondorio zuzena hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez dago </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mi>C</mi><mi>D</mi></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arrazoi bakarrik </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -k eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>R</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -k soilik zehazten dutenik. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Arazoa Ehrenfest-en paradoxa da: biraka ari den disko bat azeleratuta dago eta ezin da objektu erlatibistikoki zurrun gisa tratatu, bere barne-indarrak eta biratze-prozesua zehaztu gabe."
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Griffiths 12.21",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi gertaerak koordenatu hauek dituzte:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>A</mi></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>B</mi></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Suposatzen da haien arteko tartea espaziala dela. Aurkitu bi gertaerak aldiberekoak diren sistema inertzialaren abiadura."
      },
      {
       "mota": "irudia",
       "oina": "Espazio-denbora diagrama <math display=\"inline\"><mi>S</mi></math>  sisteman: <math display=\"inline\"><mi>A</mi></math>\n  eta <math display=\"inline\"><mi>B</mi></math> tarte espazialaz bereizita daude; <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ren denbora-ardatz\n    &quot;etzanak&quot; biak aldiberekotzat markatzen ditu.",
       "src": "media/irudiak/1a3ebf9c079665b6.svg",
       "zabalera": 287
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planteamendua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>t</mi></math> soilik aldatzen direnez, nahikoa da denborarako Lorentz-en transformazioa erabiltzea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistema bat nahi dugu, non bi gertaerak aldi berean gertatzen diren, hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>t</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><msubsup><mi>t</mi><mi>B</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baliokidea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kalkulua"
    },
    {
     "mota": "testua",
     "html": "Bi gertaeren transformazio tenporala kentzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ko aldiberekotasun-baldintzak ezartzen du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn></mrow></math> denez, geratzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Argituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko koordenatuetan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub></mrow><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egiaztapen erlatibista"
    },
    {
     "mota": "testua",
     "html": "Enuntziatuak dio tartea espaziala dela. Konbentzioa erabiliz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tarte espaziala izateak esan nahi du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&gt;</mo><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>c</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aurkitutako abiadura fisikoki onargarria da: benetan existitzen da tarte espazialaz bereizitako bi gertaera aldiberekotzat ematen dituen sistema inertzial bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub></mrow><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zeinuak <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-ren higidura-noranzkoa adierazten du <math display=\"inline\"><mi>S</mi></math>-rekiko: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> zeinu berekoak badira, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>  <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math> norabidean higitzen da; zeinu kontrakoak badira, <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math> norabidean higitzen da."
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Griffiths 12.30",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula-sorta bat dago, guztiak <math display=\"inline\"><mi>x</mi></math> norabidean higitzen direnak, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math> energiekin eta <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math> momentuekin. Aurkitu momentu-zentroaren sistemaren abiadura, hau da, momentu osoa zero den sistemarena."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Batuketak"
    },
    {
     "mota": "testua",
     "html": "Definitzen ditugu energia osoa eta momentu osoa <math display=\"inline\"><mi>S</mi></math>-n:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>T</mi></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Higidura guztia <math display=\"inline\"><mi>x</mi></math> ardatzean dagoenez, ariketa dimentsio bakarrekoa da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentuaren transformazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>S</mi></math>-rekiko <math display=\"inline\"><mi>x</mi></math> norabidean <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen den <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> sistemarako Lorentz-en transformazio baterako, partikula bakoitzaren momentua honela transformatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>i</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partikula guztien gainean batzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>p</mi><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>i</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>v</mi></math> eta <math display=\"inline\"><mi>γ</mi></math> sistema osorako berberak direnez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentu-zentroaren baldintza"
    },
    {
     "mota": "testua",
     "html": "Momentu-zentroaren sistema honela definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abiadura argituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>p</mi><mi>T</mi></msub></mrow><msub><mi>E</mi><mi>T</mi></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Batuketak ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi></mrow><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">CM </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>p</mi><mi>T</mi></msub></mrow><msub><mi>E</mi><mi>T</mi></msub></mfrac><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub></mrow><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Noranzkoa <math display=\"inline\"><msub><mi>p</mi><mi>T</mi></msub></math>-ren zeinuak zehazten du: momentu osoak <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math> norabidean seinalatzen badu, momentu-zentroaren sistema <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math> norabidean higitzen da <math display=\"inline\"><mi>S</mi></math>-rekiko; <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math> norabidean seinalatzen badu, <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math> norabidean higitzen da."
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Griffiths 12.40",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mi>m</mi></math> masako eta <math display=\"inline\"><mi>q</mi></math> kargako partikula baten azelerazio arrunta, <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>B</mi></math> eremu elektromagnetikoen eraginpean <math display=\"inline\"><mi>u</mi></math> abiaduraz higitzen denean, honako hau dela:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Erabili indar eta azelerazio arrunten arteko erlazio erlatibista."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiapuntua"
    },
    {
     "mota": "testua",
     "html": "12.73 ekuazioak azelerazio arruntaren funtzioan adierazten du indar arrunta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mi>m</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Idazten dugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Indar elektromagnetiko arrunta Lorentz-en indarra da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi></mrow></math> ateratzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>u</mi></math>-rekin biderkadura eskalarra hartzen dugu ekuazio mekanikoan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>+</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi></mrow></math> faktorizatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kortxetea sinplifikatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>a</mi></math> argitzea"
    },
    {
     "mota": "testua",
     "html": "Itzultzen gara"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuaziora. <math display=\"inline\"><mrow><mi>m</mi><mi>γ</mi></mrow></math>-z zatituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>=</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup></mrow></mfrac></mrow></math> ordezkatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>c</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "bigarren gaia hau geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lorentz-en indarra ordezkatzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izanik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortaz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azkenik, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>γ</mi></mfrac><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mrow></math>  erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gai magnetikoak Lorentz-en indarraren barruan laguntzen du, baina ez da agertzen <math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow></math>-n, beti <math display=\"inline\"><mi>u</mi></math>-rekiko elkarzuta delako. Zuzenketa paraleloa gai elektrikotik dator soilik, partikularen gainean lan egiten duelako."
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Griffiths 12.49",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu bigarren mailako tentsore bat sistema inertzial batean simetrikoa edo antisimetrikoa bada, propietate hori mantentzen duela Lorentz-en transformazio baten ondoren."
      },
      {
       "mota": "testua",
       "html": "Hau da:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformazio-legea"
    },
    {
     "mota": "testua",
     "html": "Bigarren mailako tentsore kontrabariante bat honela transformatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> indize mutuak dira: batu egiten dira, eta beraz berrizendatu daitezke, modu koherentean egiten den bitartean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kasu simetrikoa"
    },
    {
     "mota": "testua",
     "html": "Demagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup></math> eta <math display=\"inline\"><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> konparatu nahi ditugu."
    },
    {
     "mota": "testua",
     "html": "Transformazio-legearen arabera,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orain <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>α</mi></mrow></math> indize mutuak berrizendatzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko tentsorea simetrikoa denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Faktore eskalarrak trukatu daitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mo>=</mo><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, transformatutako tentsorea simetrikoa izaten jarraitzen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kasu antisimetrikoa"
    },
    {
     "mota": "testua",
     "html": "Orain suposatzen dugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berriz abiatzen gara"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hemendik. Indize mutuak berrizendatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Antisimetria erabiltzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Faktore eskalarrak trukatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, transformatutako tentsorea antisimetrikoa izaten jarraitzen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "testua",
     "html": "Lorentz-en transformazioek bigarren mailako tentsoreen simetria eta antisimetria mantentzen dituzte:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>±</mi><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>±</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Arrazoi estrukturala hau da: transformazioak bi Lorentz-matrize erabiltzen ditu, indize bakoitzeko bat, eta batuketa-indizeak trukatu daitezke baturaren balioa aldatu gabe."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Griffiths 12.59",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>m</mi></math> masako partikula batek elastikoki talka egiten du, hasieran geldirik dagoen berdin-berdina den beste partikula batekin. Mekanika klasikoan, irteerako trajektoriek beti angelu zuzena osatzen dute. Kalkulatu erlatibistikoki laborategian irteerako trajektorien arteko <math display=\"inline\"><mi>θ</mi></math> angelua, momentu-zentroaren sisteman <math display=\"inline\"><mi>φ</mi></math> sakabanatze-angeluaren eta sistema horretako <math display=\"inline\"><mi>v</mi></math> abiaduraren funtzioan."
      },
      {
       "mota": "irudia",
       "oina": "Talka elastikoaren ondoko bi trajektoriak\n  laborategian, <math display=\"inline\"><mi>θ</mi></math> angelua sortuz; laborategiko koordenatu-sistemaren\n  jatorrizko norabidea <math display=\"inline\"><mi>x</mi></math> da.",
       "src": "media/irudiak/6c3ab9ac4a4f3a0f.svg",
       "zabalera": 320
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momentu-zentroaren sistema"
    },
    {
     "mota": "testua",
     "html": "Momentu-zentroaren sisteman, talka baino lehen bi partikulek modulu berdineko momentu aurkakoak dituzte. Talka elastikoaren ondoren, energia eta momentu-modulu berbera dute, <math display=\"inline\"><mi>p</mi></math>, baina desbideratuta ateratzen dira."
    },
    {
     "mota": "testua",
     "html": "Irteerako lau-momentuak honela hartzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>,</mo><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>s</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>,</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortaz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>p</mi><mi>c</mi></mrow><mi>E</mi></mfrac><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>=</mo><mi>β</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Laborategirako transformazioa"
    },
    {
     "mota": "testua",
     "html": "Laborategiko sistemara pasatzeko, non talka egiten zuen bi partikuletako bat hasieran geldirik zegoen, <math display=\"inline\"><mi>x</mi></math> norabidean <math display=\"inline\"><mi>v</mi></math> abiadurazko boost bat egiten dugu."
    },
    {
     "mota": "testua",
     "html": "Osagai espazial transformatuak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>+</mo><mi>β</mi><mfrac><mi>E</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>p</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>+</mo><mi>β</mi><mfrac><mi>E</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>y</mi></math> osagaien zeinuek soilik adierazten dute bi partikulak ardatzaren alde kontrajarrietan ateratzen direla."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Biderkadura eskalar espaziala"
    },
    {
     "mota": "testua",
     "html": "Bi laborategi-trajektorien arteko <math display=\"inline\"><mi>θ</mi></math> angelua honela ematen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biderkadura eskalar espaziala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Moduluak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>p</mi><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>p</mi><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Angeluaren sinplifikazioa"
    },
    {
     "mota": "testua",
     "html": "Bi laborategi-bektoreren arteko <math display=\"inline\"><mi>θ</mi></math> angelua zuzenean lortzeko, komenigarriena biderkadura bektorialaren eta eskalarraren arteko zatidura erabiltzea da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Plano bereko bi bektore direnez (<math display=\"inline\"><mi>z</mi></math> osagairik gabe), biderkadura bektorialak osagai bakarra du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagaiak ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortaz <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>. Zenbakitzailea lehen lortu dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow><mrow><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> denez, honela ere idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>γ</mi><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>γ</mi><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Muga ez-erlatibistan, <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>≈</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math> dugu, hortaz <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> oso handia bihurtzen da eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>→</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela emaitza klasikoa berreskuratzen da: irteerako trajektoriak elkarzutak dira."
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Griffiths 12.60",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Partikula bat <math display=\"inline\"><mi>x</mi></math> ardatzeko jatorritik geldirik abiatzen da, eta <math display=\"inline\"><mi>x</mi></math> norabidean zuzendutako <math display=\"inline\"><mi>K</mi></math> Minkowski-indar konstante baten eraginpean higitzen da. <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>t</mi></math>-ren funtzio gisa aurkitu behar da, erantzuna forma inplizituan utziz, hau da, <math display=\"inline\"><mi>t</mi></math>  <math display=\"inline\"><mi>x</mi></math>-ren funtzio gisa idatziz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiapuntua"
    },
    {
     "mota": "testua",
     "html": "Minkowski-indarra momentu arruntaren denbora propioarekiko deribatu gisa definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Higidura dimentsio bakarrekoa da, hortaz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>d</mi><mfrac><mi>x</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math>. Gainera,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>τ</mi><mo>=</mo><mi>d</mi><mi>t</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>m</mi></mfrac></math>-z biderkatuz geratzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aldagai espazialaren aldaketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortu arte integratu nahi dugu, hortaz erabiltzen dugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>u</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Izan bedi"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan aurreko ekuazioa honetan bihurtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>u</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>w</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mrow><mi>m</mi><mi>w</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>w</mi></math>-z biderkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>w</mi><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>w</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integratzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partikula <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-tik abiatzen da <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> izanik, hortaz hasieran <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mn>0</mn></mrow></math> da eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiadura posizioaren funtzio gisa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>w</mi></math>-ren definizioaren arabera,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berdinduz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math>  argituz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mi>m</mi></mfrac></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>d</mi><mfrac><mi>x</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow><mrow><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mi>m</mi></mfrac></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>c</mi></math>-z biderkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mi>x</mi><mfrac><mi>′</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow><mrow><mn>2</mn><mi>K</mi><mi>x</mi><mfrac><mi>′</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></mfrac></msqrt><mi>d</mi><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Integrazioa"
    },
    {
     "mota": "testua",
     "html": "Aldagai adimentsional bat definitzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>K</mi></mrow></mfrac><msup><mi>z</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>K</mi></mfrac><mi>z</mi><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integrala honetara transformatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>K</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>z</mi></msubsup><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt><mi>d</mi><msup><mi>z</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Behar den primitiboa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>d</mi><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>K</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>t</mi></math>-ren arteko erlazio inplizitua hau da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>K</mi><mi>t</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da eskatutako forma: ez du <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio elementalen bidez argitzen, baina posizioa modu bakarrean zehazten du <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><mn>0</mn></mrow></math> bakoitzerako."
    },
    {
     "mota": "testua",
     "html": "Egiaztapen gisa, <math display=\"inline\"><mi>x</mi></math> txikia bada <math display=\"inline\"><mrow><mi>z</mi><mo>≪</mo><mn>1</mn></mrow></math> eta eskuinaldeak gutxi gorabehera <math display=\"inline\"><mrow><mn>2</mn><mi>z</mi></mrow></math> balio du. Hortik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>≈</mo><mfrac><mrow><mi>K</mi><mi>t</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mi>K</mi><mi>m</mi></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "zeinak trajektoriaren hasieran higidura uniformeki azeleratu ez-erlatibista berreskuratzen duen."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Griffiths 12.64",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>S</mi></math> sistema inertzial jakin batean, puntu bateko <math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>B</mi></math> eremuak ez dira ez paraleloak ez elkarzutak. Frogatu badagoela beste sistema inertzial bat, non eremu transformatuak paraleloak diren, sistema hori <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen bada, honako baldintza hau betez:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Erabaki, halaber, ba ote dagoen eremuak elkarzut bihurtzen dituen sistema inertzialik."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ardatzen aukeraketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>z</mi></math> ardatza <math display=\"inline\"><mi>E</mi></math>-ren norabidean hartzen dugu, eta <math display=\"inline\"><mi>B</mi></math>  <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math> planoan uzten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremuak paraleloak ez direnez, <math display=\"inline\"><mrow><msub><mi>B</mi><mo>⟂</mo></msub><mo>≠</mo><mn>0</mn></mrow></math>. Elkarzutak ez direnez, <math display=\"inline\"><mrow><msub><mi>B</mi><mo>∥</mo></msub><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Biderkadura bektoriala <math display=\"inline\"><mi>x</mi></math> norabidean geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi><mo>=</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, norabide horretan aukeratzen dugu boost-a. Sistema berriaren abiadura honela idazten dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>v</mi><mo>&gt;</mo><mn>0</mn></mrow></math> izanik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eremu transformatuak"
    },
    {
     "mota": "testua",
     "html": "Bi eremuekiko elkarzuta den boost baterako, ez dago boost-aren norabideko osagai longitudinalik, hortaz garrantzitsuak diren transformazioak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>E</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Biderkadura bektorialak kalkulatzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>v</mi><mi>E</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>γ</mi></math> faktore komunak ez dio paralelotasun-baldintzari eragiten."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paralelotasun-baldintza"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover></math> eta <math display=\"inline\"><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></math> paraleloak izateko, haien <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>z</mi></math> osagaiek proportzio berbera izan behar dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub></mrow><mrow><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>−</mo><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub></mrow><msub><mi>B</mi><mo>∥</mo></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gurutzatuz biderkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup><mo>=</mo><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>v</mi><msup><mi>E</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mi>v</mi><mn>2</mn></msup><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berrantolatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen dugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Boost-aren norabide bektoriala berrezarriz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da hain zuzen eskatutako erlazioa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiadura subluminikoaren existentzia"
    },
    {
     "mota": "testua",
     "html": "Aurreko ekuazioak ez du norabide bat soilik ematen, baizik eta fisikoki onargarria den abiadura bat. Hori ikusteko, nahikoa da ohartzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "funtzioak <math display=\"inline\"><mfrac><mi>c</mi><mn>2</mn></mfrac></math> maximoa duela <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>c</mi></mrow></math> denean. Beste aldetik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>≤</mo><mfrac><mrow><mi>E</mi><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>≥</mo><mn>2</mn><mi>a</mi><mi>b</mi></mrow></math> desberdintzaren bidez, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>B</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mfrac><mi>E</mi><mi>c</mi></mfrac></mrow></math> izanik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>≥</mo><mn>2</mn><mi>E</mi><mfrac><mi>B</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>E</mi><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>≤</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremuak jada paraleloak ez badira, osagai elkarzutarako desberdintza zorrotza da, hortaz beharrezko abiadura <math display=\"inline\"><mi>c</mi></math>-tik behera geratzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ba al dago eremuak elkarzut bihurtzen dituen sistemarik?"
    },
    {
     "mota": "testua",
     "html": "Ez. Biderkadura eskalar elektromagnetikoa aldaezina da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>E</mi><mo>⋅</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko sisteman eremuak elkarzutak ez direnez, <math display=\"inline\"><mrow><mi>E</mi><mo>⋅</mo><mi>B</mi><mo>≠</mo><mn>0</mn></mrow></math>. Aldaezintasunagatik, beste sistema inertzial batean ere ezin da lortu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, hasieran eremuak elkarzutak ez baziren, ez dago haiek elkarzut bihurtzen dituen boost-ik."
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Griffiths 12.67",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>q</mi></math> karga bat jatorrian geldirik askatzen da. Laborategian eremu uniforme hauek daude:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math> izanik. Trajektoria zehaztu behar da, eremu elektrikoa desagertzen den sistema batera transformatuz, han higidura ebatziz, eta gero laborategira itzuliz. Ondoren emaitza konparatu behar da eremu gurutzatuen zikloide ez-erlatibistarekin."
      },
      {
       "mota": "irudia",
       "oina": "Zikloide erlatibistaren itxura: biraketa\n  Larmorrarra <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math> norabideko deriba uniformearekin konbinatuta.",
       "src": "media/irudiak/c59be29fc150f062.svg",
       "zabalera": 447
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deriba-sistema"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math> eta <math display=\"inline\"><mi>B</mi></math> elkarzutak direnez eta <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math> denez, badago <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math> norabidean higitzen den sistema bat, hau da, <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math> norabidean, honako abiadura honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non eremu elektrikoa deuseztatzen den."
    },
    {
     "mota": "testua",
     "html": "Definitzen ditugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math> norabideko boost baterako eremu-transformazioak erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi>B</mi><mn>0</mn></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi>v</mi><msub><mi>B</mi><mn>0</mn></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>v</mi><msub><mi>B</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eremu magnetiko transformatua hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi>E</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mn>0</mn></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac></mrow></math>  izanik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><msub><mi>B</mi><mn>0</mn></msub><mi mathvariant=\"normal\">Γ</mi></mfrac><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higidura <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn></mrow></math> den sisteman"
    },
    {
     "mota": "testua",
     "html": "Sistema gurutzatuan eremu magnetiko uniformea baino ez dago. Partikula, laborategian geldirik zegoena, hasieran abiadura honekin agertzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bere abiadura konstante mantentzen da. Higidura-ekuazioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>q</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Abiadura konstante denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mi>m</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>q</mi><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mi>m</mi></mrow></mfrac><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maiztasun angeluar zeinudun bat definitzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>q</mi><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>q</mi><msub><mi>B</mi><mn>0</mn></msub></mrow><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagaiek betetzen dute"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>ω</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>−</mi><mi>ω</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzekin, <math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>−</mi><mi>v</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorritik integratzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>v</mi><mi>ω</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>q</mi></math> negatiboa bada, <math display=\"inline\"><mi>ω</mi></math>-ren zeinuak biraketaren noranzkoa aldatzen du; itxura geometrikoa berbera da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Laborategira itzultzeko transformazioa"
    },
    {
     "mota": "testua",
     "html": "Sistema gurutzatua <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math> norabidean <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen da laborategiarekiko. Alderantzizko transformazioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mi>v</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mfrac><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Trajektoria zirkular gurutzatua ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>R</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mfrac><mrow><mi>v</mi><mi>R</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio parametriko hauek, <math display=\"inline\"><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></math> parametroaz, laborategiko trajektoria ematen dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma inplizitua"
    },
    {
     "mota": "testua",
     "html": "Parametroa partzialki ere ezaba dezakegu. Transformazio zuzenetik,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema gurutzatuan orbitak betetzen duenez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "laborategian hau geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zehatzago,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ren presentzia konbinazio tenporalean eta <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup></math>-rena ekuazio geometrikoan da zuzenketa erlatibista nagusia, zikloide ez-erlatibistarekin alderatuz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza klasikoarekin konparazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≪</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math> mugan, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>≈</mo><mn>1</mn></mrow></math> da eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>≈</mo><msub><mi>B</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>≈</mo><mfrac><mrow><mi>q</mi><msub><mi>B</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma inplizitua eremu gurutzatuetako higidurari lotutako zikloide arruntera laburtzen da: biraketa Larmorrarra deriba uniforme batekin konbinatuta, <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math> norabidean."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erlatibistikoki, irudi berbera irauten du, baina koordenatu horizontala <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> faktoreaz luzatuta geratzen da: partikulak zikloide deformatu bat jarraitzen du, ez zikloide klasiko zehatza."
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Griffiths 12.68",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eraiki behar da <math display=\"inline\"><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> tentsorea, <math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>-ren antzekoa, <math display=\"inline\"><mi>D</mi></math> eta <math display=\"inline\"><mi>H</mi></math> erabiliz, materia barruko Maxwell-en ekuazio makroskopikoak <math display=\"inline\"><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup></math> korronte askearekin idazteko. Ondoren dagokion tentsore duala eraiki behar da. Azkenik, Minkowski-ren erlazio konstitutibo erlatibistak erabili behar dira, <math display=\"inline\"><mi>ε</mi></math> permitibitate propioko eta <math display=\"inline\"><mi>μ</mi></math> permeabilitate propioko euskarri lineal batentzat, eta <math display=\"inline\"><mi>D</mi></math> eta <math display=\"inline\"><mi>H</mi></math>-ren formulak lortu behar dira materiala <math display=\"inline\"><mi>u</mi></math> abiadura arruntaz higitzen denean."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tentsore makroskopikoa"
    },
    {
     "mota": "testua",
     "html": "12. kapituluko konbentzioekin, <math display=\"inline\"><mi>D</mi></math> eta <math display=\"inline\"><mi>H</mi></math> dituen tentsorea honela hartzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>f</mi></msub><mo>,</mo><msub><mi>J</mi><mi>f</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagai tenporalak dio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mn>0</mn><mi>ν</mi></mrow></msup><mo>=</mo><mi>c</mi><mi>∇</mi><mo>⋅</mo><mi>D</mi><mo>=</mo><mi>c</mi><msub><mi>ρ</mi><mi>f</mi></msub><mo>=</mo><msubsup><mi>J</mi><mi>f</mi><mrow><mn>0</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagai espazialek ematen dute, adibidez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mn>1</mn><mi>ν</mi></mrow></msup><mo>=</mo><mi>−</mi><msub><mi>∂</mi><mi>t</mi></msub><msub><mi>D</mi><mi>x</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi>H</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mi>f</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta antzera <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>z</mi></math>-rako. Hau ekuazio makroskopikoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>H</mi><mo>−</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>D</mi><mo>=</mo><msub><mi>J</mi><mi>f</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "D eta H dituen tentsore duala"
    },
    {
     "mota": "testua",
     "html": "Tentsore makroskopikoari dagokion dualak <math display=\"inline\"><mi>D</mi></math>-ren eta <math display=\"inline\"><mi>H</mi></math>-ren zeregin estrukturala trukatzen du. Konbentzio berberekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>H</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma hau <math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> tentsore dual elektromagnetikoaren analogia zuzena da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Minkowski-ren erlazioak"
    },
    {
     "mota": "testua",
     "html": "Izan bedi"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "materialaren 4-abiadura, non"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Minkowski-k erlazio kobariante hauek proposatzen ditu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mi>ε</mi><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>H</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Euskarria geldirik dagoenean, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> da eta <math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Orduan osagai tenporalak baino ez du laguntzen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mn>0</mn></mrow></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mi>ε</mi><msup><mi>F</mi><mrow><mi>μ</mi><mn>0</mn></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "zeinak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mi>E</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "erreproduzitzen duen. Bigarren erlazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du. Beraz, Minkowski-ren formulek zuzen laburtzen dituzte erlazio konstitutibo arruntak materialaren sistema propioan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Higitzen den euskarri baterako ekuazio lagungarriak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mi>γ</mi></math> faktore komuna bi aldeetan bertan behera geratzen da. Osagai tenporalek bi erlazio eskalar ematen dituzte:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagai espazialek bi erlazio bektorial ematen dituzte:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>−</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lau ekuazio hauek dira tarteko forma garbia: geldialdiko erlazioak eta euskarriaren higidurak eragindako akoplamendu guztiak biltzen dituzte."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "D-rako soluzioa"
    },
    {
     "mota": "testua",
     "html": "Euskarriaren argi-abiadura propioa sartzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>m</mi></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>ε</mi><mi>μ</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>H</mi></math>-ren ekuazioa erabiltzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazioan ordezkatzen dugu. Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mi>μ</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi>μ</mi><msup><mi>c</mi><mn>4</mn></msup></mrow></mfrac><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau aplikatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>A</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>D</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mi>ε</mi><mi>E</mi><mo>⋅</mo><mi>u</mi></mrow></math> ere erabiliz, hau argitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "H-rako soluzioa"
    },
    {
     "mota": "testua",
     "html": "Modu simetrikoan, hau erabiltzen dugu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>H</mi></math>-ren ekuazioan. Hirukoitz-biderkaduraren identitate bera aplikatu eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi><mo>⋅</mo><mi>u</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "erabili ondoren, hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "testua",
     "html": "Higitzen den euskarri lineal baten erlazio konstitutiboak, beraz, hauek dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> bada, bi adierazpenak berehala itzultzen dira"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mi>E</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "izatera, espero bezala."
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Griffiths 12.69",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili Larmor-en formula eta erlatibitate berezia, karga azeleratu batek erlatibistikoki erradiatzen duen potentziaren Lienard-en formula eratortzeko."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Abiapuntua: uneko geldialdia"
    },
    {
     "mota": "testua",
     "html": "Kargarekin uneko-komobil den sisteman, abiadura arrunta zero da eta Larmor-en formulak hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msubsup><mi>a</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> da sistema instantaneo horretan neurtutako azelerazio arrunta."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msubsup><mi>a</mi><mn>0</mn><mn>2</mn></msubsup></math> ordezkatzen duen kantitate erlatibista 4-azelerazioaren karratua da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uneko geldialdiaren sisteman,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortaz, kapituluan erabilitako zeinu-konbentzioarekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msubsup><mi>a</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, potentziaren orokortze kobariante naturala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lorentz-en eskalar baten bidez adierazten denez, potentzia hau edozein sistematan ebalua daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "4-azelerazioa v eta a-ren funtzioan"
    },
    {
     "mota": "testua",
     "html": "Izan bedi"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta izan bedi <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>d</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math> laborategiko azelerazio arrunta."
    },
    {
     "mota": "testua",
     "html": "4-abiadura hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denbora propioarekiko deribatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau ere behar dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>γ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>3</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "4-azelerazioaren osagai tenporala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mn>0</mn></msup><mo>=</mo><mi>γ</mi><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zati espaziala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜶</mi><mo>=</mo><mi>γ</mi><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>a</mi><mo>+</mo><msup><mi>γ</mi><mn>4</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>v</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Karratu aldaezina"
    },
    {
     "mota": "testua",
     "html": "4-azelerazioaren modulu espazialerako zeinu positiboko konbentzioarekin,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝜶</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ordezkatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝜶</mi><mn>2</mn></msup><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>γ</mi><mn>8</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>γ</mi><mn>8</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma hau jada zuzena da, baina Lienard-en formula normalean <math display=\"inline\"><mrow><mi>v</mi><mo>×</mo><mi>a</mi></mrow></math> bidez idazten da. Hau erabiltzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>v</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau bat dator honekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Emaitza"
    },
    {
     "mota": "testua",
     "html": "Aldaezina potentziaren formula kobariantean ordezkatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hau da Lienard-en formula."
    },
    {
     "mota": "testua",
     "html": "Muga ez-erlatibistan, <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></math> gaia desagertzen da, hortaz berehala berreskuratzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>→</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Larmor-en formula."
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Griffiths 12.70",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Abraham-Lorentz-en formularen orokortze erlatibista zuzenenak forma hau hartzen du:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><msup><mi>α</mi><mi>μ</mi></msup></math> 4-azelerazioa baita. Erakutsi behar da adierazpen hori ezin dela Minkowski-indar onargarri bat izan, eta ondoren aurkitu behar da izaera kobariantea gordetzen duen eta muga ez-erlatibista aldatzen ez duen zuzenketa-gai bat."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Minkowski-indar baterako baldintza"
    },
    {
     "mota": "testua",
     "html": "4-abiadura honela idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mfrac><mrow><mi>d</mi><msup><mi>x</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta betetzen du"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Denbora propioarekiko deribatuz, hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, 4-azelerazioa 4-abiadurarekiko elkarzuta da."
    },
    {
     "mota": "testua",
     "html": "Masa propio konstanteko partikula baterako Minkowski-indar fisiko batek baldintza analogoa bete behar du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hau da saihestu ezin den froga: ez da nahikoa adierazpen bat 4-bektorea izatea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Proposamen inozoaren hutsegitea"
    },
    {
     "mota": "testua",
     "html": "Proposamen zuzena hartzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan izanik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "biderkadura eskalar osoa deribatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>α</mi><mi>μ</mi></msub></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo>+</mo><msub><mi>α</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Baina"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><msup><mi>α</mi><mi>μ</mi></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortaz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>α</mi><mi>μ</mi></msub></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo>+</mo><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta beraz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Proposatutako indarra 4-abiadurarekin kontraatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orokorrean <math display=\"inline\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>≠</mo><mn>0</mn></mrow></math> denez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Adierazpena kobariantea da, baina ez da Minkowski-indar posiblea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zuzenketa-gaia"
    },
    {
     "mota": "testua",
     "html": "4-abiadurarekiko proportzionala den zuzenketa bat bilatzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mi>λ</mi><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beharrezko baldintza ezartzen dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mi>λ</mi><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aurreko identitateak erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>−</mi><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>+</mo><mi>λ</mi><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ondorioz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zuzendutako indar erradiatiboa hau da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Orain kontrakzioa zehazki ezeztatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup><mo>+</mo><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muga ez-erlatibista"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> denean, <math display=\"inline\"><mrow><mi>d</mi><mi>τ</mi><mo>≈</mo><mi>d</mi><mi>t</mi></mrow></math> da eta lehen ekarpenaren zati espaziala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>α</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zuzenketa-gai espaziala hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta gai nagusiaren aurrean <math display=\"inline\"><mfrac><mi>v</mi><mi>c</mi></mfrac></math> faktoreaz kamustuta geratzen da. Horregatik indarraren zati espaziala honetara laburtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mtext mathvariant=\"normal\">rad</mtext></msub><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, Abraham-Lorentz-en formula arrunta."
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Griffiths 12.71",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zabaldu elektrodinamikaren formulazio erlatibista, karga elektrikoaz gain karga magnetikoa ere onartzeko. Idatzi Maxwell-en ekuazio kobarianteak bi iturriekin, eta <math display=\"inline\"><msub><mi>q</mi><mi>e</mi></msub></math> eta <math display=\"inline\"><msub><mi>q</mi><mi>m</mi></msub></math> karga dituen partikula batentzako indar-lege erlatibista."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lau osagaiko korronteak"
    },
    {
     "mota": "testua",
     "html": "Korronte elektrikoa lehen bezala definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>e</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>e</mi></msub><mo>,</mo><msub><mi>J</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Iturri magnetikorako, guztiz paraleloki, hau sartzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>m</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>m</mi></msub><mo>,</mo><msub><mi>J</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen <math display=\"inline\"><msub><mi>ρ</mi><mi>e</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mi>e</mi></msub></math> dira dentsitate eta korronte elektrikoak, eta <math display=\"inline\"><msub><mi>ρ</mi><mi>m</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mi>m</mi></msub></math> dira dentsitate eta korronte magnetikoak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio kobarianteak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> tentsore elektromagnetikoarekin eta bere <math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> tentsore dualarekin, funtsezko legeak honela idazten dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>J</mi><mi>e</mi><mi>μ</mi></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mfrac><msubsup><mi>J</mi><mi>m</mi><mi>μ</mi></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen ekuazioak iturri elektrikoarekiko ohiko ekuazioak erreproduzitzen ditu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>E</mi><mo>=</mo><mfrac><msub><mi>ρ</mi><mi>e</mi></msub><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>J</mi><mi>e</mi></msub><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarrenak iturri magnetikoak sartzen ditu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ρ</mi><mi>m</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>E</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>J</mi><mi>m</mi></msub><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrela lortzen da Maxwell-en bertsio kobariantea karga magnetikoarekin, eskuliburuko zeinu-konbentzio berean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lorentz-en indar orokortua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>q</mi><mi>e</mi></msub></math> karga elektrikoa eta <math display=\"inline\"><msub><mi>q</mi><mi>m</mi></msub></math> karga magnetikoa duen partikula baterako Minkowski-indarra honela idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>e</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>+</mo><mfrac><msub><mi>q</mi><mi>m</mi></msub><mi>c</mi></mfrac><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>η</mi><mi>ν</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio horren zati espazialak indar arrunta ematen du, dagokion faktore erlatibistaz biderkatuta. Faktore hori zatituz, hau lortzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mi>m</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen blokea karga elektriko baten gaineko ohiko Lorentz-en indarra da. Bigarrena bere analogo magnetikoa da: karga magnetiko batek zuzenean sumatzen du <math display=\"inline\"><mi>B</mi></math>, eta higitzen bada, baita <math display=\"inline\"><mi>E</mi></math>-rekiko gai gurutzatua ere."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koherentzia-egiaztapena"
    },
    {
     "mota": "testua",
     "html": "Iturri magnetikorik ez badago, orduan <math display=\"inline\"><mrow><msub><mi>ρ</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>J</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, hortaz bigarren ekuazio tentsoriala bi ekuazio homogeneo arrunteetara laburtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainera <math display=\"inline\"><mrow><msub><mi>q</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math> bada, indarra honela geratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, Lorentz-en lege arrunta. Beraz, orokortzeak aurreko formalismoa kasu partikular gisa gordetzen du."
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Ariketa proposatuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ondorengoak Griffiths-en 12. kapituluko problema ebatzigabeak dira, irakurleak lantzeko; enuntziatuak liburuaren 3. edizioko argazkietatik hartu dira, euskaratuta."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.6)</strong> Bi urtean behin, gutxi gorabehera, prentsan agertzen da argia baino azkarrago higitzen omen den objektu bat aurkitu duela astronomo batek. Askotan, <strong>ikusten</strong> dena eta <strong>behatzen</strong> dena bereizteko hutsegitetik dator hori — hau da, argiaren ibilbide-denbora ez zuzentzetik. Adibidez: izar bat <math display=\"inline\"><mi>v</mi></math> abiaduraz higitzen da, ikus-lerroarekiko <math display=\"inline\"><mi>θ</mi></math> angeluan. Zein da haren <strong>itxurazko</strong> abiadura zeruan zehar? Aurkitu itxurazko abiadura maximoa ematen duen angelua, eta erakutsi <math display=\"inline\"><mrow><mi>v</mi><mo>&lt;</mo><mi>c</mi></mrow></math> izanik ere itxurazko abiadura <math display=\"inline\"><mi>c</mi></math> baino askoz handiagoa izan daitekeela."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.9)</strong> Lincoln Continental bat VW Beetle bat baino bi aldiz luzeagoa da, biak geldirik daudenean. Continental-ak VW-a aurreratzen duen bitartean, abiadura-kontrol batetik igarotzean, polizia geldi batek biek luzera bera dutela behatzen du. VW-a argiaren abiaduraren erdian doa. Zein abiaduraz doa Lincoln-a? (Eman erantzuna <math display=\"inline\"><mi>c</mi></math>-ren multiplo gisa.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.10)</strong> Belaontzi bat halako moduz eraikita dago non masta bizkarrarekiko <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">¯</mo></mover></math> angeluan makurtzen den. Kaian dagoen behatzaile batek ontzia <math display=\"inline\"><mi>v</mi></math> abiaduraz igarotzen ikusten du. Zein angelu neurtzen dio behatzaileak mastari?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Kapitulu honek elektrodinamikaren oinarri erlatibista garatzen du — erlatibitate bereziaren postulatuak eta geometria, mekanika erlatibista, magnetismoa elektrostatikaren ondorio erlatibista gisa eta eremuen transformazio-legeak — CeTZ marrazki originalak erabiliz, JAKINArako euskaratua, hamabi kapituluko segidaren erreprodukzioa itxiz. </em>"
    },
    {
     "mota": "modulua",
     "kodea": "M24",
     "izenburua": "Optika fisikoa",
     "maila": "L2"
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M23 — Uhin elektromagnetikoak (Griffiths 9)"
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "MASTERFISMOtex.pdf",
     "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; 7. atala (uhinen ekuazioa, interferentzia, Young)",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a69",
   "maila": 1,
   "izenburua": "Uhinen ekuazioa, interferentzia eta Young-en esperimentua",
   "blokeak": []
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "1. Uhinen ekuazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin bat ingurune bateko perturbazio gisa deskribatzeko forma orokorra hartuko dugu. Hura deskribatzen duen ekuazioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzioa denbora eta posizioa aldagai dituen funtzio bat da (<math display=\"inline\"><mi>y</mi></math>-k presioa, eremu elektrikoa eta abar ere adieraz ditzake), eta honela adieraz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>v</mi></math> abiadura bat da, ingurunearen araberako konstante bat. Adibide batzuk:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soinurako: </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>B</mi><mi>ρ</mi></mfrac></msqrt></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soka baterako: </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>λ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea.</strong> Funtzio honen kasuan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "uhinen ekuazioa betetzen dela egiaztatzen da. Deribatuak kalkulatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>v</mi><mi>x</mi><mi>t</mi><mo>−</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>v</mi><mi>x</mi><mi>t</mi><mo>−</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "beraz, <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, behar bezala."
    },
    {
     "mota": "irudia",
     "oina": "Pultsu baten desplazamendua: <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>  <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean, eta <math display=\"inline\"><mi>v</mi></math>\n  distantziaz desplazatuta, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math>  <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math> unean.",
     "src": "media/irudiak/ae2e448b31f5c321.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "Ikusten da uhinaren forma berdina dela <math display=\"inline\"><mi>t</mi></math>-ren bi balioetarako: uhina <math display=\"inline\"><mi>v</mi></math> abiaduraz desplazatzen da, balio maximoen arteko distantziaren arabera. Abiaduraren, uhin-luzeraren eta periodoaren arteko erlazioa hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>λ</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Soluzio posible guztien artean bereziki interesatzen zaizkigu funtzio harmonikoak. Haien forma hau da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mi>ϕ</mi></math> desfasea den. <math display=\"inline\"><mi>k</mi></math> uhin-zenbakia da: uhin batek distantzia-unitate batean zenbat aldiz bibratzen duen adierazten du. Metroko radianak erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortik <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>k</mi><mi>T</mi></mrow></mfrac></mrow></math>, eta <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>k</mi><mi>v</mi></mrow></mfrac></mrow></math> deituz; <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math> denez, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> lortzen da, eta beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>±</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "2. Interferentzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Gainjartzearen printzipioaren arabera, interferentzia bi uhinen ekuazioen batura gisa kalkula daiteke. Kasu honetan, uhinen ekuazioa honela idatz daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa bi funtzioen batura da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Youngek 1801ean egindako bi zirrikituen esperimentua aztertzeko (argiaren izaera ondulatorioaren behin betiko frogatzat hartu zena), nozio hauek garatuko ditugu. <math display=\"inline\"><mi>P</mi></math> puntu batean bi uhin iristen dira, <math display=\"inline\"><mi>d</mi></math> distantziaz banatutako bi zirrikitutatik datozenak; zirrikituak, aldi berean, <math display=\"inline\"><mi>P</mi></math> dagoen pantailatik <math display=\"inline\"><mi>D</mi></math> distantziara daude."
    },
    {
     "mota": "irudia",
     "oina": "Young-en esperimentuaren eskema: bi zirrikitu <math display=\"inline\"><mi>d</mi></math> distantziaz banatuta,\n  pantaila <math display=\"inline\"><mi>D</mi></math> distantziara, eta <math display=\"inline\"><mi>P</mi></math> puntura iristen diren <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>\n  bideak.",
     "src": "media/irudiak/d24d91354ca58d74.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "Identitate trigonometriko hau erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>B</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mi>ω</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Intentsitatea funtzioaren karratuarekiko proportzionala da; denborarekiko menpekotasuna alde batera utzi eta kosinua maximoa den kasuetan zentratuko gara:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>=</mo><mi>n</mi><mi>π</mi><mo>⇒</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>λ</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hortik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Prozedura berarekin frogatzen da minimoei hau dagokiela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hala ere, erabilgarriagoa da maximo eta minimo horiek zirrikituen erdiko posizioaren eta <math display=\"inline\"><mi>P</mi></math> puntuaren posizioaren arteko angeluarekin erlazionatzea. Horretarako, zirrikituen arteko distantzia zirrikituen eta pantailaren arteko distantzia baino askoz txikiagoa dela hartuko dugu; horrela, uhinen ibilbideak paralelotzat har ditzakegu, eta posizioen kenketa bilatzen dugun angelua duen triangelu baten alde batekin erlazionatu."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>D</mi><mo>≫</mo><mi>d</mi></mrow></math> denean, <math display=\"inline\"><mi>P</mi></math> punturantz doazen bi izpiak gutxi gorabehera\n  paraleloak dira eta <math display=\"inline\"><mi>θ</mi></math> angelua osatzen dute zirrikituen lerroarekin;\n  bide optikoaren diferentzia <math display=\"inline\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> da.",
     "src": "media/irudiak/5fc8e2a5f4ec0b5a.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Horrela, maximoak hauek izango dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta minimoak hauek:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "3. Pultsuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Pultsuak aztertzeko ia berdinak diren bi uhinetatik abiatuko gara (diferentzial batean baino ez dira bereizten):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo>+</mo><mi>d</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Identitate trigonometrikoa berriz erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi><mo>−</mo><mi>d</mi><mi>ω</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mo>+</mo><mi>d</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Funtzioa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> unean hartzen badugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, alde batetik, jatorrizkoaren antzeko funtzio bat dugu, baina haren anplitudea aldatzen duen kosinu batez biderkatuta; horren ondorioz, anplitudearen maximo berri bat sortzen da, bestelako periodo batekin. Anplitudearen aldaketari lotutako <math display=\"inline\"><mi>k</mi></math> zein den hartuko dugu (<math display=\"inline\"><msub><mi>k</mi><mi>g</mi></msub></math>), eta periodo berriarekin erlazionatuko dugu."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>k</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>λ</mi><mi>g</mi></msub></mfrac><mo>⇒</mo><msub><mi>λ</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uhin baten talde-abiadura da uhinaren anplitudearen formako aldaketak (modulazio edo inguratzaile ere deituak) espazioan hedatzen diren abiadura. Uhinaren abiadura fase-abiadura gisa definitzen badugu,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "talde-abiadura honela definitzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hau da, <math display=\"inline\"><mi>ω</mi></math>-ren deribatua <math display=\"inline\"><mi>k</mi></math>-rekiko."
    },
    {
     "mota": "testua",
     "html": "Bestalde, bi uhinen baturarako funtzio harmoniko konplexua honela adierazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><msub><mi>δ</mi><mn>1</mn></msub></msup><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><msub><mi>δ</mi><mn>2</mn></msub></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Erreprodukzio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu hau erabiltzailearen ohar propioetatik dator zuzenean (MASTERFISMOtex.pdf), ez liburu argitaratu batetik. Kalkulu-katea originalean gehienetan &quot;<math display=\"inline\"><mo>⇒</mo></math>&quot; bidez kateatuta dago; hemen argitasunerako testu laburrak tartekatu dira noizbehinka, emaitza matematikoa aldatu gabe."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "fismoderna_analizaryextraer",
     "xehetasuna": "Mikel Aguirre, erabiltzailearena %100; interferentzia anitza, sareta bidezko difrakzioa eta X izpien difrakzioa kristaletan",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a73",
   "maila": 1,
   "izenburua": "Iturri askoren interferentzia eta sareta bidezko difrakzioa",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek erabiltzailearen (Mikel Aguirre) jatorrizko euskerazko apunteak erreproduzitzen ditu, iturri askoren interferentziari eta sareta bidezko difrakzioari buruz. Ez da hirugarrenen liburu bat — gainerako MASTERFISMOtex-eko edukiaren askatasun berarekin erreproduzitzen da."
      }
     ]
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Uhinen gainezarmenaren intentsitatea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Uhin baten intentsitatea haren anplitudearen karratuaren proportzionala da, <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>. Kontsidera ditzagun puntu batean gainezarritako maiztasun bereko bi uhin harmoniko,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bakoitzak, bere aldetik, <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>∝</mo><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>∝</mo><msubsup><mi>A</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math> intentsitatea izango luke. Biak batera daudenean, emaitzako intentsitatea baturaren anplitudearen karratuaren proportzionala da, eta —interferentzia-kapituluan bi uhin batzeko erabili genuen identitate trigonometrikoaren bidez bezala— hau ateratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msqrt><mrow><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Kasu mugatzaileak.</strong>  <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>2</mn></msub></mrow></math> bada (uhinak fasean), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>I</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>I</mi><mn>2</mn></msub></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, eta gainera <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>  bada: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>  (uhin bakar baten laukoitza — interferentzia eraikitzailea). <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub></mrow></math> bada (fase-aurkakotasunean), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>I</mi><mn>1</mn></msub></msqrt><mo>−</mo><msqrt><msub><mi>I</mi><mn>2</mn></msub></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>  bada: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>  (interferentzia deuseztatzaile osoa)."
    },
    {
     "mota": "testua",
     "html": "Efektu horiek esperimentalki behatzeko gutxienez bi iturri behar dira, haien artean fase-erlazio finko batekin —aurreko kapituluko Youngen bi rendijak bezala, baina orain iturri bi baino gehiagora orokortuz."
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "Sareta baten interferentzia-maximoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hainbat iturri puntualek (edo rendijak) fasean igortzen dutenean, bakoitzak uhin-frontea zirkular bat sortzen du; pantaila urrun batean, frontea horiek elkarren gainean jarri eta maximo eta minimo sail bat sortzen dute."
    },
    {
     "mota": "irudia",
     "oina": "Maximoen norabidea aurkitzeko geometria: <math display=\"inline\"><mi>d</mi></math> banaketako rendijetatik <math display=\"inline\"><mi>P</mi></math> puntu urrunerainoko <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> bide biak, <math display=\"inline\"><mi>θ</mi></math> norabidean.",
     "src": "media/irudiak/3633c8a90164663b.svg",
     "zabalera": 369
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math>-n maximo bat egoteko, iturri hurbilenetatik datozen uhinen arteko bide optikoaren diferentziak uhin-luzera kopuru oso bat izan behar du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eta (<math display=\"inline\"><mi>P</mi></math> nahikoa urruti dagoenean) diferentzia hori, geometrikoki, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>  denez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mi>λ</mi></mrow><mi>d</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>d</mi></math> banaketako iturri-sareta baterako maximo-baldintza da (bi rendijetarako lortu genuen formula bera, orain banaketa berdineko edozein iturri-kopurutara orokortuta: zenbat eta iturri gehiago, hainbat eta estuago eta zehatzago maximoak)."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>λ</mi></math> eta <math display=\"inline\"><mi>d</mi></math>-ren arteko baldintza.</strong>  <math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn></mrow></math> dituzten maximoak existitzeko <math display=\"inline\"><mrow><mi>λ</mi><mo>≤</mo><mi>d</mi></mrow></math> behar da (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>-ek horretara behartzen du). <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>d</mi></mrow></math> bada ez dago maximorik zentralaz gain. <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>d</mi></mrow></math> bada maximoak oso elkarren ondoan agertzen dira. Kasu interesgarria —franja ondo bereiziak eta behagarriak— <math display=\"inline\"><mi>λ</mi></math> eta <math display=\"inline\"><mi>d</mi></math> magnitude-ordena berekoak direnean gertatzen da."
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Saretatik kristalera: zergatik behar diren X izpiak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko arrazoiketak ez du iturriak lerro batean jarrita egotea eskatzen. Difrakzio-sareta bat rendijen array <strong>unidimentsional</strong> periodiko bat da; puntuen sare bidimentsional batek (malla batek) berdin difraktatzen du, aldi berean bi norabidetan; eta kristal batek —solido baten atomoak, espazioaren hiru norabideetan periodikoki jarrita— sakabanatzaile-zentroen sare <strong>tridimentsionala</strong> osatzen du, eta printzipio geometriko berari jarraituz difraktatzen du, orain hiru dimentsiotan."
    },
    {
     "mota": "oharra",
     "titulua": "Irudia falta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "1, 2 eta 3 dimentsioetako difrakzio-sareten konparaketa eskematikoa: rendija paraleloen sareta, puntuen malla laua, eta solido bateko atomoen sare kubikoa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Difrakzioa behagarria izateko, <math display=\"inline\"><mi>λ</mi></math> eta sarearen <math display=\"inline\"><mi>d</mi></math> banaketa magnitude-ordena berekoak izan behar dute (ez <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>d</mi></mrow></math> ez <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>d</mi></mrow></math>). Solido kristalino batean, atomo hurbilen arteko distantzia <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>1</mn></mrow></math> Å-koa da. Beraz, kristal batean difrakzioa behatzeko <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>1</mn></mrow></math> Å-ko argia behar da — eta hori da, hain zuzen, <strong>X izpien</strong> uhin-luzera tipikoa. Horregatik da X izpien difrakzioa (eta ez argi ikusgaiarena, <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>5000</mn></mrow></math> Å, mila aldiz luzeagoa) kristalen barne-egitura esperimentalki zehazteko tresna: sareta baten interferentzia-fenomeno bera da, hain zuzen, solido baten sare atomiko tridimentsionalari aplikatuta."
    },
    {
     "mota": "hutsunea",
     "izenburua": "Optika fisikoa: difrakzio-eredua (Fraunhofer) eta polarizazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Uhin-ekuazioa, interferentzia (Young) eta sareta bidezko difrakzioa (maximoen kokapena, kristaletara arteko lotura) badaude gainean. Rendija bakarraren difrakzio-eredua (Fraunhofer, intentsitatearen banaketa zehatza) eta polarizazioa oraindik idazteke daude."
      }
     ]
    }
   ]
  }
 ]
};
