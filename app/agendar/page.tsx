import type { Metadata } from 'next';
import Link from 'next/link';
import CalEmbed from '@/components/CalEmbed';

export const metadata: Metadata = {
  title: 'Agendar Sessão — Everton Dutra Psicanalista',
  description:
    'Agende sua sessão de psicanálise online com Everton Dutra. Escolha o dia e horário que melhor se encaixam na sua rotina.',
  alternates: { canonical: 'https://entrevozesesilencio.com.br/agendar' },
  openGraph: {
    title: 'Agendar Sessão — Everton Dutra Psicanalista',
    description: 'Agende sua sessão de psicanálise online com Everton Dutra.',
    url: 'https://entrevozesesilencio.com.br/agendar',
  },
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? 'everton-dutra-mhlblf/30min';

export default function AgendarPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="wrap">
          <span className="eyebrow reveal">Dê o primeiro passo</span>
          <h1 className="h-1 reveal" style={{ marginTop: '12px' }}>
            Agende sua sessão
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <p className="lede reveal" style={{ maxWidth: '560px', marginBottom: '40px' }}>
            Escolha o dia e horário que melhor se encaixam na sua rotina. As sessões são realizadas
            online, com sigilo e acolhimento.
          </p>

          {CAL_LINK ? (
            <CalEmbed calLink={CAL_LINK} />
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link
                href="https://wa.me/5531995563539?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psican%C3%A1lise."
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
                style={{ alignSelf: 'flex-start' }}
              >
                Agendar pelo WhatsApp →
              </Link>
              <p className="muted" style={{ fontSize: '14px' }}>
                Ou envie um e-mail para{' '}
                <a href="mailto:E.dutra2101@gmail.com" style={{ color: 'var(--accent)' }}>
                  E.dutra2101@gmail.com
                </a>
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
