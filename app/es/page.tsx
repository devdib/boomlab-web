import type { Metadata } from "next";
import { LandingPage } from "../components/landing-page";

export const metadata: Metadata = {
  title: "Boom! Lab | Experiencias científicas para aprender haciendo",
  description: "Talleres, ferias científicas y cumpleaños con ciencia para niñas, niños, colegios y comunidades en Biobío.",
};

export default function SpanishHome() {
  return <LandingPage locale="es" />;
}
