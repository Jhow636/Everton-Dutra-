import type { Metadata } from 'next';
import Link from 'next/link';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'Perguntas Frequentes — Psicanálise',
  description:
    'Tire suas dúvidas sobre psicanálise, sessões online, diferenças entre psicanálise e psicologia e muito mais com Everton Dutra.',
  alternates: { canonical: 'https://evertondutra.com.br/faq' },
  openGraph: {
    title: 'Perguntas Frequentes — Everton Dutra Psicanalista',
    description: 'Tire suas dúvidas sobre psicanálise e sessões online.',
    url: 'https://evertondutra.com.br/faq',
  },
};

const faqItems = [
  {
    id: 'faq1',
    question: 'O que é a Psicanálise?',
    answer:
      'A psicanálise é um processo de escuta e autoconhecimento que ajuda você a compreender emoções, conflitos internos e padrões que se repetem na vida. Criada por Sigmund Freud, ela parte da ideia de que nem tudo o que nos afeta está consciente — e que dar sentido a isso pode aliviar o sofrimento e ampliar escolhas.',
  },
  {
    id: 'faq2',
    question: 'Como funciona uma sessão de Psicanálise?',
    answer:
      'A sessão acontece por meio da fala, no seu tempo. Você pode falar sobre o que quiser — situações do dia a dia, sentimentos, dúvidas ou até silêncios. O analista escuta e intervém de forma pontual, ajudando a ampliar a compreensão do que está sendo vivido. Como dizia Lacan, é pela palavra que o sujeito se revela.',
  },
  {
    id: 'faq3',
    question: 'Posso fazer Psicanálise online?',
    answer:
      'Sim. A psicanálise online é uma modalidade consolidada e eficaz. O vínculo, a escuta e o trabalho clínico se mantêm, oferecendo mais praticidade, conforto e privacidade, sem perder a profundidade do processo analítico.',
  },
  {
    id: 'faq4',
    question: 'A Psicanálise serve apenas para quem está em sofrimento?',
    answer:
      'Não. Muitas pessoas procuram a psicanálise para se conhecer melhor, compreender relações, escolhas e momentos de transição. Às vezes, não é o sofrimento intenso que leva à análise, mas a sensação de que algo precisa ser cuidado.',
  },
  {
    id: 'faq5',
    question: 'O que acontece se eu não souber o que dizer na sessão?',
    answer:
      'Isso é absolutamente comum. Não saber o que dizer, ficar em silêncio ou sentir confusão também fazem parte do processo. Para a psicanálise, isso já é material de trabalho e será acolhido sem julgamentos.',
  },
  {
    id: 'faq6',
    question: 'A Psicanálise me ajudará a tomar decisões?',
    answer:
      'A psicanálise não oferece respostas prontas nem conselhos. Ela ajuda você a compreender os motivos inconscientes por trás das suas dúvidas e escolhas. Com mais clareza sobre si, as decisões tendem a se tornar mais conscientes e responsáveis.',
  },
  {
    id: 'faq7',
    question: 'Como saber se a Psicanálise é para mim?',
    answer:
      'Se você se percebe repetindo situações, questionando suas relações ou sentindo um incômodo difícil de nomear, a psicanálise pode ser um caminho. O desejo de se entender melhor já é um sinal importante.',
  },
  {
    id: 'faq8',
    question: 'Qual é a diferença entre Psicanálise e Psicologia?',
    answer:
      'Ambas escutam, mas a Psicanálise se volta ao inconsciente — ao que escapa e se repete — buscando compreender em profundidade o que move o sujeito. A psicologia reúne diversas abordagens terapêuticas. A psicanálise é uma delas, com foco no inconsciente, na história subjetiva e na singularidade de cada pessoa. Autores como Freud, Lacan e Winnicott sustentam uma clínica que não busca corrigir o indivíduo, mas compreendê-lo em profundidade.',
  },
];

export default function FAQPage() {
  return (
    <main>
      <section className="section page-hero">
        <div className="container">
          <div className="eyebrow reveal reveal-up">Tire suas dúvidas</div>
          <h1 className="reveal reveal-left" data-anim-delay="80ms">
            Perguntas Frequentes
          </h1>
          <p style={{ marginTop: '8px', color: 'var(--muted)' }} className="reveal reveal-up" data-anim-delay="140ms">
            Esclareça suas principais dúvidas sobre o processo analítico.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="reveal reveal-up">Ainda tem dúvidas?</h2>
          <p className="section-sub reveal reveal-up" data-anim-delay="100ms">
            Entre em contato diretamente. Estou aqui para ouvir.
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
