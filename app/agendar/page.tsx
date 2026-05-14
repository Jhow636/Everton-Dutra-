import type { Metadata } from 'next';
import Link from 'next/link';
import CalEmbed from '@/components/CalEmbed';

export const metadata: Metadata = {
  title: 'Agendar Sessão — Everton Dutra Psicanalista',
  description:
    'Agende sua sessão de psicanálise online com Everton Dutra. Escolha o dia e horário que melhor se encaixam na sua rotina.',
  alternates: { canonical: 'https://evertondutra.com.br/agendar' },
  openGraph: {
    title: 'Agendar Sessão — Everton Dutra Psicanalista',
    description: 'Agende sua sessão de psicanálise online. Escolha o horário que melhor se encaixa.',
    url: 'https://evertondutra.com.br/agendar',
  },
};

const CAL_LINK = process.env.NEXT_PUBLIC_CAL_LINK ?? 'seu-usuario/consulta';

export default function AgendarPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container">
          <div className="eyebrow reveal reveal-up">Dê o primeiro passo</div>
          <h1 className="reveal reveal-left" data-anim-delay="80ms">
            Agendar sessão
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="agendar-intro">
            <p className="reveal reveal-up" data-anim-delay="100ms">
              Escolha o dia e horário que melhor se encaixam na sua rotina. As sessões são realizadas
              online, com sigilo e acolhimento.
            </p>
            <p className="muted reveal reveal-up" data-anim-delay="160ms" style={{ fontSize: '13px' }}>
              Após o agendamento, você receberá um e-mail de confirmação com o link da sessão.
            </p>
          </div>

          <div className="reveal reveal-up" data-anim-delay="220ms">
            <CalEmbed calLink={CAL_LINK} />
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <p className="muted">
              Prefere agendar diretamente pelo WhatsApp?{' '}
              <Link
                href="https://wa.me/5531995563539?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20sess%C3%A3o%20de%20psican%C3%A1lise."
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--accent)', fontWeight: 600 }}
              >
                Clique aqui →
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
