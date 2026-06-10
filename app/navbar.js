"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Topbar from "./topBar";
import Image from "next/image";
import { siteConfig } from "./config";
import gsap from "gsap";

// ── Menu Data ──────────────────────────────────────────────────────────────

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];



// ── Small SVG helpers ──────────────────────────────────────────────────────

const ChevronIcon = ({ className = "" }) => (
  <svg className={`w-3 h-3 transition-transform duration-300 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);
const ArrowIcon = ({ className = "" }) => (
  <svg className={`w-3 h-3 ${className}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const CloseIcon = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

// ── Navbar ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const cubeRef = useRef(null);

  useEffect(() => {
    if (!cubeRef.current) return;
    
    let currentAngle = 0;
    const interval = setInterval(() => {
      currentAngle += 90; // Rotate to next face
      gsap.to(cubeRef.current, {
        rotateY: currentAngle,
        duration: 2, // 1 second roll
        ease: "power2.inOut",
      });
    }, 3000); // Waits 2s, then 1s animation = 3s total loop

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  if (pathname.startsWith("/admin")) return null;

  const logo = {
    Image1: "/images/A2V  Groups Logo.png",
    Image2: "/images/A2V  Groups Logo1.png",
    Image3: "/images/A2V  Groups Logo2.png",
  }

  const cubeFaces = [
    { src: logo.Image1, rotateY: 0 },
    { src: logo.Image2, rotateY: 90 },
    { src: logo.Image3, rotateY: 180 },
    { src: logo.Image2, rotateY: -90 },
  ];

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-[100] bg-white transition-all duration-300 ${scrolled ? "-translate-y-[40px]" : "translate-y-0"}`}>
        <Topbar />
        <header className={`w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)]" : "border-b-2 border-black/20"}`}>

          {/* ── Nav Bar ── */}
          <nav className="flex items-center h-[72px] lg:h-[90px] px-4 sm:px-6 lg:px-0">

            {/* Logo */}
            <Link href="/" className="flex flex-col justify-center items-center lg:py-2 lg:pl-14 lg:pr-14 lg:border-r-2 lg:border-black/20 lg:h-full [perspective:1000px]">
              <div ref={cubeRef} className="relative w-[130px] h-[130px] [transform-style:preserve-3d]">
                {cubeFaces.map((face, index) => (
                  <div key={index} className="absolute inset-0 bg-white overflow-hidden [backface-visibility:hidden]" style={{ transform: `rotateY(${face.rotateY}deg) translateZ(65px)` }}>
                    <Image src={face.src} alt={`Logo Face ${index + 1}`} fill className="object-contain" priority />
                    <div className="pointer-events-none absolute top-[-50%] bottom-[-50%] w-[40px] bg-gradient-to-r from-transparent via-white/80 to-transparent -skew-x-[20deg] animate-shine-diagonal z-20" />
                  </div>
                ))}
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-2">
              <ul className="flex items-center list-none h-[90px] gap-0">
                {navItems.map((item) => (
                  <li key={item.label} className="relative h-full flex items-center">
                    <Link
                      href={item.href}
                      onClick={(e) => { if (item.href === "#") e.preventDefault(); }}
                      className={`relative flex items-center gap-1.5 px-4 xl:px-[18px] h-full text-[15px] xl:text-[17px] font-semibold whitespace-nowrap transition-all duration-200 rounded-lg ${item.href === "/"
                        ? pathname === "/" ? "text-orange-500" : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                        : pathname.startsWith(item.href) ? "text-orange-500" : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                        }`}
                    >
                      <span className={`absolute bottom-[18px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${item.href === "/"
                        ? pathname === "/" ? "w-[70%]" : "w-0"
                        : pathname.startsWith(item.href) ? "w-[70%]" : "w-0"
                        }`} />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-2.5 ml-auto lg:ml-0">
              <a href="/contact" className="group relative overflow-hidden inline-flex items-center gap-1.5 px-3.5 py-2 sm:px-5 sm:py-2.5 lg:mx-5 lg:px-6 lg:py-3 bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-xl no-underline border-2 border-orange-500 transition-all duration-200 hover:bg-white hover:text-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.3)]">
                <span className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.4)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="hidden sm:inline">Get A Quote</span>
                <span className="sm:hidden">Quote</span>
                <span className="relative w-5 h-5 bg-white/25 rounded-full flex items-center justify-center group-hover:bg-orange-100 transition-colors duration-200 shrink-0">
                  <ArrowIcon />
                </span>
              </a>

              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className={`lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-xl border-2 border-gray-200 bg-white transition-all duration-200 hover:border-orange-300 gap-[5px] shrink-0 ${mobileOpen ? "invisible pointer-events-none" : ""}`}
              >
                <span className="block w-5 h-0.5 bg-gray-800 rounded-full" />
                <span className="block w-5 h-[2px] bg-gray-800 rounded-full" />
                <span className="block w-5 h-[2px] bg-gray-800 rounded-full" />
              </button>
            </div>
          </nav>


        </header>
      </div>

      {/* ── Mobile Slide-in Drawer ── */}
      <div className={`lg:hidden fixed inset-0 bg-white z-[10001] flex flex-col transition-all duration-300 ease-in-out ${mobileOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"}`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 h-[72px] border-b border-gray-100 shrink-0">
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-9 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">A2V AI</span>
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex items-center justify-center w-10 h-10 rounded-xl border-2 border-gray-200 bg-white text-gray-700 hover:border-orange-400 hover:text-orange-500 transition-all duration-200"
          >
            <CloseIcon />
          </button>
        </div>

        {/* Scrollable nav links */}
        <div className="flex-1 overflow-y-auto overscroll-contain">
          <div className="px-4 pt-2 pb-6">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100 last:border-none">
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center justify-between px-2 py-4 text-[15px] font-semibold no-underline transition-colors duration-200 ${(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                    ? "text-orange-500"
                    : "text-gray-900 hover:text-orange-500"
                    }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${(item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))
                      ? "bg-orange-500" : "bg-gray-200"
                      }`} />
                    {item.label}
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Sticky bottom CTA */}
        <div className="shrink-0 px-4 pt-3 pb-6 border-t border-gray-100 bg-white">
          <a href="/contact" className="flex items-center justify-center gap-2 w-full py-4 bg-orange-500 text-white text-sm font-bold rounded-2xl no-underline border-2 border-orange-500 transition-all duration-200 hover:bg-white hover:text-orange-500 shadow-[0_4px_16px_rgba(249,115,22,0.25)]">
            Get A Quote
            <span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
              <ArrowIcon />
            </span>
          </a>
          <div className="flex items-center justify-center gap-6 mt-3">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1.5 text-[11px] text-gray-400 no-underline hover:text-orange-500 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us
            </a>
            <span className="text-gray-200">|</span>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1.5 text-[11px] text-gray-400 no-underline hover:text-orange-500 transition-colors">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* Backdrops */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[10000]" onClick={() => setMobileOpen(false)} />
      )}

      <div className="h-[110px] lg:h-[130px]" />
    </>
  );
}