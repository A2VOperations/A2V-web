"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// ─── All content lives here — one place to update ───────────────────────────
const contentMap = {
  "seo-optimization": {
    label: "Data-Driven SEO Solutions For Growing Businesses!",
    title: "Proven SEO Strategies That Drive Real Organic Growth",
    description:
      "A leading SEO agency specializing in technical excellence, content authority, and sustainable first-page rankings.",
    cards: [
      { title: "Technical SEO Audits", description: "Deep crawl analysis to identify and fix every technical issue holding your site back from ranking." },
      { title: "Keyword Intelligence", description: "In-depth research to target high-intent queries that bring customers who are ready to convert." },
      { title: "Content Optimization", description: "Creating and refining content strategies that rank for competitive keywords and build domain authority." }
    ]
  },
  "social-media-marketing": {
    label: "Viral Social Media Solutions For Modern Brands!",
    title: "Creative Social Strategies That Turn Followers Into Loyal Customers",
    description:
      "A creative-first social media agency specialising in platform-native content and community management.",
    cards: [
      { title: "Content Production", description: "Scroll-stopping Reels, TikToks, and carousel posts designed to entertain, educate, and convert." },
      { title: "Community Management", description: "Daily engagement with your audience to build brand loyalty and respond to every interaction." },
      { title: "Influencer Marketing", description: "Strategic partnerships with the right creators to expand your brand's reach and social proof." }
    ]
  },
  "ppc-paid-ads": {
    label: "High-ROI Paid Advertising Solutions For Scale-Up Businesses!",
    title: "PPC Campaigns That Maximise Every Dollar Of Your Ad Spend",
    description:
      "A performance-obsessed PPC agency managing Google, Meta, and LinkedIn campaigns with a focus on ROAS.",
    cards: [
      { title: "Search Ads (Google/Bing)", description: "Capturing customers at the exact moment they're searching for your product or service." },
      { title: "Social Ads (Meta/LinkedIn)", description: "Disruptive creatives and laser-targeted audiences to build awareness and generate leads." },
      { title: "Retargeting Systems", description: "Smart follow-up campaigns that re-engage lost visitors at every stage of the sales funnel." }
    ]
  },
  "brand-identity": {
    label: "World-Class Brand Identity Solutions For Ambitious Companies!",
    title: "Visual Identities That Make Your Brand Impossible To Forget",
    description:
      "A strategic branding agency crafting complete visual ecosystems — from iconic logos to brand guidelines.",
    cards: [
      { title: "Logo & Mark Design", description: "Timeless, distinctive marks that encapsulate your brand's essence in a single powerful symbol." },
      { title: "Color & Typography", description: "Scientifically-backed color palettes and custom font pairings that evoke the right responses." },
      { title: "Visual Brand Guidelines", description: "Comprehensive brand books that keep your identity consistent across every channel." }
    ]
  },
  "ui-ux-design": {
    label: "User-Centric Design Solutions For Digital Products!",
    title: "Intuitive Interfaces That Users Love & Businesses Profit From",
    description:
      "A UX-first design studio rooted in research, prototyping, and data validation for modern products.",
    cards: [
      { title: "User Research", description: "Deep behavioral analysis, heatmapping, and interview sessions to understand user actions." },
      { title: "Wireframing & Prototypes", description: "High-fidelity clickable Figma prototypes validated with real users before development." },
      { title: "Design Systems", description: "Scalable component libraries and Atomic Design systems ensuring consistent UI." }
    ]
  },
  "print-social-media": {
    label: "Premium Visual Design Solutions For Every Medium!",
    title: "Designs That Command Attention From The Screen To The Shelf",
    description:
      "A full-service visual design studio specialising in premium print materials and scroll-stopping digital assets.",
    cards: [
      { title: "Social Media Kits", description: "On-brand templates for Instagram, LinkedIn, and Facebook to keep your feed consistent." },
      { title: "Packaging Design", description: "Premium product packaging that stands out on the shelf and enhances the unboxing." },
      { title: "Business Stationery", description: "High-end business cards, letterheads, and brochures that command respect." }
    ]
  },
  "custom-web-solutions": {
    label: "Advanced Web Solutions For Complex Business Problems!",
    title: "Tailored Web Architecture Designed For Scale",
    description: "An elite engineering team focused on custom-built applications, SaaS platforms, and enterprise solutions.",
    cards: [
      { title: "Custom Frameworks", description: "Built with React, Next.js, and Node.js for maximum speed and SEO compatibility." },
      { title: "Scalable Backends", description: "Robust server-side engineering that handles massive concurrent users without latency." },
      { title: "Cloud Integration", description: "Native deployments on AWS, Azure, and Google Cloud with auto-scaling capabilities." }
    ]
  },
  "cms-development": {
    label: "Intuitive Content Solutions For Modern Editorial Teams!",
    title: "CMS Platforms That Empower Your Publishing Workflows",
    description: "Specializing in headless architectures, enterprise WordPress, and custom-coded content builders.",
    cards: [
      { title: "Headless CMS", description: "Decoupled architectures using Strapi or Contentful for ultimate frontend flexibility." },
      { title: "Custom Dashboard UX", description: "Intuitive administrative interfaces tailored to your specific content structure." },
      { title: "SEO Automation", description: "Built-in tools for automated meta-data, schema, and sitemap generation." }
    ]
  },
  "ecommerce-development": {
    label: "High-Conversion Commerce Solutions For Global Brands!",
    title: "E-commerce Engines Engineered To Scale Your Revenue",
    description: "A performance-first commerce agency building fast, secure, and intuitive digital storefronts.",
    cards: [
      { title: "Custom Checkout", description: "Frictionless, high-conversion checkout flows designed to maximize your AOV." },
      { title: "Omnichannel Sync", description: "Real-time inventory and order synchronization across all your physical and digital stores." },
      { title: "B2B Features", description: "Complex wholesale pricing, account management, and bulk ordering capabilities." }
    ]
  },
  "web-application": {
    label: "Scalable Application Engineering For Modern Products!",
    title: "SaaS & Enterprise Apps Built With Technical Precision",
    description: "From internal tools to global SaaS platforms, we build applications that drive business efficiency.",
    cards: [
      { title: "Multi-Tenant SaaS", description: "Secure, scalable architectures designed for multi-user software-as-a-service products." },
      { title: "Real-Time Data", description: "Reactive dashboards and streaming features using WebSockets and real-time databases." },
      { title: "Progressive Web Apps", description: "Native-like app experiences delivered through the browser with offline support." }
    ]
  },
  "api-integration": {
    label: "Seamless Data Connectivity For Your Entire Tech Stack!",
    title: "Custom APIs & Integrations That Automate Your Workflow",
    description: "Ensuring your favorite tools talk to each other perfectly with secure, high-uptime middleware.",
    cards: [
      { title: "Third-Party Sync", description: "Connecting CRM, ERP, and Marketing tools with deep, low-latency synchronization." },
      { title: "Custom API Dev", description: "Building secure REST and GraphQL APIs to share your data with partners and apps." },
      { title: "Webhook Engines", description: "High-speed event-driven systems that trigger actions across your ecosystem." }
    ]
  },
  "maintenance-support": {
    label: "24/7 Technical Stability For Your Mission-Critical Assets!",
    title: "Proactive Maintenance That Keeps Your Platform Always Healthy",
    description: "Proactive monitoring, security patching, and regular updates to protect your digital investment.",
    cards: [
      { title: "24/7 Uptime Monitor", description: "Continuous monitoring that alerts our team to issues before they affect your users." },
      { title: "Security Patching", description: "Immediate deployment of security updates to protect your data from emerging threats." },
      { title: "Performance Tuning", description: "Regular audits and optimizations to ensure your site stays fast as it grows." }
    ]
  }
};

const ServiceShowcase = ({
  source,
  label: labelProp,
  title: titleProp,
  description: descriptionProp,
  cards: cardsProp
}) => {
  const resolved = source ? contentMap[source] : null;
  const label       = labelProp       ?? resolved?.label       ?? "";
  const title       = titleProp       ?? resolved?.title       ?? "";
  const description = descriptionProp ?? resolved?.description ?? "";
  const cards       = cardsProp       ?? resolved?.cards       ?? [];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 10,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="bg-[#EBEEF1] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Header Banner */}
        <div className="bg-[#FC6600] p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.3em] mb-4">
              {label}
            </p>
            <h2 className="text-4xl md:text-5xl font-[900] text-white leading-tight uppercase tracking-tighter">
              {title}
            </h2>
          </div>
          <p className="text-white/90 text-lg font-bold leading-relaxed">
            {description}
          </p>
        </div>

        {/* Cards Grid */}
        {/* Cards Grid / Slider */}
        <div>
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-3">
            {cards.slice(0, 3).map((card, index) => (
              <div
                key={index}
                className={`bg-white p-16 flex flex-col items-start text-left transition-all duration-300 relative ${
                  index === 1 
                  ? ' z-10 shadow-[0_40px_80px_rgba(0,0,0,0.15)] scale-[1.03]' 
                  : 'border-r border-b border-gray-100'
                }`}
              >
                {/* Number Circle */}
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold mb-12 ${
                  index === 1 ? 'bg-[#FC6600] text-white' : 'bg-[#1A1A1A] text-white'
                }`}>
                  {`0${index + 1}`}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#1A1A1A] leading-tight mb-8">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-base leading-relaxed mb-12 font-medium">
                  {card.description}
                </p>

                {/* Read More Button */}
                <a
                  href="#"
                  className={`inline-flex items-center justify-center px-10 py-4 text-sm font-black uppercase tracking-widest transition-all duration-300 ${
                    index === 1 
                      ? 'bg-[#FC6600] text-white' 
                      : 'bg-white border border-gray-400 text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A]'
                  }`}
                >
                  Read More
                </a>
              </div>
            ))}
          </div>

          {/* Mobile Slider */}
          <div className="block md:hidden pb-10 mt-8">
            <Slider {...sliderSettings}>
              {cards.slice(0, 3).map((card, index) => (
                <div key={index} className="px-2">
                  <div className="bg-white p-10 flex flex-col items-start text-left shadow-lg border border-gray-100 h-full min-h-[400px]">
                    {/* Number Circle */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold mb-8 bg-[#1A1A1A] text-white">
                      {`0${index + 1}`}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-black text-[#1A1A1A] leading-tight mb-4">
                      {card.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 text-sm leading-relaxed mb-8 font-medium">
                      {card.description}
                    </p>

                    {/* Read More Button */}
                    <a
                      href="#"
                      className="inline-flex mt-auto items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-widest bg-[#FC6600] text-white"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServiceShowcase;
