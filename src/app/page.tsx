import { SiteLayout } from "@/components/layout/SiteLayout";
import { HeroSection } from "@/components/sections/HeroSection";
import { TarpeDiemSection } from "@/components/sections/TarpeDiemSection";
import { SilVousBledSection } from "@/components/sections/SilVousBledSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CTASection } from "@/components/sections/CTASection";
import { ArtistTeaserSection } from "@/components/sections/ArtistTeaserSection";

export default function HomePage() {
  return (
    <SiteLayout
      marqueeText="ACID BRUTALISM /// CORROSIVE NETWORK /// DRIFTING WOR(L)DS /// TARPE DIEM /// S'IL VOUS BLED /// VISUAL ABSURDITY"
    >
      <HeroSection />
      <div className="relative z-10 w-full bg-[#C8FF00] text-[#131313] uppercase font-[family-name:var(--font-space-mono)] text-xs py-2 whitespace-nowrap overflow-hidden flex items-center">
        <div className="animate-marquee flex gap-8">
          <span>When pixels in distress start speaking for drifting wor(l)ds /// TARPE DIEM /// S'IL VOUS BLED /// DRIFTED DREAMS /// DYSTOPICS /// HOT PUNS /// POSTERS THAT REFUSE TO BEHAVE</span>
          <span>When pixels in distress start speaking for drifting wor(l)ds /// TARPE DIEM /// S'IL VOUS BLED /// DRIFTED DREAMS /// DYSTOPICS /// HOT PUNS /// POSTERS THAT REFUSE TO BEHAVE</span>
        </div>
      </div>
      <TarpeDiemSection />
      <SilVousBledSection />
      <ProcessSection />
      <CTASection />
      <div className="border-t-2 border-[#C8FF00]" />
      <ArtistTeaserSection />
    </SiteLayout>
  );
}
