"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden bg-darkMossGreen py-24">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/feature-community.jpg"
          alt="Community"
          fill
          className="object-cover object-center opacity-15"
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <p className="text-earthYellow text-sm font-semibold uppercase tracking-[0.3em] mb-4">
            You belong here
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to be part of something greater?
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Whether you&apos;re just exploring faith or looking for a home church in Entebbe,
            we&apos;d love to meet you. Come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-3 text-base font-medium bg-earthYellow text-black rounded-full
                       hover:bg-earthYellow/90 transition-all duration-300
                       inline-flex items-center justify-center
                       shadow-md hover:shadow-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 text-base font-medium text-white bg-white/10 rounded-full
                       hover:bg-white/20 transition-all duration-300
                       inline-flex items-center justify-center
                       border border-white/20 shadow-md hover:shadow-lg"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
