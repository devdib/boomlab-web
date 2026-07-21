import type { Metadata } from "next";
import { LandingPage } from "../components/landing-page";

export const metadata: Metadata = {
  title: "Boom! Lab | Hands-on science experiences",
  description: "Science workshops, science fairs and science birthdays for children, schools and communities in Biobío, Chile.",
};

export default function EnglishHome() {
  return <LandingPage locale="en" />;
}
