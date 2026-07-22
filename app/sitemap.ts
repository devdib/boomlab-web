import type { MetadataRoute } from "next";
import { blogPosts } from "./blog-data";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPairs = [
    { es: "/es", en: "/en", changeFrequency: "monthly" as const, priority: 1 },
    { es: "/es/blog", en: "/en/blog", changeFrequency: "weekly" as const, priority: 0.85 },
    { es: "/es/contacto", en: "/en/contact", changeFrequency: "monthly" as const, priority: 0.75 },
    { es: "/es/politica-editorial", en: "/en/editorial-policy", changeFrequency: "yearly" as const, priority: 0.45 },
    { es: "/es/privacidad", en: "/en/privacy", changeFrequency: "yearly" as const, priority: 0.35 },
  ];
  const staticPages = staticPairs.flatMap((pair) => ([
    {
      url: `${siteUrl}${pair.es}`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: pair.changeFrequency,
      priority: pair.priority,
      alternates: { languages: { "es-CL": `${siteUrl}${pair.es}`, en: `${siteUrl}${pair.en}`, "x-default": `${siteUrl}${pair.es}` } },
    },
    {
      url: `${siteUrl}${pair.en}`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: pair.changeFrequency,
      priority: pair.priority,
      alternates: { languages: { "es-CL": `${siteUrl}${pair.es}`, en: `${siteUrl}${pair.en}`, "x-default": `${siteUrl}${pair.es}` } },
    },
  ]));
  const articles = blogPosts.es.flatMap((spanishPost, index) => {
    const englishPost = blogPosts.en[index];
    const spanishUrl = `${siteUrl}/es/blog/${spanishPost.slug}`;
    const englishUrl = englishPost ? `${siteUrl}/en/blog/${englishPost.slug}` : spanishUrl;
    const languages = { "es-CL": spanishUrl, en: englishUrl, "x-default": spanishUrl };

    return [
      { url: spanishUrl, lastModified: new Date("2026-07-20"), changeFrequency: "monthly" as const, priority: 0.75, alternates: { languages } },
      ...(englishPost ? [{ url: englishUrl, lastModified: new Date("2026-07-20"), changeFrequency: "monthly" as const, priority: 0.75, alternates: { languages } }] : []),
    ];
  });

  return [...staticPages, ...articles];
}
