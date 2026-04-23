"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { MarqueeBar } from "@/components/layout/Marquee";
import { SafeImage } from "@/components/ui/SafeImage";
import { products } from "@/lib/data";
import { cn } from "@/lib/utils";

type FilterType = "all" | "tarpe-diem" | "sil-vous-bled";

export default function CollectionPage() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const filteredProducts = useMemo(() => {
    if (activeFilter === "all") return products;
    return products.filter((p) => p.series === activeFilter);
  }, [activeFilter]);

  const tarpeDiemCount = products.filter((p) => p.series === "tarpe-diem").length;
  const silVousBledCount = products.filter((p) => p.series === "sil-vous-bled").length;

  return (
    <SiteLayout
      marqueeText="WORLDWIDE SHIPPING AVAILABLE /// MUSEUM QUALITY PRINTS /// ARCHIVAL PAPER /// FAST SHIPPING FRANCE 2-7 DAYS"
    >
      <div className="w-full bg-[#C8FF00] text-[#0e0e0e] py-2 mt-2.5">
        <MarqueeBar text="WORLDWIDE SHIPPING AVAILABLE /// MUSEUM QUALITY PRINTS /// ARCHIVAL PAPER /// FAST SHIPPING FRANCE 2-7 DAYS" speed={30} />
      </div>
      <main className="flex-grow px-6 md:px-10 pb-20 md:pb-32 pt-8 md:pt-12">
        <div className="animate-fade-in-up">
          <h1 className="heading-style leading-none tracking-tighter capitalize flex flex-col text-4xl md:text-6xl lg:text-8xl items-start">
            <span className="text-[#C8FF00]">Artworks</span>
            <span className="text-white">Collection</span>
          </h1>
        </div>

        <div className="mt-6 md:mt-8 mb-4 font-bold tracking-tighter heading-style text-lg md:text-2xl text-left lowercase">
          <span className="text-white">{products.length} </span>
          <span className="text-[#C8FF00]">satirical prints</span>
          <span className="text-white"> across </span>
          <span className="text-[#C8FF00]">two series</span>
        </div>

        <div className="mb-12 md:mb-24 flex flex-col gap-6 animate-fade-in-up animation-delay-200">
          <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-[#ccc6b7] tracking-widest leading-relaxed text-left font-bold max-w-3xl">
            A COLLECTION OF ARTWORKS THAT BREAKS OUT OF THE STANDARD FRAME AND
            SPREADS THROUGH A WORLD OF ALGORITHMIC SAMENESS. UNEXPECTED VISUAL
            WORKS COLLIDING WITH SHARP, <span className="whitespace-nowrap">HAND-CRAFTED</span>{" "}
            FRENCH SARCASTIC WORDPLAY.{" "}
            <span className="text-[#C8FF00]">POLITICAL AND CULTURAL SATIRE</span> WITH AN <span className="whitespace-nowrap">ANTI-ESTABLISHMENT</span> EDGE <span className="text-[#C8FF00]">FOR EDUCATED SKEPTICAL AUDIENCES, AND FLEXIBLE MINDS</span>. <span className="whitespace-nowrap">MUSEUM-QUALITY</span> GICLÉE PRINTS ON MATTE
            PAPER. SHIPS WORLDWIDE.
          </p>

          <div className="flex flex-wrap gap-3 md:gap-4 font-[family-name:var(--font-space-mono)] text-sm md:text-base uppercase tracking-wider justify-start">
            {([
              { key: "all", label: "ALL", count: products.length },
              { key: "tarpe-diem", label: "TARPE DIEM", count: tarpeDiemCount },
              { key: "sil-vous-bled", label: "S'IL VOUS BLED", count: silVousBledCount },
            ] as const).map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={cn(
                  "px-4 md:px-6 py-2 transition-colors",
                  activeFilter === filter.key
                    ? "bg-[#C8FF00] text-black"
                    : "bg-transparent text-[#C8FF00] border border-[#C8FF00] hover:bg-[#C8FF00]/10"
                )}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col gap-2 md:gap-3 group cursor-crosshair relative animate-fade-in"
            >
              <Link href={`/product/${product.slug}`}>
                <div className="aspect-[5/7] bg-[#1a1a1a] relative overflow-hidden">
                  {product.isNew && (
                    <div className="absolute top-0 left-0 z-20 bg-[#C8FF00] text-black text-[10px] font-bold px-2 py-1 tracking-widest uppercase">
                      NEW
                    </div>
                  )}
                  <SafeImage
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                  />
                </div>
              </Link>
              <div className="flex justify-between items-start font-[family-name:var(--font-space-mono)] text-xs md:text-sm uppercase">
                <span className="text-[#ccc6b7] truncate max-w-[70%]">{product.series === "tarpe-diem" ? "TARPE DIEM" : "S'IL VOUS BLED"}</span>
                <span className="text-[#C8FF00]">€{product.price}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 md:mt-24 w-full max-w-2xl mx-auto animate-fade-in-up">
          <p className="font-[family-name:var(--font-space-mono)] text-sm md:text-base leading-relaxed text-center text-[#E9E2D3] normal-case">
            This series belongs to a larger body of work in which the artist explores how contemporary dystopia reveals itself through visual distortion, technological anxiety, and linguistic corruption. On walls, these images resist the speed of the feed. They ask for a pause, a second glance, a pun reread, and the recognition that satire may be the last honest art form.
          </p>
        </div>
      </main>
    </SiteLayout>
  );
}
