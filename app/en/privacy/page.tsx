import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";
import { createPageMetadata } from "../../seo";

export const metadata: Metadata = createPageMetadata({ locale: "en", title: "Privacy policy | Boom! Lab", description: "Information about contact data, cookies, analytics and future advertising on Boom! Lab.", path: "/en/privacy", alternatePath: "/es/privacidad" });
export default function PrivacyPage() { return <TrustPage locale="en" kind="privacy" />; }
