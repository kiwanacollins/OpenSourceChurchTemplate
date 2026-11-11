import type { Metadata } from "next";
import ContentPage from "@/components/ContentPage";

export const metadata: Metadata = {
  title: "Bible Study Materials",
};

export default function BibleStudyPage() {
  return (
    <ContentPage
      title="Bible Study Materials"
      subtitle="Grow deeper in the Word and apply it to everyday life."
      backgroundImage="/assets/images/resources-devotional.jpg"
      sections={[
        {
          heading: "Study together",
          body: "Our Bible study gatherings create space to ask honest questions, learn from Scripture, and encourage one another in faith.",
          items: ["Weekly Scripture reading", "Guided discussion", "Prayer and reflection"],
        },
        {
          heading: "Begin this week",
          body: "Start with a Gospel, keep a journal of what you learn, and share your questions with a trusted member of our church family.",
        },
      ]}
      action={{ label: "Contact us about Bible study", href: "/contact" }}
    />
  );
}
