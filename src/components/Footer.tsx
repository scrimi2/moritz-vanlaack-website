'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

function LinkedInIcon({ size = 18 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}


export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-background border-t border-neutral-900/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Main footer row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          {/* Logo */}
          <div>
            <h3 className="text-lg font-bold tracking-tight text-neutral-900">
              {t('name')}
            </h3>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/moritz-van-laack-99a073142/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-400 transition-colors hover:text-neutral-900"
            >
              <LinkedInIcon size={20} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-900/10 dark:bg-white/10 my-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-neutral-400">
          <p>{t('copyright')}</p>

          <div className="flex items-center gap-6">
            <a href={`/${locale}/impressum`} className="transition-colors hover:text-neutral-900">
              {t('impressum')}
            </a>
            <a href={`/${locale}/datenschutz`} className="transition-colors hover:text-neutral-900">
              {t('datenschutz')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
