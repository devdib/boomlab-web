import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../blog-data";
import { ArticlePage } from "../../../components/article-page";

export function generateStaticParams() {
  return blogPosts.es.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  return post ? { title: `${post.title} | Boom! Lab`, description: post.excerpt } : {};
}

export default async function SpanishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  if (!post) notFound();
  return <ArticlePage locale="es" post={post} />;
}
