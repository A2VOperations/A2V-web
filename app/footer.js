"use client";

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { useValidation } from "./context/ValidationContext";
import { useState } from "react";
import { siteConfig } from "./config";

export default function Footer() {
  const pathname = usePathname();
  
  if (pathname.startsWith('/admin')) {
    return null;
  }
  
  const { showError } = useValidation();
  const [footerPhone, setFooterPhone] = useState("");
  const phone = siteConfig.phone;
  const whatsappNumber = phone?.replace(/\D/g, ""); // "911234567890"

  const handleWhatsApp = (e) => {
    if (!/^[+\d\s\-()]{7,15}$/.test(footerPhone)) {
      e.preventDefault();
      showError("Invalid Phone", "Please enter a valid phone number before proceeding to WhatsApp.", ["Phone number should be 7-15 digits"]);
      return;
    }
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Contact", href: "/contact" },
  ];

  const services = [
    { label: "Web (UX/UI) Design", href: siteConfig.socialLinks.whatsapp },
    { label: "Machine Learning & AI", href: siteConfig.socialLinks.whatsapp },
    { label: "Web Development", href: siteConfig.socialLinks.whatsapp },
    { label: "IT Cyber Security", href: siteConfig.socialLinks.whatsapp },
    { label: "Cloud Computing", href: siteConfig.socialLinks.whatsapp },
    { label: "Analytic & Engineering", href: siteConfig.socialLinks.whatsapp },
  ];

  return (
    <footer className="relative bg-[#19272b] text-white pt-5 pb-10 overflow-hidden">
      {/* Marquee */}
      <section className="overflow-hidden py-10 pb-20">
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex whitespace-nowrap">
              <p className="mx-5 text-orange-500 text-9xl font-semibold">Contact Us</p>
              <p className="mx-5 text-white text-9xl font-semibold">Get In Touch</p>
              <p className="mx-5 text-orange-500 text-9xl font-semibold">Contact Us</p>
              <p className="mx-5 text-white text-9xl font-semibold">Get In Touch</p>
              <p className="mx-5 text-orange-500 text-9xl font-semibold">Contact Us</p>
              <p className="mx-5 text-white text-9xl font-semibold">Get In Touch</p>
              <p className="mx-5 text-orange-500 text-9xl font-semibold">Contact Us</p>
              <p className="mx-5 text-white text-9xl font-semibold">Get In Touch</p>
            </div>
          ))}
        </div>
      </section>


      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr] gap-x-12 gap-y-12 relative z-10">

        {/* LEFT - Logo + WhatsApp CTA */}
        <div className="flex flex-col">

          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/images/A2V Group.png"
              alt={`${siteConfig.brandName} Logo`}
              width={140}
              height={50}
              className="object-contain"
              unoptimized
            />
          </div>

          <h2 className="text-3xl font-semibold mb-4 leading-tight">
            Join the AI-Perfected{" "}
            <span className="text-orange-500 font-extrabold">{siteConfig.brandName}</span>
          </h2>

          <p className="text-gray-300 mb-6 leading-relaxed text-sm">
            We understand that every challenge is an opportunity for AI-perfected innovation. We are here
            with a team of dedicated professionals.
          </p>

          {/* Phone input + WhatsApp button */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4 w-full">
            <div className="flex items-center gap-2 px-4 py-3 border border-white/20 rounded-xl bg-white/5 backdrop-blur flex-1 min-w-0">
              <FiPhone className="text-orange-400 shrink-0" />
              <input
                type="tel"
                value={footerPhone}
                onChange={(e) => setFooterPhone(e.target.value)}
                placeholder="Your Phone Number"
                className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400 text-white"
              />
            </div>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi, my phone number is ${footerPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsApp}
              className="whitespace-nowrap flex items-center gap-2 bg-linear-to-r from-green-500 to-green-600 px-6 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-200 shadow-lg text-white"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>
          </div>

          <p className="text-xs text-gray-400 mt-auto">
            By contacting us, you accept{" "}
            <Link
              href="/privacy"
              className="underline cursor-pointer hover:text-orange-400 transition"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* MIDDLE - Services */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-white/10">
            Services
          </h3>
          <ul className="space-y-3">
            {services.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="text-sm text-gray-300 hover:text-orange-400 transition flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 rounded-full bg-orange-500/50 group-hover:bg-orange-400 transition shrink-0" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - Contact */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold mb-5 pb-2 border-b border-white/10">
            Contact Us
          </h3>

          <div className="space-y-5">
            <div>
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-1 font-medium">
                Location
              </p>
              <p className="text-sm text-gray-300 leading-relaxed">
                {siteConfig.address}
              </p>
            </div>

            <div>
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-1 font-medium">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-gray-300 hover:text-orange-400 transition"
              >
                {siteConfig.email}
              </a>
            </div>

            <div>
              <p className="text-xs text-orange-400 uppercase tracking-widest mb-1 font-medium">
                WhatsApp
              </p>
              <a
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-lg font-bold text-white hover:text-green-400 transition group"
              >
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-500/20 group-hover:bg-green-500/40 transition">
                  <FaWhatsapp className="text-green-400 text-base" />
                </span>
                {phone}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider + Bottom bar */}
      <div className="max-w-[1280px] mx-auto px-6 mt-16 border-t border-white/10 pt-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs order-2 md:order-1">
            © 2025 <span className="font-semibold text-white">{siteConfig.brandName}</span> – AI-Perfected IT
            Services. All rights reserved.
          </p>

          {/* Scroll Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="order-1 md:order-2 w-11 h-11 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:bg-orange-50 transition-all duration-200"
          >
            <FaArrowUp className="text-sm" />
          </button>

          {/* Nav links */}
          <div className="flex gap-6 order-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-400 text-xs hover:text-orange-400 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}