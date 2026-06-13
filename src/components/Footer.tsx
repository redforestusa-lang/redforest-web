import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#27272a] bg-[#0a0a0a] px-12 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">

        {/* Brand */}
        <div>
          <div className="mb-5">
            <img src="/logo.svg" alt="Red Forest LLC" className="h-8 w-auto" />
          </div>
          <p className="text-[#71717a] text-[14px] leading-[1.7] max-w-[220px]">
            General contractor serving the Dallas-Fort Worth metroplex.
          </p>
        </div>

        {/* Nav links */}
        <div>
          <p className="text-[#52525b] text-[10px] tracking-[0.25em] uppercase font-medium mb-6">Navigation</p>
          <ul className="flex flex-col gap-3.5">
            {[["Services", "/services"], ["Projects", "/projects"], ["Quality", "/quality"], ["Contact", "/contact"]].map(([label, href]) => (
              <li key={href}>
                <Link href={href} className="text-[#a1a1aa] hover:text-white text-[14px] transition-colors duration-200">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[#52525b] text-[10px] tracking-[0.25em] uppercase font-medium mb-6">Contact</p>
          <ul className="flex flex-col gap-3.5 text-[14px]">
            <li>
              <a href="tel:+14695105689" className="text-[#a1a1aa] hover:text-white transition-colors duration-200">
                469 510 5689
              </a>
            </li>
            <li>
              <a href="mailto:renovation@redforestusa.com" className="text-[#a1a1aa] hover:text-white transition-colors duration-200">
                renovation@redforestusa.com
              </a>
            </li>
            <li className="text-[#71717a]">Dallas-Fort Worth, TX</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#52525b] text-[12px] tracking-wide">
          © {new Date().getFullYear()} Red Forest LLC. All rights reserved.
        </p>
        <p className="text-[#52525b] text-[12px] tracking-wide">Dallas · Fort Worth · Texas</p>
      </div>
    </footer>
  );
}
