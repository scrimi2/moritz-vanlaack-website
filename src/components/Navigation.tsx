'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Ventures', href: '#ventures' },
  { label: 'Track Record', href: '#track-record' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<'EN' | 'DE'>('EN');

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
          : 'bg-white'
      }`}
    >
      {/* Top accent line */}
      <div className="h-[3px] w-full bg-primary" />

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-14 items-center justify-between md:h-16">
          {/* Logo / Name */}
          <a
            href="#"
            className="text-base font-medium text-neutral-900"
          >
            Moritz van Laack
          </a>

          {/* Desktop links */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-neutral-600 transition-colors hover:text-neutral-900"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-primary px-5 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Let&apos;s Connect
            </a>

            {/* Language toggle */}
            <div className="flex items-center gap-1 text-sm">
              <button
                onClick={() => setLang('EN')}
                className={`font-medium transition-colors ${
                  lang === 'EN' ? 'text-primary' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                EN
              </button>
              <span className="text-neutral-300">|</span>
              <button
                onClick={() => setLang('DE')}
                className={`font-medium transition-colors ${
                  lang === 'DE' ? 'text-primary' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                DE
              </button>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-neutral-900 md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
            className="overflow-hidden border-t border-neutral-100 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-4 rounded-full border border-neutral-900 px-5 py-3 text-center text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                Let&apos;s Connect
              </a>
              <div className="mt-4 flex items-center justify-center gap-2 text-sm">
                <button
                  onClick={() => setLang('EN')}
                  className={`font-medium ${lang === 'EN' ? 'text-primary' : 'text-neutral-400'}`}
                >
                  EN
                </button>
                <span className="text-neutral-300">|</span>
                <button
                  onClick={() => setLang('DE')}
                  className={`font-medium ${lang === 'DE' ? 'text-primary' : 'text-neutral-400'}`}
                >
                  DE
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
