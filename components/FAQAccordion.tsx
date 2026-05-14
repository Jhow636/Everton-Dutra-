'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
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
