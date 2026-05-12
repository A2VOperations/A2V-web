"use client";

import React from "react";
import Image from "next/image";
import CountUp from "react-countup";

function page() {
  return (
    <>
      <section className="relative z-10 bg-white px-4 py-16 md:px-8 md:py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-14">
          {/* ── ROW 2: Image + Stats ── */}
          <div className="grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            {/* Image card */}
            <div className="relative overflow-hidden bg-[#f6f6f1]">
              <Image
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80"
                alt="A2V Groups team collaborating in an office"
                width={1400}
                height={1000}
                className="h-64 w-full object-cover sm:h-80 md:h-[420px] lg:h-[520px]"
                unoptimized
              />

              {/* Overlays: stack on mobile, row on sm+ */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start justify-between gap-0 sm:flex-row sm:items-end">
                <div className="bg-orange-500 px-5 py-5 text-white shadow-xl sm:px-6 sm:py-6">
                  <p className="max-w-37.5 text-base font-bold leading-tight sm:max-w-40 sm:text-xl">
                    <CountUp end={5} suffix="m+" enableScrollSpy /> Trusted Global Clients
                  </p>
                  <div className="mt-5 flex items-center">
                    <div className="flex -space-x-3">
                      {["A", "B", "C"].map((item) => (
                        <span
                          key={item}
                          className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-neutral-900 text-xs font-semibold text-white"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/60 bg-white text-base text-orange-500">
                      +
                    </span>
                  </div>
                </div>

                <div className="m-3 bg-white px-5 py-4 shadow-2xl sm:mb-8 sm:mr-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-100 text-xl font-bold text-sky-500">
                      S
                    </span>
                    <div>
                      <p className="text-2xl font-bold text-black">A2V Groups</p>
                      <p className="text-xs text-gray-500">Software agency</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats col */}
            <div className="lg:pl-6">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-500">
                Explore Our Achievement
              </p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight text-black sm:text-4xl md:text-5xl lg:text-6xl">
                Premier Tech Innovations
                <span className="block font-light">A2V Groups Software Agency</span>
              </h3>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
                {[
                  { value: 36, suffix: "k+", label: "Trusted Global Clients" },
                  { value: 850, suffix: "+", label: "Best Project Complete" },
                ].map(({ value, suffix, label }) => (
                  <div
                    key={label}
                    className="bg-orange-500 px-5 py-6 text-white shadow-lg sm:px-7 sm:py-8"
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-lg text-black">
                      ✓
                    </span>
                    <p className="mt-8 text-5xl font-bold tracking-tight sm:mt-12 sm:text-6xl">
                      <CountUp end={value} suffix={suffix} enableScrollSpy scrollSpyOnce />
                    </p>
                    <p className="mt-2 text-sm text-white/95 sm:mt-3 sm:text-base">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;
