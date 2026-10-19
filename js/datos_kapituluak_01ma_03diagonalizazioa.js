/* JAKINA · kapitulua «B2 - Aplikazio linealak eta diagonalizazioa - I» (01ma_03diagonalizazioa), desde edicion2/kapituluak/01ma_03diagonalizazioa/01ma_03diagonalizazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["01ma_03diagonalizazioa"] = {
 "gakoa": "01ma_03diagonalizazioa",
 "titulua": "JAKINA - B2 - Aplikazio linealak eta diagonalizazioa - I",
 "azala": "B2 - Aplikazio linealak eta diagonalizazioa - I",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/01ma_03diagonalizazioa/01ma_03diagonalizazioa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M11",
   "izenburua": "Aplikazio linealak eta diagonalizazioa",
   "maila": "TRESNAK"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Aplikazio lineal baten matrizea eraiki eta nukleoa/irudia kalkulatu.",
    "Balio eta bektore propioak kalkulatu.",
    "Matrize bat diagonalizatu, eta simetrikoak ortogonalki.",
    "Modu normalak balio propioen problema gisa ezagutu."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M10 — Matrizeak eta determinanteak; M09 — Espazio bektorialak"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "JAKINAk idatzia",
   "xehetasuna": "corpusean teoriarik ez zegoen; M09ko 1. kapituluaren jarraipena (2. kap.)",
   "hizkuntza": "eu"
  },
  {
   "mota": "testua",
   "html": ".update(1)"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Aplikazio linealak eta diagonalizazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko kapituluak espazio bektorialak aztertu zituen: egitura bera. Honek egitura hori <strong>errespetatzen duten funtzioak</strong> aztertzen ditu — aplikazio linealak — eta haien tresnarik ahaltsuena: balio eta bektore propioak. Fisikarako, kapitulu hau da aljebra linealaren gailurra. Oszilazio akoplatuen modu normalak, solido zurrunaren inertzia-ardatz nagusiak eta mekanika kuantikoaren behagarriak problema bera dira azken batean: <strong>diagonalizazio</strong> bat."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Aplikazio linealak",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aplikazio lineala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><mi>V</mi></math> eta <math display=\"inline\"><mi>W</mi></math> IK gorputz beraren gaineko espazio bektorialak. <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazioa <strong>lineala</strong> da baldin eta, edozein <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> izanik,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi baldintzak batera honela laburtzen dira: <math display=\"inline\"><mi>T</mi></math>-k konbinazio linealak konbinazio linealetan bihurtzen ditu, <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>k</mi><mn>1</mn></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Berehalako ondorioa: <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> beti."
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
       "html": "Linealak dira, besteak beste: (i) planoko biraketak, jatorriaren inguruan; (ii)  proiekzioak: <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; (iii) deribazioa polinomioen espazioan: <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup></mrow></math>, zeren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>q</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup><mo>+</mo><msup><mi>q</mi><mo>′</mo></msup></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>p</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><mi>k</mi><msup><mi>p</mi><mo>′</mo></msup></mrow></math> baitira. <strong>Ez</strong> da lineala <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>  translazioa: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aplikazio linealaren matrizea"
    },
    {
     "mota": "testua",
     "html": "Dimentsio finituan, aplikazio lineal bat erabat zehazten dute oinarriko bektoreen irudiek. Izan ere, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarria bada eta <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub></mrow></math>, orduan linealtasunak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>x</mi><mi>n</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ematen du: <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> guztiak ezagututa, <math display=\"inline\"><mi>T</mi></math> osoa ezagutzen da."
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aplikazioaren matrizea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> lineala eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarria izanik, <math display=\"inline\"><mi>T</mi></math>-ren matrizea <math display=\"inline\"><mi>B</mi></math> oinarrian <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da, non <math display=\"inline\"><mi>j</mi></math>-garren <strong>zutabea</strong>  <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koordenatuak diren:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Orduan <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koordenatuak <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> dira, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒙</mi></math> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>-renak badira: aplikazioa aplikatzea matrizeaz biderkatzea da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Biraketa planoan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>θ</mi></math> angeluko biraketak, jatorriaren inguruan, honela darabiltza oinarri kanonikoko bektoreak: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↦</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Beraz bere matrizea"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "da. Konposizioa matrize-biderkadura da: bi biraketa segidan, <math display=\"inline\"><mrow><msub><mi>R</mi><mi>α</mi></msub><msub><mi>R</mi><mi>β</mi></msub><mo>=</mo><msub><mi>R</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></msub></mrow></math> — eta berdintza hori garatzeak, bide batez, kosinuaren eta sinuaren batuketa-formulak ematen ditu doan."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nukleoa, irudia eta heina"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Nukleoa eta irudia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> lineala izanik:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo>:</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>  <math display=\"inline\"><mi>V</mi></math>-ren azpiespazioa da, eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math>  <math display=\"inline\"><mi>W</mi></math>-rena. <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math>-ren dimentsioari <math display=\"inline\"><mi>T</mi></math>-ren <strong>heina</strong>  deritzo: <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nukleoak injektibotasuna neurtzen du: <math display=\"inline\"><mi>T</mi></math> injektiboa da baldin eta soilik baldin <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bada. Izan ere, <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bada, linealtasunak <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> dakar, hots, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Dimentsioen teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> lineala eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> finitua izanik,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ker</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> h</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>p</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>-ren oinarri bat, eta osa dezagun <math display=\"inline\"><mi>V</mi></math>-ren oinarri batera: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>p</mi></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>q</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, non <math display=\"inline\"><mrow><mi>p</mi><mo>+</mo><mi>q</mi><mo>=</mo><mi>n</mi></mrow></math>. Nahikoa da frogatzea <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>q</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math>-ren oinarria dela. <strong>Sistema sortzailea da</strong>: <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> edozein hartuta, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> oinarrian garatu eta <math display=\"inline\"><mi>T</mi></math> aplikatzean <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> direnez, <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-en konbinazio lineala geratzen da. <strong>Askea da</strong>: <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, hots, <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>c</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒘</mi><mi>j</mi></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>; baina orduan <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>i</mi></msub></math>-en konbinazio lineala da, eta oinarri osoaren askatasunak koefiziente guztiak zero izatera behartzen ditu."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri-aldaketa eta antzekotasuna"
    },
    {
     "mota": "testua",
     "html": "Aplikazio berak matrize desberdinak ditu oinarri desberdinetan. <math display=\"inline\"><mi>B</mi></math> oinarritik <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> oinarrira pasatzeko matrizea <math display=\"inline\"><mi>P</mi></math> bada (<math display=\"inline\"><mi>P</mi></math>-ren zutabeak: <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math>-ko bektoreak <math display=\"inline\"><mi>B</mi></math>-n idatzita), koordenatuak <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mi>P</mi><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>′</mo></msup></mrow></math> erlazioaz lotzen dira, eta aplikazioaren matrize berria"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da. Erlazio horri <strong>antzekotasuna</strong>  deritzo: <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>  <strong>antzekoak</strong> dira. Kapitulu honen galdera nagusia hauxe da: emandako <math display=\"inline\"><mi>A</mi></math> baterako, ba al dago oinarririk non <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math> hori <strong>diagonala</strong> den? Hala bada, aplikazioaren geometria osoa agerian geratzen da: norabide batzuetan luzatu edo uzkurtu besterik ez du egiten."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Balio eta bektore propioak",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Balio eta bektore propioak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> ordena <math display=\"inline\"><mi>n</mi></math>-ko matrize karratua izanik, <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math>  <strong>balio propioa</strong> da baldin eta badago <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≠</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> bektore bat non"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "den. Halako <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> bakoitza <math display=\"inline\"><mi>λ</mi></math>-ri dagokion <strong>bektore propioa</strong> da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Geometrikoki: bektore propio baten norabidea ez du aplikazioak aldatzen; <math display=\"inline\"><mi>λ</mi></math> faktoreaz luzatu (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math>), uzkurtu (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>1</mn></mrow></math>) edo alderantzikatu (<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>) baino ez."
    },
    {
     "mota": "irudia",
     "oina": "Bektore arrunt batek norabidea aldatzen du\n  aplikazioaren pean (ezkerra); bektore propio batek ez (eskuina):\n    <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>.",
     "src": "media/irudiak/587be582bfeff47f.svg",
     "zabalera": 410
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ekuazio karakteristikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math> baldintza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> sistema homogeneoa da. Soluzio ez-nulurik izateko, sistemaren matrizeak singularra izan behar du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ezkerreko atala <math display=\"inline\"><mi>λ</mi></math>-ren <math display=\"inline\"><mi>n</mi></math> mailako polinomioa da — <strong>polinomio karakteristikoa</strong> —, eta bere erroak dira balio propioak. Balio propio bakoitzaren <strong>propioespazioa</strong>  <math display=\"inline\"><mrow><msub><mi>E</mi><mi>λ</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  da: <math display=\"inline\"><mi>λ</mi></math>-ri dagozkion bektore propio guztiak, zeroarekin batera."
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> kasu osoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Polinomio karakteristikoa:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn><mi>λ</mi><mo>+</mo><mn>10</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Balio propioak: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>5</mn></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>5</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> sistemak <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ematen du, hots, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, hots, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Egiaztapena: <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub></mrow></math>. ✓"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi egiaztapen azkar, edozein ordenatarako baliagarriak: balio propioen <strong>batura</strong> aztarna da (<math display=\"inline\"><mrow><mo>∑</mo><msub><mi>λ</mi><mi>i</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi></mrow></math>; goian <math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn><mo>+</mo><mn>3</mn></mrow></math>), eta <strong>biderkadura</strong> determinantea (<math display=\"inline\"><mrow><mo>∏</mo><msub><mi>λ</mi><mi>i</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>; goian <math display=\"inline\"><mrow><mn>5</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mn>12</mn><mo>−</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aniztasunak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>λ</mi></math> balio propio bat polinomio karakteristikoaren erro <strong>anizkoitza</strong> izan daiteke. Erro gisa duen ordenari <strong>aniztasun aljebraikoa</strong> deritzo; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mi>λ</mi></msub></mrow></math>-ri, <strong>aniztasun geometrikoa</strong>. Beti betetzen da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mi>λ</mi></msub><mo>≤</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aniztasun aljebraikoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta bien arteko arrakala da, hain zuzen, diagonalizazioaren oztopo bakarra."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Bektore propioen askatasuna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Balio propio <strong>desberdinei</strong> dagozkien bektore propioak linealki askeak dira."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Indukzioz kopuruaren gainean. Bektore bakarra aske da (ez-nulua baita). Demagun <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> askeak direla eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math>  aplikatuta: <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mi>k</mi></msub><msub><mi>λ</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>. Lehen ekuazioa <math display=\"inline\"><msub><mi>λ</mi><mi>k</mi></msub></math>-z biderkatu eta kenduta:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>λ</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Indukzio-hipotesiaz koefiziente guztiak zero dira, eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≠</mo><msub><mi>λ</mi><mi>k</mi></msub></mrow></math> denez, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mi>⋯</mi><mo>=</mo><msub><mi>c</mi><mrow><mi>k</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; orduan <math display=\"inline\"><mrow><msub><mi>c</mi><mi>k</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mi>k</mi></msub><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>-tik <math display=\"inline\"><mrow><msub><mi>c</mi><mi>k</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Diagonalizazioa",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matrize diagonalizagarria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math>  <strong>diagonalizagarria</strong> da baldin eta badago <math display=\"inline\"><mi>P</mi></math> matrize alderanzgarri bat non"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "diagonala den. Orduan <math display=\"inline\"><mi>D</mi></math>-ren diagonala balio propioek osatzen dute, eta <math display=\"inline\"><mi>P</mi></math>-ren zutabeak dagozkien bektore propioak dira."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Izan ere, <math display=\"inline\"><mrow><mi>A</mi><mi>P</mi><mo>=</mo><mi>P</mi><mi>D</mi></mrow></math> idatzita, zutabez zutabe irakurrita <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>j</mi></msub><mo>=</mo><msub><mi>d</mi><mi>j</mi></msub><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>j</mi></msub></mrow></math> ateratzen da: <math display=\"inline\"><mi>P</mi></math>-ren zutabeak bektore propioak dira, nahitaez. Hortik irizpide osoa:"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Diagonalizagarritasun-irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ordena <math display=\"inline\"><mi>n</mi></math>-ko <math display=\"inline\"><mi>A</mi></math> diagonalizagarria da baldin eta soilik baldin <math display=\"inline\"><mi>n</mi></math> bektore propio linealki aske baditu; hau da, balio propio bakoitzaren aniztasun geometrikoa aljebraikoaren berdina bada. Bereziki, <math display=\"inline\"><mi>n</mi></math> balio propio <strong>desberdin</strong> baditu, diagonalizagarria da beti."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Adibidea",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Diagonalizazio osoa eta <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Goiko <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-rekin: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Berretzeak berehalakoak bihurtzen dira:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>n</mi></msup><mo>=</mo><mi>P</mi><msup><mi>D</mi><mi>n</mi></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo>+</mo><msup><mn>2</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>5</mn><mi>n</mi></msup><mo>−</mo><msup><mn>2</mn><mi>n</mi></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>⋅</mo><msup><mn>5</mn><mi>n</mi></msup><mo>−</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>5</mn><mi>n</mi></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><msup><mn>2</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Hauxe da diagonalizazioaren erabilera nagusietako bat: sistema dinamikoen bilakaera (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mi>n</mi></msub></mrow></math> errekurrentziak, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mi>n</mi></msub><mo>=</mo><msup><mi>A</mi><mi>n</mi></msup><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>0</mn></msub></mrow></math>) kalkulatzea, <math display=\"inline\"><mi>n</mi></math> edozein izanda ere."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ez da beti posible. <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> matrizeak balio propio bakarra du, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, aniztasun aljebraikoa 2 duena; baina <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dimentsio 1-ekoa da (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakarrik). Bektore propio aske bakarra: ez dago <math display=\"inline\"><mi>P</mi></math>-rik, <math display=\"inline\"><mi>A</mi></math> ez da diagonalizagarria. Halako matrizeak aztertzeko forma kanoniko finagoak behar dira (Jordan), ikastaro honen esparrutik kanpo."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Matrize simetrikoak: teorema espektrala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fisikan agertzen diren matrize gehienak <strong>simetrikoak</strong> dira (<math display=\"inline\"><mrow><msup><mi>A</mi><mi>T</mi></msup><mo>=</mo><mi>A</mi></mrow></math>): inertzia-tentsorea, oszilazio txikien matrizeak, forma koadratikoak. Ez da kasualitatea, eta zorte handia da: simetrikoentzat diagonalizazioa beti da posible, eta gainera oinarri <strong>ortogonal</strong> batean."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Balio propioak errealak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> erreala eta simetrikoa bada, bere balio propio guztiak errealak dira."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≠</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>, agian konplexua. <math display=\"inline\"><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup></math>-z ezkerretik biderkatuta, <math display=\"inline\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>. Ezkerreko atala erreala da: bere konjokatu transposatua bera da, zeren <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒖</mi><mi>T</mi></msup><mi>A</mi><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mo>=</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>, <math display=\"inline\"><mi>A</mi></math> erreala eta simetrikoa erabilita. Eta <math display=\"inline\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒖</mi><mo accent=\"true\">¯</mo></mover><mi>T</mi></msup><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>u</mi><mi>i</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math> erreala eta positiboa denez, <math display=\"inline\"><mi>λ</mi></math> bi erreal horien zatidura da: erreala."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Bektore propioak ortogonalak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> simetrikoa bada, balio propio desberdinei dagozkien bektore propioak ortogonalak dira: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math> izanik, kalkula dezagun <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn><mi>T</mi></msubsup><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math> bi eratara: batetik <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math>; bestetik, <math display=\"inline\"><mi>A</mi></math> simetrikoa denez, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub></mrow></math>. Kenduta: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, eta <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math> denez, biderkadura eskalarra zero da."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema espektrala (kasu erreal simetrikoa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> erreala eta simetrikoa bada, badago <math display=\"inline\"><mi>Q</mi></math> matrize <strong>ortogonal</strong> bat (<math display=\"inline\"><mrow><msup><mi>Q</mi><mi>T</mi></msup><mi>Q</mi><mo>=</mo><mi>I</mi></mrow></math>, hots, <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup></mrow></math>) non"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>Q</mi><mi>T</mi></msup><mi>A</mi><mi>Q</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "diagonala den: bektore propioz osaturiko oinarri <strong>ortonormal</strong> bat dago beti."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Frogaren muina goiko bi teoremak dira; aniztasun anizkoitzeko kasuan, propioespazio bakoitzaren barruan oinarri ortonormala aukeratu daiteke (Gram–Schmidt), eta propioespazio desberdinak berez dira elkarzutak."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Fisikarako zubia: modu normalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Zergatik da hau fisikaren erdigunea? Har dezagun adibiderik xumeena: bi masa berdin, hiru malguki berdinez lotuta."
    },
    {
     "mota": "irudia",
     "oina": "Bi osziladore akoplatu: <math display=\"inline\"><mi>m</mi></math> masa bakoitzaren\n  desplazamendua (<math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>) bere oreka-posiziotik neurtzen da.",
     "src": "media/irudiak/d633a4551b768f2d.svg",
     "zabalera": 386
    },
    {
     "mota": "testua",
     "html": "Newtonen bigarren legeak (M17 moduluan xehetasunez) hau ematen du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "edo matrize eran, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  idatzita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒙</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Modu normal</strong> bat bilatzea da bi masak maiztasun berarekin eta forma finkoarekin higitzen diren soluzio bat bilatzea: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>. Ordezkatuta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒂</mi><mo>:</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>balio propioen problema bat da, hitzez hitz</strong>. Matrize horren balio propioak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math> dira (simetrikoa da: errealak eta ortogonalak, teorema espektralak agindu bezala), bektore propioekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Beraz:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, modua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: bi masak <strong>batera</strong> dabiltza, erdiko malgukia deformatu gabe — horregatik maiztasun bera masa aske batena.",
      "<math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>3</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, modua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: masak <strong>aurkako fasean</strong>, erdiko malgukia bi aldiz deformatuz — horregatik zurrunagoa, azkarragoa."
     ]
    },
    {
     "mota": "testua",
     "html": "Higidura orokorra bi moduon konbinazio lineala da. Eta errezeta hau guztiz orokorra da: <math display=\"inline\"><mi>n</mi></math> askatasun-graduko oszilazio txiki oro diagonalizazio bat da (M17ko 7. kapituluak — oszilazio txikiak — hauxe bera egingo du <math display=\"inline\"><mi>n</mi></math> orokorrarekin). Berdin inertzia-tentsorearekin (simetrikoa: hiru ardatz nagusi elkarzut, beti) eta, aurrerago, mekanika kuantikoarekin: behagarri bat operadore autoadjuntu bat da, neurketaren emaitza posibleak bere balio propioak dira, eta egoerak bere bektore propioen oinarrian garatzen dira. Kapitulu honetan ikasitakoa da, hitz berri batzuekin."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  aplikaziorako: egiaztatu lineala dela, idatzi bere matrizea oinarri kanonikoetan, eta kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> eta heina. Egiaztatu dimentsioen teorema."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio eta bektore propioak, eta egiaztatu batura aztarnarekin eta biderkadura determinantearekin."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Diagonalizatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: aurkitu <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>D</mi></math>, eta egiaztatu esplizituki <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>D</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurreko ariketako matrizearekin, kalkulatu <math display=\"inline\"><msup><mi>A</mi><mn>10</mn></msup></math> diagonalizazioaren bidez."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren balio propioak eta propioespazioak, eta diagonalizatu <math display=\"inline\"><mi>Q</mi></math>  <strong>ortogonal</strong> baten bidez (normalizatu bektore propioak). Zergatik zeneukan ziurtatuta hori posible zela, kalkulurik egin gabe?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erakutsi <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ez dela diagonalizagarria, aniztasun aljebraikoa eta geometrikoa konparatuz."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>P</mi></math> proiekzio bat bada (<math display=\"inline\"><mrow><msup><mi>P</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi></mrow></math>), erakutsi bere balio propio bakarrak <math display=\"inline\"><mn>0</mn></math> eta <math display=\"inline\"><mn>1</mn></math> izan daitezkeela. Interpretatu geometrikoki."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi osziladore akoplatuen sisteman, ordezkatu erdiko malgukia <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math> malguki batez (kanpokoak <math display=\"inline\"><mi>k</mi></math> mantenduta). Idatzi higidura-ekuazioen matrizea, kalkulatu bi modu normalak eta haien maiztasunak, eta azaldu zergatik aldatu den bat eta bestea ez."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> simetrikoa eta <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> bektore propioak balio propio berarekin badira, erakutsi haien edozein konbinazio lineal (ez-nulua) ere bektore propioa dela. Zer esan nahi du horrek <math display=\"inline\"><msub><mi>E</mi><mi>λ</mi></msub></math>-ri buruz?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kapitulu hau JAKINArako beren-beregi idatzia da (ez dago iturririk corpusean): aplikazio linealen eta diagonalizazioaren teoria estandarra, frogapen osoekin, 1. kapituluko espazio bektorialen jarraipen gisa. Ariketa osagarri ebatziak: <code>ocw_ejercicios_resueltos</code>  (gaztelaniaz, euskaratzeke). Irudiak CeTZ marrazki originalak dira."
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 1 nov 2012 alg calc fis general quimi computacion, IMG_2026_07_28_01_07_47S.jpg",
     "xehetasuna": "LANDETA koadernoa, 2.-3. orrialdeak: aplikazio lineala, oinarriak, dimentsioa eta matrize elkartuari buruzko eskuzko transkripzio autoauditatu eta matematikoki egiaztatua",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "Linealtasuna eta matrize elkartua oinarri batean",
   "blokeak": []
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Linealtasunaren irizpidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> lineala izateko, honako hau bete behar da <math display=\"inline\"><mrow><mi>v</mi><mo>,</mo><msup><mi>v</mi><mo>′</mo></msup><mo>∈</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi></mrow></math> guztietarako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo>+</mo><mi>μ</mi><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bereziki, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> izan behar da. Heuristikoki, aplikazioa <strong>ez da lineala</strong> koordenatuetan gai konstante bat (<math display=\"inline\"><mrow><mi>+</mi><mi>K</mi></mrow></math>) edo biderkadura/ karratu bat (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>) badu."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>W</mi></math> azpiespazioa eta haren oinarria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sortzaileak independenteak dira (lehen bi koordenatuen determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>), beraz <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>. Proposatzen den oinarria <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ere baliozkoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>9</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "(ii) <math display=\"inline\"><mi>f</mi></math>-ren matrize elkartua <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> oinarrian",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oinarriko bektoreen irudiak, <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>-ren koordenatuetan adierazita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><mn>4</mn><msub><mi>w</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatuak zutabetan jarriz, matrize elkartua <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>-koa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak &quot;LA MATRIZ SERÁ DE <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>&quot; idazten du, arrazoituz bektoreek lau koordenatu dituztela; hori <strong>okerra</strong> da: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazioaren matrizea <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> oinarrian (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>) <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>-koa da, ez <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>-koa. Halaber, ondorengo &quot;<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>&quot; etiketa ez dator bat marraztutako <math display=\"inline\"><mrow><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazioarekin. <math display=\"inline\"><mi>f</mi></math>-ren formula ez da irudi honetan agertzen; matrizea bi ebaluazio ikusgaietatik eratorri da. Margen gorriko oharra (&quot;si no puedo pasar el vector <math display=\"inline\"><mn>0</mn></math> no es espacio vectorial&quot;) ziurrenik <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> irizpideari egiten dio erreferentzia; hala ere, <math display=\"inline\"><mi>f</mi></math> ez-lineala izateak ez du esan nahi <math display=\"inline\"><mi>W</mi></math> espazio bektoriala izateari uzten dionik."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario algebra ene 2013, IMG_2026_07_28_02_14_56S.jpg, ezkerreko erdia",
     "xehetasuna": "A1_0018i: aplikazio linealen nukleoari eta irudiari buruzko eskuzko garapenaren hitzez hitzeko transkripzio egiaztatua; zuzenketak eta egiaztapen matematikoa bereizita",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Eskuzko iturriaren edizio kritikoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Unitatea:</strong> <code>A1_0018i</code>. <strong>Irudiak:</strong> 1/1. Testua ez da laburtu: hitzez hitzeko transkripzioa eta haren irakurketa-zalantzak, zuzenketa editorialak eta egiaztapen teknikoa bereizita mantentzen dira. Jatorrizko fitxategiak eta egiaztapen-taula kanpo-ebidentzia gisa gordetzen dira."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Aplikazio linealak: 0018 irudiaren ezkerreko erdia",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "0018 - IMG_2026_07_28_02_14_56S.jpg"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Jatorria"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Iturria:</strong> espazio-ontzia/diario algebra ene 2013/IMG_2026_07_28_02_14_56S.jpg.",
      "<strong>Banaketa-erabakia:</strong> orri bikoitz baten ezkerreko erdia, irteera indibidual gisa bereizia; fitxategi honek 34. orrialdea baino ez du jasotzen.",
      "<strong>Irakasgaia:</strong> algebra_primero.",
      "<strong>Funtzio dokumentala:</strong> ejercicio_resuelto_manuscrito.",
      "<strong>Balioztatutako gaia:</strong> nukleoa, irudia eta oinarri baten hedapena, aplikazio lineal bat eraikitzeko.",
      "<strong>Helmuga:</strong> JAKINA_alt/kapituluak/koadernoak/02_aplikazio_linealak.typ."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Transkripzio literala"
    },
    {
     "mota": "oharra",
     "titulua": "Eskuizkribua, maketatuta (hitzez hitzeko geruza)",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "minmax(0,1fr) auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "2013/2/18"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "ÁLGEBRA <br>LANDETA"
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[ezkerreko orria, 34. or.]</span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> ezaguna denez, <strong>IRTEERA-ESPAZIOAREN OINARRIRAKO <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-KO BI BEKTORE</strong> aukeratuko ditugu."
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[harridura-ikurra obalo baten barruan; lehen terminoa errepasatuta:]</span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[urdinez:]</span>"
      },
      {
       "mota": "testua",
       "html": "<span>IRTEERA-ESPAZIOA HONELA DESKONPOSATZEN DA:</span>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<span class=\"j-edoh\">[urdinez, gezia:]</span> <span>→   <math display=\"inline\"><mn>0</mn></math> BIHURTZEN DIREN BEKTOREAK</span>",
        "<span class=\"j-edoh\">[urdinez, gezia:]</span> <span>→   GALTZEN DIREN BEKTOREAK</span>"
       ]
      },
      {
       "mota": "testua",
       "html": "Beraz, <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[urdinez: geziak lehen bi bektoreetatik <math display=\"inline\"><mn>0</mn></math>-rantz; geziak\n  <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math>-tik eta <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math>-tik <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-rantz]</span>"
      },
      {
       "mota": "testua",
       "html": "<strong>BADA, ORAIN <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> ETA <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> HEDATUKO DITUGU, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-REN OINARRI BAT LORTU ARTE.</strong>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> direnez, <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math>-k eta <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math>-k, <strong><math display=\"inline\"><mi>f</mi></math>-REN BIDEZ</strong>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> sortuko dute."
      },
      {
       "mota": "testua",
       "html": "Adibidez, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>v</mi><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartuta."
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[gorriz: marka txiki bat <math display=\"inline\"><msub><mi>v</mi><mn>4</mn></msub></math>-ren azken <math display=\"inline\"><mn>1</mn></math>aren azpian]</span>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mo>+</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[arkatzez: zirkulu bat <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizearen 3. errenkadako, 1. zutabeko <math display=\"inline\"><mn>1</mn></math>aren inguruan]</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[gorriz: marka txikiak <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizearen eta <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>\n  minorearen behe-eskuineko <math display=\"inline\"><mn>1</mn></math>en azpian]</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[berdez; euskaraz: &quot;ez zaigu lehenengoan atera&quot;:]</span>"
      },
      {
       "mota": "testua",
       "html": "<span>((NO NOS HA SALIDO A LA PRIMERA))</span>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-edoh\">[orrialdearen oina: 34]</span>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Irakurketa zalantzazkoak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Handitutako birirakurketak <code>es conocido</code>, <code>DOS VECTORES</code>, bi bineta urdinak eta ezezko ohar berdea ebazten ditu; pasarte horietan ez da geratzen alternatiba grafiko arrazoizkorik.",
      "Lerro handiak <code>v₁ Y v₂</code> idazten du: azpiindizeak bat datoz justu beheko lerroko <code>Como v₁ y v₂ ∈ Ker f</code> esaldikoekin. Ez da hartzen <code>v₃ Y v₄</code> alternatiba.",
      "Jatorrizko bereizmenean egindako autoauditoretzaren ondoren, erdi honetan ez da geratzen zalantzazko gisa markatutako irakurketarik."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Zuzenketa editorialak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Transkripzio literalaren barruan ez da zuzendu ez hitzik, ez formularik, ez matrize-sarrerarik.",
      "Ikusgai dauden data eta errotulua geruza literalean ere gordetzen dira; Typst iruzkinek metadatuak eta sekuentzia editoriala mantentzen dituzte.",
      "<em class=\"j-nab\">Terminologia estandarrean, nukleoko bektoreak abiapuntu-espazioari edo domeinuari dagozkio, ez irteera-espazioari.</em> Eskuizkribuko <code>BASE DEL ESPACIO SALIDA</code> esapidea editorialki berrikusi beharko litzateke, baina dagoen-dagoenean mantentzen da.",
      "Eraikuntza gero esplizitu egin daiteke <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> gisa eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hautatuz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> sortzeko; urrats hori ez da geruza literalean txertatzen, orrialde honetan ez baitago modu ikusgarrian garatuta."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Egiaztapen matematikoa"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>β</mi></math>-n ageri diren nukleoko bi bektoreak, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, linealki independenteak dira: <math display=\"inline\"><mrow><mi>a</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>b</mi><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> berdintzatik, hirugarren koordenatuak <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> ematen du eta bigarrenak <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>; beraz, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>. Hortaz, adierazitako nukleoaren dimentsioa <math display=\"inline\"><mn>2</mn></math> da.",
      "Heina-nulitatearen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> berdintza bateragarria da <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math> balioekin. Zuzena."
     ]
    },
    {
     "mota": "testua",
     "html": "✓"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Berriro kalkulatu da errenkadatzat <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dituen matrizearen determinantea. Hirugarren errenkadaren araberako garapenak <math display=\"block\"><mrow><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mo>+</mo><mn>1</mn></mrow></msup><mo>⋅</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math> ematen du; bat dator eskuizkribuko <code>1·1 ≠ 0</code> idazkerarekin. Lau bektoreek <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri bat osatzen dute. Zuzena. ✓",
      "Erdi honetan ez da hauteman emaitza numeriko faltsurik: determinante ez-nulua zuzena da. <code>espacio salida</code> esapideari buruzko zehaztugabetasun terminologikoa <strong>Zuzenketa editorialak</strong> atalean bereizita geratzen da."
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Ariketa (azterketa): aplikazio lineal baten matrize kanonikoa eta alderantzizkoa",
   "blokeak": [
    {
     "mota": "ariketa",
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
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Azterketa-ariketa («EXÁMENES», «ÁLGEBRA LANDETA», 2013/01/03). Dena egiaztatua: determinantea <math display=\"inline\"><mn>16</mn></math> (kofaktoreak / Sarrus), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>3</mn></mrow></math> (bijektiboa, objektiboa <math display=\"inline\"><msub><mi>I</mi><mn>3</mn></msub></math>), 1. moduko sistema (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>) eta 2. moduko alderantzizko esplizitua (<math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>), hiru aurreirudiekin. ⚠ Baztertutako lote zaharrak determinantea «<math display=\"inline\"><mrow><mi>−</mi><mn>16</mn></mrow></math>» irakurri zuen (aritmetika okerrarekin); balio zuzena <math display=\"inline\"><mrow><mi>+</mi><mn>16</mn></mrow></math> da (hemen berretsia). Orriak ez ditu bi oinarriak esplizituki eraikitzen (hurrengo orrian jarraitzen du). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p012.typ</code>"
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
   "id": "a14",
   "maila": 2,
   "izenburua": "Base-aldaketa, <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinante parametrikoa eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko azpiespazioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru eduki: 2. ariketaren jarraipena (base-aldaketaren diagrama), parametro duen <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinante bat, eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko bi azpiespazioren dimentsioak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. ariketaren jarraipena: base-aldaketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math> (kanonikoa) eta <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mi>f</mi></math>-ren matrizea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>,</mo><msup><mi>β</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oinarrietan diagrama trukakorretik dator: <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo>⋅</mo><mi>B</mi><mo>⋅</mo><mi>P</mi></mrow></math>, non <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><msub><mi>I</mi><mn>3</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msup><mi>β</mi><mo>′</mo></msup></mrow></msub></mrow></math>. <math display=\"inline\"><mi>Q</mi></math>-ren zutabeak bektore kanonikoen koordenatuak dira <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-en — hots, p012-ko <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-en irudiak: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinante parametrikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>4</mn></msub><mo>+</mo><msub><mi>C</mi><mn>5</mn></msub></mrow></math> eginez, lehen zutabea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup></mrow></math> geratzen da (errenkada bakoitzean <math display=\"inline\"><mrow><mi>−</mi><mi>λ</mi></mrow></math> eta <math display=\"inline\"><mi>λ</mi></math> ezeztatzen dira): <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> Lehen zutabetik garatuz, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>5</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. Minorea behe-triangeluarra da, diagonala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mn>5</mn><mo>⋅</mo><msup><mi>λ</mi><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko azpiespazioak: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Bigarrenetik <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; lehenengoan ordezkatuz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>. Beraz <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Hortik <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> Sortzaile-bikote biak linealki askeak dira, beraz <strong><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math></strong>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: base-aldaketaren diagrama (<math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msup><mi>β</mi><mo>′</mo></msup></mrow></msub></mrow></math>, zutabeak p012-ko <math display=\"inline\"><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-en irudiak), <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>5</mn></mrow></math> determinantea (<math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math>-era batuz eta behe-triangeluar bihurtuz, <math display=\"inline\"><mrow><mn>5</mn><msup><mi>λ</mi><mn>4</mn></msup></mrow></math>), eta <math display=\"inline\"><mi>U</mi></math>, <math display=\"inline\"><mi>W</mi></math> azpiespazioak (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>). Jatorrizkoak <math display=\"inline\"><mi>Q</mi></math> <strong>hutsik</strong> uzten du (zutabeak beteko lituzkeen balioekin ez da bete; hemen ere ez da bete, iturriaren isla). Zenbait irakurketa-zalantza (matrizeko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrera, «<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>» vs <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math> <math display=\"inline\"><mi>W</mi></math>-n —<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math> da zuzena—, egilearen amaierako txantxa) ez diote mamiari eragiten. Ikus <code>koadernoa_landeta2_alg_p014.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Aplikazio linealaren matrizea eta oinarri-aldaketa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarria <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> osatuz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri bat eratzen da <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-ren bi bektoreak beste birekin (<math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>∖</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>) osatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>∖</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lau bektore hauek askeak dira, determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> baita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>f</mi></math>-ren formula orokorra"
    },
    {
     "mota": "testua",
     "html": "Oinarriko bektoreen irudiak:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bektore generiko bat oinarri berrian adieraziz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, osagaiz osagai: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>μ</mi></mrow></math>; hortik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Linealtasunez, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math> ordezkatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>δ</mi><mo>+</mo><mn>4</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>δ</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>+</mo><mn>4</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(iv) Matrize kanonikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren osagai bakoitzean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koefizienteak irakurriz, oinarri kanonikoko matrize elkartua (<strong>egiaztatua</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(v) Oinarri-aldaketa"
    },
    {
     "mota": "testua",
     "html": "Oinarri berri bat, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>f</mi></math>-ren matrizea <math display=\"inline\"><mi>B</mi></math> oinarrian, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, oinarri-aldaketaren diagramaren bidez lortzen da: <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><msub><mi>B</mi><mi>c</mi></msub><mn>4</mn></msubsup><mover><mo>→</mo><mrow><mi>f</mi><mo>=</mo><mi>A</mi></mrow></mover><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><msub><mi>B</mi><mi>c</mi></msub><mn>4</mn></msubsup></mrow></math> eta <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><mi>B</mi><mn>4</mn></msubsup><mover><mo>→</mo><mrow><mi>f</mi><mo>=</mo><mi>B</mi></mrow></mover><msubsup><mi mathvariant=\"double-struck\">ℝ</mi><mi>B</mi><mn>4</mn></msubsup></mrow></math>, non <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><mi>B</mi></mrow></msub></mrow></math> (oinarri-aldaketaren matrizea) eta <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub></mrow></math>. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (<math display=\"inline\"><mi>B</mi></math>-tik oinarri kanonikorako aldaketa-matrizea) haren zutabeetan <math display=\"inline\"><mi>B</mi></math>-ren bektoreen koordenatuak kanonikoan jarriz kalkulatzen da. <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> eta <math display=\"inline\"><mi>B</mi></math>-ren balio zenbakizkoak hurrengo orrialdean garatzen dira. Jatorrizkoan <math display=\"inline\"><mi>A</mi></math> matrizea bi aldiz marraztuta dago (berdinak). <math display=\"inline\"><mrow><mi>A</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren &quot;zutabekako banaketan&quot; lehen sarrera &quot;<math display=\"inline\"><mrow><mn>8</mn><mi>x</mi></mrow></math>&quot; gisa agertzen da, baina hori bateraezina da <math display=\"inline\"><mi>A</mi></math>-ren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrera egiaztatuarekin (<math display=\"inline\"><mn>0</mn></math> da); zati hori ez da erreproduzitu, akatsa baita. &quot;<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>3</mn></mrow></math>&quot; eta laugarren bektorearen (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) irakurketa zalantzazkoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p040_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Oinarri-aldaketaren matrizeak; <math display=\"inline\"><mi>f</mi></math> hiru irudietatik",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> eta <math display=\"inline\"><mi>P</mi></math> matrizeak"
    },
    {
     "mota": "testua",
     "html": "Aurreko orrialdeko oinarri-aldaketaren jarraipena. <math display=\"inline\"><mi>B</mi></math>-ren bektoreak oinarri kanonikoan adieraziz, <math display=\"inline\"><mrow><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><mi>B</mi></mrow></msub></mrow></math> kalkulatzeko, oinarri kanonikoko bektore bakoitza <math display=\"inline\"><mi>B</mi></math>-ren funtzioan adierazten da (ekuazio-sistema bana). Adibidez, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn></mrow></math>. Emaitza:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>P</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "5. ariketa: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> hiru irudietatik"
    },
    {
     "mota": "testua",
     "html": "Aplikazio lineala hiru irudiz definitua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Horrek <math display=\"inline\"><mi>f</mi></math> modu bakarrean zehazten du <strong>soilik</strong> hiru bektoreek domeinuaren (hots, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren) oinarri bat sortzen badute. Egiaztapena: hiru bektoreek osatutako <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> matrizearen heina <math display=\"inline\"><mn>3</mn></math> da, beraz oinarria dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ondoren eskatzen dira: (i) <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula orokorra, eta (ii) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistematik."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — konfiantza baxua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Orrialde hau oso trinkoa da (letra txikia, kalkulu ugari) eta zati batzuk barne-inkoherentziak dituzte; ez dira emaitza garbi gisa erreproduzitu. Zehazki: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formula orokorra jatorrizkoan honela agertzen da (irakurketa zalantzazkoa, bigarren osagaian &quot;<math display=\"inline\"><mi>z</mi></math>&quot; errepikatua ziurrenik akatsa dela): <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mi>−</mi><mn>16</mn><mi>z</mi><mo>−</mo><mn>11</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>−</mo><mn>3</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>,</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-ren sistema ere ez da bat etortzen formula horrekin (bigarren ekuazioak &quot;<math display=\"inline\"><mrow><mn>16</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi></mrow></math>&quot; darabil, izendatzaile gabe), eta pausoak laburtuta daude; azken emaitza, &quot;<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>3</mn><mi>z</mi></mrow></math>&quot;, bi aldiz agertzen da modu koherentean, baina ezin izan da modu independentean egiaztatu. Ezkerreko orrialdeko lehen lerroa (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>…</mi></mrow></math>&quot;) ere ez dator guztiz bat azpian idatzitako <math display=\"inline\"><msub><mi>M</mi><msub><mi>B</mi><mi>c</mi></msub></msub></math> matrizearekin. Metodologiaren arabera, dena hitzez hitz transkribatu da, zuzenketa behartu gabe."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p042_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Azpiespazio osagarriak eta aldaezinak; diagonalizazioaren hasiera",
   "blokeak": [
    {
     "mota": "ariketa",
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
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Saioa «PARTICULAR» (berdez; cf. «GRUPO» p010-en). Dena egiaztatua: oinarriak (<math display=\"inline\"><msub><mi>U</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>U</mi><mn>2</mn></msub></math>), determinantea <math display=\"inline\"><mn>3</mn></math> (osagarriak, <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>⊕</mo><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>), aldaezintasuna balio propioekin (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"inline\"><mn>2</mn></math>), eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math> matrizea. Matrize hau newton p052-koaren berbera da (balio propioak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>); diagonalizazioa hor bezala osatzen da. «MISMO ESPACIO: MATRICES SEMEJANTES» oharra zuzena da. Ikus <code>koadernoa_landeta2_alg_p018.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Diagonalizazioa: polinomio karakteristikoa, balio eta bektore propioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p018ko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> endomorfismoaren diagonalizazioaren jarraipena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio karakteristikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>I</mi><mn>3</mn></msub><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> Sarrus-en bidez: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>−</mo><mn>3</mn><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo>−</mo><mn>1</mn><mo>−</mo><mn>3</mn><mi>x</mi></mrow></math>, hots <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>.</mi></mrow></math> Ruffini-z (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> erroa): koefizienteak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hondarra <math display=\"inline\"><mn>0</mn></math>. Kozientea <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math>, erroak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>8</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> balio propioak: </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azpiespazio propioak"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>. <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>I</mi></mrow></math> bat guztiko matrizea denez: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> hots <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math> 1.<math display=\"inline\"><mi>−</mi></math>2. ekuazioa: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; 1.<math display=\"inline\"><mi>−</mi></math>3.: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> (egiaztapena: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ✓). Beraz <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizagarritasuna"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: anizkoiztasun <strong>geometrikoak</strong> eta <strong>aljebraikoak bat datoz</strong>, beraz <strong><math display=\"inline\"><mi>f</mi></math> diagonalizagarria da</strong>. Oinarri propioan <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn></mrow></math> (Sarrus), Ruffini-z <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, balio propioak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, dim 2), <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>U</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mi>z</mi></mrow></math>, dim 1) — biak p018ko azpiespazio aldaezinekin bat; eta diagonalizagarritasuna (anizkoiztasunak berdinak). <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>J</mi><mo>−</mo><mi>I</mi></mrow></math> matrize hau newton p052-koaren berbera da. Egilearen «NO SÉ / SÉ RESOLVERLO» eta amaierako ohar informala jasota daude. Ikus <code>koadernoa_landeta2_alg_p020.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Diagonalizazioaren itxiera: matrizea oinarri propioan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p020ko diagonalizazioaren amaiera: <math display=\"inline\"><mi>f</mi></math>-ren matrizea oinarri propioan diagonala dela egiaztatzen da, koordenatuz koordenatu."
    },
    {
     "mota": "testua",
     "html": "Oinarri propioa <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> bakoitza <math display=\"inline\"><mi>B</mi></math>-ren konbinazio gisa idazten da (zutabeak): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> Koefizienteak zutabeka jarriz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <strong><math display=\"inline\"><mi>f</mi></math> diagonalizagarria da</strong> eta <math display=\"inline\"><mi>B</mi></math> bektore propioen oinarria da, p020ko balio propioekin (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> bikoitza, <math display=\"inline\"><mn>2</mn></math>) eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math> egiturarekin bat."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "★ <strong>Rótulo «ÁLGEBRA NEWTON»</strong> landeta2 koaderno fisikoaren barruan: akademia-gurutzatzea (NEWTON saioa landeta2-n; SECUENCIAS mapan jasoa). Dena egiaztatua: hiru irudien deskonposaketa (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mrow></math>) eta <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mi>B</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Orri mistoa da: eskuinaldea (23. orr.) FISICA LANDETA da, bereiz maketatua (<code>koadernoa_landeta2_fisica_p023</code>). Ikus <code>koadernoa_landeta2_alg_p022.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_43_28S.jpg",
     "xehetasuna": "ALGEBRA LANDETA (landeta2), 32.-33. orrialdeak: paso-matrizeak eta alderantzizkoa adjuntuaren bidez (kofaktore guztiak egiaztatuta) — v3 transkripzioa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Pasabide-matrizeak eta alderantzizkoa adjuntuaren bidez (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p022ko diagonalizazioaren jarraipena: <math display=\"inline\"><mi>D</mi></math> eta <math display=\"inline\"><mi>A</mi></math> lotzen dituzten pasabide-matrizeak."
    },
    {
     "mota": "testua",
     "html": "Pasabide-matrizea <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></mrow></math>, zutabeak bektore propioak: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Determinantea</strong> (lehen zutabetik garatuz): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>−</mo><mn>1</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mn>0</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Alderantzizkoa adjuntuaren bidez.</strong> Kofaktore-matrizea (<math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>i</mi><mo>+</mo><mi>j</mi></mrow></msup></mrow></math> minorea): <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">adib. </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>C</mi><mn>11</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>C</mi><mn>21</mn></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Adjuntua <math display=\"inline\"><mi>C</mi></math>-ren iraulia da, eta <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>C</mi><mi>t</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi>P</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>I</mi></mrow></math> egiaztatua.)"
    },
    {
     "mota": "testua",
     "html": "<strong>Egiaztapena.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> p022ko emaitzarekin bat. Diagrama trukakorreko lau matrizeak: <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><mi>β</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><mi>β</mi></mrow></msub><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mi>P</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: <math display=\"inline\"><mi>P</mi></math> (bektore propioen zutabeak), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>3</mn></mrow></math> (garapena), kofaktore guztiak (banan-banan berretsiak: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>), <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mi>C</mi><mi>t</mi></msup><mi>/</mi><mn>3</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jatorrizkoak <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-en bigarren-hirugarren errenkadak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> faktorerik gabe idazten ditu (faktore komuna azpian ulertzen da; beheko biderkadurak <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> osoa darama). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p032.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_47_13S.jpg — IMG_2026_07_28_01_48_27S.jpg",
     "xehetasuna": "ALGEBRA LANDETA (landeta2), 84.-111. orrialdeak, 2013/01/18-24: diagonalizagarritasuna, JORDANEN FORMA KANONIKOA osorik (azpiespazio orokortuak, oinarria, egiaztapena), matrize baliokideak eragiketa elementalez, f^2011 Jordanen bidez, eta base-aldaketaren alderantzizko problema — v3 transkripzio egiaztatuak",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Diagonalizagarritasuna <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n: anizkoiztasun aljebraikoa eta geometrikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Endomorfismo bat diagonalizagarria <strong>ez</strong> denaren adibidea (baina bai triangeluarizagarria): balio propio bakarraren anizkoiztasun geometrikoa aljebraikoa baino txikiagoa denean."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio karakteristikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math> <strong>blokeka goi-triangeluarra</strong> da (behe-ezkerreko <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea nulua): <math display=\"block\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Beraz determinantea bi bloke diagonalen biderkadura da: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math> Balio propio <strong>bakarra</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, anizkoiztasun aljebraikoa <math display=\"inline\"><mn>4</mn></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azpiespazio propioa <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>z</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>t</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>y</mi></math> eta <math display=\"inline\"><mi>t</mi></math> askeak; beraz <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mi>t</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondorioa"
    },
    {
     "mota": "testua",
     "html": "Anizkoiztasun <strong>geometrikoa</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <strong>aljebraikoa</strong> <math display=\"inline\"><mn>4</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>&lt;</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> EZ da diagonalizagarria</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baina <math display=\"inline\"><msub><mi>χ</mi><mi>f</mi></msub></math> osoki deskonposatzen da <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n, beraz <strong><math display=\"inline\"><mi>f</mi></math> triangeluarizagarria da</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Kontrako adibidea:</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (desberdinak) <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n → diagonalizagarria, <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: <math display=\"inline\"><mi>f</mi></math>-ren formula <math display=\"inline\"><mi>A</mi></math>-ren errenkadekin bat; <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math> (blokeka goi-triangeluarra, bi <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>); <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn></mrow></math>); <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn></mrow></math>); eta <math display=\"inline\"><mrow><mn>2</mn><mo>&lt;</mo><mn>4</mn></mrow></math> denez, EZ diagonalizagarria baina bai triangeluarizagarria. Kontrako adibidea (balio propio desberdinak → diagonalizagarria) zuzena da. Aljebra itzultzen da koadernora kalkulu-bloke luze baten ostean. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p084.typ</code>"
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
   "id": "a22",
   "maila": 2,
   "izenburua": "Koordenatu-aldaketa: bi metodo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektorearen koordenatuak bi oinarritan, eta batetik bestera pasatzeko bi metodo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatuak <math display=\"inline\"><mi>β</mi></math> oinarrian"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebatziz: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>3</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatuak <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> oinarrian: bi metodo"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>1. metodoa:</strong> <math display=\"inline\"><mi>β</mi></math>-ren bektore bakoitza <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n adierazi eta koordenatuak konposatu.",
      "<strong>2. metodoa:</strong> <strong>oinarri-aldaketaren matrizea</strong> eraiki (<math display=\"inline\"><mi>β</mi></math>-ren bektoreak <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n, zutabetzat) eta <math display=\"inline\"><mi>β</mi></math>-koordenatuez biderkatu:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>x</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>y</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>z</mi><mo>′</mo></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>β</mi><mo>′</mo></msup></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Oharra (enuntziatuaren aldakuntza)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko enuntziatuan <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-ren hirugarren bektorea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gisa irakur badaiteke ere, <strong>garapenak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiltzen du</strong> koherentziaz, eta emaitza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (SymPy-z egiaztatua). <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aterako litzateke; irakurketa-aldakuntza da."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0050</code>, 100-101 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>β</mi></msub></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>β</mi><mo>′</mo></msup></msub></mrow></math>. Bi metodoak baliokideak dira. Enuntziatuko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldakuntza aipatua. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p100.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p102_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; egiaztapena, AX=B eta azpiespazio f-aldaezinak",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Koordenatu-aldaketaren egiaztapena, <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math> eta azpiespazio <math display=\"inline\"><mi>f</mi></math>-aldaezinak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko koordenatu-aldaketaren egiaztapena (bi noranzkoetan), ekuazio-sistema matriziala <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math>, eta <strong>IV. gaiko</strong> teorema bat: azpiespazio <math display=\"inline\"><mi>f</mi></math>-aldaezinen batura <math display=\"inline\"><mi>f</mi></math>-aldaezina da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatu-aldaketaren egiaztapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-ko koordenatuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zuzenak dira: jatorrizko bektorea berreraikitzen dute,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eta alderantzizko norabidean, <math display=\"inline\"><msubsup><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup></math>-ez (edo sistema ebatziz) <math display=\"inline\"><mi>β</mi></math>-koordenatuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> berreskuratzen dira: aldaketa <strong>koherentea</strong> da bi noranzkoetan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi></mrow></math> ekuazio-sistema"
    },
    {
     "mota": "testua",
     "html": "Sistema lineal bat <strong>matrize eran</strong> idatzita, <math display=\"inline\"><mi>A</mi></math> alderantzikagarria bada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azpiespazio <math display=\"inline\"><mi>f</mi></math>-aldaezinen batura"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Azpiespazio f-aldaezina",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math> azpiespazioa <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekiko <strong><math display=\"inline\"><mi>f</mi></math>-aldaezina</strong> da baldin eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mi>W</mi></mrow></math> bada."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Teorema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math> azpiespazio <math display=\"inline\"><mi>f</mi></math>-aldaezinak badira, haien <strong>batura</strong> <math display=\"inline\"><mrow><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math> ere <math display=\"inline\"><mi>f</mi></math>-aldaezina da."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Froga.</strong> <math display=\"inline\"><mrow><msub><mi>W</mi><mi>i</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>w</mi><mrow><mi>i</mi><mn>1</mn></mrow></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> izanik, batura beren sortzaileen bilduraren azpiespazioa da. <math display=\"inline\"><msub><mi>W</mi><mi>i</mi></msub></math> bakoitza <math display=\"inline\"><mi>f</mi></math>-aldaezina denez, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><msub><mi>w</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>W</mi><mi>i</mi></msub><mo>⊆</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>; beraz <math display=\"inline\"><mi>f</mi></math>-k sortzaile guztiak baturara eramaten dituenez, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊆</mo><msub><mi>W</mi><mn>1</mn></msub><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>W</mi><mi>n</mi></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": " "
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0051</code>, 102-103 orriak; &quot;ÁLGEBRA LANDETA&quot;). Koordenatu-aldaketaren egiaztapena (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>B</mi><mo>⇒</mo><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi></mrow></math>, eta azpiespazio <math display=\"inline\"><mi>f</mi></math>-aldaezinen baturaren teorema zuzenak dira. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p102.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p108_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); balio propioak eta diagonalizagarritasuna (3×3; zuzenketa: ez diagonalizagarria)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Balio propioak eta diagonalizagarritasuna (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> adibidea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mn>7</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>13</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, matrizearekin <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Balio propioak, espazio propioak eta diagonalizagarria den aztertzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balio propioak eta polinomio karakteristikoa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>x</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>4</mn></mrow></math> (<strong>anizkoiztasun aljebraikoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>1</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espazio propioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebatziz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ez da diagonalizagarria (zuzenketa)"
    },
    {
     "mota": "testua",
     "html": "<strong>Diagonalizazioaren irizpidea:</strong> <math display=\"inline\"><mi>f</mi></math> diagonalizagarria da baldin eta balio propio bakoitzeko <strong>anizkoiztasun geometrikoa eta aljebraikoa berdinak</strong> badira. Hemen, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>-rentzat,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "beraz <math display=\"inline\"><mi>f</mi></math> <strong>EZ da diagonalizagarria</strong> (<strong>akastuna</strong> da; Jordan-en forma behar du)."
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (diagonalizagarritasuna)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orrian hasieran &quot;<math display=\"inline\"><mi>f</mi></math> diagonalizagarria da&quot; idazten da, baina <strong>bere kalkuluak berak</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>) irizpidearekin (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>) alderatuta, <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> denez, <strong>ez da diagonalizagarria</strong>. SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> eta <math display=\"inline\"><mi>A</mi></math> <strong>ez da diagonalizagarria</strong>. Aldakuntza aipatua."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0054</code>, 108-110 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, eta <math display=\"inline\"><mi>A</mi></math> <strong>ez da diagonalizagarria</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>). Zuzenketa aipatua goian. Ikus <code>koadernoa_landeta1_alg_p108.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p110_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; diagonalizagarritasuna 4×4 batean (metodoa; matrizea inkoherentea jatorrian)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Diagonalizagarritasuna <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> batean: metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko endomorfismo baten (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizea) diagonalizagarritasuna aztertzeko prozedura, <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> kasuko irizpide bera aplikatuz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio karakteristikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrize baten polinomio karakteristikoa <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>x</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da (4. mailako polinomioa). Praktikan, <strong>lerro- eta zutabe-eragiketaz</strong> sinplifikatu (zeroak sortu) eta <strong>kofaktoreen bidez</strong> garatzen da, minore txikiagoetara jaitsiz, eta gero <strong>faktorizatu</strong> balio propioak lortzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irizpidea"
    },
    {
     "mota": "testua",
     "html": "Balio propio bakoitzeko, <strong>anizkoiztasunak</strong> alderatzen dira:"
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Diagonalizagarritasunaren irizpidea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>λ</mi></math> balio propio bakoitzeko:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Aljebraikoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mi>λ</mi></math>-ren anizkoiztasuna <math display=\"inline\"><msub><mi>χ</mi><mi>A</mi></msub></math>-n.",
        "<strong>Geometrikoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>A</mi></math> <strong>diagonalizagarria</strong> da baldin eta <math display=\"inline\"><msub><mi>χ</mi><mi>A</mi></msub></math> gorputzean eskindatzen bada <strong>eta</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balio propio guztietan."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio propio bakoitzeko <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebazten da (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> sistema), eta haren dimentsioa <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin alderatzen."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0055</code>, 110-111 orriak; &quot;ÁLGEBRA LANDETA&quot;). Jatorrizko <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizearen <strong>irakurketa inkoherentea</strong> da (<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>I</mi></mrow></math> blokeek ez dute bat egiten, eta eskuzko determinante-garapenak akatsak ditu), beraz zenbaki zehatzak ez dira fidagarriak; hemen <strong>metodoa</strong> aurkezten da (polinomio karakteristikoa <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>-an, eta <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math> irizpidea). Zuzenketarik ez behartu. Ikus <code>koadernoa_landeta1_alg_p110.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p112_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); V(-1) eta diagonalizagarritasuna (orri mistoaren algebra erdia; zuzenketa: y=-z)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> espazio propioa eta diagonalizagarritasuna (3. ariketaren amaiera)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ariketaren jarraipena eta amaiera: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> balio propioaren <strong>espazio propioa</strong> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kalkulatu, eta <math display=\"inline\"><mi>A</mi></math> <strong>diagonalizagarria</strong> dela ondorioztatu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> sistema <strong>murriztuz</strong>, mendeko aldagaiak (<math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>) askeen (<math display=\"inline\"><mrow><mi>z</mi><mo>,</mo><mi>t</mi></mrow></math>) menpe geratzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz, <math display=\"inline\"><mrow><mi>z</mi><mo>,</mo><mi>t</mi></mrow></math> parametroekin:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizagarritasuna"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (multiplizitate geometrikoa <math display=\"inline\"><mo>=</mo></math> aljebraikoa). Ariketaren beste balio propiorako ere (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen denez, <strong>multiplizitate guztiak bat datoz</strong>: beraz"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <math display=\"inline\"><mi>A</mi></math> <strong>diagonalizagarria</strong> da: espazio propioen dimentsioen batura <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> da.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketak eta oharrak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Parametroa:</strong> jatorrizko orrian <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>t</mi></mrow></math> idazten da, baina sortzaileek (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math> eskatzen dute (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> eginez <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> lortzeko); <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math> da zuzena (SymPy-z egiaztatua). Aldaketa aipatua.",
        "<strong><math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizea:</strong> <math display=\"inline\"><mi>A</mi></math>-ren eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren zenbait sarrera aurreko orrietan zeinu-zalantzak dituzte (adib. <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> errenkada); barne-koherentea den irakurketak (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> errenkada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) manuskrituaren sortzaileak ematen ditu. Emaitza egonkorra (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>, diagonalizagarria) hartu da.",
        "<strong>Orri mistoa:</strong> eskuineko orrialdea (p.113) &quot;FÍSICA LANDETA&quot; da (fluidoak, presioa <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>ρ</mi><mi>g</mi><mi>h</mi></mrow></math>); zati hori <strong>fisikako atalera</strong> (05) doa, ez hona. Ikus <code>koadernoa_landeta1_alg_p112.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p128_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); aplikazio linealaren matrize elkartua (f: R^3 -> R^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Aplikazio linealaren matrizea: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math> adibidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal baten <strong>matrize elkartuaren</strong> eraikuntza, oinarri jakinekiko, eta adibide bat <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>-rekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize elkartua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazio linealaren matrizea <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>V</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></math>) da, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math> (helmuga) eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi></mrow></math> (irteera). Bere <strong>zutabeak</strong> irteera-oinarriaren irudien koordenatuak dira, helmuga-oinarrian. Orduan <math display=\"inline\"><mi>f</mi></math>-ren balioa <strong>matrizea bider bektorea</strong> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarriekin:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Oinarriaren irudiak:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>-n:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Matrizea</strong> (zutabeak = koordenatu horiek):"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>,</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0064</code>, 128-129 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: oinarriaren irudiak, <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>-ko koordenatuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>). Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p128.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p130_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); f(v) matrizearen bidez (adibide numerikoa)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> matrizearen bidez: adibide numerikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> adibidearen jarraipena. <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren irudia <strong>matrize elkartuaren bidez</strong> kalkulatzen da, eta <strong>zuzenean</strong> egiaztatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>v</mi></math>-ren koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math>-n"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebatziz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mn>4</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia matrizearen bidez"
    },
    {
     "mota": "testua",
     "html": "Koordenatu horiek <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-z biderkatuz, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koordenatuak lortzen dira <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>-n:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egiaztapen zuzena"
    },
    {
     "mota": "testua",
     "html": "Definizioz, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>3</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.   <math display=\"inline\"><mi>◼</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Bi bideek emaitza bera ematen dute: matrize elkartuaren bidezkoak eta definizio zuzenak."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0065</code>, 130-131 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mi>v</mi></math>-ren koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math>-n <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira, <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>4</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></msub></math>-n), eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (definizio zuzenarekin bat). Jatorrizko orriak koordenatu-zutabean <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn></mrow></math> idazten du bigarren osagaian (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn></mrow></math> nahasita); argituta. Zuzenketa handirik ez (emaitza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zuzena da). Ikus <code>koadernoa_landeta1_alg_p130.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p132_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); matrize baliokidea eta koordenatuak (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 1,
   "izenburua": "Jordanen forma kanonikoa: azpiespazio orokortuak eta Jordan-oinarria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p084ko endomorfismo <strong>ez-diagonalizagarriaren</strong> jarraipena (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">geo </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn></mrow></math>): Jordanen forma eraikitzen da <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren berreturen nukleoen katearen bidez."
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Azpiespazio propio orokortuen katea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">sarrera bakarra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>+</mo><mn>3</mn><mo>⋅</mo><mn>1</mn><mo>=</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Nukleoak: <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Katea: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊊</mo><msub><mi>E</mi><mn>1</mn></msub><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo>⊊</mo><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, dimentsioak <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>, jauziak <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math> (nilpotentzia-indizea <math display=\"inline\"><mn>3</mn></math>)."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Jordanen forma",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Jauziek egitura ematen dute: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn></mrow></math> <strong>Jordan-bloke</strong>, handiena tamaina <math display=\"inline\"><mn>3</mn></math> (indizea); beraz tamainak <math display=\"inline\"><mn>3</mn></math> eta <math display=\"inline\"><mn>1</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Jordanen oinarria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>∖</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math>-ko bektore bat hartuz (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, bakarra): <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Katea eraikiz: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Eta <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektore propioa (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-koa), <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></math>-tik independentea. Alderantzizko ordenan idatzita, <strong>Jordan-oinarria</strong>: <math display=\"block\"><mrow><msub><mi>B</mi><mi>J</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> (sarrera bakarra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math> (indizea <math display=\"inline\"><mn>3</mn></math>); nukleoen katea (dim <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>; jauziak <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math>); Jordanen matrizea <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; eta Jordan-oinarria (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msub><mi>E</mi><mn>3</mn></msub><mo>∖</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektore propioa). Jatorrizkoaren marrazkiak (blokeen eskema) eta ohar informalak (<math display=\"inline\"><mi>A</mi></math> VALE 3 = indizea) jasota daude. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p086.typ</code>"
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
   "id": "a33",
   "maila": 2,
   "izenburua": "Jordan-oinarriaren egiaztapena eta pasabide-matrizea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p086ko Jordan-oinarria egiaztatzen da: <math display=\"inline\"><mi>β</mi></math>-ko bektoreen irudiak <math display=\"inline\"><mi>β</mi></math>-ren konbinazio gisa idatziz, Jordanen matrizearen zutabeak zuzenean lortzen dira."
    },
    {
     "mota": "testua",
     "html": "Oinarria (Jordan-ordenan) <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mn>2</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Koefizienteak zutabeka jarriz, <strong>Jordanen matrizea</strong> berretsita:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Pasabide-matrizea.</strong> <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>P</mi><mi>A</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>J</mi><mi>P</mi></mrow></math> hitzarmenaz, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>-en zutabeak <math display=\"inline\"><mi>β</mi></math>-ko bektoreak dira: <math display=\"block\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Laburpena (nukleoen katea): <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>∈</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <strong>bi</strong> Jordan-bloke (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>), balio propioa <math display=\"inline\"><mn>2</mn></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lau irudien deskonposaketak egiaztatuak dira, eta <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> berresten dute (oinarria zuzena). <strong>Zuzenketak (mahairatuak):</strong> (i) jatorrizkoak <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> irudia «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» idazten du, baina zuzena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (hirugarren osagaia <math display=\"inline\"><mrow><mn>2</mn><mi>z</mi><mo>=</mo><mn>2</mn></mrow></math>, ez <math display=\"inline\"><mn>1</mn></math>; kopia-lapsusa, deskonposaketa zuzena da). (ii) «3 BLOQUES DE JORDAN» oharra okerra da: <strong>bi</strong> bloke daude (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mi>J</mi></math> matrizeak berak erakusten duen bezala; hirurak nukleoen katea dira, ez blokeak. (iii) Taulako <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub></math> «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» irakurtzen da, baina p086-87koa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Ikus <code>koadernoa_landeta2_alg_p088.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Polinomio karakteristikoak: erro konplexuak eta erro hirukoitza",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi adibide: matrize baten polinomio karakteristikoak <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n erro errealik ez duenean, eta beste batek erro hirukoitza duenean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. adibidea: erro konplexuak, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math> <strong>blokeka goi-triangeluarra</strong> da (behe-ezkerreko blokea nulua); beraz determinantea bi <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokeen biderkadura da: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> eginez, <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>t</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <strong>erro errealik ez</strong>."
    },
    {
     "mota": "abisua",
     "titulua": "C-n bakarrik zatitzen da",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>-k <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n ez du faktore linealik; beraz <math display=\"inline\"><mi>f</mi></math> <strong>ez da diagonalizagarria ez triangeluarizagarria <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n</strong> (bakarrik <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>-n zatitzen da)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "2. adibidea: erro hirukoitza, <math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>7</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><msub><mi>I</mi><mn>4</mn></msub><mo>−</mo><mi>A</mi></mrow></math>-ren bigarren zutabeak sarrera bakarra du (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>−</mo><mn>3</mn></mrow></math>); hortik garatuz eta zutabe-/errenkada-eragiketaz <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> minoreetara jaitsiz: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Balio propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>3</mn></mrow></math>). <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (0 balio propioaren azpiespazioa nukleoa da; kalkulua hurrengo orrialdean)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "1. adibidea zuzena da: blokeka <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>, erro errealik gabe (bakarrik <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>-n). 2. adibidean: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. <strong>Zuzenketak (mahairatuak):</strong> (i) <math display=\"inline\"><mi>A</mi></math>-ren <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sarrera hemen «<math display=\"inline\"><mn>3</mn></math>» irakur daiteke, baina hurrengo orrialdeak (<math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math> idatzita) <math display=\"inline\"><mn>5</mn></math> dela behartzen du (traza <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>9</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>-rekin koherentea); <math display=\"inline\"><mn>5</mn></math> hartu da. (ii) tarteko lerroan «<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mn>3</mn></mrow></math>» idazten du, baina <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math> lortzeko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> behar da (minorean <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mn>5</mn></mrow></math> ageri da); emaitza zuzena da, lapsusa tarteko lerroan. <strong>Konfiantza ertaina</strong>: <math display=\"inline\"><mi>A</mi></math>-ren sarrera batzuk ez dira ziurtasunez irakurtzen. Ikus <code>koadernoa_landeta2_alg_p094.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Azpiespazio propioak eta orokortuak; Jordan-oinarriaren hasiera (<math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p094ko <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math> endomorfismoaren azterketaren jarraipena."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azpiespazio propioak"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> ebatziz (4.tik <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>5</mn><mi>t</mi></mrow></math>, 3.tik <math display=\"inline\"><mrow><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mi>t</mi><mo>⇒</mo><mn>25</mn><mi>t</mi><mo>=</mo><mn>7</mn><mi>t</mi><mo>⇒</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>; 2.tik <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>3</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> ebatziz (2.tik <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>t</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>, 4.tik <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>, ordezkatuz <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>≠</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, beraz <strong><math display=\"inline\"><mi>f</mi></math> EZ da diagonalizagarria</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azpiespazio orokortua <math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>3</mn><mtext mathvariant=\"normal\">id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>. Karratua: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>27</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Ekuazio bakarra <math display=\"inline\"><mrow><mn>18</mn><mi>x</mi><mo>+</mo><mn>9</mn><mi>z</mi><mo>−</mo><mn>27</mn><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>.</mi></mrow></math> Katea <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math>-n gelditzen da (dimentsioa <math display=\"inline\"><mrow><mo>=</mo><msub><mi>m</mi><mtext mathvariant=\"normal\">alg</mtext></msub></mrow></math> da jada)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-oinarriaren lehen bektoreak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko bektore bat: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Katea: <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>⋅</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> col</mtext></mrow><mn>3</mn></msub><mo>+</mo><mn>1</mn><mo>⋅</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> col</mtext></mrow><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "★ Orrialde honek p094ko zalantza argitzen du: <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math> esplizituaren azken errenkada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>44</mn></msub><mo>=</mo><mn>5</mn></mrow></math> (traza <math display=\"inline\"><mrow><mi>−</mi><mn>4</mn><mo>+</mo><mn>3</mn><mo>+</mo><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>9</mn></mrow></math>, <math display=\"inline\"><msup><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></math>-ren erroen baturarekin bat). Dena egiaztatua: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>≠</mo><mn>3</mn></mrow></math> → ez diagonalizagarria), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> (lau errenkadak berretsiak), <math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></math>), eta Jordan-lehen bektoreak (<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Jatorrizkoaren lapsus batzuk («Ker f = L₁(3)», matrizea «A» = <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mn>3</mn><mi>I</mi></mrow></math>) jaso dira. Ikus <code>koadernoa_landeta2_alg_p096.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Jordanen forma osatzea eta aplikazio lineal baten matrizea bi oinarritan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "p096ko Jordan-ariketaren amaiera: bloke-kopurua eta tamainak dimentsio-jauzietatik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bloke-kopurua eta tamainak"
    },
    {
     "mota": "testua",
     "html": "Dimentsioak: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>. Jauziak: <math display=\"block\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>2</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mo>−</mo><mn>0</mn><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math> Tamaina <math display=\"inline\"><mrow><mo>≥</mo><mn>2</mn></mrow></math>-ko blokeak: <math display=\"inline\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>-ren bloke <strong>guztiak</strong>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>-rako <strong>bloke bat <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> eta bat <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math></strong>. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-rako (<math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">alg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) bloke bat <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri osoa eta Jordanen matrizea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>J</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> non <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> blokea, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>), eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (<math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> blokea, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>). Jordanen matrizea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aplikazio lineal baten matrizea bi oinarritan"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matrize elkartua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>E</mi><mo>→</mo><mi>F</mi></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>β</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarriak izanik, <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <strong>zutabeak</strong> <math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math>-ko bektoreen irudien koordenatuak dira <math display=\"inline\"><msub><mi>β</mi><mn>2</mn></msub></math>-n: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mi>i</mi><mo>′</mo></msup></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: bloke-kopurua (jauziak <math display=\"inline\"><mrow><msub><mi>d</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn></mrow></math> → <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>-rako <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> bat + <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> bat; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-rako <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> bat), Jordanen matrizea <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">diag</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, eta matrize elkartuaren definizioa. <strong>Zuzenketa (mahairatua):</strong> jatorrizkoak lehen bektorea «<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» idazten du, baina p096-97ko kalkuluak <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ematen du (lehen osagaiaren zeinu-lapsusa; egiturari ez dio eragiten, <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></math> <math display=\"inline\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></math>-etik datorrelako). «<math display=\"inline\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» = <math display=\"inline\"><mrow><msub><mi>L</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta beste azpiindize-lapsus batzuk jasota daude. Ikus <code>koadernoa_landeta2_alg_p098.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 1,
   "izenburua": "Baliokidetasun-forma kanonikoa eragiketa elementalez (<math display=\"inline\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazioaren matrizea baliokidetasun-forma kanonikora (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>) eramaten da eragiketa elementalez, pasabide-matrizeak gordez."
    },
    {
     "mota": "testua",
     "html": "Emandako oinarrietan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Errangoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minore bat garatuz (lehen errenkadatik): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>−</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Beraz <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">errango</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> (ez <math display=\"inline\"><mn>3</mn></math>), eta baliokidetasun-forma kanonikoa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da."
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Metodoa: matrize zabaldua <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>4</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>I</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>I</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrize zabalduan, <strong>errenkada-eragiketak</strong> eta <strong>zutabe-eragiketak</strong> aldi berean aplikatzen dira: errenkadenak ezkerreko blokean metatzen dira (<math display=\"inline\"><mrow><mo>→</mo><mi>Q</mi></mrow></math>), zutabeenak eskuinekoan (<math display=\"inline\"><mrow><mo>→</mo><mi>P</mi></mrow></math>), <math display=\"inline\"><mi>A</mi></math> forma kanonikora iritsi arte. Amaieran:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aplikatutako eragiketa-sekuentzia (jatorrizkoan argi idatzia): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>F</mi><mn>4</mn></msub><mo>→</mo><msub><mi>F</mi><mn>4</mn></msub><mo>+</mo><msub><mi>F</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>F</mi><mn>1</mn></msub><mo>→</mo><msub><mi>F</mi><mn>1</mn></msub><mo>−</mo><msub><mi>F</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>→</mo><msub><mi>C</mi><mn>2</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>3</mn></msub><mo>→</mo><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>F</mi><mn>3</mn></msub><mo>→</mo><msub><mi>F</mi><mn>3</mn></msub><mo>+</mo><mn>2</mn><msub><mi>F</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>→</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>→</mo><mi>−</mi><msub><mi>C</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Konfiantza ertaina:</strong> orrialde oso trinkoa da; matrize zabalduen sarrera zenbakizko <strong>asko ez dira ziurtasunez irakurtzen</strong> (bereziki eskuineko blokea, zutabe-eragiketak metatzen dituena, <math display=\"inline\"><mrow><mo>→</mo><mi>P</mi></mrow></math>). Egiaztatua eta fidagarria dena: <math display=\"inline\"><mi>A</mi></math>-ren errangoa <math display=\"inline\"><mn>2</mn></math> da (minorearen determinantea <math display=\"inline\"><mn>0</mn></math>; jatorrizkoaren «<math display=\"inline\"><mrow><mn>5</mn><mo>−</mo><mn>4</mn><mo>+</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math>» katea gaizki irakurria dago baina emaitza <math display=\"inline\"><mn>0</mn></math> zuzena da), baliokidetasun-forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> da, metodoa estandarra da (<math display=\"inline\"><mrow><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo></mrow></math> forma kanonikoa), eta eragiketa-sekuentzia koherentea da (urrats bakoitzak espero den zeroa sortzen du, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> biderkadurez amaituz). <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> matrizeen azken balioak ezin dira zenbakiz egiaztatu; ez dira asmatu. Ikus <code>koadernoa_landeta2_alg_p102.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Matrize baliokideak, polinomio-espazioa eta aurreirudi hutsa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru gai: matrize elkartuen erlazioa oinarri-bikote desberdinetan, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> polinomio-espazioa, eta irudian ez dauden bektoreak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize baliokideak (lau oinarri)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>-ren matrizea bi oinarri-bikotetan, <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>→</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></mrow></math>) eta <math display=\"inline\"><mi>B</mi></math> (<math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>→</mo><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></mrow></math>). Beste matrize batekin (<math display=\"inline\"><mi>C</mi></math>) lotuz, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>B</mi><mi>P</mi><mo>=</mo><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup></mrow></math>; hortik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> = <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup></math>-ren koordenatuak <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></math>-ren arabera, eta <math display=\"inline\"><mrow><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup></mrow></math> = <math display=\"inline\"><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub></math>-ren koordenatuak <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math>-ren arabera (pasabide-matrize guztiak alderangarriak dira)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio-espazioa <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>a</mi><mn>3</mn></msub><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><msup><mi>x</mi><mn>4</mn></msup><mo>:</mo><msub><mi>a</mi><mi>i</mi></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oinarri kanonikoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>5</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-ren koordenatuak oinarri kanonikoan (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><msup><mi>x</mi><mn>4</mn></msup></mrow></math> errenkadak) matrize batean biltzen dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia eta aurreirudi hutsa: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℚ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℚ</mi><mn>3</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>M</mi><msub><mi>β</mi><mi>c</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Zutabeak dira irudiaren sortzaileak: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mi>f</mi></math> <strong>ez da gainratzailea</strong>: aurreirudirik gabeko bektoreak daude. Adibidez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: independentea da <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-tik, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>⋅</mo><mn>1</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <strong>Baldintza orokorra:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> baldin eta soilik baldin <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: matrize baliokideen erlazioa (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>Q</mi><mo>′</mo></msup><mi>A</mi><msup><mi>P</mi><mo>′</mo></msup><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, pasabide-matrizeen glosa zuzena), <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>5</mn></mrow></math>), eta irudia/aurreirudi hutsa (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, determinantea <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mo>≠</mo><mn>0</mn></mrow></math> → <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∉</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>∅</mi></mrow></math>; baldintza orokorra determinante-baldintza gisa). <math display=\"inline\"><mi>T</mi></math>-k <strong>sei</strong> elementu ditu baina jatorrizkoaren koordenatu-matrizeak bost zutabe: zutabe bat falta da edo azkena moztuta dago (irakurketa-zalantza); ez da osatu. Ikus <code>koadernoa_landeta2_alg_p104.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Matrize baliokidea eta koordenatuak: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal baten matrizea eta haren <strong>matrize baliokidea</strong> (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo>;</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> forma), eta puntu baten koordenatuak irteera-oinarrian."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize baliokidea eta errangoa"
    },
    {
     "mota": "testua",
     "html": "Endomorfismo (edo aplikazio) baten matrizeari <strong>infinitu matrize baliokide</strong> dagozkio: oinarriak aldatuz batetik bestera pasatzen da. Adibidez, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>-ren matrizea"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mn>1</mn><mi>.</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> errenkadak berdinak dira; <math display=\"inline\"><mn>3</mn></math> ordenako minore ez-nulu bat dagoenez, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>.) Errangoa <math display=\"inline\"><mn>3</mn></math> denez, haren <strong>forma kanoniko baliokidea</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatuak <math display=\"inline\"><msub><mi>β</mi><mn>3</mn></msub></math> oinarrian"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>β</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebatziz (SymPy-z egiaztatua):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mi>y</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koordenatu horiek <math display=\"inline\"><mi>f</mi></math>-ren matrizeaz biderkatuz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren <strong>irudia</strong> lortzen da helmuga-oinarrian."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0066</code>, 132-133 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math> (errenkada errepikatuarekin) eta koordenatuak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mi>y</mi></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mn>2</mn></mfrac></mrow></math> (<math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><mi>δ</mi></math> jatorrizkoarekin bat datoz; <math display=\"inline\"><mi>λ</mi></math>-ren zirriborroa argituta). Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p132.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p134_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); irudia, nukleoa eta rango-teorema (zuzenketa: ez surjektiboa)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: irudia, nukleoa eta rango-teorema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazioaren <strong>irudia</strong> eta <strong>nukleoa</strong>, eta <strong>rango-teorema</strong> aplikatuz <math display=\"inline\"><mi>f</mi></math> injektiboa (baina <strong>ez</strong> surjektiboa) dela ondorioztatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> matrizearen <strong>zutabeek sortzen dute</strong> (helmuga-oinarrian), eta haren dimentsioa matrizearen errangoa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nukleoa (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>) eta rango-teorema"
    },
    {
     "mota": "testua",
     "html": "<strong>Rango-nulitatearen teorema</strong> (dimentsioen teorema):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hortik <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Injektiboa, baina ez surjektiboa (zuzenketa)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Injektiboa:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> denez, <math display=\"inline\"><mi>f</mi></math> <strong>injektiboa</strong> da.",
      "<strong>Ez surjektiboa:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>, beraz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>⊊</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: <math display=\"inline\"><mi>f</mi></math> <strong>ez da surjektiboa</strong>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (surjektibitatea)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orrian &quot;<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> (surjektiboa)&quot; idazten da, baina hori <strong>ezinezkoa</strong> da: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazio batek <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math> du beti, beraz <strong>inoiz ez da surjektiboa</strong> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ra. Hemen <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren azpiespazio propioa da. SymPy-z egiaztatua (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>). Aldakuntza aipatua."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0067</code>, 134-135 orriak; &quot;ÁLGEBRA LANDETA&quot;). Orri <strong>oso trinkoa</strong> da (irakurketa-zalantza ugari matrize-biderketan); ondorioak SymPy-z egiaztatuta daude: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math> (rango-teorema <math display=\"inline\"><mrow><mn>3</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>3</mn></mrow></math>), <math display=\"inline\"><mi>f</mi></math> <strong>injektiboa</strong> baina <strong>ez surjektiboa</strong>. &quot;Sobreyectiva&quot; zuzenketa aipatua. Ikus <code>koadernoa_landeta1_alg_p134.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p174_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); oinarri berria eta independentzia lineala minore baten bidez (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: oinarri berria eta independentzia lineala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazioaren jarraipena. Irteera-espazioan <strong>oinarri berri</strong> bat hartu, haren irudiak kalkulatu, eta irudi horiek <strong>linealki independenteak</strong> direla frogatu, matrize baten <strong>minore</strong> ez-nulu baten bidez."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarri berria eta bere irudiak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> hartuz, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>14</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Linealtasunez, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>δ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Independentzia lineala minore baten bidez"
    },
    {
     "mota": "testua",
     "html": "Irudiak <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> matrize baten <strong>errenkadatzat</strong> jarrita, errangoa gehienez <math display=\"inline\"><mn>3</mn></math> da. <math display=\"inline\"><mrow><mn>2</mn><mi>.</mi></mrow></math>, <math display=\"inline\"><mrow><mn>3</mn><mi>.</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>4</mn><mi>.</mi></mrow></math> zutabeek osatzen duten <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minorea ez-nulua bada, errangoa <math display=\"inline\"><mn>3</mn></math> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>10</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>28</mn><mo>+</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>60</mn><mo>−</mo><mn>22</mn><mo>=</mo><mn>38</mn><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <strong>linealki independenteak</strong> dira."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Hiru irudiak <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-n independenteak direnez, laugarren bektore egoki batekin (adib. <math display=\"inline\"><mrow><msub><mi>e</mi><mn>4</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren <strong>oinarri</strong> bat osatzen dute: <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>.\n  Oinarri horretan, <math display=\"inline\"><mi>f</mi></math>-ren matrize <strong>murriztua</strong> <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0088</code>, 174-175 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minorearen determinantea <math display=\"inline\"><mrow><mo>=</mo><mn>38</mn><mo>≠</mo><mn>0</mn></mrow></math>, beraz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">rk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3</mn></mrow></math> eta hiru irudiak independenteak dira. Jatorrizko orriak behin <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idazten du (hirugarren osagaian zeinu-akatsa); gainerako guztian <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiltzen da (determinantearekin bat datorrena), eta hori hartu da. Ikus <code>koadernoa_landeta1_alg_p174.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p176_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); matrize baliokideak C=QAP eta koordenatuak (zuzenketa: mu, delta formulak)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Matrize baliokideak: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math> eta oinarri-aldaketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi matrize <strong>baliokide</strong> izateko (<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>C</mi></math>), oinarri-aldaketako matrizeak behar dira. Metodoak <math display=\"inline\"><mi>A</mi></math>-tik <math display=\"inline\"><mi>C</mi></math> forma murriztura (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> erakora) pasatzeko <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> matrizeak eraikitzen ditu, eta oinarri berrian koordenatuak kalkulatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Baliokidetasuna eta pasabide-matrizeak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>C</mi></math> <strong>baliokideak</strong> dira baldin eta <math display=\"inline\"><mi>P</mi></math> (domeinuko oinarri-aldaketa) eta <math display=\"inline\"><mi>Q</mi></math> (helmugako oinarri-aldaketa) existitzen badira, non"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hortik </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>C</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Kontuz: alderantzizko biderketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Matrizeak <strong>alderantziz</strong> biderkatzen dira oinarri-aldaketetan: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>-n, <math display=\"inline\"><mi>P</mi></math> eskuinean (domeinua) eta <math display=\"inline\"><mi>Q</mi></math> ezkerrean (helmuga) doaz. <math display=\"inline\"><mi>A</mi></math> berreskuratzeko, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>C</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemen <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>′</mo></msubsup><mo>,</mo><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub></mrow></msub></mrow></math> eta <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>,</mo><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></mrow></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Koordenatuak <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math> oinarrian"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>10</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>14</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> izanik, edozein <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren koordenatuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebazten dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>μ</mi><mo>−</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>10</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>14</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mn>3</mn><mi>δ</mi><mo>+</mo><mi>ε</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>λ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>=</mo><mfrac><mrow><mn>30</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi></mrow><mn>22</mn></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>δ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>10</mn><mi>x</mi><mo>−</mo><mn>9</mn><mi>y</mi><mo>+</mo><mi>z</mi></mrow><mn>11</mn></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>19</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>t</mi></mrow><mrow><mn>11</mn><mi>.</mi></mrow></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(SymPy-z egiaztatua; <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>22</mn><mo>≠</mo><mn>0</mn></mrow></math>, beraz oinarria da.)"
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (koordenatuen formulak)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orrian <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>19</mn><mi>x</mi><mo>+</mo><mn>16</mn><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>11</mn><mi>t</mi></mrow><mn>11</mn></mfrac></mrow></math> <strong>zuzen</strong> daude, baina <math display=\"inline\"><mi>μ</mi></math> eta <math display=\"inline\"><mi>δ</mi></math>-ren formula <strong>encoadratuek akatsak</strong> dituzte: <math display=\"inline\"><mi>μ</mi></math>-n <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>z</mi></mrow></math> idazten da <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>z</mi></mrow></math> beharrean, eta <math display=\"inline\"><mi>δ</mi></math>-n <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math> idazten da <math display=\"inline\"><mrow><mi>−</mi><mn>9</mn><mi>y</mi></mrow></math> beharrean (bitarteko ordezkapenetako aritmetika-akatsak). SymPy-z zuzenduak. Bitxikeria: hurrengo orriko koordenatu-taulan (<code>p178</code>) balio <strong>zuzenak</strong> agertzen dira gehienetan, formula okerrak gorabehera. Aldakuntzak aipatuak. Ikus <code>koadernoa_landeta1_alg_p176.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p178_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Q matrizearen eraikuntza eta baliokidetasuna (zuzenketa: laugarren zutabea)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>Q</mi></math> matrizearen eraikuntza eta baliokidetasuna: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko metodoaren amaiera: <math display=\"inline\"><mi>Q</mi></math> pasabide-matrizea <strong>zutabez zutabe</strong> eraikitzen da, koordenatuen formulak erabiliz, eta <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> baliokidetasuna egiaztatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>Q</mi></math>-ren zutabeak: koordenatuak <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math>-n"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>Q</mi></math>-ren zutabe bakoitza <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko bektore baten koordenatuak dira <math display=\"inline\"><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup></math> oinarrian (aurreko orriko formulez kalkulatuak). SymPy-z egiaztatuak:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mfrac><mn>15</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>10</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>19</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>7</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>2</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>6</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>22</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>8</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Baliokidetasuna"
    },
    {
     "mota": "testua",
     "html": "Zutabe horiekin <math display=\"inline\"><mi>Q</mi></math> osatuta, eta <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>I</mi></mrow></math> izanik (domeinuko oinarria kanonikoa), biderkadura"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Hau da matrize baliokideen <strong>funtsa</strong>: errango <math display=\"inline\"><mi>r</mi></math> duen edozein matrize <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> formaren\n  baliokidea da. Hemen <math display=\"inline\"><mrow><msubsup><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>′</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> aukeratzeak <math display=\"inline\"><mi>f</mi></math>-ren matrizea\n  zuzenean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> bihurtzen du: irudi-oinarria helmuga-oinarriaren zati bihurtzen delako.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (laugarren zutabea)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orrian lehen hiru koordenatu-zutabeak <strong>zuzenak</strong> dira (SymPy-z bat datoz), baina laugarrena, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rena, gaizki dago: orrian <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>6</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>4</mn><mn>11</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> idazten da, baina balio zuzena <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>22</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>11</mn></mfrac><mo>,</mo><mfrac><mn>8</mn><mn>11</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da. Azpiko <math display=\"inline\"><mi>A</mi></math> matrizea ere orriz orri aldatzen denez (aritmetika-lerradurak), zutabe zehatzak baino, <strong>metodoa</strong> eta emaitza nagusia (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>3</mn></msub><mo>;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> baliokidetasuna) nabarmentzen dira hemen. Aldakuntza aipatua. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta1_alg_p178.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p180_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Jordanen forma kanonikoa I: endomorfismoa, chi=(x-1)^3(x-2), diagonalizaezintasuna",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>: <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nukleoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sistema homogeneotik (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> aske izanik:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><mi>−</mi><msub><mi>a</mi><mn>4</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(bi sortzaileak linealki independenteak)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsioaren teorema"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> ez da <strong>surjektiboa</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren azpiespazio hertsia da), ez <strong>injektiboa</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Irudia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math>-k eta <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>-k balio erreal <strong>edozein</strong> har dezakete (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub></mrow></math> (edo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub></mrow></math>) independenteki alda daitezke), beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mi>α</mi><mo>,</mo><mi>β</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⊊</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dimentsioaren teoreman jatorrizkoak &quot;<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>&quot; idazten du (desberdintza), baina hori teorema estandarraren <strong>okerra</strong> da: berdintza da beti (&quot;heina-nulitatearen teorema&quot;), <math display=\"inline\"><mrow><mn>4</mn><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn></mrow></math> aritmetikak berak erakusten duen bezala; hemen berdintza gisa zuzendua. Diagrama grafikoa (Ker/Im, gorriz &quot;CUIDADO! AUNQUE TIENE LAS MISMAS DIMENSIONES...&quot;) ez da hemen berregin."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p190_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Matrize baliokideak; heina eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize baliokideak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>-ren matrize elkartua, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>;</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> forma kanonikoraino murriztuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msup><mi>B</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> aplikazio lineal berarentzat, oinarriak aldatuz matrize elkartu <strong>infinitu</strong> lortzen dira; guztiak <strong>baliokideak</strong> dira (heina bera dute):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>≔</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bi matrize baliokidek dituzten baldintza nagusia <strong>heina bera</strong> izatea da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Heina minore osagarriz"
    },
    {
     "mota": "testua",
     "html": "Hiru <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> minore (<math display=\"inline\"><mn>4</mn></math> errenkadetatik hirunaka hartuz) deuseztatzen dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(guztiak <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> menpekoak baitira: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> minore bat, ordea, ez da nulua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-ren dimentsioa"
    },
    {
     "mota": "testua",
     "html": "Dimentsioaren teoremaz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Matrizea forma kanonikora murriztuz, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> lortzen da, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>-rekin bat."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>f</mi></math>-ren formula esplizitua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>−</mo><mn>6</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(matrize elkartua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></msup></mrow></math>-ri aplikatuz zuzenean egiaztatua)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hiru determinante <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> minorea guztiak egiaztatuak daude. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-ren dimentsioaren zuzeneko arrazoibidea (&quot;DADO QUE M{0̄} HAY TANTO FILAS COMO...&quot;) jatorrizkoan oso sintaxi zailekoa da; hemen dimentsioaren teorema zuzenean erabili da (ondorio numerikoa bat dator)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p192_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math> osoa; matrize elkartua bi oinarri arbitrariotan",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-ren kalkulua"
    },
    {
     "mota": "testua",
     "html": "Aurreko orrialdeko <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>-ren sistema homogeneotik (<math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mn>2</mn><mi>z</mi><mo>−</mo><mn>3</mn><mi>z</mi><mo>=</mo><mi>−</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(egiaztatua: <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jatorrizko lau ekuazioak betetzen ditu)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi oinarri arbitraioren arteko matrize elkartua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup><mo>,</mo><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> oinarriak emanik, matrize elkartuaren zutabeak <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koordenatuak dira <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>λ</mi><mn>11</mn></msub><msubsup><mi>v</mi><mn>1</mn><mo>′</mo></msubsup><mo>+</mo><msub><mi>λ</mi><mn>21</mn></msub><msubsup><mi>v</mi><mn>2</mn><mo>′</mo></msubsup><mo>+</mo><msub><mi>λ</mi><mn>31</mn></msub><msubsup><mi>v</mi><mn>3</mn><mo>′</mo></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> etab. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>1) <math display=\"inline\"><mi>β</mi></math> aplikazioan zehar.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>2) Irudiak <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n adierazi.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>μ</mi><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>δ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>γ</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>μ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>γ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>β</mi></math>-ren bigarren bektorea jatorrizkoan &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; gisa agertzen da, baina ondorengo kalkuluak (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) berretsi du benetako bektorea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela; hemen zuzendua. Gainerako kalkulu guztiak (bi sistema <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>-koak) egiaztatuak daude. &quot;VERTICAL!! (COMO CASI SIEMPRE)&quot; oharra matrizearen zutabetan idazteari buruzkoa da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p194_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Oinarria <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-rekin osatzea; diagrama konmutatiboa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oinarria osatzea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren azpi bat) osatzen da beste bi bektorerekin, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarri bat lortzeko:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Irudiak, aurreko orrialdeko <math display=\"inline\"><mi>f</mi></math>-ren formula erabiliz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(hirurak egiaztatuak; azkena, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-koa denez, zero ematen du, espero bezala). Irudien bidez <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri bat osatzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>β</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagrama konmutatiboa: <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> oinarri-aldaketa matrizeak (alderanzgarriak) izanik, <math display=\"inline\"><mi>A</mi></math> (oinarri kanonikoetan) eta <math display=\"inline\"><mi>B</mi></math> (oinarri berrietan) lotzen dituzte:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>B</mi><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — konfiantza baxua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ker f-tik oinarria eraikitzeko urratsa eta irudien kalkulua guztiz egiaztatuak daude. Eskuineko orrialdeko <math display=\"inline\"><mi>P</mi></math> matrizea, matrize <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> frakziodun bat, eta <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math>-ren sistema finala oso irakurketa zailekoak dira jatorrizkoan (zenbaki oso txikiak); ez dira hemen zenbaki gisa erreproduzitu, kontzeptu nagusia (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math> diagrama konmutatiboa, aljebra linealaren emaitza estandarra) baino. <math display=\"inline\"><mi>β</mi></math>-ren bigarren bektorea (&quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; vs &quot;<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;) irakurketa-desberdintasun bat du orrialdearen bi zatien artean."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_leo_p196_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math>: faktorizazio osoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema itxiz (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>), faktorizazio osoa lortzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mo>⋅</mo><mi>A</mi><mo>⋅</mo><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma kanoniko alternatiboak"
    },
    {
     "mota": "testua",
     "html": "Beste bi aukera daude, oinarrien ordena aldatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><msubsup><mi>β</mi><mtext mathvariant=\"normal\">jatorrizkoa</mtext><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><msub><mi>β</mi><mtext mathvariant=\"normal\">jatorrizkoa</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egiaztapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>⋅</mo><msub><mi>v</mi><mn>4</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(tribiala, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bera oinarri berriaren hirugarren bektorea baita)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — konfiantza ertaina",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math>-ren sistema finala eta <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>Q</mi><mi>A</mi><mi>P</mi></mrow></math> osoaren garapena oso irakurketa zailekoak dira jatorrizkoan; balio finalak (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>) jaso dira, baina tarteko pausoak (batez ere &quot;<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mi>λ</mi></mrow></math>&quot; adierazpena) ez dira osoki koherenteak transkripzio literalean. <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>P</mi></math> matrizeak p190-194ko emaitzekin bat datoz. Ariketa hau (Ker <math display=\"inline\"><mi>f</mi></math>-tik hasita B=QAP faktorizazio osoraino) hemen ixten da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_chusa_p119_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Nukleoa eta irudia; ongi definitutako aplikazioa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(13) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> (<math display=\"inline\"><mi>n</mi></math> bakoitia denean)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>V</mi></math> dimentsio finituko espazio bektoriala, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi></mrow></math> <strong>bakoitia</strong>, eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> aplikazio lineala. Frogatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demagun, absurdura eramateko, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>. Orduan haien dimentsioak berdinak dira: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>. Heina-nulitatearen teoremaz: <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo></mrow></math> hau da, <math display=\"inline\"><mi>n</mi></math> <strong>bikoitia</strong> da. Baina <math display=\"inline\"><mi>n</mi></math> bakoitia dela suposatu dugu: kontraesana. Beraz <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta bereziki <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(14) <math display=\"inline\"><mi>f</mi></math> ongi definitua <math display=\"inline\"><mi>W</mi></math> azpiespazioan"
    },
    {
     "mota": "problema",
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
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak margen gorrian &quot;LA SUMA DE DOS NÚMEROS IGUALES NUNCA ES PAR&quot; idazten du; hori <strong>okerra</strong> da (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math> beti bikoitia da), eta egilearen beraren &quot;PAR&quot; ohar beltzak (<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi></mrow></math>-ren azpian) kontraesaten du. Frogapenaren muina zuzena da. Aplikazioaren diagraman, <math display=\"inline\"><mi>x</mi></math>-etik bi irteera dituen gezian gorriz &quot;X&quot; bat dago: aplikazio batek ezin dio elementu berari bi irudi eman. Erdiko kurbak eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> zirkunferentziak (&quot;MAL&quot; markatuak) zuzen bertikal bat behin baino gehiagotan ebakitzen dute, beraz ez dira <math display=\"inline\"><mi>x</mi></math>-en funtzioen grafikoak. &quot;<math display=\"inline\"><mrow><mi>n</mi><mo>:</mo><mi>n</mi></mrow></math> impar&quot; eta &quot;DEMOSTRADO&quot; ondorengo ikur gorria (<math display=\"inline\"><mi>!</mi></math>?) irakurketa zalantzazkoak dira."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p002_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Linealtasuna eta matrize elkartua oinarri batean",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealtasunaren irizpidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> lineala izateko, honako hau bete behar da <math display=\"inline\"><mrow><mi>v</mi><mo>,</mo><msup><mi>v</mi><mo>′</mo></msup><mo>∈</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi></mrow></math> guztietarako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo>+</mo><mi>μ</mi><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bereziki, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> izan behar da. Heuristikoki, aplikazioa <strong>ez da lineala</strong> koordenatuetan gai konstante bat (<math display=\"inline\"><mrow><mi>+</mi><mi>K</mi></mrow></math>) edo biderkadura/ karratu bat (<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>) badu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>W</mi></math> azpiespazioa eta haren oinarria"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sortzaileak independenteak dira (lehen bi koordenatuen determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math>), beraz <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∈</mo><mi mathvariant=\"double-struck\">𝕂</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>. Proposatzen den oinarria <math display=\"inline\"><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> ere baliozkoa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>9</mn><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) <math display=\"inline\"><mi>f</mi></math>-ren matrize elkartua <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> oinarrian"
    },
    {
     "mota": "testua",
     "html": "Oinarriko bektoreen irudiak, <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>-ren koordenatuetan adierazita:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><msub><mi>w</mi><mn>1</mn></msub><mo>−</mo><mn>4</mn><msub><mi>w</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Koordenatuak zutabetan jarriz, matrize elkartua <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>-koa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizkoak &quot;LA MATRIZ SERÁ DE <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>&quot; idazten du, arrazoituz bektoreek lau koordenatu dituztela; hori <strong>okerra</strong> da: <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazioaren matrizea <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math> oinarrian (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn></mrow></math>) <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>-koa da, ez <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>-koa. Halaber, ondorengo &quot;<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>&quot; etiketa ez dator bat marraztutako <math display=\"inline\"><mrow><mi>W</mi><mo>→</mo><mi>W</mi></mrow></math> aplikazioarekin. <math display=\"inline\"><mi>f</mi></math>-ren formula ez da irudi honetan agertzen; matrizea bi ebaluazio ikusgaietatik eratorri da. Margen gorriko oharra (&quot;si no puedo pasar el vector <math display=\"inline\"><mn>0</mn></math> no es espacio vectorial&quot;) ziurrenik <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> irizpideari egiten dio erreferentzia; hala ere, <math display=\"inline\"><mi>f</mi></math> ez-lineala izateak ez du esan nahi <math display=\"inline\"><mi>W</mi></math> espazio bektoriala izateari uzten dionik."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p004_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Koordenatuak oinarri kanonikoan; heina eta forma baliokidea",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> oinarri kanonikoan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>w</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren koordenatuak <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren oinarri kanonikoan, <math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math> sistemak ebatziz. <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> direla:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>6</mn><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>3</mn><mo>=</mo><mn>3</mn><mi>μ</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>λ</mi><mo>=</mo><mn>3</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>12</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><msub><mi>w</mi><mn>1</mn></msub><mo>+</mo><mi>μ</mi><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>6</mn><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>6</mn><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mn>12</mn><mo>=</mo><mn>3</mn><mi>μ</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mi>−</mi><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>λ</mi><mo>=</mo><mn>10</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Bi kasuetan <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>. Koordenatuak (<math display=\"inline\"><mrow><mi>λ</mi><mo>,</mo><mi>μ</mi><mo>,</mo><mi>δ</mi><mo>,</mo><mi>ε</mi></mrow></math>) zutabetan jarriz, matrizea oinarri kanonikoan:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Bat dator aurreko orrialdean <math display=\"inline\"><msub><mi>β</mi><mi>W</mi></msub></math>-rekiko lortutako <math display=\"inline\"><mrow><msub><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>β</mi><mi>W</mi></msub><mo>,</mo><msub><mi>β</mi><mi>W</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> balioarekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(15) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>: heina eta forma baliokidea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazioaren matrizea oinarri kanonikoetan <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></math>-koa da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Heina gehienez <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math> da, hau da, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>; heina <math display=\"inline\"><mn>3</mn></math> bada, <math display=\"inline\"><mi>f</mi></math> injektiboa da (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-n azpiespazio bat ere aipatzen da, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (sistema sortzailea)."
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
       "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: aplikazio linealaren irudiaren dimentsioa hura adierazten duen edozein matrizeren heinaren berdina da. Gainera, <math display=\"inline\"><mi>r</mi></math> heineko matrize orok tankera honetako matrize baliokide bat du: <img class=\"formula formula-d\" src=\"media/formulak/8f825691451b9cbf.svg\" alt=\"mat(augment: #(hline: 1, vline: 1), I_r, 0; 0, 0).\" style=\"width:4.349em;height:2.980em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;Sortzea&quot; azaltzeko, oinarri bat sistema sortzailea (S.G.) <strong>eta</strong> askea (S.L.) dela adierazten da: aukeratutako bektoreetako bat ere ezin da besteekin sortu. <math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> adierazpena oso irakurketa zalantzazkoa da (bektore batek, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hiru osagai baititu lauren ordez); inkoherentzia hori jaso da zuzendu gabe. Kalkulu-emaitzak (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>10</mn></mrow></math>) egiaztatuak daude. &quot;Y TAES&quot; ziurrenik &quot;también&quot; da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p006_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Matrize baliokideak; automorfismoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "17(1) Matrize baliokideak"
    },
    {
     "mota": "testua",
     "html": "Bi matrize:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Matrize baliokideak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Bi matrize <strong>baliokideak</strong> dira aplikazio lineal beraren matrize elkartuak badira, oinarri desberdinekiko. Hori gertatzen da <strong>heina bera</strong> dutenean, hau da, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mi>/</mi><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> forma kanoniko bera dutenean. <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msup><mi>n</mi><mo>′</mo></msup></mrow></math> bada, <math display=\"inline\"><mi>f</mi></math> eta <math display=\"inline\"><msup><mi>f</mi><mo>′</mo></msup></math>-k matrize elkartuaren forma bera dute, eta <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> baliokideak dira."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mover><mo>→</mo><mi>f</mi></mover><mi>W</mi></mrow></math> aplikazioarentzat, <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren tamaina <math display=\"inline\"><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></math> da. <math display=\"inline\"><mi>A</mi></math>-ren <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> minore batek heina zehazten du:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>1</mn><mo>⋅</mo><mn>3</mn><mo>−</mo><mn>2</mn><mo>⋅</mo><mn>2</mn><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> heina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Heina gehienez <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">min</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (&quot;el rango máximo es el número mínimo&quot;)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "1. problema: automorfismoa"
    },
    {
     "mota": "problema",
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
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eskuineko orrialdeko <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> adibidea <strong>ez da lineala</strong> (gai konstantea, <math display=\"inline\"><mn>3</mn></math>), eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>-ren irudian hiru <math display=\"inline\"><mrow><msub><mi>w</mi><mn>1</mn></msub><mo>,</mo><msub><mi>w</mi><mn>2</mn></msub><mo>,</mo><msub><mi>w</mi><mn>3</mn></msub></mrow></math> agertzea inkoherentea da (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>2</mn></msup></math>-k bi oinarri-bektore ditu); atal hori nahasia da eta ez da garatu. &quot;<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mn>3</mn><msub><mi>w</mi><mn>2</mn></msub><mo>+</mo><mn>4</mn><msub><mi>w</mi><mn>3</mn></msub></mrow></math>&quot; adierazpenak &quot;<math display=\"inline\"><msub><mi>w</mi><mn>2</mn></msub></math>&quot; bi aldiz errepikatzen du (ziurrenik lehena &quot;<math display=\"inline\"><msub><mi>w</mi><mn>1</mn></msub></math>&quot; izan behar luke). &quot;dim <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; ziurrenik &quot;<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; da (matrize elkartua)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p018_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Matrize elkartua oinarri kanonikoan",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math>-ren konbinazio gisa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oinarriaren konbinazio lineal gisa idazten da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Osagaiz osagai, sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>−</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>3</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>z</mi><mo>=</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mi>μ</mi><mo>−</mo><mi>δ</mi></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Konbinatuz (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>μ</mi><mo>+</mo><mn>5</mn><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mn>3</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>μ</mi><mo>+</mo><mn>7</mn><mi>δ</mi></mrow></math>), sistema bateragarri determinatua da, eta koefizienteak askatzen dira (izendatzaile <math display=\"inline\"><mn>17</mn></math>-rekin); adibidez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>5</mn><mi>y</mi><mo>−</mo><mi>z</mi></mrow><mn>17</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mi>λ</mi></math> eta <math display=\"inline\"><mi>μ</mi></math>-ren adierazpenak analogoak dira.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>f</mi></math>-ren formula esplizitua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math> lineala denez, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>λ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>δ</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; enuntziatuko balioak ordezkatuz eta sinplifikatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>7</mn><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize elkartua <math display=\"inline\"><msub><mi>B</mi><mi>c</mi></msub></math> oinarrian"
    },
    {
     "mota": "testua",
     "html": "Matrize elkartuaren zutabeak <math display=\"inline\"><mi>f</mi></math>-k oinarri kanonikoko bektoreei ematen dizkien irudiak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Beraz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zuzenketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ezkerreko orrialdeko garapen aljebraiko tartekoa oso trinkoa da, zuzenketa eta ezabaketa askorekin; ez da xehetasunez egiaztatu, baina amaierako formula (goian) irakurketa argikoa da eta matrizearekin bat dator. Jatorrizkoak &quot;<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; idazten du, baina formulak eta matrizeak bigarren osagaian <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> ematen dute (<math display=\"inline\"><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>), ez <math display=\"inline\"><mn>1</mn></math>; hemen <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zuzendua jaso da, matrizearen hirugarren zutabearekin (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) koherentea baita. <math display=\"inline\"><mi>μ</mi></math>-ren adierazpenean jatorrizkoak &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>5</mn><mi>δ</mi></mrow></math>&quot; darabil izendatzailean, notazio-nahaste bat."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p020_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Morfismo motak; automorfismoa heina bidez",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Morfismo motak"
    },
    {
     "mota": "testua",
     "html": "Aplikazio lineal baten sailkapena (aplikazio lineala = <strong>homomorfismoa</strong>):"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Mota</strong>",
        "<strong>Baldintza gehigarria</strong>"
       ],
       "lerroak": [
        [
         "Endomorfismoa",
         "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>"
        ],
        [
         "Monomorfismoa",
         "injektiboa"
        ],
        [
         "Epimorfismoa",
         "gainkorra (surjektiboa)"
        ],
        [
         "Isomorfismoa",
         "bijektiboa"
        ],
        [
         "Automorfismoa",
         "bijektiboa eta <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) Automorfismoa heina bidez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math> automorfismoa da baldin eta soilik baldin irudiaren sortzaileak (matrizearen zutabeak) linealki independenteak badira, hau da, determinantea <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> bada (heina <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn></mrow></math>, orduan <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>). Horrela, injektibotasuna eta gainkotasuna bereiz frogatu gabe erabaki daiteke."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-ren sortzaileak <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira; matrizea:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Determinantea Sarrus-en erregelaz kalkulatzen da; <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math>-rako:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>d</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>e</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>f</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>g</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>h</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>i</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>a</mi><mi>e</mi><mi>i</mi><mo>+</mo><mi>b</mi><mi>f</mi><mi>g</mi><mo>+</mo><mi>c</mi><mi>d</mi><mi>h</mi><mo>−</mo><mi>c</mi><mi>e</mi><mi>g</mi><mo>−</mo><mi>a</mi><mi>f</mi><mi>h</mi><mo>−</mo><mi>b</mi><mi>d</mi><mi>i</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak — zehaztapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Definizioetan jatorrizkoak injektiboaren kasua &quot;HOMOMORFISMO&quot; gisa etiketatzen du; zuzena <strong>monomorfismoa</strong> da (goiko taulan zuzendua). Determinanteaz: goiko matrizearen determinantea (aurreko orrialdeko formula erabiliz) <math display=\"inline\"><mn>0</mn></math> da (tarteko ohar batek <math display=\"inline\"><mrow><mi>−</mi><mn>14</mn></mrow></math> zioen, batuketa-akats bat); horrek heina <math display=\"inline\"><mrow><mo>&lt;</mo><mn>3</mn></mrow></math> iradokiko luke. Baina jatorrizko datuek (<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>14</mn><mo>,</mo><mi>−</mi><mn>14</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math> oinarria dira, det <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>17</mn></mrow></math>) irudi <strong>independentea</strong> ematen dute (haien determinantea <math display=\"inline\"><mrow><mi>−</mi><mn>260</mn><mo>≠</mo><mn>0</mn></mrow></math>), beraz <math display=\"inline\"><mi>f</mi></math> <strong>bai</strong> dela automorfismoa: aurreko orrialdean eratorritako <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> matrizeak barne- akats bat du. Ondorio nagusia (automorfismoa) zuzena da, arrazoi zuzenagatik. Eskuineko <math display=\"inline\"><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub></math> matrizea (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>) ez dator bat <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>B</mi><mi>c</mi></msub><mo>,</mo><msub><mi>B</mi><mi>c</mi></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekin; ziurrenik <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> irudiak zutabetzat dituen matrizea da, transkripzio-desberdintasun batzuekin. Behealdeko <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> determinantea (Laplace-ren garapena) ariketa gehigarri bat da, irakurketa dentsokoa eta konfiantza baxukoa."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p022_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Azpiespazioak <math display=\"inline\"><mi>U</mi></math> eta <math display=\"inline\"><mi>W</mi></math>: dimentsioa eta oinarria",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bitez <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ko azpiespazioak: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> (i) Kalkulatu <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>. (ii) Kalkulatu <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(i) <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>U</mi></math>-rako.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>; hori lehen ekuazioan sartuz, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mi>z</mi><mo>−</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>. Beraz <math display=\"inline\"><mi>U</mi></math>-ko puntuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erakoak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>2</mn><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong><math display=\"inline\"><mi>W</mi></math>-rako.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>z</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi></mrow></math>. Beraz <math display=\"inline\"><mi>W</mi></math>-ko puntuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erakoak dira:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>t</mi><mo>,</mo><mi>−</mi><mi>z</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) <math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definizioa",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Azpiespazioen batura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> da <math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math> barne hartzen duen <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ren azpiespazio bektorial <strong>txikiena</strong>. Definizio hau beharrezkoa da, oro har bi azpiespazioren <strong>bilketa</strong> (<math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math>) ez baita espazio bektoriala (ez da batuketarekiko itxia)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kalkulu esplizitua (<math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math>-ren oinarria eta <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi></mrow></math>) hurrengo orrialdean garatzen da (ikus <code>koadernoa_landeta1_alg_p036</code>): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>+</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>U</mi><mo>∩</mo><mi>W</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mo>∩</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Irudi honek bi koaderno ditu: ezkerreko orrialdea fisika da (<code>koadernoa_landeta_fisica_p034</code>), eskuinekoa (hau) algebra berria (2012/11/21). <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> ondoko &quot;SIN CONTENER LOS PASOS&quot; oharra oso irakurketa zalantzazkoa da. Orrialdea (ii) atalaren definizioan eteten da; kalkulua hurrengoan jarraitzen da."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p036_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Matrizeen biderketa (795–798)",
   "blokeak": [
    {
     "mota": "problema-gaia",
     "testua": "MATRIZEAK ETA FORMA KOADRATIKOAK"
    },
    {
     "mota": "testua",
     "html": "Ondorengo matrizeen biderkadurak ebazteko (jatorrizkoan emaitzarik gabe):"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>24</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>33</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>126</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>20</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>107</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>52</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>68</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>101</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>50</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>140</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>26</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>18</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>46</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>34</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>120</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>16</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>15</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>14</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>22</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lau ariketak (795–798) planteamendua besterik ez dira; jatorrizkoan ez dago emaitzarik kalkulatuta. Zenbait bi zifrako zenbaki estu idatzita daude (adib. &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>107</mn></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>120</mn></mrow></math>&quot; 797an; &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>16</mn></mrow></math>&quot;, &quot;<math display=\"inline\"><mrow><mi>−</mi><mn>15</mn></mrow></math>&quot; 798an); irakurketarik plausibleena hartu da. 796. ariketak hiru matrizeren katea du (besteek bi)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta_p056_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    },
    {
     "mota": "itzulgai",
     "proiektua": "_historico/espazio-ontzia/02_algebra_geometria/algebra_lineal/ocw_ejercicios_resueltos",
     "orrialdeak": "40",
     "jatorria": "es"
    }
   ]
  },
  {
   "id": "a59",
   "maila": 1,
   "izenburua": "Oinarri-aldaketaren matrizea, alderantzizkoa eta balio propioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oinarri-aldaketaren matrizea (beti karratua eta alderantzikagarria), matrize alderantzizkoaren formula, eta <strong>balio propioen</strong> hasiera (polinomio karakteristikoa)."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Oinarri-aldaketaren matrizea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bi oinarri izanik, biek espazio osoa sortzen dutenez, bata bestearen bidez adieraz daiteke. <math display=\"inline\"><mi>β</mi></math>-ren bektoreak <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math>-n idatziz, <math display=\"inline\"><mrow><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mo>=</mo><msub><mo>∑</mo><mi>j</mi></msub><msub><mi>λ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msubsup><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi><mo>′</mo></msubsup></mrow></math>, eta koefizienteek <strong>oinarri-aldaketaren matrizea</strong> osatzen dute:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><msubsup><mi>M</mi><mrow><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">det</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Matrize hauek beti <strong>karratuak</strong> (<math display=\"inline\"><mrow><mi>n</mi><mo>×</mo><mi>n</mi></mrow></math>) eta <strong>alderantzikagarriak</strong> dira. Koordenatuen gainean: <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>′</mo></msup><mo>=</mo><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math> eta alderantziz. <strong>Oinarri-proba:</strong> multzo bat oinarri da baldin eta haren oinarri-aldaketaren matrizea alderantzikagarria bada."
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Matrize alderantzizkoa",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">adj</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mi>A</mi></math> <strong>ez da alderantzikagarria</strong>; horregatik, <strong>matrize alderantzikagarri orok errango maximoa</strong> du."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Balio propioak eta polinomio karakteristikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> <strong>bektore propioa</strong> da eta <math display=\"inline\"><mi>λ</mi></math> <strong>balio propioa</strong> baldin eta <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover></mrow></math> bada, hots <math display=\"inline\"><mrow><mi>A</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">polinomio karakteristikoa</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>λ</mi></math>-ren <strong>anizkoiztasun aljebraikoa</strong> polinomio karakteristikoan erro gisa agertzen den aldi kopurua da. Balio propioak polinomio karakteristikoa <math display=\"inline\"><mn>0</mn></math>-rekin berdinduz aurkitzen dira."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0041</code>, 80-81 orriak; &quot;ÁLGEBRA LANDETA&quot;). Oinarri-aldaketaren matrizea (<math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></msub><mo>=</mo><msubsup><mi>M</mi><mrow><msup><mi>β</mi><mo>′</mo></msup><mi>β</mi></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msubsup></mrow></math>), alderantzizkoaren formula (<math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><msup><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> adj</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msup><mi>/</mi><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>) eta balio propioen definizioa (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) estandarrak eta zuzenak dira. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p080.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p086_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; diagonalizazioaren teorema, anizkoiztasunak eta eskisioa",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Diagonalizazioaren teorema: anizkoiztasunak eta eskisioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Balio propio baten <strong>anizkoiztasun aljebraikoa</strong> eta <strong>geometrikoa</strong>, eta <strong>diagonalizazioaren teorema</strong> (endomorfismo bat noiz den diagonalizagarria), eskisioarekin (<math display=\"inline\"><mi mathvariant=\"double-struck\">ℤ</mi></math>-tik <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>-ra)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Anizkoiztasun aljebraikoa eta geometrikoa"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Aljebraikoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mi>λ</mi></math> balio propioa polinomio karakteristikoan <strong>erro</strong> gisa agertzen den aldi kopurua.",
      "<strong>Geometrikoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mi>λ</mi></math>-ren <strong>espazio propioaren</strong> dimentsioa, non <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>λ</mi><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Beti <math display=\"inline\"><mrow><mn>1</mn><mo>≤</mo><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizazioaren teorema"
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Teorema (diagonalizazioa)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> endomorfismoa <strong>diagonalizagarria</strong> da baldin eta baldin soilik:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Polinomio karakteristikoa <math display=\"inline\"><mi>K</mi></math>-n eskindatzen bada:</strong> <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>…</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>−</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>∈</mo><mi>K</mi></mrow></math> guztiekin.",
        "<strong>Balio propio bakoitzeko</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (anizkoiztasun geometrikoa = aljebraikoa)."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baldintzak betetzen badira, balio propioen espazioetako bektore propioek <math display=\"inline\"><mi>V</mi></math>-ren <strong>oinarri</strong> bat osatzen dute, eta oinarri horretan <math display=\"inline\"><mi>f</mi></math>-ren matrizea <strong>diagonala</strong> da (balio propioak diagonalean)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eskisioa: <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math> vs <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Polinomio karakteristikoa <math display=\"inline\"><mi>K</mi></math> gorputzean eskindatu behar da. Adibidez, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℂ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baina </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>≠</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> in </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>-n eskindatzen da (erro konplexuak <math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>), baina <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n ez (ez du erro errealik): horregatik matrize bat <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>-n diagonalizaezina izan daiteke eta <math display=\"inline\"><mi mathvariant=\"double-struck\">ℂ</mi></math>-n diagonalizagarria."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0044</code>, 86-87 orriak; &quot;ÁLGEBRA LANDETA&quot;; &quot;Gauss-en ametsa&quot; = zenbaki irudikarien irudikapena zirkulu unitarioan). Anizkoiztasunak, diagonalizazioaren teorema (eskisioa + <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>) eta <math display=\"inline\"><mrow><mi mathvariant=\"double-struck\">ℂ</mi><mi>/</mi><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> eskisioa (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>) estandarrak eta zuzenak dira. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p086.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p088_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; diagonalizazioaren ondorioa eta talde simetrikoa",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Jordanen forma kanonikoa (I): endomorfismoa eta espazio propioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Matrize <strong>diagonalizaezin</strong> baten Jordanen forma kanonikoaren adibidea. Balio propio bat errepikatua duen <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> endomorfismotik abiatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Endomorfismoa eta polinomio karakteristikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>−</mi><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da; oinarri kanonikoan haren matrizea <strong>behe-triangeluarra</strong> denez, balio propioak diagonalean daude:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>3</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espazio propioa eta diagonalizaezintasuna"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">id</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ebatziz (<math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>6</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>z</mi><mo>+</mo><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <math display=\"inline\"><mi>f</mi></math> <strong>ez da diagonalizagarria</strong>. Jorderaren forma kanonikoa erabili behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espazio propio orokortua"
    },
    {
     "mota": "testua",
     "html": "Diagonalizaezina denez, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren <strong>potentzia handiagoak</strong> hartzen dira. <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">id</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, katea hemen <strong>egonkortzen</strong> da: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0091</code>, 180-181 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> (diagonalizaezina, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>), eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>. Oinarriak jatorrizkoarekin bat datoz. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p180.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p182_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Jordanen forma II: Jordan-katea, oinarria eta egiaztapena (P^-1 A P = J)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Jordanen forma kanonikoa (II): Jordan-katea eta oinarria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math>-ren jarraipena. Jordan-<strong>katea</strong> eraikitzen da <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko bektore batetik, eta <math display=\"inline\"><mi>f</mi></math>-ren <strong>Jordan-oinarria</strong> osatzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-katea (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko bektore bat hartzen da <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en ez dagoena: <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Haren <strong>irudia</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren bidez espazio propioan erortzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokearen katea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (bektore propioa) eta <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dira. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-en beste bektore propio independente bat behar da <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> blokerako: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Azkenik, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-rako, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-oinarria"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egiaztapena (irudiak)"
    },
    {
     "mota": "testua",
     "html": "Oinarriko bakoitzaren irudia <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math>-ren arabera:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msub><mi>v</mi><mrow><mn>4</mn><mi>.</mi></mrow></msub></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math> da gakoa: <math display=\"inline\"><msub><mi>v</mi><mn>3</mn></msub></math> <strong>bektore propio orokortua</strong> da (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi mathvariant=\"normal\">id</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mn>3</mn></msub><mo>=</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>), eta horrek sortzen du superdiagonaleko <math display=\"inline\"><mn>1</mn></math>-a."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0092</code>, 182-183 orriak; &quot;ÁLGEBRA LANDETA&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta <math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> oinarriarekin <math display=\"inline\"><mrow><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mo>=</mo><mi>J</mi></mrow></math> (Jordan) betetzen da. Jatorrizko orriko &quot;RENUMBRAR&quot; oharrak bektoreen ordena Jordan-formarako doitu behar dela dio; hurrengo orrian ordenatzen da. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p182.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p184_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Jordanen forma III: J eta P matrizeak, bigarren adibidea chi=(x-2)^4 (zuzenketa: 3. errenkada)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Excursus: aplikazioei buruz (morfismo motak)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio linealen <strong>sailkapena</strong> injektibitatearen eta surjektibitatearen arabera, eta zer den (eta zer ez den) aplikazio bat, adibide errealekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Morfismoen hiztegia"
    },
    {
     "mota": "testua",
     "html": "Aplikazio lineal <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> baterako:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Endomorfismoa:</strong> espazio bera bere baitan, <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math>.",
      "<strong>Automorfismoa:</strong> endomorfismo <strong>bijektiboa</strong>.",
      "<strong>Monomorfismoa:</strong> aplikazio lineal <strong>injektiboa</strong>.",
      "<strong>Epimorfismoa:</strong> aplikazio lineal <strong>surjektiboa</strong>."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Injektibitate-irizpidea:</strong> <math display=\"inline\"><mi>f</mi></math> injektiboa da baldin eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak: zer den aplikazio bat"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <strong>ez injektiboa</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) eta <strong>ez surjektiboa</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mo>+</mo></msup></mrow></math>, ez ditu balio negatiboak hartzen).",
      "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>↦</mo><mi>x</mi></mrow></math>: <strong>aplikazio identikoa</strong>, <strong>bijektiboa</strong> (injektiboa eta surjektiboa).",
      "<strong>Zirkunferentzia</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>9</mn></mrow></math> (zentroa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, erradioa <math display=\"inline\"><mn>3</mn></math>): <strong>ez da aplikazioa</strong>, <math display=\"inline\"><mi>x</mi></math> bakoitzari <strong>bi irudi</strong> dagozkiolako:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <strong>ez injektiboa</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, altuera bereko bi puntu) eta <strong>ez surjektiboa</strong> (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mo>+</mo></msup></mrow></math>, ez du balio negatiborik hartzen).",
     "src": "media/irudiak/054459a6978434d1.svg",
     "zabalera": 176
    },
    {
     "mota": "oharra",
     "titulua": "Goiburuko adibideari buruzko oharra",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jatorrizko orriak goiburuan <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo>−</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jartzen du, &quot;<math display=\"inline\"><mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>&quot; etiketarekin. Bi kontraesan: (i) <strong>lau</strong> osagai ditu (helmuga <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> litzateke, ez <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>); (ii) laugarren osagaia <strong>konstante</strong> bat da (<math display=\"inline\"><mn>3</mn></math>), beraz <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> eta <strong>ez da lineala</strong> (afina baizik). Adibide solte inkoherente gisa dokumentatzen da; hiztegia eta gainerako adibideak zuzenak dira. Jatorrizko testua ez da behartu."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>LANDETA1_0095</code>, 188-189 orriak; &quot;ÁLGEBRA LANDETA&quot;). Morfismoen hiztegia (endo/auto/mono/epimorfismo) <strong>terminologia estandarra</strong> da, zuzena. Adibideak egiaztatuak: <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> (ez iny., ez sup.), identitatea (bij.), zirkunferentzia (ez aplikazio, bi adar <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mrow><mn>9</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>). Bukaeran &quot;Cantorren continuoaren hipotesia&quot; aipamen kulturala dago, garapenik gabe. Erregistroak &quot;calculo&quot; dio; edukia <strong>algebra</strong> da. Zuzenketarik ez. Ikus <code>koadernoa_landeta1_alg_p188.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_landeta1_alg_p190_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; excursus (jarr.): logaritmoa/esponentziala alderantzizkoak (zuzenketa: e^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Dimentsioaren teorema eta matrize elkartuaren forma kanonikoa (Landeta)",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "5. ariketaren itxiera: dimentsioaren teorema"
    },
    {
     "mota": "testua",
     "html": "Aurreko orrialdeko ariketaren nukleoa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mi>z</mi><mo>,</mo><mn>3</mn><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math>-ren heina dimentsioaren teoremaz (heina-nulitatea):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "(iii) Matrize elkartuaren forma kanonikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>f</mi></math>-ren heina <math display=\"inline\"><mi>n</mi></math> denean, oinarri egokituekiko matrize elkartuak blokeen forma hau du; kasu honetan (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>B</mi><mo>∈</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Mat</mtext></mrow><mrow><mn>4</mn><mo>×</mo><mn>3</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"media/formulak/5b9368baa531a00f.svg\" alt=\"B = mat(augment: #(hline: 2, vline: 2), I_2, 0; 0, 0)\" style=\"width:7.403em;height:3.673em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Horretarako, <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren oinarria bi bektorerekin (haien irudiek <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> sortzen dute) eta bat <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></math>-tik hartuz eratzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bidez </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>4</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-rena, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-ren sortzaileak beste bi bektore linealki independenterekin osatuz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> sortzen</mtext></mrow></mrow></munder><mo>,</mo><munder><munder><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> L.I., osatzen</mtext></mrow></munder><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Diagonalizazioaren ondorioa (oinarri propioan diagonala)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Diagonalizazioaren <strong>matrizea</strong> (bektore propioen oinarrian) eta gai berri bat: <strong>talde simetrikoa</strong> (<math display=\"inline\"><msub><mi mathvariant=\"normal\">Σ</mi><mi>n</mi></msub></math>, permutazioak, zikloak eta sinadura)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Diagonalizazioaren ondorioa"
    },
    {
     "mota": "testua",
     "html": "Balio propio bakoitzeko <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren bektore propioak bilduz, <math display=\"inline\"><mi>V</mi></math>-ren <strong>oinarri</strong> bat lortzen da, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>m</mi></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>w</mi><mi>p</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Oinarri horretan <math display=\"inline\"><mi>f</mi></math>-ren matrizea <strong>diagonala</strong> da, balio propioak (anizkoiztasunarekin) diagonalean:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mi>β</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>λ</mi><mi>n</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diagonalizagarria. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Jordanen forma kanonikoa (III): <math display=\"inline\"><mi>J</mi></math> eta pasabide-matrizea (Landeta)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lehen adibidearen amaiera (<math display=\"inline\"><mi>J</mi></math> eta pasabide-matrizea <math display=\"inline\"><mi>P</mi></math>), eta bigarren adibide baten hasiera (<math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordanen matrizea eta pasabide-matrizea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>B</mi><mo>′</mo></msup></math> oinarrian, irudien koordenatuek <math display=\"inline\"><mi>J</mi></math> osatzen dute; <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-erako da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><msup><mi>B</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>,</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "non <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math> betetzen den (SymPy-z egiaztatua, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>P</mi><mo>=</mo><mn>4</mn></mrow></math>)."
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Batura zuzena, determinante parametrikoa eta <math display=\"inline\"><mi>f</mi></math>-ren berreraiketa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi saio: batura zuzenaren irizpideak eta determinante parametriko bat (2013/1/23); eta <math display=\"inline\"><mi>f</mi></math> aplikazioa <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-tik berreraikitzea (2013/1/24)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Batura zuzena <math display=\"inline\"><mrow><mi>U</mi><mo>⊕</mo><mi>V</mi><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: bi metodo"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>∩</mo><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo>=</mo><mi>n</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mspace width=\"0.222em\"></mspace><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mspace width=\"1.0em\"></mspace><mi>U</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>V</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren oinarrien bilketa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren oinarria. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Bi irizpideak baliokideak dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Determinante parametrikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>b</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>a</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math> <strong>Metodoa:</strong> lehen errenkada gainerakoei kenduz zeroak sortu, <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> faktorizatu errenkadaz errenkada, eta ordena jaitsi (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn><mo>→</mo><mn>3</mn><mo>×</mo><mn>3</mn><mo>→</mo><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math>). Emaitza: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math> (<strong>Koherentzia:</strong> jatorrizko matrizea <math display=\"inline\"><mn>2</mn></math>. graduko sarrerena da, beraz <math display=\"inline\"><mi>D</mi></math>-ren gradua <math display=\"inline\"><mn>8</mn></math> da; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>-k zehazki <math display=\"inline\"><mn>8</mn></math> gradua du.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> berreraiketa (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>U</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>), eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mi>W</mi></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>; erregela-nulutasunaren teoremaz <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>4</mn></mrow></math>). <math display=\"inline\"><mi>U</mi></math>-ren oinarria <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ra osatuz <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mi>f</mi></math>-k nukleoa <math display=\"inline\"><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></math>-ra bidaltzen du eta osatze-bektoreak <math display=\"inline\"><mi>W</mi></math>-ren sortzaileetara: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mi>B</mi></math>-n adieraziz (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi><mo>−</mo><mi>μ</mi><mo>+</mo><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>λ</mi><mo>+</mo><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>μ</mi></mrow></math>): <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>y</mi></mrow></math>. Beraz: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>t</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>+</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Batura zuzenaren bi irizpideak zuzenak eta baliokideak dira. Determinante parametrikoaren <strong>metodoa</strong> (faktorizatu, zeroak sortu, ordena jaitsi) zuzena da eta emaitza <math display=\"inline\"><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math> graduz koherentea (<math display=\"inline\"><mn>8</mn></math> gradua); <strong>konfiantza ertaina</strong> sarrera zenbakizko/parametriko askotan (zeinuak eta tarteko faktoreak ezin dira ziurtatu). <math display=\"inline\"><mi>f</mi></math>-ren berreraiketa metodo estandarra da eta zuzena: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Ker </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mn>4</mn></mrow></math>; <math display=\"inline\"><mi>W</mi></math>-k <strong>hiru</strong> sortzaile ditu baina dimentsioa <math display=\"inline\"><mn>2</mn></math> da (bat besteen menpekoa; garapenak bi baino ez ditu erabiltzen). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p106.typ</code>"
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
   "id": "a71",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><msup><mi>f</mi><mn>2011</mn></msup></math> Jordanen formaren bidez; matrize elkartua eta forma kanonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azterketa-ariketa: endomorfismo baten <strong>berretura altua</strong> Jordanen formaz kalkulatu, oinarri kanonikoa erabili gabe."
    },
    {
     "mota": "ariketa",
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
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(ii) <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>: matrizea eta forma kanonikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>-ren matrize elkartua <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> da, eta bere baliokidetasun-forma kanonikoa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>). Irudiaren sortzaileen artean determinante <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> ez-nulu bat aurkituz errangoa zehazten da (eskeman <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math> blokea)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(i) osoki egiaztatua:</strong> Jordan-blokearen berreturak (<math display=\"inline\"><mrow><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mn>3</mn><mi>n</mi></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>): <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>→</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>→</mo><mn>27</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>→</mo><mn>108</mn></mrow></math> ✓; patroia <math display=\"inline\"><mrow><mi>n</mi><mo>⋅</mo><msup><mn>3</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> zehatza; <math display=\"inline\"><msup><mi>J</mi><mi>n</mi></msup></math> eta <math display=\"inline\"><msup><mi>J</mi><mn>2011</mn></msup></math> zuzenak (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2011</mn></msup></mrow></math> negatiboa, esponente bakoitia). Metodoaren mamia: berretura altuak Jordanez kalkulatzea bideragarria da. <strong>(ii) konfiantza ertaina:</strong> <math display=\"inline\"><mi>f</mi></math>-ren formula, <math display=\"inline\"><mi>A</mi></math> matrizea eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math>-ren sortzaileak ez dira ziurtasunez irakurtzen; kontzeptua (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> matrizea, forma kanonikoa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>) argi dago baina «<math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><mn>4</mn></mrow></math>» oharra ez dator bat (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> izan behar du). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p108.typ</code>"
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
   "id": "a72",
   "maila": 2,
   "izenburua": "Oinarri baten berreskurapena pasabide-matrizetik",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko ariketaren forma kanonikoaren amaiera (<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></mrow></math>, errango <math display=\"inline\"><mn>2</mn></math>, forma <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>), eta base-aldaketaren <strong>alderantzizko problema</strong>: oinarria bera berreskuratzea pasabide-matrizetik."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema alderantzizkoa"
    },
    {
     "mota": "testua",
     "html": "Emanik <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mi>β</mi><mo>←</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, zutabeak bektore kanonikoen koordenatuak dira <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>-en: <math display=\"block\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ebazpena.</strong> <math display=\"inline\"><mrow><mn>2</mn><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Honi <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> kenduz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> Eta <math display=\"inline\"><mrow><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gehituz: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Hortik <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Egiaztapena:</strong> <math display=\"inline\"><mrow><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mn>3</mn><mo>,</mo><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math> ✓."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dena egiaztatua: forma kanonikoa (<math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>, errango <math display=\"inline\"><mn>2</mn></math>), eta oinarriaren berreskurapena pasabide-matrizetik: sistema ebatziz <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, egiaztapen independentearekin (<math display=\"inline\"><mrow><mn>3</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mrow></math>). Bi errotulu (<math display=\"inline\"><msub><mi>M</mi><mrow><mi>β</mi><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mrow><msub><mi>β</mi><mi>c</mi></msub><mi>β</mi></mrow></msub></math>) matrize berari lotuta daude; erabilitakoa bektore kanonikoak <math display=\"inline\"><mi>β</mi></math>-ren arabera adierazten dituena da. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_landeta2_alg_p110.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton_p037_mk.typ",
     "xehetasuna": "transkripzio literalak, maquetazioa eta egiaztapen matematikoa",
     "hizkuntza": "es"
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p001_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); aplikazio lineala balioengatik determinatua (f: R^3 -> R^4)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a73",
   "maila": 2,
   "izenburua": "Aplikazio lineala bere balioengatik determinatua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplikazio lineal bat <strong>guztiz zehaztuta</strong> dago oinarri bateko bektoreen <strong>irudiek</strong> emanda. <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> <strong>hiru bektoreren</strong> irudiez definituta, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orokorra kalkulatu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Datuak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emandako hiru bektoreek <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup></math>-ren <strong>oinarria</strong> osatzen dute (determinantea <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>), beraz <math display=\"inline\"><mi>f</mi></math> guztiz zehaztuta dago."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> orokorra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oinarri horretan adieraziz eta linealtasunez, <math display=\"inline\"><mi>f</mi></math>-ren matrizea eta irudia lortzen dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>5</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>z</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0001</code>, 1-2 orriak; &quot;ÁLGEBRA NEWTON&quot;). <strong>newton2 koadernoaren lehen orria.</strong> SymPy-z egiaztatua: hiru bektoreek oinarria osatzen dute (det <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>W</mi><mo>⋅</mo><msup><mi>V</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>-tik <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mi>−</mi><mn>2</mn><mi>z</mi><mo>,</mo><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>z</mi><mo>,</mo><mn>2</mn><mi>x</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>y</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Nukleoa/irudia hurrengo orrian (<code>p002</code>). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p001.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p002_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); nukleoa, irudia, matrize elkartua eta heina (injektiboa, ez surjektiboa)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Nukleoa, irudia, matrize elkartua eta heina",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> aplikazioaren <strong>matrize elkartua</strong> (oinarri kanonikoan), <strong>irudia</strong>, <strong>nukleoa</strong> eta <strong>injektibitatea</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrize elkartua (oinarri kanonikoan)"
    },
    {
     "mota": "testua",
     "html": "Zutabeak <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>e</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ezin surjektiboa izan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></mrow></math> denez, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>: <strong>ezin da surjektiboa izan</strong> <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math>-ra."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nukleoa eta injektibitatea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> ebatziz (izendatzaileko <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, gero <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> injektiboa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0002</code>, 2-3 orriak; &quot;ÁLGEBRA NEWTON&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> → <strong>injektiboa</strong> baina <strong>ez surjektiboa</strong> (<math display=\"inline\"><mrow><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>). <code>p001</code>eko ariketaren jarraipena (balio berak, osagaiz osagai). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p002.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p004_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Jordanen forma kanonikoa: teoria eta adibide 4x4 (chi=lambda^2(lambda-1)^2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 1,
   "izenburua": "Jordanen forma kanonikoa: teoria eta adibidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Noiz</strong> den endomorfismo bat triangularizagarria, <strong>Jordanen forma kanonikoaren</strong> definizioa, eta adibide oso bat <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrize batekin."
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Triangularizagarritasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mi>K</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izanik: <strong>polinomio karakteristikoaren erro guztiak balio propioak badira</strong> (hots, <math display=\"inline\"><mrow><msub><mi>P</mi><mi>f</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zatitzen</strong> bada), orduan <math display=\"inline\"><mrow><mo>∃</mo><mi>B</mi></mrow></math> oinarri bat non <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> <strong>triangeluarra</strong> den. <strong>Jordan-oinarria</strong> erabiliz, <math display=\"inline\"><mi>T</mi></math> <strong>Jordanen forma kanonikoa</strong> da (triangeluarra, superdiagonalean edo azpidiagonalean <math display=\"inline\"><mn>1</mn></math> batzuekin: <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> edo <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>)."
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Adibidea: <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Balio propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>) eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>). <strong>Espazio propioak:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (multiplizitateak <strong>berdinak</strong>, zati diagonalizagarria).",
      "<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>defektiboa</strong>: Jordan behar da)."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0003</code>, 4-5 orriak; &quot;ÁLGEBRA NEWTON&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-rako <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-erako <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> (defektiboa). Adibidea <strong>nahita</strong> aukeratua: balio propio batek multiplizitateak berdinak, besteak ez. Jordan-oinarria hurrengo orrian (<code>p006</code>). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p004.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p006_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); espazio propio orokortua E_2(1) eta Jordan-oinarria (J_1(0)+J_1(0)+J_2(1))",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a78",
   "maila": 2,
   "izenburua": "Espazio propio orokortua eta Jordan-oinarria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko <math display=\"inline\"><mi>A</mi></math> (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>) adibidearen jarraipena: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-en <strong>espazio propio orokortua</strong> <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, eta <strong>Jordan-oinarria</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta haren karratua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>−</mo><mi>I</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> ebatziz (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>x</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-oinarria eta forma"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>−</mo><mn>1</mn><mo>=</mo><mn>1</mn></mrow></math> denez, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-erako <strong>kate bakar bat</strong> (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea). <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>-rako bi bektore propio (bi <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> bloke). Jordanen forma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Bi konbentzioak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jordan-blokearen <math display=\"inline\"><mn>1</mn></math>-a <strong>superdiagonalean</strong> (<math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) edo <strong>azpidiagonalean</strong> (<math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mo>,</mo><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>) jar daiteke: bi konbentzioak baliokideak dira (oinarriaren ordenaren araberakoak)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0004</code>, 6-7 orriak; &quot;ÁLGEBRA NEWTON&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>e</mi><mn>1</mn></msub><mo>,</mo><msub><mi>e</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn></mrow></math>), eta <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Bi konbentzioak (superdiagonala/azpidiagonala) baliokideak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p008_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; Jordanen teoria orokorra eta katearen metodoa (diagonalizagarritasuna, espazio orokortuak)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a79",
   "maila": 2,
   "izenburua": "Jordanen teoria orokorra eta katearen metodoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Noiz</strong> den endomorfismo bat <strong>diagonalizagarria</strong>, zergatik behar diren <strong>espazio propio orokortuak</strong>, eta <strong>katearen</strong> metodoa Jordan-oinarria eraikitzeko."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi kasuak eta diagonalizagarritasuna"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Balio propio <strong>guztiak</strong> gorputzean egon behar dute (<math display=\"inline\"><mi>χ</mi></math> zatitu) <strong>triangularizagarria</strong> izateko.",
      "<strong>Diagonalizagarria da</strong> baldin eta <strong>soilik baldin</strong>, balio propio bakoitzarentzat <strong>multiplizitate geometrikoa = aljebraikoa</strong> bada (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zergatik espazio propio orokortuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>&lt;</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math> denean (defektiboa), <strong>espazio propioa ez da nahikoa</strong>: falta diren bektoreak <strong>espazio propio orokortuetatik</strong> hartzen dira, <math display=\"inline\"><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>k</mi></msup></math>-tik (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Katearen metodoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <strong>behin eta berriz</strong> aplikatuz <strong>kate</strong> bat sortzen da: <math display=\"inline\"><mrow><msub><mi>v</mi><mi>s</mi></msub><mo>→</mo><msub><mi>v</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>→</mo><mi>…</mi><mo>→</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>, non <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mi>j</mi></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>j</mi><mo>−</mo><mn>1</mn></mrow></msub></mrow></math> eta <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> bektore propioa den. Katea Jordan-blokea da."
    },
    {
     "mota": "ingurunea",
     "izena": "Oharra",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Bi ordenak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Katea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mi>s</mi></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> edo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>v</mi><mi>s</mi></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">}</mo></mrow></math> ordenatu daiteke: horrek <math display=\"inline\"><mn>1</mn></math>-a <strong>superdiagonalean</strong> edo <strong>azpidiagonalean</strong> jartzen du (bi konbentzio baliokideak)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0005</code>, 8-9 orriak; &quot;ÁLGEBRA NEWTON&quot;). <math display=\"inline\"><mn>4</mn></math>-<math display=\"inline\"><mn>7</mn></math> orrialdeetako adibidea <strong>arrazoitzen</strong> du: diagonalizagarritasunaren baldintza (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math>), espazio propio orokortuen beharra, eta katearen sorrera (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mi>λ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Id</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> errepikatuz). Teoria estandarra. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p008.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p010_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); polinomio karakteristikoa eragiketa elementalez (chi=(x-2)^2(x+1)^2) eta V(2)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a80",
   "maila": 2,
   "izenburua": "Polinomio karakteristikoa eragiketa elementalez",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Adibide berri baten <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> matrizearen <strong>polinomio karakteristikoa</strong>, determinantea <strong>garatu gabe</strong>: <strong>eragiketa elementalez zeroak sortuz</strong> forma blokekora murriztu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matrizea eta metodoa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>I</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kalkulatzeko, <strong>errenkada eta zutabe eragiketez</strong> (<math display=\"inline\"><mrow><msub><mi>F</mi><mn>1</mn></msub><mo>+</mo><msub><mi>F</mi><mn>4</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><msub><mi>C</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><msub><mi>C</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>3</mn></msub><mo>+</mo><msub><mi>C</mi><mn>4</mn></msub></mrow></math>) zeroak sortzen dira, determinantea <strong>bi <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokera</strong> murriztuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>I</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>+</mo><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>+</mo><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>λ</mi><mo>−</mo><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-ren espazio propioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> denez, <strong>defektiboa</strong> da: Jordan behar da (hurrengo orrian, <code>p012</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0006</code>, 10-11 orriak; &quot;ÁLGEBRA NEWTON&quot;). <strong>Metodo bikaina:</strong> <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> determinantea ez du garatzen, <strong>zeroak sortzen</strong> ditu eragiketa elementalez (bost urrats) <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokeetara murrizteko. SymPy-z egiaztatua: <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, eta <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mn>1</mn></mrow></math>, defektiboa). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p010.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p012_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); espazio propio orokortua E_2(2) eta Jordan-katea (zuzenketa: kate-bektoreak)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a81",
   "maila": 2,
   "izenburua": "Espazio propio orokortua eta Jordan-katea (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko adibidearen jarraipena: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-ren <strong>espazio propio orokortua</strong> <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <strong>Jordan-katearen</strong> eraikuntza."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, <strong>potentzia handiagora</strong> jotzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Katea hemen egonkortzen da (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊊</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-katea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko bektore bat hartuz (<math display=\"inline\"><mi>w</mi></math>), <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi></mrow></math> <strong>bektore propioa</strong> da (katearen oina). Adibidez, <math display=\"inline\"><mi>w</mi></math> egoki batekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>w</mi></mrow></math> proportzionala da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bektore propioarekiko. Horrek <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> Jordan-blokea sortzen du."
    },
    {
     "mota": "oharra",
     "titulua": "Zuzenketa (kate-bektoreak) eta oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0007</code>, 12-13 orriak; &quot;ÁLGEBRA NEWTON&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-k <strong>kate bakar bat</strong> (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea). ⚠ <strong>Zuzenketa:</strong> jatorrizko orriak <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hartu eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>−</mo><mn>2</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dela dio, baina <strong>matrizearekin ez dator bat</strong> (<math display=\"inline\"><mi>A</mi></math>-rekin <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mn>2</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>13</mn><mo>,</mo><mi>−</mi><mn>6</mn><mo>,</mo><mi>−</mi><mn>28</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); irakurketa-akatsak dira kate-bektoreetan. Bektore propio <strong>zuzena</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), eta <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik katea eraikitzen da. <strong>Metodoa</strong> eta egitura (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea) zuzenak dira; kate-bektore zehatzak SymPy-z zuzenduak. Itxiera <code>p014</code>-n. Ikus <code>koadernoa_newton2_alg_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p014_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena (SymPy); Jordanen formaren itxiera J_1(-1)+J_1(-1)+J_2(2) (orri mistoa: kalkulua->04)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a82",
   "maila": 2,
   "izenburua": "Jordanen formaren itxiera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko adibidearen <strong>itxiera</strong>: bi balio propioen ekarpenak bilduz, <strong>Jordanen forma</strong> osoa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi balio propioen ekarpenak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>2</mn><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>diagonalizagarria</strong>, bi <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> bloke).",
      "<strong><math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&lt;</mo><mn>2</mn></mrow></math> (<strong>defektiboa</strong>): <strong>kate bakarra</strong>, <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordanen forma"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0008</code>, 14-15 orriak; &quot;ÁLGEBRA NEWTON&quot;). SymPy-z egiaztatua: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> diagonalizagarria (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> defektiboa (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> blokea), beraz <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊕</mo><msub><mi>J</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Orri mistoa:</strong> eskuineko orria &quot;CÁLCULO NEWTON&quot; da (jarraitutasuna) + ohar pertsonal bat; kalkulu-zatia <strong>04. atalera</strong> doa, ez hona. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p028_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; Jordanen hiru kasuak (multiplizitate geometrikoa eta kutxen egitura)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a83",
   "maila": 2,
   "izenburua": "Jordanen hiru kasuak: multiplizitate geometrikoa eta kutxak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Balio propio errepikatu batentzat, <strong>Jordanen egitura</strong> multiplizitate geometrikoaren araberakoa da: <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> jaisten den heinean, <strong>kutxak elkartzen</strong> dira eta <math display=\"inline\"><mn>1</mn></math>-ak agertzen dira superdiagonalean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hiru kasuak (adibidez, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo>=</mo><mn>3</mn></mrow></math>)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>3</mn></mrow></math></strong> (ez defektiboa): <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>D</mi></mrow></math> <strong>diagonala</strong>, hiru <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> kutxa.",
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>2</mn></mrow></math></strong>: <strong>bi kutxa</strong>, bat <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> (kate bat) eta bat <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>.",
      "<strong><math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn></mrow></math></strong>: <strong>kutxa bakarra</strong>, <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn></mrow></math> (kate luze bat)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <strong>Jordanen ideiaren muina:</strong> <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> (<math display=\"inline\"><mo>=</mo></math> kutxa-kopurua) <strong>txikitzen</strong> den heinean, kutxak <strong>handitu</strong>\n  egiten dira eta <strong><math display=\"inline\"><mn>1</mn></math>-ak</strong> agertzen dira (kateen loturak). <math display=\"inline\"><mrow><msub><mi>m</mi><mi>g</mi></msub><mo>=</mo><msub><mi>m</mi><mi>a</mi></msub></mrow></math> denean, dena diagonala da.\n</em>"
    },
    {
     "mota": "testua",
     "html": "Kasu bakoitzak <strong>bere oinarria eta matrizea</strong> du (bektore propioak + orokortuak katez)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0015</code>, 28-29 orriak; &quot;ÁLGEBRA NEWTON&quot;). Aurreko unitateko <strong>hiru kasuak garatuta</strong>, bakoitza bere oinarri eta matrizearekin (&quot;1 kutxa&quot;, &quot;2 kutxa&quot;, &quot;<math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>D</mi></mrow></math>&quot;). Jordanen ideia <strong>ikusgai</strong>: <math display=\"inline\"><msub><mi>m</mi><mi>g</mi></msub></math> jaistean kutxak elkartu eta <math display=\"inline\"><mn>1</mn></math>-ak agertu. Koordenatu-lerroak eta matrizeak egiaztatuta (jatorrian zuzenak). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p028.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p030_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; Jordan-oinarria, polinomio minimoa eta J=P^-1 A P",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a84",
   "maila": 2,
   "izenburua": "Jordan-oinarria, polinomio minimoa eta <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Adibidearen jarraipena (<strong>bi kutxa</strong>, <math display=\"inline\"><mn>2</mn></math> eta <math display=\"inline\"><mn>1</mn></math> tamainakoak), <strong>polinomio minimoa</strong> (lehen aldiz), eta <strong>zergatik</strong> den <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Jordan-oinarria eta matrizea"
    },
    {
     "mota": "testua",
     "html": "Aurreikusitako egitura ateratzen da: <strong>bi kutxa</strong>, <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polinomio minimoa"
    },
    {
     "mota": "testua",
     "html": "<strong>Polinomio minimoa</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> balio propio bakoitzeko <strong>kutxa handienaren tamaina</strong> du erakusle:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∏</mo><mi>λ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>s</mi><mi>λ</mi></msub></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>s</mi><mi>λ</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> lambda-ren kutxa handienaren tamaina</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Kontraste: polinomio <strong>karakteristikoak</strong> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> erabiltzen du erakusle.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zergatik <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>P</mi></math>-ren <strong>zutabeak Jordan-oinarriaren bektoreak</strong> direnez (oinarri-aldaketako matrizea, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>M</mi><mrow><mi>B</mi><mo>,</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></msub></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mi>M</mi><mi>B</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hots, <math display=\"inline\"><mi>A</mi></math> oinarri kanonikoan eta <math display=\"inline\"><mi>J</mi></math> Jordan-oinarrian, <strong>matrize baliokideak</strong> (<math display=\"inline\"><mi>f</mi></math> endomorfismo beraren bi adierazpen)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0016</code>, 30-31 orriak; &quot;ÁLGEBRA NEWTON&quot;). Aurreko adibidearen egitura (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math> kutxa), <strong>polinomio minimoa</strong> (koadernoan lehen aldiz: kutxa handienaren tamaina erakusle), eta <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>-ren <strong>arrazoia</strong> (<math display=\"inline\"><mi>P</mi></math> = Jordan-oinarriaren pasabide-matrizea). Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p030.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p042_mk.typ",
     "xehetasuna": "transkripzio literala eta maquetazioa; Rouché-Frobenius aplikazio linealetatik deduzitua (bateragarritasuna, soluzio-kopurua)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a85",
   "maila": 1,
   "izenburua": "Rouché–Frobenius aplikazio linealetatik deduzituta",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ekuazio-sistema bat <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math> <strong>aplikazio lineal</strong> gisa irakurriz, <strong>Rouché–Frobenius</strong> teorema <strong>deduzitzen</strong> da (ez enuntziatzen soilik)."
    }
   ]
  },
  {
   "id": "a86",
   "maila": 2,
   "izenburua": "Sistema aplikazio lineal gisa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>=</mo><mi>b</mi></mrow></math> sistema <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math> da, non <math display=\"inline\"><mi>f</mi></math> <math display=\"inline\"><mi>A</mi></math>-ren aplikazio lineala den. Handik dena ateratzen da:"
    }
   ]
  },
  {
   "id": "a87",
   "maila": 2,
   "izenburua": "Bateragarritasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema <strong>bateragarria</strong> da baldin eta <math display=\"inline\"><mrow><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi></mrow></math> bada. Matrizeetan, hori <strong>heinen berdintza</strong> da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bateragarria </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a88",
   "maila": 2,
   "izenburua": "Soluzio-kopurua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Soluzio-multzoa <strong>nukleoak</strong> zehazten du (<math display=\"inline\"><mi>n</mi></math> = aldagai-kopurua):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio bakarra</mtext></mrow><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">rk</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>⇒</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> infinitu soluzio </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">dim</mi><mi mathvariant=\"normal\">ker</mi><mi>f</mi><mo>=</mo><mi>n</mi><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rk</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0021</code>, 42-43 orriak; &quot;ÁLGEBRA NEWTON&quot;, 2012/12/5). Orriaren <strong>balioa</strong>: Rouché–Frobenius <strong>deduzitzen</strong> du (ez enuntziatzen), sistema <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math> gisa irakurrita: bateragarritasuna <math display=\"inline\"><mrow><mo>=</mo><mi>b</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo></mrow></math> heinen berdintza; soluzio-kopurua <math display=\"inline\"><mo>=</mo></math> nukleoa nulua den ala ez. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p042.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p044_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; Rouché-Frobenius aplikatua (hiru soluzio ezinezkoak, absurdora eramanez)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a89",
   "maila": 2,
   "izenburua": "Rouché–Frobenius aplikatua: hiru soluzio ezinezkoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko teoria <strong>aplikatuz</strong>, ariketa <strong>dotorea</strong> absurdora eramanez: hiru soluzio ustezko emanda, <strong>ezin dira hirurak aldi berean</strong> soluzio izan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Arrazoibidea (absurdora eramanez)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math> <math display=\"inline\"><mrow><mi>A</mi><mi>x</mi><mo>=</mo><mi>b</mi></mrow></math>-ren soluzioak balira, haien <strong>kenketak</strong> nukleoan egongo lirateke:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mo>−</mo><mi>b</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><msub><mi>x</mi><mi>j</mi></msub><mo>∈</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Nukleoa dimentsio bakarrekoa</strong> denez (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math>), hiru kenketak (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub></mrow></math>) <strong>elkarren multiplo</strong> izan behar lukete (guztiak lerro beraren gainean)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Baina hiru kenketak <strong>ez dira proportzionalak</strong> (egiaztatuta): <strong>kontraesana</strong>. Beraz <strong>hirurak ezin\n  dira aldi berean soluzio izan</strong>.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0022</code>, 44-45 orriak; &quot;ÁLGEBRA NEWTON&quot;). Ariketa <strong>bitxia</strong>: absurdora eramanez, hiru ustezko soluzioren kenketak nukleoan daude, eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math> denez elkarren multiplo izan beharko lukete; <strong>ez direnez</strong>, kontraesana → hirurak ezin dira soluzio. Hiru kenketak eta bi proportzionaltasun-egiaztapenak jatorrian zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p044.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p046_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; sistema parametrikoa bi bidez (ezabaketa eta matrize hedatua) eta errenkaden matrize elementalak",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a90",
   "maila": 2,
   "izenburua": "Sistema parametrikoa bi bidez, eta matrize elementalak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema <strong>bera bi bidetatik</strong> ebatzita —ekuazioak zuzenean <strong>ezabatuz</strong> eta <strong>matrize hedatuarekin</strong> heinak konparatuz—: bi bideek <strong>emaitza bera</strong> ematen dute. <math display=\"inline\"><mi>k</mi></math> parametroak kasuak bereizten ditu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema, aplikazio lineal gisa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>−</mo><mi>z</mi><mo>=</mo><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>k</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>c</mi></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen bidea: ekuazioak ezabatuz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mi>k</mi><msub><mi>E</mi><mn>1</mn></msub></mrow></math> eginez eta gero <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> gehituz, <math display=\"inline\"><mi>z</mi></math> <strong>ezabatzen</strong> da eta <math display=\"inline\"><mi>y</mi></math>-rako ekuazio bakarra gelditzen:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi><mo>+</mo><mi>b</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Koefiziente hori, <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math>, da <strong>dena erabakitzen duena</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bigarren bidea: matrize hedatua eta heinak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>F</mi><mn>3</mn></msub><mo>−</mo><mi>k</mi><msub><mi>F</mi><mn>1</mn></msub></mrow></math> eta gero <math display=\"inline\"><mrow><msub><mi>F</mi><mn>3</mn></msub><mo>+</mo><msub><mi>F</mi><mn>2</mn></msub></mrow></math> eginez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/a52ea27e6377825e.svg\" alt=\"(A|B) = mat(augment: #3, 1, -1, 0, a; 0, 1, -1, b; k, 1, 1, c) ~ mat(augment: #3, 1, -1, 0, a; 0, 1, -1, b; 0, 2+k, 0, c - k a + b).\" style=\"width:28.114em;height:4.526em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Bi eragiketa hauek aurreko bi urratsak berak dira</strong>: metodo bakarra, bi eratan idatzia."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametroaren eztabaida (hiru kasuak)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi><mo>≠</mo><mn>0</mn></mrow></math></strong>: <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>=</mo></mrow></math> ezezagun kopurua <math display=\"inline\"><mo>→</mo></math> <strong>bateragarri determinatua</strong>.",
      "<strong><math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math></strong> (hots <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>): hirugarren errenkada anulatu eta <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>:",
      "<math display=\"inline\"><mrow><mi>c</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>+</mo><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>≠</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <strong>bateraezina</strong>.",
      "<math display=\"inline\"><mrow><mi>c</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>&lt;</mo><mn>3</mn></mrow></math>: <strong>infinitu soluzio</strong> (<math display=\"inline\"><mi>y</mi></math> askea, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>b</mi></mrow></math>)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Errenkaden eragiketa elementalak"
    },
    {
     "mota": "testua",
     "html": "Errenkada-eragiketa elemental bakoitza <math display=\"inline\"><msub><mi>I</mi><mi>p</mi></msub></math>-ri eragiketa bera eginez lortzen den <strong>matrize batez ezkerretik biderkatzea</strong> da. Hiru motak:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Bi errenkada trukatu</strong> (<math display=\"inline\"><mrow><mi>r</mi><mo>↔</mo><mi>s</mi></mrow></math>): <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi></mrow></math>.",
      "<strong>Errenkada bat <math display=\"inline\"><mrow><mi>k</mi><mo>≠</mo><mn>0</mn></mrow></math>-z biderkatu</strong>: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mi>A</mi></mrow></math>.",
      "<strong><math display=\"inline\"><mi>r</mi></math> errenkadari <math display=\"inline\"><mi>s</mi></math>-a <math display=\"inline\"><mi>k</mi></math>-z biderkatuta gehitu</strong>: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mi>A</mi></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidea (lehen bi errenkaden trukaketa):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Matrize elemental guztiak <strong>alderanzgarriak</strong> dira; horregatik <strong>ez dute <math display=\"inline\"><mi>A</mi></math>-ren heina aldatzen</strong>\n  (koadernoak ez du esaten, baina hori da funtsezko arrazoia).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0024</code>, 46-47 orriak; &quot;ÁLGEBRA NEWTON&quot;). Sistema <strong>bera bi bidez</strong> (ezabaketa eta matrize hedatua), <math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math> koefizientea gakoa, eta <strong>matrize elementalak</strong> hiru motatan. Hemen <math display=\"inline\"><mrow><mi>c</mi><mo>−</mo><mi>k</mi><mi>a</mi></mrow></math> da koherentea (paso batean <math display=\"inline\"><mrow><mi>+</mi><mi>k</mi><mi>a</mi></mrow></math> irakur zitekeen, baina gainerako guztiak <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></math>). Koadernoko <strong>lehen liburu-aipamena</strong>: «Emiliano Aparicio, <em>Teoría de grupos</em>». Hogei emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p046.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p058_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; talde lineal orokorra GL(n,K) eta A-rekin konmutatzen duten matrizeak",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a91",
   "maila": 2,
   "izenburua": "Talde lineal orokorra eta matrize konmutatzaileak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Eraztun-egituraren jarraipena: <strong>talde lineal orokorra</strong> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">GL</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, biderketa ez-trukakorraren <strong>ondorioak</strong>, eta <strong><math display=\"inline\"><mi>A</mi></math>-rekin konmutatzen duten matrizeak</strong> aurkitzea."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Talde lineal orokorra"
    },
    {
     "mota": "testua",
     "html": "Eraztun <strong>unitario</strong> batean <strong>alderantzizkoa</strong> duten elementuek (&quot;unitateak&quot;) beti <strong>taldea</strong> osatzen dute biderketarekin. <math display=\"inline\"><mrow><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eraztunean, unitateak <strong>matrize alderanzgarriak</strong> dira:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mo>∃</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">unitateak</mtext><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> taldea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ez-trukakortasunaren ondorioak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>≠</mo><mi>B</mi><mi>A</mi></mrow></math> denez, zenbakietako formula batzuek <strong>huts egiten dute</strong> matrizeetan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mi>A</mi><mi>B</mi><mo>+</mo><mi>B</mi><mi>A</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>≠</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>B</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mi>A</mi><mi>B</mi><mi>A</mi><mi>B</mi><mo>≠</mo><msup><mi>A</mi><mn>2</mn></msup><msup><mi>B</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Erdiko gaia <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>+</mo><mi>B</mi><mi>A</mi></mrow></math> da, eta <math display=\"inline\"><mrow><mn>2</mn><mi>A</mi><mi>B</mi></mrow></math> soilik <strong>konmutatzen</strong> badute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math> eta alderantzizkoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> <strong>alderanzgarria</strong> bada, <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>-tik <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>bakarrik</strong> dator, alderantzizkoaz biderkatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>X</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mi>X</mi><mo>=</mo><mi>X</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Alderantzizkorik gabe, ordea, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>-tik <strong>ezin da</strong> <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> ondorioztatu (zero-zatitzaileak)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>A</mi></math>-rekin konmutatzen duten matrizeak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> izanik, <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mi>X</mi><mi>A</mi></mrow></math> ezarri eta <strong>osagaiz osagai</strong> berdinduta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>X</mi><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>4</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Berdinketek <math display=\"inline\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>x</mi><mn>4</mn></msub><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math> ematen dituzte, beraz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>X</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mi>I</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mi>N</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>N</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  <math display=\"inline\"><mi>A</mi></math>-rekin konmutatzen dutenak <math display=\"inline\"><mi>A</mi></math>-ren <strong>polinomioak</strong> dira (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>I</mi><mo>+</mo><mi>N</mi></mrow></math>): emaitza orokorraren adibide bat.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0030</code>, 58-59 orriak; &quot;ÁLGEBRA NEWTON&quot;). <strong>Talde lineal orokorra</strong> (eraztun-unitateak), ez-trukakortasunaren <strong>bi ondorio</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><mi>A</mi><mi>X</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> alderantzizkoarekin, eta <strong>konmutatzaileak</strong> osagaiz osagai. Interpretazioa (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mi>I</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mi>N</mi></mrow></math>) koadernoak ez du ematen. ⚠ Post-it arrosa batek ezkerreko lehen lerroak estaltzen ditu; estalitakoa ez da berreraikitzen. Hamalau emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p058.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p060_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; Newton-en binomioa matrizeetan, deskonposaketa simetrikoa eta alderantzizkoa polinomio gisa",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a92",
   "maila": 2,
   "izenburua": "Newton-en binomioa, deskonposaketa simetrikoa eta alderantzizkoa polinomioz",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Lau ariketa, denak <strong>matrizea zenbaki bat balitz bezala</strong> operatuz, baina <strong>non balio duen</strong> zainduz (konmutazioa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Newton-en binomioa: <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>I</mi><mo>+</mo><mi>B</mi></mrow></math> idatzita, non <math display=\"inline\"><mi>B</mi></math> <strong>nilpotentea</strong> den (<math display=\"inline\"><mrow><msup><mi>B</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mrow><mn>2</mn><mi>I</mi></mrow></math>-k <strong>edozeinekin</strong> konmutatzen duenez, Newton-en binomioa aplika daiteke —eta <strong>hiru gaitan eteten</strong> da—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mi>n</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><msup><mn>2</mn><mi>n</mi></msup><mi>I</mi><mo>+</mo><mi>n</mi><mo>⋅</mo><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>n</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msup><msup><mi>B</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>B</mi><mn>3</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egiaztapena <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-rako: <math display=\"inline\"><mrow><mn>4</mn><mi>I</mi><mo>+</mo><mn>4</mn><mi>B</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> (bat dator)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Deskonposaketa simetriko / antisimetrikoa"
    },
    {
     "mota": "testua",
     "html": "Matrize oro <strong>modu bakarrean</strong> da simetriko baten eta antisimetriko baten batura (<math display=\"inline\"><mrow><mi>S</mi><mo>⊕</mo><mi>A</mi><mo>=</mo><mi>E</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><mo>=</mo><munder><munder><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><msup><mi>M</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetrikoa</mtext></mrow></munder><mo>+</mo><munder><munder><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><msup><mi>M</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> antisimetrikoa</mtext></mrow></munder><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>M</mi><mi>t</mi></msup><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> batuz eta kenduz ateratzen da; <strong>batura zuzena</strong> da (existentzia eta bakartasuna)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Alderantzizkoa polinomio gisa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>8</mn><mi>I</mi></mrow></math> betetzen bada, determinanterik kalkulatu gabe:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>⋅</mo><mfrac><msup><mi>A</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo>=</mo><mfrac><msup><mi>A</mi><mn>3</mn></msup><mn>8</mn></mfrac><mo>=</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><msup><mi>A</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>−</mo><mi>A</mi><mo>+</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>I</mi><mo>+</mo><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>9</mn><mi>I</mi></mrow></math> (kuboen batura, <math display=\"inline\"><mi>I</mi></math>-k konmutatzen duelako). Orokorrago, <math display=\"inline\"><mrow><mn>3</mn><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>A</mi><mo>−</mo><mi>α</mi><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>α</mi><mo>≠</mo><mn>0</mn></mrow></math>)-tik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>A</mi><mo>+</mo><mn>7</mn><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>A</mi><mo>+</mo><mn>7</mn><mi>I</mi></mrow><mi>α</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Matrize batek <strong>termino aske ez-nuluko</strong> ekuazio polinomiko bat betetzen badu, bere alderantzizkoa\n  <strong>bere polinomio</strong> bat da (Cayley–Hamiltonen aurrerapena).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0031</code>, 60-61 orriak; &quot;ÁLGEBRA NEWTON&quot;). Lau ariketa: <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math> <strong>Newton-en binomioz</strong> (<math display=\"inline\"><mi>B</mi></math> nilpotentea, hiru gaitan eteten), <math display=\"inline\"><mrow><mi>S</mi><mo>⊕</mo><mi>A</mi></mrow></math> <strong>deskonposaketa</strong>, eta <strong>alderantzizkoa polinomio gisa</strong> (<math display=\"inline\"><mrow><msup><mi>A</mi><mn>3</mn></msup><mo>=</mo><mn>8</mn><mi>I</mi></mrow></math> eta <math display=\"inline\"><mrow><mn>3</mn><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mn>7</mn><mi>A</mi><mo>−</mo><mi>α</mi><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><msup><mi>A</mi><mi>n</mi></msup></math> formula <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>-rako egiaztatua. Hemezortzi emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p060.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p062_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; Cayley-Hamilton, simetria eta produktua, triangeluazioa matrize elementalez",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a93",
   "maila": 2,
   "izenburua": "Cayley–Hamilton, simetria eta triangeluazioa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aurreko unitatearen jarraipena: alderantzizkoa <strong>Cayley–Hamiltonen</strong> bidez, simetriaren <strong>tranpa</strong> biderketan, eta <strong>triangeluazioa matrize elementalez</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Alderantzizkoa Cayley–Hamiltonez"
    },
    {
     "mota": "testua",
     "html": "Teoremak dio matrize orok bere <strong>polinomio karakteristikoa deuseztatzen</strong> duela, <math display=\"inline\"><mrow><msub><mi>P</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><msup><mi>A</mi><mn>5</mn></msup><mo>−</mo><mn>4</mn><msup><mi>A</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>-tik:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>3</mn><mi>I</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><msup><mi>A</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Matiz fina: noiz EZ dagoen alderantzizkorik"
    },
    {
     "mota": "testua",
     "html": "Bigarren adibidean <math display=\"inline\"><mrow><msub><mi>P</mi><mi>A</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>5</mn></msup><mo>−</mo><mn>4</mn><msup><mi>λ</mi><mn>3</mn></msup><mo>+</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>4</mn></msup><mo>−</mo><mn>4</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <strong>termino askerik gabe</strong>. Orduan <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>balio propioa</strong> da, eta kateak porrota erakusten du:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> propioa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⇔</mo><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez isomorfismo </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇔</mo><mi>∄</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Bi kasuen kontrastea: lehenean termino askea <math display=\"inline\"><mrow><mn>3</mn><mo>≠</mo><mn>0</mn></mrow></math> (alderantzizkoa dago); bigarrenean <math display=\"inline\"><mn>0</mn></math> (ez dago).\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetria eta biderketa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> simetrikoa bada, <math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> <strong>ere bai</strong>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>A</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>A</mi><mi>t</mi></msup><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>. Baina <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> biak simetrikoak izanik, <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> <strong>ez da beti</strong> simetrikoa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></msup><mo>=</mo><msup><mi>B</mi><mi>t</mi></msup><msup><mi>A</mi><mi>t</mi></msup><mo>=</mo><mi>B</mi><mi>A</mi><mo>≠</mo><mi>A</mi><mi>B</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">oro har; berdin, soilik konmutatzen badute</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Traposatzean <strong>ordena alderantzikatzen</strong> da: hor dago tranpa.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Triangeluazioa matrize elementalez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> diagonalpean <strong>zeroak sortuz</strong>, hiru eragiketa elemental kateatuta (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>1</mn></msub></mrow></math>, gero <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>, gero <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>2</mn></msub></mrow></math>), <strong>goi-triangeluar</strong> geratzen da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Diagonaletik <strong>determinantea</strong> irakur daiteke zuzenean: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>6</mn><mo>=</mo><mi>−</mi><mn>6</mn></mrow></math> (eragiketa\n  horiek ez baitute determinantea aldatzen).\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0032</code>, 62-63 orriak; &quot;ÁLGEBRA NEWTON&quot;). <strong>Cayley–Hamilton</strong> alderantzizkoa lortzeko, eta <strong>matiz fina</strong>: termino askerik ez badago <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> propioa da eta ez dago alderantzizkorik (bi kasuen kontrastea). Gero <strong>simetria</strong> (<math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math> bai, <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> ez oro har) eta <strong>triangeluazioa</strong> hiru elementalez (<math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi></mrow></math>). Hamalau emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p062.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p048_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; matrizeen egitura (espazio bektoriala eta eraztuna, hiru ezaugarriak); fisika-erdia 05erako",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a94",
   "maila": 2,
   "izenburua": "Matrizeen egitura: espazio bektoriala eta eraztuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Matrize-teoriaren <strong>itxiera</strong>: hirugarren matrize elementala, alderantzizkoa elementalen bidez, eta matrizeek osatzen dituzten <strong>bi egiturak</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hirugarren matrize elementala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>r</mi></math> errenkadari <math display=\"inline\"><mi>s</mi></math> errenkada <math display=\"inline\"><mi>k</mi></math>-z biderkatuta gehitzea <math display=\"inline\"><msub><mi>E</mi><mn>3</mn></msub></math>-z ezkerretik biderkatzea da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>3</mn></msub><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn><mo>+</mo><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>6</mn><mo>+</mo><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mo>+</mo><mn>3</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn><mo>+</mo><mn>4</mn><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>10</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>11</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Alderantzizkoa elementalen bidez"
    },
    {
     "mota": "testua",
     "html": "Eragiketa elementalen segida batek <math display=\"inline\"><mi>A</mi></math> identitatera eramaten badu, haien biderkadura <math display=\"inline\"><mi>B</mi></math> <strong>alderantzizkoa</strong> da (Gauss-Jordanen oinarria):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>2</mn></msub><msub><mi>E</mi><mn>1</mn></msub><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zutabe-eragiketak ere matrizeak dira, baina <strong>eskuinetik</strong> biderkatzen dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi egitura: espazio bektoriala eta eraztuna"
    },
    {
     "mota": "testua",
     "html": "Matrizeekin <strong>bi egitura</strong> eraiki daitezke, eta <math display=\"inline\"><mi>⋅</mi></math> ikurrak <strong>bi eragiketa</strong> desberdin izendatzen ditu:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> batuketaz eta <strong>eskalar-biderkaduraz</strong>: <strong>espazio bektoriala</strong> <math display=\"inline\"><mi>K</mi></math> gainean (edozein neurritako matrizeetarako).",
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>+</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> batuketaz eta <strong>matrize-biderkaduraz</strong>: <strong>eraztuna</strong> (matrize karratuetarako soilik, biderkadura barnekoa izan dadin)."
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Eraztuna <strong>unitarioa</strong> (<math display=\"inline\"><msub><mi>I</mi><mi>n</mi></msub></math> dago), <strong>ez-trukakorra</strong> (<math display=\"inline\"><mrow><mi>A</mi><mi>B</mi><mo>≠</mo><mi>B</mi><mi>A</mi></mrow></math>) eta <strong>zero-zatitzaileduna</strong> da.\n  Azken biak dira zenbakien aljebratik bereizten dutenak.\n</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0025</code>, 48-49 orriak; &quot;ÁLGEBRA NEWTON&quot; / &quot;FÍSICA NEWTON&quot;). <strong>Aljebra-erdia</strong> soilik hemen: matrize-egituraren itxiera (elementala, alderantzizkoa, espazio bektoriala eta eraztuna, hiru ezaugarriak). <strong>Eskuineko fisika-blokea</strong> (malguki batez lotutako bi masa; momentu- eta energia-kontserbazioa) newton2 fisikaren <code>05</code> atalera doa, maquetatzean. Hamahiru emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p048.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p076_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; sistema matrize hedatuz eta Hermiteren forma kanonikoa (heina = aldaezin bakarra)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a95",
   "maila": 2,
   "izenburua": "Sistema matrize hedatuz eta Hermiteren forma kanonikoa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema bat <strong>matrize hedatuz</strong> ebatzita (Rouché-Frobenius aplikatua), eta <strong>Hermiteren forma kanonikoa</strong>: heina da baliokidetasunaren <strong>aldaezin bakarra</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema, matrize hedatuz"
    },
    {
     "mota": "testua",
     "html": "Eragiketa elementalez triangeluatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"media/formulak/c49e2fadf8481bc6.svg\" alt=\"(A|B) = mat(augment: #3, 1, -5, -5, -126; 1, -5, -1, 10; 1, -1, 1, 42) ~ mat(augment: #3, 1, -5, -5, -126; 0, 4, 4, 136; 0, 0, 2, 32).\" style=\"width:26.493em;height:4.526em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mo>=</mo></mrow></math> ezezagun kopurua <math display=\"inline\"><mo>→</mo></math> <strong>bateragarri determinatua</strong>. Soluzioa (jatorrizko sisteman egiaztatua): <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>16</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>18</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>44</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hermiteren forma kanonikoa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>×</mo><mi>m</mi></mrow></math> tamainako eta <math display=\"inline\"><mi>r</mi></math> heineko matrize ororentzat, <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> <strong>alderanzgarriak</strong> daude honela:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mi>A</mi><mi>Q</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mi>r</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> GL</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ondorio sakona</strong>: tamaina eta heina bera duten bi matrizek <strong>forma kanoniko bera</strong> dute, beraz <strong>baliokideak</strong> dira. Heina da baliokidetasun-klasea determinatzen duen <strong>aldaezin bakarra</strong>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Frogapena: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mi>A</mi><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mi>H</mi><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mi>B</mi><msub><mi>Q</mi><mn>2</mn></msub></mrow></math> bada, orduan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msubsup><mi>P</mi><mn>1</mn><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><msub><mi>P</mi><mn>2</mn></msub><mi>B</mi><msub><mi>Q</mi><mn>2</mn></msub><msubsup><mi>Q</mi><mn>1</mn><mrow><mi>−</mi><mn>1</mn></mrow></msubsup><mo>=</mo><mi>P</mi><mi>B</mi><mi>Q</mi></mrow></math>\n  (<math display=\"inline\"><mrow><mi>P</mi><mo>,</mo><mi>Q</mi></mrow></math> alderanzgarriak) <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mi>A</mi></math> eta <math display=\"inline\"><mi>B</mi></math> baliokideak.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: heina eragiketa elementalez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>8</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>13</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: lehen pibota <math display=\"inline\"><mn>0</mn></math> denez (&quot;zero honek gogaitzen du&quot;), errenkadak trukatu eta triangeluatu <math display=\"inline\"><mo>→</mo></math> hirugarren errenkada anulatu <math display=\"inline\"><mo>→</mo></math> <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0039</code>, 76-77 orriak; &quot;ÁLGEBRA NEWTON&quot;). Sistema <strong>matrize hedatuz</strong> (soluzioa jatorrizko sisteman egiaztatua: <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>16</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>18</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>44</mn></mrow></math>) eta <strong>Hermiteren forma kanonikoa</strong> (heina = aldaezin bakarra). ⚠ Post-it batek (&quot;14.1&quot;) ezkerreko adin-problemaren planteamendua estaltzen du; tarteko matrizeetan irakurketa-diskrepantziak daude (<math display=\"inline\"><mn>32</mn></math>/<math display=\"inline\"><mn>36</mn></math>), baina <strong>azken emaitzak</strong> bide independentez egiaztatuak. Konfiantza ertaina. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p076.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p078_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; P eta Q elementalen biderkadura gisa, eta sistema parametrikoa heinez",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a96",
   "maila": 2,
   "izenburua": "<math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> elementalen biderkadura gisa; sistema parametrikoa heinez",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma normalaren <strong>jarraipena</strong>: <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> matrize elementalen <strong>biderkadura gisa</strong>, eta sistema parametriko bat <strong>heinez</strong> ebatzita."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math>, elementalen biderkadura"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math> forma kanonikora eramateko, <strong>errenkada-eragiketek</strong> ezkerretik biderkatzen dute (biderkadura <math display=\"inline\"><mi>P</mi></math>), eta <strong>zutabe-eragiketek</strong> eskuinetik (biderkadura <math display=\"inline\"><mi>Q</mi></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munder><munder><mrow><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub></mrow><mo accent=\"true\">⏟</mo></munder><mi>P</mi></munder><mspace width=\"0.222em\"></mspace><mi>A</mi><mspace width=\"0.222em\"></mspace><munder><munder><mrow><msub><mi>Q</mi><mn>1</mn></msub><mi>…</mi><msub><mi>Q</mi><mi>s</mi></msub></mrow><mo accent=\"true\">⏟</mo></munder><mi>Q</mi></munder><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidean <math display=\"inline\"><mi>P</mi></math> <strong>lau</strong> elementalez osatzen da (errenkadak) eta <math display=\"inline\"><mi>Q</mi></math> <strong>zortziz</strong> (zutabeak) —«8 matrize!»—. Errenkada/zutabe bereizketa da <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> <math display=\"inline\"><mi>A</mi></math>-ren <strong>alde banatan</strong> geratzearen arrazoia."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema parametrikoa heinez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math> sistema batean ekuazio bat <strong>besteen konbinazio lineala</strong> da (<math display=\"inline\"><mrow><mn>4</mn><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>), beraz <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>: <strong>ezezagun bat sobera</strong>, <strong>bateragarri indeterminatua</strong>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Estrategia: badakigunez ezezagun bat <strong>ezin dela askatu</strong>, ez dugu ezabatzen —<strong>parametro</strong> gisa uzten\n  dugu—. <math display=\"inline\"><mi>t</mi></math> bigarren atalera pasatu eta gainerako hiru ekuazioak <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math>-tan ebatzi, <math display=\"inline\"><mi>t</mi></math>-ren menpe.\n</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Cramer ez</strong> dagokio hemen: erregelak matrize karratua eta determinante ez-nulukoa behar ditu (sistema determinatua), eta hemen <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math> da. Parametro-metodoa da egokia —tresna <strong>sistema motaren arabera</strong> aukeratzea—."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0040</code>, 78-79 orriak; &quot;ÁLGEBRA NEWTON&quot;). <math display=\"inline\"><mi>P</mi></math> eta <math display=\"inline\"><mi>Q</mi></math> <strong>elementalen biderkadura</strong> (errenkadak ezkerretik, zutabeak eskuinetik; <math display=\"inline\"><mrow><mi>P</mi><mi>A</mi><mi>Q</mi><mo>=</mo><mi>H</mi></mrow></math>), eta <strong>sistema parametrikoa heinez</strong> (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn><mo>&lt;</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mi>t</mi></math> parametro, Cramer ez dagokio). Orrialde oso <strong>trinkoa</strong>: tarteko matrize askoren sarrerak irakurketa partzialekoak dira, baina <strong>metodoa eta ondorioak</strong> egiaztatuak. Hamalau emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p078.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p080_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; alderantzizkoa Gauss-Jordanez, Cramer parametroekin, determinanteen hasiera",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a97",
   "maila": 2,
   "izenburua": "Alderantzizkoa Gauss-Jordanez, Cramer parametroekin, determinanteen hasiera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Alderantzizkoa <strong>Gauss-Jordanez</strong>, aurreko sistema parametrikoa <strong>Cramer-ez ixten</strong>, eta <strong>determinanteak</strong> aplikazio gisa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Alderantzizkoaren existentzia eta Gauss-Jordan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math>-k alderantzizkoa du <strong>soilik</strong> karratua eta <strong>hein maximokoa</strong> bada (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>n</mi></mrow></math>; isomorfismoa da). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>I</mi></mrow></math> matrizeari errenkada-eragiketak eginez <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> lortu arte:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mo>=</mo><msub><mi>I</mi><mi>n</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mi>p</mi></msub><mi>…</mi><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Adibidez, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren alderantzizkoa <math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da (egiaztatua: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mi>I</mi></mrow></math>). <strong>Bi bide</strong>: errenkadaz (<math display=\"inline\"><mrow><mi>P</mi><mi>A</mi><mo>=</mo><mi>I</mi><mo>⇒</mo><mi>P</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>) eta zutabez (<math display=\"inline\"><mrow><mi>A</mi><mi>Q</mi><mo>=</mo><mi>I</mi><mo>⇒</mo><mi>Q</mi><mo>=</mo><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cramer parametroekin"
    },
    {
     "mota": "testua",
     "html": "Aurreko sistema (<math display=\"inline\"><mrow><mi>p</mi><mn>.79</mn></mrow></math>) <strong>ixten</strong> da: <math display=\"inline\"><mi>t</mi></math> eta <math display=\"inline\"><mi>z</mi></math> <strong>parametro</strong> utzita, geratzen den <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> sistema <strong>Cramer-ez</strong> ebazten da —orain BAI dagokio, determinantea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>≠</mo><mn>0</mn></mrow></math> baita—:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mn>2</mn><mi>t</mi><mo>−</mo><mi>z</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>,</mo><mi>z</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzioak <math display=\"inline\"><mrow><mi>t</mi><mo>,</mo><mi>z</mi></mrow></math>-ren menpe geratzen dira: <strong>soluzio-familia bat</strong> (sistema indeterminatua)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Puntu didaktikoa: <math display=\"inline\"><mrow><mi>p</mi><mn>.79</mn></mrow></math>-an Cramer <strong>baztertu</strong> zen (<math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>3</mn></mrow></math>); hemen, parte determinatura\n  murriztuta, <strong>onartzen</strong> du. Tresna sistemaren <strong>zatiaren</strong> arabera.\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Determinanteak: definizioa"
    },
    {
     "mota": "testua",
     "html": "Gai berria: determinantea <strong><math display=\"inline\"><mi>n</mi></math> bektoretatik gorputzera</strong> doan aplikazio gisa:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>:</mo><msup><mi>E</mi><mi>n</mi></msup><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>E</mi><mo>=</mo><mi>n</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Forma <strong>multilineal alternatua</strong>: definizio modernoa, kalkulu-erregela baino orokorragoa (<math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mi mathvariant=\"double-struck\">ℂ</mi></mrow></math> edo <math display=\"inline\"><mi mathvariant=\"double-struck\">ℚ</mi></math>)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0041</code>, 80-81 orriak; &quot;ÁLGEBRA NEWTON&quot;; bi data: 12/10 eta 12/12). <strong>Alderantzizkoa Gauss-Jordanez</strong> (existentzia: karratua + hein maximoa; bi bide), <strong>Cramer parametroekin</strong> (aurreko sistema ixten, orain <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><mn>2</mn></mrow></math> determinatua), eta <strong>determinanteen hasiera</strong> (aplikazio <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>:</mo><msup><mi>E</mi><mi>n</mi></msup><mo>→</mo><mi>K</mi></mrow></math>). Adibidearen alderantzizkoa egiaztatua (<math display=\"inline\"><mrow><msup><mi>A</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; eskuzko hirugarren errenkada desberdina, zuzendua). Hamalau emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_alg_p080.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p082_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; determinantea forma multilineal alternatu gisa, 2x2 formula axiometatik deduzitua",
     "hizkuntza": "eu"
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_newton2_alg_p026_mk.typ",
     "xehetasuna": "transkripzio literala, maquetazioa eta egiaztapena; Jordan-en forma posibleak eta hiru mailako katea (orri mixtoaren aljebra-erdia; fisika 05n)",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a98",
   "maila": 2,
   "izenburua": "Jordan-en forma posibleak eta hiru mailako katea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<code>NEWTON2_0008</code>n (14. orria) <strong>zabalik gelditutako galdera</strong> ixten du: polinomio karakteristiko bat emanda, zein dira Jordan-en forma kanoniko <strong>posibleak</strong>?"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balio propioak eta multiplizitateak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>χ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math> izanik (<math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>≤</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>3</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> denez, balio <strong>sinpleek</strong> bloke bakarra behartzen dute; <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>-k <strong>hiru forma</strong> posible ematen ditu (multiplizitate geometrikoaren arabera)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hiru kasuak <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren arabera"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">\n  Bloke kopurua <math display=\"inline\"><mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta nukleo-kateak multiplizitatera arte hazten dira:\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: bloke bakarra <math display=\"inline\"><mrow><msub><mi>J</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; nukleoak <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (hirugarren berreturaraino).\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>: bi bloke (<math display=\"inline\"><mrow><mn>2</mn><mo>+</mo><mn>1</mn></mrow></math>); nukleoak <math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> (bigarren berreturaraino).\n  - <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn></mrow></math>: hiru bloke <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><mn>1</mn></mrow></math> (diagonalizagarria; lehen berretura aski).\n</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Hiru mailako katea (koadernoko luzeena)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math> balio propioaren katea, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> behin eta berriz aplikatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>∈</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>−</mo><msup><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo>+</mo><mn>3</mn><mtext mathvariant=\"normal\">Id</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>4</mn></msub><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren oinarria, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>5</mn></msub><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ena; beraz <math display=\"inline\"><mrow><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>5</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> (bost bektore <math display=\"inline\"><mo>=</mo></math> dimentsioa)."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>NEWTON2_0014</code>, 26-27 orriak; &quot;FÍSICA NEWTON&quot; / &quot;ÁLGEBRA NEWTON&quot;). <strong>Aljebra-erdia</strong> (27. orria): <code>NEWTON2_0008</code>ko galdera ixten —Jordan-en <strong>hiru forma posibleak</strong> <math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>+</mo><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math>-rako, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>—, eta <strong>hiru mailako katea</strong> (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>→</mo><msub><mi>v</mi><mn>2</mn></msub><mo>→</mo><msub><mi>v</mi><mn>3</mn></msub></mrow></math>, koadernoko luzeena). <strong>Ezkerreko fisika-blokea</strong> (energiaren kontserbazioa, jaurtigai lehergarria) <code>05</code> atalean dago. Hamar emaitza zuzenak. Zuzenketarik ez. Ikus <code>koadernoa_newton2_fis_p026.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "_historico/espazio-ontzia/diario landeta 2 ene 2013, IMG_2026_07_28_01_42_30S.jpg — IMG_2026_07_28_01_43_04S.jpg (ezker orriak)",
     "xehetasuna": "LANDETA2 koadernoa, 12.-15., 18.-22. orrialdeak: aplikazio linealen aurreirudiak, base-aldaketa, 5×5 determinantea, azpiespazio suplementario eta inbarianteak, diagonalizazio osoa (22. orrialdeko rotulua ALGEBRA NEWTON da) — v3 transkripzio egiaztatuak",
     "hizkuntza": "es"
    }
   ]
  }
 ]
};
