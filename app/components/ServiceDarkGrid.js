"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
  Monitor, 
  Palette, 
  Target, 
  FileEdit, 
  Smartphone, 
  MousePointer2,
  Cloud,
  Layout,
  Shield,
  Globe,
  Search,
  Database,
  Zap
} from "lucide-react";

const ServiceGridDark = ({ source }) => {
  const contentMap = {
    "website-development": {
      title: "WE SHAPE THE PERFECT SOLUTIONS.",
      description: "We are committed to providing our customers with exceptional service while offering our employees the best training.",
      services: [
        { id: "01", name: "WEBSITE DEVELOPMENT", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "GRAPHIC DESIGNING", icon: <Palette className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "DIGITAL MARKETING", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "SEO & CONTENT WRITING", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "APP DEVELOPMENT", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "UI/UX DESIGNING", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "digital-marketing": {
      title: "GROW YOUR DIGITAL FOOTPRINT.",
      description: "Data-backed strategies to dominate your niche and capture market share through every digital channel.",
      services: [
        { id: "01", name: "SEO SERVICES", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "SOCIAL MEDIA", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "PPC ADVERTISING", icon: <MousePointer2 className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "CONTENT ARCH", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "EMAIL ENGINE", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "LEAD GEN", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "graphic-designing": {
      title: "CRAFTING VISUAL EXCELLENCE.",
      description: "Defining your brand through world-class visual stories and market-leading design standards.",
      services: [
        { id: "01", name: "BRAND IDENTITY", icon: <Palette className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "UI/UX DESIGN", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "PRINT DESIGN", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "SOCIAL ASSETS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "PACKAGING", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "ILLUSTRATIONS", icon: <Palette className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "seo-optimization": {
      title: "ORGANIC SEARCH DOMINANCE.",
      description: "Proven methodologies to climb the search rankings and stay there through technical excellence and content authority.",
      services: [
        { id: "01", name: "TECHNICAL SEO", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "KEYWORD INTEL", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "CONTENT ARCH", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "LINK BUILDING", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "LOCAL SEARCH", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "SEO ANALYTICS", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "social-media-marketing": {
      title: "COMMUNITY FIRST STRATEGY.",
      description: "Strategic presence across all major platforms where your customers live, engaging in real-time to build loyalty.",
      services: [
        { id: "01", name: "COMMUNITY MGMT", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "CONTENT STRATEGY", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "SOCIAL GROWTH", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "INFLUENCER OUTREACH", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "PAID SOCIAL", icon: <MousePointer2 className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "SOCIAL LISTENING", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "ppc-paid-ads": {
      title: "PRECISION PAID TARGETING.",
      description: "Stop wasting budget. Start capturing intent and scaling revenue with laser-focused advertising campaigns.",
      services: [
        { id: "01", name: "GOOGLE ADS", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "SOCIAL ADS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "RETARGETING", icon: <MousePointer2 className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "CONV. TRACKING", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "PERF. REPORTS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "SHOPPING ADS", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "brand-identity": {
      title: "BEYOND THE LOGO MARK.",
      description: "A brand is an emotional connection. We build the visual bridge between your business and your audience.",
      services: [
        { id: "01", name: "ICONIC LOGOS", icon: <Palette className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "COLOR STRATEGY", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "TYPOGRAPHY KITS", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "BRAND BOOKS", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "BRAND VOICE", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "STATIONERY", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "ui-ux-design": {
      title: "EXPERIENCE ENGINEERING.",
      description: "Designing for psychology, performance, and pure joy. We build products that users love to use.",
      services: [
        { id: "01", name: "USER RESEARCH", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "PROTOTYPING", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "DESIGN SYSTEMS", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MOBILE-FIRST", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "MICRO-ANIMATION", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "ACCESSIBILITY", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "print-social-media": {
      title: "OMNICHANNEL CREATIVITY.",
      description: "Consistent quality from the screen to the physical world. Premium print and scroll-stopping digital assets.",
      services: [
        { id: "01", name: "SOCIAL KITS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "PACKAGING", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "STATIONERY", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "DIGITAL BANNERS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "BROCHURES", icon: <Palette className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "OUTDOOR ADS", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "cms-development": {
      title: "CONTENT CONTROL SYSTEMS.",
      description: "Manage your digital presence with intuitive, powerful, and secure content management systems tailored to your workflow.",
      services: [
        { id: "01", name: "HEADLESS CMS", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "WORDPRESS ENT.", icon: <Layout className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "CUSTOM BUILDERS", icon: <MousePointer2 className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "ROLE ACCESS", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "LOCALIZATION", icon: <Globe className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "SEO AUTO", icon: <Search className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "ecommerce-development": {
      title: "SCALABLE DIGITAL COMMERCE.",
      description: "Building high-conversion online stores that handle massive traffic and complex product architectures with ease.",
      services: [
        { id: "01", name: "CUSTOM CHECKOUT", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "INVENTORY MGMT", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "PAYMENT GATES", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "USER ACCOUNTS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "B2B COMMERCE", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "PERF. ANALYTICS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "web-application": {
      title: "COMPLEX APP ENGINEERING.",
      description: "From SaaS platforms to internal tools, we build scalable web applications with robust backends and reactive frontends.",
      services: [
        { id: "01", name: "SAAS PLATFORMS", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "REAL-TIME DATA", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "DASHBOARD UX", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "SERVERLESS", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "AUTH SYSTEMS", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "CLOUD ARCH", icon: <Database className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "api-integration": {
      title: "SEAMLESS DATA CONNECTIVITY.",
      description: "Integrating third-party services and building custom APIs to ensure your tech stack talks to each other perfectly.",
      services: [
        { id: "01", name: "CUSTOM API DEV", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "THIRD-PARTY INT", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "DATA SYNC", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "LEGACY MIGRATION", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "WEBHOOKS MGMT", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "API SECURITY", icon: <Shield className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "maintenance-support": {
      title: "24/7 TECHNICAL STABILITY.",
      description: "Proactive monitoring, security patching, and regular updates to ensure your digital assets are always online and healthy.",
      services: [
        { id: "01", name: "UPTIME MONITOR", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "SECURITY PATCH", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "BACKUP SYSTEMS", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "PERF. TUNING", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "BUG SQUASHING", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "TECH SUPPORT", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "consulting": {
      title: "STRATEGIC AI ADVISORY.",
      description: "Navigating the AI landscape with expert guidance to identify and implement high-value opportunities.",
      services: [
        { id: "01", name: "STRATEGY MAPS", icon: <Layout className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "TECH AUDITS", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "ETHICS GOV.", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "ROI ANALYSIS", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "ROADMAP DEV.", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "CHANGE MGMT.", icon: <Globe className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "development": {
      title: "CUSTOM AI ENGINEERING.",
      description: "Building proprietary AI models and integrated software systems tailored to your unique data assets.",
      services: [
        { id: "01", name: "MODEL TRAINING", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "API INTEGRATION", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "FULL-STACK AI", icon: <Layout className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MLOPS PIPES", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "DATA PIPELINE", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "UI DESIGN", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "machine-learning": {
      title: "ADAPTIVE ALGORITHMS.",
      description: "Developing self-learning systems that improve performance and accuracy as they process more data.",
      services: [
        { id: "01", name: "SUPERVISED ML", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "DEEP LEARNING", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "PATTERN REC.", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MODEL TUNING", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "ANOMALY DET.", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "PRED. MODELS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "nlp": {
      title: "COGNITIVE LANGUAGE OPS.",
      description: "Advanced natural language processing to understand, analyze, and generate human-like text and speech.",
      services: [
        { id: "01", name: "SENTIMENT ANAL.", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "NLU ENGINES", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "TEXT GEN (LLM)", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "VOICE OPS", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "DOC EXTRACTION", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "LANG. TRANS.", icon: <Globe className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "computer-vision": {
      title: "VISUAL INTELLIGENCE.",
      description: "Giving machines the power to see, identify, and process visual information with superhuman accuracy.",
      services: [
        { id: "01", name: "OBJ. DETECTION", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "VISUAL INSPECT", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "FACE REC.", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MOTION TRACK", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "OCR ENGINES", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "SCENE ANAL.", icon: <Globe className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "automation": {
      title: "HYPER AUTOMATION OPS.",
      description: "Combining AI and RPA to create intelligent, autonomous workflows that scale business efficiency.",
      services: [
        { id: "01", name: "INTEL. RPA", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "COGNITIVE FLOWS", icon: <Layout className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "SELF-HEALING", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "DOC AI", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "OPEX REDUCT.", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "LEGACY BRIDGE", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "chatbots": {
      title: "CONVERSATIONAL AI.",
      description: "Next-gen virtual assistants and chatbots that provide intelligent, 24/7 engagement for your users.",
      services: [
        { id: "01", name: "LLM CHATBOTS", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "KNOWLEDGE BASE", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "LEAD GEN BOTS", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MULTI-MODAL", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "SUPPORT BOTS", icon: <Smartphone className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "VOICE ASSIST.", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "data-science": {
      title: "DATA SCIENCE LAB.",
      description: "Mining deep data insights through advanced statistical modeling and scientific exploration.",
      services: [
        { id: "01", name: "STAT. MODELING", icon: <Search className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "BIG DATA OPS", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "VISUALIZATION", icon: <Layout className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "FEATURE ENG.", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "HYPO. TESTING", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "TREND ANAL.", icon: <Search className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "predictive-analytics": {
      title: "FUTURE FORECASTING.",
      description: "Using historical data to predict future outcomes and optimize business decisions proactively.",
      services: [
        { id: "01", name: "DEMAND PRED.", icon: <Target className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "CHURN ANAL.", icon: <Monitor className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "RISK MODELS", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "MARGIN OPTIM.", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "MARKET SIM.", icon: <Globe className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "LTV PRED.", icon: <Target className="w-10 h-10 text-orange-500" /> },
      ]
    },
    "modernization": {
      title: "AI MODERNIZATION.",
      description: "Upgrading legacy enterprise systems with modern AI capabilities to future-proof your business.",
      services: [
        { id: "01", name: "AI LAYERING", icon: <Zap className="w-10 h-10 text-orange-500" /> },
        { id: "02", name: "CLOUD MIG.", icon: <Cloud className="w-10 h-10 text-orange-500" /> },
        { id: "03", name: "REFAC. FOR AI", icon: <FileEdit className="w-10 h-10 text-orange-500" /> },
        { id: "04", name: "SEC. HARDENING", icon: <Shield className="w-10 h-10 text-orange-500" /> },
        { id: "05", name: "MODERN APIS", icon: <Database className="w-10 h-10 text-orange-500" /> },
        { id: "06", name: "PERF. BOOST", icon: <Zap className="w-10 h-10 text-orange-500" /> },
      ]
    }
  };

  const data = contentMap[source] || contentMap["website-development"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        .slick-dark-dots .slick-dots li button:before {
          color: white !important;
          opacity: 0.25;
        }
        .slick-dark-dots .slick-dots li.slick-active button:before {
          color: white !important;
          opacity: 1;
        }
      `}} />
      <section className="bg-[#19272B] py-24 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Topo Pattern Overlay (Subtle) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 400C100 400 100 300 200 300S300 400 400 400' fill='none' stroke='%23ffffff' stroke-width='1'/%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: Heading */}
        <div className="lg:col-span-5 space-y-8">
          <h2 className="text-5xl md:text-7xl font-[900] text-white leading-[0.9] uppercase tracking-tighter max-w-sm">
            {data.title} <span className="text-orange-500">.</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-md font-medium">
            {data.description}
          </p>
          
          {/* Rotating Badge */}
          <div className="pt-20 relative flex items-center justify-start">
            <div className="relative w-50 md:w-80 h-50 md:h-80 flex items-center justify-center">
              <svg 
                className="absolute inset-0 w-full h-full origin-center animate-[spin_12s_linear_infinite]" 
                viewBox="0 0 100 100"
              >
                <path 
                  id="textPath" 
                  d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" 
                  fill="none" 
                />
                <text>
                  <textPath 
                    href="#textPath" 
                    startOffset="0%" 
                    className="text-[11px] font-bold fill-white uppercase tracking-[0.25em]"
                  >
                    A2V GROUPS • A2V GROUPS • A2V GROUPS • 
                  </textPath>
                </text>
              </svg>
              {/* Inner shape similar to the screenshot */}
              <div className="absolute w-12 h-12 flex items-center justify-center">
                <div className="absolute w-8 h-8 border border-white rotate-12"></div>
                <div className="absolute w-8 h-8 border border-white -rotate-12"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Cards Grid */}
        <div className="lg:col-span-7">
          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-6">
            {data.services.map((service, index) => (
              <div 
                key={index}
                className="bg-[#1E2E33] p-10 rounded-xl hover:bg-[#25393f] transition-all duration-300 group flex flex-col justify-between h-64"
              >
                <div className="flex justify-between items-start">
                  <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors uppercase italic">
                    {service.id}
                  </span>
                  <div className="bg-orange-500/10 p-3 rounded-lg group-hover:bg-orange-500/20 transition-all">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none group-hover:text-orange-500 transition-colors">
                  {service.name}
                </h3>
              </div>
            ))}
          </div>
          
          {/* Mobile Slider */}
          <div className="block md:hidden pb-10 slick-dark-dots">
            <Slider {...sliderSettings}>
              {data.services.map((service, index) => (
                <div key={index} className="px-2">
                  <div className="bg-[#1E2E33] p-10 rounded-xl transition-all duration-300 group flex flex-col justify-between h-64">
                    <div className="flex justify-between items-start">
                      <span className="text-4xl font-black text-white/5 uppercase italic">
                        {service.id}
                      </span>
                      <div className="bg-orange-500/10 p-3 rounded-lg">
                        {service.icon}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-black text-white uppercase tracking-tighter leading-none">
                      {service.name}
                    </h3>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceGridDark;