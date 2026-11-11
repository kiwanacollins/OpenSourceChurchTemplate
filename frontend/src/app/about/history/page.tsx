import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Our History",
};

export default function HistoryPage() {
  return (
    <ContentPage
      title="Our History"
      subtitle="A growing story of worship, service, and faithfulness."
      backgroundImage="/assets/images/about-hero.jpg"
      sections={[
        {
          heading: "Our beginning",
          body: "Shalom Gates of Praise Ministries began with a desire to see people encounter the love of Jesus and become a blessing in their families and communities.",
        },
        {
          heading: "Our continuing story",
          body: "From Entebbe - Magala, our church continues to grow through worship, biblical teaching, prayer, and practical service to the people around us.",
          items: ["Authentic worship", "Meaningful relationships", "Generational discipleship"],
        },
      ]}
      action={{ label: "Meet our church family", href: "/visit" }}
    />
  );
}
