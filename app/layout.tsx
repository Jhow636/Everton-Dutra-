import type { Metadata } from 'next';
import { DM_Sans, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import RevealScript from '@/components/RevealScript';
import WhatsAppButton from '@/components/WhatsAppButton';

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
  metadataBase: new URL('https://evertondutra.com.br'),
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
    url: 'https://evertondutra.com.br',
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
  alternates: { canonical: 'https://evertondutra.com.br' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Everton Dutra Psicanalista',
  description:
    'Atendimento em psicanálise com Everton Dutra. Cuidado, sigilo e acolhimento em sessões online.',
  url: 'https://evertondutra.com.br',
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
      </head>
      <body className={[dmSans.variable, jetbrainsMono.variable, instrumentSerif.variable, dmSans.className].join(' ')}>
        <GoogleAnalytics />
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
        <RevealScript />
      </body>
    </html>
  );
}
