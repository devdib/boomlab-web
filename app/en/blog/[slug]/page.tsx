import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "../../../blog-data";
import { ArticlePage } from "../../../components/article-page";
import { siteUrl } from "../../../seo";

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
      languages: translation ? { "es-CL": `/es/blog/${translation.slug}`, en: `/en/blog/${post.slug}`, "x-default": `/es/blog/${translation.slug}` } : undefined,
    },
    openGraph: { title: post.title, description: post.excerpt, type: "article", url: `${siteUrl}/en/blog/${post.slug}`, siteName: "Boom! Lab", locale: "en_US", alternateLocale: ["es_CL"], publishedTime: "2026-07-20", modifiedTime: "2026-07-20", images: [{ url: post.image, alt: post.imageAlt }] },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: [post.image] },
  } : {};
}

export default async function EnglishArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost("en", slug);
  if (!post) notFound();
  return <ArticlePage locale="en" post={post} />;
}
