import type { Metadata } from 'next';
import Image from 'next/image';
import HomeFAQ from '@/components/HomeFAQ';
import BookingSection from '@/components/BookingSection';

export const metadata: Metadata = {
  title: 'Everton Dutra — Psicanalista | Psicanálise Online e Presencial',
  description:
    'Atendimento em psicanálise com Everton Dutra. Uma travessia ao silêncio e à palavra. Sessões online para o Brasil e exterior e presenciais em Belo Horizonte.',
  alternates: { canonical: 'https://evertondutra.com.br' },
};

const principles = [
  {
    num: '01',
    title: 'A escuta como presença',
    body: 'Antes de interpretar, é preciso escutar. A presença do analista cria o campo em que a palavra do sujeito pode emergir sem julgamento.',
  },
  {
    num: '02',
    title: 'O inconsciente como guia',
    body: 'Sonhos, lapsos, sintomas — o inconsciente se manifesta onde menos se espera. A análise aprende a ler essas formações.',
  },
  {
    num: '03',
    title: 'O tempo do sujeito',
    body: 'Cada processo tem seu próprio ritmo. A análise não segue protocolos: segue o sujeito, seu tempo e suas possibilidades.',
  },
  {
    num: '04',
    title: 'A transferência como motor',
    body: 'O vínculo analítico não é um obstáculo — é o principal instrumento do trabalho. É nela que o sujeito repete e, repetindo, pode mudar.',
  },
  {
    num: '05',
    title: 'A palavra que transforma',
    body: 'Dizer é diferente de pensar. Quando o sujeito fala e se escuta, algo se desloca. A palavra tem efeito sobre o corpo e sobre o laço social.',
  },
  {
    num: '06',
    title: 'A ética do desejo',
    body: 'A análise não prescreve como viver. Ela visa que o sujeito se torne capaz de sustentar seu próprio desejo — com mais liberdade.',
  },
];

const themes = [
  { name: 'Ansiedade e ataques de pânico', tag: 'Sofrimento psíquico' },
  { name: 'Depressão e vazio existencial', tag: 'Afeto' },
  { name: 'Conflitos relacionais e amorosos', tag: 'Laço social' },
  { name: 'Questões identitárias e de gênero', tag: 'Subjetividade' },
  { name: 'Luto e perdas', tag: 'Elaboração' },
  { name: 'Inibição, procrastinação, bloqueios', tag: 'Sintoma' },
  { name: 'Autoconhecimento e desenvolvimento', tag: 'Desejo' },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow reveal" style={{ marginBottom: '16px' }}>
            ● Atendimento online e presencial — Belo Horizonte
          </p>
          <div className="hero-grid split">
            {/* Left: copy */}
            <div>
              <h1 className="h-display hero-title reveal">
                Uma travessia<br />
                ao <em style={{ fontStyle: 'italic' }}>silêncio</em><br />
                e à palavra.
              </h1>
              <p className="lede reveal">
                Cada sessão é um encontro singular — um tempo dedicado à escuta
                profunda, sem julgamentos.
              </p>
              <div
                className="reveal"
                style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}
              >
                <a href="#agendar" className="btn">
                  Agendar primeira escuta →
                </a>
                <a href="#sobre" className="btn ghost">
                  Conhecer Everton
                </a>
              </div>

              <div className="hero-meta reveal">
                <div className="hero-meta-item">
                  <span className="label">Modalidade</span>
                  <span className="value">Online · Presencial</span>
                </div>
                <div className="hero-meta-item">
                  <span className="label">Sessões</span>
                  <span className="value">50 min</span>
                </div>
                <div className="hero-meta-item">
                  <span className="label">Frequência</span>
                  <span className="value">Semanal</span>
                </div>
              </div>
            </div>

            {/* Right: photo */}
            <div className="hero-figure reveal">
              <Image
                src="/fotos/img2-everton.jpg"
                alt="Everton Dutra — Psicanalista"
                width={600}
                height={750}
                priority
                className="hero-figure-img"
                style={{ width: '100%', height: 'auto', aspectRatio: '4/5', objectFit: 'cover', borderRadius: '2px' }}
              />
              <p className="hero-figure-caption">Everton Dutra — Psicanalista</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sobre ── */}
      <section className="section" id="sobre">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">01 / Sobre</span>
            <h2 className="h-1">Uma trajetória de escuta.</h2>
          </div>
          <div className="sobre-grid">
            {/* Portrait */}
            <div className="reveal">
              <Image
                src="/fotos/img1-everton.jpg"
                alt="Retrato de Everton Dutra"
                width={480}
                height={640}
                className="portrait"
                style={{ width: '100%', aspectRatio: '3/4', objectFit: 'cover', borderRadius: '2px' }}
              />
            </div>

            {/* Texto */}
            <div className="sobre-body reveal">
              <p>
                <strong>Meu interesse pela psicanálise</strong> nasceu de dentro — da própria experiência
                com a escuta e com o autoconhecimento. Foram anos de mergulho interior, de autoanálise e
                de uma busca incessante por compreender a vida, os afetos e a complexidade da mente humana.
              </p>
              <p>
                Esse percurso me conduziu, de forma natural, a um lugar de escuta — não apenas do outro,
                mas também de mim mesmo. Compreendi que a psicanálise não é apenas uma técnica: é uma
                ética, uma forma de estar com o outro em sua singularidade.
              </p>
              <p>
                Atendo adultos em sofrimento psíquico de diversas naturezas — ansiedade, depressão,
                conflitos relacionais, questões identitárias, luto e bloqueios existenciais — sempre a
                partir de uma escuta que respeita o tempo e a verdade de cada sujeito.
              </p>

              <blockquote className="pullquote">
                &ldquo;A análise não promete respostas. Oferece algo mais valioso: a possibilidade de se
                tornar autor da própria história.&rdquo;
              </blockquote>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <p style={{ margin: 0 }}>
                  <strong>Formação</strong> — Psicanálise, com aprofundamento na obra de Freud e Lacan.
                </p>
                <p style={{ margin: 0 }}>
                  <strong>Abordagem</strong> — Psicanalítica de orientação lacaniana.
                </p>
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

      {/* ── Abordagem ── */}
      <section className="section tinted" id="abordagem">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">02 / Abordagem</span>
            <h2 className="h-1">A escuta como método.</h2>
          </div>
          <div className="abordagem-grid">
            {principles.map((p) => (
              <article key={p.num} className="principle reveal">
                <span className="num">{p.num}</span>
                <h3 className="title">{p.title}</h3>
                <p className="body">{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Temas ── */}
      <section className="section" id="temas">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">03 / Para quem</span>
            <h2 className="h-1">A análise se oferece a quem deseja escutar-se.</h2>
          </div>
          <div className="themes">
            {themes.map((t) => (
              <div key={t.name} className="theme-row reveal">
                <span className="theme-name">{t.name}</span>
                <span className="theme-tag">{t.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section tinted" id="faq">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">04 / Como funciona</span>
            <h2 className="h-1">Perguntas frequentes.</h2>
          </div>
          <HomeFAQ />
        </div>
      </section>

      {/* ── Booking ── */}
      <section className="section" id="agendar">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">05 / Agendamento</span>
            <h2 className="h-1">Marcar uma primeira escuta.</h2>
          </div>
          <BookingSection />
        </div>
      </section>
    </main>
  );
}
