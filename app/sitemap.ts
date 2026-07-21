import type { MetadataRoute } from "next";
import { blogPosts } from "./blog-data";

const baseUrl = "https://boomlab-web.dibaceta.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "/es", "/en", "/es/blog", "/en/blog", "/es/contacto", "/en/contact",
    "/es/politica-editorial", "/en/editorial-policy", "/es/privacidad", "/en/privacy",
  ];
  const articles = (["es", "en"] as const).flatMap((locale) =>
    blogPosts[locale].map((post) => ({
      url: `${baseUrl}/${locale}/blog/${post.slug}`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  );

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date("2026-07-20"),
      changeFrequency: path.includes("blog") ? "weekly" as const : "monthly" as const,
      priority: path === "" || path === "/es" ? 1 : 0.7,
    })),
    ...articles,
  ];
}
