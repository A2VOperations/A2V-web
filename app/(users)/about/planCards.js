"use client";

import { useState, useEffect, useRef } from "react";

const plans = [
  {
    label: "Basic Plan",
    name: "Startup Agency",
    monthly: 15,
    yearly: 12,
    popular: false,
    features: [
      "Website Design & Development",
      "Digital Marketing Solutions",
      "SEO Optimizations",
      "Branding and Design Identity",
      "IT Consultancy Manage",
    ],
  },
  {
    label: "Standard Plan",
    name: "Corporate Agency",
    monthly: 49,
    yearly: 39,
    popular: true,
    features: [
      "Website Design & Development",
      "Digital Marketing Solutions",
      "SEO Optimizations",
      "Branding and Design Identity",
      "IT Consultancy Manage",
    ],
  },
  {
    label: "Premium Plan",
    name: "Advance Package",
    monthly: 93,
    yearly: 74,
    popular: false,
    features: [
      "Website Design & Development",
      "Digital Marketing Solutions",
      "SEO Optimizations",
      "Branding and Design Identity",
      "IT Consultancy Manage",
    ],
  },
];

const ArrowIcon = () => (
  <svg
    className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const StarIcon = () => (
  <svg className="w-2.5 h-2.5 fill-white" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const CheckIcon = ({ dark }) => (
  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none">
    <circle
      cx="12"
      cy="12"
      r="11"
      fill={dark ? "rgba(224,90,43,0.18)" : "#fef0eb"}
      stroke={dark ? "rgba(224,90,43,0.5)" : "#f0b49a"}
      strokeWidth="1.5"
    />
    <path
      d="M7 12l3.5 3.5L17 9"
      stroke="#e05a2b"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function PricingCard({ plan, billing, index }) {
  const cardRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const price = billing === "monthly" ? plan.monthly : plan.yearly;

  return (
    <div
      ref={cardRef}
      className={`
        relative rounded-2xl p-7 sm:p-8 cursor-pointer border-[1.5px]
        transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        ${
          plan.popular
            ? "bg-[#1a1a1a] border-[#1a1a1a] hover:border-[#e05a2b] hover:shadow-[0_24px_56px_rgba(0,0,0,0.18),0_0_0_2px_rgba(224,90,43,0.3)]"
            : "bg-white border-[#ede9e4] hover:border-[#e05a2b] hover:shadow-[0_20px_48px_rgba(224,90,43,0.1),0_4px_12px_rgba(0,0,0,0.05)]"
        }
        hover:-translate-y-2 hover:scale-[1.02]
        flex flex-col
      `}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Popular badge */}
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#e05a2b] text-white text-[10px] font-bold tracking-[0.12em] px-4 py-1.5 rounded-full flex items-center gap-1.5 whitespace-nowrap shadow-md">
          <StarIcon /> POPULAR <StarIcon />
        </div>
      )}

      {/* Top */}
      <div className="mb-5">
        <p className="text-[#e05a2b] text-[11px] font-semibold tracking-[0.08em] uppercase mb-1.5">
          {plan.label}
        </p>
        <h3
          className={`text-[19px] font-bold leading-snug ${plan.popular ? "text-white" : "text-[#111]"}`}
        >
          {plan.name}
        </h3>
      </div>

      {/* Price */}
      <div className="flex items-end gap-0.5 mb-5">
        <span className="text-base font-bold text-[#e05a2b] leading-none mb-2">
          $
        </span>
        <span className="text-[48px] sm:text-[52px] font-extrabold text-[#e05a2b] leading-none">
          {price}
        </span>
        <span
          className={`text-xs mb-2 ml-1.5 ${plan.popular ? "text-white/40" : "text-[#aaa]"}`}
        >
          / per month
        </span>
      </div>

      {/* Divider */}
      <div
        className={`h-px mb-5 ${plan.popular ? "bg-white/10" : "bg-[#ede9e4]"}`}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 mb-7 flex-1">
        {plan.features.map((f) => (
          <li
            key={f}
            className={`flex items-center gap-2.5 text-[13px] leading-snug ${
              plan.popular ? "text-white/75" : "text-[#555]"
            }`}
          >
            <CheckIcon dark={plan.popular} />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {plan.popular ? (
        <a
          href="#"
          className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-[#e05a2b] border-[1.5px] border-[#e05a2b] text-white transition-all duration-200 hover:bg-[#c94d22] hover:border-[#c94d22] hover:shadow-[0_8px_24px_rgba(224,90,43,0.35)] no-underline mt-auto"
        >
          Choose Package <ArrowIcon />
        </a>
      ) : (
        <a
          href="#"
          className="group flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-semibold bg-transparent border-[1.5px] border-[#e0dbd5] text-[#111] transition-all duration-200 hover:border-[#e05a2b] hover:text-[#e05a2b] hover:bg-[rgba(224,90,43,0.04)] no-underline mt-auto"
        >
          Choose Package <ArrowIcon />
        </a>
      )}
    </div>
  );
}

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="relative bg-[#fafaf9] py-20 sm:py-28 overflow-hidden">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-[120px] bottom-10 w-[300px] h-[300px] rounded-full border-40 border-[rgba(224,90,43,0.05)]" />
      <div className="pointer-events-none absolute -right-[80px] top-[35%] w-[240px] h-[240px] rounded-full border-32 border-[rgba(224,90,43,0.04)]" />

      {/* Centered container — max-w-5xl keeps it from stretching on ultrawide */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 lg:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 sm:mb-16 items-end">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#fef0eb] text-[#e05a2b] text-[11px] font-semibold tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#e05a2b]" />
              We Are WiaTech Company
            </div>
            <h2 className="text-[clamp(26px,4vw,42px)] font-extrabold text-[#111] leading-[1.15] m-0">
              Innovate Soft Solutions to{" "}
              <span className="text-[#e05a2b]">Grow</span> Tech Business
            </h2>
          </div>

          {/* Right */}
          <div>
            <p className="text-sm text-[#777] leading-[1.8] mb-6">
              Sed ut perspiciatis unde omniste natus sit voluptatem accus
              antiume doloremque laudantium totam aperiame abillo inventore.
            </p>

            {/* Toggle pill */}
            <div className="inline-flex items-center bg-white border border-[#ede9e4] rounded-full p-1 gap-1 shadow-sm">
              {[
                { key: "monthly", label: "Monthly" },
                { key: "yearly", label: "Yearly" },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setBilling(key)}
                  className={`
                    px-5 py-2 rounded-full text-sm font-semibold cursor-pointer border-none transition-all duration-200 flex items-center gap-1.5
                    ${
                      billing === key
                        ? "bg-[#e05a2b] text-white shadow-sm"
                        : "bg-transparent text-[#888] hover:text-[#111]"
                    }
                  `}
                >
                  {label}
                  {key === "yearly" && (
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                        billing === "yearly"
                          ? "bg-white/20 text-white"
                          : "bg-[#fef0eb] text-[#e05a2b]"
                      }`}
                    >
                      -20%
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Cards — single col on mobile, 2 col on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
          {plans.map((plan, i) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              billing={billing}
              index={i}
            />
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center text-xs text-[#bbb] mt-8 tracking-wide">
          All plans include a 14-day free trial · No credit card required
        </p>
      </div>
    </section>
  );
}
