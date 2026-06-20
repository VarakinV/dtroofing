document.documentElement.classList.add('js');

/* mobile nav toggle */
(function(){
  var t=document.getElementById('navToggle'), l=document.getElementById('navLinks');
  if(t&&l){
    t.addEventListener('click',function(){
      var open=l.classList.toggle('open');
      t.setAttribute('aria-expanded',open?'true':'false');
    });
    l.querySelectorAll('a').forEach(function(a){
      if(a.classList.contains('nav-dd-toggle')) return;
      a.addEventListener('click',function(){ l.classList.remove('open'); t.setAttribute('aria-expanded','false'); });
    });
  }
})();

/* services dropdown toggle on mobile (React already renders the dropdown) */
(function(){
  var dd=document.querySelector('.nav-dd');
  if(!dd) return;
  var toggle=dd.querySelector('.nav-dd-toggle');
  if(!toggle) return;
  toggle.addEventListener('click',function(e){
    if(window.matchMedia('(max-width:1024px)').matches){
      e.preventDefault();
      dd.classList.toggle('open');
    }
  });
})();

/* fade-up reveals */
(function(){
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){ els.forEach(function(e){e.classList.add('in')}); return; }
  var io=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){ en.target.classList.add('in'); io.unobserve(en.target); }
    });
  },{threshold:0.12, rootMargin:'0px 0px -8% 0px'});
  els.forEach(function(e){ io.observe(e); });
})();

/* scroll-spy — highlight the nav link for the section in view */
(function(){
  var links=[].slice.call(document.querySelectorAll('.nav-links a[href^="#"]'));
  if(!links.length || !('IntersectionObserver' in window)) return;
  var map={};
  links.forEach(function(a){ var id=a.getAttribute('href').slice(1); if(id){ map[id]=a; } });
  var sections=Object.keys(map).map(function(id){ return document.getElementById(id); }).filter(Boolean);
  var spy=new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        links.forEach(function(a){ a.classList.remove('active'); });
        if(map[en.target.id]) map[en.target.id].classList.add('active');
      }
    });
  },{rootMargin:'-45% 0px -50% 0px', threshold:0});
  sections.forEach(function(s){ spy.observe(s); });
})();

/* reviews carousel */
(function(){
  var root=document.getElementById('reviewCarousel'); if(!root) return;
  var track=root.querySelector('.rc-track');
  var slides=[].slice.call(track.children); var n=slides.length; if(!n) return;
  var dotsWrap=root.querySelector('.rc-dots'); var i=0;
  for(var k=0;k<n;k++){ (function(idx){ var b=document.createElement('button'); b.className='rc-dot'; b.setAttribute('aria-label','Go to review '+(idx+1)); b.addEventListener('click',function(){ go(idx); restart(); }); dotsWrap.appendChild(b); })(k); }
  var dots=[].slice.call(dotsWrap.children);
  function go(x){ i=(x+n)%n; track.style.transform='translateX(-'+(i*100)+'%)'; for(var d=0;d<dots.length;d++){ dots[d].classList.toggle('active', d===i); } }
  root.querySelector('.rc-prev').addEventListener('click',function(){ go(i-1); restart(); });
  root.querySelector('.rc-next').addEventListener('click',function(){ go(i+1); restart(); });
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var timer=null;
  function start(){ if(reduce) return; timer=setInterval(function(){ go(i+1); },6000); }
  function restart(){ if(timer) clearInterval(timer); start(); }
  root.addEventListener('mouseenter',function(){ if(timer) clearInterval(timer); });
  root.addEventListener('mouseleave',start);
  go(0); start();
})();

/* quote form — inline confirmation (no backend in this demo) */
(function(){
  var f=document.getElementById('quoteForm'), ok=document.getElementById('formSuccess');
  if(!f) return;
  f.addEventListener('submit',function(e){
    e.preventDefault();
    if(!f.checkValidity()){ f.reportValidity(); return; }
    f.style.display='none';
    ok.classList.add('show');
    ok.scrollIntoView({behavior:'smooth', block:'center'});
  });
})();
