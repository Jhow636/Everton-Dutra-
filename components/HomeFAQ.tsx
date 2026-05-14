'use client';

import { useState } from 'react';

const items = [
  {
    id: 'faq-1',
    question: 'O que é a psicanálise?',
    answer:
      'A psicanálise é uma prática clínica e um método de investigação do psiquismo, criada por Sigmund Freud no final do século XIX. Parte do princípio de que há processos inconscientes que determinam, em grande medida, aquilo que pensamos, sentimos e fazemos. Na clínica, o trabalho se dá pela palavra — o analisando fala livremente e, nessa fala, surgem os rastros do inconsciente.',
  },
  {
    id: 'faq-2',
    question: 'Como funciona uma sessão?',
    answer:
      'A sessão acontece por meio da fala livre: você fala o que vier à mente, sem censura prévia. O analista escuta e intervém de forma pontual — uma pergunta, uma pontuação, uma interrupção — que visa abrir sentidos ainda não percebidos. Não há roteiro fixo nem tema obrigatório. O que emerge na sessão é o que tem de ser trabalhado.',
  },
  {
    id: 'faq-3',
    question: 'A psicanálise online funciona?',
    answer:
      'Sim. A modalidade online é amplamente praticada e reconhecida. O dispositivo analítico — a associação livre, a escuta, a transferência — mantém-se intacto à distância. O setting é construído pela regularidade, pelo sigilo e pela qualidade da presença, não pelo espaço físico.',
  },
  {
    id: 'faq-4',
    question: 'Qual a diferença entre psicanálise e psicoterapia?',
    answer:
      'A psicoterapia tem foco em sintomas e objetivos delimitados, com prazo mais curto. A psicanálise visa uma transformação mais estrutural do sujeito — não apenas o alívio de um sintoma, mas uma mudança na relação do sujeito com seu desejo, seus laços e sua história. O tempo da análise é o tempo do sujeito, não um protocolo predefinido.',
  },
  {
    id: 'faq-5',
    question: 'Com que frequência devo ir?',
    answer:
      'O setting analítico recomenda ao menos uma sessão semanal. A frequência ideal é discutida no início do processo, levando em conta a demanda do analisando e as possibilidades práticas. A regularidade é fundamental: ela cria o ritmo que permite o trabalho inconsciente se desenvolver.',
  },
  {
    id: 'faq-6',
    question: 'Como agendar uma primeira sessão?',
    answer:
      'Você pode entrar em contato pelo formulário nesta página, por e-mail ou diretamente pelo WhatsApp. A primeira sessão é uma escuta inicial — um encontro para que possamos conversar sobre sua demanda e avaliar juntos se o trabalho analítico faz sentido para você neste momento.',
  },
];

export default function HomeFAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => setOpenIdx((prev) => (prev === idx ? null : idx));

  return (
    <div className="faq">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={item.id} className={`faq-item${isOpen ? ' open' : ''}`}>
            <button
              className="faq-trigger"
              aria-expanded={isOpen}
              onClick={() => toggle(idx)}
            >
              <span className="q-num">{String(idx + 1).padStart(2, '0')}</span>
              <span className="q-text">{item.question}</span>
              <span className="toggle">+</span>
            </button>
            <div className="faq-answer">
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
