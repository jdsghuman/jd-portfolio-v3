import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { ActiveLinkContextProvider } from "src/store/link-context";
import { IsTopContextProvider } from "src/store/isTop-context";
import { defaultMetaTags } from "@components/Utils/constants";
import * as gtag from "@components/Utils/gtag";

import "../styles/globals.css";

const isProduction = process.env.NODE_ENV === "production";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <ActiveLinkContextProvider>
      <IsTopContextProvider>
        <Layout metaTags={defaultMetaTags}>
          <Head>
            {/*Global meta tags*/}
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <base href="/" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta name="theme-color" content="#ffffff"></meta>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </IsTopContextProvider>
    </ActiveLinkContextProvider>
  );
}
