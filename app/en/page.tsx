import type { Metadata } from "next";
import { LandingPage } from "../components/landing-page";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  locale: "en",
  title: "Boom! Lab | Hands-on science experiences",
  description: "Science workshops, science fairs and science birthdays for children, schools and communities in Santiago and Concepción, Chile.",
  path: "/en",
  alternatePath: "/es",
});

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
