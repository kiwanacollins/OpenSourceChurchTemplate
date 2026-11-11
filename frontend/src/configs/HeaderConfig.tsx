import ConnectionForm from "../components/ConnectionForm";
import ContactModal from "../components/ui/ContactModal";

export const headerConfig = {
  logo: {
    src: "/assets/client/logo/shalom-logo-primary.jpg",
    alt: "Shalom Gates of Praise Ministries",
  },
  navItems: [
    { name: "Home", href: "/" },
    { name: "Visit Us", href: "/location" },
    {
      name: "About",
      href: "/about",
      dropdown: [
        { name: "About Us", href: "/about/aboutus" },
        { name: "Ministries", href: "/ministries" },
      ],
    },
    { name: "Events", href: "/events" },
    { name: "Watch", href: "/watch" },
    {
      name: "Get Involved",
      href: "/get-involved",
      dropdown: [
        { name: "Ministries", href: "/ministries" },
        { name: "Resources", href: "/resources" },
      ],
    },
  ],
  buttons: [
    {
      enabled: true,
      name: "Connection Form",
      component: ConnectionForm,
      className:
        "bg-primary text-white hover:bg-primary-dark px-4 py-2 rounded-lg transition duration-300",
    },
    {
      enabled: true,
      name: "Contact Us",
      component: ContactModal,
      className:
        "bg-darkMossGreen text-white hover:bg-primary px-4 py-2 rounded-lg transition duration-300 ml-2",
    },
  ],
  subheader: {
    name: "SHALOM GATES OF PRAISE MINISTRIES · ENTEBBE – MAGALA, UGANDA",
    enabled: true,
    className:
      "bg-primary text-white text-center py-2 font-medium tracking-wide",
  },
};
