import type { Metadata } from "next";
import { BlogPage } from "../../components/blog-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Science and STEM education blog | Boom! Lab",
  description: "Safe experiments, STEM education and practical resources for teachers, families and communities.",
  path: "/en/blog",
  alternatePath: "/es/blog",
});

export default function EnglishBlogPage() {
  return <BlogPage locale="en" />;
}
