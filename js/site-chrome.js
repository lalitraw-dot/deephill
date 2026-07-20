(function () {
  const body = document.body;
  const base = body.dataset.base || '';
  const page = body.dataset.page || '';

  const nav = {
    items: [
      { id: 'services', label: 'Services', href: `${base}services.html`, children: [
        { label: 'Digital Transformation', href: `${base}services.html#digital-transformation` },
        { label: 'Application Development', href: `${base}services.html#application-development` },
        { label: 'Data & Business Intelligence', href: `${base}services.html#data-business-intelligence` },
        { label: 'Intelligent Automation', href: `${base}services.html#intelligent-automation` },
        { label: 'View all services', href: `${base}services.html`, divider: true },
      ]},
      { id: 'about', label: 'About', href: `${base}about.html` },
      { id: 'solutions', label: 'Solutions', href: `${base}solutions.html`, children: [
        { label: 'Why Deep Hill', href: `${base}solutions.html` },
        { label: 'Discovery & Strategy', href: `${base}solutions.html#engage` },
        { label: 'Build & Deliver', href: `${base}solutions.html#engage` },
        { label: 'Scale & Optimize', href: `${base}solutions.html#engage` },
      ]},
      { id: 'industries', label: 'Industries', href: `${base}industries.html`, children: [
        { label: 'Financial Services', href: `${base}industries.html#financial-services` },
        { label: 'Healthcare', href: `${base}industries.html#healthcare` },
        { label: 'Manufacturing', href: `${base}industries.html#manufacturing` },
        { label: 'Retail & E-Commerce', href: `${base}industries.html#retail` },
        { label: 'Energy', href: `${base}industries.html#energy` },
        { label: 'Government', href: `${base}industries.html#government` },
      ]},
      { id: 'case-studies', label: 'Case Studies', href: `${base}case-studies/index.html`, children: [
        { label: 'Audit Management Platform', href: `${base}case-studies/audit-management-platform.html` },
        { label: 'End-to-End Hedge Accounting Platform', href: `${base}case-studies/hedge-accounting-platform.html` },
        { label: 'Multi-City Booking & Schedule Management', href: `${base}case-studies/sports-booking-system.html` },
        { label: 'Regulatory Reporting Platform', href: `${base}case-studies/regulatory-reporting-platform.html` },
        { label: 'Data Platform & BI Implementation', href: `${base}case-studies/ecommerce-data-bi.html` },
        { label: 'View all case studies', href: `${base}case-studies/index.html`, divider: true },
      ]},
      { id: 'careers', label: 'Careers', href: `${base}careers.html` },
    ],
    services: [
      { label: 'Digital Transformation', href: `${base}services.html#digital-transformation` },
      { label: 'Application Development', href: `${base}services.html#application-development` },
      { label: 'Data & Business Intelligence', href: `${base}services.html#data-business-intelligence` },
      { label: 'Intelligent Automation', href: `${base}services.html#intelligent-automation` },
    ],
  };

  const isActive = (id) => (page === id ? ' nav__link--active' : '');

  const caretSvg = `<svg class="nav__caret" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m6 9 6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  const renderDropdownLink = (child) =>
    `<a href="${child.href}" class="nav__dropdown-link${child.divider ? ' nav__dropdown-link--all' : ''}">${child.label}</a>`;

  const mainNavLinks = nav.items
    .map((item) => {
      if (!item.children) {
        return `<a href="${item.href}" class="nav__link${isActive(item.id)}">${item.label}</a>`;
      }
      const childLinks = item.children.map(renderDropdownLink).join('');
      return `
        <div class="nav__item nav__item--dropdown">
          <a href="${item.href}" class="nav__link nav__link--parent${isActive(item.id)}" aria-haspopup="true">
            <span>${item.label}</span>
            ${caretSvg}
          </a>
          <div class="nav__dropdown" role="menu">
            ${childLinks}
          </div>
        </div>`;
    })
    .join('');

  const headerHtml = `
    <header class="site-header" id="header">
      <div class="site-header__bar">
        <div class="container site-header__inner">
          <a href="${base}index.html" class="logo" aria-label="Deep Hill — Home">
            <img src="${base}assets/images/deep-hill-logo.png" alt="Deep Hill — Built on Depth. Elevated by Vision." class="logo__img" width="160" height="72">
          </a>
          <button class="menu-toggle" id="menuToggle" aria-label="Toggle menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <div class="site-header__ribbon">
        <div class="container site-header__ribbon-inner">
          <nav class="nav" id="nav" aria-label="Primary">
            ${mainNavLinks}
            <a href="${base}contact.html" class="btn btn--primary btn--sm nav__contact${page === 'contact' ? ' nav__contact--active' : ''}">Contact Us</a>
          </nav>
        </div>
      </div>
    </header>
  `;

  const footerHtml = `
    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__brand">
            <img src="${base}assets/images/deep-hill-logo.png" alt="Deep Hill" class="footer__logo-img" width="200" height="140">
            <p class="footer__desc">Empowering enterprises through digital transformation, innovation, and intelligent technology solutions.</p>
          </div>
          <div class="footer__links">
            <div class="footer__col">
              <h4>Services</h4>
              ${nav.services.map((s) => `<a href="${s.href}">${s.label}</a>`).join('')}
            </div>
            <div class="footer__col">
              <h4>Company</h4>
              <a href="${base}about.html">About Us</a>
              <a href="${base}careers.html">Careers</a>
              <a href="${base}industries.html">Industries</a>
              <a href="${base}contact.html">Contact</a>
            </div>
            <div class="footer__col">
              <h4>Case Studies</h4>
              <a href="${base}case-studies/audit-management-platform.html">Audit Management Platform</a>
              <a href="${base}case-studies/hedge-accounting-platform.html">Hedge Accounting Platform</a>
              <a href="${base}case-studies/sports-booking-system.html">Sports Booking System</a>
              <a href="${base}case-studies/regulatory-reporting-platform.html">Regulatory Reporting</a>
              <a href="${base}case-studies/ecommerce-data-bi.html">E-Commerce Data &amp; BI</a>
            </div>
          </div>
        </div>
        <div class="footer__divider"></div>
        <div class="footer__bottom">
          <p>© 2026 Deep Hill. All rights reserved.</p>
          <div class="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  const headerMount = document.getElementById('site-header');
  const footerMount = document.getElementById('site-footer');
  if (headerMount) headerMount.outerHTML = headerHtml;
  if (footerMount) footerMount.outerHTML = footerHtml;
})();
