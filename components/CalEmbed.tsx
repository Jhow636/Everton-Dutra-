'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Cal: ((...args: unknown[]) => void) & { loaded?: boolean };
  }
}

function mountEmbed(calLink: string) {
  if (!window.Cal) return;
  const el = document.getElementById('cal-embed');
  if (el) el.innerHTML = '';
  window.Cal('inline', {
    elementOrSelector: '#cal-embed',
    calLink,
    layout: 'month_view',
  });
  window.Cal('ui', {
    styles: { branding: { brandColor: '#A8553A' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    // Script já carregado em visita anterior — reinicializa direto
    if (window.Cal?.loaded) {
      mountEmbed(calLink);
    }
  }, [calLink]);

  const handleLoad = () => {
    window.Cal('init', { origin: 'https://cal.com' });
    mountEmbed(calLink);
  };

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="lazyOnload"
        onLoad={handleLoad}
      />
      <div className="cal-wrapper">
        <div
          id="cal-embed"
          style={{ width: '100%', minHeight: '700px', overflow: 'auto' }}
        />
      </div>
    </>
  );
}
