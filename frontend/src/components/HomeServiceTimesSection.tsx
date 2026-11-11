"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, MapPin } from "lucide-react";

const services = [
  {
    day: "Sunday",
    name: "Sunday Worship Service",
    time: "9:00 AM — 12:00 PM",
    description: "Spirit-filled worship, powerful preaching, and community.",
  },
  {
    day: "Friday",
    name: "Shalom Prayer Evenings",
    time: "6:00 PM — 9:00 PM",
    description: "Monthly prayer night — the last Friday of every month.",
  },
  {
    day: "Wednesday",
    name: "Midweek Bible Study",
    time: "6:30 PM — 8:30 PM",
    description: "Deep dive into the Word with teaching and discussion.",
  },
];

export default function HomeServiceTimesSection() {
  return (
    <section className="py-24 bg-cornsilk/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-darkMossGreen text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Come as you are
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-darkMossGreen">
            Join us this week
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-earthYellow/10"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-earthYellow mb-3">
                {service.day}
              </div>
              <h3 className="text-xl font-semibold text-darkMossGreen mb-2">
                {service.name}
              </h3>
              <div className="flex items-center gap-2 text-pakistanGreen/70 text-sm mb-3">
                <Clock className="w-4 h-4 flex-shrink-0" />
                <span>{service.time}</span>
              </div>
              <p className="text-pakistanGreen/80 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-pakistanGreen/70 text-sm">
            <MapPin className="w-4 h-4 text-earthYellow flex-shrink-0" />
            <span>Entebbe – Magala, Uganda</span>
          </div>
          <span className="hidden sm:block text-pakistanGreen/30">·</span>
          <Link
            href="/location"
            className="text-sm font-semibold text-darkMossGreen hover:text-earthYellow transition-colors underline underline-offset-4"
          >
            Get directions
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
