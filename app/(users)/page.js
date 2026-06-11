"use client";

import Image from "next/image";
import BackgroundCircle from "../backgroundCircle";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SoftwareDev from "./home/softwareDev/page";
import InnovateSoft from "./home/InnovateSoft/page";
import PremierTech from "./home/premierTech/page";
import ExploreOur from "./home/exploreOur/page";
import DiscussStart from "./home/discussStart/page";
import Contact from "./home/contact/page";
import FAQSection from "./home/faq/page";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { siteConfig } from "../config";
import ClientLogos from "../components/ClientLogos";
import ProblemSolutionSection from './home/problemSolution/page';
import { Code, Layout, Search, Megaphone, TrendingUp, Presentation, ShieldCheck, Rocket, Zap, Brain } from "lucide-react";
import HomeAbout from "./home/homeAbout/page";
import HeroCarousel from "../components/marquee";
import HeroCarousel2 from "./home/heroCarousel/page2";
import Banner from "./home/banner/page1"

/* ── Reusable outlined-circle nav button pair ── */
const NavButtons = ({ onPrev, onNext, dark = false }) => {
  const base = "flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg font-medium transition-all duration-200 select-none";
  const light = "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white";
  const darkStyle = "border-white text-white hover:bg-white hover:text-orange-500";
  return (
    <div className="flex items-center gap-3">
      <button type="button" onClick={onPrev} aria-label="Previous" className={`${base} ${dark ? darkStyle : light}`}>
        ←
      </button>
      <button type="button" onClick={onNext} aria-label="Next" className={`${base} ${dark ? darkStyle : light}`}>
        →
      </button>
    </div>
  );
};

const AnimatedText = ({ text, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const letters = containerRef.current.querySelectorAll(".animate-letter");

    // Initialize initial state (Hidden, flipped back, dropped down slightly)
    gsap.set(letters, {
      opacity: 0,
      rotateX: -70,
      y: 15,
      transformOrigin: "top center"
    });

    // Run the flip-down typewriter reveal
    gsap.to(letters, {
      opacity: 1,
      y: 0,
      rotateX: 0,
      duration: 0.15,        // Quick individual letter flip
      stagger: 0.03,         // Crisp sequential spacing between letters
      delay: delay,          // Staggers entire text blocks if needed
      ease: "power2.out",
      clearProps: "transform",
    });
  }, [delay]);

  return (
    <span
      ref={containerRef}
      className="inline-block"
      style={{ perspective: "1000px" }} // Gives depth to the rotateX flip
    >
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="animate-letter inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Letter-by-letter slide-in from RIGHT to LEFT
const SlideRightText = ({ text, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const letters = containerRef.current.querySelectorAll(".slide-letter");
    gsap.set(letters, { opacity: 0, x: 30 });
    gsap.to(letters, {
      opacity: 1,
      x: 0,
      duration: 0.2,
      stagger: 0.03,
      delay: delay,
      ease: "power3.out",
      clearProps: "transform",
    });
  }, [delay]);

  return (
    <span
      ref={containerRef}
      className="inline-block"
    >
      {text.split("").map((char, idx) => (
        <span
          key={idx}
          className="slide-letter inline-block"
          style={{ whiteSpace: char === " " ? "pre" : "normal" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
};

// Word-by-word fade + slide-up animation for body text
const FadeWordsText = ({ text, delay = 0 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll(".fade-word");
    gsap.set(words, { opacity: 0, y: 18, filter: "blur(4px)" });
    gsap.to(words, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 0.5,
      stagger: 0.055,
      delay: delay,
      ease: "power3.out",
    });
  }, [delay]);

  return (
    <span ref={containerRef}>
      {text.split(" ").map((word, idx) => (
        <span key={idx} className="fade-word inline-block mr-[0.28em]">
          {word}
        </span>
      ))}
    </span>
  );
};

// Slot-machine roll-up: cycles through an array of strings
const RollingText = ({ items, interval = 2500 }) => {
  const textRef = useRef(null);
  const indexRef = useRef(0);

  useEffect(() => {
    if (!textRef.current || !items?.length) return;

    const roll = () => {
      const el = textRef.current;
      if (!el) return;
      // Roll current text up and out
      gsap.to(el, {
        y: -22,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
          indexRef.current = (indexRef.current + 1) % items.length;
          el.textContent = items[indexRef.current];
          // Snap to below, then roll up into place
          gsap.fromTo(
            el,
            { y: 22, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        },
      });
    };

    const timer = setInterval(roll, interval);
    return () => clearInterval(timer);
  }, [items, interval]);

  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span ref={textRef} className="inline-block">
        {items?.[0] ?? ""}
      </span>
    </span>
  );
};

export default function Home() {
  const popularSwiperRef = useRef(null);
  const heroSvcSwiperRef = useRef(null);
  const testimonialSwiperRef = useRef(null);
  const servicesSwiperRef = useRef(null);
  const productsSwiperRef = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGrowthPanel, setActiveGrowthPanel] = useState("mission");

  const heroTextContainerRef = useRef(null);
  const contactFormRef = useRef(null);

  useEffect(() => {
    if (!contactFormRef.current) return;
    gsap.fromTo(
      contactFormRef.current,
      { opacity: 0, x: 40 },
      {
        opacity: 1,
        x: 0,
        duration: 1.1,
        delay: 0.6,
        ease: "power3.out",
      }
    );
  }, []);

  const partnersRef = useRef(null);
  const borderLineRef = useRef(null);
  const partnersBorderRef = useRef(null);

  useEffect(() => {
    if (!partnersRef.current) return;
    const logos = partnersRef.current.querySelectorAll(".partner-logo");
    gsap.set(logos, { opacity: 0, y: 24 });
    gsap.to(logos, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.18,
      delay: 1.8,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!partnersBorderRef.current) return;
    gsap.fromTo(
      partnersBorderRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.0,
        delay: 1.55,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    if (!borderLineRef.current) return;
    gsap.fromTo(
      borderLineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        duration: 0.9,
        delay: 1.5,
        ease: "power3.out",
      }
    );
  }, []);

  const headingGroupRef = useRef(null);

  useEffect(() => {
    if (!headingGroupRef.current) return;
    const items = headingGroupRef.current.children;
    gsap.set(items, { opacity: 0, y: 28 });
    gsap.to(items, {
      opacity: 1,
      y: 0,
      duration: 0.55,
      stagger: 0.2,
      delay: 0,
      ease: "power3.out",
    });
  }, []);

  /* ── DATA ── */
  const growthPanels = [
    {
      id: "mission",
      title: "Learn Our Engineering Mission",
      description: "Our mission is to revolutionize the digital web landscape with AI-perfected engineering, delivering high-performance, clean web applications to empower modern businesses.",
      points: ["Next-Gen Web Platforms", "AI-Perfected Integration"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "vision",
      title: "Our Development Vision",
      description: "We build future-ready, scalable Jamstack and React-based applications that turn ambitious digital concepts into secure, blazing-fast storefronts and portals.",
      points: ["Scalable Next.js systems", "Modern headless setups"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "philosophy",
      title: "Our Design Philosophy",
      description: "Fast loading times, responsive UI/UX, and robust API endpoints guide every web project we build from initial prototype through launch.",
      points: ["User-centric web interactions", "Semantic and clean code"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "strategy",
      title: "Our Development Strategy",
      description: "We combine modern framework selection (like Next.js) with robust hosting environments (Vercel, AWS) to deliver stable web platforms.",
      points: ["Core Web Vitals alignment", "Secure & stable deployment"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const popularServices = [
    {
      title: "Web Development",
      description: "Custom React & Next.js applications, responsive corporate portals, and robust backend integrations tailored for business growth.",
      image: "/images/web-dev-hero.png",
      accent: "text-[#ff4d00]",
      icon: <Code className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "E-Commerce Websites",
      description: "High-conversion online stores, Shopify configurations, custom checkout processes, and real-time inventory management systems.",
      image: "/home/e_com.jpg",
      accent: "text-[#ff4d00]",
      icon: <Layout className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "SEO Solutions",
      description: "Advanced search engine optimization, technical Core Web Vitals optimization, and keyword analysis for ranking growth.",
      image: "/images/seo-service.png",
      accent: "text-[#ff4d00]",
      icon: <Search className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing campaigns, email marketing sequences, and conversion-focused growth strategies for your brand.",
      image: "/images/digital-marketing-hero.png",
      accent: "text-[#ff4d00]",
      icon: <Megaphone className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "Google Ads Management",
      description: "Highly-targeted Pay-Per-Click campaigns designed to capture immediate interest, drive high-intent leads, and maximize ROAS.",
      image: "/images/seo-why.png",
      accent: "text-[#ff4d00]",
      icon: <TrendingUp className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "Social Media Marketing",
      description: "Engaged community building, creative content planning, and strategic paid social campaigns across Facebook, Instagram, and LinkedIn.",
      image: "/images/a2vgroups_preview_digital.jpg",
      accent: "text-[#ff4d00]",
      icon: <Presentation className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "CRM Setup & Integration",
      description: "Seamless CRM deployment and automation workflow designs (Salesforce, HubSpot) to manage leads, pipelines, and customers.",
      image: "/images/team-collaboration.png",
      accent: "text-[#ff4d00]",
      icon: <ShieldCheck className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "App Development",
      description: "Bespoke mobile application development for Android and iOS using modern hybrid and native engineering frameworks.",
      image: "/home/mobile_app.jpg",
      accent: "text-[#ff4d00]",
      icon: <Rocket className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "Web & Data Analytics",
      description: "Custom tracking implementation, heatmaps, event triggering, and visual dashboards to analyze traffic and boost conversion rates.",
      image: "/images/traffic-gen.png",
      accent: "text-[#ff4d00]",
      icon: <Zap className="h-16 w-16" strokeWidth={1.5} />,
    },
    {
      title: "AI & Machine Learning",
      description: "Building custom machine learning models, semantic search, automated workflows, and GPT/LLM chat integrations.",
      image: "/images/ai-consultancy-hero.png",
      accent: "text-[#ff4d00]",
      icon: <Brain className="h-16 w-16" strokeWidth={1.5} />,
    }
  ];

  const heroServices = [
    {
      num: "01", tag: "Web Development", title: "Next.js Web Development",
      desc: "Blazing-fast, SEO-ready web applications built with Next.js — the industry standard for scalable React projects, PWAs, and e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Next.js Web Development service at A2V.",
    },
    {
      num: "02", tag: "Web Performance", title: "Technical Page Speed Audits",
      desc: "Dominate search rankings and reduce bounce rates with speed optimization, image compression, asset bundling, and Core Web Vitals refinement.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Web Performance & Speed Audits at A2V.",
    },
    {
      num: "03", tag: "E-Commerce", title: "Custom Shopify Stores",
      desc: "Bespoke storefront templates and tailored backend scripts that elevate your Shopify store for visual perfection, speed, and high transaction limits.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in Custom Shopify Development at A2V.",
    },
    {
      num: "04", tag: "CMS Integration", title: "Headless CMS Platforms",
      desc: "Connect robust frontends with headless content management panels like Strapi, Sanity, or Contentful to publish instantly without developer overhead.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Headless CMS Integration service at A2V.",
    },
    {
      num: "05", tag: "API Solutions", title: "API Development & Synclinks",
      desc: "Build highly reliable endpoints and data webhooks that sync inventories, handle payments, connect CRMs, and automate backend operations cleanly.",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in API Development & Integrations at A2V.",
    },
    {
      num: "06", tag: "Web Development", title: "Corporate Web Portals",
      desc: "Centralized client-login portals and robust employee dashboards that protect data, handle operations, and streamline visual reporting.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Corporate Web Portal service at A2V.",
    },
  ];

  const mainServices = [
    {
      title: "Web Development",
      tag: "React & Next.js",
      desc: "Custom React & Next.js applications, responsive corporate portals, and robust backend integrations tailored for business growth.",
      image: "/images/web-dev-hero.png",
      wa: "Hi, I'm interested in your Web Development services at A2V."
    },
    {
      title: "E-Commerce Websites",
      tag: "Shopify & Custom",
      desc: "High-conversion online stores, Shopify configurations, custom checkout processes, and real-time inventory management systems.",
      image: "/home/e_com.jpg",
      wa: "Hi, I'm interested in your E-Commerce services at A2V."
    },
    {
      title: "SEO Solutions",
      tag: "Rankings & Audit",
      desc: "Advanced search engine optimization, technical Core Web Vitals optimization, and keyword analysis for ranking growth.",
      image: "/images/seo-service.png",
      wa: "Hi, I'm interested in your SEO Solutions at A2V."
    },
    {
      title: "Digital Marketing",
      tag: "Outreach & Ads",
      desc: "Data-driven marketing campaigns, email marketing sequences, and conversion-focused growth strategies for your brand.",
      image: "/images/digital-marketing-hero.png",
      wa: "Hi, I'm interested in your Digital Marketing services at A2V."
    },
    {
      title: "Google Ads Management",
      tag: "PPC & ROAS",
      desc: "Highly-targeted Pay-Per-Click campaigns designed to capture immediate interest, drive high-intent leads, and maximize ROAS.",
      image: "/images/seo-why.png",
      wa: "Hi, I'm interested in your Google Ads Management at A2V."
    },
    {
      title: "Social Media Marketing",
      tag: "Meta & LinkedIn",
      desc: "Engaged community building, creative content planning, and strategic paid social campaigns across Facebook, Instagram, and LinkedIn.",
      image: "/images/a2vgroups_preview_digital.jpg",
      wa: "Hi, I'm interested in your Social Media Marketing at A2V."
    },
    {
      title: "CRM Setup & Integration",
      tag: "HubSpot & Salesforce",
      desc: "Seamless CRM deployment and automation workflow designs (Salesforce, HubSpot) to manage leads, pipelines, and customers.",
      image: "/images/team-collaboration.png",
      wa: "Hi, I'm interested in your CRM Setup & Integration at A2V."
    },
    {
      title: "App Development",
      tag: "iOS & Android",
      desc: "Bespoke mobile application development for Android and iOS using modern hybrid and native engineering frameworks.",
      image: "/home/mobile_app.jpg",
      wa: "Hi, I'm interested in your App Development at A2V."
    },
    {
      title: "Web & Data Analytics",
      tag: "GA4 & Funnels",
      desc: "Custom tracking implementation, heatmaps, event triggering, and visual dashboards to analyze traffic and boost conversion rates.",
      image: "/images/traffic-gen.png",
      wa: "Hi, I'm interested in your Web & Data Analytics at A2V."
    },
    {
      title: "AI & Machine Learning",
      tag: "GPT & Workflows",
      desc: "Building custom machine learning models, semantic search, automated workflows, and GPT/LLM chat integrations.",
      image: "/images/ai-consultancy-hero.png",
      wa: "Hi, I'm interested in your AI & Machine Learning services at A2V."
    }
  ];

  const heroProducts = [
    {
      title: "Custom Web Solutions",
      desc: "Modern, fast, and fully responsive websites tailored to your business goals using Next.js and Tailwind CSS.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Custom Web Solutions."
    },
    {
      title: "E-Commerce Stores",
      desc: "Robust Shopify and custom digital shops that scale transaction limits and simplify client catalog updates.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in E-Commerce Storefronts."
    },
    {
      title: "Web Speed & SEO",
      desc: "Tune page load times and technical index structures to score 95+ on Google PageSpeed Insights.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in Web Speed and SEO optimization."
    },
    {
      title: "Headless CMS Blogs",
      desc: "Publish blog posts instantly with visual CMS structures like Strapi or Sanity without touching backend tables.",
      image: "/images/a2vgroups_logo_designing.png",
      wa: "Hi, I'm interested in Headless CMS setup."
    },
    {
      title: "Corporate Web Portals",
      desc: "Secure portals for clients or employees to access visual reports, billing histories, and task dashboards.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in Corporate Web Portals."
    },
    {
      title: "Custom API Solutions",
      desc: "Tailor-made webhook systems that sync inventories across sales pipelines and connect CRM records instantly.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in Custom API development."
    },
    {
      title: "Ongoing Web Support",
      desc: "Ensure security shields remain updated, databases remain clean, and technical bugs are squashed proactively.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Web Support plans."
    }
  ];

  const testimonials = [
    {
      text: "A2V transformed our outdated portal into a lightning-fast, AI-perfected platform. Our customers noticed the difference within weeks of launch. Truly a world-class web development team based right here in India.",
      name: "Rajesh Kumar", role: "Founder, TechVision India",
      imgs: [
        "/home/a2vgroups_testimonial_9.jpg",
        "/home/a2vgroups_testimonial_10.jpg",
        "/home/a2vgroups_testimonial_11.jpg",
        "/home/a2vgroups_testimonial_12.jpg",
      ],
    },
    {
      text: "The branding A2V created for us is stunning. From our logo to our complete brand identity, every element reflects premium quality. Our brand now stands out in a very competitive market.",
      name: "Priya Sharma", role: "CEO, ToysForKids",
      imgs: [
        "/home/a2vgroups_testimonial_1.jpg",
        "/home/a2vgroups_testimonial_2.jpg",
        "/home/a2vgroups_testimonial_3.jpg",
        "/home/a2vgroups_testimonial_4.jpg",
      ],
    },
    {
      text: "Since A2V took over our digital marketing, our organic traffic has tripled and leads have never been higher. Their AI-driven approach to SEO and paid ads is genuinely next-level.",
      name: "Amit Patel", role: "Director, GrowthX Pvt. Ltd.",
      imgs: [
        "/home/a2vgroups_testimonial_5.jpg",
        "/home/a2vgroups_testimonial_6.jpg",
        "/home/a2vgroups_testimonial_7.jpg",
        "/home/a2vgroups_testimonial_8.jpg",
      ],
    },
  ];

  const googlepartner = {
    image1: "/home/google.png",
    image2: "/home/facebook.png",
    image3: "/home/clutch.png",
    image4: "/home/goodfirms.png",
  }

  const titleHero = {
    line1: "Web Development",
    line2: "Digital Marketing",
    line3: "AI Solutions",
    line4: "Graphic Designing",
  }

  return (
    <div className="font-family relative min-h-screen overflow-hidden bg-white">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative z-10 pt-15 pb-20 px-6 overflow-hidden min-h-[85vh] flex items-center bg-[#f5f5f5]/55">
        <BackgroundCircle position={{ top: "45%", left: "20%", translateY: "-50%" }}
          size={2.5} />

        <div className="z-10 mx-auto w-full max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-13 gap-16 items-center relative">
            <div className="lg:col-span-9 flex flex-col  justify-center">
              {/* Heading Group – staggered block animation */}
              <div ref={headingGroupRef}>

                {/* Small Top Intro Line */}
                <p className="mb-4 text-base font-bold text-white px-1 w-fit sm:text-lg bg-[#F56302]" style={{ opacity: 0 }}>
                  Welcome to A2V Groups&nbsp;
                  <RollingText items={Object.values(titleHero)} interval={2500} />
                  &nbsp;
                  IT Company
                </p>

                {/* Main Heading */}
                <h1 className="text-4xl font-semibold leading-tight text-black sm:text-6xl xl:text-[68px]" style={{ opacity: 0 }}>
                  <SlideRightText text="NextGen AI Web Solutions" delay={0.3} />
                </h1>

                {/* Sub-heading with Highlighting */}
                <h2 className="mt-3 text-2xl font-medium leading-tight text-black sm:text-5xl xl:text-5xl flex flex-wrap items-center gap-x-3" style={{ opacity: 0 }}>
                  <SlideRightText text="and" delay={0.6} />{" "}
                  <span className="inline-block bg-[#F68C34] px-3 px-1 text-white">
                    <SlideRightText text="CUSTOM WEB" delay={0.7} />
                  </span>{" "}
                  <SlideRightText text="Platforms" delay={1.0} />
                </h2>

              </div>

              {/* Description Block */}
              <p className="mt-6 pl-4 text-base leading-relaxed text-gray-600 md:text-md max-w-2xl relative">
                <span
                  ref={borderLineRef}
                  className="absolute left-0 top-0 h-full w-1 bg-[#FC6600]"
                  style={{ transform: "scaleY(0)", transformOrigin: "top center" }}
                />
                <FadeWordsText
                  text="Transforming ideas into high-performance digital reality. We design and develop custom Next.js solutions and AI-driven web applications built to scale."
                  delay={1.3}
                />
              </p>

              {/* Partner Logos */}
              <div ref={partnersRef} className="mt-6 max-w-3xl">
                {/* Animated border line */}
                <div className="relative h-px mb-6 bg-transparent overflow-hidden">
                  <span
                    ref={partnersBorderRef}
                    className="absolute inset-0 bg-gray-300"
                    style={{ transform: "scaleX(0)", transformOrigin: "left center" }}
                  />
                </div>
                <div className="flex flex-wrap gap-8">
                  {
                    Object.keys(googlepartner).map((key) => (
                      <div key={key} className="partner-logo flex items-center gap-3" style={{ opacity: 0 }}>
                        <Image width={1200} height={1200} src={googlepartner[key]} alt={key} className="w-40 h-14 object-contain" />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
            <div ref={contactFormRef} className=" lg:col-span-4 relative w-full max-w-[320px] mx-auto lg:mx-0 lg:justify-self-end" style={{ opacity: 0 }}>
              <ContactForm source="hero_section_v2" />
            </div>
          </div>
        </div>
      </section>

      <HeroCarousel />
      <HeroCarousel2 />

      <Banner />
      {/* about home */}

      <section >
        <HomeAbout />
      </section>

      {/* ══════════════════════════════════════
          PROBLEM + SOLUTION SECTION
          (REPLACING YOUR OLD CTA) – below Hero
      ══════════════════════════════════════ */}
      <section className="px-4 sm:px-6 lg:px-14 py-14 bg-[#f5f5f5]">
        <ProblemSolutionSection />
      </section>

      {/* ══════════════════════════════════════
          HERO PRODUCTS — Below Hero
      ══════════════════════════════════════ */}
      <section className="relative bg-white py-20 px-4 sm:px-6 lg:px-14 border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Premium Products</span>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Our Hero <span className="text-orange-500">Services</span>
              </h2>
            </div>
            <NavButtons
              onPrev={() => productsSwiperRef.current?.slidePrev()}
              onNext={() => productsSwiperRef.current?.slideNext()}
            />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop
            grabCursor={true}
            touchEventsTarget="container"
            autoplay={{ delay: 4500, disableOnInteraction: false }}
            onSwiper={(s) => { productsSwiperRef.current = s; }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {heroProducts.map((product, idx) => (
              <SwiperSlide key={idx}>
                <div className="group relative overflow-hidden bg-slate-50 border border-slate-100 h-full flex flex-col">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(product.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/30 text-white px-6 py-3 font-bold text-sm shadow-xl"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {product.desc}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(product.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest"
                      >
                        Reach Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* ══════════════════════════════════════
          COMPONENT SECTIONS
      ══════════════════════════════════════ */}
      <SoftwareDev />
      <InnovateSoft />
      <PremierTech />

      {/* ══════════════════════════════════════
          GROWTH & DEVELOPMENT
      ══════════════════════════════════════ */}
      <section className="bg-[#19272b] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-orange-400 md:text-base">Grow &amp; Development</p>
            <h2 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              Modern Technology and
              <span className="mt-1 block font-light text-white/90">Advancement Incentives</span>
            </h2>
            <div className="mt-10 border-t border-white/12">
              {growthPanels.map((panel) => {
                const isActive = panel.id === activeGrowthPanel;
                return (
                  <div key={panel.id} className="border-b border-white/12 py-6 md:py-4">
                    <button
                      type="button"
                      onMouseEnter={() => setActiveGrowthPanel(panel.id)}
                      className="flex w-full items-center justify-between gap-6 text-left"
                    >
                      <span className={`text-2xl leading-tight md:text-[1.5rem] ${isActive ? "text-orange-400" : "text-white"}`}>
                        {panel.title}
                      </span>
                      <span className="text-3xl leading-none text-white">{isActive ? "−" : "+"}</span>
                    </button>
                    {isActive && (
                      <div className="mt-5 grid gap-6 md:grid-cols-[180px_1fr] md:items-start">
                        <div className="relative overflow-hidden">
                          <Image src={panel.image} alt={panel.title} width={380} height={420}
                            className="h-52 w-full object-cover md:h-44" unoptimized />
                        </div>
                        <div className="max-w-xl">
                          <p className="text-md text-white/90 md:text-[1.05rem]">{panel.description}</p>
                          <div className="mt-4 space-y-2">
                            {panel.points.map((point) => (
                              <div key={point} className="flex items-center gap-4 text-lg font-semibold text-white">
                                <span className="text-3xl leading-none text-orange-400">*</span>
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative overflow-hidden bg-[#19272b] my-auto">
            <Image
              src="/home/a2vgroups_chat.jpg"
              alt="Team collaborating" width={1400} height={1600}
              className="h-full w-full object-cover" unoptimized
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          POPULAR SERVICES  — nav buttons top-right of header
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white px-4 py-16 text-black md:px-8 md:py-24">
        <div className="relative mx-auto max-w-7xl">

          {/* Header + nav buttons on same row */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-14">
            <div>
              <p className="text-sm font-semibold text-orange-400 md:text-base">Our Popular Solutions</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight">
                We Engineer Premium Web Applications
                <span className="mt-2 block font-light text-black">that Drive Business Growth</span>
              </h2>
            </div>
            <NavButtons
              onPrev={() => popularSwiperRef.current?.slidePrev()}
              onNext={() => popularSwiperRef.current?.slideNext()}
            />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            speed={800}
            grabCursor={true}
            touchEventsTarget="container"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(s) => { popularSwiperRef.current = s; }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {[...popularServices, ...popularServices].map((service, idx) => (
              <SwiperSlide key={`${service.title}-${idx}`} className="h-auto">
                <article className="group flex flex-col h-full border border-black/10 px-6 py-8 sm:px-8 sm:py-10 transition duration-300 hover:bg-[#19272b]">
                  <div className={`${service.accent} transition duration-300 group-hover:text-orange-400`}>
                    {service.icon}
                  </div>
                  <h3 className={`mt-8 text-[1.75rem] leading-tight font-semibold ${service.accent} transition duration-300 group-hover:text-orange-400`}>
                    {service.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-black transition duration-300 group-hover:text-white sm:text-lg">
                    {service.description}
                  </p>
                  <div className="mt-8 overflow-hidden rounded-lg">
                    <Image src={service.image} alt={service.title} width={900} height={620}
                      className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" unoptimized />
                  </div>
                  <div className="mt-auto pt-10">
                    <Link
                      href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${service.title} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 rounded-full border border-black/20 px-6 py-3 text-base font-semibold text-black transition duration-300 hover:border-orange-400 hover:text-orange-400 group-hover:border-white group-hover:text-white"
                    >
                      <span className="text-xl leading-none">+</span>
                      <span>WhatsApp</span>
                    </Link>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <DiscussStart />

      {/* ══════════════════════════════════════
          SERVICES WE OFFER — Swiper
      ══════════════════════════════════════ */}
      <section id="services" className="relative bg-[#f8fafc] py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-orange-500 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Comprehensive Solutions</span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900">
                Services We <span className="text-orange-500 italic">Offer</span>
              </h2>
            </div>
            <NavButtons
              onPrev={() => servicesSwiperRef.current?.slidePrev()}
              onNext={() => servicesSwiperRef.current?.slideNext()}
            />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop
            speed={800}
            grabCursor={true}
            touchEventsTarget="container"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(s) => { servicesSwiperRef.current = s; }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {mainServices.map((service, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-4">
                <div className="group relative overflow-hidden bg-white border border-slate-100 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(service.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/30 text-white px-6 py-3 font-bold text-sm shadow-xl"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 group-hover:text-orange-500 transition-colors">
                      {service.tag}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {service.desc}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(service.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-widest"
                      >
                        Reach Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* AUTO MARQUEE BETWEEN SECTIONS */}
      <ClientLogos />

      {/* ══════════════════════════════════════
          AI-MASTERED SERVICES — nav buttons top-right
      ══════════════════════════════════════ */}
      <section className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 md:px-14">
        <div className="relative mx-auto max-w-7xl">

          {/* Header + nav buttons */}
          <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-bold uppercase tracking-widest text-orange-500">
                AI-Perfected Solutions
              </p>
              <h2 className="text-4xl font-extrabold leading-tight text-black sm:text-5xl">
                AI-Mastered <span className="font-light text-black">Services</span>
              </h2>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-3">
              <p className="max-w-md text-base leading-7 text-gray-600">
                Precision-engineered digital services that combine cutting-edge technology with creative excellence.
              </p>
              <NavButtons
                onPrev={() => heroSvcSwiperRef.current?.slidePrev()}
                onNext={() => heroSvcSwiperRef.current?.slideNext()}
              />
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(s) => { heroSvcSwiperRef.current = s; }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {heroServices.map((s) => (
              <SwiperSlide key={s.num} className="h-auto">
                <div className="group relative overflow-hidden bg-white border border-slate-100 h-full flex flex-col shadow-sm hover:shadow-xl transition-all duration-500">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      unoptimized
                    />
                    <span className="absolute top-4 right-4 z-10 text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors select-none">
                      {s.num}
                    </span>
                    <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(s.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/30 text-white px-6 py-3 font-bold text-sm shadow-xl"
                      >
                        Inquire Now
                      </Link>
                    </div>
                  </div>
                  <div className="p-8 flex-1 flex flex-col">
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500 mb-2">{s.tag}</span>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-orange-500 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-1">
                      {s.desc}
                    </p>
                    <div className="mt-auto">
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(s.wa)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 text-orange-500 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all"
                      >
                        Reach Us <span className="group-hover:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <ExploreOur />

      {/* ══════════════════════════════════════
          TESTIMONIALS — nav buttons above slide
      ══════════════════════════════════════ */}
      <section className="bg-white px-4 py-16 sm:px-6 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 md:grid-cols-2">

          {/* Left */}
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-orange-500">Clients Feedback</p>
            <h2 className="mb-6 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              1250+ <span className="text-gray-900">People Say</span>{" "}
              <span className="font-light text-gray-500">About Us</span>
            </h2>

            {/* ← nav buttons ABOVE the card → */}
            <NavButtons
              onPrev={() => testimonialSwiperRef.current?.slidePrev()}
              onNext={() => testimonialSwiperRef.current?.slideNext()}
            />

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSwiper={(s) => { testimonialSwiperRef.current = s; }}
              onSlideChange={(s) => setActiveTestimonial(s.realIndex)}
              className="mt-8"
            >
              {testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="pr-4">
                    <span className="block select-none text-7xl leading-none text-orange-500 mb-4">&quot;</span>
                    <p className="mb-6 text-lg leading-8 text-gray-700">{t.text}</p>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right: 2×2 image grid fades on slide change */}
          <div className="grid h-[320px] grid-cols-2 grid-rows-2 gap-3 sm:h-[360px] md:h-[460px] md:gap-4">
            {[
              { idx: 0, shape: "rounded-full" },
              { idx: 1, shape: "rounded-2xl" },
              { idx: 2, shape: "rounded-xl" },
              { idx: 3, shape: "rounded-full" },
            ].map(({ idx: slotIdx, shape }) => (
              <div key={slotIdx} className={`relative overflow-hidden ${shape}`}>
                {testimonials.map((t, ti) => (
                  <Image
                    key={ti}
                    src={t.imgs[slotIdx]}
                    alt={t.name}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                    style={{ opacity: ti === activeTestimonial ? 1 : 0 }}
                    unoptimized
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          GEO FAQs
      ══════════════════════════════════════ */}
      <FAQSection />

      <Contact />
    </div>
  );
}