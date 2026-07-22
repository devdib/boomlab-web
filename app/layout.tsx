import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AnalyticsConsent } from "./components/analytics-consent";
import { siteUrl } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Boom! Lab | Ciencia que se vive, se toca y se descubre",
  description:
    "Experiencias científicas prácticas para niñas, niños, colegios, familias y comunidades.",
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/logo-boomlab.svg",
    shortcut: "/logo-boomlab.svg",
  },
  openGraph: {
    siteName: "Boom! Lab",
    type: "website",
    locale: "es_CL",
  },
  verification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-CL">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
