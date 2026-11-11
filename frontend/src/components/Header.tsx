"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { headerConfig } from "@/configs/HeaderConfig";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100]">
      {/* Announcement Bar */}
      <div className="bg-earthYellow text-black text-center py-2 text-[10px] font-bold uppercase tracking-[0.22em]">
        {headerConfig.subheader.name}
      </div>

      {/* Main Header */}
      <div className="mx-0">
        <header
          className={cn(
            "w-full transition-all duration-300",
            "bg-background/90 backdrop-blur-md",
            "border-b border-foreground/10",
            "px-4 sm:px-8",
            isScrolled && "shadow-lg bg-background"
          )}
        >
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-2">
              <Image
                src={headerConfig.logo.src}
                alt={headerConfig.logo.alt}
                width={36}
                height={36}
                className="h-9 w-9 rounded-sm object-cover flex-shrink-0"
                priority
              />
              <span className="hidden sm:block font-semibold text-xs uppercase tracking-[0.12em] text-foreground leading-tight max-w-[190px]">
                Shalom Gates of Praise Ministries
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-7">
              {headerConfig.navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[11px] font-bold uppercase tracking-[0.14em] text-foreground/70 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <Button
                className="bg-foreground hover:bg-darkMossGreen text-background rounded-none px-5 text-[11px] uppercase tracking-[0.12em]"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-1 sm:p-2"
              aria-label="Open menu"
              title="Open menu"
            >
              <Menu className="text-gray-600" />
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween" }}
            className="fixed inset-0 z-50 bg-white md:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2">
                  <Image
                    src={headerConfig.logo.src}
                    alt={headerConfig.logo.alt}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-sm object-cover"
                  />
                  <span className="font-semibold text-xs uppercase tracking-[0.12em] text-foreground leading-tight">
                    Shalom Gates of Praise Ministries
                  </span>
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2"
                  aria-label="Close menu"
                  title="Close menu"
                >
                  <X className="text-gray-600" />
                </button>
              </div>
              <nav className="flex-1 overflow-auto px-4 py-2">
                {headerConfig.navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block border-b border-foreground/10 py-4 text-2xl font-semibold text-foreground hover:text-darkMossGreen transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <Button asChild className="w-full mt-4 bg-foreground hover:bg-darkMossGreen text-background rounded-none uppercase tracking-[0.12em]">
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                </Button>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
