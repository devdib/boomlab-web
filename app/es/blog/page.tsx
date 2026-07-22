import type { Metadata } from "next";
import { BlogPage } from "../../components/blog-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  locale: "es",
  title: "Blog de ciencia y educación STEM | Boom! Lab",
  description: "Experimentos seguros, educación STEM y recursos prácticos para docentes, familias y comunidades.",
  path: "/es/blog",
  alternatePath: "/en/blog",
});

export default function SpanishBlogPage() {
  return <BlogPage locale="es" />;
}
