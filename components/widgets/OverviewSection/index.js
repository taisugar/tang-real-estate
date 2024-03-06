import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";
import Link from "next/link";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import { useEffect } from "react";

export const OverviewSection = () => {
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
    <section id="overview" className="-my-[32px] py-[32px]">
      <LayoutSection className="bg-white-50">
        <ContentSection
          badgeContent="Tổng Quan"
          title={
            <p data-aos="zoom-in">
              VỊ TRÍ DỰ ÁN
              <span className="text-primary"> EATON PARK</span>
            </p>
          }
          content={
            <div data-aos="zoom-in">
              <p>
                <em>
                  <strong>Dự án Eaton Park</strong>
                </em>{" "}
                tọa lạc ngay mặt tiền đường Mai Chí Thọ, phường An Phú, Thành
                phố Thủ Đức, TP.HCM. (Quận 2 cũ). Tiếp giáp với khu quy hoạch
                của <strong>Khu Liên Hợp Thể Thao Rạch Chiếc</strong>, đối diện
                với các khu căn hộ cao cấp:{" "}
                <strong>Lexington, Imperia, Estella Heights,...</strong> Được
                đánh giá là một trong những vị trí “vàng” còn sót lại ngay tại
                trung tâm Quận 2. Với vị trí đắc địa, kết nối giao thông thuận
                tiện.
              </p>
            </div>
          }
        />
        <div className="relative aspect-[1280/800]" data-aos="zoom-in">
          <div className="pswp-gallery " id="eaton-park-map-1">
            <Link
              href="/images/eaton-park-map-1.webp"
              data-pswp-width={2240}
              data-pswp-height={1640}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                src="/images/eaton-park-map.webp"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="eaton-park-map"
                className="rounded-lg overflow-hidden"
              />
            </Link>
            <Image
              className="absolute left-[63.5%] bottom-[55%] w-12 h-6 md:w-24 md:h-12 lg:w-36 lg:h-20 animate__animated animate__bounce animate__infinite"
              src="/icons/pin.svg"
              width="88"
              height="88"
              alt="icon-pin"
            />
          </div>
        </div>
      </LayoutSection>
    </section>
  );
};
