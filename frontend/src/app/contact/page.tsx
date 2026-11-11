import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";
import ConnectionForm from "@/components/ConnectionForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Connect with Shalom Gates of Praise Ministries.",
};

export default function ContactPage() {
  return (
    <div>
      <ContentPage
        title="Contact Us"
        subtitle="We would love to hear from you and pray with you."
        backgroundImage="/assets/images/get-involved-hero.jpg"
        sections={[
          {
            heading: "Connect with our church family",
            body: "Whether you are visiting for the first time, looking for prayer, or would like to serve, our team is ready to welcome you.",
            items: [
              "Location: Entebbe - Magala, Uganda",
              "Phone: +256 773 770216",
              "Email: hello@shalomgatesofpraise.org",
            ],
          },
          {
            heading: "Send us your details",
            body: "Complete our connection form and a member of the pastoral team will follow up with you.",
          },
        ]}
      />
      <div className="pb-24 md:pb-32 text-center">
        <ConnectionForm />
      </div>
    </div>
  );
}
