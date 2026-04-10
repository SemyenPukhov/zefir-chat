import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import { JsonLdSite } from "@/components/json-ld";
import { ThemeProvider } from "@/components/theme-provider";
import { YandexMetrika } from "@/components/yandex-metrika";
import { getSiteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Зефирчат — лёгкие послания от незнакомцев",
    template: "%s · Зефирчат",
  },
  description:
    "Анонимная сеть для неожиданных приятностей: зефирки в ленте, голосовые записки, статистика и бережная модерация. Скоро запуск — встань в лист ожидания.",
  keywords: [
    "Зефирчат",
    "анонимный чат",
    "послания",
    "зефирки",
    "анонимность",
    "социальная сеть",
  ],
  authors: [{ name: "Зефирчат" }],
  creator: "Зефирчат",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "Зефирчат",
    title: "Зефирчат — лёгкие послания от незнакомцев",
    description:
      "Лови зефирки в анонимной ленте: короткие сообщения, голос и безопасное общение. Скоро запуск.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Зефирчат — лёгкие послания от незнакомцев",
    description:
      "Анонимная сеть зефирок: послания от незнакомцев, голос и статистика. Скоро запуск.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcf8ff" },
    { media: "(prefers-color-scheme: dark)", color: "#141126" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Material Symbols — нет официального next/font; грузим один вес для иконок макета */}
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
      </head>
      <body className={`${manrope.className} min-h-full antialiased`}>
        <YandexMetrika />
        <JsonLdSite />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
