import Head from "next/head";
import { profile, site } from "../terminal/content";

const ogImage = `${site.url}/og.png`;

export default function SiteHead() {
  return (
    <Head>
      <title>{site.title}</title>
      <meta name="description" content={site.description} />
      <meta name="author" content={profile.name} />
      <link rel="canonical" href={`${site.url}/`} />

      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="theme-color" content="#0b0b0d" />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={profile.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:url" content={`${site.url}/`} />
      <meta property="og:title" content={site.title} />
      <meta property="og:description" content={site.description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={site.title} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={site.title} />
      <meta name="twitter:description" content={site.description} />
      <meta name="twitter:image" content={ogImage} />
    </Head>
  );
}
