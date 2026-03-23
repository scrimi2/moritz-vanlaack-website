'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '70B+', label: 'EUR Optimized Spend' },
  { value: '12+', label: 'Years Experience' },
  { value: '25+', label: 'Successful Projects' },
  { value: '20', label: 'Procurement Consultants' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Left column - Photo placeholder */}
          <motion.div
            className="w-full lg:w-[40%] flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-[400px] h-[500px] rounded-2xl bg-neutral-200 flex items-center justify-center mx-auto lg:mx-0">
              <span className="text-neutral-400 text-lg font-medium">Photo</span>
            </div>
          </motion.div>

          {/* Right column - Bio */}
          <motion.div
            className="w-full lg:w-[60%]"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Me</h2>

            <p className="text-neutral-600 leading-relaxed mb-4">
              As a procurement expert and entrepreneur based in Cologne, I&apos;ve spent over 12
              years transforming how organizations buy. From managing EUR 350M in beverage spend at
              REWE Group to leading multi-million euro digital transformation projects at MHP (A
              Porsche Company) and Accenture Strategy, I&apos;ve built deep expertise across the
              entire Source-to-Pay landscape.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-4">
              In 2021, I founded van Laack &amp; partners to bring enterprise-grade procurement
              consulting to ambitious organizations. In 2025, I co-founded Sourcera AI to automate
              what I&apos;d been doing manually for a decade — because the best procurement
              strategies deserve better tools.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-8">
              I hold an MBA from HHL Leipzig Graduate School of Management and a BA in Trade
              Management. I speak German, English, and have studied at Hanyang University Seoul and
              Ballard High School Seattle.
            </p>

            {/* Stats strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="bg-white rounded-xl shadow-md p-5 border-t-4 border-primary text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <div className="text-2xl font-bold text-neutral-900">{stat.value}</div>
                  <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
