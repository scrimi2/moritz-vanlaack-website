'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const [consent, setConsent] = useState<string | null>(null);

  useEffect(() => {
    setConsent(localStorage.getItem('cookie-consent'));

    const onStorage = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') setConsent(e.newValue);
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);

  // Also listen for custom event from CookieConsent component (same tab)
  useEffect(() => {
    const onConsent = () => setConsent(localStorage.getItem('cookie-consent'));
    window.addEventListener('cookie-consent-update', onConsent);
    return () => window.removeEventListener('cookie-consent-update', onConsent);
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
