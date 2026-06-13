import ServicesSection from "@/components/ServicesSection";

export default function ServicesPage() {
  return (
    <div className="h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-[#0a0a0a]" />
      <div className="relative z-10 h-full pt-16">
        <ServicesSection />
      </div>
    </div>
  );
}
