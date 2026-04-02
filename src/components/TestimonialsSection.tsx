'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      quote: t('items.testimonial3.quote'),
      name: t('items.testimonial3.name'),
      title: t('items.testimonial3.role'),
      image: '/images/testimonials/tim-wisiorek.jpg',
      industry: t('items.testimonial3.industry'),
    },
    {
      quote: t('items.testimonial2.quote'),
      name: t('items.testimonial2.name'),
      title: t('items.testimonial2.role'),
      image: '/images/testimonials/jeremy-schwarz.jpg',
      industry: t('items.testimonial2.industry'),
    },
    {
      quote: t('items.testimonial1.quote'),
      name: t('items.testimonial1.name'),
      title: t('items.testimonial1.role'),
      image: '/images/testimonials/dirk-thiemann.jpg',
      industry: t('items.testimonial1.industry'),
    },
  ];

  return (
    <section id="testimonials" className="relative py-32 px-6 lg:px-10 bg-background overflow-hidden">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          {t('title').split('\n').map((line: string, i: number) => (
            <span key={i}>{line}{i === 0 && <br />}</span>
          ))}
        </motion.h2>

        {/* Testimonial card */}
        <div className="rounded-2xl border border-neutral-900/10 dark:border-white/10 border-l-4 border-l-primary p-8 md:p-14">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="shrink-0 w-40 h-48 rounded-xl overflow-hidden relative shadow-md"
              >
                <Image
                  src={testimonials[activeTab].image}
                  alt={testimonials[activeTab].name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
              </motion.div>
            </AnimatePresence>

            {/* Quote */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="flex-1"
              >
                <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                  {testimonials[activeTab].industry}
                </p>
                <blockquote className="text-lg md:text-xl font-medium leading-relaxed text-neutral-700 italic mb-8">
                  &ldquo;{testimonials[activeTab].quote}&rdquo;
                </blockquote>

                <div>
                  <p className="font-bold text-neutral-900 text-lg">
                    {testimonials[activeTab].name}
                  </p>
                  <p className="text-base text-neutral-500">
                    {testimonials[activeTab].title}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tab navigation */}
        <div className="flex gap-4 mt-8">
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`h-[3px] rounded-full transition-all duration-300 ${
                i === activeTab ? 'w-10 bg-neutral-900' : 'w-5 bg-neutral-300 hover:bg-neutral-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
