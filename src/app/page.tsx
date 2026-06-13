"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";

const TOTAL_SLIDES = 5;

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease },
  }),
};
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i: number = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease },
  }),
};

const services = [
  { num: "01", title: "Commercial Renovation",       desc: "Full-scope commercial buildouts across DFW, Houston, and Austin." },
  { num: "02", title: "Exterior Solutions",          desc: "Concrete work, brick repairs, siding, and exterior paint." },
  { num: "03", title: "Interior Solutions",          desc: "From demo to move-in ready — countertop, tile, flooring, and more." },
  { num: "04", title: "Electrical, Plumbing & HVAC", desc: "Licensed partner network for all MEP work — coordinated by us." },
];

const projects = [
  { title: "Commercial Office Renovation", location: "Dallas, TX",      year: "2024", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&fit=crop" },
  { title: "Full Kitchen Remodel",         location: "Plano, TX",       year: "2024", img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80&fit=crop" },
  { title: "Residential Exterior",         location: "Fort Worth, TX",  year: "2023", img: "https://images.unsplash.com/photo-1523217582562-09d0def993a6?w=800&q=80&fit=crop" },
  { title: "Insulation Retrofit",          location: "Irving, TX",      year: "2023", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop" },
  { title: "Master Bath Renovation",       location: "Frisco, TX",      year: "2023", img: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80&fit=crop" },
  { title: "Retail Space Buildout",        location: "Arlington, TX",   year: "2022", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80&fit=crop" },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-5 leading-none">
      {children}
    </p>
  );
}

function SlideIndicator({ total, current, onGo }: { total: number; current: number; onGo: (i: number) => void }) {
  return (
    <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 items-center gap-2 z-20">
      {Array.from({ length: total }).map((_, i) => (
        <button key={i} onClick={() => onGo(i)}
          className="h-px transition-all duration-500 cursor-pointer"
          style={{ width: i === current ? 32 : 12, background: i === current ? "#b91c1c" : "#27272a" }} />
      ))}
    </div>
  );
}

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const isAnimating = useRef(false);
  const rawScroll = useMotionValue(0);
  const smoothScroll = useSpring(rawScroll, { stiffness: 100, damping: 20, mass: 0.6 });

  const goToSlide = useCallback((index: number) => {
    const el = scrollRef.current;
    if (!el || isAnimating.current) return;
    const clamped = Math.max(0, Math.min(index, TOTAL_SLIDES - 1));
    if (clamped === currentSlide) return;
    isAnimating.current = true;
    setCurrentSlide(clamped);
    rawScroll.set(clamped * el.clientWidth);
    setTimeout(() => { isAnimating.current = false; }, 700);
  }, [currentSlide, rawScroll]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const unsub = smoothScroll.on("change", (v) => {
      if (window.innerWidth >= 768) el.scrollLeft = v;
    });
    const onWheel = (e: WheelEvent) => {
      if (window.innerWidth < 768) return;
      e.preventDefault();
      const delta = e.deltaY + e.deltaX;
      if (Math.abs(delta) < 5) return;
      goToSlide(currentSlide + (delta > 0 ? 1 : -1));
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => { el.removeEventListener("wheel", onWheel); unsub(); };
  }, [smoothScroll, goToSlide, currentSlide]);

  return (
    <div className="md:h-screen md:overflow-hidden">
      <div ref={scrollRef}
        className="flex flex-col md:flex-row md:h-full md:overflow-x-auto md:overflow-y-hidden"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
        <style>{`div::-webkit-scrollbar{display:none}`}</style>

        {/* ── SLIDE 1 · HERO ── */}
        <section className="relative flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex items-start md:items-center overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 80% 60% at 20% 60%, #b91c1c12 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 20%, #b91c1c08 0%, transparent 50%)" }} />
          <div className="absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "100px 100px" }} />

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 pb-16 md:py-0">
            <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0}>
              <Label>Dallas · Fort Worth · Houston · Austin</Label>
            </motion.div>
            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              className="text-[clamp(44px,9vw,104px)] font-bold text-white leading-[1.0] tracking-[-0.02em] mb-8">
              We Don&apos;t<br />
              <span className="text-[#b91c1c]">Cut Corners.</span><br />
              We Build Them.
            </motion.h1>
            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              className="text-[#71717a] text-[16px] leading-[1.65] max-w-md mb-12">
              10+ years of construction excellence across Texas. We only work with clients committed to doing things right — because quality protects everyone.
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[11px] font-medium tracking-[0.2em] uppercase px-8 py-4 transition-colors duration-200">
                Free Consultation
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a href="tel:+14695105689"
                className="inline-flex items-center gap-2 text-[#71717a] hover:text-white text-[11px] tracking-[0.2em] uppercase transition-colors duration-200">
                <Phone size={13} />
                469 510 5689
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.5, duration: 1 }}
            className="hidden md:flex absolute right-10 top-1/2 -translate-y-1/2 flex-col items-center gap-3">
            <span className="text-[#3f3f46] text-[10px] tracking-[0.3em] uppercase [writing-mode:vertical-rl]">Scroll</span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent to-[#b91c1c]" />
          </motion.div>
          <SlideIndicator total={5} current={currentSlide} onGo={goToSlide} />
        </section>

        {/* ── SLIDE 2 · QUALITY ── */}
        <section className="relative flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex items-center border-t md:border-t-0 md:border-l border-[#27272a] overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />

          {/* Real project image — right half, desktop only */}
          <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full">
            <img src="/project-1.webp" alt="Red Forest project" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/70 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center py-20 md:py-0">
            <div>
              <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Label>Our Standard</Label>
              </motion.div>
              <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
                className="text-[clamp(36px,4.5vw,58px)] font-bold text-white leading-[1.08] tracking-[-0.015em]">
                Quality isn&apos;t<br />negotiable.
              </motion.h2>
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
                className="text-[#71717a] text-[16px] leading-[1.7] mt-6 max-w-sm">
                We don&apos;t chase every job — we choose the right ones. Clients who value doing things properly. Because shortcuts cost more in the long run, for everyone.
              </motion.p>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}
                className="mt-10 flex flex-col gap-4">
                {["Certified team in every trade", "Licensed HVAC, Plumbing & Electrical partners", "1-Year workmanship warranty", "General liability insured"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1 h-1 bg-[#b91c1c] rounded-full flex-shrink-0" />
                    <span className="text-[#a1a1aa] text-[14px]">{item}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <div className="flex flex-col gap-0 divide-y divide-[#27272a] border-y border-[#27272a]">
              {[
                { value: "10+",   label: "Years in Business" },
                { value: "200+",  label: "Projects Completed" },
                { value: "1,000+", label: "Repairs Completed" },
              ].map((s, i) => (
                <motion.div key={s.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={i * 0.15}
                  className="py-8 flex items-baseline justify-between gap-4">
                  <p className="text-[clamp(36px,4vw,56px)] font-bold text-white leading-none tracking-[-0.02em]">{s.value}</p>
                  <p className="text-[#a1a1aa] text-[11px] tracking-[0.2em] uppercase text-right">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <SlideIndicator total={5} current={currentSlide} onGo={goToSlide} />
        </section>

        {/* ── SLIDE 3 · SERVICES ── */}
        <section className="relative flex-shrink-0 w-full md:w-screen min-h-screen md:h-full border-t md:border-t-0 md:border-l border-[#27272a] overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <ServicesSection />
          <SlideIndicator total={5} current={currentSlide} onGo={goToSlide} />
        </section>

        {/* ── SLIDE 4 · PROJECTS ── */}
        <section className="relative flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex items-center border-t md:border-t-0 md:border-l border-[#27272a] overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <ProjectsSection />
          <SlideIndicator total={5} current={currentSlide} onGo={goToSlide} />
        </section>

        {/* ── SLIDE 5 · CTA ── */}
        <section className="relative flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex items-center justify-center border-t md:border-t-0 md:border-l border-[#27272a] overflow-hidden">
          <div className="absolute inset-0 bg-[#0a0a0a]" />
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(ellipse 70% 50% at 50% 50%, #b91c1c0d 0%, transparent 70%)" }} />
          <div className="relative z-10 text-center max-w-2xl mx-auto px-6 md:px-12 py-20 md:py-0">
            <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <Label>Ready to Build?</Label>
            </motion.div>
            <motion.h2 variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1}
              className="text-[clamp(56px,10vw,120px)] font-bold text-white leading-[0.95] tracking-[-0.03em] mb-10">
              Let&apos;s<br />Talk.
            </motion.h2>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}
              className="text-[#71717a] text-[15px] leading-[1.65] mb-4 max-w-xs mx-auto">
              Free consultation within 24 hours.
            </motion.p>
            <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2.5}
              className="text-[#52525b] text-[13px] mb-12">
              renovation@redforestusa.com · 469 510 5689
            </motion.p>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[11px] font-medium tracking-[0.2em] uppercase px-10 py-5 transition-colors duration-200">
                Start Your Project
                <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
          <SlideIndicator total={5} current={currentSlide} onGo={goToSlide} />
        </section>

      </div>
    </div>
  );
}
