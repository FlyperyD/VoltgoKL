(function(){
var $=function(s,r){return (r||document).querySelector(s)},$$=function(s){return [].slice.call(document.querySelectorAll(s))};
var nav=$('#nav');$('#bg').onclick=function(){nav.classList.toggle('open')};
$$('#nav a').forEach(function(a){a.onclick=function(){nav.classList.remove('open')}});
// підсвічування активного розділу
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$('#nav a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-45% 0px -50% 0px'});$$('main section[id]').forEach(function(s){io.observe(s)})}
// питання до залу
var ans={yes:'Чудово! А тепер уявіть, що його немає — саме для цього є VOLTGO.',no:'Саме так і буває. Візьміть павербанк напрокат на станції.',low:'Знайома ситуація! Станція VOLTGO — поруч.'};
$$('.q button').forEach(function(b){b.onclick=function(){$('.qa').textContent=ans[b.dataset.a]}});
// калькулятор: ≈21,74 грн чистими з оренди, 6 550 грн постійних витрат/міс (30 днів)
var r=$('#rent');function calc(){var n=+r.value,p=Math.round((n*30*21.74-6550)/10)*10,o=$('#profit');$('#rv').textContent=n;
o.textContent=(p>0?'+':'')+p.toLocaleString('uk-UA')+' грн/міс';o.className='res '+(p<-50?'neg':p>50?'pos':'')}
r.oninput=calc;calc();
// опитування (зберігається лише в браузері)
var K='voltgo-poll',msg=$('#pmsg');function show(v){msg.textContent='Дякуємо! Ваш вибір: «'+v+'».'}
try{var s=localStorage.getItem(K);if(s)show(s)}catch(e){}
$$('.poll button').forEach(function(b){b.onclick=function(){show(b.textContent);try{localStorage.setItem(K,b.textContent)}catch(e){}}});
// поділитися
$('#share').onclick=function(){var d={title:'VOLTGO — Заряд поруч',url:location.href};
if(navigator.share){navigator.share(d).catch(function(){})}else if(navigator.clipboard){navigator.clipboard.writeText(d.url).then(function(){$('#share').textContent='Посилання скопійовано ✓'})}else{prompt('Скопіюйте посилання:',d.url)}};
// контакти з config.js
var c=window.VOLTGO||{},box=$('#contacts');
if(c.telegram){box.innerHTML+='<a class="btn o" href="https://t.me/'+c.telegram.replace('@','')+'" target="_blank" rel="noopener">Telegram</a>'}
if(c.email){box.innerHTML+='<a class="btn o" href="mailto:'+c.email+'">Email</a>'}
})();
