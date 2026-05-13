"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const contentMap = {
  "graphic-designing": {
    subtitle: "Unsure about our design services?",
    faqs: [
      { q: "How quickly can you deliver designs for our business?", a: "Turnaround times vary by project complexity. Most branding and UI/UX projects take 2-4 weeks, while simpler graphics are delivered in days." },
      { q: "Can I request revisions to the designs provided?", a: "Yes, we include multiple revision rounds to ensure the final output perfectly aligns with your brand vision." },
      { q: "What types of designs does A2V specialize in?", a: "We specialize in UI/UX design, brand identity, packaging, social media graphics, and full marketing collateral." },
      { q: "Who owns the copyright of the final designs?", a: "Once the project is completed and fully paid, you hold 100% ownership and copyright of the final designs." },
      { q: "Do you provide source files?", a: "Yes, we provide all native source files (Figma, AI, PSD) along with exported ready-to-use assets." },
    ]
  },
  "digital-marketing": {
    subtitle: "Unsure about our marketing campaigns?",
    faqs: [
      { q: "How long does it take to see SEO results?", a: "While initial improvements can be seen in 3-4 weeks, sustainable SEO growth typically takes 3-6 months depending on competition." },
      { q: "Do you guarantee first page rankings?", a: "No reputable IT solution company can guarantee exact rankings, but our data-driven strategies consistently deliver top-page results for our clients." },
      { q: "What ad platforms do you manage?", a: "We manage Google Ads, Meta (Facebook/Instagram), LinkedIn Ads, TikTok, and Bing Ads for comprehensive reach." },
      { q: "How do you measure marketing success?", a: "We track KPIs tailored to your goals, such as Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), and organic traffic growth." },
      { q: "Do I get monthly reports?", a: "Yes, we provide detailed, transparent monthly reports highlighting performance, insights, and next steps." },
    ]
  },
  "web-development": {
    subtitle: "Unsure about our development process?",
    faqs: [
      { q: "What technologies do you use?", a: "We build modern, scalable web apps using React, Next.js, Node.js, and leading CMS platforms like WordPress or Headless solutions." },
      { q: "Will my website be mobile-friendly?", a: "Absolutely. All our websites are built with a mobile-first approach, ensuring flawless responsiveness on all devices." },
      { q: "Do you provide hosting and maintenance?", a: "Yes, we offer enterprise-grade hosting, 24/7 uptime monitoring, and ongoing security and maintenance packages." },
      { q: "How long does it take to build a website?", a: "A standard corporate website takes 4-6 weeks, while complex web applications or e-commerce platforms may take 2-4 months." },
      { q: "Can I update the content myself?", a: "Yes, we integrate easy-to-use Content Management Systems (CMS) so your team can update content without coding knowledge." },
    ]
  }
};

const defaultContent = {
  subtitle: "Unsure about our services?",
  faqs: [
    { q: "How does the process work?", a: "We start with a discovery call, move into strategy and design, and finally execute and deliver your project." },
    { q: "How much do your services cost?", a: "Our pricing is tailored to the specific needs and scope of your project. Contact us for a custom quote." },
    { q: "How secure is my data with you?", a: "We use industry-leading security protocols to ensure all your business and financial data is strictly protected." },
    { q: "Do you work with international clients?", a: "Yes, we serve clients globally and adapt to various time zones for seamless communication." },
    { q: "Can we sign an NDA?", a: "Absolutely. We are happy to sign Non-Disclosure Agreements to protect your intellectual property." }
  ]
};

export default function ServiceFAQ({ source }) {
  const categoryMap = {
    "brand-identity": "graphic-designing",
    "print-social-media": "graphic-designing",
    "ui-ux-design": "graphic-designing",
    "ppc-paid-ads": "digital-marketing",
    "seo-optimization": "digital-marketing",
    "social-media-marketing": "digital-marketing",
    "cms-development": "web-development",
    "custom-web-solutions": "web-development",
    "ecommerce-development": "web-development",
  };

  const mappedSource = categoryMap[source] || source;
  const data = contentMap[mappedSource] || defaultContent;

  return (
    <section className="bg-[#fcfcfc] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-6">
            <span className="text-[#FC6600] text-sm">↗</span>
            <span className="text-sm font-medium text-gray-700">FAQs</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            {data.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
          
          {/* Left Column: CTA Card */}
          <div className="lg:col-span-4">
            <div className="bg-[#1A1A1A] rounded-2xl p-10 flex flex-col items-center text-center h-full justify-center shadow-xl">
              <div className="relative w-28 h-28 rounded-full overflow-hidden mb-8 border-4 border-transparent bg-gradient-to-tr from-[#FC6600] to-purple-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#1A1A1A]">
                  {/* Placeholder Avatar */}
                  <Image 
                    src="/images/portfolio-1.png" 
                    alt="Consultant" 
                    width={112} 
                    height={112} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-8">
                Book a 15-minute<br/>intro call
              </h3>
              
              <button className="bg-[#FC6600] text-white px-8 py-3 rounded-full font-bold w-full hover:bg-orange-600 transition-colors mb-6 flex justify-center items-center gap-2">
                Schedule now <span>↗</span>
              </button>
              
              <p className="text-gray-400 text-sm">
                Prefer to email? <a href="mailto:hello@a2v.com" className="text-[#FC6600] hover:underline">hello@a2v.com</a>
              </p>
            </div>
          </div>

          {/* Right Column: FAQs */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {data.faqs.map((faq, index) => (
              <div 
                key={index} 
                className="group border border-gray-200 bg-white hover:border-[#FC6600] transition-colors duration-300"
              >
                <div className="p-6 cursor-pointer flex justify-between items-center">
                  <h4 className="text-lg font-medium text-gray-800 pr-8">
                    {faq.q}
                  </h4>
                  <div className="w-2 h-2 rounded-full bg-[#1A1A1A] shrink-0 group-hover:bg-[#FC6600] transition-colors"></div>
                </div>
                {/* Answer revealed on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-300 ease-in-out">
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-gray-600 text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
