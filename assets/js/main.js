(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sw=$('ss-w');if(sw){var sc=$('ss-c');
 on([sw,sc],function(){var w=parseFloat(sw.value);if(isNaN(w))w=17;w=Math.min(24,Math.max(12,w));var c=parseInt(sc.value,10);
  var len=w<16?['Short','110 / 70 mm']:w<=18.5?['Regular','120 / 75 mm']:w<=20.5?['Long','130 / 80 mm']:['Extra long','140 / 85 mm'];
  var lug=c<=34?'16 or 18 mm':c<=38?'18 or 20 mm':c<=40?'20 mm':c<=42?'20 or 22 mm':'22 mm';
  var ideal=w<16?[34,38]:w<=18?[38,40]:[40,44],fit=c<ideal[0]?'This case is on the small side for your wrist. It will wear discreetly, in a classic way.':c>ideal[1]?'This case is large for your wrist. Check that the lug-to-lug length is under '+Math.round(w*10/3.14*0.9)+' mm so it does not overhang.':'This case diameter is well matched to your wrist.';
  $('ss-r').innerHTML='<span class="wt-big">'+len[0]+' strap</span><ul class="wt-kv"><li><span>Strap length (long / short piece)</span><b>'+len[1]+'</b></li><li><span>Likely lug width</span><b>'+lug+'</b></li><li><span>Bracelet length to aim for</span><b>'+(w+1).toFixed(1)+' cm</b></li></ul><p>'+fit+' Always confirm lug width with a ruler before ordering.</p>';});}
var wr=$('wr-r');if(wr){var wc=$('wr-c');
 on([wr,wc],function(){var r=parseInt(wr.value,10),s=wc.value==='screw';
  function row(t,v){return '<li><span>'+t+'</span><b class="'+(v===2?'y':v===1?'m':'n')+'">'+(v===2?'Yes':v===1?'With care':'No')+'</b></li>';}
  var title=r===0?'Keep it dry':r<=30?'Splash resistant':r<=50?'Light water use':r<=100?'Swimming':'Diving';
  $('wr-o').innerHTML='<span class="wt-big">'+title+'</span><ul class="wt-kv">'+row('Rain and hand washing',r>=30?2:r===0?0:1)+row('Surface swimming',r>=100?2:r>=50?1:0)+row('Snorkelling',r>=200?2:r>=100?1:0)+row('Scuba diving',r>=300||(r>=200&&s)?2:0)+row('Hot shower or sauna',0)+'</ul><p>'+(s?'Check the crown is screwed fully down before any contact with water.':'A push-in crown must be pressed fully home; never pull it out when wet.')+' Ratings assume seals in good condition, so have them tested every two to three years.</p>';});}
var as=$('ac-s');if(as){var ad=$('ac-d'),am=$('ac-m');
 on([as,ad,am],function(){var s=parseFloat(as.value);if(isNaN(s))s=0;var d=Math.max(1,parseInt(ad.value,10)||1),per=s/d,a=Math.abs(per),q=am.value==='quartz',v;
  if(q)v=a<=0.7?'Normal for a quartz watch.':a<=2?'A little outside typical quartz accuracy. A fresh battery often helps.':'Well outside what quartz should do. Have the battery and movement checked.';
  else v=a<=10?'Excellent for a mechanical watch.':a<=20?'Within the normal range for a mechanical watch.':a<=60?'Outside the usual range. The watch may need regulating.':'A large error. Sudden big gains often mean the watch is magnetised; a watchmaker can check in minutes.';
  $('ac-r').innerHTML='<span class="wt-big">'+(per>0?'+':per<0?'\u2212':'')+a.toFixed(1)+' s / day</span><ul class="wt-kv"><li><span>Per week</span><b>'+(a*7).toFixed(0)+' s</b></li><li><span>Per month</span><b>'+(a*30/60).toFixed(1)+' min</b></li><li><span>Direction</span><b>'+(per>0?'Running fast':per<0?'Running slow':'Spot on')+'</b></li></ul><p>'+v+' Measure over at least three days for a fair reading.</p>';});}
})();
