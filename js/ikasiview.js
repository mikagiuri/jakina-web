"use strict";
/* Ikasteko bista (web-jakina-7), web\-rako egokitua (vista7/study.js-tik).
   app.js-ren routing-ak deitzen du: window.loadIkasi("<clave>/<kontzeptua>").
   #ikasi atalean marrazten du; datuak web/datuak/-etik hartzen ditu; estekak #ikasi/<clave>/<id>.
   Ficha de 3 geruza (ideia → enuntziatua → gainerakoa tolestuta) + glosarioa + grafoa, look Filosofía.
   `sortua` eremuetan eta `berrikusi_gabe` glosarioan: «proposamena» marka (autoreak eskatuta). */
(function(){
  var MOTA={ definizioa:['D','k-def','Definizioa'], teorema:['T','k-teo','Teorema'],
             metodoa:['M','k-met','Metodoa'], ideia:['i','k-ide','Ideia'], notazioa:['N','k-not','Notazioa'] };
  function esc(s){return String(s==null?'':s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
  function media(h){ return String(h||''); }   // web\-n irudiak media/… dira; ez da bideratu behar

  var GLOS={}, GLOSFULL=[], INDEX=null, INDEXSET={}, CH={}, cur=null, MODE='kontzeptuak';
  var sec=null, contentEl=null, popEl=null;

  function loadGlobals(){
    return Promise.all([
      fetch('datuak/glosarioa.json',{cache:'no-cache'}).then(function(r){return r.json()}).catch(function(){return {sarrerak:[]}}),
      fetch('datuak/estudio_indizea.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():null}).catch(function(){return null})
    ]).then(function(res){
      GLOSFULL=res[0].sarrerak||[]; GLOSFULL.forEach(function(g){ GLOS[g.t.toLowerCase()]=g.def; });
      INDEX=res[1]; (INDEX&&INDEX.kapituluak||[]).forEach(function(k){ INDEXSET[k.clave]=k; });
    });
  }
  function loadChapter(clave){
    if(CH[clave]) return Promise.resolve(CH[clave]);
    return fetch('datuak/'+clave+'_kontzeptuak.json',{cache:'no-cache'}).then(function(r){return r.json()}).then(function(DATA){
      var byId={}, order=[];
      (DATA.kontzeptuak||[]).forEach(function(c){ byId[c.id]=c; order.push(c.id);
        (c.terminoak||[]).forEach(function(t){ if(!GLOS[t.t.toLowerCase()]) GLOS[t.t.toLowerCase()]=t.def; }); });
      var st={clave:clave, DATA:DATA, byId:byId, order:order, atalak:DATA.atalak||[]};
      CH[clave]=st; return st;
    });
  }

  // app.js-k deitzen du, #ikasi bista-aldaketa bakoitzean (hash: #ikasi/<clave>/<kontzeptua>)
  window.loadIkasi = function(arg){
    sec=document.getElementById('ikasi'); if(!sec) return;
    var parts=(arg||'').split('/'), clave=parts[0]||'', kont=parts[1]||'';
    var pre = Object.keys(INDEXSET).length? Promise.resolve() : loadGlobals();
    pre.then(function(){
      if(!clave) clave=(INDEX&&INDEX.kapituluak&&INDEX.kapituluak[0]&&INDEX.kapituluak[0].clave)||'00aa_02logika';
      // kapitulu bera jada muntatuta → kontzeptua bakarrik marraztu (ez berreraiki shell-a)
      if(cur && cur.clave===clave && contentEl && sec.querySelector('#ik-content')){
        MODE='kontzeptuak'; showMode('kontzeptuak', kont); return null;
      }
      return loadChapter(clave);
    }).then(function(st){ if(st){ cur=st; buildShell(kont); } })
    .catch(function(e){ sec.innerHTML='<p class="hutsik">Ezin izan da ikasteko edukia kargatu.</p>'; if(window.console)console.error(e); });
  };

  function buildShell(kont){
    var opts = (INDEX&&INDEX.kapituluak||[]).map(function(k){ return '<option value="'+esc(k.clave)+'"'+(k.clave===cur.clave?' selected':'')+'>'+esc(k.izenburua||k.clave)+'</option>'; }).join('');
    sec.innerHTML=
      '<div class="ikasi-bar">'+
        '<div class="modetoggle" role="group" aria-label="Modua"><a class="m-leer" href="#kapitulua/'+esc(cur.clave)+'">Irakurri</a><button type="button" class="m-study" aria-pressed="true">Ikasi</button></div>'+
        (opts? '<select class="kapsel" aria-label="Kapitulua aukeratu">'+opts+'</select>':'')+
        '<button type="button" class="iconbtn ik-glos" title="Glosarioa" aria-label="Glosarioa">📖</button>'+
      '</div>'+
      '<nav class="smodes" id="ik-smodes" aria-label="Ikasteko moduak"></nav>'+
      '<div class="ikasi-content" id="ik-content"></div>'+
      '<div class="gpop" id="ik-gpop" hidden></div>';
    contentEl=sec.querySelector('#ik-content'); popEl=sec.querySelector('#ik-gpop');
    var selEl=sec.querySelector('.kapsel'); if(selEl) selEl.addEventListener('change',function(){ location.hash='#ikasi/'+encodeURIComponent(selEl.value); });
    sec.querySelector('.ik-glos').addEventListener('click',function(){ showMode('glosarioa'); });
    buildModes();
    MODE='kontzeptuak'; showMode('kontzeptuak', kont);
  }

  function H(id){ return '#ikasi/'+cur.clave+'/'+id; }   // kontzeptu baterako esteka
  function byAtala(fn){
    var g={}; cur.order.forEach(function(id){var c=cur.byId[id];(g[c.atala]=g[c.atala]||[]).push(c)});
    var ids=cur.atalak.map(function(a){return a.id}); Object.keys(g).forEach(function(a){if(ids.indexOf(a)<0)ids.push(a)});
    ids.forEach(function(aid){ if(g[aid]) fn(aid,(cur.atalak.find(function(a){return a.id===aid})||{}).izena||aid,g[aid]); });
  }
  function railHtml(){ var html=''; byAtala(function(aid,aname,cs){
      html+='<div class="atala">'+esc(aname)+'</div><ol>'+cs.map(function(c){ var mb=MOTA[c.mota]||['·','',''];
        return '<li><a data-id="'+c.id+'" href="'+H(c.id)+'"><span class="mbadge '+mb[1]+'">'+mb[0]+'</span><span>'+esc(c.izena)+'</span></a></li>';
      }).join('')+'</ol>'; }); return html; }
  function capaDetails(cls,icon,label,inner){ return '<details class="capa '+cls+'"><summary><span class="mbadge '+cls+'">'+icon+'</span>'+label+'</summary><div class="body">'+inner+'</div></details>'; }
  function chip(id){ var c=cur.byId[id]; if(c) return '<a class="gchip" href="'+H(id)+'">'+esc(c.izena)+'</a>'; return '<span class="gchip dead" title="Oraindik lotu gabe">'+esc(id)+'</span>'; }

  function renderFicha(c){
    var mb=MOTA[c.mota]||['·','','Kontzeptua'], sortua=c.sortua||[];
    function mk(f){ return sortua.indexOf(f)>=0? ' <span class="pmark" title="LLMak sortutako testua, berrikusteke">proposamena</span>':''; }
    var capas='';
    if(c.azalpena) capas+=capaDetails('k-ad','A','Azalpena'+mk('azalpena'),media(c.azalpena));
    if((c.adibideak||[]).length) capas+=capaDetails('k-ad','A','Adibideak ('+c.adibideak.length+')'+mk('adibideak'), c.adibideak.map(media).join(''));
    if(c.frogapena) capas+=capaDetails('k-fr','!','Frogapena'+mk('frogapena'),media(c.frogapena));
    if((c.ariketak||[]).length) capas+=capaDetails('k-met','✎','Ariketak ('+c.ariketak.length+')'+mk('ariketak'),
      c.ariketak.map(function(a){return '<div class="ex">'+media(a.e)+(a.s? '<details><summary>Ikusi ebazpena</summary><div class="sol">'+media(a.s)+'</div></details>' : '<div class="ex-nos">Ebazpenik gabe (jatorrizkoan ez zegoen).</div>')+'</div>'}).join(''));
    var terms=(c.terminoak||[]).length? '<div class="terms"><span class="lab">Termino berriak</span> '+
      c.terminoak.map(function(t){return '<button type="button" class="gterm" data-term="'+esc(t.t)+'">'+esc(t.t)+'</button>'}).join(' · ')+'</div>' : '';
    var apoya=(c.aurrekoak||[]).length? '<div class="gcol"><span class="lab">↙ Honetan oinarritzen da</span><div class="gch">'+c.aurrekoak.map(chip).join('')+'</div></div>' : '';
    var usa=(c.ondorengoak||[]).length? '<div class="gcol"><span class="lab">Hemen erabiltzen da ↘</span><div class="gch">'+c.ondorengoak.map(chip).join('')+'</div></div>' : '';
    var graph=(apoya||usa)? '<div class="graph">'+apoya+usa+'</div>' : '';
    var i=cur.order.indexOf(c.id), prev=cur.byId[cur.order[i-1]], next=cur.byId[cur.order[i+1]];
    var snav='<nav class="snav">'+
      (prev?'<a href="'+H(prev.id)+'"><small>← Aurrekoa</small>'+esc(prev.izena)+'</a>':'<span></span>')+
      (next?'<a href="'+H(next.id)+'"><small>Hurrengoa →</small>'+esc(next.izena)+'</a>':'')+'</nav>';
    var aname=(cur.atalak.find(function(a){return a.id===c.atala})||{}).izena||c.atala;
    contentEl.innerHTML=
      '<div class="study-layout"><nav class="srail" aria-label="Kontzeptuak">'+railHtml()+'</nav>'+
      '<article class="ficha">'+
      (sortua.length? '<p class="pnote">● <b>proposamena</b> marka = LLMak sortutako testua, berrikusteke. Liburuari fidela dena, markarik gabe.</p>':'')+
      '<div class="kicker"><span class="mtag '+mb[1]+'">'+mb[2]+'</span><span>'+esc(aname)+(c.iturria?' · '+esc(c.iturria):'')+'</span></div>'+
      '<h1>'+esc(c.izena)+'</h1>'+
      '<div class="ideia"><span class="lab">Ideia'+mk('ideia')+'</span><div class="bd">'+media(c.ideia||'')+'</div></div>'+
      (c.enuntziatua? '<div class="enun"><span class="lab">Enuntziatu zehatza'+mk('enuntziatua')+'</span><div class="bd">'+media(c.enuntziatua)+'</div></div>':'')+
      (c.formula? '<div class="formulabox">'+c.formula+'</div>':'')+
      capas+terms+graph+snav+
      '</article></div>';
    var on=contentEl.querySelector('.srail a[data-id="'+c.id+'"]'); if(on){ on.classList.add('on'); on.scrollIntoView({block:'nearest'}); }
  }
  function renderEssential(){
    var html='<div class="sarrera"><span class="kick">Funtsezkoa</span><h1>'+esc(cur.DATA.izenburua||'')+'</h1><p>Kontzeptu bakoitza, ideia batean.</p></div><div class="essential">';
    byAtala(function(aid,aname,cs){ html+='<div class="atala-h">'+esc(aname)+'</div>'+cs.map(function(c){ var mb=MOTA[c.mota]||['·','',''];
      return '<a class="ecard" href="'+H(c.id)+'"><span class="mbadge '+mb[1]+'">'+mb[0]+'</span><div class="ec-b"><b>'+esc(c.izena)+'</b><div class="ec-i">'+media(c.ideia||'')+'</div></div></a>';
    }).join(''); });
    contentEl.innerHTML=html+'</div>';
  }
  function renderMap(){
    var html='<div class="sarrera"><span class="kick">Mapa</span><h1>Ikaskuntza-mapa</h1><p>Kontzeptu bakoitzak zertan jarraitzen duen (menpekotasun-grafoa). Sakatu kontzeptu batera joateko.</p></div><div class="mapgrid">';
    byAtala(function(aid,aname,cs){ html+='<div class="mapcol"><div class="atala-h">'+esc(aname)+'</div>'+cs.map(function(c){
      var outs=(c.ondorengoak||[]).filter(function(id){return cur.byId[id]});
      return '<div class="mapnode"><a href="'+H(c.id)+'" class="mn-t">'+esc(c.izena)+'</a>'+
        (outs.length? '<div class="mn-out">'+outs.map(function(id){return '<a href="'+H(id)+'" class="mn-chip">→ '+esc(cur.byId[id].izena)+'</a>'}).join('')+'</div>':'')+'</div>';
    }).join('')+'</div>'; });
    contentEl.innerHTML=html+'</div>';
  }
  function renderGlossary(){
    var list = GLOSFULL.length? GLOSFULL.slice().sort(function(a,b){return a.t.localeCompare(b.t)})
      : Object.keys(GLOS).sort().map(function(k){return {t:k,def:GLOS[k]}});
    contentEl.innerHTML='<div class="sarrera"><span class="kick">Erreferentzia</span><h1>Glosarioa</h1><p>'+list.length+' termino.</p></div>'+
      '<div class="glos-list">'+list.map(function(g){ var bad=g.berrikusi_gabe? ' <span class="pmark">proposamena</span>':'';
        return '<div class="glos-sarrera"><b>'+esc(g.t)+'</b>'+bad+'<div class="glos-def">'+g.def+'</div></div>'}).join('')+'</div>';
  }
  function buildModes(){
    var L=[['kontzeptuak','Kontzeptuak'],['funtsezkoa','Funtsezkoa'],['mapa','Mapa'],['glosarioa','Glosarioa']];
    var el=sec.querySelector('#ik-smodes');
    el.innerHTML=L.map(function(t){return '<button type="button" class="smode" data-mode="'+t[0]+'" aria-pressed="'+(t[0]===MODE)+'">'+t[1]+'</button>'}).join('');
    el.addEventListener('click',function(e){ var b=e.target.closest('[data-mode]'); if(b) showMode(b.dataset.mode); });
  }
  function showMode(m, kont){ MODE=m;
    [].forEach.call(sec.querySelectorAll('#ik-smodes .smode'),function(b){ b.setAttribute('aria-pressed', b.dataset.mode===m); });
    if(m==='kontzeptuak'){ var c=(kont&&cur.byId[kont])||cur.byId[cur.order[0]]; if(c) renderFicha(c); }
    else if(m==='funtsezkoa') renderEssential(); else if(m==='mapa') renderMap(); else if(m==='glosarioa') renderGlossary();
    window.scrollTo(0,0);
  }

  /* glosarioaren popover-a (termino bat sakatzean) */
  document.addEventListener('click',function(e){
    if(!popEl) return;
    var t=e.target.closest('.gterm'); if(t && sec.contains(t)){ var def=GLOS[t.getAttribute('data-term').toLowerCase()]; if(def){
      var r=t.getBoundingClientRect(); popEl.innerHTML='<div class="gt">'+esc(t.getAttribute('data-term'))+'</div>'+def; popEl.hidden=false;
      var w=popEl.offsetWidth,h=popEl.offsetHeight, px=Math.min(r.left,innerWidth-w-12), py=r.bottom+14; if(py+h>innerHeight-8) py=r.top-h-14;
      popEl.style.left=Math.max(8,px)+'px'; popEl.style.top=Math.max(8,py)+'px'; e.stopPropagation(); return; } }
    if(!e.target.closest('#ik-gpop')) popEl.hidden=true;
  });
  document.addEventListener('keydown',function(e){ if(e.key==='Escape'&&popEl) popEl.hidden=true; });

  /* index-a eagerly kargatu: kapituluaview-k window.IKASGAI begiratzen du toggle-a non erakutsi jakiteko */
  function toggleBerandutua(){
    // (lasterketa) IKASGAI kapitulua margotu ondoren badator, txandakatzailea orain txertatu
    try{
      var kv=document.getElementById('kapitulua');
      if(!kv || !kv.classList.contains('active')) return;
      var body=document.getElementById('kapbody'), gakoa=body && body.dataset.gakoa;
      var head=body && body.querySelector('.theory-head');
      if(gakoa && INDEXSET[gakoa] && head && !head.querySelector('.kap-ikasgai'))
        head.insertAdjacentHTML('beforeend','<div class="kap-ikasgai" role="group" aria-label="Modua"><span class="on">Irakurri</span><a href="#ikasi/'+gakoa+'">Ikasi</a></div>');
    }catch(e){}
  }
  loadGlobals().then(function(){ window.IKASGAI = INDEXSET; toggleBerandutua(); });
})();
