"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

const differentiators = [
  {
    title: "We choose quality over volume.",
    desc: "We don't take every job that comes through the door. We work with clients who are committed to doing things right — because shortcuts cost more in the long run, for everyone involved.",
  },
  {
    title: "Certified in every trade we touch.",
    desc: "Every member of our team holds certifications relevant to their area. Our HVAC, plumbing, and electrical partners are fully licensed and vetted.",
  },
  {
    title: "1-Year workmanship warranty.",
    desc: "We stand behind what we build. Every project comes with a one-year warranty on our workmanship — not because we have to, but because we're confident in the work.",
  },
  {
    title: "General liability insured.",
    desc: "Full general liability coverage on every project. Your property and investment are protected from day one.",
  },
  {
    title: "Home performance expertise.",
    desc: "We understand that a healthy building creates a healthy home. Our team consults on energy efficiency, indoor air quality, and building envelope performance.",
  },
];

export default function QualityPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-24">
          <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-5">Our Standard</p>
          <h1 className="text-[clamp(48px,7vw,88px)] font-bold text-white leading-[1.0] tracking-[-0.02em] max-w-2xl">
            Quality isn&apos;t<br />negotiable.
          </h1>
        </motion.div>

        {/* Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-28 border-t border-[#27272a] pt-14 md:pt-20">
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="text-[#d4d4d8] text-[16px] leading-[1.8]">
            Red Forest was built on a simple principle: do the work right, every time. Not because it&apos;s easier — it rarely is — but because quality protects the client, protects the project, and protects everyone&apos;s time and money down the road.
          </motion.p>
          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="text-[#a1a1aa] text-[15px] leading-[1.8]">
            After 10+ years and over 200 projects across Texas, we&apos;ve seen what happens when corners get cut. We&apos;ve fixed those mistakes for other people&apos;s clients. We made a decision early on: that&apos;s not who we are. We only take on projects where the client shares that commitment.
          </motion.p>
        </div>

        {/* Differentiators */}
        <div className="flex flex-col divide-y divide-[#1a1a1a] mb-28">
          {differentiators.map((d, i) => (
            <motion.div key={d.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.1}
              className="py-8 md:py-10 grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10">
              <div className="col-span-full md:col-span-1">
                <span className="text-[#b91c1c] text-[11px] tracking-[0.2em]">0{i + 1}</span>
              </div>
              <div className="col-span-full md:col-span-5">
                <h3 className="text-[18px] md:text-[20px] font-semibold text-white leading-snug">{d.title}</h3>
              </div>
              <div className="col-span-full md:col-span-6">
                <p className="text-[#a1a1aa] text-[15px] leading-[1.7]">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1a1a1a] border border-[#1a1a1a] mb-16 md:mb-24">
          {[
            { value: "10+",    label: "Years in Business" },
            { value: "200+",   label: "Projects Completed" },
            { value: "1,000+", label: "Repairs Completed" },
            { value: "1 Year", label: "Workmanship Warranty" },
          ].map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] p-10 text-center">
              <p className="text-[clamp(28px,3vw,40px)] font-bold text-white mb-2 tracking-[-0.02em]">{s.value}</p>
              <p className="text-[#71717a] text-[11px] tracking-[0.2em] uppercase">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center">
          <p className="text-[#71717a] text-[14px] mb-8 tracking-wide">
            Ready to work with a team that doesn&apos;t cut corners?
          </p>
          <Link href="/contact"
            className="group inline-flex items-center gap-2.5 bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200">
            Free Consultation
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
          </Link>
        </motion.div>

      </div>
    </div>
  );
}
