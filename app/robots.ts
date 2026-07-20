import type { MetadataRoute } from "next";

const baseUrl = "https://boomlab-web.dibaceta.chatgpt.site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/signin-with-chatgpt", "/callback"] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
