import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import RevealScript from '@/components/RevealScript';
import WhatsAppButton from '@/components/WhatsAppButton';

const GTM_ID = 'GTM-TZHJSNP9';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://entrevozesesilencio.com.br'),
  title: {
    default: 'Everton Dutra Psicanalista',
    template: '%s | Everton Dutra Psicanalista',
  },
  description:
    'Atendimento em psicanálise com Everton Dutra. Cuidado, sigilo e acolhimento em sessões online.',
  keywords: [
    'psicanálise',
    'psicanalista',
    'terapia online',
    'Everton Dutra',
    'saúde mental',
    'ansiedade',
    'autoconhecimento',
  ],
  authors: [{ name: 'Everton Dutra' }],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://entrevozesesilencio.com.br',
    siteName: 'Everton Dutra Psicanalista',
    title: 'Everton Dutra — Psicanalista',
    description: 'Um espaço de escuta e presença, no seu tempo e na sua verdade.',
    images: [
      {
        url: '/fotos/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Everton Dutra Psicanalista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Everton Dutra — Psicanalista',
    description: 'Um espaço de escuta e presença, no seu tempo e na sua verdade.',
    images: ['/fotos/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: { icon: '/fotos/logo.png' },
  alternates: { canonical: 'https://entrevozesesilencio.com.br' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Everton Dutra Psicanalista',
  description:
    'Atendimento em psicanálise com Everton Dutra. Cuidado, sigilo e acolhimento em sessões online.',
  url: 'https://entrevozesesilencio.com.br',
  telephone: '+5531995563539',
  email: 'E.dutra2101@gmail.com',
  sameAs: ['https://instagram.com/everton_dutra_psicanalista'],
  serviceType: 'Psicanálise',
  availableLanguage: 'Portuguese',
  areaServed: 'Brasil',
  priceRange: '$$',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '2253251618547719');
          fbq('track', 'PageView');
        `}</Script>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">{`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${GTM_ID}');
        `}</Script>
      </head>
      <body className={[dmSans.variable, jetbrainsMono.variable, instrumentSerif.variable, dmSans.className].join(' ')}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel (noscript) */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=2253251618547719&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <RevealScript />
      </body>
    </html>
  );
}
