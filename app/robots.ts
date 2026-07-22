import type { MetadataRoute } from "next";
import { siteUrl } from "./seo";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/signin-with-chatgpt", "/callback"] },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
