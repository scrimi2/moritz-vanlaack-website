'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function VenturesSection() {
  const t = useTranslations('ventures');

  const ventures = [
    {
      year: t('sourcera.year'),
      title: t('sourcera.title'),
      logo: '/images/sourcera-logo-transparent.png',
      subtitle: t('sourcera.role'),
      description: t('sourcera.description'),
      stats: [t('sourcera.stat1'), t('sourcera.stat2'), t('sourcera.stat3')],
      customers: t('sourcera.customers'),
      link: { label: t('sourcera.linkLabel'), href: 'https://sourcera.ai' },
    },
    {
      year: t('vanLaack.year'),
      title: t('vanLaack.title'),
      logo: '/images/vlp-logo-transparent.png',
      subtitle: t('vanLaack.role'),
      description: t('vanLaack.description'),
      stats: [t('vanLaack.stat1'), t('vanLaack.stat2'), t('vanLaack.stat3')],
      customers: t('vanLaack.customers'),
      link: { label: t('vanLaack.linkLabel'), href: 'https://vanlaack-partners.com' },
    },
  ];

  return (
    <section id="ventures" className="relative py-32 bg-neutral-50 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
        {/* Big heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          {t('title')}
        </motion.h2>

        <div className="space-y-12">
          {ventures.map((venture, index) => (
            <motion.div
              key={venture.title}
              className="rounded-2xl bg-background p-10 md:p-14 border border-neutral-900/10 dark:border-white/10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:gap-16">
                {/* Left side */}
                <div className="relative lg:w-[60%]">
                  <span className="relative z-10 inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary mb-6">
                    {venture.year}
                  </span>
                  {venture.logo && (
                    <div className="absolute top-6 right-6 lg:top-10 lg:right-10 opacity-10 pointer-events-none z-0">
                      <Image
                        src={venture.logo}
                        alt={`${venture.title} logo`}
                        height={280}
                        width={280}
                        className="object-contain h-[200px] lg:h-[280px] w-auto"
                      />
                    </div>
                  )}
                  <h3 className="relative z-10 text-3xl font-black text-neutral-900 uppercase mb-2">{venture.title}</h3>
                  <p className="relative z-10 text-base font-medium text-neutral-500 mb-6">{venture.subtitle}</p>
                  <p className="relative z-10 text-lg text-neutral-600 leading-relaxed mb-8">{venture.description}</p>
                  <p className="relative z-10 text-sm text-neutral-400 mb-6">{venture.customers}</p>
                  <a
                    href={venture.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-10 inline-flex items-center gap-1 text-sm font-bold text-neutral-900 hover:text-primary transition-colors"
                  >
                    {venture.link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>

                {/* Right side - Stats */}
                <div className="mt-10 lg:mt-0 lg:w-[40%]">
                  <div className="space-y-4">
                    {venture.stats.map((stat) => (
                      <div
                        key={stat}
                        className="rounded-xl bg-background px-6 py-5 text-base font-semibold text-neutral-800 border border-neutral-900/10 dark:border-white/10 border-l-4 border-l-primary"
                      >
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
