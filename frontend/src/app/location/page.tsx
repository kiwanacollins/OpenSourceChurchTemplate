import ChurchLocation from "./components/ChurchLocation";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Location | Shalom Gates of Praise Ministries",
  description: "Find our church location and service times",
};

export default function Location() {
  return <ChurchLocation />;
}
