import type { Metadata } from "next";
import { ContactPage } from "../../components/contact-page";

export const metadata: Metadata = {
  title: "Contact | Boom! Lab",
  description: "Enquire about a Boom! Lab science experience for schools, families or communities in Santiago and Concepción.",
};

export default function EnglishContactPage() {
  return <ContactPage locale="en" />;
}
