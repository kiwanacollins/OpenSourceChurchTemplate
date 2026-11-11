"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const pillars = [
  {
    word: "Preach",
    description:
      "Declaring the uncompromised Word of God with boldness, clarity, and the fire of the Holy Spirit.",
  },
  {
    word: "Transform",
    description:
      "Discipling believers into devoted followers of Christ — renewed in mind, heart, and character.",
  },
  {
    word: "Send",
    description:
      "Releasing equipped generals into every sphere of life and every corner of the earth.",
  },
];

export default function HomeMissionSection() {
  return (
    <section className="relative overflow-hidden bg-darkMossGreen py-32 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-mission.jpg"
          alt="Mission"
          fill
          className="object-cover object-center opacity-20 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-darkMossGreen/80 to-darkMossGreen" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-earthYellow text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            Our Mandate
          </p>
          <h2 className="text-5xl sm:text-7xl font-semibold text-white">
            Raising generals for generations
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.word}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-left border-t border-white/25 pt-7"
            >
              <div className="text-4xl font-semibold text-earthYellow mb-5">
                {pillar.word}
              </div>
              <p className="text-white/70 text-base leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
