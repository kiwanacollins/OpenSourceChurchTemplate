import type { Metadata } from "next";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";

export const metadata: Metadata = {
  title: 'Shalom Gates of Praise Ministries',
  description: 'Shalom Gates of Praise Ministries in Entebbe – Magala, Uganda. Raising generals for generations.',
  openGraph: {
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    images: [
      {
        url: '/assets/icons/new-placeholder.svg',
        width: 800,
        height: 600,
        alt: 'Shalom Gates of Praise Ministries',
      },
    ],
  },
  twitter: {
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    images: ['/assets/icons/new-placeholder.svg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
    </>
  );
}
