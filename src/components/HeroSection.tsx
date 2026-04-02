'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const t = useTranslations('hero');

  const headlines = [t('headline1'), t('headline2'), t('headline3')];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-20 pb-16 overflow-hidden">
      {/* Background image with overlay */}
      <Image
        src="/images/stage-keynote.jpg"
        alt={t('imageAlt')}
        fill
        className="object-cover object-[center_30%]"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-primary/85" />
      {/* Giant rotating headline */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10">
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentIndex}
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.5rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-white/90 uppercase"
            style={{ fontStyle: 'italic' }}
          >
            &raquo;{headlines[currentIndex]}&laquo;
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Pagination dots */}
      <div className="relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-10 mt-12 flex gap-2">
        {headlines.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-[3px] rounded-full transition-all duration-300 ${
              i === currentIndex ? 'w-10 bg-white' : 'w-5 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
