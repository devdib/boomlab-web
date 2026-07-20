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
  },
  en: {
    back: "Back to the blog",
    ctaEyebrow: "Want to put it into practice?",
    ctaTitle: "Let’s shape an experience for your community.",
    ctaBody: "Tell us the age group, number of participants, space and goal. We will help identify the most suitable format.",
    cta: "Prepare an enquiry",
    related: "Keep discovering",
  },
} as const;

export function ArticlePage({ locale, post }: { locale: Locale; post: BlogPost }) {
  const t = copy[locale];
  const contactHref = locale === "es" ? "/es/contacto" : "/en/contact";
  const translatedIndex = blogPosts[locale].findIndex((item) => item.slug === post.slug);
  const translatedPost = blogPosts[locale === "es" ? "en" : "es"][translatedIndex];
  const alternateHref = translatedPost ? `/${locale === "es" ? "en" : "es"}/blog/${translatedPost.slug}` : undefined;
  const related = blogPosts[locale].filter((item) => item.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <article className="article-page">
        <header className={`article-header article-tone-${post.tone}`}>
          <div className="shell article-header-inner">
            <a className="back-link" href={`/${locale}/blog`}>← {t.back}</a>
            <div className="article-meta"><span>{post.category}</span><span>{post.date}</span><span>{post.readTime}</span></div>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <div className="article-icon" aria-hidden="true">{post.icon}</div>
          </div>
        </header>
        <div className="shell article-shell">
          <div className="article-body">
            {post.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
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
