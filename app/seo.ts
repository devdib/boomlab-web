import type { Metadata } from "next";
import type { Locale } from "./content";

const fallbackSiteUrl = "https://boomlab-web.dibaceta.chatgpt.site";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || fallbackSiteUrl).replace(/\/$/, "");
export const socialImage = "/images/boomlab-volcan-principal.webp";

type PageMetadataOptions = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  alternatePath: string;
};

export function createPageMetadata({ locale, title, description, path, alternatePath }: PageMetadataOptions): Metadata {
  const spanishPath = locale === "es" ? path : alternatePath;
  const englishPath = locale === "en" ? path : alternatePath;

  return {
    title,
    description,
    alternates: {
      canonical: path,
      languages: {
        "es-CL": spanishPath,
        en: englishPath,
        "x-default": spanishPath,
      },
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: path,
      siteName: "Boom! Lab",
      locale: locale === "es" ? "es_CL" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CL"],
      images: [{ url: socialImage, alt: locale === "es" ? "Experiencia científica práctica de Boom! Lab" : "Hands-on Boom! Lab science experience" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
