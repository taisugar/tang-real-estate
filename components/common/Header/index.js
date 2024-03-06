import useScrolledPage from "@/utils/hooks/useScrolledPage";
import Link from "next/link";
import { useState } from "react";
import { Nav } from "../Nav";
import Image from "next/image";

export const Header = () => {
  const isScrolled = useScrolledPage();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header
      id="header"
      className={`header fixed left-0 w-full z-30 top-0 header-container ${
        (isNavOpen || isScrolled) && "header-scrolled"
      }`}
    >
      <div
        className={`header--container wrap wrap-px ${
          isNavOpen ? "custom-show" : "custom-hide"
        }`}
      >
        <Link
          href="/"
          className="logo -mb-2 hover-effect animate__animated animate__pulse animate__infinite animate__slower flex justify-center items-center"
        >
          <span className="aspect-square overflow-hidden">
            <Image
              className="rounded-full p-2 bg-[#ece8e5] w-16 h-16"
              width={66}
              height={88}
              src={"/images/logo.webp"}
              alt="logo-image"
            />
          </span>
          <p className="ml-1 pr-4 flex flex-col items-center justify-center logo-container -mb-1">
            <span className="font-bold text-lg logo-title -mb-1">
              TANG REALTY
            </span>
            <span className="logo-text text-sm leading-1 -mt-1">SAIGON</span>
          </p>
        </Link>
        <div className="header-logo--container">
          <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
    </header>
  );
};
