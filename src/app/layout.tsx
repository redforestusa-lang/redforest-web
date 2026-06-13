import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Red Forest LLC | General Contractor – Dallas-Fort Worth",
  description:
    "Red Forest LLC is a trusted general contractor serving the Dallas-Fort Worth area. We offer general contracting, renovations, new construction, and dumpster rental services.",
  keywords: [
    "general contractor DFW",
    "contractor Dallas",
    "contractor Fort Worth",
    "dumpster rental DFW",
    "construction company Dallas",
    "renovation contractor Texas",
  ],
  openGraph: {
    title: "Red Forest LLC | General Contractor – Dallas-Fort Worth",
    description:
      "Trusted general contractor serving the DFW metroplex. Quality construction, renovations, and dumpster rental.",
    url: "https://redforestusa.com",
    siteName: "Red Forest LLC",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#f5f5f5]">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
