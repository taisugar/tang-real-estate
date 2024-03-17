import Image from "next/image";

export const CountSection = () => {
  return (
    <section>
      <div className="flex flex-wrap justify-evenly items-center gap-5 bg-[#F9F1E8] py-20">
        <div className="p-4 space-y-2" data-aos="fade-right">
          <h2 className="text-primary font-black text-5xl">1.968</h2>
          <p className="text-sm">CĂN HỘ</p>
        </div>
        <div
          className="p-4 space-y-2"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <h2 className="text-primary font-black text-5xl">12</h2>
          <p className="text-sm">CĂN PENTHOUSE</p>
        </div>
        <div
          className="p-4 space-y-2"
          data-aos="fade-right"
          data-aos-delay="500"
        >
          <h2 className="text-primary font-black text-5xl">52</h2>
          <p className="text-sm">CĂN SHOP KHỐI ĐẾ</p>
        </div>
        <div
          className="p-4 space-y-2"
          data-aos="fade-right"
          data-aos-delay="700"
        >
          <h2 className="text-primary font-black text-5xl">20</h2>
          <p className="text-sm">CĂN SHOPHOUSE</p>
        </div>
      </div>
      <div className="relative aspect-video" data-aos="zoom-in">
        <Image
          src="/images/brochure-eaton-park-1.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="brochure-eaton-park-1"
          className=""
        />
      </div>
      <div className="relative aspect-video m-4 lg:m-16" data-aos="zoom-in">
        <Image
          src="/images/brochure-eaton-park-2.webp"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="brochure-eaton-park-2"
          className="rounded-xl shadow-lg"
        />
      </div>
    </section>
  );
};
