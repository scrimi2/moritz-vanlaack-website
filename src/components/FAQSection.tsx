'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const t = useTranslations('faq');

  const faqKeys = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6'] as const;
  const faqs = faqKeys.map((key) => ({
    question: t(`items.${key}.question`),
    answer: t(`items.${key}.answer`),
  }));

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-32 px-6 lg:px-10 bg-neutral-50">
      <div className="relative z-10 mx-auto max-w-[1400px]">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left - heading */}
          <motion.div
            className="lg:w-[40%] lg:sticky lg:top-32 lg:self-start"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-[clamp(2rem,5vw,4.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase">
              {t('title').split('\n').map((line: string, i: number) => (
                <span key={i}>{line}{i < 2 && <br />}</span>
              ))}
            </h2>
          </motion.div>

          {/* Right - questions */}
          <div className="lg:w-[60%] divide-y divide-neutral-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="flex w-full items-center justify-between py-7 text-left group"
                  >
                    <span className="pr-8 text-lg font-bold text-neutral-900 group-hover:text-primary transition-colors">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-neutral-400">
                      {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="pb-7 text-base leading-relaxed text-neutral-600">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
