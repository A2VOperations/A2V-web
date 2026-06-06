"use client";
import React, { useState } from "react";

function Page() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <section className="relative z-10 bg-white px-4 pt-4 pb-16 md:px-8 md:pt-4 md:pb-10 transition-all duration-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          {/* ── ROW 1: Spinner + Headline ── */}
          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            {/* Spinner */}
            <div className="flex justify-center">
              <div className="relative flex h-40 w-40 items-center justify-center border border-dashed rounded-full sm:h-52 sm:w-52 md:h-60 md:w-60">
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-[1.5px] border-[#111] sm:h-28 sm:w-28 md:h-33 md:w-33">
                  <span className="text-xl leading-none text-[#111] md:text-[2rem]">
                    ↗
                  </span>
                </div>
                <svg
                  className="absolute inset-0 animate-[tekko-spin_18s_linear_infinite]"
                  viewBox="0 0 240 240"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="tekko-circle-text"
                      d="M 120,120 m -86,0 a 86,86 0 1,1 172,0 a 86,86 0 1,1 -172,0"
                    />
                  </defs>
                  <text className="fill-[#111] text-[14px] uppercase [letter-spacing:5px]">
                    <textPath href="#tekko-circle-text" startOffset="0%">
                      Web Development • Web Solutions • Web Studio •
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>

            {/* Headline */}
            <div className="max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                We Are A2V Web Studio
              </p>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
                Innovate Web Solutions to
                <span className="block font-light">Grow Your Business</span>
              </h2>
              <p className="mt-5 max-w-lg text-sm leading-8 text-gray-600 sm:text-base">
                With a portfolio of successful projects spanning various
                industries, our team consistently transforms ideas into
                high-performing, user-friendly digital experiences.
              </p>
              <button
                onClick={toggleExpand}
                className="mt-7 inline-flex items-center gap-2 border-b border-black pb-1 text-sm font-semibold text-black transition hover:border-orange-500 hover:text-orange-500 cursor-pointer"
              >
                {isExpanded ? "Show Less" : "Learn More Us"} <span aria-hidden="true" className={`transition-transform duration-300 ${isExpanded ? "-rotate-90" : "rotate-0"}`}>›</span>
              </button>

              {/* Expandable Section */}
              <div
                className={`mt-8 overflow-hidden transition-all duration-700 ease-in-out ${
                  isExpanded ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="grid gap-6 border-t border-gray-100 pt-8 sm:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-black">Our Mission</h4>
                    <p className="text-sm leading-relaxed text-gray-500">
                      Our mission is to provide the best custom web development services to businesses of every size. Focused on Next.js, headless CMS architectures, secure API integrations, and robust database systems, we aim to deliver high-performance web applications that help our clients build a strong market presence.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-lg font-bold text-black">Our Vision</h4>
                    <p className="text-sm leading-relaxed text-gray-500">
                      Our vision is to expand A2V Groups&apos; web engineering services to every corner of India and globally. We want to become the most trusted web technology partner for modern brands by providing future-ready, scalable Jamstack and e-commerce digital experiences.
                    </p>
                  </div>
                  <div className="col-span-full mt-4 bg-orange-50 p-6">
                    <p className="text-sm font-medium italic text-orange-800">
                      &quot;We aim to grow with technology and help our clients grow with us — by giving them better visibility, better branding, better customer reach, and better digital results.&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;

