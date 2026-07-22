import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({ locale: "en", title: "Editorial policy | Boom! Lab", description: "How Boom! Lab creates, reviews and updates original educational content.", path: "/en/editorial-policy", alternatePath: "/es/politica-editorial" });
export default function EditorialPolicyPage() { return <TrustPage locale="en" kind="editorial" />; }
