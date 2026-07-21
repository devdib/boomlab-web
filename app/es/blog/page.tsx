import type { Metadata } from "next";
import { BlogPage } from "../../components/blog-page";

export const metadata: Metadata = {
  title: "Blog de ciencia y educación STEM | Boom! Lab",
  description: "Experimentos seguros, educación STEM y recursos prácticos para docentes, familias y comunidades.",
};

export default function SpanishBlogPage() {
  return <BlogPage locale="es" />;
}
