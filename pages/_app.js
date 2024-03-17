import "@styles/globals.scss";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { useLayoutEffect } from "react";

export const inter = Inter({ subsets: ["latin"] });

export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

const GMVDINPro = localFont({
  src: [
    {
      weight: "200",
      path: "../public/fonts/GMV_DIN_Pro-Extlight.ttf"
    },
    {
      weight: "normal",
      path: "../public/fonts/GMV_DIN_Pro.ttf"
    },
    {
      weight: "600",
      path: "../public/fonts/GMV_DIN_Pro-Medium.ttf"
    },
    {
      weight: "700",
      path: "../public/fonts/GMV_DIN_Pro-Bold.ttf"
    },
    {
      weight: "900",
      path: "../public/fonts/GMV_DIN_Pro-Black.ttf"
    }
  ],
  display: "swap"
});

export default function App({ Component, pageProps }) {
  useLayoutEffect(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        document.body.className = "";
        const loader = document.getElementById("globalLoader");
        if (loader) loader.remove();
      }
    }, 1000);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --GMVDINPro-font: ${GMVDINPro.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
