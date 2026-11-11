import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Community Outreach",
};

export default function OutreachPage() {
  return (
    <ContentPage
      title="Community Outreach"
      subtitle="Sharing God's love through practical service."
      backgroundImage="/assets/images/feature-outreach.jpg"
      sections={[
        {
          heading: "Faith in action",
          body: "We seek the good of our neighbors by listening to real needs and responding with compassion, prayer, and practical support.",
          items: ["Serving families in need", "Supporting young people", "Praying with our community"],
        },
        {
          heading: "Join the work",
          body: "Outreach is something we do together. Bring your time, skills, ideas, or resources and help us bring hope to Entebbe and beyond.",
        },
      ]}
      action={{ label: "Join an outreach team", href: "/get-involved/serve" }}
    />
  );
}
