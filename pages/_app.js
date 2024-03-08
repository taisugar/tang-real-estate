import "@styles/globals.scss";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import { useLayoutEffect, useState } from "react";

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

const Loader = () => {
  // const router = useRouter();
  // const [isLoading, setIsLoading] = useState(false);
  // useEffect(() => {
  //   const handleStart = (url) => url !== router.asPath && setIsLoading(true);
  //   const handleComplete = (url) =>
  //     url === router.asPath && setTimeout(() => setIsLoading(false), 1000);
  //   router.events.on("routeChangeStart", handleStart);
  //   router.events.on("routeChangeComplete", handleComplete);
  //   router.events.on("routeChangeError", handleComplete);

  //   return () => {
  //     router.events.on("routeChangeStart", handleStart);
  //     router.events.on("routeChangeComplete", handleComplete);
  //     router.events.on("routeChangeError", handleComplete);
  //   };
  // });

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="">loading...</div>
    </div>
  );
};

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <style jsx global>{`
        :root {
          --GMVDINPro-font: ${GMVDINPro.style.fontFamily};
        }
      `}</style>
      {isLoading ? <Loader /> : <Component {...pageProps} />}
    </>
  );
}
