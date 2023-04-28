import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { NEXT_SEO_DEFAULT } from "../../next-seo.config";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="h-screen">
      <Component {...pageProps} />
      <DefaultSeo {...NEXT_SEO_DEFAULT} />
    </div>
  );
}
