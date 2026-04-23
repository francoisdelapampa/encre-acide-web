"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <>
      {/* Top Ticker */}
      <div className="w-full font-[family-name:var(--font-space-mono)] text-xs py-2 mt-2.5 whitespace-nowrap overflow-hidden flex items-center justify-center bg-[#C8FF00] text-[#131313] uppercase">
        <div className="animate-marquee flex gap-1">
          <span>SATIRICAL POSTER ART /// POP DYSTOPIA /// LINGUISTIC SUBVERSION /// DARK HUMOR /// FRENCH ABSURDISM /// FROM PARIS WITH A LAUGH</span>
          <span>SATIRICAL POSTER ART /// POP DYSTOPIA /// LINGUISTIC SUBVERSION /// DARK HUMOR /// FRENCH ABSURDISM /// FROM PARIS WITH A LAUGH</span>
        </div>
      </div>
    <section className="relative flex flex-col justify-start items-start pt-8 md:pt-12 pb-[20vw] md:pb-[15vw] overflow-hidden bg-[#0e0e0e]">

      <div className="flex flex-col md:flex-row w-full justify-between items-center px-6 md:px-10">
        <div className="w-full md:w-[50vw] mb-8 md:mb-12 pt-8 md:pt-0">
          <h1 className="heading-style text-[15vw] md:text-[8vw] w-full md:w-[50vw] leading-[0.8] animate-fade-in-up">
            <span className="text-white block">Encre</span>
            <span className="text-[#C8FF00] block">Acide</span>
          </h1>

          <div className="mt-6 md:mt-8 mb-4 font-bold tracking-tighter heading-style text-lg md:text-2xl text-left lowercase animate-fade-in-up animation-delay-200">
            <span className="text-[#C8FF00]">Art</span>
            <span className="text-white"> That Bites. </span>
            <span className="text-[#C8FF00]">Words</span>
            <span className="text-white"> That Blast.</span>
            <br />
            <span className="text-[#C8FF00]">Posters</span><span className="text-white"> That Refuse To Behave.</span>
          </div>

          <div className="animate-fade-in-up animation-delay-300">
            <p className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-widest leading-relaxed text-left text-[#ccc6b7] max-w-xl font-bold">
              WHERE AI-GENERATED IMAGERY COLLIDES WITH HAND-CRAFTED,{" "}
              <span className="text-[#C8FF00]">SARCASTIC WORDPLAY</span>{" "}
              <span className="tracking-[1.4px]">
                RADICALLY ROOTED IN{" "}
                <span className="text-[#C8FF00]">FRENCH ABSURDISM</span>, AND THAT DISTINCTLY FRENCH
                REFUSAL TO TAKE SERIOUSNESS SERIOUSLY.{" "}
              </span>
              SOCIETY DISSECTED THROUGH{" "}
              <span className="text-[#C8FF00]">SLOW-BOILING PUNS</span>,{" "}
              <span className="text-[#C8FF00]">PHONETIC CHAOS</span>,
              AND{" "}
              <span className="text-[#C8FF00]">VISUAL DYSTOPIA</span>.
            </p>
            <div className="mt-4">
              <span className="font-[family-name:var(--font-space-grotesk)] text-sm tracking-widest text-[#ccc6b7] font-bold">
                FROM PARIS, WITH A LAUGH!
              </span>
            </div>
          </div>

          <div className="mt-8 animate-fade-in-up animation-delay-400">
            <Link
              href="/collection"
              className="bg-[#C8FF00] text-[#273500] font-[family-name:var(--font-space-mono)] uppercase tracking-widest px-6 md:px-8 text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 group py-2.5 font-bold"
            >
              Browse the Collection
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

      </div>

      <div className="w-full mt-8 md:mt-12">
        <Image
          src="/images/divers/squelette-tarpe.webp"
          alt="Tarpe Diem Skeleton"
          width={1200}
          height={600}
          className="w-full h-auto block"
          priority
        />
      </div>

      {/* Bottom Ticker */}
      <div className="w-full bg-[#C8FF00] text-[#131313] uppercase font-[family-name:var(--font-space-mono)] text-xs py-2 whitespace-nowrap overflow-hidden flex items-center mt-8 md:mt-0">
        <div className="animate-marquee flex gap-8">
          <span>When pixels in distress start speaking for drifting wor(l)ds /// TARPE DIEM /// S'IL VOUS BLED /// DRIFTED DREAMS /// DYSTOPICS /// HOT PUNS /// POSTERS THAT REFUSE TO BEHAVE</span>
          <span>When pixels in distress start speaking for drifting wor(l)ds /// TARPE DIEM /// S'IL VOUS BLED /// DRIFTED DREAMS /// DYSTOPICS /// HOT PUNS /// POSTERS THAT REFUSE TO BEHAVE</span>
        </div>
      </div>
    </section>
    </>
  );
}
