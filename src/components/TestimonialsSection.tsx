'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { DecorativeFlowLinesReverse } from './DecorativeLines';

const testimonials = [
  {
    quote:
      'SOURCERA.AI IS SHOWING US HOW PROCUREMENT EFFICIENCY CAN SCALE. WHAT ONCE TOOK MONTHS OF MANUAL WORK IS NOW GENERATED IN DAYS. THIS IS A POTENTIAL GAME CHANGER FOR LARGE AND COMPLEX ORGANIZATIONS LIKE OURS.',
    name: 'Dirk Thiemann',
    title: 'CPO, Phoenix Group',
  },
  {
    quote:
      'SOURCERA.AI HELPS US TURN DATA INTO SOURCING ACTIONS WITHIN DAYS. WE CAN RAPIDLY RECLASSIFY SPEND, DETECT OVERLAPS AND LAUNCH INITIATIVES THAT DELIVER MEASURABLE SAVINGS.',
    name: 'Alejandro Basterrechea',
    title: 'CPO, Zalando',
  },
  {
    quote:
      '[PLACEHOLDER] MORITZ AND HIS TEAM DELIVERED EXCEPTIONAL RESULTS IN OUR PROCUREMENT TRANSFORMATION PROJECT. THEIR COMBINATION OF STRATEGIC THINKING AND HANDS-ON EXECUTION IS RARE.',
    name: '[Client Name]',
    title: '[Title, Company]',
  },
  {
    quote:
      '[PLACEHOLDER] THE ZERO-UP APPROACH GAVE US CONFIDENCE FROM DAY ONE. WE SAW MEASURABLE SAVINGS WITHIN WEEKS, NOT MONTHS.',
    name: '[Client Name]',
    title: '[Title, Company]',
  },
];

export default function TestimonialsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="testimonials" className="relative py-32 px-6 lg:px-10 bg-white overflow-hidden">
      <DecorativeFlowLinesReverse />
      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-20"
        >
          Real Experiences.<br />Real Results.
        </motion.h2>

        {/* Testimonial card */}
        <div className="rounded-2xl border border-neutral-200 border-l-4 border-l-primary p-8 md:p-14">
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Avatar */}
            <div className="shrink-0 w-40 h-48 rounded-xl overflow-hidden relative shadow-md">
              <Image
                src="/images/portrait-black.jpg"
                alt="Moritz van Laack"
                fill
                className="object-cover object-top"
                sizes="160px"
              />
            </div>

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
                <blockquote className="text-[clamp(1rem,2.5vw,1.75rem)] font-bold leading-[1.2] text-neutral-900 uppercase mb-8">
                  &bdquo;{testimonials[activeTab].quote}&ldquo;
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
          {testimonials.map((t, i) => (
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
