import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@components/Layout";
import { ActiveLinkContextProvider } from "src/store/link-context";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ActiveLinkContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ActiveLinkContextProvider>
  );
}
