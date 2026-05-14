import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section" aria-label="Rodapé">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ marginBottom: '10px' }}>
            <span className="brand-badge" />
            <span className="font-name">Everton Dutra Psicanalista</span>
          </div>
          <p className="muted">© {year} Todos os direitos reservados Everton Dutra.</p>
        </div>
        <div>
          <h3>Atendimento</h3>
          <p className="muted">Online • <Link href="/agendar" style={{ color: 'var(--c-teal)' }}>Agende seu horário</Link></p>
        </div>
        <div>
          <h3>Navegação</h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <Link href="/sobre" className="muted" style={{ fontSize: '14px' }}>Sobre</Link>
            <Link href="/faq" className="muted" style={{ fontSize: '14px' }}>FAQ</Link>
            <Link href="/contato" className="muted" style={{ fontSize: '14px' }}>Contato</Link>
            <Link href="/agendar" className="muted" style={{ fontSize: '14px' }}>Agendar</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
