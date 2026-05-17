export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="foot" aria-label="Rodapé">
      <div className="wrap">
        <div className="foot-grid">
          {/* Col 1 — quote */}
          <div>
            <p className="foot-quote">
              &ldquo;A clínica psicanalítica é um espaço onde o sujeito encontra
              lugar para dizer e, ao dizer, se escutar.&rdquo;
            </p>
            <p>Everton Dutra, Psicanalista</p>
          </div>

          {/* Col 2 — contato */}
          <div>
            <h3>Contato</h3>
            <p>
              <a href="mailto:E.dutra2101@gmail.com">E.dutra2101@gmail.com</a>
            </p>
            <p>
              <a href="https://wa.me/5531995563539">+55 31 99556-3539</a>
            </p>
            <p>
              <a
                href="https://instagram.com/everton_dutra_psicanalista"
                target="_blank"
                rel="noopener noreferrer"
              >
                @everton_dutra_psicanalista
              </a>
            </p>
          </div>

          {/* Col 3 — atendimento */}
          <div>
            <h3>Atendimento</h3>
            <p>Atendimento online</p>
          </div>
        </div>

        <div className="foot-bottom">
          <p>© {year} Everton Dutra. Todos os direitos reservados.</p>
          <p style={{ fontSize: '12px', opacity: 0.5, marginTop: '4px' }}>CBPC 2022-3072</p>
        </div>
      </div>
    </footer>
  );
}
