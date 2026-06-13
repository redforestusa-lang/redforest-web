"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export const services = [
  {
    num: "01", title: "Commercial Renovation",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&fit=crop",
    items: [
      { label: "Framing & Ceiling Tiles",                    img: "/Framing and Ceiling tile.jpg" },
      { label: "Full Wall Scope",                             img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&fit=crop" },
      { label: "Commercial Carpet",                          img: "/carpet-tile.webp" },
      { label: "Door Installation",                          img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=80&fit=crop" },
    ],
  },
  {
    num: "02", title: "Exterior Solutions",
    img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=1200&q=80&fit=crop",
    items: [
      { label: "Concrete Work",      img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop" },
      { label: "Brick Repairs",      img: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=1200&q=80&fit=crop" },
      { label: "Siding Installation",img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&fit=crop" },
      { label: "Exterior Paint",     img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&fit=crop" },
    ],
  },
  {
    num: "03", title: "Interior Solutions",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop",
    items: [
      { label: "Countertop & Tile",  img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80&fit=crop" },
      { label: "Demo & Trash Out",   img: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=1200&q=80&fit=crop" },
      { label: "Texture & Paint",    img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&fit=crop" },
      { label: "Flooring",           img: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?w=1200&q=80&fit=crop" },
      { label: "Insulation",         img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop" },
    ],
  },
  {
    num: "04", title: "Electrical, Plumbing & HVAC",
    img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80&fit=crop",
    items: [
      { label: "Licensed Electricians",         img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80&fit=crop" },
      { label: "Plumbing Installation & Repair", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80&fit=crop" },
      { label: "HVAC Installation & Service",    img: "/HVAC-Technician.jpg" },
      { label: "Code Compliance & Permits",      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80&fit=crop" },
    ],
  },
];

type ActiveState = { service: number; item: number | null } | null;

function getActiveImg(active: ActiveState): string | null {
  if (!active) return null;
  const svc = services[active.service];
  if (active.item !== null) return svc.items[active.item].img;
  return svc.img;
}

function getActiveKey(active: ActiveState): string {
  if (!active) return "none";
  return `${active.service}-${active.item ?? "parent"}`;
}

export default function ServicesSection() {
  const [active, setActive] = useState<ActiveState>(null);
  const activeImg = getActiveImg(active);

  return (
    <div className="relative w-full h-full">
      {/* Image panel — right half, desktop only */}
      <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0">
        {/* Default image */}
        <motion.div
          animate={{ opacity: activeImg ? 0 : 1 }}
          transition={{ duration: 0.35, ease }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </motion.div>

        {/* Hover images */}
        <AnimatePresence mode="wait">
          {activeImg && (
            <motion.div
              key={getActiveKey(active)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease }}
              className="absolute inset-0"
            >
              <img src={activeImg} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
              <div className="absolute inset-0 bg-[#0a0a0a]/20" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen md:h-full flex flex-col justify-center max-w-6xl mx-auto px-6 md:px-12 py-24 md:py-0">
        <div className="mb-6">
          <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-4">
            What We Do · DFW · Houston · Austin
          </p>
          <h2 className="text-[clamp(28px,3.5vw,48px)] font-bold text-white leading-[1.05] tracking-[-0.015em]">
            Everything Your Project Needs.
          </h2>
        </div>

        <div className="w-full md:w-1/2 divide-y divide-[#1a1a1a]">
          {services.map((svc, si) => {
            const isServiceActive = active?.service === si;
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.05, duration: 0.45, ease }}
              >
                <Link
                  href="/contact"
                  onMouseEnter={() => setActive({ service: si, item: null })}
                  onMouseLeave={() => setActive(null)}
                  className="flex items-center justify-between gap-6 py-3"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[#3f3f46] text-[10px] tracking-[0.2em] font-medium w-5">{svc.num}</span>
                    <h3 className={`text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${isServiceActive ? "text-[#b91c1c]" : "text-white"}`}>
                      {svc.title}
                    </h3>
                  </div>
                  <ArrowRight size={12} className={`flex-shrink-0 transition-all duration-200 ${isServiceActive ? "text-[#b91c1c] translate-x-0.5" : "text-[#27272a]"}`} />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
