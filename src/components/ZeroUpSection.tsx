'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ZeroUpSection() {
  const t = useTranslations('zeroUp');

  const phases = [
    { number: 1, title: t('phase1.title'), duration: t('phase1.duration'), description: t('phase1.description') },
    { number: 2, title: t('phase2.title'), duration: t('phase2.duration'), description: t('phase2.description') },
    { number: 3, title: t('phase3.title'), duration: t('phase3.duration'), description: t('phase3.description') },
  ];

  return (
    <section id="zero-up" className="py-32 px-6 lg:px-10 bg-primary text-white overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-white uppercase mb-8"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl leading-relaxed text-white/70 max-w-3xl mb-20"
        >
          {t('subtitle')}
        </motion.p>

        {/* Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              <div className="rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm p-8 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg font-black text-primary">
                    {phase.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white uppercase">{phase.title}</h3>
                    <span className="text-sm font-semibold text-white/50 uppercase tracking-wider">
                      {phase.duration}
                    </span>
                  </div>
                </div>

                <p className="text-base leading-relaxed text-white/70">{phase.description}</p>
              </div>

              {index < phases.length - 1 && (
                <div className="hidden md:flex absolute -right-[1.75rem] top-[2.75rem] z-10">
                  <ArrowRight className="h-6 w-6 text-white/30" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <a
            href="https://outlook.office.com/bookwithme/user/fbd9622be8c048e0bfb0b02b4ccf1178@vanlaack-partners.com/meetingtype/GQdnY87zkU2MGQwjYwNKXQ2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full border-2 border-white px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-white hover:text-primary"
          >
            {t('scheduleCta')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
