"use client";

import Image from "next/image";
import BackgroundCircle from "../backgroundCircle";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SoftwareDev from "./home/softwareDev/page";
import InnovateSoft from "./home/InnovateSoft/page";
import PremierTech from "./home/premierTech/page";
import ExploreOur from "./home/exploreOur/page";
import DiscussStart from "./home/discussStart/page";
import Contact from "./home/contact/page";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { siteConfig } from "../config";
import ClientLogos from "../components/ClientLogos";

/* ── WhatsApp icon ── */
function WaIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 1.378 15.88c.341.066.678.1.01 3.766l3.841-.999-.363-.239a9.874 9.874 0 00-1.51-5.026zM11.25 5a6.75 6.75 0 110 13.5A6.75 6.75 0 0111.25 5z" />
    </svg>
  );
}

export default function Home() {
  const popularSwiperRef     = useRef(null);
  const heroSvcSwiperRef     = useRef(null);
  const testimonialSwiperRef = useRef(null);
  const servicesSwiperRef    = useRef(null);
  const productsSwiperRef    = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGrowthPanel, setActiveGrowthPanel] = useState("mission");

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

  /* ── DATA ── */
  const growthPanels = [
    {
      id: "mission",
      title: "Learn Our Company Mission",
      description: "Our mission is to revolutionize the digital landscape with AI-perfected innovation, delivering innovative software solutions to empower businesses to achieve their full potential.",
      points: ["Premier Tech Innovations", "Nexus Tech Systems"],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "vision",
      title: "Our Company Vision",
      description: "We build future-ready, AI-driven platforms and product teams that turn ambitious ideas into measurable growth for modern businesses.",
      points: ["Long-term digital partnerships", "Scalable engineering culture"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "philosophy",
      title: "Our Philosophy",
      description: "Clear strategy, practical execution, and user-focused design guide every decision we make from planning through launch.",
      points: ["Human-centered product thinking", "Lean, high-impact delivery"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "strategy",
      title: "Our Strategy",
      description: "We combine modern technology, sharp product insight, and collaborative delivery to help teams move faster with confidence.",
      points: ["Roadmaps tied to outcomes", "Reliable delivery systems"],
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const popularServices = [
    {
      title: "Brand and Identity",
      description: "We create distinctive brand identities that resonate with your audience and build lasting brand equity through strategic design.",
      image: "/images/brand-service.png",
      accent: "text-[#ff4d00]",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <rect x="11" y="17" width="34" height="26" rx="3" className="fill-none stroke-current" strokeWidth="2" />
          <path d="M22 50c5-2 15-2 20 0M23 31l-4 4 4 4M33 39l4-8M41 31l4 4-4 4" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="46" cy="22" r="9" className="fill-none stroke-current" strokeWidth="2" />
          <path d="M46 17v10M41 22h10" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      title: "Custom Website Development",
      description: "High-performance, scalable web solutions built with cutting-edge technologies to drive your digital transformation and business growth.",
      image: "/home/a2vgroups_web.jpg",
      accent: "text-[#ff4d00]",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <circle cx="32" cy="30" r="10" className="fill-none stroke-current" strokeWidth="2" />
          <path d="M32 12v8M32 40v12M14 30h8M42 30h8M20 18l6 6M38 36l6 6M44 18l-6 6M26 36l-6 6" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" />
          <circle cx="32" cy="7" r="4" className="fill-none stroke-current" strokeWidth="2" />
          <circle cx="32" cy="55" r="4" className="fill-none stroke-current" strokeWidth="2" />
          <circle cx="9" cy="30" r="4" className="fill-none stroke-current" strokeWidth="2" />
          <circle cx="55" cy="30" r="4" className="fill-none stroke-current" strokeWidth="2" />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description: "Maximize your online visibility and drive sustainable organic growth with our advanced search engine optimization strategies.",
      image: "/images/seo-service.png",
      accent: "text-[#ff4d00]",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <path d="M24 16l8-4 8 4v9l-8 4-8-4zM24 16l8 4 8-4M32 20v9" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="32" cy="28" r="18" className="fill-none stroke-current" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M17 44l-5 5M47 44l5 5M18 13l-5-5M46 13l5-5" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" />
          <circle cx="49" cy="42" r="6" className="fill-none stroke-current" strokeWidth="2" />
          <path d="M49 38v8M45 42h8" className="fill-none stroke-current" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  const heroServices = [
    {
      num: "01", tag: "Web Development", title: "Next.js Web Development",
      desc: "Blazing-fast, SEO-ready web applications built with Next.js — the industry standard for scalable React projects, PWAs, and e-commerce platforms.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Next.js Web Development service at A2V.",
    },
    {
      num: "02", tag: "SEO & Growth", title: "Technical & Local SEO Optimization",
      desc: "Dominate search rankings with AI-powered technical audits, schema markup, Core Web Vitals optimization, and local SEO strategies tailored for Indian markets.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Technical & Local SEO Optimization service at A2V.",
    },
    {
      num: "03", tag: "AI Creative", title: "AI Motion Graphics",
      desc: "Hyper-realistic animations and cinematic motion graphics powered by AI — from brand reveals and product demos to social reels that stop the scroll.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your AI Motion Graphics service at A2V.",
    },
    {
      num: "04", tag: "Graphic Design", title: "Infographic Designing",
      desc: "Transform complex data, reports, and ideas into stunning, shareable infographics that educate your audience and drive engagement across all platforms.",
      image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Infographic Designing service at A2V.",
    },
    {
      num: "05", tag: "Digital Marketing", title: "Influencer Marketing",
      desc: "Connect your brand with the right voices — from micro-influencers to industry leaders — through data-driven campaigns that build trust and generate real ROI.",
      image: "https://images.unsplash.com/photo-1628157588553-5eeea00af15c?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Influencer Marketing service at A2V.",
    },
    {
      num: "06", tag: "Web Development", title: "CMS Development",
      desc: "CMS development is the process of creating a Content Management System so users can manage website content without any coding knowledge.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your CMS Development service at A2V.",
    },
  ];

  const mainServices = [
    {
      title: "Custom Web Solutions",
      tag: "Web Development",
      desc: "End-to-end web development using modern stacks like Next.js, React, and Node.js for high-performance applications.",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Custom Web Solutions at A2V."
    },
    {
      title: "Digital Marketing",
      tag: "Growth",
      desc: "Data-driven marketing strategies including SEO, SEM, and Social Media to maximize your ROI and brand reach.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Digital Marketing services at A2V."
    },
    {
      title: "Graphic Designing",
      tag: "Creative",
      desc: "Stunning visual identities, brand guidelines, and marketing collaterals that make your brand stand out.",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Graphic Designing services at A2V."
    },
    {
      title: "UI/UX Experience",
      tag: "Design",
      desc: "User-centric design processes focusing on usability, accessibility, and delightful user interactions.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your UI/UX Experience services at A2V."
    },
    {
      title: "SEO Optimization",
      tag: "Search",
      desc: "Advanced search engine optimization to improve organic visibility and drive high-quality traffic.",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your SEO Optimization services at A2V."
    },
    {
      title: "Social Media Marketing",
      tag: "Social",
      desc: "Engaging social media campaigns that build community and drive brand loyalty across platforms.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Social Media Marketing at A2V."
    },
    {
      title: "Brand Strategy",
      tag: "Identity",
      desc: "Developing long-term brand equity with strategic positioning and distinctive identity design.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Brand Strategy services at A2V."
    },
    {
      title: "Content Marketing",
      tag: "Writing",
      desc: "Compelling storytelling and content creation that educates, informs, and converts your audience.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your Content Marketing services at A2V."
    },
    {
      title: "App Development",
      tag: "Mobile",
      desc: "Custom mobile applications for iOS and Android, built with focus on performance and native experience.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
      wa: "Hi, I'm interested in your App Development services at A2V."
    }
  ];

  const heroProducts = [
  {
    title: "Custom Web Development",
    desc: "Modern, fast, and fully responsive websites tailored to your business goals using the latest technologies.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your Custom Web Development service."
  },
  {
    title: "Brand & Identity",
    desc: "Build a powerful and memorable brand identity with strategic visuals, messaging, and creative direction.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your Brand & Identity service."
  },
  {
    title: "SEO Optimization",
    desc: "Improve your search engine rankings, website visibility, and organic traffic with advanced SEO strategies.",
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your SEO Optimization service."
  },
  {
    title: "Logo Designing",
    desc: "Creative and professional logo designs crafted to represent your brand with uniqueness and impact.",
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your Logo Designing service."
  },
  {
    title: "Infographics Designing",
    desc: "Engaging infographic designs that simplify complex information and boost audience engagement.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your Infographics Designing service."
  },
  {
    title: "CRM Development",
    desc: "Custom CRM solutions to manage leads, automate workflows, and improve customer relationships efficiently.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your CRM Development service."
  },
  {
    title: "Social Media Marketing",
    desc: "Grow your online presence with targeted social media campaigns, content strategies, and audience engagement.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=1000&auto=format&fit=crop",
    wa: "Hi, I'm interested in your Social Media Marketing service."
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
      name: "Priya Sharma", role: "CEO, Greenleaf Solutions",
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
    // {
    //   text: "A2V's AI automation suite saved our operations team hundreds of hours monthly. Their team understood our workflow deeply and delivered a custom solution that integrates perfectly with our systems.",
    //   name: "Deepa Nair", role: "COO, Reddy Enterprises",
    //   imgs: [
    //     "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    //     "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop&crop=face",
    //     "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=400&fit=crop&crop=face",
    //     "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=300&fit=crop&crop=face",
    //   ],
    // },
  ];

  return (
    <div className="font-family relative min-h-screen overflow-hidden bg-white">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f5f5f5]/55 px-4 py-16 sm:py-20 md:min-h-[90vh] md:py-24">
        <BackgroundCircle />
        <BackgroundCircle
          position={{ top: "80%", left: "-200px", translateY: "-50%" }}
          size={{ outer: "600px", inner: "400px" }}
        />
        <div className="z-10 mx-auto w-full max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-10">
              <div className="md:col-span-2">
                <p className="mb-4 text-base font-bold text-orange-500 sm:text-lg">
                  Welcome to Tekko AI-Perfected Software
                </p>
                <h1 className="text-4xl font-bold leading-tight text-black sm:text-6xl lg:text-7xl">
                  NextGen AI-Powered Innovators
                </h1>
                <h2 className="mt-3 text-2xl font-medium leading-tight text-black sm:text-5xl lg:text-6xl">
                  and{" "}
                  <span className="inline-block bg-orange-500 px-3 py-1 text-white">DIGITAL SOFT</span>{" "}
                  Solutions
                </h2>
              </div>
              <div className="flex flex-col justify-center">
                <p className="border-l-4 border-orange-500 pl-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  We specialize in delivering comprehensive software solutions tailored to meet the unique
                  needs of businesses across various industries, perfected with AI technology.
                </p>
                <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-300 pt-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 md:text-5xl">5k+</h3>
                    <p className="mt-1 text-sm text-gray-500">Happy Clients</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 md:text-5xl">9+</h3>
                    <p className="mt-1 text-sm text-gray-500">Years Experience</p>
                  </div>
                </div>
              </div>
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="/home/a2vgroups_innovative.jpg"
                  alt="Innovation Team" fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
            </div>
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <ContactForm source="hero_section_v2" />
            </div>
          </div>
        </div>
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
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
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
        <div className="mx-auto grid max-w-[1440px] gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
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
              <p className="text-sm font-semibold text-orange-400 md:text-base">Our Popular Services</p>
              <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold tracking-tight">
                We Run All kinds Of IT Services
                <span className="mt-2 block font-light text-black">that vow Your Success</span>
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
            loop={popularServices.length > 1}
            grabCursor={true}
            touchEventsTarget="container"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(s) => { popularSwiperRef.current = s; }}
            breakpoints={{
              768:  { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {popularServices.map((service) => (
              <SwiperSlide key={service.title} className="h-auto">
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
            grabCursor={true}
            touchEventsTarget="container"
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(s) => { servicesSwiperRef.current = s; }}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
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
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
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
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 md:grid-cols-2">

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
                    <p className="mt-1 text-sm font-medium text-orange-500">{t.role}</p>
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

      <Contact />
    </div>
  );
}