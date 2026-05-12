"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Topbar from "./topBar";
import Image from "next/image";

// ── Icons ──────────────────────────────────────────────────────────────────

const WebDevIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const GraphicIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <circle cx="13.5" cy="6.5" r="2.5" />
    <circle cx="6.5" cy="13.5" r="2.5" />
    <circle cx="17.5" cy="17.5" r="2.5" />
    <line x1="8.5" y1="11.5" x2="11.5" y2="8.5" />
  </svg>
);
const MarketingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);
const AIIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

// ── Menu Data ──────────────────────────────────────────────────────────────

const menuData = {
  Services: {
    columns: [
      {
        heading: "Web Development",
        categoryHref: "/services/web-development",
        subtitle: "Custom digital solutions",
        // Tailwind classes for theming this column
        iconBg: "bg-orange-100",
        iconColor: "text-orange-500",
        dotIdle: "bg-orange-200",
        dotActive: "group-hover/item:bg-orange-500",
        hoverBg: "hover:bg-orange-50/60",
        hoverText: "group-hover/item:text-orange-500",
        Icon: WebDevIcon,
        items: [
          { title: "Custom Web Solutions",   href: "/services/web-development/custom-web-solutions" },
          { title: "E-commerce Development", href: "/services/web-development/ecommerce-development" },
          { title: "CMS Development",        href: "/services/web-development/cms-development" },
          { title: "Progressive Web Apps",   href: "/services/web-development/pwa-development" },
          { title: "Web Portal Development", href: "/services/web-development/portal-development" },
          { title: "API Integration",        href: "/services/web-development/api-integration" },
          { title: "Maintenance & Support",  href: "/services/web-development/maintenance" },
          { title: "SPA Development",        href: "/services/web-development/spa-development" },
          { title: "Cloud Solutions",        href: "/services/web-development/cloud-solutions" },
          { title: "Web Security",           href: "/services/web-development/web-security" },
        ],
      },
      {
        heading: "Graphic Designing",
        categoryHref: "/services/graphic-designing",
        subtitle: "Visual identity & creative",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
        dotIdle: "bg-blue-200",
        dotActive: "group-hover/item:bg-blue-500",
        hoverBg: "hover:bg-blue-50/60",
        hoverText: "group-hover/item:text-blue-600",
        Icon: GraphicIcon,
        items: [
          { title: "Brand Identity",       href: "/services/graphic-designing/brand-identity" },
          { title: "UI/UX Design",         href: "/services/graphic-designing/ui-ux-design" },
          { title: "Print & Social Media", href: "/services/graphic-designing/print-social-media" },
          { title: "Motion Graphics",      href: "/services/graphic-designing/motion-graphics" },
          { title: "Package Design",       href: "/services/graphic-designing/package-design" },
          { title: "Illustration Art",     href: "/services/graphic-designing/illustration" },
          { title: "Presentation Design",  href: "/services/graphic-designing/presentation-design" },
          { title: "Infographic Design",   href: "/services/graphic-designing/infographics" },
          { title: "3D Rendering",         href: "/services/graphic-designing/3d-rendering" },
          { title: "Logo Animation",       href: "/services/graphic-designing/logo-animation" },
        ],
      },
      {
        heading: "Digital Marketing",
        categoryHref: "/services/digital-marketing",
        subtitle: "Growth & online visibility",
        iconBg: "bg-green-100",
        iconColor: "text-green-600",
        dotIdle: "bg-green-200",
        dotActive: "group-hover/item:bg-green-500",
        hoverBg: "hover:bg-green-50/60",
        hoverText: "group-hover/item:text-green-600",
        Icon: MarketingIcon,
        items: [
          { title: "SEO Optimization",       href: "/services/digital-marketing/seo-optimization" },
          { title: "Social Media Marketing", href: "/services/digital-marketing/social-media-marketing" },
          { title: "PPC & Paid Ads",         href: "/services/digital-marketing/ppc-paid-ads" },
          { title: "Content Marketing",      href: "/services/digital-marketing/content-marketing" },
          { title: "Email Marketing",        href: "/services/digital-marketing/email-marketing" },
          { title: "Influencer Marketing",   href: "/services/digital-marketing/influencer-marketing" },
          { title: "ORM Services",           href: "/services/digital-marketing/online-reputation-management" },
          { title: "E-Commerce Marketing",   href: "/services/digital-marketing/ecommerce-marketing" },
          { title: "Marketing Automation",   href: "/services/digital-marketing/marketing-automation" },
          { title: "Conversion Optimization",href: "/services/digital-marketing/conversion-rate-optimization" },
        ],
      },
      {
        heading: "Artificial Intelligence",
        categoryHref: "/services/ai",
        subtitle: "Smart automation & ML",
        iconBg: "bg-purple-100",
        iconColor: "text-purple-600",
        dotIdle: "bg-purple-200",
        dotActive: "group-hover/item:bg-purple-500",
        hoverBg: "hover:bg-purple-50/60",
        hoverText: "group-hover/item:text-purple-600",
        Icon: AIIcon,
        items: [
          { title: "AI Consulting",        href: "/services/ai/consulting" },
          { title: "AI Development",       href: "/services/ai/development" },
          { title: "Machine Learning",     href: "/services/ai/machine-learning" },
          { title: "NLP Solutions",        href: "/services/ai/nlp" },
          { title: "Computer Vision",      href: "/services/ai/computer-vision" },
          { title: "AI Automation",        href: "/services/ai/automation" },
          { title: "Chatbot Development",  href: "/services/ai/chatbots" },
          { title: "Data Science",         href: "/services/ai/data-science" },
          { title: "Predictive Analytics", href: "/services/ai/predictive-analytics" },
          { title: "AI Modernization",     href: "/services/ai/modernization" },
        ],
      },
    ],
  },
  Portfolio: { columns: [] },
  Pages:     { columns: [] },
  Blog:      { columns: [] },
};

const navItems = [
  { label: "Home",       href: "/" },
  { label: "About Us",   href: "/about" },
  { label: "Portfolio",  href: "/portfolio" },
  { label: "Services",   href: "/services", hasDropdown: true },
  { label: "Contact Us", href: "/contact" },
];

const navLinks   = navItems.map((item) => item.label);
const hasDropdown = navItems.filter((i) => i.hasDropdown).map((i) => i.label);

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

import { siteConfig } from "./config";

// ── Navbar ─────────────────────────────────────────────────────────────────

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu]           = useState(null);
  const [mobileOpen, setMobileOpen]       = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [megaVisible, setMegaVisible]     = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    if (openMenu) {
      setMegaVisible(false);
      requestAnimationFrame(() => requestAnimationFrame(() => setMegaVisible(true)));
    } else {
      setMegaVisible(false);
    }
  }, [openMenu]);

  const handleMouseEnter = (link) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(menuData[link]?.columns?.length ? link : null);
  };
  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const handleMegaEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  if (pathname.startsWith("/admin")) return null;

  return (
    <>
      <div className={`fixed top-0 left-0 w-full z-[100] bg-white transition-all duration-300 ${scrolled ? "-translate-y-[40px]" : "translate-y-0"}`}>
        <Topbar />
        <header className={`w-full bg-white transition-shadow duration-300 ${scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.10)]" : "border-b-2 border-black/20"}`}>

          {/* ── Nav Bar ── */}
          <nav className="flex items-center h-[72px] lg:h-[90px] px-4 sm:px-6 lg:px-0">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 no-underline group lg:pl-14 lg:pr-14 lg:border-r-2 lg:border-black/20 lg:h-full">
              <Image src="/images/A2V Group.png" alt="Logo" width={130} height={150} priority />
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center justify-center flex-1 px-2">
              <ul className="flex items-center list-none h-[90px] gap-0">
                {navItems.map((item) => (
                  <li key={item.label} className="relative h-full flex items-center"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => { if (item.href === "#") e.preventDefault(); }}
                      className={`relative flex items-center gap-1.5 px-4 xl:px-[18px] h-full text-[15px] xl:text-[17px] font-semibold whitespace-nowrap transition-all duration-200 rounded-lg ${
                        item.href === "/"
                          ? pathname === "/" ? "text-orange-500" : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                          : pathname.startsWith(item.href) ? "text-orange-500" : "text-gray-700 hover:text-orange-500 hover:bg-orange-50"
                      }`}
                    >
                      <span className={`absolute bottom-[18px] left-1/2 -translate-x-1/2 h-0.5 bg-orange-500 rounded-full transition-all duration-300 ${
                        item.href === "/"
                          ? pathname === "/" ? "w-[70%]" : "w-0"
                          : pathname.startsWith(item.href) ? "w-[70%]" : "w-0"
                      }`} />
                      {item.label}
                      {item.hasDropdown && (
                        <ChevronIcon className={openMenu === item.label ? "rotate-180" : ""} />
                      )}
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

          {/* ── Desktop Mega Menu ── */}
          {openMenu && menuData[openMenu]?.columns?.length > 0 && (
            <div
              className={`hidden lg:block absolute top-[130px] left-0 w-full bg-white border-t border-b border-gray-100 shadow-[0_40px_80px_rgba(0,0,0,0.08)] z-[9998] overflow-hidden transition-all duration-300 ease-in-out ${
                megaVisible
                  ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto max-h-[800px]"
                  : "opacity-0 -translate-y-4 scale-y-[0.95] pointer-events-none max-h-0"
              }`}
              style={{ transformOrigin: "top center" }}
              onMouseEnter={handleMegaEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="max-w-[1400px] mx-auto px-10 py-8">

                {/* ── Category columns ── */}
                <div className="grid grid-cols-12 divide-x divide-gray-100">
                  {menuData[openMenu].columns.map((col, idx) => {
                    const { Icon } = col;
                    return (
                      <div key={col.heading} className={`col-span-3 flex flex-col ${idx === 0 ? "pr-6" : idx === menuData[openMenu].columns.length - 1 ? "pl-6" : "px-6"}`}>

                        {/* Column header */}
                        <Link 
                          href={col.categoryHref || "#"}
                          onClick={() => setOpenMenu(null)}
                          className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100 group/col transition-all hover:bg-gray-50/50 rounded-lg -mx-2 px-2"
                        >
                          <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover/col:scale-110 ${col.iconBg} ${col.iconColor}`}>
                            <Icon />
                          </div>
                          <div>
                            <p className="text-[16px] font-bold uppercase tracking-[0.12em] text-gray-700 leading-tight group-hover/col:text-orange-500 transition-colors">
                              {col.heading}
                            </p>
                            <p className="text-[13px] text-gray-400 mt-0.5 leading-tight">
                              {col.subtitle}
                            </p>
                          </div>
                        </Link>

                        {/* Service links — 2-column grid */}
                        <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                          {col.items.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href || "#"}
                              onClick={() => setOpenMenu(null)}
                              className={`group/item flex items-center gap-2.5 px-2.5 py-2 rounded-lg no-underline transition-all duration-200 ${col.hoverBg}`}
                            >
                              <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${col.dotIdle} ${col.dotActive} group-hover/item:scale-125`} />
                              <p className={`text-[14px] font-medium text-gray-700 leading-snug transition-colors duration-200 ${col.hoverText}`}>
                                {item.title}
                              </p>
                            </Link>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* ── Mega menu footer bar ── */}
                <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
                  <p className="text-[12px] text-gray-400">
                    40+ services across 4 categories
                  </p>
                  <Link
                    href="/services"
                    onClick={() => setOpenMenu(null)}
                    className="flex items-center gap-1.5 text-[13px] font-semibold text-orange-500 no-underline hover:text-orange-600 transition-colors duration-200 group/all"
                  >
                    View all services
                    <ArrowIcon className="transition-transform duration-200 group-hover/all:translate-x-0.5" />
                  </Link>
                </div>

              </div>
            </div>
          )}
        </header>
      </div>

      {/* ── Mobile Slide-in Drawer ── */}
      <div className={`lg:hidden fixed inset-0 bg-white z-10000 flex flex-col transition-all duration-300 ease-in-out ${mobileOpen ? "opacity-100 translate-x-0 pointer-events-auto" : "opacity-0 translate-x-full pointer-events-none"}`}>

        {/* Drawer header */}
        <div className="flex items-center justify-between px-4 h-[72px] border-b border-gray-100 shrink-0">
          <a href="/" className="flex items-center gap-2.5 no-underline">
            <div className="w-10 h-9 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-black text-gray-900 tracking-tight">2V</span>
          </a>
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
            {navLinks.map((link) => (
              <div key={link} className="border-b border-gray-100 last:border-none">
                <button
                  onClick={() => {
                    if (hasDropdown.includes(link))
                      setMobileExpanded(mobileExpanded === link ? null : link);
                    else setMobileOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-2 py-4 text-[15px] font-semibold bg-transparent border-none cursor-pointer text-left transition-colors duration-200 ${(() => {
                    const href = navItems.find((i) => i.label === link)?.href;
                    if (!href) return "text-gray-900 hover:text-orange-500";
                    return href === "/"
                      ? pathname === "/" ? "text-orange-500" : "text-gray-900 hover:text-orange-500"
                      : pathname.startsWith(href) ? "text-orange-500" : "text-gray-900 hover:text-orange-500";
                  })()}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-200 ${(() => {
                      const href = navItems.find((i) => i.label === link)?.href;
                      if (!href) return "bg-gray-200";
                      return href === "/"
                        ? pathname === "/" ? "bg-orange-500" : "bg-gray-200"
                        : pathname.startsWith(href) ? "bg-orange-500" : "bg-gray-200";
                    })()}`} />
                    {link}
                  </div>
                  {hasDropdown.includes(link) && (
                    <ChevronIcon className={`text-gray-400 ${mobileExpanded === link ? "rotate-180" : ""}`} />
                  )}
                </button>

                {/* Mobile sub-menu */}
                {menuData[link]?.columns?.length > 0 && (
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${mobileExpanded === link ? "max-h-[2500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="pb-6 px-2 space-y-4">
                      {menuData[link].columns.map((col) => {
                        const { Icon } = col;
                        return (
                          <div key={col.heading} className="bg-gray-50/50 rounded-2xl p-4">
                            {/* Mobile column header with icon */}
                            <div className="flex items-center gap-2.5 mb-3">
                              <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${col.iconBg} ${col.iconColor}`}>
                                <Icon />
                              </div>
                              <div>
                                <p className="text-[11px] font-bold text-gray-700 uppercase tracking-[0.12em] leading-tight">
                                  {col.heading}
                                </p>
                                <p className="text-[10px] text-gray-400 leading-tight">{col.subtitle}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-0.5">
                              {col.items.map((item) => (
                                <Link
                                  key={item.title}
                                  href={item.href || "#"}
                                  onClick={() => setMobileOpen(false)}
                                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl no-underline transition-colors duration-150 group/mitem ${col.hoverBg}`}
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors duration-150 ${col.dotIdle} ${col.dotActive}`} />
                                  <p className={`text-[13px] font-semibold text-gray-800 leading-tight transition-colors duration-150 ${col.hoverText}`}>
                                    {item.title}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        );
                      })}

                      {/* Promo card */}
                      <div className="mx-1 mt-1 bg-gray-900 rounded-2xl p-4 flex items-center justify-between">
                        <div>
                          <p className="text-sm font-black text-white leading-tight">
                            THE <span className="text-orange-500">GROWTH</span> STACK
                          </p>
                          <p className="text-[11px] text-gray-400 mt-0.5">All services, one place</p>
                        </div>
                        <a href="/services" className="flex items-center gap-1 text-[11px] font-semibold text-white hover:text-orange-400 transition-colors no-underline shrink-0 ml-4">
                          Explore <ArrowIcon />
                        </a>
                      </div>
                    </div>
                  </div>
                )}
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
        <div className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[9999]" onClick={() => setMobileOpen(false)} />
      )}
      {openMenu && (
        <div className="hidden lg:block fixed inset-0 bg-black/40 backdrop-blur-[2px] z-[90] transition-all duration-300" onClick={() => setOpenMenu(null)} />
      )}

      <div className="h-[110px] lg:h-[130px]" />
    </>
  );
}