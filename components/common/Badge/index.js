import { spaceGrotesk } from "@/pages/_app";
import Image from "next/image";

export const Badge = ({ content, vertical }) => {
  return (
    <div
      className={`${
        vertical ? "flex" : "inline-flex"
      } ml-4 mb-[26px] justify-start lg:justify-normal`}
      data-aos="zoom-in-down"
    >
      <Image
        className="sm:hidden md:hidden lg:block"
        src="/icons/icon-arrow.svg"
        width="19"
        height="19"
        alt="icon-arrow"
      />
      <Image
        className="sm:block md:block lg:hidden"
        src="/icons/icon-arrow.svg"
        width="14"
        height="14"
        alt="icon-arrow"
      />
      <p
        className={`${spaceGrotesk.className} pl-2 lg:pl-6 uppercase text-lg font-bold lg:text-2xl lg:tracking-[3px] text-[#b77a50]`}
      >
        {content}
      </p>
    </div>
  );
};
