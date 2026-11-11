import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Our Mission",
};

export default function MissionPage() {
  return (
    <ContentPage
      title="Our Mission"
      subtitle="Raising generals for generations."
      backgroundImage="/assets/images/hero-mission.jpg"
      sections={[
        {
          heading: "What we are here to do",
          body: "We exist to know, enjoy, and express the love of Jesus through authentic worship, meaningful relationships, and service to our community.",
        },
        {
          heading: "How we live it out",
          body: "We make disciples who know God's Word, care for people, and carry the hope of Christ into every generation.",
          items: ["Worship God wholeheartedly", "Grow through biblical teaching", "Serve our community with love"],
        },
      ]}
      action={{ label: "Get involved", href: "/get-involved" }}
    />
  );
}
