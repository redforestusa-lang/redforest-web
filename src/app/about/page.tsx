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

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
          <p className="text-[#b91c1c] text-xs tracking-[0.3em] uppercase mb-4">About</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl">
            Built on Trust. Delivered with Excellence.
          </h1>
        </motion.div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-32 border-t border-[#27272a] pt-20">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-[#b91c1c] text-xs tracking-[0.3em] uppercase mb-8">Our Story</p>
            <div className="flex flex-col gap-5 text-[#d4d4d8] text-base leading-relaxed">
              <p>
                Red Forest LLC was founded on a simple belief: great work speaks for itself. We started as a small team in Dallas with a commitment to doing things right — no shortcuts, no excuses.
              </p>
              <p>
                Over 12 years, we&apos;ve grown into one of DFW&apos;s trusted general contractors, completing over 200 projects across residential and commercial sectors. But our approach has never changed.
              </p>
              <p>
                Every project gets our full attention. Every client gets our direct line. That&apos;s the Red Forest difference.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            className="flex flex-col gap-8"
          >
            {[
              { label: "Quality", desc: "We never compromise on materials or craftsmanship. Period." },
              { label: "Honesty", desc: "Transparent pricing. Honest timelines. No surprises." },
              { label: "Execution", desc: "We show up, we deliver, and we stand behind our work." },
            ].map((v, i) => (
              <div key={v.label} className="flex gap-6 items-start">
                <span className="text-[#b91c1c] text-xs tracking-widest mt-1">0{i + 1}</span>
                <div>
                  <p className="text-white font-semibold mb-1">{v.label}</p>
                  <p className="text-[#a1a1aa] text-sm leading-relaxed">{v.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#27272a] border border-[#27272a] mb-32"
        >
          {[
            { value: "12+", label: "Years in Business" },
            { value: "200+", label: "Projects Completed" },
            { value: "100%", label: "Licensed & Insured" },
            { value: "DFW", label: "Service Area" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] p-10 text-center">
              <p className="text-3xl font-bold text-white mb-2">{s.value}</p>
              <p className="text-[#a1a1aa] text-xs tracking-widest uppercase">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-[#a1a1aa] text-sm mb-6">Ready to work with us?</p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-[#b91c1c] hover:bg-[#dc2626] text-white px-8 py-4 text-sm tracking-widest uppercase transition-all duration-300"
          >
            Get a Free Quote
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
