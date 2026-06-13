"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ease = [0.25, 0.1, 0.25, 1] as [number, number, number, number];

export const services = [
  {
    num: "01", title: "Commercial Renovation",
    img: "/Drop Ceiling (D&B Office)/20231102_160934.jpg",
    items: [
      { label: "Framing & Ceiling Tiles",  img: "/Framing and Ceiling tile.jpg" },
      { label: "Full Wall Scope",          img: "/Wall Repair (D&B Event room)/1.jpg" },
      { label: "Commercial Carpet",        img: "/carpet-tile.webp" },
      { label: "Door Installation",        img: "/Commercial Door Project/Frame & Door Replacement-1.jpg" },
    ],
  },
  {
    num: "02", title: "Exterior Solutions",
    img: "/Concrete Work.jpg",
    items: [
      { label: "Concrete Work",       img: "/Concrete Project/Concrete-1.jpg" },
      { label: "Brick Repairs",       img: "/Brick Project/Brick-1.jpg" },
      { label: "Siding Installation", img: "/Siding Project/Siding-1.jpg" },
      { label: "Exterior Paint",      img: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1200&q=80&fit=crop" },
    ],
  },
  {
    num: "03", title: "Interior Solutions",
    img: "/Interior_Solutions.JPG",
    items: [
      { label: "Countertop & Tile", img: "/CountertopJPG.JPG" },
      { label: "Demo & Trash Out",  img: "/Wall Repair (D&B Event room)/3.jpg" },
      { label: "Texture & Paint",   img: "/Wall Repair (D&B Event room)/5.jpg" },
      { label: "Flooring",          img: "/Flooring.jpg" },
      { label: "Insulation",        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80&fit=crop" },
    ],
  },
  {
    num: "04", title: "Electrical, Plumbing & HVAC",
    img: "/HVAC-Technician.jpg",
    items: [
      { label: "Licensed Electricians",          img: "/Electrical.jpg" },
      { label: "Plumbing Installation & Repair", img: "/Plumbing Installation.jpg" },
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
  const [hovered, setHovered] = useState<ActiveState>(null);
  const [expanded, setExpanded] = useState<number | null>(null);
  const activeImg = getActiveImg(hovered);

  const handleServiceEnter = (si: number) => {
    if (window.innerWidth >= 768) {
      setExpanded(si);
      setHovered({ service: si, item: null });
    }
  };

  const handleServiceLeave = () => {
    if (window.innerWidth >= 768) {
      setExpanded(null);
      setHovered(null);
    }
  };

  return (
    <div className="relative w-full h-full">
      {/* Image panel — right half, desktop only */}
      <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full pointer-events-none z-0">
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

        <AnimatePresence mode="wait">
          {activeImg && (
            <motion.div
              key={getActiveKey(hovered)}
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
            const isActive = hovered?.service === si || expanded === si;
            const isExpanded = expanded === si;
            return (
              <motion.div
                key={svc.num}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: si * 0.05, duration: 0.45, ease }}
                onMouseEnter={() => handleServiceEnter(si)}
                onMouseLeave={handleServiceLeave}
              >
                {/* Service row — mobile: link to /contact | desktop: hover-driven */}
                <Link
                  href="/contact"
                  className="flex items-center justify-between gap-6 py-3"
                >
                  <div className="flex items-center gap-5">
                    <span className="text-[#3f3f46] text-[10px] tracking-[0.2em] font-medium w-5">{svc.num}</span>
                    <h3 className={`text-[16px] font-semibold tracking-[-0.01em] transition-colors duration-200 ${isActive ? "text-[#b91c1c]" : "text-white"}`}>
                      {svc.title}
                    </h3>
                  </div>
                  <ArrowRight size={12} className={`flex-shrink-0 transition-all duration-200 ${isActive ? "text-[#b91c1c] translate-x-0.5" : "text-[#27272a]"}`} />
                </Link>

                {/* Sub-items — desktop only, expand on hover */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease }}
                      className="hidden md:block overflow-hidden"
                    >
                      <div className="pb-3 flex flex-col">
                        {svc.items.map((item, ii) => (
                          <div
                            key={item.label}
                            onMouseEnter={() => setHovered({ service: si, item: ii })}
                            onMouseLeave={() => setHovered({ service: si, item: null })}
                            className="flex items-center gap-4 py-2 pl-10 cursor-default"
                          >
                            <span className={`w-1 h-1 rounded-full flex-shrink-0 transition-colors duration-150 ${hovered?.item === ii ? "bg-[#b91c1c]" : "bg-[#3f3f46]"}`} />
                            <span className={`text-[13px] transition-colors duration-150 ${hovered?.item === ii ? "text-white" : "text-[#71717a]"}`}>
                              {item.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Free Consultation button — desktop only */}
        <div className="hidden md:block mt-10 w-full md:w-1/2">
          <Link href="/contact"
            className="group inline-flex items-center gap-2.5 bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200">
            Free Consultation
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
}
