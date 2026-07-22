import type { Metadata } from "next";
import { ContactPage } from "../../components/contact-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  locale: "es",
  title: "Contacto | Boom! Lab",
  description: "Solicita una experiencia científica de Boom! Lab para colegios, familias o comunidades en Santiago y Concepción.",
  path: "/es/contacto",
  alternatePath: "/en/contact",
});

export default function SpanishContactPage() {
  return <ContactPage locale="es" />;
}
