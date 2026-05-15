'use client';

import Script from 'next/script';

export default function CalEmbed({ calLink }: { calLink: string }) {
  const inlineScript = `
(function (C, A, L) {
  let p = function (a, ar) { a.q.push(ar); };
  let d = C.document;
  C.Cal = C.Cal || function () {
    let cal = C.Cal; let ar = arguments;
    if (!cal.loaded) {
      cal.ns = {}; cal.q = cal.q || [];
      d.head.appendChild(d.createElement("script")).src = A;
      cal.loaded = true;
    }
    if (ar[0] === L) {
      const api = function () { p(api, arguments); };
      const namespace = ar[1];
      api.q = [];
      if (typeof namespace === "string") {
        cal.ns[namespace] = cal.ns[namespace] || api;
        p(cal.ns[namespace], ar);
        p(cal, [L, api]);
      } else {
        p(cal, ar);
      }
      return;
    }
    p(cal, ar);
  };
})(window, "https://app.cal.com/embed/embed.js", "init");

Cal("init", { origin: "https://cal.com" });
Cal("inline", {
  elementOrSelector: "#cal-embed",
  calLink: ${JSON.stringify(calLink)},
  layout: "month_view"
});
Cal("ui", {
  styles: { branding: { brandColor: "#A8553A" } },
  hideEventTypeDetails: false,
  layout: "month_view"
});
`;

  return (
    <>
      <Script id="cal-embed-init" strategy="afterInteractive">
        {inlineScript}
      </Script>
      <div className="cal-wrapper">
        <div
          id="cal-embed"
          style={{ width: '100%', minHeight: '700px', overflow: 'auto' }}
        />
      </div>
    </>
  );
}
