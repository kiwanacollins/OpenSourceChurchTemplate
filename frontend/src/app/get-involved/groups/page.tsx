import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Connect Groups",
};

export default function GroupsPage() {
  return (
    <ContentPage
      title="Connect Groups"
      subtitle="Find belonging, encouragement, and growth in community."
      backgroundImage="/assets/images/get-involved-hero.jpg"
      sections={[
        {
          heading: "Life is better together",
          body: "Connect Groups are welcoming spaces where people study Scripture, pray, and support one another through every season of life.",
          items: ["Build meaningful friendships", "Discuss the Sunday message", "Pray for one another"],
        },
        {
          heading: "Find your group",
          body: "Reach out to our team and we will help you find a group that fits your location, schedule, and season of life.",
        },
      ]}
      action={{ label: "Ask about Connect Groups", href: "/contact" }}
    />
  );
}
