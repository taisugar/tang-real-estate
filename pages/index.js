import { HomeBanner } from "@/components/common/Banner";
import { Layout } from "@/components/common/Layout";
import { CountSection } from "@/components/widgets/CountSection";
import { IntroSection } from "@/components/widgets/IntroSection";
import { OurBestHomeSection } from "@/components/widgets/OurBestHomeSection";
import { LayoutValueSection } from "@/components/widgets/LayoutValueSection";
import { OverviewSection } from "@/components/widgets/OverviewSection";
import { TestimonialSection } from "@/components/widgets/TestimonialSection";

import { ScrollToTopComponent } from "@/components/common/ScrollToTop";
import { AOSPluginsComponent } from "@/components/plugins/AOS.Plugins";

import "animate.css/animate.min.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "photoswipe/style.css";

export default function Home() {
  return (
    <Layout>
      <div className="main-wrapper relative z-10">
        <HomeBanner />
        <IntroSection />
        <CountSection />
        <OverviewSection />
        <LayoutValueSection />

        <hr className="mx-[80px]" />
        <OurBestHomeSection />
        <TestimonialSection />
      </div>
      <AOSPluginsComponent />
      <ScrollToTopComponent />
    </Layout>
  );
}
