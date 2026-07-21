import { contactDetails, content, type Locale } from "../content";
import { blogPosts } from "../blog-data";
import { HeroGallery } from "./hero-gallery";
import { SiteFooter, SiteHeader } from "./site-chrome";

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

export function LandingPage({ locale }: { locale: Locale }) {
  const t = content[locale];
  const pageIds =
    locale === "es"
      ? { audiences: "publicos", experiences: "experiencias", process: "como-funciona", about: "nosotros" }
      : { audiences: "audiences", experiences: "experiences", process: "how-it-works", about: "about" };
  const contactId = locale === "es" ? "contacto" : "contact";
  const contactHref = locale === "es" ? "/es/contacto" : "/en/contact";
  const blogHref = `/${locale}/blog`;
  const featuredPosts = blogPosts[locale].slice(0, 3);
  const artNotes =
    locale === "es"
      ? ["Curiosidad", "Territorio", "Aprender haciendo"]
      : ["Curiosity", "Community", "Learning by doing"];

  return (
    <main>
      <SiteHeader locale={locale} />

      <section className="hero">
        <div className="hero-grid shell">
          <div className="hero-copy">
            <p className="location-pill"><span />{t.location}</p>
            <p className="eyebrow">{t.eyebrow}</p>
            <h1>{t.title}</h1>
            <p className="hero-intro">{t.intro}</p>
            <div className="hero-actions">
              <a className="button" href={contactHref}>{t.primaryCta}<span aria-hidden="true">→</span></a>
              <a className="text-link" href={`#${pageIds.about}`}>{t.secondaryCta}<span aria-hidden="true">↘</span></a>
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
            <HeroGallery
              altPrimary={t.heroImageAlt}
              altSecondary={t.heroImageAltSecondary}
              locale={locale}
            />

            <div className="hero-photo-caption">
              <span>{t.labCard.label}</span>
              <strong>{t.labCard.title}</strong>
              <div className="photo-tag-row" aria-hidden="true">
                {t.labCard.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section audiences-section" id={pageIds.audiences} aria-labelledby={`${pageIds.audiences}-title`}>
        <div className="shell">
          <div className="section-heading audience-heading">
            <div>
              <p className="eyebrow">{t.audiencesEyebrow}</p>
              <h2 id={`${pageIds.audiences}-title`}>{t.audiencesTitle}</h2>
            </div>
            <p>{t.audiencesIntro}</p>
          </div>
          <div className="audience-grid">
            {t.audiences.map((item, index) => (
              <article className={`audience-card audience-tone-${index + 1}`} key={item.title}>
                <div className="audience-icon" aria-hidden="true">
                  {index === 0 ? "▦" : index === 1 ? "⌂" : "◎"}
                </div>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <a href={contactHref}>{t.audiencesCta}<span aria-hidden="true">→</span></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section experiences" id={pageIds.experiences}>
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

      <section className="section process-section" id={pageIds.process}>
        <div className="shell process-layout">
          <div className="process-heading">
            <p className="eyebrow">{t.processEyebrow}</p>
            <h2>{t.processTitle}</h2>
          </div>
          <div className="process-list">
            {t.process.map(([number, title, body], index) => (
              <article key={number}>
                <div className="process-step-mark" aria-hidden="true">
                  <span className="process-number">{number}</span>
                  <span className="process-symbol">
                    {index === 0 ? "⌖" : index === 1 ? "✎" : "⚗"}
                  </span>
                </div>
                <div className="process-step-copy"><h3>{title}</h3><p>{body}</p></div>
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
            {featuredPosts.map((post, index) => (
              <article className={index === 0 ? "post-card post-featured" : "post-card"} key={post.slug}>
                <div className={`post-visual visual-${index + 1}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={post.image} alt="" loading="lazy" width="800" height="450" />
                </div>
                <div className="post-content">
                  <div className="post-meta"><span>{post.category}</span><span>{post.readTime}</span></div>
                  <h3>{post.title}</h3>
                  <a className="read-more" href={`${blogHref}/${post.slug}`}>{t.blogCta} <b>→</b></a>
                </div>
              </article>
            ))}
          </div>
          <div className="blog-index-link">
            <a className="button button-outline" href={blogHref}>{t.blogAllCta}<span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section className="section about-section" id={pageIds.about}>
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

      <SiteFooter locale={locale} />
    </main>
  );
}
