import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Everton Dutra — Psicanalista | Psicanálise Online',
  description:
    'Atendimento em psicanálise com Everton Dutra. Um espaço de escuta e presença, onde o humano encontra o humano, no seu tempo e na sua verdade. Sessões online para o Brasil e exterior.',
  alternates: { canonical: 'https://evertondutra.com.br' },
};

const principles = [
  {
    num: '01',
    title: 'Escuta sem julgamento',
    body: 'Um espaço onde o que é dito não é medido nem julgado — apenas escutado, em sua profundidade e singularidade.',
  },
  {
    num: '02',
    title: 'O tempo do sujeito',
    body: 'Cada análise tem seu próprio ritmo. Não há protocolo, há um percurso construído a cada sessão.',
  },
  {
    num: '03',
    title: 'Sigilo absoluto',
    body: 'O que é dito permanece no espaço do consultório. A confidencialidade é fundamento ético da prática.',
  },
];

const faqPreview = [
  {
    id: 'hp-faq1',
    question: 'Como funciona a primeira escuta?',
    answer:
      'A primeira escuta é um encontro inicial, sem compromisso de continuidade. É um espaço para você apresentar o que o traz à análise e, juntos, conversarmos sobre como a clínica pode acolher essa demanda. Não há diagnóstico nem prescrição — apenas escuta.',
  },
  {
    id: 'hp-faq2',
    question: 'Qual a frequência das sessões?',
    answer:
      'Recomenda-se ao menos uma sessão semanal. A psicanálise sustenta-se na constância — é nessa regularidade que o trabalho do inconsciente encontra continuidade.',
  },
  {
    id: 'hp-faq3',
    question: 'O atendimento online tem a mesma profundidade?',
    answer:
      'Sim. O dispositivo analítico funciona em sua dimensão simbólica: a palavra, a escuta, a transferência. O atendimento online, conduzido com seriedade, sustenta integralmente a clínica e amplia o acesso a quem está fora de Belo Horizonte ou prefere o conforto de casa.',
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
                Uma travessia<br />
                ao <em style={{ fontStyle: 'italic', color: 'var(--accent)' }}>silêncio</em><br />
                e à palavra.
              </h1>
              <p className="lede reveal">
                Cada sessão é um encontro singular — um tempo dedicado à escuta
                profunda, sem julgamentos.
              </p>
              <div className="reveal" style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
                <Link href="/agendar" className="btn">
                  Agendar primeira escuta&nbsp;→
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

      {/* ── Abordagem ── */}
      <section className="section tinted" id="abordagem">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Abordagem</span>
            <h2 className="h-2">A escuta como método.</h2>
          </div>
          <div className="abordagem-grid">
            {principles.map((p) => (
              <article key={p.num} className="principle reveal">
                <span className="num">{p.num}</span>
                <p className="title">{p.title}</p>
                <p className="body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sobre (prévia) ── */}
      <section className="section" id="sobre">
        <div className="wrap">
          <div className="sobre-grid">
            <div className="reveal">
              <Image
                src="/fotos/img1-everton.jpg"
                alt="Retrato de Everton Dutra"
                width={480}
                height={640}
                className="portrait"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '2px', display: 'block' }}
              />
            </div>
            <div className="sobre-body reveal">
              <div className="section-head" style={{ marginBottom: '24px' }}>
                <span className="eyebrow">Sobre</span>
                <h2 className="h-2">Uma trajetória de escuta.</h2>
              </div>
              <p>
                Meu interesse pela psicanálise nasceu da própria experiência com a terapia e com o
                autoconhecimento. Foram anos de mergulho interior, de autoanálise e de uma busca
                incessante por compreender a vida, os afetos e a complexidade da mente humana.
              </p>
              <p>
                Esse percurso me conduziu, de forma natural, a um lugar de escuta — não apenas do
                outro, mas também de mim mesmo.
              </p>
              <blockquote className="pullquote">
                &ldquo;Hoje, encontro na psicanálise um espaço onde posso unir reflexão, presença e humanidade.&rdquo;
              </blockquote>
              <div style={{ marginTop: '8px' }}>
                <Link href="/sobre" className="btn ghost">
                  Conhecer mais&nbsp;→
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Interstitial ── */}
      <section className="interstitial">
        <div className="wrap">
          <blockquote className="reveal">
            &ldquo;O sujeito encontra espaço para dizer e, ao dizer, se escutar.&rdquo;
          </blockquote>
        </div>
      </section>

      {/* ── FAQ (prévia) ── */}
      <section className="section tinted" id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Como funciona</span>
            <h2 className="h-2">Perguntas frequentes.</h2>
          </div>
          <FAQAccordion items={faqPreview} />
          <div style={{ marginTop: '40px' }}>
            <Link href="/faq" className="btn ghost">
              Ver todas as perguntas&nbsp;→
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Agendamento ── */}
      <section className="section" id="contato">
        <div className="wrap" style={{ textAlign: 'center', maxWidth: '640px', margin: '0 auto' }}>
          <span className="eyebrow reveal">Primeiro passo</span>
          <h2 className="h-2 reveal" style={{ marginTop: '12px' }}>Marcar uma primeira escuta.</h2>
          <p className="lede reveal" style={{ margin: '16px auto 32px', textAlign: 'center' }}>
            Escreva-me. Em até 48 horas retorno com horários disponíveis para o nosso primeiro encontro.
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
