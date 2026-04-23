import Link from "next/link";

const footerLinks = [
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Shipping Policy" },
  { href: "#", label: "Instagram" },
  { href: "#", label: "TikTok" },
  { href: "#", label: "YouTube" },
  { href: "#", label: "Blog" },
  { href: "#", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="w-full px-6 md:px-10 py-16 md:py-20 bg-[#0e0e0e] shadow-none">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex-1 flex justify-start">
          <Link
            href="/"
            className="heading-style text-xl tracking-tighter"
          >
            <span className="text-white">Encre</span>
            <span className="text-[#C8FF00]">Acide</span>
          </Link>
        </div>

        <div className="flex-[2] flex flex-wrap justify-center gap-4 md:gap-6">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider hover:text-[#C8FF00] transition-colors cursor-crosshair text-[#E9E2D3] uppercase"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex-1 flex justify-end text-right">
          <div className="flex flex-col items-end gap-1">
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-tight text-zinc-500">
              ©2026 ENCRE ACIDE
            </p>
            <p className="font-[family-name:var(--font-space-grotesk)] text-xs uppercase tracking-tight text-zinc-500">
              ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
