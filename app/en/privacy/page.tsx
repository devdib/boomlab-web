import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";

export const metadata: Metadata = { title: "Privacy policy | Boom! Lab", description: "Information about contact data, cookies, analytics and future advertising on Boom! Lab." };
export default function PrivacyPage() { return <TrustPage locale="en" kind="privacy" />; }
