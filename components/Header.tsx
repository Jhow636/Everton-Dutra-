'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const setHeaderVar = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-h',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    setHeaderVar();
    window.addEventListener('resize', setHeaderVar);
    return () => window.removeEventListener('resize', setHeaderVar);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenuOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <header ref={headerRef}>
      <div className="container">
        <nav className="nav" aria-label="Principal">
          <Link href="/" className="brand" aria-label="Início" onClick={close}>
            <span className="brand-badge" />
            <span className="font-name">Everton Dutra Psicanalista</span>
          </Link>

          <div className="nav-links">
            <Link href="/#abordagem">Abordagem</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="actions">
            <Link className="btn btn-outline nav-cta" href="/agendar">
              Agendar sessão
            </Link>
            <button
              className="btn menu-btn"
              aria-expanded={menuOpen}
              aria-controls="menuMobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        <nav
          id="menuMobile"
          className={`mobile-menu${menuOpen ? ' open' : ''}`}
          aria-label="Menu mobile"
          hidden={!menuOpen}
        >
          <Link href="/#abordagem" onClick={close}>Abordagem</Link>
          <Link href="/sobre" onClick={close}>Sobre</Link>
          <Link href="/contato" onClick={close}>Contato</Link>
          <Link href="/faq" onClick={close}>FAQ</Link>
          <Link
            href="/agendar"
            onClick={close}
            className="btn btn-primary"
            style={{ marginTop: '8px', textAlign: 'center' }}
          >
            Agendar sessão
          </Link>
        </nav>
      </div>
    </header>
  );
}
