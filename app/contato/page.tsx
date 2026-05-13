import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contato — Everton Dutra Psicanalista',
  description:
    'Entre em contato com Everton Dutra pelo WhatsApp, e-mail ou Instagram. Dê o primeiro passo para uma escuta sensível e transformadora.',
  alternates: { canonical: 'https://evertondutra.com.br/contato' },
  openGraph: {
    title: 'Contato — Everton Dutra Psicanalista',
    description: 'Entre em contato pelo WhatsApp, e-mail ou Instagram.',
    url: 'https://evertondutra.com.br/contato',
  },
};

export default function ContatoPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container">
          <div className="eyebrow reveal reveal-up">Vamos conversar</div>
          <h1 className="reveal reveal-left" data-anim-delay="80ms">
            Entre em contato
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-sub reveal reveal-up" data-anim-delay="100ms">
            Dê o primeiro passo para uma escuta sensível e transformadora. Respondo o quanto antes.
          </p>
          <div className="contact-grid">
            <article className="card contact-card reveal reveal-left" data-anim-delay="0ms">
              <div>
                <h3>Um espaço para você</h3>
                <p className="muted">Converse comigo pelo WhatsApp. É simples, direto e sigiloso.</p>
              </div>
              <Link
                className="btn btn-primary"
                href="https://wa.me/5531995563539?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psican%C3%A1lise."
                target="_blank"
                rel="noopener noreferrer"
              >
                Conversar no WhatsApp
              </Link>
              <div
                style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '16px',
                  marginTop: '4px',
                }}
              >
                <p className="muted" style={{ fontSize: '13px', marginBottom: '10px' }}>
                  Prefere escolher um horário agora?
                </p>
                <Link href="/agendar" className="btn btn-howitworks">
                  Agendar pelo Cal.com
                </Link>
              </div>
            </article>

            <div className="contact-info reveal reveal-right" data-anim-delay="120ms">
              <ul className="contact-list">
                <li>
                  <span className="contact-badge">
                    <Image
                      className="image-contact"
                      src="/fotos/whatsapp.png"
                      alt=""
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                  </span>
                  <div>
                    <strong>WhatsApp</strong>
                    <p className="muted">
                      <a href="https://wa.me/5531995563539">(+55) 31 99556-3539</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="contact-badge">
                    <Image
                      className="image-contact"
                      src="/fotos/o-email.png"
                      alt=""
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                  </span>
                  <div>
                    <strong>E-mail</strong>
                    <p className="muted">
                      <a href="mailto:E.dutra2101@gmail.com">E.dutra2101@gmail.com</a>
                    </p>
                  </div>
                </li>
                <li>
                  <span className="contact-badge">
                    <Image
                      className="image-contact"
                      src="/fotos/instagram.png"
                      alt=""
                      loading="lazy"
                      width={24}
                      height={24}
                    />
                  </span>
                  <div>
                    <strong>Instagram</strong>
                    <p className="muted">
                      <a
                        href="https://instagram.com/everton_dutra_psicanalista"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        @everton_dutra_psicanalista
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
              <p className="muted privacy-note">Sigilo e ética profissional garantidos.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
