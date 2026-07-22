"use client";

import { useState, type FormEvent } from "react";
import { trackAnalyticsEvent } from "../analytics";
import { contactDetails, type Locale } from "../content";

type PreparedRequest = {
  emailHref: string;
  text: string;
  whatsappHref: string;
};

const copy = {
  es: {
    fields: {
      name: "Nombre de la persona o institución",
      email: "Correo electrónico",
      phone: "Teléfono",
      interest: "¿Qué experiencia necesitas?",
      location: "Comuna y región",
      date: "Fecha tentativa (opcional)",
      participants: "Cantidad aproximada de participantes (opcional)",
      message: "Cuéntanos el contexto",
      consent: "Acepto que Boom! Lab use estos datos para responder esta solicitud.",
    },
    options: ["Taller para colegio", "Cumpleaños científico", "Jornada STEM", "Laboratorio móvil", "Compra de kits", "Alianza institucional", "Otro"],
    placeholders: {
      name: "Ej.: Colegio Horizonte o Ana Pérez",
      phone: "+56 9…",
      location: "Ej.: Concepción, Biobío",
      message: "Edad, objetivo, espacio disponible y cualquier dato que nos ayude a orientarte.",
    },
    submit: "Continuar para enviar",
    sending: "Preparando…",
    required: "Los campos marcados con * son obligatorios.",
    successTitle: "Tu solicitud está lista",
    success: "Elige cómo enviarla. Boom! Lab recibirá los datos sólo cuando confirmes el envío en WhatsApp o en tu aplicación de correo.",
    whatsapp: "Enviar por WhatsApp",
    email: "Enviar por correo",
    copy: "Copiar solicitud",
    copied: "Solicitud copiada",
    copyError: "No pudimos copiarla automáticamente. Elige WhatsApp o correo.",
    error: "Revisa los campos obligatorios antes de continuar.",
    subject: "Nueva solicitud desde boomlab.cl",
    privacy: "Leer política de privacidad",
  },
  en: {
    fields: {
      name: "Name or organisation",
      email: "Email address",
      phone: "Phone number",
      interest: "What kind of experience do you need?",
      location: "City and region",
      date: "Tentative date (optional)",
      participants: "Approximate number of participants (optional)",
      message: "Tell us about the context",
      consent: "I agree that Boom! Lab may use these details to answer this request.",
    },
    options: ["School workshop", "Science birthday", "STEM day", "Mobile laboratory", "Science kits", "Institutional partnership", "Other"],
    placeholders: {
      name: "E.g. Horizon School or Ana Pérez",
      phone: "+56 9…",
      location: "E.g. Concepción, Biobío",
      message: "Age group, goal, available space and any details that will help us guide you.",
    },
    submit: "Continue to send",
    sending: "Preparing…",
    required: "Fields marked * are required.",
    successTitle: "Your request is ready",
    success: "Choose how to send it. Boom! Lab will receive your details only after you confirm in WhatsApp or your email application.",
    whatsapp: "Send via WhatsApp",
    email: "Send via email",
    copy: "Copy request",
    copied: "Request copied",
    copyError: "We could not copy it automatically. Please choose WhatsApp or email.",
    error: "Please review the required fields before continuing.",
    subject: "New enquiry from boomlab.cl",
    privacy: "Read the privacy policy",
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [preparedRequest, setPreparedRequest] = useState<PreparedRequest | null>(null);
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus("error");
      return;
    }

    const data = new FormData(form);
    const lines = [
      `${t.fields.name}: ${data.get("name")}`,
      `${t.fields.email}: ${data.get("email")}`,
      `${t.fields.phone}: ${data.get("phone")}`,
      `${t.fields.interest}: ${data.get("interest")}`,
      `${t.fields.location}: ${data.get("location")}`,
      `${t.fields.date}: ${data.get("date") || "—"}`,
      `${t.fields.participants}: ${data.get("participants") || "—"}`,
      "",
      `${t.fields.message}:`,
      String(data.get("message")),
    ];
    const text = lines.join("\n");
    const emailHref = `mailto:${contactDetails.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(text)}`;
    const whatsappHref = `${contactDetails.whatsappHref}?text=${encodeURIComponent(`${t.subject}\n\n${text}`)}`;

    setPreparedRequest({ emailHref, text, whatsappHref });
    setCopyStatus("idle");
    setStatus("success");
    window.requestAnimationFrame(() => {
      document.getElementById("contact-send-options")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  async function copyRequest() {
    if (!preparedRequest) return;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(preparedRequest.text);
      } else {
        const field = document.createElement("textarea");
        field.value = preparedRequest.text;
        field.setAttribute("readonly", "");
        field.style.position = "fixed";
        field.style.opacity = "0";
        document.body.appendChild(field);
        field.select();
        const copied = document.execCommand("copy");
        document.body.removeChild(field);
        if (!copied) throw new Error("Copy command failed");
      }
      setCopyStatus("copied");
      trackAnalyticsEvent("lead_request_copied", { locale });
    } catch {
      setCopyStatus("error");
    }
  }

  return (
    <form
      className="contact-form"
      onSubmit={submitForm}
      onChange={() => {
        if (status !== "idle") setStatus("idle");
        if (preparedRequest) setPreparedRequest(null);
        if (copyStatus !== "idle") setCopyStatus("idle");
      }}
      noValidate
    >
      <p className="form-required">{t.required}</p>
      <div className="field-grid">
        <label className="form-field">
          <span>{t.fields.name} *</span>
          <input name="name" type="text" autoComplete="name" placeholder={t.placeholders.name} required />
        </label>
        <label className="form-field">
          <span>{t.fields.email} *</span>
          <input name="email" type="email" autoComplete="email" placeholder="nombre@correo.cl" required />
        </label>
        <label className="form-field">
          <span>{t.fields.phone} *</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder={t.placeholders.phone} required />
        </label>
        <label className="form-field">
          <span>{t.fields.interest} *</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>—</option>
            {t.options.map((option) => <option key={option}>{option}</option>)}
          </select>
        </label>
        <label className="form-field">
          <span>{t.fields.location} *</span>
          <input name="location" type="text" autoComplete="address-level2" placeholder={t.placeholders.location} required />
        </label>
        <label className="form-field">
          <span>{t.fields.date}</span>
          <input name="date" type="date" />
        </label>
        <label className="form-field">
          <span>{t.fields.participants}</span>
          <input name="participants" type="number" inputMode="numeric" min="1" max="1000" placeholder={locale === "es" ? "Ej.: 25" : "E.g. 25"} />
        </label>
        <label className="form-field form-field-wide">
          <span>{t.fields.message} *</span>
          <textarea name="message" rows={6} minLength={20} placeholder={t.placeholders.message} required />
        </label>
      </div>
      <label className="form-consent">
        <input name="consent" type="checkbox" required />
        <span>{t.fields.consent} * <a href={locale === "es" ? "/es/privacidad" : "/en/privacy"}>{t.privacy}</a>.</span>
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">{t.submit}<span aria-hidden="true">→</span></button>
        {status === "error" && (
          <p className={`form-status form-status-${status}`} role="status">
            {t.error}
          </p>
        )}
      </div>
      {status === "success" && preparedRequest && (
        <section id="contact-send-options" className="form-send-options" aria-live="polite">
          <span className="form-send-icon" aria-hidden="true">✓</span>
          <div>
            <h2>{t.successTitle}</h2>
            <p>{t.success}</p>
            <div className="form-send-actions">
              <a className="button button-whatsapp" href={preparedRequest.whatsappHref} target="_blank" rel="noreferrer" onClick={() => trackAnalyticsEvent("generate_lead", { method: "whatsapp", locale })}>
                {t.whatsapp}<span aria-hidden="true">↗</span>
              </a>
              <a className="button button-outline" href={preparedRequest.emailHref} onClick={() => trackAnalyticsEvent("generate_lead", { method: "email", locale })}>
                {t.email}<span aria-hidden="true">→</span>
              </a>
              <button className="form-copy-button" type="button" onClick={copyRequest}>{t.copy}</button>
            </div>
            {copyStatus !== "idle" && (
              <p className={`form-copy-status form-copy-status-${copyStatus}`} role="status">
                {copyStatus === "copied" ? t.copied : t.copyError}
              </p>
            )}
          </div>
        </section>
      )}
    </form>
  );
}
