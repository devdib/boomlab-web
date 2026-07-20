import type { Locale } from "../content";
import { BlogIndex } from "./blog-index";
import { SiteFooter, SiteHeader } from "./site-chrome";

const copy = {
  es: {
    eyebrow: "Ideas para seguir descubriendo",
    title: "Ciencia para usar de verdad.",
    intro: "Recursos claros para docentes, familias y comunidades: experimentos seguros, educación STEM y consejos para organizar experiencias científicas.",
    back: "Volver al inicio",
  },
  en: {
    eyebrow: "Ideas for further discovery",
    title: "Science you can genuinely use.",
    intro: "Clear resources for teachers, families and communities: safe experiments, STEM education and advice for planning science experiences.",
    back: "Back to home",
  },
} as const;

export function BlogPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const alternateHref = locale === "es" ? "/en/blog" : "/es/blog";
  return (
    <main>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <section className="subpage-hero blog-hero">
        <div className="shell subpage-hero-inner">
          <a className="back-link" href={`/${locale}`}>← {t.back}</a>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="blog-page-section"><div className="shell"><BlogIndex locale={locale} /></div></section>
      <SiteFooter locale={locale} />
    </main>
  );
}
