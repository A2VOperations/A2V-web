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

/* ── Reusable outlined-circle nav button pair ── */
function NavButtons({ onPrev, onNext, dark = false }) {
  const base =
    "flex h-11 w-11 items-center justify-center rounded-full border-2 text-lg font-medium transition-all duration-200 select-none";
  const light =
    "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white";
  const darkStyle =
    "border-white text-white hover:bg-white hover:text-orange-500";
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
}

/* ── WhatsApp icon ── */
function WaIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378l-.361.214-3.741-.982.998 3.645-.235.364a9.864 9.864 0 1.378 15.88c.341.066.678.1.01 3.766l3.841-.999-.363-.239a9.874 9.874 0 00-1.51-5.026zM11.25 5a6.75 6.75 0 110 13.5A6.75 6.75 0 0111.25 5z" />
    </svg>
  );
}

export default function Home() {
  const popularRef     = useRef(null);
  const heroSvcRef     = useRef(null);
  const testimonialRef = useRef(null);

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeGrowthPanel, setActiveGrowthPanel] = useState("mission");

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
      gradient: "from-orange-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
      wa: "Hi, I'm interested in your Next.js Web Development service at A2V.",
    },
    {
      num: "02", tag: "SEO & Growth", title: "Technical & Local SEO Optimization",
      desc: "Dominate search rankings with AI-powered technical audits, schema markup, Core Web Vitals optimization, and local SEO strategies tailored for Indian markets.",
      gradient: "from-blue-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803M15.803 15.803L21 21M10.5 7.5v6m3-3h-6" /></svg>,
      wa: "Hi, I'm interested in your Technical & Local SEO Optimization service at A2V.",
    },
    {
      num: "03", tag: "AI Creative", title: "AI Motion Graphics",
      desc: "Hyper-realistic animations and cinematic motion graphics powered by AI — from brand reveals and product demos to social reels that stop the scroll.",
      gradient: "from-purple-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
      wa: "Hi, I'm interested in your AI Motion Graphics service at A2V.",
    },
    {
      num: "04", tag: "Graphic Design", title: "Infographic Designing",
      desc: "Transform complex data, reports, and ideas into stunning, shareable infographics that educate your audience and drive engagement across all platforms.",
      gradient: "from-green-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" /></svg>,
      wa: "Hi, I'm interested in your Infographic Designing service at A2V.",
    },
    {
      num: "05", tag: "Digital Marketing", title: "Influencer Marketing",
      desc: "Connect your brand with the right voices — from micro-influencers to industry leaders — through data-driven campaigns that build trust and generate real ROI.",
      gradient: "from-pink-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
      wa: "Hi, I'm interested in your Influencer Marketing service at A2V.",
    },
    {
      num: "06", tag: "Web Development", title: "CMS Development",
      desc: "CMS development is the process of creating a Content Management System so users can manage website content without any coding knowledge.",
      gradient: "from-orange-500/10 to-transparent",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
      wa: "Hi, I'm interested in your CMS Development service at A2V.",
    },
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
              onPrev={() => popularRef.current?.slidePrev()}
              onNext={() => popularRef.current?.slideNext()}
            />
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(s) => (popularRef.current = s)}
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
          HERO SERVICES — nav buttons top-right
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
                Our Hero <span className="font-light text-black">Services</span>
              </h2>
            </div>
            <div className="flex flex-col items-start sm:items-end gap-3">
              <p className="max-w-md text-base leading-7 text-gray-600">
                Precision-engineered digital services that combine cutting-edge technology with creative excellence.
              </p>
              <NavButtons
                onPrev={() => heroSvcRef.current?.slidePrev()}
                onNext={() => heroSvcRef.current?.slideNext()}
              />
            </div>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={(s) => (heroSvcRef.current = s)}
            breakpoints={{
              640:  { slidesPerView: 1 },
              768:  { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {heroServices.map((s) => (
              <SwiperSlide key={s.num} className="h-auto">
                <div
                  onClick={() =>
                    window.open(
                      `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent(s.wa)}`,
                      "_blank"
                    )
                  }
                  className={`group relative flex flex-col gap-6 border border-black/12 bg-gradient-to-br ${s.gradient} p-8 cursor-pointer transition-all duration-300 hover:border-orange-500/50 hover:shadow-lg h-full min-h-[420px]`}
                >
                  <span className="absolute top-6 right-8 text-5xl font-black text-black/5 group-hover:text-orange-500/10 transition-colors select-none">
                    {s.num}
                  </span>
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl border border-black/10 text-orange-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">
                    {s.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-orange-500">{s.tag}</span>
                  <h3 className="text-2xl font-bold text-black leading-snug group-hover:text-orange-500 transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm leading-7 text-gray-600 flex-1">{s.desc}</p>
                  <div className="flex items-center gap-3 text-orange-500 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    <WaIcon />
                    <span>Contact via WhatsApp</span>
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
              onPrev={() => testimonialRef.current?.slidePrev()}
              onNext={() => testimonialRef.current?.slideNext()}
            />

            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              loop
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              onSwiper={(s) => (testimonialRef.current = s)}
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