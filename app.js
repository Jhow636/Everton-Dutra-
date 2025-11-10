const $ = (s, r = document) => r.querySelector(s);

document.addEventListener('DOMContentLoaded', () => {
  document.documentElement.classList.add('js');

  $('#y').textContent = new Date().getFullYear();

  const toggle = $('#menuToggle');
  const menu = $('#menuMobile');
  const header = document.querySelector('header');

  const openMenu = () => {
    menu.classList.add('open');
    toggle?.setAttribute('aria-expanded', 'true');
    menu.hidden = false;
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    toggle?.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    document.body.style.overflow = '';
  };

  toggle?.addEventListener('click', () => {
    const open = !menu.classList.contains('open');
    open ? openMenu() : closeMenu();
  });

  menu?.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    e.preventDefault();
    const id = a.getAttribute('href');
    const target = id ? document.querySelector(id) : null;

    closeMenu();

    if (target) {
      history.pushState(null, '', id);
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu?.classList.contains('open')) {
      closeMenu();
      toggle?.focus?.();
    }
  });

  if (header) {
    const setHeaderVar = () =>
      document.documentElement.style.setProperty('--header-h', `${header.offsetHeight}px`);
    setHeaderVar();
    window.addEventListener('resize', setHeaderVar);
  }

  const hash = location.hash?.replace('#', '');
  if (hash?.startsWith('faq')) {
    const btn = document.querySelector(`[aria-controls="${hash}"]`);
    const panel = document.getElementById(hash);
    if (btn && panel) {
      btn.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
      panel.focus?.();
    }
  }

  initFAQ();

  (function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;


    if (!('IntersectionObserver' in window)) {
      els.forEach(el => el.classList.add('in'));
      return;
    }

    // Stagger automático em grids e listas
    const STAGGER = 100;
    const setDelayByIndex = (container) => {
      const kids = [...container.children].filter(el => el.classList.contains('reveal'));
      kids.forEach((el, i) => {
        const custom = el.getAttribute('data-anim-delay');
        el.style.setProperty('--delay', custom ?? `${i * STAGGER}ms`);
      });
    };

    document.querySelectorAll('.grid, .faq, .contact-list').forEach(setDelayByIndex);

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const d = el.getAttribute('data-anim-delay');
          if (d) el.style.setProperty('--delay', d);
          el.classList.add('in');
          obs.unobserve(el);
        }
      });
    }, {
      threshold: 0.01,
      rootMargin: '0px 0px -15% 0px'
    });

    els.forEach(el => io.observe(el));
  })();
});

const initFAQ = () => {
  const qs = document.querySelectorAll('.faq-q');

  function closeAll(except) {
    qs.forEach(btn => {
      if (btn !== except) {
        btn.setAttribute('aria-expanded', 'false');
        const panel = document.getElementById(btn.getAttribute('aria-controls'));
        if (panel) panel.hidden = true;
      }
    });
  }

  qs.forEach(btn => {
    const panel = document.getElementById(btn.getAttribute('aria-controls'));
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      if (!expanded) closeAll(btn);
      btn.setAttribute('aria-expanded', String(!expanded));
      if (panel) {
        panel.hidden = expanded;
        if (!expanded) panel.focus?.();
      }
    });
    btn.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && panel?.hidden) {
        setTimeout(() => panel.focus?.(), 0);
      }
    });
  });
};
