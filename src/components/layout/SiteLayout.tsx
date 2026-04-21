import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MarqueeBar } from "./Marquee";

interface SiteLayoutProps {
  children: React.ReactNode;
  marqueeText?: string;
  showMarquee?: boolean;
}

export function SiteLayout({
  children,
  marqueeText = "DARK HUMOR /// VISUAL POETRY /// COLLECTIVE HYPNOSIS /// INTIMATE FANTASY /// SENSORY PLEASURE /// DYSTOPIAN REALITIES /// CORRUPTED MEANINGS ///",
  showMarquee = true,
}: SiteLayoutProps) {
  return (
    <>
      <Navbar />
      <div className="pt-[72px] md:pt-[80px]">{children}</div>
      {showMarquee && (
        <div className="w-full bg-[#C8FF00] text-[#0e0e0e] py-2">
          <MarqueeBar text={marqueeText} speed={30} />
        </div>
      )}
      <Footer />
    </>
  );
}
