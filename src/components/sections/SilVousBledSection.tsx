"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { products } from "@/lib/data";

const silVousBledProducts = products
  .filter((p) => p.series === "sil-vous-bled")
  .slice(0, 8);

export function SilVousBledSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-[#F6F4ED]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-7 order-2 lg:order-1 animate-fade-in-left">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {silVousBledProducts.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[5/7] bg-[#e8e5dc] relative overflow-hidden border border-[#ddd8cc]">
                    {product.isNew && (
                      <div className="absolute top-0 right-0 z-20 bg-[#C8FF00] text-black text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                        NEW
                      </div>
                    )}
                    <SafeImage
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105 z-10 relative"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                      <span className="text-center font-[family-name:var(--font-space-mono)] font-bold text-xs tracking-widest text-[#8A8578]/60 uppercase px-2">
                        {product.title}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href="/collection?series=sil-vous-bled"
                className="group cursor-pointer"
              >
                <span className="font-[family-name:var(--font-space-mono)] font-bold text-sm tracking-widest text-[#3f3f46] uppercase">
                  + {products.filter((p) => p.series === "sil-vous-bled").length - 8} MORE
                </span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-start order-1 lg:order-2 animate-fade-in-right animation-delay-200">
            <h2 className="heading-style text-4xl md:text-6xl lg:text-7xl text-[#131313] mb-6 md:mb-8">
              S&apos;il Vous Bled
            </h2>
            <p className="font-[family-name:var(--font-space-mono)] text-[#3f3f46] text-sm md:text-base leading-relaxed mb-6 md:mb-8 normal-case">
              Drifting dreams living inside a joyful creative mess, steeped in
              warm Mediterranean poetic slang, floating over the Miscellanean Sea
              of human minds, and echoing French and Arabic lives through
              deliberate dyslexia and dystophonic signs.
            </p>
            <Link
              href="/collection?series=sil-vous-bled"
              className="bg-[#C8FF00] text-[#273500] font-[family-name:var(--font-space-mono)] uppercase tracking-widest px-6 md:px-8 text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 group self-start py-2.5 font-bold"
            >
              BROWSE MORE PRINTS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-8 md:mt-12 w-full animate-fade-in-up animation-delay-300">
          <p className="font-[family-name:var(--font-space-mono)] text-sm md:text-base text-[#3f3f46] leading-relaxed normal-case">
            Embracing the glitch as a feature and linguistic chaos as an
            opportunity, these works turn words into jokes and treat language as
            something living, unstable, and breakable. Pure wit smashing
            boundaries and colliding, gently but firmly, with cultural hybridity.
            Who gets to define what language and identity even mean?
          </p>
        </div>
      </div>
    </section>
  );
}
