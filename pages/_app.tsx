import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Layout } from "../components";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Toaster />
      <Layout>
        <Header />
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
