"use client";

import { useState, type FormEvent } from "react";
import { contactDetails, type Locale } from "../content";

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
    submit: "Preparar solicitud",
    sending: "Preparando…",
    required: "Los campos marcados con * son obligatorios.",
    success: "Solicitud preparada. Confirma el envío en la aplicación de correo que se abrió en tu dispositivo.",
    error: "Revisa los campos obligatorios antes de continuar.",
    subject: "Nueva solicitud desde boomlab.cl",
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
    submit: "Prepare request",
    sending: "Preparing…",
    required: "Fields marked * are required.",
    success: "Your request is ready. Please confirm sending it in the email application opened on your device.",
    error: "Please review the required fields before continuing.",
    subject: "New enquiry from boomlab.cl",
  },
} as const;

export function ContactForm({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");

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
    const href = `mailto:${contactDetails.email}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("success");
    window.location.href = href;
  }

  return (
    <form className="contact-form" onSubmit={submitForm} noValidate>
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
        <span>{t.fields.consent} *</span>
      </label>
      <div className="form-submit-row">
        <button className="button" type="submit">{t.submit}<span aria-hidden="true">→</span></button>
        {status !== "idle" && (
          <p className={`form-status form-status-${status}`} role="status">
            {status === "success" ? t.success : t.error}
          </p>
        )}
      </div>
    </form>
  );
}
