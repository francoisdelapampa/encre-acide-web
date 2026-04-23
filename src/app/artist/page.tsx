"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { MarqueeBar } from "@/components/layout/Marquee";

export default function ArtistPage() {
  const [imgError, setImgError] = useState(false);

  return (
    <SiteLayout
      marqueeText="DARK HUMOR /// VISUAL POETRY /// COLLECTIVE HYPNOSIS /// INTIMATE FANTASY /// SENSORY PLEASURE /// DYSTOPIAN REALITIES /// CORRUPTED MEANINGS"
    >
      <div className="w-full bg-[#C8FF00] text-[#0e0e0e] py-2 mt-2.5">
        <MarqueeBar text="DARK HUMOR /// VISUAL POETRY /// COLLECTIVE HYPNOSIS /// INTIMATE FANTASY /// SENSORY PLEASURE /// DYSTOPIAN REALITIES /// CORRUPTED MEANINGS" speed={30} />
      </div>
      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 md:px-10 py-8 md:py-12 lg:py-16 flex flex-col gap-12 md:gap-24">
        <div className="flex flex-col justify-start space-y-6 md:space-y-8 max-w-4xl animate-fade-in-up">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-[5.5rem] leading-[0.85] md:leading-[0.8] break-words heading-style flex flex-col items-start">
              <span className="text-white">Fran&ccedil;ois</span>
              <span className="text-[#C8FF00]">de la Pampa</span>
            </h1>
            <p className="mt-4 md:mt-6 text-white heading-style leading-tight lowercase w-full text-lg md:text-2xl font-bold tracking-tighter text-left">
              <span className="text-white">fresh wordplay </span><br className="md:hidden" />
              <span className="text-white">from a </span>
              <span className="text-[#C8FF00]">french artist</span>
              <br />
              <span className="text-[#C8FF00]">who </span>
              <span className="text-[#C8FF00]">speaks in glitch</span>
            </p>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start animate-fade-in-up animation-delay-200">
          <div className="w-full lg:w-1/3">
            {imgError ? (
              <div className="w-full aspect-[5/7] bg-[#1a1a1a] flex items-center justify-center border border-[#333]">
                <span className="text-[#555] font-[family-name:var(--font-space-mono)] text-sm uppercase tracking-widest">
                  Fran&ccedil;ois de la Pampa
                </span>
              </div>
            ) : (
              <Image
                src="/images/artist/artist.jpg"
                alt="Fran\u00e7ois de la Pampa"
                width={500}
                height={700}
                className="w-full h-auto object-cover transition-all duration-500"
                onError={() => setImgError(true)}
              />
            )}
          </div>

          <div className="w-full lg:w-2/3 flex flex-col justify-start">
            <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#C8FF00] uppercase tracking-widest mb-4 md:mb-6">
              THE MIND BEHIND THE ACID
            </p>
            <div className="max-w-none text-[#E9E2D3] font-[family-name:var(--font-space-mono)] text-sm md:text-base leading-relaxed space-y-4 md:space-y-6">
              <p>
                Also known by his artist name Fran&ccedil;ois de la Pampa, Fran&ccedil;ois
                Guichard is a multifaceted visual artist. A Paris-based
                photographer turned satirical poster artist, he is also engaged
                in a broader visual and philosophical investigation into how
                contemporary dystopia manifests in human life.
              </p>
              <p>
                Through photography, writing, graphic design, and digital
                creation, he questions the human condition and its bruised
                relationship with the modern world. The absurdity of everyday
                life, shifting contemporary identities, dystopian realities, the
                limits of what is real, as well as transcendence and the search
                for the invisible, are among his recurring themes.
              </p>
              <p>
                An observer of reality and an explorer of consciousness, he
                shapes a kind of psycho-futurist, disruptive, dystopian circus
                filled with strange scenes, mystical atmospheres, psychedelic
                visions, and explosive juxtapositions, where hybrid beings and
                restless spirits roam freely.
              </p>
              <p>
                Balancing dark humor with visual poetry, collective hypnosis
                with intimate fantasy, his works invite contemplation,
                intellectual combat, sensory pleasure, introspection, and the
                dizzying sensation of a dialogue with the beyond.
              </p>
              <p>
                His series, conceived as counters of persistent questions, dream
                boxes, sanctuaries for thought, surfaces for projection,
                existential outlets, objects of pleasure, and windows onto
                elsewhere, grant viewers an unusual freedom: to wander, dream,
                confront, or lose themselves long before trying to decode his
                intent. In other words, they lower the risk of philosophical
                tinnitus and make room for a more direct, experiential encounter
                with the work.
              </p>
              <p>
                Acid-soaked photographer, dyslexic poet, ecstatic apostle of
                d&eacute;tournement, serial shouter, epileptic philosopher, soul
                trafficker, or eternal child clutching at eternity like a
                balloon, Fran&ccedil;ois Guichard is probably all of these at once.
              </p>
              <p className="text-[#C8FF00] font-bold mt-6 md:mt-8 border-l border-[#C8FF00] pl-4 md:pl-6 py-2">
                Constantly inventing new visual territories that both question
                and intoxicate, he is sketching out a living, generous body of
                work driven by the urgency to question existence, to explore its
                blurred zones, and to confront whatever stands too plainly
                before our eyes or too quietly within our hearts, with the
                conviction that art can still unsettle, inspire, and open cracks
                in the world.
              </p>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
