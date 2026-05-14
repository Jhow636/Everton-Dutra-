import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Everton Dutra Psicanalista — Psicanálise Online',
  description:
    'Atendimento em psicanálise com Everton Dutra. Um espaço de escuta e presença, onde o humano encontra o humano, no seu tempo e na sua verdade.',
  alternates: { canonical: 'https://evertondutra.com.br' },
};

const faqPreview = [
  {
    id: 'hp-faq1',
    question: 'O que é a Psicanálise?',
    answer:
      'A psicanálise é um processo de escuta e autoconhecimento que ajuda você a compreender emoções, conflitos internos e padrões que se repetem na vida. Criada por Sigmund Freud, ela parte da ideia de que nem tudo o que nos afeta está consciente — e que dar sentido a isso pode aliviar o sofrimento e ampliar escolhas.',
  },
  {
    id: 'hp-faq2',
    question: 'Como funciona uma sessão de Psicanálise?',
    answer:
      'A sessão acontece por meio da fala, no seu tempo. Você pode falar sobre o que quiser — situações do dia a dia, sentimentos, dúvidas ou até silêncios. O analista escuta e intervém de forma pontual, ajudando a ampliar a compreensão do que está sendo vivido.',
  },
  {
    id: 'hp-faq3',
    question: 'Posso fazer Psicanálise online?',
    answer:
      'Sim. A psicanálise online é uma modalidade consolidada e eficaz. O vínculo, a escuta e o trabalho clínico se mantêm, oferecendo mais praticidade, conforto e privacidade, sem perder a profundidade do processo analítico.',
  },
];

export default function HomePage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className="section" id="hero">
        <div className="container hero">
          <div>
            <div className="eyebrow reveal reveal-up" data-anim-delay="0ms">
              Cuidado, sigilo e acolhimento
            </div>
            <h1 className="reveal reveal-left" data-anim-delay="80ms">
              Everton Dutra Psicanalista
            </h1>
            <p className="reveal reveal-up" data-anim-delay="160ms">
              Um espaço de escuta e presença, onde o humano encontra o humano, no seu tempo e na sua verdade.
            </p>
            <div
              className="reveal reveal-right"
              data-anim-delay="240ms"
              style={{ display: 'flex', gap: '12px', marginTop: '14px', flexWrap: 'wrap' }}
            >
              <Link className="btn btn-primary" href="/agendar">
                Agendar sessão
              </Link>
              <Link className="btn btn-howitworks" href="#abordagem">
                Como funciona
              </Link>
            </div>
          </div>
          <div className="hero-media reveal reveal-zoom img-anim" aria-hidden="true" />
        </div>
      </section>

      {/* ── Abordagem ── */}
      <section className="section" id="abordagem">
        <div className="container">
          <div className="section-title">
            <h2 className="reveal reveal-up">Minha abordagem</h2>
          </div>
          <p className="section-sub reveal reveal-up" data-anim-delay="100ms">
            Atendo dentro da abordagem psicanalítica, com foco em escuta clínica aprofundada e manejo
            das formações do inconsciente. Meu trabalho tem sido majoritariamente com adultos, em
            atendimentos online, trabalhando demandas relacionadas a ansiedade, conflitos relacionais,
            questões identitárias e processos de sofrimento psíquico mais estruturais.
          </p>
          <div className="grid grid-3">
            <article className="card feature reveal reveal-up" data-anim-delay="0ms">
              <div className="feature-icon">
                <Image src="/fotos/orelha.png" alt="" loading="lazy" width={44} height={44} />
              </div>
              <h3>O lugar da escuta</h3>
              <p>Um espaço onde a fala ganha sentido e o silêncio é também uma forma de dizer.</p>
            </article>
            <article className="card feature reveal reveal-up" data-anim-delay="100ms">
              <div className="feature-icon">
                <Image
                  src="/fotos/gerenciamento-de-tempo.png"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
              </div>
              <h3>O tempo do sujeito</h3>
              <p>Cada processo tem seu ritmo: nem antes, nem depois. Apenas o tempo necessário para se escutar.</p>
            </article>
            <article className="card feature reveal reveal-up" data-anim-delay="200ms">
              <div className="feature-icon">
                <Image
                  src="/fotos/handshake-de-parceria.png"
                  alt=""
                  loading="lazy"
                  width={44}
                  height={44}
                />
              </div>
              <h3>A ética do encontro</h3>
              <p>A confidencialidade é o alicerce do vínculo. O cuidado, a linguagem que o sustenta.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ── Sobre (resumo) ── */}
      <section className="section" id="sobre">
        <div className="container grid grid-2">
          <div className="reveal reveal-left">
            <h2>Sobre o psicanalista</h2>
            <p>
              <strong>Meu interesse pela psicanálise</strong> nasceu da própria experiência com a
              terapia e com o autoconhecimento.
              <br />
              <br />
              Foram anos de <em>mergulho interior</em>, de autoanálise e de uma busca incessante por
              compreender a vida, os afetos e a complexidade da mente humana.
              <br />
              <br />
              Esse percurso me conduziu, de forma natural, a um lugar de escuta — não apenas do outro,
              mas também de mim mesmo.
            </p>
            <Link
              href="/sobre"
              className="btn btn-howitworks"
              style={{ marginTop: '16px', display: 'inline-flex' }}
            >
              Conhecer mais →
            </Link>
          </div>
          <div className="reveal reveal-zoom">
            <Image
              className="img-sobre img-anim"
              src="/fotos/img1-everton.jpg"
              alt="Psicanalista Everton Dutra"
              loading="lazy"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        </div>
      </section>

      {/* ── Quote / Análise ── */}
      <section className="section section-analise">
        <div className="container grid grid-2">
          <div className="analise-text reveal reveal-right">
            <h2>O que pode acontecer quando você se escuta de verdade</h2>
            <p>
              Escutar-se de verdade implica aceitar a complexidade da própria história, reconhecer
              limites, contradições e desejos. A análise não promete soluções, mas oferece algo mais
              duradouro: a possibilidade de uma relação mais honesta consigo mesmo.
            </p>
            <blockquote>
              &ldquo;Cada história tem sua voz, seu tempo e sua maneira de se revelar. Na análise, não há
              respostas prontas — há escuta, presença e acolhimento.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── Contato ── */}
      <section className="section" id="contato">
        <div className="container">
          <div className="section-title">
            <h2 className="reveal reveal-up">Entre em contato</h2>
          </div>
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
                Agendar pelo WhatsApp
              </Link>
              <Link href="/agendar" className="btn btn-howitworks">
                Agendar pelo Cal.com
              </Link>
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

      {/* ── FAQ (preview) ── */}
      <section className="section" id="faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-title">
            <h2 id="faq-title" className="reveal reveal-up">
              Perguntas Frequentes
            </h2>
          </div>
          <p className="section-sub reveal reveal-up" data-anim-delay="100ms">
            Esclareça suas principais dúvidas sobre o processo analítico.
          </p>
          <FAQAccordion items={faqPreview} />
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link href="/faq" className="btn btn-howitworks">
              Ver todas as perguntas →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
