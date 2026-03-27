'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DecorativeFlowLines, AccentBlock } from './DecorativeLines';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Decorative flowing lines behind content */}
      <DecorativeFlowLines />

      {/* Portrait — left-aligned, full posture visible, no background */}
      <div className="relative w-full overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex justify-start">
          <div className="relative w-[500px] md:w-[550px] lg:w-[600px] h-[80vh] shrink-0">
            {/* Purple accent blocks behind portrait */}
            <div
              className="absolute w-[160px] h-[240px] rounded-3xl -left-6 top-[18%] z-[1]"
              style={{ backgroundColor: '#7c3aed' }}
            />
            <div
              className="absolute w-[120px] h-[200px] rounded-3xl right-[-20px] bottom-[12%] z-[1]"
              style={{ backgroundColor: '#7c3aed', opacity: 0.7 }}
            />
            <Image
              src="/images/portrait-white.jpg"
              alt="Moritz van Laack – Portrait"
              fill
              className="object-contain object-bottom"
              sizes="600px"
              priority
              style={{ position: 'relative', zIndex: 2, mixBlendMode: 'multiply' }}
            />
          </div>
        </div>
        {/* Gradient fade at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" style={{ zIndex: 3 }} />
      </div>

      {/* About text - 3-column layout like Burkhardt */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr_1fr] gap-8 md:gap-12">
          {/* CTA column */}
          <div>
            <a
              href="#contact"
              className="inline-block rounded-full border-2 border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
            >
              Schedule a Conversation
            </a>
          </div>

          {/* Text column 1 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg leading-relaxed text-neutral-700"
          >
            <p>
              Strategy, a forward-looking perspective on what matters, and a clear stance.
              With over 12 years in procurement and supply chain, I lead organizations through
              the complex challenges of digital transformation.
            </p>
            <p className="mt-6">
              From managing EUR 350M in beverage spend at REWE Group, to leading multi-million
              euro digital transformation projects at MHP (A Porsche Company) and Accenture
              Strategy, to serving as interim Head of IT &amp; Professional Services in Procurement
              for a pharmaceutical sales company with EUR 500M+ spend — I&apos;ve built deep
              expertise across the entire Source-to-Pay landscape.
            </p>
          </motion.div>

          {/* Text column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg leading-relaxed text-neutral-700"
          >
            <p>
              As founder of van Laack &amp; partners and co-founder of Sourcera AI, I combine
              enterprise-grade consulting with cutting-edge AI technology — because the best
              procurement strategies deserve better tools.
            </p>
            <p className="mt-6">
              With expertise as an entrepreneur, procurement strategist, and AI builder,
              I stand for authentic sparring that is based on solid values and delivers
              sustainable results.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Big section heading */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 pb-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase"
        >
          Shaping the Future,<br />
          Not Just Reacting.
        </motion.h2>
      </div>
    </section>
  );
}
