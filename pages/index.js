import { HomeBanner } from "@/components/common/Banner";
import { Layout } from "@/components/common/Layout";
import { CountSection } from "@/components/widgets/CountSection";
import { IntroSection } from "@/components/widgets/IntroSection";
import { LocationSection } from "@/components/widgets/LocationSection";
import { OurBestHomeSection } from "@/components/widgets/OurBestHomeSection";
import { OverviewSection } from "@/components/widgets/OverviewSection";
import { TestimonialSection } from "@/components/widgets/TestimonialSection";
import Head from "next/head";

import { ScrollToTopComponent } from "@/components/common/ScrollToTop";
import { AOSPluginsComponent } from "@/components/plugins/AOS.Plugins";

import "animate.css/animate.min.css";
import "photoswipe/style.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Tang Realty Saigon</title>
        <meta property="og:title" content="Tang Realty Saigon" />
        <meta
          name="description"
          content="Giới Thiệu Về Dự Án Eaton Park"
          key="desc"
        />
        <meta
          property="og:description"
          content="And a social description for our cool page"
        />
        <meta property="og:image" content="/images/overview/1.webp" />
      </Head>
      <div className="main-wrapper relative z-10">
        <HomeBanner />
        <IntroSection />
        <CountSection />
        <OverviewSection />
        <LocationSection />

        <hr className="mx-[80px]" />
        <OurBestHomeSection />
        <TestimonialSection />
      </div>
      <AOSPluginsComponent />
      <ScrollToTopComponent />
    </Layout>
  );
}
