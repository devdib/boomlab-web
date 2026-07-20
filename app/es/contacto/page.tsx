import type { Metadata } from "next";
import { ContactPage } from "../../components/contact-page";

export const metadata: Metadata = {
  title: "Contacto | Boom! Lab",
  description: "Solicita una experiencia científica de Boom! Lab para colegios, familias o comunidades en Santiago y Concepción.",
};

export default function SpanishContactPage() {
  return <ContactPage locale="es" />;
}
