(function () {
  'use strict';

  // Footer-Jahr aktualisieren
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Mobile Navigation
  var navToggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', !isOpen);
      nav.classList.toggle('is-open');
      navToggle.setAttribute('aria-label', isOpen ? 'Menü öffnen' : 'Menü schließen');
    });

    // Schließen bei Klick auf einen Link (Mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 1100) {
          navToggle.setAttribute('aria-expanded', 'false');
          nav.classList.remove('is-open');
        }
      });
    });

    // Schließen bei Fokus außerhalb
    document.addEventListener('focusin', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !navToggle.contains(e.target)) {
        navToggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
      }
    });
  }
})();
