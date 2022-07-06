/**
 * React imports.
 */
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            rel="preload"
            href="/fonts/WorkSans/WorkSans-Medium.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/WorkSans/WorkSans-SemiBold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/WorkSans/WorkSans-Bold.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />

          {/* <Script src="/a.js" strategy="beforeInteractive" />  */}
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script src="/a.js" strategy="lazyOnload"></Script>
        </body>
      </Html>
    );
  }
}
