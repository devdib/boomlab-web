import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";

export const metadata: Metadata = { title: "Política de privacidad | Boom! Lab", description: "Información sobre datos de contacto, cookies, analítica y futura publicidad en Boom! Lab." };
export default function PrivacyPage() { return <TrustPage locale="es" kind="privacy" />; }
