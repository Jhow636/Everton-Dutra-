'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RevealScript() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.classList.add('js');

    const els = document.querySelectorAll<HTMLElement>('.reveal');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'));
      return;
    }

    const STAGGER = 100;
    document.querySelectorAll<HTMLElement>('.grid, .faq, .contact-list').forEach((container) => {
      const kids = Array.from(container.children).filter((el) =>
        el.classList.contains('reveal')
      ) as HTMLElement[];
      kids.forEach((el, i) => {
        const custom = el.getAttribute('data-anim-delay');
        el.style.setProperty('--delay', custom ?? `${i * STAGGER}ms`);
      });
    });

    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const d = el.getAttribute('data-anim-delay');
            if (d) el.style.setProperty('--delay', d);
            el.classList.add('in');
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.01, rootMargin: '0px 0px -15% 0px' }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
