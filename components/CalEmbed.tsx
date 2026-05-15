'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Cal: ((...args: unknown[]) => void) & {
      loaded?: boolean;
      ns?: Record<string, ((...args: unknown[]) => void) & { q?: unknown[] }>;
      q?: unknown[];
    };
  }
}

export default function CalEmbed({ calLink }: { calLink: string }) {
  const eventType = calLink.split('/').pop() ?? '30min';

  const handleLoad = () => {
    const Cal = window.Cal;
    if (!Cal) return;

    Cal('init', eventType, { origin: 'https://cal.com' });

    const ns = Cal.ns?.[eventType];
    if (!ns) return;

    ns('inline', {
      elementOrSelector: '#cal-embed',
      calLink,
      layout: 'month_view',
    });

    ns('ui', {
      styles: { branding: { brandColor: '#A8553A' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
  };

  return (
    <>
      <Script
        src="https://app.cal.com/embed/embed.js"
        strategy="afterInteractive"
        onLoad={handleLoad}
      />
      <div
        id="cal-embed"
        style={{ width: '100%', minHeight: '700px', overflow: 'auto' }}
      />
    </>
  );
}
