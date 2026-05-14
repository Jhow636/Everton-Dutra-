'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef, useCallback } from 'react';

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const offset = 50;
  const top = el.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === '/';
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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navItems = [
    { label: 'Sobre', href: '/sobre', anchor: 'sobre' },
    { label: 'Abordagem', href: '/#abordagem', anchor: 'abordagem' },
    { label: 'Para quem', href: '/#temas', anchor: 'temas' },
    { label: 'Como funciona', href: '/#faq', anchor: 'faq' },
  ];

  function handleNavClick(e: React.MouseEvent, anchor: string) {
    if (isHome) {
      e.preventDefault();
      scrollTo(anchor);
      close();
    } else {
      close();
    }
  }

  function handleCtaClick(e: React.MouseEvent) {
    if (isHome) {
      e.preventDefault();
      scrollTo('agendar');
    }
    close();
  }

  return (
    <header className="topbar" ref={headerRef}>
      <div className="wrap topbar-inner">
        {/* Brand */}
        <Link href="/" className="brand" aria-label="Início">
          <span>Everton <em>Dutra</em></span>
          <span className="brand-tag">Psicanálise</span>
        </Link>

        {/* Desktop nav */}
        <nav className="nav" aria-label="Principal">
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={isHome ? `#${item.anchor}` : item.href}
              onClick={(e) => handleNavClick(e, item.anchor)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA pill */}
        <Link
          href={isHome ? '#agendar' : '/#agendar'}
          className="cta-mini"
          onClick={handleCtaClick}
        >
          Agendar
        </Link>

        {/* Mobile hamburger */}
        <button
          className="menu-btn-mobile"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((o) => !o)}
          style={{
            display: 'none',
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '20px',
            color: 'var(--ink)',
            padding: '4px',
          }}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'var(--bg)',
            borderTop: '1px solid var(--rule)',
            padding: '16px var(--pad)',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.anchor}
              href={isHome ? `#${item.anchor}` : item.href}
              onClick={(e) => handleNavClick(e, item.anchor)}
              style={{
                fontFamily: 'var(--sans)',
                fontSize: '15px',
                color: 'var(--ink-soft)',
                padding: '10px 0',
                borderBottom: '1px solid var(--rule)',
                textDecoration: 'none',
              }}
            >
              {item.label}
            </Link>
          ))}
          <div style={{ paddingTop: '12px' }}>
            <Link
              href={isHome ? '#agendar' : '/#agendar'}
              className="cta-mini"
              onClick={handleCtaClick}
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Agendar
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 760px) {
          .nav { display: none !important; }
          .menu-btn-mobile { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
