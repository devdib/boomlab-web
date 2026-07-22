import type { Metadata } from "next";
import { LandingPage } from "./components/landing-page";
import { createPageMetadata } from "./seo";

export const metadata: Metadata = createPageMetadata({
  locale: "es",
  title: "Boom! Lab | Experiencias científicas para aprender haciendo",
  description: "Talleres, ferias científicas y cumpleaños con ciencia para niñas, niños, colegios y comunidades en Santiago y Concepción.",
  path: "/es",
  alternatePath: "/en",
});

export default function Home() {
  return <LandingPage locale="es" />;
}
