import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../blog-data";
import { ArticlePage } from "../../../components/article-page";

export function generateStaticParams() {
  return blogPosts.en.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("en", slug);
  const index = blogPosts.en.findIndex((item) => item.slug === slug);
  const translation = blogPosts.es[index];
  return post ? {
    title: `${post.title} | Boom! Lab`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/en/blog/${post.slug}`,
      languages: translation ? { "es-CL": `/es/blog/${translation.slug}`, en: `/en/blog/${post.slug}` } : undefined,
    },
    openGraph: { title: post.title, description: post.excerpt, type: "article", images: [{ url: post.image, alt: post.imageAlt }] },
  } : {};
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("en", slug);
  if (!post) notFound();
  return <ArticlePage locale="en" post={post} />;
}
