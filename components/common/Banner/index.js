import { SliderSection } from "@/components/widgets/SliderSection";

export const HomeBanner = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div className="z-[-1]">
        <video
          className="object-cover pointer-events-none aspect-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos/hero-banner.webm" type="video/mp4" />
        </video>
      </div>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 md:bottom-52 lg:bottom-60 z-10">
        <button
          type="button"
          className="scroll-down"
          onClick={handleClickScroll}
        >
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <span className="text">Scroll down</span>
        </button>
      </div>
      <SliderSection />
    </section>
  );
};
