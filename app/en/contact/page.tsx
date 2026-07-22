import type { Metadata } from "next";
import { ContactPage } from "../../components/contact-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Contact | Boom! Lab",
  description: "Enquire about a Boom! Lab science experience for schools, families or communities in Santiago and Concepción.",
  path: "/en/contact",
  alternatePath: "/es/contacto",
});

export default function EnglishContactPage() {
  return <ContactPage locale="en" />;
}
