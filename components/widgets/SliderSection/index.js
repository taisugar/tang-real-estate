import Image from "next/image";

export const SliderSection = () => {
  return (
    <div className="h-[100px] md:h-[120px] lg:h-[130px] relative">
      <Image
        src={"/images/Eaton-Park.gif"}
        alt="Eaton Park slider"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
      />
    </div>
  );
};
