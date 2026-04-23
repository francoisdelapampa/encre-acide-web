"use client";

import { useState } from "react";
import { Send, Check } from "lucide-react";
import { motion } from "framer-motion";

export function CTASection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const trimmed = email.trim().toLowerCase();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("encre-acide-emails") || "[]");
      if (existing.some((entry: { email: string }) => entry.email === trimmed)) {
        setSubmitted(true);
        return;
      }
      existing.push({ email: trimmed, date: new Date().toISOString() });
      localStorage.setItem("encre-acide-emails", JSON.stringify(existing));
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative py-20 md:py-32 pb-[30vw] md:pb-[25vw] px-6 md:px-10 bg-[#0e0e0e] text-center border-t-2 border-[#C8FF00]">
      <div className="max-w-5xl mx-auto relative z-10">
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
            That <span className="text-[#C8FF00]">Refuse</span>{" "}
            To <span className="text-[#C8FF00]">Behave</span>
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
          className="max-w-[45rem] mx-auto"
          initial={{ opacity: 0.9, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {submitted ? (
            <div className="flex flex-col items-center gap-3 animate-fade-in-up">
              <div className="bg-[#C8FF00] text-[#273500] p-3 rounded-full">
                <Check className="w-6 h-6" />
              </div>
              <p className="font-[family-name:var(--font-space-mono)] text-[#C8FF00] text-sm uppercase tracking-widest">
                You are on the list. Welcome to the inner circle.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="bg-[#C8FF00] p-4 md:p-5 text-center">
                <div className="mb-2">
                  <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#1a1a1a] uppercase tracking-widest leading-relaxed">Dear friends, brand aficionados, and discerning collectors,</p>
                  <div className="h-2 md:h-3" />
                  <span className="block heading-style tracking-tighter text-xl md:text-2xl text-[#273500] capitalize">this is for you !</span>
                </div>
                <p className="font-[family-name:var(--font-space-mono)] text-xs md:text-sm text-[#1a1a1a] uppercase tracking-widest leading-relaxed">
                  Get instant alerts when new artworks drop — and first dibs on limited editions, SELECTED EXCLUSIVES &amp; hand-signed releases before they hit any other channel and too many eyes...
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border border-[#C8FF00] text-[#C8FF00] font-[family-name:var(--font-space-mono)] text-sm px-4 py-3 placeholder:text-[#C8FF00]/60 focus:outline-none focus:bg-[#C8FF00] focus:text-[#273500] transition-colors"
                />
                <button
                  type="submit"
                  className="bg-transparent border border-[#C8FF00] text-[#C8FF00] font-[family-name:var(--font-space-mono)] uppercase tracking-widest text-sm hover:bg-[#C8FF00] hover:text-[#273500] transition-colors inline-flex items-center justify-center gap-2 group py-3 px-6 font-bold shrink-0"
                >
                  Clic in touch
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
              {error && (
                <p className="font-[family-name:var(--font-space-mono)] text-xs text-red-500 uppercase tracking-wider">
                  {error}
                </p>
              )}
            </form>
          )}
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img
          src="/images/divers/squelettes-tarpe-corde.png"
          alt="Squelettes Tarpe Corde"
          className="w-full h-auto block"
        />
      </div>
    </section>
  );
}
