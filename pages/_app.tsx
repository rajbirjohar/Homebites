import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Header, Layout } from "../components";
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps: {session,...pageProps} }: AppProps) {
  return (
    <SessionProvider session={session}>
    <Layout>
      <Header />
      <Component {...pageProps} />
    </Layout>
    </SessionProvider>
  );
}

export default MyApp;
