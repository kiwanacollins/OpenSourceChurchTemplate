import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Easter Celebration",
};

export default function EasterPage() {
  return (
    <ContentPage
      title="Easter Celebration"
      subtitle="Remembering the resurrection of Jesus Christ."
      backgroundImage="/assets/images/events-praise-feast.jpg"
      sections={[
        {
          heading: "A celebration of hope",
          body: "Easter is an invitation to celebrate the risen Christ and the new life, forgiveness, and hope we have through Him.",
          items: ["Praise and worship", "Scripture and teaching", "Prayer and fellowship"],
        },
        {
          heading: "Join the celebration",
          body: "Although this event has passed, you are always welcome to worship with us and take part in the life of our church family.",
        },
      ]}
      action={{ label: "See current events", href: "/events" }}
    />
  );
}
