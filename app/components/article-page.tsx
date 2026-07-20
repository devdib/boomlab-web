import { blogPosts, type BlogPost } from "../blog-data";
import type { Locale } from "../content";
import { SiteFooter, SiteHeader } from "./site-chrome";

const copy = {
  es: {
    back: "Volver al blog",
    ctaEyebrow: "¿Quieres llevarlo a la práctica?",
    ctaTitle: "Diseñemos una experiencia para tu comunidad.",
    ctaBody: "Cuéntanos la edad, el número de participantes, el espacio y el objetivo. Te orientaremos sobre el formato más adecuado.",
    cta: "Preparar una solicitud",
    related: "Sigue descubriendo",
    takeaways: "En pocas palabras",
    published: "Publicado",
    updated: "Actualizado",
    editorial: "Cómo elaboramos este contenido",
  },
  en: {
    back: "Back to the blog",
    ctaEyebrow: "Want to put it into practice?",
    ctaTitle: "Let’s shape an experience for your community.",
    ctaBody: "Tell us the age group, number of participants, space and goal. We will help identify the most suitable format.",
    cta: "Prepare an enquiry",
    related: "Keep discovering",
    takeaways: "In brief",
    published: "Published",
    updated: "Updated",
    editorial: "How we produce this content",
  },
} as const;

export function ArticlePage({ locale, post }: { locale: Locale; post: BlogPost }) {
  const t = copy[locale];
  const contactHref = locale === "es" ? "/es/contacto" : "/en/contact";
  const translatedIndex = blogPosts[locale].findIndex((item) => item.slug === post.slug);
  const translatedPost = blogPosts[locale === "es" ? "en" : "es"][translatedIndex];
  const alternateHref = translatedPost ? `/${locale === "es" ? "en" : "es"}/blog/${translatedPost.slug}` : undefined;
  const related = blogPosts[locale].filter((item) => item.slug !== post.slug).slice(0, 2);
  const articleUrl = `https://boomlab-web.dibaceta.chatgpt.site/${locale}/blog/${post.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://boomlab-web.dibaceta.chatgpt.site${post.image}`,
    datePublished: "2026-07-20",
    dateModified: "2026-07-20",
    inLanguage: locale === "es" ? "es-CL" : "en",
    mainEntityOfPage: articleUrl,
    author: { "@type": "Organization", name: post.author },
    ...(locale === "es" && post.reviewer ? { reviewedBy: { "@type": "Person", name: post.reviewer, jobTitle: post.reviewerRole } } : {}),
    publisher: { "@type": "Organization", name: "Boom! Lab" },
    isAccessibleForFree: true,
  };

  return (
    <main>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
      <article className="article-page">
        <header className={`article-header article-tone-${post.tone}`}>
          <div className="shell article-header-inner">
            <a className="back-link" href={`/${locale}/blog`}>← {t.back}</a>
            <div className="article-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
          </div>
        </header>
        <figure className="shell article-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={post.image} alt={post.imageAlt} width="1672" height="941" fetchPriority="high" />
          <figcaption>{post.imageCaption}</figcaption>
        </figure>
        <div className="shell article-shell">
          <div className="article-body">
            <div className="article-author">
              <span aria-hidden="true">BL</span>
              <div className="article-byline">
                <strong>{post.author}</strong>
                <small>{post.authorRole}</small>
                {post.reviewer && (
                  <div className="article-reviewer">
                    <span>{post.reviewerLabel}</span>
                    <strong>{post.reviewer}</strong>
                    <small>{post.reviewerRole}</small>
                  </div>
                )}
              </div>
              <div className="article-dates"><small>{t.published}: {post.date}</small><small>{t.updated}: {post.updatedDate}</small></div>
            </div>
            <aside className="article-takeaways">
              <h2>{t.takeaways}</h2>
              <ul>{post.takeaways.map((item) => <li key={item}>{item}</li>)}</ul>
            </aside>
            {post.content.map((section) => (
              <section className="article-content-section" key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && <ul>{section.bullets.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.callout && <blockquote>{section.callout}</blockquote>}
              </section>
            ))}
            <a className="article-editorial-link" href={locale === "es" ? "/es/politica-editorial" : "/en/editorial-policy"}>{t.editorial} →</a>
          </div>
          <aside className="article-cta">
            <p className="eyebrow">{t.ctaEyebrow}</p>
            <h2>{t.ctaTitle}</h2>
            <p>{t.ctaBody}</p>
            <a className="button" href={contactHref}>{t.cta}<span aria-hidden="true">→</span></a>
          </aside>
        </div>
      </article>
      <section className="related-section">
        <div className="shell">
          <h2>{t.related}</h2>
          <div className="related-grid">
            {related.map((item) => (
              <a className={`related-card blog-card-${item.tone}`} href={`/${locale}/blog/${item.slug}`} key={item.slug}>
                <span aria-hidden="true">{item.icon}</span>
                <div><small>{item.category} · {item.readTime}</small><h3>{item.title}</h3></div>
              </a>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
