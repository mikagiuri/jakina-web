/* JAKINA · kapitulua «B6.4 - Serieen bidezko ebazpena eta metodo hurbilduak (6.-7. gaiak)» (03mm_02serieak), desde edicion2/kapituluak/03mm_02serieak/03mm_02serieak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_02serieak"] = {
 "gakoa": "03mm_02serieak",
 "titulua": "JAKINA - B6 - Metodo matematikoak - 4/9",
 "azala": "B6.4 - Serieen bidezko ebazpena eta metodo hurbilduak (6.-7. gaiak)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/03mm_02serieak/03mm_02serieak.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "edf_eus",
   "xehetasuna": "6.–7. kapituluak (serieak, metodo hurbilduak)",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ekuazio linealen serie bidezko ebazpena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-epigrafea\"><em>Eromena bada ere, bada metodoa.</em><br><span class=\"j-smallcaps\">William Shakespeare</span></span>"
    },
    {
     "mota": "testua",
     "html": "Fisikako problema kopuru handi bat aztertzean, uneren batean bigarren ordenako ekuazio lineal bat ebazteko —edo haren soluzioen propietateak aztertzeko— beharra sortzen da. 3. kapituluan ikusi genuen bezala, zailtasunik handiena homogeneoaren soluzio partikular bat aurkitzean datza, hartatik abiatuta homogeneoaren eta osoaren soluzio orokorrak koadraturen bidez idatz baitaitezke. Han saia daitezkeen zenbait aldagai-aldaketa ikusi genituen, baina ez da espero behar beti funtzionatzea, ezta gutxiago ere soluzioa funtzio elementalen bidez idatz daitekeenik. Izan ere, bigarren ordenako ekuazio lineal homogeneoek askotan funtzio bereziak definitzen dituzte. Kapitulu honetan ikusiko dugu nola aurki daitezkeen bigarren ordenako ekuazio homogeneoen soluzioak berreduren serieen bidez, zeinen batura askotan funtzio berezi bat baita."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Berreduren serieen errepasoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Erosotasunagatik, frogapenik gabe biltzen ditugu berreduren serieen propietate ezagunak. <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> berreduren seriea emanda, limitea <math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo></mrow></math> existitzen bada edo <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math> bada, haren balioa seriearen <strong>konbergentzia-erradioa</strong> da, eta hala seriea absolutuki eta uniformeki konbergitzen du <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math>-n eta dibergitzen du <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mi>ρ</mi></mrow></math> kasurako. <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> bada seriea ez da inongo puntutan konbergitzen, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n izan ezik agian, eta <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>+</mi><mi>∞</mi></mrow></math> bada nonahi konbergitzen du."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eman al dezakezu konbergentzia-erradioa kalkulatzeko beste adierazpenen bat?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Izan bitez bi serie <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako konbergitzen dutenak (<math display=\"inline\"><mi>ρ</mi></math> haien konbergentzia-erradioen minimotzat aukera dezakegu). Orduan, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math>  kasurako:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Bi serieen <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> eta <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> koefizienteen <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> koefiziente konstanteetako konbinazio linealen bidez eraikitako serie oro baturen dagokion konbinaziora konbergitzen du: <math display=\"block\"><mrow><mi>α</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>β</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mi>β</mi><msub><mi>b</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math> Bereziki, serieak gaiz gai batu eta ken daitezke."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Serieen biderkadura formala baturen biderkadurara konbergitzen du: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mi>k</mi></msub><msub><mi>b</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zatiduraren seriea ere kalkula daiteke, <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math> bada, baina koefizienteen kalkulua ez da hain sinplea eta ondoriozko serieak <math display=\"inline\"><mi>ρ</mi></math> baino konbergentzia-erradio txikiagoa izan dezake."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Seriea mugagabeki deribagarria da <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ρ</mi></mrow></math>-n eta haren deribatuak serieak gaiz gai deribatuz kalkula daitezke: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Gainera, seriearen koefizienteak hauek dira <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta, beraz, seriea bere Taylor-en serie propioa da: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Bi serie berdinak dira <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldin eta soilik baldin berredura berdinen koefizienteak bat badatoz: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>b</mi><mi>n</mi></msub></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Gogora dezagun ere <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>-ren inguruan analitikoa dela eta, berrikusi berri ditugun propietateen ondorioz, <math display=\"inline\"><mi>f</mi></math> eta <math display=\"inline\"><mi>g</mi></math>  <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-ren inguruan analitikoak badira, <math display=\"inline\"><mrow><mi>α</mi><mi>f</mi><mo>+</mo><mi>β</mi><mi>g</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>g</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mi>/</mi><mi>g</mi></mrow></math> ere badirela (azken kasuan, <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math> den heinean). Agerikoa denez, polinomioak edozein punturen inguruan analitikoak dira, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> diren bezala. Aitzitik, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi></msup></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren Taylor-en serieen konbergentzia-erradioak jatorriaren inguruan finituak dira (<math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>). (Irakurleak gai izan beharko luke funtzio elemental hauen guztien berreduren serieak zalantzarik gabe idazteko eta ezagutzeko.)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu hurrengo berreduren serieen konbergentzia-erradioa eta batura: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>−</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>6</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>⋯</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>16</mn></mfrac><msup><mi>x</mi><mn>8</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><msup><mi>x</mi><mn>10</mn></msup><mo>+</mo><mi>⋯</mi></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Serie bidezko soluzioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kapituluaren gainerakoan ekuazioaren <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> soluzioak berreduren serie arrunt baten forman aurkitzeko problema hartuko dugu kontuan, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mrow></math> edo <strong>Frobenius-en serie</strong><span class=\"j-oin\">[<strong>Ferdinand Georg Frobenius</strong> (1849-10-26, Berlin, Prusia; 1917-08-03, Berlin). Weierstrassen ikasle hau, funtzio eliptikoei eta ekuazio diferentzialei buruzko lanez gain, taldeen teoriari egindako ekarpen garrantzitsuengatik gogoratzen da, talde finituen errepresentazioen teoria barne, zeinak gero zeregin garrantzitsua jokatu baitzuen mekanika kuantikoan.]</span> baten forman <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntu jakin baten inguruan, zeina definizioz berreduren serie baten eta <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math> berredura baten biderkadura baita, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> zeinaren <math display=\"inline\"><mi>λ</mi></math> esponenteari <strong>indize</strong> deitzen baitzaio eta konplexua edo erreala, osoa edo ez, positiboa, negatiboa edo nulua izan baitaiteke<span class=\"j-oin\">[Soluzio errealak nahi baditugu eta <math display=\"inline\"><mi>λ</mi></math> ez bada osoa, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math>  <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>λ</mi></msup></math>-z ordezkatu beharko da.]</span>. <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></msup></math> faktorearen sarrera (3.185) bezalako Cauchy-Euler ekuazioekin izandako esperientziak motibatzen du, zeinen <math display=\"inline\"><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></math> eta <math display=\"inline\"><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> soluzioek ez baitute Taylor-en serie-garapenik onartzen <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan, baina Frobenius-en serieak baitira (finituak, kasu sinple honetan). Erabili behar dugun serie mota erabakitzeko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> puntuaren izaera aztertu behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntu arruntak eta singularrak"
    },
    {
     "mota": "testua",
     "html": "Esango dugu soluzioa aurkitu nahi den <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> puntua <strong>puntu arrunt</strong> bat dela, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak (<math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math>-ren koefizientea unitate berdin jarrita (6.11)n bezala)  <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-ren inguruan analitikoak badira. Bestela, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>  <strong>puntu singular</strong> bat da. Puntua singularra bada baina funtzioak <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-ren inguruan analitikoak badira (hau da, <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math>-k gehienez ere lehen eta bigarren ordenako polo bana badituzte, hurrenez hurren) puntuari <strong>singular erregular</strong> deitzen zaio. Hau ere egia ez bada, <math display=\"inline\"><mi>P</mi></math> edo <math display=\"inline\"><mi>Q</mi></math>-k ordena altuagoko polo bat dutelako, puntua <strong>singular irregular</strong> da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sailkatu honen puntu singularrak <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Notazioa errazteko, beti suposatuko dugu <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan soluzio bat bilatzen dugula, lekualdaketa hutsal baten bidez lor daitekeena (edo, infinituko puntuaren inguruko garapenak interesatzen bazaizkigu, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi></mrow></math> aldagai askearen aldaketarekin)."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Puntu arruntak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kasu honetan (6.11) ekuazioaren <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> koefizienteak jatorriaren inguruan analitikoak dira eta, beraz, garapenak <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>P</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>Q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> konbergenteak dira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> egoki batekin. Har dezagun (6.12) seriea eta haren deribatuak: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> non bi indize-desplazamendu egin baitira, <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>n</mi><mo>+</mo><mn>2</mn></mrow></math>, serieak berriz <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-tik has daitezen lortzeko. Serie horiek (6.11) ekuazioan saiatzen badira eta (6.16) garapenak eta (6.3) propietatea kontuan hartzen badira honako hau lortzen da:"
    },
    {
     "mota": "testua",
     "html": "Q y &amp;= sum_(n=0)^infinity [sum_(k=0)^n Q_(n-k) c_k] x^n, <br>P y&#x27; &amp;= sum_(n=0)^infinity [sum_(k=0)^n (k+1) P_(n-k) c_(k+1)] x^n, <br>y&#x27;&#x27; &amp;= sum_(n=0)^infinity (n+2)(n+1) c_(n+2) x^n, <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math> Beraz, ekuazioa bete dadin, hurrengo baldintzak bete behar dira <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>  balioetarako: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta, ondorioz, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> konstanteak nahi bezala aukeratu ondoren, beste guztiak banan-banan kalkula daitezke azken adierazpena erabiliz. Izan ere, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><msub><mi>c</mi><mn>2</mn></msub><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow></math> jada ezagutzen baditugu, hurrengo koefizientea hau da <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>P</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>Q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Kontuan izan eskuineko gaian aurretik ezagunak diren koefizienteak soilik agertzen direla. Hemen frogatzen ez dugun arren (ikus, adibidez, [4]), era horretan eraikitako seriea konbergentea da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako eta, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> konstante arbitrarioak biltzen dituenez, (6.11) ekuazioaren soluzio orokorra da."
    },
    {
     "mota": "testua",
     "html": "Laburbilduz, jatorria puntu arrunta bada, soluzio orokorra (6.17) berreduren serie arruntaren forman adieraz daiteke, non <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> konstante arbitrarioak baitira eta gainerako koefizienteak (6.22) errekurrentziak ematen baititu. Seriea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> puntuetan konbergitzen du."
    },
    {
     "mota": "testua",
     "html": "Adibiderik sinpleena oszilatzaile harmonikoarena da, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, zeinetarako puntu guztiak arruntak baitira. Lortu berri ditugun adierazpenak erabil genitzake, baina aski da besterik gabe gogoratzea soluzioa (6.17) berreduren serie arrunt batek ematen duela. (6.17) eta (6.19) oszilatzailearen ekuazioan ordezkatuz <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>-ren koefizientea hau dela lortzen dugu <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Beraz, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> murrizketarik gabe aukera ditzakegu eta <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Errekurrentzia honetan <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> agertzen direnez, baina <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> falta denez, gai bikoitiak, <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math>, eta bakoitiak, <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>, modu naturalean banatzen dira eta dagozkien errekurrentziak erraz desegiten dira: <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>4</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> Balio hauek ordezkatuz espero genuen soluzioa lortzen dugu <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> serieak kosinuarena eta sinuarena baitira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu serie-metodoaren bidez honen soluzioa <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Egiaztatu emaitza 3.22 ariketako Liouvilleren eraldaketa erabiliz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hermiteren ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Oszilatzaile harmonikoaren Schrödingerren ekuazioa aztertzeko <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>ψ</mi><mo>=</mo><mi>E</mi><mi>ψ</mi><mo>,</mo></mrow></math> komeni da hurrengo aldagai adimentsionalak erabiltzea: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mfrac><mi>x</mi><msub><mi>x</mi><mn>0</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>ħ</mi><mrow><mi>m</mi><mi>ω</mi></mrow></mfrac></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mi>E</mi><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu aldagai hauekin oszilatzailearen ekuazioa honela idazten dela <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non notazioa erraztu baitugu <math display=\"inline\"><mi>x</mi></math>-ren gaineko tildea kenduz. Saiatu berreduren serie bat <math display=\"inline\"><mi>ψ</mi></math>-rako eta frogatu koefizienteek errekurrentzia bete behar dutela: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>ε</mi><msub><mi>c</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>ε</mi><msub><mi>c</mi><mi>n</mi></msub><mo>−</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Errekurrentzia hau, orain arte aurkitu ditugunen aldean, hiru puntukoa da, <math display=\"inline\"><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> koefizientea ez baitago bat baizik eta bi koefiziente aurrekoen menpe. Oro har, zailagoa da mota honetako errekurrentziak desegitea bi puntukoak direnak baino, nahiz eta 6.13 probleman erlatiboki erraz egin daitekeen kasu bat ikusiko dugun. Praktikan, hiru puntuko errekurrentziak agertzen dira, batzuetan, infinituko puntua <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> singular irregularra denean, kasu honetan bezala, eta infinituko portaera faktorizatuz gerta daiteke errekurrentzia berria bi puntukoa izatea. Adibide honetan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>-ren balio oso handietarako soluzioen portaera asintotikoa <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> motakoa da, hau ekuazioan ordezkatzen badugu lortzen baitugu <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>±</mo><mn>1</mn><mo>+</mo><mi>ε</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> eta gai nagusiak (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>±</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>-rekiko proportzionalak) ezeztatu egiten dira. Honek iradokitzen du soluzio gehienak <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> bezala portatuko direla (zeinak uhin-funtzio gisa onartezinak diren soluzioak ematen baititu, infinituan zerorantz jo behar baitute), baina egon daitezkeela <math display=\"inline\"><mrow><mi>ψ</mi><mo>∼</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> bezalakoak diren kasuak. Aukera hau zehatzago aztertzeko, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldaketa nabaria erabilgarria da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi></mrow></math> aldagai-aldaketa eginez eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mn>1</mn></mrow></math> parametro berria erabiliz, oszilatzaile harmoniko kuantikoaren ekuazioa Hermiteren ekuaziora<span class=\"j-oin\">[<strong>Charles Hermite</strong> (1822-12-24, Dieuze, Frantzia; 1901-01-14, Paris). Hari zor zaio <math display=\"inline\"><mi>e</mi></math> transzendentea delako lehen froga. Funtzio eliptikoetan eta bosgarren mailako ekuazioan ere lan egin zuen. Bere izena daramate ekuazio diferentzial batek, polinomio batzuek, interpolazio-metodo batek eta matrize mota batek. Hermiteren polinomioak eta matrize hermitikoak gero funtsezko garrantzia izan zuten mekanika kuantikoan.]</span> laburtzen dela: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> eta <math display=\"inline\"><mi>y</mi></math>-ren koefizienteak polinomikoak direnez, puntu guztiak (eta bereziki jatorria) arruntak dira. (6.17) berreduren seriea eta haren (6.18)–(6.19) deribatuak ordezkatzean eta <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>-ren koefizienteak berdintzean lortzen dugu <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><mn>2</mn><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><mi>λ</mi><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> Espero genuen bezala, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> baldintzarik gabe aukera daitezke eta gainerako koefizienteak honela ematen dira <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mi>.</mi></mrow></math> Berriz ere berredura bikoitiak eta bakoitiak banatzen dira eta lortzen da <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mfrac><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> zeina forma trinkoagoan idatz baitaiteke D.5 atalean deskribatutako Euler-en gamma funtzioa erabiliz, zeinarekin soluzioa hau dela lortzen baita <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>λ</mi><mn>4</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mn>4</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> 6.22 problemako eta D.10 ataleko Kummer-en funtzioen arabera."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>-ren balio handietarako gairik garrantzitsuenak <math display=\"inline\"><mi>n</mi></math>-ren balio altuei dagozkienak izango dira, zeinetarako (6.38) errekurrentziak <math display=\"block\"><mrow><msub><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>≈</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>c</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>→</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> zeinaren soluzioa indize bikoitietarako <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>/</mi><mi>k</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mi>/</mi><mi>k</mi><mi>!</mi></mrow></math> baita eta <math display=\"inline\"><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></math>-ri baitagokio."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu antzeko zerbait gertatzen dela koefiziente bakoitiekin <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> kasurako."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz, espero genuen bezala, soluzio gehienen portaera asintotikoa <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi><mo>∼</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> da, eta uhin-funtzioa, <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>y</mi></mrow></math>, infinituan diberji ez dadin eta karratu-batugarria izan dadin, goiko serieetako bat eteten denean eta bestearen <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> edo <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> koefizientea 0 berdin aukeratzen denean lortuko diren soluzio polinomikoak hartzera mugatu behar da. Ikusten dugu hori posible dela soilik honako kasuetan"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>6</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>,    <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "etc."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>λ</mi></math> parametroaren balio diskretuetarako soilik soluzio onargarriak existitzea oszilatzailearen energiaren kuantizazioaren arrazoi matematikoa da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>E</mi></math> energiaren zein baliori dagozkie Hermiteren ekuazioaren soluzio polinomikoak?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio polinomikoetako koefizienteak egoki aukeratuz, <strong>Hermiteren polinomioak</strong> lortzen dira, errekurrentzia-erlazioak ematen dituenak <math display=\"block\"><mrow><msub><mi>H</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>H</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> edo Rodrigues-en formulak<span class=\"j-oin\">[<strong>Olinde Rodrigues</strong> (1794-1851). Gizartearen antolaketa zientifikoan interesatuago zegoen bankari frantses honen matematikari egindako ekarpen garrantzitsu bakarra Legendreren polinomioetarako Rodrigues-en formula izan zen, nahiz eta luzapenez izen bera aplikatzen zaien antzeko formulei.]</span> D.12.2 atalekoak. Polinomio hauen beste propietate interesgarri batzuk aurki daitezke, adibidez, Abramowitz eta Stegun-en tauletan [35]."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Bessel-en ekuazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Simetria zilindrikoa duten problema fisikoetako deribatu partzialetako ekuazio diferentzial askotan aldagaiak banatu ondoren, Bessel-en ekuazioa<span class=\"j-oin\">[<strong>Friedrich Wilhelm Bessel</strong> (1784-07-22, Minden, Westfalia; 1846-03-17, Königsberg, Prusia, gaur egungo Errusiako Kaliningrad). Astronomiako behaketa-lanagatik (izar finko baten distantzia zehaztu zuen lehena izan zen eta Siriok lagun ilun bat zuela frogatu zuen) nahiz mekanika zerutiarrari egindako ekarpen teorikoengatik nabarmendu zen. Bere izena daramaten funtzioak sartu zituen —nahiz eta kasu partikularretan Jacob eta Daniel Bernoullik, Eulerrek eta Lagrangek aurretik erabili zituzten— hiru gorputzen problemaren azterketa perturbatiboan.]</span> agertzen da <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Demagun (6.17) berreduren seriea saiatzen dugula: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "&amp;quad sum_(n=2)^infinity [(n^2 - nu^2) c_n + c_(n-2)] x^n. <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioa bete dadin <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> berredura guztien koefizienteak ezeztatu behar dira: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math> Emaitza honen eztabaida sinplea da. Lehenik, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> arbitrarioa da, baina <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> aukeratu behar da eta soluzio bakar bat lortzen dugu. <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> denean, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> egin behar da eta <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> arbitrarioa da. Era berean, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>±</mi><mi>k</mi><mo>≡</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>±</mi><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> hartu behar da eta <math display=\"inline\"><msub><mi>c</mi><mi>k</mi></msub></math> arbitrarioa izango da. Beraz, <math display=\"inline\"><mi>ν</mi></math> osoa bada soluzio bat (eta ez bi) aurkitzen da berreduren serie bat saiatuz. Baina <math display=\"inline\"><mi>ν</mi></math> ez bada osoa, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><mn>0</mn></mrow></math> soluzio nulua soilik lortzen dugu. Ondorioz, berreduren serie bat saiatuz ez dugu soluziorik aurkituko kasu gehienetan."
    },
    {
     "mota": "testua",
     "html": "Berreduren seriearen metodoaren porrotaren arrazoia jatorria puntu arrunta ez baizik eta singular erregularra izatean datza. Beraz, Frobenius-en serie bat eta haren deribatuak saiatu behar dira: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Serie hauek erabiliz lortzen dugu <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>ν</mi><mn>2</mn></msup><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": []
    },
    {
     "mota": "testua",
     "html": "&amp;quad sum_(n=2)^infinity {[(lambda + n)^2 - nu^2] c_n + c_(n-2)} x^(lambda + n). <code class=\"formula-ez\"></code>"
    },
    {
     "mota": "testua",
     "html": "Ondorioz, soluzioaren <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>, <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></msup></math> eta <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></math>-ren koefizienteak, hurrenez hurren, hauek dira: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mtd></mtr></mtable></math> Baldintza hauetako lehena <strong>ekuazio indiziala</strong> da, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></math>, eta <strong>indizeak</strong> ematen dizkigu <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>ν</mi></mrow></math>, zeinak baitira Frobenius-en seriean Bessel-en ekuazioaren soluzioa ematen duten <math display=\"inline\"><mi>λ</mi></math>-ren balio bakarrak. Ekuazio indizial hau aurreko baldintzen bigarrenean ordezkatzen badugu, binomioaren karratua garatzean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> lortzen dugu, zeinak esaten baitigu <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Kontuan izan <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> kasuan <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> koefizientea arbitrarioa dela, beraz ezerk ez du eragozten nulu aukeratzea. Gainera, kasu bereziki sinple hau erabat ebatzi zen funtzio elementalen bidez 3.22 probleman eta berriz landuko da 6.5-ean. Azkenik, hirugarren baldintza hau da, <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> zeinak, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-rekin batera, koefiziente bakoiti guztiak nuluak direla esaten baitigu, <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, eta bikoitiek (D.53) erabiliz zailtasunik gabe ebazten den errekurrentzia bat betetzen dute: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>c</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>c</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><msup><mn>4</mn><mn>2</mn></msup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>⋯</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>4</mn><mi>k</mi></msup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>k</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msub></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msub><mi>c</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Emaitza hau <math display=\"inline\"><msup><mn>2</mn><mi>λ</mi></msup></math>-rekin biderkatuz eta zatituz eta (6.48)n txertatuz soluzioa lortzen dugu <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mn>2</mn><mi>λ</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>2</mn><mi>k</mi></mrow></msup><mo>,</mo></mrow></math> zeinak, batuketatik kanpoko koefiziente konstantea salbu, <strong><math display=\"inline\"><mi>λ</mi></math> ordenako lehen motako Bessel-en funtzioa</strong> definitzen baitu: <math display=\"block\"><mrow><msub><mi>J</mi><mi>λ</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>2</mn><mi>k</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Ordena osoko zenbait <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math> Bessel-en funtzio",
     "src": "media/irudiak/6caa11721715da12.svg",
     "zabalera": 316
    },
    {
     "mota": "testua",
     "html": "Ikusten dugu, beraz, <math display=\"inline\"><mi>ν</mi></math> ordenako Bessel-en ekuazioak <math display=\"inline\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> onartzen dituela soluziotzat. <math display=\"inline\"><mi>ν</mi></math> ordenako <strong>bigarren motako Bessel-en funtzioa</strong> —Newmann-en funtzio edo Weber-en funtzio ere deitua eta batzuetan <math display=\"inline\"><msub><mi>N</mi><mi>ν</mi></msub></math> gisa adierazia— koefiziente konstanteetako hurrengo konbinazio lineal gisa definitzen da: <math display=\"block\"><mrow><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> eta, ondorioz, ekuazioaren soluzioa da. Adibidez [15]-n ikus daitekeen bezala, <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math>-ren wronskiarra <math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> da, eta beraz bi kasu ditugu. <math display=\"inline\"><mi>ν</mi></math> ez bada osoa, soluzio orokorra <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mi>ν</mi></msub><mo>+</mo><mi>B</mi><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></mrow></math> gisa idatz daiteke, <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math> linealki independenteak baitira beren serieak <math display=\"inline\"><mi>x</mi></math>-ren berredura desberdinetan hasten direlako. Hala ere, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> bada, wronskiarra ezeztatzen da eta lehen motako bi funtzioak linealki mendekoak dira. Izan ere, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> denean indize bakar bat dugu (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>) eta, beraz, soluzio bakar bat (6.58)k emana. Gainera, (6.57)tik (6.58)ra pasatzean ezabatu dugun <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konstantea infinitua da <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mi>n</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>…</mi></mrow></math> balioetarako, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> denean, eta gainerako <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math> funtzioa <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math>-ren berdina edo aurkakoa da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> denean ere (6.58) adierazpena erabil daitekeela, erlazioa betetzen dela <math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta, beraz, (6.58) formulak definitutako <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math> funtzioa Bessel-en ekuazioaren soluzioa dela, nahiz eta <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math>-rekiko linealki independentea ez izan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu honetan ez dago Frobenius-en serie forman bi soluzio independente, eta aurrerago ikusiko dugu hau beti gertatzen dela indize bakar bat dagoenean (kasu honetan <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> denean) eta indizeen arteko diferentzia oso bat denean ere gerta daitekeela (hemen <math display=\"inline\"><mi>ν</mi></math> osoa bada gertatzen da, baina ez erdiosoa bada, nahiz eta orduan <math display=\"inline\"><mrow><mn>2</mn><mi>ν</mi></mrow></math> diferentzia osoa izan). Hurrengo ataletan problema hau kasu orokorrean nola landu daitekeen aztertuko dugu, baina Bessel-en ekuazioarekin hobe da hurrengo gertaera erabiltzea."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> eta <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math> beti linealki independenteak dira, <math display=\"inline\"><mi>ν</mi></math> osoa denean ere, kasu horretan honela definitzen direlarik <math display=\"block\"><mrow><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ν</mi><mo>→</mo><mi>n</mi></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Ondorioz, Bessel-en ekuazioaren soluzio orokorra <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msub><mi>J</mi><mi>ν</mi></msub><mo>+</mo><mi>D</mi><msub><mi>Y</mi><mi>ν</mi></msub></mrow></math> gisa idatz daiteke <math display=\"inline\"><mi>ν</mi></math> osoa zein ez osoa izan."
    },
    {
     "mota": "irudia",
     "oina": "Ordena osoko zenbait <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math> Bessel-en funtzio",
     "src": "media/irudiak/cb45bb7439ad0749.svg",
     "zabalera": 316
    },
    {
     "mota": "testua",
     "html": "Tauletan aurki daitezkeen Bessel-en funtzioen propietate askoren artean, errekurrentzia-erlazio erabilgarri batzuk 6.4 probleman frogatuko dira. Hemen seinalatzera mugatuko gara, definiziotik beretik edo 6.1 irudian ikus daitekeen bezala, <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>⋯</mi><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math>-ak jatorrian dibergitzen direla, 6.2 irudian ikusten den bezala. Hurrengo atalean ikusiko dugu hau askotan gertatzen dela indize txikiari dagokion soluzioarekin indizeen arteko diferentzia osoa denean, nahiz eta hura negatiboa ez izan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili atal honetako emaitzak eta D.12 ariketa 3.22 probleman aurkitu zen <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ordenako Bessel-en ekuazioaren funtzio elementalen bidezko soluzioa berreskuratzeko."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Frobenius-en metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Atal honetan jatorrira lekualdatu dugun puntu arrunt edo singular erregular baterako emaitza orokorra enuntziatu eta frogatzen dugu. Kalkulua erosoagoa da ekuazioa <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-rekin biderkatzen badugu eta (6.14) notazioa erabiltzen badugu: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Suposatuko dugu, halaber, jatorria puntu arrunt edo singular erregular bat dela, hau da, <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math>-k berreduren serie-garapenak onartzen dituztela <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako konbergenteak <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rekin."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu jatorria puntu arrunt bat izango dela baldin eta soilik baldin <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Enuntziatu berri ditugun hipotesiekin, Frobenius-en metodoa (6.64) ekuazioan Frobenius-en serie bat saiatzean datza <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> zeina konbergentea izango baita, gutxienez, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako. Kontuan izan ekuazioaren linealtasunak eta homogeneotasunak <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> arbitrarioa izatera daramatela, soluzioa existitzen bada."
    },
    {
     "mota": "testua",
     "html": "(6.67) seriea gaiz gai bi aldiz deribatzen badugu eta lehen eta bigarren deribatuak <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-rekin hurrenez hurren biderkatzen baditugu lortzen dugu <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> y, usando (6.3), (6.65) y (6.66), <math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Bi adierazpen hauek eta (6.69)  (6.64)n ordezkatzen baditugu eta berredura bakoitzaren koefizienteak berdintzen baditugu lortzen dugu, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> kasurako, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zeina, ekuazioaren <strong>funtzio indiziala</strong> sartuz <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>u</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>,</mo></mrow></math> forma egokiagoan idazten baita honela <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Kontuan izan orain batuketa <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>-n amaitzen dela.)"
    },
    {
     "mota": "testua",
     "html": "Berredurarik baxuenaren koefizientea azken adierazpenean <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> hartuz lortzen da, eta horrek <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ematen du. <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> denez —<math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> aukeratzea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> birdefinitzeari baitagokio— (6.67)  (6.64)ren soluzioa izan dadin, <strong>ekuazio indiziala</strong> bete behar da <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Ekuazio koadratiko honen bi erroak, <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, ekuazio diferentzialaren <strong>indizeak</strong> deitzen dira eta, gero aztertuko ditugun salbuespenekin, soluzio orokorra eraikitzeko behar ditugun bi soluzio linealki independenteei dagozkie. Prozedura argia dirudi: indize bakoitzeko <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> arbitrarioa da, <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> (6.74)tik <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-ekin askatuz kalkula daiteke, <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>c</mi><mn>0</mn></msub><mo>,</mo></mrow></math> eta gainerako koefizienteak era errekurrentean kalkula daitezke, <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> ezagututakoan, hurrengo koefizientea, <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>, honela ematen baita <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo>,</mo></mrow></math> zeinaren eskuineko gaia jada kalkulatutako koefizienteen menpe soilik baitago. Metodo honen hasierako oztopo bakarra (6.77) adierazpenaren izendatzailea <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math> jakin baterako ezeztatzeko aukera da, zeina soilik gerta baitaiteke <math display=\"inline\"><mrow><mi>λ</mi><mo>+</mo><mi>N</mi></mrow></math> beste indizea bada, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, hau da, bi indizeen arteko diferentzia oso bat bada <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. Bestalde, bi indizeak berdinak badira —hau da, indize bikoitz bakar bat badago— prozedurak soluzio bakar bat ematen du. Kasu hauek aurrerago landuko dira, indize handienak (edo zati erreal handienekoak, edo indize bakarrak) arazorik gabe soluzio bat emango duen arren, bigarrenak (6.67) motako serie batek deskribatzen ez duen gai logaritmiko bat izan baitezake."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Frobenius",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren puntu arrunt edo singular erregular bat <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mi>q</mi></math> funtzioek garapenak onartzen dituzten moduan, <math display=\"block\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> kasurako konbergenteak, <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-rekin. <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> ekuazio indizialaren bi erroak badira <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>N</mi><mo>≡</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-rekin (<math display=\"inline\"><mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">Re</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math> izanik), eta era errekurrentean funtzioak definitzen baditugu <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> orduan (6.78) ekuazioak bi soluzio ditu, <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math>-n linealki independenteak direnak. Lehena beti lor daiteke honela <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> eta bigarrena honako hau izan daiteke:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>N</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> bada, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math>",
        "<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> honekin <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>≡</mo><msub><mi>a</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>",
        "<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> bada, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> honekin <math display=\"block\"><mrow><mi>A</mi><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>≡</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>≡</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoremaren frogapena"
    },
    {
     "mota": "testua",
     "html": "Soluzioek aipatutako forma dutela frogatzea honako motako soluzio bat saiatzean datza <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> ekuazioan <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo>≡</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> zeinak, (6.68)–(6.74) adierazpenetan erabilitako argudio berberagatik, ezkerreko gairako ematen baitu <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>,</mo></mrow></math> zeina, betetzea eskatuz <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> honetara laburtzen baita <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>λ</mi></msup><mi>.</mi></mrow></math> Ekuazio honen eskuineko gaia ezeztatzen da indizeetarako, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, eta beraz (6.83) eta (6.84) soluzioak lortzen ditugu (6.91)n, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-rekin hurrenez hurren, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> balio partikularra hartuz besterik gabe, zeinak (6.94)  (6.82)ra laburtzen baitu."
    },
    {
     "mota": "testua",
     "html": "Indizea bikoitza bada, <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> (6.83) eta (6.84) bat datoz, baina bigarren soluzio bat lor dezakegu <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eginez, (6.95) deribatuz eta (6.96) eta L operadorearen linealtasuna erabiliz, ikusteko <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>-erako ezeztatzen baita. Beraz, beste soluzio bat (6.91)  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math>-en deribatuz lortzen da: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> zeina (6.85) besterik ez baita."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></math> denean <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>-rekin, bigarren soluzioa aurkitzeko zailtasuna (6.94)n <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow></math> kasurako <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koefizientea <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>N</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> izatetik dator eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-rako ezeztatzen da. Hala ere, aukeratzen badugu <math display=\"block\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>,</mo></mrow></math> (6.94)ren ondorioz <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k ere <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> faktore bat izango dute, eta beraz faktore hori (6.94)ren batugai guztietan agertuko da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow></math> kasurako, zeina, beraz, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> denean beteko baita. (6.95) ekuazioa hau izango da <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-rako ezeztatzen baita, eta beraz soluzio bat hau da <math display=\"block\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>N</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mrow><mi>N</mi><mo>+</mo><mi>n</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><mi>A</mi><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo></mrow></math> (6.83) eta (6.88)n definitutako balioekin, lehen <math display=\"inline\"><mi>N</mi></math> batugaiak ezeztatuko baitira koefizienteek <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> faktorea dutelako, eta hurrengo gaia <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>N</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>x</mi><msub><mi>λ</mi><mn>1</mn></msub></msup></mrow></math> izango baita. Bigarren soluzioa lortzeko lehen bezala jokatuko dugu (6.100) deribatuz, <math display=\"block\"><mrow><mi mathvariant=\"sans-serif\">𝖫</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>λ</mi></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>x</mi><mi>λ</mi></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> zeina <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-rako ere ezeztatzen baita, eta beraz soluzio bat hau izango da <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>λ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>+</mo><mi>n</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mrow></math> zeina (6.87)rekin bat datorren (6.101) eta (6.99) aukeraketa kontuan hartzen baditugu. (Konbergentzia-eremuak <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ρ</mi></mrow></math> puntuak biltzen dituela frogatzea [21] liburuan aurki daiteke)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oharrak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Soluzioaren gai batzuk soilik kalkulatu nahi badira, errazagoa izan daiteke zuzenean agertuko dela dakigun serie mota saiatzea eta dagozkion koefizienteak kalkulatzea."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Lehen soluzioaren <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> seriea batzea lortu bada, bigarren soluzioa aurkitzeko metodorik egokiena askotan ordena-laburtzea (3.68) da."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Gai logaritmikoen agerpen posibleak ez gintuzke harritu behar 3.12 atalean aztertutako Cauchy-Euler ekuazioekin izandako esperientziaren aurrean."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Indize bakar bat badago, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, bigarren soluzioak nahitaez gai logaritmiko bat du."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Indizeen arteko diferentzia oso ez-nulu bat bada <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> koefizienterako (6.94) ekuazioak forma hau du <math display=\"block\"><mrow><mn>0</mn><mo>⋅</mo><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta beraz bi aukera daude:",
      "Ekuazioaren egituragatik gertatzen bada <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mrow><mi>N</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>c</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> orduan <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> arbitrarioa da, beraz <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> eta indize txikiari, <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, dagokion soluzioak ez du gai logaritmikorik. Gainera, soluzio horretan bi konstante arbitrario egongo direnez, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, hura soluzio orokorra izango da eta, bereziki, indize handienari, <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math>, dagokiona biltzen du, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> hartuz berreskuratzen dena. Izan ere, hau beti gertatzen da puntua arrunta denean, ordena erdiosoko Bessel-en ekuazioekin edo problemetan ikusiko ditugun zenbait adibidetan.",
      "(6.105) betetzen ez bada, (6.104) baldintzak ez du soluziorik <math display=\"inline\"><mrow><msub><mi>c</mi><mi>N</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rentzat, eta beraz <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>-ri dagokion soluzioak gai logaritmiko bat izango du eta <math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mn>0</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Kapituluaren gainerakoa teorema honen aplikazio-adibide desberdinei eskainiko diogu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Indize bikoitzeko adibide bat"
    },
    {
     "mota": "testua",
     "html": "Izan bedi ekuazioa <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> ordezkapenak eta koefizienteen identifikazioak honetara baitarama <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>λ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Ekuazio hauetako lehenak esaten digu <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> indizea bikoitza dela eta bigarrenak errekurrentzia ematen digu <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><munderover><mo>∏</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mn>1</mn><mrow><mi>λ</mi><mo>+</mo><mi>k</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>-ekin. Soluzio bat azken adierazpenean <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> hartuz lortzen da <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> eta horrela <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> Bigarren soluzioa (6.85)–(6.86)ren bidez aurkitzeko komeni da deribatu logaritmikoa erabiltzea: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mn>1</mn><mrow><mi>λ</mi><mo>+</mo><mi>k</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><mo>,</mo></mtd></mtr></mtable></math> non <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn><mi>/</mi><mn>3</mn><mo>+</mo><mi>⋯</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>n</mi></mrow></math> zenbaki harmonikoak erabili baititugu (ikus 287. orrialdea). Ekuazioaren soluzio orokorra, beraz, hau izango da <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> ere aurki daitekeela soluzioa saiatuz <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> eta (3.68) erabiliz soluzio orokor gisa lortzen dela <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">Ei</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> Egiaztatu soluzio bera dela (6.111), (D.64) eta (D.66) erabiliz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gai logaritmikoa duen adibide bat"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> ordezkapenak honetara baitarama <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Lehen ekuazioak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> indizeak ematen dizkigu, zeinen <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> diferentzia osoa baita, eta bigarrenak errekurrentzia ematen digu <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> kasurako, <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Indize handienak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> beti ematen digu soluzio bat, kasu honetan <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math> dena, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> beti baita eta (6.121)n ikusten dugu <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Jakina, adibide sinple honetan, soluzio hau ikuskapenez aurki zitekeen 52. orrialdean (3.67) motako ekuazioei buruz egindako oharra erabiliz. Kasu honetan soluzio orokorra erraz aurki daiteke <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>∫</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math> ordena-laburtzearen bidez, baina Frobenius-en teoremaren aplikazioa erakutsi nahi dugu. <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> direnez, dugu <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>λ</mi><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>λ</mi><mfrac><msup><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>λ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math> Por otro lado, <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mi>λ</mi><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>,</mo></mrow></math> zeina, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> zenbakitzailearen erro bikoitza denez, <math display=\"inline\"><mi>n</mi></math> ororako ezeztatuko baita, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> kasurako izan ezik, non <math display=\"inline\"><msup><mi>λ</mi><mn>2</mn></msup></math> gaia izendatzailean ere baitago, eta beraz dugu <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mn>3</mn><mo>,</mo></mrow></math> eta horrela ekuazioaren soluzio orokorra <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, edo, baliokidetasunez, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> arbitrarioekin."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gai logaritmikorik gabeko adibide bat"
    },
    {
     "mota": "testua",
     "html": "Esan den bezala (eta aurreko adibidean egiaztatu dugun bezala), indizeen arteko diferentzia oso ez-nulu bat denean gerta daiteke Frobenius-en serie forman soluzio bakar bat egotea eta bigarren soluzioak gai logaritmiko bat izatea. Hala ere, hau ez da nahitaez egia. Gerta daiteke gai logaritmikoa falta izatea eta Frobenius-en serie forman bi soluzio egotea, ordena erdiosoko Bessel-en ekuazioen kasuan gertatzen zen bezala, eta are berreduren serie arrunt forman ere, puntua arrunta zenean gertatzen zen bezala. Azken kasu honetan (6.11) ekuazioaren <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> koefizienteak jatorriaren inguruan analitikoak dira eta, beraz, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>P</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>Q</mi><mi>n</mi></msub></mrow></math>, eta horrela ekuazio indiziala beti <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta indizeak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> dira. Kasu honetan indizeen arteko diferentzia osoa den arren, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math>, ikusiko dugu indize txikia erabiltzeak ez duela arazorik sortzen, baizik eta soluzio guztiak zuzenean ematen dituela. Izan ere, har dezagun <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>  (6.74) errekurrentzian <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>-ekin, ekuazio indizialari eta arazoak sor zitzakeen <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> balioari hurrenez hurren dagozkienak. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> erabiliz lortzen dugu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>c</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Ikusten dugu, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> denez, bai <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> bai <math display=\"inline\"><msub><mi>c</mi><mn>1</mn></msub></math> arbitrarioki aukera daitezkeela indize txikienari (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>) dagokion seriean. Bi konstante arbitrario daudenez, honek soluzio guztiak ematen ditu. Indize handienari (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>) dagozkion soluzioak <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> aukeraketarekin berreskuratzen dira."
    },
    {
     "mota": "testua",
     "html": "Ikus dezagun gai logaritmikorik gabeko beste adibide bat. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math> saiatuz <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ekuazioan, zeinaren jatorria singular erregularra baita, lortzen dugu funtzio indiziala dela <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta horrela indizeak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> dira, zeinen diferentzia <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> baita. Gainera, koefizienteen errekurrentzia binaka doa honela <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> eta hortik <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ondorioztatzen da, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math> baita."
    },
    {
     "mota": "testua",
     "html": "Beti bezala, soluzio bat indize handienak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> ematen du, zeinetarako <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>-en ezeztatzearen ondorioz koefiziente bikoitiak soilik egongo baitira: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desegin errekurrentzia eta osatu faktorialak frogatzeko <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> eta, ondorioz, <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> denez, gai logaritmikoaren koefizientea hau izango da <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>λ</mi><mo>→</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></munder><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>+</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baita eta izendatzailea ez baita ezeztatzen. Puntu arruntekin gertatu zen bezala, berriz ere ikusten dugu gerta daitekeela gai logaritmikoa ez agertzea indizeen diferentzia oso ez-nulu bat den arren. Kasu partikular honetan, arrazoia <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math> definitu gabe utz zezakeen (6.132) ekuazioa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> kasurako <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>3</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> izatean datza, zeina <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math> ororentzat betetzen baita <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> denean, bai <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bai <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> ezeztatzen baitira. Indize txikiarekin arazorik ez egoteaz gain, <math display=\"inline\"><mi>A</mi></math> nulua suertatzen den bakoitzean gertatzen den bezala, soluzio orokorra zuzenean ematen digu konstante arbitrario gehigarri bat biltzen duelako. Kasu honetan, gai bakoitiak bikoitietatik deskonektatuta daude, <math display=\"inline\"><msub><mi>a</mi><mn>3</mn></msub></math> arbitrarioa faktore komuntzat onartzen dute eta, beraz, egiazki <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mn>3</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><msup><mi>x</mi><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>-tik hasten dira, hau da, <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> soluzioa zehazki erreproduzitzen dute (beste kasu batzuetan, indize handienari dagokion soluzioa beste soluzioarekin konbinazio lineal forman ager daiteke). Gai bikoitiek beste soluzio linealki independente bat ematen digute: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mrow><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu soluzio hau dela <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serieen batura"
    },
    {
     "mota": "testua",
     "html": "Hitzaurrean esan zen bezala, ez genuke konformatu behar emaitzak serie forman uztearekin batzen saiatu gabe. Taula on batzuk edo kalkulu aljebraikoko programa bat ezean (ikus B.4.5 atala), hau ez da lan erraza kasu sinpleetan izan ezik, baina ezerk ez du barkatzen seriearen egitura aztertzen minutu batzuk galtzea, identifika dezakegun edo serie ezagun batera edo batzuetara eralda daitekeen ikusteko. Koefiziente orokorrak indizearen eta faktorialen edo gamma funtzioen konbinazio aljebraikoak soilik biltzen dituen adibide sinpleetan funtziona <em>dezakeen</em> erregela bat honako hau da:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Koefiziente orokorraren izendatzailean faktorialik ez badago, baizik eta konbinazio aljebraikoak soilik, funtzio logaritmikoen serieak gogoratzea erabilgarria izan daiteke, funtzio hiperboliko alderantzizkoak barne."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Koefiziente orokorraren izendatzailean faktorial bakar bat agertzen bada, egitura hau duten serieetako batera edo batzuetara eraldatzen saia daiteke, hau da, esponentzialaren seriera eta haren konbinazioetara: sinua, kosinua, sinu hiperbolikoa eta kosinu hiperbolikoa. Errore-funtzioaren (D.39) eta integral esponentzialaren (D.64) serieak ere har daitezke kontuan."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Izendatzailean bi faktorial agertzen badira, edo faktorial bat eta gamma bat, hautagai nabaria Bessel-en funtzioak dira (6.58)  (edo, oro har, 6.22 probleman eta D.10 atalean aztertutako Kummer-en funtzio hipergeometriko konfluenteak (D.91))."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Izendatzailean bi faktorial agertzen badira, edo faktorial bat eta gamma bat, eta zenbakitzailean beste gamma bat badago, serie binomikoarekin (D.55) konparatzen saia daiteke edo, oro har, <strong>Gauss-en funtzio hipergeometrikoarekin</strong><span class=\"j-oin\">[<strong>Johann Carl Friedrich Gauss</strong> (1777-04-30, Brunswick, gaur egun Alemania; 1855-02-23, Göttingen, Hannover). Bere tesian aljebraren oinarrizko teoremaren lehen froga asegarria eman zuen. Agian geometria diferentzialari egindako ekarpenengatik ezagunagoa den arren, behaketa astronomikoak egin zituen adin aurreratura arte eta, beste ekarpen praktiko batzuez gain, lan ugari idatzi zituen mekanika zerutiarrari, magnetismoari, ekuazio diferentzialei, hurbilketen teoriari eta probabilitateari buruz. Eragin izugarria izan zuen ezagutza zientifiko eta teknikoaren arlo askotan.]</span>, zeina honela definitzen baita <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> eta beste hainbat funtzio biltzen baititu, D.11 atalean aztertzen den bezala."
     ]
    },
    {
     "mota": "testua",
     "html": "(6.135) eta (6.139) serieen kasuan esponentzial motako serieak aitortzen ditugu, honela idatz daitezkeenak <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>x</mi></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><msqrt><mi>x</mi></msqrt></mfrac><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><msqrt><mi>x</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "Legendreren ekuazioa<span class=\"j-oin\">[<strong>Adrien-Marie Legendre</strong> (1752-09-18, Paris; 1833-01-10, Paris). Bere izena daramaten polinomioak sartu zituen iraulketa-simetria duten zenbait gorputzek sortutako grabitazio-eremua kalkulatuz. Funtzio eta integral eliptikoen azterketa da, ziurrenik, bere ekarpen handiena. <math display=\"inline\"><mi>π</mi></math> irrazionala dela froga sinplifikatu bat ere eman zuen.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu hurrengo ekuazioa, Laplaceren ekuazioa koordenatu esferikoetan ebaztean agertzen dena: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aurkitu haren soluzioak serie bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n.",
        "Soluzio horietako zeintzuk dira polinomioak?",
        "Zehaztu <strong>Legendreren polinomio</strong> batzuk, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasierako baldintza betetzen duten soluzio polinomikoak direnak"
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Chébichev-en ekuazioa<span class=\"j-oin\">[<strong>Pafnuty Lvovich Chébichev</strong> (1821-05-16, Okatovo, Errusia; 1894-12-08, San Petersburgo). Zenbakien teoriari egindako ekarpenagatik bereziki gogoratzen den arren, beste hainbat gairi buruz idatzi zuen, mekanika, probabilitateen teoria eta integrazioa barne.]</span>  (edo Tchebycheff, edo Chebyshev…)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu ekuazioaren soluzioak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>ν</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Zehaztu haren soluzio polinomikoak eta, bereziki, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen dituztenak (eta <strong>Chébichev-en polinomio</strong> izena hartzen dutenak)."
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
       "html": "Kalkulatu, seigarren ordenaraino, honen soluzioa <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Bessel-en funtzioak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu Bessel-en funtzioen hurrengo propietateak:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>k</mi><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>k</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>k</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ν</mi><mi>x</mi></mfrac><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>ν</mi><mi>x</mi></mfrac><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mi>k</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>.",
        "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>k</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>ν</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>."
       ]
      },
      {
       "mota": "testua",
       "html": "Antzeko propietateak betetzen al dira bigarren motako <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math> funtzioekin?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ordenako Bessel-en ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu Bessel-enetik abiatuta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai-aldaketa eginez lortzen den ekuazioa. Erabili emaitza hau <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ordenako Bessel-en ekuazioaren soluzioa lortzeko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ordenako Bessel-en ekuazioa <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da, edo, <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-z zatituz, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mi>/</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Frobenius-en seriea, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup></mrow></math>, saiatuz (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup></mrow></math>) eta <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>-z biderkatutako ekuazioan ordezkatuz: <math display=\"block\"><mrow><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>r</mi><mo>+</mo><mi>n</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>r</mi><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>r</mi><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>:</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>r</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "Errekurrentzia orokorra (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math>): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> adarra.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math></span>. Eta <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>12</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>20</mn><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>120</mn></mrow></math>, eta orokorrean <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> adarra.</strong> Antzeko errekurrentziaz, orain <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> koefiziente independenteek balio dute: <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Soluzio orokorra <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math> da. Kontuan izanik <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math></span> direla, atzeman daiteke <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> hots, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math></span> jatorrizko <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldagai-aldaketan."
      },
      {
       "mota": "oharra",
       "titulua": "Egiaztapena",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Bereziki, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> soluzioa dela zuzenean egiazta daiteke: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>x</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math></span>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><msup><mi>x</mi><mrow><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn><msup><mi>x</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math></span>, eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math> ordezkatuz gaiak elkartzean <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math></span> lortzen da, soluzioa berresten duena."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>4</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Laguerreren ekuazioa<span class=\"j-oin\">[<strong>Edmond Nicolas Laguerre</strong> (1834-04-09, Bar-le-Duc, Frantzia; 1886-08-14, Bar-le-Duc). Bere izena daramaten ekuazioagatik eta polinomioengatik bereziki gogoratzen den arren, analisiaren, geometriaren eta hurbilketa-metodoen beste arlo batzuetan lan egin zuen.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-n honen soluzio bat <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>ν</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>≥</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aztertu soluzio polinomikoak, zeinak (konstante biderkatzaile bat salbu) Laguerreren polinomio orokortuak baitira."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Bessel-en ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu ekuazioa <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>b</mi></mrow></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> Bessel batean bihurtzen dela <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldaketarekin, <math display=\"inline\"><mrow><mi>t</mi><mo>≡</mo><mi>a</mi><msup><mi>x</mi><mi>b</mi></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><msup><mi>x</mi><mi>c</mi></msup><mi>y</mi></mrow></math> delarik."
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
       "html": "Aurkitu serie-metodoaren bidez honen soluzioa <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren puntu arrunta da (koefizienteak analitikoak dira bertan, forma normalizatuan <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>). Serie arrunta, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, saiatuz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorea sartu gabe eta zuzenean koefizienteak berdinduz:"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math> koefizientea.</strong>  <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math> koefizientea.</strong>  <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> hartuta (ekuazioaren egiturak berak inposatzen duen aukera, ikus errekurrentzia orokorra)  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>3</mn><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>6</mn></mrow></math> ateratzen da."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> koefiziente orokorra.</strong> <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Koefizienteak, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-rekin: <math display=\"block\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>24</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>3</mn></msub><mo>+</mo><mn>12</mn><msub><mi>a</mi><mn>4</mn></msub></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>3</mn><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>120</mn></mfrac></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Patroia iradokitzen duten koefizienteak",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Koefizienteak, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>6</mn><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>24</mn><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>120</mn><mo>,</mo><mi>…</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math> patroia iradokitzen dute <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math>-tik aurrera (hots, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>≈</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>!</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mi>!</mi><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mi>!</mi><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span> motako soluzio bat, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>-ren garapenarekin lotua). Erabiltzailearen koadernoan puntu honetan uzten da kalkulua, forma itxi bakar batean batu gabe."
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
       "html": "Aurkitu honen serie bidezko soluzioaren lehen gaiak <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>18</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>."
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
       "html": "Batzuetan, berreduren serieak eta Frobenius-enak ekuazio osoaren soluzio partikular bat kalkulatzeko ere erabil daitezke. Har dezagun, adibidez, hurrengo ekuazioa: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Ebatzi ekuazio homogeneoa eta erabili serie egoki bat osoaren soluzio partikular bat kalkulatzeko. Konparatu emaitza konstanteen aldakuntza-metodoaren bidez lortutakoarekin."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Gauss-en ekuazio hipergeometrikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu ekuazioa <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>γ</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo>+</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aurkitu haren soluzioak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> denean. Idatzi soluzioa <strong>Gauss-en funtzio hipergeometrikoa</strong>  <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz, zeina hain zuzen ere <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasierako baldintza betetzen duen soluzioa baita. <em>Iradokizuna</em>: Erabili <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>γ</mi></mrow></msup></mrow></math> aldaketa bigarren soluzioa aurkitzeko."
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
       "html": "Frogatu <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>,</mo><mi>α</mi><mo>;</mo><mi>γ</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta aurkitu <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>β</mi><mo>;</mo><mi>β</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>;</mo><mi>β</mi><mo>;</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ekuazio hipergeometriko konfluentea",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> betetzen duen eta indize nuluari dagokion soluzioa <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>ν</mi><mo>≠</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> hipotesipean. Funtzio horrek <strong>funtzio hipergeometriko konfluente</strong> edo <strong>Kummer-en funtzio</strong><span class=\"j-oin\">[<strong>Ernst Eduard Kummer</strong> (1810-01-29, Sorau, Prusia; 1893-05-14, Berlin). Fermaten azken teoreman lanean ideal kontzeptua aurkitu zuen. Bere izena daraman gainazalaz gain, Gaussenak hedatu zituzten serie hipergeometrikoei buruzko lanengatik ere gogoratzen da.]</span> izena hartzen du eta <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>,</mo><mi>ν</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> edo <math display=\"inline\"><mrow><mrow><msub><mrow></mrow><mn>1</mn></msub><msub><mi>F</mi><mn>1</mn></msub></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">(α)</mtext><mo>,</mo><mtext mathvariant=\"normal\">(ν)</mtext><mo>,</mo><mtext mathvariant=\"normal\">(x)</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisa adierazi ohi da. Aztertu polinomio batera laburtzen den kasuak eta funtzio elementalak berreskuratzen diren beste kasuren bat. Kalkulatu bigarren soluzio linealki independentea <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>ν</mi></mrow></msup><mi>z</mi></mrow></math> aldagai-aldaketaz baliatuz. Aztertu ekuazio honen eta Gauss-en hipergeometrikoaren arteko erlazioa eta erabili aurreko atalen emaitzak berreskuratzeko. (<em>Iradokizuna</em>: Har ezazu <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>β</mi><mi>x</mi></mrow></math> aldaketa Gauss-en ekuazioan). Iruzkindu <math display=\"inline\"><mi>ν</mi></math>-ren balioei ezarritako murrizketa."
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
       "html": "Aurkitu ekuazioaren soluzio orokorra <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Aurkitu honen soluzio guztiak <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Aurkitu hurrengo ekuazioaren soluzio orokorra funtzio elementalen bidez: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da. Frobenius-en seriea, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>, saiatuz eta <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z zabalduz, indize-ekuazioa (<math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>-ren koefizientea) hau da: <math display=\"block\"><mrow><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>λ</mi><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>4</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Errekurrentzia orokorra (<math display=\"inline\"><mi>m</mi></math> indizearekin lerrokatuz) hau ematen du: <math display=\"block\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mfrac><mrow><mi>m</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow><mrow><mi>m</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>4</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> adarra.</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></math>, hots <math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>5</mn><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Serie itxia, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>  erabiliz: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>4</mn></mrow></msup><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Bigarren bidea: indize-ekuazio orokorraren formula",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Emaitza bera lortzen da ekuazioaren forma orokorretik abiatuta, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> motan idatzita —non <math display=\"inline\"><mrow><mover><mi>p</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>, eta <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>— eta indize-ekuazio orokorra <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>  aplikatuz: <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, adar bera ematen duena."
        }
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarra, koadernoan itxi gabe",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Bigarren adarraren errekurrentzia orokorra (<math display=\"inline\"><msub><mi>a</mi><mi>m</mi></msub></math>, <math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>2</mn></mrow></msub></math>-ren araberakoa) idatzita utzi zuen erabiltzaileak, baina ez zuen amaitu koefiziente zehatzen kalkulua forma itxi batean; indizeen arteko diferentzia osoa denez (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math>), bigarren soluzio horrek gai logaritmiko bat izan lezake edo ez, kasu bakoitzean aztertu beharrekoa."
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
       "html": "Aurkitu ekuazioaren soluzio orokorra <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Ebatzi hurrengo ekuazio diferentziala: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Ebatzi Frobenius-en metodoaren bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularraren inguruan: <math display=\"block\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>  saiatuz: <math display=\"block\"><mrow><mn>4</mn><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>+</mo><mn>2</mn><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>−</mo><mn>2</mn><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></munder><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>−</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></munder><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Ekuazio indiziala</strong>  (<math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math>-ren koefizientea): <math display=\"block\"><mrow><mn>4</mn><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Errekurrentzia orokorra:</strong> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>  kasua:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>  kasua:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><msub><mo>∑</mo><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math>."
      },
      {
       "mota": "oharra",
       "titulua": "Bigarren soluzioa, erabiltzailearen ohar gorria",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Erabiltzaileak berak seinalatu du hemendik aurrera errazagoa dela bigarren soluzioa d&#x27;Alembert bidez (ordena-jaitsiera) ateratzea, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> ezagututa; <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>-ren serie hori <math display=\"inline\"><mtext mathvariant=\"normal\">erf</mtext></math> funtzio errorearekin lotzen da:"
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
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Ebatzi Frobenius-en metodoaren bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> puntu singular erregularraren inguruan: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aldagai-aldaketa <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> eginez, <math display=\"inline\"><mrow><mi>z</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> lortzen da, eta <math display=\"inline\"><mi>z</mi></math>-z biderkatuz: <math display=\"block\"><mrow><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>z</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>z</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>z</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>  saiatuz: <strong>Ekuazio indiziala</strong>  (<math display=\"inline\"><msup><mi>z</mi><mn>0</mn></msup></math>): <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Errekurrentzia:</strong>  <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>, beraz <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mi>z</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, beraz <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mfrac><msup><mi>e</mi><mi>z</mi></msup><mi>z</mi></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio orokorra</strong>, konstanteak birdefinituz:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
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
       "html": "Ebatzi serie bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arruntaren inguruan eta gero Frobenius bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> puntu singular erregularraren inguruan: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "oharra",
       "titulua": "Ekuazio bera 65. orrialdeko ariketa gisa",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Ekuazio hau, forma berean, testu nagusiko 6.16 orrialdeko ariketa gisa agertzen da (Liouville-ren eraldaketaz 3.22 problemarekin konparatzeko eskatzen duena); hemen erabiltzailearen koadernoko bide independentea transkribatu da."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arruntaren inguruan.</strong> Idatzita <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, analitikoa da <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-n, ez-analitikoa <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>-en (puntu singularrak). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> saiatuz, maila baxuko gaietatik: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>, eta errekurrentzia orokorra <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math> Koefiziente guztiak errepikatzen dira, eta bikoitiak/bakoitiak bereizita <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> serie geometrikoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> eskatzen duelarik."
      },
      {
       "mota": "testua",
       "html": "<strong>Frobenius <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en inguruan.</strong>  <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> eginez eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>μ</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math> saiatuz, ekuazioa <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>μ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>μ</mi><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> bihurtzen da. Ekuazio indiziala (<math display=\"inline\"><msup><mi>μ</mi><mrow><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></math>-en koefizientea): <math display=\"block\"><mrow><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> kasua.</strong> Errekurrentzia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mn>2</mn></mrow></math> ateratzen da, beraz <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mi>μ</mi><mn>2</mn></mfrac><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>μ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Bigarrena, d&#x27;Alembert bidez</strong>  (<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>): <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Zorte-oharra, erabiltzaileak berak",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Suertea izan da, horietako bat izan delako. lambdas era cero.» Bi soluzio behar direnean, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> bada hartu <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math>, eta gero d&#x27;Alembert-en teorema <math display=\"inline\"><mrow><mo>→</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>."
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
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>A</mi><mn>2</mn></msub><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
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
       "html": "Ebatzi serie bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arruntaren inguruan: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "oharra",
       "titulua": "Zuzenketa",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Iturriko enuntziatuan koefizienteen zeinuak ilun daude (agian <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> irakur litezke); behean datorren forma da errekurrentziekin eta bi soluzioekin bat datorrena, biak ekuazioan ordezkatuta egiaztatua."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> saiatuz eta ordena guztiak bilduz:"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>:</strong>  <math display=\"inline\"><mrow><mn>12</mn><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(A)  kasua:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>  hartuz: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta hortik aurrera guztiak zero: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>(B)  kasua:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>  hartuz: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>6</mn></mrow></math>, ...: <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
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
       "html": "Zein <math display=\"inline\"><mi>β</mi></math> parametroaren balioetarako onartzen ditu ekuazioak soluzio polinomikoak <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>?</mi></mrow></math> Balio horietako bakoitzerako, aurkitu soluzio orokorra, soluzioetako bat gehienez ere ordena biko polinomio bat delarik."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>  saiatuz: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Lehen gaiak: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mn>2</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>β</mi></mrow><mn>6</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>24</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>120</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio polinomikoak.</strong> Seriea eteteko <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> behar da <math display=\"inline\"><mi>n</mi></math> oso baterako: <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3</mn></mrow></math>) edo <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (konstantea eta kubikoa, biak polinomikoak)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math> hartuz <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> hartuz <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>  (bata gehienez 2. ordenako polinomioa, eskatu bezala):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mtext mathvariant=\"normal\">  </mtext><mi>β</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Ebatzi Frobenius-en serieen bidez (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra) eta konstanteen bariazioz: <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>6</mn><mi>x</mi><mo>+</mo><mfrac><mrow><mn>5</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Homogeneoaren indize-ekuazioa.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math> saiatuz eta ekuazioa <math display=\"inline\"><mi>x</mi></math>-z biderkatuz Frobenius-en forma kanonikora egokitzeko, <math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>-ren koefizienteak ematen du"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Bi indizeetarako errekurrentzia berdina lortzen da, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>m</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mn>2</mn></mrow></math>, eta beraz serie geometriko itxiak: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>b</mi><mn>0</mn></msub><msqrt><mi>x</mi></msqrt></mrow><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Konstanteen bariazioa, soluzio partikularra bilatzeko.</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio bihurtuz eta <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> baldintza estandarra ezarriz, sistema hau lortzen da: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mfrac><msqrt><mi>x</mi></msqrt><mrow><mn>2</mn><mo>+</mo><mi>x</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><msup><mrow><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>12</mn><mi>x</mi><mo>+</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn></mrow><mrow><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Lehen ekuaziotik <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msqrt><mi>x</mi></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup></mrow></math>, eta bigarrenean ordezkatuz eta sinplifikatuz: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>b</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><msqrt><mi>x</mi></msqrt><mo>+</mo><mfrac><mrow><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn></mrow><msqrt><mi>x</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn><msup><mi>x</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>+</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><mi>x</mi><mo>+</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio partikularra</strong>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><msub><mi>b</mi><mn>0</mn></msub></mrow></math>: <math display=\"block\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Muga de legibilidad",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Azken pauso honetako sinplifikazioa erabiltzailearen koadernoan oso estu idatzita dago; goiko forma aurreko pausoetatik koherenteki eratorritakoa da."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio orokorra</strong>  (homogeneoa + partikularra):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mo>+</mo><mi>D</mi><msqrt><mi>x</mi></msqrt><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>5</mn></msqrt><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
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
       "html": "Ebatzi Frobenius-en serieen bidez (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra): <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Forma kanonikora, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math>  ordezkatuz:"
      },
      {
       "mota": "testua",
       "html": "<strong>Indize-ekuazioa</strong>  (<math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>): <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> hartuz, <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></msup></math>  koefizientea:</strong>  <math display=\"inline\"><mrow><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Errekurrentzia orokorra:</strong>  <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mi>n</mi></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math> eta <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Bigarren soluzioa, d&#x27;Alembert bidez</strong>  (<math display=\"inline\"><mi>x</mi></math>-z zatituz <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Zatika integratuz (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math> ez baita funtzio elementaletan adierazgarria (integral esponentziala, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Ei</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio orokorra:</strong>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
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
       "html": "Sistema <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi></mrow></math> emanda, eratorri Bessel-en ekuazioa <math display=\"inline\"><mi>y</mi></math>-rentzat eta idatzi soluzio orokorra."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Lehen ekuaziotik, <math display=\"inline\"><mi>x</mi></math>-z biderkatuz: <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi></mrow></math>. Deribatuz: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><msup><mi>z</mi><mo>′</mo></msup></mrow></math>. Bigarren ekuazioa ordezkatuz (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>⇒</mo><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> edo, <math display=\"inline\"><mi>x</mi></math>-z biderkatuz, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: Bessel-en ekuazio orokorraren, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math> kasua (<math display=\"inline\"><mrow><msup><mi>ν</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> lehen eta bigarren motako Bessel-en funtzioak baitira, ordena nuluarekin."
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
       "html": "Ebatzi Frobenius-en metodoaren bidez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregular bikoitzaren inguruan: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Ekuazioa <math display=\"inline\"><mi>x</mi></math>-z biderkatuz, forma polinomiko garbian: <math display=\"block\"><mrow><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>6</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mn>6</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math> ordezkatuz, <strong>ekuazio indiziala</strong>  (<math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math>-ren koefizientea): <math display=\"block\"><mrow><mi>−</mi><mn>3</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>6</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mo>−</mo><mn>3</mn><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Adarra <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>.</strong> Errekurrentzia orokorrak <math display=\"inline\"><mrow><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></math> faktorea du zenbakitzailean koefiziente guztietan, beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>) adar honetan: <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Adarra <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> Hiru puntuko errekurrentzia orokorra ateratzen da (<math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mrow><mi>m</mi><mo>−</mo><mn>2</mn></mrow></msub></math>-ren araberakoa); <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math> arte kalkulatuta, erabiltzaileak d&#x27;Alembert-en formulara pasatzen da bigarren soluzioa (<math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math>)  lortzeko: <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>p</mi><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>∫</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Zatiketa (<math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) eta frakzio partzialak erabiliz, integrala sinplifikatzean <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> soilik geratzen da:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Bi soluzioen jatorria",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> Frobenius serie polinomiko soila da (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math> adarra) eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> d&#x27;Alembert bidez lortu da (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarretik abiatuta, koefizienteen berreraiketa aljebraiko osoa saihestuz)."
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
       "html": "Iradoki (edo aurkitu, serieen bidez) hurrengo ekuazio elementalen soluzioak: (A)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; (B)  <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; (C)  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Egiaztatu (C) kasua koefizienteen bidez, serie-metodoa erabiliz (ez soluzio-iradokizunez)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(A)</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>: soluzioa berehala iradokitzen da, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(B)</strong>  <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi></mrow></math> da (<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><mi>A</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>(C), soluzio-iradokizuna.</strong>  <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>y</mi></mrow></math>: soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(C), serie bidez.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>  saiatuz: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>−</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Errekurrentzia: <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Bikoitiak eta bakoitiak bereizita: <math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mn>4</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Baliokidetasuna",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> arbitrarioak dira; adierazpen hau <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> formaren baliokidea da, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> eginez."
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Serieak eta Frobenius-en metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "edf-ko 6. kapituluaren (eta kalkuluko funtzio-serieen kapituluaren) azterketa-mailako osagarria — orria osorik:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki itzazu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span> ekuazioaren soluzioak, puntu singular erregularraren inguruan berretura-seriez garatuz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki itzazu <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzioak, puntu singular erregular baten inguruan garatuz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki ezazu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span> ekuazioaren soluzio orokorra."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki ezazu soluzio orokorra: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Zeintzuk eta zein motatakoak dira puntu singularrak?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>6</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki ezazu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>5</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>5</mn><mo>+</mo><mfrac><msqrt><mn>5</mn></msqrt><mn>2</mn></mfrac></mrow></math></span> ekuazioaren soluzio orokorra."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>8</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurki ezazu <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzio orokorra."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Askatu berretura-serien metodoaz: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabaki <math display=\"inline\"><mi>β</mi></math>-ren zein baliotarako onartzen dituen <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioak soluzio polinomikoak, eta aurkitu soluzio orokorra soluzioetako bat lehen ordenako polinomioa denean. <span>(Kurtsoko ebazpen-dosierrak, CG-01, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>6</mn></mrow></math> kasua ixten du: errekurrentziak <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span> ematen du eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)</span>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>25</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>10</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>25</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>25</mn><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lortu <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren soluzio orokorra berretura-serie gisa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan."
      },
      {
       "mota": "testua",
       "html": "(Dosierretik: indize-ekuazioa <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarrak <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>... zuzenketa batekin — batugaiak <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>t</mi></mrow></math> aldaketaz batuta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> ateratzen da, eta bigarrena d&#x27;Alembertez.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Koadernotik (CNmetodosx) — serieak: Legendre, Hermite eta Bessel",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntu arruntak eta potentzia-seriezko soluzioa"
    },
    {
     "mota": "testua",
     "html": "Analitikotasunaren adibideak, puntu arruntaren definizioa, potentzia-seriezko soluzioen teorema, eta koefiziente-errekurrentziaren adibidea."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Analitikotasun-adibideak"
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 55:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math></span> (analitikoa <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi></mrow></math>). <strong>56:</strong> funtzio polinomikoak <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> osoan analitikoak. <strong>57:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn></mrow></mfrac></mrow></math> analitikoa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> izan ezik (izendatzailea anulatzen dutenak)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Puntu arrunta eta teorema"
    },
    {
     "mota": "testua",
     "html": "Emanik <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Puntu arrunta / singularra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> <strong>puntu arrunta</strong> da baldin <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> analitikoak badira <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n; bestela, <strong>puntu singularra</strong>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Potentzia-seriezko soluzioak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntu arrunta bada, ekuazioak bi soluzio ez-tribial eta l.i. ditu, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msubsup><mi>C</mi><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>k</mi></msubsup></mrow></math> eran, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math> (<math display=\"inline\"><mrow><mi>R</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) tartean konbergenteak."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 58: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></math> (analitikoak); <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>k</mi><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Indize-aldaketak (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi><mo>−</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>k</mi></mrow></math>) eta gaiak berdinduz: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Errekurrentziaz: <math display=\"block\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>12</mn></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>4</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>20</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mrow><mn>40</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math></span>; polinomioak eta funtzio arrazionalak (azkena <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> izan ezik); puntu arruntaren irizpidea (koefiziente nagusia bat, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> analitikoak <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n); teorema. Adibidea 58: <math display=\"inline\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>2</mn></mrow></math>-rako <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math></span>; indize-aldaketak eta errekurrentzia zuzenak; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>40</mn></mrow></math> (guztiak zuzenak). Paritatea gordetzen da: gai bikoitiak <math display=\"inline\"><msub><mi>C</mi><mn>0</mn></msub></math>-ren mende, bakoitiak <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math>-en mende — teoremak agindutako bi soluzio l.i.-ak eraikitzen. Teoremaren enuntziatuan <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> irakur daiteke, baina <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> behar da (definizioarekin bat); jasota. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p036.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzia-serieak: bi soluzio, hasierako balioak eta zentro-aldaketa"
    },
    {
     "mota": "testua",
     "html": "58. adibidearen bi serie independenteak, hasierako balioetako problema bat (59), eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> zentroko seriea <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> aldaketaz (60)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "58. adibidearen amaiera"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>40</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Bi soluzio linealki independenteak.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 59: hasierako balioen problema"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>. <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>-z zatituz, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> analitikoak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> izan ezik; <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math> ordezkatuz eta indizeak berdinduz: <math display=\"block\"><mrow><mi>−</mi><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mn>3</mn><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub></mrow><mrow><mn>6</mn><mi>.</mi></mrow></mfrac></mrow></math> Errekurrentzia (<math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzak: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, beraz <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>18</mn><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>6</mn><mo>=</mo><mn>11</mn><mi>/</mi><mn>3</mn></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>4</mn><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mfrac><mn>11</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>⋯</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mn>11</mn><mn>4</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 60: zentro-aldaketa (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>k</mi></msubsup></mrow></math>; aldaketa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>+</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup><mi>.</mi></mrow></math> (Garapena hurrengo orrian.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — errekurrentziaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: 58. adibidearen bi serieak (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mi>⋯</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>40</mn><mo>+</mo><mi>⋯</mi></mrow></math>); 59.ean <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>-z zatitzeak <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> singulartasunak erakusten ditu, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>; ⚠ <strong>zuzenketa (mahairatua):</strong> taldekatu aurretik jatorrizkoak <math display=\"inline\"><mrow><mi>+</mi><mn>3</mn><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub></mrow></math> du (zuzena), baina gero <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du; zuzena <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>n</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, beraz errekurrentzia <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Koefiziente bakartuak zuzenak (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mn>11</mn><mi>/</mi><mn>3</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mn>4</mn><mo>+</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>11</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>); errekurrentzia zuzenarekin <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>11</mn><mi>/</mi><mn>4</mn></mrow></math> (jatorrizkoaren <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sumatorioak ez du EDO betetzen ordena horietatik aurrera). Adibidea 60: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>-k ekuazioa <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ra eramaten du (deribatuak aldatu gabe, seriea <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n zentratuta). Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Ikus <code>koadernoa_metodo_n_p038.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zentro-aldaketa (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>) eta potentzia-seriezko PVI (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "60. adibidearen garapen osoa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> zentroaren inguruan, eta hasierako balioetako problema baten hasiera (61) <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> inguruan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 60: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math> ordezkatuz eta indizeak berdinduz: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>n</mi><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>t</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math> Errekurrentziaz: <math display=\"block\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>6</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>12</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>5</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><mn>20</mn><mi>.</mi></mrow></mfrac></mrow></math> Soluzioa (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>t</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 61: PVI <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>. Aldaketa <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math> ordezkatuz, indizeak berdinduz: <math display=\"block\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>t</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Errekurrentzia eta koefizienteak hurrengo orrian; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>-rekin <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> espero dira.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 60 (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>12</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>20</mn></mrow></math>; birkalkuluarekin bat). <strong>Barne-kontrola:</strong> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> hartuta, seriea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>−</mo><msup><mi>t</mi><mn>4</mn></msup><mi>/</mi><mn>12</mn><mo>−</mo><mi>⋯</mi></mrow></math> da, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math>-rekin bat (hots <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en normalizatua). Adibidea 61: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math>-k PVI-a ondo zentratzen du (<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi></mrow></math>); <math display=\"inline\"><mrow><mn>2</mn><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>-erako <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math></span>; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>-rekin <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> espero (hurrengo orrian egiaztatuko). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p040.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "PVIaren amaiera eta Frobenius-en metodoa"
    },
    {
     "mota": "testua",
     "html": "61. adibidearen PVIaren amaiera, eta puntu singular erregularren inguruko Frobenius-en metodoa (definizioa, teorema eta adibideak)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 61: amaiera"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo>−</mo><msub><mi>C</mi><mn>0</mn></msub></mrow></math> eta errekurrentzia <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>. Koefizienteak: <math display=\"block\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>6</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub></mrow><mn>24</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>1</mn></msub></mrow><mrow><mn>120</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>30</mn></mrow></math>. <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>6</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius: puntu singular erregularra"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Puntu singular erregularra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren puntu singularra bada, eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> analitikoak badira <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n, orduan <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> <strong>puntu singular erregularra</strong> da (bestela, <strong>irregularra</strong>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 62:</strong> <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Zatituz <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>; <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> singularra. <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>5</mn></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">analitikoak </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mtext mathvariant=\"normal\">-n</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>puntu singular erregularra</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Frobenius",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><msub><mi>x</mi><mn>0</mn></msub></math> puntu singular erregularra bada, ekuazioak soluzio ez-tribial bat du: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>r</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 63:</strong> <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> p.s.e.). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mn>2</mn><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>−</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>+</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>5</mn><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>r</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Ekuazio indiziala eta errekurrentzia hurrengo orrian.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — $C_4$-ren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 61eko errekurrentzia zuzena; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>6</mn></mrow></math>-rekin <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> (41. orriko kontrola baieztatzen du). ⚠ <strong>Zuzenketa (mahairatua):</strong> <math display=\"inline\"><msub><mi>C</mi><mn>4</mn></msub></math>-ren barneko zenbakitzailea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> da eta kanpoko zeinuak aldatzen du, beraz <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>24</mn></mrow></math> (ez <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>C</mi><mn>0</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>24</mn></mrow></math>); datuekin <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>, ez <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math>; hemen zuzendua. <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><mn>4</mn><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>120</mn><mo>=</mo><mn>7</mn><mi>/</mi><mn>30</mn></mrow></math> zuzena (seriea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>-tik aurrera soilik hutsegiten du jatorrizkoan). Frobenius: adibidea 62 (<math display=\"inline\"><mrow><mi>x</mi><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> analitikoak ⇒ p.s.e.; <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>-ren ez-agerpenak ez du sailkapena aldatzen); teorema (soluzio bat gutxienez alde bakoitzean); adibidea 63 planteatua. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(Frobenius, ekuazio indiziala). Ikus <code>koadernoa_metodo_n_p042.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en metodoa: ekuazio indiziala eta bi erroak"
    },
    {
     "mota": "testua",
     "html": "63. adibidearen amaiera (ekuazio indiziala, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta bi errekurrentziak) eta 64. adibidearen hasiera."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 63: ekuazio indiziala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math> ordezkatuz, <math display=\"inline\"><msup><mi>x</mi><mi>r</mi></msup></math>-ren koefizientea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>r</mi><mo>−</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>r</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>+</mo><mn>40</mn></mrow></msqrt></mrow><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>-erako <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math>, beraz: <math display=\"block\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math>, beraz (<math display=\"inline\"><msub><mi>D</mi><mi>k</mi></msub></math> deituta): <math display=\"block\"><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>D</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>D</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></math> (ez osoa): bi serieak l.i., erresonantziarik gabe. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 64: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>; <math display=\"inline\"><msup><mi>x</mi><mi>r</mi></msup></math>-ren koefizientetik ekuazio indiziala: <math display=\"block\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>r</mi><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>±</mo><mn>3</mn></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> <strong><math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-en koefizientea <math display=\"inline\"><mn>4</mn></math> da, beraz <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math>-erako: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>.</mi></mrow></math> (Jarraipena hurrengo orrian.)"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 63 (ekuazio indiziala <math display=\"inline\"><mrow><mn>2</mn><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>r</mi><mo>−</mo><mn>5</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>-erako <math display=\"inline\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>C</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math>-rako <math display=\"inline\"><mrow><msub><mi>D</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><msub><mi>D</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn></mrow></math> ez osoa ⇒ bi serieak l.i.); adibidea 64 (ekuazio indiziala <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mo>−</mo><mn>5</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>; <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>-erako <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>). ⚠ <strong>Idazketa-oharra:</strong> 44. orriko soluzioetan batura <code>k=0</code>-tik hasten da errekurrentzia zuzenean koefiziente gisa jarrita, eta <code>k=0</code>-n <math display=\"inline\"><msub><mi>C</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub></math>/ <math display=\"inline\"><msub><mi>D</mi><mrow><mi>−</mi><mn>1</mn></mrow></msub></math> eta izendatzaile nulua sortzen dira; forma ondo definituak <math display=\"inline\"><msub><mi>C</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>D</mi><mn>0</mn></msub></math> aske uzten ditu eta errekurrentziak <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>-erako soilik aplikatzen. Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p044.typ</code>"
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
     "testua": "Frobenius-en amaiera (erresonantzia) eta oinarrizko definizioak"
    },
    {
     "mota": "testua",
     "html": "64. adibidearen Frobenius garapenaren amaiera (bi erroak eta erresonantzia-kasua) eta ekuazio diferentzialen oinarrizko definizioak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 64: <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denez, <strong>bakoiti guztiak <math display=\"inline\"><mn>0</mn></math></strong>: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>10</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>2</mn></msub><mn>28</mn></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>280</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea 64: <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> adarra (erresonantzia)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
    },
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Kontuz:</strong> <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-n <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> <strong>indeterminazioa</strong>. Errekurrentzia <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>−</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> bezala idatzita, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-n <math display=\"inline\"><mrow><mn>0</mn><mo>⋅</mo><msub><mi>C</mi><mn>3</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (egia <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>C</mi><mn>3</mn></msub></mrow></math>): <strong><math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math> askea da</strong> (erresonantzia)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>3</mn></msub><mrow><mn>5</mn><mo>⋅</mo><mn>2</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>7</mn></msub><mo>=</mo><mfrac><msub><mi>C</mi><mn>5</mn></msub><mrow><mn>7</mn><mo>⋅</mo><mn>4</mn></mrow></mfrac><mo>=</mo><mfrac><msub><mi>C</mi><mn>3</mn></msub><mrow><mn>7</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>4</mn><mo>⋅</mo><mn>2</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>⋯</mi></mrow></math> <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math>-ren <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math> adarra <math display=\"inline\"><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></math> potentzian hasten da: erro handiaren soluzioarekin <strong>bat dator</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Oinarrizko definizioak (2013/9/11)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Adibidea 1:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> → <strong>ekuazio finitua</strong> (ez diferentziala).",
      "<strong>Adibidea 2:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> → <strong>diferentziala</strong> (EDA / EDO / ODE).",
      "<strong>Adibidea 3:</strong> <math display=\"inline\"><mrow><msup><mi>d</mi><mn>2</mn></msup><mover><mi>r</mi><mo accent=\"true\">→</mo></mover><mi>/</mi><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><msup><mi>r</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">→</mo></mover></mrow></math> (grabitazioa).",
      "<strong>Ordena:</strong> deribatu-orderik altuena. <strong>Adibidea 4:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>‴</mo></msup><mo>=</mo><mi>x</mi></mrow></math> (ordena 3).",
      "<strong>Ekuazio lineala:</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>y</mi><mo>=</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Adibidea 5:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (lineala).",
      "<strong>Soluzio esplizitua.</strong> <strong>Adibidea 6:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> ✓, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — erresonantzia ondo antzemana",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: adibidea 64, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> adarra (<math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, bakoitiak <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>); ⭐ <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> adarra (<math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>-n <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math> askea — egileak <strong>erresonantzia ondo antzematen du</strong>, nahiz tarteko lerroan <code>0 - C_3 = 0</code> idatzi, non <math display=\"inline\"><mrow><mn>0</mn><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> dagokion). <math display=\"inline\"><mrow><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>7</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>/</mi><mn>280</mn></mrow></math> zuzenak. ⚠ Amaierako produktu trinkoak ez du <math display=\"inline\"><msub><mi>C</mi><mn>5</mn></msub></math> berregiten (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>⋅</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>120</mn></mrow></math>, ez <math display=\"inline\"><mn>10</mn></math>); errekurrentzia egiaztatua da baliozkoa. ⭐⭐ <strong>Eguneratzea (50. orrian):</strong> <code>koadernoa_metodo_n_p050.typ</code>-k <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></mrow></math> adarra berrindexatzen du eta erro handiaren soluzioarekin bat datorrela frogatzen — itxurazko hirugarren konstantea ebatzita: bi soluzio independente soilik (EDO ordena 2). Oinarrizko definizioak zuzenak. Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p046.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en erresonantzia eta potentzia-serieen konbergentzia-erradioa"
    },
    {
     "mota": "testua",
     "html": "64. adibidearen erresonantzia-kasua berrantolatzea (itxurazko hiru konstanteetatik bi soilik independenteak) eta potentzia-serieen konbergentzia-erradioa."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "64. adibidearen erresonantzia: bi soluzio soilik"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>C</mi><mn>3</mn></msub></math>-tik hasten den adarra (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) berrindexatuz (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>), <strong><math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren serie bera</strong> da (erro handiarena). Beraz soluzio orokorra: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>C</mi><mn>0</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi>C</mi><mn>0</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>C</mi><mn>1</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mspace width=\"0.167em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mo>∑</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> <strong>Bi konstante independente soilik</strong> (EDO ordena 2koa; itxurazko hirugarrena <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>-ekin bat datorrelako). Egiaztapena koefizienteez: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Potentzia-serieen konbergentzia-erradioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup></mrow></math> soluzioak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math> tartean konbergitzen badu, <math display=\"inline\"><mi>R</mi></math> = <strong>konbergentzia-erradioa</strong>. Kalkulua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 65:</strong> <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>+</mi><mi>∞</mi><mi>.</mi></mrow></math> <strong>Adibidea 66:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math></span>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>+</mi><mi>∞</mi><mi>.</mi></mrow></math> <strong>Adibidea 67:</strong> <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>k</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>k</mi></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>k</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mn>1</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — erresonantzia ebatzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐ <strong>64. adibidearen erresonantzia ebatzia:</strong> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup></mrow></math>-tik hasten den adarra (46. orria) berrindexatuz erro handiaren <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> serie bera dela erakusten da; beraz ez du hirugarren soluzio independenterik gehitzen, eta <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> bi konstantetara murrizketa zuzena da (EDO ordena 2koa). Koefizienteek baieztatzen dute (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mi>/</mi><mn>280</mn></mrow></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>10</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>280</mn><mo>+</mo><mi>⋯</mi></mrow></math>). Erro txikiaren soluzioa <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mi>⋯</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; biek 2 dimentsioko oinarria. Egilearen ohar gorriak «grado» dio, baina erabilitako propietatea ekuazioaren <strong>ordena</strong> da. Konbergentzia-erradioa: formula operatiboak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>R</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">limsup</mi><mo>&#8289;</mo></mrow><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot></mrow></math> eta (existitzen bada) <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>R</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mi>/</mi><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>; adibideak zuzenak (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>,</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>∞</mi></mrow></math>; geometrikoa: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>1</mn></mrow></math>). Barne- egiaztapena: <code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p050.typ</code>"
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
     "testua": "Potentzia-serieen eragiketak eta ekuazio zehatza"
    },
    {
     "mota": "testua",
     "html": "Potentzia-serieak deribatu/integratu daitezke konbergentzia-erradioaren barruan, Taylor seriearen koefizienteak, funtzio analitikoen batura eta produktua, eta ekuazio zehatz baten ariketa."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Deribazioa eta integrazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup></mrow></math> (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>) analitikoa da: jarraitua, <strong>deribagarria eta integragarria</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math>-n."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 68:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mo>∫</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math></span> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibidea 69:</strong> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>k</mi><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>k</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Taylor seriea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msubsup><mi>C</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> <strong>Adibidea 70:</strong> <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n: <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>, beraz <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ariketa: ekuazio zehatza (adibidea 18)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><msub><mi>M</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn><mo>=</mo><msub><mi>N</mi><mi>x</mi></msub></mrow></math> (zehatza). <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>F</mi><mi>y</mi></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>⇒</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio analitikoen eragiketak"
    },
    {
     "mota": "testua",
     "html": "<strong>(i) Batura</strong> analitikoa da. <strong>Adibidea 71:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>6</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>12</mn><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>120</mn><mo>+</mo><mi>⋯</mi></mrow></math></span> (<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>+</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math>). <strong>(ii) Produktua</strong> analitikoa da. <strong>Adibidea 72:</strong> <math display=\"inline\"><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>, Cauchy-ren biderkaduraz: <math display=\"block\"><mrow><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>17</mn><mn>24</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena zuzena: deribazio/integrazio gaiz gai erradioaren barruan; adibidea 69 (<math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-ren deribatua berrindexatuz <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>); Taylor <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>; adibidea 71 (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>); adibidea 72 (Cauchy-ren biderkaduraz <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>17</mn><mi>/</mi><mn>24</mn></mrow></math>; jatorrizkoaren <math display=\"inline\"><mrow><mn>10</mn><mi>/</mi><mn>6</mn><mo>=</mo><mn>5</mn><mi>/</mi><mn>3</mn></mrow></math>). ⚠ <strong>Zuzenketak (mahairatuak):</strong> (1) adibidea 68 — <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; jatorrizkoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du, zeinu globala aldatzen duena (lehen gaia <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math> litzateke); (2) adibidea 18 — deribatu-lerroan jatorrizkoak <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn></mrow></math> idazten du, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></mrow></math> izan behar duena (enuntziatu eta gainerako kalkuluekin bat; hemen zuzendua; potentziala <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>C</mi></mrow></math> zuzena). (3) egileak «SERIE DE FOURIER» idazten du 70. adibidean, <strong>Taylor</strong> (Maclaurin) dena. <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> problemak ez du soluzio klasikorik <math display=\"inline\"><mn>0</mn></math> inguruko tartean (eskuinaldea <math display=\"inline\"><mn>0</mn></math>-n definitu gabe). Barne-egiaztapena:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_serieak.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Ikus <code>koadernoa_metodo_n_p052.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzia-serieak: Legendre eta Hermite"
    },
    {
     "mota": "testua",
     "html": "Funtzio analitikoen bi propietate eta Legendre-ren nahiz Hermite-ren ekuazioen serie bidezko ebazpenak azaltzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio analitikoen propietateak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mfrac><mi>f</mi><mi>g</mi></mfrac></math> analitikoa da <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n, <math display=\"inline\"><mi>f</mi></math> eta <math display=\"inline\"><mi>g</mi></math> analitikoak eta <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math> badira.",
      "<math display=\"inline\"><mi>f</mi></math> analitikoa bada <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n eta <math display=\"inline\"><mi>g</mi></math> analitikoa <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-n, <math display=\"inline\"><mrow><mi>g</mi><mo>∘</mo><mi>f</mi></mrow></math> analitikoa da <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Legendre-ren ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>k</mi></msub><msup><mi>t</mi><mi>k</mi></msup></mrow></math> ordezkatuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>λ</mi><mn>2</mn></mfrac><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>λ</mi></mrow><mn>6</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>C</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kate bikoitia <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>,</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo><msub><mi>C</mi><mn>4</mn></msub><mo>,</mo><mi>…</mi></mrow></math> da, eta bakoitia <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><msub><mi>C</mi><mn>3</mn></msub><mo>,</mo><msub><mi>C</mi><mn>5</mn></msub><mo>,</mo><mi>…</mi></mrow></math>. Adibidez, <math display=\"block\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>6</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>4</mn><mo>⋅</mo><mn>3</mn></mrow></mfrac><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mn>12</mn><mo>−</mo><mi>λ</mi></mrow><mrow><mn>5</mn><mo>⋅</mo><mn>4</mn></mrow></mfrac><msub><mi>C</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bada, dagokion paritate-katea <math display=\"inline\"><mi>N</mi></math> graduan amaitzen da eta, normalizazio baten ondoren, <math display=\"inline\"><msub><mi>P</mi><mi>N</mi></msub></math> Legendre-ren polinomioa ematen du."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasuan kate bikoitia konstantea da; bakoitia <math display=\"inline\"><mrow><mi>t</mi><mo>+</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>t</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mtext mathvariant=\"normal\">artanh</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>-en. [CORREGIDO: paperak adierazpen osoari «Legendre-ren polinomioa» deitzen dio; <math display=\"inline\"><msub><mi>P</mi><mn>0</mn></msub></math> adar konstantea baino ez da polinomioa.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Hermite-ren ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Serie bera ordezkatuta, <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>λ</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>C</mi><mi>n</mi></msub><mo>,</mo></mrow></math> eta beheko koefizienteak Legendre-ren kalkuluko berak dira: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>λ</mi><mfrac><msub><mi>C</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msub><mi>C</mi><mn>1</mn></msub><mn>6</mn></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>N</mi></mrow></math> bada, <math display=\"inline\"><mi>N</mi></math>-en paritateko katea amaitu eta Hermite-ren polinomioa ematen du."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren notazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Legendre-ren seriean egileak <math display=\"inline\"><mi>t</mi></math>-tik <math display=\"inline\"><mi>x</mi></math>-era aldatzen du azken lerroan. Bi aldagaiak argazkian bezala dokumentatu dira; hemen <math display=\"inline\"><mi>t</mi></math> erabili da koherentziaz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en metodoa: Bessel eta gamma funtzioa"
    },
    {
     "mota": "testua",
     "html": "Bessel-en ekuazioa Frobenius-en bidez ebazten da; <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><mi>p</mi></mrow></math> erro indizialak, koefizienteen errekurrentzia eta Euler-en gamma funtzioaren bidezko normalizazioa lortzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bessel-en ekuazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hartu <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>k</mi></msub><msup><mi>x</mi><mrow><mi>k</mi><mo>+</mo><mi>r</mi></mrow></msup></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> koefizienteak <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ematen du; <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><mi>p</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>p</mi></mrow></math> adarrean, <math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>C</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>2</mn><mi>.</mi></mrow></math> Beraz koefiziente bakoitiak nuluak dira eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ondorioz, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><msup><mi>x</mi><mi>p</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Euler-en gamma funtzioa"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Gamma funtzioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><msup><mi>t</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>s</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. [CORREGIDO: paperean integrandoko berretzailea <math display=\"inline\"><msup><mi>t</mi><mi>s</mi></msup></math> da; errekurrentziarekin bateragarria den definizioak <math display=\"inline\"><msup><mi>t</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msup></math> behar du.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>!</mi></mrow></math> eta <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mn>2</mn><mi>p</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> aukeratuta,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>p</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mi>p</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: paperaren azken definizioan berretzailea <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math> da; aurreko <math display=\"inline\"><mfrac><msup><mi>x</mi><mi>p</mi></msup><msup><mn>2</mn><mi>p</mi></msup></mfrac></math> faktoreak erakusten du <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mi>p</mi></mrow></math> izan behar duela.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>C</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta potentziak <math display=\"inline\"><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>p</mi></mrow></msup></math> dira. <math display=\"inline\"><mrow><mn>2</mn><mi>p</mi></mrow></math> osoa denean bi erroek erresonantzia izan dezakete; bigarren soluzioak termino logaritmikoak behar izan ditzake."
    },
    {
     "mota": "oharra",
     "titulua": "Irakurketa zalantzazkoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Errekurrentziaren aurreko garapen aljebraikoan terminoak gainjarrita daude, baina azken errekurrentzia argia da. <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ondoko oharra «beti positiboa bada» bezala irakurri da."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bessel-en ekuazioa: ordena negatiboko Frobenius-adarra"
    },
    {
     "mota": "testua",
     "html": "Bessel-en ekuazioaren <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math> adarra normalizatu, <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub></math> seriea idatzi eta <math display=\"inline\"><msub><mi>J</mi><mi>p</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub></math> funtzioen independentzia linealaren baldintza zehazten da. 69. orria hutsik dago."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>p</mi></mrow></math> adarraren normalizazioa"
    },
    {
     "mota": "testua",
     "html": "Hartu"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mn>2</mn><mi>p</mi></msup><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>t</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mi>p</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Independentzia lineala eta espeziea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>p</mi></math> osoa ez denean, <math display=\"inline\"><msub><mi>J</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> eta <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> linealki independenteak dira. <math display=\"inline\"><mi>p</mi></math> osoa denean, aldiz, <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>p</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>p</mi></msup><msub><mi>J</mi><mi>p</mi></msub></mrow></math> eta bigarren soluzio independentea bigarren espezieko <math display=\"inline\"><msub><mi>Y</mi><mi>p</mi></msub></math> funtzioaren bidez ematen da."
    },
    {
     "mota": "oharra",
     "titulua": "Egilearen bazterreko oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egileak «Bessel-en bigarren espezieko bi funtzioak, <math display=\"inline\"><mi>p</mi></math> ordenakoak» idazten du. Bi serieak lehen espeziekoak dira, <math display=\"inline\"><mi>p</mi></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>p</mi></mrow></math> ordenetakoak. [CORREGIDO: paperean «bigarren espeziekoak» ageri da; zuzena «lehen espeziekoak» da.]"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Irakurketa zalantzazkoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bazterreko «bigarren espezieko» hitza lotuta dago, baina hori da argazkiko irakurketarik hurbilena. Seriean <math display=\"inline\"><mi>t</mi></math> erabiltzen da eta azken lerroan <math display=\"inline\"><mi>x</mi></math>; egilearen bi aldagaiak gorde dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Koadernotik (CG-01) — serieak eta Frobenius",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 5. orria (METMATCG01_0005, IMG_2025_07_06_20_14_58S.jpg; UPV/EHU ZTF-FCT azterketa-orria, 2015/1/8, erabiltzailearen izenarekin): x²(x+2)y''-4xy'+4y=(3/4)√x seriez + forma normalizatua. GURUTZE-EGIAZTAPENA: homogeneoaren soluzioak = 0002 unitateko y1,y2 (residuoa 0); orakulua y_p=√x/(x+2) (SymPy). s-aljebra eta Laplace L[tf]=-F' egiaztatuak. Azpiindize ilegibleak deklaratuta. Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDO baten serie-saiakera eta orakulua (UPV/EHU azterketa-orria)"
    },
    {
     "mota": "testua",
     "html": "UPV/EHU ZTF-FCT azterketa-orri ofiziala (2015/1/8, «Fisika»). Aztergaia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mi>x</mi></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Berretura-serieko saiakera"
    },
    {
     "mota": "testua",
     "html": "Orriak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> sartu eta birindexatzen du (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math></span>, egiaztatua); tarteko azpiindize batzuk irakurtezinak dira (deklaratua) eta bidea ez da ixten orrian bertan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Forma normalizatua eta kutxako ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Zatituz, orriak kutxa batean biltzen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>4</mn><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msqrt><mi>x</mi></msqrt></mrow><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta marjinan forma guztiz normalizatua (<math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> hutsarekin)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Orakulua (gurutze-egiaztapena 0002 unitatearekin)"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Homogeneoaren soluzioak <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math>\ndira (SymPy, residuoa 0) — <strong>0002 unitateko Wronskiano-ariketaren jatorria orri\nhau da</strong>. 0002-k <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mi>x</mi></msqrt></mrow></math> erabili zuen normalizatu GABE; EDO honetarako\nsistema zuzenak forma normalizatuko <math display=\"inline\"><mi>r</mi></math> eskatzen du.</em>"
    },
    {
     "mota": "testua",
     "html": "Parametroen aldakuntzaz (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mi>x</mi></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>x</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>3</mn><mrow><mn>2</mn><msqrt><mi>x</mi></msqrt></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><msqrt><mi>x</mi></msqrt><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math>-k EDO osoa betetzen du (residuoa 0). <strong>Hau da ariketaren orakulua.</strong>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Oineko ohar solteak"
    },
    {
     "mota": "testua",
     "html": "Bessel-itxurako ekuazio bat (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>8</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, oharra), <math display=\"inline\"><mi>s</mi></math>-aljebra zuzena (<math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mi>s</mi><mo>−</mo><mn>16</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) eta Laplace-ren propietatea, egiaztatua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0005</code>, UPV/EHU ZTF-FCT azterketa-orria, 2015/1/8; <code>IMG_2025_07_06_20_14_58S.jpg</code>; erabiltzailearen izena goiburuan — autoretza osoa). Serie-birindexazio nagusia, homogeneoaren bi soluzioak, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msqrt><mi>x</mi></msqrt><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orakulua, <math display=\"inline\"><mi>s</mi></math>-aljebra eta Laplace SymPy-z egiaztatuak. Azpiindize ilegibleak eta datu lausoak zalantzetan deklaratuak; zuzenketarik EZ. ⭐ Gurutze-erreferentzia: 0002 unitatearen ariketa orri honetatik dator (atzera-oharra 0002-n). Ikus <code>koadernoa_metmatcg01_p005.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 6. orria (METMATCG01_0006, IMG_2025_07_06_20_15_09S.jpg): lan-orri arina — sistema lineal baten hasiera (matrizea (-1 1;-1 -1), autobalioak -1±i, foku egonkorra) eta 0005-eko EDOaren ANALISI INDIZIALA (Frobenius): p0=-2, q0=2, erro indizialak 1,2 = y1,y2-ren esponente nagusiak. SymPy-z egiaztatua; koefiziente-akatsa (-4λ vs -2λ) autoreak faktorizazioan zuzendua. Hirugarren gurutzea 0005/0002 katearekin. Konfiantza altua",
     "hizkuntza": "es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Analisi indiziala (Frobenius) eta sistema lineal baten hasiera"
    },
    {
     "mota": "testua",
     "html": "Lan-orri arina, bi ariketaren hasierekin."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Sistema lineal ez-homogeneoa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zati linealaren matrizea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da: polinomio karakteristikoa <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>2</mn></mrow></math>, autobalioak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math> — <strong>foku (espiral) egonkorra</strong>. (Ariketa ez da orrian garatzen.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "0005-eko EDOaren analisi indiziala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuaziorako (0005-eko homogeneoa), forma normalizatuan <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; puntu singular erregularra <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mi>P</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ekuazio indiziala:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Iturriak lerro batean <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mi>λ</mi></mrow></math> idatzi zuen <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math>-ren ordez\n(<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>5</mn><mi>λ</mi></mrow></math> okerra), baina <strong>bere faktorizazioak berak zuzentzen du</strong>:\n<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>s</mi><mo>+</mo><mn>2</mn></mrow></math>, Ruffini-ren zatiketak baieztatua (hondarra 0). Hemen\nzuzenduta.</em>"
    },
    {
     "mota": "testua",
     "html": "⭐ <strong>Gurutze-egiaztapena 0005-ekin:</strong> erro indizialak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> dira, hain zuzen 0005-eko soluzioen esponente nagusiak: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math>). Frobenius-ek zirkulua ixten du: 0005-ek soluzioak eman, 0006-k haien esponenteak baieztatzen ditu."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0006</code>, orri soltea, datarik gabe;"
      },
      {
       "mota": "testua",
       "html": "<code>IMG_2025_07_06_20_15_09S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": "). <strong>Pisua: arina</strong> (orri erdi hutsa). Bi ariketaren hasierak: sistema lineala (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>, foku egonkorra) eta 0005-eko EDOaren analisi indiziala (erroak 1, 2). Dena SymPy-z egiaztatua."
      },
      {
       "mota": "testua",
       "html": "<span>⚠ Koefiziente-akatsa mentzioarekin</span>"
      },
      {
       "mota": "testua",
       "html": "(<math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mi>λ</mi></mrow></math> vs <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math>), autoreak berak faktorizazioan zuzendua. Irakurketa-zalantzak (x+4 vs x+2, √8 vs √x) deklaratuak. ⭐ Hirugarren gurutzea 0005/0002 katearekin. Ikus <code>koadernoa_metmatcg01_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 117. unitatea (METMATCG01_0117, IMG_2025_07_12_12_26_03S.jpg; «12/12/2011», 17. ariketa): Frobenius-en metodoa 4x^2 y''+2x(1-x)y'-xy=0 ekuaziorako — indize-ekuazioa 4lambda^2-2lambda=0 (lambda=0,1/2), errekurrentzia a_n=a_(n-1)/(2(n+lambda)); lambda=0 -> a_n=a_0/(2^n n!) -> y1=e^{x/2}; lambda=1/2 -> a_n=a_0/(2n+1)!! -> y2=e^{x/2} erf(sqrt(x/2)). SymPy-z egiaztatua (y1,y2 residuoa 0; dsolve-k berresten). Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en metodoa: <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularraren inguruan, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></mrow></math> saiatuz."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Indize-ekuazioa eta errekurrentzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>x</mi><mi>λ</mi></msup></math> mailako gaiak berdinduz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>4</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Errekurrentzia orokorra:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Lehen soluzioa (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bigarren soluzioa (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math></span> (bakoitien biderkadura <math display=\"inline\"><mrow><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mn>5</mn><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), beraz <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msqrt><mi>x</mi></msqrt><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mi>!</mi></mrow></math>, forma itxian:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorra: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erf</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Serieen konbergentzia D&#x27;Alembert-en irizpideaz egiaztatzen da (erradio infinitua)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Indize-ekuazioa, errekurrentzia eta bi soluzioak SymPy-z egiaztatuak:\n<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mtext mathvariant=\"normal\">erf</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> biek residuoa 0 ematen dute EDOan.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0117</code>, <code>IMG_2025_07_12_12_26_03S.jpg</code>; «MÉTODO M.» lotea, «12/12/2011», 17. ariketa). Frobenius-en soluzio osoa, bigarren soluzioaren forma itxiarekin (errore-funtzioa). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p117.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 118. unitatea (METMATCG01_0118, IMG_2025_07_12_12_26_11S.jpg): Frobenius y''(x-1)-y'(x-3)-y=0 (= «Bestelako Ariketak III» boletineko 17. ariketa). z=x-1 aldaketaz z^2 y''-z^2 y'+2z y'-z y=0; indize-ekuazioa lambda^2+lambda=0 (lambda=0,-1), errekurrentzia a_n=a_(n-1)/(n+lambda+1); lambda=0 -> y=(a0/z)(e^z-1), lambda=-1 -> y=(a0/z)e^z; soluzio orokorra y=A e^x/(x-1)+B/(x-1). SymPy-z egiaztatua (oinarri biak eta orokorra residuoa 0). Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en metodoa: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "«Bestelako Ariketak III» boletineko 17. ariketa. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> puntu singularra da; <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> aldaketaz Frobenius aplikatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Aldaketa eta indize-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>3</mn><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn></mrow></math>) eginda eta <math display=\"inline\"><mi>z</mi></math>-z biderkatuta: <math display=\"inline\"><mrow><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>z</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>z</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>λ</mi><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bi soluzioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>, beraz <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>z</mi><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>z</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, beraz <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>z</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msub><mi>a</mi><mn>0</mn></msub><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msup><mi>z</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mi>z</mi></msup></mrow></math></span>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "Konbinatuz eta <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> berrezarriz (<math display=\"inline\"><mrow><msup><mi>e</mi><mi>z</mi></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math>, konstanteak berrizendatuz):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Indize-ekuazioa, errekurrentziak eta soluzioa SymPy-z egiaztatuak:\n<math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oinarri-soluzioek (eta konbinazio orokorrak) residuoa 0\nematen dute EDOan.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0118</code>, <code>IMG_2025_07_12_12_26_11S.jpg</code>; «MÉTODO M.» lotea). «Bestelako Ariketak III» boletineko 17. ariketaren Frobenius-en soluzio osoa (boletina inprimatuta 0111/0112-n). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p118.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 132. unitatea (METMATCG01_0132, IMG_2025_07_12_12_28_48S.jpg; «M. METHODS 25/11/2015»): funtzio bikoiti/bakoitiaren deskonposaketa (f=bakoitia+bikoitia; serie par/inpar) + Frobenius (x^2-1)y''+4xy'+2y=0 x=1-en (u=x-1, u(u+2)y''+4(u+1)y'+2y=0, indizea 2lambda(lambda+1)=0 -> lambda=0,-1) + serie geometrikoa 1/(1-x^2)=sum x^{2n}. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funtzio bikoiti/bakoitiak, Frobenius eta serie geometrikoa"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bikoiti/bakoiti deskonposaketa"
    },
    {
     "mota": "testua",
     "html": "Edozein funtzio parte bakoiti eta bikoitian bana daiteke:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><munder><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></munder><mo>+</mo><munder><munder><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitia</mtext></mrow></munder><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bakoitia: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>); bikoitia: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>). Serie moduan: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mo>+</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></math> (bikoitia + bakoitia)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> inguruan)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> eginda (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><mo>=</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> indizea: </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>2</mn><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da; orri honek indize-ekuazioraino iristen da.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Serie geometrikoa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Bikoiti/bakoiti deskonposaketa, Frobenius-en transformazioa eta indize-ekuazioa\n(<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>), eta serie geometrikoa SymPy-z egiaztatuak.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0132</code>, <code>IMG_2025_07_12_12_28_48S.jpg</code>; «MÉTODO M.» lotea, «25/11/2015»). Bikoiti/bakoiti + Frobenius (indizeraino) + serie geometrikoa. SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 133. unitatea (METMATCG01_0133, IMG_2025_07_12_12_28_57S.jpg; 0132ren jarraipena): (x^2-1)y''+4xy'+2y=0 -ren serie-soluzioa x=0-en (puntu arrunta; x=+-1 singularrak). Errekurrentzia a_{n+2}=a_n (n(n-1)+4n+2=(n+1)(n+2)) -> bikoitiak a0, bakoitiak a1; soluzioa y=(A1+A2 x)/(1-x^2) (|x|<1). Behean x=1 Frobenius (0132tik). SymPy-z egiaztatua (oinarri biak residuoa 0). Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie-soluzioa: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arruntean)"
    },
    {
     "mota": "testua",
     "html": "0132ren jarraipena. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arrunta da; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> singularrak. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n potentzia-seriez ebazten da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Errekurrentzia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> ordezkatuta, <math display=\"inline\"><msup><mi>x</mi><mn>0</mn></msup></math> eta <math display=\"inline\"><msup><mi>x</mi><mn>1</mn></msup></math> mailetatik <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math>; gainerakoan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz gai bikoiti guztiak <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> dira eta bakoiti guztiak <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzioa"
    },
    {
     "mota": "testua",
     "html": "Serie geometrikoak erabiliz (<math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Konbergentzia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> izan ezik). <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> singularraren inguruan Frobenius aplikatzen da (ikus 0132; indizea <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Errekurrentzia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>, oinarri-soluzioak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta\nsoluzio orokorra SymPy-z egiaztatuak (residuoa 0). 0132 unitatearekin batera ebazten da ekuazioa.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0133</code>, <code>IMG_2025_07_12_12_28_57S.jpg</code>; «MÉTODO M.» lotea, «25/11/2015»). <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren serie-soluzioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n (0132ren jarraipena, non <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Frobenius-ez planteatzen den). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p133.typ</code> eta <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 134. unitatea (METMATCG01_0134, IMG_2025_07_12_12_29_05S.jpg; 0132-0133ren amaiera): (x^2-1)y''+4xy'+2y=0 ebazpena x=1-en. Frobenius lambda=0: a_{n+1}=-1/2 a_n -> y1=2/(x+1); D'Alembert-ez (P=4x/(x^2-1), int P=2ln|x^2-1|) y2=1/(2(1-x^2)); soluzio orokorra y=(A1+A2 x)/(1-x^2). SymPy-z egiaztatua (y1,y2 residuoa 0). Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: ebazpena <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en (Frobenius + D&#x27;Alembert)"
    },
    {
     "mota": "testua",
     "html": "0132-0133 unitateen amaiera: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> puntu singularrean Frobenius aplikatu eta bigarren soluzioa D&#x27;Alembert-ez (ordena-murrizketa) lortzen da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>) eta lehen soluzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> delarik, errekurrentzia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></munder><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>u</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>u</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bigarren soluzioa (D&#x27;Alembert)"
    },
    {
     "mota": "testua",
     "html": "Indize-erroak osoz bereizten direnez, bigarrena ordena-murrizketaz. <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>4</mn><mi>x</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio orokorra"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "0133ko emaitzarekin bat (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu arruntetik lortua)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Errekurrentzia <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, D&#x27;Alembert-en <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>\neta soluzio orokorra SymPy-z egiaztatuak (residuoa 0). Metodoa: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math>\nFrobenius, gero D&#x27;Alembert <math display=\"inline\"><mrow><mo>→</mo><msub><mi>y</mi><mn>2</mn></msub></mrow></math>.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0134</code>, <code>IMG_2025_07_12_12_29_05S.jpg</code>; «MÉTODO M.» lotea). <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ren ebazpena <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en (0132-0133ren amaiera). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p134.typ</code>,"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p133.typ</code>"
      },
      {
       "mota": "testua",
       "html": "eta <code>koadernoa_metmatcg01_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 145. unitatea (METMATCG01_0145, IMG_2025_07_12_12_30_53S.jpg; euskaraz): serie-ebazpena, zein beta-rentzat (1+x^2)y''-2xy'+beta·y=0 ekuazioak soluzio polinomikoak. Errekurrentzia a_{n+2}=-(n^2-3n+beta)/((n+1)(n+2))·a_n; eteten da beta=n(3-n) denean. beta=0 → y=A+B(x+x^3/3); beta=2 → y=Ax+B(1-x^2). SymPy-z egiaztatua (a5 izend.=120). Konfiantza altua",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie-ebazpena: soluzio polinomikoak (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<strong>Galdera:</strong> zein <math display=\"inline\"><mi>β</mi></math>-rentzat onartzen ditu <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioak soluzio <strong>polinomikoak</strong>? <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> ordezkatuz eta <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> berdinduz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen koefizienteak: <math display=\"block\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>β</mi><mn>2</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>−</mo><mi>β</mi></mrow><mn>6</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>24</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mfrac><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>120</mn></mfrac><msub><mi>a</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Polinomio-baldintza"
    },
    {
     "mota": "testua",
     "html": "Seriea eteten da <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> betetzen bada, hots <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> kasuetan <strong>bi</strong> soluzioak dira polinomikoak:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>β</mi></math>",
      "koefizienteak",
      "<strong>soluzio orokorra</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mn>3</mn><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mn>2</mn></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>5</mn></msub><mo>=</mo><mn>0</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>-rako soluzio orokorra <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mtext mathvariant=\"normal\">SOL </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Errekurrentzia, koefizienteak eta soluzio polinomikoak (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>) SymPy-z\negiaztatuak, zuzenketarik gabe. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldintzak beste balio batzuk ere onartzen ditu\n(adib. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>−</mi><mn>4</mn><mo>→</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>), baina horietan soluzio bakarra da polinomikoa; <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> eta\n<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> dira soluzio orokor osoa polinomikoa dutenak.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0145</code>, <code>IMG_2025_07_12_12_30_53S.jpg</code>). Serie bidezko ebazpena (euskaraz): <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, soluzio polinomikoak <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>-rako. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p145.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 157. unitatea (METMATCG01_0157, IMG_2025_07_12_12_32_41S.jpg; «METODO MATEMATIKOAK», 3/12/2014): 2. ordenako EDO lineala (x^2-3x+2)y'' - 2(3-2x)y' + 2y = 1. FROBENIUSEN singularitateak: puntu singular erregularrak x=1, x=2 (p0=2, q0=0). EBAZPEN ZUZENA: EDO zehatza aldagai-aldaketa bidez u=(x^2-3x+2)y -> u''=1 -> u=x^2/2+Ax+B -> soluzio orokor itxia y(x)=(Ax+B)/(x^2-3x+2) + 1/2. Soluzio-kurben portaera-grafikoa. ⚠ Zuzenketa txikia: manuskrituko 5-2x lapsusa 3-2x-ra zuzendua. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDO zehatza eta Frobeniusen singularitateak"
    },
    {
     "mota": "testua",
     "html": "Bigarren ordenako ekuazio diferentzial lineal ez-homogeneoa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Puntu singularrak eta Frobeniusen metodoa"
    },
    {
     "mota": "testua",
     "html": "Forma normalizatuan idatzita (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Izendatzailearen erroetan (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>) koefizienteak singularrak dira:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>1</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> eta <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>1</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> <math display=\"inline\"><mrow><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> <strong>puntu singular erregularra</strong> da.",
      "<math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>2</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> eta <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>2</mn></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>&lt;</mo><mi>∞</mi></mrow></math> <math display=\"inline\"><mrow><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> <strong>puntu singular erregularra</strong> da."
     ]
    },
    {
     "mota": "testua",
     "html": "Puntu horien inguruan potentzia-serie orokortuen metodoa (<strong>Frobenius</strong>) aplika daiteke (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> aldagai-aldaketaz). Edozein <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>∉</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> puntu arruntaren inguruan, berriz, Taylor serie arrunta erabil daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ebazpen zuzena: EDO zehatza eta aldagai-aldaketa"
    },
    {
     "mota": "testua",
     "html": "Frobeniusen serie-garapenetara jo gabe, ekuazioak egitura <strong>zehatza</strong> du. <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio laguntzailea definituz: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kontuan hartuz <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ezkerraldea <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren berdina da zehazki. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi aldiz zuzenean integratuz: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>A</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> askatuz: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zati partikularra deskonposatuz: <math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></math> terminoa zati homogeneoan integratzen denez (<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> konstanteen berdefinizio bidez), soluzio orokorra forma itxi sinpleenean geratzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Soluzio-kurben portaera"
    },
    {
     "mota": "irudia",
     "oina": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math></span> EDOren soluzio-familiak <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> parametroen balio ezberdinetarako. Marra gorri etenak: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> asintota bertikalak (puntu singularrak). Marra berde puntuatua: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> asintota horizontala (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/b47ac9f7164be071.svg",
     "zabalera": 590
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Ekuazioak Frobeniusen metodoaren puntu singular erregularrak (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>) baditu ere, egitura diferentziala <strong>zehatza</strong> da: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math> hautatuz <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math> ekuazio integragarri arrunta bihurtzen da, serie infiniturik gabe soluzio itxi aljebraiko osoa emanez. Guztia SymPy-z egiaztatua.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0157</code>, <code>IMG_2025_07_12_12_32_41S.jpg</code>). Data: 2014-12-03. Gaia: Bigarren ordenako EDOa, puntu singular erregularrak (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>) eta aldagai-aldaketa bidezko ebazpen zehatza (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math>). Erratak: manuskrituko <math display=\"inline\"><mrow><mn>5</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math> lapsusa <math display=\"inline\"><mrow><mn>3</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math> koefizientearekin zuzendua. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p157.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 159. unitatea (METMATCG01_0159, IMG_2025_07_12_12_34_24S.jpg): sin x-ren Taylor seriea eta x^(-1/2) sin x-ren Frobenius/Puiseux garapena. Akatsik ez; SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-ren seriea eta berretzaile erdiosoko garapena"
    },
    {
     "mota": "testua",
     "html": "Sinuaren Maclaurin seriea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></math> faktoreaz biderkatuz, berretzaile bakoitza <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math> unitate jaisten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo>−</mo><mfrac><msup><mi>x</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mfrac><mn>9</mn><mn>2</mn></mfrac></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mfrac><mn>13</mn><mn>2</mn></mfrac></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>⋯</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oro har:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Garapenaren lehen berretzailea <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math> da; beraz, ez da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> inguruko Taylor serie arrunta, baizik eta <strong>Frobenius/Puiseux motako serie orokortua</strong>. Errealetan <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> adarra hartzen da."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Manuskribuko termino guztiak zuzenak dira. Eskuineko adierazpen finituak serie infinituaren hasiera dira; hurrengo terminoa <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mfrac><mn>13</mn><mn>2</mn></mfrac></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac></mrow></math> da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0159 / IMG_2025_07_12_12_34_24S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Orrialde ia hutsa; goiko ezkerreko bi lerroak osorik transkribatu dira. SymPy-z egiaztatua; edizio kritikoa:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p159.typ</code>"
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
   "id": "a11",
   "maila": 2,
   "izenburua": "Koadernotik (CNmet3) — serieak, Frobenius eta Bessel",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 9.-12. orrialdeak (3 zatiki): 'METODO MATEMATIKOAK' errotulua eta 'SERIEEN BIDEZKO SOLUZIOAK' (20/XI/2013) - serieen bidezko ebazpenaren hasiera",
     "hizkuntza": "eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDOak berretura-seriez ebaztea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> inguruko serie erabilgarri batzuk hauek dira: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math> bada, <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup><mi>.</mi></mrow></math> Potentzia bakoitzaren koefizientea zero eginez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mi>k</mi></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Errekurrentziak bi azpisegida independente ematen ditu: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>m</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><mfrac><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math> Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak senoaren eta kosenoaren termino ez-nuluak indize trinko batez zerrendatzen ditu. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>k</mi></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math> notazioan, ordea, beste paritateko koefizienteak zero dira; goiko bi formulek indize erreala argi uzten dute. Ikus <code>koadernoa_metodo_n3_p009.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie-soluzioak eta Cauchy-ren biderkadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren errekurrentziak bi soluzio independente ematen ditu: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Bi serieek konbergentzia-erradio infinitua dute. Serie geometrikoak, aldiz, <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mi>n</mi></msup></mrow></math> garapena du <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> denean; hurbileneko singularitatea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ekuazio lineal orokorra"
    },
    {
     "mota": "testua",
     "html": "Demagun <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo>∑</mo><msub><mi>p</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mo>∑</mo><msub><mi>q</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>. Cauchy-ren biderkadurak <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>-ren koefizientea ematen du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msub><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan koefizienteak biltzeak <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math> ematen du. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren osaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Koadernoak Cauchy-ren bi biderkadurak zuzen abiatzen ditu eta azken adibidea koefizienteak batu aurretik uzten du. Hemen errekurrentzia eta bi adarrak osatu dira; hurrengo orriak <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math> berresten du. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p010.typ</code>"
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
     "testua": "Koefiziente polinomikodun EDO baten serie-soluzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> ordezkatuta, potentzia bereko terminoek <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> ematen dute. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koefiziente bikoitiak eta bakoitiak bereiziz, <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Ondorioz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Konbergentzia-erradioa <math display=\"inline\"><mn>1</mn></math> da, hurbileneko singularitateak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> direlako."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Koadernoak errekurrentzia, bi adarrak eta haien batura geometrikoa zuzen ixten ditu. Beheko azken ekuazio isolatuak ez du aurreko ariketarekin baliokidetasun egiaztagarririk. Ikus <code>koadernoa_metodo_n3_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 13.-21. orrialdeak (7 zatiki): FROBENIUS eta berretura-serieak (21/XI - 29/XI/2013) - errotulu elebidunak ('METODO MATEMATIKOAK / FROBENIUS', 'ECUACIONES DIFERENCIALES / SERIES DE POTENCIAS'), puntu singularrak barne",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en metodoa puntu singular erregularrean"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun <math display=\"block\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi></mrow></math>-z zatitzean <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>x</mi></mrow></mfrac></mrow></math> lortzen dira. <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mn>4</mn></mfrac></mrow></math> analitikoak direnez, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>λ</mi></msup><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> ordezkatuta, ekuazio indiziala <math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>λ</mi><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da; erroak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> dira."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Lehen Frobenius-adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> denean, <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> aukeratuz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>. Hortaz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>≠</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Jarraitutasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bigarren erroak <math display=\"inline\"><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></math>-ko adarra ematen du; hurrengo unitatean garatzen da eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzen da. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p013.typ</code>"
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
     "testua": "Frobenius: bigarren adarra eta erroen diferentzia osoa"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "Frobenius-en errekurrentzia <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> da. <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> aukeratuz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>, eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ordena-jaitsierak emaitza bera ematen du: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math> erabilita, <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>x</mi></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Erroen diferentzia osoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> singular erregularra da eta ekuazio indizialak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>0</mn></mrow></math> ematen du. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> adarrean <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-ko serie puruak <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> behartzen du; bigarren soluzioak termino logaritmikoa behar du. Ordena-jaitsieraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren osaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Paperak lehen ekuazioaren bigarren adarra eta ordena-jaitsiera zuzen garatzen ditu. Bigarren adibidean <code>NO SALE</code> oharrak erro txikiagoko serie puruaren porrota jasotzen du; hemen falta den soluzio logaritmikoa osatu da. Ikus <code>koadernoa_metodo_n3_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en erro osoak: logaritmorik gabeko erresonantzia"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> inguruan. Forma normalean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math> badira,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "analitikoak dira zeroaren inguruan. Hortaz, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da eta Frobenius-en metodoa erabil daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Indize-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Har dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orduan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ekuazioan ordezkatzean, berretura txikiena <math display=\"inline\"><msup><mi>x</mi><mrow><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></math> da. Haren koefizientea nulua izan behar da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>4</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Errekurrentzia orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup></math> berreturaren koefizienteak bilduta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, izendatzailea nulua ez den indizeetan,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> hartuta, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn></mrow></math> eta, oro har, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>. Ondorioz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "Orain,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow></math> aukeratuz, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> indizean errekurrentziak ez du <math display=\"inline\"><msub><mi>a</mi><mn>4</mn></msub></math> zehazten: koefiziente hori libre uzteak lehen soluzioaren multiplo bat eransten du. Bigarren soluzio hutsa lortzeko <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta ondorengoak zero hartzen ditugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi soluzioak jatorrizko ekuazioan zuzenean ordezkatuta egiaztatzen dira. Erroen arteko diferentzia <math display=\"inline\"><mn>4</mn></math> den arren, hemen erresonantziak ez du logaritmorik behartzen. Soluzio orokorra da"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzia-serieak puntu arrunt batean"
    },
    {
     "mota": "testua",
     "html": "Bigarren ordenako EDO lineal baten koefizienteak puntu baten inguruan analitikoak badira, soluzioa puntu horren inguruko potentzia-serie gisa bila daiteke. Prozedura osoa adibide honetan ikusiko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Puntu arruntaren egiaztapena"
    },
    {
     "mota": "testua",
     "html": "Forma normalera pasatuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi koefizienteak analitikoak dira <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> inguruan; beraz, zeroa puntu arrunta da. Idatz dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatuak hauek dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ordezkapena eta indize-aldaketa"
    },
    {
     "mota": "testua",
     "html": "Ekuazioan ordezkatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><mn>2</mn><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>−</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen batura bi zatitan banatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lehen zatian <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></math> aldaketa eginez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msub><msup><mi>x</mi><mi>k</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da. Indize mutua berriro <math display=\"inline\"><mi>n</mi></math> deituta, lau baturek berretura bera dute:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>+</mo><mn>2</mn><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potentzia-serie bat identikoki nulua izateko, koefiziente bakoitzak nulua izan behar du. Hortaz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Errekurrentzia"
    },
    {
     "mota": "testua",
     "html": "Koefiziente berria bakanduz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Errekurrentziak <math display=\"inline\"><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> lotzen ditu; beraz, koefiziente bikoitiak <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>-tik eta bakoitiak <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math>-etik sortzen dira. Bigarren ordenako ekuazioari dagokionez, <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> dira bi parametro askeak. Hurrengo urratsa bi adarrak bereiz kalkulatzea eta serieak funtzio ezagunekin identifikatzea da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentzia-serie baten bi adarrak"
    },
    {
     "mota": "testua",
     "html": "Aurreko kalkuluan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "errekurrentzia lortu da <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuaziorako. Bi indizeko jauziak koefiziente bikoitiak eta bakoitiak elkarren independente bihurtzen ditu."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adar bikoitia"
    },
    {
     "mota": "testua",
     "html": "Lehen soluziorako <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> aukeratuko ditugu. Errekurrentzia indize bikoitietan aplikatuz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></mfrac><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>6</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>6</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>8</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>5</mn><mn>7</mn></mfrac><msub><mi>a</mi><mn>6</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oro har, <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta koefiziente bakoiti guztiak zero dira. Seriea, beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>6</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>8</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Arku tangentearen Maclaurin-en seriea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adar bakoitia"
    },
    {
     "mota": "testua",
     "html": "Bigarren soluziorako <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math> hartuko ditugu. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> jarriz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>0</mn><mn>2</mn></mfrac><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortik aurrera, errekurrentziak koefiziente bakoiti guztiak zero bihurtzen ditu. Koefiziente bikoitiak ere zero dira <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> delako. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Independentzia eta soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntuan,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, wronskiarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><msup><mn>2</mn><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, eta bi soluzioak linealki independenteak dira. Soluzio orokorra:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi mathvariant=\"normal\">arctan</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza jatorrizko ekuazioan ordezkatuta ere egiazta daiteke. Potentzia-serie honen zeroaren inguruko konbergentzia-erradioa <math display=\"inline\"><mn>1</mn></math> da, koefiziente normalizatuek hurbilen dituzten singularitate konplexuak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> baitira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntu singular erregularra eta Frobenius-en metodoa"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Definizioa"
    },
    {
     "mota": "testua",
     "html": "Bigarren ordenako ekuazio lineala forma normalean idatzita badago,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> puntua arrunta da <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> analitikoak badira. Bestela, puntu singularra izan daiteke. Singularitatea <strong>erregularra</strong> da baldin"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-n analitikoak badira. Baldintza horrek Frobenius-en formako soluzioak bilatzeko aukera ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>m</mi></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Adibidea: singularitatearen sailkapena"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ekuazioa zeroaren inguruan. <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>-z zatituta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken bi funtzioak analitikoak dira <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n. Ondorioz, zeroa puntu singular erregularra da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Frobenius-en ordezkapena"
    },
    {
     "mota": "testua",
     "html": "Har dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatuak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Jatorrizko ekuazioan ordezkatuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><mn>3</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>−</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>m</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Indize-ekuazioa"
    },
    {
     "mota": "testua",
     "html": "Berretura txikiena <math display=\"inline\"><msup><mi>x</mi><mrow><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup></math> da. Haren koefizientea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math> denez,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Errekurrentzia eta bi adarrak"
    },
    {
     "mota": "testua",
     "html": "Gainerako berreturak berdintzeko, lehen baturetan <math display=\"inline\"><mi>n</mi></math> eta azkenetan <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> elkartzen dira. <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>-rako,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Faktore komuna kenduta,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> adarrean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>3</mn><mo>⋅</mo><mn>5</mn><mo>⋅</mo><mn>7</mn><mi>…</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta soluzioa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>x</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>15</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>105</mn></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> adarrean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><msup><mn>2</mn><mi>n</mi></msup><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta seriea forma itxian batu daiteke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><msup><mi>e</mi><mfrac><mi>x</mi><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Erroen arteko diferentzia <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math> da; ez da zenbaki osoa, eta bi Frobenius adar independenteak zuzenean lortzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Frobenius-en bi adibide eta ordena-jaitsiera"
    },
    {
     "mota": "testua",
     "html": "Erro indizialen arteko diferentzia zenbaki osoa denean, erro txikienari dagokion seriea huts egin dezake. Horrek ez du beti logaritmo bat agertzea esan nahi: ekuazioaren koefizienteek erabakitzen dute zer gertatzen den. Bi adibideek aukera desberdinak erakusten dituzte."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "1. adibidea: seriea blokeatzen denean"
    },
    {
     "mota": "testua",
     "html": "Har dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma normalean <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math> da; zeroa puntu singular erregularra da, <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> analitikoak direlako."
    },
    {
     "mota": "testua",
     "html": "Frobenius-en forma erabiliko dugu:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Deribatuak ordezkatuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>+</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Berretura txikienaren koefizienteak indize-ekuazioa ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Gainerako terminoetan indizeak berdinduz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta, zatitzailea nulua ez bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mi>n</mi></msub><mrow><mi>n</mi><mo>+</mo><mi>λ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> jarriz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarra eta ordena-jaitsiera"
    },
    {
     "mota": "testua",
     "html": "Erro txikia jartzean, lehen urratsak <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>0</mn></mfrac></mrow></math> eskatuko luke. Hau ez da koefiziente arrunt bat: Frobenius-en errekurrentzia blokeatu egin da. Lehen soluzioa ezagutzen dugunez, D&#x27;Alembert-en formula erabil dezakegu <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></msup><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hemen <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> direnez,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Zatikako integrazioz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen ekuazioaren soluzio orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi mathvariant=\"normal\">Ei</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Bigarren soluzioaren portaera logaritmikoa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">Ei</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren zero inguruko garapenean dago."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "2. adibidea: bi serie arrunt"
    },
    {
     "mota": "testua",
     "html": "Orain azter dezagun"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Forma normalean,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da. Frobenius-en ordezkapenak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "indize-ekuazioa eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mi>λ</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "errekurrentzia ematen ditu."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> hartuta, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>. Beraz,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> adarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> bada,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn></mrow></math> aukeratuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> indizean lehen adarreko <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math>-ren multiploa libre geratzen da. Adar horren ekarpena zero aukeratuta, seriea polinomio batean amaitzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Bigarren oinarri baten baliokidetasuna"
    },
    {
     "mota": "testua",
     "html": "Ordena-jaitsierak beste bigarren soluzio hau ere ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow><mrow><mn>12</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ez da hirugarren soluzio independentea. Identitate hau erabiliz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lortzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mn>12</mn><mfrac><mrow><mn>3</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow><mrow><mn>12</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hortaz, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> oinarriek bi dimentsioko soluzio-espazio bera sortzen dute. Adibide honetan erroen arteko diferentzia osoa izan arren, bi soluzio independenteak logaritmorik gabe lortzen dira."
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 22.-23. orrialdeak (0012 unitatea, orri mistoa): Bessel-en ekuazioa eta funtzio bereziak + egonkortasun-teoriaren hastapena (potentzialak eta fase-espazioak, CeTZ-rekin bektorizatuak) eta ekuazio indiziala / Frobenius-en kasuak; konfiantza ertaina",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bessel-en ekuazioa eta egonkortasunaren hastapenak"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Bessel-en ekuazioa eta funtzioak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Bessel-en ekuazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntu singular erregularra da. Frobenius-en garapena <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>λ</mi></msup><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>c</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> eginda, ekuazio indizialak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>ν</mi></mrow></math> ematen du, eta koefizienteen errekurrentzia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen motako Bessel-en funtzioa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mi>k</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>+</mo><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Gamma funtzioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k faktoriala hedatzen du: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>!</mi><mo>=</mo><mn>6</mn></mrow></math>. Argumentu ez-osoetarako, adibidez <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ez dago faktorial oso arruntik, baina <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-k balio finitua ematen du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ordena ez-osorako (<math display=\"inline\"><mrow><mi>ν</mi><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math>), <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> eta <math display=\"inline\"><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub></math> independenteak dira, wronskiarrak erakusten duen bezala:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>x</mi></mrow></mfrac><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bigarren motako Bessel-en funtzioa (Neumann-en edo Weber-en funtzioa) beti eratzen da bikote independentea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi>J</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>J</mi><mi>ν</mi></msub><mo>,</mo><msub><mi>Y</mi><mi>ν</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Kasua <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-k <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> balioarekin hasten da eta indargetuz oszilatzen du; <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math>-k <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></math> dela dibergentzia logaritmikoa du. Liburuaren kanonaren arabera, lehen motako funtzioa marra jarraituz eta bigarren motakoa marra etenez irudikatzen dira."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> (jarraitua) eta <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> (etena); scipy-rekin, <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren lehen zeroa <math display=\"inline\"><mrow><mi>x</mi><mo>≈</mo><mn>2.405</mn></mrow></math>.",
       "src": "media/irudiak/4a57274d3e5b9581.svg",
       "zabalera": 322
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
        "<strong>EDF-rekin gurutzatua:</strong> matematika bat dator liburuaren kanonarekin (<code>06_series.typ</code> Bessel-en atala): errekurrentzia <math display=\"inline\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>c</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, <math display=\"inline\"><msub><mi>J</mi><mi>ν</mi></msub></math> seriea, <math display=\"inline\"><msub><mi>Y</mi><mi>ν</mi></msub></math> definizioa eta wronskiarra berdinak dira. Notazioa <math display=\"inline\"><mi>ν</mi></math>-ra eta <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>-ra egokitu da (eskuizkribuak <math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><msub><mi>C</mi><mi>n</mi></msub></math> zerabiltzan). <math display=\"inline\"><mfrac><msub><mi>J</mi><mn>0</mn></msub><msub><mi>Y</mi><mn>0</mn></msub></mfrac></math> adibidea <code>04_sistemas.typ</code>-en ere agertzen da.",
        "<strong>Errekurrentzia:</strong> jatorrizko orriak ez du zatiketa-barra argirik; kanonak zatiketa eskatzen du, eta hala jaso da.",
        "<strong>Independentzia:</strong> <math display=\"inline\"><mrow><mi>W</mi><mo>≠</mo><mn>0</mn></mrow></math> denez, funtzioak <strong>linealki independenteak</strong> dira; paperreko <code>lin. dep</code> etiketa osatugabea da.",
        "<strong>Kurbak:</strong> <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> scipy-rekin kalkulatuak dira (ez eskuzko zirriborroa); <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>-ren lehen zeroa <math display=\"inline\"><mrow><mi>x</mi><mo>≈</mo><mn>2.405</mn></mrow></math>-en dago, EDF-ko <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> kurbarekin bat.",
        "<strong>Fase-espazioak:</strong> Duffing-en pozo bikoitzaren erretratu kanonikoa (bi zentro, sela eta zortziko separatriza). Jatorrizkoak zirriborro kualitatiboak dira; ez dira eskala zehatzekoak, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zenbakiz ematen ez delako. Ikus"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p022.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Orria konfiantza ertainarekin onartu zen."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio indiziala eta Frobenius-en kasuak"
    },
    {
     "mota": "testua",
     "html": "Puntu singular erregular batean, indize-ekuazioak <math display=\"inline\"><mi>λ</mi></math> berretzaileak zehazten ditu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>p</mi><mn>0</mn></msub><mi>λ</mi><mo>+</mo><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "<math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Forma normalean <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>. Orduan <math display=\"block\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mi>x</mi><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><msup><mi>x</mi><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Indize-ekuazioa <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da, eta erroak <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p020.typ</code>"
      },
      {
       "mota": "testua",
       "html": "orrialdeak adibide bera garatzen du eta <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>+</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ei</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzioak lortzen ditu."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Frobenius-en bi kasuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erroak errealak izanik, bigarren soluzioaren egitura <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>-ren araberakoa da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> bada, bigarren seriea huts egin dezake; <math display=\"inline\"><msub><mi>y</mi><mn>2</mn></msub></math> lortzeko D&#x27;Alembert-en ordena-murrizketa erabiltzen da.",
        "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>∉</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> bada, erro bakoitzak serie independentea sortzen du normalean, eta bata bestetik atera daiteke."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orria konfiantza ertainarekin onartu zen. <code>PARA 2 TENGA SOLUCIÓN FROBENIUS</code> esaldiko <code>2</code> karakterea irakurketa zalantzazkoa da; paperreko <code>sacar una de la otra</code> formulazio trinkoa ez da teorema estandar gisa zabaldu. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p023.typ</code>"
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
   "id": "a12",
   "maila": 2,
   "izenburua": "Koadernotik (CAx) — serieak eta Green-en funtzioa",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, 26.-27. orrialdeak (0015 unitatea, orri bikoitza; #CAxp26/#CAxp27): serie-ebazpena eta Green-en funtzioa. Euskaraz berriro (alternantzia baieztatuta). Azterketa-ariketa: (a) (1+x^2)y''-2xy'+beta y=0 serie bidez, errekurrentzia a_(n+2)=-(n^2-3n+beta)/((n+2)(n+1)) a_n, trunkatze beta=n(3-n) -> beta=0 (y=1, y=x+x^3/3) eta beta=2 (y=x, y=1-x^2); (b) Green-en funtzioa problema inhomogeneoarena, y(1)=2y(0), y'(1)=2y'(0) -> soilik tribiala -> Green existitzen da. ⭐⭐ HIRU AKATS dokumentatuta: 1 kaltegabea (A=B vs A=2B, emaitza berdina) eta 2 LARRIAK (jauzia (1+z^2)^2 -> zuzena 1/(1+z^2); jarraitutasuneko zeinu-akatsa -> B=D faltsua). Eskuizkribuko Green FINALA OKERRA. EBAZPEN ZUZENA aplikatu da (Comprobacion) akatsak MENTZIONATUZ: A=z/(1+z^2)^2, B=(1+z-z^2)/(2(1+z^2)^2), C=2B, D=(1-z-z^2)/(2(1+z^2)^2). (a) osorik zuzena. SymPy-z egiaztatua (errekurrentzia, 4 soluzioak, Green zuzenaren jarraitutasuna+jauzia). Marrazkirik ez. Konfiantza altua ebazpen matematikoan",
     "hizkuntza": "eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie-ebazpena eta Green-en funtzioa (hiru akats dokumentatuta)"
    },
    {
     "mota": "testua",
     "html": "CAx koaderno horiaren 26.-27. orri bikoitza, <strong>euskaraz</strong> berriro (<math display=\"inline\"><mn>22</mn></math>-<math display=\"inline\"><mn>25</mn></math> ingelesez): alternantzia baieztatuta. Bi ataleko azterketa-ariketa bat, ekuazio diferentzialena. (a) atala <strong>osorik zuzena</strong> da; (b) atalean <strong>hiru akats</strong> daude —bat kaltegabea eta bi larriak—, eta hemen <strong>ebazpen zuzena</strong> ematen da, akatsak banan-banan aipatuz."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(a) Serie-ebazpena: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>β</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> zehaztu <math display=\"inline\"><mi>β</mi></math> parametroaren zein baliotarako duen ekuazioak soluzio polinomikoa. Serie bidez, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math> ordezkatuz eta <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>-ren koefizienteak bilduz: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub><mi>.</mi></mrow></math> Seriea <strong>polinomio</strong> bihurtzen da kortxetea <math display=\"inline\"><mi>n</mi></math> balioren batentzat anulatzen denean, hots <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: gradu baxuko balioak <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>) dira."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mn>2</mn><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lau soluzio polinomikoak, beraz: <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>-rako <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>2</mn></mrow></math>-ren soluzio homogeneo orokorra <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (hurrengo atalerako)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(b) Green-en funtzioa: existentzia eta ebazpena"
    },
    {
     "mota": "testua",
     "html": "<strong>Enuntziatua (euskaraz):</strong> aurreko <math display=\"inline\"><mi>β</mi></math> balioetan oinarrituz, lortu problemaren Green-en funtzioa existitzen bada; bestela, azaldu zergatik. Problema: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Existentzia.</strong> Homogeneoak (<math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) mugalde-baldintzak bete behar ditu: <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>2</mn><msub><mi>y</mi><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi>y</mi><mi>h</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>B</mi><mo>=</mo><mn>2</mn><msubsup><mi>y</mi><mi>h</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>. Sistemak (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>) <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> soluzio <strong>tribiala bakarrik</strong> onartzen du; beraz Green-en funtzioa <strong>existitzen da</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Green-en funtzioaren ebazpena.</strong> Bila dezagun <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>G</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>G</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>G</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Hiru baldintza ezartzen dira:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Mugaldea:</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>; eta <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>C</mi><mo>−</mo><mn>2</mn><mi>D</mi><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi></mrow></math>.",
      "<strong>Jarraitutasuna</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>-n: <math display=\"inline\"><mrow><mi>A</mi><mi>z</mi><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mi>z</mi><mo>+</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, hots <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "<strong>Deribatuaren jauzia:</strong> ekuazioa <math display=\"inline\"><mi>z</mi></math>-ren ingurunean integratuz eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> jarraitua denez, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><msubsup><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>z</mi><mo>−</mo></msup><msup><mi>z</mi><mo>+</mo></msup></msubsup><mo>=</mo><mn>1</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><msubsup><mo stretchy=\"false\" form=\"postfix\">]</mo><msup><mi>z</mi><mo>−</mo></msup><msup><mi>z</mi><mo>+</mo></msup></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. Kortxeteak garatuz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>+</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Jarraitutasunetik <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>k</mi><mi>D</mi></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>) eta jauziaren ekuazioan ordezkatuz: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi><mo>=</mo><mfrac><mi>z</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Beraz Green-en funtzio <strong>zuzena</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Hiru akats dokumentatuta (eskuizkribuko Green finala okerra da)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskuizkribuak (b) ondo <strong>planteatzen</strong> du —hiru baldintzak eta existentzia zuzenak dira— baina <strong>hiru akats</strong> ditu algebran; ebazpen zuzena goikoa da."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Akats 1 (<math display=\"inline\"><mn>26</mn></math>. or., kaltegabea):</strong> <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi></mrow></math> idazten du (<math display=\"inline\"><mrow><mn>2</mn><mi>B</mi></mrow></math> ordez), eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math> ondorioztatzen du (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math> ordez). <strong>Emaitza ez da aldatzen</strong>: bai (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>), bai (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>B</mi></mrow></math>) sistemek <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> dute soluzio bakarra, beraz Green-en funtzioa existitzen delako ondorioa zuzena da.",
        "<strong>Akats 2 (<math display=\"inline\"><mn>27</mn></math>. or., larria) — jauziaren balioa:</strong> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> definitzen du eta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>p</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> hartzen du jauzitzat. Zuzena <math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></math> da (ekuazioa integratuz, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn></mrow></math>). Faktore integratzailea (<math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></math>, Sturm-Liouville formakoa) eta <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>-z zatitzea <strong>letra bakarrean</strong> (<math display=\"inline\"><mi>p</mi></math>) nahastean, bi efektuak metatu egiten dira, kendu beharrean.",
        "<strong>Akats 3 (<math display=\"inline\"><mn>27</mn></math>. or., larria) — zeinua jarraitutasunean:</strong> <math display=\"inline\"><mrow><mi>B</mi><mi>z</mi><mo>−</mo><mi>D</mi><mi>z</mi><mo>+</mo><mi>B</mi><mo>−</mo><mi>B</mi><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>B</mi><mi>z</mi><mo>+</mo><mi>D</mi><mo>−</mo><mi>D</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math> (zuzena) lerrotik <math display=\"inline\"><mrow><mi>−</mi><mi>B</mi><mi>z</mi><mo>+</mo><mi>B</mi><mo>−</mo><mi>B</mi><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mi>D</mi><mo>−</mo><mi>D</mi><mi>z</mi><mo>−</mo><mi>D</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math>-ra pasatzean, <math display=\"inline\"><mrow><mi>−</mi><mi>D</mi><mi>z</mi></mrow></math> bigarren gaira eramatean <math display=\"inline\"><mrow><mi>+</mi><mi>D</mi><mi>z</mi></mrow></math> izan behar zuen; <math display=\"inline\"><mrow><mi>−</mi><mi>D</mi><mi>z</mi></mrow></math> utzita, bi aldeek <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> faktorea partekatzen dute eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math> «ondorioztatzen» da (eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>). Zuzena <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da: parentesiak <strong>ez</strong> dira berdinak, beraz <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math> faltsua da."
       ]
      },
      {
       "mota": "testua",
       "html": "Bi akats larrien ondorioz, eskuizkribuko <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> eta Green finala okerrak dira (zuzenak <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> <strong>izendatzailean</strong> darama). SymPy-z: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>D</mi></mrow></math> hartuz gero <math display=\"inline\"><mi>G</mi></math> <strong>ez litzateke jarraitua</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>-n (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> ez bada)."
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
        "<strong>Berregiaztatua (SymPy):</strong> (a) <strong>osorik zuzena</strong>. Errekurrentzia <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>n</mi><mo>+</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mi>a</mi><mi>n</mi></msub></mrow></math></span>; trunkatze-baldintza <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math> gradu baxuan). Lau soluzioak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>) ekuazioan ordezkatuta <math display=\"inline\"><mn>0</mn></math> ematen dute. (b) Green zuzena: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>2</mn><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>B</mi><mo>−</mo><mi>D</mi></mrow></math>, jarraitutasuna (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>-n diferentzia <math display=\"inline\"><mn>0</mn></math>) eta jauzia (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>) betetzen dira, denak egiaztatuta. (Ez dago probabilitate-corpusean; SymPy-z egiaztatua.)",
        "<strong>⭐⭐ Hiru akats (goiko oharpena), CON mención:</strong> (a) ondo; (b)-ko planteamendua ondo, exekuzioan <strong>akats bat kaltegabea eta bi larriak</strong>. Ebazpen zuzena osorik eman da (Comprobación-eko urratsak aplikatuz); eskuizkribuko Green finala okerra da. Ez da corpuseko lehen aldia: planteamendua zutik, tarteko algebra hausten dena.",
        "<strong>Ez da ukitu (grafia/zalantzak):</strong> <math display=\"inline\"><mn>26</mn></math>. orriko goi-eskuineko marjina-oharra (sei lerro) da irakurtezin bakarra (ortogonalizazioaren gogorarazlea dirudi, baina ez da berretsi); «<math display=\"inline\"><mtext mathvariant=\"normal\">BENAZ</mtext></math>» (<math display=\"inline\"><mo>→</mo></math> «beraz») eta «<math display=\"inline\"><mtext mathvariant=\"normal\">SOUERO</mtext></math>» grafia-zalantzak dira, ez kalkulua. Marjinako oharrak <strong>transkribatu</strong> dira, ez zuzendu.",
        "<strong>Fidelitatea (konfiantza altua ebazpen matematikoan):</strong> iturria euskaraz; (a) hitzez hitz jarraituta, (b)-ren <strong>ebazpen zuzena</strong> emanda akatsak aipatuz (garapen okerra ez da literal-geruzan berridatzi, baina emaitza zuzena hemen dago). Bi etiketa kanoniko: <code>#CAxp26</code>, <code>#CAxp27</code>. Ikus <code>koadernoa_cax_p026.typ</code>."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Metodo hurbilduak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-epigrafea\"><em>Although this may seem a paradox,<br>zientzia zehatz oro hurbiltasunaren ideiak menperatzen du.</em><br><span class=\"j-smallcaps\">Bertrand Russell</span></span>"
    },
    {
     "mota": "testua",
     "html": "Egiazki, oso integral gutxi gara gai modu zehatzean ebazteko, edo hurbilketarik gabeko ebazpen-metodoak ezagutzen ditugun ekuazio finitu gutxi (gogora ditzagun, adibidez, funtzio transzendenteak dituzten ekuazioek eta, are, laugarrenaz goragoko ordenako polinomikoek sortzen dituzten problemak), eta beraz ez gintuzke harritu behar ekuazio diferentzial gehienek gure ebazpen esplizitu zehatzaren ahaleginei eustea. Kasu praktiko gehienetan hurbilketaren bat erabili behar da. Ekuazioak soluzio zehatza badu ere, hura hain korapilatsua izan daiteke ezen erabilgarritasun txiki edo nulukoa baita, bereziki gidatzen gaituen helburua praktikoa bada eta nahi duguna soluzioaren balioa (hurbildua) kasu interesgarri batzuetan kalkulatzea bada. (Testuinguru ezagunago batean gogora dezakegu zein gutxi erabilgarriak diren, oro har, hirugarren eta laugarren mailako ekuazio aljebraikoen soluzioak Cardano<span class=\"j-oin\">[<strong>Girolamo Cardano</strong> (1501-09-24, Pavia, Milango Dukerria; 1576-09-21, Erroma). Sendagile eta matematikari hau bere latinezko eta ingelesezko izenagatik ere ezaguna da: Cardan. Bere maisulanak, <em>Ars Magna</em>-k (1545), ekuazio kubiko eta kuartikoaren erro bidezko ebazpen-metodoen argitalpena ekarri zuen, funtsean Scipione del Ferro eta Tartagliari zor zaizkienak, lehen kasuan, eta Ferrariri, laugarren mailako ekuazioaren kasuan.]</span> eta Ferrari<span class=\"j-oin\">[<strong>Ludovico Ferrari</strong> (1522-02-02, Bolonia, Estatu Pontifizioak; 1565-10-05, Bolonia). Cardanok bere postua utzi zion ikasle honek hemezortzi urte zituela. Ekuazio kuartikoaren erro bidezko ebazpen-metodoa aurkitu zuen, baina ezin izan zen argitaratu Cardanok kubikoaren soluzioa (berak Ferrarirengandik erabiltzen zuena eta Tartagliak Cardanori isilpean jakinarazi ziona) Ferroren (lehenagoko) paperen artean ere zegoela aurkitu zuen arte.]</span> metodoek lortutakoak.)"
    },
    {
     "mota": "testua",
     "html": "Aurrera dezagun kapitulu bakar batek ezin diola justizia egin metodo hurbilduek fisikaren benetako praktikan duten garrantziari. Testuetan jaso ohi diren metodo grafikoak (isoklinak, etab.) ere erabat alde batera utziko ditugu, propietate kualitatiboak aztertzeko beren garrantzia gordetzen badute ere (testuinguru murriztu batean, 8. kapituluan ikusiko dugun bezala), ebazpen-metodo hurbildu gisa ia erabat ordezkatu baitituzte eskura ditugun metodo numeriko ahaltsuek. Hasteko, hurbilketa analitikoaren zenbait metodo klasiko elemental ikusiko ditugu, perturbazioen teoriaren begirada bat barne, zeinak, nahitaez mugatua izan arren, irakurleak teknika honekiko interesa piztu baitezake, zeinaren garrantzia fisikan zaila baita gehiegi balioestea. Metodo numerikoak gaur egun praktikan hain garrantzitsuak dira ezen ikasgai aparte bat merezi baitute, baina gutxienez alderdirik elementalenak aztertuko ditugu gero eta gehiagoren eskura dauden errutina eraginkorren «magia» ezkutatzen duen errezela partzialki kentzeko (ikus bibliografia 321. orrialdetik aurrera)."
    },
    {
     "mota": "testua",
     "html": "Kapituluaren maila elementalak askotan lehen (edo bigarren) ordenako ekuazio diferentzial bakar baten kasua soilik hartzera eramango gaitu, beharrezkoak ez diren konplikazio teknikoak (eta, are, notaziokoak) saihesteko. Hala ere, esandakoaren gehiena erraz heda daiteke ordena handiagoko ekuazioetara eta ekuazio-sistemetara: askotan aski da indize bat gehitzea aldagai mendekoak edo ezezagunaren deribatuak zerrendatzeko."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Magnitude-ordenaren ikurra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Esango dugu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioa <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <strong>magnitude-ordenakoa</strong> dela <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>  <strong>denean</strong>, eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatziko dugu, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zatidura bornatuta mantentzen bada <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> denean, zeina bereziki gertatzen baita <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> existitzen bada eta finitua bada."
    },
    {
     "mota": "testua",
     "html": "«<math display=\"inline\"><mi>O</mi></math>»-k <strong>Landau-ren ikur</strong> edo Bachmann-Landau-ren ikur izena hartzen du eta asko erabiltzen da laburdura gisa kalkulu hurbilduetan. Askotan <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> limitearen aipamen esplizitua kentzen da <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-ren balioa (normalean <math display=\"inline\"><mn>0</mn></math> edo <math display=\"inline\"><mi>∞</mi></math>) testuingurutik ondorioztatzen bada."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu, zehazteko dagoen <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-rako, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> betetzen direla. Egia al da <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>? Eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu hurrengo erlazioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> denean (a)  <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><msqrt><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi></mrow></msup></mrow></msqrt></mrow></math>, (b) <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, (c)  <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta (d)  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak baliokideak direla <math display=\"inline\"><mrow><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> moduluan. Zer gertatzen da <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean?"
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Berreduren serieak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1.4 atalean esandakoagatik, metodo hurbildu ia nabari bat berreduren serie bat eraikitzean datza <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> honako formako hasierako baldintzen problema baten soluziorako <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math> Kontuan izan planteamendua 6. kapituluan egindakoaren desberdina dela, han ekuazio <em>lineal</em> baten soluzio <em>guztiak</em> aurkitzea baitzen kontua, eta orain, berriz, ekuazio <em>ez nahitaez lineal</em> baten soluzio <em>partikular</em> bat nahi dugu. Gainera, kapitulu hartan serieen gai guztiak kalkulatzen ziren, batzuetan batu zitezkeenak edo funtzio bereziak definitzen zituztenak, eta orain, berriz, gutxitan pasa ahal izango da seriearen lehen gaiak kalkulatzetik. Serie trunkatuak soluzioa modu arrazoizkoan hurbilduko du <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> «nahikoa txikia» denerako, nahiz eta enuntziatu hau zehatzago egitea ia beti ezinezkoa den praktikan, non gutxitan froga baitaiteke benetan egindako hurbilketen kalitatea. Metodo hurbilduen praktikan asko erabiltzen den irizpide bat —zorrozki ezer ere frogatzen ez badu ere— hurbilketa fin bat (seriearen gai bat gehiago, adibidez) kalkulatzean eta interesatzen den tartean iragarpenak gainditu nahi ez den errore-marjinaren gainetik aldatzen ez direla egiaztatzean datza."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Taylor-en seriearen metodoa"
    },
    {
     "mota": "testua",
     "html": "Soluzioaren Taylor-en seriea<span class=\"j-oin\">[<strong>Brook Taylor</strong> (1685-08-18, Edmonton, Ingalaterra; 1731-12-29, Londres). Diferentzia finituen kalkulua, zatikako integrazioa eta bere izena daraman formula asmatu zituen. Hurbilketen teorian, mekanikan eta magnetismoan ere lan egin zuen, eta perspektibaren oinarriak ezarri zituen.]</span>  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> puntuaren inguruan eraikitzeko, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mrow></math> koefizienteak, hau da, <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>-ko deribatuak, ekuazioaren eta haren deribatuen ondorio gisa sistematikoki aurki daitezkeen gertaera erabil dezakegu, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "hasierako baldintzarekin eta hura aurreko adierazpenetan ordezkatuz lortzen diren balioekin batera: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Har dezagun adibide gisa ekuazioa <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo></mrow></math> zeina John Bernoullik 1694an eta Riccatik (Riccatiren ekuazioa da «berez») 1724an aztertu baitzuen."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu Riccatiren ekuazioaren soluzio orok betetzen duela: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>‴</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>″</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>‴</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "eta aurkitu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasierako baldintzari dagokion soluzioa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu Riccatiren ekuazio honen <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-rako soluzioa, James Bernoullik 1703an aztertu zuena, hau dela <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>63</mn></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>2079</mn></mfrac><msup><mi>x</mi><mn>11</mn></msup><mo>+</mo><mfrac><mn>13</mn><mn>218295</mn></mfrac><msup><mi>x</mi><mn>15</mn></msup><mo>+</mo><mfrac><mn>46</mn><mn>12442815</mn></mfrac><msup><mi>x</mi><mn>19</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>15178</mn><mn>66108676095</mn></mfrac><msup><mi>x</mi><mn>23</mn></msup><mo>+</mo><mfrac><mn>404</mn><mn>28332289755</mn></mfrac><msup><mi>x</mi><mn>27</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>190571</mn><mn>215183740689225</mn></mfrac><msup><mi>x</mi><mn>31</mn></msup><mo>+</mo><mfrac><mn>5858822</mn><mn>106515951641166375</mn></mfrac><msup><mi>x</mi><mn>35</mn></msup><mo>+</mo><mi>⋯</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koefiziente indeterminatuen metodoa"
    },
    {
     "mota": "testua",
     "html": "Kasu askotan —bereziki <math display=\"inline\"><mi>f</mi></math>-ren deribatuak kalkulatzea erraza ez bada— eraginkorragoa da serie trunkatu bat saiatzea aldagai askearen berredura bakoitzaren koefizienteak berdinduz zehaztuko diren koefizienteekin. Adibidez, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> duen Riccatiren ekuazioaren kasuan, badakigu seriea <math display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>-tik hasten dela eta saiatzen dugu, adibidez, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msub><mi>c</mi><mn>4</mn></msub><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta haren deribatua eta karratua <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mi>x</mi><mo>+</mo><mn>3</mn><msub><mi>c</mi><mn>3</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>4</mn><msub><mi>c</mi><mn>4</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>c</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> zeinak ekuazioan ordezkatuz, hurrenez hurren, ematen baitute: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo>⇒</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>4</mn><mi>/</mi><mn>3</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mi>⋮</mi></mtd></mtr></mtable></math> 7.4 ariketaren emaitzekin bat etorriz."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>-ren soluzio hurbildua."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Picard-en hurbilketa hurrenkakoen metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Picard-en metodoaren<span class=\"j-oin\">[<strong>Charles Émile Picard</strong> (1856-07-24, Paris; 1941-12-11, Paris). Ekuazio diferentzialen soluzioen existentzia eta bakartasuna frogatzea ahalbidetzen duen metodo honetaz gain, funtzio analitiko baten balioei buruzko Picard-en teorema handi deituagatik gogoratzen da, singulartasun esentzial baten inguruan. Analisian eta geometrian, baita elastikotasunean, termodinamikan eta elektrizitatean ere, lan garrantzitsuak argitaratu zituen.]</span> ideia hasierako baldintzen problema ebaztea da <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></math> zero ordenako hurbilketa batetik abiatuta eraikitzen diren hurbilketa hurrenkakoen bidez <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> zeina (ia) edozein <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtziok eman baitezake, nahiz eta aukera ohiko bat, nabaria delako, <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> den. Orain era iteratiboan jokatzen da: hurbilketa <math display=\"inline\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup></math> bakoitza lortu ondoren, hurrengoa eraikitzen da azken hau ekuazio diferentzialaren eskuineko gaian ordezkatuz, horrela aldagai banatuetako ekuazio bat izateko <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></math> zeina zuzenean koadraturaz ebazten baita: <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math> A.1 atalean existentziaren eta bakartasunaren teorema frogatzean, frogatuko dugu, baldintza egokietan, <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> segidak, <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> denean, hasierako baldintzen problemaren <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluziora konbergitzen duela, zeina <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> limitean lortzen den ekuazio integro-diferentzialaren erabat baliokidea baita: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (7.22)–(7.23) hasierako baldintzen problema eta (7.28) ekuazio integro-diferentziala benetan baliokideak direla."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibide gisa har dezagun Riccatiren <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> ekuazioa <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasierako baldintzarekin eta aukera dezagun <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo>=</mo><mn>1</mn></mrow></math>. Lehen hurbilketa, beraz, hau da, <math display=\"block\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurrengo hurbilketak hauek direla: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>2</mn><mn>15</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>63</mn></mfrac><msup><mi>x</mi><mrow><mn>7</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>8</mn><mn>15</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mfrac><mn>29</mn><mn>90</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>47</mn><mn>315</mn></mfrac><msup><mi>x</mi><mn>7</mn></msup><mo>+</mo><mfrac><mn>41</mn><mn>630</mn></mfrac><msup><mi>x</mi><mn>8</mn></msup><mo>+</mo><mfrac><mn>299</mn><mn>11340</mn></mfrac><msup><mi>x</mi><mn>9</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>525</mn></mfrac><msup><mi>x</mi><mn>10</mn></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mfrac><mn>184</mn><mn>51975</mn></mfrac><msup><mi>x</mi><mn>11</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2268</mn></mfrac><msup><mi>x</mi><mn>12</mn></msup><mo>+</mo><mfrac><mn>4</mn><mn>12285</mn></mfrac><msup><mi>x</mi><mn>13</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>59535</mn></mfrac><msup><mi>x</mi><mn>15</mn></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu oso sinple honetan, polinomioak besterik ez dauden honetan, hurbilketak hazten diren abiadurak eta kasu errealistagoetan integralak egiteko zailtasunak metodo honek kalkulu analitikoetarako duen interesa oso mugatua izatea eragiten dute, bere garrantzi teoriko izugarriarekin (existentziaren eta bakartasunaren teorema funtsezkoaren froga estandarretako bat ematen baitu, adibidez, A.1 atalean ikusiko dugun bezala) eta metodo numerikoetan duen ahalmenarekin kontraste nabarmenean, non integralak modu eraginkorrean egin baitaitezke."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Metodo perturbatiboak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fisikako problema askotan parametro txiki bat dago, <strong>perturbazio</strong> bat, zeinak garapen naturala aldagai askearen (posizioa <math display=\"inline\"><mi>x</mi></math> edo denbora <math display=\"inline\"><mi>t</mi></math>, adibidez) berreduretan ez baizik eta parametro horren araberako izatea eragiten baitu, zero ordenako hurbilketatzat hura ezeztatzean (edo beste balio partikular bat ematean) lortzen dena hartuz, zeina askotan problemaren soluzioa ezagutzen den kasu bati baitagokio eta, horregatik, hurbilketa hurrenkakoak eraikitzeko abiapuntu on bat baita. Perturbazioen teoria fisikari esperientziadunaren oinarrizko tresnetako bat da, baina, tamalez, berriz ere, problemarekiko interesa piztea eta ideiarik elementalenak deskribatzea soilik nahi duen sarrera bat aurkeztera mugatzera behartuta gaude<span class=\"j-oin\">[Gehiago ikasi nahi duen irakurleak sarrera labur eta erraz bat aurki dezake Strogatz-en testuan [28] eta tratamendu sistematiko bat Holmes-enean [20].]</span>  (ia hutsalak esan beharko genituzke). Adibide oso sinple batekin hasiko gara eta gero kasu errealistago eta interesgarriago bat ikusiko dugu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Perturbazio erregularra"
    },
    {
     "mota": "testua",
     "html": "Demagun oszilatzaile ez-linealaren soluzio periodiko posibleak aurkitu nahi ditugula <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>ε</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mi>ε</mi></math> txikirako. <math display=\"inline\"><mi>ε</mi></math> nulua denean oszilatzaile lineal elemental bat dugu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>-ren soluzio periodiko bakarra <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu ez-lineala askoz korapilatsuagoa da. Honako formako soluzio perturbatu bat bilatuko dugu <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mi>ε</mi></math>-n lehen ordenara arte ekuazioa betetzen duena."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.33)  (7.32)n ordezkatuz lortzen dela <math display=\"block\"><mrow><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ebatzi ekuazioa <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>-rako soluzio periodiko bakarra aurkituz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu hurrengo ordena garapen perturbatiboan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Van der Pol-en oszilatzailea"
    },
    {
     "mota": "testua",
     "html": "Har dezagun hurrengo ekuazioa, gaur egun erabilerarik gabeko balbula elektroniko bat deskribatzen duena, baina ekuazio diferentzial ez-linealen historian ohorezko leku bat duena: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mi>ε</mi></math> parametroa positiboa bada, <math display=\"inline\"><mi>x</mi></math> oso txikia denean <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> gaia arbuiagarria da eta, <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> gaiagatik, ingurunetik energia jasotzen duen oszilatzaile antimoteldu bat dugu, hura galdu beharrean, eta beraz oszilazioaren amplitudea etengabe haztea espero dugu. Hala ere, amplitude hori unitatearen pareko egiten denean, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> gaia garrantzitsua izaten hasten da eta gai disipatibo baten papera jokatzen du, energia mekanikoa galaraziz. Ez da harritzekoa, beraz, <math display=\"inline\"><mi>ε</mi></math> parametroaren tarte zabal baterako oreka dinamiko bat ezartzea, batez beste oszilazioa ez hazi ez txikitu ez dadin eragiten duena. Baina nola egiaztatu intuizio hau? Ikus dezagun zer esan diezagukeen perturbazioen teoriak, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>-ri dagokion hurbilketatik abiatuko dena, zeina <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> oszilatzaile harmonikoa besterik ez baita, zeinaren soluzioa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisa idatz baitaiteke."
    },
    {
     "mota": "testua",
     "html": "Hurrengo hurbilketa hau izango da <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurbilketa hau van der Pol-en ekuazioan ordezkatuta <math display=\"inline\"><mi>ε</mi></math>-n lehen ordena hau dela <math display=\"block\"><mrow><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Gai sekularrak dituen hurbilketa",
     "src": "media/irudiak/70b795c5eaf0a0ce.svg",
     "zabalera": 305
    },
    {
     "mota": "testua",
     "html": "Berriz ere oszilatzaile harmoniko bat da, baina orain gai inhomogeneo bat dago, hau da, kanpo-indar bat. Honek ez du zailtasun handiegirik sortzen, eta soluzioa erraz aurki daiteke (ikus B.3.3 atala), baina ez da beharrezkoa hori egitea konturatzeko azken gai inhomogeneoa, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ekuazio homogeneoak (oszilatzaile askeak) dituen <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> esponente karakteristiko berberei (mekanikaren hizkuntzan, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> maiztasun berari) dagokiela, hau da, <strong>erresonantzia</strong> dagoela. 3. kapituluan ikusi genuen bezala, honek dagokion soluzio partikularra <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>β</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> motakoa izatea eragiten du, <math display=\"inline\"><mi>α</mi></math> eta <math display=\"inline\"><mi>β</mi></math> konstante egokiekin. Gai trigonometrikoak bornatuta daude, baina ez da gauza bera gertatzen <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> faktorearekin, zeina tristeki hazten baita. Hau lehen aldiz mekanika zerutiarrean agertu zen oztopo mota bat da, <strong>gai sekular</strong> bat dela esaten da eta perturbazioen metodo inozoak saiatzean erraz agertzen diren problemetako bat da, erabiltzen ari garena bezalakoa. Izan ere, garapen perturbatiboaren oinarrizko hipotesia <math display=\"inline\"><mrow><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> zuzenketa perturbatu gabeko gaiarekin alderatuta txikia dela da, baina hau bornatuta dagoenez, hipotesi hori egia izango da <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> txikia den bitartean (hau da, denbora erlatiboki handi batez, <math display=\"inline\"><mrow><mi>t</mi><mo>≲</mo><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math>), baina gero hipotesia egia izateari utziko dio eta hurbilketa baliozkoa izateari. Hau era grafikoan egiazta dezakegu 7.1 irudian, non <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0.1</mn></mrow></math>-rako soluzio numeriko bat ikus baitaiteke lerro jarraituan, gai sekularrak dituen hurbilketaren iragarpenarekin batera lerro etenean. Hasieran bi soluzioak ia berdinak diren arren, soluzio numerikoak oszilazio periodikoetara jotzen duen bitartean, hurbilketaren amplitudea etengabe hazten da."
    },
    {
     "mota": "testua",
     "html": "Mota honetako problemak konpontzen saiatzeko era hurbilketak ez direla bakarrak gogoratzea da, ezta gutxiago ere, 7.3 adibidean egiazta genezakeen bezala. Zero ordenako hurbilketatzat lehen <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zero ordenako ekuazioaren <math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> soluzio zehatza aukeratu dugu, baina ezerk ez du eragozten edozein funtzio aukeratzea, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, hartatik <math display=\"inline\"><mi>ε</mi></math> ordenako gaietan bereizten dena, zero ordenako ekuazioa betetzen jarraituko baitu, jada ez modu zehatzean baizik eta <math display=\"inline\"><mi>ε</mi></math> ordenako edo goragoko gaiak arbuiatzen ditugunean soilik. Zero ordenaren aukera infinituen artean, komeni da hurrengo hurbilketak bete behar duen ekuazioaren gai erresonanteak desagerrarazteko propietatea duen bat hautatzea, honek gai sekularren agerpena saihestuko baitu. Kasu honetan ikusten dugu gai erresonanteak <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>-rekiko proportzionalak direla, eta beraz komenigarria dirudi zero ordena <math display=\"inline\"><mi>ε</mi></math>-ren ez baizik eta <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>-ren menpe dauden gaiez aldatzea. Ikusiko dugun bezala, kasu honetan aski da <math display=\"inline\"><mi>A</mi></math> amplitudea eta <math display=\"inline\"><mi>φ</mi></math> fasea konstanteak ez direla suposatzea, baizik eta <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>-ren funtzio honela <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>φ</mi></math>  <strong>denbora geldo</strong> baten (<math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math>) menpe daudela esaten da eta horregatik metodo honek <strong>bi denboren metodo</strong> edo <strong>eskala anizkoitzen metodo</strong> izena hartzen du. Denbora bat oszilatzaile askearen periodoak markatzen du eta bestea gai sekularren hazkundearen denbora karakteristikoak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu hurbilketa <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mi>t</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> van der Pol-en ekuazioan ordezkatuta, <math display=\"inline\"><mi>ε</mi></math>-n lehen ordena hau dela <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mspace width=\"1.0em\"></mspace><mo>+</mo><mn>2</mn><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Azken gai erresonantea <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hartuz besterik gabe ezabatzen da eta lehenagotik zegoen gai erresonantea saihesteko haren koefizientea ezeztatzea eskatu behar da, <math display=\"block\"><mrow><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> baina ez genuke pentsatu behar aski denik ekuazio honetatik <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> askatzea eta (7.39)ren azken adierazpenean ordezkatzea, hala egingo bagenu saiatutako soluzioak berak gai sekular bat izango bailuke: lehena, mugarik gabe haziko litzatekeena. Behar duguna honako motako soluzio bat da <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> (7.41) betetzen duen <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> amplitude batekin, baina <math display=\"inline\"><mi>t</mi></math>-rekin modu mugagabean hazten ez dena. Kasu honetan, hori lor daiteke (7.41) baldintza <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>-n ez ezik puntu guztietan betetzen dela suposatuz besterik gabe, eta beraz amplitudeak bete behar duen ekuazio diferentziala da: <math display=\"block\"><mrow><mn>2</mn><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mn>4</mn></mfrac><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (7.43)ren soluzioa <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> dela, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>≡</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin. Ondorioztatu van der Pol-en ekuazioaren soluzioa honela idatz daitekeela <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ε</mi><mn>32</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>3</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> edo, hurbilketa-maila berarekin, honela <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><msqrt><mrow><mn>1</mn><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>t</mi></mrow></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ε</mi><mn>32</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>3</mn></msubsup><mi mathvariant=\"normal\">sin</mi><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Frogatu, hasierako baldintzak edozein direla ere, soluzio hurbildu guztiak (bat izan ezik: zein?) orbita periodiko, isolatu baterantz jotzen dutela, <strong>muga-ziklo</strong> deitzen dena, 8. kapituluan ikusiko dugun bezala."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Gai sekularrik gabeko hurbilketa",
     "src": "media/irudiak/8ced1dfe7ec5cee7.svg",
     "zabalera": 305
    },
    {
     "mota": "testua",
     "html": "7.2 irudian ikus dezakegu nola <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0.1</mn></mrow></math> denean hurbilketa honek van der Pol-en ekuazioaren portaera ezin hobeto erreproduzitzen duen eta haren muga-zikloa hurbilketa onean kalkulatzea ahalbidetzen duen. Irudiaren bereizmenean integrazio numerikoz eta (7.46) hurbilketa erabiliz lortutako grafikoak ia bereizezinak dira. (7.46)n ere ikusten dugu, <math display=\"inline\"><mi>t</mi></math> denbora azkarrak soluzioaren zati periodikoan parte hartzen duen bitartean, <math display=\"inline\"><mrow><mi>ε</mi><mi>t</mi></mrow></math> geldoa geldiro aldakorra den amplitudean agertzen dela eta, beraz, muga-ziklora hurbiltzeko prozesuan."
    },
    {
     "mota": "testua",
     "html": "Ez genuke pentsatu behar beti aski denik oszilazioaren amplitudea denbora geldoaren funtzio bat izaten uztea. Oro har, hipotesi bera egin behar da beste integrazio-konstanterako ere: hasierako <math display=\"inline\"><mi>φ</mi></math> fasea. Denbora <strong>supergeldo</strong> baten existentzia suposatzea ere beharrezkoa izan daiteke: <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><mi>t</mi></mrow></math>, edo (<math display=\"inline\"><mrow><mi>ε</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ε</mi></mrow></math>)  <math display=\"inline\"><mi>t</mi></math>, adibidez."
    },
    {
     "mota": "testua",
     "html": "7.9 problemakoa bezalako gai disipatiborik gabeko oszilatzaile baten kasu partikularrean, aldez aurretik badakigu soluzioa periodikoa izango dela, eta beraz aski izango da maiztasuna —eta, horregatik, periodoa— <math display=\"inline\"><mi>ε</mi></math>-ren menpe dagoela suposatzea honako motako zerbait saiatuz <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>ε</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow></math>-rekin, zeinak hasierako fasea soilik denbora geldoaren menpe dagoela suposatzea inplikatzen baitu amplitudea konstantea den bitartean: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>ε</mi><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ε</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo>+</mo><mi>ε</mi><mi>t</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow></math>-rekin. Hipotesi sinplifikatu hau erabiltzean, <strong>Poincaré-Lindstedt metodoa</strong> erabiltzen ari gara, kasu partikular batean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "WKB metodoa"
    },
    {
     "mota": "testua",
     "html": "Kasu gehienetan metodo hurbilduetara jo behar da <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial batean higitzen den <math display=\"inline\"><mi>m</mi></math> masako partikula baten Schrödingerren ekuazioa ebazteko: <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo>=</mo><mi>E</mi><mi>ψ</mi><mi>.</mi></mrow></math> Hurbilketa erdiklasikoan <math display=\"inline\"><mi>ħ</mi></math> txikia dela hartzen da kontuan eta Wentzel, Kramers eta Brillouin-en metodoa erabil daiteke, zeina honako motako edozein ekuaziori ere aplika baitakioke <math display=\"block\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>ε</mi></math> parametro txiki bat baita. Erabil dezagun gida gisa <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math> konstantea den kasua, soluzioa bi esponentzialen (erreal edo konplexuak) konbinazio lineala den moduan: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi><mi>/</mi><mi>ε</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>x</mi><mi>/</mi><mi>ε</mi></mrow></msup><mi>.</mi></mrow></math> Ohar gaitezen soluzio guztiak, nulua izan ezik, dibergitzen direla <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> denean, zeina 7.50 ekuazioa singularra izateari baitagokio, haren ordena (zerora) laburtzen baita limite horretan. (2.35 probleman beste ekuazio singular bat ikusi genuen, baina han, teoria klasiko baten esparruan, limite egokian soluzio erregular bakarra interesatzen zitzaigun, eta mekanika kuantikoan, berriz, <math display=\"inline\"><mrow><mi>ħ</mi><mo>→</mo><mn>0</mn></mrow></math> limitea singularra da). <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> konstantea den kasurako soluzioaren forman oinarrituta, arrazoizkoa dirudi esponentzial motako aldagai mendekoaren aldaketa bat saiatzea <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>u</mi><mn>0</mn></msub><mo>+</mo><mi>ε</mi><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi></mrow><mi>ε</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> WKB hurbilketan <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren garapeneko gai guztiak arbuiatzen dira <math display=\"inline\"><msub><mi>u</mi><mn>0</mn></msub></math> eta <math display=\"inline\"><msub><mi>u</mi><mn>1</mn></msub></math> izan ezik, erraz aurkitzen direnak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><msup><mi>e</mi><mrow><mfrac><mn>1</mn><mi>ε</mi></mfrac><msub><mi>u</mi><mn>0</mn></msub><mo>+</mo><msub><mi>u</mi><mn>1</mn></msub></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>′</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><msub><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>+</mo><msub><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>y</mi><mo>″</mo></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><msup><mi>ε</mi><mn>2</mn></msup></mfrac><msubsup><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><msup><mn>0</mn><mo>″</mo></msup></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><msup><mn>0</mn><mo>′</mo></msup></msub><msub><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>u</mi><msup><mn>1</mn><mo>″</mo></msup></msub><mo>+</mo><msubsup><mi>u</mi><msup><mn>1</mn><mo>′</mo></msup><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>y</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (7.52)  (7.50)ren soluzioa izan dadin bete behar dela <math display=\"block\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>±</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, soluzio hurbildua bi konstante arbitrarioren (erreal edo konplexuak) arabera idatziko da honela <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>C</mi><mo>+</mo></msub><mi mathvariant=\"normal\">exp</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><msub><mi>C</mi><mo>−</mo></msub><mi mathvariant=\"normal\">exp</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mn>1</mn><mi>ε</mi></mfrac><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><msqrt><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Ez dugu hemen xehetasunez aztertuko WKB hurbilketaren baliozkotasunaren problema zaila, baina gutxienez argi dago <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> den puntuetatik gertu huts egiten duela. Zoritxarrez, puntu horiek garrantzi handikoak izan daitezke. Potentzial bateko partikularen kasuan <strong>atzeraegite-puntuak</strong> dira, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> baldintzak definituak. Lotutako problema klasikoan puntu horiek higidura mugatzen dute, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≥</mo><mn>0</mn></mrow></math> bete behar baita; baina problema kuantikoan (7.49) soluzioa oszilakor motakoa den (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> denean) guneak esponentziala den (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>-rekin) guneetatik bereizten dituzte besterik gabe, uhin-funtzioak potentzial-hesian sartzean jasaten duen atenuazioagatik. Horregatik bi gune horietako soluzioak elkartzeko problema garrantzitsua planteatzen da, eta horretarako mekanika kuantikoko testuetan eta [25]-n aztertzen diren <strong>lotura-formuletara</strong> jo daiteke."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi WKB metodoaz <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazioa."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Metodo numerikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Metodo numerikoak dira, alde handiz, ekuazio diferentzialak ebazteko gehien erabiltzen direnak, liburutegi numerikoetan, kalkulu matematikoko sistema integratuetan edo haien ebazpenari soilik eskainitako programetan barneratutako errutina ahaltsu eta eraginkorren bidez duten zabalkunde handiari esker (ikus 323. orrialdeko bibliografia). Metodo elemental batzuk gainetik aztertuko ditugu, ekuazio diferentzialen integrazio-errutinak nola diseina daitezkeen pixka bat ulertzeko. Ez dugu gomendatzen, hala ere, kapitulu honetan aztertutako metodoak zuzenean erabiltzea, hobeto ulertzeko proba gisa izan ezik. <em>Lan serio baterako errutina aurreratuak edo 323. orrialdeko bibliografian adierazitako sistema edo programetako bat, edo beste alternatibo batzuk, erabili beharko lirateke</em>. Batzuek (ikertzaile serioek ere) Runge-Kutta bat zuzenean programatzeko egiten dituzten ahaleginak hain dira tristeak nola norbait abako bat eraikitzen ikustea eragiketa aritmetikoen segida luze bat egiteko kalkulagailua erabili beharrean. Metodo numerikoei buruz oro har gehiago jakiteko, Stoer eta Bulirsch-en testu klasikoa [34] gomendatzen dugu eta ekuazio diferentzialen ebazpenari dagozkienetarako Hairer, Norsett eta Wanner-ena [32]. FORTRAN eta C-n erabiltzeko prest dauden metodo numeriko praktikoak azken erreferentzian aurki daitezke, baita [33]-n eta [31]-n ere."
    },
    {
     "mota": "testua",
     "html": "Hasierako baldintzen problema bat ebazteko <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> metodo numerikoak hura diskretizatzen hasten dira: soluzioaren hurbilketa bat puntu guztietan, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, lortzen saiatu beharrean, <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math> puntu sorta batean <math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> balioen hurbilketak lortzen saiatzen dira, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Tarteko puntuetako balioak jakin behar badira interpolazioa erabiltzen da (zenbait metodo aurreratuk automatikoki ematen dutena). Metodoak urratsez urrats aplikatzen dira: hasierako baldintzatik, abiapuntua <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ematen diguna, hurrengo puntua <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> kalkulatzen da eta, oro har, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntua lortutakoan hurrengoa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> kalkulatzen da. Aldiro aurreratzen den distantziari, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math>, metodoaren <strong>integrazio-pauso</strong> deitzen zaio eta konstante mantentzen da metodo elementaletan, baina automatikoki aldarazten da metodo aurreratuetan, nahi den errore-maila kalkulu-ahalegin minimoarekin mantentzeko."
    },
    {
     "mota": "testua",
     "html": "Kontuan izan <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mi>y</mi></math>-ren menpe ez badago, koadratura numerikoaren problema bat dugula <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mrow></math> zeina, beraz, kapitulu honetan aztertutako metodoetako bat erabiliz ebatz baitaiteke, nahiz eta mota honetako problema murriztuagorako berariaz diseinatutako metodoak ere badauden, hemen ikusiko ez direnak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Euler-en metodoa"
    },
    {
     "mota": "testua",
     "html": "Metodorik sinpleenak, <strong>poligonoaren metodo</strong> ere deituak, deribaturako ordenarik baxueneko hurbilketa alderantzikatzean datza <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>≈</mo><mfrac><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub></mrow><mi>h</mi></mfrac><mo>+</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lortzeko <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> 7.3 irudian ikusten den bezala, metodoa <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math> eta <math display=\"inline\"><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> arteko soluzioa honela hurbiltzean datza:"
    },
    {
     "mota": "irudia",
     "oina": "Euler-en metodoa",
     "src": "media/irudiak/b4a93033d75cb864.svg",
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen den soluzioaren zuzen ukitzailearen segmentua."
    },
    {
     "mota": "testua",
     "html": "Metodoa orden linealera trunkatutako Taylor-en serie-garapen baten erabilera gisa ere uler dezakegu. Hurbilketan egindako errorea —<strong>hurbilketa-errore</strong>, <strong>trunkatze-errore</strong> edo <strong>diskretizazio-errore</strong> deitu ohi dena— <math display=\"inline\"><mi>h</mi></math>-n bigarren ordenakoa da, beraz, garapeneko lehen ordenako gaiak soilik gordetzen baitira. Metodoa lehen <strong>ordenakoa</strong> dela esaten da. Kontuan izan orain arte urrats bakar bat aurreratzean egiten zen errorea hartu dugula kontuan, eta beraz <strong>errore lokala</strong> zen. Errorea urratsez urrats metatzen denez, eta aurrez zehaztutako <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> distantzia bat aurreratzeko <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>h</mi></mrow></math>-rekin hazten den urrats kopuru bat eman behar denez, <strong>errore globala</strong>  <math display=\"inline\"><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>×</mo><mn>1</mn><mi>/</mi><mi>h</mi><mo>=</mo><mi>h</mi></mrow></math> ordenakoa izango da. Pausoa txikitzean, trunkatze-errorea txikitu egiten da, kalkulu-ahalegin handiagoaren truke puntu gehiago aurkitu behar baitira. Gainera, pausoa ezin da arbitrarioki txiki egin, atalase jakin baten azpitik (metodoaren eta erabilitako sistemaren araberakoa) ordenagailu guztiek praktikan erabiltzen duten zifra kopuru finituko aritmetikak eragindako <strong>biribiltze-erroreak</strong> handitu egiten baitira eta horren erantzule baita, adibidez, kenketa eta deribazio numerikoei lotutako zailtasun berezkoak."
    },
    {
     "mota": "testua",
     "html": "Koadratura numerikoaren kasuan, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, metodoa kurbaren azpiko area 7.4 irudian erakusten den laukizuzenarenaz ordezkatzean datza: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mi>h</mi><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Euler-en metodoa koadratura numerikorako",
     "src": "media/irudiak/049c10ab8e19f342.svg",
     "zabalera": 247
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Heun-en metodoa"
    },
    {
     "mota": "testua",
     "html": "Euler-en metodoa hobetzeko —eta hala <strong>Euler hobetu</strong> ere deitzen den metodo bat lortzeko— Euler motako urrats bat erabil daiteke balio lagungarri bat kalkulatzeko <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> puntu horretatik igarotzen den soluzioaren zuzen ukitzailea kalkulatzeko eta soluzioa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen den eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuetako ukitzaileei dagozkienen batez bestekoa malda gisa duen segmentuaz hurbiltzeko: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mfrac><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math> 7.5 irudian ikusten den bezala. Laburbilduz: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Heun-en metodoa",
     "src": "media/irudiak/1ecd4351bc4b6d0d.svg",
     "zabalera": 281
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili Taylor-en serie-garapen bat Heun-en metodoaren trunkatze-errorea <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math>-rekiko proportzionala dela egiaztatzeko eta, beraz, bigarren ordenako metodo bat dela."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Trapezioen metodoa",
     "src": "media/irudiak/523116fc7b397d3d.svg",
     "zabalera": 247
    },
    {
     "mota": "testua",
     "html": "Koadratura numerikoaren kasuan, <strong>trapezioen metodoa</strong> berreskuratzen da, 7.5 irudian erakusten den bezala: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erdiko puntuaren metodoa"
    },
    {
     "mota": "testua",
     "html": "Metodo hau, <strong>Euler eraldatu</strong> edo <strong>poligonoaren metodo hobetu</strong> ere deitua, aurrekoaren aldaera bat da: urrats oso bat aurreratu eta bi muturretako malden batez bestekoa erabili beharrean, pauso erdi bat soilik aurreratzen da, <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta soluzioa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-tik igarotzen den eta tarteko puntu horretako ukitzailearen malda duen segmentuaz hurbiltzen da:"
    },
    {
     "mota": "irudia",
     "oina": "Erdiko puntuaren metodoa",
     "src": "media/irudiak/3d6b2efd1c42ecf9.svg",
     "zabalera": 281
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> hau da, <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koadratura numerikoaren kasuan, 7.7 irudiaren eskuinean erakusten den metodoa berreskuratzen da: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mi>h</mi><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Erdiko puntuaren metodoa koadratura numerikoan",
     "src": "media/irudiak/eb50bf9839680a10.svg",
     "zabalera": 247
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Runge-Kutta metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ordena guztietako metodoen familia zabal bat da eta, bereziki, orain arte ikusitako bigarren ordenako metodoak biltzen ditu. Metodoaren ideia orokorra hainbat puntutan (muturretan eta tartekoetan) maldak ebaluatzean eta Euler motako pauso batekin egoki batez bestekotutako malda batekin aurreratzean datza. Adibidez, bigarren ordenako familia orokorrak bi malda ebaluatzen ditu, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> eta hurrengo batez bestekoa erabiltzen du: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mi>a</mi><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu metodo hauek guztiak bigarren ordenakoak direla."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> bada Heun-en metodoa berreskuratzen da, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>-ekin erdiko puntuarena eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math>-k arbuiatutako <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math> ordenako gaien koefizientearentzako borne minimoa duen metodoa ematen du."
    },
    {
     "mota": "testua",
     "html": "Runge<span class=\"j-oin\">[<strong>Carle David Tolmé Runge</strong> (1856-08-30, Bremen, Alemania; 1927-01-03, Göttingen, Alemania). Hurbilketen teoriari, geometria diferentzialari, ekuazio diofantikoei eta matematikaren beste adar batzuei egindako ekarpenez gain, lan esperimental ugari egin zuen espektroskopian, bereziki Zeeman efektuari buruz.]</span>-Kutta<span class=\"j-oin\">[<strong>Martin Wilhelm Kutta</strong> (1867-11-03, Pitschen, Silesia —gaur egun Byczyna deitzen da eta Polonian dago—; 1944-12-25, Fürstenfeldbruck, Alemania). Ekuazio diferentzialak ebazteko bere metodoaz gain, Rungek ezagutarazi zuena, aerodinamikari egindako ekarpenengatik gogoratzen da.]</span> metodoa, berez, laugarren ordenako metodoa da, non maldak kalkulatzen baitira <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><msub><mi>k</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>k</mi><mn>4</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><msub><mi>k</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> eta hurrengo hurbilketa erabiltzen da (ikus B.4.6 atala): <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>6</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>k</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msub><mi>k</mi><mn>3</mn></msub><mo>+</mo><msub><mi>k</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Koadraturaren kasuan, <strong>Simpson-en parabolen formula</strong><span class=\"j-oin\">[<strong>Thomas Simpson</strong> (1710-08-20, Market Bosworth, Ingalaterra; 1761-05-14, Market Bosworth). Probabilitateen teoria aztertu zuen de Moivreri zor zaizkion lanetan oinarrituta eta 1740an <em>Zoriaren izaera eta legeak</em> argitaratu zuen. Hala ere, bere interpolazio- eta koadratura numerikoaren formulengatik gogoratzen da gehiago eta 1750ean <em>The Doctrine and Application of Fluxions</em> argitaratu zuen.]</span> klasikoa berreskuratzen da: <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>n</mi></msub><mo>≈</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>4</mn><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Metodo egonkor eta oso fidagarria da hau, baina geldoa. Ez da arraroa ikerketa-lanetan ere aipatua ikustea. Gaur egun, hala ere, ez dago aitzakia handirik hura erabiltzeko Runge-Kutta metodo ahaltsuagoen kaltetan, hala nola Dormand eta Prince-ren metodo txertatu sofistikatuak, zeinek, 5 eta 8 ordenarekin, pausoaren kontrol automatikoa ematen baitute errore estimatuaren arabera, baita irteera jarraitua ere, ahalegin gehigarri minimo batekin pauso bakoitzaren muturren arteko soluzioa interpolatzen duen polinomio baten koefizienteak ere ematen baitituzte. Deskribapen on bat eta erabiltzeko prest dauden algoritmoak [32]-n ikus daitezke."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Pauso anitzeko metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orain arte aztertutako metodo guztiak pauso bakarreko metodoak dira, pauso bakoitza besteengandik erabat independentea baita eta pauso horri soilik dagokion informazioa erabiliz egiten baita. Honek esan nahi du ez dela aprobetxatzen aurreko pausoetan soluzioari buruz lortu den informazioa, zeina, ondoren ikusiko dugun bezala, kalkulu-ahalegina aurrezteko erabil baitaiteke."
    },
    {
     "mota": "testua",
     "html": "Demagun pausoak guztiak berdin tartekatuta daudela (<math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mi>n</mi><mo>±</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>±</mo><mi>h</mi></mrow></math>), erabil dezagun <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> notazio laburtua eta ikus dezagun nola eraiki dezakegun <math display=\"inline\"><msub><mi>x</mi><mi>n</mi></msub></math>-ren inguruan honako motako hurbilketa bat ematen duen bigarren ordenako metodo bat <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> zeinak, errorearen magnitudea idaztea saihesten badugu, honetara baitarama <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mo>−</mo><mn>2</mn><mi>b</mi><mi>h</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>a</mi><mi>h</mi><mo>+</mo><mi>b</mi><msup><mi>h</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> Lehen ekuazioa <math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><mi>/</mi><mn>2</mn></mrow></math>-rekin, bigarrena <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mn>2</mn></mrow></math>-rekin biderkatzen baditugu eta hirugarrenari batzen badizkiogu, lortzen dugu <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza hauekin eraiki daitekeen bigarren ordenako pauso anitzeko metodo bat <strong>iragarle-zuzentzaile</strong> motako metodoen prototipoa da, non honela jokatzen baita:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Iragarritako pauso batean estrapolazio polinomikoa erabiltzen da hurrengo punturako lehen hurbilketa bat ebaluatzeko: <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Hurrengo puntuko deribaturako hurbilketa bat ebaluatzen da <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Zuzentzaile polinomiko bat erabiltzen da bigarren hurbilketa bat aurkitzeko: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
      "Hurrengo puntuko deribatua ebaluatzen da: <math display=\"block\"><mrow><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Metodo sofistikatuetan hainbat zuzentzaile seriean erabil daitezke edo bat behin eta berriz aplikatu. Deskribatu berri dugun adibidean bezala, iragarleak eta zuzentzaileak deribatuetako polinomioak badira, <strong>Adams-en metodo</strong><span class=\"j-oin\">[<strong>John Couch Adams</strong> (1819-06-05, Laneast, Ingalaterra; 1892-01-21, Cambridge, Ingalaterra). Ahalegin handia eskaini zion Ilargiaren higiduraren problemari, Laplacerena baino deskribapen zehatzagoa eman zuena, baina bere izena bereziki Neptunoren kodeskubritzaile gisa gogoratzen da Urano-ren higiduraren irregulartasunak aztertzean. 1845eko irailean Neptunoren posizioari buruz eman zuen informazio zehatza Cambridgeko behatokiak alde batera utzi zuen, eta Urbain Le Verrier-en geroko aurresana lehenago argitaratu zen eta Gallek Berlingo behatokian 1846-09-23an egindako planeta berriaren aurkikuntza gidatu zuen.]</span> bat erabiltzen dela esaten da eta dagokion iragarleak <strong>Adams-Bashforth</strong> izena hartzen du eta zuzentzailea <strong>Adams-Moulton</strong>-ena da."
    },
    {
     "mota": "testua",
     "html": "Adams-Bashforth-Moulton metodo klasikoa laugarren ordenakoa da eta hurrengo adierazpenak erabiltzen ditu: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>*</mo></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>24</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>55</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><mn>59</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>+</mo><mn>37</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mo>′</mo></msubsup><mo>−</mo><mn>9</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>3</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mfrac><mi>h</mi><mn>24</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo>′</mo></msubsup><msup><mi></mi><mo>*</mo></msup><mo>+</mo><mn>19</mn><msub><mi>y</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>−</mo><mn>5</mn><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Mota honetako metodoaren abantailetako bat da, oro har, kalkulu gutxiago behar duela ordena bereko Runge-Kutta batek baino. Adibidez, laugarren ordenako Adams-en metodoan bi deribatu soilik ebaluatzen dira pausoko, eta dagokion Runge-Kuttan, berriz, lau behar dira. Horregatik, metodo hauek eraginkorragoak izaten dira. Beste abantaila bat <math display=\"inline\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> balio berrirako hurbilketa bat baino gehiago eskaintzean, hurbilketa horiek konparatuz egindako errorea ahalegin gutxirekin estima daitekeela da. Mota honetako metodoaren bi desabantaila nagusiak elkarrekin lotuta daude:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "metodoak ezin dira beren kabuz hasi, hasierako baldintzek pauso batean ematen duten informazioa ez baita nahikoa,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "erroreen kontrolaren ondorioz pausoaren luzera aldatzen denean, hurrengo pausorako behar den informazioa ez dago, oro har, eskuragarri."
     ]
    },
    {
     "mota": "testua",
     "html": "Problema hauek gainditu daitezke (hasteko pauso txikiko Runge-Kutta bat erabiliz, pausoa 2z zatituz edo 2z biderkatuz eta interpolazioa erabiliz, etab.), baina metodo hauetako baten programazioa Runge-Kuttena baino korapilatsuagoa egiten dute. Bestalde, askoz azkarragoak izan ohi dira, eta Runge-Kuttak egonkorragoak. Izan ere, iragarle-zuzentzaile motako metodo oso eraginkor eta sofistikatuak garatu dira, nahiz eta badirudi ondoren deskribatzen ditugun estrapolazio-metodo deituek pixkanaka ordezkatzen ari direla."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Estrapolazio-metodoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Metodo hauek oso azkarrak eta zehatzak izan ohi dira (zentzu jakin batean ordena infinitukoak dira), nahiz eta oso soluzio erregularrak eskatzen dituzten eta, horregatik, Runge-Kutta motakoak baino sarriago huts egiten duten. Guztietan ezagunena <strong>Gragg-en metodoan</strong> oinarritzen da, <strong>erdiko puntu eraldatu</strong> ere deitua, non <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>H</mi></mrow></math> arteko nahitaez txikia ez den <math display=\"inline\"><mi>H</mi></math> distantzia bat aurreratzeko <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>H</mi><mi>/</mi><mi>n</mi></mrow></math> luzerako <math display=\"inline\"><mi>n</mi></math> pauso erabiltzen baitira eta hurrengo tarteko balioak kalkulatzen baitira: <math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mn>2</mn><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mi>h</mi><mo>,</mo><msub><mi>y</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako hurbilketa honela definitzen da <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Metodoa berez, beraz, ordena baxukoa da, baina Graggek frogatu zuen metodo honetan egindako trunkatze-erroreak adierazpenean pausoaren magnitudearen berredura bikoitiak soilik agertzen direla: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>k</mi></msub><msup><mi>h</mi><mrow><mn>2</mn><mi>k</mi></mrow></msup><mi>.</mi></mrow></math> Hala ere, errorearen berredura bakoitiak falta direnean, ideia ahaltsu batek —egileen eta testuinguruen arabera <strong>limitera atzeratutako hurbilketa</strong>, <strong>Richardson-en estrapolazio</strong><span class=\"j-oin\">[<strong>Lewis Fry Richardson</strong> (1881-10-11, Newcastle upon Tyne, Ingalaterra; 1953-09-30, Kilmun, Eskozia). Fisikari, kimikari eta meteorologo gisa egindako lanak kalkuluari eta difusioaren teoriari egindako ekarpenak biltzen ditu eta matematika gerraren kausen azterketari aplikatu zion, baina denboraren iragarpenerako matematika —diferentzia finituen metodoa— erabili zuen lehena izateagatik gogoratzen da gehiago <em>Weather Prediction by Numerical Process</em>-en (1922).]</span>, <strong>arrazional</strong> edo <strong>Neville</strong>-ren izenez ezagutuak— hurbilketaren kalitatea eraginkorki hobetzea ahalbidetzen du kalkulua <math display=\"inline\"><mi>h</mi></math>-ren beste balio batekin (edo batzuekin) errepikatuz."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu errorea <math display=\"inline\"><msup><mi>h</mi><mn>4</mn></msup></math>-tik hasten dela <math display=\"inline\"><mrow><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>H</mi><mo>,</mo><mi>n</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hurbilketa erabiltzen bada."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza hau zailtasunik gabe heda daiteke nahi bezain ordena handiko hurbilketa bat lortzeko. Praktikan <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>16</mn><mo>,</mo><mn>24</mn><mo>,</mo><mi>…</mi></mrow></math>  (Bulirsch-Stoer metodo ezagunean, adibidez) edo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mi>…</mi></mrow></math> aukeratu ohi dira. Mota honetako metodoen programazio praktikoari buruzko xehetasun gehiagorako, irakurlea [34], [32] eta [33] testuetara bideratzen dugu. (Azken bietan erabiltzeko prest dauden algoritmoak aurki daitezke). Richardson-en estrapolazioa oso erabilgarria da ere deribatu numerikoak kalkulatzeko eta koadratura numerikoan, non Romberg-en metodoa sortzen baitu."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Metodo inplizituak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har dezagun sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>501</mn><mi>x</mi><mo>+</mo><mn>499</mn><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>499</mn><mi>x</mi><mo>−</mo><mn>501</mn><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> zeinaren soluzio orokorra <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo>−</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> baita, zeina agerian <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-ra jotzen baitu <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean. Ikus dezagun portaera asintotiko hau ikus daitekeen Euler-en metodoaz ebazten badugu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu Euler-en metodoaz lortutako hurbilketak hauek direla <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>−</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorioz, metodoak soluzio guztiak jatorrira konbergitzen dutela aurkituko du baldin eta soilik baldin <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>. Beraz, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>1000</mn><mi>t</mi></mrow></msup></math> gaiak ia ez badu soluziora ekarpenik egingo ere, haren presentzia hutsak muga zorrotz bat ezartzen dio integrazio-pausoari (<math display=\"inline\"><mrow><mi>h</mi><mo>&lt;</mo><mn>0.002</mn></mrow></math>), bestela gai hori, arbuiagarria izan beharko lukeena, soluzio numerikoa menderatuko bailuke eta hura infiniturantz joaten arazoko bailuke zerora konbergitu beharrean. Mota honetako portaera (eta ekuazio <strong>zurrun</strong> deituetan agertzen diren lotutako beste batzuk, zeinekin ez Euler-en metodoa soilik, baizik eta lehen ikusi ditugun metodo guztiak, sofistikatuenak ere, desegokiak baitira) modu egokian landu daiteke <strong>metodo inplizituen</strong> bidez, zeinetatik elementalena baino ez dugun ikusiko, benetan praktikoak diren beste batzuk [32], [33] eta [31]-n aurki baitaitezke."
    },
    {
     "mota": "testua",
     "html": "<strong>Euler-en metodo inplizituan</strong> tartearen amaiera-puntuko malda erabiltzen da, hasierako puntuari dagokiona erabili beharrean: <math display=\"block\"><mrow><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo>+</mo><mi>h</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hau <math display=\"inline\"><msub><mi>y</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></math> lortu behar den ekuazio bat da, numerikoki metodo iteratibo baten bidez egin daitekeena, une honetan interesatzen ez zaiguna."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu Euler-en metodo inplizituaz lortutako hurbilketak hauek direla <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>+</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>−</mo><msup><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1000</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mi>n</mi></mrow></msup><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikusten dugu metodo inplizituak jatorrirako konbergentzia aurresaten duela <math display=\"inline\"><mrow><mi>h</mi><mo>&gt;</mo><mn>0</mn></mrow></math> ororentzat."
    },
    {
     "mota": "testua",
     "html": "Amaitu aurretik, adierazi nahi dugu kalkulu numerikoaren praktika, beste hainbat bezala, arte-puntu bat duen diziplina dela eta esperientzia handia behar dela hura menderatzeaz ziur egon aurretik, tranpaz eta sotiltasunez beteta baitago."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zer uste duzu gertatuko litzatekeela hasierako baldintzen problema <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mn>10000</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>100</mn><mo>,</mo></mrow></math> numerikoki ebaztean, zeinaren soluzioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>100</mn><mi>x</mi></mrow></msup></mrow></math> baita?"
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
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
       "html": "Erabili l&#x27;Hôpital-en erregela<span class=\"j-oin\">[<strong>Guillaume François Antoine Marqués de l&#x27;Hôpital</strong> (1661, Paris; 1704-02-02, Paris). Johann Bernoulli, Jacob Bernoulli eta Leibnizen ikasle honek 1692an idatzi zuen kalkuluaren lehen testua, <em>Analyse des infiniment petits pour l&#x27;intelligence des lignes courbes</em>, zeinak bere erregela ospetsua baitu. Newton, Leibniz eta Jacob Bernoullirekin batera, brakistokronaren problema ebatzi zuen.]</span>  <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></math>  <math display=\"inline\"><mi>x</mi></math>-ren berredura negatibo oro baino azkarrago txikitzen dela frogatzeko, hau da, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> denean <math display=\"inline\"><mi>n</mi></math> arbitrarioki handirako."
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
       "html": "Frogatu <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math>) denean logaritmoa <math display=\"inline\"><mi>x</mi></math>-ren edozein berredura negatibo (positibo) baino geldoago dibergitzen dela, hau da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ε</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>ε</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) dela nahi bezain <math display=\"inline\"><mi>ε</mi></math> txikirako."
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
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>α</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> egia den <math display=\"inline\"><mi>α</mi></math>-ren balioak <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></math> denean baldin (a)  <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta (c)  <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Riccatiren ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "3.27 problemaren arabera, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> Riccatiren ekuazioa <math display=\"inline\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> ekuazio lineal homogeneoaren baliokidea da, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>u</mi><mo>′</mo></msup><mi>/</mi><mi>u</mi></mrow></math> bada. Kalkulatu azken ekuazio honen <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>-i dagokion soluzio hurbildua eta egiaztatu 7.4 ariketaren soluzioa berreskuratzen dela."
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
       "html": "Aurkitu honen soluziorako hurbilketak <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> berreduren serie baten eta Picard-en metodoaren bidez. Konparatu emaitzak."
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
       "html": "Konparatu hasierako balioen problemari aplikatutako Picard-en metodoaz lortutako hurbilketa hurrenkakoak <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-tik eta <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>-tik abiatuta. Iruzkindu emaitza."
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
       "html": "1671ko <em>Methodus Fluxionum et Serierum Infinitarum</em> obran, Newtonek frogatu zuen problemaren <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> soluzioa <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>30</mn></mfrac><msup><mi>x</mi><mn>5</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>45</mn></mfrac><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math> dela. Lortu emaitza bi metodo desberdinen bidez."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilatzaile moteldua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ebatzi problema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>ε</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>,</mo></mrow></math> (a) soluzio analitikoa aurkituz, (b) perturbazio erregularra erabiliz, (c) bi denboren metodoaren bidez. Konparatu eta iruzkindu emaitzak."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oszilatzaile kuasiharmonikoa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu ekuazioa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>ε</mi><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>ε</mi></math> parametro txiki bat baita eta <math display=\"inline\"><mi>ω</mi></math> oszilatzailearen berezko maiztasuna gai perturbatiboaren ezean. Saiatu ekuazio hau parametro txikiaren metodoaz ebazten. Gai sekularrak agertzen al dira? Ordezkatu soluzio perturbatiboaren lehen ordenako adierazpen hurbildua energia mekanikoaren adierazpenean eta aztertu haren portaera. Erabili Poincaré-Lindstedt metodoa soluzio hurbildu bat aurkitzeko. Zein beste metodoz kalkula liteke gutxi gorabehera periodoa?"
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
       "html": "Ebatzi WKB metodoaz <math display=\"inline\"><mrow><msup><mi>ε</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Merkurioren periastroaren prezesioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kepler-en problema<span class=\"j-oin\">[<strong>Johannes Kepler</strong> (1571-12-27, Weil der Stadt, Erromatar Inperio Santua; 1630-11-15, Regensburg gaur egungo Alemanian). Bere maisu Maestlinek Koperniko-ren astronomia heliozentrikora sartua, haren ustezko azalpen matematiko bat argitaratu zuen poliedro erregularren arabera. Tycho Brahe-ren laguntzailea izan zen haren heriotzaren aurreko urtean eta haren behaketak erabili zituen planetek Eguzkiaren inguruan duten higidurari buruzko hiru lege ospetsuak ezartzeko. Logaritmoetan eta optikan lan egin zuen, non frogatu baitzuen ikusmena begiak argi-izpiak jasotzeari zor zaiola eta teleskopioa hobetu zuen. 1604ko supernobari buruz ere idatzi zuen, gaur egun bere izena daramana.]</span> erlatibitate orokorrean koordenatu polarrak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz aztertzean, orbitaren ekuazioa honela idatz daiteke <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mi>ε</mi><mi>p</mi><msup><mi>u</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> izanik. <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> denean (2.124) ekuazioa berreskuratzen da. Bestalde, Merkurioren orbita Eguzkiaren inguruan ekuazio honek deskribatzen du <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>3</mn><mi>M</mi><mi>G</mi><mi>/</mi><mi>p</mi><msup><mi>c</mi><mn>2</mn></msup><mo>≈</mo><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math>-rekin. Erabili lehen ordenako perturbazioen teoria Merkurioren orbita kalkulatzeko. (Ziurtatu gai sekularrak ezabatzen dituzula). Kalkulatu bi periastro hurrenkako bereizten dituen angelua (hau da, <math display=\"inline\"><mi>u</mi></math>-ren bi maximo hurrenkako) eta egiaztatu ez dela zehazki <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>, eta beraz periastroa prezesatzen ari da. Frogatu, Merkuriok mende batean Eguzkiaren inguruan 415 itzuli egiten dituenez, erlatibitate orokorrak bere periastroaren prezesioa <math display=\"inline\"><mrow><mn>43</mn><mo>,</mo><msup><mn>03</mn><mo>″</mo></msup></mrow></math> mendeko izango dela aurresaten duela, <math display=\"inline\"><mrow><mn>43</mn><mo>,</mo><mn>11</mn><mo>±</mo><mn>0</mn><mo>,</mo><msup><mn>45</mn><mo>″</mo></msup></mrow></math> mendeko balio behatuarekin bat etorriz."
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
       "html": "Ebatzi perturbazioen bidez <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>ε</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta erabili emaitza oreka-puntuaren egonkortasuna aztertzeko, <math display=\"inline\"><mi>ε</mi></math>-ren balio positibo eta negatibo txikietarako."
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Problema numerikoak"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Gainerako problemetan kapitulu honetan ikusitako metodoetako bat erabili behar da integrazio numerikoa egiteko. Agertzen diren bigarren ordenako ekuazioak autonomoak dira, eta beraz baliokidea den lehen ordenako ekuazioa 3.4.2 ataleko metodoaz aurki daiteke. Era berean, bi ekuazioz osatutako sistemak autonomoak izango dira eta 4.1.1 ataleko fase-ibilbideen ekuazioa baino ez da ebatzi behar. Hurrengo problema gehienen soluzio numerikoa 8. kapituluan erabiliko da, non dagozkien marrazkiak ikus baitaitezke.]</span>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Marraztu 2.6 problemako <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> ekuazioaren soluzioen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> espazioa."
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
       "html": "Aztertu 7.7 problemako Newtonen ekuazioa: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>. Nola aukeratu behar da <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> soluzioa <math display=\"inline\"><mrow><mi>±</mi><mi>∞</mi></mrow></math>-ra joan dadin <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> denean?"
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
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>t</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ekuazioaren soluzioak <math display=\"inline\"><mrow><mi>x</mi><mo>≃</mo><msqrt><mi>t</mi></msqrt></mrow></math> bihurtzen dira <math display=\"inline\"><mi>t</mi></math> hazten denean. Zer gertatzen da integrazio-metodo desberdinak <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>t</mi><mo>≤</mo><mn>10000</mn></mrow></math> tartean erabiltzean?"
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
       "html": "Zer gertatzen da metodo numeriko desberdinak erabiltzean (7.98)–(7.99) sistema ebazteko?"
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
       "html": "Erabili metodo numeriko desberdinak 7.23 ariketako problemaren soluzio zehatzaren hurbilketa on bat lortzen saiatzeko."
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
       "html": "Marraztu sistemaren fase-espazioa <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math> <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> direnean, beste parametroen hurrengo balioetarako:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><mi>d</mi></math>",
           "<math display=\"inline\"><mn>1</mn></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mn>3</mn></math>",
           "<math display=\"inline\"><mn>1</mn></math>",
           "<math display=\"inline\"><mn>1</mn></math>"
          ],
          [
           "<math display=\"inline\"><mi>r</mi></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>",
           "<math display=\"inline\"><mn>0</mn></math>",
           "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>"
          ]
         ]
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
       "html": "Marraztu hurrengo sistemaren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> fase-espazioa <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>  kasuetarako: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mi>.</mi></mtd></mtr></mtable></math>"
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
       "html": "Aurkitu hurrengo sistemaren fase-espazioa <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>  kasuetan: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>?</mi></mtd></mtr></mtable></math>"
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
       "html": "Marraztu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> ekuazioaren <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> fase-espazioa <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> direnean."
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
       "html": "Marraztu hurrengo sistemaren fase-espazioa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
      }
     ]
    }
   ]
  }
 ]
};
