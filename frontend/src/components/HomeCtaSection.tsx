"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomeCtaSection() {
  return (
    <section className="relative overflow-hidden bg-earthYellow py-32 md:py-40">
      <div className="absolute inset-0">
        <Image
          src="/assets/images/feature-community.jpg"
          alt="Community"
          fill
          className="object-cover object-center opacity-10 grayscale"
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
          <p className="text-foreground text-xs font-bold uppercase tracking-[0.3em] mb-4">
            You belong here
          </p>
          <h2 className="text-5xl sm:text-7xl font-semibold text-foreground mb-6">
            Ready to be part of something greater?
          </h2>
          <p className="text-foreground/70 text-lg mb-10 leading-relaxed">
            Whether you&apos;re just exploring faith or looking for a home church in Entebbe,
            we&apos;d love to meet you. Come as you are.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/visit"
              className="px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] bg-foreground text-background
                       hover:bg-earthYellow/90 transition-all duration-300
                       inline-flex items-center justify-center
                       shadow-md hover:shadow-lg"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-foreground bg-transparent
                       hover:bg-white/20 transition-all duration-300
                       inline-flex items-center justify-center
                       border border-foreground/30 shadow-md hover:shadow-lg"
            >
              Learn About Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
