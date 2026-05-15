'use client';

import { useEffect } from 'react';

export default function CalEmbed({ calLink }: { calLink: string }) {
  const eventType = calLink.split('/').pop() ?? '30min';

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.cal.com/embed/embed.js';
    script.async = true;
    script.onload = () => {
      const Cal = (window as any).Cal;
      if (!Cal) return;
      Cal('init', eventType, { origin: 'https://cal.com' });
      Cal.ns[eventType]('inline', {
        elementOrSelector: '#cal-embed',
        calLink,
        layout: 'month_view',
      });
      Cal.ns[eventType]('ui', {
        styles: { branding: { brandColor: '#A8553A' } },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [calLink, eventType]);

  return (
    <div
      id="cal-embed"
      style={{ width: '100%', minHeight: '700px', overflow: 'auto' }}
    />
  );
}
