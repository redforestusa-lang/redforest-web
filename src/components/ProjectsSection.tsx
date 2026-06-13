"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export const projects = [
  {
    title: "Concrete Work",
    location: "DFW, TX", year: "2024", type: "Exterior Solutions",
    cover: "/Concrete Project/Concrete-1.jpg",
    images: [
      "/Concrete Project/Concrete-1.jpg",
      "/Concrete Project/Concrete-2.jpg",
      "/Concrete Project/Concrete-3.jpg",
      "/Concrete Project/Concrete-4.jpg",
      "/Concrete Project/Concrete-5.jpg",
      "/Concrete Project/Concrete-6.jpg",
      "/Concrete Project/Concrete-7.jpg",
      "/Concrete Project/Concrete-8.jpg",
    ],
  },
  {
    title: "Commercial Door & Frame Replacement",
    location: "DFW, TX", year: "2024", type: "Commercial Renovation",
    cover: "/Commercial Door Project/Frame & Door Replacement-1.jpg",
    images: [
      "/Commercial Door Project/Frame & Door Replacement-1.jpg",
      "/Commercial Door Project/20241003_103502.jpg",
      "/Commercial Door Project/20241003_141523.jpg",
      "/Commercial Door Project/Gemini_Generated_Image_qca45zqca45zqca4.png",
      "/Commercial Door Project/Frame & Door Replacement-3.jpg",
    ],
  },
  {
    title: "Drop Ceiling Installation",
    location: "D&B Office · DFW, TX", year: "2023", type: "Commercial Renovation",
    cover: "/Drop Ceiling (D&B Office)/20231102_160934.jpg",
    images: [
      "/Drop Ceiling (D&B Office)/20231102_160934.jpg",
      "/Drop Ceiling (D&B Office)/IMG-20231102-WA0012.jpg",
      "/Drop Ceiling (D&B Office)/IMG-20231102-WA0013.jpg",
      "/Drop Ceiling (D&B Office)/IMG-20231107-WA0021.jpg",
      "/Drop Ceiling (D&B Office)/IMG-20231108-WA0019.jpg",
      "/Drop Ceiling (D&B Office)/20231117_112121.jpg",
      "/Drop Ceiling (D&B Office)/20231117_112210.jpg",
    ],
  },
  {
    title: "Wall Repair & Paint",
    location: "D&B Event Room · DFW, TX", year: "2023", type: "Interior Solutions",
    cover: "/Wall Repair (D&B Event room)/9.jpg",
    images: [
      "/Wall Repair (D&B Event room)/1.jpg",
      "/Wall Repair (D&B Event room)/2.jpg",
      "/Wall Repair (D&B Event room)/3.jpg",
      "/Wall Repair (D&B Event room)/4.jpg",
      "/Wall Repair (D&B Event room)/5.jpg",
      "/Wall Repair (D&B Event room)/6.jpg",
      "/Wall Repair (D&B Event room)/7.jpg",
      "/Wall Repair (D&B Event room)/8.jpg",
      "/Wall Repair (D&B Event room)/9.jpg",
    ],
  },
  {
    title: "Siding Installation",
    location: "DFW, TX", year: "2023", type: "Exterior Solutions",
    cover: "/Siding Project/Siding-1.jpg",
    images: [
      "/Siding Project/Siding-1.jpg",
      "/Siding Project/Siding-2.jpg",
      "/Siding Project/Siding-3.jpg",
    ],
  },
  {
    title: "Brick Repairs",
    location: "DFW, TX", year: "2023", type: "Exterior Solutions",
    cover: "/Brick Project/Brick-1.jpg",
    images: [
      "/Brick Project/Brick-1.jpg",
      "/Brick Project/Brick-2.jpg",
    ],
  },
];

export type Project = typeof projects[0];

export function Lightbox({ project, onClose }: { project: Project; onClose: () => void }) {
  const [current, setCurrent] = useState(0);
  const total = project.images.length;

  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <motion.div
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease }}
      className="fixed inset-0 z-[100] bg-[#0a0a0a]/95 backdrop-blur-sm flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between px-5 md:px-10 py-4 md:py-6 border-b border-[#1a1a1a] flex-shrink-0"
        onClick={(e) => e.stopPropagation()}>
        <div>
          <p className="text-[#b91c1c] text-[11px] tracking-[0.25em] uppercase font-medium mb-1">{project.type}</p>
          <h3 className="text-white text-[15px] md:text-[18px] font-semibold">{project.title}</h3>
          <p className="text-[#71717a] text-[12px] mt-0.5">{project.location}</p>
        </div>
        <button onClick={onClose}
          className="w-10 h-10 border border-[#27272a] hover:border-[#b91c1c] flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-200">
          <X size={16} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 md:px-20 py-4 md:py-6 relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.img key={current} src={project.images[current]} alt={`${project.title} ${current + 1}`}
            initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3, ease }}
            className="max-h-full max-w-full object-contain" />
        </AnimatePresence>
        <button onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#27272a] hover:border-[#b91c1c] bg-[#0a0a0a]/80 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-200">
          <ChevronLeft size={16} />
        </button>
        <button onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-[#27272a] hover:border-[#b91c1c] bg-[#0a0a0a]/80 flex items-center justify-center text-[#a1a1aa] hover:text-white transition-all duration-200">
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="flex-shrink-0 px-4 md:px-10 pb-6 md:pb-8 flex items-center gap-2 md:gap-3 overflow-x-auto"
        onClick={(e) => e.stopPropagation()}>
        {project.images.map((img, i) => (
          <button key={i} onClick={() => setCurrent(i)}
            className={`w-12 h-12 md:w-16 md:h-16 flex-shrink-0 overflow-hidden border-2 transition-all duration-200 ${i === current ? "border-[#b91c1c] opacity-100" : "border-transparent opacity-40 hover:opacity-70"}`}>
            <img src={img} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
        <span className="text-[#71717a] text-[11px] tracking-[0.2em] ml-2 flex-shrink-0">{current + 1} / {total}</span>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-0">
        <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-4">Selected Projects</p>
        <h2 className="text-[clamp(28px,4vw,52px)] font-bold text-white leading-[1.05] tracking-[-0.015em] mb-8 md:mb-10">
          Work We&apos;re Proud Of.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {projects.map((p, i) => (
            <motion.div key={p.title}
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              onClick={() => setSelected(p)}
              className="group bg-[#0a0a0a] overflow-hidden cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={p.cover} alt={p.title}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                <div className="absolute inset-0 bg-[#0a0a0a]/0 group-hover:bg-[#0a0a0a]/30 transition-all duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5">
                    View Gallery
                  </span>
                </div>
              </div>
              <div className="px-4 py-3">
                <p className="text-white text-[12px] font-medium group-hover:text-[#b91c1c] transition-colors duration-200">{p.title}</p>
                <p className="text-[#71717a] text-[11px] mt-0.5">{p.location}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <AnimatePresence>
        {selected && <Lightbox project={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  );
}
