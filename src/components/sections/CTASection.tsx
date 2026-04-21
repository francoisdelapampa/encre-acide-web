"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0e0e0e] text-center border-t-2 border-[#C8FF00]">
      <div className="max-w-5xl mx-auto">
        <motion.p
          className="font-[family-name:var(--font-space-mono)] text-sm text-[#C8FF00] uppercase tracking-widest mb-4 md:mb-6"
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          The Collection
        </motion.p>

        <motion.h2
          className="heading-style mb-6 md:mb-8"
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-white text-[12vw] md:text-[8vw] block leading-none">
            Posters
          </span>
          <span className="text-white block mt-2 md:mt-4 text-2xl md:text-4xl lg:text-5xl whitespace-normal md:whitespace-nowrap">
            That <span className="text-[#C8FF00]">Refuse</span> To{" "}
            <span className="text-[#C8FF00]">Behave</span>
          </span>
        </motion.h2>

        <motion.p
          className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#E9E2D3] mb-10 md:mb-16 max-w-2xl mx-auto uppercase tracking-widest leading-relaxed"
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          These are not meant to perfectly align with your sofa.
          <br />
          <span className="text-[#C8FF00] not-italic">They are meant to agitate !</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/collection"
            className="bg-[#C8FF00] text-[#273500] font-[family-name:var(--font-space-mono)] uppercase tracking-widest px-8 md:px-10 text-base md:text-lg hover:bg-white hover:text-black transition-colors inline-flex items-center gap-3 group py-2.5 md:py-3"
          >
            Browse the Collection
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
