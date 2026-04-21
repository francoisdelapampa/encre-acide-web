"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SafeImage } from "@/components/ui/SafeImage";
import { products } from "@/lib/data";

const tarpeDiemProducts = products
  .filter((p) => p.series === "tarpe-diem")
  .slice(0, 8);

export function TarpeDiemSection() {
  return (
    <section className="py-20 md:py-32 px-6 md:px-10 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
          <div className="lg:col-span-5 flex flex-col justify-start animate-fade-in-left">
            <h2 className="heading-style text-4xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8">
              Tarpe Diem
            </h2>
            <p className="font-[family-name:var(--font-space-mono)] text-[#E9E2D3] text-sm md:text-base leading-relaxed mb-6 md:mb-8 normal-case">
              Tarpe Diem is not a single statement. It is a collection of
              original artworks in which image and language derail together. A
              series of snapshots from an unraveling, wavering, and deeply
              complex society.
            </p>
            <Link
              href="/collection?series=tarpe-diem"
              className="bg-[#C8FF00] text-[#273500] font-[family-name:var(--font-space-mono)] uppercase tracking-widest px-6 md:px-8 text-sm hover:bg-white hover:text-black transition-colors inline-flex items-center gap-2 group self-start py-2.5"
            >
              BROWSE TARPE DIEM PRINTS
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="lg:col-span-7 animate-fade-in-right animation-delay-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
              {tarpeDiemProducts.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product.id}
                  className="group cursor-pointer"
                >
                  <div className="aspect-[5/7] bg-[#1a1a1a] relative overflow-hidden">
                    {product.isNew && (
                      <div className="absolute top-0 right-0 z-20 bg-[#C8FF00] text-black text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                        NEW
                      </div>
                    )}
                    <SafeImage
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </Link>
              ))}
              <Link
                href="/collection?series=tarpe-diem"
                className="group cursor-pointer flex flex-col gap-3"
              >
                <div className="aspect-[5/7] bg-[#1a1a1a] relative overflow-hidden flex items-center justify-center">
                  <span className="text-center font-[family-name:var(--font-space-mono)] font-bold text-base md:text-lg tracking-widest text-[#C8FF00]">
                    + {products.filter((p) => p.series === "tarpe-diem").length - 8} MORE
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 md:mt-16 w-full animate-fade-in-up animation-delay-300">
          <p className="font-[family-name:var(--font-space-mono)] text-sm md:text-base text-[#E9E2D3] leading-relaxed normal-case max-w-4xl">
            Here, surreal, fragmented, and intentionally unsettling visuals meet
            layered wordplay, homophonic distortions, and lexical sabotage. By
            reframing absurdism as a form of linguistic investigation, these
            works turn life into comedy precisely when the absurd becomes policy,
            while mirroring the emotional vertigo of our battered modern lives.
          </p>
        </div>
      </div>
    </section>
  );
}
