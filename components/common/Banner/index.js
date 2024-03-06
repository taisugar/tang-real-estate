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
      <div className="relative aspect-video">
        <div className="z-[-1]">
          <video
            className="object-cover pointer-events-none"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="videos/hero-banner.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <button
        type="button"
        className="scroll-down top-[calc(100vh-220px)] lg:top-[calc(100vh-240px)]"
        onClick={handleClickScroll}
      >
        <div className="chevron"></div>
        <div className="chevron"></div>
        <div className="chevron"></div>
        <span className="text">Scroll down</span>
      </button>
      <SliderSection />
    </section>
  );
};
