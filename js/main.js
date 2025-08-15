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
      setTimeout(function(){ cookieBanner.classList.add('show'); }, 200);
    }
    acceptBtn.addEventListener('click', function(){
      setCookie('pw3d_consent', 'necessary', 365);
      cookieBanner.classList.remove('show');
    });
  }
})();
