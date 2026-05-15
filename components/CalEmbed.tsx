'use client';

import { useEffect, useState } from 'react';
import Script from 'next/script';

type CalFn = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, unknown>;
  q?: unknown[];
};

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
  const [ready, setReady] = useState(false);

  // Detecta quando o Cal.com injetou conteúdo no div
  useEffect(() => {
    const el = document.getElementById('cal-embed');
    if (!el) return;
    const observer = new MutationObserver(() => {
      if (el.children.length > 0) {
        setReady(true);
        observer.disconnect();
      }
    });
    observer.observe(el, { childList: true });
    return () => observer.disconnect();
  }, []);

  // Visitas seguintes: Cal já está carregado, reinicializa direto
  useEffect(() => {
    if (window.Cal) mountEmbed(calLink);
  }, [calLink]);

  const bootstrap = `
(function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;
C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;
if(!cal.loaded){cal.ns={};cal.q=cal.q||[];
d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}
if(ar[0]===L){const api=function(){p(api,arguments)};const ns=ar[1];
api.q=[];if(typeof ns==="string"){cal.ns[ns]=cal.ns[ns]||api;
p(cal.ns[ns],ar);p(cal,[L,api]);}else{p(cal,ar);}return;}
p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");
Cal("init",{origin:"https://cal.com"});
Cal("inline",{elementOrSelector:"#cal-embed",calLink:${JSON.stringify(calLink)},layout:"month_view"});
Cal("ui",{styles:{branding:{brandColor:"#A8553A"}},hideEventTypeDetails:false,layout:"month_view"});
`;

  return (
    <>
      <Script id="cal-bootstrap" strategy="afterInteractive">
        {bootstrap}
      </Script>
      <div className="cal-wrapper" style={{ position: 'relative' }}>
        {!ready && (
          <div style={{
            position: 'absolute',
            inset: 0,
            minHeight: '700px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            color: 'var(--muted, #888)',
            fontSize: '14px',
          }}>
            <svg
              width="32" height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ animation: 'spin 1s linear infinite', opacity: 0.5 }}
            >
              <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
              <path d="M12 2a10 10 0 0 1 10 10" strokeLinecap="round" />
            </svg>
            <span>Carregando calendário…</span>
          </div>
        )}
        <div
          id="cal-embed"
          style={{
            width: '100%',
            minHeight: '700px',
            overflow: 'auto',
            opacity: ready ? 1 : 0,
            transition: 'opacity 0.3s ease',
          }}
        />
      </div>
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </>
  );
}
