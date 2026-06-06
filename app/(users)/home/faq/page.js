"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "What web development services does A2V Groups offer?",
      a: "A2V Groups provides high-performance custom web applications, e-commerce stores (Shopify & Custom systems), headless CMS blogs (Sanity, Strapi), and secure corporate web portals tailored to help businesses scale.",
    },
    {
      q: "Why does A2V Groups build websites using Next.js and React?",
      a: "Next.js and React are the modern gold standard for web engineering. They deliver blazing-fast page load times, optimized Core Web Vitals, robust search engine indexability, and clean UI components that provide a premium experience for visitors.",
    },
    {
      q: "Can A2V Groups handle migration and database integration for our current systems?",
      a: "Yes. We specialize in custom API design and data synchronization. We seamlessly connect your backend databases, custom payment gateways (like Stripe), CRM systems (HubSpot, Salesforce), and third-party warehouse tools to secure pipelines.",
    },
    {
      q: "How does A2V Groups optimize websites for Google Search (SEO)?",
      a: "We construct sites with a mobile-first philosophy, semantic HTML5, clean hierarchy, schema JSON-LD markups, and optimized server-side rendering. This ensures search engines easily index your site to rank higher in search results.",
    },
    {
      q: "Do you offer ongoing maintenance and support after launch?",
      a: "Absolutely. We offer comprehensive support packages including 24/7 uptime monitoring, security shield updates, regular backups, and continuous performance tuning so your platform runs smoothly at all times.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24 px-4 sm:px-6 lg:px-14 border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-orange-200 bg-orange-50 mb-4">
            <Sparkles className="h-4 w-4 text-orange-500 animate-pulse" />
            <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            Frequently Asked <span className="text-orange-500 italic font-serif">Questions</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Everything you need to know about our web engineering, e-commerce, and digital growth services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-white border rounded-2xl transition-all duration-300 ${
                  isOpen ? "border-orange-500 shadow-md" : "border-slate-100 hover:border-orange-200 shadow-xs"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-orange-500 text-white" : "bg-slate-50 text-slate-600"
                    }`}
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-96 border-t border-slate-50" : "max-h-0"
                  }`}
                >
                  <p className="px-6 py-5 text-slate-600 text-base leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
