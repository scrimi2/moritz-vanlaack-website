'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const t = useTranslations('cookieConsent');
  const locale = useLocale();

  useEffect(() => {
    const stored = localStorage.getItem('cookie-consent');
    if (!stored) setVisible(true);
  }, []);

  const respond = (value: 'granted' | 'denied') => {
    localStorage.setItem('cookie-consent', value);
    window.dispatchEvent(new Event('cookie-consent-update'));
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[60] w-[calc(100vw-2rem)] max-w-lg"
        >
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-2xl backdrop-saturate-200 shadow-lg shadow-black/5 dark:shadow-black/20 px-5 py-4">
            <p className="text-sm text-black/80 dark:text-white/80 leading-relaxed">
              {t('message')}{' '}
              <a
                href={`/${locale}/datenschutz`}
                className="underline underline-offset-2 hover:text-black dark:hover:text-white transition-colors"
              >
                {t('learnMore')}
              </a>
            </p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => respond('granted')}
                className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-sm font-medium transition-opacity hover:opacity-80"
              >
                {t('accept')}
              </button>
              <button
                onClick={() => respond('denied')}
                className="rounded-full border border-black/20 dark:border-white/20 px-5 py-2 text-sm font-medium text-black/70 dark:text-white/70 transition-colors hover:text-black dark:hover:text-white hover:border-black/40 dark:hover:border-white/40"
              >
                {t('decline')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
