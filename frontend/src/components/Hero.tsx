"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-foreground -mt-[120px] sm:-mt-[140px]">
      {/* Full width hero image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/hero-worship.jpg"
          alt="Shalom Gates of Praise Ministries"
          fill
          className="object-cover object-center opacity-55 grayscale"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/45 to-transparent" />
      </div>

      {/* Hero Content */}
      <div className="relative min-h-screen flex items-center md:items-end">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-24 pt-[220px] sm:pt-[240px]">
          <div className="max-w-4xl space-y-8">
            <motion.p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.28em] text-earthYellow"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Shalom Gates of Praise Ministries
            </motion.p>
            <motion.h1 
              className="max-w-5xl text-5xl sm:text-7xl md:text-8xl lg:text-[9.5rem] font-semibold tracking-[-0.07em] leading-[0.86] text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Raising generals for generations
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Preach · Transform · Send
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-5 pt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link 
                href="/visit"
                className="px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] bg-earthYellow text-black
                         hover:bg-earthYellow/90 transition-all duration-300 
                         inline-flex items-center justify-center sm:w-auto w-full
                         border border-earthYellow shadow-md hover:shadow-lg"
              >
                Visit Us
              </Link>
              <Link
                href="/watch"
                className="px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white bg-white/10
                         hover:bg-darkMossGreen transition-all duration-300 
                         inline-flex items-center justify-center sm:w-auto w-full
                         border border-earthYellow/20 shadow-md hover:shadow-lg"
              >
                Explore Our Mission
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
