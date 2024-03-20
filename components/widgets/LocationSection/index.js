import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";
import Link from "next/link";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";

export const LocationSection = () => {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#eaton-park-map-1",
      mainClass: "pswp--custom-bg",
      children: "a",
      pswpModule: () => import("photoswipe")
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section id="location" className="-my-[32px] py-[32px]">
      <LayoutSection className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <div className="mt-4 order-2 lg:order-1">
            <div className="flex justify-center flex-wrap gap-4">
              <div className="relative w-full h-full aspect-video md:aspect-auto">
                <div className="bg-primary absolute w-24 h-14 md:w-32 left-[-30px]  bottom-[-20px] md:h-16 lg:w-44 lg:h-28  md:left-[-20px] md:bottom-[-20px]" />
                <div
                  className="relative lg:aspect-video w-auto h-60 rounded-xl overflow-hidden shadow-lg"
                  data-aos="fade-right"
                >
                  <Image
                    alt="location-Eaton-Park"
                    layout="fill"
                    objectFit="cover"
                    src="/images/location-Eaton-Park-1.webp"
                  />
                </div>
              </div>

              <div
                className="aspect-video relative w-full lg:w-auto h-60 rounded-xl overflow-hidden mb-4 shadow-lg"
                data-aos="fade-left"
              >
                <Image
                  alt="location-Eaton-Park"
                  layout="fill"
                  objectFit="cover"
                  src="/images/location-Eaton-Park-2.webp"
                />
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <ContentSection
              vertical
              badgeContent="VỊ TRÍ"
              title={
                <p data-aos="zoom-in">
                  VỊ TRÍ DỰ ÁN
                  <span className="text-primary"> EATON PARK</span>
                </p>
              }
              // buttonContent="get started free"
              content={
                <div data-aos="zoom-in">
                  <p>
                    <em>
                      <strong>Dự án Eaton Park</strong>
                    </em>{" "}
                    tọa lạc ngay mặt tiền đường Mai Chí Thọ, phường An Phú,
                    Thành phố Thủ Đức, TP.HCM. (Quận 2 cũ). Tiếp giáp với khu
                    quy hoạch của{" "}
                    <strong>Khu Liên Hợp Thể Thao Rạch Chiếc</strong>, đối diện
                    với các khu căn hộ cao cấp:{" "}
                    <strong>Lexington, Imperia, Estella Heights,...</strong>{" "}
                    Được đánh giá là một trong những vị trí “vàng” còn sót lại
                    ngay tại trung tâm Quận 2. Với vị trí đắc địa, kết nối giao
                    thông thuận tiện.
                  </p>
                </div>
              }
            />
          </div>
        </div>

        <div
          id="eaton-park-map-1"
          className="relative aspect-square md:aspect-video shadow-lg hover-effect"
          data-aos="zoom-in"
        >
          <Link
            href="/images/location/vision-eatonpark.webp"
            data-pswp-width={1920}
            data-pswp-height={915}
            rel="noreferrer"
          >
            <Image
              src="/images/location/vision-eatonpark.webp"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="eaton-park-vison"
              className="rounded-lg overflow-hidden"
            />
          </Link>
          <Link
            href="/images/location/thuc-te-eaton-park.webp"
            data-pswp-width={1597}
            data-pswp-height={900}
            rel="noreferrer"
          />
          <Link
            href="/images/location/eaton-park-map-1.webp"
            data-pswp-width={2240}
            data-pswp-height={1640}
            rel="noreferrer"
          />
          <Link
            href="/images/location/klhtt-rachchiec.webp"
            data-pswp-width={924}
            data-pswp-height={1193}
            rel="noreferrer"
          />
          <Image
            className="absolute left-[50%] bottom-[28%] w-12 h-6 md:w-24 md:h-12 lg:w-36 lg:h-20 animate__animated animate__bounce animate__infinite pointer-events-none"
            src="/icons/pin.svg"
            width="88"
            height="88"
            alt="icon-pin"
          />
        </div>
      </LayoutSection>
    </section>
  );
};
