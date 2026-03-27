'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

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
    <section id="faq" className="py-32 px-6 lg:px-10 bg-neutral-50">
      <div className="mx-auto max-w-[1400px]">
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
              Frequently<br />Asked<br />Questions.
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
