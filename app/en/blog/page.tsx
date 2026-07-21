import type { Metadata } from "next";
import { BlogPage } from "../../components/blog-page";

export const metadata: Metadata = {
  title: "Science and STEM education blog | Boom! Lab",
  description: "Safe experiments, STEM education and practical resources for teachers, families and communities.",
};

export default function EnglishBlogPage() {
  return <BlogPage locale="en" />;
}
