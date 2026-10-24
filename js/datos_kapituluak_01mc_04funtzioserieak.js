/* JAKINA · kapitulua «B3 - Kalkulua eta analisia - III (funtzio-segidak eta funtzio-serieak)» (01mc_04funtzioserieak), desde edicion2/kapituluak/01mc_04funtzioserieak/01mc_04funtzioserieak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01mc_04funtzioserieak"] = {
 "gakoa": "01mc_04funtzioserieak",
 "titulua": "JAKINA - B3 - Kalkulua eta analisia - III",
 "azala": "B3 - Kalkulua eta analisia - III (funtzio-segidak eta funtzio-serieak)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/01mc_04funtzioserieak/01mc_04funtzioserieak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "7. GAIA — Funtzio-segidak eta funtzio-serieak",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Edizio-oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kapitulu honek UPV/EHUko  <strong>Kalkulu Diferentziala eta Integrala</strong> irakasgaiaren 7. gaia (2012–13, teoria tipografiatua) hartzen du oinarri, birlanduta eta garatuta. Ariketa ebatzien zatia erabiltzailearen beraren LaTeX dokumentu batetik dator (<code>AAA_TEXES_kalkulatex</code>). Hemen jasotzen dena da gero ekuazio diferentzialetan (serie bidezko soluzioak), analisi konplexuan eta Fourier-en serieetan etengabe erabiliko den oinarria."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "7.1 Funtzio-segidak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funtzio-segidak"
    },
    {
     "mota": "testua",
     "html": "Izan bedi <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>f</mi><mi>n</mi></msub><mo>,</mo><mi>…</mi></mrow></math>  (edo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>) funtzio-segida bat, gai guztiak <math display=\"inline\"><mi>I</mi></math> tarte errealean definituriko funtzioak izanik. <math display=\"inline\"><mi>I</mi></math>-ko <math display=\"inline\"><mi>x</mi></math> bakoitzerako <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  <strong>zenbaki</strong>-segida bat lortzen da — eta zenbaki-segidez dakigun guztia aplika daiteke puntuz puntu."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> segidaren <strong>konbergentzia-eremua</strong> <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mo>:</mo><mo>∃</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> da, eta bertan <strong>limite-funtzioa</strong>  (puntuz puntuko limitea) definitzen da: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mi>.</mi></mrow></math> Epsilonez: <img class=\"formula\" src=\"media/formulak/ea1ab68dc1e2a75d.svg\" alt=\"forall x in D, forall epsilon &gt; 0, exists n_0 (epsilon, $x$), forall n gt.eq n_0 : |f_n (x) - f(x)| &lt; epsilon\" style=\"width:27.825em;height:1.001em\" loading=\"lazy\"> — oharra: <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math> hori <strong>puntuaren araberakoa</strong> izan daiteke."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puntuz puntuko konbergentziak <strong>ez</strong> ditu propietate onak limitera hedatzen. Hiru kontraadibide klasiko (iturriko berberak):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak <strong>jarraituak</strong> izan daitezke eta <math display=\"inline\"><mi>f</mi></math>  ez: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> segida batek (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mn>1</mn></math> zatika definituak) zeinu-funtziora jotzen du — limitea etena da 0-n.",
      "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak <strong>deribagarriak</strong> izan eta <math display=\"inline\"><mi>f</mi></math> ez-jarraitua atera.",
      "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak <strong>integragarriak</strong> izan eta limitea eta integrala EZ trukagarriak izan: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi></mrow></math> motako &quot;gailur&quot; gero eta altuago eta estuagoekin, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> da <math display=\"inline\"><mi>n</mi></math> guztietarako, baina limite-funtzioa <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> da eta <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo>=</mo><mn>0</mn><mo>≠</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Limitea eta integrala ez dira beti trukagarriak: gailurra gero eta\n   estuagoa eta altuagoa da, azalera (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>) konstante mantenduz,\n   baina puntu finko bakoitzean <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>. Puntuz puntuko\n   konbergentzia ahulegia da — horregatik behar da uniformea.",
     "src": "media/irudiak/b8fd3f8629996325.svg",
     "zabalera": 309
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia uniformea"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> segida <math display=\"inline\"><mi>D</mi></math>-n <math display=\"inline\"><mi>f</mi></math>-rantz <strong>uniformeki konbergentea</strong> da baldin <math display=\"block\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>ε</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> betetzen bada — orain <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math>  <strong>berbera</strong> da <math display=\"inline\"><mi>D</mi></math>-ko puntu guztietarako. Uniformeak puntuz puntukoa inplikatzen du (ez alderantziz)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Konbergentzia uniformeak bai hedatzen ditu propietateak limitera:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Konbergentzia uniformearen hiru teoremak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>→</mo><mi>f</mi></mrow></math> uniformeki <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n bada:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak jarraituak)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> jarraitua da.",
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak integragarriak)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> integragarria da eta <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> (limitea eta integrala trukagarriak dira).",
        "(<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> deribagarriak eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> uniformeki konbergentea <math display=\"inline\"><mi>g</mi></math> jarraiturantz)  <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mi>f</mi></math> deribagarria da eta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math> (limitea eta deribatua trukagarriak)."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Sakontzea: konbergentzia puntuala eta uniformea"
    },
    {
     "mota": "testua",
     "html": "Funtzio-segiden konbergentzia puntuala eta uniformea eta limite-trukaketak biltzen dira osagarri honetan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio-segidak eta konbergentzia puntuala"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konbergentzia-eremua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mi>I</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> funtzio-segida baterako, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mo>:</mo><mo>∃</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> da <strong>konbergentzia-eremua</strong>. <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> bada, <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definitzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math> segidarako, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Adibidez, <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mo>→</mo><mi>∞</mi></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>→</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> puntuan batura partzialak txandakatzen dira eta ez dago limite errealik."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Muga etenduna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mi>n</mi></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math> bada, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>. Funtzio jarraituen limite puntuala etena izan daiteke."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beste hurbilketa batek jauzia trantsizio gero eta estuago batez ematen du: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> eta puntuz puntu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math></span> lortzen da. Erdiko zatia <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisako trantsizio leun batez ere ordezka daiteke, argazkiko irakurketa zalantzazkoan bezala."
    },
    {
     "mota": "testua",
     "html": "Triangelu-segidan, <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>−</mo><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math> puntu bakoitzean, baina gailurren altuera <math display=\"inline\"><mn>1</mn></math> da beti. Horrek konbergentzia puntuala eta uniformea bereizten ditu."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia uniformea"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konbergentzia puntuala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> puntuz puntu <math display=\"inline\"><mi>D</mi></math>-n baldin eta <math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konbergentzia uniformea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki <math display=\"inline\"><mi>D</mi></math>-n baldin eta <math display=\"block\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math> Indizea <math display=\"inline\"><mi>ε</mi></math>-en araberakoa izan daiteke, baina ez <math display=\"inline\"><mi>x</mi></math>-en araberakoa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Uniformetasunaren ukapen zuzena da: <math display=\"block\"><mrow><mo>∃</mo><msub><mi>ε</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∀</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mo>∃</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub><mo>,</mo><mo>∃</mo><msub><mi>x</mi><mi>n</mi></msub><mo>∈</mo><mi>D</mi><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≥</mo><msub><mi>ε</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> [CORREGIDO: paperean puntu bakar finko bat, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover></math>, ageri dela dirudi; oro har kontradibideko puntua <math display=\"inline\"><mi>n</mi></math>-ren araberakoa izan daiteke.]"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Limite uniformearen jarraitutasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak jarraituak badira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki bada, orduan <math display=\"inline\"><mi>f</mi></math> jarraitua da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mi>x</mi></math> puntuan eta <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> emanda, uniformetasunez <math display=\"inline\"><mi>n</mi></math> aukeratzen da lehen eta gero <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>-ren jarraitutasunez <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>δ</mi></mrow></math> bada, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>3</mn></mfrac><mo>=</mo><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Limitearen eta integralaren trukaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><msub><mi>f</mi><mi>n</mi></msub></math> integragarriak badira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki bada, orduan <math display=\"inline\"><mi>f</mi></math> integragarria da eta <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Sakontzea: limiteen trukaketa"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Limitea integralaren eta deribatuaren barrura eramatea"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Integralaren eta limitearen trukea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n eta <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> guztiak integragarriak badira, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Izan ere, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>→</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Deribatuen limitea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> deribagarriak badira <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n, <math display=\"inline\"><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub></math> uniformeki <math display=\"inline\"><mi>g</mi></math>-ra konbergitzen bada eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> konbergentea bada puntu batean, orduan <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> uniformeki <math display=\"inline\"><mi>f</mi></math> batera konbergitzen da eta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hipotesiaren beharra funtsezkoa da: funtzio deribagarrien konbergentzia uniforme hutsak ez du deribatuen konbergentzia bermatzen."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia puntuala eta uniformea"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Bi konbergentzia motak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> puntuz puntu <math display=\"inline\"><mi>D</mi></math>-n baldin eta <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>,</mo><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mo>∃</mo><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow></math> denean <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Konbergentzia <strong>uniformea</strong> da <math display=\"inline\"><mrow><msub><mi>n</mi><mn>0</mn></msub><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bera <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> puntu guztietarako erabil badaiteke. Baliokidez, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>→</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Saturazio-segidak <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>←</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr></mtable></mrow></mrow></math> puntuz puntu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math></span> limiterantz egiten du. <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> jarraituak izan arren limitea etena denez, konbergentzia ez da uniformea zeroa duen inongo tarte itxitan."
    },
    {
     "mota": "testua",
     "html": "Era berean, triangelu-segidan <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>−</mo><mn>2</mn><mi>n</mi><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>1</mn></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> limite puntuala zero da, baina <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>∞</mi></msub><mo>=</mo><mn>1</mn></mrow></math>; beraz ez dago konbergentzia uniformerik."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math> segidak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math> limite puntuala du. Ez da uniformea: <math display=\"inline\"><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac></msup></mrow></math> aukeratuz, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> da."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Domeinuak uniformetasuna aldatzen du",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac></mrow></math> segidak zero du limite puntuala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n, baina <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></munder><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>, eta ez da uniformea. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tarte finko batean, berriz, <math display=\"block\"><mrow><mn>0</mn><mo>≤</mo><mfrac><mi>x</mi><mrow><mi>x</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>≤</mo><mfrac><mi>a</mi><mrow><mi>a</mi><mo>+</mo><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math>; beraz uniformea da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Nagusitasun uniformeko irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math> bada <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> guztietarako eta <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, orduan <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki <math display=\"inline\"><mi>D</mi></math>-n."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Irizpide horrekin, <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math> segidak <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> du limite, eta <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mi>x</mi><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> denean. Konbergentzia uniformea da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> segidan, maximoa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> puntuan dago eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math>. Hortaz zero-rako konbergentzia uniformea da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Puntu mugikorren beharrezko baldintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki <math display=\"inline\"><mi>D</mi></math>-n bada, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>∈</mo><mi>D</mi></mrow></math> edozein segidarentzat <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math>. Ondorioz, baldintza hori hausten duen <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> bat aurkitzeak ez-uniformetasuna frogatzen du."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></span> segidak zero du limite puntuala <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n. Baina <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mrow></math> hartuz, <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac></mrow></mfrac><mo>→</mo><mn>1</mn><mo>,</mo></mrow></math> eta, beraz, konbergentzia ez da uniformea."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia uniformearen propietateak"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Jarraitutasuna eta integrazioa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> jarraituak badira eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>→</mo><mi>f</mi></mrow></math> uniformeki, <math display=\"inline\"><mi>f</mi></math> jarraitua da. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tarte itxian, gainera, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deribagarritasunerako ez da nahikoa <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> uniformeki konbergitzea: <math display=\"inline\"><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub></math> deribatuen konbergentzia uniformea eta puntu bateko konbergentzia ere behar dira, goiko teoremaren moduan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Azken adibidea: maximoa muturrera mugitzen denean"
    },
    {
     "mota": "testua",
     "html": "Har dezagun <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>. Puntu bakoitzean <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>. Deribatuak <math display=\"block\"><mrow><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> du, eta maximo ez-nulua <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac></mrow></math> puntuan dago: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac></mrow></math>. Beraz ez dago konbergentzia uniformerik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> finkatuta, ordea, <math display=\"inline\"><mrow><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>&lt;</mo><mi>a</mi></mrow></math> da <math display=\"inline\"><mi>n</mi></math> handi guztietarako; orduan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko supremoa <math display=\"inline\"><mi>a</mi></math> muturrean dago eta <math display=\"block\"><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>. Horregatik, konbergentzia uniformea da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tarte guztietan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ariketa: konbergentzia puntuala eta uniformea"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></math>, segidaren konbergentzia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> tartean: kalkulatu limite-funtzioa eta erabaki konbergentzia uniformea den. (Iradokizuna: limitea ez da jarraitua.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "7.2 Funtzio-serieak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funtzio-serieak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> funtzio-seriearen konbergentzia bere <strong>batura partzialen</strong> segidaren (<math display=\"inline\"><mrow><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math>) konbergentziaren bidez definitzen da, puntuz puntu nahiz uniformeki; <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-ri aurreko ataleko teoremak aplikatuta, serie uniformeki konbergenteak gaika integra eta deriba daitezke. <strong>Konbergentzia absolutua</strong> ere definitzen da (<math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> puntuz puntu konbergentea izatea)."
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
       "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi></mrow></math> seriearen konbergentzia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> bada gai orokorra ez doa zerora — dibergentea. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> bada zatiduraren irizpideak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> ematen du — absolutuki konbergentea. Muturretan: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-ean serie harmonikoa (dibergentea); <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-ean serie alternatua, Leibnizen irizpidez konbergentea. Konbergentzia-eremua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio-seriak eta Weierstrassen irizpidea"
    },
    {
     "mota": "testua",
     "html": "Funtzio-seria baten batura <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da, batura partzialen limitea badago. Hipotesi egokiekin, konbergentzia uniformea dagoenean deribazioa eta integrazioa terminoz termino egin daitezke: <math display=\"block\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><msub><mi>f</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Weierstrassen M-irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> bada <math display=\"inline\"><mi>x</mi></math> guztietarako, eta <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>M</mi><mi>n</mi></msub></mrow></math> zenbakizko seriea konbergentea bada, orduan <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>f</mi><mi>n</mi></msub></mrow></math> absolutuki eta uniformeki konbergitzen da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> serieak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> betetzen du; beraz, uniformeki konbergitzen da <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> osoan."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Funtzio-serieak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Funtzio-serie baten konbergentzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mi>I</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> izanik, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math> seriearen batura partzialak <math display=\"inline\"><mrow><msub><mi>S</mi><mi>N</mi></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>f</mi><mi>N</mi></msub></mrow></math> dira. Seriea puntuz puntu konbergentea da <math display=\"inline\"><mrow><mi>D</mi><mo>⊂</mo><mi>I</mi></mrow></math> multzoan <math display=\"inline\"><mrow><msub><mi>S</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k limite finitua duenean <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math> guztietarako."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mfrac></mrow></math> bada, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> puntuan <math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn></mrow></math> lortzen da eta seriea dibergentea da. <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math> denean, ordea, arrazoi geometrikoak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> betetzen du; konbergentzia-eremua <math display=\"inline\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi mathvariant=\"double-struck\">ℝ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mtd></mtr></mtable></math> da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funtzio-serieak: konbergentzia puntuala, uniformea eta Weierstrass-en irizpidea"
    },
    {
     "mota": "testua",
     "html": "Funtzio-serieen konbergentzia motak (puntuala eta uniformea) eta Weierstrass-en <math display=\"inline\"><mi>M</mi></math> irizpidea, konbergentzia-multzoa kalkulatzeko adibide batekin."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia puntuala"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konbergentzia puntuala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio-serieak <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ra <strong>puntualki</strong> konbergitzen du <math display=\"inline\"><mi>D</mi></math>-n, batura partzialen segida <math display=\"inline\"><mrow><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ra konbergitzen badu, hots <math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Konbergentzia-multzoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac></mrow></math> konbergentea den <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> multzoa."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Beharrezko baldintza</strong> (<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> denean gaia ez doa <math display=\"inline\"><mn>0</mn></math>-ra (edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-en definitu gabe dago): <strong>ez-konbergentea</strong>. Beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>-erako aztertzen da, D&#x27;Alembert-ez: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mi>n</mi></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz <strong>konbergentzia-multzoa</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia uniformea"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Konbergentzia uniformea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ra <strong>uniformeki</strong> konbergitzen du <math display=\"inline\"><mi>D</mi></math>-n, baldin <math display=\"inline\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> badago <math display=\"inline\"><msub><mi>n</mi><mn>0</mn></msub></math> (bera <math display=\"inline\"><mi>x</mi></math> guztietarako balio duena) non <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mn>0</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi><mi>.</mi></mrow></math> Hondarra seriaren isatsa da: <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>S</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Weierstrass-en irizpidea (M irizpidea)"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Weierstrass-en M irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> <math display=\"inline\"><mi>D</mi></math>-n definitutako funtzio-segida. <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math> badago <math display=\"inline\"><msub><mi>M</mi><mi>n</mi></msub></math> non <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>D</mi></mrow></math>, eta <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> serie numerikoa konbergentea bada, orduan <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio-serieak <strong>uniformeki konbergitzen du</strong> <math display=\"inline\"><mi>D</mi></math>-n."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Cauchy-ren irizpidea (erroa)</strong> ere aipatzen da: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mo>&lt;</mo><mn>1</mn></mrow></math> konbergentea, <math display=\"inline\"><mrow><mo>&gt;</mo><mn>1</mn></mrow></math> dibergentea, <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> zalantzazkoa."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CÁLCULO (JOSERRA), 2013/4/23 (80-81 orriak, C2_0041). Dena <strong>zuzena</strong> da: konbergentzia-multzoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, kozientea <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>-erako. Egilearen kozientearen sinplifikazioa (<math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>) <strong>soilik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>-en</strong> da baliozkoa (<math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math> potentziak nagusi); <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-en seriea ez dago definituta (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mi>n</mi></math> bakoitietarako). Isatsa indize mutuarekin idatzi behar da (<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Ez da laburpenik egin. Ikus <code>01g_koadernoa_kalkulua_c2_0041.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "7.3 Berretura-serieak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Berretura-serieak"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mi>a</mi></math> puntuan zentraturiko <strong>berretura-seriea</strong>: <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> eta <math display=\"inline\"><mi>a</mi></math> finkoak. Existitzen da <math display=\"inline\"><mi>r</mi></math>  <strong>konbergentzia-erradio</strong> bat (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>r</mi><mo>≤</mo><mi>∞</mi></mrow></math>) non seriea absolutuki konbergentea den <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>r</mi></mrow></math> tartean eta dibergentea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>r</mi></mrow></math> denean; muturrak banan-banan aztertu behar dira. Zatiduraren irizpidetik: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo (Cauchy) </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>n</mi></mroot></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibide muturrekoak: <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>n</mi><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math>-k <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> du (zentroan bakarrik); <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>-k <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math>  (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> osoan konbergentea)."
    },
    {
     "mota": "testua",
     "html": "Propietate egiturazkoak konbergentzia-tartean: bi serie batu eta biderka daitezke (<math display=\"inline\"><mrow><mo>∑</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>a</mi><mi>k</mi></msub><msub><mi>b</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>, Cauchyren biderkadura); <strong>edozein azpitarte itxi eta bornatutan uniformeki konbergenteak</strong> dira; eta batura-funtzioa jarraitua, edozein ordenatarainoko deribagarria eta gaika integragarri/deribagarria  da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Oinarrizko funtzioak serie bidez.</strong> Honako serieok <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> konbergenteak dira, eta definiziotzat ere har daitezke:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(eta <math display=\"inline\"><mi mathvariant=\"normal\">cosh</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">sinh</mi></math> zeinu txandaketarik gabe). Hauek dira gero oszilazioetan, Eulerren formulan (M08) eta ekuazio diferentzialetan behin eta berriro agertuko direnak."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Potentzia-serieak eta Taylor"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> potentzia-serierako, existitzen direnean, <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mi>n</mi></msub><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">limsup</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mroot><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>n</mi></mroot><mi>.</mi></mrow></math> Serieak <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>R</mi></mrow></math> eremuan konbergitzen du, kanpoan dibergitzen du, eta muturrak banan-banan aztertu behar dira. Konbergentzia uniformea barneko tarte itxi guztietan gertatzen da. [CORREGIDO: paperean tarte ireki osoan uniformeki konbergitzen duela dio; zuzena konpaktu bakoitzean da.]"
    },
    {
     "mota": "testua",
     "html": "Seriea <math display=\"inline\"><mi>f</mi></math>-ren Taylor seriea bada, <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mfrac><msub><mi>x</mi><mn>0</mn></msub><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> eta <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></math> funtzioak ez du Taylor serie arruntik <math display=\"inline\"><mn>0</mn></math>-n, bigarren deribatua <math display=\"inline\"><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math> delako eta <math display=\"inline\"><mn>0</mn></math>-n finitua ez delako."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Oinarrizko serieen eragiketak"
    },
    {
     "mota": "testua",
     "html": "Serie geometrikoa eta haren deribatuak: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> denean. [CORREGIDO: papereko recuadro batean lehen batura <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-en hasten da baina <math display=\"inline\"><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></math> ematen du; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>-etik hasita batura <math display=\"inline\"><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></math> da.]"
    },
    {
     "mota": "testua",
     "html": "Integratuz eta deribatuz, <math display=\"block\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math></span> hurbiltzeko <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> hartzen da. Lau terminoen ondoko errorea ez da lehen termino baztertua baino txikiagoa, termino guztiak positiboak baitira. [CORREGIDO: paperean errorea <math display=\"inline\"><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup><mn>5</mn></mfrac></math> baino txikiagoa dela idatzita dago; hori beheko estimazioa da, ez goiko kota.]"
    },
    {
     "mota": "testua",
     "html": "Serie estandarrak: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>α</mi><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Binomio-seriearen bidez, <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mrow><mn>2</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn></mrow></math> denean, eta <math display=\"block\"><mrow><msqrt><mrow><mi>x</mi><mo>+</mo><mn>4</mn></mrow></msqrt><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>4</mn></mrow></math> denean."
    },
    {
     "mota": "testua",
     "html": "Logaritmoaren garapena deribatuz eta berriz integratuz: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Hortik <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2013</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2012</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Arctangentearen seriea eta aplikazioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en Leibnizen seriea lortzen da: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>. Seriea uniformeki konbergitzen da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n Leibnizen irizpide uniformeaz. [CORREGIDO: potentzia-seriearen barneko irizpideak berez ez du <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tarte ireki osoan uniformetasuna frogatzen.]"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></math> funtzioa <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> inguruan garatzeko, <math display=\"block\"><mrow><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> denean."
    },
    {
     "mota": "testua",
     "html": "Arctangentearen seriea erabiliz, <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mfrac><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azkenik, <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><mfrac><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math>. Beraz, <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mfrac><mi>t</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Goiko kalkuluen aurretik ageri den integral laburra ere serie-blokearen parte da: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mi>t</mi><mn>3</mn></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ordezkapenekin, <math display=\"block\"><mrow><mo>∫</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msqrt><mrow><mn>9</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Potentzia-serieen kalkuluak"
    },
    {
     "mota": "testua",
     "html": "Serie geometrikoa zentroz aldatuz, <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>4</mn><mi>.</mi></mrow></math> Hortik, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> funtzioaren koefizienteak <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow><msup><mn>4</mn><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup></mfrac></mrow></math> dira <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math> denean. Bereziki, <math display=\"block\"><mrow><msub><mi>a</mi><mn>13</mn></msub><mo>=</mo><mfrac><mn>10</mn><msup><mn>4</mn><mn>15</mn></msup></mfrac></mrow></math> eta <math display=\"block\"><mrow><msup><mi>f</mi><mn>13</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>13</mn><mi>!</mi><mo>⋅</mo><mfrac><mn>10</mn><msup><mn>4</mn><mn>15</mn></msup></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Logaritmoaren serieak <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math> ematen du <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> denean. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>8</mn></mfrac></mrow></math> hartuta, <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><msup><mn>8</mn><mi>n</mi></msup></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>9</mn><mn>8</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Serie txandakatuaren hondarra <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>p</mi><msup><mn>8</mn><mi>p</mi></msup></mrow></mfrac></math> baino txikiagoa da lehen <math display=\"inline\"><mrow><mi>p</mi><mo>−</mo><mn>1</mn></mrow></math> gaiak hartuz; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>4</mn></mrow></math> aukerak dagoeneko <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math> baino errore txikiagoa ematen du."
    },
    {
     "mota": "testua",
     "html": "Koefizienteak <math display=\"inline\"><mrow><msup><mn>2</mn><mi>n</mi></msup><mo>−</mo><mn>1</mn></mrow></math> faktoreaz biderkatzeak jatorrizko erradioa erdira eramaten du, hazkunde esponentzial nagusia <math display=\"inline\"><msup><mn>2</mn><mi>n</mi></msup></math> baita. Adibide geometrikoan, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math> serieak <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math> du eta bi muturretan dibergitzen du."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Serie bat funtzio ezagun bihurtzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>3</mn><mi>n</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math> Hemen <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><msup><mi>u</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math></span> erabili da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beste garapen erabilgarri batzuk dira <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math> eta <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>n</mi><mn>5</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>6</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>6</mn></msup></mrow></mfrac></mrow></math> seriean <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> aldagaiak <math display=\"inline\"><mrow><msup><mn>9</mn><mi>n</mi></msup><msup><mi>u</mi><mi>n</mi></msup></mrow></math> hazkundea erakusten du. Hortaz <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>, hau da, <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>7</mn><mn>3</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>←</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></mrow></math>; bi muturrak bereiz aztertu behar dira."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Berretura-serieen koefizienteen bakartasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zentro bereko bi berretura-seriek ingurune batean funtzio bera adierazten badute, koefiziente guztiak berdinak dira. Izan ere, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> bada bere konbergentzia-erradioaren barruan, gaika deribatuz <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math> lortzen da."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Edizio-osaketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bakartasun hau esplizitatu da ondorengo identitate-ariketak behar duen justifikazioa teoriaren aurretik eman gabe gera ez dadin."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>3</mn><mi>x</mi><mo>−</mo><mn>5</mn></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mrow></math> funtzioaren Taylorren seriea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n (iradokizuna: deskonposatu frakzio sinpletan, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta erabili serie geometrikoa) eta konbergentzia-erradioa. Konparatu deribatuz gai-banan lortutako lehen hiru gaiekin."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Konbergentzia-erradioen ariketak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup><msup><mi>x</mi><mi>n</mi></msup></mrow></math> serieak <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mi>e</mi></mfrac></mrow></math> du, zeren <math display=\"inline\"><mrow><mroot><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mn>2</mn></msup></msup><mi>n</mi></mroot><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>→</mo><mi>e</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>b</mi><mo>&gt;</mo><mn>0</mn></mrow></math> izanik, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><msup><mi>a</mi><mi>n</mi></msup><mo>+</mo><msup><mi>b</mi><mi>n</mi></msup></mrow></mfrac></mrow></math> seriearen erradioa <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>a</mi></mrow></math> da. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>a</mi></mrow></math> muturretan gai orokorraren modulua ez da zerora hurbiltzen; bi muturrek dibergitzen dute."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> serieak <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>∞</mi></mrow></math> du, faktorialaren hazkundeak zenbakitzaile esponentzial mugatua gainditzen duelako."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><msup><mn>4</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> serierako <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> jarrita <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>4</mn></mrow></math>, hau da, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>2</mn></mrow></math>. Tarte irekia <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>7</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> puntuan <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac></mrow></math> lortzen da; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>7</mn></mrow></math> puntuan ere gaiak zeinu finkoarekin tamaina harmonikoa du. Biak dibergenteak dira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Determinatu hurrengo berretura-serieen konbergentzia-erradioa eta aztertu muturrak: a)  <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math>; b)  <math display=\"inline\"><mrow><mo>∑</mo><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mi>n</mi></msup></mrow></math>; d)  <math display=\"inline\"><mrow><mo>∑</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>/</mi><msup><mn>4</mn><mi>n</mi></msup></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "7.4 Taylor-en garapenak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Taylor-en serieak"
    },
    {
     "mota": "testua",
     "html": "Polinomio batek bere koefizienteak deribatuetan &quot;gordetzen&quot;  ditu: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> bada, <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mi>n</mi></msub></mrow></math>. Ideia hori edozein funtzio askotan deribagarritara hedatzen da:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Taylor-en formula",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math>  <math display=\"inline\"><mi>I</mi></math> tartean <math display=\"inline\"><mi>n</mi></math> aldiz deribagarria bada eta <math display=\"inline\"><mrow><mi>a</mi><mo>∈</mo><mi>I</mi></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <strong>hondarra</strong>  (Lagrangeren forman) <math display=\"inline\"><mrow><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> den, <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>  <math display=\"inline\"><mi>a</mi></math>-ren eta <math display=\"inline\"><mi>x</mi></math>-ren arteko punturen bat izanik (forma integrala ere badu)."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>f</mi></math>-k edozein ordenatako deribatuak baditu eta <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi></mrow></math>, orduan <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> — <math display=\"inline\"><mi>f</mi></math>-ren <strong>Taylor-en seriea</strong>  <math display=\"inline\"><mi>a</mi></math> puntuan (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> denean, <strong>Maclaurin-en seriea</strong>)."
      }
     ]
    },
    {
     "mota": "abisua",
     "titulua": "Kontuz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Deribatu guztiak izatea ez da nahikoa: hondarrak zerora jo behar du. Bestela seriea konbergentea izan daiteke baina <strong>beste</strong> funtzio batera (kontraadibide klasikoa: <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></math>, zeinaren Maclaurinen serie osoa 0 den)."
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
       "html": "<math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>-en Maclaurinen garapena: <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> denez <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>, eta Lagrangeren hondarra <math display=\"inline\"><mrow><msub><mi>R</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msub><mi>c</mi><mi>n</mi></msub></msup><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi><mo>→</mo><mn>0</mn></mrow></math> doa <math display=\"inline\"><mi>x</mi></math> finko orotarako: <math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mo>∑</mo><msup><mi>x</mi><mi>n</mi></msup><mi>/</mi><mi>n</mi><mi>!</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Taylorren oinarrizko serieak"
    },
    {
     "mota": "testua",
     "html": "Esponentzialaren Maclaurinen seriea <math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo></mrow></math> da. Deribatu guztiak <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> dira eta Taylorren hondarra zerora doa <math display=\"inline\"><mi>x</mi></math> finko guztietarako."
    },
    {
     "mota": "testua",
     "html": "Sinuaren deribatuak lau pausoko zikloan errepikatzen dira; hortaz <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math> Kosinuaren seriea deribatuz edo zikloa zuzenean erabiliz lortzen da."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> denean, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>α</mi></msup><mo>=</mo><mn>1</mn><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>⋯</mi><mi>α</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mi>α</mi></math> oso ez-negatiboa bada, seriea polinomio bukatu bihurtzen da."
    },
    {
     "mota": "testua",
     "html": "Ordezkapen zuzenek ematen dute <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo></mrow></math> eta <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> [CORREGIDO: papereko azken adibidean arrazoia <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> da, ez <math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.]"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en Taylor-en seriea"
    },
    {
     "mota": "testua",
     "html": "Taylor-en polinomioa eta <strong>deribatuen lau-periodizitatea</strong> erabiliz, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en serie osoa eraikitzen da."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Taylor-en polinomioa eta deribatuen patroia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>n</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mi>n</mi></munderover><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msup><mi>x</mi><mi>k</mi></msup><mrow><mi>k</mi><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en deribatuak <strong>lau-periodikoak</strong> dira (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>,</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>,</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>,</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi></mrow></math></span>), eta <math display=\"inline\"><mn>0</mn></math>-n <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math> errepikatzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Seriea: bakoiti-berretura hutsak"
    },
    {
     "mota": "testua",
     "html": "Indize bikoitiko gaiak anulatzen dira; bakoitiek <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math> txandakatzen dute, beraz <strong>bakoiti-berretura hutsak</strong> geratzen dira zeinu txandakariz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><mn>3</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mrow><mn>5</mn><mi>!</mi></mrow></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mrow><mn>7</mn><mi>!</mi></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Koherentzia: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> funtzio <strong>bakoitia</strong> da, eta bere Taylor-en serieak <strong>bakoiti-berreturak</strong> soilik izan\n  ditzake —funtzioaren paritateak seriearena determinatzen du—. Maclaurin-en serie zehatza.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0045</code>, 88-89 orriak; &quot;CÁLCULO NEWTON&quot;). <strong>Kalkulu-erdia</strong> (89. orria): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en <strong>Taylor-en seriea</strong> (deribatuen lau-periodizitatea <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>; bakoiti-berretura hutsak; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math></span>). <strong>Ezkerreko aljebra-blokea</strong> (determinantea: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, matrize semejanteak) <code>03</code> atalean dago. ⚠ Tarteko gai batean <math display=\"inline\"><mrow><msup><mi>x</mi><mn>7</mn></msup><mi>/</mi><mn>7</mn></mrow></math> irakur zitekeen, baina <math display=\"inline\"><mrow><mn>7</mn><mi>!</mi></mrow></math> da (koherentea gainerakoekin). Hamalau emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p088.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ariketa ebatzia (garapen zuzena)"
    },
    {
     "mota": "testua",
     "html": "Kalkulatu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math> funtzioaren Taylorren seriea <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n eta konbergentzia-tartea."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Deribatuak banan-banan kalkulatuta (erabiltzailearen ebazpenean sei ordenatara arte garatuta) patroia bistaratzen da: ordena bakoitiko deribatu guztiak 0 dira jatorrian (<math display=\"inline\"><mi>f</mi></math> bikoitia baita), eta <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>3</mn></msup></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mn>3</mn><mn>2</mn></msup><msup><mn>2</mn><mn>5</mn></msup></mfrac><mo>,</mo><mi>…</mi></mrow></math> Modu sistematikoagoan, serie binomiala erabil daiteke: <math display=\"block\"><mrow><mfrac><mn>1</mn><msqrt><mrow><mn>4</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>2</mn><mi>n</mi></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mn>2</mn><mo>⋅</mo><msup><mn>16</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> (koefiziente bikoitiak bakarrik). Konbergentzia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>, hots <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>2</mn></mrow></math> — erradioa singularitateetaraino (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>) iristen da, ez harago. Egiaztapen gisa, lehen gaiak <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup></mrow><mn>256</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math> dira, deribatuen balioekin bat."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-en serieak hurrengoak kalkulatzeko: a)  <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>x</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>; b)  <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi></mrow></math> hiru dezimalekin (gaika integratuz)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math></span> serieen biderkadura osoa erabiliz. Egiaztatu lehen lau ordenak, ondoren koefiziente orokorra, eta azaldu zergatik ematen duen berretura-serieen bakartasunak identitatea konbergentzia-tartean."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, 0001-0020",
     "xehetasuna": "C2_L01: kalkuluko eskuzko koadernoaren hitzez hitzeko transkripzio egiaztatua; zuzenketak eta egiaztapen matematikoak geruza bereizietan",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 1 de calculo ene 2013, 0005-0024",
     "xehetasuna": "C1_L03: kalkuluko eskuzko koadernoaren hitzez hitzeko transkripzio egiaztatua; zuzenketak eta egiaztapen matematikoak geruza bereizietan",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 1 de calculo ene 2013, 0025-0026",
     "xehetasuna": "C1_L04: kalkuluko eskuzko koadernoaren hitzez hitzeko transkripzio egiaztatua; zuzenketak eta egiaztapen matematikoak geruza bereizietan",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, 0021-0040",
     "xehetasuna": "C2_L02: kalkuluko eskuzko koadernoaren hitzez hitzeko transkripzio egiaztatua; zuzenketak eta egiaztapen matematikoak geruza bereizietan",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "iturria",
     "proiektua": "diario 2 de calculo marzo 2013, IMG_2026_07_28_02_47_33S.jpg",
     "xehetasuna": "C2_0041: funtzio-serien konbergentzia eta Weierstrassen M irizpideari buruzko eskuzko teoriaren hitzez hitzeko transkripzio egiaztatua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 1,
   "izenburua": "Ebazpen-liburutik (KDI): Funtzio-segidak eta funtzio-serieak",
   "blokeak": []
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "62. ariketa — <math display=\"inline\"><mrow><mo>∑</mo><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> berretura-seriearen izaera (Stirling + d&#x27;Alembert + Raabe)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; goiko ezkerrean urdinez &quot;JOSERRA?&quot; — irakasleari galdetzeko marka.) Azter ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> seriearen izaera."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Stirling</strong>  (gorriz): <math display=\"inline\"><mrow><mi>n</mi><mi>!</mi><mo>≈</mo><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><mo>⋅</mo><msup><mi>n</mi><mi>n</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow></math>. Ordezkatuta: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><mo>⋅</mo><msup><mi>n</mi><mi>n</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><mo>⋅</mo><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert:</strong> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mi>x</mi><mi>n</mi></msup><mo>⋅</mo><mi>x</mi></mrow><mrow><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mi>n</mi></msqrt></mrow><msup><mi>x</mi><mi>n</mi></msup></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>x</mi><msqrt><mi>n</mi></msqrt></mrow><msqrt><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><mi>x</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msqrt><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></msqrt><mo>=</mo><mi>x</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math> konbergentea; <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>1</mn></mrow></math> dibergentea; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> zalantza."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: Raabe</strong>  (gorriz): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <em>&quot;<math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></math>  <math display=\"inline\"><mn>1</mn></math>-era jotzen duenez, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math>  <math display=\"inline\"><mn>0</mn></math>-rantz jotzen du; beraz&quot;</em>  (logaritmoaren infinitesimoa &quot;bornean aplikatuta&quot;: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>u</mi><mo>∼</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta berriro <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>∼</mo><mi>u</mi><mo>−</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>n</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> DIBERGENTEA </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Ondorioa (koadernoan): <math display=\"block\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> KONBERGENTEA</mtext></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> DIBERGENTEA </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Koadernoak <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du konbergentziarako; berretura-serie gisa zorrotz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> litzateke (<math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn></mrow></math>-erako balio absolutuen seriea dibergentea da, baina serie alternatua bera konbergentea Leibniz-ez — azterketa hori ez dago orrian). Dagoen-dagoenean transkribatu da."
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
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><msup><mi>n</mi><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi><msup><mi>e</mi><mi>n</mi></msup></mrow></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>∼</mo><mo>∑</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mfrac><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konb. </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-erako, dib. </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≥</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-erako </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
   "izenburua": "70. ariketa — (64)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>: konbergentzia-eremua (2012-05-29 finala)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2012-05-29ko finala, 64. ariketa.) Aurki ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> seriearen konbergentzia-eremua. (Goiburuko oharra: <em>&quot;txandakatu daiteke, honen balio negatiboak ematen dira <math display=\"inline\"><mi>x</mi></math>...&quot;</em>)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>d&#x27;Alembert</strong>  (gorriz formula: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mfrac><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>k</mi></mrow></math>; <math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><mn>1</mn></mrow></math> konbergente, <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>1</mn></mrow></math> dibergente, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math> zalantza): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mfrac><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mfrac><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>2</mn></mrow></msup><mo>⋅</mo><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mn>9</mn></mfrac><mo>⋅</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> Hitzez (euskaraz koadernoan): <em>&quot;<math display=\"inline\"><mi>k</mi></math> bat baino txikiagoa izan behar da d&#x27;Alembert-en irizpidearen arabera konbergentea izateko&quot;</em>."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 2:</strong> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mfrac><mn>1</mn><mn>9</mn></mfrac><mo>&lt;</mo><mn>1</mn><mo>⇝</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>9</mn><mo>→</mo><mi>−</mi><msqrt><mn>9</mn></msqrt><mo>&lt;</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>&lt;</mo><msqrt><mn>9</mn></msqrt><mo>⇝</mo><mi>−</mi><mn>3</mn><mo>&lt;</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo>&lt;</mo><mn>3</mn><mo>⇝</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>6</mn></mrow></math> (&quot;sumamos 3 a ambos lados&quot; urdinez)."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 3 — muturrak.</strong>  <em>&quot;Ez dakigu konbergentzia eremu honek bere baitan duen ala ez <math display=\"inline\"><mn>0</mn></math> ó al <math display=\"inline\"><mn>6</mn></math>seriean ordeztuko ditugu, beraz, eta gero harmonikarekin alderatzen dugu.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "(3A)  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>3</mn><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>⋅</mo><mfrac><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> (alboko oharra: <em>&quot;ikusten dugu zeinu negatiboak ez duela arazorik emango potentzia bikoitia delako; garbitu dezakegu&quot;</em>). Gorriz laukituta serie harmonikoaren irizpidea: <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>q</mi></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>&gt;</mo><mn>1</mn></mrow></math> konbergente, <math display=\"inline\"><mrow><mi>q</mi><mo>≤</mo><mn>1</mn></mrow></math> dibergente. <em>&quot;Kontua da seriea harmonika batera murriztu dela; izan ere, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>1</mn></mrow></math> dibergentea da, beraz ezin dugu sartu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "(3B)  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mo>∑</mo><mfrac><msup><mn>3</mn><mrow><mn>2</mn><mi>n</mi></mrow></msup><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math> — <em>&quot;serie hau bera da 4, beraz, ezin dugu sartu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>6</mn></mrow></math>.&quot;</em>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> SOLUZIOA: konbergentzia-eremua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> muturrik gabe </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "84. ariketa — (3. galdera, 2013-04-17)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math>: konbergentzia-erradioa Stirling-ekin",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2013-04-17ko azterketa, 3. galdera.) Aurki ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup></mrow></math> seriearen konbergentzia-eremua."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Stirling (goian idatzita): <math display=\"inline\"><mrow><mi>n</mi><mi>!</mi><mo>≃</mo><msup><mi>n</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>n</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>→</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><msup><mi>e</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mfrac><msqrt><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></msqrt><msup><mi>e</mi><mi>n</mi></msup></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>e</mi></mfrac></mrow></math> (koadernoan tarteko zatikia zuzenean <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math> gisa idatzita dago — erroen zatidura <math display=\"inline\"><mrow><msqrt><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac></msqrt><mo>→</mo><mn>1</mn></mrow></math> isilean sartuta; emaitza bera). Beraz <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>e</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>e</mi><mo>,</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Marrazkia: zuzena <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> eta <math display=\"inline\"><mi>e</mi></math> markekin, &quot;uniformeki konbergente&quot; tarte itxietan uhin-marra batez."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><msup><mi>n</mi><mi>n</mi></msup></mfrac><msup><mi>x</mi><mi>n</mi></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mi>e</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>e</mi><mo>,</mo><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "85. ariketa — (64, 2012-04-29)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>: erradioaren LEHEN pasaera",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2012-04-29ko koaderno-orria, 64.a — 70. ariketako serie bera, aurreragoko pasaera.) Aurki ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac></mrow></math>-ren konbergentzia-erradioa."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mn>9</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow></mfrac></mrow></math> Koadernoan (zatidura alderantziz idatzita, <math display=\"inline\"><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac></math>-ren limitearen alderantzizkoa): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>9</mn><mi>n</mi></msup><mo>⋅</mo><mn>9</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>9</mn></mfrac></mrow></math> eta hortik &quot;<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; idazten du."
      },
      {
       "mota": "oharra",
       "titulua": "Zuzenketa (berretzailea 2n da)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Pasaera honetan koefizienteen erradioa (<math display=\"inline\"><mi>u</mi></math>-rekiko, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> hartuta) kalkulatu du: <math display=\"inline\"><mrow><msub><mi>R</mi><mi>u</mi></msub><mo>=</mo><mn>9</mn></mrow></math>. Baina seriearen berretzailea <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math> denez, baldintza <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>9</mn><mo>⇐</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>3</mn><mo>⇐</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da — ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>9</mn></mrow></math>  (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Bigarren pasaerak (70. ariketa, 2012-05-29ko finala) zuzen egiten du, eta muturrak ere aztertzen ditu: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
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
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> koadernoan </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>R</mi><mo>=</mo><mn>9</mn><mo>,</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>12</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mi>z</mi><mi>u</mi><mi>z</mi><mi>e</mi><mi>n</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mi>k</mi><mi>.</mi><mspace width=\"0.222em\"></mspace><mn>70</mn><mi>.</mi><mspace width=\"0.222em\"></mspace><mi>a</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>e</mi><mi>t</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "86. ariketa — (6.4, 2011-04-13)  <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>: eremua muturrekin",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2011-04-13ko azterketa, 6.4.) Aurki ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>-ren konbergentzia-eremua, muturrak barne."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>n</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">goian </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>1</mn><mo>⋅</mo><mfrac><msup><mi>n</mi><mn>3</mn></msup><mrow><mn>3</mn><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mi>n</mi></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eskema</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>3</mn></mrow></math>, zentroa <math display=\"inline\"><mn>2</mn></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Marrazkia: zuzena <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mn>5</mn></math> markekin, &quot;¿incluidos?&quot;."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>5</mn></mrow></math>:</strong> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msup><mn>3</mn><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>∼</mo><mo>∑</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> NO CONVERGE </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> (marjinan gorriz <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>q</mi></msup></mfrac></mrow></math>  irizpidea: <math display=\"inline\"><mrow><mi>q</mi><mo>≤</mo><mn>1</mn></mrow></math> dibergente, <math display=\"inline\"><mrow><mi>q</mi><mo>&gt;</mo><mn>1</mn></mrow></math> konbergente)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mn>3</mn><mi>n</mi></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> &quot;LEIBNIZ&quot;  (gorriz):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "① <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo></mrow></math>  <em>&quot;zerora jotzen du&quot;</em> ✓",
        "② <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>&lt;</mo><msub><mi>a</mi><mi>n</mi></msub></mrow></math>? <math display=\"inline\"><mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>≃</mo><mfrac><mi>n</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>≃</mo><mfrac><mi>n</mi><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mi>n</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>&lt;</mo><mfrac><mi>n</mi><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> ✓ — &quot;CONVERGE&quot;."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "92. ariketa — (1)(ii)  <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>: konbergentzia puntuala eta uniformea; eta <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>: batura-funtzioaren deribagarritasuna",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Funtzio-segiden zerrenda, (1)(ii) eta jarraiko ariketa.)  (I) Aztertu <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, segidaren konbergentzia puntuala eta uniformea. (II) Izan bedi <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> funtzio-segida <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean definitua: (a) aztertu <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> konbergenteak ote diren; (b)  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> batura-funtzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deribagarria al da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> puntuan?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(I).</strong> Limite puntuala (marjinan gorriz taula: <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>→</mo><mn>0</mn></mrow></math>... zehazki): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math> Marrazkia: hiru mailako funtzio limitea (<math display=\"inline\"><mn>1</mn></math> tartean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> kanpoan, <math display=\"inline\"><mn>0</mn></math> puntuak <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>-en, zirkulu hutsez/betez markatuta). <em>&quot;Teoremagatik: <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> jarraituak dira eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> uniformeki konbergentea balitz, orduan <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jarraitua... baina <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ez denez jarraitua, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> EZ da uniformeki konbergentea.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>(II)(a).</strong> Weierstrass-en M irizpidea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math> d&#x27;Alembert <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math>-ri: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;por tanto <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> UNIF. CONV.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>(II)(b).</strong>  <em>&quot;Primero derivamos&quot;</em>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math> M irizpidea berriro (<math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea dela frogatu behar dugu: </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><msup><mn>3</mn><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mn>3</mn><mi>n</mi></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><mi>n</mi><mi>!</mi></mrow><mrow><msup><mn>3</mn><mi>n</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi><mi>!</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>&lt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;Por tanto <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> converge uniformemente.&quot;</em> Post-it horia (&quot;TEOREMA 16&quot;): ① <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math> konbergitzen badu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ra ② <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> deribagarriak badira ③ <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> uniformeki konbergentea bada <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deribagarria eta <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. Beraz <math display=\"inline\"><mi>f</mi></math> deribagarria da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en (eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> osoan)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (I) puntualki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kasuka, EZ uniformea; </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (II) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> deribagarria, </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>−</mi><msup><mn>3</mn><mi>n</mi></msup></mrow><mrow><mi>n</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mn>3</mn><mi>n</mi></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "93. ariketa — (6)  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jarraitua dela frogatu",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Zerrenda bera, 6.a; &quot;demuestra que <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es continua&quot;.) Izan bedi <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>. Froga ezazu <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> existitzen dela eta jarraitua dela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>① <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math> uniformeki konbergentea?</strong> M irizpidea: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mn>3</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>=</mo><mn>3</mn><mo>&gt;</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <em>&quot;beraz, Weiertrassen teoremagatik, <math display=\"inline\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac></mrow></math> uniformemente convergente.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>② <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> deribagarria?</strong>  Bai: <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>③ <math display=\"inline\"><mrow><mo>∑</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup></mrow></math> uniformeki konbergentea?</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konbergentea; beraz, Weierstrass-en irizpidearen arabera, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "&quot;TEOREMA 16&quot;  (gorriz): hiru baldintzak betetzen direnez, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deribagarria da eta <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math> Serie hori bera uniformeki konbergentea denez eta gaiak jarraituak, <math display=\"inline\"><msup><mi>f</mi><mo>′</mo></msup></math> jarraitua da."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Koadernoko azken lerroan <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> idatzita dago (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> izendatzailean, <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math>-ren ordez) — idazkera-lapsus hutsa, goragoko lerro guztiek <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math> dakarte."
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
         "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraitua </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "94. ariketa — <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>: konbergentzia uniformea Weierstrass-ez",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; &quot;konbergentzia uniformearen propietateak&quot; orria, c3-ko 92–93en jarraipena.) Azter ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> funtzio-seriearen konbergentzia uniformea, Weierstrass-en irizpidea erabiliz."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Orriaren goiko erdian, arrosaz/gorriz,  <strong>propietateen zerrenda</strong>  (puntuka, transkribatuta):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continuas IMPLICA continuidad de <math display=\"inline\"><mi>f</mi></math></em>  (berdez azpimarratuta).",
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> derivables NO implica derivabilidad de <math display=\"inline\"><mi>f</mi></math>.</em>",
        "<em>Convergencia uniforme de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continuas implica que</em> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>",
        "<em>Si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es uniformemente convergente, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es derivable:</em> <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Gorriz laukituta (koadro handia): <em>&quot;si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> NO es continuo, <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> NO converge uniformemente&quot;</em>."
       ]
      },
      {
       "mota": "testua",
       "html": "Marra urdin etenen azpian, ariketa: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert</strong>  <math display=\"inline\"><mrow><mo>∑</mo><mi>n</mi><mi>/</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mrow></math> maiorantearekin (ezkerrean &quot;D&#x27;ALEMBERT&quot; idatzita): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi></mrow></msup></mfrac><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mfrac></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>n</mi><mi>a</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi></mrow></msup><mo>⋅</mo><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mi>a</mi></msup><mspace width=\"0.167em\"></mspace><mi>n</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>e</mi><mi>a</mi></msup></mfrac><mo>&lt;</mo><mn>1</mn></mrow></math> (laukituta). <em>&quot;D&#x27;Alembert-en irizpidearen arabera konbergente. <math display=\"inline\"><mfrac><mi>n</mi><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac></math> converge uniformemente.&quot;</em>"
      },
      {
       "mota": "oharra",
       "titulua": "Iruzkin analitikoa (tartea)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup></mrow></math> bornea <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mi>a</mi></mrow></math> denean baino ez da betetzen; beraz frogatutakoa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tarteko konbergentzia uniformea da, <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> edozein izanik (<math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>e</mi><mi>a</mi></msup></mfrac><mo>&lt;</mo><mn>1</mn><mo>⇐</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>). Orriak ez du tartea esplizituki idazten; <math display=\"inline\"><mi>a</mi></math>-ren agerpenak berak mugatzen du."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∀</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Weierstrass, </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "95. ariketa — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math>: konbergentzia uniformea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n (p. 69)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Gorriz &quot;p. 69&quot; erreferentzia, iturri ofizialik gabe.) Azter ezazu <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac></mrow></math> funtzio-segidaren konbergentzia uniformea."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bi idazkera, bata bestearen azpian: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mi>x</mi></mrow></mfrac></mrow></math> Marrazkia: kurba-sorta bat (koloretan)  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> zuzen etenerantz (gorriz) hurbiltzen, jatorritik pasata."
      },
      {
       "mota": "testua",
       "html": "Eskuinean: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi></mrow></math> <strong>PASO 1</strong>  (gorriz): <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (gorriz): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>−</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mi>x</mi><mrow><mi>n</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> <em>&quot;Como <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math> zerora jotzen du,&quot;</em>  <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>  <em>converge uniformemente en</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (urdinez azpimarratuta)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><mi>x</mi></mrow></mfrac><mo>→</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "96. ariketa — P4(a): <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> uniformeki konbergentea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n (2014-07-03)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2014-07-03ko azterketa ezohikoa, P4(a): &quot;Izan bedi <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>. Froga ezazu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> funtzio-segida <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tartean uniformeki konbergentea dela.&quot;) Orri berean, bigarren puntua: <em>&quot;Frogatu segida <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> converge uniformemente.&quot;</em>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>PASO 1</strong>  (gorriz): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (gorriz): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;¿cómo encontramos el </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> superior y convergente?&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Marjinan gorriz, bi begi marraztuta (&quot;OJO&quot;): <em>&quot;Egin ezazu analisia maximo bat dela ziurtatzeko&quot;</em>."
      },
      {
       "mota": "testua",
       "html": "<em>&quot;Podemos derivar&quot;:</em> <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mi>n</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>n</mi><mi>x</mi></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zero denean </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> laukituta, izartxo batekin). <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> doanean <em>&quot;zerora jotzen du&quot;</em>  (geziarekin)  <math display=\"inline\"><mo>⇒</mo></math>  <strong>converge uniformemente</strong>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sup</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "97. ariketa — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>: 0-rantz konbergentea <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n, baina EZ uniformeki",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Orri bera, hirugarren puntua, gorriz bi begiekin.)  <em>&quot;Justificar que <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> converge a <math display=\"inline\"><mn>0</mn></math> en <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> Baina konbergentzia ez da uniformea.&quot;</em>  (gorriz azpimarratuta)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>PASO 1</strong>  (gorriz): <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>PASO 2</strong>  (gorriz): <em>&quot;si escogemos cuidadosamente&quot;</em> <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>⋅</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mo>⇒</mo></math>  <strong>NO es uniformemente convergente</strong>."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Koadernoko tarteko lerroa hitzez hitz: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>⋅</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math></span> zenbakitzailean, eta izendatzailean <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>π</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>n</mi></mrow></mfrac><mo>→</mo><mn>1</mn></mrow></math>; beraz limitea <math display=\"inline\"><mn>1</mn></math> da, ez <math display=\"inline\"><mn>0</mn></math> — konbergentzia uniformearen ukapena Cauchy-ren segida-irizpidez (<math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> egoki bat aukeratuta)."
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
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>n</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi mathvariant=\"double-struck\">ℝ</mi><mrow><mtext mathvariant=\"normal\">-n, baina EZ uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>→</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "98. ariketa — <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>: konbergentzia uniformea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe.)  <em>&quot;Frogatu hau <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math></em>  (a)  <em>converge uniformemente en <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y que si</em>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi></mrow></math>  <em>entonces</em>  <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><mi>…</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>; (b)  <em>calcular <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y probar</em>  <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>.&quot;"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>(a) Konbergentzia-eremua.</strong> Seriea batukari moduan idatzita: <math display=\"block\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>7</mn></msup><mn>7</mn></mfrac><mo>+</mo><mi>…</mi><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>x</mi><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>t</mi><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math> marjinan <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>  (aldaketa). Hau <math display=\"inline\"><mrow><mi>x</mi><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>a</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> moduko berretura-seriea da; erradioa: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow></mfrac></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math> <em>&quot;Converge uniformemente&quot;</em>  <math display=\"inline\"><mrow><mi>t</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>0</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ✓ (marjinan &quot;ok&quot; gorriz)."
      },
      {
       "mota": "testua",
       "html": "<strong>Deribatua.</strong> <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>x</mi><mn>6</mn></msup><mo>+</mo><msup><mi>x</mi><mn>8</mn></msup><mo>−</mo><mi>…</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup></mrow></math> Gorriz, serie geometrikoaren formula: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mn>1</mn></msub><mo>⋅</mo><msup><mi>r</mi><mi>n</mi></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>1</mn></msub><mrow><mn>1</mn><mo>−</mo><mi>r</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>(b)  <math display=\"inline\"><mi>f</mi></math> berreskuratzea.</strong> Gorriz laukituta: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>x</mi></msubsup><mspace width=\"1.0em\"></mspace><mo>⇒</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">arctan</mi><mn>0</mn><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> azpian</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Marjinan gorriz: <em>&quot;- Jabariaren funtzio arktan!&quot;</em> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Serie geometrikoaren formula gorria <math display=\"inline\"><msub><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></msub></math> indizearekin idatzita dago (<math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> lehen gaia); erabileran <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>-tik hasten da <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math> harturik — emaitza bera. Eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math> balioa serieak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en ere balio duela onartuta dator (Leibniz-en irizpidez konbergentea da han; koadernoak ez du hori esplizitatzen, zuzenean ordezkatzen du)."
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
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>−</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>−</mo><mi>…</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "99. ariketa — <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>: garapena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren berreturetan",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; &quot;garatu ahaletan <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>&quot;.) Garatu <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> funtzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren berreturetan."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Frakzio sinpleak:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>−</mo><mi>B</mi><mo>=</mo><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Zentroa <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>-ra eramatea:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Bi serie geometriko batuta:</strong> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>2</mn></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn></mrow><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Iruzkin analitikoa (baliotasun-eremua)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Orriak ez du konbergentzia-eremurik idazten; bi serie geometrikoek batera <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math> eskatzen dute (estuena). Garapena zuzena da: egiaztatuta <math display=\"inline\"><mi>n</mi></math>-garren koefizientea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mn>3</mn><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> dela, adib. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>, eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mrow><mn>4</mn><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> ✓."
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
         "html": "<math display=\"block\"><mrow><mfrac><mn>2</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>3</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "100. ariketa — a)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>: konbergentzia-tartea eta konbergentzia uniformea (<math display=\"inline\"><mi>M</mi></math> irizpidea)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe, &quot;a)&quot; etiketaduna.) Azter ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math> seriearen konbergentzia eta konbergentzia uniformea."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>D&#x27;Alembert:</strong> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>x</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mspace width=\"0.167em\"></mspace><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></msup><mo>⋅</mo><msup><mi>x</mi><mi>n</mi></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup><mi>x</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> <em>&quot;Si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mo>⇐</mo><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math>seriea konbergentziazkoa da.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>Muturrak:</strong>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>&quot;Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>:&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>  <em>es convergente</em>  (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>1</mn></mrow></math>).",
        "<em>&quot;Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac></mrow></math>  <em>es alternada convergente.</em> <em>&quot;Hau da, emandako seriea baterakorra da tartean&quot;</em>  <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>1</mn><mo>⇐</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Weierstrass:</strong>  <em>&quot;para todo <math display=\"inline\"><mi>x</mi></math> tal que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>, se cumple&quot;</em> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>n</mi></msup></mrow><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eligiendo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> se observa que </mtext><mspace width=\"0.333em\"></mspace></mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>M</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> es conv. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <em>&quot;Honela, emandako seriea era uniformean bihur daiteke, irizpidearen arabera <math display=\"inline\"><mi>M</mi></math>, en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.&quot;</em>"
      },
      {
       "mota": "oharra",
       "titulua": "Orriaren beheko zirriborroa",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Orriaren behealdean, arkatzez oso ahul, definizio-zirriborro batzuk daude (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">lim</mi><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math>) — konbergentzia uniformearen definizioaren saiakera solteak, ariketarik gabe. Anotatuta, ez dute ebazpenik osatzen."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki konbergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mtext mathvariant=\"normal\">-en </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> irizpidea, </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>M</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>n</mi><mfrac><mn>5</mn><mn>3</mn></mfrac></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "101. ariketa — Adibidea (p. 43): <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math> funtzio-seriearen konbergentzia",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Apunte propioetako adibidea, &quot;p. 43&quot;; euskaraz.)  <em>&quot;Adibidea. Azter ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac></mrow></math> funtzio-seriearen konbergentzia&quot;</em>  (&quot;funtzio seriearen konbergentzia&quot; gorriz laukituta)."
      }
     ],
     "ebazpena": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<em>&quot;Baldin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> bada, <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math> doanean gai orokorrak ez du zerorantz jotzen eta, beraz, seriea dibergentea da.&quot;</em>",
        "<em>&quot;Izan bedi, orain, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math>. Konbergentzia absolutua aztertuko dugu eta horretarako&quot;</em> <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> <em>&quot;seriearen izaera aztertuko dugu. Zatiduraren irizpidea erabiliz:&quot;</em> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><msub><mi>a</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>n</mi></msup><mi>/</mi><mi>n</mi></mrow></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> <em>&quot;Noren ondorioz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math> deneko funtzio-seriea absolutuki konbergentea da (beraz, konbergentea).&quot;</em>",
        "<em>&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> kasuan <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math> zenbakizko serie dibergentea dugu.&quot;</em>",
        "<em>&quot;<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> kasuan <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mi>n</mi></mfrac></mrow></math> serie alternatua da eta Leibniz-en irizpidearen arabera, baldintzazko konbergentzia. [Horrenbestez, funtzio-serieak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en konbergitzen du, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> kanpoan.]&quot;</em>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Irakurgarritasun-muga",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Azken esaldiaren bukaerako lerroa (aurreko kortxete artekoa) partzialki irakurgaitza da eskuizkribuan; zentzua testuinguruz berreraiki da (konbergentzia-eremua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, muturren azterketaren ondorio zuzena). Gainerako guztia hitzez hitz dago."
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
         "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mi>x</mi><mi>n</mi></msup><mi>n</mi></mfrac><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> abs. konb. </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">-en; </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldintzazkoa; </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dibergentea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eremua </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "102. ariketa — <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math>: konbergentzia puntuala eta uniformetasunaren azterketa",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; konparatu 2011-05-18ko azterketako G3-rekin, hark <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> baitakar — hemengoa <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math> faktorearekin dago.) Azter ezazu <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup></mrow></math> funtzio-segidaren konbergentzia."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<em>&quot;Necesitamos una <math display=\"inline\"><mi>x</mi></math> ez dagoenarentzat <math display=\"inline\"><mi>n</mi></math> en <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>, beraz, maximo baten bila edo mínimo:&quot;</em> <math display=\"block\"><mrow><msubsup><mi>f</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>⋅</mo><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mo>−</mo><mi>n</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>n</mi><mn>3</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>-ren gainean ezabatze-marka txiki bat dago, faktore komunak sinplifikatzean). <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><mn>4</mn></mrow><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>⋅</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;no nos sirve. Tiene que [tender a] cero&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Azpian, &quot;8&quot; zenbaki batekin markatuta: <em>&quot;si <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>:&quot;</em> <math display=\"block\"><mrow><mfrac><mrow><mn>0</mn><mo>−</mo><mn>0</mn></mrow><mn>1</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>⋅</mo><msup><mn>0</mn><mn>2</mn></msup></mrow><msup><mi>e</mi><mrow><mi>n</mi><mo>⋅</mo><mn>0</mn></mrow></msup></mfrac><mo>=</mo><mfrac><mn>0</mn><mn>1</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> &quot;sí nos sirve&quot; </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Ondorioa (koadernoan inplizitua)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Koadernoak ez du ondorio-esaldirik idazten. Irakurketa analitikoa: <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mo>↛</mo><mn>0</mn></mrow></math>, beraz konbergentzia EZ da uniformea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n — horixe da &quot;Ez digu balio, behar du [tender a] cero&quot; oharraren esanahia (96. ariketako <math display=\"inline\"><mrow><mfrac><mn>1</mn><mrow><mi>e</mi><mi>n</mi></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math> kasuaren kontrakoa). Azken lerroak (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>) puntu horretako balioa baino ez du egiaztatzen."
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
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>→</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntualki, baina EZ uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mtext mathvariant=\"normal\">-n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sup</mi><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>4</mn><msup><mi>e</mi><mn>2</mn></msup></mfrac><mo>↛</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "108. ariketa — ① <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> triangeluarrak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-en: <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>f</mi><mi>n</mi></msub></mrow></math>-ren konbergentzia uniformea (planteamendua)",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; goiburuan &quot;Silvia Fernández:&quot; — enuntziatuaren jatorri-etiketa.)  <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, grafikoa triangelu bat oinarria <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"0.167em\"></mspace><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> tartean eta altuera <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math> duena (kanpoan <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Galdera (orrian): <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? eta <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub></mrow></math>  <em>&quot;conv. unif. en&quot;</em>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Orria arkatzezko zirriborroa da (planteamendua, ez ebazpen itxia). Dauden elementuak, hitzez hitz:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Bi triangelu-marrazki: oinarria <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac></math>-etik <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math>-ra, gailurra altuera <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math>-n; ardatz-marrazki bat <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mfrac><mn>2</mn><mi>n</mi></mfrac><mo>,</mo><mfrac><mn>3</mn><mi>n</mi></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mn>1</mn></mrow></math> markekin.",
        "<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>.",
        "Azalera (integralaren kalkulua, triangeluaren azalera gisa): <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mfrac><mn>1</mn><mi>n</mi></mfrac></mrow></math>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Zuzenketa",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Triangeluaren azalera <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oinarria </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> altuera</mtext></mrow></mrow></math> da; orrian bertan, eskuinean, zuzenduta dago hurrengo lerroan: <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatzi du gailurraren markarekin (eta zuzenaren ekuazioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi><mo>+</mo><mi>n</mi></mrow></math> planteatzen hasi da bi puntutatik: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta gailurra <math display=\"inline\"><mfrac><mn>1</mn><mi>n</mi></mfrac></math> altueran). Zuzena analitikoki: azalera <math display=\"inline\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>. Ez batak ez besteak ez du orrian ondoriorik ixten."
        }
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Ebazpena hor eteten da: konbergentzia uniformearen argudioa (adib. <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">sup</mi><mi>x</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>→</mo><mn>0</mn></mrow></math> Weierstrass-ekin batura finituak direla-eta) EZ dago orrian garatuta."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> triangeluarrak: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><munder><mi mathvariant=\"normal\">sup</mi><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></munder><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">planteamendua; itxi gabe jatorrizkoan</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "109. ariketa — (9)  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac></mrow></math>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: Weierstrass eta Dirichlet",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe, &quot;(9)&quot; zenbakiduna.) Azter ezazu <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac></mrow></math> funtzio-seriearen konbergentzia uniformea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-n, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Weierstrass-en irizpidea</strong>  (orrian idatzita, hitzez hitz): <em>&quot;Criterio de Weierstrass: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math> y la serie <math display=\"inline\"><mrow><mo>∑</mo><msub><mi>M</mi><mi>n</mi></msub></mrow></math> convergente <math display=\"inline\"><mrow><mo>⇒</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> converge uniformemente.&quot;</em> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>=</mo><msub><mi>M</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>α</mi><mo>&gt;</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> C</mtext></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>α</mi><mo>≤</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> D</mtext></mrow></mtd></mtr></mtable></mrow></mrow></math> <em>&quot;Para <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>1</mn></mrow></math>, Weierstras-en irizpidearen arabera, seriea berdin aldatzen da.&quot;</em>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math> kasua</strong>  (laukituta: <em>&quot;para <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math>&quot;</em>): <em>&quot;para productos&quot;</em>  <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, bi baldintzekin (Dirichlet-en irizpidea):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "① <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>f</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>M</mi></mrow></math>, hots <math display=\"inline\"><mrow><mi>−</mi><mi>M</mi><mo>≤</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>f</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>;",
        "② <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>. Kasuan: ⓪ (tatxoi baten ondoan)  <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>→</mo><mn>0</mn></mrow></math>  <em>&quot;uniformemente&quot;</em>  (monotonoa), eta bornatu beharrekoa: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>M</mi></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Batura bornatzea</strong>  (② orria, konplexuen bidez): <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta batuz/kenduz  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi></mrow></mfrac></mrow></math>. Orduan: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Serie geometrikoa da, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>r</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>S</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>S</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>⋅</mo><mi>r</mi><mo>−</mo><msub><mi>a</mi><mn>1</mn></msub></mrow><mrow><mi>r</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Hirugarren orriaren goialdean, faktorizazio-laguntza (taula moduko zatiketa batekin <math display=\"inline\"><mrow><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo>:</mo><mi>r</mi><mo>−</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>+</mo><msup><mi>r</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Egoera jatorrizkoan",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Bornaketa hor gelditzen da (faktorizazioaren bidez batura <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mo>+</mo><mi>…</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> gisa idatzita); <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>M</mi></mrow></math> borne esplizitua (<math display=\"inline\"><mfrac><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac></math> modukoa) ez dago orrian itxita. Ondorioa (Dirichlet-ez <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn></mrow></math> kasuan tarte itxietan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi></mrow></math> inguruneetatik kanpo) ez dago idatzita — planteamendua transkribatu da dagoen arte."
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
         "html": "<math display=\"block\"><mrow><mo>∑</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>x</mi></mrow><msup><mi>n</mi><mi>α</mi></msup></mfrac><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>&gt;</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> uniformeki </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mtext mathvariant=\"normal\">-n (Weierstrass); </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>α</mi><mo>≤</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Dirichlet-en bidez (bornaketa planteatua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "110. ariketa — (11)  <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>: subsegida uniformeki konbergentea",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Iturri ofizialik gabe; goiburuan &quot;Silvia Fdez — Hoffman&quot; etiketak.)  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> segida <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊂</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>-n, <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math> integragarriak. Definitu <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>. Frogatu <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>-k subsegida uniformeki konbergente bat duela."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aurretik, teoria-koadroa (aurreko orriko &quot;(11)&quot; zatia, hitzez hitz): <em>&quot;funtzio integratzailea zentzuan Riemann: <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>ε</mi></mrow></math>&quot;</em>; <math display=\"inline\"><mrow><mi>P</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math> partiketak, <em>&quot;<math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> más fina que <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo>⊂</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math>&quot;</em>; <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><mrow><mo>∀</mo><mi>P</mi><mo>,</mo><mi>Q</mi></mrow></math>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>-ren partiketak (<math display=\"inline\"><mi>L</mi></math>  = inf, <math display=\"inline\"><mi>U</mi></math>  = sup); eta <math display=\"inline\"><mrow><mi>P</mi><mo>⊂</mo><msup><mi>P</mi><mo>′</mo></msup></mrow></math>  bada: <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><msup><mi>P</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>,</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (marrazkiak: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>a</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>a</mi><mo>,</mo><mi>d</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>e</mi><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> zuzenki banatuekin)."
      },
      {
       "mota": "testua",
       "html": "Ebazpena (bigarren orria):"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>; <em>&quot;<math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> integrable <math display=\"inline\"><mo>⇒</mo></math>  <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jarraia da <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>&quot;</em>. (Marrazkia: <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kurba, <math display=\"inline\"><mrow><mi>m</mi><mo>≤</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>M</mi></mrow></math> bornekin, eta azpian <math display=\"inline\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.)",
        "<em>&quot;Frogatu behar da <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> azpisuzesio bat du, uniformeki konbergitzen duena.&quot;</em>",
        "Subsegida-aukeraketa (lehen orriko behealdean): <em>&quot;sea <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊂</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>&quot;</em>, adibidez <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  (indize-multzoak: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>); <math display=\"inline\"><mrow><msub><mi>G</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math>  <math display=\"inline\"><mo>→</mo></math>  <em>&quot;continua&quot;</em>.",
        "<em>&quot;Sea esta subsucesión <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>b</mi></mrow></math>Frogatu beharko da. <math display=\"inline\"><mrow><mo>∀</mo><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><msub><mi>n</mi><mi>ε</mi></msub></mrow></math> tal que <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><msub><mi>n</mi><mi>ε</mi></msub><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.&quot;</em>",
        "<em>&quot;Como <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊂</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>  <math display=\"inline\"><mo>→</mo></math>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>≤</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mrow></math></span>  <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; entonces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mi>ε</mi></mrow></math>, es decir <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></munder><msub><mi>F</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, izaeraz beteko dena <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> continua.&quot;</em>"
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Iruzkin kritikoa (argudioaren egoera)",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Transkribatutako argudioa zirriborro-mailakoa da eta ez da froga zorrotz bat: subsegida <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> hartzeak berez ez du uniformetasuna ziurtatzen (froga estandarrak <math display=\"inline\"><msub><mi>f</mi><mi>n</mi></msub></math>-en bornapen uniformea eskatzen du, orduan <math display=\"inline\"><msub><mi>F</mi><mi>n</mi></msub></math>-ak uniformeki bornatuak eta ekijarraituak dira eta Ascoli–Arzelà aplikatzen da). Jatorrizkoaren bidea dagoen-dagoenean utzi da, ezer osatu gabe: erabiltzailearen orrian ondorioa &quot;etengabea izango delako beteko dena&quot; esaldiarekin ixten da."
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
         "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>x</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> jarraituak; </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>F</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> subsegida hautagaia (zirriborroa, froga itxi gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  }
 ]
};
