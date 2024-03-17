import { Head, Html, Main, NextScript } from "next/document";
import Image from "next/image";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#69433b"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#69433b" />
      </Head>
      <body className="overflow-hidden">
        <Main />
        <NextScript />

        <div
          id="globalLoader"
          className="fixed inset-0 w-screen h-screen z-10 flex justify-center items-center"
        >
          <Image
            className="animate__animated animate__heartBeat animate__infinite"
            width="88"
            height="88"
            src="/images/logo.webp"
            alt="tang loader"
          />
        </div>
      </body>
    </Html>
  );
}
