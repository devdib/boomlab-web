import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({ locale: "es", title: "Política de privacidad | Boom! Lab", description: "Información sobre datos de contacto, cookies, analítica y futura publicidad en Boom! Lab.", path: "/es/privacidad", alternatePath: "/en/privacy" });
export default function PrivacyPage() { return <TrustPage locale="es" kind="privacy" />; }
