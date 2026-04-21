"use client";

import { motion } from "framer-motion";

export function ProcessSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col items-center justify-center mb-8 md:mb-12 w-full text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#C8FF00] uppercase tracking-widest mb-4 md:mb-6">
            THE PROCESS
          </p>
          <div className="w-full max-w-3xl">
            <p className="font-[family-name:var(--font-space-mono)] text-white text-sm md:text-base not-italic block mb-2 uppercase font-bold">
              A known-sense project. A better cold-soul process. And a fool-stack
              match.
            </p>
            <p className="font-[family-name:var(--font-space-mono)] text-[#C8FF00] text-sm md:text-base not-italic block">
              One brain. One joke. One image. No committee. AI handles the
              pixels. The artist handles the blade.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-8 md:mt-12">
          <motion.div
            className="flex flex-col justify-start p-6 md:p-8 ghost-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            <h3 className="heading-style mb-4 md:mb-6 text-lg md:text-xl text-white">
              What The Flux ?
            </h3>
            <p className="text-white font-[family-name:var(--font-space-mono)] text-xs md:text-sm leading-relaxed uppercase">
              By using <span className="text-[#C8FF00]">art as a device</span>{" "}
              and <span className="text-[#C8FF00]">satire as a weapon</span>,
              the artist&apos;s voice becomes a vice twice over. And because it is{" "}
              <span className="text-[#C8FF00]">knot what you think</span>, it is
              worth this little vice.
            </p>
          </motion.div>

          <motion.div
            className="p-6 md:p-8 ghost-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="heading-style mb-4 md:mb-6 text-lg md:text-xl text-white">
              Visual Layer
            </h3>
            <p className="text-[#c4caac] font-[family-name:var(--font-space-mono)] text-xs md:text-sm leading-relaxed">
              Generative AI helps the artist create surreal, impossible scenes
              that ground the wordplay in visual absurdity. Every image is a
              world that almost makes sense. Or it just helps to tell the truth.
            </p>
          </motion.div>

          <motion.div
            className="p-6 md:p-8 ghost-border"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="heading-style mb-4 md:mb-6 text-lg md:text-xl text-white">
              Text Layer
            </h3>
            <p className="text-[#c4caac] font-[family-name:var(--font-space-mono)] text-xs md:text-sm leading-relaxed">
              Hand-crafted French wordplay, puns, sonic distortions, and
              linguistic bombs. Each title is a small act of creative vandalism
              against the dictionary. Brain generated.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
