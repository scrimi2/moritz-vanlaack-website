'use client';

import { motion } from 'framer-motion';
import { DecorativeFlowLines } from './DecorativeLines';

export default function AboutSection() {
  return (
    <section id="about" className="relative bg-white overflow-hidden">
      {/* Decorative flowing lines behind content */}
      <DecorativeFlowLines />

      {/* Portrait with text wrapping around silhouette */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-20">
        <div className="clearfix">
          {/* Floating portrait – text wraps around the silhouette */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/portrait-nobg.png"
            alt="Moritz van Laack – Portrait"
            className="float-left mr-8 mb-4 relative z-10"
            style={{
              width: 'clamp(500px, 65vw, 900px)',
              height: 'auto',
              shapeOutside: 'url(/images/portrait-nobg.png)',
              shapeMargin: '24px',
              shapeImageThreshold: '0.5',
            }}
          />

          <div className="pt-4">
            <div className="text-right mb-8">
              <a
                href="#contact"
                className="inline-block rounded-full border-2 border-neutral-900 px-6 py-3 text-sm font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                Schedule a Conversation
              </a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-lg leading-relaxed text-neutral-700 mb-8"
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
