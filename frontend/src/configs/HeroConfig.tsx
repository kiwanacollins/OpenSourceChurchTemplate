import { Calendar, MapPin, Heart } from "lucide-react";
import { FeatureConfig } from "@/types/FeatureConfig";

export const heroConfig = {
  title: "Raising generals for generations",
  subtitle:
    "Shalom Gates of Praise Ministries is a community of believers sent on a whole mission, in the whole world, beginning with our very own.",
  buttons: [
    {
      text: "Join Us",
      href: "#services",
      className:
        "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
    },
    {
      text: "Learn More",
      href: "#about",
      className:
        "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
    },
  ],
  image: {
    src: "/assets/icons/new-placeholder.svg",
    alt: "Church gathering",
    width: 600,
    height: 400,
  },
  nextService: {
    text: "Next Service",
    time: "Sunday, 10:00 AM",
  },
  features: [
    {
      icon: Calendar,
      title: "Upcoming Events",
      description:
        "Join us for prayer, worship, and gatherings that strengthen the whole church family.",
      button: {
        text: "View Events",
        href: "/events",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
    {
      icon: MapPin,
      title: "Find Us",
      description:
        "Find Shalom Gates of Praise Ministries in Entebbe – Magala, Uganda.",
      button: {
        text: "Get Directions",
        href: "/location",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
    {
      icon: Heart,
      title: "Our Mission",
      description:
        "Preach, transform and send. We are a people on mission for our community and the world.",
      button: {
        text: "Learn More",
        href: "/about/aboutus",
        className:
          "mt-4 inline-block bg-darkMossGreen hover:bg-earthYellow text-white font-semibold py-2 px-4 rounded transition duration-300",
      },
      backgroundImage: "/assets/icons/new-placeholder.svg",
    },
  ] as FeatureConfig[],
};
