"use client";

import React from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/app/config";

function page() {
  const cases = [
    {
      tag: "Web Development",
      title: "Next-Gen Web Platforms",
      desc: "Building scalable, high-performance web applications tailored to modern business needs and user expectations.",
      img: "/home/mobile_app.jpg",
      active: true,
      wa: `Hi, I'm interested in your Web Platform Development services at A2V.`,
    },
    {
      tag: "Graphic Designing",
      title: "Premium Brand Identity",
      desc: "Crafting unique visual experiences and brand languages that help businesses stand out in a crowded market.",
      img: "https://teckko.vercel.app/image/project-item/project-item-2.jpg",
      active: false,
      wa: `Hi, I'm interested in your Brand Identity and Graphic Design services at A2V.`,
    },
    {
      tag: "Web Development",
      title: "E-Commerce Ecosystems",
      desc: "Developing robust online storefronts with seamless payment integrations and optimized user journeys for maximum conversion.",
      img: "/home/e_com.jpg",
      active: false,
      wa: `Hi, I'm interested in your E-Commerce Development services at A2V.`,
    },
    {
      tag: "Digital Marketing",
      title: "Strategic SEO Growth",
      desc: "Implementing data-driven marketing and SEO strategies that drive organic traffic and establish digital authority.",
      img: "https://teckko.vercel.app/image/project-item/project-item-4.jpg",
      active: false,
      wa: `Hi, I'm interested in your Digital Marketing and SEO services at A2V.`,
    },
  ];

  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  const goTo = (n) => {
    setCurrent(n);
    resetTimer(n);
  };

  const next = () => {
    const n = (current + 1) % cases.length;
    goTo(n);
  };

  const prev = () => {
    const n = (current - 1 + cases.length) % cases.length;
    goTo(n);
  };

  const resetTimer = (from = current) => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prevValue) => {
        const nextValue = (prevValue + 1) % cases.length;
        return nextValue;
      });
    }, 3500);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <>
      <section className="overflow-hidden bg-white py-14">
        {/* Header */}
        <div className="mb-10 px-6 md:px-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="mb-3 text-sm font-semibold tracking-widest text-orange-500 md:text-base">
              Our Case Studies
            </p>
            <h2 className="font-syne text-4xl font-extrabold text-black md:text-5xl">
              Our Journey of <span className="font-light">Digital Excellence</span>
            </h2>
          </div>
          
          {/* Arrows */}
          <div className="flex justify-center gap-4">
            <button 
              onClick={prev}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-sm"
              aria-label="Previous slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={next}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-black transition-all hover:bg-orange-500 hover:text-white hover:border-orange-500 shadow-sm"
              aria-label="Next slide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Slider — left padding reveals half of next card */}
        <div
          className="pl-4 md:pl-12"
          onMouseEnter={() => clearInterval(timerRef.current)}
          onMouseLeave={() => resetTimer()}
        >
          <div
            className="flex gap-5 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(calc(-${current} * (min(55vw, 680px) + 20px)))`,
            }}
          >
            {cases.map((c, i) => (
              <div
                key={i}
                onClick={() => window.open(`https://api.whatsapp.com/send?phone=${siteConfig.phone.replace(/\D/g, "")}&text=${encodeURIComponent(c.wa)}`, "_blank")}
                className="group flex w-[min(92vw,850px)] shrink-0 flex-col-reverse overflow-hidden border border-white/10 bg-[#132120] md:h-105 md:flex-row-reverse cursor-pointer"
              >
                <Image
                  src={c.img}
                  alt={c.title}
                  width={800}
                  height={500}
                  className="h-64 w-full object-cover md:h-full md:w-[52%]"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="flex flex-1 flex-col justify-center p-4 md:p-8">
                  <p className="mb-2 text-xs font-semibold tracking-widest text-white">
                    {c.tag}
                  </p>
                  <h3 className="font-syne mb-2 inline-block text-2xl font-bold text-white transition-colors duration-300 group-hover:text-orange-500 md:text-3xl">
                    <span className="relative inline-block">
                      {c.title}
                      <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-orange-500 transition-transform duration-300 group-hover:scale-x-100" />
                    </span>
                  </h3>
                  <p className="mb-7 text-sm leading-7 text-white/55 md:text-base">
                    {c.desc}
                  </p>

                  <button
                    onClick={(e) => { e.stopPropagation(); window.open(`https://api.whatsapp.com/send?phone=${siteConfig.phone.replace(/\D/g, "")}&text=${encodeURIComponent(c.wa)}`, "_blank"); }}
                    className="flex h-11 w-11 items-center justify-center gap-2 overflow-hidden rounded-full border border-white/35 px-0 text-sm font-light text-white transition-all duration-300 group-hover:w-36 group-hover:px-5 hover:border-[#29aae2] hover:bg-[#29aae2]/10"
                  >
                    <span className="text-xl leading-none">+</span>
                    <span className="max-w-0 whitespace-nowrap opacity-0 transition-all duration-300 group-hover:max-w-24 group-hover:opacity-100">
                      Whatsapp
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2.5">
          {cases.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-3 w-3 rounded-full border transition ${
                i === current
                  ? "border-orange-500 bg-orange-500"
                  : "border-orange-500 bg-transparent"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default page;
