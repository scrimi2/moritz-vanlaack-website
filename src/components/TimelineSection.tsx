'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const timelineItems = [
  {
    year: '2025',
    role: 'Founder & Managing Director',
    company: 'Sourcera AI',
    description:
      'Co-founded AI procurement platform with Andreas Eiselt. Building the first end-to-end O2S solution.',
  },
  {
    year: '2021–Present',
    role: 'Founder & CEO',
    company: 'van Laack & partners',
    description:
      'Built a team of 20 procurement consultants. Leading projects like Interim Head of Global Category Management for a pharma wholesaler with EUR 500M+ spend.',
  },
  {
    year: '2020–2021',
    role: 'Manager, Supply Chain & Operations',
    company: 'Accenture Strategy',
    description:
      'Led Zero-Based Strategy evaluations, digital transformation roadmaps, and best-of-breed tool implementations for Fortune 500 clients. Project volumes exceeding EUR 10M.',
  },
  {
    year: '2019–2020',
    role: 'Senior Consultant, Digital SCM',
    company: 'MHP – A Porsche Company',
    description:
      'IT project lead for international SAP MM rollouts, SAP Ariba and Fieldglass implementations, and RPA & AI procurement automation projects.',
  },
  {
    year: '2017–2018',
    role: 'Consultant, Digital SCM',
    company: 'MHP – A Porsche Company',
    description:
      'Entry into procurement technology consulting. First platform implementations.',
  },
  {
    year: '2017',
    role: 'Category Manager',
    company: 'REWE Group',
    description:
      'Managed EUR 350M in beverage procurement spend across 210 suppliers.',
  },
  {
    year: '2013–2016',
    role: 'Dual Student',
    company: 'REWE Group / EUFH Cologne',
    description:
      "BA in Trade Management. Awarded IHK 'Besten Ehrung' for outstanding achievement.",
  },
];

const education = [
  { degree: 'MBA', institution: 'HHL Leipzig', years: '2019–2021' },
  { degree: 'Exchange', institution: 'Hanyang Seoul', years: '2016' },
  { degree: 'BA', institution: 'EUFH Cologne', years: '2013–2016' },
  { degree: 'Exchange', institution: 'Ballard HS Seattle', years: '2010–2011' },
];

export default function TimelineSection() {
  return (
    <section id="track-record" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Track Record</h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            From hands-on category management to C-suite strategy to entrepreneurship
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex items-start">
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow -translate-x-1/2 z-10 mt-1" />

                  {/* Card - desktop alternating, mobile always right */}
                  <motion.div
                    className={`ml-14 md:ml-0 md:w-[45%] ${
                      isLeft ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                    }`}
                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="bg-white rounded-xl shadow-md p-6">
                      <span className="inline-block text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-lg font-bold text-neutral-900">{item.role}</h3>
                      <p className="text-sm font-medium text-primary mb-2">{item.company}</p>
                      <p className="text-neutral-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education overlay */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {education.map((edu, index) => (
              <motion.div
                key={edu.institution}
                className="bg-white rounded-xl shadow-md p-5 flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{edu.degree}</h4>
                  <p className="text-sm text-neutral-600">{edu.institution}</p>
                  <p className="text-xs text-neutral-400 mt-1">{edu.years}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
