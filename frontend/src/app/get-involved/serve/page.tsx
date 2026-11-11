import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Serve with Us",
};

export default function ServePage() {
  return (
    <ContentPage
      title="Serve with Us"
      subtitle="Use your gifts to love God and serve people."
      backgroundImage="/assets/images/get-involved-hero.jpg"
      sections={[
        {
          heading: "Every gift matters",
          body: "There is a place for everyone to contribute at Shalom Gates of Praise Ministries. We will help you discover a team where your gifts and availability can make a difference.",
          items: ["Welcome and hospitality", "Worship and creative arts", "Children and family ministry", "Community outreach"],
        },
        {
          heading: "Take your next step",
          body: "Tell us what you enjoy, how you would like to help, and when you are available. Our team will help you get connected.",
        },
      ]}
      action={{ label: "Get connected", href: "/contact" }}
    />
  );
}
