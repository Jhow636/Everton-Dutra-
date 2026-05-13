'use client';

import Script from 'next/script';

declare global {
  interface Window {
    Cal: ((...args: unknown[]) => void) & { loaded?: boolean; ns?: Record<string, unknown>; q?: unknown[] };
  }
}

export default function CalEmbed({ calLink }: { calLink: string }) {
  const handleLoad = () => {
    window.Cal('init', { origin: 'https://cal.com' });
    window.Cal('inline', {
      elementOrSelector: '#cal-embed',
      calLink,
      layout: 'month_view',
    });
    window.Cal('ui', {
      styles: { branding: { brandColor: '#024959' } },
      hideEventTypeDetails: false,
      layout: 'month_view',
    });
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
