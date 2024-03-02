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
          className="logo -mb-2 w-[120px] md:w-[200px] animate__animated animate__tada animate__infinite animate__slower"
        >
          <Image
            width={200}
            height={100}
            src={"/images/logo.webp"}
            alt="logo-image"
          />
        </Link>
        <div className="header-logo--container">
          <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        </div>
      </div>
    </header>
  );
};
