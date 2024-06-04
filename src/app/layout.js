import { Montserrat_Alternates } from "next/font/google";
import "../../styles/globals.scss";
import Head from "next/head";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Прокат мото багів, квадроциклів та іншої техніки у місті Дніпро",
  url: process.env.NEXT_PUBLIC_BASE_URL,
  siteName: "Project Ninja Drive",
  metadataBase: process.env.NEXT_PUBLIC_BASE_URL,
  openGraph: {
    title: "Прокат мото багів, квадроциклів та іншої техніки у місті Дніпро",
    description: `Компанія Project Ninja Drive пропонує прокат мото багів, квадроциклів та іншої техніки у місті Дніпро. Незабутні пригоди та екстремальний відпочинок для всіх! Наші послуги включають:
- Прокат мото багів та квадроциклів
- Екстремальні тури та розваги
- Індивідуальний підхід до кожного клієнта
Приєднуйтеся до нас для незабутніх вражень та активного відпочинку.`,
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Project Ninja Drive",
    icons: {
      icon: ["/favicon.ico"],
      apple: ["/apple-touch-icon.png"],
      shortcut: ["/logo192.png"],
    },
    images: [
      {
        url: "/logo512.png",
        width: 800,
        height: 600,
        alt: "Project Ninja Drive",
      },
      {
        url: "/logo512.png",
        width: 1800,
        height: 1600,
        alt: "Project Ninja Drive",
      },
    ],
    locale: "uk_UA",
    type: "website",
    manifest: "/site.webmanifest",
  },
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
    <html lang="uk">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta
          name="google-site-verification"
          content="axszHEOIvB3MfCvCjDJZefCsB9Y9du8XFMLCDcCPBVI"
        />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
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
        <link rel="manifest" href={metadata.openGraph.manifest} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />
        {metadata.openGraph.images.map((image, index) => (
          <meta key={index} property="og:image" content={image.url} />
        ))}
        {/* WhatsApp Specific Meta Tags */}
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {/* Telegram Specific Meta Tags */}
        <meta property="og:image:type" content="/logo192.png" />
        <meta
          name="google-site-verification"
          content="axszHEOIvB3MfCvCjDJZefCsB9Y9du8XFMLCDcCPBVI"
        />
      </Head>
      <body className={montserratAlternates.className}>{children}</body>
    </html>
  );
}
