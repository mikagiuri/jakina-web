/* JAKINA · kapitulua «B6.5 - Ez-linealak eta egonkortasuna (8. gaia)» (03mm_03ezlinealak), desde edicion2/kapituluak/03mm_03ezlinealak/03mm_03ezlinealak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_03ezlinealak"] = {
 "gakoa": "03mm_03ezlinealak",
 "titulua": "JAKINA - B6 - Metodo matematikoak - 5/9",
 "azala": "B6.5 - Ez-linealak eta egonkortasuna (8. gaia)",
 "azpititulua": "I. aroa - Tresnak",
 "iturburua": "kapituluak/03mm_03ezlinealak/03mm_03ezlinealak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Egonkortasunaren teoria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-epigrafea\"><em>Prediction is very difficult,<br>especially of the future.</em><br><span class=\"j-smallcaps\">Niels Bohr</span></span>"
    },
    {
     "mota": "testua",
     "html": "Ekuazio ez-linealak<span class=\"j-oin\">[Norbaitek seinalatu duen bezala, ekuazio ez-linealez hitz egitea elefanteak ez diren animaliez hitz egitea bezain engainagarria izan daiteke. Animalia gehienak elefanteak ez diren bezala, lineal izatea salbuespena da. Aitortu behar da, hala ere, fisikan oso salbuespen garrantzitsua dela, non oinarrizko ekuazio asko, baina ez denak, linealak baitira eta non askotan —ia errutinaz— hurbilketa linealetara jotzen baita.]</span> ebazteko zailtasunak kasu askotan metodo hurbilduetara jotzea eragiten du, 7. kapituluan aztertu ditugunak bezalakoetara. Beste alternatiba bat dago sistemaren soluzioei buruzko informazio kualitatibo jakin bat nahikoa denean. Adibidez, askotan aski da sistemaren bilakaera <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> limitean ezagutzea, bereziki portaera asintotikoa iragankor labur baten ondoren azkar lortzen dela badakigu. Henri Poincarék<span class=\"j-oin\">[<strong>Jules Henri Poincaré</strong> (1854-04-29, Nancy, Frantzia; 1912-07-17, Paris). Matematikaren ia adar guztietan lan egin zuen, geometria eta topologia aljebraikoak, aldagai konplexua, zenbakien teoria eta ekuazio diferentzialak barne. Elektrizitatean, telegrafian, optikan, kapilaritatean, elastikotasunean, potentzialaren teorian eta termodinamikan ere interesa izan zuen. Einsteinen erlatibitate bereziaren zenbait alderdi aurreratzen zituzten emaitzak argitaratu zituen. Mekanika zerutiarrean bere izena banaezina da hiru gorputzen problematik eta orbita planetarioetatik, non lehen aldiz sistema determinista batean higidura kaotikoaren aukera hartu baitzuen kontuan, nahiz eta bere lanaren alderdi honek merezi zuen interesa ez zuen jaso hirurogei eta hirurogeita hamarreko hamarkadetara arte, arloa berpiztu zenean eta «kaos determinista» izena asmatu zenean.]</span> 1880 inguruan sistema dinamikoen fase-espazioak kualitatiboki sailkatzeko programa planteatu zuen, baina dimentsio bat eta biko kasuetan soilik egin ahal izan zuen, eta dimentsioak planoarena gainditu bezain laster posible diren portaera dinamikoen aniztasun harrigarriaren lehen elementuak aurkitu zituen lehena izan zen. Azken hogei urteetan <strong>zientzia ez-lineal</strong> deitu izan denak izan duen garapen handiak <strong>dinamika kualitatiboaren</strong> interesa eta zailtasuna frogatzen ditu, zeinaren «aita» eztabaidaezina Poincaré baita."
    },
    {
     "mota": "testua",
     "html": "Kapitulu honetan teoria kualitatiboaren kontzepturik sinple eta garrantzitsuenetako bat aztertuko dugu: soluzio berezien (bereziki oreka-puntuen, mekanikan ezagutzak dituen irakurleari oso ezagunak zaizkionak) egonkortasuna hasierako baldintzen aldaketa txikien aurrean. <strong>Kaos determinista</strong>ri buruzko atal labur bat —baina estimulagarria izango delakoan— ere sartu da. Interesa duen irakurleak 321. orrialdeko bibliografian alderdi honetan sakontzea ahalbidetuko dioten erreferentzia onak aurki ditzake."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Egonkortasunaren kontzeptua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Har dezagun 79. orrialdean definitutakoak bezalako sistema dinamiko bat, <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta haren soluzioetako bat <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>: <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Sistema dinamiko batez jakitea interesatu daitekeen informazio kualitatiboaren artean, haren soluzio nabarmenen eta <strong>multzo aldaezinen</strong> existentzia eta kokapena daude. Multzo bat aldaezina da, bertan puntu bat duen edozein soluzio erabat barneratuta dagoen propietatea badu. Adibiderik sinpleena <strong>oreka-puntu</strong> bat da (<strong>puntu egonkor</strong>, <strong>finko</strong>, <strong>kritiko</strong> edo <strong>geldiuneko</strong> ere deitua), zeinak berez soluzio oso bat osatzen baitu <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup></mrow></math>  =  konstante: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒇</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rekin</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Bereziki interesatuko zaigu, baina ez soilik, puntu finko <strong>isolatu</strong> baten kasua, hau da, haren ingurune batean beste puntu finkorik ez dagoena. Aztertuko ditugun multzo aldaezinen beste adibide batzuk soluzio periodikoak dira, bereziki isolatuak (<strong>muga-zikloak</strong>), eta <strong>erakarle kaotikoak</strong>, zeinek normalean orbita periodiko ezegonkor kopuru infinitua biltzen baitute."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu (a)  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> eta (b)  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> sistema dinamikoen oreka-puntuak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Edozein sistema fisikoren hasierako baldintzak beti gutxi gorabehera ezagutzen direnez, galdera garrantzitsu bat da zer gertatzen den haiek apur bat aldatzen badira interesatzen zaigun soluzio nabarmenarekin zehazki bat ez datozen beste soluzio batzuk lortzeko. Soluzio berria beti erreferentziakoaren inguruan mantentzen bada, hura egonkorra dela esaten da eta, gainera, hartara hurbiltzen bada, asintotikoki egonkorra. Aitzitik, soluzio perturbatu batzuk edo guztiak erreferentziakoaren ingurunetik ihes egiten badute, hura txikia izanik ere, soluzio berezia ezegonkorra da eta normalean ez da fisikoki gauzagarria, agian zirkunstantzia berezietan izan ezik. Har dezagun penduluaren adibidea. Bi oreka-posizio matematiko daude: bertikalak. Posiziorik baxuenean dagoenean, perturbazio txiki batek, hasierako baldintzak apur bat aldatzen dituenak, ez du lortzen sistema puntu horretatik asko urruntzea: bere inguruan oszilatzen du besterik gabe eta puntua (energia potentzialaren minimo bati dagokiona) egonkorra da. Gainera, marruskadura badago, energia mekanikoa modu monotonoan txikitzen da eta pendulua oreka-posiziorantz jotzen du, asintotikoki egonkorra dena. Posiziorik altuena, aitzitik, energia potentzialaren maximo bati dagokio eta edozein perturbaziok, txikia izanik ere, pendulua handik urruntzea eragiten du: oreka-puntu ezegonkor bat da."
    },
    {
     "mota": "testua",
     "html": "Zehatzago, <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>  <strong>Liapunov-en arabera egonkorra</strong><span class=\"j-oin\">[<strong>Aleksandr Mikhailovich Liapunov</strong> (1857-06-16, Yaroslavl, Errusia; 1918-11-03, Odesa). Ekuazio diferentzialetan, potentzialaren teorian, probabilitateetan eta hurbilketetan lan egin zuen. Bereziki gogoratzen da sistema mekanikoetan, hidrodinamikan eta ekuazio diferentzialetan orekaren eta higiduraren egonkortasunari buruzko bere azterketengatik, non metodo eta emaitza berriak sartu baitzituen, bere izena daramaten funtzioak barne.]</span>  (edo egonkorra, laburtzeko) dela esaten da <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> ororentzat <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> bat existitzen bada non hasierako baldintza <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> betetzen duen beste edozein soluzio <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math> betetzen baitu <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> ororentzat. Bestela, hau da, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bat existitzen bada non nahi bezain <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> txikirako gutxienez soluzio bat baitago <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>δ</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mi>ε</mi></mrow></math> betetzen dituena <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> baterako, soluzioa <strong>ezegonkorra</strong> dela esaten da."
    },
    {
     "mota": "irudia",
     "oina": "Oreka-puntua (a) egonkorra, (b) asintotikoki egonkorra, (c) ezegonkorra",
     "src": "media/irudiak/894d219d272cf0f0.svg",
     "zabalera": 455
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> soluzioa <strong>asintotikoki egonkorra</strong> dela esaten da egonkorra bada eta <math display=\"inline\"><mrow><msup><mi>δ</mi><mo>′</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> bat existitzen bada non <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><msup><mi>δ</mi><mo>′</mo></msup></mrow></math> bada orduan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math></span>. <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>  <strong>erakarle</strong> bat dela ere esaten da, bere inguruko soluzioak erakartzen baititu. Oreka-puntu bat asintotikoki egonkorra bada eta, izan ere, soluzio guztiak (eta ez ingurune batekoak soilik)  <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>-rantz jotzen badute, <strong>eskala handiko egonkortasunaz</strong> hitz egiten da."
    },
    {
     "mota": "testua",
     "html": "Adibidez, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>-ren soluzio orokorra <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> da, eta hala <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasurako soluzio guztiak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-rantz jotzen dute, zeina, beraz, egonkorra, asintotikoki egonkorra eta eskala handian egonkorra baita. <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> kasurako soluzio guztiak, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> izan ezik jakina, infiniturantz jotzen dute, eta beraz jatorria ezegonkorra da. <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> kasurako, puntu guztiak oreka egonkorrekoak dira, baina ez asintotikoki egonkorrak. Adibide honetan bezala, parametro bat aldatzean oreka-puntuen (edo beste mota bateko multzo aldaezinen) izaera (edo kopurua) aldatzen denean, <strong>bifurkazio</strong> bat gertatu dela esaten da. Adibide honetan <strong>bifurkazio-parametroa</strong>  <math display=\"inline\"><mi>a</mi></math> da."
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>-ren bifurkazio-diagrama",
     "src": "media/irudiak/46460f71001a2022.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<strong>bifurkazio-diagrama</strong> 8.2 irudian erakusten da, non oreka-puntuaren posizioa (kasu honetan beti jatorria) bifurkazio-parametroaren arabera erakusten baita, lerro jarraitua egonkortasuna adierazteko eta lerro etena ezegonkortasuna adierazteko erabiliz. <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> eremu bektorialaren magnitudea eta norabidea (jatorrirantz edo infiniturantz) ere adierazten dira. Azken hau jatorriaren egonkortasuna era grafikoan azaltzeko erabil daiteke: oreka-puntutik gertu dauden soluzioen higiduraren noranzkoa eremu bektorialak adierazitakoa izango denez, erraz ikusten da perturbazio txikiak handitu ala txikitu egiten diren, hau da, oreka egonkorra ala ezegonkorra den. Kontuan izan aipatutako norabidea hain zuzen ere oreka-puntuetan (bi ardatzetan, kasu honetan) alderantzikatzen dela, deribatuaren zeinua aldatu egiten baita ezeztatzen denean, hau da, puntu kritikoetan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili lehenik metodo grafikoa eta gero soluzio orokorra ekuazioaren oreka-puntuen bifurkazio-diagrama lortzeko <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Bi dimentsioko sistema dinamiko autonomoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kapitulu honen zati handi batean bi dimentsioko sistema dinamiko autonomo bat hartzera mugatuko gara: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> 4.1.1 atalean seinalatu zen bezala, sistema dinamikoaren soluzio orokorrak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> espazioan kongruentzia bat definitzen du; baina, autonomoa denez, haren proiekzioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> fase-espazioaren gainean kongruentzia berri bat da, eta hala soluzio baten <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> proiekzioa <strong>fase-ibilbide</strong> edo, batzuetan, <strong>fase-orbita</strong> deitzen den kurba parametriko bat da."
    },
    {
     "mota": "irudia",
     "oina": "Sistema autonomoaren soluzio orokorra eta haren proiekzioa fase-espazioan",
     "src": "media/irudiak/a791bca1fc020212.svg",
     "zabalera": 254
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorraren proiekzioa fase-espazioan kongruentzia bat dela ikusteko, hau da, fase-ibilbideek elkar mozten ez dutela, aski da ikustea, fase-ibilbideen <math display=\"inline\"><mi>t</mi></math>-rekiko mendekotasuna interesatzen ez bazaigu, baizik eta haien egitura geometrikoa soilik, kurba horien <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ekuazioa beren <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ekuazioetatik <math display=\"inline\"><mi>t</mi></math> parametroa ezabatuz besterik gabe lortzen dela, zeina (8.5)–(8.6) familiaren ekuazio diferentzialetan ere egin baitaiteke haiek zatituz besterik gabe: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Azken ekuazio honen existentziaren eta bakartasunaren teoremaren ondorioz, sistemaren soluzio orokorraren proiekzioa fase-espazioaren gainean ere kongruentzia bat da (erregulartasun-baldintza egokiak betetzen diren eremu batean). Fase-ibilbideen (8.7) ekuazioa forma kanonikoan idazten badugu, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>P</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>Q</mi></mfrac><mo>,</mo></mrow></math> haiek <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> abiadura-eremuaren korronte-lerro gisa interpreta daitezke, haiekiko ukitzaile dena, eta <strong>fluxu</strong> terminoaren erabilera baieztatzen du fase-planoan sistemaren bilakaera ematen digun aplikazioa deskribatzeko."
    },
    {
     "mota": "testua",
     "html": "Soluzio batean zehar fase-ibilbidea aldatzen ez denez, fase-ibilbideen ekuazioa sistema dinamikoaren higiduraren konstante bat da eta, gainera, ez dago <math display=\"inline\"><mi>t</mi></math> aldagai askearen menpe. Eta alderantziz, 4.2.2 atalean ikusitakoaren arabera, aldagai askearen menpe ez dagoen lehen integral batek <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> ekuazioko sistema autonomoen fase-ibilbideen ekuazioa ematen digu. Beraz, hemen aztertutako sistemen kasuan, fase-ibilbideak kalkulatzea <math display=\"inline\"><mi>t</mi></math>-ren menpe ez dagoen higiduraren konstante bat aurkitzearen baliokidea da."
    },
    {
     "mota": "irudia",
     "oina": "(8.9)ren soluzio bat eta haren proiekzioa fase-espazioan",
     "src": "media/irudiak/ca219445790536ab.svg",
     "zabalera": 212
    },
    {
     "mota": "testua",
     "html": "80. orrialdean ikusi genuen bezala, sistema dinamikoak <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math> soluzio orokor gisa (kasu honetan soluzio guztiak biltzen dituena, ekuazioa lineala izateagatik) <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> du, zeina <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> espazioan <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math> pausoko eta <math display=\"inline\"><mi>R</mi></math> erradioko helizeen kongruentzia baita, 8.4 irudian haren elementu batez adierazia. Ekuazio autonomoekin beti gertatzen den bezala, lekualdaketa-simetria dago eta integrazio-konstante bat aukera daiteke, <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> kasu honetan, aldagai askearen jatorria soilik adierazten duena: <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> aldatzea helizea <math display=\"inline\"><mi>t</mi></math> norabidean lekualdatzearen baliokidea da, baina ez du fase-espazioaren gaineko proiekzioa aldatzen, zeina <math display=\"inline\"><mi>R</mi></math> erradioko zirkunferentzia izaten jarraitzen baitu, soluzio orokorrean (8.10)  <math display=\"inline\"><mi>t</mi></math> ezabatzean lortzen dena, edo ibilbideen ekuazioa ebatziz: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math> Bi metodoez lortzen den fase-ibilbideen kongruentzia <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> lehen integralak deskribatutako zirkunferentzien familia da, zeina (8.9) sistematik ikuskapenez lor zitekeen, lehen ekuazioa <math display=\"inline\"><mi>x</mi></math>-rekin, bigarrena <math display=\"inline\"><mi>y</mi></math>-rekin biderkatuz eta emaitzak batuz besterik gabe."
    },
    {
     "mota": "testua",
     "html": "Beti gogoan izango dugun adibide bat dimentsio bakarreko sistema mekaniko batena izango da, non Newtonen bigarren legea posizioaren eta abiaduraren menpe dagoen indar erresultante baten<span class=\"j-oin\">[Notazioa errazteko kapitulu osoan zehar masa-unitatea <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> izan dadin aukeratzen dugu aztertutako sistema mekaniko guztietan. (Edo, nahiago bada, masa-unitateko indarra eta energia erabiltzen ditugu).]</span> higidura-ekuazioa baita, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> eta kapitulu honen notazioan —abiadurari <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> deituz— honela idatziko duguna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Hala oszilatzaile harmoniko moteldua, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mi>γ</mi><mi>y</mi></mrow></math> izango da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu oszilatzaile harmonikoa (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>). Aurkitu fase-ibilbideen ekuazioa. Zein da lehen integral horren esanahi fisikoa? Marraztu fase-espazioa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sistema hamiltondarra bada, Hamilton-en funtzio<span class=\"j-oin\">[<strong>William Rowan Hamilton</strong> (1805-08-04, Dublin, Irlanda; 1865-09-02, Dublin). Optikari eta astronomiari egindako ekarpenez gain, fisikan bere izena mekanikaren hiru formulaziori lotuta dago: Hamilton-en printzipioa, ekuazio kanonikoak eta Hamilton-Jacobi formulazioa. Matematikan bereziki gogoratzen da lehen aljebra ez-konmutatiboa aztertu izanagatik: koaternioiak, zeinak zenbaki konplexuen luzapena baitira, hauek errealen luzapena diren bezala.]</span> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bat egongo da —<math display=\"inline\"><mi>y</mi></math> momentu kanonikoa deituz— non <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Kasu partikularrago bat, baina ez gutxiago garrantzitsua, dimentsio bakarreko indar-eremu batena da <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non indarra beti potentzial batetik eratortzen baita, <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> delarik</mtext></mrow><mo>,</mo></mrow></math> eta sistema dinamiko gisa honela idazten dena: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> hamiltondarra onartzen duena. Kapitulu honetan sistema dinamikoen teoriaren ohiturari jarraituko diogunez, fase-espazioaren area (edo bolumena, hipervolumena, etab.) gordetzen duenari kontserbatibo deitzeko, (8.17) motakoek, mekanikan kontserbatibo deitzen direnak, hemen <strong>sistema mekaniko kontserbatibo</strong> izen esplizitua hartuko dute. Jakina, hemen erabiliko dugun eta hurrengo atalean aztertzen den zentzuan ere kontserbatiboak dira."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Idatzi pendulu matematikoaren ekuazioa, <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> sistema dinamikoen notazioan. Zein da hamiltondarra?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hamiltondarra al da (8.9) sistema? Zein sistema fisiko adieraz dezake?"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Sistema dinamiko kontserbatiboak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fase-espazioaren arearen bilakaera aztertzeko, ikusiko dugu nola aldatzen den fluxuan zehar 8.5 irudian erakusten den <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eremu bat. Beste «une» generiko <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> batean <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntua <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-n egongo da, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak sistemaren soluzioak izanik, <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> hasierako baldintzak betetzen dituztenak <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> unean <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eremuko puntuak <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-koetara joan dira, zeinaren area baita"
    },
    {
     "mota": "irudia",
     "oina": "Fase-espazioaren eremu baten bilakaera",
     "src": "media/irudiak/ca23e39add3caf6c.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><msup><mi>x</mi><mo>′</mo></msup><mi>d</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> non aldagai-aldaketa bat egin baitugu integrala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> koordenatu konstanteen arabera adierazteko: hala <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math>-rekiko mendekotasuna integrazio-eremutik integrakizunera pasatzen da, non errazagoa baita deribatzea area nola aldatzen den ikusteko: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> integrakizuna jakobiarraren deribatua baita: <math display=\"block\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>,</mo></mrow></math> zeina erraz kalkula baitaiteke (8.19) eta (8.20)  erabiliz: <math display=\"block\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math> Ikusten dugu, beraz, integrakizuna <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> eremu bektorialaren dibergentzia dela."
    },
    {
     "mota": "testua",
     "html": "(8.5)–(8.6) sistema dinamikoa <strong>kontserbatiboa</strong> dela esango dugu fase-espazioaren area aldaezin mantentzen badu, hau da, dibergentzia nulua bada: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Liouvilleren teoremak ziurtatzen du sistema hamiltondarrak kontserbatiboak direla (edozein dimentsiotan, hemen planoa soilik hartzen badugu kontuan ere), Hamilton-en ekuazio kanonikoen (8.14) ondorioz, baitugu <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Mekanikan sistema mekaniko kontserbatibo deitzen direnak hamiltondarrak dira eta, beraz, fase-espazioaren area gordetzen dute."
    },
    {
     "mota": "testua",
     "html": "Dibergentzia negatiboa bada, fase-espazioaren area modu monotonoan txikitzen da eta sistemari <strong>disipatibo</strong> deitzen zaio."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Kalkulatu oszilatzaile harmoniko motelduari lotutako eremu bektorialaren dibergentzia, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. Kontserbatiboa al da?"
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Sistema kuasilinealak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Suposatuko dugu (8.5)–(8.6) sistema dinamikoak oreka-puntu isolatu bat duela, zeina, orokortasunik galdu gabe, jatorrira lekualda baitezakegu: <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Puntu finko horren inguruan Taylor-en seriean garatzen badugu eta notazioa erabiltzen badugu <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo></mrow></math> sistema dinamikoa honela idazten da <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> non <math display=\"inline\"><mi>F</mi></math> eta <math display=\"inline\"><mi>G</mi></math>-k lehen ordenaz goragoko gaiak adierazten baitituzte. Oro har, sistema kuasilineal deituko diogu (8.29)–(8.30) gisa adieraz daitekeenari <math display=\"inline\"><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> konstanteen eta gai linealak baino azkarrago 0-ra jotzen duten <math display=\"inline\"><mi>F</mi></math> eta <math display=\"inline\"><mi>G</mi></math> funtzioen bidez, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> eta <strong>hurbilketa lineal</strong>, <strong>lehen hurbilketa</strong> edo <strong>sistema linealizatu</strong> deitzen zaio gai ez-linealak arbuiatzean lortzen den koefiziente konstanteetako sistema linealari: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mi>.</mi></mtd></mtr></mtable></math> Sistemaren <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> matrizea erabiliz, hurbilketa lineal hau <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> gisa idazten da 4. kapituluko notazio matrizialean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu 8.4 ariketako pendulu matematikoaren oreka-puntuen inguruko hurbilketa linealak."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Suposatuko dugu jatorria sistema linealaren puntu finko isolatu bat ere badela: beraz, sistemaren matrizea erregularra da, <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> eta jatorria hurbilketa linealaren oreka-puntu bakarra da, nahiz eta sistema kuasilinealak beste batzuk izan ditzakeen. (8.3 probleman <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math> duen sistema linealaren kasua aztertuko dugu)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu hurbilketa linealaren jatorriaren eta, definizioz, sistema kuasilinealaren erro karakteristikoak <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> direla, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr</mtext></mrow><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mn>4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> sistemaren diskriminatzailea izanik, eta bektore propioak sistema homogeneoak ebatziz lortzen direla <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>11</mn></msub><mo>−</mo><msub><mi>k</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>k</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Egiaztatu <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> eremu bektorialaren dibergentzia jatorrian (eta haren hurbilketa linealarena nonahi) hain zuzen ere <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu 8.4 ariketako pendulu matematikoaren erro karakteristikoak."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Egonkortasun lineala",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Liapunov-en lehen metodoa</strong> edo <strong>egonkortasun linealaren metodoa</strong> aztertu den sistema ez-linealaren hurbilketa linealaren egonkortasuna aztertzean datza, harentzat lortutako ondorio kualitatiboak baliozkoak baitira sistema kuasilinealerako oreka-puntutik nahikoa hurbil, non gai ez-linealak arbuiagarriak baitira, <em>salbuespenen batekin</em>. Sistema kuasilinealerako eta haren lehen hurbilketarako kasu desberdinak aztertzen joango gara."
    },
    {
     "mota": "testua",
     "html": "Askotan adibide gisa sistema kuasilineala hartuko dugu <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> eta haren lehen hurbilketa, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> hartuz besterik gabe lortzen dena."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.38)–(8.39) sistemarako <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>d</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>r</mi></mrow></math> ditugula eta <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>±</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>d</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> balio karakteristiko bakoitzari dagokion bektore propioa (proportzionala) dela <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erro karakteristiko erreal desberdinak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada bi erroak errealak eta desberdinak dira, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></math>, eta beraz <math display=\"inline\"><msub><mi>k</mi><mn>1</mn></msub></math> eta <math display=\"inline\"><msub><mi>k</mi><mn>2</mn></msub></math>-ri dagozkien bektore propioak, hurrenez hurren, <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> badira, sistema linealaren soluzio orokorra honako formakoa da <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> eta hala <math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup></mrow><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Hurbilketa linealaren bi soluzio berezi daude bektore propioekiko paraleloak diren zuzenetan zeharreko fase-ibilbideei dagozkienak: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Erro negatiboak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> badira, bi erroek <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>-ren zeinu bera dute. Beraz, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math> izango dugu eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean ekuazio linealaren (8.42)–(8.43) soluzio guztiak jatorrira jotzen dute, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, eta beraz hura asintotikoki egonkorra da. Gainera, malda berarekin lortzen dute, (8.44)tik ondorioztatzen baita <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> (8.46) ibilbidea izan ezik, jakina. Horregatik, ibilbideen forma jatorritik gertu kasu partikular batean 8.6 irudian ikus daitekeena da. Oreka-puntu batetik gertu ibilbideek egitura geometriko hau dutenean (ia soluzio guztiek jatorria malda berarekin lortzen dute) puntu finkoa <strong>adabegi</strong> bat dela esaten da. Kasu honetan, jatorria asintotikoki egonkorra den adabegi bat da."
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> direla",
     "src": "media/irudiak/de810b6abeee6043.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "8.6 irudiaren eskuineko zatian adibide batean egiazta daiteke orokorrean frogatzen dena: kasu kuasilinealean ez dago aldaketa kualitatiborik <em>jatorritik nahikoa hurbil</em>, zeina asintotikoki egonkorra den adabegi izaten jarraitzen baitu. Hau ezaugarri izango da: hurbilketa linealerako ondorioak —gutxienez kasu gehienetan— kualitatiboki berdin mantentzen dira sistema ez-linealerako puntu kritikotik oso hurbil, nahiz eta distantzia handiagoetan gai ez-linealak nabaritzen diren eta ibilbideak deformatzen dituzten. Adibide honetan ikus daiteke ere (non?) hurbilketa linealean falta zen beste oreka-puntu bat dagoela."
    },
    {
     "mota": "azpititulua",
     "testua": "Erro positiboak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> badira <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math> izango dugu eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean hurbilketa linealaren (8.42)–(8.43) soluzio guztiak infiniturantz doaz eta jatorritik urruntzen dira, ezegonkorra izango dena. Puntu ezegonkorraren egitura geometrikoa ikusteko, aski da konturatzea aurreko kasuan esandakoak egia izaten jarraitzen duela, baina iragan infinituan etorkizunean izan beharrean (eta 1 eta 2 indizeak trukatuz). Hala dugu, (8.44)gatik, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>C</mi><mn>2</mn></msub><mo>≠</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "eta beraz geometria 8.6 irudikoa izaten jarraituko du, baina ibilbideen ibilbide-noranzkoa alderantzikatuta eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> etiketak trukatuta. Froga daiteke sistema ez-linealerako ere adabegi ezegonkor bat izango dela eta haren itxura kualitatiboa aipatutako irudiaren eskuineko zatikoa, ibilbide-noranzkoa salbu."
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)-ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/5ed047111c58e064.svg",
     "zabalera": 350
    },
    {
     "mota": "azpititulua",
     "testua": "Zeinu aurkakoetako erroak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> badira, bi erroek zeinu aurkakoak dituzte, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>, eta beraz <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> soluzio partikularrak jatorrirantz joko du <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mi>/</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math> zuzenean zehar, <strong>espazio egonkor</strong> izena hartzen duena, eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-ri dagokionak, berriz, jatorritik ihes egiten du <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> zuzenean zehar, <strong>espazio ezegonkor</strong>a dena. Ekuazio linealaren gainerako soluzioak ez doaz jatorrirantz, baizik eta espazio ezegonkorrera (egonkorrera) asintotikoki jotzen dute etorkizuneko (iraganeko) infinituan, izan ere <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)-ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/005641d76dc17cdc.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "(8.42)–(8.43) soluzio guztiak, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>-ri dagozkionak izan ezik, jatorritik ihes egiten dutenez, oreka-puntu ezegonkor batez ari gara, eta norabide egonkor salbuespeneko bat dagoenez, <strong>zela-puntu</strong><span class=\"j-oin\">[Izen hau zaldi-zela bati dagokio. Irudika ezazu nola mugitzen den bolatxo bat haren gainean.]</span> edo"
    },
    {
     "mota": "testua",
     "html": "<strong>lepo</strong>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Gogoratu mendiko lepo baten forma.]</span> bat dela esaten da. Adibide bat 8.8 irudian ikus daiteke, zeinak sistema kuasilinealak jatorrian lepo ezegonkor bat izaten jarraitzen duela ere erakusten baitu; baina orain soluzio egonkorra eta ezegonkorra ez dira infiniturainoko zuzenak, baizik eta jatorrian dagozkien espazioekiko (eta bektore propioekiko) ukitzaileak soilik. <strong>Barietate egonkor</strong> eta"
    },
    {
     "mota": "testua",
     "html": "<strong>ezegonkor</strong>"
    },
    {
     "mota": "testua",
     "html": "izenak hartzen dituzte, hurrenez hurren. Barietate egonkorra, oro har, ez da fisikoki gauzagarria, edozein perturbaziok sistema hartatik eta oreka-puntutik urruntzen baitu, harengana jo beharrean; baina paper oso garrantzitsua jokatzen du fase-espazioaren propietate kualitatibo globaletan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erro karakteristiko konplexuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada, erro karakteristikoek <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>α</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math> bikote konplexu konjokatua osatzen dute, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msqrt></mrow></math> izanik, eta soluzioak, hurbilketa linealean, hauek izango dira, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mover><mrow><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mover><mrow><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></mrow></math> izanik. Bi koordenatuak esponentzial baten eta gai periodiko baten biderkadura gisa agertzen dira (ikus, aurrerago, 8.11 ariketa). Beraz, esponentziala izango da —zehazkiago, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>-ren zeinua— soluzioen egonkortasuna zehaztuko duena."
    },
    {
     "mota": "azpititulua",
     "testua": "Erro konplexuak zati erreal negatiboarekin"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> badira, <math display=\"inline\"><mrow><mi>α</mi><mo>&lt;</mo><mn>0</mn></mrow></math> izango dugu eta, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup></math> beheranzkoa denez, sistema linealaren (8.52)–(8.53) soluzio guztiek jatorrirantz joko dute, zeina asintotikoki egonkorra izango baita, baina ez dira aurrez finkatutako norabide batekin sartuko, izan ere <math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></mfrac></mrow></math> periodikoa da eta malda etengabe aldatuko da. Orbitek espiral baten forma dute, eta horregatik puntu finkoa"
    },
    {
     "mota": "testua",
     "html": "<strong>foku</strong>"
    },
    {
     "mota": "testua",
     "html": "edo <strong>puntu espiral</strong> deitzen da, eta ibilbideen forma 8.9 irudian ikus daiteke kasu partikular batean. Berriro ere, sistema kuasilinealak portaera kualitatibo bera du: jatorria asintotikoki egonkorra den foku bat da, nahiz eta helizea deformatu egiten den hartatik urruntzean eta ez duen zertan infiniturarte jarraitu behar."
    },
    {
     "mota": "azpititulua",
     "testua": "Erro konplexuak zati erreal positiboarekin"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> badira, <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denez (8.52)–(8.53) soluzioek jatorritik ihes egingo dute, zeina ezegonkorra izango baita, eta foku ezegonkor baten egitura izango du, izan ere soluzioek kasu honetan <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></math>-rako duten portaera bera dute aurrekoan <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>-rako zutena. Sistema kuasilinealak ere foku ezegonkor bat du eta soluzioen itxura 8.9 irudikoaren modukoa da, baina ibilbidearen noranzkoa alderantzikatuta."
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)-ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/1d186bb3eaed7247.svg",
     "zabalera": 349
    },
    {
     "mota": "azpititulua",
     "testua": "Erro irudikari hutsak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> badira, sistema linealaren soluzioak hauek dira <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.55)–(8.56) ekuazioek fase-planoaren jatorrian zentratutako elipseak deskribatzen dituztela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzioak, beraz, periodikoak dira eta jatorria, egonkorra dena baina ez asintotikoki egonkorra,"
    },
    {
     "mota": "testua",
     "html": "<strong>zentro</strong>"
    },
    {
     "mota": "testua",
     "html": "edo <strong>zurrunbilo</strong> izena hartzen du."
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)-ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/3ebabe26cbda2358.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Hala ere, kasu honetan, sistema kuasilinealaren analisia delikatuagoa da, izan ere, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> kasua <math display=\"inline\"><mrow><mi>α</mi><mo>&lt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> artean justu muga denez, gai ez-linealek, txikiak izan arren, haren egonkortasuna aldatzeko adina garrantzi izan dezakete eta asintotikoki egonkorra den foku batean edo foku ezegonkor batean bihur dezakete, nahiz eta zentro gisa ere utz dezaketen. Kasu honetan, egonkortasun linealaren analisia ez da erabakigarria sistema kuasilinealerako eta beste metodo bat erabili behar da. 8.10 irudiaren kasuan gai ez-linealek zentroa foku ezegonkor batean bihurtzen dute eta beste adibide bat ikusteko honako sistema hau hartuko dugu kontuan <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math> zeina kasu honexi dagokion. Hurbilketa lineala (8.9) sistema da eta orbita gisa jatorrian zentratutako zirkunferentziak ditu (8.10). 8.11 irudian ikus daitekeen eta 8.38 problemak frogatuko dugun bezala, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> denerako sistema ez-linealak jatorrian zentro bat izaten jarraitzen du; baina <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> denerako asintotikoki egonkorra den foku bat da."
    },
    {
     "mota": "irudia",
     "oina": "(8.57)–(8.58)-ren fase-espazioa (a)  <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> kasuetan",
     "src": "media/irudiak/997986a1e43f7dfc.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Kasu honetako zailtasunen arrazoi matematikoa oreka-puntua <strong>ez-hiperbolikoa</strong> izatean datza: zati erreal ez-nulua duten balio propioei dagozkien bektore propioek sortutako espazioak fase-espazioarena baino dimentsio txikiagoa du (nulua kasu honetan). Hiperbolikotasuna emaitza askoren frogapenean parte hartzen duen baldintza bat da, eta haiek ez dira nahitaez egiazkoak hura betetzen ez bada. Bereziki,"
    },
    {
     "mota": "testua",
     "html": "<strong>Grobman-Hartman teoremak</strong>"
    },
    {
     "mota": "testua",
     "html": ", orain arte inplizituki erabiltzen aritu garenak<span class=\"j-oin\">[Ikus, adibidez, Walter-en testua [30].]</span>, puntu finko hiperboliko batek hurbilketa linealari dagokionaren egonkortasun bera duela ziurtatzen du, izan ere haren inguruko fase-espazioa hurbilketa linealarenarekiko <strong>topologikoki baliokidea</strong>  baita: haien artean homeomorfismo bat dago (alderantzizko jarraitua duen aplikazio jarraitu bat). Beste hitz batzuetan: bata bestearen bertsio deformatua (haustururik gabea) da. Baina hau ez da nahitaez egiazkoa puntu ez-hiperbolikoen inguruan: zati erreal nulua duen balio propioren bat badago, puntuaren mota geometrikoa alda daiteke eta, gainera, zati erreal positiborik ez badago, haren egonkortasuna ere alda daiteke."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erro karakteristiko erreal berdinak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> erro karakteristiko erreal bikoitz bat dago. Gainera, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> izatea <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>11</mn></msub><mo>−</mo><msub><mi>a</mi><mn>22</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> izatearen baliokidea denez, bi kasu posible daude."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan, <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> dugu eta bi ekuazio linealak desakoplatuta daude: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>y</mi><mi>.</mi></mrow></math> Soluzioak <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> jatorrirantz doazen edo handik datozen erdizuzenak dira: <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mi>/</mi><msub><mi>C</mi><mn>1</mn></msub></mrow></math>. Beraz <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>2</mn><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada, soluzio guztiak jatorrian sartzen dira, baina malda desberdinekin, eta horregatik bera <strong>adabegi propio</strong> edo <strong>izar-adabegi</strong> formako puntu asintotikoki egonkorra da. Aldiz, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>2</mn><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, soluzio guztiak infiniturantz doaz eta, hain zuzen ere, jatorriaren iragandako infinituan irteten dira, zeina adabegi propio ezegonkorra baita. Adibide bat honako sistema hau da <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> zeinaren fase-espazioa 8.12 irudian ikusten den."
    },
    {
     "mota": "irudia",
     "oina": "(8.61)–(8.62)-ren fase-espazioa (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> eta (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/7c65170675209286.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "Sistema kuasilinealaren egonkortasuna bera da (hau da, ezegonkortasuna <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denerako eta egonkortasun asintotikoa <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> denerako), baina adabegiaren forma alda daiteke, izan ere, 8.12 irudiaren kasuan bezala adabegi propioa izaten jarrai dezakeen arren, gai ez-linealek hura adabegi inpropio batean (zeinetan ia soluzio guztiak norabide berean sartzen edo irteten diren) edo foku batean bihur dezakete. Arrazoia, berriro ere, muga-kasu bat izanik gai ez-linealek eragina izan dezaketela da, nahiz eta kasu honetan sistema hiperbolikoa denez egonkortasuna ez den aldatzen."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>21</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Kasu honetan ez daude bi bektore propio lehen hurbilketarako, eta beste soluzioak <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math> motako gaiak sartu behar ditu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu kasu honetan <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></math> bektore propio bat bada, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>=</mo><mi>k</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math> formako bigarren soluzio linealki independente bat dagoela eta soluzio orokorra <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mi>.</mi></mtd></mtr></mtable></math> dela. Zergatik ez da hau egiazkoa <math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> bada?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Argi dago <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada, soluzio guztiak jatorrirantz jotzen dutela, zeina asintotikoki egonkorra izango baita, eta, gainera, denak puntu finkoan malda berarekin sartzen direla (hain zuzen, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></math> bektore propioaren norabidean, izan ere <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> da <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean). Beraz, asintotikoki egonkorra den <strong>adabegi endekatu</strong> batez ari gara. Sistema kuasilinealak asintotikoki egonkorra den puntu finko bat izango du, zeina adabegia izaten jarrai dezakeen, edo foku batera deforma daitekeen gai ez-linealen eraginaren ondorioz."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, hurbilketa linealaren soluzio guztiak infiniturantz jotzen dute eta jatorria ezegonkorra izango da. <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> denez <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></math> denean, adabegi ezegonkor bat izango da, eta sistema kuasilinealak adabegi ezegonkor bat edo foku ezegonkor bat izango du."
    },
    {
     "mota": "irudia",
     "oina": "(8.38)–(8.39)-ren fase-espazioa <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> eta (a)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b)  <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> kasuetan",
     "src": "media/irudiak/c31bdb84578c8ea0.svg",
     "zabalera": 349
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Laburpena: Puntu finkoen sailkapena"
    },
    {
     "mota": "testua",
     "html": "Sistema kuasilineal lau baten puntu finko isolatuen sailkapena 8.14 irudian dago laburtuta, non ez baitira sartu oraintxe aztertu ditugun <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> salbuespen-kasuak, zeinak, kasu ez-linealean, batzuetan kasu auzokoetara murrizten diren, nahiz eta izar-adabegi bati edo endekatu bati ere dagozkion. Ez da kontuan hartu <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math> den kasua ere, zeina 8.3 problemak hurbilketa linealean aztertuko dugun eta sistema ez-linealerako ez-hiperbolikoa den. Aldiz, beste kasu ez-hiperbolikoa, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>ω</mi></mrow></math>, agertzen da, zeina praktikan askoz ere maizago den, izan ere, adibidez, sistema mekaniko kontserbatibo guztiek puntu horiek dituzte potentzialaren minimoetan, aurrerago 8.7 atalean ikusiko dugun bezala."
    },
    {
     "mota": "irudia",
     "oina": "Puntu finkoen sailkapena",
     "src": "media/irudiak/0f06af2d80e2aade.svg",
     "zabalera": 359
    },
    {
     "mota": "testua",
     "html": "8.14 irudiaren laburpen gisa esan dezagun"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "erro karakteristikoen zati erreal guztiak negatiboak badira, puntu finkoa erakarle bat da, hau da, asintotikoki egonkorra,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "aski da zati erreal positiboa duen erro karakteristiko bat egotea oreka-puntua ezegonkorra izan dadin, eta"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "zati errealen handiena nulua bada, hurbilketa linealaren azterketa ez da nahikoa sistema kuasilinealaren egonkortasuna erabakitzeko: haren gaineko informazio gehiago behar da."
     ]
    },
    {
     "mota": "testua",
     "html": "Laburpen hau edozein dimentsiotan da baliozkoa, nahiz eta oreka-puntuaren inguruko fluxuaren forma geometrikoen aniztasuna harekin handitzen den. Jarraian emaitzaren enuntziatu zehatza ematen dugu, zeinaren frogapena, adibidez, Walter-en testuan aurki daitekeen [30]."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Liapunov",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi ekuazio diferentzialen sistema bat <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>,</mo></mrow></math> zeinak oreka-puntu isolatu bat duen <math display=\"block\"><mrow><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msubsup><mi>x</mi><mn>1</mn><mo>*</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mi>.</mi></mrow></math> Sistema lehen hurbilketan estazionarioa bada puntu horren inguruan: <math display=\"block\"><mrow><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>−</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>R</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>R</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>r</mi></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>≡</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>−</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> orduan:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrizearen balio propio guztiek zati erreal negatiboa badute, oreka-puntua asintotikoki egonkorra da, eta"
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "gutxienez balio propio batek zati erreal positiboa badu, oreka-puntua ezegonkorra da."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ohartu hurbilketa linealaren matrizea —funtzioak erregularrak badira puntu finkoan ebaluatutako <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>f</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> matrize jakobiarra besterik ez dena— konstantea dela suposatzen dugula. Garrantzitsua da gogoratzea, zati erreal handiena duen erro karakteristikoa irudikari hutsa bada, metodo hau ez dela erabakigarria sistema ez-linealerako eta hurrengo ataletan eztabaidatutako tekniketako batera jo behar dela."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Fase-ibilbideak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Kasu sinple batzuetan, (8.7) ekuazio diferentzialetik abiatuta nahiko erraz kalkula daiteke fase-ibilbideen ekuazioa (hau da, aldagai askearen menpe ez dagoen lehen integral bat) eta, kasu horretan, haren analisiak oreka-puntuen (edo beste multzo aldaezin batzuen) egonkortasuna erabakitzeko aukera ematen du."
    },
    {
     "mota": "testua",
     "html": "Adibidez, honako sistemaren jatorria <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup><mo>,</mo></mrow></math> ez da hiperbolikoa (zergatik?), baina ibilbideen ekuazioa 2.8 problemak ebatzi zen: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mn>3</mn><mi>a</mi><mi>x</mi><mi>y</mi></mrow></math>. Ibilbide bakoitza <strong>Descartes-en hosto</strong> bat da<span class=\"j-oin\">[<strong>René Descartes</strong> (1596-03-31, La Haye —orain Descartes deitzen da—, Frantzia; 1650-02-11, Stockholm, Suedia). Galileoren atxiloketaren berriek bere lehen tratatu garrantzitsua ez argitaratzea erabakiarazi zioten: <em>Le Monde, ou Traité Lumière</em>. Bere <em>Methoderen diskourak</em> ospetsuan matematikaren erabilera defendatu zuen ezagutza seguruak eskuratzeko bide gisa eta bere eranskinetako batek, <em>La Géométrie</em>, aljebraren eta geometriaren arteko lotura ezarri zuen, geometria kartesiar deitzen duguna, eta erreferentzia-sistemen sarrera ekarri zuen. Bere mekanikari buruzko teorien beste alderdi batzuk, hainbat lanetan azaldutakoak, okerrak ziren, ordea. Hostoaz gain, obalo kartesiarrak, zikloidea, espiral ekiangeluarra eta Newton-en hirukia aztertu zituen.]</span>, zeinaren 8.15 grafikoa <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> zuzena asintota gisa onartzen duela eta jatorrian ardatz koordenatuekiko ukitzailea dela egiaztatu ondoren lortzen den, edo bere ekuazio parametrikoak erabiliz: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><mi>a</mi><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>3</mn><mi>a</mi><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Fase-espazioa aipatutako irudiaren eskuinaldean agertzen da."
    },
    {
     "mota": "irudia",
     "oina": "Descartes-en hostoa eta (8.69) sistemaren fase-espazioa",
     "src": "media/irudiak/5f29aa7881dd62a4.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Ibilbideen ekuazioarekin ez dakigu zein den haien ibilbidearen noranzkoa, <math display=\"inline\"><mi>t</mi></math>-rekiko mendekotasuna ezabatu baita. Hala ere, sarritan hura zailtasun handirik gabe zehaztu daiteke jatorrizko sistema bereziki sinpleak diren puntu batzuetan aztertuz, izan ere ibilbidearen noranzkoa modu jarraituan aldatuko da (sistema dinamikoa erregularra den lekuan) eta, adibidez, oreka-puntuetan soilik aldera daiteke. Adibide honetan aski da ardatz kartesiarretan eta diagonaletan zer gertatzen den aztertzea:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Leku geometrikoa</strong>",
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>",
        "<math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mn>0</mn></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mn>0</mn></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>",
         "<math display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Taula hau nahikoa da ondorioztatzeko noranzkoak irudikoak direla eta, beraz, jatorria ezegonkorra dela, nahiz eta egonkortasun lineala aztertzean ikusitako oreka-puntu ezegonkorrena ez bezalako moduan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eztabaidatu honako sistemaren jatorriaren egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> zeinak jatorrian oreka-puntu ez-hiperboliko bat duen (zergatik?), ibilbideen ekuazio diferentziala ebatziz."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Dimentsio bakarreko sistema mekanikoak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dimentsio batean mugitzen den partikula bat hartuko dugu kontuan, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> indar kontserbatibo baten eta abiadurarekiko proportzionala den <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> marruskadura-indar baten ekintza konbinatuaren pean, <math display=\"inline\"><mrow><mi>γ</mi><mo>≥</mo><mn>0</mn></mrow></math> izanik. Lehen esan bezala <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> hartzen bada, higiduraren ekuazioa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> da, zeina sistema gisa idatz daitekeen <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> abiadura erabiltzen badugu <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>v</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mi>v</mi><mi>.</mi></mtd></mtr></mtable></math> Sistema hau ez da lineala izango, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> energia potentzial elastikoari dagokion osziladore harmoniko (moteldu) kasuan izan ezik."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu energia mekanikoa <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> bada kontserbatzen dela eta bestela modu monotonoan txikitzen dela, izan ere <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Aurkitu <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> bektore-eremuaren dibergentzia, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>) bada kontserbatiboa (disipatiboa) dela egiaztatzeko."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuak <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> baldintzek ematen dituzte, hau da, indar erresultantearen deuseztapenak eta hasierako geldialdiak, zeina partikula potentzialaren muturreko lokal batean geldirik badago soilik gertatzen den. Ikus dezagun zer dioskun Liapunoven lehen metodoak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntuaren egonkortasunari buruz."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (8.71) ekuazioaren hurbilketa lineala <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup></mrow></math> oreka-puntuaren inguruan, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> izanik, honako hau dela: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Idatzi ekuazio hau bi dimentsioko sistema gisa eta egiaztatu esplizituki matrize gisa (8.72)–(8.73) sistema ez-linealaren matrize jakobiarra <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>-n ebaluatua duela. Ondorioztatu oreka-puntuaren erro karakteristikoak <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>γ</mi><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math> direla."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denez, oreka-puntuaren egonkortasuna honela da <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>-ko muturraren motaren arabera:"
    },
    {
     "mota": "testua",
     "html": "<strong>Maximo lokala.</strong>     <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math> bada, erro karakteristikoek zeinu aurkakoak dituzte, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>, eta horregatik maximoak beti lepo ezegonkorrak dira."
    },
    {
     "mota": "testua",
     "html": "<strong>Minimo lokala.</strong>     <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> bada, (8.76) ekuazioa osziladore harmoniko moteldurarena da, eta haren erro karakteristikoak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "zati erreal negatiboa duten konplexuak dira, marruskadura moderatua bada (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>&lt;</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), eta horregatik oreka-puntua asintotikoki egonkorra den foku bat izango da, edo"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "errealak eta negatiboak, sistema gainmotelduta badago (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), eta horregatik puntu finkoa asintotikoki egonkorra den adabegi bat izango da. (Moteltze kritikoarekin (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), asintotikoki egonkorra den foku edo adabegi bat dago)."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Inflexio-puntua edo goi-mailako muturra.</strong>     <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> bada, erro karakteristikoak <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>−</mi><mi>γ</mi></mrow></math> dira; puntua ez da hiperbolikoa eta hurbilketa linealaren metodoak ez du ondoriorik ateratzeko aukerarik ematen."
    },
    {
     "mota": "irudia",
     "oina": "(8.78) sistemaren energia potentziala eta fase-espazioa <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> kasurako",
     "src": "media/irudiak/78ae84cfc375cac8.svg",
     "zabalera": 275
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu 8.16 irudiak honako sistema dinamikoaren energia potentziala eta fase-espazioa zuzen islatzen dituela <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ondorio hauek aldaezin jarraitzen dute maximoetarako marruskadurarik ezean: maximo lokalak beti lepo ezegonkorrak dira, normalean fisikoki gauzaezina den barietate egonkor batekin, izan ere zeinu aurkakoetako bi erro karakteristiko dituzte."
    },
    {
     "mota": "testua",
     "html": "Baina, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> bada, minimoen kasua (eta inflexio-puntuena eta goi-mailako muturrena <math display=\"inline\"><mi>γ</mi></math>-ren balio guztietarako) zati erreal maximo nulu bati dagokio eta horregatik hurbilketa linealaren azterketa ez da erabakigarria, sistema benetan lineala ez bada behintzat (osziladore harmoniko bat), kasu horretan minimoa zentro egonkorra baita, baina ez asintotikoki egonkorra. Kasu ez-hiperboliko hauek aztertzeko informazio gehiago behar dugu, zeina kasu honetan energia mekanikoak ematen digun, zeinaren kontserbazio-legea <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>E</mi><mo>,</mo></mrow></math> (8.75)-etik ondorioztatzen den —edo (8.7)-tik, zeinak (8.72)–(8.73)-ri aplikatuta <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>v</mi></mrow></math> ematen duen—. Denborarekiko independentea den lehen integral hau, sistema mekaniko kontserbatiboetan, fase-ibilbideen ekuazioa da, zeinak testuinguru zehatz honetan 8.6 atalean sartu genuen ideia —ekuazio hori egonkortasuna eztabaidatzeko erabiltzearena— garatzeko aukera ematen digun. Mutur baten ondoan, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, potentziala bere Taylor-en garapen trunkatuaz hurbil dezakegu, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math></span>. Ondorioz, ibilbidearen ekuazioa <math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> izango da, zeina hiperbola baten ekuazioa den maximoetarako (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math>), zeina haiek lepoak izatearen gertaerari dagokion, eta elipse batena minimoetarako (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math>), zeinak hauek sistema mekaniko kontserbatibo orororako zentro egonkorrak izatea espero arazten duen<span class=\"j-oin\">[[29]-n aurki daiteke frogapen zorrotz bat, ibilbideak elipseak badira hurbilketa koadratikoan, benetako ibilbideak ere itxiak direla oreka-puntuaren ingurune batean. Gainera, emaitza hau, <strong>Lagrangeren teorema</strong> edo <strong>Lagrangeren printzipio</strong> izenez ezagutzen dena, modu zuzenean frogatuko da, testuinguru orokorrago batean, 8.8 atalean. Haren frogapen zorrotza Dirichleti zor zaiola dirudi. Ikus [18] erreferentzia.]</span>. Hain zuzen, minimo koadratiko baten oso ondoan energia potentziala parabola bat da, zeina osziladore harmoniko bati dagokion eta zeinaren fase-espazioa G.5 irudikoa den. Emaitza bera egiazta daiteke"
    },
    {
     "mota": "irudia",
     "oina": "Energia-diagrama minimo baten inguruan",
     "src": "media/irudiak/0915d51515d27746.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "mekanikan ohikoa den arrazonamenduaren bidez: minimoaren ondoan energia-diagrama 8.17 irudian ikusten den modukoa da, zeinak esaten digun sistema <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math> oreka-puntuaren inguruan oszilatzen ari dela atzera-egite puntuen artean, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, oreka-puntura jo gabe eta, batez beste, hartatik urrundu gabe: zentro egonkorra da, baina ez asintotikoki egonkorra."
    },
    {
     "mota": "testua",
     "html": "Inflexio-puntu baten kasuan, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>‴</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, ordena bat urrunago joan behar da garapenean honako hau lortzeko <math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>V</mi><mo>‴</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "(8.78) sistemaren energia potentziala eta fase-espazioa <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> kasurako",
     "src": "media/irudiak/7954b9d2d3a20fad.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "zeina parabola erdikubiko baten ekuazioa den. Mota honetako puntua <strong>goin</strong> deitzen da, beti ezegonkorra da eta haren forma 8.18 irudiaren jatorrian erakusten da, non (8.78)-ren fase-espazioa ere ikus daitekeen maximo baten eta minimo baten ondoan."
    },
    {
     "mota": "testua",
     "html": "Kasu kontserbatibo honetan orbitak beti energia konstantean mantentzen dira eta itxiak dira bornatuta daudenean. Bada kasu partikular interesgarri bat 8.18 irudian: maximoaren barietate ezegonkorretako bat barietate egonkorra ere bada, hau da, lepotik irten eta hartara berriz sartzen den orbita bat. Mota honetako orbita bati <strong>lotura homoklinikoa</strong> deitzen zaio. (<strong>Separatriz</strong> ere deitzen zaio, kualitatiboki desberdinak diren orbitak —periodikoak eta bornatu gabeak kasu honetan— banatzen dituelako). <math display=\"inline\"><mi>γ</mi></math> nulua izateari uzten dionean energia mekanikoa etengabe txikitzen da eta minimo batenera jotzen du, edo <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>-ra, eta horregatik lepoek eta goinek mota berekoak izaten jarraitzen dute (ezegonkorrak), zentroak gehiago egonkortzen diren bitartean eta asintotikoki egonkorrak diren foku (edo, are, adabegi) bihurtzen diren bitartean. Horrela igarotzen da 8.18 iruditik 8.16-ra. 8.19 irudian, zeina azken kasuari ere dagokion, jatorrian dagoen goin-puntu ezegonkorraren barietate egonkorrak (hau da, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>∞</mi></mrow></math> limitean oreka-puntuan sartzen den soluzioa) eta ezegonkorrak (handik <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>-n irteten dena) ikusten ditugu, baita energia mekaniko beheranzkoaren grafikoa ere."
    },
    {
     "mota": "testua",
     "html": "Pendulu motelduaren kasuan higiduraren ekuazioa <math display=\"block\"><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>c</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu denbora-unitate gisa <math display=\"inline\"><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></math> aukeratzen bada eta <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>/</mi><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> sartzen bada, penduluaren ekuazioa aldagai adimentsionaletan <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Energia potentziala <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da eta minimo bat du <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>-n eta maximo bat <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>±</mi><mi>π</mi></mrow></math>-n (beti <math display=\"inline\"><mrow><mi>−</mi><mi>π</mi><mo>≤</mo><mi>θ</mi><mo>≤</mo><mi>π</mi></mrow></math> hartuko dugu), 8.20 irudiaren goiko aldean erakusten den bezala."
    },
    {
     "mota": "irudia",
     "oina": "Goin-puntuaren barietate egonkorra eta ezegonkorra",
     "src": "media/irudiak/b3a3bb7cd76e5d38.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "Marruskadurarik ez dagoenean, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>, minimoa zentro egonkorra izango da, baina ez asintotikoki egonkorra, eta maximoa lepo ezegonkor bat, aldi berean barietate egonkorra eta ezegonkorra den lotura homokliniko batekin. Minimo koadratiko guztiekin bezala, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>-ren inguruan G.5 osziladore harmonikoaren fase-espazioa berreskuratzen dugu."
    },
    {
     "mota": "irudia",
     "oina": "Penduluaren energia potentziala eta fase-espazioa",
     "src": "media/irudiak/07dd39741553c28f.svg",
     "zabalera": 317
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zeri dagokio fisikoki orbita homokliniko hau?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Marruskadura kontuan hartzen denean<span class=\"j-oin\">[Ikus, baita ere, 8.8.4 atala.]</span>, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> jatorriak bere egonkortasuna handitzen du eta ia orbita guztiak erakartzen dituen asintotikoki egonkorra den foku (edo adabegi) bihurtzen da, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>±</mi><mi>π</mi></mrow></math> lepo ezegonkor bat izaten jarraitzen duen bitartean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zein orbita ez ditu erakartzen <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>-ko erakarleak? Zeri dagozkie ikuspuntu fisikotik?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sistema dinamiko orokorragoetan ez dugu energia mekanikoak ematen duen informazio guztiz baliagarria, baina Liapunovek frogatu zuen batzuetan funtzio orokorrago bat aurki daitekeela, oreka-puntu baten egonkortasuna erabakitzeko adina informazio ematen diguna, egonkortasun lineala huts egiten duenean ere. Funtzio horrek energia mekanikoaren propietate batzuk orokortzen ditu."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suposatu (8.72)–(8.73) sistemaren oreka-puntu isolatu bat jatorrira eraman dela, <math display=\"inline\"><mrow><msup><mi>x</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, eta han hartzen dela energia potentzialaren jatorria: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Frogatu energia mekanikoa <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> fase-espazioan definitua positibo (negatibo) definitua dela potentzialaren minimo (maximo) isolatu baten ingurune batean, <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> eta haren deribatua negatibo erdidefinitua dela <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Liapunov-en funtzioak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Liapunoven <strong>bigarren metodoa</strong> —edo <strong>metodo zuzena</strong>— oreka-puntuaren ingurune batean definitua eta erregularra den <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio bat propietate egokiekin aurkitzean datza."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Liapunov",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suposa dezagun <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> jatorria (8.5)–(8.6) sistema dinamikoaren oreka-puntu isolatu bat dela eta jatorriaren ingurune batean definitua dagoen <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio jarraituki diferentziagarri bat dagoela, non positibo definitua den: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mi>.</mi></mrow></math> Orduan,"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Bere deribatua fluxuan zehar negatibo erdidefinitua bada, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>0</mn><mo>,</mo></mrow></math> jatorria oreka-puntu egonkorra da (asintotikoki egonkorra ere izan liteke, baina hori ez du <math display=\"inline\"><mi>U</mi></math> funtzio honek bermatzen).",
        "Deribatua nulua bada, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> jatorria oreka-puntu egonkorra da, baina ez asintotikoki egonkorra.",
        "Deribatua negatibo definitua bada, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mrow></math> jatorria asintotikoki egonkorra den oreka-puntua da.",
        "Deribatua positibo definitua bada, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mrow></math> jatorria oreka-puntu ezegonkorra da."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oharrak"
    },
    {
     "mota": "testua",
     "html": "Hipotesi-multzo hauetako bat betetzen duen funtzio bati <strong>Liapunov-en funtzio</strong> deitzen zaio. Ohartu <math display=\"inline\"><mi>U</mi></math>  <math display=\"inline\"><mrow><mi>−</mi><mi>U</mi></mrow></math>-z aldatzean emaitza berdina lortzen dela «positibo» eta «negatibo» adjektiboak elkartrukatuz. Gainera, jatorria oreka-puntu bat denez, beti betetzen da <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, baina <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> baldintza ez da funtsezkoa: aski da <math display=\"inline\"><mi>U</mi></math>-k oreka-puntuan minimo isolatu bat izatea <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> translatatua Liapunoven funtzio bat izan dadin. Beraz, aurreko teorema honela ere enuntzia dezakegu."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Oreka-puntuan <math display=\"inline\"><mi>U</mi></math> funtzioak minimo edo maximo isolatu bat badu eta <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> deribatuak aurkako motako mutur bat, oreka-puntua egonkorra da."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mi>U</mi></math> funtzioa lehen integral bat bada eta maximo edo minimo isolatu bat badu oreka-puntuan, bera egonkorra da, baina ez asintotikoki egonkorra."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Funtzioaren eta deribatuaren muturrak isolatuak eta aurkako motakoak badira (bata maximo eta bestea minimo), oreka asintotikoa da."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Funtzioak eta deribatuak biek maximo (edo biek minimo) isolatu bat badute, oreka ezegonkorra da."
     ]
    },
    {
     "mota": "testua",
     "html": "Teorema modu nabarian hedatzen da bi askatasun-gradu baino gehiago dituzten sistemetara eta hipotesi gutxiago zorrotzekin enuntzia daiteke, baina praktikan egiaztatzen zailagoak. (Ikus, adibidez, Elsgoltz-en testua [3])."
    },
    {
     "mota": "testua",
     "html": "Teoremaren funtsezko ideia energia-diagramekin egiten denaren orokortze zuzena da; baina, orain aldagai mendekoetako bat ez denez nahitaez bestearen deribatua, dimentsio gehigarri bat hartu beharko da kontuan. Suposa dezagun fase-ibilbide bat <math display=\"inline\"><mi>U</mi></math>-ren minimotik oso gertu hasten dela, 8.21 irudian erakusten den bezala. <math display=\"inline\"><mi>U</mi></math> hazten ez bada (haren deribatua positiboa ez delako) soluzioa ez da minimotik urrunduko eta oreka egonkorra izango da. <math display=\"inline\"><mi>U</mi></math> higiduraren konstante bat bada, batez beste ez da jatorrira hurbilduko ezta hartatik urrunduko ere: oreka egonkorra izango da, baina ez asintotikoki egonkorra. Deribatua negatiboa bada, <math display=\"inline\"><mi>U</mi></math> modu monotonoan txikituko da eta soluzioak oreka-punturantz joko du, zeina asintotikoki egonkorra izango baita. Deribatua positiboa bada, funtzioa haziko da eta soluzioa jatorritik urrunduko da, zeina ezegonkorra izango baita, hartatik oso gertu hasi bada ere."
    },
    {
     "mota": "irudia",
     "oina": "Fase-ibilbideak eta <math display=\"inline\"><mi>U</mi></math>-ren dagozkien balioen bilakaera.",
     "src": "media/irudiak/a1f7ec39270b546f.svg",
     "zabalera": 223
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoremaren frogapena"
    },
    {
     "mota": "testua",
     "html": "Teoremaren frogapen zorrotza <math display=\"inline\"><mi>U</mi></math>-ren eta haren deribatuaren jarraitutasunean oinarritzen da. Lehen kasuan, frogatu behar dugu <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bakoitzeko <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bat dagoela, zeinaren hasierako baldintzak jatorrian zentratutako <math display=\"inline\"><mi>δ</mi></math> erradioko zirkuluaren barruan dauden <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> soluzio orok, <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math>, inoiz ez duen zeharkatzen <math display=\"inline\"><mi>ε</mi></math> erradioko zirkunferentzia kontzentrikoa, <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>. <math display=\"inline\"><mi>U</mi></math> jarraitua eta positibo definitua denez, beheko borne positibo bat onartuko du <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>M</mi><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math> zirkunferentzian zehar. Gainera, jatorrian nulua denez, haren inguruan <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math> zirkulu bat egongo da zeinaren barruan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>M</mi></mrow></math></span>. Hasierako baldintza <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math>-ren barruan aukeratzen badugu, hasierako <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> balioa <math display=\"inline\"><mi>M</mi></math> baino txikiagoa izango da eta soluzioan zeharreko deribatua negatiboa denez, <math display=\"inline\"><mi>U</mi></math> ez da hazten eta inoiz ez da <math display=\"inline\"><mi>M</mi></math>-ra iritsiko ezta <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math> zirkunferentzian hartzen dituen beste edozein baliotara ere, zeina, beraz, ez den lortuko. Ohartu inplizituki suposatzen dugula <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>  <math display=\"inline\"><mi>U</mi></math>-ren definizio-eremuaren barruan dagoela; hala ez balitz aski litzateke hipotesi hori betetzen den bezain <math display=\"inline\"><mi>ε</mi></math> txiki baten <math display=\"inline\"><mi>δ</mi></math> esleitzea."
    },
    {
     "mota": "testua",
     "html": "Argi dago bigarren kasuan ere lehenengoan ikusitakoa aplikatzen dela. Gainera, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>δ</mi></mrow></math> eskualdean hasten den soluzio bakoitzeko <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>K</mi></mrow></math> betetzen da, soluzioaren menpe dagoen <math display=\"inline\"><mrow><mi>K</mi><mo>&gt;</mo><mn>0</mn></mrow></math> konstante egoki batekin. <math display=\"inline\"><mi>U</mi></math> funtzioa jarraitua eta positibo definitua denez, <math display=\"inline\"><mrow><mi>η</mi><mo>&gt;</mo><mn>0</mn></mrow></math> erradio bat aurki daiteke, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>η</mi></mrow></math> denerako <math display=\"inline\"><mrow><mi>U</mi><mo>≤</mo><mi>K</mi><mi>/</mi><mn>2</mn></mrow></math> betetzeko moduan. Ibilbidean zehar <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math> dugunez, soluzioak ez du <math display=\"inline\"><msub><mi>C</mi><mi>η</mi></msub></math> zirkunferentzia zeharkatuko eta, beraz, ez du oreka-punturantz joko."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mi>U</mi></math> positibo definitua denez, hirugarren kasuaren egonkortasun asintotikoa frogatzeko, aski izango da frogatzea <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math> dela <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean. Jatorritik kanpo <math display=\"inline\"><mi>U</mi></math> funtzioa beheranzkoa da, <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math> baita, eta beheko aldetik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n hartzen duen balio nuluak bornatzen du. Beraz, ez-negatiboa den limiteren baterantz jotzen du: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>L</mi><mo>=</mo><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn></mrow></math></span>. Emaitza frogatzeko, absurdura eramanez jokatuko dugu <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math> dela suposatuz. <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> denez, jatorrian zentratutako <math display=\"inline\"><mrow><mi>η</mi><mo>&gt;</mo><mn>0</mn></mrow></math> erradioko zirkulu bat aurki dezakegu zeinaren barruan <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>L</mi></mrow></math>. <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> jarraitua eta negatibo definitua denez, goiko aldetik balio negatibo batek bornatzen du <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>≤</mo><mi>−</mi><mi>K</mi><mo>&lt;</mo><mn>0</mn></mrow></math>  <math display=\"inline\"><mrow><mi>η</mi><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math> eraztunean, non soluzioa <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> denerako oso-osorik dagoen lehen kasurako lehen frogatutako emaitzaren arabera. Beraz, <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>t</mi><mo>≤</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>−</mi><mi>∞</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean, zeinak <math display=\"inline\"><mi>U</mi></math> positibo definitua delako hipotesia kontraesaten duen."
    },
    {
     "mota": "testua",
     "html": "Laugarren kasuan frogatu behar dugu, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bat eta nahi bezain txikia den <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bat emanda, <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math>-ren barruan hasten eta <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math> zeharkatzen duen soluzioren bat dagoela. Jarraitutasunaren ondorioz, <math display=\"inline\"><mrow><mi>M</mi><mo>≥</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> borne bat egongo da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math> denerako. Bestalde, deribatua jarraitua eta positibo definitua denez, <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mn>2</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math> denerako borne positibo bat egongo da <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>K</mi><mo>≤</mo><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>. Beraz, soluzio bat <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mn>2</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>δ</mi></mrow></math> eraztunean hasten bada, orduan <math display=\"inline\"><mi>U</mi></math> modu monotonoan haziko da eta soluzioak azkenean <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math> zeharkatuko du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun honako sistema dinamiko hau: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> Jatorria oreka-puntu isolatu bat da, baina hurbilketa lineala nulua da eta ez digu informaziorik ematen. Ez dago Liapunoven funtzioak aurkitzeko metodo orokorrik, baina beti froga daiteke —arrakasta-bermerik gabe— honako egitura hau duen funtzio bat <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><mi>a</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>m</mi></mrow></msup><mo>,</mo></mrow></math> zeinak erraz ikusten uzten duen <math display=\"inline\"><mi>U</mi></math> definitua den<span class=\"j-oin\">[<math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mi>y</mi></math>-ren funtzio koadratiko orokorrago bat ere froga daiteke eta 8.12 problemaren emaitza erabili. Kasu batzuetan problemaren fisika erabil daiteke Liapunoven funtzio egokia aurkitzen saiatzeko.]</span>. Kasu partikular honetan honako hau lortzen da <math display=\"block\"><mrow><mover><mi>U</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>4</mn><mi>n</mi><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>m</mi><mi>a</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mi>y</mi></math>-ren berretura bakoitidun bi gaiak (zeinu definiturik ez dutenak) ezaba ditzakegu <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math> aukeratuz. Beraz, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math> positibo definitua dela ikusten dugu eta haren deribatua <math display=\"inline\"><mrow><mover><mi>U</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>4</mn><msup><mi>y</mi><mn>4</mn></msup></mrow></math> negatibo erdidefinitua eta, ondorioz, jatorria oreka-puntu egonkorra da. Deribatua definitua ez denez, Liapunoven funtzio honek ez digu erabakitzen uzten, gainera, asintotikoki egonkorra den ala ez. Horretarako beste Liapunoven funtzio bat beharko litzateke, baina lehen adierazi den bezala salbuespenezkoak dira haiek eraiki ditzakegun kasuak. 8.22 irudiaren analisi numerikoak erakusten du, aurkitutako Liapunoven funtzioak hori frogatzen uzten ez badu ere, jatorria kasu honetan ez dela egonkorra soilik baizik eta asintotikoki egonkorra ere bai, izan ere ibilbide guztiak jatorrian <math display=\"inline\"><mi>y</mi></math> ardatzarekiko paralelo sartzen baitira."
    },
    {
     "mota": "testua",
     "html": "Erraza da adibide honetan zer gertatzen den ulertzea arrazonamendu kualitatibo oinarrizko batzuk erabiltzen baditugu. Hasierako baldintza <math display=\"inline\"><mi>y</mi></math> ardatzean aukeratzen bada, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> izango dugu eta puntua ardatz horretan zehar eta jatorrirantz mugituko da, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> txikituz joango baita kasu horretan <math display=\"inline\"><mi>y</mi></math> eta haren deribatua <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup></mrow></math> zeinu aurkakoetakoak direlako. Ardatz bertikaletik kanpo, sistema <math display=\"inline\"><mrow><mi>y</mi><mo>≤</mo><mn>0</mn></mrow></math> erdiplanoan hasten bada, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> da eta <math display=\"inline\"><mi>y</mi></math> haziz joango da puntua <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> erdiplanora iritsi arte, nondik ez den behekora itzuliko, han <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math> baita. Puntua <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> erdiplanoan dagoenean, <math display=\"inline\"><mi>x</mi></math> eta <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> balioek aurkako zeinua dute eta, horregatik, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> txikituz joango da: puntuak ardatzerdi bertikal positiborantz jotzen du, eta hartatik oso gertu iristean <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math> izango da, eta horregatik jatorrirantz mugituko da."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Erabili <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> Liapunoven funtzioa honako sistemen jatorriaren egonkortasuna eztabaidatzeko: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mrow><mn>5</mn><mi>.</mi></mrow></msup></mrow></math> Egiaztatu egonkortasun linealaren metodoa ez dela baliagarria bi kasu hauetan."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "(8.94) sistemaren fase-espazioa.",
     "src": "media/irudiak/616fa37255c372a2.svg",
     "zabalera": 280
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bakarreko sistema mekaniko disipatiboak"
    },
    {
     "mota": "testua",
     "html": "Ohartu behar da sistema mekaniko disipatiboen (8.71) kasu partikularrean minimoak asintotikoki egonkorrak direla <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, ez Liapunoven metodo zuzenaren ondorioz —energia mekanikoa den Liapunoven funtzioaren deribatua negatibo erdidefinitua soilik baita—, baizik eta bere lehen metodoaren ondorioz. Suposa dezagun <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak minimo isolatu bat duela <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup></mrow></math> puntuan eta zertxobait orokorragoa den sistema mekanikoan <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> funtzioa positiboa dela eta <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntuan soilik deuseztatzen dela. Energia mekanikoaren deribatua, beraz, negatibo erdidefinitua da: <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn></mrow></math>. Liapunoven teoremaren ondorioz aipatutako puntua egonkorra da; baina, oreka-puntuan izan ezik <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math> denez, ikuspuntu fisikotik espero dugu energia mekanikoa modu monotonoan txikitzea eta soluzioak oreka-punturantz jotzea, zeina asintotikoki egonkorra izango baita. [18]-n edo [30]-n ikus daiteke hala gertatzen dela frogatzen duen frogapena. Emaitza hau sistema mekaniko baten energia mekanikoaren ekuazioaren ondorioa da: beste Liapunoven funtzio batzuekin, ordea, negatibo erdidefinitua den deribatu batetik ez da nahitaez egonkortasun asintotikoa ondorioztatzen."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Eztabaidatu osziladore ez-linealen egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>+</mo><mi>ω</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mi>γ</mi></math> konstantea positiboa denean. Zer gertatzen da <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimentsio bakarreko sistema mekaniko kontserbatiboak"
    },
    {
     "mota": "testua",
     "html": "Bigarren motako Liapunoven funtzio bat lehen integral bat da eta, 4.1.1 atalean ikusi genuen bezala, fase-ibilbideen ekuazioa ematen du. Adibiderik garrantzitsuena, bakarra ez bada ere, lehen aztertu ditugun (8.15) sistema mekaniko kontserbatiboena da: energia potentzialaren minimo isolatu bat badago <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>-n, fase-espazioaren <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> puntua energia mekanikoaren minimo bati dagokio eta, hau higiduraren konstante bat denez, puntua zentro egonkorra izango da."
    },
    {
     "mota": "testua",
     "html": "Kasu partikular honetarako 8.7 atalean egin genuen analisi geometrikoa zuzenean heda daiteke kasu orokorrera. Notazioa errazteko suposatuko dugu <math display=\"inline\"><mi>U</mi></math> funtzioak maximo edo minimo bat duela <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puntuan eta han ere <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> aukeratzen dugu."
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuaren inguruan Taylor-en seriean garatuz, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math> baliori dagokion fase-ibilbidearen ekuazioa <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>⋯</mi><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math> da. Hipotesiz, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n dagoen muturra minimo edo maximo bat da; beraz, honako baldintza hau betetzen da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Hori betetzen bada, ekuazio koadratikoa <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>K</mi><mo>,</mo></mrow></math> zeina fase-ibilbideenaren hurbilketa ona izan behar duen oreka-puntutik nahiko gertu, elipse batena da. Ondorioz, espero dugu oreka-puntua zentro bat izatea, zeina hain zuzen Liapunoven teoremaren bigarren kasuak frogatzen duen."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Zentro ez-linealak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Praktikan maizen agertzen diren oreka-puntu ez-hiperbolikoak hurbilketa linealean zentroei dagozkienak dira. Erro karakteristikoak irudikariak dira eta, 8.5.2 atalean ikusi genuen bezala, sistema ez-linealaren oreka-puntua asintotikoki egonkorra edo ezegonkorra den foku bat ere izan daiteke; eta batzuetan —8.21 ariketaren kasuan bezala— mota horretakoa dela frogatzen duen Liapunoven funtzio egoki bat aurki daiteke. Baina atal honetan zentro ez-linealak aztertu nahi ditugu: nola froga daiteke hurbilketa linealean zentro dena mota berekoa dela sistema osoan?"
    },
    {
     "mota": "testua",
     "html": "Aurreko atalean kasu bat ikusi dugu: Liapunoven teoremaren ondorioz, sistemaren lehen integral batek minimo edo maximo isolatu bat badu oreka-puntuan, azken hau zentro bat da. Hori da sistema mekaniko kontserbatiboen energia potentzialaren minimoetan gertatzen dena eta beste kasu batzuetan, hurrengo adibideak erakusten duen bezala."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu honako sistemaren jatorriaren erro karakteristikoak <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> eta ondorioztatu hura hurbilketa linealean zentro bat dela. Froga ezazu funtzioa <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> lehen integral bat dela eta minimo bat duela jatorrian. Nolakoak izango dira jatorritik oso gertu dauden fase-ibilbideak?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hurrengo ataletan zentro ez-linealen beste kasu ohiko batzuk aztertuko ditugu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema dinamiko kontserbatiboak"
    },
    {
     "mota": "testua",
     "html": "Definizioz, sistema dinamiko kontserbatiboetan fase-espazioaren area kontserbatzen da. Beraz, sistema horietan fokuak eta adabegiak baztertuta daude, haien inguruan fase-espazioaren area hazi egiten baita ezegonkorrak direnean eta txikitu asintotikoki egonkorrak direnean. Mota honetako sistemen hurbilketa linealean <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math></span> denez, oreka-puntua honako kategorietako batekoa baino ezin da izan, bai hurbilketa linealean bai sistema osoan:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, zentro egonkor bat."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada, lepo ezegonkor bat."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math> denean, hurbilketa linealaren oreka-puntua ez da isolatua (ikus 8.3 problema) eta beste motako metodo bat erabili behar da sistema osoaren oreka aztertzeko."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.104) sistema kontserbatiboa dela. Egiaztatu fase-espazioa 8.23 irudikoa dela."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "(8.104) sistemaren fase-espazioa.",
     "src": "media/irudiak/662a4f3249a7242b.svg",
     "zabalera": 289
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema dinamiko hamiltondarrak"
    },
    {
     "mota": "testua",
     "html": "Liouvilleren teoremaren arabera sistema hamiltondarrak kontserbatiboak direnez, haietan zentro linealak beti dira sistema osoaren zentroak."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.104) sistema hamiltondarra dela."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema dinamiko itzulgarriak"
    },
    {
     "mota": "testua",
     "html": "Azter dezagun honako dimentsio bakarreko sistema mekaniko hau <math display=\"inline\"><mi>γ</mi></math> konstantea denean: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> Osziladore ez-lineal honen jatorria zentro lineal bat da, hurbilketa lineala osziladore harmonikoa baita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.106) ekuazioari lotutako <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mi>γ</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></math> sistema ez dela kontserbatiboa (ezta, beraz, hamiltondarra ere) eta ezin dela energia mekanikoa Liapunoven funtzio gisa erabili."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oreka-puntu ez-hiperboliko honen egonkortasuna aztertzeko sistemaren simetria erabiliko dugu; hain zuzen, (8.107) sistema aldaezina da denbora-inbertsioaren aurrean: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aldaketa egiten badugu, sistemak berak ez du aldatzen. Beraz, fase-ibilbide bakoitzak «biki» bat du, zeina lehenengoaren <math display=\"inline\"><mi>x</mi></math> ardatzaren inguruko isladapena egin ondoren aurkako ibilbide-noranzkoa aukeratuz lortzen den. Argi dago foku baten inguruan fase-espazioak"
    },
    {
     "mota": "irudia",
     "oina": "(8.107)-ren fase-ibilbide bat eta haren «bikia».",
     "src": "media/irudiak/bd179ea3825071e0.svg",
     "zabalera": 223
    },
    {
     "mota": "testua",
     "html": "ezin duela mota honetako simetriarik izan; beraz, fokuak baztertuta daude eta hurbilketa linealean zentro bat badago gauza bera gertatuko da sistema osoan."
    },
    {
     "mota": "testua",
     "html": "Testuinguru orokor batean, suposa dezagun fase-espazioan definitutako <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eraldaketa batek, bi aldiz aplikatuta, jatorrizko puntua berrezartzen duela: <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math>. Sistema dinamikoa <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eraldaketaren aurrean aldaezina bada, <strong>itzulgarria</strong> dela esaten dugu, eta hurbilketa linealean zentro diren puntuak mota berekoak dira sistema osorako. (Ikus [28] testua)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.104) sistema itzulgarria dela. Zein da fase-espazioak aurkezten duen simetria?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Kasu partikular gisa, berriro ikusten dugu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistema mekaniko kontserbatiboaren energia potentzialaren minimoak zentroei dagozkiela, sistema horiek, hamiltondarrak eta kontserbatiboak izateaz gain, itzulgarriak baitira."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Muga-zikloak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Soluzio periodikoak, fase-espazioan orbita itxiak sortzen dituztenak, ez dira arraroak. Adibidez, potentzial-putzu batean harrapatutako partikula klasiko batek orbita periodiko bat deskribatzen du minimoaren inguruan. Oreka-puntuaren inguruko oszilazio kasu hauetan soluzio periodikoen familia oso bat dugu, baina <strong>muga-ziklo</strong> baten existentzia ere posible da, zeina definizioz orbita periodiko isolatu bat den, hau da, haren ingurune nahiko txiki bateko inolako baldintzak beste orbita itxi bat sortzen ez duena. Ikus dezagun adibide bat: izan bedi sistema ez-lineala <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>λ</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>+</mo><mi>λ</mi><mi>y</mi><mo>−</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Sistema dinamiko hau adibide akademiko bat da eta, horregatik, dirudiena baino askoz sinpleagoa."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu (8.108)–(8.109) sistema koordenatu polarretan honela idazten dela: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>λ</mi><mi>r</mi><mo>−</mo><msup><mi>r</mi><mn>3</mn></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ikusten dugu, beraz, sistema koordenatu hauetan desakoplatzen dela eta angeluaren bilakaera tribiala dela, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>. Has gaitezen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> oreka-puntuaren egonkortasuna aztertzen, zeina (8.110)-en <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> puntu finkoari dagokion."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu (8.108)–(8.109)-ren jatorriaren berretzaile karakteristikoak <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>λ</mi><mo>±</mo><mi>i</mi></mrow></math> direla, eta (8.110)-ena, berriz, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>λ</mi></mrow></math> dela."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "(8.108)–(8.109)-ren fase-espazioa <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math> kasurako.",
     "src": "media/irudiak/1a1ee700014b7ce5.svg",
     "zabalera": 162
    },
    {
     "mota": "testua",
     "html": "Bi bideetatik aurkitzen dugu jatorria asintotikoki egonkorra den foku bat dela <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> kasurako —8.25 irudian ikusten den bezala— eta foku ezegonkor bat <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> kasurako, hau da, bifurkazio bat gertatzen dela —<strong>Hopf-en bifurkazio</strong><span class=\"j-oin\">[<strong>Heinz Hopf</strong> (1894-11-19, Breslau, Alemania —gaur Wrocław deitzen da eta Polonian dago—; 1971-06-03, Zollikon, Suitza). Bereziki topologia aljebraikoan lan egin zuen. Eremu bektorialak aztertu zituen eta kurbadura integralerako formula bat aurkitu zuen. Lefschetzen puntu finkoaren teorema ere hedatu zuen, homotopia-klaseak aztertu zituen eta bere izena daraman aldaezina definitu zuen.]</span> deitua— <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> kasurako oreka-puntuaren egonkortasuna aldatzean."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zer motatako oreka-puntua da (8.108)–(8.109)-ren jatorria <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> denerako?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Baina bifurkazio horretan beste zerbait gertatu da, (8.110) ekuazio erradiala puntu finko bat izatetik bi izatera igaro baita: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> beti existitzen dena eta <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> denean justu jaiotzen dena, 8.26 irudiko bere bifurkazio-diagraman adierazten den bezala, non puntu asintotikoki egonkorra lerro jarraituan agertzen den eta ezegonkorra marraz. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> denean <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>-ren desegonkortzea puntu asintotikoki egonkor berri baten jaiotzarekin bat dator."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu (8.110) ekuazioaren <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> oreka-puntuaren berretzaile karakteristikoa eta frogatu asintotikoki egonkorra dela. Erabili 8.1 atalean zirriborratutako metodo grafikoa 8.26 irudiko bifurkazio-diagrama beste bide batetik egiaztatzeko."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "(8.110) ekuazioaren bifurkazio-diagrama.",
     "src": "media/irudiak/8a00dfc0713b9b97.svg",
     "zabalera": 155
    },
    {
     "mota": "testua",
     "html": "Orain bada, (8.110) ekuazioaren <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> puntu finkoa orbita itxi bat da (zirkularra, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi></mrow></math> baita) eta, beraz, periodikoa, (8.108)–(8.109) bi dimentsioko sistemarena. Gainera, isolatua denez, muga-ziklo batez ari gara."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> asintotikoki egonkorra denez, halaxe izango da <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi></mrow></math> muga-zikloa ere, zeina dimentsio bakarreko erakarle bat izango den, 8.27 irudian ikusten den bezala."
    },
    {
     "mota": "irudia",
     "oina": "(8.108)–(8.109)-ren fase-espazioa <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> kasurako.",
     "src": "media/irudiak/59f03b2bcfcaac55.svg",
     "zabalera": 211
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu (8.110)-en soluzio esplizitua eta frogatu soluzio guztiek bat izan ezik (zein?) muga-zikloranzko jotzen dutela <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> denean."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "8.16 problemak ikusiko dugun bezala, muga-ziklo ezegonkorrak izan daitezke (haien inguruko ibilbideak aldaratzen dituztenak), eta erdiegonkorrak ere bai, hau da, barrutik nahiko gertu dauden ibilbideak erakartzen dituztenak eta kanpotik gertukoak aldaratzen dituztenak, edo alderantziz."
    },
    {
     "mota": "testua",
     "html": "Liapunoven hurbilketa linealarenaren antzeko teoria bat dago muga-zikloetarako, <strong>Floquet-en teoria</strong> deitua, baina Floquet-en berretzaileen kalkulua, zeinak berretzaile karakteristikoen analogoak diren, askoz ere zailagoa da praktikan, bat beti nulua izatearen gertaeraz gain: zikloarekiko ukitzaile den norabideari dagokiona. (8.108)–(8.109) sistema tribialean berretzaile nulu hori <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>1</mn></mrow></math> ekuazioari dagokio, zeinak, baita ere, zikloan zeharreko bilakaera deskribatzen duen, eta bestea <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math> da (zergatik?) eta norabide erradialari dagokio."
    },
    {
     "mota": "testua",
     "html": "Justuki ospetsua den teorema bat aipatuko dugu, zeinak, funtsean, ziurtatzen duen bi dimentsioko sistema autonomoetan ondorengoa baino ezin dela gertatu: soluzioak puntu finko baterantz jo dezake (zeina infinitua izan daitekeen), edo periodikoa izan, edo soluzio periodiko baterantz jo."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Poincaré-Bendixson",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi planoaren eskualde konpaktu bat (itxia eta bornatua)  <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math>, zeinak (8.5)–(8.6) sistema dinamikoaren puntu kritikorik ez duen. Ibilbide bat <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math>-n irauten badu <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> guztietarako, edo itxia da (periodikoa) edo ibilbide itxi baterantz jotzen du. Edozein kasutan <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math>-n ibilbide periodiko bat dago."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Emaitza honen frogapen bat Hirsch eta Smale-ren liburuan aurki daiteke [19], adibidez."
    },
    {
     "mota": "testua",
     "html": "Atal hau amaitzeko, <strong>Liénard-en ekuazio orokortua</strong> hartuko dugu kontuan osziladore-eredu orokor batean, zeinak osziladore linealak eta van der Pol-ena barne hartzen dituen eta honako egitura hau duen: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Honela definitzen badugu <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Levinson-Smith-en teoremak</strong>"
    },
    {
     "mota": "testua",
     "html": "—zeina <strong>Liénard-en teorema</strong> izenez ere ezagutzen den eta zeinaren frogapena irakurle interesatuak Simmons-en testuan aurki dezakeen [8]— ziurtatzen du"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>f</mi></math> bikoitia bada eta deribatu jarraitua badu,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> konstante bat badago, halako moldez non"
     ]
    },
    {
     "mota": "testua",
     "html": "   <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math> denerako, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "   <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math> denerako, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> positiboa, gorakor monotonoa eta <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> den,"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mi>g</mi></math> bakoitia bada, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>  <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denerako eta deribatu jarraitua badu, eta"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math>,"
     ]
    },
    {
     "mota": "testua",
     "html": "orduan (8.112) Liénard-en ekuazio orokortuak soluzio periodiko bakar bat duela, zeinak jatorria inguratzen duen, eta gainerako soluzio guztiek, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> puntu finkoa salbu noski, harenganantz jotzen dute espiralean."
    },
    {
     "mota": "testua",
     "html": "Muga-zikloaren adibide ez hain tribial bat 7. kapituluan ikusi genuen van der Pol-en osziladorea (7.35) aztertzean. Hura behatu dezakegu, harenganantz jotzen duten zenbait orbitarekin batera, 8.28 irudian <math display=\"inline\"><mi>ε</mi></math>-ren balio batetarako, zeina handiegia den 7.4.2 ataleko azterketa perturbatiboa zuzenean aplikagarria izan dadin: haren existentzia oraintxe ikusi dugun teorema erabiliz frogatzen da."
    },
    {
     "mota": "irudia",
     "oina": "van der Pol-en osziladorearen muga-zikloa <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn></mrow></math> kasurako.",
     "src": "media/irudiak/2ce8bf863527fb29.svg",
     "zabalera": 214
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu van der Pol-en ekuazioak (7.35) betetzen dituela, <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> denerako, Levinson-Smith-en teoremaren hipotesiak, eta horregatik asintotikoki egonkorra den muga-ziklo bat duela."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Luzapena beste produktu batean",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dimentsio gehiagoko sistemak, kaos determinista eta erakarle arraroak (temariotik kanpoko luzapena) <code>03mm_08kaosa</code> eranskin-produktuan daude."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "Verhulst-en ekuazioa<span class=\"j-oin\">[<strong>Pierre François Verhulst</strong> (1804-10-28, Brusela; 1849-02-15, Brusela). Zenbakien teorian lanean hasi bazen ere, laster estatistika sozialaz interesatu zen, non populazioaren hazkunde-legeari buruzko ikerketa garrantzitsuak egin baitzituen, zeina lehenago geometrikoa zela uste baitzen. Bere izena daraman ekuazio ez-lineala proposatu eta aztertu zuen, zeinak populazio biologiko baten bilakaera deskribatzen duen.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aztertu honako sistemaren oreka-puntuen egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ε</mi><mi>x</mi><mo>−</mo><mi>σ</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mi>ε</mi></math> eta <math display=\"inline\"><mi>σ</mi></math> parametroen balio desberdinetarako."
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
       "html": "Frogatu honako sistemaren puntu ez-kritiko batetik abiatzen den ibilbide bat <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> ezin dela oreka-puntu batera iritsi denbora-tarte finitu batean."
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
       "html": "Eztabaidatu sistema linealaren jatorriaren egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denean."
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
       "html": "Aztertu, <math display=\"inline\"><mi>ε</mi></math> parametroaren balio desberdinetarako, honako sistemaren jatorriaren egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ε</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>ε</mi><mi>y</mi><mi>.</mi></mrow></math>"
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
       "html": "Eztabaidatu honako sistemaren puntu kritiko guztien egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>x</mi><mi>y</mi><mo>−</mo><mn>2</mn><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Lepo ez-lineala",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu honako sistemak eta haren hurbilketa linealak lepo ezegonkor bat dutela jatorrian: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Aurkitu oreka-puntuaren barietate egonkorra eta ezegonkorra hurbilketa linealaren kasuan. Har ezazu orain sistema ez-lineala, frogatu <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> zuzena eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>3</mn></mrow></math> parabola multzo aldaezinak direla eta ondorioztatu jatorriaren barietate egonkorra eta ezegonkorra direla, hurrenez hurren. Marraztu bi sistemen fase-espazioak."
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
       "html": "Aztertu honako sistema ez-linealen jatorriaren izaera: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (a) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (b) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Ikertu honako sistemaren oreka-puntuaren egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mi>.</mi></mrow></math>"
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
       "html": "Aztertu honako sistemaren soluzio tribialaren egonkortasuna <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
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
       "html": "Frogatu <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math> bada <math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math> denerako, eta <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>i</mi><mi>i</mi></mrow></msub><mo>&lt;</mo><mn>0</mn></mrow></math>, orduan sistema linealaren soluzio tribiala <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>j</mi></msub></mrow></math> egonkorra dela, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> Liapunoven funtzio bat baita."
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
       "html": "<math display=\"block\"><mi>α</mi></math> parametroaren zein baliotarako da egonkorra honako sistemaren puntu finkoa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>z</mi><mo>−</mo><mi>x</mi><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Forma definituak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Frogatu <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mi>y</mi><mo>+</mo><mi>c</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> funtzioa positibo definitua dela baldin eta soilik baldin <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>&lt;</mo><mn>0</mn></mrow></math> badira. Zein da negatibo definitua izan dadin baldintza beharrezko eta nahikoa?"
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
       "html": "Aztertu <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren egonkortasuna honako sisteman <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
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
       "html": "Frogatu Liapunoven funtzio egoki baten bidez honako ekuazio-sistemaren jatorria <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> asintotikoki egonkorra (ezegonkorra) dela <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>  (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>) bada jatorriaren ingurune batean, nahiz eta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deuseztatu. Nolakoa izango da ibilbideen geometria puntu kritikoaren inguruan?"
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
       "html": "Aztertu Liapunoven funtzioek <math display=\"block\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup></mrow></math> honako sistemaren jatorriaren egonkortasunari buruz ematen duten informazioa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> Nola ezarri zitekeen egonkortasun hori errazago?"
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
       "html": "Frogatu, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>≡</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> bada, honako sistemak <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mfrac><mi>x</mi><mi>r</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><mi>r</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren erroei dagozkien soluzio periodikoak dituela. Zein da ibilbide itxien ibilbide-noranzkoa? Nola aztertuko litzateke haien egonkortasuna? Zehaztu aurreko sistemaren soluzio periodiko guztiak eta eztabaidatu haien egonkortasuna, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>r</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> denean."
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
       "html": "Aurkitu honako sistemaren puntu kritikoak <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Zehaztu ibilbideen ekuazioa eta egin fase-espazioaren grafiko bat."
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
       "html": "Aurkitu ibilbideen ekuazioa eta marraztu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren fase-espazioa. Zer gertatzen da lehen gaiari <math display=\"inline\"><mrow><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> gai disipatibo bat gehitzen bazaio <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> izanik?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Duffing-en ekuazioa",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math> ekuazioaren jatorria <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> izanik. Marraztu haren barietate egonkorra eta egiaztatu bi erakarleen erakarpen-arroen arteko muga dela."
      },
      {
       "mota": "testua",
       "html": "<em>Oharra:</em>  <strong>erakarpen-arro</strong> deitzen zaio erakarle baterantz jotzen duten soluzioak igarotzen diren fase-espazioko puntuen leku geometrikoari."
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
       "html": "Aztertu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>-ren fase-espazioa."
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
       "html": "Aurkitu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math>-ren bifurkazioen balio kritikoa, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>. Eztabaidatu ekuazioaren fase-espazioaren itxura <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>10</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math> balioetarako."
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
       "html": "Marraztu honako sistemaren fase-espazioa <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Marraztu honako sistema dinamikoaren fase-espazioa: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Bikoiztasuna koadernoan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Problema hau bi aldiz agertzen da erabiltzailearen koadernoan (<code>metodoak/ebazpenak/e02_egonkortasuna.typ</code>-eko 18. ariketa, saio osoa, eta <code>metodoak/ebazpenak/e03_jarraipena.typ</code>-eko 31. ariketa, saio labur eten bat, non berak dio sistema bera 18. ariketan osorik dagoela); hemen saio osoa bakarrik txertatu da."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Puntu finkoak.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>; eta <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>. <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math> idatzita <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>: zentroa (sistema linealean)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><msqrt><mn>3</mn></msqrt><mo>−</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>: zela-puntua."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>&gt;</mo><mn>0</mn></mrow></math>: beste zela-puntu bat."
      },
      {
       "mota": "testua",
       "html": "<strong>Marrazteko.</strong> Orientazioak lortzeko <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua aztertu (<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eremuka), soluzio partikularrik behar gabe."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>A</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Zehaztu honako sistemaren muga-zikloa <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mo>+</mo><mfrac><mi>x</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> eta eztabaidatu haren egonkortasuna."
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
       "html": "Frogatu honako ekuazioak muga-ziklo bat onartzen duela: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Aurkitu 8.24 problemako sistemaren Liapunov-en berretzaile maximoa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimentsio fraktala",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Egiaztatu espazioaren azpimultzo «normalak» (puntu bat, kurba edo gainazal leun bat, poliedro baten barrualdea…) estaltzeko <math display=\"inline\"><mi>ε</mi></math> aldeko <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>k</mi><msup><mi>ε</mi><mrow><mi>−</mi><mi>d</mi></mrow></msup></mrow></math> kubo behar direla <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> limitean, non <math display=\"inline\"><mi>d</mi></math> dimentsioa den (0, 1, 2 eta 3 aipatutako adibideetan). Frogatu emaitza hau honela idatz daitekeela"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ε</mi></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "non <math display=\"inline\"><mi>k</mi></math> konstantea desagertu den, zeina multzoaren tamainaren menpe dagoen, baina ez haren dimentsioaren menpe. Honek <strong>dimentsioaren</strong> definizio gisa (8.126) erlazioa erabiltzeko aukera ematen du. Har ezazu"
      },
      {
       "mota": "testua",
       "html": "<strong>Cantor-en hirutar multzoa</strong>"
      },
      {
       "mota": "testua",
       "html": ", zeina modu errekurtsiboan definitzen den 8.38 irudian adierazten den bezala:"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "unitate-segmentutik abiatuta, erdiko herena ezabatzen da;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "geratzen diren bi herenetako bakoitzean gauza bera egiten da, halako moldez non dagozkien erdiko herenak ezabatzen diren;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "geratzen diren segmentu bakoitzean prozesua errepikatzen da;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "…"
     ]
    },
    {
     "mota": "testua",
     "html": "Limitean geratzen den puntu-multzoa (zeina, Cantorrek berak definitutako zentzu zehatzean, hasieran zeudenak beste batitu, izan ere haien arteko korrespondentzia bat-bana ezar baitaiteke) Cantor-en hirutar multzoa da. Frogatu haren luzera nulua dela. Kalkulatu haren dimentsioa eta egiaztatu ez dela osokoa, hau da,"
    },
    {
     "mota": "testua",
     "html": "<strong>fraktal</strong>"
    },
    {
     "mota": "testua",
     "html": "baten aurrean gaudela."
    },
    {
     "mota": "irudia",
     "oina": "Cantor-en hirutar multzoaren eraikuntza.",
     "src": "media/irudiak/20a7981b04edfbae.svg",
     "zabalera": 216
    },
    {
     "mota": "problema",
     "izena": "Lotka-Volterra-ren ekuazioak",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Gerra-garaietan Adriatikoko uretan marrazoen ugaritzea azaltzeko, Volterrak harrapari eta harrapakinaren eredu klasikoa sartu zuen elkarrekintzan dauden populazioen dinamika deskribatzeko. Eredu hau, unitate egokietan eta <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> izanik, honela adieraz daiteke"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "Sistemaren soluzioa ezin da oinarrizko funtzioen bidez idatzi, baina fase-espazioko ibilbideen ekuazioa sinplea da. Aurkitu ezazu. Aztertu sistemaren oreka-puntuen egonkortasuna eta zirriborratu fase-espazioaren diagrama."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Hari leun batean sartutako alea.",
     "src": "media/irudiak/0e57762c181e857c.svg",
     "zabalera": 167
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu hari leun batean sartutako ale bat, forma erdizirkularrekoa, ardatz bertikalaren inguruan <math display=\"inline\"><mi>ω</mi></math> abiadura angeluar konstantez biratzen duena, 8.39 irudian adierazten den bezala. Eztabaidatu alearen oreka erlatiboko angeluen egonkortasuna, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mi>/</mi><mi>g</mi></mrow></math> parametro adimentsionalaren arabera."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Diferentzia finituetako ekuazioak (bis)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "3.37 problemak ikusi genuen Euler-en metodoa diferentzia finituetako ekuazio linealak ebazteko erabil daitekeela eta honako adibidea aztertu genuen <math display=\"block\"><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>,</mo></mrow></math> non <math display=\"inline\"><mi>n</mi></math> osokoa den. Eztabaidatu sistema dinamiko diskretu honen oreka-puntuen egonkortasuna."
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
       "html": "Existentziaren eta bakartasunaren teoremak baieztatzen uzten du <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> motako ekuazio baten orbitak ez direla fase-espazioan mozten. Nola uztartzen da hau potentzialaren maximo bati dagokion zela-puntu baten diagrama klasikoarekin, irudian agertzen dena? Arrazoitu erantzuna."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Fase-espazioa portu batetik gertu.",
     "src": "media/irudiak/7db974f88cfaa447.svg",
     "zabalera": 165
    },
    {
     "mota": "problema",
     "izena": "Potentzial zentrala",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Izan bedi <math display=\"inline\"><mi>m</mi></math> masako partikula puntual bat <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzial zentral baten barruan mugitzen dena. Har ezazu dimentsio bakarreko problema baliokidea eta aurkitu <math display=\"inline\"><mi>L</mi></math> momentu angeluar jakin baterako haren oreka-puntuak zehazten dituen baldintza. Eztabaidatu haien egonkortasuna. <math display=\"inline\"><mi>n</mi></math>-ren zein baliotarako izango dira egonkorrak <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math> bada? Frogatu azken emaitza <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>L</mi></math> eta <math display=\"inline\"><mi>k</mi></math>-rekiko independentea dela. Zer esan nahi du dimentsio bakarreko problemako puntu baten egonkortasunak partikularen hiru dimentsioko higidurarako?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimentsio bakarreko indar-eremua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Zergatik dira periodikoak dimentsio bakarreko indar-eremu batean mugitzen den partikula baten orbita bornatu guztiak? (Bi eta hiru dimentsiotan, aldiz,"
      },
      {
       "mota": "testua",
       "html": "<strong>Bertrand-en teoremak</strong>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-oin\">[<strong>Joseph Louis François Bertrand</strong> (1822-03-11, Paris; 1900-04-05, Paris). Mekanikan bere izena daraman teoremaz gain, zenbakien teorian eta geometria diferentzialean egindako ekarpenak gogoratzen dira, baina bereziki ezaguna da probabilitateen teorian egindako lanengatik, non Bertrand-en paradoxa bat dagoen.]</span> ziurtatzen du hau, indarra zentrala bada, soilik potentzial newtondarretarako, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>, eta harmoniko isotropoetarako, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, gertatzen dela.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Orbita zirkularrak erlatibitate orokorrean",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "7.11 problemak ikusi den bezala, erlatibitate orokorrean Kepler-en problemaren orbitaren ekuazioa koordenatu polarretan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> honela idatz daiteke <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mi>ε</mi><mi>p</mi><msup><mi>u</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> izanik. <em>Semilatus rectum</em>  <math display=\"inline\"><mi>p</mi></math> positiboa da eta <math display=\"inline\"><mi>ε</mi></math>, oro har, oso txikia. Aurkitu ekuazio honen oreka-puntuak eta aztertu haien egonkortasuna. Frogatu puntu finko bakoitza espazio fisikoan orbita zirkular bati dagokiola. Egiaztatu zure emaitzak bat datozela kasu ez-erlatibistan (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>-ri dagokiona) gertatzen dela dakizunarekin."
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
       "html": "Erabili 8.34 problemaren analisia Merkurioren prezesio-periodoa modu azkarrean kalkulatzeko, zeina jada 7.11 problemak kalkulatu zen, eszentrikotasun baxuko orbiten kasu partikularrerako."
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
       "html": "Zer gertatzen da 7.12 problemaren oreka-puntuaren egonkortasunarekin <math display=\"inline\"><mi>ε</mi></math> txikia ez denean?"
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
       "html": "Nola lagunduko luke honako sistemaren oreka-puntuen (agian ez isolatuak edo ez-hiperbolikoak) egonkortasuna eztabaidatzen <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> honako baldintza betetzen duen <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzio ez-konstante bat ezagutzeak <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>?</mi></mrow></math> Aplikatu erantzuna honako ekuazioari lotutako sistemari <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> izanik."
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
       "html": "Har ezazu (8.57)–(8.58)  sistema: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mi>.</mi></mrow></math> Aurkitu haren oreka-puntua eta frogatu egonkorra dela <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>…</mi></mrow></math> direnerako. Noiz da asintotikoki egonkorra?"
      },
      {
       "mota": "testua",
       "html": "<em>Iradokizuna:</em> Aztertu bereiz <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>…</mi></mrow></math> kasuak."
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
       "html": "Zer gertatzen da <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mi>…</mi></mrow></math> direnean 8.38 problemaren sisteman?"
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
       "html": "Partikula bat marruskadurarik gabe mugi daiteke <math display=\"inline\"><mi>R</mi></math> erradioko eraztun bertikal batean zehar, haren tontorrera <math display=\"inline\"><mi>R</mi></math> luzera naturaleko eta <math display=\"inline\"><mi>k</mi></math> konstante berreskuratzaileko malguki batez lotuta dagoen bitartean. Frogatu, koordenatu orokortu gisa 8.41 irudiko <math display=\"inline\"><mi>φ</mi></math> angelua aukeratzen badugu, higiduraren ekuazioa honako hau dela <math display=\"block\"><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Egin orekaren bifurkazio-diagrama <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>R</mi></mrow><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mo>≥</mo><mn>0</mn></mrow></math> parametro adimentsionala erabiliz."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "8.40 problemaren sistema.",
     "src": "media/irudiak/f8c51a88d0fd2214.svg",
     "zabalera": 173
    },
    {
     "mota": "problema",
     "izena": "Orbitak Schwarzschild-en soluzioan<span class=\"j-oin\">[<strong>Karl Schwarzschild</strong> (1873-10-09, Frankfurt am Main, Alemania; 1916-05-11, Potsdam, Alemania). Bere lehen lan zientifikoa (mekanika zerutiarrari buruzkoa) 16 urterekin argitaratu zuen. Astronomian eta astrofisikan lan egin zuen eta, beste gauza batzuen artean, izar-atmosferetako prozesu erradiatiboak ikertu zituen. Espektro atomikoen teoria kuantikoaren aitzindarietako bat da, baina, agian, ezagunagoa da Einsteinen ekuazioen lehen soluzio zehatza argitaratu zuelako. Gainera, soluzio hori garrantzitsuenetako bat da, izarrik sinpleenaren grabitazio-eremua deskribatzen baitu.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Schwarzschild-en soluzioan (partikula puntual baten grabitazio-eremua deskribatzen duena) mugitzen diren fotoien orbitak honako lehen integrala onartzen duen bigarren ordenako ekuazio diferentzial bat betetzen du: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>M</mi></mrow><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>c</mi><mo>=</mo><mn>1</mn></mrow></math> diren unitate geometrikoak erabili diren. Gainera, <math display=\"inline\"><mi>r</mi></math> distantzia polarra da, <math display=\"inline\"><mi>λ</mi></math> denbora ordezten duen parametro «afin» bat, <math display=\"inline\"><mi>M</mi></math> izarraren masa eta <math display=\"inline\"><mi>b</mi></math> «inpaktu-parametroa» (fotoiaren momentu angeluarraren eta linealaren arteko zatidura). Aztertu orbita zirkularren existentzia eta egonkortasuna. Froga ezazu infinitutik <math display=\"inline\"><mrow><mi>b</mi><mo>&lt;</mo><msup><mn>3</mn><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>M</mi></mrow></math> inpaktu-parametroarekin bidalitako argi-izpi bat harrapatua izango dela, <math display=\"inline\"><mi>r</mi></math> «zeruertzaren» <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><mi>M</mi></mrow></math> baliotik beherago bihurtzen baita."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "8.42 problemako <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioaren grafikoa.",
     "src": "media/irudiak/393adb354e32e75f.svg",
     "zabalera": 256
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Har ezazu ekuazio diferentziala <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> non <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> funtzioak 8.42 irudiko grafikoa duen. Aurkitu oreka-puntuak eta eztabaidatu haien egonkortasuna. Marraztu <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> betetzen dituzten soluzioen grafikoak eta aurkitu kasu horietan lortzen diren <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></msub><mi>y</mi></mrow></math> balioak."
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
       "html": "Aztertu honako sistemaren oreka-puntuen egonkortasuna eta zirriborratu haren fase-espazioa: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Erabiltzailearen koadernoko problema gehigarriak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Jarraian, erabiltzailearen eskuzko koadernoko (<code>metodoak/ebazpenak/e01_serieak.typ</code>,  <code>e02_egonkortasuna.typ</code> eta <code>e03_jarraipena.typ</code>) sistema dinamiko eta egonkortasun-ariketa gehiago txertatzen dira, liburu ofizialean enuntziatu bereizirik ez dutenak."
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>  hartuta: <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>  hartuta: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>. Beraz: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math></span>. Zela-puntua."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>-rako <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>-rako <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>. Zela-puntua hau ere, <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msqrt><mn>2</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> norabide propioetarako."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>. Nodo ezegonkorra. Bektore propioak: <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math>-erako <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>-rako <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>. Nodo egonkorra. Bektore propioak: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetria.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>  eginda: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, sistema aldaezina da; beraz fase-erretratua simetrikoa da <math display=\"inline\"><mi>x</mi></math> ardatzarekiko."
      },
      {
       "mota": "testua",
       "html": "Simetria gehiago: <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>y</mi></mrow></math> eginda ere sistema aldaezina da."
      },
      {
       "mota": "testua",
       "html": "<strong>Zeinuak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> kurba <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> zirkulua da: zirkuluaren barruan <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&lt;</mo><mn>1</mn><mo>⇒</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>; kanpoan <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&gt;</mo><mn>1</mn><mo>⇒</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> ardatzek ematen dute, eta koadrante bakoitzean <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>-ren zeinua da."
      },
      {
       "mota": "testua",
       "html": "<strong>Lehen integrala:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>⇒</mo><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mi>y</mi><mo>⇒</mo><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo ezegonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Fase-erretratuan: bi zela-puntuak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, nodo ezegonkorra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n (ibilbideak irteten), nodo egonkorra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n (ibilbideak sartzen), eta zirkulu unitatearen inguruko fluxu simetrikoa."
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta haien egonkortasuna: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> denez, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>. Eta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> bada <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math></span>, hau da <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mn>4</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> denez, foku ezegonkorra: espirala kanporantz."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><mo>+</mo><mi>λ</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math></span>. Zela-puntua."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>-erako <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-erako <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Zeinuak.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> zuzenak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>  dira: <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eremuan <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> eremuan <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>; eta abar koadranteka. <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> zuzena <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>  da: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>  (eskuinerantz), <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Sistema mekaniko unidimentsional bat, non <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> den. Aurkitu lehen integrala (energia), puntu kritikoak eta marraztu fase-erretratua <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialarekin batera."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Bigarren ordenako forma: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>, hots <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> non <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Lehen integrala</strong>  (energia):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>λ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>  ekuaziotik: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>λ</mi><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela-puntua</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Zentroa sistema osoaren zentroa ere bada, simetria dagoelako: <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Kontuz: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> puntuan <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∞</mi></mrow></math>, puntu irregularra da; bertan potentziala eta fluxua singularrak dira."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Fase-erretratua: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac></mrow></math>-ren inguruan orbita itxiak (zentroa), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>λ</mi></mrow><mn>2</mn></mfrac></mrow></math>-n zela separatrizekin, eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> zuzen bertikaletik ibilbideak bertikalki igarotzen dira. Azpian <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialaren grafikoa: minimoa zentroan, maximoa zelan, eta leize infinitua <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>-n."
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>. Beraz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Garatuta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>, Jacobiarra: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math></span>  (bikoitza). Bektore propio bakarra: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Baldintza bat, norabide bat: nodo endekatua, ezegonkorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math></span>. Zela-puntua."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>2</mn><mi>b</mi><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Zeinuak.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math> eremuan <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> zuzenen artean <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, kanpoan <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Sistemak <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> simetria du, eta horrek fase-erretratua osatzen laguntzen du: bi puntu kritikoak <math display=\"inline\"><mi>y</mi></math> ardatzean lotuta ageri dira."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo endekatu ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Sistema mekaniko bat: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Faktorizatu, aztertu orekak eta marraztu fase-erretratua potentzialarekin."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Faktorizazioa:</strong> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Orekak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Potentziala.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, beraz <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> eta"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>6</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mn>5</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>20</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>20</mn></msqrt></mrow></math>. Zela-puntua."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>60</mn></msqrt></mrow></math>, bektoreekin <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>±</mi><msqrt><mn>60</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tankeran. Zela-puntua."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>12</mn><mo>−</mo><mn>16</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>, hots <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>15</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>15</mn></msqrt></mrow></math>: sistema linealaren zentroa. Sistema osoan ere zentroa da, simetriagatik (<math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>)."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Puntuek energia bera ez badute, ez dute ibilbide (separatriz) bera partekatzen: hemen bi zelek <math display=\"inline\"><mi>V</mi></math> balio desberdinak dituzte, eta separatrizak bereizita daude."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Fase-erretratua: zentroa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n orbita itxiz inguratuta, zelak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en; azpian <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren grafikoa: maximoak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>-en, minimoa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>-n."
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta haien izaera: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math></span> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>; berdin <math display=\"inline\"><mi>y</mi></math>-rentzat. Lau puntu: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra</strong>  (diagonala): <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>  (bikoitza), norabide guztiak propioak: izar-nodo ezegonkorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: zela-puntua. Bektore propioak ardatzetan: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: zela-puntua hau ere, ardatz-norabideak trukatuta: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>  (bikoitza): izar-nodo egonkorra."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo ezegonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Aztertu honako sistemaren puntu kritikoak, sailkatu eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Bestela <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> eginda, batuketaz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenean <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: ardatz horizontala multzo aldaezina da (ibilbideek ezin dute zeharkatu)."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>  (bikoitza). Nodo egonkorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>: zeinu kontrakoak, zela-puntua. Bektore propioak: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math></span>: zela-puntua ere."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; polinomio karakteristiko bera: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>, zela-puntua."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Aurkitu honako sistemaren puntu kritikoak eta sailkatu: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong> Bi ekuazioak batuta: <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; orduan <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>P</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>−</mo><mn>16</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>: espiral ezegonkorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>−</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>16</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> Zeinu kontrakoak: zela-puntua."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>  (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow></math> beti). Eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra</strong>  (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>y</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mrow></math></span> erabilita): <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>: zela-puntua."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><msqrt><mn>2</mn></msqrt><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt></mrow></math>: zentroa."
      },
      {
       "mota": "testua",
       "html": "Fase-erretratuan: orbita itxiak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-ren inguruan, eta zela-puntua jatorrian bere separatrizekin (orbita itxien multzoa zelaren gainean)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Sistema honek (asmatutakoa) bi puntu kritiko ditu: aztertu haiek eta marraztu fase-diagrama nulklinekin. <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>  (bikoitza), norabide propio guztiekin: izar-nodo ezegonkorra."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>: zela-puntua."
      },
      {
       "mota": "testua",
       "html": "Bektore propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Nulklinak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> zuzenak; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Fase-erretratuan: jatorritik izar gisa irteten diren ibilbideak, eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-eko zela diagonaleko separatrizekin."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Konparaziorako: sistema linealak <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> puntu bera du <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en baina <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>, zentroa: gai ez-linealek erabat aldatzen dute izaera."
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
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Aztertu honako sistemaren puntu kritikoa eta marraztu fase-diagrama: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoa.</strong> Bi ekuazioak batuta <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, eta orduan <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>±</mo><msqrt><mrow><mn>4</mn><mo>−</mo><mn>8</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>: espirala kanporantz."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Aurkitu honako sistemaren puntu kritiko guztiak: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>; ordezkatuta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>-n: <math display=\"block\"><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Kubikoa Ruffini bidez: <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Eta <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>-tik: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⇒</mo><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> erabilita bakoitzean.)"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mn>3</mn><mo>,</mo><mn>4</mn></mrow></msub><mo>:</mo><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Puntuak koadroan kokatu daitezke, baina hemen ez da osatzen puntu bakoitzeko egonkortasun-azterketa (Jacobiarra puntuoetan)."
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
       "html": "Aztertu honako sistemaren puntu kritikoak, zeinuak, lehen integrala eta separatrizak, eta marraztu fase-erretratu osoa: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong>  <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>A</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: zela-puntua, bektoreak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. <strong><math display=\"inline\"><mi>D</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: zela-puntua hau ere, bektoreak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tankeran."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>: sistema linealaren zentroak, oraindik erabaki gabe zentro edo espiral benetakoak diren."
      },
      {
       "mota": "testua",
       "html": "<strong>Zeinuak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>&lt;</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn><mo>⇒</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>&lt;</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math>; berdin <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-rentzat <math display=\"inline\"><mi>x</mi></math>-rekin."
      },
      {
       "mota": "testua",
       "html": "<strong>Lehen integrala:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lehen integrala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Kurba itxiak ematen dituenez, <math display=\"inline\"><mi>B</mi></math> eta <math display=\"inline\"><mi>C</mi></math> zentro benetakoak dira."
      },
      {
       "mota": "testua",
       "html": "<strong>Separatrizak.</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-tik: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>. Faktorizatuta: <math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> Adar bat <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> zuzena da; bestea konika bat. <math display=\"inline\"><mrow><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> puntuak konika betetzen du: <math display=\"inline\"><mrow><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>. Konikaren ebakiak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-rekin: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Fase-erretratua: bi zelak diagonalean, bi zentroak orbita itxiz inguratuta separatriz-koniken barruan."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Sistema honen puntu kritikoak eta Jacobiarra saio labur batean ere aztertu ziren (<code>e01_serieak.typ</code>-eko 9. ariketa), lehen integralik gabe; hemen (<code>e02_egonkortasuna.typ</code>-eko 22. ariketa) azterketa osoa dago, eta hau da hemen txertatu dena."
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
       "html": "Aztertu honako sistemaren oreka-puntuak, sailkatu eta marraztu fase-espazioa: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Oreka-puntuak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: Ruffini bidez erroak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>  (hau da, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow></math>: zentroa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>: zela-puntua. Bektore propioak: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  (kanporantz); <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>  (barrurantz)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt></mrow></math>: zentroa."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetria.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> eginda sistema aldaezina: fase-erretratua simetrikoa da <math display=\"inline\"><mi>x</mi></math> ardatzarekiko, beraz zentro linealak benetako zentroak dira."
      },
      {
       "mota": "testua",
       "html": "Fase-erretratua: orbita itxiak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren inguruan, zela <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n separatrizekin, eta kanpoan bi zentroak batera inguratzen dituzten orbita handiak (&quot;zortzi&quot; formako separatrizaren kanpoaldean)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "Aurkitu honako sistemaren puntu finkoak, sailkatu eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu finkoak.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> hartuta, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>. Bestela <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> eginda <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> eskatuko luke: ezinezkoa. Bi puntu: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: zela-puntua. Bektore propioak: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  (kanpora); <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>  (barrura)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> berriro, norabideak trukatuta: <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ere zela-puntua."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio partikularrak.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenean <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: ardatz horizontala multzo aldaezina da, eta bertan <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>  (logistikoa: <math display=\"inline\"><mi>A</mi></math>-tik <math display=\"inline\"><mi>B</mi></math>-rantz doa <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math> tartean)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua.</strong>  <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> zuzenak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>  dira: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> zuzen bertikalak planoa lau eskualdetan banatzen du, geziak eremuka jarrita."
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Trantsizioetan geziak etenik gabe lotu behar dira: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> zuzena ez da orbita, zeinu-aldaketaren marra baino ez."
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
         "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela-puntuak </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ardatza aldaezina </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Aztertu jatorriko puntu finkoa: zentroa ala espirala? <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu finkoa.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakarra."
      },
      {
       "mota": "testua",
       "html": "<strong>Linealizazioa.</strong> Jacobiarra <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, eta jatorrian: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Sistema linealak zentroa dio, baina gai ez-linealak (<math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>) espiral bihur lezake: simetria behar da erabakitzeko."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetria bilatzen.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>  eginda: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math> mantentzen da, baina <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> ateratzen da: ez da sistema bera. Aldiz <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>  eginda: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>→</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mi>✓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>→</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mi>✓</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Sistema aldaezina da: fase-erretratua <math display=\"inline\"><mi>x</mi></math> ardatzarekiko simetrikoa da, ibilbideak ezin dira espiralak izan."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentro benetakoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetria </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Oharra",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Aldaera baterako (<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>) ere balio du arrazoiketa berak: nahikoa da <math display=\"inline\"><mi>y</mi></math>-ren berretura bakoitia izatea simetriak iraun dezan."
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Erabiltzailearen koadernotik, lehia-eredua",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aurkitu honako Lotka-Volterra erako lehia-sistemaren puntu finkoak nulklinen bidez, sailkatu denak eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Nulklinak.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. Ebakiek lau oreka-puntu ematen dituzte (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra:</strong> <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>3</mn></mrow></math>: nodo ezegonkorra. Bektore propioak ardatzak berak: <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>: nodo egonkorra. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>: zela-puntua. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>±</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mn>17</mn></msqrt></mrow></math> zeinu kontrakoak (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>): zela-puntua. <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn><mo>+</mo><msqrt><mn>17</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn><mo>−</mo><msqrt><mn>17</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluzio partikularrak.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzak aldaezinak dira (populazio bat desagertuta bestearen logistikoa geratzen da), eta koadrante positiboko ibilbideak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> nodo egonkorrera doaz."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo ezeg.</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Aztertu honako sistemaren puntu kritikoak eta marraztu fase-erretratua: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntu kritikoak.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiarra.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>  garatuta: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>: foku egonkorra (espirala barrurantz)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> zeinu kontrakoak: zela-puntua. Bektore propioak (<math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></math> erabilita): <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Fase-erretratuan: espirala jatorriaren inguruan, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-eko zelaren separatrizek mugatuta; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> zuzenak <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak dira, eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>-rena."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> foku egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 146. unitatea (METMATCG01_0146, IMG_2025_07_12_12_30_58S.jpg; «MÉTODO MATEMÁTIKOA», 2/12/2014): TEORIA (sistema dinamikoen linealizazioa: jakobiarra A, Delta=(trA)^2-4detA, lambda=(trA±sqrt(Delta))/2, soluzio orokorra autobektoreekin) + ADIBIDEA A=[[-1,-1],[-1/2,-3/2]]: lambda=-1/2,-2 (nodo egonkorra), autobektoreak (-2,1),(1,1). Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Sistema dinamikoen linealizazioa (teoria) + adibidea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Metodoa:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistema ez-lineala oreka-puntu batean linealizatzen da jakobiarraren bidez: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">oreka-puntua</mtext></msub><mi>.</mi></mrow></math> Diskriminantea <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>, eta autobalioak <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> (erreal desberdinak) bada, soluzio orokorra autobektoreekin: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Adibidea: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>9</mn><mi>/</mi><mn>4</mn><mo>&gt;</mo><mn>0</mn></mrow></math>. Ekuazio karakteristikoa <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>λ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> (biak negatiboak <math display=\"inline\"><mo>→</mo></math> <strong>nodo egonkorra</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "<strong>ekarpena</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "norabide motela (erakarlea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "norabide azkarra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Fase-erretratua (adibidea)",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "Adibidearen fase-erretratu zehatza (streamplot): jatorria <strong>nodo egonkorra</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>). Berdez autobektore-norabideak: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (motela, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math>) eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (azkarra, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>). Orbitak jatorrira erakartzen dira, norabide motelari ukituz. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/1b996a7049eb8fc8.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/7b4bebed0ea7a368.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Linealizazio-metodoa eta adibidea (nodo egonkorra, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>) SymPy-z\negiaztatuak, zuzenketarik gabe. Autobektoreak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; soluzio orokorra\nesponentzial beheranzkoen konbinazioa da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0146</code>, <code>IMG_2025_07_12_12_30_58S.jpg</code>; «MÉTODO MATEMÁTIKOA», 2/12/2014). Teoria (linealizazioa) + adibidea (nodo egonkorra). SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p146.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 147. unitatea (METMATCG01_0147, IMG_2025_07_12_12_31_08S.jpg): nodo asintotikoaren analisia (lim y/x), 0146-ren jarraipena. 1. zatia = 0146 nodo egonkorra (y/x→-1/2 A≠0, motela; =1 A=0, azkarra). 2. zatia ADB 2: Ã=[[-1,-1],[9/2,7/2]], lambda=2,1/2 (nodo ezegonkorra). ⚠ ZUZENKETA: lambda=1/2 autobektorea (2/3,1)→(-2/3,1), malda motela +3/2→-3/2; lambda=2→(-1/3,1) malda -3 zuzena. Fase-erretratua (A+B) ADB2rako. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Nodo asintotikoa: hurbilketa-norabidea (0146-ren jarraipena)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>1. zatia</strong> (<code>METMATCG01_0146</code>-ko nodo egonkorra, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>): <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>-n <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>→</mo><mn>0</mn></mrow></math>; hurbilketa-norabidea <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>-k ematen du: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></mrow><mrow><mi>−</mi><mn>2</mn><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></math> azkarrago desagertzen denez, orbitak norabide <strong>motelari</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, malda <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>) ukituz hurbiltzen dira: <strong>nodo asintotiko egonkorra</strong>. (Fase-erretratua: ikus"
    },
    {
     "mota": "testua",
     "html": "<code>METMATCG01_0146</code>"
    },
    {
     "mota": "testua",
     "html": ".)"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "2. zatia — ADB 2: <math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (nodo ezegonkorra)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (biak positibo <math display=\"inline\"><mo>→</mo></math> <strong>nodo ezegonkorra</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "malda <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>",
      "<strong>ekarpena</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>2</mn></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>",
       "norabide azkarra"
      ],
      [
       "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "norabide motela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Zuzenketa:</strong> eskuizkribuak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>-rako <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> idatzi zuen; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>\nekuaziotik autobektore zuzena <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da (malda <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>, ez <math display=\"inline\"><mrow><mi>+</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>). <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>-rena, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,\nzuzena zen. SymPy-z egiaztatua.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (ADB 2)"
    },
    {
     "mota": "irudia",
     "oina": "ADB 2ren fase-erretratu zehatza (streamplot): jatorria <strong>nodo ezegonkorra</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>). Berdez autobektore-norabideak: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (azkarra, malda <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>) eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (motela, malda <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>; zuzendua). Orbitak jatorritik norabide motelari ukituz irteten dira. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/f950fa8df1ddda68.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala), ADB 2. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/c121a7294b5f40fa.svg",
     "zabalera": 335
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0147</code>, <code>IMG_2025_07_12_12_31_08S.jpg</code>). Nodo asintotikoaren analisia (0146-ren jarraipena): nodo egonkorra (1. zatia) eta ezegonkorra (ADB 2). SymPy-z egiaztatua; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> autobektorea zuzendua. Ikus <code>koadernoa_metmatcg01_p147.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 148. unitatea (METMATCG01_0148, IMG_2025_07_12_12_31_31S.jpg): sistema dx/dt=x-x^2+y^2, dy/dt=-y+2xy. BI oreka A(0,0),B(1,0) ZELAK (x=1/2 baztertua, ez erreala); jakobiarra (1-2x,2y;2y,2x-1). SISTEMA HAMILTONDARRA (dibergentzia=0, H=xy-x^2·y+y^3/3); x ardatza aldaezina (lotura heteroklinoa A→B). ⚠ ZUZENKETA: B-ren autobektoreak trukatuta (lambda=1→(0,1), lambda=-1→(1,0)); A-renak zuzenak. Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Sistema Hamiltondarra: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orekak: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>; azkena baztertua (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> ez da erreala), beraz <strong>bi</strong> zela: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Dibergentzia <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>∂</mi><mi>y</mi></msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> denez, sistema <strong>Hamiltondarra</strong> da: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> lehen integrala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>M</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Zuzenketa:</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rako, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> delarik, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>-en autobektorea\n<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> da eta <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>-ena <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; eskuizkribuak trukatuta zituen. <math display=\"inline\"><mi>A</mi></math>-renak zuzenak\nziren. SymPy-z egiaztatua.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zelak</strong>. <math display=\"inline\"><mi>x</mi></math> ardatza aldaezina da (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): lotura heteroklinoa <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math>. Sistema Hamiltondarra (dibergentzia nulua); orbitak <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>-ren maila-kurbak dira. Etenezko lerroak: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/f8c3b29662693446.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/bb4e5d471f99a2e3.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Orekak, jakobiarra, autobalioak eta sailkapena (bi zela) SymPy-z egiaztatuak. Sistema\n<strong>area-kontserbatzailea/Hamiltondarra</strong> da (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>); <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> lehen\nintegrala. <math display=\"inline\"><mi>B</mi></math>-ren autobektoreak zuzenduta.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0148</code>, <code>IMG_2025_07_12_12_31_31S.jpg</code>). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> sistemaren fase-analisia (bi zela, Hamiltondarra). SymPy-z egiaztatua; <math display=\"inline\"><mi>B</mi></math>-ren autobektoreak zuzenduta. Ikus <code>koadernoa_metmatcg01_p148.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 149. unitatea (METMATCG01_0149, IMG_2025_07_12_12_31_39S.jpg): TEORIA (autobalio konplexuak lambda=gamma±i·omega: gamma<0 kiribil egonkorra, gamma>0 ezegonkorra, gamma=0 [2.3] zentroa; soluzio erreala cos/sin) + ADIBIDEA dx/dt=-y, dy/dt=x-y^2: P(0,0) zentroa (lambda=±i, det A=1), itzulgarria R(x,y)=(x,-y) t→-t → zentro benetakoa (dibergentzia=-2y, ez Hamiltondarra). Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Autobalio konplexuak: kiribilak eta zentroa (+ adibidea)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Autobalioak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math> badira, soluzio erreala esponentzial biderkatzaile eta oszilazioz osatzen da: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">c </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>γ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil <strong>egonkorra</strong> (erakarlea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil <strong>ezegonkorra</strong> (uxatzailea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> (2.3)",
       "<strong>zentroa</strong>: orbita itxiak, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">c </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oreka bakarra <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Linealizazioa <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo>→</mo></mrow></math> <strong>zentroa</strong> (linealki). Sistema <strong>itzulgarria</strong> da <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>-rekiko (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mi>P</mi></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzean dago: beraz <strong>zentro benetakoa</strong> da (dibergentzia <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>, ez Hamiltondarra; itzulgarritasunak bermatzen du)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (adibidea)"
    },
    {
     "mota": "irudia",
     "oina": "Adibidearen fase-erretratu zehatza (streamplot): <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zentroa</strong>, orbita itxiez inguratua (itzulgarritasunez benetakoa). Urrunago, <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> gaiak orbitak irekitzen ditu. Etenezko lerroa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> parabola da. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/9baecea56fde216c.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/c01bdbeb46b87498.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Teoria (autobalio konplexuak: <math display=\"inline\"><mi>γ</mi></math>-ren zeinuak kiribil egonkorra/ezegonkorra edo\nzentroa erabakitzen du) eta adibidea (zentroa, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>) SymPy-z egiaztatuak. Zentroa\n<strong>itzulgarritasunez</strong> (<math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) da benetakoa, ez lehen integral batez.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0149</code>, <code>IMG_2025_07_12_12_31_39S.jpg</code>). Teoria (kiribilak/zentroa autobalio konplexuekin) + adibidea <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (zentroa itzulgarria). SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p149.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 150. unitatea (METMATCG01_0150, IMG_2025_07_12_12_31_46S.jpg; «MÉTODO MATEMÁTIKOA», 2/12/2014): ZELA adibidea A=[[-1,-1],[-1,1]], lambda=±√2. ⚠ ZUZENKETA: autobektore-autobalio parekatzea trukatuta; zuzena lambda=√2→(1-√2,1) malda -(1+√2), lambda=-√2→(1+√2,1) malda √2-1. + oreka-moten LABURPENA (autobalio errealak: nodo egonkorra k2<k1<0, ezegonkorra 0<k2<k1, zela aurkakoak; konplexuak gamma±iω: 2.1 kiribil ezegonkorra, 2.2 egonkorra, 2.3 zentroa). Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Zela adibidea + oreka-moten laburpena",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea (zela): <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>=</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mo>→</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math></span> (zeinu aurkakoak <math display=\"inline\"><mo>→</mo></math> <strong>zela</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "malda <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><msqrt><mn>2</mn></msqrt></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>−</mi><mn>2.41</mn></mrow></math>",
       "ezegonkorra (irteera)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>1</mn><mo>≈</mo><mn>0.41</mn></mrow></math>",
       "egonkorra (sarrera)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Zuzenketa:</strong> eskuizkribuak autobektoreak alderantziz parekatu zituen (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). 2. errenkadatik <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>: zuzena <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> da. Soluzio orokorrean <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>\n<math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mn>2</mn></msqrt><mi>t</mi></mrow></msup></math>-rekin doa. SymPy-z egiaztatua.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (adibidea)"
    },
    {
     "mota": "irudia",
     "oina": "Adibidearen fase-erretratu zehatza (streamplot): jatorria <strong>zela</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>). Berdez autobektore-norabideak: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (ezegonkorra, malda <math display=\"inline\"><mrow><mi>−</mi><mn>2.41</mn></mrow></math>) eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (egonkorra, malda <math display=\"inline\"><mn>0.41</mn></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/e342d395d41ce3ae.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/f3052fcceef69c53.svg",
     "zabalera": 335
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-moten laburpena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>autobalioak</strong>",
      "baldintza",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "errealak, desberdinak",
       "<math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "nodo egonkorra"
      ],
      [
       "errealak, desberdinak",
       "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "errealak",
       "zeinu aurkakoak",
       "<strong>zela</strong>"
      ],
      [
       "konplexuak <math display=\"inline\"><mrow><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra (kanpora)"
      ],
      [
       "konplexuak",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil egonkorra (barrura)"
      ],
      [
       "konplexuak",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Zela adibidea eta oreka-moten sailkapena SymPy-z egiaztatuak. Adibidearen autobektoreak\nzuzenduta (<math display=\"inline\"><mi>λ</mi></math> <math display=\"inline\"><mo>↔</mo></math> autobektore parekatzea).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0150</code>, <code>IMG_2025_07_12_12_31_46S.jpg</code>; «MÉTODO MATEMÁTIKOA», 2/12/2014). Zela adibidea (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>) + oreka-moten laburpena. SymPy-z egiaztatua; autobektore-parekatzea zuzenduta. Ikus <code>koadernoa_metmatcg01_p150.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 151. unitatea (METMATCG01_0151, IMG_2025_07_12_12_31_55S.jpg; «5/12/2014»): 0148 sistemaren (dx/dt=x-x^2+y^2, dy/dt=-y+2xy) ANALISI KUALITATIBOA + fase-erretratu marraztua. Bi zela A(0,0),B(1,0); x ardatza aldaezina; Hamiltondarra (H=xy-x^2·y+y^3/3). ⚠ Zuzenketa txikia: dx/dt=0 nulklina x=x^2-y^2 (ez x^2+y^2; ez du 2 orekak aldatzen). Fase-erretratua = phase_0148 berrerabilia. SymPy-z egiaztatua (0148). Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Analisi kualitatiboa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> (0148-ren osagarria)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema bera <code>METMATCG01_0148</code> unitatean (algebra osoa); orri honek (5/12/2014) <strong>analisi kualitatiboa</strong> eta fase-erretratu marraztua eransten ditu. Bi zela <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; jakobiarra <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> kanpora, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> barrura), <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (diagonala)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Analisi kualitatiboaren urratsak"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Nulklinak:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (eskuizkribuak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>; zeinu-akats txikia); <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>.",
      "<strong><math display=\"inline\"><mi>x</mi></math> ardatza aldaezina:</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; fluxua <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong><math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua:</strong> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> nulklinak lau eskualde bereizten ditu (<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>/<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>).",
      "Sistema <strong>Hamiltondarra</strong> da (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>); orbitak <math display=\"inline\"><mi>H</mi></math>-ren maila-kurbak dira."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Sistemaren fase-erretratu zehatza (streamplot; = <code>METMATCG01_0148</code>): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zelak</strong>, <math display=\"inline\"><mi>x</mi></math> ardatza aldaezina (lotura heteroklinoa <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math>), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>-rekiko simetrikoa. Marraztutako eskuizkribu-erretratuaren bertsio zehatza. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/f8c3b29662693446.svg",
     "zabalera": 564
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Sistema = <code>METMATCG01_0148</code> (bi zela, Hamiltondarra, SymPy-z egiaztatua). Orri\nhonek analisi kualitatiboa (nulklinak, <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua, ardatz aldaezina) eta fase-erretratu\nmarraztua ekartzen ditu. Zuzenketa txikia: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> da (ez <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0151</code>, <code>IMG_2025_07_12_12_31_55S.jpg</code>; «5/12/2014»)."
      },
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0148</code>"
      },
      {
       "mota": "testua",
       "html": "sistemaren analisi kualitatiboa + fase-erretratua. SymPy-z egiaztatua (0148). Ikus <code>koadernoa_metmatcg01_p151.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 152. unitatea (METMATCG01_0152, IMG_2025_07_12_12_32_03S.jpg; «MÉTODO MATEMÁTIKOA», 1/12/2014): (goia) 0149 adibidearen simetria (dx/dt=-y, dy/dt=x-y^2: itzulgarria R(x,y)=(x,-y) → zentro benetakoa; hiru fase-erretratu) vs dy/dt=x-y^3 (EZ itzulgarria, div=-3y^2 → foku ahula). (behea) autobalio erreal ERREPIKATUAK: 3.1 nodo izarra (a12=a21=0), 3.2 nodo endekatua (defektiboa). Fase-erretratua (A+B): nodo endekatua argigarria. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Simetria eta zentroa (<math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> vs <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>) + autobalio errepikatuak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Zentroaren simetria: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (0149)"
    },
    {
     "mota": "testua",
     "html": "Sistemak <strong>bi simetria</strong> ditu, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>, hots itzulgarria da <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> involuzioarekiko (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>). Hiru fase-erretratuek (jatorrizkoa, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math> islatua, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> alderantzikatua) <strong>zentro bera</strong> ematen dute <math display=\"inline\"><mo>→</mo></math> <strong>zentro benetakoa</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Kontrastea:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math> EZ da itzulgarria (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) eta dibergentzia <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>≤</mo><mn>0</mn></mrow></math> da: beraz <strong>foku egonkor ahula</strong> da (ez zentroa), nahiz linealizazioak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> eman. Adi: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>-k ez du zentroa bermatzen; itzulgarritasuna (edo lehen integral bat) behar da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autobalio erreal errepikatuak (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi></mrow></math> bikoitza)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "kasua",
      "baldintza",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "3.1",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)",
       "<strong>nodo izarra</strong> (propioa); <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> kanpora, <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> barrura"
      ],
      [
       "3.2",
       "defektiboa (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mn>0</mn></mrow></math>)",
       "<strong>nodo endekatua</strong> (inpropioa); autobektore bakarra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "(3.1 nodo izarra: ikus <code>METMATCG01_0140</code>; 3.2 nodo endekatua: ikus <code>METMATCG01_0127</code>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua: 3.2 nodo endekatua (adibide argigarria)"
    },
    {
     "mota": "irudia",
     "oina": "Nodo endekatuaren (inpropioa) adibide argigarria: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> bikoitza, autobektore bakarra <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Orbita guztiak jatorrira erakartzen dira, autobektore bakarrari (<math display=\"inline\"><mi>x</mi></math> ardatza) ukituz, biraketa-itxura batez. <em>Irudi editoriala (kasu 3.2).</em>",
     "src": "media/irudiak/d184f6e539bf25a3.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala), nodo endekatua. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/998bafe289ee6f0e.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Simetria/itzulgarritasuna eta autobalio errepikatuak SymPy-z egiaztatuak. Ikasgai\nnagusia: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> (linealizazioan) EZ da nahikoa zentroa ziurtatzeko — <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> kasua\nitzulgarria da (zentroa), <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math> kasua ez (foku ahula). Errepikatuetan: izarra (diagonala) edo\nendekatua (defektiboa).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0152</code>, <code>IMG_2025_07_12_12_32_03S.jpg</code>; «MÉTODO MATEMÁTIKOA», 1/12/2014). Simetria (zentroa <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> vs <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>) + autobalio errepikatuak (izarra/endekatua). SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p152.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 153. unitatea (METMATCG01_0153, IMG_2025_07_12_12_32_13S.jpg; «MÉTODO MATEMÁTIKOA», 12/12/2014): sistema ez-lineal osoa (LEHIA-EREDUA, Lotka–Volterra) dx/dt=x(1-x-y), dy/dt=y(3-x-2y). LAU oreka: (0,0) nodo ezegonkorra (k=1,3), (0,3/2) nodo egonkorra (k=-1/2,-3), (1,0) zela (k=-1,2), (-1,2) zela (k=-3/2±½√17, autobektoreak (2,-5±√17)). Jacobiarra [[1-2x-y,-x],[-y,3-x-4y]]; nulklinak x=0/y=1-x, y=0/y=(3-x)/2; autobalio/autobektore guztiak. ⚠ ZUZENKETA: lehen lerroko dx/dt=x(1-2x-y) lapsusa da ('2' soberan); jacobiarrak, y=1-x nulklinak eta 4 orekek (1,0),(-1,2) barne x(1-x-y) eskatzen dute (2-arekin orekak (1/2,0),(-1/3,5/3) lirateke, J11=1-4x-y). Fase-erretratua (A+B) leiho ZABALEAN. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Sistema ez-lineala: lau oreka (bi nodo + bi zela), lehia-eredua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema ez-lineal autonomoa (Lotka–Volterra motako <strong>lehia-eredua</strong>): <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\"><strong>Zuzenketa (lapsusa):</strong> manuskrituak lehen lerroan <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dakar, baina <strong>«2» hori\nsoberan dago</strong>. Jacobiarrak (<math display=\"inline\"><mrow><msub><mi>J</mi><mn>11</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>), <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math> nulklinak eta lau orekek —<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> barne,\nikaslearen <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>→</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> kalkuluak berak— <strong>denek</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eskatzen dute. «2»-arekin\norekak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> lirateke eta <math display=\"inline\"><mrow><msub><mi>J</mi><mn>11</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>. Hemendik aurrera <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (SymPy-z\negiaztatua).</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nulklinak eta oreka-puntuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. Ebakiduretatik <strong>lau oreka</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (Barrukoa: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>→</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>→</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>2</mn></mrow></math></span>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealizazioa: jacobiarra eta sailkapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>J</mi></math> bertan",
      "<strong>autobalioak</strong> <math display=\"inline\"><mi>k</mi></math>",
      "<strong>izaera</strong>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<strong>nodo ezegonkorra</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>3</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<strong>nodo egonkorra</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>3</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>",
       "<strong>zela</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>±</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mn>17</mn></msqrt></mrow></math>",
       "<strong>zela</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>+</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>−</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Bi nodoak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzean daude (jariakin biologikoaren muga), eta bi zelek egitura globala antolatzen dute: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelen adar egonkor/ezegonkorrek orbitak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> nodo egonkorrera bideratzen dituzte."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (leiho zabala)"
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremua (streamplot, kolorea <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>) leiho <strong>zabalean</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.8</mn><mo>,</mo><mn>2.8</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1.8</mn><mo>,</mo><mn>3.6</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>), oreka-puntuez haratago egitura globala erakusteko. Karratu gorriak = zelak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; triangelu berdeak = nodoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezegonkorra eta <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> egonkorra. Marra etenak: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math>) eta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/48b5944d39ef2f73.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala, normalizatua) leiho berean. Geziek fluxuaren norabidea ematen dute puntuz puntu; markatzaileak oreka-moten arabera. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/8c91fffc39e93805.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Lau oreken sailkapena (bi nodo + bi zela), jacobiarra eta autobalio/autobektore <strong>guztiak</strong>\nSymPy-z egiaztatuak. Ikasgai nagusia: sistema ez-linealetan, oreka bakoitzaren izaera <strong>linealizazioaren</strong>\nautobalioek erabakitzen dute (nodo/zela), eta fase-erretratu globala zelen adarrek antolatzen dute. Manuskrituko\n«2»-aren lapsusa zuzenduta.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0153</code>, <code>IMG_2025_07_12_12_32_13S.jpg</code>; «MÉTODO MATEMÁTIKOA», 12/12/2014). Lehia-eredua <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: 4 oreka, jacobiarra, autobalio/autobektore guztiak. Zuzenketa: lehen lerroko «2» lapsusa (SymPy-z baieztatua). Ikus <code>koadernoa_metmatcg01_p153.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 154. unitatea (METMATCG01_0154, IMG_2025_07_12_12_32_20S.jpg): sistema ez-lineala dx/dt=(x+y-1)(x+y), dy/dt=x. Nulklinak x+y=0/x+y=1 (dx/dt=0), x=0 (dy/dt=0). BI oreka: (0,0) FOKU EGONKORRA (lambda=(-1±i√3)/2, Re=-1/2<0, kiribil-hustubidea), (0,1) ZELA (lambda=(1±√5)/2; lambda_+=(1+√5)/2=φ URREZKO ZENBAKIA; autobektoreak ((1±√5)/2,1)). Jacobiarra [[2x+2y-1,2x+2y-1],[1,0]] (dx/dt x+y-ren mende soilik). AKATSIK EZ. Fase-erretratua (A+B) leiho zabalean. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Foku egonkorra + zela: urrezko zenbakia <math display=\"inline\"><mi>φ</mi></math> autobalioetan",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema ez-lineal autonomoa non <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> soilik <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>-ren mende dagoen: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nulklinak eta oreka-puntuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>-n <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> eta <strong>bi oreka</strong> daude: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealizazioa: jacobiarra eta sailkapena"
    },
    {
     "mota": "testua",
     "html": "Garatuz <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math></span>, beraz <math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>-ren mende soilik baitago.)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>J</mi></math> bertan",
      "<strong>autobalioak</strong> <math display=\"inline\"><mi>k</mi></math>",
      "<strong>izaera</strong>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
       "<strong>foku egonkorra</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&lt;</mo><mn>0</mn></mrow></math>)",
       "(kiribil-hustubidea)"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
       "<strong>zela</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\"><strong>Xehetasun ederra:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelaren autobalio positiboa <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>+</mo></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>φ</mi><mo>≈</mo><mn>1.618</mn></mrow></math>\nda, <strong>urrezko zenbakia</strong>; adar ezegonkorraren malda ere <math display=\"inline\"><mi>φ</mi></math>-rekin lotua (<math display=\"inline\"><mrow><msub><mi>v</mi><mo>+</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hots malda <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>φ</mi></mfrac><mo>=</mo><mi>φ</mi><mo>−</mo><mn>1</mn></mrow></math>).\n<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-n berriz <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> (seigarren erroko unitatea), <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>&lt;</mo><mn>0</mn><mo>→</mo></mrow></math> kiribil egonkorra.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (leiho zabala)"
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremua (streamplot, kolorea <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>) leiho <strong>zabalean</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.5</mn><mo>,</mo><mn>2.5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>). Diamante laranja = <strong>foku egonkorra</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (kiribila barrura); karratu gorria = <strong>zela</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Marra etena urdina: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklina (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>); marra berdeak: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>). Fokuaren kiribila eta zelaren adarrak argi ikusten dira. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/9dde7c28c199de77.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala, normalizatua) leiho berean. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/4d8d804496da0f92.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Bi oreken izaera (foku egonkorra vs zela), jacobiarra eta autobalio/autobektore <strong>guztiak</strong>\nSymPy-z egiaztatuak; <strong>akatsik ez</strong> manuskrituan. <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>-ren mende soilik egoteak jacobiarraren\nlehen errenkadako bi sarrerak berdinak izatea dakar (<math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0154</code>, <code>IMG_2025_07_12_12_32_20S.jpg</code>). Sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> foku egonkorra, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela (urrezko zenbakia <math display=\"inline\"><mi>φ</mi></math>). Akatsik ez. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p154.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 155. unitatea (METMATCG01_0155, IMG_2025_07_12_12_32_28S.jpg; «MÉTODO MATEMÁTIKOA», 25/11/2014): TEORIA — egonkortasun-teoria sarrera. Puntu finkoak f(t,x0)=0 gisa; pendulua (zentro+zela) + V(x) potentziala. Adibideak: a) x'=ax (x0=0), b) x'=ax-ax^3=ax(1-x^2) (x=0,±1; a>0: 0 ezeg., ±1 eg.), c) x'=2cos x-cos y, y'=2cos y-cos x (cos x=cos y=0 -> sareta; eliminazioa x'+2y'=3cos y; xake-taula: (+,+) nodo eg. λ=-1,-3; (-,-) nodo ezeg. λ=1,3; nahasiak zelak λ=±√3). Sistema autonomo bidimentsionala P,Q + baldintza KUASILINEALA (lim F/√(x²+y²)=lim G/√(x²+y²)=0) linealizazioarekin. AKATSIK EZ. Fase-erretratua: pendulua (A+B) leiho zabalean (zentro/zela sareta). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Egonkortasun-teoria (sarrera): puntu finkoak eta sistema kuasilinealak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema dinamiko baten <strong>puntu finkoak</strong> (oreka-puntuak) eremua ezeztatzen duten egoerak dira: <math display=\"block\"><mrow><mover><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>0</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Horiek zenbat diren eta zer izaera duten (iturri/hustubide/zela/zentro) sistemaren <strong>dinamika osoa</strong> antolatzen dute. Adibide kanonikoa <strong>pendulua</strong> da: zentroak (biraketa txikiak) eta zelak (goiko oreka ezegonkorra) txandakatzen dira, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> potentzialaren minimo/maximoei lotuta."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak: puntu finkoen kalkulua"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>adibidea</strong>",
      "<strong>ekuazioa(k)</strong>",
      "<strong>puntu finkoak</strong>"
     ],
     "lerroak": [
      [
       "a) lineala",
       "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>",
       "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mn>0</mn></mrow></math>"
      ],
      [
       "b) kubikoa",
       "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>a</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>0</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>"
      ],
      [
       "c) 2D trig.",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <br> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math></span>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>: <br> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>b)-ren egonkortasuna (1D):</strong> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>−</mo><mn>3</mn><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>a</mi></mrow></math>. Beraz <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mn>0</mn></math> ezegonkorra eta <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> egonkorrak dira (alderantziz <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>c)-ren eliminazioa:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math> (eta <math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>), beraz orekan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>. Jacobiarra <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> eta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>±</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span> izanik, orekak <strong>xake-taula</strong> bat osatzen dute:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>+</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "nodo egonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>,</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>3</mn></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>+</mi><mo>,</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> / <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema autonomo bidimentsionala eta kuasilinealtasuna"
    },
    {
     "mota": "testua",
     "html": "Sistema <strong>autonomo</strong> orokorra <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da. Jatorria oreka bada, <strong>kuasilineala</strong> (ia-lineala) da baldin hondar ez-linealak lineala baino azkarrago iraungitzen badira: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Orduan linealizazioak (matrize <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>) oreka-mota erabakitzen du (zela/nodo/foku), <strong>zentro eta mugako kasuetan izan ezik</strong> (han hondarrak erabakitzen du; ikus <code>METMATCG01_0152</code>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua: pendulua (leiho zabala)"
    },
    {
     "mota": "irudia",
     "oina": "Penduluaren (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>) norabide-eremua leiho <strong>zabalean</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>7</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mi>π</mi><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>). Zirkulu urdinak = <strong>zentro benetakoak</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mi>π</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (Hamiltondarra, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>); karratu gorriak = <strong>zelak</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>). Zelen adarrek <strong>separatrizeak</strong> osatzen dituzte (oszilazioa vs errotazioa banatzen). <em>Irudi editoriala (penduluaren eskema argitzeko).</em>",
     "src": "media/irudiak/688198b45946f506.svg",
     "zabalera": 603
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala, normalizatua) leiho berean; zentro/zela sareta. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/95cbd657369dff99.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Hiru adibideak eta penduluaren zentro/zela sareta SymPy-z egiaztatuak; <strong>akatsik ez</strong>.\nIkasgai nagusia: puntu finkoak eremuaren zeroak dira, eta <strong>kuasilinealtasunak</strong> linealizazioaren bidez\noreka-mota erabakitzea ahalbidetzen du (salbuespena: zentroak eta <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> mugako kasuak).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0155</code>, <code>IMG_2025_07_12_12_32_28S.jpg</code>; «MÉTODO MATEMÁTIKOA», 25/11/2014). Egonkortasun-teoria sarrera: puntu finkoak, pendulua/<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, adibideak a/b/c, sistema kuasilineala. Akatsik ez. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p155.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 156. unitatea (METMATCG01_0156, IMG_2025_07_12_12_32_34S.jpg): sistema ez-lineala dx/dt=y-y^3, dy/dt=-x-y^2. HIRU oreka: A(0,0), B(-1,1), C(-1,-1) (dx/dt=0->y=0,±1; dy/dt=0->x=-y^2). Jacobiarra [[0,1-3y^2],[-1,-2y]]. M_A=[[0,1],[-1,0]] (lambda=±i, zentro lineala -> ZENTRO BENETAKOA, sistema ITZULGARRIA R=(x,-y), A ardatz finkoan y=0; dibergentzia=-2y ez Hamiltondarra); M_B=[[0,-2],[-1,-2]] zela (lambda=-1±√3); M_C=[[0,-2],[-1,2]] zela (lambda=1±√3). AKATSIK EZ (matrize guztiak zuzenak); gehigarria=A zentro benetakoaren frogapena. Fase-erretratua (A+B) leiho zabalean. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Zentro itzulgarria + bi zela",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema ez-lineal autonomoa: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak eta jacobiarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Beraz hiru oreka: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiar orokorra: <math display=\"block\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>M</mi></math> bertan",
      "<math display=\"inline\"><mtext mathvariant=\"normal\">tr</mtext></math>, <math display=\"inline\"><mi mathvariant=\"normal\">det</mi></math>",
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mo>;</mo><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>",
       "<strong>zentro lineala</strong> <math display=\"inline\"><mo>→</mo></math> benetakoa (itzulg.)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>,</mo><mo>;</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mo>;</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: zentro lineala <math display=\"inline\"><mo>→</mo></math> zentro benetakoa (itzulgarritasuna)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>A</mi></math>-n <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> da (zentro lineala), baina <strong>horrek bakarrik ez du zentroa bermatzen</strong> (ikus <code>METMATCG01_0149</code>, <code>METMATCG01_0152</code>). Kasu honetan sistema <strong>itzulgarria</strong> da <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> involuzioarekiko (eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>): <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mo>,</mo></mrow></math> eta <math display=\"inline\"><mi>A</mi></math> <strong>ardatz finkoan</strong> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>) dagoenez, <strong>zentro benetakoa</strong> da. Adi: dibergentzia <math display=\"inline\"><mrow><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mi>P</mi><mo>+</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>Q</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math> ez da identikoki nulua, beraz <strong>ez da Hamiltondarra</strong>; itzulgarritasunak (ez azalera-mantentzeak) ematen du zentroa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (leiho zabala)"
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremua (streamplot, kolorea <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>) leiho <strong>zabalean</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.6</mn><mo>,</mo><mn>1.4</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>). Zirkulu urdina = <strong>zentro benetakoa</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (orbita itxiak, itzulgarritasunak babestua); karratu gorriak = <strong>zelak</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Marra etenak: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>); <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> parabola da (irudian kurbatua). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/d48979bc667ae862.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala, normalizatua) leiho berean. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/99885196425dfaf4.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Hiru oreken matrizeak (manuskritukoak) zuzenak dira; <strong>akatsik ez</strong>. Gehigarri nagusia:\n<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>zentro benetakoa</strong> da <strong>itzulgarritasunagatik</strong> (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), ez Hamiltondar izateagatik\n(dibergentzia <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>). Guztia SymPy-z egiaztatua.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0156</code>, <code>IMG_2025_07_12_12_32_34S.jpg</code>). Sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentro itzulgarria, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>/<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelak. Akatsik ez. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p156.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 1. orria (METMATCG01_0001, IMG_2025_07_06_20_13_44S.jpg; «MÉTODO M.», 2015/12/17): sistema dinamiko ez-lineala (dx/dt = y-y³, dy/dt = -x-y²) osorik — hiru orekak, jacobiarra, zentroa P1-en (λ=±i, kuasilinealaren oharra) eta bi zela P2/P3-n (λ=-1±√3, 1±√3), zeinu-taula eta fase-erretratua. SymPy-z egiaztatua: dena zuzena salbu autobektore-zutabeen osagaiak (bi zuzenketa mentzioarekin). Fase-erretratuaren irudi editoriala CeTZ-z. Konfiantza altua",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Sistema dinamiko ez-lineala: orekak, linealizazioa eta fase-erretratua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azter dezagun sistema ez-lineal laua:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eginez: <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> eginez: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Beraz <strong>hiru oreka</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealizazioa: jacobiar matrizea"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> — <strong>zentroa</strong> linealizatuan. Iturriak berak ohartarazten du (azpimarratuta): sistema <strong>kuasilinealean</strong> autobalio irudikari puruek ez dute erabakitzen zentroa ala fokua den — linealizazioaren muga klasikoa.",
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (bata positiboa, bestea negatiboa) — <strong>zela-puntua</strong>. Autobektoreak: <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>+</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>−</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mo>−</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> — <strong>zela-puntua</strong>. Autobektoreak: <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>+</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>−</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Noranzko-eremua eta fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Iturriak zeinu-taula bat dakar (gorriz/urdinez): <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-k zeinua aldatzen du <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math> zuzenetan, eta <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-k <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> parabolan (<strong>nulklinak</strong>). Horrekin fase-erretratuaren zirriborroa eraikitzen du: orbita itxiak <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> inguruan (linealizatuan), eta separatrizak bi zeletan."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratuaren eskema (editoriala, iturriaren zirriborroaren ildotik):\n   nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> etenez, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> berdez), <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> zentroa\n   (orbita itxiak linealizatuan) eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub></mrow></math> zelak beren autonorabideekin.",
     "src": "media/irudiak/83fbe87b76a5cb2f.svg",
     "zabalera": 222
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0001</code>, orri soltea, «MÉTODO M.», 2015/12/17; <code>IMG_2025_07_06_20_13_44S.jpg</code>). Sistema: orekak, jacobiarra, autobalioak, sailkapena (zentroa + bi zela) eta zeinu-taula — dena SymPy-z egiaztatua eta ZUZENA. <span>⚠ <strong>Bi zuzenketa mentzioarekin</strong></span>: iturriaren autobektore-zutabeek osagaiak trukatuta edo alderantzikatuta dituzte (adib. <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-n <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> idatzi, bere ekuazioak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ematen duenean; <math display=\"inline\"><msub><mi>P</mi><mn>3</mn></msub></math>-n <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> idatzi, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt></mrow></math> behar duenean). Sailkapena ez da aldatzen. Balio egiaztatuak testu honetan. Ikus <code>koadernoa_metmatcg01_p001.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 1,
   "izenburua": "Koadernotik (CNmet3) — egonkortasunaren hastapenak",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Egonkortasun-teoriaren hastapena"
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuen inguruko higidura fase-espazioan irudikatzen da. Potentzial baten minimoak oreka egonkorra ematen du (zentroa, orbita itxiekin); maximoak oreka ezegonkorra (sela-puntua)."
    },
    {
     "mota": "irudia",
     "oina": "Pozo bakuna eta zentroa (orbita itxiak).",
     "src": "media/irudiak/b5945c35390c919b.svg",
     "zabalera": 463
    },
    {
     "mota": "testua",
     "html": "Pozo bikoitz batek bi zentro eta bien arteko sela-puntua ditu; sela-puntutik igarotzen den separatrizak fase-espazioa banatzen du."
    },
    {
     "mota": "irudia",
     "oina": "Pozo bikoitza, bi zentro eta separatriza.",
     "src": "media/irudiak/bff2a7bb973d829d.svg",
     "zabalera": 493
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 24.-25. orrialdeak (0013 unitatea): oreka-puntuen sailkapena balio propioen bidez (foku, zentro, korapilo eta izar-korapilo) eta sistema mekaniko unidimentsionala marruskadurarekin; fase-erretratuak CeTZ-rekin bektorizatuak; konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Oreka-puntuen sailkapena: balio propio konplexuak eta erreal bikoitzak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema linealduaren <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> oreka-puntuaren izaera <math display=\"inline\"><mi>A</mi></math>-ren balio propioek zehazten dute:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balio propio konplexuak (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> denean, <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math> dira, non <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>. Soluzioa oszilakorra da anplitude esponentzialarekin:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mn>2</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hiru azpikasu bereizten dira <math display=\"inline\"><mi>γ</mi></math>-ren zeinuaren arabera:"
    },
    {
     "mota": "irudia",
     "oina": "Balio propio konplexuak: fokua eta zentroa (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>-ren zeinuaren arabera).",
     "src": "media/irudiak/986de2850ea88301.svg",
     "zabalera": 498
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Erro karakteristiko erreal bikoitzak (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>≡</mo><mi>a</mi></mrow></math>. Bi azpikasu daude:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>a) <math display=\"inline\"><mi>A</mi></math> diagonalizagarria (adib. <math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub></mrow></math>)</strong>: norabide guztiak propioak dira eta soluzioak <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi mathvariant=\"bold-italic\">𝒄</mi></mrow></math> zuzen erradialak dira — <strong>izar-korapiloa</strong> (<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> egonkorra, <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> ezegonkorra).",
      "<strong>b) <math display=\"inline\"><mi>A</mi></math> ez-diagonalizagarria (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>21</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>)</strong>: soluzioak <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> gaia darama eta <strong>korapilo inpropioa</strong> eratzen da."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Erro bikoitzak: izar-korapiloa eta korapilo inpropioa.",
     "src": "media/irudiak/6ffcb7f63aeb2722.svg",
     "zabalera": 358
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema mekaniko unidimentsionala marruskadurarekin"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> higidura-ekuazioa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> eginda lehen ordenako sistema bihurtzen da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>γ</mi><mi>m</mi></mfrac><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuetan (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>) linealizazioaren balio propioak"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>γ</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>±</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>γ</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Beraz <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> (potentzialaren minimoa) bada oreka egonkorra da (marruskadurarik gabe zentroa, marruskadurarekin foku egonkorra); <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math> (maximoa) bada sela-puntua da, beti ezegonkorra."
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>EDF-rekin gurutzatua:</strong> terminologia liburuaren kanonekoa da (<code>08_estabilidad.typ</code>): <strong>foku</strong> edo <strong>puntu espiral</strong>, <strong>zentro</strong> edo <strong>zurrunbilo</strong>, egonkorra/ezegonkorra. Sailkapena <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>-ren bidez bat dator.",
        "<strong>Fase-erretratuak:</strong> fokuen espiralak logaritmikoak dira (bektorizatuak); zentroa elipse itxiez; izar-korapiloa erradio propioz; korapilo inpropioak norabide propio bakarra eta <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> okertzea. Kualitatiboak dira, jatorrizko eskuzko zirriborroei jarraituz.",
        "<strong>Zalantzak (konfiantza ertaina):</strong> p.24ko goiko espiralaren bi errotulu ilun daude (<code>ERRORE...</code> bakarrik irakur daiteke); soluzio konplexuaren bigarren osagaian paperak bi aldiz <code>sin omega t</code> idazten du, baina konbinazio orokorrak seno eta kosinua eskatzen ditu osagai bakoitzean (hemen forma orokorra jaso da). 5/12/2013ko ohar gorria partzialki irakurgarria da. Ikus"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p024.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, 26.-27. orrialdeak (0014 unitatea, orri mistoa): sistema dinamiko ez-linealaren adibidea (oreka-puntuak, linealizazioa, fase-erretratuak CeTZ-rekin) eta Sturm-Liouville / Green-en sarrera (kosinuen ortogonaltasuna, eragile linealaren muga-baldintzak); konfiantza ertaina",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Sistema dinamiko ez-linealaren fase-espazioa (adibidea 3.23)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Azter dezagun sistema"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> ebatzita, hiru oreka-puntu daude: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealizazioa"
    },
    {
     "mota": "testua",
     "html": "Jacobiarra <math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mi>−</mi><mn>4</mn></mrow></math>, balio propioak <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>. Linealizazioak <strong>zentroa</strong> iradokitzen du, baina puntua <strong>ez-hiperbolikoa</strong> da (parte erreala nulua): Hartman–Grobman-ek ez du erabakitzen, eta benetako izaera gai ez-linealen mende dago.",
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, balio propioak <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (zeinu aurkakoak): <strong>sela-puntua</strong>.",
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, balio propioak <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (zeinu aurkakoak): <strong>sela-puntua</strong> ere."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oreka-puntuen linealizazioa: zentroa jatorrian eta selak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en.",
     "src": "media/irudiak/118d794accad469b.svg",
     "zabalera": 385
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak eta egiaztapena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Puntu finkoak eta jacobiarrak egiaztatuak:</strong> hiru oreka-puntuak eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ko <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> zuzenak dira. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-eko balio propioak <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> dira (sela), eta paperean garatu gabeko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-koak <math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (sela ere): hemen gehitu dira.",
        "<strong>Zentroa vs espirala:</strong> jatorriaren linealizazioak zentroa (<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>) ematen du, baina puntua ez-hiperbolikoa denez, gai ez-linealek espiral bihur dezakete. Paperak espirala marrazten du; hori <strong>aieru</strong> bat da, linealizazioak ez baitu frogatzen. Hemen linealaren zentroa irudikatu da, oharpen honekin.",
        "<strong>Terminologia:</strong> EDF 08_estabilidad.typ-eko <strong>sela</strong>, <strong>zentro/zurrunbilo</strong>.",
        "<strong>Zalantzak (konfiantza ertaina):</strong> goiko esaldi gorria (<code>PUNTU FINKOEN...</code>) irakurketa ertainekoa da. Ikus <code>koadernoa_metodo_n3_p026.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 114. unitatea (METMATCG01_0114, IMG_2025_07_12_12_25_42S.jpg): sistema dinamiko ez-linealaren egonkortasun-analisi MANUSKRITOA (dx/dt=x^2+y^2-1, dy/dt=x y) — lau oreka-puntu (0,+-1),(+-1,0), jakobiarra (2x,2y;y,x), sailkapena: P1,P2 zela (lambda=+-sqrt2), P3 nodo ezegonkorra (lambda=1,2), P4 nodo egonkorra (lambda=-1,-2), autobektore eta fase-erretratuekin. SymPy-z egiaztatua (dena zuzena). Oreka-puntuak = 0112ren marjineko zerrenda. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 1,
   "izenburua": "Sistema dinamiko baten egonkortasun lineala: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema ez-linealaren oreka-puntuak eta haien izaera (Hartman–Grobman): puntu bakoitzean jakobiarra ebaluatu eta autobalioek sailkapena ematen dute."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Oreka-puntuak eta jakobiarra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oreka-baldintza: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Puntuz puntuko sailkapena",
   "blokeak": [
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msqrt><mn>2</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "analogoa",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "nodo egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Bi zelek (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>) <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> dituzte (zeinu kontrakoak); <math display=\"inline\"><msub><mi>P</mi><mn>3</mn></msub></math>-n bi autobalio positibo (nodo <strong>ezegonkorra</strong>, kanporako izarra) eta <math display=\"inline\"><msub><mi>P</mi><mn>4</mn></msub></math>-n bi negatibo (nodo <strong>egonkorra</strong>, barnerako izarra)."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Fase-erretratua",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistemaren fase-erretratua: bi zela (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) eta bi nodo (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ezegonkorra, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> egonkorra)."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: gorria; zentro/foku: urdina; nodo: berdea; nulklinak: etenak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/b36559c9fa97b1f9.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/00f6cfbab31bc77a.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Lau oreka-puntuak, jakobiarra, autobalioak, autobektoreak eta sailkapena\nSymPy-z egiaztatuak. Sistema honen oreka-puntuak (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)\nbat datoz 0112 boletineko marjinean eskuz idatzitako zerrendarekin.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0114</code>, <code>IMG_2025_07_12_12_25_42S.jpg</code>; «MÉTODO M.» lotea, 07_12 saioa). Sistema dinamiko ez-linealaren egonkortasun linealaren analisi manuskrito osoa, fase-erretratuen zirriborroekin. Emaitza guztiak SymPy-z egiaztatuak; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p114.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 115. unitatea (METMATCG01_0115, IMG_2025_07_12_12_25_50S.jpg): 114ren jarraipena, sistema beraren analisi KUALITATIBOA — bi simetria (y->-y islapena; (x,t)->(-x,-t)), zeinu-azterketa (dx/dt=0 zirkulu unitatean, <0 barruan >0 kanpoan; dy/dt=0 ardatzetan), fase-erretratu globala eta lehen integralaren planteamendua dt=dx/(x^2+y^2-1)=dy/(xy). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Analisi kualitatiboa: simetriak, zeinuak eta lehen integrala (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "114. orriko sistema beraren azterketa globala: simetriak, eremuaren zeinua eta trajektorien lehen integralaren planteamendua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetriak"
    },
    {
     "mota": "testua",
     "html": "Sistemak bi simetria ditu:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">X ardatzarekiko islapena</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldatu gabe</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehenak <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> aldatu gabe uzten du eta <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren zeinua trukatzen du <math display=\"inline\"><mi>y</mi></math>-ren zeinuarekin batera; bigarrenak <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> inbariante uzten du eta <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>-rekin <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren forma berreskuratzen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eremuaren zeinua (nulklinak)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hemen: </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> barruan</mtext></mrow><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kanpoan</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hemen: </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">ardatzak</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Zirkulu unitatea <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>-ren nulklina da: barruan eremuak barrurantz jotzen du (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>), kanpoan kanporantz (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>). Ardatzak <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>-ren nulklinak dira. Honek koadranteka fase-erretratu globala eraikitzeko balio du (zela biak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en, nodoak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en; ikus 114. orria)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen integrala (planteamendua)"
    },
    {
     "mota": "testua",
     "html": "Denbora ezabatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Bi simetriak eta zeinu-azterketa SymPy-z egiaztatuak. Lehen integrala\nplanteatuta dago (orri honetan ez da ebazten). Sistema bera eta oreka-puntuen\nsailkapena 114. orrian daude.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0115</code>, <code>IMG_2025_07_12_12_25_50S.jpg</code>; «MÉTODO M.» lotea, 07_12 saioa). 114. orriko sistemaren analisi kualitatibo globala (simetriak, zeinuak, fase-erretratua, lehen integrala). Egiaztatua SymPy-z; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p115.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 116. unitatea (METMATCG01_0116, IMG_2025_07_12_12_25_55S.jpg): sistema dinamikoaren egonkortasun-analisia (dx/dt=sinh(x+y), dy/dt=y(x-1)) = 0095 «Problema 11 (hoja)» diapositibaren soluzioa. Bi oreka-puntu P1(1,-1) foku ezegonkorra (lambda=(1+-sqrt3 i)/2, Re>0) eta P2(0,0) zela (lambda=+-1, v=(1,0),(1,-2)), jakobiarra (cosh(x+y),cosh(x+y);y,x-1), zeinu-azterketa. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Sistema dinamikoa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema honen oreka-puntuak eta izaera (0095 «Problema 11» diapositibaren analisia)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak eta jakobiarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>), beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "foku ezegonkorra (kiribila)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "zela (<em>saddle</em>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math>-en autobalioak konplexu konjokatuak dira, parte erreal positiboarekin: <strong>foku ezegonkorra</strong>. <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-n autobalio erreal aurkakoak: <strong>zela</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Eremuaren zeinua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> edo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> zuzenetan; <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> zuzenean (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math> bada). Zuzen horiek planoa zeinu-eskualdetan banatzen dute."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Fase-erretratua: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> foku ezegonkorra eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> nulklina (berdea)."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: gorria; zentro/foku: urdina; nodo: berdea; nulklinak: etenak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/828c25b1eaaee64f.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/4e012aa82bce7f0c.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka-puntuak, jakobiarra, autobalioak eta sailkapena SymPy-z egiaztatuak.\nSistema hau 0095 «Problema 11 (hoja)» diapositibarena da (fase-erretratu inprimatua).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0116</code>, <code>IMG_2025_07_12_12_25_55S.jpg</code>; «MÉTODO M.» lotea, 07_12 saioa). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistemaren egonkortasun-analisi manuskritoa (= 0095 diapositiba). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p116.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 125. unitatea (METMATCG01_0125, IMG_2025_07_12_12_27_49S.jpg; «M. METHODS 15/12/2015»): sistema dinamikoa dx/dt=2y+3y^2, dy/dt=2x+3x^2 (= 0093 «Problema 5»). Lau oreka: P2(-2/3,-2/3), P3(0,0) zela (lambda=+-2); P1(-2/3,0), P4(0,-2/3) zentro (lambda=+-2i). LEHEN INTEGRALA H=x^2+x^3-y^2-y^3 (banangarria); x=y zuzen inbariantea bi zelak lotzen (H=0). SymPy-z egiaztatua (dH/dt=0, x=y inbariantea). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Sistema dinamikoa eta lehen integrala: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "0093 «Problema 5» diapositibaren analisia: oreka-puntuak, izaera eta <strong>lehen integrala</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak eta sailkapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen integrala (banangarria)"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> banangarria denez, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>K</mi></mrow></math></span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> fluxuan (egiaztatua). <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: bi zelak <strong>maila bereko</strong> kurban daude (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math>), lotura heteroklinoa. <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math>-k <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zeharkatzen ditu."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> zuzen inbariantea"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inbariantea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> zuzenak bi zelak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lotzen ditu (lotura heteroklinoa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Sistemaren fase-erretratua (numerikoki kalkulatua). Bi zela (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>) eta bi zentro (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> zuzen inbarianteak (berdea) bi zelak lotzen ditu."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: ▪ gorria; zentro: ● urdina; nulklinak: etenak; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>: berdea. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/4e331e58bade83aa.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/05e9b9badd3cd078.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka, autobalioak, lehen integrala eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> inbariantea SymPy-z egiaztatuak.\nLehen integralak <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math> <strong>zentro genuino</strong> egiten ditu (ez kiribil): trajektoriak\n<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math> kurbak dira. Sistema hau 0093 «Problema 5» diapositibarena da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0125</code>, <code>IMG_2025_07_12_12_27_49S.jpg</code>; «MÉTODO M.» lotea, «15/12/2015»). Sistema dinamikoaren analisi osoa lehen integralarekin (= 0093 diapositiba). SymPy-z egiaztatua; zuzenketarik gabe. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p125.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 126. unitatea (METMATCG01_0126, IMG_2025_07_12_12_28_02S.jpg): sistema KONTSERBATIBOA dx/dt=y, dy/dt=-x+3lambda^2/(4(2lambda-x))=-V'(x) (= 0091 «Problema 2»). Potentziala V=x^2/2+(3lambda^2/4)ln|2lambda-x|; energia H=x^2+y^2+(3/2)lambda^2 ln|2lambda-x|. Oreka: x=lambda/2 zentroa (V''=2/3>0), x=3lambda/2 zela (V''=-2<0); x=2lambda puntu singularra. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Sistema kontserbatiboa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "0091 «Problema 2» diapositibaren analisia: sistema newtoniarra potentzial batekin."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potentziala eta energia-integrala"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> denez, sistema kontserbatiboa da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>λ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> fluxuan (egiaztatua): energia kontserbatzen da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak eta sailkapena"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>λ</mi><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>2</mn><mo>,</mo><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math></span>. <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-ren zeinuak:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><msup><mi>V</mi><mo>″</mo></msup></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "zentroa (orbita itxiak)"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "zela (<em>saddle</em>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>-n potentziala dibergentea da (<strong>puntu singularra</strong>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>→</mo><mi>∞</mi></mrow></math>). Sistemak <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> simetria du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Fase-erretratua (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math> zentroa eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math> zela; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> puntu singularra."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: gorria; zentro/foku: urdina; nodo: berdea; nulklinak: etenak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/74ee92b0bacd557b.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/38a0d55bde9859de.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Potentziala, energia-integrala, oreka-puntuak eta sailkapena (zentro <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>-n,\nzela <math display=\"inline\"><mrow><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>-n) SymPy-z egiaztatuak. Zentroa energia-mailen orbita itxiek osatzen dute.\nSistema hau 0091 «Problema 2» diapositibarena da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0126</code>, <code>IMG_2025_07_12_12_28_02S.jpg</code>; «MÉTODO M.» lotea). Sistema kontserbatiboaren analisi osoa potentzialarekin (= 0091 diapositiba). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p126.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 127. unitatea (METMATCG01_0127, IMG_2025_07_12_12_28_10S.jpg; «M. METHODS 10/12/2015»): sistema dx/dt=x, dy/dt=(y-x)(y-x-1). Oreka P1(0,0) zela (lambda=1,-1; v=(2,1),(0,1)) eta P2(0,1) NODO DEGENERATUA (lambda=1 bikoitza, defektiboa, norabide bakarra (0,1)). Jakobiarra (1,0;-2y+2x+1,2y-2x-1). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Sistema dinamikoa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oreka-puntuak eta haien izaera; kasu berezia: nodo <strong>degeneratua</strong> (defektiboa)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oreka-puntuak eta jakobiarra"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> edo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>, beraz"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bikoitza)",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakarrik",
       "nodo degeneratua (defektiboa)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-en <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> bikoitza da baina autobektore <strong>bakarra</strong> dago (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): matrizea ez da diagonalizagarria <math display=\"inline\"><mo>→</mo></math> <strong>nodo degeneratua</strong> (ezegonkorra, <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela arrunta da."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Fase-erretratua: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo degeneratua; nulklinak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> (berdea)."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: gorria; zentro/foku: urdina; nodo: berdea; nulklinak: etenak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/ed88d469d272e88b.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/c5a4919d32085ada.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka, jakobiarra, autobalioak eta sailkapena SymPy-z egiaztatuak. Kasu\nberezia: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo degeneratua (defektiboa, norabide propio bakarra). Sistemak\n<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> simetria du.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0127</code>, <code>IMG_2025_07_12_12_28_10S.jpg</code>; «MÉTODO M.» lotea, «10/12/2015»). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistemaren egonkortasun-analisi osoa. SymPy-z egiaztatua; zuzenketarik gabe. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p127.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 128. unitatea (METMATCG01_0128, IMG_2025_07_12_12_28_20S.jpg; «UNIDIMENSIONAL MECHANICAL SYSTEMS»): sistema mekaniko 1D-en teoria (ẍ=-V'(x), energia (1/2)ẋ^2+V=C, zentro=minimoa/zela=maximoa) + 14. adibidea dx/dt=5y, dy/dt=(x-1)(x+2)(x+3): x=1 zela (lambda=+-2sqrt15), x=-2 zentro (lambda=+-i sqrt15), x=-3 zela (lambda=+-2sqrt5); energia H=(5/2)y^2-G(x); bi zelen energia desberdina (47/12 vs -27/4) -> trajektoria banatuak. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Sistema mekaniko 1D-ak: teoria eta adibidea",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoria (sistema kontserbatiboa)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> formako sistemetan (indarra potentzial batetik dator, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mi>d</mi><mi>x</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">energia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuak <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>-n daude: <math display=\"inline\"><mi>V</mi></math>-ren <strong>minimoa</strong> <math display=\"inline\"><mo>→</mo></math> <strong>zentroa</strong> (egonkorra); <math display=\"inline\"><mi>V</mi></math>-ren <strong>maximoa</strong> <math display=\"inline\"><mo>→</mo></math> <strong>zela</strong> (ezegonkorra). Simetria: <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibidea (14)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>−</mo><mn>6</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Oreka-puntuak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>; jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><msqrt><mn>15</mn></msqrt></mrow></math>",
       "zela"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>15</mn></msqrt></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Energia: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mn>6</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> (<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>). Bi zelek energia <strong>desberdina</strong> dute (<math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>47</mn><mi>/</mi><mn>12</mn></mrow></math>, <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>27</mn><mi>/</mi><mn>4</mn></mrow></math>), beraz <strong>ez dute trajektoria bera</strong> (ez daude lotuta), 0125eko kasuan ez bezala."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "testua",
     "html": "Fase-erretratua (14. adibidea): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> zela, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> zentroa."
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamline-ak; abiadura koloreztatuta). Zela: gorria; zentro/foku: urdina; nodo: berdea; nulklinak: etenak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/ca0bdb93c9b0dd58.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): geziek eremuaren benetako norabidea ematen dute puntuz puntu. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/f4de8e8e9fdedbb9.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Teoria (energia, zentro=minimoa, zela=maximoa) eta adibidea (2 zela + zentro,\nenergia) SymPy-z egiaztatuak. Bi zelen energia desberdina <math display=\"inline\"><mo>→</mo></math> trajektoria banatuak.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0128</code>, <code>IMG_2025_07_12_12_28_20S.jpg</code>; «MÉTODO M.» lotea). Sistema mekaniko 1D-en teoria + 14. adibidea. SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p128.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 129. unitatea (METMATCG01_0129, IMG_2025_07_12_12_28_28S.jpg; «M. METHODS 3/12/2015»): sistema lineal 2D-en teoria (autobalio-metodoa). x=e^{lambda t}c -> Ac=lambda c, det(A-Ilambda)=0; kasu konplexua (a-lambda,-b;b,a-lambda) -> lambda=a+-ib, autobektorea (1,-i); lambda=(trA+-sqrt(Delta))/2, Delta=(trA)^2-4detA; sailkapena (a=0 zentro, a>0 kiribil ezeg., a<0 kiribil eg.). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Sistema lineal 2D-ak: autobalio-metodoa eta sailkapena",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> sistema linealak autobalioen bidez ebazten dira."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autobalio-problema"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mi mathvariant=\"bold-italic\">𝒄</mi></mrow></math> saiatuz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒄</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒄</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒄</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒄</mi><mo>≠</mo><mn>0</mn></mrow></math> izateko <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi></mrow></math> singularra izan behar da.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Kasu konplexua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>-rako:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>i</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>i</mi><msub><mi>c</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sailkapena (traza eta determinantea)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>b</mi></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>)",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Autobalio erreal desberdinetan nodo/zela; parte errealaren zeinuak egonkortasuna erabakitzen du."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Autobalio-metodoa, kasu konplexuaren autobektorea <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta traza-determinante\nbidezko sailkapena SymPy-z egiaztatuak.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0129</code>, <code>IMG_2025_07_12_12_28_28S.jpg</code>; «MÉTODO M.» lotea, «3/12/2015»). Sistema lineal 2D-en teoria (autobalioak, kasu konplexua, sailkapena). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p129.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 130. unitatea (METMATCG01_0130, IMG_2025_07_12_12_28_33S.jpg; 0129ren jarraipena): autobalio konplexuen kasua (a,-b;b,a). 2. ordenako EDOra murriztu x''-2ax'+(a^2+b^2)x=0 -> lambda=a+-ib; soluzioa x=e^{at}A cos(b(t-t0)), y=e^{at}A sin(...); x^2+y^2=e^{2at}A^2. Sailkapena: a=0 zirkuluak (zentro), a>0 kiribil ezegonkorra, a<0 kiribil asintotikoki egonkorra. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Autobalio konplexuak: kiribilak eta zentroak (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><mi>b</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>a</mi><mi>y</mi></mrow></math> sistema (0129ren jarraipena): autobalio konplexuen kasua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Murrizketa eta soluzioa"
    },
    {
     "mota": "testua",
     "html": "2. ordenako EDOra murriztuta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>a</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>a</mi><mi>t</mi></mrow></msup><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Trajektoria kiribil logaritmikoa da (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>); <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> bada, zirkulua."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sailkapena (<math display=\"inline\"><mrow><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>a</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>",
       "zentroa (zirkuluak, neutralki egonkorra)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil asintotikoki egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Parte errealak (<math display=\"inline\"><mi>a</mi></math>) egonkortasuna erabakitzen du; maiztasunak (<math display=\"inline\"><mi>b</mi></math>) biraketa. (<math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math> bada, nodo/izarra: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Murrizketa, autobalioak, soluzioa eta <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>a</mi><mi>t</mi></mrow></msup><msup><mi>A</mi><mn>2</mn></msup></mrow></math> SymPy-z egiaztatuak.\n<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: asintotikoki egonkorra (zentrora infinitu denboran); <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: ezegonkorra; <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>: zentroa.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0130</code>, <code>IMG_2025_07_12_12_28_33S.jpg</code>; «MÉTODO M.» lotea). Autobalio konplexuen kasuaren garapena (0129ren jarraipena). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p130.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 131. unitatea (METMATCG01_0131, IMG_2025_07_12_12_28_40S.jpg; «STABILITY of dynamic systems», 2/12/2015): egonkortasunaren sarrera (portaera kualitatiboa, multzo inbarianteak, oreka-puntuak). Adibideak: x'=ax (egonkorra a<0) eta x'=ax-x^3 (oreka 0,+-sqrt(a); sardexka-adarkatzea). Pendulua (2.->1. ordena); Lyapunov (egonkorra vs asintotikoa). SymPy-z egiaztatua; zuzenketa (x^2->x^3). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 1,
   "izenburua": "Egonkortasuna: portaera kualitatiboa eta oreka-puntuak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema autonomoetan (<math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), askotan ez da ebazten: <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>-rako <strong>portaera kualitatiboa</strong> aztertzen da (egonkorra vs kaotikoa)."
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Oreka-puntuak eta egonkortasuna",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oreka-puntua: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (denborarekin ez da aldatzen); egonkorra izan daiteke edo ez."
    },
    {
     "mota": "testua",
     "html": "<strong>Adibideak:</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oreka </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><msqrt><mi>a</mi></msqrt><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><msqrt><mi>a</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> bada: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ezegonkorra, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mi>a</mi></msqrt></mrow></math> egonkorrak (sardexka-adarkatzea)."
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Pendulua eta Lyapunov",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Pendulua (<math display=\"inline\"><mrow><msup><mi>θ</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) 2. ordenakoa da <math display=\"inline\"><mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> 1. ordenako sistema. <strong>Lyapunov-en irizpidea:</strong> <strong>egonkorra</strong> (orbitak inguruan mugatuta, zirkuluak) vs <strong>asintotikoki egonkorra</strong> (orbitak orekara doaz, kiribila)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka-puntuak eta egonkortasuna (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>) SymPy-z\negiaztatuak. Jatorrizko orriak «<math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>» idatzi arren, bere erroek (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>±</mi><msqrt><mi>a</mi></msqrt></mrow></math>)\n<math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> adierazten dute (zuzendua).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0131</code>, <code>IMG_2025_07_12_12_28_40S.jpg</code>; «MÉTODO M.» lotea, «2/12/2015»). Egonkortasunaren sarrera teorikoa (portaera kualitatiboa, oreka-puntuak, Lyapunov). SymPy-z egiaztatua; zuzenketa bat (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>→</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>). Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p131.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 135. unitatea (METMATCG01_0135, IMG_2025_07_12_12_29_10S.jpg): bi sistema. (1) deskatatua dx/dt=ln((x+1)^2), dy/dt=ln((y+1)^2) OSOA: P1(0,0) izar ezegonkorra (lambda=2 bik.), P4(-2,-2) izar egonkorra (lambda=-2 bik.), P2/P3 zela (lambda=+-2); x=-1,y=-1 singularrak; jakobiarra diag(2/(x+1),2/(y+1)). (2) dx/dt=y-y^3, dy/dt=x-x^2 hasita (6 oreka, 0136-n... EZ, 0136 beste sistema bat da; jarraipena beste orri batean). Fase-erretratua (sistema 1). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Bi sistema dinamiko",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema 1 (deskatatua): <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math></span>; berdin <math display=\"inline\"><mi>y</mi></math>-rako. Jakobiarra diagonala da: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>2</mn></math> (bikoitza)",
       "izar ezegonkorra (nodo propioa)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math> (bikoitza)",
       "izar egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> zuzenetan eremua dibergentea da (singularitate logaritmikoak)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Fase-erretratua (sistema 1)"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izar ezegonkorra, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izar egonkorra, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub></mrow></math> zela; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> singularrak. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/c7a744139b4b4ee3.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/a968e6b86c6b8a4a.svg",
     "zabalera": 284
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema 2: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>; sei oreka-puntu <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Sistema honen azterketa <strong>0136 orrian jarraitzen da</strong> (hemen hasita bakarrik)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Sistema 1eko oreka, jakobiarra eta sailkapena (2 izar + 2 zela) SymPy-z\negiaztatuak. Sistema 2ren oreka-puntuak ere bai; bere analisia 0136-n osatzen da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0135</code>, <code>IMG_2025_07_12_12_29_10S.jpg</code>; «MÉTODO M.» lotea). Bi sistema dinamiko (1.a osoa; 2.a 0136-n jarraitzen du). SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p135.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 136. unitatea (METMATCG01_0136, IMG_2025_07_12_12_29_18S.jpg): sistema dx/dt=y^2-x^2-x, dy/dt=-y+2xy. Lau oreka: P1(0,0) izar egonkorra (lambda=-1 bik.), P2(-1,0), P3(1/2,sqrt3/2), P4(1/2,-sqrt3/2) zela (lambda=1,-3); jakobiarra (-2x-1,2y;2y,2x-1). Autobektoreak SymPy-z. Fase-erretratua. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Sistema dinamikoa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Oreka-puntuak: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>-rekin lau puntu. Jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (bikoitza)",
       "izar egonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> nodo propioa (izar) egonkorra da; beste hirurak zelak."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izar egonkorra; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>±</mi><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> zela. Nulklinak: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (etenak). <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/0b89f16c0e3814e0.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/d4f0f2bed2126942.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Lau oreka-puntuak, jakobiarra, autobalioak eta sailkapena (izar egonkorra +\n3 zela) SymPy-z egiaztatuak. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math>-ren autobektoreak SymPy-z (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0136</code>, <code>IMG_2025_07_12_12_29_18S.jpg</code>; «MÉTODO M.» lotea). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> sistemaren analisi osoa. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p136.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 137. unitatea (METMATCG01_0137, IMG_2025_07_12_12_29_35S.jpg; «DIAGRAMA DE FASE, 29/10/2015»): sistema dx/dt=y-1+x^2, dy/dt=-x^2+1+y. P1(1,0) kiribil ezegonkorra (lambda=(3+-sqrt7 i)/2, Re=3/2>0), P2(-1,0) zela (lambda=(-1+-sqrt17)/2); jakobiarra (2x,1;-2x,1). Fase-erretratua. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Fase-diagrama: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Bi ekuazioak batuz <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>→</mo></mrow></math> bi oreka-puntu. Jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "kiribil ezegonkorra (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> kiribil ezegonkorra; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/cca78a0b44c9e7ad.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/bfe44c50028bc157.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka-puntuak, jakobiarra, autobalioak eta sailkapena (kiribil ezegonkorra +\nzela) SymPy-z egiaztatuak. Autoreak «parece una espiral» idatzi zuen <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math>-en ondoan.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0137</code>, <code>IMG_2025_07_12_12_29_35S.jpg</code>; «MÉTODO M.» lotea, «29/10/2015»). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math> sistemaren fase-analisia. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p137.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 138. unitatea (METMATCG01_0138, IMG_2025_07_12_12_29_42S.jpg; «2013 EKAINEKO 4A» azterketa-ariketa): sistema dx/dt=(x^2+2)cos y sin y, dy/dt=x cosh x. Orekak x=0 (cosh x>0) & sin2y=0; P1(0,0) zela (lambda=±sqrt2, autobektoreak (sqrt2,1),(sqrt2,-1)), P2(0,pi/2) zentroa (lambda=±i sqrt2). Sistema R(x,y)=(-x,y)-rekiko itzulgarria eta P2 x=0 ardatzean → benetako zentro ez-lineala (ez linealaren emaitza soila). Fase-erretratua (A streamplot + B CeTZ). SymPy-z egiaztatua; zuzenketa txiki bat mentzioarekin (lambda1-en 1. ekuazioa -sqrt2·a+2b, ez -2b; emaitza berdina). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Fase-diagrama: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "«2013 EKAINEKO 4A» azterketa-ariketa. Oreka-puntuak: <math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), eta <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mi>k</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>; ikuspegian <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zela (autobektoreak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zentroa (orbita itxiak)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). Eskuizkribuak <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroa aztertzen ditu; leiho zabalagoak <math display=\"inline\"><mi>y</mi></math>-n periodikoa den katea erakusten du: zentroak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>-n, zelak <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math>-n. <em>Irudi editoriala; ez dago jatorrizko eskuizkribuan.</em>",
     "src": "media/irudiak/2212ff79bc2a99e7.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala): etenezko lerroak nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>k</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> gorriz; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> urdinez). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/eafa0c2a2adaca22.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Oreka-puntuak, jakobiarra, autobalioak, autobektoreak eta sailkapena (zela +\nzentroa) SymPy-z egiaztatuak. Sistema <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekiko itzulgarria denez eta <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>\n<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzean dagoenez, <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> benetako zentro ez-lineala da (ez linealaren emaitza soila).\nSistema <math display=\"inline\"><mi>y</mi></math>-n <math display=\"inline\"><mi>π</mi></math>-periodikoa da: zentroak eta zelak txandakatzen dira.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0138</code>, <code>IMG_2025_07_12_12_29_42S.jpg</code>; «2013 EKAINEKO 4A» azterketa-ariketa). <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> sistemaren fase-analisia. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p138.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 139. unitatea (METMATCG01_0139, IMG_2025_07_12_12_29_52S.jpg; «DIAGRAMA DE FASE», 8. ariketa): sistema dx/dt=y-y^3, dy/dt=-x-y^2. HIRU oreka: A(0,0) zentroa (lambda=±i), B(-1,1) zela (lambda=-1±√3), C(-1,-1) zela (lambda=1±√3); jakobiarra (0,1-3y^2;-1,-2y). Sistema R(x,y)=(x,-y)-rekiko itzulgarria → A benetako zentro ez-lineala. Fase-erretratua (A streamplot + B CeTZ). SymPy-z egiaztatua, zuzenketarik gabe. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Fase-diagrama: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "«DIAGRAMA DE FASE», 8. ariketa. HIRU oreka-puntu: <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, hots <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mi>/</mi><mi mathvariant=\"normal\">det</mi></mrow></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>/</mi><mo>−</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>2.73</mn><mo>,</mo><mn>0.73</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mo>−</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>0.73</mn><mo>,</mo><mn>2.73</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroa (orbita itxiak), <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelak. Etenezko lerroak: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>). <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> nulklina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> parabola da (ez marraztua). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/458dff4e0c3aafe7.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/df50634f90cce930.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Hiru oreka-puntuak, jakobiarra, autobalioak eta sailkapena (zentroa + bi zela)\nSymPy-z egiaztatuak, zuzenketarik gabe. Sistema <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-rekiko itzulgarria denez eta\n<math display=\"inline\"><mi>A</mi></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ardatzean dagoenez, <math display=\"inline\"><mi>A</mi></math> benetako zentro ez-lineala da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0139</code>, <code>IMG_2025_07_12_12_29_52S.jpg</code>; «DIAGRAMA DE FASE», 8. ariketa). Behean trazaketa-oharrak eta <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>π</mi></mrow></math> (gorriz); post-it horia par/bakoiti funtzioei buruz (Fourier apartea, itsatsia). SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p139.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 140. unitatea (METMATCG01_0140, IMG_2025_07_12_12_29_58S.jpg; «DIAGRAMA DE FASE, MÉTODOS, 29/10/2015», «INVENTO»): sistema dx/dt=x(1-y), dy/dt=y(1-x). Orekak P1(0,0) nodo izar ezegonkorra (J=I, lambda=1 m=2) eta P2(1,1) zela (lambda=±1, autobektoreak (1,-1) ezeg./(1,1) egonk.); jakobiarra (1-y,-x;-y,1-x). x=y diagonala aldaezina (lotura heteroklinoa). Aparteko sistema txikia dx/dt=y-1,dy/dt=-x+1: (1,1) zentroa. Fase-erretratua (A streamplot + B CeTZ). SymPy-z egiaztatua, zuzenketarik gabe. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Fase-diagrama: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "«DIAGRAMA DE FASE — MÉTODOS — 2015/10/29», «INVENTO». Orekak <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>1</mn></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>)",
       "nodo izarra, ezegonkorra (<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ezeg., <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> egonk.)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> diagonala aldaezina da: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math> lotura heteroklinoa (<math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math>-ren norabide egonkorra <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo izar ezegonkorra (izpi erradialak), <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela. Etenezko lerroak: nulklinak (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>). Berdez <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> diagonal aldaezina. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/e433c8da68571ae2.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/e1d183813ea59145.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Orekak, jakobiarra, autobalioak, autobektoreak eta sailkapena (nodo izarra +\nzela) SymPy-z egiaztatuak. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> diagonala aldaezina da (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>). Autoreak\naparteko sistema txiki bat ere idatzi zuen (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroa).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0140</code>, <code>IMG_2025_07_12_12_29_58S.jpg</code>; «DIAGRAMA DE FASE», «INVENTO», 2015/10/29). <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistemaren fase-analisia. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p140.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 141. unitatea (METMATCG01_0141, IMG_2025_07_12_12_30_13S.jpg): BI sistema. (1) dx/dt=y-1+x, dy/dt=-x+1+y: (1,0) kiribil ezegonkorra (lambda=1±i). (2) dx/dt=y^2-1+x, dy/dt=-x^2+1+y: LAU oreka. ⚠ ZUZENKETA: autoreak -y^3+2y+1 gaizki faktorizatu zuen ((y+1)(y^2+y-1), erroak (-1±√5)/2, x=y) eta «FAIL» idatzi; zuzena (y+1)(y^2-y-1), erroak (1±√5)/2, x=-y. Oreka zuzenak: P1(1,0),P2(0,-1) nodo inpropio ezegonkorrak (lambda=1 bik.), P3(-(1+√5)/2,(1+√5)/2)/P4((-1+√5)/2,(1-√5)/2) zelak. Fase-erretratua (A+B) sistema 2rako. SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Bi sistema: kiribil lineala + sistema kuartikoa (LAU oreka)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Sistema 1 (lineala):</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>; oreka <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi><mo>→</mo></mrow></math> <strong>kiribil ezegonkorra</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Sistema 2 (ez-lineala):</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>. <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> ordezkatuz <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>; faktore zuzena <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (ez <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). Jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mn>2</mn><msqrt><mrow><mi>−</mi><mi>x</mi><mi>y</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Zuzenketa:</strong> autoreak <math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> gaizki faktorizatu zuen (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), erroak\n<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> atereaz, eta «FAIL» idatzi zuen. Faktore zuzenak erroak\n<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> ematen ditu, non <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> eta beraz <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>. Hortaz <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math>\nautoreak <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>-rekin oker daude; behean zuzenduta (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math> zuzenak ziren.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema 2ren oreka-puntu zuzenak"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bik.)",
       "nodo inpropioa, ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bik.)",
       "nodo inpropioa, ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo>≈</mo><mi>−</mi><mn>2.62</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>5</mn></msqrt><mo>,</mo><mn>2</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>2.24</mn><mo>,</mo><mn>4.24</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo>≈</mo><mi>−</mi><mn>0.38</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><msqrt><mn>5</mn></msqrt><mo>,</mo><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>0.24</mn><mo>,</mo><mn>2.24</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (sistema 2)"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot), sistema 2. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo inpropio ezegonkorrak; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1.62</mn><mo>,</mo><mn>1.62</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.62</mn><mo>,</mo><mi>−</mi><mn>0.62</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelak. Leiho zabala, egitura globala erakusteko. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/374c07b942315021.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala), sistema 2. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/dd990e387d7cb48e.svg",
     "zabalera": 335
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0141</code>, <code>IMG_2025_07_12_12_30_13S.jpg</code>). Bi sistema: kiribil lineala (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>) eta sistema kuartikoa lau orekarekin. Autoreak faktorizazio-akatsa egin eta «FAIL» idatzi zuen; hemen zuzendua eta SymPy-z egiaztatua. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p141.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 142. unitatea (METMATCG01_0142, IMG_2025_07_12_12_30_30S.jpg; «METODOAK», 16/12/2014): sistema dx/dt=2y+3y^2, dy/dt=2x+3x^2 (= 0125 unitatea; hemen LEHEN INTEGRALA). Lau oreka: A(0,0),D(-2/3,-2/3) zelak (lambda=±2), B(0,-2/3),C(-2/3,0) zentroak (lambda=±2i); jakobiarra (0,2+6y;2+6x,0). SISTEMA KONTSERBATIBOA: H=y^3+y^2-x^3-x^2 lehen integrala (Hdot=0), H=(y-x)(x^2+xy+y^2+x+y). Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Sistema kontserbatiboa: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (+ lehen integrala)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema bera <code>METMATCG01_0125</code> unitatean; orri honek <strong>lehen integrala</strong> garatzen du. Lau oreka: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntuz puntuko sailkapena"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>M</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lehen integrala (sistema kontserbatiboa)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>-tik <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow></math>, eta integratuz <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>H</mi><mi>x</mi></msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>H</mi><mi>y</mi></msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> da (egiaztatua, SymPy): sistema <strong>kontserbatiboa</strong>. Faktorizatuz <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math> multzoa <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> diagonala eta <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> konika dira, biak <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela zeharkatuz (separatrizeak). <math display=\"inline\"><mi>D</mi></math> konikaren gainean dago."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelak; <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroak (orbita itxiak = <math display=\"inline\"><mi>H</mi></math>-ren maila-kurbak). Berdez <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math> adarra). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/da3ae5bc74039410.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala). Etenezko lerroak: nulklinak (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/3f31f2b08466a6e6.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Orekak, jakobiarra, autobalioak eta sailkapena (bi zela + bi zentro) SymPy-z\negiaztatuak. Sistema <strong>kontserbatiboa</strong> da: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> lehen integrala (<math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>),\nzeinen maila-kurbak orbitak diren. Horrek zentroak (benetakoak) eta separatrizeak justifikatzen ditu.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0142</code>, <code>IMG_2025_07_12_12_30_30S.jpg</code>; «METODOAK», 16/12/2014). Sistema = <code>METMATCG01_0125</code>; hemen lehen integrala eta izaera kontserbatiboa. SymPy-z egiaztatua. Ikus <code>koadernoa_metmatcg01_p142.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 143. unitatea (METMATCG01_0143, IMG_2025_07_12_12_30_37S.jpg): BI zati. (goia) Wolfram StreamPlot[{2y+3y^2,2x+3x^2},{x,-2,2},{y,-2,2}] = 0142/0125 sistemaren egiaztapena. (behea) serie bidezko ebazpena x=0 puntu arruntean: ODE erreala (x^2+x+1)y''-(x^2+3x+2)y'+(x+2)y=0 (etiketak zeinu-akatsak; garapena zuzena). Errekurrentziak a2=a1-a0, 6a3=2a2+a1-a0, a4=a2/6; bi soluzio y1=1+x, y2=x·e^x. SymPy-z egiaztatua (biek ODEa betetzen dute). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Serie bidezko ebazpena eta Wolfram StreamPlot",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ekuazioa</strong> (autorearen garapenetik ondorioztatua; etiketak zeinu-akatsak zituen): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>puntu arrunta</strong> delarik, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Errekurrentziak"
    },
    {
     "mota": "testua",
     "html": "Serieak ordezkatuz eta <math display=\"inline\"><msup><mi>x</mi><mi>k</mi></msup></math> berdinduz: <math display=\"block\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>1</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>6</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Bi soluzio independenteak"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>kasua</strong>",
      "hastapenak",
      "<strong>soluzioa</strong>"
     ],
     "lerroak": [
      [
       "A",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>"
      ],
      [
       "B",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn><mo>,</mo><mi>…</mi><mo>→</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Soluzio orokorra: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. (Biak SymPy-z egiaztatuak: ODEa betetzen dute.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Wolfram StreamPlot (goiko irudia): 0142/0125 sistema"
    },
    {
     "mota": "testua",
     "html": "Orriaren goialdean autoreak Wolfram Alpha-ko <code>StreamPlot[{2y+3y^2, 2x+3x^2},{x,-2,2},{y,-2,2}]</code> marraztu zuen: <code>METMATCG01_0142</code>/<code>METMATCG01_0125</code> sistema kontserbatiboaren fase-erretratua (bi zentro + bi zela). Erreferentziazko irudi editoriala (bertsio bektoriala):"
    },
    {
     "mota": "irudia",
     "oina": "Autoreak Wolfram-ez marraztutako sistemaren fase-erretratua (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zelak; <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroak. Xehetasunak <code>METMATCG01_0142</code>-n. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/567fcbc07cb84b5c.svg",
     "zabalera": 513
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">ODEaren etiketak zeinu-akatsak zituen, baina autorearen serie-garapena, errekurrentziak\neta bi soluzioak (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) zuzenak dira (SymPy-z egiaztatuak). Goiko StreamPlot-a 0142\nsistemaren egiaztapen numerikoa da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0143</code>, <code>IMG_2025_07_12_12_30_37S.jpg</code>). Bi zati: Wolfram StreamPlot (0142 sistema) eta serie bidezko ebazpena. SymPy-z egiaztatua. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p143.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 144. unitatea (METMATCG01_0144, IMG_2025_07_12_12_30_48S.jpg; «2013 EKAINA 2A»): BI problema. (1) EDO zehatza [-3x+7xy+14y-y^2(1+1/x)-6]dx+[7x-2y]dy=0; faktore integratzailea mu=x·e^x ((Py-Qx)/Q=1+1/x), soluzioa x·e^x(7xy-y^2-3x)=C (1.25.2/1.25.3 taulak). (2) Fase-sistema xdot=y, ydot=-x^3-2x^2+x+2=-(x+2)(x+1)(x-1): P1(-2,0) zentroa (lambda=±i√3), P2(-1,0) zela (lambda=±√2), P3(1,0) zentroa (lambda=±i√6); Hamiltondarra (H=y^2/2+x^4/4+2x^3/3-x^2/2-2x), itzulgarria. Fase-erretratua (A+B). SymPy-z egiaztatua. Konfiantza altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Bi problema: EDO zehatza (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) eta fase-sistema kubikoa",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1) EDO zehatza faktore integratzailez"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>+</mo><mn>14</mn><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>−</mo><msub><mi>Q</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>Q</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo>→</mo><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math></span>. <math display=\"inline\"><mi>μ</mi></math>-z biderkatuta EDOa zehatza da; potentziala integratuz (<math display=\"inline\"><mrow><mn>1.25</mn><mn>.2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1.25</mn><mn>.3</mn></mrow></math> tauletatik): <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>y</mi><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>C</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> (Faktore integratzailea <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> da, <code>METMATCG01_0143</code>-ko soluzio berbera.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) Fase-sistema: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; orekak <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jakobiarra <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Sistema Hamiltondarra da: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>. Zentroak <math display=\"inline\"><mi>V</mi></math>-ren minimoetan (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn></mrow></math>), zela maximoan (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>). <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> itzulgarritasunak zentroak benetakoak direla bermatzen du."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fase-erretratua (2. problema)"
    },
    {
     "mota": "irudia",
     "oina": "Fase-erretratu zehatza (streamplot). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zentroak (orbita itxiak = <math display=\"inline\"><mi>H</mi></math>-ren maila-kurbak); <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> zela, separatrizeekin. Etenezko lerroak: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math>). Bi putzuen sakonera desberdina (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). <em>Irudi editoriala.</em>",
     "src": "media/irudiak/38fa8aed723c7728.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Norabide-eremu erreala (CeTZ, bektoriala), 2. problema. <em>Irudi editoriala.</em>",
     "src": "media/irudiak/0ec0cd52a9958012.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Bi problemak SymPy-z egiaztatuak, zuzenketarik gabe. (1) <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> faktoreak EDOa\nzehatz bihurtzen du; soluzioa <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>C</mi></mrow></math>. (2) Sistema Hamiltondarra: bi zentro\n(benetakoak, itzulgarritasunez) eta zela bat, separatrizeekin.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0144</code>, <code>IMG_2025_07_12_12_30_48S.jpg</code>; «2013 EKAINA 2A»). Bi problema: EDO zehatza (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) eta fase-sistema kubikoa. SymPy-z egiaztatua. Ikus"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p144.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 160. unitatearen A zatia (METMATCG01_0160_A, IMG_2025_07_12_12_34_30S.jpg; 20/9/2014): «orbitak geometrikoak» irakurketa zalantzazkoaren azpiko bi eskema. (x-x0)^2+(y-y0)^2=R^2 eta (x-A)^2+y^2=B^2 zirkunferentziak; zirkulu gainjarriak zerrenda batean eta kanpoko kurba baten barruko bi begizta. Ez dago sistema diferentzialik edo noranzko-gezirk: geometria ikusgaia soilik kontserbatu da, fase-erretratu zehatzik asmatu gabe. CeTZ kalko editorial deklaratua. Konfiantza ertain-altua",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Orbita geometrikoen eskemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Orrialdearen goiko herenean bi marrazki ageri dira, «orbitak geometrikoak» irakurketa zalantzazkoaren azpian. Ez dago sistema diferentzialik, parametrizaziorik edo noranzko-gezirk; beraz, marrazkiak <strong>eskema geometriko</strong> gisa jasotzen dira, dinamika zehatzik asmatu gabe."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>B</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lehen zirkunferentziaren zentroa <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> eta erradioa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> dira; bigarrenarenak <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eta <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Bi formulak zuzenak dira."
    },
    {
     "mota": "irudia",
     "oina": "Manuskribuko bi kroki geometrikoen kalko bektorial deklaratua: zirkulu gainjarriak zerrenda horizontal batean, eta kanpoko kurba baten barruko bi begizta. <em>Irudi editoriala</em>; ez da fase-erretratu zehatz bat berreraikitzen.",
     "src": "media/irudiak/0a4c4d32db73e55d.svg",
     "zabalera": 517
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Irudiak ez du nahikoa datu kurbak sistema dinamiko baten orbitatzat egiaztatzeko. Horregatik, geometria ikusgaia soilik kontserbatzen da.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0160_A / IMG_2025_07_12_12_34_30S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Orri mistoaren goiko herena; gainerako EDO edukia <code>koadernoa_metmatcg01_p160_edo_mk.typ</code> fitxategian dago. Edizio kritikoa:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p160_fase.typ</code>"
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
   "id": "a57",
   "maila": 1,
   "izenburua": "Egonkortasuna eta fase-diagramak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "edf-ko 8. kapituluko teknika: puntu kritikoak aurkitu, linealizatu, erro karakteristikoen arabera sailkatu. (Osagarri ebatzia: <code>metodos_estabilidad_diagramas_fase.pdf</code>, 2014ko problemak ebatzita, ES.)"
    },
    {
     "mota": "irudia",
     "oina": "Puntu kritikoen sailkapena erro karakteristikoen arabera: erro\n   errealak zeinu berekoak — nodoa (egonkorra biak negatiboak\n   badira); zeinu kontrakoak — zela, beti ezegonkorra; konplexuak\n   zati erreal ez-nuluarekin — espirala; irudikari hutsak —\n   zentroa.",
     "src": "media/irudiak/c0120f2155bdaa96.svg",
     "zabalera": 552
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Adibide ebatzia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sailkatu <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> sistemaren puntu kritikoak (bildumako 6. ariketa)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Puntu kritikoa: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> eta <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>+</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, hots <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakarra. Linealizazioaren matrizea (jakobiarra)  jatorrian: <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — erro karakteristikoak <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>: zeinu kontrako erro errealak, beraz <strong>zela</strong> da, ezegonkorra. (Norabide egonkorra <math display=\"inline\"><mi>y</mi></math> ardatza da; ezegonkorra, <math display=\"inline\"><mi>x</mi></math>-rena — eta gai ez-linealak ez du sailkapena aldatzen, sistema kuasilineala baita.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Azterketetako ariketak (bilduma osorik)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sailkatu ondoko sistemen puntu kritiko guztiak (aurkitu, linealizatu, sailkatu, eta ahal bada fase-diagrama zirriborratu):"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>, <math display=\"inline\"><mi>λ</mi></math> konstantea izanik."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a60",
   "maila": 1,
   "izenburua": "Eranskina: kalkuluko orriak (CG-01)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 119. unitatea (METMATCG01_0119, IMG_2025_07_12_12_26_20S.jpg): integral(sin^m theta cos^n theta) motako integralen metodoa, berretzaileen paritatearen arabera (par/bakoiti eta bakoiti/bakoiti -> ordezkapena; par/par -> angelu bikoitzaren formulak), adibideekin (int sin^2 cos^5, sin^3 cos^5, sin^2 cos^2, sin^3, cos^3, sin^4, cos^4). SymPy-z egiaztatua; zuzenketa BAT mentzioarekin (int sin^3 theta = cos^3 theta/3 - cos theta; paperak zeinua alderantziz). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>m</mi></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math></span>: metodoa berretzaileen paritatearen arabera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hiru kasu, berretzaileen paritatearen arabera:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Bat bakoitia</strong> (par/bakoiti): berretura <strong>bakoitiari</strong> faktore bat kendu eta gainerakoa bestearen bidez adierazi; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo></mrow></math> (berretura <strong>bikoitiaren</strong> funtzioa).",
      "<strong>Biak bakoitiak</strong>: berretura handienetik faktore bat kendu; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo></mrow></math> (bestearen funtzioa).",
      "<strong>Biak bikoitiak</strong>: angelu bikoitzaren formulak <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>½</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>½</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak (bakoiti-kasuak, ordezkapenez)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mfrac><mi>θ</mi><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>7</mn></msup><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>8</mn></msup><mfrac><mi>θ</mi><mn>8</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>6</mn></msup><mfrac><mi>θ</mi><mrow><mn>6</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Adibideak (par/par, angelu bikoitza)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>32</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>θ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mn>4</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Berretura soileko integralak"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>integrala</strong>",
      "<strong>emaitza</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>3</mn><mi>θ</mi><mi>/</mi><mn>8</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mi>/</mi><mn>4</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>θ</mi><mi>/</mi><mn>32</mn></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>3</mn><mi>θ</mi><mi>/</mi><mn>8</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mi>/</mi><mn>4</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>θ</mi><mi>/</mi><mn>32</mn></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Emaitza guztiak SymPy-z egiaztatuak. Jatorrizko orriaren <strong>zuzenketa</strong>:\n<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span> (paperak zeinua alderantziz\nzuen; <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></math> ondo zegoen).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0119</code>, <code>IMG_2025_07_12_12_26_20S.jpg</code>; «MÉTODO M.» lotea). <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>m</mi></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi></msup></mrow></math> integralen metodo eta adibideak. SymPy-z egiaztatua; zuzenketa bat mentzioarekin. Ikus <code>koadernoa_metmatcg01_p119.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, 120. unitatea (METMATCG01_0120, IMG_2025_07_12_12_26_27S.jpg; «ESFERA-PARABOLOIDE»): kalkulu bektoriala — F=(x,y,z)-ren FLUXUA z=a^2-x^2-y^2 (z>=0) paraboloidearen gainean. Parametrizazioa x=a sin(theta)cos(phi), y=a sin(theta)sin(phi), z=a^2 cos^2(theta); dS=r_theta x r_phi; F·dS=a^4(2 sin^3 cos + sin cos^3); emaitza 3 pi a^4 / 2. SymPy-z egiaztatua. Gai-aldetik kalkulu bektoriala (birbideraketa-hautagai). Konfiantza altua",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Fluxu-integrala: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> paraboloidea (<math display=\"inline\"><mrow><mi>z</mi><mo>≥</mo><mn>0</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> eremuaren fluxua <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mi>z</mi><mo>≥</mo><mn>0</mn></mrow></math>) paraboloidearen gainean."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametrizazioa"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mi>φ</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Egiaztapena: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mi>z</mi></mrow></math></span>. ✓"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Azalera-bektorea eta integrakina"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>∂</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>×</mo><mi>∂</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>3</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msup><mi>a</mi><mn>3</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> denez (<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> posizio-eremua da gainazalean):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msup><mi>a</mi><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fluxua"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>φ</mi></math>-gaineko integralak <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math> ematen du; <math display=\"inline\"><mi>θ</mi></math>-gainekoak, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> eta <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> ordezkapenez:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msub><mo>∫</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>θ</mi><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mo>=</mo><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Parametrizazioa, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> eta fluxua (<math display=\"inline\"><mrow><mn>3</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><mi>/</mi><mn>2</mn></mrow></math>)\nSymPy-z egiaztatuak. Gai-aldetik <strong>kalkulu bektoriala</strong> da (fluxu-integrala); 08_09-n\nkableatua (CG-01 lotearen hartzailea), etorkizuneko birbideraketa-hautagai.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Iturriaren oharrak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Argazkitik osatua (<code>METMATCG01_0120</code>, <code>IMG_2025_07_12_12_26_27S.jpg</code>; «MÉTODO M.» lotea, «ESFERA-PARABOLOIDE»). <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>-ren fluxua paraboloidearen gainean. SymPy-z egiaztatua; zuzenketarik gabe. Ikus <code>koadernoa_metmatcg01_p120.typ</code>."
      }
     ]
    }
   ]
  }
 ]
};
