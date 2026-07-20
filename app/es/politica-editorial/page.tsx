import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";

export const metadata: Metadata = { title: "Política editorial | Boom! Lab", description: "Cómo Boom! Lab crea, revisa y actualiza su contenido educativo original." };
export default function EditorialPolicyPage() { return <TrustPage locale="es" kind="editorial" />; }
