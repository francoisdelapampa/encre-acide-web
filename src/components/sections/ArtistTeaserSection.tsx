"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function ArtistTeaserSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0e0e0e] border-t border-[#F6F4ED]/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="flex flex-col justify-start items-center mx-auto max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#C8FF00] uppercase tracking-widest mb-4 md:mb-6">
              The Artist
            </p>
            <h2 className="heading-style text-2xl md:text-3xl text-white mb-6 md:mb-8">
              François
              <br />
              <span className="text-[#C8FF00]">de la Pampa</span>
            </h2>
            <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#E9E2D3] leading-relaxed uppercase tracking-widest max-w-2xl">
              A digital alchemist turning corrupted ideas into gold. Paris-based
              photographer turned satirical poster artist. Balancing dark humor
              with visual poetry, collective hypnosis with intimate fantasy.
              Acid-soaked photographer, dyslexic poet, eternal child clutching
              at eternity like a balloon.
            </p>
            <Link
              href="/artist"
              className="mt-8 md:mt-10 border border-[#C8FF00] text-[#C8FF00] font-[family-name:var(--font-space-mono)] uppercase tracking-widest px-6 md:px-8 py-2 text-sm hover:bg-[#C8FF00] hover:text-black transition-colors inline-flex items-center gap-2 self-center"
            >
              DISCOVER THE ARTIST
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
