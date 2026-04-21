"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Heart, Share2, Fullscreen } from "lucide-react";
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
  const [selectedSize, setSelectedSize] = useState("50x70");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(slug, product.series);

  const sizes = [
    { id: "30x40", label: "30 x 40 cm", price: 25 },
    { id: "50x70", label: "50 x 70 cm", price: 35 },
    { id: "70x100", label: "70 x 100 cm", price: 55 },
  ];

  const currentPrice = sizes.find((s) => s.id === selectedSize)?.price || product.price;

  return (
    <SiteLayout
      marqueeText="190G/M² MATTE PAPER /// ARCHIVAL QUALITY /// FAST SHIPPING FRANCE 2-7 DAYS /// WORLDWIDE SHIPPING ///"
    >
      <main className="flex-grow w-full mx-auto px-6 md:px-10 py-8 md:py-12 flex flex-col md:flex-row gap-8 md:gap-12 relative overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col gap-6 relative">
          <div className="relative w-full max-w-3xl aspect-[5/7] mx-auto">
            <ProductImage
              src={product.image}
              alt={product.title}
              fill
              className="object-contain transition-all duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <div className="w-full max-w-3xl mx-auto flex justify-between items-center border-b border-[#E4E4CC]/20 pb-4 mt-2">
            <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#E4E4CC] tracking-widest uppercase">
              VIEW IN ROOM
            </span>
            <button className="text-[#E4E4CC] hover:text-[#C8FF00] transition-colors">
              <Fullscreen className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-4 md:mt-8 flex flex-col gap-4 w-full">
            <h3 className="heading-style text-xl md:text-2xl tracking-tighter">
              <span className="text-[#C8FF00]">More from</span>{" "}
              <span className="text-white">{product.series === "tarpe-diem" ? "Tarpe Diem" : "S\u0026apos;il Vous Bled"}</span>
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
                      className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      sizes="160px"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col gap-6 md:gap-8 animate-fade-in-up">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#C8FF00] uppercase tracking-widest">
                {product.series === "tarpe-diem" ? "Tarpe Diem" : "S\u0026apos;il Vous Bled"}
              </span>
              <span className="text-[#555]">/</span>
              <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] uppercase tracking-widest">
                {product.isNew ? "NEW" : "PRINT"}
              </span>
            </div>

            <h1 className="heading-style text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              {product.title}
            </h1>

            <p className="font-[family-name:var(--font-space-mono)] text-sm text-[#ccc6b7] leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="flex flex-col gap-3">
              <span className="font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-widest text-white">
                Select Size
              </span>
              <div className="flex flex-wrap gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    className={cn(
                      "px-4 py-2 font-[family-name:var(--font-space-mono)] text-xs uppercase tracking-wider transition-colors",
                      selectedSize === size.id
                        ? "bg-[#C8FF00] text-black"
                        : "bg-transparent text-[#ccc6b7] border border-[#434933] hover:border-[#C8FF00] hover:text-[#C8FF00]"
                    )}
                  >
                    {size.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-baseline gap-2 mt-4">
              <span className="heading-style text-3xl md:text-4xl text-[#C8FF00]">
                €{currentPrice}
              </span>
              <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#555] uppercase">
                incl. VAT
              </span>
            </div>

            <div className="flex flex-wrap gap-3 md:gap-4 mt-4">
              <div className="flex items-center border border-[#434933]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-3 text-white hover:text-[#C8FF00] transition-colors font-bold"
                >
                  -
                </button>
                <span className="px-4 py-3 font-[family-name:var(--font-space-mono)] text-sm text-white min-w-[3rem] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-3 text-white hover:text-[#C8FF00] transition-colors font-bold"
                >
                  +
                </button>
              </div>

              <button className="flex-1 min-w-[200px] bg-[#C8FF00] text-black font-[family-name:var(--font-space-mono)] uppercase tracking-widest text-sm hover:bg-white transition-colors py-3 px-6 inline-flex items-center justify-center gap-2 group">
                Add to Cart
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setIsFavorite(!isFavorite)}
                className="p-3 border border-[#434933] hover:border-[#C8FF00] transition-colors"
              >
                <Heart
                  className={cn(
                    "w-5 h-5",
                    isFavorite ? "text-[#C8FF00] fill-[#C8FF00]" : "text-[#ccc6b7]"
                  )}
                />
              </button>

              <button className="p-3 border border-[#434933] hover:border-[#C8FF00] transition-colors">
                <Share2 className="w-5 h-5 text-[#ccc6b7]" />
              </button>
            </div>

            <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-[#434933] space-y-3">
              <div className="flex justify-between">
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#555] uppercase tracking-wider">
                  Paper
                </span>
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] uppercase tracking-wider">
                  {product.paper}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#555] uppercase tracking-wider">
                  Print Type
                </span>
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] uppercase tracking-wider">
                  Giclée Museum Quality
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#555] uppercase tracking-wider">
                  Shipping
                </span>
                <span className="font-[family-name:var(--font-space-mono)] text-xs text-[#ccc6b7] uppercase tracking-wider">
                  France 2-7 days / Worldwide
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
