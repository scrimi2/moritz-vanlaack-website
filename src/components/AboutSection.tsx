'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export default function AboutSection() {
  const t = useTranslations('about');

  return (
    <section id="about" className="relative bg-background overflow-hidden">

      {/* About box: portrait left, text right, portrait bottom-aligned with box */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pt-12 pb-20 lg:py-20">
        <div className="relative overflow-visible bg-background">
          <div className="flex flex-col lg:flex-row lg:items-end">
            {/* Portrait – cropped tight to person, bottom-aligned with text */}
            <div className="lg:w-[45%] relative z-[10] flex items-end justify-center overflow-hidden -mx-6 lg:mx-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/portrait-nobg.png"
                alt={t('photoAlt')}
                className="w-[130%] max-w-none h-auto object-contain object-bottom"
              />
            </div>

            {/* Text content */}
            <div className="lg:w-[55%] pt-4 pb-8 lg:p-14 flex flex-col justify-end relative z-10">
              <div className="text-center lg:text-right mb-8">
                <a
                  href="https://outlook.office.com/bookwithme/user/fbd9622be8c048e0bfb0b02b4ccf1178@vanlaack-partners.com/meetingtype/GQdnY87zkU2MGQwjYwNKXQ2?anonymous&ismsaljsauthenabled&ep=mlink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full border-2 border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                >
                  {t('scheduleCta')}
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-lg leading-relaxed text-neutral-700 mb-8 text-center lg:text-left"
              >
                <p>
                  {t('paragraph1')}
                </p>
                <p className="mt-6">
                  {t('paragraph2')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="text-lg leading-relaxed text-neutral-700 text-center lg:text-left"
              >
                <p>
                  {t('paragraph3')}
                </p>
                <p className="mt-6">
                  {t('paragraph4')}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Big section heading */}
      <div className="relative z-[10] max-w-[1400px] mx-auto px-6 lg:px-10 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h2>
      </div>
    </section>
  );
}
