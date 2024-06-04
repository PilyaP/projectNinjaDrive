import { Montserrat_Alternates } from "next/font/google";
import "../../styles/globals.scss";
import Head from "next/head";

const montserratAlternates = Montserrat_Alternates({
  subsets: ["latin"],
  weight: ["400"],
});

const metadata = {
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
    manifest: "/site.webmanifest",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.openGraph.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Ninja Drive Club" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta
          name="google-site-verification"
          content="axszHEOIvB3MfCvCjDJZefCsB9Y9du8XFMLCDcCPBVI"
        />
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

        {/* Open Graph */}
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta
          property="og:description"
          content={metadata.openGraph.description}
        />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:site_name" content={metadata.openGraph.siteName} />
        <meta property="og:locale" content={metadata.openGraph.locale} />
        <meta property="og:type" content={metadata.openGraph.type} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.openGraph.title} />
        <meta
          name="twitter:description"
          content={metadata.openGraph.description}
        />
        <meta name="twitter:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:site" content="@your_twitter_handle" />

        {/* Global site tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-L096GYV598"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-L096GYV598');`}
        </script>

        {/* Structured Data */}
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Ninja Drive Club",
            "url": "https://ninjadriveclub.com",
            "logo": "https://ninjadriveclub.com/logo512.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+380504800007",
              "contactType": "Customer Service"
            }
          }`}
        </script>
      </Head>
      <body className={montserratAlternates.className}>{children}</body>
    </html>
  );
}
