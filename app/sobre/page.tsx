import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sobre — Everton Dutra Psicanalista',
  description:
    'Conheça Everton Dutra, psicanalista com formação em psicanálise. Uma trajetória de escuta, presença e acolhimento em sessões online.',
  alternates: { canonical: 'https://entrevozesesilencio.com.br/sobre' },
  openGraph: {
    title: 'Sobre — Everton Dutra Psicanalista',
    description: 'Conheça a trajetória e a abordagem de Everton Dutra, psicanalista.',
    url: 'https://entrevozesesilencio.com.br/sobre',
  },
};

export default function SobrePage() {
  return (
    <main>
      {/* ── Page hero ── */}
      <section className="section page-hero">
        <div className="container">
          <div className="eyebrow reveal reveal-up">Psicanalista</div>
          <h1 className="reveal reveal-left" data-anim-delay="80ms">
            Everton Dutra
          </h1>
        </div>
      </section>

      {/* ── Primeira parte ── */}
      <section className="section">
        <div className="container grid grid-2">
          <div className="reveal reveal-left">
            <h2>Uma trajetória de escuta</h2>
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
              <br />
              <br />
              Sempre me fascinaram as <strong>nuances do comportamento humano</strong>: o que nos move,
              o que nos limita, o que se repete e o que, silenciosamente, pede transformação.
            </p>
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

      {/* ── Segunda parte ── */}
      <section className="section">
        <div className="container grid grid-2 sobre-invertido">
          <div className="reveal reveal-zoom">
            <Image
              className="img-sobre img-anim"
              src="/fotos/img3-everton.jpg"
              alt="Atendimento de psicanálise"
              loading="lazy"
              width={800}
              height={600}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
          <div className="reveal reveal-right">
            <p>
              Essa curiosidade se transformou em um chamado. Hoje, encontro na psicanálise um espaço
              onde posso unir <strong>reflexão, presença e humanidade.</strong>
              <br />
              <br />
              <strong>A psicanálise, para mim, é uma travessia.</strong> Um convite ao silêncio e à
              palavra — onde o sujeito encontra espaço para dizer e, ao dizer, se escutar.
              <br />
              <br />
              Cada sessão é <em>um encontro singular</em>, um tempo dedicado à escuta profunda e sem
              julgamentos.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="section section-analise">
        <div className="container grid grid-2">
          <div className="analise-text reveal reveal-right">
            <h2>O que pode acontecer quando você se escuta de verdade</h2>
            <p>
              Escutar-se de verdade implica aceitar a complexidade da própria história, reconhecer
              limites, contradições e desejos. A análise não promete soluções, mas oferece algo mais
              duradouro: a possibilidade de uma relação mais honesta consigo mesmo. Nesse processo, o
              novo não é imposto — ele surge, lentamente, quando encontra condições para existir.
            </p>
            <blockquote>
              &ldquo;Cada história tem sua voz, seu tempo e sua maneira de se revelar. Na análise, não há
              respostas prontas — há escuta, presença e acolhimento. Aqui, o essencial é poder ser
              ouvido e se ouvir com autenticidade.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal reveal-up">Pronto para começar?</h2>
          <p className="section-sub reveal reveal-up" data-anim-delay="100ms">
            O primeiro passo pode ser o mais difícil — mas você não precisa dá-lo sozinho.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '16px',
              flexWrap: 'wrap',
            }}
          >
            <Link href="/agendar" className="btn btn-primary">
              Agendar sessão
            </Link>
            <Link href="/contato" className="btn btn-howitworks">
              Falar comigo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
