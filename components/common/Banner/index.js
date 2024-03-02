import { SliderSection } from "@/components/widgets/SliderSection";
import Image from "next/image";

export const HomeBanner = () => {
  const handleClickScroll = () => {
    const element = document.getElementById("intro");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative">
      <div className="relative w-screen h-[calc(100vh-100px)] md:h-h-[calc(100vh-120px)] lg:h-[calc(100vh-130px)]">
        <div className="z-[-1]">
          <Image
            priority
            src={"/images/hero-banner.webp"}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="hero-image"
          />
        </div>
        <div className="relative flex justify-center items-center">
          <div className="w-1/2 h-full" />
          <div className="w-1/2 h-full text-center pt-[80px] md:pt-[100px] lg:pt-[200px] font-semibold pl-20">
            {/* <div className="bg-hero-banner py-14 px-6 rounded-2xl flex flex-col justify-center items-center w-2/3">
              <p className="text-xl lg:text-7xl">EATON PARK</p>
              <p className="text-sm lg:text-3xl text-red-800 font-bold">
                <strong>GAMUDA</strong>{" "}
                <span className="font-normal">LAND</span>
              </p>
              <hr className="w-20 border-b-2 border-[#b77a50] my-5 rounded-full" />
              <p className="text-lg">CHÍNH THỨC NHẬN BOOKING (THÁP A5 & A6)</p>
              <div className="flex items-center my-2">
                <h2 className="text-5xl font-black mr-1">100</h2>
                <p className="text-[12px] flex flex-col items-start leading-4">
                  <span>TRIỆU</span>
                  <span>SUẤT CĂN HỘ</span>
                </p>
              </div>
              <div className="flex justify-center items-center divide-x-2 w-full text-white divide-white">
                <div className="px-10">
                  <p>HỖ TRỢ</p>
                  <p>LÃI SUẤT</p>
                </div>
                <div className="px-10">
                  <p>THANH TOÁN</p>
                  <p>30% NHẬN NHÀ</p>
                </div>
                <div className="px-10">
                  <p>ÂN HẠN</p>
                  <p>24 THÁNG</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="relative w-full h-[180px] mt-6">
          <Image
            priority
            src={"/images/hero-banner-board.webp"}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="hero-image banner board"
          />
        </div> */}
        {/* <div className="relative flex justify-center items-center h-[180px] mt-6 bg-primary-100">
          <div className="text-center">
            <h2 className="text-primary text-3xl font-black">EATON PARK</h2>
            <p>(Giai đoạn 1)</p>
          </div>
          <div className="flex justify-center items-center">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div> */}
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
