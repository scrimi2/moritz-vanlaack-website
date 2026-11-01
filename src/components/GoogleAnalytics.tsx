'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

import { GA_ID, readConsent, subscribeToConsent, type Consent } from '@/lib/consent';

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<Consent>(null);

  useEffect(() => {
    const unsubscribe = subscribeToConsent(setConsent);
    const frame = requestAnimationFrame(() => setConsent(readConsent()));
    return () => {
      cancelAnimationFrame(frame);
      unsubscribe();
    };
  }, []);

  if (!GA_ID || consent !== 'granted') return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
