"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

// Placeholder projects — replace with real photos later
const projects = [
  { title: "Office Renovation", location: "Dallas, TX", type: "Renovation", year: "2024" },
  { title: "Retail Build-Out", location: "Fort Worth, TX", type: "New Construction", year: "2024" },
  { title: "Kitchen Remodel", location: "Plano, TX", type: "Renovation", year: "2023" },
  { title: "Warehouse Addition", location: "Irving, TX", type: "New Construction", year: "2023" },
  { title: "Restaurant Renovation", location: "Arlington, TX", type: "Renovation", year: "2023" },
  { title: "Custom Home Build", location: "Frisco, TX", type: "New Construction", year: "2022" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
          <p className="text-[#b91c1c] text-xs tracking-[0.3em] uppercase mb-4">Our Work</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-lg">
            Projects We&apos;re Proud Of.
          </h1>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#27272a]">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i * 0.1}
              className="bg-[#0a0a0a] group cursor-pointer overflow-hidden"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-[#111111] group-hover:bg-[#161616] transition-colors duration-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#b91c1c08] to-transparent" />
                <p className="text-[#27272a] text-xs tracking-widest uppercase">
                  Photo Coming Soon
                </p>
              </div>
              {/* Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-white font-semibold text-sm group-hover:text-[#b91c1c] transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-[#71717a] text-xs">{p.year}</span>
                </div>
                <p className="text-[#a1a1aa] text-xs">{p.location} · {p.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about photos */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="text-[#71717a] text-sm mb-8">
            Have a project in mind? Let&apos;s add it to this list.
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 border border-[#27272a] hover:border-[#b91c1c] text-[#d4d4d8] hover:text-[#b91c1c] px-8 py-4 text-xs tracking-widest uppercase transition-all duration-300"
          >
            Start Your Project
            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
