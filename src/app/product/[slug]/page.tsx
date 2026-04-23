"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { getProductBySlug, getRelatedProducts } from "@/lib/data";
import { cn } from "@/lib/utils";
import React from "react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

function ProductImage({ src, alt, className, fill, width, height, sizes, priority }: {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={cn("bg-[#1a1a1a] flex items-center justify-center border border-[#333]", className)}
        style={fill ? undefined : { width: width || "100%", height: height || "100%" }}
      >
        <span className="text-[#555] font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-widest text-center px-4">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
    />
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = React.use(params);
  const product = getProductBySlug(slug);
  const [selectedFormat, setSelectedFormat] = useState("standard");
  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug, product.series);

  const formats = [
    { id: "standard", label: "STANDARD (A3) — 30 x 42 CM", price: 35 },
    { id: "large", label: "LARGE FORMAT — 50 x 70 CM", price: 65 },
  ];

  return (
    <SiteLayout
      marqueeText="WORLDWIDE SHIPPING AVAILABLE /// MUSEUM QUALITY PRINTS /// ARCHIVAL PAPER /// FAST SHIPPING FRANCE 2-7 DAYS"
    >
      <main className="flex-grow w-full mx-auto px-6 md:px-10 py-8 md:py-12 flex flex-col gap-8 md:gap-12 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full">
          {/* Image Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 relative">
            <div className="relative w-full max-w-md lg:max-w-lg aspect-[5/7] mx-auto">
              <ProductImage
                src={product.image}
                alt={product.title}
                fill
                className="object-contain transition-all duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>

          {/* Details Column */}
          <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 animate-fade-in-up">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#C8FF00] uppercase tracking-widest">
                  {product.series === "tarpe-diem" ? "Tarpe Diem" : "S'il Vous Bled"}
                </span>
                <span className="text-[#555]">/</span>
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] uppercase tracking-widest">
                  PRINT
                </span>
              </div>

              <h1 className="heading-style text-3xl md:text-4xl lg:text-5xl text-white mb-4">
                {product.title}
              </h1>

              <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#ccc6b7] leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Format Selector */}
              <div className="flex flex-col gap-3">
                <span className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-widest text-white">
                  SELECT FORMAT
                </span>
                <div className="flex flex-col gap-3">
                  {formats.map((format) => (
                    <button
                      key={format.id}
                      onClick={() => setSelectedFormat(format.id)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-wider transition-colors border",
                        selectedFormat === format.id
                          ? "bg-[#C8FF00] text-black border-[#C8FF00]"
                          : "bg-transparent text-white border-[#ccc6b7] hover:border-[#C8FF00] hover:text-[#C8FF00]"
                      )}
                    >
                      <span>{format.label}</span>
                      <span>€{format.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart */}
              <button className="w-full mt-4 bg-[#C8FF00] text-black font-[family-name:var(--font-space-mono)] uppercase tracking-widest text-sm hover:bg-white transition-colors py-3 px-6">
                ADD TO CART
              </button>

              {/* Technical Specifications */}
              <div className="mt-8 pt-6 border-t border-[#C8FF00]">
                <h3 className="font-[family-name:var(--font-space-mono)] text-xs text-[#C8FF00] uppercase tracking-widest mb-4">
                  TECHNICAL SPECIFICATIONS
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-white uppercase tracking-wider">
                      PAPER QUALITY
                    </span>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] mt-1">
                      Premium matte paper 190g/m², acid-free.
                    </span>
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-white uppercase tracking-wider">
                      DURABILITY
                    </span>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] mt-1">
                      Archival print — stable colors 50-100 years.
                    </span>
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-white uppercase tracking-wider">
                      SHIPPING
                    </span>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] mt-1">
                      Printed to order. Shipped rolled in a rigid protective tube.
                    </span>
                  </div>
                  <div>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-white uppercase tracking-wider">
                      DELIVERY TIMES
                    </span>
                    <span className="block font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] mt-1">
                      France: 2-5d / Europe: 3-7d / World: 5-8d.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-4 md:mt-8 flex flex-col gap-4 w-full">
          <h3 className="heading-style text-xs md:text-sm tracking-tighter">
            <span className="text-[#C8FF00]">More from</span>{" "}
            <span className="text-white">{product.series === "tarpe-diem" ? "Tarpe Diem" : "S'il Vous Bled"}</span>
          </h3>
          <div className="w-full overflow-x-auto no-scrollbar pb-4 flex gap-3 md:gap-4">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                href={`/product/${related.slug}`}
                className="w-28 md:w-40 flex-none group cursor-crosshair"
              >
                <div className="aspect-[5/7] bg-[#1a1a1a] relative overflow-hidden">
                  <ProductImage
                    src={related.image}
                    alt={related.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="160px"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
