"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Palette, Megaphone, CheckCircle2, Rocket, ArrowUpRight, Search, Presentation, Layout, Brain, ShieldCheck, TrendingUp, Zap, MousePointerClick, ClipboardList, Users, Handshake } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import { siteConfig } from "../../config";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      const timeout = setTimeout(() => {
        setReverse(false);
        setIndex((prev) => (prev + 1) % words.length);
      }, 300);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return <span>{`${words[index].substring(0, subIndex)}`}</span>;
};

const services = [
  {
    title: "Web Development",
    desc: "Custom React & Next.js applications, responsive corporate portals, and robust backend integrations tailored for business growth.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Code className="w-8 h-8" />,
    image: "/images/web-dev-hero.png",
    accent: "orange-500"
  },
  {
    title: "E-Commerce Websites",
    desc: "High-conversion online stores, Shopify configurations, custom checkout processes, and real-time inventory management systems.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Layout className="w-8 h-8" />,
    image: "/home/e_com.jpg",
    accent: "blue-500"
  },
  {
    title: "SEO Solutions",
    desc: "Advanced search engine optimization, technical Core Web Vitals optimization, and keyword analysis for ranking growth.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Search className="w-8 h-8" />,
    image: "/images/seo-service.png",
    accent: "green-500"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven marketing campaigns, email marketing sequences, and conversion-focused growth strategies for your brand.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Megaphone className="w-8 h-8" />,
    image: "/images/digital-marketing-hero.png",
    accent: "purple-500"
  },
  {
    title: "Google Ads Management",
    desc: "Highly-targeted Pay-Per-Click campaigns designed to capture immediate interest, drive high-intent leads, and maximize ROAS.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <TrendingUp className="w-8 h-8" />,
    image: "/images/seo-why.png",
    accent: "orange-500"
  },
  {
    title: "Social Media Marketing",
    desc: "Engaged community building, creative content planning, and strategic paid social campaigns across Facebook, Instagram, and LinkedIn.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Presentation className="w-8 h-8" />,
    image: "/images/a2vgroups_preview_digital.jpg",
    accent: "blue-500"
  },
  {
    title: "CRM Setup & Integration",
    desc: "Seamless CRM deployment and automation workflow designs (Salesforce, HubSpot) to manage leads, pipelines, and customers.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <ShieldCheck className="w-8 h-8" />,
    image: "/images/team-collaboration.png",
    accent: "green-500"
  },
  {
    title: "App Development",
    desc: "Bespoke mobile application development for Android and iOS using modern hybrid and native engineering frameworks.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Rocket className="w-8 h-8" />,
    image: "/home/mobile_app.jpg",
    accent: "purple-500"
  },
  {
    title: "Web & Data Analytics",
    desc: "Custom tracking implementation, heatmaps, event triggering, and visual dashboards to analyze traffic and boost conversion rates.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Zap className="w-8 h-8" />,
    image: "/images/traffic-gen.png",
    accent: "orange-500"
  },
  {
    title: "AI & Machine Learning",
    desc: "Building custom machine learning models, semantic search, automated workflows, and GPT/LLM chat integrations.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Brain className="w-8 h-8" />,
    image: "/images/ai-consultancy-hero.png",
    accent: "blue-500"
  }
];



const devTabs = [
  {
    title: "CUSTOM REACT / NEXT.JS WEB APPS",
    heading: "NEXT.JS & REACT WEB APPS",
    desc: "High-performance Single Page Applications (SPAs) and Server-Side Rendered (SSR) websites engineered with Next.js.",
    bullets: ["Modern React Architecture", "Core Web Vitals Optimized", "Custom Web Application API Integrations"],
    smallImg: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "E-COMMERCE DEVELOPMENT",
    heading: "E-COMMERCE STORES",
    desc: "Robust, scalable, and secure online stores built on Shopify, WooCommerce, Magento, or custom-coded solutions.",
    bullets: ["Secure Payments Gateways", "Inventory Sync Systems", "High-Conversion Checkouts"],
    smallImg: "/home/e_com.jpg"
  },
  {
    title: "APP DEVELOPMENT",
    heading: "MOBILE & WEB APP DEVELOPMENT",
    desc: "Engineering premium native and cross-platform mobile apps for iOS and Android, keeping user engagement at peak.",
    bullets: ["Hybrid React Native/Flutter", "High Performance Native UI", "Offline-First Architectures"],
    smallImg: "/home/mobile_app.jpg"
  },
  {
    title: "CRM INTEGRATION",
    heading: "CRM SOLUTIONS & DASHBOARDS",
    desc: "Syncing customer relations databases, marketing tools, and sales pipelines to automate lead handling.",
    bullets: ["Salesforce & HubSpot Sync", "Custom Leads Tracking Dashboards", "Marketing Automation Workflows"],
    smallImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "WORDPRESS & CMS PROJECTS",
    heading: "CMS & BLOG PORTALS",
    desc: "User-friendly WordPress setups or modern headless CMS dashboards (Strapi, Sanity) for self-publishing.",
    bullets: ["Headless CMS / Jamstack", "Custom WordPress Themes", "User Roles and Workflows"],
    smallImg: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "LARAVEL DEVELOPMENT",
    heading: "LARAVEL CUSTOM API BACKENDS",
    desc: "Custom web applications and complex systems built on the robust Laravel PHP framework.",
    bullets: ["Custom Backend Systems", "Secure REST/GraphQL APIs", "Cloud Sync Deployments"],
    smallImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
  }
];

const graphicTabs = [
  {
    title: "UI/UX DESIGN",
    heading: "UI/UX DESIGN",
    desc: "Crafting intuitive, engaging, and beautiful user interfaces that provide seamless digital experiences.",
    bullets: ["User Research", "Wireframing", "Interactive Prototypes"],
    smallImg: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "LOGO DESIGN",
    heading: "LOGO DESIGN",
    desc: "Creating memorable and impactful logos that capture the essence of your brand.",
    bullets: ["Concept Development", "Vector Graphics", "Brand Guidelines"],
    smallImg: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "BRANDING",
    heading: "BRANDING",
    desc: "Building strong, cohesive brand identities that resonate with your target audience.",
    bullets: ["Brand Strategy", "Visual Identity", "Voice & Tone"],
    smallImg: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "ILLUSTRATION",
    heading: "ILLUSTRATION",
    desc: "Bespoke illustrations that add a unique, creative touch to your digital and physical assets.",
    bullets: ["Digital Painting", "Vector Art", "Custom Graphics"],
    smallImg: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "PRINT DESIGN",
    heading: "PRINT DESIGN",
    desc: "Designing eye-catching print materials from brochures to business cards.",
    bullets: ["Brochures", "Business Cards", "Large Format Print"],
    smallImg: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "MOTION GRAPHICS",
    heading: "MOTION GRAPHICS",
    desc: "Bringing your brand to life with stunning animations and motion graphics.",
    bullets: ["2D Animation", "Explainer Videos", "Social Content"],
    smallImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300"
  }
];

const marketingTabs = [
  {
    title: "SEO SERVICES",
    heading: "SEARCH ENGINE OPTIMIZATION",
    desc: "Comprehensive on-page and off-page SEO strategy to rank your keywords higher on Google and bring organic traffic.",
    bullets: ["Technical SEO & Audits", "High-Intent Keyword Research", "Quality Link Building"],
    smallImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "GOOGLE ADS MANAGEMENT",
    heading: "GOOGLE ADS & PPC CAMPAIGNS",
    desc: "Setting up, optimization, and scaling of Google search, display, and video ads targeting high-intent purchasers.",
    bullets: ["Campaign Setup & Bidding", "Negative Keyword Filtering", "A/B Testing Ad Copy"],
    smallImg: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "SOCIAL MEDIA MARKETING",
    heading: "SOCIAL MEDIA MARKETING",
    desc: "Developing active social feeds, calendars, and high-impact paid social ad strategies to expand customer loyalty.",
    bullets: ["Content Calendars & Designs", "Paid Social Campaigns (Meta)", "Active Community Engagement"],
    smallImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "WEB & DATA ANALYTICS",
    heading: "DATA ANALYTICS & INSIGHTS",
    desc: "Deploying Google Analytics (GA4), tag managers, conversion trackings, and heatmaps to measure optimization progress.",
    bullets: ["GA4 Custom Goal Tracking", "Conversion Funnel Auditing", "Behavioral Heatmaps"],
    smallImg: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "EMAIL MARKETING",
    heading: "EMAIL CAMPAIGN AUTOMATION",
    desc: "Configuring high-converting email autoresponders and newsletters to nurture prospects and convert leads.",
    bullets: ["Drip Sequence Setups", "Lead Magnet Integration", "Visual Newsletter Layouts"],
    smallImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=300"
  }
];

const aiTabs = [
  {
    title: "AI & ML DEVELOPMENT",
    heading: "ARTIFICIAL INTELLIGENCE & MACHINE LEARNING",
    desc: "Integrating state-of-the-art AI, custom machine learning algorithms, and intelligent workflows into production applications.",
    bullets: ["Custom Machine Learning Models", "Natural Language Processing (NLP)", "Predictive Analytics Models"],
    smallImg: "https://images.unsplash.com/photo-1677442135136-760c813a743d?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "LLM & GPT INTEGRATIONS",
    heading: "LARGE LANGUAGE MODEL CONFIGURATIONS",
    desc: "Deploying GPT-4, Claude, or custom open-source models to power smart support systems, search engines, and content copy.",
    bullets: ["Custom AI Chatbots", "Semantic / Vector Search", "Automated Content Production"],
    smallImg: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "INTELLIGENT AUTOMATION",
    heading: "WORKFLOW AUTOMATION & SYSTEMS",
    desc: "Developing automations that link systems, replace manual database entries, and modernise legacy corporate workflows.",
    bullets: ["RPA / Process Automation", "API Integration Pipeline", "Custom Webhooks Systems"],
    smallImg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "AI STRATEGY CONSULTING",
    heading: "AI ROADMAP & FEASIBILITY PLANNING",
    desc: "Expert consulting on where AI models and integrations can reduce costs and optimize business capabilities.",
    bullets: ["AI Opportunity Mapping", "Feasibility / Cost Analysis", "Implementation Blueprints"],
    smallImg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300"
  }
];

const testimonials = [
  {
    name: "Rajesh Kumar (TechVision India)",
    text: "A2V's web development team is top-notch. They built our e-commerce platform with incredible speed and precision, handling every technical challenge flawlessly.",
    rating: 5
  },
  {
    name: "Priya Sharma (Greenleaf Solutions)",
    text: "The graphic design work for our branding was outstanding. Creative, modern, and perfectly aligned with our vision for the Indian market.",
    rating: 5
  },
  {
    name: "Amit Patel (GrowthX)",
    text: "Their digital marketing strategies helped us reach our target audience effectively. The ROI on our campaigns has been fantastic since we started with A2V.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    text: "Reliable and professional. They handled our complex website migration and security audit without a single minute of downtime. Highly recommended!",
    rating: 4
  },
  {
    name: "Vikram Singh (Singh Logistics)",
    text: "Outstanding commitment to quality. The team at A2V transformed our legacy systems into a modern, fast, and user-friendly web application.",
    rating: 5
  },
  {
    name: "Deepa Reddy (Reddy Enterprises)",
    text: "The creative team's attention to detail is remarkable. Our new brand identity has received amazing feedback from our clients across India.",
    rating: 5
  },
  {
    name: "Sanjay Mehra (Mehra & Co)",
    text: "Data-driven marketing that actually works. We've seen a significant jump in qualified leads since A2V took over our digital strategy.",
    rating: 4
  },
  {
    name: "Neha Kapoor (Kapoor Creatives)",
    text: "A truly professional IT solution company. They are our go-to partners for anything related to web development and UI/UX design. Exceptional work!",
    rating: 5
  }
];

function WorkingProcess() {
  const processSteps = [
    {
      id: "1",
      title: "Choose A Service",
      desc: "Select the service that aligns with your business goals from our extensive offerings.",
      icon: <MousePointerClick className="w-8 h-8 text-[#FC6600]" />
    },
    {
      id: "2",
      title: "Define Requirements",
      desc: "Share your specific needs and objectives to ensure tailored solutions.",
      icon: <ClipboardList className="w-8 h-8 text-[#FC6600]" />
    },
    {
      id: "3",
      title: "Request A Meeting",
      desc: "Schedule a meeting with our team to discuss your project in detail.",
      icon: <Users className="w-8 h-8 text-[#FC6600]" />
    },
    {
      id: "4",
      title: "Final Solution",
      desc: "Receive and implement the customized solution designed for your success.",
      icon: <Handshake className="w-8 h-8 text-[#FC6600]" />
    }
  ];

  return (
    <section className="py-24 bg-linear-to-br from-orange-50/50 via-white to-blue-50/30 overflow-hidden relative">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-200/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="text-[#FC6600] font-black uppercase tracking-[0.2em] text-sm mb-4 inline-block">Work Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1B4B]">Our Working Process</h2>
        </div>

        <div className="relative">
          {/* Dotted connecting line */}
          <div className="absolute top-[48px] left-0 w-full h-[160px] hidden lg:block z-0">
            <svg className="w-full h-full" preserveAspectRatio="none">
              <path
                d="M 12.5% 0 L 37.5% 100 L 62.5% 0 L 87.5% 100"
                fill="none"
                stroke="#FC6600"
                strokeWidth="2"
                strokeDasharray="6 6"
                className="opacity-40"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10 pt-4 lg:pt-0">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="flex flex-col items-center text-center relative z-10">
                  {/* Node */}
                  <div className={`relative ${isEven ? 'mb-8' : 'mb-8 lg:mb-0 lg:mt-8 order-first lg:order-last'}`}>
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(252,102,0,0.15)] relative z-10 border border-orange-50">
                      {step.icon}
                    </div>
                    {/* Number Badge */}
                    <div className="absolute top-0 left-0 -translate-x-2 -translate-y-2 w-8 h-8 bg-[#FC6600] rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg z-20 border-2 border-white">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Container */}
                  <div className="flex flex-col justify-center lg:h-32">
                    <h3 className="text-xl font-bold text-[#1E1B4B] mb-3">{step.title}</h3>
                    <p className="text-slate-500 leading-relaxed text-sm max-w-[250px] mx-auto">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  const [activeDevTab, setActiveDevTab] = useState(0);
  const [activeGraphicTab, setActiveGraphicTab] = useState(0);
  const [activeMarketingTab, setActiveMarketingTab] = useState(0);
  const [activeAiTab, setActiveAiTab] = useState(0);

  const [activeCategoryTab, setActiveCategoryTab] = useState("web");

  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6  overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Graphic (Infinity style) */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full text-gray-400">
            <path d="M100 250 C 100 150, 200 150, 250 250 C 300 350, 400 350, 400 250 C 400 150, 300 150, 250 250 C 200 350, 100 350, 100 250" fill="none" stroke="currentColor" strokeWidth="20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase">
              <span className="text-[#FC6600] block mb-2">AI-Perfected</span>
              <span className="text-gray-900 min-h-[1.1em] block">
                <Typewriter words={["Next.js Apps", "Custom Portals", "E-Commerce", "SaaS Solutions"]} />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-sans">
              For ambitious companies who want more than standard websites. A2V is a premier AI-Perfected Web Development studio that designs, engineers, and delivers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-16">
              <Link href="/contact" className="px-10 py-5 bg-[#FC6600] text-white font-black rounded-2xl hover:bg-[#e55c00] transition-all uppercase tracking-widest text-sm shadow-2xl shadow-[#FC6600]/30 hover:-translate-y-1">
                Get Connective Solutions
              </Link>
            </div>

            {/* Trust Logos */}
            <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">Google</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">4.9</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">DESIGNRUSH</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">4.9</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">yelp</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">5</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Contact Form */}
          <div className="lg:col-span-5 relative w-full max-w-2xl mx-auto lg:mx-0">
            <div className="absolute -inset-10 bg-[#FC6600]/5 rounded-full blur-3xl" />
            <div className="relative z-20 bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden p-2">
              <div className="p-4 bg-gray-50/50 rounded-[2.5rem]">
                <h3 className="text-2xl font-black text-gray-900 mb-6 px-4">Start Your Project</h3>
                <ContactForm source="services_hero" />
              </div>
            </div>

            {/* People Overlay */}
            <div className="absolute -bottom-10 -right-20 w-[400px] h-[400px] pointer-events-none opacity-20 hidden xl:block -z-10">
              <Image src="/images/agency-hero-people.png" alt="Our Team" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      {/* Services Main Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="px-4 py-1.5 rounded-full bg-[#FC6600]/10 border border-[#FC6600]/20 text-[#FC6600] text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block">
            Our Core Services
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
            What we do <span className="text-[#FC6600] italic font-light lowercase font-serif">best</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Providing top-tier digital craftsmanship to help your business scale efficiently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => {
            const accentColorMap = {
              "orange-500": "#FC6600",
              "blue-500": "#3B82F6",
              "green-500": "#10B981",
              "purple-500": "#8B5CF6"
            };
            return (
              <div
                key={i}
                className="group relative overflow-hidden bg-white border border-slate-100 flex flex-col shadow-lg hover:shadow-2xl transition-all duration-500 p-8 rounded-4xl"
              >
                {/* Card Image Background / Thumbnail */}
                <div className="relative h-48 w-full rounded-2xl overflow-hidden mb-6 bg-slate-50 border border-slate-100">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                  <div
                    className="absolute top-4 left-4 p-3 bg-white rounded-xl shadow-md border border-slate-100/50"
                    style={{ color: accentColorMap[service.accent] || "#FC6600" }}
                  >
                    {service.icon}
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-[#FC6600] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
                  {service.desc}
                </p>

                {/* Action */}
                <div className="pt-4 border-t border-slate-100 mt-auto">
                  <Link
                    href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${service.title} services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#FC6600] font-bold text-xs uppercase tracking-widest group/btn"
                  >
                    Learn More <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Our Working Process Section */}
      <WorkingProcess />

      {/* Full Capability Domain Browser */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#FC6600]/10 border border-[#FC6600]/20 text-[#FC6600] text-[10px] font-black uppercase tracking-[0.3em] mb-4 inline-block">
              Our Capabilities
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 uppercase tracking-tighter leading-none">
              Explore Our <span className="text-[#FC6600] italic font-light lowercase font-serif">full suite</span> of services
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              We offer comprehensive digital solutions across engineering, design, marketing, and artificial intelligence.
            </p>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: "web", label: "Web Development", icon: <Code className="w-5 h-5" /> },
              { id: "graphic", label: "Graphic Design", icon: <Palette className="w-5 h-5" /> },
              { id: "marketing", label: "Digital Marketing", icon: <Megaphone className="w-5 h-5" /> },
              { id: "ai", label: "AI & Automation", icon: <Brain className="w-5 h-5" /> }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryTab(cat.id)}
                className={`px-6 py-4 rounded-2xl font-bold text-sm tracking-wide uppercase transition-all duration-300 flex items-center gap-3 shadow-sm cursor-pointer border
                  ${activeCategoryTab === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 shadow-lg'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-[#FC6600] hover:text-[#FC6600]'
                  }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>

          {/* Interactive Browser for selected category */}
          <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 p-8 md:p-12 min-h-[500px]">
            {activeCategoryTab === "web" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Tabs List */}
                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  {devTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveDevTab(idx)}
                      className={`text-left px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-between group cursor-pointer
                        ${activeDevTab === idx
                          ? 'bg-[#FC6600] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                    >
                      <span>{tab.title}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeDevTab === idx ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>

                {/* Right Side: Active Tab Detail Card */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <span className="text-[10px] font-black tracking-[0.25em] text-[#FC6600] bg-orange-50 px-3 py-1.5 rounded-full mb-6 inline-block uppercase">
                        Web Engineering
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                        {devTabs[activeDevTab].heading}
                      </h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-base">
                        {devTabs[activeDevTab].desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {devTabs[activeDevTab].bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FC6600] shrink-0" />
                            <span className="text-slate-800 font-medium text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={devTabs[activeDevTab].smallImg}
                        alt={devTabs[activeDevTab].title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                    <p className="text-xs text-slate-400">
                      Need custom implementation? Speak with our development leads.
                    </p>
                    <Link
                      href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${devTabs[activeDevTab].title} services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#FC6600] transition-colors flex items-center gap-2"
                    >
                      Inquire on WhatsApp <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeCategoryTab === "graphic" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Tabs List */}
                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  {graphicTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveGraphicTab(idx)}
                      className={`text-left px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-between group cursor-pointer
                        ${activeGraphicTab === idx
                          ? 'bg-[#FC6600] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                    >
                      <span>{tab.title}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeGraphicTab === idx ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>

                {/* Right Side: Active Tab Detail Card */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <span className="text-[10px] font-black tracking-[0.25em] text-[#FC6600] bg-orange-50 px-3 py-1.5 rounded-full mb-6 inline-block uppercase">
                        Creative & Design
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                        {graphicTabs[activeGraphicTab].heading}
                      </h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-base">
                        {graphicTabs[activeGraphicTab].desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {graphicTabs[activeGraphicTab].bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FC6600] shrink-0" />
                            <span className="text-slate-800 font-medium text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={graphicTabs[activeGraphicTab].smallImg}
                        alt={graphicTabs[activeGraphicTab].title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                    <p className="text-xs text-slate-400">
                      Need custom assets? Talk to our visual designers.
                    </p>
                    <Link
                      href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${graphicTabs[activeGraphicTab].title} services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#FC6600] transition-colors flex items-center gap-2"
                    >
                      Inquire on WhatsApp <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeCategoryTab === "marketing" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Tabs List */}
                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  {marketingTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveMarketingTab(idx)}
                      className={`text-left px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-between group cursor-pointer
                        ${activeMarketingTab === idx
                          ? 'bg-[#FC6600] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                    >
                      <span>{tab.title}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeMarketingTab === idx ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>

                {/* Right Side: Active Tab Detail Card */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <span className="text-[10px] font-black tracking-[0.25em] text-[#FC6600] bg-orange-50 px-3 py-1.5 rounded-full mb-6 inline-block uppercase">
                        Growth & Outreach
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                        {marketingTabs[activeMarketingTab].heading}
                      </h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-base">
                        {marketingTabs[activeMarketingTab].desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {marketingTabs[activeMarketingTab].bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FC6600] shrink-0" />
                            <span className="text-slate-800 font-medium text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={marketingTabs[activeMarketingTab].smallImg}
                        alt={marketingTabs[activeMarketingTab].title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                    <p className="text-xs text-slate-400">
                      Want to scale traffic? Chat with our digital marketing strategists.
                    </p>
                    <Link
                      href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${marketingTabs[activeMarketingTab].title} services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#FC6600] transition-colors flex items-center gap-2"
                    >
                      Inquire on WhatsApp <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {activeCategoryTab === "ai" && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Left Side: Tabs List */}
                <div className="lg:col-span-5 flex flex-col gap-2.5">
                  {aiTabs.map((tab, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveAiTab(idx)}
                      className={`text-left px-6 py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all duration-300 flex items-center justify-between group cursor-pointer
                        ${activeAiTab === idx
                          ? 'bg-[#FC6600] text-white shadow-md'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 hover:text-slate-950'
                        }`}
                    >
                      <span>{tab.title}</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${activeAiTab === idx ? 'translate-x-0' : '-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'}`} />
                    </button>
                  ))}
                </div>

                {/* Right Side: Active Tab Detail Card */}
                <div className="lg:col-span-7 flex flex-col justify-between">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    <div className="md:col-span-8">
                      <span className="text-[10px] font-black tracking-[0.25em] text-[#FC6600] bg-orange-50 px-3 py-1.5 rounded-full mb-6 inline-block uppercase">
                        AI & Automation
                      </span>
                      <h3 className="text-3xl font-black text-slate-900 mb-4 uppercase tracking-tight">
                        {aiTabs[activeAiTab].heading}
                      </h3>
                      <p className="text-slate-600 mb-8 leading-relaxed text-base">
                        {aiTabs[activeAiTab].desc}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {aiTabs[activeAiTab].bullets.map((bullet, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#FC6600] shrink-0" />
                            <span className="text-slate-800 font-medium text-sm">{bullet}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-4 relative aspect-square w-full rounded-2xl overflow-hidden shadow-md">
                      <Image
                        src={aiTabs[activeAiTab].smallImg}
                        alt={aiTabs[activeAiTab].title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-4 justify-between items-center">
                    <p className="text-xs text-slate-400">
                      Ready to automate workflows? Talk to our AI architects.
                    </p>
                    <Link
                      href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${aiTabs[activeAiTab].title} services.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3.5 bg-slate-900 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-[#FC6600] transition-colors flex items-center gap-2"
                    >
                      Inquire on WhatsApp <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}



