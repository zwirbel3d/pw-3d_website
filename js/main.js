// Minimal, privacy-first JS: reveal animations + cookie banner + dynamic year
(() => {
  // Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Reveal on view
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window){
    const revealEls = Array.from(document.querySelectorAll('.reveal'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    revealEls.forEach(el => io.observe(el));
  } else {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }

  // Minimal cookie (technically necessary, for remembering dismissal)
  const getCookie = name => {
    const match = document.cookie.split('; ').find(row => row.startsWith(name + '='));
    return match ? decodeURIComponent(match.split('=')[1]) : null;
  };
  const setCookie = (name, value, days) => {
    const maxAge = days ? `; max-age=${days*24*60*60}` : '';
    document.cookie = `${name}=${encodeURIComponent(value)}${maxAge}; path=/; SameSite=Lax; Secure`;
  };

  const cookieBanner = document.querySelector('.cookie');
  const acceptBtn = document.getElementById('cookie-accept');

  if (cookieBanner && acceptBtn){
    const consent = getCookie('pw3d_consent');
    if (!consent){
      setTimeout(() => { cookieBanner.classList.add('show'); }, 200);
    }
    acceptBtn.addEventListener('click', () => {
      setCookie('pw3d_consent', 'necessary', 365);
      cookieBanner.classList.remove('show');
    });
  }

  // Mobile navigation
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('primary-nav');
  if (navToggle && nav){
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      nav.classList.toggle('open');
    });
  }
})();
