import { Montserrat_Alternates } from "next/font/google";
import "../../styles/globals.scss";
import { Metadata } from "next";
import Script from "next/script";
import Head from "next/head";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Прокат квадроциклів у Дніпрі",
  description:
    "Приєднуйтесь до Ninja Drive Club для незабутніх вражень! Прокат квадроциклів та мото багів у місті Дніпро.",
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
  openGraph: {
    title: "Прокат квадроциклів у Дніпрі",
    description:
      "Приєднуйтесь до Ninja Drive Club для незабутніх вражень! Прокат квадроциклів та мото багів у місті Дніпро.",
    url: "https://ninjadriveclub.com",
    siteName: "Ninja Drive Club",
    images: [
      {
        url: "/logo512.png",
        width: 800,
        height: 600,
        alt: "Ninja Drive Club",
      },
      {
        url: "/logo512.png",
        width: 1800,
        height: 1600,
        alt: "Ninja Drive Club",
      },
    ],
    locale: "uk_UA",
    type: "website",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="32x32"
          type="image/x-icon"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          sizes="180x180"
        />
        <link
          rel="shortcut icon"
          href="/logo192.png"
          sizes="192x192"
          type="image/png"
        />
      </Head>
      <body className={montserratAlternates.className}>
        {children}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L096GYV598"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L096GYV598');`}
        </Script>
        <Script type="application/ld+json">
          {JSON.stringify({
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
          })}
        </Script>
      </body>
    </html>
  );
}
