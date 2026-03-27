'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DecorativeFlowLinesReverse, AccentBlock } from './DecorativeLines';

export default function TrustSection() {
  return (
    <section className="relative py-32 px-6 lg:px-10 bg-neutral-50 overflow-hidden">
      {/* Decorative flowing lines */}
      <DecorativeFlowLinesReverse />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* Giant quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(1.5rem,4vw,3.5rem)] font-black leading-[1.05] tracking-tight text-neutral-900 uppercase mb-20"
        >
          &bdquo;I firmly believe that it is the difficult times that show us what we are truly
          capable of. Together, we find the right path.&ldquo;
        </motion.blockquote>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* Photos */}
          <motion.div
            className="w-full lg:w-[45%]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative grid grid-cols-2 gap-4">
              {/* Purple accent shapes behind images */}
              <AccentBlock className="w-[120px] h-[160px] -top-4 -left-4 opacity-80 z-0" />
              <AccentBlock className="w-[100px] h-[140px] -bottom-4 right-[calc(50%-60px)] opacity-70 z-0" />
              <div className="relative z-[1] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/images/office-phone-camera.jpg"
                  alt="Moritz van Laack on the phone in the office"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
              </div>
              <div className="relative z-[1] aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-8">
                <Image
                  src="/images/office-laughing.jpg"
                  alt="Moritz van Laack working and laughing"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 50vw, 22vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Personal statement */}
          <motion.div
            className="w-full lg:w-[55%]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 uppercase mb-8">
              Beyond Business
            </h2>

            <div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
              <p>
                In my consulting work, I repeatedly experience how important trust and interpersonal
                connections are. Often conversations in challenging projects transcend pure business
                frameworks, becoming personal and sometimes deeply meaningful.
              </p>
              <p>
                [PLACEHOLDER - Add personal statement about your approach to building trust with
                clients. What makes your consulting relationship different? What values drive your
                work beyond the numbers?]
              </p>
              <p>
                Listening takes priority — always before analysis. I want to ensure I support
                clients not just in business matters but also where personal aspects come into play.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
