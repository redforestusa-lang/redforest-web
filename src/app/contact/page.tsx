"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  }),
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80&fit=crop" alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#1a1a1a]/50 to-[#1a1a1a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a]/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <motion.div variants={fadeUp} initial="hidden" animate="visible" className="mb-20">
          <p className="text-[#b91c1c] text-[11px] font-medium tracking-[0.25em] uppercase mb-5">Contact</p>
          <h1 className="text-[clamp(48px,7vw,88px)] font-bold text-white leading-[1.0] tracking-[-0.02em]">
            Let&apos;s Build<br />Something.
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 md:gap-24">

          {/* Form */}
          <motion.form variants={fadeUp} initial="hidden" animate="visible" custom={1}
            className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col gap-2">
                <label className="text-[#d4d4d8] text-[11px] tracking-[0.2em] uppercase">Name</label>
                <input type="text" placeholder="John Smith"
                  className="bg-[#111111] border border-[#27272a] hover:border-[#52525b] focus:border-[#b91c1c] text-white text-[15px] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#71717a]" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#d4d4d8] text-[11px] tracking-[0.2em] uppercase">Phone</label>
                <input type="tel" placeholder="(469) 000-0000"
                  className="bg-[#111111] border border-[#27272a] hover:border-[#52525b] focus:border-[#b91c1c] text-white text-[15px] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#71717a]" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#d4d4d8] text-[11px] tracking-[0.2em] uppercase">Email</label>
              <input type="email" placeholder="you@email.com"
                className="bg-[#111111] border border-[#27272a] hover:border-[#52525b] focus:border-[#b91c1c] text-white text-[15px] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#71717a]" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#d4d4d8] text-[11px] tracking-[0.2em] uppercase">Service Needed</label>
              <select className="bg-[#111111] border border-[#27272a] hover:border-[#52525b] focus:border-[#b91c1c] text-white text-[15px] px-4 py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer">
                <option value="">Select a service...</option>
                <option>Commercial Renovation</option>
                <option>Exterior Solutions</option>
                <option>Interior Solutions</option>
                <option>Electrical, Plumbing & HVAC</option>
                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#d4d4d8] text-[11px] tracking-[0.2em] uppercase">Message</label>
              <textarea rows={5} placeholder="Tell us about your project..."
                className="bg-[#111111] border border-[#27272a] hover:border-[#52525b] focus:border-[#b91c1c] text-white text-[15px] px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#71717a] resize-none" />
            </div>

            <button type="submit"
              className="bg-[#b91c1c] hover:bg-[#dc2626] text-white text-[11px] font-medium tracking-[0.2em] uppercase py-4 transition-colors duration-200 mt-2">
              Send Message
            </button>
          </motion.form>

          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={2}
            className="flex flex-col gap-14">

            <div>
              <p className="text-[#a1a1aa] text-[10px] tracking-[0.25em] uppercase mb-8">Get in Touch</p>
              <div className="flex flex-col gap-7">
                {[
                  { icon: Phone, label: "Phone",    value: "469 510 5689",              href: "tel:+14695105689" },
                  { icon: Mail,  label: "Email",    value: "renovation@redforestusa.com", href: "mailto:renovation@redforestusa.com" },
                  { icon: MapPin, label: "Areas",   value: "DFW · Houston · Austin",     href: null },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-9 h-9 border border-[#1f1f1f] flex items-center justify-center flex-shrink-0">
                      <item.icon size={14} className="text-[#b91c1c]" />
                    </div>
                    <div>
                      <p className="text-[#a1a1aa] text-[10px] tracking-[0.2em] uppercase mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-white text-[15px] hover:text-[#b91c1c] transition-colors duration-200">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-white text-[15px]">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-[#1a1a1a] pt-10">
              <p className="text-[#d4d4d8] text-[14px] leading-[1.7]">
                We respond within <span className="text-white">24 hours</span>. For urgent requests, call us directly. We only take on projects where the timeline and budget make quality work possible.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
