'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="faq">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <article key={item.id} className="card faq-item">
            <h3>
              <button
                className="faq-q"
                aria-expanded={isOpen}
                aria-controls={item.id}
                id={`${item.id}-btn`}
                onClick={() => toggle(item.id)}
              >
                {item.question}
              </button>
            </h3>
            <div
              className="faq-a"
              id={item.id}
              role="region"
              aria-labelledby={`${item.id}-btn`}
              hidden={!isOpen}
              tabIndex={-1}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
