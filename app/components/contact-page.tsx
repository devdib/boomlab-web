import { contactDetails, type Locale } from "../content";
import { ContactForm } from "./contact-form";
import { SiteFooter, SiteHeader } from "./site-chrome";

const copy = {
  es: {
    eyebrow: "Hagamos ciencia juntos",
    title: "Cuéntanos qué quieres activar.",
    intro: "Completa estos datos y prepararemos la solicitud para enviarla a Boom! Lab. Te responderemos con los siguientes pasos y la información necesaria para evaluar tu actividad.",
    directTitle: "También puedes escribirnos directamente",
    directBody: "Para una consulta breve, usa WhatsApp. Para enviar antecedentes o documentos, escríbenos por correo.",
    whatsapp: "Conversar por WhatsApp",
    email: "Enviar un correo",
    coverage: "Cobertura inicial",
    coverageBody: "Santiago y Concepción, Chile. Evaluamos otras comunas según fecha, formato y traslado.",
    back: "Volver al inicio",
    waMessage: "Hola, quisiera consultar por una actividad de Boom! Lab.",
  },
  en: {
    eyebrow: "Let’s make science happen",
    title: "Tell us what you want to activate.",
    intro: "Share the details below and we will prepare your enquiry for Boom! Lab. We will reply with the next steps and the information needed to assess your activity.",
    directTitle: "You can also contact us directly",
    directBody: "Use WhatsApp for a quick question, or email us when you need to attach background information or documents.",
    whatsapp: "Chat on WhatsApp",
    email: "Send an email",
    coverage: "Initial service area",
    coverageBody: "Santiago and Concepción, Chile. Other locations are assessed according to date, format and travel requirements.",
    back: "Back to home",
    waMessage: "Hello, I would like to ask about a Boom! Lab activity.",
  },
} as const;

export function ContactPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const alternateHref = locale === "es" ? "/en/contact" : "/es/contacto";

  return (
    <main>
      <SiteHeader locale={locale} alternateHref={alternateHref} />
      <section className="subpage-hero contact-hero">
        <div className="shell subpage-hero-inner">
          <a className="back-link" href={`/${locale}`}>← {t.back}</a>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
      </section>
      <section className="contact-page-section">
        <div className="shell contact-layout">
          <div className="contact-form-panel"><ContactForm locale={locale} /></div>
          <aside className="contact-side">
            <div className="contact-info-card">
              <span className="contact-info-icon" aria-hidden="true">✦</span>
              <h2>{t.directTitle}</h2>
              <p>{t.directBody}</p>
              <a className="button button-whatsapp" href={`${contactDetails.whatsappHref}?text=${encodeURIComponent(t.waMessage)}`} target="_blank" rel="noreferrer">{t.whatsapp}</a>
              <a className="contact-direct-link" href={`mailto:${contactDetails.email}`}>{t.email} →</a>
              <a className="contact-direct-link" href={contactDetails.instagramHref} target="_blank" rel="noreferrer">{contactDetails.instagramHandle} →</a>
            </div>
            <div className="contact-info-card contact-coverage-card">
              <span className="contact-info-icon" aria-hidden="true">⌖</span>
              <h2>{t.coverage}</h2>
              <p>{t.coverageBody}</p>
            </div>
          </aside>
        </div>
      </section>
      <SiteFooter locale={locale} />
    </main>
  );
}
