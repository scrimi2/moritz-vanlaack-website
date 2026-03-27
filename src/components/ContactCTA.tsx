'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DecorativeFlowLines } from './DecorativeLines';

export default function ContactCTA() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10 bg-white overflow-hidden">
      <DecorativeFlowLines />
      {/* Decorative side image - visible on large screens */}
      <div className="hidden xl:block absolute right-0 top-0 bottom-0 w-[30%] opacity-[0.07]">
        <Image
          src="/images/office-phone.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="30vw"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-[1400px] text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[clamp(2.5rem,7vw,6.5rem)] font-black leading-[0.95] tracking-tight text-neutral-900 uppercase mb-10"
        >
          Every Major Change<br />Begins with a<br />Conversation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl text-xl text-neutral-500 mb-12"
        >
          Whether you&apos;re looking to optimize your procurement, implement new tools, or explore
          how AI can transform your sourcing — I&apos;d love to connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#"
            className="inline-flex items-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Schedule a Conversation
          </a>
          <a
            href="mailto:Moritz.vanlaack@sourcera.ai"
            className="inline-flex items-center rounded-full border-2 border-neutral-900 px-8 py-4 text-base font-semibold text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
          >
            Send an Email
          </a>
        </motion.div>
      </div>
    </section>
  );
}
