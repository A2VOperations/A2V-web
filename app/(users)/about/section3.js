"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteConfig } from "@/app/config";

const timelineData = [
  {
    year: "2000",
    label: "Establishment & Foundation",
    desc: "A2V was founded with a clear vision: to deliver world-class digital solutions powered by innovation and creativity. We started small but dreamed big, laying the groundwork for what would become a leading AI-perfected IT solution company.",
  },
  {
    year: "2005",
    label: "Early Growth & Expansion",
    desc: "With a growing client base across India, A2V expanded its service portfolio to include web development, branding, and SEO. Our first 100 client milestones were achieved, building a foundation of trust and excellence.",
  },
  {
    year: "2010",
    label: "First Major Milestone",
    desc: "A2V delivered over 500 successful projects and launched its digital marketing division. Recognition from national tech forums positioned us as a go-to IT solution company for scalable, performance-driven digital growth.",
  },
  {
    year: "2018",
    label: "AI Integration Era",
    desc: "We pioneered AI-integrated workflows into our design, development and marketing pipelines — years before it became mainstream. A2V became one of India's earliest IT solution companies to offer AI-perfected branding and automation solutions.",
  },
  {
    year: "Today",
    label: "Industry Leadership",
    desc: "Today, A2V serves clients across 15+ industries with an award-winning team of designers, engineers, and AI strategists. We continue to lead with cutting-edge technology, creative excellence, and measurable results for every client.",
  },
];

export default function Section3() {
  const [active, setActive] = useState(0);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const id = setInterval(() => setActive((p) => (p + 1) % timelineData.length), 3500);
    return () => clearInterval(id);
  }, []);

  const progressPercent = (active / (timelineData.length - 1)) * 100;

  return (
    <section className="relative bg-[#19272b] pt-24 pb-12 w-full">
      {/* Faint background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Office Background" fill className="object-cover opacity-[0.07]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">

        {/* ── Grid: Text + Image ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* LEFT — always visible */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-4 text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
              OUR STORY
              <svg width="24" height="10" viewBox="0 0 24 10" fill="none">
                <path d="M0 1H23V10" stroke="#6B7280" strokeWidth="1" />
              </svg>
            </div>

            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-white leading-[1.2] mb-6">
              Your Gateway To{" "}
              <span className="text-[#ff6900]">
                Online<br className="hidden md:block" /> Excellence
              </span>{" "}
              — Dream Big In Pixels.
            </h2>

            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-lg">
              A2V is an AI-perfected digital IT solution company delivering cutting-edge web development,
              design, marketing, and automation solutions. Since our founding, we've helped
              thousands of businesses grow smarter, faster, and stronger in the digital world.
            </p>

            {/* Mobile: toggle button | Desktop: decorative label */}
            <div>
              {/* Mobile-only toggle */}
              <button
                onClick={() => setShowMore((v) => !v)}
                className="lg:hidden inline-flex items-center gap-2 bg-[#ff6900] hover:bg-orange-700 text-white px-8 py-3.5 font-semibold text-sm transition-colors duration-300 shadow-lg shadow-orange-500/30 border-none cursor-pointer"
              >
                {showMore ? "Show Less" : "Know More"}
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${showMore ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Desktop/tablet: static "Our Story" label */}
              <div className="hidden lg:flex items-center gap-3">
                <span className="w-8 h-[2px] bg-[#ff6900]" />
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#ff6900]">
                  Our Story Since 2000
                </span>
                <span className="w-8 h-[2px] bg-[#ff6900]" />
              </div>

              {/* WhatsApp Button for Story */}
              <button
                onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi A2V, I just read about your story since 2000 and would like to learn more about your digital solutions.")}`, "_blank")}
                className="mt-6 flex items-center gap-3 bg-transparent border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-6 py-2.5 font-bold transition-all duration-300 group text-sm"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.415-8.413z" />
                </svg>
                Chat about our Story
              </button>
            </div>

            {/* Live milestone description */}
            <div className="mt-8 border-l-2 border-[#ff6900] pl-5 min-h-[80px] transition-all duration-500">
              <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-lg">
                <span className="text-[#ff6900] font-bold mr-2">{timelineData[active].year} —</span>
                {timelineData[active].desc}
              </p>
            </div>
          </div>

          {/* RIGHT — image column
              On desktop: always visible.
              On mobile: animate with opacity + translateY (NO overflow-hidden here
              so the absolute-positioned circular badge is never clipped). */}
          <div
            className={`relative transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]
              lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:block
              ${showMore
                ? "opacity-100 translate-y-0 pointer-events-auto mt-8 lg:mt-0"
                : "opacity-0 translate-y-6 pointer-events-none h-0 overflow-hidden lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:h-auto lg:overflow-visible"
              }`}
          >
            {/* Image */}
            <div
              className="relative w-full overflow-hidden shadow-2xl"
              style={{ height: "clamp(280px, 45vw, 480px)" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="A2V team working" fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Circular badge — sits outside the image div, never clipped */}
            <div className="absolute -bottom-8 left-4 md:left-0 lg:-left-10 w-[120px] h-[120px] md:w-[140px] md:h-[140px] bg-[#1a1a1a] rounded-full flex items-center justify-center p-2 z-20">
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path id="circlePath" d="M 10,50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="transparent" />
                  <text className="text-[10px] font-bold fill-white uppercase tracking-[0.16em]">
                    <textPath href="#circlePath" startOffset="0%">
                      Get In Touch • Get In Touch • Get In Touch •
                    </textPath>
                  </text>
                </svg>
              </div>
              <a
                href="/contact"
                className="w-14 h-14 md:w-16 md:h-16 bg-[#ff6900] rounded-full flex items-center justify-center z-10 shadow-lg shadow-orange-500/40 hover:scale-110 transition-transform no-underline"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 19L19 5M19 5H8M19 5V16" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* ── Timeline ──
            Animation shell: overflow-hidden for smooth slide.
            Inner shell: overflow-visible + generous padding so absolutely-positioned
            year labels (above track) and milestone labels (below track) aren't clipped.
            Horizontal padding keeps first/last labels from touching the edges. */}
        <div
          className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] overflow-hidden
            lg:max-h-[260px] lg:opacity-100 lg:mt-24 lg:pointer-events-auto
            ${showMore
              ? "max-h-[260px] opacity-100 mt-12 pointer-events-auto"
              : "max-h-0 opacity-0 mt-0 pointer-events-none"
            }`}
        >
          {/* Inner: overflow-visible + padding to reveal absolute labels */}
          <div className="overflow-visible pt-12 pb-16 px-4 sm:px-6">

            {/* Track */}
            <div className="relative h-[2px] bg-gray-600 w-full">
              <div
                className="absolute top-0 left-0 h-full bg-[#ff6900] transition-all duration-700 ease-in-out"
                style={{ width: `${progressPercent}%` }}
              />
            </div>

            {/* Nodes */}
            <div className="relative flex justify-between w-full -mt-[11px]">
              {timelineData.map((item, index) => {
                const isPast = index < active;
                const isCurrent = index === active;
                return (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setActive(index)}
                    className="relative flex flex-col items-center focus:outline-none group"
                  >
                    {/* Year — above dot */}
                    <div className="absolute bottom-full mb-4 whitespace-nowrap">
                      <span className={`text-[11px] sm:text-sm font-bold tracking-wide transition-colors duration-300 ${
                        isCurrent ? "text-[#ff6900]" : isPast ? "text-gray-400" : "text-white group-hover:text-[#ff6900]"
                      }`}>
                        {item.year}
                      </span>
                    </div>

                    {/* Dot */}
                    <div className={`rounded-full ring-[5px] ring-[#19272b] transition-all duration-500 ${
                      isCurrent
                        ? "w-[22px] h-[22px] bg-[#ff6900] shadow-[0_0_18px_rgba(255,105,0,0.7)] scale-110"
                        : isPast
                        ? "w-[14px] h-[14px] bg-[#ff6900] opacity-60"
                        : "w-[14px] h-[14px] bg-white group-hover:bg-[#ff6900]"
                    }`} />

                    {/* Label — below dot */}
                    <div className="absolute top-full mt-5 w-[70px] sm:w-[100px] text-center">
                      <span className={`text-[9px] sm:text-[11px] font-semibold leading-snug transition-colors duration-300 ${
                        isCurrent ? "text-white" : "text-gray-500 group-hover:text-gray-300"
                      }`}>
                        {item.label}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
