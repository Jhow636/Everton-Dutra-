'use client';

import { useEffect } from 'react';
import Script from 'next/script';

// Para adicionar posts: cole aqui as URLs dos posts do Instagram
// Exemplo: 'https://www.instagram.com/p/CODIGO_DO_POST/'
const POSTS: string[] = [
  // 'https://www.instagram.com/p/SEU_POST_1/',
  // 'https://www.instagram.com/p/SEU_POST_2/',
  // 'https://www.instagram.com/p/SEU_POST_3/',
];

export default function InstagramFeed() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, []);

  if (POSTS.length === 0) return null;

  return (
    <>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => {
          if ((window as any).instgrm) {
            (window as any).instgrm.Embeds.process();
          }
        }}
      />
      <div className="insta-grid">
        {POSTS.map((url) => (
          <div key={url} className="insta-item">
            <blockquote
              className="instagram-media"
              data-instgrm-captioned
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                background: '#FFF',
                border: '0',
                borderRadius: '2px',
                boxShadow: '0 0 1px 0 rgba(0,0,0,0.5), 0 1px 10px 0 rgba(0,0,0,0.15)',
                margin: '0',
                maxWidth: '100%',
                minWidth: '326px',
                padding: '0',
                width: '100%',
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
}
