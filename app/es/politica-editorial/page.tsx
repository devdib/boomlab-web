import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({ locale: "es", title: "Política editorial | Boom! Lab", description: "Cómo Boom! Lab crea, revisa y actualiza su contenido educativo original.", path: "/es/politica-editorial", alternatePath: "/en/editorial-policy" });
export default function EditorialPolicyPage() { return <TrustPage locale="es" kind="editorial" />; }
