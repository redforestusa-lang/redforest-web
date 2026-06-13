"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectsSection, { projects, Lightbox, Project } from "@/components/ProjectsSection";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export default function ProjectsPage() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }} className="mb-20">
          <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-5">Selected Projects</p>
          <h1 className="text-[clamp(48px,7vw,88px)] font-bold text-white leading-[1.0] tracking-[-0.02em] max-w-xl">
            Work We&apos;re Proud Of.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6, ease }}
              onClick={() => setSelected(p)}
              className="group bg-[#0a0a0a] overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.cover} alt={p.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white text-white text-[11px] tracking-[0.2em] uppercase px-4 py-2">
                    View Gallery
                  </span>
                </div>
                <span className="absolute bottom-3 right-3 bg-[#0a0a0a]/80 backdrop-blur-sm text-[#d4d4d8] text-[10px] tracking-[0.15em] uppercase px-2.5 py-1">
                  {p.images.length} Photos
                </span>
              </div>
              <div className="px-6 py-5 border-t border-[#1a1a1a]">
                <p className="text-[#b91c1c] text-[10px] tracking-[0.2em] uppercase font-medium mb-2">{p.type}</p>
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-white text-[15px] font-semibold group-hover:text-[#b91c1c] transition-colors duration-200">{p.title}</h3>
                  <span className="text-[#71717a] text-[11px] flex-shrink-0 ml-4">{p.year}</span>
                </div>
                <p className="text-[#a1a1aa] text-[12px]">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-20 text-center">
          <p className="text-[#71717a] text-[13px] mb-8">Ready to add your project to this list?</p>
          <Link href="/contact"
            className="group inline-flex items-center gap-2.5 border border-[#27272a] hover:border-[#b91c1c] text-[#d4d4d8] hover:text-[#b91c1c] text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4 transition-all duration-200">
            Start Your Project
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
