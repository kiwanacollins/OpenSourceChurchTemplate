import {
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "lucide-react";

export const footerConfig = {
  sections: [
    {
      title: "Our Church",
      enabled: true,
      links: [
        { label: "About Us", href: "/about/aboutus" },
        { label: "Our Mission", href: "/about" },
        { label: "Leadership", href: "/about" },
      ],
    },
    {
      title: "Media",
      enabled: false,
      links: [
        { label: "Sermons", href: "#" },
        { label: "Watch Online", href: "#" },
        { label: "Elevation Store", href: "#" },
        { label: "Worship", href: "#" },
        { label: "Podcast", href: "#" },
      ],
    },
    {
      title: "Ministries",
      enabled: true,
      links: [
        { label: "Family", href: "/ministries" },
        { label: "Servant Leadership", href: "/ministries" },
        { label: "Winning Souls", href: "/ministries" },
      ],
    },
    {
      title: "Opportunities",
      enabled: true,
      links: [
        { label: "Get Involved", href: "/get-involved" },
        { label: "Events", href: "/events" },
      ],
    },
    {
      title: "Join Us",
      enabled: true,
      links: [
        { label: "Visit Us", href: "/location" },
        { label: "Watch Online", href: "/watch" },
        { label: "Events", href: "/events" },
      ],
    },
    {
      title: "Finance",
      enabled: false,
      links: [
        { label: "Giving", href: "#" },
        { label: "Personal", href: "#" },
        { label: "MyElevation", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
  ],
  contactInfo: {
    address: "Entebbe – Magala, Uganda",
    phone: "+256 755 832138",
  },
  socialMedia: [
    { icon: YoutubeIcon, label: "YouTube", href: "#" },
    { icon: FacebookIcon, label: "Facebook", href: "#" },
    { icon: InstagramIcon, label: "Instagram", href: "#" },
    { icon: TwitterIcon, label: "Twitter", href: "#" },
  ],
  legalInfo: {
    copyright: "Shalom Gates of Praise Ministries. All Rights Reserved",
    links: [
      { label: "Terms Of Use", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Preferences", href: "/cookie" },
    ],
    additionalText:
      "This site is protected by reCAPTCHA and the Google Privacy Policy & Terms Of Service apply.",
  },
};
