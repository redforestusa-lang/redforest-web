"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Quality",  href: "/quality"  },
  { label: "Contact",  href: "/contact"  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <img src="/logo.svg" alt="Red Forest LLC"
            className="h-7 w-auto group-hover:opacity-85 transition-opacity duration-200" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[#d4d4d8] hover:text-white text-[13px] font-medium tracking-[0.2em] uppercase transition-colors duration-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+14695105689"
            className="ml-2 inline-flex items-center gap-2 text-white hover:text-[#b91c1c] text-[12px] font-semibold tracking-[0.1em] whitespace-nowrap transition-colors duration-200"
          >
            <Phone size={13} className="text-[#b91c1c]" />
            469 510 5689
          </a>
          <Link
            href="/contact"
            className="border border-[#b91c1c] text-[#b91c1c] hover:bg-[#b91c1c] hover:text-white text-[12px] font-bold tracking-[0.2em] uppercase px-5 py-2 whitespace-nowrap transition-all duration-200"
          >
            Free Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#a1a1aa] hover:text-white transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-md border-t border-[#27272a] px-6 py-8 flex flex-col gap-6"
          >
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[#d4d4d8] hover:text-white text-[13px] tracking-[0.2em] uppercase font-medium transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+14695105689"
              className="inline-flex items-center gap-2 text-white text-[13px] font-semibold tracking-[0.1em]"
            >
              <Phone size={13} className="text-[#b91c1c]" />
              469 510 5689
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 border border-[#b91c1c] text-[#b91c1c] text-[12px] tracking-[0.2em] uppercase font-bold px-5 py-3 text-center"
            >
              Free Quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
