import Image from "next/image";
import { contactDetails, content, type Locale } from "../content";

function FlaskMark() {
  return (
    <span className="flask-mark" aria-hidden="true">
      <span className="flask-neck" />
      <span className="flask-body">
        <span className="flask-liquid" />
        <span className="bubble bubble-one" />
        <span className="bubble bubble-two" />
      </span>
    </span>
  );
}

function BrandLogo() {
  return <span className="brand-logo" aria-hidden="true" />;
}

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const sectionIds =
    locale === "es"
      ? ["experiencias", "como-funciona", "blog", "nosotros"]
      : ["experiences", "how-it-works", "blog", "about"];
  const contactId = locale === "es" ? "contacto" : "contact";
  const artNotes =
    locale === "es"
      ? ["Curiosidad", "Territorio", "Aprender haciendo"]
      : ["Curiosity", "Community", "Learning by doing"];

  return (
    <main>
      <header className="site-header">
        <div className="shell header-inner">
          <a className="wordmark" href={`/${locale}`} aria-label="Boom! Lab">
            <BrandLogo />
          </a>
          <nav className="desktop-nav" aria-label={locale === "es" ? "Navegación principal" : "Primary navigation"}>
            {t.nav.map(([label], index) => (
              <a href={`#${sectionIds[index]}`} key={label}>
                {label}
              </a>
            ))}
          </nav>
          <div className="header-actions">
            <a className="language-link" href={t.alternateHref}>
              {t.alternateLocale}
            </a>
            <a className="button button-small" href={`#${contactId}`}>
              {t.contact}
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="location-pill"><span />{t.location}</p>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button" href={`#${contactId}`}>{t.primaryCta}<span aria-hidden="true">→</span></a>
              <a className="text-link" href={`#${sectionIds[3]}`}>{t.secondaryCta}<span aria-hidden="true">↘</span></a>
            </div>
            <div className="proof-row">
              {t.proof.map(([value, label]) => (
                <div className="proof-item" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <span className="spark spark-a">✦</span>
            <span className="spark spark-b">✦</span>
            <div className="photo-accent photo-accent-teal" aria-hidden="true" />
            <div className="photo-accent photo-accent-yellow" aria-hidden="true" />
            <figure className="hero-photo-card">
              <Image
                src="/images/boomlab-volcan-hero.webp"
                alt={t.heroImageAlt}
                width="1200"
                height="1500"
                sizes="(max-width: 680px) 88vw, (max-width: 980px) 390px, 430px"
                priority
              />
              <figcaption className="hero-photo-caption">
                <span>{t.labCard.label}</span>
                <strong>{t.labCard.title}</strong>
                <div className="photo-tag-row" aria-hidden="true">
                  {t.labCard.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </figcaption>
            </figure>
            <div className="photo-badge" aria-hidden="true">
              <span>BOOM!</span>
              <b>✦</b>
            </div>
          </div>
        </div>
      </section>

      <section className="section experiences" id={sectionIds[0]}>
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">{t.experiencesEyebrow}</p>
              <h2>{t.experiencesTitle}</h2>
            </div>
            <p>{t.experiencesIntro}</p>
          </div>
          <div className="experience-grid">
            {t.experiences.map((item) => (
              <article className={`experience-card tone-${item.tone}`} key={item.title}>
                <span className="card-number">{item.number}</span>
                <div className="science-icon" aria-hidden="true">
                  {item.number === "01" ? "⚗" : item.number === "02" ? "⌁" : "✺"}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <span className="card-detail">{item.detail}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section" id={sectionIds[1]}>
        <div className="shell process-layout">
          <div className="process-heading">
            <p className="eyebrow">{t.processEyebrow}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-list">
            {t.process.map(([number, title, body]) => (
              <article key={number}>
                <span>{number}</span>
                <div><h3>{title}</h3><p>{body}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section blog-section" id="blog">
        <div className="shell">
          <div className="section-heading blog-heading">
            <div>
              <p className="eyebrow">{t.blogEyebrow}</p>
              <h2>{t.blogTitle}</h2>
            </div>
            <p>{t.blogIntro}</p>
          </div>
          <div className="post-grid">
            {t.posts.map(([category, title, time], index) => (
              <article className={index === 0 ? "post-card post-featured" : "post-card"} key={title}>
                <div className={`post-visual visual-${index + 1}`}>
                  <span>{index === 0 ? "⚗" : index === 1 ? "?" : "✦"}</span>
                </div>
                <div className="post-content">
                  <div className="post-meta"><span>{category}</span><span>{time}</span></div>
                  <h3>{title}</h3>
                  <span className="read-more">{t.blogCta} <b>→</b></span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id={sectionIds[3]}>
        <div className="shell about-grid">
          <div className="about-art" aria-hidden="true">
            <div className="art-circle"><FlaskMark /></div>
            <span className="art-note note-a">{artNotes[0]}</span>
            <span className="art-note note-b">{artNotes[1]}</span>
            <span className="art-note note-c">{artNotes[2]}</span>
          </div>
          <div className="about-copy">
            <p className="eyebrow">{t.aboutEyebrow}</p>
            <h2>{t.aboutTitle}</h2>
            <p>{t.aboutBody}</p>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="shell faq-grid">
          <h2>{t.faqTitle}</h2>
          <div className="faq-list">
            {t.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}<span>+</span></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id={contactId}>
        <div className="shell contact-card">
          <div>
            <p className="eyebrow">{t.contactEyebrow}</p>
            <h2>{t.contactTitle}</h2>
            <p>{t.contactBody}</p>
          </div>
          <div className="contact-actions">
            <a
              className="button button-light"
              href={`${contactDetails.whatsappHref}?text=${encodeURIComponent(t.contactWhatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
            >
              {t.contactCta}
            </a>
            <div className="contact-links">
              <a href={`mailto:${contactDetails.email}`}>{contactDetails.email}</a>
              <a href={contactDetails.instagramHref} target="_blank" rel="noreferrer">
                {contactDetails.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="shell footer-inner">
          <div className="footer-brand" aria-label="Boom! Lab"><BrandLogo /></div>
          <p>{t.footer}</p>
          <span>© 2026 · {t.footerLocation}</span>
        </div>
      </footer>
    </main>
  );
}
