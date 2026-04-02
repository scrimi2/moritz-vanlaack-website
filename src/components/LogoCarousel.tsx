'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { clientLogos } from '@/data/clientLogos';

export default function LogoCarousel() {
  const t = useTranslations('logos');
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 mb-10">
        <h3 className="text-base font-black uppercase tracking-[0.1em] text-neutral-900">
          {t('title')}
        </h3>
      </div>

      {/* Scrolling logos */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <motion.div
          className="flex w-max items-center gap-16"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              duration: 40,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
        >
          {doubled.map((item, i) => (
            <div
              key={`${item.name}-${i}`}
              className="shrink-0 flex items-center justify-center h-12"
            >
              <Image
                src={item.logo}
                alt={`${item.name} logo`}
                width={160}
                height={48}
                className={`h-10 w-auto object-contain transition-all duration-300 opacity-70 ${item.darkInvert ? 'dark:brightness-0 dark:invert' : ''}`}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
