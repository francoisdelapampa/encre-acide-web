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
      marqueeText="/// ACID BRUTALISM /// CORROSIVE NETWORK /// DRIFTING WOR(L)DS /// TARPE DIEM /// S'IL VOUS BLED /// VISUAL ABSURDITY ///"
    >
      <HeroSection />
      <TarpeDiemSection />
      <SilVousBledSection />
      <ProcessSection />
      <CTASection />
      <ArtistTeaserSection />
    </SiteLayout>
  );
}
