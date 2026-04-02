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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-2xl backdrop-saturate-200 ${
        scrolled
          ? 'bg-white/80 dark:bg-black/80 border-b border-black/10 dark:border-white/10 shadow-sm'
          : 'bg-white/70 dark:bg-black/70 border-b border-black/5 dark:border-white/5'
      }`}
    >

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-base font-semibold text-black dark:text-white"
          >
            Moritz van Laack
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-black/80 dark:text-white/80 transition-colors hover:text-black dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://www.linkedin.com/in/moritz-van-laack-99a073142/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-2 text-[15px] font-medium transition-opacity hover:opacity-80"
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
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-black/10 dark:border-white/10 bg-white/90 dark:bg-black/90 backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
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
                className="mt-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-5 py-3 text-center text-[15px] font-medium transition-opacity hover:opacity-80"
              >
                {t('letsConnect')}
              </a>
              <div className="mt-4 flex items-center justify-center gap-4">
                <ThemeToggle />
                <LanguageSwitcher />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
