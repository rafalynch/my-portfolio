import "../styles/globals.css";
import type { AppProps } from "next/app";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
