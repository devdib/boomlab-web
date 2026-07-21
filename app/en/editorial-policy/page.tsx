import type { Metadata } from "next";
import { TrustPage } from "../../components/trust-page";

export const metadata: Metadata = { title: "Editorial policy | Boom! Lab", description: "How Boom! Lab creates, reviews and updates original educational content." };
export default function EditorialPolicyPage() { return <TrustPage locale="en" kind="editorial" />; }
