'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is the Zero-Up Approach?',
    answer:
      'Our proven 3-phase methodology that delivers savings from day one. We start with a fully funded Discovery Phase (22 days) to identify opportunities, move into Execution (3 months) to realize savings with Sourcera AI, and complete with an Excellence Phase (9 months) to embed a sustainable procurement engine. We only earn when you save.',
  },
  {
    question: 'What is Sourcera AI?',
    answer:
      'Sourcera AI is the first end-to-end Opportunity-to-Savings (O2S) platform. It bridges the gap between Spend Cubes and Source-to-Contract tools, using AI to transform fragmented procurement data into optimized tenders and measurable savings. It delivers 10-20% additional savings, 90% less manual work, and 10x faster execution.',
  },
  {
    question: 'What consulting services does van Laack & partners offer?',
    answer:
      'We provide 360-degree supply chain management and procurement consulting with a team of 20 specialized consultants across Europe. Our services include procurement strategy, digital transformation roadmaps, tool implementations (SAP, Coupa, Ivalua, Ariba), interim management, and change management.',
  },
  {
    question: 'What industries do you serve?',
    answer:
      'We work across pharma, retail, logistics, manufacturing, automotive, chemicals, utilities, and packaging. Our clients include Phoenix Group, BASF, Schaeffler, Mercedes-Benz, Volkswagen, Siemens Energy, Zalando, and many more.',
  },
  {
    question: 'What platforms are you certified in?',
    answer:
      'Coupa (Full Suite), SAP Ariba (Full Suite), SAP Fieldglass (CWF/SOW), Ivalua, and Wescale/WPS4. We also have deep expertise in SAP S/4 HANA, Sievo, SpendHQ, Beneering, and 10+ other procurement platforms.',
  },
  {
    question: 'How can we work together?',
    answer:
      'There are several ways: through a Zero-Up engagement (risk-free, fully funded Discovery Phase), traditional consulting and interim management through van Laack & partners, or by implementing Sourcera AI as a SaaS platform. Contact me to discuss which approach fits your needs.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`overflow-hidden rounded-xl border transition-colors ${
                  isOpen
                    ? 'border-l-4 border-l-[var(--color-primary)] border-t-neutral-200 border-r-neutral-200 border-b-neutral-200 bg-white shadow-[var(--shadow-sm)]'
                    : 'border-neutral-200 bg-white'
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 font-semibold text-neutral-900">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0"
                  >
                    <ChevronDown className="h-5 w-5 text-neutral-500" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 text-sm leading-relaxed text-neutral-600">
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
    </section>
  );
}
