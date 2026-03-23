'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const headlines = [
  'Transforming Procurement Through AI',
  'EUR 70B+ in Optimized Spend',
  'From Category Management to AI-Powered Procurement',
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="gradient-hero relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Animated gradient orb */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      >
        <div
          className="hero-orb h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
          style={{
            background:
              'radial-gradient(circle, var(--color-primary) 0%, var(--color-accent) 50%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary-light md:text-base">
          Procurement Expert. Entrepreneur. Digital Strategist.
        </p>

        {/* Rotating headline */}
        <div className="relative mb-8 h-[1.3em] text-4xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
          <AnimatePresence mode="wait">
            <motion.h1
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
              className="absolute inset-0"
            >
              {headlines[currentIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-lg text-neutral-300 md:text-xl">
          I build procurement strategies, teams, and technology that deliver
          measurable results.
        </p>

        {/* CTA */}
        <a
          href="#contact"
          className="gradient-primary inline-block rounded-full px-8 py-4 text-base font-semibold text-white transition-opacity hover:opacity-90 md:text-lg"
        >
          Schedule a Conversation
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6 text-white/50" />
        </motion.div>
      </div>

    </section>
  );
}
