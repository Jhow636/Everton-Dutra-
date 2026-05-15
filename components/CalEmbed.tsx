'use client';

import { useEffect } from 'react';
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
  // Visitas seguintes: Cal já está carregado, reinicializa direto
  useEffect(() => {
    if (window.Cal) mountEmbed(calLink);
  }, [calLink]);

  // Bootstrap completo do Cal.com (primeira visita)
  // O snippet cria window.Cal como fila e injeta embed.js no <head>
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
      <div className="cal-wrapper">
        <div id="cal-embed" style={{ width: '100%', minHeight: '700px', overflow: 'auto' }} />
      </div>
    </>
  );
}
