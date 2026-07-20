(function () {
  function init() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const nav = document.getElementById('nav');

    if (!header) return;

    window.addEventListener('scroll', () => {
      header.classList.toggle('header--scrolled', window.scrollY > 10);
    });

    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('nav--open');
        menuToggle.classList.toggle('menu-toggle--active', isOpen);
        menuToggle.setAttribute('aria-expanded', isOpen);
        if (!isOpen) {
          nav.querySelectorAll('.nav__item--dropdown').forEach((item) => {
            item.classList.remove('nav__item--open');
          });
        }
      });

      nav.querySelectorAll('.nav__item--dropdown > .nav__link--parent').forEach((trigger) => {
        trigger.addEventListener('click', (e) => {
          if (window.innerWidth > 768) return;
          e.preventDefault();
          const item = trigger.closest('.nav__item--dropdown');
          const isOpen = item.classList.toggle('nav__item--open');
          nav.querySelectorAll('.nav__item--dropdown').forEach((other) => {
            if (other !== item) other.classList.remove('nav__item--open');
          });
          if (!isOpen) item.classList.remove('nav__item--open');
        });
      });

      nav.querySelectorAll('.nav__link, .nav__dropdown-link, .nav__contact').forEach((link) => {
        link.addEventListener('click', () => {
          nav.classList.remove('nav--open');
          menuToggle.classList.remove('menu-toggle--active');
          menuToggle.setAttribute('aria-expanded', 'false');
          nav.querySelectorAll('.nav__item--dropdown').forEach((item) => {
            item.classList.remove('nav__item--open');
          });
        });
      });
    }

    const revealElements = document.querySelectorAll(
      '.service-card, .service-detail, .why-card, .case-card, .testimonial, .about__visual, .about__content, .hub-card, .page-card'
    );

    if (revealElements.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
      );

      revealElements.forEach((el) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(24px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
