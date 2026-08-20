import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../blog-data";
import { ArticlePage } from "../../../components/article-page";
import { siteUrl } from "../../../seo";

export function generateStaticParams() {
  return blogPosts.es.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  const index = blogPosts.es.findIndex((item) => item.slug === slug);
  const translation = blogPosts.en[index];
  return post ? {
    title: `${post.title} | Boom! Lab`,
    description: post.excerpt,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `/es/blog/${post.slug}`,
      languages: translation ? { "es-CL": `/es/blog/${post.slug}`, en: `/en/blog/${translation.slug}`, "x-default": `/es/blog/${post.slug}` } : undefined,
    },
    openGraph: { title: post.title, description: post.excerpt, type: "article", url: `${siteUrl}/es/blog/${post.slug}`, siteName: "Boom! Lab", locale: "es_CL", alternateLocale: ["en_US"], publishedTime: post.publishedIso ?? "2026-07-20", modifiedTime: post.updatedIso ?? "2026-07-20", images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  } : {};
}

export default async function SpanishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("es", slug);
  if (!post) notFound();
  return <ArticlePage locale="es" post={post} />;
}
