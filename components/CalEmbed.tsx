'use client';

import { useEffect } from 'react';
import Script from 'next/script';

type CalFn = ((...args: unknown[]) => void) & { loaded?: boolean };

declare global {
  interface Window {
    Cal?: CalFn;
  }
}

function mountEmbed(calLink: string) {
  const Cal = window.Cal;
  if (!Cal) return;
  const el = document.getElementById('cal-embed');
  if (el) el.innerHTML = '';
  Cal('inline', { elementOrSelector: '#cal-embed', calLink, layout: 'month_view' });
  Cal('ui', {
    styles: { branding: { brandColor: '#A8553A' } },
    hideEventTypeDetails: false,
    layout: 'month_view',
  });
}

export default function CalEmbed({ calLink }: { calLink: string }) {
  useEffect(() => {
    if (window.Cal) mountEmbed(calLink);
  }, [calLink]);

  const handleLoad = () => {
    const Cal = window.Cal;
    if (!Cal) return;
    Cal('init', { origin: 'https://cal.com' });
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
        <div id="cal-embed" style={{ width: '100%', minHeight: '700px', overflow: 'auto' }} />
      </div>
    </>
  );
}
