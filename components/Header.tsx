'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';

const navItems = [
  { label: 'Sobre',   href: '/sobre'   },
  { label: 'FAQ',     href: '/faq'     },
  { label: 'Contato', href: '/contato' },
];

export default function Header() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const close = useCallback(() => setMenuOpen(false), []);

  useEffect(() => { close(); }, [pathname, close]);

  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--topbar-h',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  return (
    <>
      <header className="topbar" ref={headerRef}>
        <div className="wrap topbar-inner">
          <Link href="/" className="brand" aria-label="Início">
            <span className="brand-badge" aria-hidden="true" />
            <span>Everton Dutra Psicanalista</span>
          </Link>

          <nav className="nav" aria-label="Principal">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={close}>
                {item.label}
              </Link>
            ))}
          </nav>

          <Link href="/agendar" className="cta-mini nav-cta" onClick={close}>
            Agendar
          </Link>

          <button
            className="menu-btn-mobile"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={`hamburger ${menuOpen ? 'open' : ''}`}>
              <span /><span /><span />
            </span>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? 'visible' : ''}`}
        aria-hidden="true"
        onClick={close}
      />

      {/* Drawer — sempre no DOM, mostra/esconde via CSS */}
      <nav
        className={`mobile-drawer ${menuOpen ? 'open' : ''}`}
        aria-label="Menu mobile"
      >
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={close} className="mobile-nav-link">
            {item.label}
          </Link>
        ))}
        <div style={{ paddingTop: '16px' }}>
          <Link
            href="/agendar"
            className="cta-mini"
            onClick={close}
            style={{ width: '100%', justifyContent: 'center' }}
          >
            Agendar
          </Link>
        </div>
      </nav>

      <style>{`
        .menu-btn-mobile {
          display: none;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 6px;
          color: var(--ink);
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 22px;
        }
        .hamburger span {
          display: block;
          height: 2px;
          background: currentColor;
          border-radius: 2px;
          transition: transform .25s ease, opacity .25s ease;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        .mobile-overlay {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.3);
          opacity: 0;
          transition: opacity .25s ease;
          z-index: 40;
          pointer-events: none;
        }
        .mobile-overlay.visible {
          opacity: 1;
          pointer-events: auto;
        }

        .mobile-drawer {
          display: none;
          position: fixed;
          top: var(--topbar-h, 60px);
          left: 0;
          right: 0;
          background: var(--bg);
          border-bottom: 1px solid var(--rule);
          padding: 16px var(--pad, 20px) 24px;
          flex-direction: column;
          gap: 4px;
          transform: translateY(-12px);
          opacity: 0;
          transition: transform .25s ease, opacity .25s ease;
          z-index: 50;
          pointer-events: none;
        }
        .mobile-drawer.open {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

        .mobile-nav-link {
          font-family: var(--sans);
          font-size: 15px;
          color: var(--ink-soft);
          padding: 11px 0;
          border-bottom: 1px solid var(--rule);
          text-decoration: none;
          display: block;
        }

        @media (max-width: 760px) {
          .nav { display: none !important; }
          .nav-cta { display: none !important; }
          .menu-btn-mobile { display: flex !important; }
          .mobile-overlay { display: block; }
          .mobile-drawer { display: flex; }
        }
      `}</style>
    </>
  );
}
