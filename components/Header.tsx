'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  const close = useCallback(() => setMenuOpen(false), []);

  // Auto-close on route change
  useEffect(() => {
    close();
  }, [pathname, close]);

  // Update CSS variable for header height
  useEffect(() => {
    const update = () => {
      if (headerRef.current) {
        document.documentElement.style.setProperty(
          '--header-h',
          `${headerRef.current.offsetHeight}px`
        );
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  // ESC closes menu
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [close]);

  // Lock body scroll when open — always clean up on unmount
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header ref={headerRef}>
      <div className="container">
        <nav className="nav" aria-label="Principal">
          <Link href="/" className="brand" aria-label="Início">
            <span className="brand-badge" />
            <span className="font-name">Everton Dutra Psicanalista</span>
          </Link>

          <div className="nav-links">
            <Link href="/#abordagem">Abordagem</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/contato">Contato</Link>
            <Link href="/faq">FAQ</Link>
          </div>

          <div className="nav-actions">
            <Link className="btn btn-whatsapp nav-cta" href="/agendar">
              Agendar sessão
            </Link>
            <button
              className={`btn menu-btn${menuOpen ? ' is-open' : ''}`}
              aria-expanded={menuOpen}
              aria-controls="menuMobile"
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? '✕' : '☰'}
            </button>
          </div>
        </nav>

        {/* Overlay — fecha o menu ao clicar fora */}
        {menuOpen && (
          <div
            className="mobile-overlay"
            onClick={close}
            aria-hidden="true"
          />
        )}

        {/* Menu mobile — controlado só por CSS, sem atributo hidden */}
        <nav
          id="menuMobile"
          className={`mobile-menu${menuOpen ? ' open' : ''}`}
          aria-label="Menu mobile"
          aria-hidden={!menuOpen}
        >
          <Link href="/#abordagem" onClick={close}>Abordagem</Link>
          <Link href="/sobre" onClick={close}>Sobre</Link>
          <Link href="/contato" onClick={close}>Contato</Link>
          <Link href="/faq" onClick={close}>FAQ</Link>
          <Link href="/agendar" onClick={close} className="btn btn-primary mobile-agendar">
            Agendar sessão
          </Link>
        </nav>
      </div>
    </header>
  );
}
