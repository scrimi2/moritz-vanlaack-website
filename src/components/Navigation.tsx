'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';
import ThemeToggle from './ThemeToggle';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const t = useTranslations('nav');

  const navLinks = [
    { label: t('about'), href: '#about' },
    { label: t('ventures'), href: '#ventures' },
    { label: t('trackRecord'), href: '#track-record' },
    { label: t('expertise'), href: '#expertise' },
    { label: t('contact'), href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 w-fit max-w-[calc(100vw-2rem)]">
      {/* Pill navbar */}
      <nav
        className={`transition-all duration-300 backdrop-blur-2xl backdrop-saturate-200 rounded-full px-6 lg:px-8 ${
          scrolled
            ? 'bg-white/70 dark:bg-black/70 border border-black/10 dark:border-white/10 shadow-lg shadow-black/5 dark:shadow-black/20'
            : 'bg-white/50 dark:bg-black/50 border border-black/5 dark:border-white/5 shadow-md shadow-black/[0.03] dark:shadow-black/10'
        }`}
      >
        <div className="flex h-12 items-center justify-between gap-6 md:h-14 md:gap-8">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-base font-semibold text-black dark:text-white whitespace-nowrap"
          >
            Moritz van Laack
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-7 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-black/80 dark:text-white/80 transition-colors hover:text-black dark:hover:text-white whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/moritz-van-laack-99a073142/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-[15px] font-medium transition-opacity hover:opacity-80 whitespace-nowrap"
            >
              {t('letsConnect')}
            </a>

            <ThemeToggle />
            <LanguageSwitcher />
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-black dark:text-white md:hidden"
            aria-label={mobileOpen ? t('closeMenu') : t('openMenu')}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — separate from pill */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-[calc(100vw-2rem)] overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-2xl backdrop-saturate-200 shadow-lg shadow-black/5 dark:shadow-black/20 md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-[15px] font-medium text-black/80 dark:text-white/80 transition-colors hover:bg-black/5 dark:hover:bg-white/10 hover:text-black dark:hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://www.linkedin.com/in/moritz-van-laack-99a073142/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="mt-3 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-center text-[15px] font-medium transition-opacity hover:opacity-80"
              >
                {t('letsConnect')}
              </a>
              <div className="mt-3 flex items-center justify-center gap-4">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
