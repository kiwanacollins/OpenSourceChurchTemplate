import ChurchResourcesPage from "./components/ChurchResourcesPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Church Resources | Shalom Gates of Praise Ministries",
  description: "Access important church documents, forms, and resources",
};

export default function ChurchResources() {
  return <ChurchResourcesPage />;
}
