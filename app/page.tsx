import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Everton Dutra — Psicanalista | Psicanálise Online',
  description:
    'Atendimento em psicanálise com Everton Dutra. Um espaço de escuta e presença, onde o humano encontra o humano, no seu tempo e na sua verdade. Sessões online para o Brasil e exterior.',
  alternates: { canonical: 'https://evertondutra.com.br' },
};

const features = [
  {
    title: 'O lugar da escuta',
    body: 'Um espaço onde a fala ganha sentido e o silêncio é também uma forma de dizer.',
  },
  {
    title: 'O tempo do sujeito',
    body: 'Cada processo tem seu ritmo: nem antes, nem depois. Apenas o tempo necessário para se escutar.',
  },
  {
    title: 'A ética do encontro',
    body: 'A confidencialidade é o alicerce do vínculo. O cuidado, a linguagem que o sustenta.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ marginBottom: '16px' }}>
            <span style={{ color: 'var(--accent)' }}>●</span>&nbsp;&nbsp;Atendimento online — Brasil e exterior
          </p>
          <div className="hero-grid split">
            <div>
              <h1 className="h-1 hero-title reveal">
                Um espaço de escuta<br />
                e <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>presença</em>.
              </h1>
              <p className="lede reveal">
                Atendimento em psicanálise com Everton Dutra. Sessões online, com sigilo,
                acolhimento e respeito ao seu tempo.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                <Link href="/agendar" className="btn">
                  Agendar sessão&nbsp;→
                </Link>
                <Link href="/sobre" className="btn ghost">
                  Conhecer Everton
                </Link>
              </div>
              <div className="hero-meta reveal">
                <div className="hero-meta-item">
                  <span className="label">Modalidade</span>
                  <span className="value">Online</span>
                </div>
                <div className="hero-meta-item">
                  <span className="label">Sessões</span>
                  <span className="value">50 minutos</span>
                </div>
                <div className="hero-meta-item">
                  <span className="label">Frequência</span>
                  <span className="value">Semanal</span>
                </div>
              </div>
            </div>

            <div className="hero-figure reveal">
              <Image
                src="/fotos/img2-everton.jpg"
                alt="Everton Dutra — Psicanalista"
                width={600}
                height={750}
                priority
                style={{ width: '100%', height: '100%', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Minha abordagem ── */}
      <section className="section tinted" id="abordagem">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Minha abordagem</span>
            <h2 className="h-2">Psicanálise de orientação lacaniana.</h2>
          </div>
          <div className="abordagem-grid">
            {features.map((f) => (
              <article key={f.title} className="principle reveal">
                <p className="title">{f.title}</p>
                <p className="body">{f.body}</p>
              </article>
            ))}
          </div>
          <div style={{ marginTop: '40px' }}>
            <Link href="/sobre" className="btn ghost reveal">
              Saiba mais sobre minha abordagem&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <span className="eyebrow reveal">Primeiro passo</span>
          <h2 className="h-2 reveal" style={{ marginTop: '12px' }}>
            Pronto para começar?
          </h2>
          <p className="lede reveal" style={{ margin: '16px auto 32px' }}>
            Dê o primeiro passo. Em até 48 horas retorno com horários disponíveis.
          </p>
          <div className="reveal" style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/agendar" className="btn">
              Agendar sessão&nbsp;→
            </Link>
            <Link href="/contato" className="btn ghost">
              Falar comigo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
