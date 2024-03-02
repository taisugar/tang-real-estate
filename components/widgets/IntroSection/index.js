import { ContentSection } from "@/components/common/ContentSection";
import { LayoutSection } from "@/components/common/Layout/LayoutSection";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";

export const IntroSection = () => {
  const effectMouseMoveRef = useRef();

  const getTileX = (i, horizontalSplit, verticalSplit) => {
    const currentRow = Math.floor(i / horizontalSplit) + 1;
    const tileHeight = 100 / verticalSplit;
    return tileHeight * currentRow - tileHeight;
  };

  const getTileY = (i, horizontalSplit) => {
    const currentCol = (i % horizontalSplit) + 1;
    const tileWidth = 100 / horizontalSplit;
    return (100 / horizontalSplit) * currentCol - tileWidth;
  };

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    degreeX: 0,
    degreeY: 0
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { x, y, width, height } =
        effectMouseMoveRef.current.getBoundingClientRect();
      const centerPoint = { x: x + width / 2, y: y + height / 2 };

      setPosition({
        x: e.x / window.innerWidth - 0.5,
        y: e.y / window.innerHeight - 0.5,
        degreeX: (e.clientY - centerPoint.y) * 0.008,
        degreeY: (e.clientX - centerPoint.x) * -0.008
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section id="intro" className="-my-[32px] py-[32px]">
      <LayoutSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
          <div className="lg:pr-[120px]">
            <ContentSection
              vertical
              badgeContent="EATON PARK"
              title={
                <p data-aos="fade-right">
                  TUYỆT TÁC SANG TRỌNG
                  <br />
                  <span className="text-primary">Ngôi nhà mơ ước.</span>
                </p>
              }
              buttonContent={
                <p className="my-5 flex flex-col order-2" data-aos="flip-left">
                  <strong className="text-red-800 mb-1">
                    Xem 360 dự án Eaton Park
                  </strong>
                  <Link
                    className="btn text-white rounded-full whitespace-nowrap capitalize bg-[#F9F1E8] group"
                    href="https://eatonpark.com/360-eaton-park/"
                  >
                    <Image
                      className="group-hover:mix-blend-plus-lighter"
                      alt=""
                      width={88}
                      height={66}
                      src="/images/360-eaton-park.webp"
                    />
                  </Link>
                </p>
              }
              content={
                <div data-aos="zoom-in">
                  <p>
                    <em>
                      <strong>Dự án Eaton Park</strong>
                    </em>{" "}
                    là một khu phức hợp căn hộ cao cấp kết hợp không gian thương
                    mại dịch vụ và tiện ích giải trí đẳng cấp. Được đầu tư và
                    phát triển bởi <strong>Gamuda Land</strong> - Tập đoàn bất
                    động sản hàng đầu đến từ <strong>Malaysia</strong>.
                  </p>
                  <p>
                    Sự sang trọng không chỉ là việc trang trí không gian sống
                    với những nội thất cao cấp. Mà còn về việc cung cấp những
                    trải nghiệm tiện nghi, không gian sống tinh tế, an toàn và
                    riêng tư, đồng thời vẫn kết hợp hài hòa với thiên nhiên
                    trong lành.
                  </p>
                  <p>
                    Tại{" "}
                    <em>
                      <strong>Eaton Park</strong>
                    </em>
                    , quý cư dân sẽ được đắm chìm vào cuộc sống thiên nhiên,
                    sang trọng cùng hệ thống công viên xanh tươi mát. Đến với{" "}
                    <strong>Eaton Park</strong>, quý cư dân sẽ được hòa mình vào
                    thiên nhiên tận hưởng những giây phút an lành hạnh phúc bên
                    người thân và gia đình.
                  </p>
                  <p>
                    <strong>Gamuda Land</strong> không chỉ mang đến cơ hội an cư
                    tốt nhất mà còn đáp ứng được mọi yêu cầu của quý cư dân về
                    nhu cầu nhà ở và chất lượng vượt trội.
                  </p>
                  <br />
                  <p className="my-2">
                    <strong>
                      Dòng sản phẩm được mong chờ nhất thời điểm hiện nay, hội
                      tụ các giá trị gia tăng trương lai như:
                    </strong>
                  </p>
                  <ul className="list-disc list-inside">
                    <li>Sở hữu vị trí chiến lược</li>
                    <li>Hệ thống tiện ích đẳng cấp</li>
                    <li>Thiết kế đều là những trải nghiệm tinh tế</li>
                    <li>Không gian sống tuyệt vời...</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div
            className="h-full w-full mt-4"
            ref={effectMouseMoveRef}
            style={{
              transform: `perspective(1000px) rotateX(${position.degreeX}deg) rotateY(${position.degreeY}deg)`
            }}
            data-aos="zoom-in-up"
          >
            <Slider
              className="w-full"
              {...{
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 0,
                fade: true,
                fadeSpeed: 500,
                speed: 4000,
                slidesToShow: 1,
                slidesToScroll: 1
              }}
            >
              {[...Array(7).keys()].map((idx) => (
                <div
                  key={`overview-slide_${idx + 1}`}
                  className="overflow-hidden relative inline-block w-[50vw] h-[50vh]"
                >
                  <Image
                    src={`/images/overview/${idx + 1}.webp`}
                    layout="fill"
                    objectFit="cover"
                    alt={`solution-img ${idx + 1}`}
                  />
                  {[...Array(3).keys()].map((idx) => (
                    <div
                      key={`tile_${idx}`}
                      className="tile absolute inset-y-0 border-4 border-white"
                      style={{
                        width: `${100 / 3}%`,
                        height: `${100}%`,
                        top: `${getTileX(idx, 3, 1)}%`,
                        left: `${getTileY(idx, 3)}%`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </LayoutSection>
    </section>
  );
};
