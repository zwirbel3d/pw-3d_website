// Minimal, privacy-first JS: reveal animations + cookie banner + dynamic year
(function(){
  // Year
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on view
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window){
    var revealEls = [].slice.call(document.querySelectorAll('.reveal'));
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    // Fallback: show immediately
    document.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('visible'); });
  }

  // Minimal cookie (technically necessary, for remembering dismissal)
  function getCookie(name){
    var m = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'));
    return m ? decodeURIComponent(m[1]) : null;
  }
  function setCookie(name, value, days){
    var maxAge = days ? '; max-age=' + (days*24*60*60) : '';
    document.cookie = name + '=' + encodeURIComponent(value) + maxAge + '; path=/; SameSite=Lax';
  }

  var cookieBanner = document.querySelector('.cookie');
  var acceptBtn = document.getElementById('cookie-accept');

  if (cookieBanner && acceptBtn){
    var consent = getCookie('pw3d_consent');
    if (!consent){
      // Show after small delay for calmer UX
      setTimeout(function(){ cookieBanner.classList.add('show'); }, 400);
    }
    acceptBtn.addEventListener('click', function(){
      setCookie('pw3d_consent', 'necessary', 365);
      cookieBanner.classList.remove('show');
    });
  }
})();

  // Mobile nav (burger)
  var nav = document.getElementById('primary-nav');
  var toggle = document.querySelector('.nav-toggle');
  var backdrop = document.querySelector('.nav-backdrop');
  function closeNav(){
    if (!nav) return;
    nav.classList.remove('open');
    document.body.classList.remove('nav-open');
    if (toggle){ toggle.setAttribute('aria-expanded', 'false'); }
    if (backdrop){ backdrop.setAttribute('hidden', ''); }
  }
  function openNav(){
    if (!nav) return;
    nav.classList.add('open');
    document.body.classList.add('nav-open');
    if (toggle){ toggle.setAttribute('aria-expanded', 'true'); }
    if (backdrop){ backdrop.removeAttribute('hidden'); }
    // Focus first link for accessibility
    var firstLink = nav.querySelector('a');
    if (firstLink){ firstLink.focus({preventScroll:true}); }
  }
  if (toggle && nav){
    toggle.addEventListener('click', function(){
      if (nav.classList.contains('open')) closeNav(); else openNav();
    });
  }
  if (backdrop){
    backdrop.addEventListener('click', closeNav);
  }
  // Close on ESC, and when clicking a nav link
  document.addEventListener('keydown', function(e){
    if (e.key === 'Escape'){ closeNav(); }
  });
  if (nav){
    nav.addEventListener('click', function(e){
      var t = e.target;
      if (t && t.tagName === 'A'){ closeNav(); }
    });
  }
  // Close menu when resizing to desktop
  window.addEventListener('resize', function(){
    if (window.innerWidth > 820){ closeNav(); }
  });
