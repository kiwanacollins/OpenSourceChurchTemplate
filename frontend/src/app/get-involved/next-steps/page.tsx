import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Next Steps",
};

export default function NextStepsPage() {
  return (
    <ContentPage
      title="Next Steps"
      subtitle="Discover a practical next step in your journey with Jesus."
      backgroundImage="/assets/images/get-involved-hero.jpg"
      sections={[
        {
          heading: "Start where you are",
          body: "You do not have to figure everything out at once. We will walk with you as you learn about Jesus and find your place in the church family.",
          items: ["Join a worship service", "Meet a Connect Group", "Begin serving", "Request prayer"],
        },
        {
          heading: "We are here to help",
          body: "Our pastoral team is available to answer questions and help you choose the next step that is right for you.",
        },
      ]}
      action={{ label: "Talk with our team", href: "/contact" }}
    />
  );
}
