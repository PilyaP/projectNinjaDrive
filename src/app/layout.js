import React from "react";
import "../../styles/globals.scss";
import { Montserrat_Alternates } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Прокат квадроциклів у Дніпрі",
  url: "https://ninjadriveclub.com",
  siteName: "Ninja Drive Club",
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL,
  openGraph: {
    title: "Прокат квадроциклів у Дніпрі",
    description: "Приєднуйтесь до Ninja Drive Club для незабутніх вражень! Прокат квадроциклів та мото багів у місті Дніпро.",
    url: "https://ninjadriveclub.com",
    siteName: "Ninja Drive Club",
    images: [
      {
        url: "https://ninjadriveclub.com/logo512.png",
        width: 512,
        height: 512,
        alt: "Ninja Drive Club",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
    shortcut: ["/logo192.png"],
  },
  manifest: "/site.webmanifest",
  description: "Приєднуйтесь до Ninja Drive Club для незабутніх вражень! Прокат квадроциклів та мото багів у місті Дніпро.",
  keywords: [
    "Прокат квадроциклов Днепр",
    "Квадроциклы в Обуховке",
    "Квадро Днепр",
    "Эндуро Днепр",
    "Прокат эндуро Днепр",
    "Прокат багги Днепр",
    "Покататься на квадроциклах в Днепре",
    "Поездка на квадроциклах",
    "Прогулка на квадроциклах",
    "Квадрики в Обуховке",
    "Прокат багги в Днепре",
    "Прокат квадроциклов в Днепре",
    "Отдых в Днепре",
    "Выходные в Днепре",
    "Куда пойти в Днепре",
    "Экстремальный досуг в Днепре",
    "Что подарить",
    "Подарочный сертификат Днепр",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk_UA">
      <Head>
        <title>{metadata.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ninja Drive Club" />

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:image:width" content={metadata.openGraph.images[0].width} />
        <meta property="og:image:height" content={metadata.openGraph.images[0].height} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="shortcut icon" href="/logo192.png" sizes="192x192" type="image/png" />
        <link rel="manifest" href={metadata.manifest} />

        <script type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ninja Drive Club",
              url: "https://ninjadriveclub.com",
              logo: "https://ninjadriveclub.com/logo512.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+380504800007",
                contactType: "Customer Service",
              },
            }),
          }}
        />
      </Head>
      <body className={montserratAlternates.className}>
        {children}
        {/* Google Analytics */}
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`} />
        <Script id="google-analytics" strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
            `,
          }}
        />
      </body>
    </html>
  );
}
