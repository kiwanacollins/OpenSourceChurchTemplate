import type { Metadata } from "next";
import HeroSection from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import HomeMissionSection from "@/components/HomeMissionSection";
import HomeServiceTimesSection from "@/components/HomeServiceTimesSection";
import HomeCtaSection from "@/components/HomeCtaSection";

export const metadata: Metadata = {
  title: 'Shalom Gates of Praise Ministries',
  description: 'Shalom Gates of Praise Ministries in Entebbe – Magala, Uganda. Raising generals for generations.',
  openGraph: {
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    images: [
      {
        url: '/assets/images/hero-worship.jpg',
        width: 1920,
        height: 1080,
        alt: 'Shalom Gates of Praise Ministries',
      },
    ],
  },
  twitter: {
    title: 'Shalom Gates of Praise Ministries',
    description: 'Raising generals for generations in Entebbe – Magala, Uganda.',
    images: ['/assets/images/hero-worship.jpg'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HomeMissionSection />
      <HomeServiceTimesSection />
      <HomeCtaSection />
    </>
  );
}
