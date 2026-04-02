'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
export default function ContactCTA() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 bg-background overflow-hidden">
      {/* Decorative side image - visible on large screens, fades into white on left */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[40%]">
        <Image
          src="/images/office-phone-camera.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="40vw"
        />
        {/* Gradient overlay to fade the left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-10"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i < 2 && <br />}</span>
          ))}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-xl text-neutral-500 mb-12"
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://outlook.office.com/bookwithme/user/fbd9622be8c048e0bfb0b02b4ccf1178@vanlaack-partners.com/meetingtype/GQdnY87zkU2MGQwjYwNKXQ2?anonymous&ismsaljsauthenabled&ep=mlink"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            {t('scheduleCall')}
          </a>
          <a
            href="mailto:info@vanlaack-partners.com"
            className="inline-flex items-center rounded-full border-2 border-neutral-900 px-8 py-4 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            {t('sendEmail')}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
