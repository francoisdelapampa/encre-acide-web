"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, User, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/collection", label: "The Collection" },
  { href: "/artist", label: "The Artist" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] flex flex-col bg-[#0e0e0e] font-[family-name:var(--font-space-grotesk)] uppercase tracking-widest font-bold">
      <div className="w-full flex justify-between items-center px-6 md:px-10 py-5 md:py-6">
        {/* Logo */}
        <Link
          href="/"
          className="heading-style tracking-tighter flex-1 flex items-center capitalize text-xl"
        >
          <span className="text-white">Encre</span>
          <span className="text-[#C8FF00]">Acide</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center flex-none justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "font-medium transition-all duration-75 cursor-crosshair px-2 py-1",
                pathname === link.href
                  ? "text-[#C8FF00] font-black underline decoration-4 underline-offset-8 active:bg-[#C8FF00] active:text-black"
                  : "text-stone-300 hover:text-[#C8FF00] hover:bg-zinc-900/50 active:bg-[#C8FF00] active:text-black"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4 md:gap-6 flex-1 justify-end text-stone-300">
          <Link
            href="/collection"
            className="hidden md:inline-flex bg-[#C8FF00] text-black font-bold px-6 py-2 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition-colors"
          >
            SHOP
          </Link>
          <button className="relative hover:text-[#C8FF00] transition-all duration-75 cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
          </button>
          <button className="hidden md:block hover:text-[#C8FF00] transition-all duration-75 cursor-pointer">
            <User className="w-6 h-6" />
          </button>
          <button
            className="md:hidden hover:text-[#C8FF00] transition-all duration-75 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0e0e0e] border-t border-[#1c1b1b] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={cn(
                "text-lg font-medium transition-all duration-75 py-2",
                pathname === link.href
                  ? "text-[#C8FF00] font-black"
                  : "text-stone-300 hover:text-[#C8FF00]"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/collection"
            onClick={() => setMobileOpen(false)}
            className="bg-[#C8FF00] text-black font-bold px-6 py-3 text-sm tracking-widest uppercase text-center mt-2"
          >
            Shop
          </Link>
        </div>
      )}
    </nav>
  );
}
