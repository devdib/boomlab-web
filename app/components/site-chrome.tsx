import { content, type Locale } from "../content";

export function BrandLogo() {
  return <span className="brand-logo" aria-hidden="true" />;
}

const navigation = {
  es: [
    ["Para quiénes", "/es#publicos"],
    ["Experiencias", "/es#experiencias"],
    ["Cómo funciona", "/es#como-funciona"],
    ["Blog", "/es/blog"],
    ["Nosotros", "/es#nosotros"],
  ],
  en: [
    ["Who it’s for", "/en#audiences"],
    ["Experiences", "/en#experiences"],
    ["How it works", "/en#how-it-works"],
    ["Blog", "/en/blog"],
    ["About", "/en#about"],
  ],
} as const;

export function SiteHeader({
  locale,
  alternateHref,
}: {
  locale: Locale;
  alternateHref?: string;
}) {
  const t = content[locale];
  const contactHref = locale === "es" ? "/es/contacto" : "/en/contact";

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a className="wordmark" href={`/${locale}`} aria-label="Boom! Lab">
          <BrandLogo />
        </a>
        <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
          {navigation[locale].map(([label, href]) => (
            <a href={href} key={label}>{label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a className="language-link" href={alternateHref ?? t.alternateHref}>
            {t.alternateLocale}
          </a>
          <a className="button button-small" href={contactHref}>{t.contact}</a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = content[locale];
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <div className="footer-brand" aria-label="Boom! Lab"><BrandLogo /></div>
        <p>{t.footer}</p>
        <span>© 2026 · {t.footerLocation}</span>
      </div>
    </footer>
  );
}
